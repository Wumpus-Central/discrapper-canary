i.d(t, { $Z: () => el, $l: () => ea, IN: () => es, qT: () => eo });
var n = i(627968),
    l = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(284009),
    o = i.n(r),
    u = i(835245),
    d = i(615300),
    c = i(317097),
    h = i(311907),
    m = i(451988),
    p = i(397927),
    g = i(565645),
    A = i(775602),
    f = i(114166),
    T = i(58149),
    E = i(404374),
    x = i(572680),
    N = i(508675),
    I = i(770335),
    v = i(891734),
    j = i(624793),
    R = i(731383),
    C = i(202384),
    S = i(698405),
    b = i(254075),
    y = i(725807),
    _ = i(32605),
    O = i(649963),
    L = i(815807),
    M = i(112753),
    P = i(253932),
    U = i(734057),
    w = i(71393),
    k = i(956703),
    G = i(967198),
    D = i(287809),
    V = i(531685),
    B = i(954571),
    H = i(927578),
    z = i(900210),
    $ = i(505527),
    W = i(450707),
    X = i(767143),
    F = i(652176),
    J = i(802116),
    K = i(211180),
    Z = i(803203),
    Q = i(652215),
    q = i(788868),
    Y = i(985018),
    ee = i(730873),
    et = i(767474),
    ei = i(449014),
    en = i(526e3);
