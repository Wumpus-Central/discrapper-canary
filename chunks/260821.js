n.d(t, {
    $Z: () => es,
    $l: () => eu,
    IN: () => ec,
    qT: () => ep,
}),
    n(896048),
    n(733351);
var i,
    l = n(627968),
    r = n(64700),
    o = n(503698),
    a = n.n(o),
    s = n(284009),
    u = n.n(s),
    c = n(835245),
    d = n(615300),
    p = n(317097),
    h = n(311907),
    m = n(451988),
    f = n(397927),
    g = n(565645),
    b = n(775602),
    y = n(114166),
    O = n(58149),
    v = n(404374),
    j = n(572680),
    A = n(508675),
    T = n(770335),
    E = n(891734),
    I = n(624793),
    S = n(731383),
    x = n(202384),
    N = n(698405),
    R = n(254075),
    P = n(465794),
    C = n(32605),
    w = n(649963),
    _ = n(815807),
    M = n(112753),
    L = n(253932),
    D = n(734057),
    U = n(71393),
    k = n(956703),
    G = n(967198),
    V = n(287809),
    B = n(531685),
    H = n(954571),
    z = n(927578),
    W = n(900210),
    K = n(505527),
    X = n(450707),
    F = n(767143),
    J = n(652176),
    Z = n(802116),
    Q = n(211180),
    q = n(803203),
    Y = n(652215),
    $ = n(788868),
    ee = n(985018),
    et = n(767419),
    en = n(233080),
    ei = n(710504),
    el = n(494090);

function er(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function eo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                er(e, t, n[t]);
            });
    }
    return e;
}

