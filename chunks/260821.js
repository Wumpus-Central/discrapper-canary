i.d(t, { $Z: () => eu, $l: () => ed, IN: () => ec, qT: () => em });
var n = i(627968),
    l = i(64700),
    a = i(503698),
    s = i.n(a),
    o = i(284009),
    r = i.n(o),
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
    N = i(565645),
    x = i(775602),
    I = i(114166),
    j = i(58149),
    v = i(404374),
    R = i(572680),
    C = i(508675),
    b = i(770335),
    S = i(891734),
    y = i(624793),
    O = i(731383),
    M = i(202384),
    _ = i(698405),
    L = i(254075),
    P = i(725807),
    w = i(32605),
    k = i(649963),
    G = i(815807),
    U = i(112753),
    V = i(253932),
    D = i(734057),
    B = i(71393),
    H = i(956703),
    $ = i(967198),
    W = i(287809),
    z = i(531685),
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
    ea = i(979132),
    es = i(347353),
    eo = i(866661),
    er = i(631765);
let eu = 12;
function ed(e, t, i) {
    (0, p.openModal)((e) => (0, n.jsx)(U.default, { ...e, message: t, selectedReaction: i }));
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
        z.A.isFocused()
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
                isForumToolbar: o,
            } = this.props,
            r = D.A.getChannel(t.getChannelId());
        if (s) return void this.ctaRef?.current?.focus();
        let u = t.getChannelId(),
            d = o ? k.qN.FORUM_TOOLBAR : k.qN.MESSAGE_INLINE_BUTTON;
        l && !this.userCanBurstReact()
            ? (0, w.z)({
                  analytics: {
                      type: en.e.BURST_REACTION_UPSELL,
                      page: r?.getGuildId() != null ? ei.liQ.GUILD_CHANNEL : ei.liQ.DM_CHANNEL,
                      section: null != r ? (0, G.sn)(r) : void 0,
                      object: ei.ZSU.EMOJI_REACTION_UPSELL,
                  },
              })
            : a
              ? this.handleShowVerificationGate()
              : n ||
                (this.isMe()
                    ? (0, k.et)({ channelId: u, messageId: t.id, emoji: i, location: d, options: { burst: l } })
                    : (0, k.BB)(u, t.id, i, d, { burst: l }));
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
            o = n === J.v.BURST;
        o &&
            !this.isReactionEventActive &&
            !l &&
            a &&
            (0, k.on)({ channelId: i.getChannelId(), messageId: i.id, emoji: t, key: K.W.HOVER }),
            (this.isReactionEventActive = !0),
            (this.isKeyboardNavigation = "focus" === e.type),
            this.timeout.start(o ? 750 : s ? 200 : 500, this.showTooltip, !1);
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
        r()("string" == typeof n, "tooltipTextAria is not a string"),
            this.setState({ tooltipText: l, tooltipTextAria: n, shouldShowTooltip: null != l && "" !== l });
    };
    renderLurkerModeUpsellPopout = (e) => {
        let { closePopout: t } = e,
            { message: i, isLurking: l } = this.props,
            a = D.A.getChannel(i.getChannelId()),
            s = B.A.getGuild(a?.getGuildId());
        return l && null != s
            ? (0, n.jsx)(_.A, { ctaRef: this.ctaRef, type: _.w.REACTIONS, guild: s, closePopout: t })
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
            { tooltipText: o, tooltipTextAria: r } = this.state,
            u = (i) => {
                let n = D.A.getChannel(t.getChannelId());
                null == n || (this.handleLeave(), ed(n, t, { emoji: e, reactionType: a ? J.v.BURST : J.v.NORMAL }));
            },
            d = "string" == typeof o ? "" === o.trim() : null == o,
            c = () =>
                d || null == o || null == r
                    ? null
                    : (0, n.jsx)(g.E, { variant: "text-sm/normal", className: er.Of, "aria-label": r, children: o }),
            h = () => {
                let e = W.default.getCurrentUser();
                return l
                    ? (0, n.jsxs)("div", {
                          className: s()(er.h7, er.j9),
                          children: [
                              (0, F.TW)(e) &&
                                  (0, n.jsx)(A.t, { size: "md", className: er.eH, color: v.k0.PREMIUM_TIER_2 }),
                              (0, n.jsx)(g.E, {
                                  variant: "text-sm/normal",
                                  className: er.Of,
                                  "aria-label": "super reaction tooltip cta",
                                  children: el.intl.string(el.t.ZbNJXn),
                              }),
                          ],
                      })
                    : this.userCanBurstReact()
                      ? (0, n.jsxs)("div", {
                            className: s()(er.h7, er.j9, er.rL),
                            children: [
                                (0, n.jsx)(A.t, { size: "md", className: er.eH, color: v.k0.PREMIUM_TIER_2 }),
                                (0, n.jsx)(f.D, {
                                    onClick: this.handleClick,
                                    children: (0, n.jsx)(g.E, {
                                        variant: "text-sm/normal",
                                        className: er.Of,
                                        "aria-label": "super reaction tooltip cta",
                                        children: el.intl.string(el.t.kVfuVu),
                                    }),
                                }),
                            ],
                        })
                      : this.userCanBurstReact() || this.isKeyboardNavigation
                        ? null
                        : (0, n.jsx)("div", {
                              className: s()(er.h7, er.j9),
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
                                          className: er.Yq,
                                          onClick: (e) => e.stopPropagation(),
                                      }),
                                  ],
                              }),
                          });
            };
        return i === J.v.BURST
            ? (0, n.jsxs)("div", {
                  className: er.xQ,
                  onMouseEnter: this.handleEnterTooltip,
                  onMouseLeave: this.handleLeave,
                  children: [
                      (0, n.jsx)(f.D, {
                          className: er.fu,
                          onClick: u,
                          children: (0, n.jsxs)("div", {
                              className: er.Ok,
                              children: [
                                  (0, n.jsx)(N.A, {
                                      className: er.JS,
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
                  className: er.xQ,
                  onMouseEnter: this.handleEnterTooltip,
                  onMouseLeave: this.handleLeave,
                  children: [
                      (0, n.jsx)(f.D, {
                          onClick: u,
                          children: (0, n.jsxs)("div", {
                              className: er.xR,
                              children: [
                                  (0, n.jsx)(N.A, {
                                      className: er.JS,
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
        let i = D.A.getChannel(e.getChannelId()),
            n = B.A.getGuild(i?.getGuildId());
        null != n && (0, M.Ze)(n.id);
    };
    handleSetReactionRef = (e) => {
        this.setState({ reactionRef: e });
    };
    trackReactionTooltipViewed = () => {
        let { emoji: e, message: t, type: i } = this.props,
            n = W.default.getCurrentUser(),
            l = D.A.getChannel(t.getChannelId()),
            a = i === J.v.BURST,
            s = (0, F.TW)(n),
            o = a ? en.e.EMOJI_IN_BURST_REACTION_HOVER : en.e.EMOJI_IN_REACTION_HOVER;
        !a || this.userCanBurstReact() || s || (o = en.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
            j.Ay.trackWithMetadata(ei.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                type: o,
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
                X.default.track(ei.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: en.e.BURST_REACTION_UPSELL,
                    location: {
                        page: l?.getGuildId() != null ? ei.liQ.GUILD_CHANNEL : ei.liQ.DM_CHANNEL,
                        section: (0, G.sn)(l),
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
                isBurstReaction: o,
                hideCount: r,
                emoji: u,
                readOnly: h,
                isLurking: m,
                isPendingMember: p,
                className: g,
                useChatFontScaling: A,
                message: T,
                hideEmoji: x,
                animationStartPosition: j,
                emojiSize: v,
            } = this.props,
            { shouldShowTooltip: C, tooltipTextAria: b, reactionRef: S, tooltipPositionKey: y } = this.state,
            O = A ? eo : es,
            M = { transform: [{ scale: this.scale }], opacity: this.opacity },
            _ = o ? l : i;
        if (o && null != a) {
            let { accentColor: i, backgroundColor: n, opacity: l } = a,
                s = (0, c.xp)(n ?? "", l) ?? "";
            this.isMe() && (M.borderColor = n), (M.background = s), (e = i), (t = i);
        }
        let P = S?.getBoundingClientRect(),
            w = null != j && null != P,
            k = null == j;
        return (0, n.jsx)(E.Y, {
            targetElementRef: { current: S },
            shouldShow: C,
            "aria-label": b ?? !1,
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
                        className: s()(O.reaction, g, {
                            [O.reactionMe]: this.isMe(),
                            [O.reactionReadOnly]: h && !m && !p,
                            [O.shakeReaction]: x && null == j,
                        }),
                        style: M,
                        children: (0, n.jsx)(E.Y, {
                            targetElementRef: this.upsellPopoutTargetRef,
                            renderPopout: this.renderLurkerModeUpsellPopout,
                            position: "top",
                            children: (i) =>
                                (0, n.jsxs)(f.D, {
                                    ...i,
                                    innerRef: this.upsellPopoutTargetRef,
                                    className: O.reactionInner,
                                    onClick: this.handleClick,
                                    "aria-disabled": h,
                                    "aria-label": (0, G.mb)(this.isMe(), _, u, o),
                                    "aria-pressed": this.isMe(),
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: s()({ [O.burstGlow]: o }),
                                            style: { boxShadow: `0 0 16px ${t}` },
                                        }),
                                        (0, n.jsxs)("div", {
                                            children: [
                                                o
                                                    ? (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              w &&
                                                                  (0, n.jsx)(R.A, {
                                                                      messageId: T.id,
                                                                      emoji: u,
                                                                      startPosition: j,
                                                                      targetPosition: P,
                                                                  }),
                                                              k &&
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
                                                (0, n.jsx)(N.A, {
                                                    className: s()({ [O.hideEmoji]: x }),
                                                    emojiId: u.id,
                                                    emojiName: u.name,
                                                    size: v,
                                                    animated: u.animated,
                                                }),
                                            ],
                                        }),
                                        r
                                            ? null
                                            : (0, n.jsx)(I.A, {
                                                  className: O.reactionCount,
                                                  value: _,
                                                  color: e,
                                                  digitWidth: eu,
                                              }),
                                        (0, n.jsx)(L.A, { count: _, reactionRef: S }),
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
            s = t === J.v.BURST,
            o = (0, S.g)(s && null != i ? i : []),
            r = (0, h.bG)([K.A], () => void 0 !== K.A.getEffectForEmojiId(l.getChannelId(), l.id, a)),
            u = (0, h.bG)([x.A], () => x.A.useReducedMotion),
            d = V.Sf.useSetting(),
            c = W.default.getCurrentUser(),
            m = (0, F.TW)(c),
            p = (0, h.bG)([K.A], () => K.A.getReactionPickerAnimation(l.id, a.name, a.id)),
            g = s && (r || null != p);
        return (0, n.jsx)(eh, {
            ...e,
            colors: o,
            isBurstReaction: s,
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
            popoutData: s,
            currentGuildId: o,
            nonce: r,
        } = e;
        (0, O.i)({ emojiId: t, currentGuildId: o, popoutData: s, emojiSourceGuildId: i?.id, nonce: r });
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
                                  isDisplayingJoinGuildButtonInPopout: s.type === Z.u.JOIN_GUILD,
                              }),
                          }),
                          c &&
                              (0, n.jsx)(Q.mG, {
                                  emojiId: t,
                                  expressionSourceGuild: i,
                                  hasJoinedEmojiSourceGuild: l,
                                  onClose: a,
                                  popoutData: s,
                                  isDisplayingButtonInTopSection: !1,
                              }),
                      ],
                  })
            : (0, n.jsx)(g.E, { variant: "text-sm/normal", "aria-label": s.type, children: s.emojiDescription });
    },
    eg = (e) => {
        let t,
            { emojiId: i, refreshPositionKey: a, onClose: o, nonce: r } = e,
            { joinedEmojiSourceGuild: u } = (0, h.cf)([C.Ay, B.A], () => {
                let e = C.Ay.getCustomEmojiById(i);
                return { joinedEmojiSourceGuild: e?.type === b.i.GUILD ? B.A.getGuild(e?.guildId) : void 0 };
            }),
            [d, c] = l.useState(void 0),
            [m, p] = l.useState(void 0),
            [A, E] = l.useState(null),
            [N, x] = l.useState(!1),
            [I, j] = l.useState(!1),
            [v, R] = l.useState(!1),
            S = null != u,
            O = d?.isDiscoverable() ?? !1,
            M = $.A.getGuildId(),
            _ = null != M && (M === d?.id || M === u?.id),
            L = W.default.getCurrentUser(),
            P = (0, Z.O)({
                sourceType: A,
                expressionSourceApplication: m ?? null,
                isPremium: F.Ay.isPremium(L),
                hasJoinedEmojiSourceGuild: S,
                isDiscoverable: O,
                emojiComesFromCurrentGuild: _,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1,
            });
        if (
            (l.useEffect(() => {
                !N ||
                    v ||
                    (async () => {
                        a(), j(!0);
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
                        j(!1), R(!0), a();
                    })();
            }, [i, N, v, a]),
            S)
        )
            return null;
        let w = N && (void 0 !== d || void 0 !== m);
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
                              x(!N);
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
                                  className: s()(ea.Po, { [ea.Kk]: !N }),
                              }),
                          ],
                      })),
                I
                    ? (0, n.jsx)(q.Y0, { className: ea.eF })
                    : w &&
                      (0, n.jsx)(ep, {
                          emojiId: i,
                          expressionSourceGuild: d,
                          hasJoinedExpressionSourceGuild: S,
                          onClose: o,
                          popoutData: P,
                          currentGuildId: M,
                          nonce: r,
                      }),
            ],
        });
    };
