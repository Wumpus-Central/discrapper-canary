n.d(t, {
    aO: () => ec,
    le: () => eg,
    op: () => ep,
    y4: () => eh,
}),
    n(388685),
    n(781311);
var r,
    i = n(951288),
    a = n(647438),
    o = n(120356),
    s = n.n(o),
    l = n(512722),
    c = n.n(l),
    u = n(772848),
    d = n(748780),
    f = n(866442),
    _ = n(442837),
    p = n(846519),
    h = n(481060),
    m = n(596454),
    g = n(607070),
    E = n(446489),
    b = n(367907),
    y = n(436774),
    O = n(98474),
    v = n(339085),
    I = n(906411),
    T = n(56314),
    S = n(231053),
    A = n(944386),
    C = n(305325),
    N = n(33154),
    R = n(692147),
    P = n(767714),
    w = n(659215),
    D = n(222677),
    x = n(995774),
    L = n(6839),
    M = n(695346),
    j = n(592125),
    k = n(430824),
    U = n(542578),
    G = n(914010),
    B = n(594174),
    Z = n(451478),
    F = n(626135),
    V = n(74538),
    H = n(960020),
    Y = n(566006),
    W = n(886132),
    K = n(183023),
    z = n(524444),
    q = n(89729),
    X = n(620652),
    Q = n(640753),
    J = n(981631),
    $ = n(474936),
    ee = n(388032),
    et = n(975900),
    en = n(127947),
    er = n(893973),
    ei = n(827610);
