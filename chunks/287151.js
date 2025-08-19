n.d(t, {
    aO: () => es,
    le: () => eh,
    op: () => ec,
    y4: () => eu,
}),
    n(388685),
    n(781311);
var i,
    l = n(951288),
    r = n(647438),
    o = n(120356),
    a = n.n(o),
    s = n(512722),
    c = n.n(s),
    u = n(772848),
    d = n(748780),
    h = n(866442),
    p = n(442837),
    m = n(846519),
    f = n(481060),
    g = n(596454),
    b = n(785388),
    j = n(607070),
    v = n(446489),
    O = n(367907),
    y = n(436774),
    T = n(98474),
    x = n(339085),
    S = n(906411),
    E = n(56314),
    R = n(231053),
    I = n(944386),
    N = n(305325),
    P = n(33154),
    C = n(692147),
    w = n(767714),
    Z = n(659215),
    A = n(222677),
    M = n(995774),
    _ = n(695346),
    k = n(592125),
    L = n(430824),
    D = n(542578),
    U = n(914010),
    V = n(594174),
    B = n(451478),
    G = n(626135),
    H = n(74538),
    W = n(960020),
    F = n(566006),
    z = n(886132),
    K = n(183023),
    J = n(524444),
    X = n(89729),
    Y = n(620652),
    q = n(640753),
    $ = n(981631),
    Q = n(474936),
    ee = n(388032),
    et = n(975900),
    en = n(127947),
    ei = n(893973),
    el = n(827610);
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
function ec(e, t, n) {
    (0, f.h7j)((e) =>
        (0, l.jsx)(
            b.default,
            ea(eo({}, e), {
                message: t,
                selectedReaction: n,
            }),
        ),
    );
}
function eu(e, t, n) {
    return (n === F.O.BURST && t) || (n === F.O.NORMAL && e);
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
        B.Z.isFocused()
            ? (this.scale.setValue(0),
              this.opacity.setValue(0),
              d.Z.parallel([
                  d.Z.timing(this.scale, {
                      toValue: 1,
                      duration: t ? 200 : 300,
                      easing: d.Z.Easing.inOut(d.Z.Easing.back()),
                  }),
                  d.Z.timing(this.opacity, {
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
                emoji: c,
                readOnly: u,
                isLurking: p,
                isGuest: m,
                isPendingMember: b,
                className: j,
                useChatFontScaling: O,
                message: y,
                hideEmoji: x,
                animationStartPosition: S,
                emojiSize: E,
            } = this.props,
            { shouldShowTooltip: R, tooltipTextAria: I, reactionRef: N, tooltipPositionKey: P } = this.state,
            w = O ? ei : en,
            Z = {
                transform: [{ scale: this.scale }],
                opacity: this.opacity,
            },
            A = o ? i : n;
        if (o && null != r) {
            var _;
            let { accentColor: n, backgroundColor: i, opacity: l } = r,
                o = null != (_ = (0, h.wK)(null != i ? i : "", l)) ? _ : "";
            this.isMe() && (Z.borderColor = i), (Z.background = o), (e = n), (t = n);
        }
        let k = null == N ? void 0 : N.getBoundingClientRect(),
            L = null != S && null != k,
            D = null == S;
        return (0, l.jsx)(f.yRy, {
            targetElementRef: { current: N },
            shouldShow: R,
            "aria-label": null != I && I,
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
                    children: (0, l.jsx)(d.Z.div, {
                        className: a()(w.reaction, j, {
                            [w.reactionMe]: this.isMe(),
                            [w.reactionReadOnly]: u && !p && !b && !m,
                            [w.shakeReaction]: x && null == S,
                        }),
                        style: Z,
                        children: (0, l.jsx)(f.yRy, {
                            targetElementRef: this.upsellPopoutTargetRef,
                            renderPopout: this.renderLurkerModeUpsellPopout,
                            position: "top",
                            children: (n) =>
                                (0, l.jsxs)(
                                    f.P3F,
                                    ea(eo({}, n), {
                                        innerRef: this.upsellPopoutTargetRef,
                                        className: w.reactionInner,
                                        onClick: this.handleClick,
                                        "aria-disabled": u,
                                        "aria-label": (0, M.iD)(this.isMe(), A, c, o),
                                        "aria-pressed": this.isMe(),
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: a()({ [w.burstGlow]: o }),
                                                style: { boxShadow: "0 0 16px ".concat(t) },
                                            }),
                                            (0, l.jsxs)("div", {
                                                children: [
                                                    o
                                                        ? (0, l.jsxs)(l.Fragment, {
                                                              children: [
                                                                  L &&
                                                                      (0, l.jsx)(T.Z, {
                                                                          messageId: y.id,
                                                                          emoji: c,
                                                                          startPosition: S,
                                                                          targetPosition: k,
                                                                      }),
                                                                  D &&
                                                                      (0, l.jsx)(q.Z, {
                                                                          count: i,
                                                                          emoji: c,
                                                                          channelId: y.getChannelId(),
                                                                          messageId: y.id,
                                                                          useChatFontScaling: O,
                                                                          color: t,
                                                                          emojiSize: Y.M.NORMAL,
                                                                      }),
                                                              ],
                                                          })
                                                        : null,
                                                    (0, l.jsx)(g.Z, {
                                                        className: a()({ [w.hideEmoji]: x }),
                                                        emojiId: c.id,
                                                        emojiName: c.name,
                                                        size: E,
                                                        animated: c.animated,
                                                    }),
                                                ],
                                            }),
                                            s
                                                ? null
                                                : (0, l.jsx)(v.Z, {
                                                      className: w.reactionCount,
                                                      value: A,
                                                      color: e,
                                                      digitWidth: es,
                                                  }),
                                            (0, l.jsx)(C.Z, {
                                                count: A,
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
            er(this, "scale", new d.Z.Value(1)),
            er(this, "opacity", new d.Z.Value(1)),
            er(this, "timeout", new m.V7()),
            er(this, "hideTimeout", new m.V7()),
            er(this, "ctaRef", r.createRef()),
            er(this, "type", F.O.NORMAL),
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
            er(this, "nonce", (0, u.Z)()),
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
                    c = k.Z.getChannel(t.getChannelId());
                if (o || a) {
                    var u, d;
                    null == (d = this.ctaRef) || null == (u = d.current) || u.focus();
                    return;
                }
                let h = t.getChannelId(),
                    p = s ? A.TW.FORUM_TOOLBAR : A.TW.MESSAGE_INLINE_BUTTON;
                if (l && !this.userCanBurstReact())
                    return void (0, Z.m)({
                        analytics: {
                            type: Q.cd.BURST_REACTION_UPSELL,
                            page:
                                (null == c ? void 0 : c.getGuildId()) != null ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
                            section: null != c ? (0, M.s4)(c) : void 0,
                            object: $.qAy.EMOJI_REACTION_UPSELL,
                        },
                    });
                r
                    ? this.handleShowVerificationGate()
                    : i ||
                      (this.isMe()
                          ? (0, A.WO)({
                                channelId: h,
                                messageId: t.id,
                                emoji: n,
                                location: p,
                                options: { burst: l },
                            })
                          : (0, A.rU)(h, t.id, n, p, { burst: l }));
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
                    a = i === F.O.BURST;
                a &&
                    !this.isReactionEventActive &&
                    !l &&
                    r &&
                    (0, A.T6)({
                        channelId: n.getChannelId(),
                        messageId: n.id,
                        emoji: t,
                        key: W.I.HOVER,
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
                        (this.updateTooltipText(), D.Z.addChangeListener(this.updateTooltipText));
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
                    D.Z.removeChangeListener(this.updateTooltipText),
                    this.hideTimeout.start(200, this.hideTooltip, !1);
            }),
            er(this, "hideTooltip", () => {
                this.setState({ shouldShowTooltip: !1 }),
                    this.hasShownTooltip && G.default.track($.rMx.CLOSE_POPOUT, { nonce: this.nonce });
            }),
            er(this, "isMe", () => {
                let { me: e, me_burst: t, type: n } = this.props;
                return eu(e, t, n);
            }),
            er(this, "updateTooltipText", () => {
                let { message: e, emoji: t, type: n } = this.props,
                    i = (0, X.g)(e, t, n),
                    l = this.isKeyboardNavigation ? i : (0, X.g)(e, t, n, $.dG4);
                c()("string" == typeof i, "tooltipTextAria is not a string"),
                    this.setState({
                        tooltipText: l,
                        tooltipTextAria: i,
                        shouldShowTooltip: null != l && "" !== l,
                    });
            }),
            er(this, "renderLurkerModeUpsellPopout", (e) => {
                let { closePopout: t } = e,
                    { message: n, isLurking: i } = this.props,
                    r = k.Z.getChannel(n.getChannelId()),
                    o = L.Z.getGuild(null == r ? void 0 : r.getGuildId());
                return i && null != o
                    ? (0, l.jsx)(P.Z, {
                          ctaRef: this.ctaRef,
                          type: P.s.REACTIONS,
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
                    c = (n) => {
                        let i = k.Z.getChannel(t.getChannelId());
                        null != i &&
                            (this.handleLeave(),
                            ec(i, t, {
                                emoji: e,
                                reactionType: r ? F.O.BURST : F.O.NORMAL,
                            }));
                    },
                    u = "string" == typeof o ? "" === o.trim() : null == o,
                    d = () =>
                        u || null == o || null == s
                            ? null
                            : (0, l.jsx)(f.Text, {
                                  variant: "text-sm/normal",
                                  className: el.reactionTooltipText,
                                  "aria-label": s,
                                  children: o,
                              }),
                    h = () => {
                        let e = V.default.getCurrentUser();
                        return i
                            ? (0, l.jsxs)("div", {
                                  className: a()(el.burstReactionTooltipPrompt, el.burstReactionTooltipSpacer),
                                  children: [
                                      (0, H.I5)(e) &&
                                          (0, l.jsx)(f.SrA, {
                                              size: "md",
                                              className: el.burstReactionTooltipNitroIcon,
                                              color: y.JX.PREMIUM_TIER_2,
                                          }),
                                      (0, l.jsx)(f.Text, {
                                          variant: "text-sm/normal",
                                          className: el.reactionTooltipText,
                                          "aria-label": "super reaction tooltip cta",
                                          children: ee.intl.string(ee.t.ZbNJXl),
                                      }),
                                  ],
                              })
                            : this.userCanBurstReact()
                              ? (0, l.jsxs)("div", {
                                    className: a()(
                                        el.burstReactionTooltipPrompt,
                                        el.burstReactionTooltipSpacer,
                                        el.burstReactionTooltipPromptClickable,
                                    ),
                                    children: [
                                        (0, l.jsx)(f.SrA, {
                                            size: "md",
                                            className: el.burstReactionTooltipNitroIcon,
                                            color: y.JX.PREMIUM_TIER_2,
                                        }),
                                        (0, l.jsx)(f.P3F, {
                                            onClick: this.handleClick,
                                            children: (0, l.jsx)(f.Text, {
                                                variant: "text-sm/normal",
                                                className: el.reactionTooltipText,
                                                "aria-label": "super reaction tooltip cta",
                                                children: ee.intl.string(ee.t.kVfuVl),
                                            }),
                                        }),
                                    ],
                                })
                              : this.userCanBurstReact() || this.isKeyboardNavigation
                                ? null
                                : (0, l.jsx)("div", {
                                      className: a()(el.burstReactionTooltipPrompt, el.burstReactionTooltipSpacer),
                                      children: (0, l.jsxs)("div", {
                                          children: [
                                              (0, l.jsx)(f.Text, {
                                                  variant: "text-sm/normal",
                                                  "aria-label": "super reaction tooltip upsell",
                                                  children: ee.intl.string(ee.t.W1bMkp),
                                              }),
                                              (0, l.jsx)(w.Z, {
                                                  subscriptionTier: Q.Si.TIER_2,
                                                  textOptions: { textOverride: ee.intl.string(ee.t.mr4K7O) },
                                                  className: el.burstReactionTooltipUpsellCta,
                                                  onClick: (e) => e.stopPropagation(),
                                              }),
                                          ],
                                      }),
                                  });
                    };
                return n === F.O.BURST
                    ? (0, l.jsxs)("div", {
                          className: el.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, l.jsx)(f.P3F, {
                                  className: el.burstReactionTooltipInner,
                                  onClick: c,
                                  children: (0, l.jsxs)("div", {
                                      className: el.burstReactionTooltipMessage,
                                      children: [
                                          (0, l.jsx)(g.Z, {
                                              className: el.reactionTooltipEmoji,
                                              emojiId: e.id,
                                              emojiName: e.name,
                                              animated: e.animated,
                                              size: this.props.emojiSizeTooltip,
                                          }),
                                          d(),
                                      ],
                                  }),
                              }),
                              h(),
                              this.renderEmojiDetails(),
                          ],
                      })
                    : (0, l.jsxs)("div", {
                          className: el.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, l.jsx)(f.P3F, {
                                  onClick: c,
                                  children: (0, l.jsxs)("div", {
                                      className: el.reactionTooltipInner,
                                      children: [
                                          (0, l.jsx)(g.Z, {
                                              className: el.reactionTooltipEmoji,
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
                this.setState({ tooltipPositionKey: String(Date.now()) });
            }),
            er(this, "handleShowVerificationGate", () => {
                let { message: e, isPendingMember: t } = this.props;
                if (!t) return null;
                let n = k.Z.getChannel(e.getChannelId()),
                    i = L.Z.getGuild(null == n ? void 0 : n.getGuildId());
                null != i && (0, N.hk)(i.id);
            }),
            er(this, "handleSetReactionRef", (e) => {
                this.setState({ reactionRef: e });
            }),
            er(this, "trackReactionTooltipViewed", () => {
                let { emoji: e, message: t, type: n } = this.props,
                    i = V.default.getCurrentUser(),
                    l = k.Z.getChannel(t.getChannelId()),
                    r = n === F.O.BURST,
                    o = (0, H.I5)(i),
                    a = r ? Q.cd.EMOJI_IN_BURST_REACTION_HOVER : Q.cd.EMOJI_IN_REACTION_HOVER;
                !r || this.userCanBurstReact() || o || (a = Q.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
                    O.ZP.trackWithMetadata($.rMx.EXPRESSION_TOOLTIP_VIEWED, {
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
                        G.default.track($.rMx.PREMIUM_UPSELL_VIEWED, {
                            type: Q.cd.BURST_REACTION_UPSELL,
                            location: {
                                page:
                                    (null == l ? void 0 : l.getGuildId()) != null
                                        ? $.ZY5.GUILD_CHANNEL
                                        : $.ZY5.DM_CHANNEL,
                                section: (0, M.s4)(l),
                                object: $.qAy.EMOJI_REACTION_TOOLTIP_UPSELL,
                            },
                        });
            });
    }
}
er(ed, "defaultProps", { emojiSizeTooltip: "jumbo" });
let eh = r.memo((e) => {
        let { type: t, burst_colors: n, message: i, emoji: r } = e,
            o = t === F.O.BURST,
            a = (0, E.v)(o && null != n ? n : []),
            s = (0, p.e7)([W.Z], () => void 0 !== W.Z.getEffectForEmojiId(i.getChannelId(), i.id, r)),
            c = (0, p.e7)([j.Z], () => j.Z.useReducedMotion),
            u = _.Yk.useSetting(),
            d = V.default.getCurrentUser(),
            h = (0, H.I5)(d),
            m = (0, p.e7)([W.Z], () => W.Z.getReactionPickerAnimation(i.id, r.name, r.id)),
            f = o && (s || null != m);
        return (0, l.jsx)(
            ed,
            ea(eo({}, e), {
                colors: a,
                isBurstReaction: o,
                hideEmoji: f,
                userHasPremium: h,
                reduceMotion: c,
                animateEmoji: u,
                animationStartPosition: m,
            }),
        );
    }),
    ep = (e) => {
        var t, n, i;
        let {
            emojiId: r,
            expressionSourceGuild: o,
            hasJoinedExpressionSourceGuild: a,
            onClose: s,
            popoutData: c,
            currentGuildId: u,
            nonce: d,
        } = e;
        (0, I.u)({
            emojiId: r,
            currentGuildId: u,
            popoutData: c,
            emojiSourceGuildId: null == o ? void 0 : o.id,
            nonce: d,
        });
        let h = null != (n = null == o ? void 0 : o.isDiscoverable()) && n,
            p = null != o && h,
            m = (null != (i = null == o || null == (t = o.emojis) ? void 0 : t.length) ? i : 0) > 1;
        return p
            ? null == o
                ? null
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              className: et.reactionEmojiDetailsUnfurlGuildDetails,
                              children: (0, l.jsx)(K.Oe, {
                                  expressionSourceGuild: o,
                                  hasJoinedExpressionSourceGuild: a,
                                  isDisplayingJoinGuildButtonInPopout: c.type === z.$.JOIN_GUILD,
                              }),
                          }),
                          m &&
                              (0, l.jsx)(K.n_, {
                                  emojiId: r,
                                  expressionSourceGuild: o,
                                  hasJoinedEmojiSourceGuild: a,
                                  onClose: s,
                                  popoutData: c,
                                  isDisplayingButtonInTopSection: !1,
                              }),
                      ],
                  })
            : (0, l.jsx)(f.Text, {
                  variant: "text-sm/normal",
                  "aria-label": c.type,
                  children: c.emojiDescription,
              });
    },
    em = (e) => {
        var t;
        let { emojiId: n, refreshPositionKey: i, onClose: o, nonce: s } = e,
            { joinedEmojiSourceGuild: c } = (0, p.cj)([x.ZP, L.Z], () => {
                let e = x.ZP.getCustomEmojiById(n);
                return {
                    joinedEmojiSourceGuild:
                        (null == e ? void 0 : e.type) === S.B.GUILD
                            ? L.Z.getGuild(null == e ? void 0 : e.guildId)
                            : void 0,
                };
            }),
            [u, d] = r.useState(void 0),
            [h, m] = r.useState(void 0),
            [g, b] = r.useState(null),
            [j, v] = r.useState(!1),
            [O, y] = r.useState(!1),
            [T, E] = r.useState(!1),
            I = null != c,
            N = null != (t = null == u ? void 0 : u.isDiscoverable()) && t,
            P = U.Z.getGuildId(),
            C = null != P && (P === (null == u ? void 0 : u.id) || P === (null == c ? void 0 : c.id)),
            w = V.default.getCurrentUser(),
            Z = (0, z.a)({
                sourceType: g,
                expressionSourceApplication: null != h ? h : null,
                isPremium: H.ZP.isPremium(w),
                hasJoinedEmojiSourceGuild: I,
                isDiscoverable: N,
                emojiComesFromCurrentGuild: C,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1,
            });
        if (
            (r.useEffect(() => {
                j &&
                    !T &&
                    (async () => {
                        i(), y(!0);
                        let e = null != n ? await (0, R.Fi)(n) : null;
                        if (null != e)
                            switch ((b(e.type), e.type)) {
                                case R.w6.APPLICATION:
                                    m(e.application);
                                    break;
                                case R.w6.GUILD:
                                    d(e.guild);
                            }
                        else d(null);
                        y(!1), E(!0), i();
                    })();
            }, [n, j, T, i]),
            I)
        )
            return null;
        let A = () => {
                v(!j);
            },
            M = j && (void 0 !== u || void 0 !== h);
        return (0, l.jsxs)("div", {
            children: [
                M
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", { className: et.reactionEmojiDetailsDivider }),
                              null != Z.emojiDescription &&
                                  Z.type !== z.$.UNAVAILABLE &&
                                  (0, l.jsx)(f.Text, {
                                      variant: "text-sm/normal",
                                      "aria-label": Z.type,
                                      children: Z.emojiDescription,
                                  }),
                          ],
                      })
                    : (() => {
                          let e = ee.intl.string(ee.t["Igv+LS"]);
                          return (0, l.jsxs)(f.P3F, {
                              onClick: A,
                              className: et.reactionEmojiDetailsClickable,
                              children: [
                                  (0, l.jsx)(f.Text, {
                                      variant: "text-sm/normal",
                                      color: "none",
                                      "aria-label": e,
                                      children: e,
                                  }),
                                  (0, l.jsx)(f.CJ0, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: a()(et.reactionEmojiDetailsArrow, {
                                          [et.reactionEmojiDetailsArrowCollapsed]: !j,
                                      }),
                                  }),
                              ],
                          });
                      })(),
                O
                    ? (0, l.jsx)(J.SE, { className: et.emojiDetailsLoader })
                    : M &&
                      (0, l.jsx)(ep, {
                          emojiId: n,
                          expressionSourceGuild: u,
                          hasJoinedExpressionSourceGuild: I,
                          onClose: o,
                          popoutData: Z,
                          currentGuildId: P,
                          nonce: s,
                      }),
            ],
        });
    };
