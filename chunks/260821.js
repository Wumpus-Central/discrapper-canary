i.d(t, { $Z: () => eu, $l: () => ed, IN: () => ec, qT: () => em });
var n = i(627968),
    l = i(64700),
    a = i(503698),
    r = i.n(a),
    s = i(284009),
    o = i.n(s),
    u = i(835245),
    d = i(615300),
    c = i(317097),
    h = i(311907),
    m = i(451988),
    p = i(192308),
    g = i(834730),
    A = i(403581),
    f = i(939249),
    E = i(265872),
    T = i(847374),
    I = i(565645),
    N = i(775602),
    x = i(114166),
    v = i(58149),
    j = i(404374),
    R = i(572680),
    S = i(508675),
    C = i(770335),
    b = i(891734),
    y = i(624793),
    _ = i(731383),
    O = i(202384),
    M = i(698405),
    L = i(254075),
    P = i(725807),
    w = i(32605),
    U = i(649963),
    k = i(815807),
    G = i(112753),
    D = i(253932),
    V = i(734057),
    B = i(71393),
    H = i(956703),
    z = i(967198),
    $ = i(287809),
    W = i(531685),
    X = i(954571),
    F = i(927578),
    K = i(900210),
    J = i(505527),
    Z = i(450707),
    Q = i(767143),
    q = i(652176),
    Y = i(802116),
    ee = i(211180),
    et = i(803203),
    ei = i(652215),
    en = i(788868),
    el = i(985018),
    ea = i(719932),
    er = i(10585),
    es = i(471717),
    eo = i(703061);