function ea(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let es = 12;

function eu(e, t, n) {
    (0, f.qfG)((e) =>
        (0, l.jsx)(
            M.default,
            ea(eo({}, e), {
                message: t,
                selectedReaction: n,
            }),
        ),
    );
}

function ec(e, t, n) {
    return (n === K.v.BURST && t) || (n === K.v.NORMAL && e);
}
class ed extends (i = r.PureComponent) {
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
                  d.A.timing(this.opacity, {
                      toValue: 1,
                      duration: t ? 200 : 300,
                  }),
              ]).start(e))
            : (this.scale.setValue(1), this.opacity.setValue(1), e());
    }
    render() {
        let e,
            t,
            {
                count: n,
                burst_count: i,
                colors: r,
                isBurstReaction: o,
                hideCount: s,
                emoji: u,
                readOnly: c,
                isLurking: h,
                isGuest: m,
                isPendingMember: b,
                className: O,
                useChatFontScaling: v,
                message: A,
                hideEmoji: T,
                animationStartPosition: E,
                emojiSize: I,
            } = this.props,
            { shouldShowTooltip: S, tooltipTextAria: x, reactionRef: N, tooltipPositionKey: P } = this.state,
            C = v ? ei : en,
            w = {
                transform: [
                    {
                        scale: this.scale,
                    },
                ],
                opacity: this.opacity,
            },
            M = o ? i : n;
        if (o && null != r) {
            var L;
            let { accentColor: n, backgroundColor: i, opacity: l } = r,
                o = null != (L = (0, p.xp)(null != i ? i : "", l)) ? L : "";
            this.isMe() && (w.borderColor = i), (w.background = o), (e = n), (t = n);
        }
        let D = null == N ? void 0 : N.getBoundingClientRect(),
            U = null != E && null != D,
            k = null == E;
        return (0, l.jsx)(f.YNO, {
            targetElementRef: {
                current: N,
            },
            shouldShow: S,
            "aria-label": null != x && x,
            renderPopout: this.renderTooltip,
            nudgeAlignIntoViewport: !0,
            position: "top",
            align: "center",
            positionKey: P,
            children: () =>
                (0, l.jsx)("div", {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    ref: this.handleSetReactionRef,
                    children: (0, l.jsx)(d.A.div, {
                        className: a()(C.reaction, O, {
                            [C.reactionMe]: this.isMe(),
                            [C.reactionReadOnly]: c && !h && !b && !m,
                            [C.shakeReaction]: T && null == E,
                        }),
                        style: w,
                        children: (0, l.jsx)(f.YNO, {
                            targetElementRef: this.upsellPopoutTargetRef,
                            renderPopout: this.renderLurkerModeUpsellPopout,
                            position: "top",
                            children: (n) =>
                                (0, l.jsxs)(
                                    f.DUT,
                                    ea(eo({}, n), {
                                        innerRef: this.upsellPopoutTargetRef,
                                        className: C.reactionInner,
                                        onClick: this.handleClick,
                                        "aria-disabled": c,
                                        "aria-label": (0, _.mb)(this.isMe(), M, u, o),
                                        "aria-pressed": this.isMe(),
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: a()({
                                                    [C.burstGlow]: o,
                                                }),
                                                style: {
                                                    boxShadow: "0 0 16px ".concat(t),
                                                },
                                            }),
                                            (0, l.jsxs)("div", {
                                                children: [
                                                    o
                                                        ? (0, l.jsxs)(l.Fragment, {
                                                              children: [
                                                                  U &&
                                                                      (0, l.jsx)(j.A, {
                                                                          messageId: A.id,
                                                                          emoji: u,
                                                                          startPosition: E,
                                                                          targetPosition: D,
                                                                      }),
                                                                  k &&
                                                                      (0, l.jsx)(q.A, {
                                                                          count: i,
                                                                          emoji: u,
                                                                          channelId: A.getChannelId(),
                                                                          messageId: A.id,
                                                                          useChatFontScaling: v,
                                                                          color: t,
                                                                          emojiSize: Q.x.NORMAL,
                                                                      }),
                                                              ],
                                                          })
                                                        : null,
                                                    (0, l.jsx)(g.A, {
                                                        className: a()({
                                                            [C.hideEmoji]: T,
                                                        }),
                                                        emojiId: u.id,
                                                        emojiName: u.name,
                                                        size: I,
                                                        animated: u.animated,
                                                    }),
                                                ],
                                            }),
                                            s
                                                ? null
                                                : (0, l.jsx)(y.A, {
                                                      className: C.reactionCount,
                                                      value: M,
                                                      color: e,
                                                      digitWidth: es,
                                                  }),
                                            (0, l.jsx)(R.A, {
                                                count: M,
                                                reactionRef: N,
                                            }),
                                        ],
                                    }),
                                ),
                        }),
                    }),
                }),
        });
    }
    constructor(...e) {
        super(...e),
            er(this, "isReactionEventActive", !1),
            er(this, "isKeyboardNavigation", !1),
            er(this, "scale", new d.A.Value(1)),
            er(this, "opacity", new d.A.Value(1)),
            er(this, "timeout", new m.Ep()),
            er(this, "hideTimeout", new m.Ep()),
            er(this, "ctaRef", r.createRef()),
            er(this, "type", K.v.NORMAL),
            er(this, "colors", {
                backgroundColor: void 0,
                borderColor: void 0,
                textColor: void 0,
            }),
            er(this, "state", {
                shouldShowTooltip: !1,
                tooltipText: null,
                tooltipTextAria: null,
                reactionRef: null,
                tooltipPositionKey: void 0,
            }),
            er(this, "hasShownTooltip", !1),
            er(this, "nonce", (0, c.A)()),
            er(this, "upsellPopoutTargetRef", r.createRef()),
            er(this, "userCanBurstReact", () => this.props.userHasPremium),
            er(this, "handleClick", (e) => {
                e.stopPropagation();
                let {
                        message: t,
                        emoji: n,
                        readOnly: i,
                        isBurstReaction: l,
                        isPendingMember: r,
                        isLurking: o,
                        isGuest: a,
                        isForumToolbar: s,
                    } = this.props,
                    u = D.A.getChannel(t.getChannelId());
                if (o || a) {
                    var c, d;
                    null == (d = this.ctaRef) || null == (c = d.current) || c.focus();
                    return;
                }
                let p = t.getChannelId(),
                    h = s ? w.qN.FORUM_TOOLBAR : w.qN.MESSAGE_INLINE_BUTTON;
                l && !this.userCanBurstReact()
                    ? (0, C.z)({
                          analytics: {
                              type: $.e.BURST_REACTION_UPSELL,
                              page:
                                  (null == u ? void 0 : u.getGuildId()) != null
                                      ? Y.liQ.GUILD_CHANNEL
                                      : Y.liQ.DM_CHANNEL,
                              section: null != u ? (0, _.sn)(u) : void 0,
                              object: Y.ZSU.EMOJI_REACTION_UPSELL,
                          },
                      })
                    : r
                      ? this.handleShowVerificationGate()
                      : i ||
                        (this.isMe()
                            ? (0, w.et)({
                                  channelId: p,
                                  messageId: t.id,
                                  emoji: n,
                                  location: h,
                                  options: {
                                      burst: l,
                                  },
                              })
                            : (0, w.BB)(p, t.id, n, h, {
                                  burst: l,
                              }));
            }),
            er(this, "handleEnter", (e) => {
                let {
                        emoji: t,
                        message: n,
                        type: i,
                        reduceMotion: l,
                        animateEmoji: r,
                        autoUnfurlReactionTooltip: o,
                    } = this.props,
                    a = i === K.v.BURST;
                a &&
                    !this.isReactionEventActive &&
                    !l &&
                    r &&
                    (0, w.on)({
                        channelId: n.getChannelId(),
                        messageId: n.id,
                        emoji: t,
                        key: W.W.HOVER,
                    }),
                    (this.isReactionEventActive = !0),
                    (this.isKeyboardNavigation = "focus" === e.type),
                    this.timeout.start(a ? 750 : o ? 200 : 500, this.showTooltip, !1);
            }),
            er(this, "handleEnterTooltip", () => {
                (this.isReactionEventActive = !0), this.handleShowTooltip();
            }),
            er(this, "handleShowTooltip", () => {
                this.hideTimeout.stop(),
                    this.isReactionEventActive &&
                        (this.updateTooltipText(), k.A.addChangeListener(this.updateTooltipText));
            }),
            er(this, "showTooltip", () => {
                this.props.readOnly ||
                    (this.handleShowTooltip(),
                    this.isReactionEventActive && this.trackReactionTooltipViewed(),
                    (this.hasShownTooltip = !0));
            }),
            er(this, "handleLeave", () => {
                (this.isReactionEventActive = !1),
                    (this.isKeyboardNavigation = !1),
                    this.timeout.stop(),
                    k.A.removeChangeListener(this.updateTooltipText),
                    this.hideTimeout.start(200, this.hideTooltip, !1);
            }),
            er(this, "hideTooltip", () => {
                this.setState({
                    shouldShowTooltip: !1,
                }),
                    this.hasShownTooltip &&
                        H.default.track(Y.HAw.CLOSE_POPOUT, {
                            nonce: this.nonce,
                        });
            }),
            er(this, "isMe", () => {
                let { me: e, me_burst: t, type: n } = this.props;
                return ec(e, t, n);
            }),
            er(this, "updateTooltipText", () => {
                let { message: e, emoji: t, type: n } = this.props,
                    i = (0, Z.i)(e, t, n),
                    l = this.isKeyboardNavigation ? i : (0, Z.i)(e, t, n, Y.tEg);
                u()("string" == typeof i, "tooltipTextAria is not a string"),
                    this.setState({
                        tooltipText: l,
                        tooltipTextAria: i,
                        shouldShowTooltip: null != l && "" !== l,
                    });
            }),
            er(this, "renderLurkerModeUpsellPopout", (e) => {
                let { closePopout: t } = e,
                    { message: n, isLurking: i } = this.props,
                    r = D.A.getChannel(n.getChannelId()),
                    o = U.A.getGuild(null == r ? void 0 : r.getGuildId());
                return i && null != o
                    ? (0, l.jsx)(N.A, {
                          ctaRef: this.ctaRef,
                          type: N.w.REACTIONS,
                          guild: o,
                          closePopout: t,
                      })
                    : (0, l.jsx)(l.Fragment, {});
            }),
            er(this, "renderEmojiDetails", () => {
                let e = this.props.emoji;
                return (
                    null != e.id &&
                    (0, l.jsx)(em, {
                        emojiId: e.id,
                        refreshPositionKey: this.refreshTooltipPositionKey,
                        onClose: this.handleLeave,
                        nonce: this.nonce,
                    })
                );
            }),
            er(this, "renderTooltip", () => {
                let { emoji: e, message: t, type: n, me_burst: i, isBurstReaction: r = !1 } = this.props,
                    { tooltipText: o, tooltipTextAria: s } = this.state,
                    u = (n) => {
                        let i = D.A.getChannel(t.getChannelId());
                        null == i ||
                            (this.handleLeave(),
                            eu(i, t, {
                                emoji: e,
                                reactionType: r ? K.v.BURST : K.v.NORMAL,
                            }));
                    },
                    c = "string" == typeof o ? "" === o.trim() : null == o,
                    d = () =>
                        c || null == o || null == s
                            ? null
                            : (0, l.jsx)(f.Text, {
                                  variant: "text-sm/normal",
                                  className: el.Of,
                                  "aria-label": s,
                                  children: o,
                              }),
                    p = () => {
                        let e = V.default.getCurrentUser();
                        return i
                            ? (0, l.jsxs)("div", {
                                  className: a()(el.h7, el.j9),
                                  children: [
                                      (0, z.TW)(e) &&
                                          (0, l.jsx)(f.tvc, {
                                              size: "md",
                                              className: el.eH,
                                              color: v.k0.PREMIUM_TIER_2,
                                          }),
                                      (0, l.jsx)(f.Text, {
                                          variant: "text-sm/normal",
                                          className: el.Of,
                                          "aria-label": "super reaction tooltip cta",
                                          children: ee.intl.string(ee.t.ZbNJXn),
                                      }),
                                  ],
                              })
                            : this.userCanBurstReact()
                              ? (0, l.jsxs)("div", {
                                    className: a()(el.h7, el.j9, el.rL),
                                    children: [
                                        (0, l.jsx)(f.tvc, {
                                            size: "md",
                                            className: el.eH,
                                            color: v.k0.PREMIUM_TIER_2,
                                        }),
                                        (0, l.jsx)(f.DUT, {
                                            onClick: this.handleClick,
                                            children: (0, l.jsx)(f.Text, {
                                                variant: "text-sm/normal",
                                                className: el.Of,
                                                "aria-label": "super reaction tooltip cta",
                                                children: ee.intl.string(ee.t.kVfuVu),
                                            }),
                                        }),
                                    ],
                                })
                              : this.userCanBurstReact() || this.isKeyboardNavigation
                                ? null
                                : (0, l.jsx)("div", {
                                      className: a()(el.h7, el.j9),
                                      children: (0, l.jsxs)("div", {
                                          children: [
                                              (0, l.jsx)(f.Text, {
                                                  variant: "text-sm/normal",
                                                  "aria-label": "super reaction tooltip upsell",
                                                  children: ee.intl.string(ee.t.W1bMkq),
                                              }),
                                              (0, l.jsx)(P.A, {
                                                  subscriptionTier: $.pe.TIER_2,
                                                  textOptions: {
                                                      textOverride: ee.intl.string(ee.t.mr4K7D),
                                                  },
                                                  className: el.Yq,
                                                  onClick: (e) => e.stopPropagation(),
                                              }),
                                          ],
                                      }),
                                  });
                    };
                return n === K.v.BURST
                    ? (0, l.jsxs)("div", {
                          className: el.xQ,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, l.jsx)(f.DUT, {
                                  className: el.fu,
                                  onClick: u,
                                  children: (0, l.jsxs)("div", {
                                      className: el.Ok,
                                      children: [
                                          (0, l.jsx)(g.A, {
                                              className: el.JS,
                                              emojiId: e.id,
                                              emojiName: e.name,
                                              animated: e.animated,
                                              size: this.props.emojiSizeTooltip,
                                          }),
                                          d(),
                                      ],
                                  }),
                              }),
                              p(),
                              this.renderEmojiDetails(),
                          ],
                      })
                    : (0, l.jsxs)("div", {
                          className: el.xQ,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, l.jsx)(f.DUT, {
                                  onClick: u,
                                  children: (0, l.jsxs)("div", {
                                      className: el.xR,
                                      children: [
                                          (0, l.jsx)(g.A, {
                                              className: el.JS,
                                              emojiId: e.id,
                                              emojiName: e.name,
                                              animated: e.animated,
                                              size: this.props.emojiSizeTooltip,
                                          }),
                                          d(),
                                      ],
                                  }),
                              }),
                              this.renderEmojiDetails(),
                          ],
                      });
            }),
            er(this, "refreshTooltipPositionKey", () => {
                this.setState({
                    tooltipPositionKey: String(Date.now()),
                });
            }),
            er(this, "handleShowVerificationGate", () => {
                let { message: e, isPendingMember: t } = this.props;
                if (!t) return null;
                let n = D.A.getChannel(e.getChannelId()),
                    i = U.A.getGuild(null == n ? void 0 : n.getGuildId());
                null != i && (0, x.Ze)(i.id);
            }),
            er(this, "handleSetReactionRef", (e) => {
                this.setState({
                    reactionRef: e,
                });
            }),
            er(this, "trackReactionTooltipViewed", () => {
                let { emoji: e, message: t, type: n } = this.props,
                    i = V.default.getCurrentUser(),
                    l = D.A.getChannel(t.getChannelId()),
                    r = n === K.v.BURST,
                    o = (0, z.TW)(i),
                    a = r ? $.e.EMOJI_IN_BURST_REACTION_HOVER : $.e.EMOJI_IN_REACTION_HOVER;
                !r || this.userCanBurstReact() || o || (a = $.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
                    O.Ay.trackWithMetadata(Y.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                        type: a,
                        expression_id: e.id,
                        expression_name: e.name,
                        is_animated: e.animated,
                        is_custom: null != e.id,
                        nonce: this.nonce,
                    }),
                    !r ||
                        null == l ||
                        o ||
                        this.userCanBurstReact() ||
                        H.default.track(Y.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: $.e.BURST_REACTION_UPSELL,
                            location: {
                                page:
                                    (null == l ? void 0 : l.getGuildId()) != null
                                        ? Y.liQ.GUILD_CHANNEL
                                        : Y.liQ.DM_CHANNEL,
                                section: (0, _.sn)(l),
                                object: Y.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
                            },
                        });
            });
    }
}
er(ed, "defaultProps", {
    emojiSizeTooltip: "jumbo",
});
let ep = r.memo((e) => {
        let { type: t, burst_colors: n, message: i, emoji: r } = e,
            o = t === K.v.BURST,
            a = (0, E.g)(o && null != n ? n : []),
            s = (0, h.bG)([W.A], () => void 0 !== W.A.getEffectForEmojiId(i.getChannelId(), i.id, r)),
            u = (0, h.bG)([b.A], () => b.A.useReducedMotion),
            c = L.Sf.useSetting(),
            d = V.default.getCurrentUser(),
            p = (0, z.TW)(d),
            m = (0, h.bG)([W.A], () => W.A.getReactionPickerAnimation(i.id, r.name, r.id)),
            f = o && (s || null != m);
        return (0, l.jsx)(
            ed,
            ea(eo({}, e), {
                colors: a,
                isBurstReaction: o,
                hideEmoji: f,
                userHasPremium: p,
                reduceMotion: u,
                animateEmoji: c,
                animationStartPosition: m,
            }),
        );
    }),
    eh = (e) => {
        var t, n, i;
        let {
            emojiId: r,
            expressionSourceGuild: o,
            hasJoinedExpressionSourceGuild: a,
            onClose: s,
            popoutData: u,
            currentGuildId: c,
            nonce: d,
        } = e;
        (0, S.i)({
            emojiId: r,
            currentGuildId: c,
            popoutData: u,
            emojiSourceGuildId: null == o ? void 0 : o.id,
            nonce: d,
        });
        let p = null != (t = null == o ? void 0 : o.isDiscoverable()) && t,
            h = null != o && p,
            m = (null != (n = null == o || null == (i = o.emojis) ? void 0 : i.length) ? n : 0) > 1;
        return h
            ? null == o
                ? null
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              className: et.h2,
                              children: (0, l.jsx)(F.G7, {
                                  expressionSourceGuild: o,
                                  hasJoinedExpressionSourceGuild: a,
                                  isDisplayingJoinGuildButtonInPopout: u.type === X.u.JOIN_GUILD,
                              }),
                          }),
                          m &&
                              (0, l.jsx)(F.mG, {
                                  emojiId: r,
                                  expressionSourceGuild: o,
                                  hasJoinedEmojiSourceGuild: a,
                                  onClose: s,
                                  popoutData: u,
                                  isDisplayingButtonInTopSection: !1,
                              }),
                      ],
                  })
            : (0, l.jsx)(f.Text, {
                  variant: "text-sm/normal",
                  "aria-label": u.type,
                  children: u.emojiDescription,
              });
    },
    em = (e) => {
        var t;
        let n,
            { emojiId: i, refreshPositionKey: o, onClose: s, nonce: u } = e,
            { joinedEmojiSourceGuild: c } = (0, h.cf)([A.Ay, U.A], () => {
                let e = A.Ay.getCustomEmojiById(i);
                return {
                    joinedEmojiSourceGuild:
                        (null == e ? void 0 : e.type) === T.i.GUILD
                            ? U.A.getGuild(null == e ? void 0 : e.guildId)
                            : void 0,
                };
            }),
            [d, p] = r.useState(void 0),
            [m, g] = r.useState(void 0),
            [b, y] = r.useState(null),
            [O, v] = r.useState(!1),
            [j, E] = r.useState(!1),
            [S, x] = r.useState(!1),
            N = null != c,
            R = null != (t = null == d ? void 0 : d.isDiscoverable()) && t,
            P = G.A.getGuildId(),
            C = null != P && (P === (null == d ? void 0 : d.id) || P === (null == c ? void 0 : c.id)),
            w = V.default.getCurrentUser(),
            _ = (0, X.O)({
                sourceType: b,
                expressionSourceApplication: null != m ? m : null,
                isPremium: z.Ay.isPremium(w),
                hasJoinedEmojiSourceGuild: N,
                isDiscoverable: R,
                emojiComesFromCurrentGuild: C,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1,
            });
        if (
            (r.useEffect(() => {
                !O ||
                    S ||
                    (async () => {
                        o(), E(!0);
                        let e = null != i ? await (0, I.g_)(i) : null;
                        if (null != e)
                            switch ((y(e.type), e.type)) {
                                case I.rV.APPLICATION:
                                    g(e.application);
                                    break;
                                case I.rV.GUILD:
                                    p(e.guild);
                            }
                        else p(null);
                        E(!1), x(!0), o();
                    })();
            }, [i, O, S, o]),
            N)
        )
            return null;
        let M = O && (void 0 !== d || void 0 !== m);
        return (0, l.jsxs)("div", {
            children: [
                M
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: et.Hw,
                              }),
                              null != _.emojiDescription &&
                                  _.type !== X.u.UNAVAILABLE &&
                                  (0, l.jsx)(f.Text, {
                                      variant: "text-sm/normal",
                                      "aria-label": _.type,
                                      children: _.emojiDescription,
                                  }),
                          ],
                      })
                    : ((n = ee.intl.string(ee.t["Igv+LS"])),
                      (0, l.jsxs)(f.DUT, {
                          onClick: () => {
                              v(!O);
                          },
                          className: et.s4,
                          children: [
                              (0, l.jsx)(f.Text, {
                                  variant: "text-sm/normal",
                                  color: "none",
                                  "aria-label": n,
                                  children: n,
                              }),
                              (0, l.jsx)(f.abt, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: a()(et.Po, {
                                      [et.Kk]: !O,
                                  }),
                              }),
                          ],
                      })),
                j
                    ? (0, l.jsx)(J.Y0, {
                          className: et.eF,
                      })
                    : M &&
                      (0, l.jsx)(eh, {
                          emojiId: i,
                          expressionSourceGuild: d,
                          hasJoinedExpressionSourceGuild: N,
                          onClose: s,
                          popoutData: _,
                          currentGuildId: P,
                          nonce: u,
                      }),
            ],
        });
    };