function ea(e, t, n) {
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
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                ea(e, t, n[t]);
            });
    }
    return e;
}
function es(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function el(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : es(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ec = 12,
    eu = 200,
    ed = 300,
    ef = 500,
    e_ = 750;
function ep(e, t, n) {
    (0, h.h7j)((e) =>
        (0, i.jsx)(
            L.default,
            el(eo({}, e), {
                message: t,
                selectedReaction: n,
            }),
        ),
    );
}
function eh(e, t, n) {
    return (n === Y.O.BURST && t) || (n === Y.O.NORMAL && e);
}
class em extends (r = a.PureComponent) {
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
        Z.Z.isFocused()
            ? (this.scale.setValue(0),
              this.opacity.setValue(0),
              d.Z.parallel([
                  d.Z.timing(this.scale, {
                      toValue: 1,
                      duration: t ? eu : ed,
                      easing: d.Z.Easing.inOut(d.Z.Easing.back()),
                  }),
                  d.Z.timing(this.opacity, {
                      toValue: 1,
                      duration: t ? eu : ed,
                  }),
              ]).start(e))
            : (this.scale.setValue(1), this.opacity.setValue(1), e());
    }
    render() {
        let e,
            t,
            {
                count: n,
                burst_count: r,
                colors: a,
                isBurstReaction: o,
                hideCount: l,
                emoji: c,
                readOnly: u,
                isLurking: _,
                isGuest: p,
                isPendingMember: g,
                className: b,
                useChatFontScaling: y,
                message: v,
                hideEmoji: I,
                animationStartPosition: T,
                emojiSize: S,
            } = this.props,
            { shouldShowTooltip: A, tooltipTextAria: C, reactionRef: N, tooltipPositionKey: P } = this.state,
            w = y ? er : en,
            D = {
                transform: [{ scale: this.scale }],
                opacity: this.opacity,
            },
            L = o ? r : n;
        if (o && null != a) {
            var M;
            let { accentColor: n, backgroundColor: r, opacity: i } = a,
                o = null != (M = (0, f.wK)(null != r ? r : "", i)) ? M : "";
            this.isMe() && (D.borderColor = r), (D.background = o), (e = n), (t = n);
        }
        let j = null == N ? void 0 : N.getBoundingClientRect(),
            k = null != T && null != j,
            U = null == T;
        return (0, i.jsx)(h.yRy, {
            targetElementRef: { current: N },
            shouldShow: A,
            "aria-label": null != C && C,
            renderPopout: this.renderTooltip,
            nudgeAlignIntoViewport: !0,
            position: "top",
            align: "center",
            positionKey: P,
            children: () =>
                (0, i.jsx)("div", {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    ref: this.handleSetReactionRef,
                    children: (0, i.jsx)(d.Z.div, {
                        className: s()(w.reaction, b, {
                            [w.reactionMe]: this.isMe(),
                            [w.reactionReadOnly]: u && !_ && !g && !p,
                            [w.shakeReaction]: I && null == T,
                        }),
                        style: D,
                        children: (0, i.jsx)(h.yRy, {
                            targetElementRef: this.upsellPopoutTargetRef,
                            renderPopout: this.renderLurkerModeUpsellPopout,
                            position: "top",
                            children: (n) =>
                                (0, i.jsxs)(
                                    h.P3F,
                                    el(eo({}, n), {
                                        innerRef: this.upsellPopoutTargetRef,
                                        className: w.reactionInner,
                                        onClick: this.handleClick,
                                        "aria-disabled": u,
                                        "aria-label": (0, x.iD)(this.isMe(), L, c, o),
                                        "aria-pressed": this.isMe(),
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: s()({ [w.burstGlow]: o }),
                                                style: { boxShadow: "0 0 16px ".concat(t) },
                                            }),
                                            (0, i.jsxs)("div", {
                                                children: [
                                                    o
                                                        ? (0, i.jsxs)(i.Fragment, {
                                                              children: [
                                                                  k &&
                                                                      (0, i.jsx)(O.Z, {
                                                                          messageId: v.id,
                                                                          emoji: c,
                                                                          startPosition: T,
                                                                          targetPosition: j,
                                                                      }),
                                                                  U &&
                                                                      (0, i.jsx)(Q.Z, {
                                                                          count: r,
                                                                          emoji: c,
                                                                          channelId: v.getChannelId(),
                                                                          messageId: v.id,
                                                                          useChatFontScaling: y,
                                                                          color: t,
                                                                          emojiSize: X.M.NORMAL,
                                                                      }),
                                                              ],
                                                          })
                                                        : null,
                                                    (0, i.jsx)(m.Z, {
                                                        className: s()({ [w.hideEmoji]: I }),
                                                        emojiId: c.id,
                                                        emojiName: c.name,
                                                        size: S,
                                                        animated: c.animated,
                                                    }),
                                                ],
                                            }),
                                            l
                                                ? null
                                                : (0, i.jsx)(E.Z, {
                                                      className: w.reactionCount,
                                                      value: L,
                                                      color: e,
                                                      digitWidth: ec,
                                                  }),
                                            (0, i.jsx)(R.Z, {
                                                count: L,
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
            ea(this, "isReactionEventActive", !1),
            ea(this, "isKeyboardNavigation", !1),
            ea(this, "scale", new d.Z.Value(1)),
            ea(this, "opacity", new d.Z.Value(1)),
            ea(this, "timeout", new p.V7()),
            ea(this, "hideTimeout", new p.V7()),
            ea(this, "ctaRef", a.createRef()),
            ea(this, "type", Y.O.NORMAL),
            ea(this, "colors", {
                backgroundColor: void 0,
                borderColor: void 0,
                textColor: void 0,
            }),
            ea(this, "state", {
                shouldShowTooltip: !1,
                tooltipText: null,
                tooltipTextAria: null,
                reactionRef: null,
                tooltipPositionKey: void 0,
            }),
            ea(this, "hasShownTooltip", !1),
            ea(this, "nonce", (0, u.Z)()),
            ea(this, "upsellPopoutTargetRef", a.createRef()),
            ea(this, "userCanBurstReact", () => this.props.userHasPremium),
            ea(this, "handleClick", (e) => {
                e.stopPropagation();
                let {
                        message: t,
                        emoji: n,
                        readOnly: r,
                        isBurstReaction: i,
                        isPendingMember: a,
                        isLurking: o,
                        isGuest: s,
                        isForumToolbar: l,
                    } = this.props,
                    c = j.Z.getChannel(t.getChannelId());
                if (o || s) {
                    var u, d;
                    null == (d = this.ctaRef) || null == (u = d.current) || u.focus();
                    return;
                }
                let f = t.getChannelId(),
                    _ = l ? D.TW.FORUM_TOOLBAR : D.TW.MESSAGE_INLINE_BUTTON;
                if (i && !this.userCanBurstReact())
                    return void (0, w.m)({
                        analytics: {
                            type: $.cd.BURST_REACTION_UPSELL,
                            page:
                                (null == c ? void 0 : c.getGuildId()) != null ? J.ZY5.GUILD_CHANNEL : J.ZY5.DM_CHANNEL,
                            section: null != c ? (0, x.s4)(c) : void 0,
                            object: J.qAy.EMOJI_REACTION_UPSELL,
                        },
                    });
                a
                    ? this.handleShowVerificationGate()
                    : r ||
                      (this.isMe()
                          ? (0, D.WO)({
                                channelId: f,
                                messageId: t.id,
                                emoji: n,
                                location: _,
                                options: { burst: i },
                            })
                          : (0, D.rU)(f, t.id, n, _, { burst: i }));
            }),
            ea(this, "handleEnter", (e) => {
                let {
                        emoji: t,
                        message: n,
                        type: r,
                        reduceMotion: i,
                        animateEmoji: a,
                        autoUnfurlReactionTooltip: o,
                    } = this.props,
                    s = r === Y.O.BURST;
                s &&
                    !this.isReactionEventActive &&
                    !i &&
                    a &&
                    (0, D.T6)({
                        channelId: n.getChannelId(),
                        messageId: n.id,
                        emoji: t,
                        key: H.I.HOVER,
                    }),
                    (this.isReactionEventActive = !0),
                    (this.isKeyboardNavigation = "focus" === e.type),
                    this.timeout.start(s ? e_ : o ? eu : ef, this.showTooltip, !1);
            }),
            ea(this, "handleEnterTooltip", () => {
                (this.isReactionEventActive = !0), this.handleShowTooltip();
            }),
            ea(this, "handleShowTooltip", () => {
                this.hideTimeout.stop(),
                    this.isReactionEventActive &&
                        (this.updateTooltipText(), U.Z.addChangeListener(this.updateTooltipText));
            }),
            ea(this, "showTooltip", () => {
                this.props.readOnly ||
                    (this.handleShowTooltip(),
                    this.isReactionEventActive && this.trackReactionTooltipViewed(),
                    (this.hasShownTooltip = !0));
            }),
            ea(this, "handleLeave", () => {
                (this.isReactionEventActive = !1),
                    (this.isKeyboardNavigation = !1),
                    this.timeout.stop(),
                    U.Z.removeChangeListener(this.updateTooltipText),
                    this.hideTimeout.start(200, this.hideTooltip, !1);
            }),
            ea(this, "hideTooltip", () => {
                this.setState({ shouldShowTooltip: !1 }),
                    this.hasShownTooltip && F.default.track(J.rMx.CLOSE_POPOUT, { nonce: this.nonce });
            }),
            ea(this, "isMe", () => {
                let { me: e, me_burst: t, type: n } = this.props;
                return eh(e, t, n);
            }),
            ea(this, "updateTooltipText", () => {
                let { message: e, emoji: t, type: n } = this.props,
                    r = (0, q.g)(e, t, n),
                    i = this.isKeyboardNavigation ? r : (0, q.g)(e, t, n, J.dG4);
                c()("string" == typeof r, "tooltipTextAria is not a string"),
                    this.setState({
                        tooltipText: i,
                        tooltipTextAria: r,
                        shouldShowTooltip: null != i && "" !== i,
                    });
            }),
            ea(this, "renderLurkerModeUpsellPopout", (e) => {
                let { closePopout: t } = e,
                    { message: n, isLurking: r } = this.props,
                    a = j.Z.getChannel(n.getChannelId()),
                    o = k.Z.getGuild(null == a ? void 0 : a.getGuildId());
                return r && null != o
                    ? (0, i.jsx)(N.Z, {
                          ctaRef: this.ctaRef,
                          type: N.s.REACTIONS,
                          guild: o,
                          closePopout: t,
                      })
                    : (0, i.jsx)(i.Fragment, {});
            }),
            ea(this, "renderEmojiDetails", () => {
                let e = this.props.emoji;
                return (
                    null != e.id &&
                    (0, i.jsx)(eb, {
                        emojiId: e.id,
                        refreshPositionKey: this.refreshTooltipPositionKey,
                        onClose: this.handleLeave,
                        nonce: this.nonce,
                    })
                );
            }),
            ea(this, "renderTooltip", () => {
                let { emoji: e, message: t, type: n, me_burst: r, isBurstReaction: a = !1 } = this.props,
                    { tooltipText: o, tooltipTextAria: l } = this.state,
                    c = (n) => {
                        let r = j.Z.getChannel(t.getChannelId());
                        null != r &&
                            (this.handleLeave(),
                            ep(r, t, {
                                emoji: e,
                                reactionType: a ? Y.O.BURST : Y.O.NORMAL,
                            }));
                    },
                    u = "string" == typeof o ? "" === o.trim() : null == o,
                    d = () =>
                        u || null == o || null == l
                            ? null
                            : (0, i.jsx)(h.Text, {
                                  variant: "text-sm/normal",
                                  className: ei.reactionTooltipText,
                                  "aria-label": l,
                                  children: o,
                              }),
                    f = () => {
                        let e = B.default.getCurrentUser();
                        return r
                            ? (0, i.jsxs)("div", {
                                  className: s()(ei.burstReactionTooltipPrompt, ei.burstReactionTooltipSpacer),
                                  children: [
                                      (0, V.I5)(e) &&
                                          (0, i.jsx)(h.SrA, {
                                              size: "md",
                                              className: ei.burstReactionTooltipNitroIcon,
                                              color: y.JX.PREMIUM_TIER_2,
                                          }),
                                      (0, i.jsx)(h.Text, {
                                          variant: "text-sm/normal",
                                          className: ei.reactionTooltipText,
                                          "aria-label": "super reaction tooltip cta",
                                          children: ee.intl.string(ee.t.ZbNJXn),
                                      }),
                                  ],
                              })
                            : this.userCanBurstReact()
                              ? (0, i.jsxs)("div", {
                                    className: s()(
                                        ei.burstReactionTooltipPrompt,
                                        ei.burstReactionTooltipSpacer,
                                        ei.burstReactionTooltipPromptClickable,
                                    ),
                                    children: [
                                        (0, i.jsx)(h.SrA, {
                                            size: "md",
                                            className: ei.burstReactionTooltipNitroIcon,
                                            color: y.JX.PREMIUM_TIER_2,
                                        }),
                                        (0, i.jsx)(h.P3F, {
                                            onClick: this.handleClick,
                                            children: (0, i.jsx)(h.Text, {
                                                variant: "text-sm/normal",
                                                className: ei.reactionTooltipText,
                                                "aria-label": "super reaction tooltip cta",
                                                children: ee.intl.string(ee.t.kVfuVu),
                                            }),
                                        }),
                                    ],
                                })
                              : this.userCanBurstReact() || this.isKeyboardNavigation
                                ? null
                                : (0, i.jsx)("div", {
                                      className: s()(ei.burstReactionTooltipPrompt, ei.burstReactionTooltipSpacer),
                                      children: (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(h.Text, {
                                                  variant: "text-sm/normal",
                                                  "aria-label": "super reaction tooltip upsell",
                                                  children: ee.intl.string(ee.t.W1bMkq),
                                              }),
                                              (0, i.jsx)(P.Z, {
                                                  subscriptionTier: $.Si.TIER_2,
                                                  textOptions: { textOverride: ee.intl.string(ee.t.mr4K7D) },
                                                  className: ei.burstReactionTooltipUpsellCta,
                                                  onClick: (e) => e.stopPropagation(),
                                              }),
                                          ],
                                      }),
                                  });
                    };
                return n === Y.O.BURST
                    ? (0, i.jsxs)("div", {
                          className: ei.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, i.jsx)(h.P3F, {
                                  className: ei.burstReactionTooltipInner,
                                  onClick: c,
                                  children: (0, i.jsxs)("div", {
                                      className: ei.burstReactionTooltipMessage,
                                      children: [
                                          (0, i.jsx)(m.Z, {
                                              className: ei.reactionTooltipEmoji,
                                              emojiId: e.id,
                                              emojiName: e.name,
                                              animated: e.animated,
                                              size: this.props.emojiSizeTooltip,
                                          }),
                                          d(),
                                      ],
                                  }),
                              }),
                              f(),
                              this.renderEmojiDetails(),
                          ],
                      })
                    : (0, i.jsxs)("div", {
                          className: ei.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, i.jsx)(h.P3F, {
                                  onClick: c,
                                  children: (0, i.jsxs)("div", {
                                      className: ei.reactionTooltipInner,
                                      children: [
                                          (0, i.jsx)(m.Z, {
                                              className: ei.reactionTooltipEmoji,
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
            ea(this, "refreshTooltipPositionKey", () => {
                this.setState({ tooltipPositionKey: String(Date.now()) });
            }),
            ea(this, "handleShowVerificationGate", () => {
                let { message: e, isPendingMember: t } = this.props;
                if (!t) return null;
                let n = j.Z.getChannel(e.getChannelId()),
                    r = k.Z.getGuild(null == n ? void 0 : n.getGuildId());
                null != r && (0, C.hk)(r.id);
            }),
            ea(this, "handleSetReactionRef", (e) => {
                this.setState({ reactionRef: e });
            }),
            ea(this, "trackReactionTooltipViewed", () => {
                let { emoji: e, message: t, type: n } = this.props,
                    r = B.default.getCurrentUser(),
                    i = j.Z.getChannel(t.getChannelId()),
                    a = n === Y.O.BURST,
                    o = (0, V.I5)(r),
                    s = a ? $.cd.EMOJI_IN_BURST_REACTION_HOVER : $.cd.EMOJI_IN_REACTION_HOVER;
                !a || this.userCanBurstReact() || o || (s = $.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
                    b.ZP.trackWithMetadata(J.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                        type: s,
                        expression_id: e.id,
                        expression_name: e.name,
                        is_animated: e.animated,
                        is_custom: null != e.id,
                        nonce: this.nonce,
                    }),
                    !a ||
                        null == i ||
                        o ||
                        this.userCanBurstReact() ||
                        F.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
                            type: $.cd.BURST_REACTION_UPSELL,
                            location: {
                                page:
                                    (null == i ? void 0 : i.getGuildId()) != null
                                        ? J.ZY5.GUILD_CHANNEL
                                        : J.ZY5.DM_CHANNEL,
                                section: (0, x.s4)(i),
                                object: J.qAy.EMOJI_REACTION_TOOLTIP_UPSELL,
                            },
                        });
            });
    }
}
ea(em, "defaultProps", { emojiSizeTooltip: "jumbo" });
let eg = a.memo((e) => {
        let { type: t, burst_colors: n, message: r, emoji: a } = e,
            o = t === Y.O.BURST,
            s = (0, T.v)(o && null != n ? n : []),
            l = (0, _.e7)([H.Z], () => void 0 !== H.Z.getEffectForEmojiId(r.getChannelId(), r.id, a)),
            c = (0, _.e7)([g.Z], () => g.Z.useReducedMotion),
            u = M.Yk.useSetting(),
            d = B.default.getCurrentUser(),
            f = (0, V.I5)(d),
            p = (0, _.e7)([H.Z], () => H.Z.getReactionPickerAnimation(r.id, a.name, a.id)),
            h = o && (l || null != p);
        return (0, i.jsx)(
            em,
            el(eo({}, e), {
                colors: s,
                isBurstReaction: o,
                hideEmoji: h,
                userHasPremium: f,
                reduceMotion: c,
                animateEmoji: u,
                animationStartPosition: p,
            }),
        );
    }),
    eE = (e) => {
        var t, n, r;
        let {
            emojiId: a,
            expressionSourceGuild: o,
            hasJoinedExpressionSourceGuild: s,
            onClose: l,
            popoutData: c,
            currentGuildId: u,
            nonce: d,
        } = e;
        (0, A.u)({
            emojiId: a,
            currentGuildId: u,
            popoutData: c,
            emojiSourceGuildId: null == o ? void 0 : o.id,
            nonce: d,
        });
        let f = null != (n = null == o ? void 0 : o.isDiscoverable()) && n,
            _ = null != o && f,
            p = (null != (r = null == o || null == (t = o.emojis) ? void 0 : t.length) ? r : 0) > 1,
            m = () =>
                null == o
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: et.reactionEmojiDetailsUnfurlGuildDetails,
                                  children: (0, i.jsx)(K.Oe, {
                                      expressionSourceGuild: o,
                                      hasJoinedExpressionSourceGuild: s,
                                      isDisplayingJoinGuildButtonInPopout: c.type === W.$.JOIN_GUILD,
                                  }),
                              }),
                              p &&
                                  (0, i.jsx)(K.n_, {
                                      emojiId: a,
                                      expressionSourceGuild: o,
                                      hasJoinedEmojiSourceGuild: s,
                                      onClose: l,
                                      popoutData: c,
                                      isDisplayingButtonInTopSection: !1,
                                  }),
                          ],
                      });
        return _
            ? m()
            : (0, i.jsx)(h.Text, {
                  variant: "text-sm/normal",
                  "aria-label": c.type,
                  children: c.emojiDescription,
              });
    },
    eb = (e) => {
        var t;
        let { emojiId: n, refreshPositionKey: r, onClose: o, nonce: l } = e,
            { joinedEmojiSourceGuild: c } = (0, _.cj)([v.ZP, k.Z], () => {
                let e = v.ZP.getCustomEmojiById(n);
                return {
                    joinedEmojiSourceGuild:
                        (null == e ? void 0 : e.type) === I.B.GUILD
                            ? k.Z.getGuild(null == e ? void 0 : e.guildId)
                            : void 0,
                };
            }),
            [u, d] = a.useState(void 0),
            [f, p] = a.useState(void 0),
            [m, g] = a.useState(null),
            [E, b] = a.useState(!1),
            [y, O] = a.useState(!1),
            [T, A] = a.useState(!1),
            C = null != c,
            N = null != (t = null == u ? void 0 : u.isDiscoverable()) && t,
            R = G.Z.getGuildId(),
            P = null != R && (R === (null == u ? void 0 : u.id) || R === (null == c ? void 0 : c.id)),
            w = B.default.getCurrentUser(),
            D = (0, W.a)({
                sourceType: m,
                expressionSourceApplication: null != f ? f : null,
                isPremium: V.ZP.isPremium(w),
                hasJoinedEmojiSourceGuild: C,
                isDiscoverable: N,
                emojiComesFromCurrentGuild: P,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1,
            });
        if (
            (a.useEffect(() => {
                E &&
                    !T &&
                    (async () => {
                        r(), O(!0);
                        let e = null != n ? await (0, S.Fi)(n) : null;
                        if (null != e)
                            switch ((g(e.type), e.type)) {
                                case S.w6.APPLICATION:
                                    p(e.application);
                                    break;
                                case S.w6.GUILD:
                                    d(e.guild);
                            }
                        else d(null);
                        O(!1), A(!0), r();
                    })();
            }, [n, E, T, r]),
            C)
        )
            return null;
        let x = () => {
                b(!E);
            },
            L = () => {
                let e = ee.intl.string(ee.t["Igv+LS"]);
                return (0, i.jsxs)(h.P3F, {
                    onClick: x,
                    className: et.reactionEmojiDetailsClickable,
                    children: [
                        (0, i.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            "aria-label": e,
                            children: e,
                        }),
                        (0, i.jsx)(h.CJ0, {
                            size: "xs",
                            color: "currentColor",
                            className: s()(et.reactionEmojiDetailsArrow, {
                                [et.reactionEmojiDetailsArrowCollapsed]: !E,
                            }),
                        }),
                    ],
                });
            },
            M = E && (void 0 !== u || void 0 !== f),
            j = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("div", { className: et.reactionEmojiDetailsDivider }),
                        null != D.emojiDescription &&
                            D.type !== W.$.UNAVAILABLE &&
                            (0, i.jsx)(h.Text, {
                                variant: "text-sm/normal",
                                "aria-label": D.type,
                                children: D.emojiDescription,
                            }),
                    ],
                });
        return (0, i.jsxs)("div", {
            children: [
                M ? j() : L(),
                y
                    ? (0, i.jsx)(z.SE, { className: et.emojiDetailsLoader })
                    : M &&
                      (0, i.jsx)(eE, {
                          emojiId: n,
                          expressionSourceGuild: u,
                          hasJoinedExpressionSourceGuild: C,
                          onClose: o,
                          popoutData: D,
                          currentGuildId: R,
                          nonce: l,
                      }),
            ],
        });
    };