let el = 12;
function ea(e, t, i) {
    (0, p.qfG)((e) => (0, n.jsx)(M.default, { ...e, message: t, selectedReaction: i }));
}
function es(e, t, i) {
    return (i === $.v.BURST && t) || (i === $.v.NORMAL && e);
}
class er extends l.PureComponent {
    isReactionEventActive = !1;
    isKeyboardNavigation = !1;
    scale = new d.A.Value(1);
    opacity = new d.A.Value(1);
    timeout = new m.Ep();
    hideTimeout = new m.Ep();
    ctaRef = l.createRef();
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
    nonce = (0, u.A)();
    upsellPopoutTargetRef = l.createRef();
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
        V.A.isFocused()
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
                isBurstReaction: l,
                isPendingMember: a,
                isLurking: s,
                isForumToolbar: r,
            } = this.props,
            o = U.A.getChannel(t.getChannelId());
        if (s) return void this.ctaRef?.current?.focus();
        let u = t.getChannelId(),
            d = r ? O.qN.FORUM_TOOLBAR : O.qN.MESSAGE_INLINE_BUTTON;
        l && !this.userCanBurstReact()
            ? (0, _.z)({
                  analytics: {
                      type: q.e.BURST_REACTION_UPSELL,
                      page: o?.getGuildId() != null ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                      section: null != o ? (0, L.sn)(o) : void 0,
                      object: Q.ZSU.EMOJI_REACTION_UPSELL,
                  },
              })
            : a
              ? this.handleShowVerificationGate()
              : n ||
                (this.isMe()
                    ? (0, O.et)({ channelId: u, messageId: t.id, emoji: i, location: d, options: { burst: l } })
                    : (0, O.BB)(u, t.id, i, d, { burst: l }));
    };
    handleEnter = (e) => {
        let {
                emoji: t,
                message: i,
                type: n,
                reduceMotion: l,
                animateEmoji: a,
                autoUnfurlReactionTooltip: s,
            } = this.props,
            r = n === $.v.BURST;
        r &&
            !this.isReactionEventActive &&
            !l &&
            a &&
            (0, O.on)({ channelId: i.getChannelId(), messageId: i.id, emoji: t, key: z.W.HOVER }),
            (this.isReactionEventActive = !0),
            (this.isKeyboardNavigation = "focus" === e.type),
            this.timeout.start(r ? 750 : s ? 200 : 500, this.showTooltip, !1);
    };
    handleEnterTooltip = () => {
        (this.isReactionEventActive = !0), this.handleShowTooltip();
    };
    handleShowTooltip = () => {
        this.hideTimeout.stop(),
            this.isReactionEventActive && (this.updateTooltipText(), k.A.addChangeListener(this.updateTooltipText));
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
            k.A.removeChangeListener(this.updateTooltipText),
            this.hideTimeout.start(200, this.hideTooltip, !1);
    };
    hideTooltip = () => {
        this.setState({ shouldShowTooltip: !1 }),
            this.hasShownTooltip && B.default.track(Q.HAw.CLOSE_POPOUT, { nonce: this.nonce });
    };
    isMe = () => {
        let { me: e, me_burst: t, type: i } = this.props;
        return es(e, t, i);
    };
    updateTooltipText = () => {
        let { message: e, emoji: t, type: i } = this.props,
            n = (0, J.i)(e, t, i),
            l = this.isKeyboardNavigation ? n : (0, J.i)(e, t, i, Q.tEg);
        o()("string" == typeof n, "tooltipTextAria is not a string"),
            this.setState({ tooltipText: l, tooltipTextAria: n, shouldShowTooltip: null != l && "" !== l });
    };
    renderLurkerModeUpsellPopout = (e) => {
        let { closePopout: t } = e,
            { message: i, isLurking: l } = this.props,
            a = U.A.getChannel(i.getChannelId()),
            s = w.A.getGuild(a?.getGuildId());
        return l && null != s
            ? (0, n.jsx)(S.A, { ctaRef: this.ctaRef, type: S.w.REACTIONS, guild: s, closePopout: t })
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
        let { emoji: e, message: t, type: i, me_burst: l, isBurstReaction: a = !1 } = this.props,
            { tooltipText: r, tooltipTextAria: o } = this.state,
            u = (i) => {
                let n = U.A.getChannel(t.getChannelId());
                null == n || (this.handleLeave(), ea(n, t, { emoji: e, reactionType: a ? $.v.BURST : $.v.NORMAL }));
            },
            d = "string" == typeof r ? "" === r.trim() : null == r,
            c = () =>
                d || null == r || null == o
                    ? null
                    : (0, n.jsx)(p.Text, { variant: "text-sm/normal", className: en.Of, "aria-label": o, children: r }),
            h = () => {
                let e = D.default.getCurrentUser();
                return l
                    ? (0, n.jsxs)("div", {
                          className: s()(en.h7, en.j9),
                          children: [
                              (0, H.TW)(e) &&
                                  (0, n.jsx)(p.tvc, { size: "md", className: en.eH, color: E.k0.PREMIUM_TIER_2 }),
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
                            className: s()(en.h7, en.j9, en.rL),
                            children: [
                                (0, n.jsx)(p.tvc, { size: "md", className: en.eH, color: E.k0.PREMIUM_TIER_2 }),
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
                              className: s()(en.h7, en.j9),
                              children: (0, n.jsxs)("div", {
                                  children: [
                                      (0, n.jsx)(p.Text, {
                                          variant: "text-sm/normal",
                                          "aria-label": "super reaction tooltip upsell",
                                          children: Y.intl.string(Y.t.W1bMkq),
                                      }),
                                      (0, n.jsx)(y.A, {
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
                          onClick: u,
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
                                  c(),
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
                          onClick: u,
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
                                  c(),
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
        let i = U.A.getChannel(e.getChannelId()),
            n = w.A.getGuild(i?.getGuildId());
        null != n && (0, C.Ze)(n.id);
    };
    handleSetReactionRef = (e) => {
        this.setState({ reactionRef: e });
    };
    trackReactionTooltipViewed = () => {
        let { emoji: e, message: t, type: i } = this.props,
            n = D.default.getCurrentUser(),
            l = U.A.getChannel(t.getChannelId()),
            a = i === $.v.BURST,
            s = (0, H.TW)(n),
            r = a ? q.e.EMOJI_IN_BURST_REACTION_HOVER : q.e.EMOJI_IN_REACTION_HOVER;
        !a || this.userCanBurstReact() || s || (r = q.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
            T.Ay.trackWithMetadata(Q.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                type: r,
                expression_id: e.id,
                expression_name: e.name,
                is_animated: e.animated,
                is_custom: null != e.id,
                nonce: this.nonce,
            }),
            !a ||
                null == l ||
                s ||
                this.userCanBurstReact() ||
                B.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: q.e.BURST_REACTION_UPSELL,
                    location: {
                        page: l?.getGuildId() != null ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                        section: (0, L.sn)(l),
                        object: Q.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
                    },
                });
    };
    render() {
        let e,
            t,
            {
                count: i,
                burst_count: l,
                colors: a,
                isBurstReaction: r,
                hideCount: o,
                emoji: u,
                readOnly: h,
                isLurking: m,
                isPendingMember: A,
                className: T,
                useChatFontScaling: E,
                message: N,
                hideEmoji: I,
                animationStartPosition: v,
                emojiSize: j,
            } = this.props,
            { shouldShowTooltip: R, tooltipTextAria: C, reactionRef: S, tooltipPositionKey: y } = this.state,
            _ = E ? ei : et,
            O = { transform: [{ scale: this.scale }], opacity: this.opacity },
            M = r ? l : i;
        if (r && null != a) {
            let { accentColor: i, backgroundColor: n, opacity: l } = a,
                s = (0, c.xp)(n ?? "", l) ?? "";
            this.isMe() && (O.borderColor = n), (O.background = s), (e = i), (t = i);
        }
        let P = S?.getBoundingClientRect(),
            U = null != v && null != P,
            w = null == v;
        return (0, n.jsx)(p.YNO, {
            targetElementRef: { current: S },
            shouldShow: R,
            "aria-label": C ?? !1,
            renderPopout: this.renderTooltip,
            nudgeAlignIntoViewport: !0,
            position: "top",
            align: "center",
            positionKey: y,
            children: () =>
                (0, n.jsx)("div", {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    ref: this.handleSetReactionRef,
                    children: (0, n.jsx)(d.A.div, {
                        className: s()(_.reaction, T, {
                            [_.reactionMe]: this.isMe(),
                            [_.reactionReadOnly]: h && !m && !A,
                            [_.shakeReaction]: I && null == v,
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
                                    className: _.reactionInner,
                                    onClick: this.handleClick,
                                    "aria-disabled": h,
                                    "aria-label": (0, L.mb)(this.isMe(), M, u, r),
                                    "aria-pressed": this.isMe(),
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: s()({ [_.burstGlow]: r }),
                                            style: { boxShadow: `0 0 16px ${t}` },
                                        }),
                                        (0, n.jsxs)("div", {
                                            children: [
                                                r
                                                    ? (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              U &&
                                                                  (0, n.jsx)(x.A, {
                                                                      messageId: N.id,
                                                                      emoji: u,
                                                                      startPosition: v,
                                                                      targetPosition: P,
                                                                  }),
                                                              w &&
                                                                  (0, n.jsx)(Z.A, {
                                                                      count: l,
                                                                      emoji: u,
                                                                      channelId: N.getChannelId(),
                                                                      messageId: N.id,
                                                                      useChatFontScaling: E,
                                                                      color: t,
                                                                      emojiSize: K.x.NORMAL,
                                                                  }),
                                                          ],
                                                      })
                                                    : null,
                                                (0, n.jsx)(g.A, {
                                                    className: s()({ [_.hideEmoji]: I }),
                                                    emojiId: u.id,
                                                    emojiName: u.name,
                                                    size: j,
                                                    animated: u.animated,
                                                }),
                                            ],
                                        }),
                                        o
                                            ? null
                                            : (0, n.jsx)(f.A, {
                                                  className: _.reactionCount,
                                                  value: M,
                                                  color: e,
                                                  digitWidth: el,
                                              }),
                                        (0, n.jsx)(b.A, { count: M, reactionRef: S }),
                                    ],
                                }),
                        }),
                    }),
                }),
        });
    }
}
let eo = l.memo((e) => {
        let { type: t, burst_colors: i, message: l, emoji: a } = e,
            s = t === $.v.BURST,
            r = (0, v.g)(s && null != i ? i : []),
            o = (0, h.bG)([z.A], () => void 0 !== z.A.getEffectForEmojiId(l.getChannelId(), l.id, a)),
            u = (0, h.bG)([A.A], () => A.A.useReducedMotion),
            d = P.Sf.useSetting(),
            c = D.default.getCurrentUser(),
            m = (0, H.TW)(c),
            p = (0, h.bG)([z.A], () => z.A.getReactionPickerAnimation(l.id, a.name, a.id)),
            g = s && (o || null != p);
        return (0, n.jsx)(er, {
            ...e,
            colors: r,
            isBurstReaction: s,
            hideEmoji: g,
            userHasPremium: m,
            reduceMotion: u,
            animateEmoji: d,
            animationStartPosition: p,
        });
    }),
    eu = (e) => {
        let {
            emojiId: t,
            expressionSourceGuild: i,
            hasJoinedExpressionSourceGuild: l,
            onClose: a,
            popoutData: s,
            currentGuildId: r,
            nonce: o,
        } = e;
        (0, R.i)({ emojiId: t, currentGuildId: r, popoutData: s, emojiSourceGuildId: i?.id, nonce: o });
        let u = i?.isDiscoverable() ?? !1,
            d = null != i && u,
            c = (i?.emojis?.length ?? 0) > 1;
        return d
            ? null == i
                ? null
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("div", {
                              className: ee.h2,
                              children: (0, n.jsx)(X.G7, {
                                  expressionSourceGuild: i,
                                  hasJoinedExpressionSourceGuild: l,
                                  isDisplayingJoinGuildButtonInPopout: s.type === W.u.JOIN_GUILD,
                              }),
                          }),
                          c &&
                              (0, n.jsx)(X.mG, {
                                  emojiId: t,
                                  expressionSourceGuild: i,
                                  hasJoinedEmojiSourceGuild: l,
                                  onClose: a,
                                  popoutData: s,
                                  isDisplayingButtonInTopSection: !1,
                              }),
                      ],
                  })
            : (0, n.jsx)(p.Text, { variant: "text-sm/normal", "aria-label": s.type, children: s.emojiDescription });
    },
    ed = (e) => {
        let t,
            { emojiId: i, refreshPositionKey: a, onClose: r, nonce: o } = e,
            { joinedEmojiSourceGuild: u } = (0, h.cf)([N.Ay, w.A], () => {
                let e = N.Ay.getCustomEmojiById(i);
                return { joinedEmojiSourceGuild: e?.type === I.i.GUILD ? w.A.getGuild(e?.guildId) : void 0 };
            }),
            [d, c] = l.useState(void 0),
            [m, g] = l.useState(void 0),
            [A, f] = l.useState(null),
            [T, E] = l.useState(!1),
            [x, v] = l.useState(!1),
            [R, C] = l.useState(!1),
            S = null != u,
            b = d?.isDiscoverable() ?? !1,
            y = G.A.getGuildId(),
            _ = null != y && (y === d?.id || y === u?.id),
            O = D.default.getCurrentUser(),
            L = (0, W.O)({
                sourceType: A,
                expressionSourceApplication: m ?? null,
                isPremium: H.Ay.isPremium(O),
                hasJoinedEmojiSourceGuild: S,
                isDiscoverable: b,
                emojiComesFromCurrentGuild: _,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1,
            });
        if (
            (l.useEffect(() => {
                !T ||
                    R ||
                    (async () => {
                        a(), v(!0);
                        let e = null != i ? await (0, j.g_)(i) : null;
                        if (null != e)
                            switch ((f(e.type), e.type)) {
                                case j.rV.APPLICATION:
                                    g(e.application);
                                    break;
                                case j.rV.GUILD:
                                    c(e.guild);
                            }
                        else c(null);
                        v(!1), C(!0), a();
                    })();
            }, [i, T, R, a]),
            S)
        )
            return null;
        let M = T && (void 0 !== d || void 0 !== m);
        return (0, n.jsxs)("div", {
            children: [
                M
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", { className: ee.Hw }),
                              null != L.emojiDescription &&
                                  L.type !== W.u.UNAVAILABLE &&
                                  (0, n.jsx)(p.Text, {
                                      variant: "text-sm/normal",
                                      "aria-label": L.type,
                                      children: L.emojiDescription,
                                  }),
                          ],
                      })
                    : ((t = Y.intl.string(Y.t["Igv+LS"])),
                      (0, n.jsxs)(p.DUT, {
                          onClick: () => {
                              E(!T);
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
                                  className: s()(ee.Po, { [ee.Kk]: !T }),
                              }),
                          ],
                      })),
                x
                    ? (0, n.jsx)(F.Y0, { className: ee.eF })
                    : M &&
                      (0, n.jsx)(eu, {
                          emojiId: i,
                          expressionSourceGuild: d,
                          hasJoinedExpressionSourceGuild: S,
                          onClose: r,
                          popoutData: L,
                          currentGuildId: y,
                          nonce: o,
                      }),
            ],
        });
    };