let eu = 12;
function ed(e, t, i) {
    (0, p.openModal)((e) => (0, n.jsx)(G.default, { ...e, message: t, selectedReaction: i }));
}
function ec(e, t, i) {
    return (i === J.v.BURST && t) || (i === J.v.NORMAL && e);
}
class eh extends l.PureComponent {
    isReactionEventActive = !1;
    isKeyboardNavigation = !1;
    scale = new d.A.Value(1);
    opacity = new d.A.Value(1);
    timeout = new m.Ep();
    hideTimeout = new m.Ep();
    ctaRef = l.createRef();
    type = J.v.NORMAL;
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
        W.A.isFocused()
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
                isForumToolbar: s,
            } = this.props,
            o = V.A.getChannel(t.getChannelId());
        if (r) return void this.ctaRef?.current?.focus();
        let u = t.getChannelId(),
            d = s ? U.qN.FORUM_TOOLBAR : U.qN.MESSAGE_INLINE_BUTTON;
        l && !this.userCanBurstReact()
            ? (0, w.z)({
                  analytics: {
                      type: en.e.BURST_REACTION_UPSELL,
                      page: o?.getGuildId() != null ? ei.liQ.GUILD_CHANNEL : ei.liQ.DM_CHANNEL,
                      section: null != o ? (0, k.sn)(o) : void 0,
                      object: ei.ZSU.EMOJI_REACTION_UPSELL,
                  },
              })
            : a
              ? this.handleShowVerificationGate()
              : n ||
                (this.isMe()
                    ? (0, U.et)({ channelId: u, messageId: t.id, emoji: i, location: d, options: { burst: l } })
                    : (0, U.BB)(u, t.id, i, d, { burst: l }));
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
            s = n === J.v.BURST;
        s &&
            !this.isReactionEventActive &&
            !l &&
            a &&
            (0, U.on)({ channelId: i.getChannelId(), messageId: i.id, emoji: t, key: K.W.HOVER }),
            (this.isReactionEventActive = !0),
            (this.isKeyboardNavigation = "focus" === e.type),
            this.timeout.start(s ? 750 : r ? 200 : 500, this.showTooltip, !1);
    };
    handleEnterTooltip = () => {
        (this.isReactionEventActive = !0), this.handleShowTooltip();
    };
    handleShowTooltip = () => {
        this.hideTimeout.stop(),
            this.isReactionEventActive && (this.updateTooltipText(), H.A.addChangeListener(this.updateTooltipText));
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
            H.A.removeChangeListener(this.updateTooltipText),
            this.hideTimeout.start(200, this.hideTooltip, !1);
    };
    hideTooltip = () => {
        this.setState({ shouldShowTooltip: !1 }),
            this.hasShownTooltip && X.default.track(ei.HAw.CLOSE_POPOUT, { nonce: this.nonce });
    };
    isMe = () => {
        let { me: e, me_burst: t, type: i } = this.props;
        return ec(e, t, i);
    };
    updateTooltipText = () => {
        let { message: e, emoji: t, type: i } = this.props,
            n = (0, Y.i)(e, t, i),
            l = this.isKeyboardNavigation ? n : (0, Y.i)(e, t, i, ei.tEg);
        o()("string" == typeof n, "tooltipTextAria is not a string"),
            this.setState({ tooltipText: l, tooltipTextAria: n, shouldShowTooltip: null != l && "" !== l });
    };
    renderLurkerModeUpsellPopout = (e) => {
        let { closePopout: t } = e,
            { message: i, isLurking: l } = this.props,
            a = V.A.getChannel(i.getChannelId()),
            r = B.A.getGuild(a?.getGuildId());
        return l && null != r
            ? (0, n.jsx)(M.A, { ctaRef: this.ctaRef, type: M.w.REACTIONS, guild: r, closePopout: t })
            : (0, n.jsx)(n.Fragment, {});
    };
    renderEmojiDetails = () => {
        let e = this.props.emoji;
        return (
            null != e.id &&
            (0, n.jsx)(eg, {
                emojiId: e.id,
                refreshPositionKey: this.refreshTooltipPositionKey,
                onClose: this.handleLeave,
                nonce: this.nonce,
            })
        );
    };
    renderTooltip = () => {
        let { emoji: e, message: t, type: i, me_burst: l, isBurstReaction: a = !1 } = this.props,
            { tooltipText: s, tooltipTextAria: o } = this.state,
            u = (i) => {
                let n = V.A.getChannel(t.getChannelId());
                null == n || (this.handleLeave(), ed(n, t, { emoji: e, reactionType: a ? J.v.BURST : J.v.NORMAL }));
            },
            d = "string" == typeof s ? "" === s.trim() : null == s,
            c = () =>
                d || null == s || null == o
                    ? null
                    : (0, n.jsx)(g.E, { variant: "text-sm/normal", className: eo.Of, "aria-label": o, children: s }),
            h = () => {
                let e = $.default.getCurrentUser();
                return l
                    ? (0, n.jsxs)("div", {
                          className: r()(eo.h7, eo.j9),
                          children: [
                              (0, F.TW)(e) &&
                                  (0, n.jsx)(A.t, { size: "md", className: eo.eH, color: j.k0.PREMIUM_TIER_2 }),
                              (0, n.jsx)(g.E, {
                                  variant: "text-sm/normal",
                                  className: eo.Of,
                                  "aria-label": "super reaction tooltip cta",
                                  children: el.intl.string(el.t.ZbNJXn),
                              }),
                          ],
                      })
                    : this.userCanBurstReact()
                      ? (0, n.jsxs)("div", {
                            className: r()(eo.h7, eo.j9, eo.rL),
                            children: [
                                (0, n.jsx)(A.t, { size: "md", className: eo.eH, color: j.k0.PREMIUM_TIER_2 }),
                                (0, n.jsx)(f.D, {
                                    onClick: this.handleClick,
                                    children: (0, n.jsx)(g.E, {
                                        variant: "text-sm/normal",
                                        className: eo.Of,
                                        "aria-label": "super reaction tooltip cta",
                                        children: el.intl.string(el.t.kVfuVu),
                                    }),
                                }),
                            ],
                        })
                      : this.userCanBurstReact() || this.isKeyboardNavigation
                        ? null
                        : (0, n.jsx)("div", {
                              className: r()(eo.h7, eo.j9),
                              children: (0, n.jsxs)("div", {
                                  children: [
                                      (0, n.jsx)(g.E, {
                                          variant: "text-sm/normal",
                                          "aria-label": "super reaction tooltip upsell",
                                          children: el.intl.string(el.t.W1bMkq),
                                      }),
                                      (0, n.jsx)(P.A, {
                                          subscriptionTier: en.pe.TIER_2,
                                          textOptions: { textOverride: el.intl.string(el.t.mr4K7D) },
                                          className: eo.Yq,
                                          onClick: (e) => e.stopPropagation(),
                                      }),
                                  ],
                              }),
                          });
            };
        return i === J.v.BURST
            ? (0, n.jsxs)("div", {
                  className: eo.xQ,
                  onMouseEnter: this.handleEnterTooltip,
                  onMouseLeave: this.handleLeave,
                  children: [
                      (0, n.jsx)(f.D, {
                          className: eo.fu,
                          onClick: u,
                          children: (0, n.jsxs)("div", {
                              className: eo.Ok,
                              children: [
                                  (0, n.jsx)(I.A, {
                                      className: eo.JS,
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
                  className: eo.xQ,
                  onMouseEnter: this.handleEnterTooltip,
                  onMouseLeave: this.handleLeave,
                  children: [
                      (0, n.jsx)(f.D, {
                          onClick: u,
                          children: (0, n.jsxs)("div", {
                              className: eo.xR,
                              children: [
                                  (0, n.jsx)(I.A, {
                                      className: eo.JS,
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
        let i = V.A.getChannel(e.getChannelId()),
            n = B.A.getGuild(i?.getGuildId());
        null != n && (0, O.Ze)(n.id);
    };
    handleSetReactionRef = (e) => {
        this.setState({ reactionRef: e });
    };
    trackReactionTooltipViewed = () => {
        let { emoji: e, message: t, type: i } = this.props,
            n = $.default.getCurrentUser(),
            l = V.A.getChannel(t.getChannelId()),
            a = i === J.v.BURST,
            r = (0, F.TW)(n),
            s = a ? en.e.EMOJI_IN_BURST_REACTION_HOVER : en.e.EMOJI_IN_REACTION_HOVER;
        !a || this.userCanBurstReact() || r || (s = en.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
            v.Ay.trackWithMetadata(ei.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                type: s,
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
                X.default.track(ei.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: en.e.BURST_REACTION_UPSELL,
                    location: {
                        page: l?.getGuildId() != null ? ei.liQ.GUILD_CHANNEL : ei.liQ.DM_CHANNEL,
                        section: (0, k.sn)(l),
                        object: ei.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
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
                isBurstReaction: s,
                hideCount: o,
                emoji: u,
                readOnly: h,
                isLurking: m,
                isPendingMember: p,
                className: g,
                useChatFontScaling: A,
                message: T,
                hideEmoji: N,
                animationStartPosition: v,
                emojiSize: j,
            } = this.props,
            { shouldShowTooltip: S, tooltipTextAria: C, reactionRef: b, tooltipPositionKey: y } = this.state,
            _ = A ? es : er,
            O = { transform: [{ scale: this.scale }], opacity: this.opacity },
            M = s ? l : i;
        if (s && null != a) {
            let { accentColor: i, backgroundColor: n, opacity: l } = a,
                r = (0, c.xp)(n ?? "", l) ?? "";
            this.isMe() && (O.borderColor = n), (O.background = r), (e = i), (t = i);
        }
        let P = b?.getBoundingClientRect(),
            w = null != v && null != P,
            U = null == v;
        return (0, n.jsx)(E.Y, {
            targetElementRef: { current: b },
            shouldShow: S,
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
                        className: r()(_.reaction, g, {
                            [_.reactionMe]: this.isMe(),
                            [_.reactionReadOnly]: h && !m && !p,
                            [_.shakeReaction]: N && null == v,
                        }),
                        style: O,
                        children: (0, n.jsx)(E.Y, {
                            targetElementRef: this.upsellPopoutTargetRef,
                            renderPopout: this.renderLurkerModeUpsellPopout,
                            position: "top",
                            children: (i) =>
                                (0, n.jsxs)(f.D, {
                                    ...i,
                                    innerRef: this.upsellPopoutTargetRef,
                                    className: _.reactionInner,
                                    onClick: this.handleClick,
                                    "aria-disabled": h,
                                    "aria-label": (0, k.mb)(this.isMe(), M, u, s),
                                    "aria-pressed": this.isMe(),
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: r()({ [_.burstGlow]: s }),
                                            style: { boxShadow: `0 0 16px ${t}` },
                                        }),
                                        (0, n.jsxs)("div", {
                                            children: [
                                                s
                                                    ? (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              w &&
                                                                  (0, n.jsx)(R.A, {
                                                                      messageId: T.id,
                                                                      emoji: u,
                                                                      startPosition: v,
                                                                      targetPosition: P,
                                                                  }),
                                                              U &&
                                                                  (0, n.jsx)(et.A, {
                                                                      count: l,
                                                                      emoji: u,
                                                                      channelId: T.getChannelId(),
                                                                      messageId: T.id,
                                                                      useChatFontScaling: A,
                                                                      color: t,
                                                                      emojiSize: ee.x.NORMAL,
                                                                  }),
                                                          ],
                                                      })
                                                    : null,
                                                (0, n.jsx)(I.A, {
                                                    className: r()({ [_.hideEmoji]: N }),
                                                    emojiId: u.id,
                                                    emojiName: u.name,
                                                    size: j,
                                                    animated: u.animated,
                                                }),
                                            ],
                                        }),
                                        o
                                            ? null
                                            : (0, n.jsx)(x.A, {
                                                  className: _.reactionCount,
                                                  value: M,
                                                  color: e,
                                                  digitWidth: eu,
                                              }),
                                        (0, n.jsx)(L.A, { count: M, reactionRef: b }),
                                    ],
                                }),
                        }),
                    }),
                }),
        });
    }
}
let em = l.memo((e) => {
        let { type: t, burst_colors: i, message: l, emoji: a } = e,
            r = t === J.v.BURST,
            s = (0, b.g)(r && null != i ? i : []),
            o = (0, h.bG)([K.A], () => void 0 !== K.A.getEffectForEmojiId(l.getChannelId(), l.id, a)),
            u = (0, h.bG)([N.A], () => N.A.useReducedMotion),
            d = D.Sf.useSetting(),
            c = $.default.getCurrentUser(),
            m = (0, F.TW)(c),
            p = (0, h.bG)([K.A], () => K.A.getReactionPickerAnimation(l.id, a.name, a.id)),
            g = r && (o || null != p);
        return (0, n.jsx)(eh, {
            ...e,
            colors: s,
            isBurstReaction: r,
            hideEmoji: g,
            userHasPremium: m,
            reduceMotion: u,
            animateEmoji: d,
            animationStartPosition: p,
        });
    }),
    ep = (e) => {
        let {
            emojiId: t,
            expressionSourceGuild: i,
            hasJoinedExpressionSourceGuild: l,
            onClose: a,
            popoutData: r,
            currentGuildId: s,
            nonce: o,
        } = e;
        (0, _.i)({ emojiId: t, currentGuildId: s, popoutData: r, emojiSourceGuildId: i?.id, nonce: o });
        let u = i?.isDiscoverable() ?? !1,
            d = null != i && u,
            c = (i?.emojis?.length ?? 0) > 1;
        return d
            ? null == i
                ? null
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("div", {
                              className: ea.h2,
                              children: (0, n.jsx)(Q.G7, {
                                  expressionSourceGuild: i,
                                  hasJoinedExpressionSourceGuild: l,
                                  isDisplayingJoinGuildButtonInPopout: r.type === Z.u.JOIN_GUILD,
                              }),
                          }),
                          c &&
                              (0, n.jsx)(Q.mG, {
                                  emojiId: t,
                                  expressionSourceGuild: i,
                                  hasJoinedEmojiSourceGuild: l,
                                  onClose: a,
                                  popoutData: r,
                                  isDisplayingButtonInTopSection: !1,
                              }),
                      ],
                  })
            : (0, n.jsx)(g.E, { variant: "text-sm/normal", "aria-label": r.type, children: r.emojiDescription });
    },
    eg = (e) => {
        let t,
            { emojiId: i, refreshPositionKey: a, onClose: s, nonce: o } = e,
            { joinedEmojiSourceGuild: u } = (0, h.cf)([S.Ay, B.A], () => {
                let e = S.Ay.getCustomEmojiById(i);
                return { joinedEmojiSourceGuild: e?.type === C.i.GUILD ? B.A.getGuild(e?.guildId) : void 0 };
            }),
            [d, c] = l.useState(void 0),
            [m, p] = l.useState(void 0),
            [A, E] = l.useState(null),
            [I, N] = l.useState(!1),
            [x, v] = l.useState(!1),
            [j, R] = l.useState(!1),
            b = null != u,
            _ = d?.isDiscoverable() ?? !1,
            O = z.A.getGuildId(),
            M = null != O && (O === d?.id || O === u?.id),
            L = $.default.getCurrentUser(),
            P = (0, Z.O)({
                sourceType: A,
                expressionSourceApplication: m ?? null,
                isPremium: F.Ay.isPremium(L),
                hasJoinedEmojiSourceGuild: b,
                isDiscoverable: _,
                emojiComesFromCurrentGuild: M,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1,
            });
        if (
            (l.useEffect(() => {
                !I ||
                    j ||
                    (async () => {
                        a(), v(!0);
                        let e = null != i ? await (0, y.g_)(i) : null;
                        if (null != e)
                            switch ((E(e.type), e.type)) {
                                case y.rV.APPLICATION:
                                    p(e.application);
                                    break;
                                case y.rV.GUILD:
                                    c(e.guild);
                            }
                        else c(null);
                        v(!1), R(!0), a();
                    })();
            }, [i, I, j, a]),
            b)
        )
            return null;
        let w = I && (void 0 !== d || void 0 !== m);
        return (0, n.jsxs)("div", {
            children: [
                w
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", { className: ea.Hw }),
                              null != P.emojiDescription &&
                                  P.type !== Z.u.UNAVAILABLE &&
                                  (0, n.jsx)(g.E, {
                                      variant: "text-sm/normal",
                                      "aria-label": P.type,
                                      children: P.emojiDescription,
                                  }),
                          ],
                      })
                    : ((t = el.intl.string(el.t["Igv+LS"])),
                      (0, n.jsxs)(f.D, {
                          onClick: () => {
                              N(!I);
                          },
                          className: ea.s4,
                          children: [
                              (0, n.jsx)(g.E, {
                                  variant: "text-sm/normal",
                                  color: "none",
                                  "aria-label": t,
                                  children: t,
                              }),
                              (0, n.jsx)(T.a, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: r()(ea.Po, { [ea.Kk]: !I }),
                              }),
                          ],
                      })),
                x
                    ? (0, n.jsx)(q.Y0, { className: ea.eF })
                    : w &&
                      (0, n.jsx)(ep, {
                          emojiId: i,
                          expressionSourceGuild: d,
                          hasJoinedExpressionSourceGuild: b,
                          onClose: s,
                          popoutData: P,
                          currentGuildId: O,
                          nonce: o,
                      }),
            ],
        });
    };
