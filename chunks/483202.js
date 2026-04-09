i.d(t, { $Z: () => ea, $l: () => el, IN: () => eo, qT: () => es });
var n = i(627968),
    a = i(64700),
    l = i(503698),
    o = i.n(l),
    r = i(284009),
    s = i.n(r),
    c = i(835245),
    d = i(615300),
    u = i(317097),
    h = i(311907),
    m = i(451988),
    p = i(397927),
    g = i(565645),
    _ = i(775602),
    f = i(114166),
    A = i(58149),
    T = i(404374),
    b = i(572680),
    E = i(508675),
    x = i(770335),
    I = i(891734),
    N = i(624793),
    j = i(731383),
    R = i(202384),
    v = i(698405),
    C = i(254075),
    S = i(725807),
    y = i(32605),
    O = i(649963),
    M = i(815807),
    L = i(112753),
    P = i(253932),
    k = i(734057),
    w = i(71393),
    U = i(956703),
    G = i(967198),
    D = i(287809),
    B = i(531685),
    V = i(954571),
    H = i(927578),
    z = i(900210),
    $ = i(505527),
    W = i(450707),
    F = i(767143),
    X = i(652176),
    K = i(802116),
    J = i(211180),
    Q = i(803203),
    Z = i(652215),
    q = i(788868),
    Y = i(985018),
    ee = i(260268),
    et = i(486025),
    ei = i(108277),
    en = i(869381);
