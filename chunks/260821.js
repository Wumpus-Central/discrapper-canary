i.d(t, { $Z: () => el, $l: () => ea, IN: () => er, qT: () => es });
var n = i(627968),
    l = i(64700),
    a = i(503698),
    r = i.n(a),
    o = i(284009),
    s = i.n(o),
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
    I = i(572680),
    x = i(508675),
    N = i(770335),
    v = i(891734),
    R = i(624793),
    j = i(731383),
    S = i(202384),
    b = i(698405),
    C = i(254075),
    y = i(465794),
    _ = i(32605),
    O = i(649963),
    M = i(815807),
    L = i(112753),
    P = i(253932),
    U = i(734057),
    w = i(71393),
    G = i(956703),
    k = i(967198),
    V = i(287809),
    D = i(531685),
    B = i(954571),
    H = i(927578),
    $ = i(900210),
    z = i(505527),
    W = i(450707),
    X = i(767143),
    F = i(652176),
    K = i(802116),
    J = i(211180),
    Z = i(803203),
    Q = i(652215),
    q = i(788868),
    Y = i(985018),
    ee = i(767419),
    et = i(233080),
    ei = i(710504),
    en = i(494090);
let el = 12;
function ea(e, t, i) {
    (0, p.qfG)((e) => (0, n.jsx)(L.default, { ...e, message: t, selectedReaction: i }));
}
function er(e, t, i) {
    return (i === z.v.BURST && t) || (i === z.v.NORMAL && e);
}
class eo extends l.PureComponent {
    isReactionEventActive = !1;
    isKeyboardNavigation = !1;
    scale = new d.A.Value(1);
    opacity = new d.A.Value(1);
    timeout = new m.Ep();
    hideTimeout = new m.Ep();
    ctaRef = l.createRef();
    type = z.v.NORMAL;
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
        D.A.isFocused()
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
                isLurking: r,
                isForumToolbar: o,
            } = this.props,
            s = U.A.getChannel(t.getChannelId());
        if (r) return void this.ctaRef?.current?.focus();
        let u = t.getChannelId(),
            d = o ? O.qN.FORUM_TOOLBAR : O.qN.MESSAGE_INLINE_BUTTON;
        l && !this.userCanBurstReact()
            ? (0, _.z)({
                  analytics: {
                      type: q.e.BURST_REACTION_UPSELL,
                      page: s?.getGuildId() != null ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                      section: null != s ? (0, M.sn)(s) : void 0,
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
                autoUnfurlReactionTooltip: r,
            } = this.props,
            o = n === z.v.BURST;
        o &&
            !this.isReactionEventActive &&
            !l &&
            a &&
            (0, O.on)({ channelId: i.getChannelId(), messageId: i.id, emoji: t, key: $.W.HOVER }),
            (this.isReactionEventActive = !0),
            (this.isKeyboardNavigation = "focus" === e.type),
            this.timeout.start(o ? 750 : r ? 200 : 500, this.showTooltip, !1);
    };
    handleEnterTooltip = () => {
        (this.isReactionEventActive = !0), this.handleShowTooltip();
    };
    handleShowTooltip = () => {
        this.hideTimeout.stop(),
            this.isReactionEventActive && (this.updateTooltipText(), G.A.addChangeListener(this.updateTooltipText));
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
            G.A.removeChangeListener(this.updateTooltipText),
            this.hideTimeout.start(200, this.hideTooltip, !1);
    };
    hideTooltip = () => {
        this.setState({ shouldShowTooltip: !1 }),
            this.hasShownTooltip && B.default.track(Q.HAw.CLOSE_POPOUT, { nonce: this.nonce });
    };
    isMe = () => {
        let { me: e, me_burst: t, type: i } = this.props;
        return er(e, t, i);
    };
    updateTooltipText = () => {
        let { message: e, emoji: t, type: i } = this.props,
            n = (0, K.i)(e, t, i),
            l = this.isKeyboardNavigation ? n : (0, K.i)(e, t, i, Q.tEg);
        s()("string" == typeof n, "tooltipTextAria is not a string"),
            this.setState({ tooltipText: l, tooltipTextAria: n, shouldShowTooltip: null != l && "" !== l });
    };
    renderLurkerModeUpsellPopout = (e) => {
        let { closePopout: t } = e,
            { message: i, isLurking: l } = this.props,
            a = U.A.getChannel(i.getChannelId()),
            r = w.A.getGuild(a?.getGuildId());
        return l && null != r
            ? (0, n.jsx)(b.A, { ctaRef: this.ctaRef, type: b.w.REACTIONS, guild: r, closePopout: t })
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
            { tooltipText: o, tooltipTextAria: s } = this.state,
            u = (i) => {
                let n = U.A.getChannel(t.getChannelId());
                null == n || (this.handleLeave(), ea(n, t, { emoji: e, reactionType: a ? z.v.BURST : z.v.NORMAL }));
            },
            d = "string" == typeof o ? "" === o.trim() : null == o,
            c = () =>
                d || null == o || null == s
                    ? null
                    : (0, n.jsx)(p.Text, { variant: "text-sm/normal", className: en.Of, "aria-label": s, children: o }),
            h = () => {
                let e = V.default.getCurrentUser();
                return l
                    ? (0, n.jsxs)("div", {
                          className: r()(en.h7, en.j9),
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
                            className: r()(en.h7, en.j9, en.rL),
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
                              className: r()(en.h7, en.j9),
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
        return i === z.v.BURST
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
        null != n && (0, S.Ze)(n.id);
    };
    handleSetReactionRef = (e) => {
        this.setState({ reactionRef: e });
    };
    trackReactionTooltipViewed = () => {
        let { emoji: e, message: t, type: i } = this.props,
            n = V.default.getCurrentUser(),
            l = U.A.getChannel(t.getChannelId()),
            a = i === z.v.BURST,
            r = (0, H.TW)(n),
            o = a ? q.e.EMOJI_IN_BURST_REACTION_HOVER : q.e.EMOJI_IN_REACTION_HOVER;
        !a || this.userCanBurstReact() || r || (o = q.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
            T.Ay.trackWithMetadata(Q.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                type: o,
                expression_id: e.id,
                expression_name: e.name,
                is_animated: e.animated,
                is_custom: null != e.id,
                nonce: this.nonce,
            }),
            !a ||
                null == l ||
                r ||
                this.userCanBurstReact() ||
                B.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: q.e.BURST_REACTION_UPSELL,
                    location: {
                        page: l?.getGuildId() != null ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                        section: (0, M.sn)(l),
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
                isBurstReaction: o,
                hideCount: s,
                emoji: u,
                readOnly: h,
                isLurking: m,
                isPendingMember: A,
                className: T,
                useChatFontScaling: E,
                message: x,
                hideEmoji: N,
                animationStartPosition: v,
                emojiSize: R,
            } = this.props,
            { shouldShowTooltip: j, tooltipTextAria: S, reactionRef: b, tooltipPositionKey: y } = this.state,
            _ = E ? ei : et,
            O = { transform: [{ scale: this.scale }], opacity: this.opacity },
            L = o ? l : i;
        if (o && null != a) {
            let { accentColor: i, backgroundColor: n, opacity: l } = a,
                r = (0, c.xp)(n ?? "", l) ?? "";
            this.isMe() && (O.borderColor = n), (O.background = r), (e = i), (t = i);
        }
        let P = b?.getBoundingClientRect(),
            U = null != v && null != P,
            w = null == v;
        return (0, n.jsx)(p.YNO, {
            targetElementRef: { current: b },
            shouldShow: j,
            "aria-label": S ?? !1,
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
                        className: r()(_.reaction, T, {
                            [_.reactionMe]: this.isMe(),
                            [_.reactionReadOnly]: h && !m && !A,
                            [_.shakeReaction]: N && null == v,
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
                                    "aria-label": (0, M.mb)(this.isMe(), L, u, o),
                                    "aria-pressed": this.isMe(),
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: r()({ [_.burstGlow]: o }),
                                            style: { boxShadow: `0 0 16px ${t}` },
                                        }),
                                        (0, n.jsxs)("div", {
                                            children: [
                                                o
                                                    ? (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              U &&
                                                                  (0, n.jsx)(I.A, {
                                                                      messageId: x.id,
                                                                      emoji: u,
                                                                      startPosition: v,
                                                                      targetPosition: P,
                                                                  }),
                                                              w &&
                                                                  (0, n.jsx)(Z.A, {
                                                                      count: l,
                                                                      emoji: u,
                                                                      channelId: x.getChannelId(),
                                                                      messageId: x.id,
                                                                      useChatFontScaling: E,
                                                                      color: t,
                                                                      emojiSize: J.x.NORMAL,
                                                                  }),
                                                          ],
                                                      })
                                                    : null,
                                                (0, n.jsx)(g.A, {
                                                    className: r()({ [_.hideEmoji]: N }),
                                                    emojiId: u.id,
                                                    emojiName: u.name,
                                                    size: R,
                                                    animated: u.animated,
                                                }),
                                            ],
                                        }),
                                        s
                                            ? null
                                            : (0, n.jsx)(f.A, {
                                                  className: _.reactionCount,
                                                  value: L,
                                                  color: e,
                                                  digitWidth: el,
                                              }),
                                        (0, n.jsx)(C.A, { count: L, reactionRef: b }),
                                    ],
                                }),
                        }),
                    }),
                }),
        });
    }
}
let es = l.memo((e) => {
        let { type: t, burst_colors: i, message: l, emoji: a } = e,
            r = t === z.v.BURST,
            o = (0, v.g)(r && null != i ? i : []),
            s = (0, h.bG)([$.A], () => void 0 !== $.A.getEffectForEmojiId(l.getChannelId(), l.id, a)),
            u = (0, h.bG)([A.A], () => A.A.useReducedMotion),
            d = P.Sf.useSetting(),
            c = V.default.getCurrentUser(),
            m = (0, H.TW)(c),
            p = (0, h.bG)([$.A], () => $.A.getReactionPickerAnimation(l.id, a.name, a.id)),
            g = r && (s || null != p);
        return (0, n.jsx)(eo, {
            ...e,
            colors: o,
            isBurstReaction: r,
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
            popoutData: r,
            currentGuildId: o,
            nonce: s,
        } = e;
        (0, j.i)({ emojiId: t, currentGuildId: o, popoutData: r, emojiSourceGuildId: i?.id, nonce: s });
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
                                  isDisplayingJoinGuildButtonInPopout: r.type === W.u.JOIN_GUILD,
                              }),
                          }),
                          c &&
                              (0, n.jsx)(X.mG, {
                                  emojiId: t,
                                  expressionSourceGuild: i,
                                  hasJoinedEmojiSourceGuild: l,
                                  onClose: a,
                                  popoutData: r,
                                  isDisplayingButtonInTopSection: !1,
                              }),
                      ],
                  })
            : (0, n.jsx)(p.Text, { variant: "text-sm/normal", "aria-label": r.type, children: r.emojiDescription });
    },
    ed = (e) => {
        let t,
            { emojiId: i, refreshPositionKey: a, onClose: o, nonce: s } = e,
            { joinedEmojiSourceGuild: u } = (0, h.cf)([x.Ay, w.A], () => {
                let e = x.Ay.getCustomEmojiById(i);
                return { joinedEmojiSourceGuild: e?.type === N.i.GUILD ? w.A.getGuild(e?.guildId) : void 0 };
            }),
            [d, c] = l.useState(void 0),
            [m, g] = l.useState(void 0),
            [A, f] = l.useState(null),
            [T, E] = l.useState(!1),
            [I, v] = l.useState(!1),
            [j, S] = l.useState(!1),
            b = null != u,
            C = d?.isDiscoverable() ?? !1,
            y = k.A.getGuildId(),
            _ = null != y && (y === d?.id || y === u?.id),
            O = V.default.getCurrentUser(),
            M = (0, W.O)({
                sourceType: A,
                expressionSourceApplication: m ?? null,
                isPremium: H.Ay.isPremium(O),
                hasJoinedEmojiSourceGuild: b,
                isDiscoverable: C,
                emojiComesFromCurrentGuild: _,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1,
            });
        if (
            (l.useEffect(() => {
                !T ||
                    j ||
                    (async () => {
                        a(), v(!0);
                        let e = null != i ? await (0, R.g_)(i) : null;
                        if (null != e)
                            switch ((f(e.type), e.type)) {
                                case R.rV.APPLICATION:
                                    g(e.application);
                                    break;
                                case R.rV.GUILD:
                                    c(e.guild);
                            }
                        else c(null);
                        v(!1), S(!0), a();
                    })();
            }, [i, T, j, a]),
            b)
        )
            return null;
        let L = T && (void 0 !== d || void 0 !== m);
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
                                  className: r()(ee.Po, { [ee.Kk]: !T }),
                              }),
                          ],
                      })),
                I
                    ? (0, n.jsx)(F.Y0, { className: ee.eF })
                    : L &&
                      (0, n.jsx)(eu, {
                          emojiId: i,
                          expressionSourceGuild: d,
                          hasJoinedExpressionSourceGuild: b,
                          onClose: o,
                          popoutData: M,
                          currentGuildId: y,
                          nonce: s,
                      }),
            ],
        });
    };