let ea = 12;
function el(e, t, i) {
    (0, p.qfG)((e) => (0, n.jsx)(L.default, { ...e, message: t, selectedReaction: i }));
}
function eo(e, t, i) {
    return (i === $.v.BURST && t) || (i === $.v.NORMAL && e);
}
class er extends a.PureComponent {
    isReactionEventActive = !1;
    isKeyboardNavigation = !1;
    scale = new d.A.Value(1);
    opacity = new d.A.Value(1);
    timeout = new m.Ep();
    hideTimeout = new m.Ep();
    ctaRef = a.createRef();
    type = $.v.NORMAL;
    colors = { backgroundColor: void 0, borderColor: void 0, textColor: void 0 };
    state = {
        shouldShowTooltip: !1,
        tooltipText: null,
        tooltipTextAria: null,
        reactionRef: null,
        tooltipPositionKey: void 0,
    };
    hasShownTooltip = !1;
    nonce = (0, c.A)();
    upsellPopoutTargetRef = a.createRef();
    static defaultProps = { emojiSizeTooltip: "jumbo" };
    componentWillAppear(e) {
        this.animateIn(e);
    }
    componentWillEnter(e) {
        this.animateIn(e);
    }
    componentWillUnmount() {
        this.hideTooltip();
    }
    animateIn(e) {
        let { autoUnfurlReactionTooltip: t } = this.props;
        B.A.isFocused()
            ? (this.scale.setValue(0),
              this.opacity.setValue(0),
              d.A.parallel([
                  d.A.timing(this.scale, {
                      toValue: 1,
                      duration: t ? 200 : 300,
                      easing: d.A.Easing.inOut(d.A.Easing.back()),
                  }),
                  d.A.timing(this.opacity, { toValue: 1, duration: t ? 200 : 300 }),
              ]).start(e))
            : (this.scale.setValue(1), this.opacity.setValue(1), e());
    }
    userCanBurstReact = () => this.props.userHasPremium;
    handleClick = (e) => {
        e.stopPropagation();
        let {
                message: t,
                emoji: i,
                readOnly: n,
                isBurstReaction: a,
                isPendingMember: l,
                isLurking: o,
                isForumToolbar: r,
            } = this.props,
            s = k.A.getChannel(t.getChannelId());
        if (o) return void this.ctaRef?.current?.focus();
        let c = t.getChannelId(),
            d = r ? O.qN.FORUM_TOOLBAR : O.qN.MESSAGE_INLINE_BUTTON;
        a && !this.userCanBurstReact()
            ? (0, y.z)({
                  analytics: {
                      type: q.e.BURST_REACTION_UPSELL,
                      page: s?.getGuildId() != null ? Z.liQ.GUILD_CHANNEL : Z.liQ.DM_CHANNEL,
                      section: null != s ? (0, M.sn)(s) : void 0,
                      object: Z.ZSU.EMOJI_REACTION_UPSELL,
                  },
              })
            : l
              ? this.handleShowVerificationGate()
              : n ||
                (this.isMe()
                    ? (0, O.et)({ channelId: c, messageId: t.id, emoji: i, location: d, options: { burst: a } })
                    : (0, O.BB)(c, t.id, i, d, { burst: a }));
    };
    handleEnter = (e) => {
        let {
                emoji: t,
                message: i,
                type: n,
                reduceMotion: a,
                animateEmoji: l,
                autoUnfurlReactionTooltip: o,
            } = this.props,
            r = n === $.v.BURST;
        r &&
            !this.isReactionEventActive &&
            !a &&
            l &&
            (0, O.on)({ channelId: i.getChannelId(), messageId: i.id, emoji: t, key: z.W.HOVER }),
            (this.isReactionEventActive = !0),
            (this.isKeyboardNavigation = "focus" === e.type),
            this.timeout.start(r ? 750 : o ? 200 : 500, this.showTooltip, !1);
    };
    handleEnterTooltip = () => {
        (this.isReactionEventActive = !0), this.handleShowTooltip();
    };
    handleShowTooltip = () => {
        this.hideTimeout.stop(),
            this.isReactionEventActive && (this.updateTooltipText(), U.A.addChangeListener(this.updateTooltipText));
    };
    showTooltip = () => {
        this.props.readOnly ||
            (this.handleShowTooltip(),
            this.isReactionEventActive && this.trackReactionTooltipViewed(),
            (this.hasShownTooltip = !0));
    };
    handleLeave = () => {
        (this.isReactionEventActive = !1),
            (this.isKeyboardNavigation = !1),
            this.timeout.stop(),
            U.A.removeChangeListener(this.updateTooltipText),
            this.hideTimeout.start(200, this.hideTooltip, !1);
    };
    hideTooltip = () => {
        this.setState({ shouldShowTooltip: !1 }),
            this.hasShownTooltip && V.default.track(Z.HAw.CLOSE_POPOUT, { nonce: this.nonce });
    };
    isMe = () => {
        let { me: e, me_burst: t, type: i } = this.props;
        return eo(e, t, i);
    };
    updateTooltipText = () => {
        let { message: e, emoji: t, type: i } = this.props,
            n = (0, K.i)(e, t, i),
            a = this.isKeyboardNavigation ? n : (0, K.i)(e, t, i, Z.tEg);
        s()("string" == typeof n, "tooltipTextAria is not a string"),
            this.setState({ tooltipText: a, tooltipTextAria: n, shouldShowTooltip: null != a && "" !== a });
    };
    renderLurkerModeUpsellPopout = (e) => {
        let { closePopout: t } = e,
            { message: i, isLurking: a } = this.props,
            l = k.A.getChannel(i.getChannelId()),
            o = w.A.getGuild(l?.getGuildId());
        return a && null != o
            ? (0, n.jsx)(v.A, { ctaRef: this.ctaRef, type: v.w.REACTIONS, guild: o, closePopout: t })
            : (0, n.jsx)(n.Fragment, {});
    };
    renderEmojiDetails = () => {
        let e = this.props.emoji;
        return (
            null != e.id &&
            (0, n.jsx)(ed, {
                emojiId: e.id,
                refreshPositionKey: this.refreshTooltipPositionKey,
                onClose: this.handleLeave,
                nonce: this.nonce,
            })
        );
    };
    renderTooltip = () => {
        let { emoji: e, message: t, type: i, me_burst: a, isBurstReaction: l = !1 } = this.props,
            { tooltipText: r, tooltipTextAria: s } = this.state,
            c = (i) => {
                let n = k.A.getChannel(t.getChannelId());
                null == n || (this.handleLeave(), el(n, t, { emoji: e, reactionType: l ? $.v.BURST : $.v.NORMAL }));
            },
            d = "string" == typeof r ? "" === r.trim() : null == r,
            u = () =>
                d || null == r || null == s
                    ? null
                    : (0, n.jsx)(p.Text, { variant: "text-sm/normal", className: en.Of, "aria-label": s, children: r }),
            h = () => {
                let e = D.default.getCurrentUser();
                return a
                    ? (0, n.jsxs)("div", {
                          className: o()(en.h7, en.j9),
                          children: [
                              (0, H.TW)(e) &&
                                  (0, n.jsx)(p.tvc, { size: "md", className: en.eH, color: T.k0.PREMIUM_TIER_2 }),
                              (0, n.jsx)(p.Text, {
                                  variant: "text-sm/normal",
                                  className: en.Of,
                                  "aria-label": "super reaction tooltip cta",
                                  children: Y.intl.string(Y.t.ZbNJXn),
                              }),
                          ],
                      })
                    : this.userCanBurstReact()
                      ? (0, n.jsxs)("div", {
                            className: o()(en.h7, en.j9, en.rL),
                            children: [
                                (0, n.jsx)(p.tvc, { size: "md", className: en.eH, color: T.k0.PREMIUM_TIER_2 }),
                                (0, n.jsx)(p.DUT, {
                                    onClick: this.handleClick,
                                    children: (0, n.jsx)(p.Text, {
                                        variant: "text-sm/normal",
                                        className: en.Of,
                                        "aria-label": "super reaction tooltip cta",
                                        children: Y.intl.string(Y.t.kVfuVu),
                                    }),
                                }),
                            ],
                        })
                      : this.userCanBurstReact() || this.isKeyboardNavigation
                        ? null
                        : (0, n.jsx)("div", {
                              className: o()(en.h7, en.j9),
                              children: (0, n.jsxs)("div", {
                                  children: [
                                      (0, n.jsx)(p.Text, {
                                          variant: "text-sm/normal",
                                          "aria-label": "super reaction tooltip upsell",
                                          children: Y.intl.string(Y.t.W1bMkq),
                                      }),
                                      (0, n.jsx)(S.A, {
                                          subscriptionTier: q.pe.TIER_2,
                                          textOptions: { textOverride: Y.intl.string(Y.t.mr4K7D) },
                                          className: en.Yq,
                                          onClick: (e) => e.stopPropagation(),
                                      }),
                                  ],
                              }),
                          });
            };
        return i === $.v.BURST
            ? (0, n.jsxs)("div", {
                  className: en.xQ,
                  onMouseEnter: this.handleEnterTooltip,
                  onMouseLeave: this.handleLeave,
                  children: [
                      (0, n.jsx)(p.DUT, {
                          className: en.fu,
                          onClick: c,
                          children: (0, n.jsxs)("div", {
                              className: en.Ok,
                              children: [
                                  (0, n.jsx)(g.A, {
                                      className: en.JS,
                                      emojiId: e.id,
                                      emojiName: e.name,
                                      animated: e.animated,
                                      size: this.props.emojiSizeTooltip,
                                  }),
                                  u(),
                              ],
                          }),
                      }),
                      h(),
                      this.renderEmojiDetails(),
                  ],
              })
            : (0, n.jsxs)("div", {
                  className: en.xQ,
                  onMouseEnter: this.handleEnterTooltip,
                  onMouseLeave: this.handleLeave,
                  children: [
                      (0, n.jsx)(p.DUT, {
                          onClick: c,
                          children: (0, n.jsxs)("div", {
                              className: en.xR,
                              children: [
                                  (0, n.jsx)(g.A, {
                                      className: en.JS,
                                      emojiId: e.id,
                                      emojiName: e.name,
                                      animated: e.animated,
                                      size: this.props.emojiSizeTooltip,
                                  }),
                                  u(),
                              ],
                          }),
                      }),
                      this.renderEmojiDetails(),
                  ],
              });
    };
    refreshTooltipPositionKey = () => {
        this.setState({ tooltipPositionKey: String(Date.now()) });
    };
    handleShowVerificationGate = () => {
        let { message: e, isPendingMember: t } = this.props;
        if (!t) return null;
        let i = k.A.getChannel(e.getChannelId()),
            n = w.A.getGuild(i?.getGuildId());
        null != n && (0, R.Ze)(n.id);
    };
    handleSetReactionRef = (e) => {
        this.setState({ reactionRef: e });
    };
    trackReactionTooltipViewed = () => {
        let { emoji: e, message: t, type: i } = this.props,
            n = D.default.getCurrentUser(),
            a = k.A.getChannel(t.getChannelId()),
            l = i === $.v.BURST,
            o = (0, H.TW)(n),
            r = l ? q.e.EMOJI_IN_BURST_REACTION_HOVER : q.e.EMOJI_IN_REACTION_HOVER;
        !l || this.userCanBurstReact() || o || (r = q.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
            A.Ay.trackWithMetadata(Z.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                type: r,
                expression_id: e.id,
                expression_name: e.name,
                is_animated: e.animated,
                is_custom: null != e.id,
                nonce: this.nonce,
            }),
            !l ||
                null == a ||
                o ||
                this.userCanBurstReact() ||
                V.default.track(Z.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: q.e.BURST_REACTION_UPSELL,
                    location: {
                        page: a?.getGuildId() != null ? Z.liQ.GUILD_CHANNEL : Z.liQ.DM_CHANNEL,
                        section: (0, M.sn)(a),
                        object: Z.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
                    },
                });
    };
    render() {
        let e,
            t,
            {
                count: i,
                burst_count: a,
                colors: l,
                isBurstReaction: r,
                hideCount: s,
                emoji: c,
                readOnly: h,
                isLurking: m,
                isPendingMember: _,
                className: A,
                useChatFontScaling: T,
                message: E,
                hideEmoji: x,
                animationStartPosition: I,
                emojiSize: N,
            } = this.props,
            { shouldShowTooltip: j, tooltipTextAria: R, reactionRef: v, tooltipPositionKey: S } = this.state,
            y = T ? ei : et,
            O = { transform: [{ scale: this.scale }], opacity: this.opacity },
            L = r ? a : i;
        if (r && null != l) {
            let { accentColor: i, backgroundColor: n, opacity: a } = l,
                o = (0, u.xp)(n ?? "", a) ?? "";
            this.isMe() && (O.borderColor = n), (O.background = o), (e = i), (t = i);
        }
        let P = v?.getBoundingClientRect(),
            k = null != I && null != P,
            w = null == I;
        return (0, n.jsx)(p.YNO, {
            targetElementRef: { current: v },
            shouldShow: j,
            "aria-label": R ?? !1,
            renderPopout: this.renderTooltip,
            nudgeAlignIntoViewport: !0,
            position: "top",
            align: "center",
            positionKey: S,
            children: () =>
                (0, n.jsx)("div", {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    ref: this.handleSetReactionRef,
                    children: (0, n.jsx)(d.A.div, {
                        className: o()(y.reaction, A, {
                            [y.reactionMe]: this.isMe(),
                            [y.reactionReadOnly]: h && !m && !_,
                            [y.shakeReaction]: x && null == I,
                        }),
                        style: O,
                        children: (0, n.jsx)(p.YNO, {
                            targetElementRef: this.upsellPopoutTargetRef,
                            renderPopout: this.renderLurkerModeUpsellPopout,
                            position: "top",
                            children: (i) =>
                                (0, n.jsxs)(p.DUT, {
                                    ...i,
                                    innerRef: this.upsellPopoutTargetRef,
                                    className: y.reactionInner,
                                    onClick: this.handleClick,
                                    "aria-disabled": h,
                                    "aria-label": (0, M.mb)(this.isMe(), L, c, r),
                                    "aria-pressed": this.isMe(),
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: o()({ [y.burstGlow]: r }),
                                            style: { boxShadow: `0 0 16px ${t}` },
                                        }),
                                        (0, n.jsxs)("div", {
                                            children: [
                                                r
                                                    ? (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              k &&
                                                                  (0, n.jsx)(b.A, {
                                                                      messageId: E.id,
                                                                      emoji: c,
                                                                      startPosition: I,
                                                                      targetPosition: P,
                                                                  }),
                                                              w &&
                                                                  (0, n.jsx)(Q.A, {
                                                                      count: a,
                                                                      emoji: c,
                                                                      channelId: E.getChannelId(),
                                                                      messageId: E.id,
                                                                      useChatFontScaling: T,
                                                                      color: t,
                                                                      emojiSize: J.x.NORMAL,
                                                                  }),
                                                          ],
                                                      })
                                                    : null,
                                                (0, n.jsx)(g.A, {
                                                    className: o()({ [y.hideEmoji]: x }),
                                                    emojiId: c.id,
                                                    emojiName: c.name,
                                                    size: N,
                                                    animated: c.animated,
                                                }),
                                            ],
                                        }),
                                        s
                                            ? null
                                            : (0, n.jsx)(f.A, {
                                                  className: y.reactionCount,
                                                  value: L,
                                                  color: e,
                                                  digitWidth: ea,
                                              }),
                                        (0, n.jsx)(C.A, { count: L, reactionRef: v }),
                                    ],
                                }),
                        }),
                    }),
                }),
        });
    }
}
let es = a.memo((e) => {
        let { type: t, burst_colors: i, message: a, emoji: l } = e,
            o = t === $.v.BURST,
            r = (0, I.g)(o && null != i ? i : []),
            s = (0, h.bG)([z.A], () => void 0 !== z.A.getEffectForEmojiId(a.getChannelId(), a.id, l)),
            c = (0, h.bG)([_.A], () => _.A.useReducedMotion),
            d = P.Sf.useSetting(),
            u = D.default.getCurrentUser(),
            m = (0, H.TW)(u),
            p = (0, h.bG)([z.A], () => z.A.getReactionPickerAnimation(a.id, l.name, l.id)),
            g = o && (s || null != p);
        return (0, n.jsx)(er, {
            ...e,
            colors: r,
            isBurstReaction: o,
            hideEmoji: g,
            userHasPremium: m,
            reduceMotion: c,
            animateEmoji: d,
            animationStartPosition: p,
        });
    }),
    ec = (e) => {
        let {
            emojiId: t,
            expressionSourceGuild: i,
            hasJoinedExpressionSourceGuild: a,
            onClose: l,
            popoutData: o,
            currentGuildId: r,
            nonce: s,
        } = e;
        (0, j.i)({ emojiId: t, currentGuildId: r, popoutData: o, emojiSourceGuildId: i?.id, nonce: s });
        let c = i?.isDiscoverable() ?? !1,
            d = null != i && c,
            u = (i?.emojis?.length ?? 0) > 1;
        return d
            ? null == i
                ? null
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("div", {
                              className: ee.h2,
                              children: (0, n.jsx)(F.G7, {
                                  expressionSourceGuild: i,
                                  hasJoinedExpressionSourceGuild: a,
                                  isDisplayingJoinGuildButtonInPopout: o.type === W.u.JOIN_GUILD,
                              }),
                          }),
                          u &&
                              (0, n.jsx)(F.mG, {
                                  emojiId: t,
                                  expressionSourceGuild: i,
                                  hasJoinedEmojiSourceGuild: a,
                                  onClose: l,
                                  popoutData: o,
                                  isDisplayingButtonInTopSection: !1,
                              }),
                      ],
                  })
            : (0, n.jsx)(p.Text, { variant: "text-sm/normal", "aria-label": o.type, children: o.emojiDescription });
    },
    ed = (e) => {
        let t,
            { emojiId: i, refreshPositionKey: l, onClose: r, nonce: s } = e,
            { joinedEmojiSourceGuild: c } = (0, h.cf)([E.Ay, w.A], () => {
                let e = E.Ay.getCustomEmojiById(i);
                return { joinedEmojiSourceGuild: e?.type === x.i.GUILD ? w.A.getGuild(e?.guildId) : void 0 };
            }),
            [d, u] = a.useState(void 0),
            [m, g] = a.useState(void 0),
            [_, f] = a.useState(null),
            [A, T] = a.useState(!1),
            [b, I] = a.useState(!1),
            [j, R] = a.useState(!1),
            v = null != c,
            C = d?.isDiscoverable() ?? !1,
            S = G.A.getGuildId(),
            y = null != S && (S === d?.id || S === c?.id),
            O = D.default.getCurrentUser(),
            M = (0, W.O)({
                sourceType: _,
                expressionSourceApplication: m ?? null,
                isPremium: H.Ay.isPremium(O),
                hasJoinedEmojiSourceGuild: v,
                isDiscoverable: C,
                emojiComesFromCurrentGuild: y,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1,
            });
        if (
            (a.useEffect(() => {
                !A ||
                    j ||
                    (async () => {
                        l(), I(!0);
                        let e = null != i ? await (0, N.g_)(i) : null;
                        if (null != e)
                            switch ((f(e.type), e.type)) {
                                case N.rV.APPLICATION:
                                    g(e.application);
                                    break;
                                case N.rV.GUILD:
                                    u(e.guild);
                            }
                        else u(null);
                        I(!1), R(!0), l();
                    })();
            }, [i, A, j, l]),
            v)
        )
            return null;
        let L = A && (void 0 !== d || void 0 !== m);
        return (0, n.jsxs)("div", {
            children: [
                L
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", { className: ee.Hw }),
                              null != M.emojiDescription &&
                                  M.type !== W.u.UNAVAILABLE &&
                                  (0, n.jsx)(p.Text, {
                                      variant: "text-sm/normal",
                                      "aria-label": M.type,
                                      children: M.emojiDescription,
                                  }),
                          ],
                      })
                    : ((t = Y.intl.string(Y.t["Igv+LS"])),
                      (0, n.jsxs)(p.DUT, {
                          onClick: () => {
                              T(!A);
                          },
                          className: ee.s4,
                          children: [
                              (0, n.jsx)(p.Text, {
                                  variant: "text-sm/normal",
                                  color: "none",
                                  "aria-label": t,
                                  children: t,
                              }),
                              (0, n.jsx)(p.abt, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: o()(ee.Po, { [ee.Kk]: !A }),
                              }),
                          ],
                      })),
                b
                    ? (0, n.jsx)(X.Y0, { className: ee.eF })
                    : L &&
                      (0, n.jsx)(ec, {
                          emojiId: i,
                          expressionSourceGuild: d,
                          hasJoinedExpressionSourceGuild: v,
                          onClose: r,
                          popoutData: M,
                          currentGuildId: S,
                          nonce: s,
                      }),
            ],
        });
    };
