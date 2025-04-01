n.d(t, {
    aO: () => ea,
    le: () => eu,
    op: () => es,
    y4: () => el
}),
    n(47120),
    n(566702);
var i,
    o = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(772848),
    c = n(748780),
    u = n(866442),
    d = n(442837),
    h = n(846519),
    p = n(481060),
    m = n(596454),
    f = n(785388),
    g = n(607070),
    b = n(446489),
    v = n(367907),
    j = n(436774),
    O = n(98474),
    y = n(339085),
    T = n(906411),
    x = n(56314),
    _ = n(231053),
    S = n(944386),
    E = n(305325),
    P = n(33154),
    N = n(692147),
    C = n(197115),
    R = n(659215),
    I = n(222677),
    w = n(995774),
    Z = n(695346),
    A = n(592125),
    M = n(430824),
    L = n(542578),
    k = n(914010),
    D = n(594174),
    U = n(451478),
    B = n(626135),
    F = n(74538),
    W = n(960020),
    V = n(566006),
    G = n(886132),
    H = n(183023),
    z = n(524444),
    J = n(89729),
    X = n(620652),
    K = n(640753),
    Y = n(981631),
    q = n(474936),
    $ = n(388032),
    Q = n(642318),
    ee = n(933190),
    et = n(357653),
    en = n(909689);
function ei(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function eo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                ei(e, t, n[t]);
            });
    }
    return e;
}
function er(e, t) {
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
let ea = 9;
function es(e, t, n) {
    (0, p.h7j)((e) =>
        (0, o.jsx)(
            f.default,
            er(eo({}, e), {
                message: t,
                selectedReaction: n
            })
        )
    );
}
function el(e, t, n) {
    return (n === V.O.BURST && t) || (n === V.O.NORMAL && e);
}
class ec extends (i = r.PureComponent) {
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
        U.Z.isFocused()
            ? (this.scale.setValue(0),
              this.opacity.setValue(0),
              c.Z.parallel([
                  c.Z.timing(this.scale, {
                      toValue: 1,
                      duration: t ? 200 : 300,
                      easing: c.Z.Easing.inOut(c.Z.Easing.back())
                  }),
                  c.Z.timing(this.opacity, {
                      toValue: 1,
                      duration: t ? 200 : 300
                  })
              ]).start(e))
            : (this.scale.setValue(1), this.opacity.setValue(1), e());
    }
    render() {
        let e, t;
        let { count: n, burst_count: i, colors: r, isBurstReaction: a, hideCount: l, emoji: d, readOnly: h, isLurking: f, isGuest: g, isPendingMember: v, className: j, useChatFontScaling: y, message: T, hideEmoji: x, animationStartPosition: _, emojiSize: S } = this.props,
            { shouldShowTooltip: E, tooltipTextAria: P, reactionRef: C, tooltipPositionKey: R } = this.state,
            I = y ? et : ee,
            Z = {
                transform: [{ scale: this.scale }],
                opacity: this.opacity
            },
            A = a ? i : n;
        if (a && null != r) {
            var M;
            let { accentColor: n, backgroundColor: i, opacity: o } = r,
                a = null !== (M = (0, u.wK)(null != i ? i : '', o)) && void 0 !== M ? M : '';
            this.isMe() && (Z.borderColor = i), (Z.background = a), (e = n), (t = n);
        }
        let L = null == C ? void 0 : C.getBoundingClientRect(),
            k = null != _ && null != L,
            D = null == _;
        return (0, o.jsx)(p.yRy, {
            targetElementRef: { current: C },
            shouldShow: E,
            'aria-label': null != P && P,
            renderPopout: this.renderTooltip,
            nudgeAlignIntoViewport: !0,
            position: 'top',
            align: 'center',
            positionKey: R,
            children: () =>
                (0, o.jsx)('div', {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    ref: this.handleSetReactionRef,
                    children: (0, o.jsx)(c.Z.div, {
                        className: s()(I.reaction, j, {
                            [I.reactionMe]: this.isMe(),
                            [I.reactionReadOnly]: h && !f && !v && !g,
                            [I.shakeReaction]: x && null == _
                        }),
                        style: Z,
                        children: (0, o.jsx)(p.yRy, {
                            targetElementRef: this.upsellPopoutTargetRef,
                            renderPopout: this.renderLurkerModeUpsellPopout,
                            position: 'top',
                            children: (n) =>
                                (0, o.jsxs)(
                                    p.P3F,
                                    er(eo({}, n), {
                                        innerRef: this.upsellPopoutTargetRef,
                                        className: I.reactionInner,
                                        onClick: this.handleClick,
                                        'aria-disabled': h,
                                        'aria-label': (0, w.iD)(this.isMe(), A, d, a),
                                        'aria-pressed': this.isMe(),
                                        children: [
                                            (0, o.jsx)('div', {
                                                className: s()({ [I.burstGlow]: a }),
                                                style: { boxShadow: '0 0 16px '.concat(t) }
                                            }),
                                            (0, o.jsxs)('div', {
                                                children: [
                                                    a
                                                        ? (0, o.jsxs)(o.Fragment, {
                                                              children: [
                                                                  k &&
                                                                      (0, o.jsx)(O.Z, {
                                                                          messageId: T.id,
                                                                          emoji: d,
                                                                          startPosition: _,
                                                                          targetPosition: L
                                                                      }),
                                                                  D &&
                                                                      (0, o.jsx)(K.Z, {
                                                                          count: i,
                                                                          emoji: d,
                                                                          channelId: T.getChannelId(),
                                                                          messageId: T.id,
                                                                          useChatFontScaling: y,
                                                                          color: t,
                                                                          emojiSize: 'reactionLarge' === S ? X.M.NORMAL_NEW : X.M.NORMAL
                                                                      })
                                                              ]
                                                          })
                                                        : null,
                                                    (0, o.jsx)(m.Z, {
                                                        className: s()({ [I.hideEmoji]: x }),
                                                        emojiId: d.id,
                                                        emojiName: d.name,
                                                        size: S,
                                                        animated: d.animated
                                                    })
                                                ]
                                            }),
                                            l
                                                ? null
                                                : (0, o.jsx)(b.Z, {
                                                      className: I.reactionCount,
                                                      value: A,
                                                      color: e,
                                                      digitWidth: ea
                                                  }),
                                            (0, o.jsx)(N.Z, {
                                                count: A,
                                                reactionRef: C
                                            })
                                        ]
                                    })
                                )
                        })
                    })
                })
        });
    }
    constructor(...e) {
        super(...e),
            ei(this, 'isReactionEventActive', !1),
            ei(this, 'isKeyboardNavigation', !1),
            ei(this, 'scale', new c.Z.Value(1)),
            ei(this, 'opacity', new c.Z.Value(1)),
            ei(this, 'timeout', new h.V7()),
            ei(this, 'hideTimeout', new h.V7()),
            ei(this, 'ctaRef', r.createRef()),
            ei(this, 'type', V.O.NORMAL),
            ei(this, 'colors', {
                backgroundColor: void 0,
                borderColor: void 0,
                textColor: void 0
            }),
            ei(this, 'state', {
                shouldShowTooltip: !1,
                tooltipText: null,
                tooltipTextAria: null,
                reactionRef: null,
                tooltipPositionKey: void 0
            }),
            ei(this, 'hasShownTooltip', !1),
            ei(this, 'nonce', (0, l.Z)()),
            ei(this, 'upsellPopoutTargetRef', r.createRef()),
            ei(this, 'userCanBurstReact', () => this.props.userHasPremium),
            ei(this, 'handleClick', (e) => {
                e.stopPropagation();
                let { message: t, emoji: n, readOnly: i, isBurstReaction: o, isPendingMember: r, isLurking: a, isGuest: s, isForumToolbar: l } = this.props,
                    c = A.Z.getChannel(t.getChannelId());
                if (a || s) {
                    var u, d;
                    null === (d = this.ctaRef) || void 0 === d || null === (u = d.current) || void 0 === u || u.focus();
                    return;
                }
                let h = t.getChannelId(),
                    p = l ? I.TW.FORUM_TOOLBAR : I.TW.MESSAGE_INLINE_BUTTON;
                if (o && !this.userCanBurstReact()) {
                    (0, R.m)({
                        analytics: {
                            type: q.cd.BURST_REACTION_UPSELL,
                            page: (null == c ? void 0 : c.getGuildId()) != null ? Y.ZY5.GUILD_CHANNEL : Y.ZY5.DM_CHANNEL,
                            section: null != c ? (0, w.s4)(c) : void 0,
                            object: Y.qAy.EMOJI_REACTION_UPSELL
                        }
                    });
                    return;
                }
                r
                    ? this.handleShowVerificationGate()
                    : i ||
                      (this.isMe()
                          ? (0, I.WO)({
                                channelId: h,
                                messageId: t.id,
                                emoji: n,
                                location: p,
                                options: { burst: o }
                            })
                          : (0, I.rU)(h, t.id, n, p, { burst: o }));
            }),
            ei(this, 'handleEnter', (e) => {
                let { emoji: t, message: n, type: i, reduceMotion: o, animateEmoji: r, autoUnfurlReactionTooltip: a } = this.props,
                    s = i === V.O.BURST;
                s &&
                    !this.isReactionEventActive &&
                    !o &&
                    r &&
                    (0, I.T6)({
                        channelId: n.getChannelId(),
                        messageId: n.id,
                        emoji: t,
                        key: W.I.HOVER
                    }),
                    (this.isReactionEventActive = !0),
                    (this.isKeyboardNavigation = 'focus' === e.type),
                    this.timeout.start(s ? 750 : a ? 200 : 500, this.showTooltip, !1);
            }),
            ei(this, 'handleEnterTooltip', () => {
                (this.isReactionEventActive = !0), this.handleShowTooltip();
            }),
            ei(this, 'handleShowTooltip', () => {
                this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), L.Z.addChangeListener(this.updateTooltipText));
            }),
            ei(this, 'showTooltip', () => {
                this.props.readOnly || (this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), (this.hasShownTooltip = !0));
            }),
            ei(this, 'handleLeave', () => {
                (this.isReactionEventActive = !1), (this.isKeyboardNavigation = !1), this.timeout.stop(), L.Z.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1);
            }),
            ei(this, 'hideTooltip', () => {
                this.setState({ shouldShowTooltip: !1 }), this.hasShownTooltip && B.default.track(Y.rMx.CLOSE_POPOUT, { nonce: this.nonce });
            }),
            ei(this, 'isMe', () => {
                let { me: e, me_burst: t, type: n } = this.props;
                return el(e, t, n);
            }),
            ei(this, 'updateTooltipText', () => {
                let { message: e, emoji: t, type: n } = this.props,
                    i = (0, J.g)(e, t, n),
                    o = this.isKeyboardNavigation ? i : (0, J.g)(e, t, n, Y.dG4);
                this.setState({
                    tooltipText: o,
                    tooltipTextAria: i,
                    shouldShowTooltip: null != o && '' !== o
                });
            }),
            ei(this, 'renderLurkerModeUpsellPopout', (e) => {
                let { closePopout: t } = e,
                    { message: n, isLurking: i } = this.props,
                    r = A.Z.getChannel(n.getChannelId()),
                    a = M.Z.getGuild(null == r ? void 0 : r.getGuildId());
                return i && null != a
                    ? (0, o.jsx)(P.Z, {
                          ctaRef: this.ctaRef,
                          type: P.s.REACTIONS,
                          guild: a,
                          closePopout: t
                      })
                    : (0, o.jsx)(o.Fragment, {});
            }),
            ei(this, 'renderEmojiDetails', () => {
                let e = this.props.emoji;
                return (
                    null != e.id &&
                    (0, o.jsx)(eh, {
                        emojiId: e.id,
                        refreshPositionKey: this.refreshTooltipPositionKey,
                        onClose: this.handleLeave,
                        nonce: this.nonce
                    })
                );
            }),
            ei(this, 'renderTooltip', () => {
                let { emoji: e, message: t, type: n, me_burst: i, isBurstReaction: r = !1 } = this.props,
                    { tooltipText: a } = this.state,
                    l = (n) => {
                        let i = A.Z.getChannel(t.getChannelId());
                        null != i &&
                            (this.handleLeave(),
                            es(i, t, {
                                emoji: e,
                                reactionType: r ? V.O.BURST : V.O.NORMAL
                            }));
                    },
                    c = 'string' == typeof a ? '' === a.trim() : null == a,
                    u = () =>
                        c || null == a
                            ? null
                            : (0, o.jsx)(p.Text, {
                                  variant: 'text-sm/normal',
                                  className: en.reactionTooltipText,
                                  'aria-label': a,
                                  children: a
                              });
                return n === V.O.BURST
                    ? (0, o.jsxs)('div', {
                          className: en.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, o.jsx)(p.P3F, {
                                  className: en.burstReactionTooltipInner,
                                  onClick: l,
                                  children: (0, o.jsxs)('div', {
                                      className: en.burstReactionTooltipMessage,
                                      children: [
                                          (0, o.jsx)(m.Z, {
                                              className: en.reactionTooltipEmoji,
                                              emojiId: e.id,
                                              emojiName: e.name,
                                              animated: e.animated,
                                              size: this.props.emojiSizeTooltip
                                          }),
                                          u()
                                      ]
                                  })
                              }),
                              (() => {
                                  let e = D.default.getCurrentUser();
                                  return i
                                      ? (0, o.jsxs)('div', {
                                            className: s()(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer),
                                            children: [
                                                (0, F.I5)(e) &&
                                                    (0, o.jsx)(p.SrA, {
                                                        size: 'md',
                                                        className: en.burstReactionTooltipNitroIcon,
                                                        color: j.JX.PREMIUM_TIER_2
                                                    }),
                                                (0, o.jsx)(p.Text, {
                                                    variant: 'text-sm/normal',
                                                    className: en.reactionTooltipText,
                                                    'aria-label': 'super reaction tooltip cta',
                                                    children: $.NW.string($.t.ZbNJXl)
                                                })
                                            ]
                                        })
                                      : this.userCanBurstReact()
                                        ? (0, o.jsxs)('div', {
                                              className: s()(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer, en.burstReactionTooltipPromptClickable),
                                              children: [
                                                  (0, o.jsx)(p.SrA, {
                                                      size: 'md',
                                                      className: en.burstReactionTooltipNitroIcon,
                                                      color: j.JX.PREMIUM_TIER_2
                                                  }),
                                                  (0, o.jsx)(p.P3F, {
                                                      onClick: this.handleClick,
                                                      children: (0, o.jsx)(p.Text, {
                                                          variant: 'text-sm/normal',
                                                          className: en.reactionTooltipText,
                                                          'aria-label': 'super reaction tooltip cta',
                                                          children: $.NW.string($.t.kVfuVl)
                                                      })
                                                  })
                                              ]
                                          })
                                        : this.userCanBurstReact() || this.isKeyboardNavigation
                                          ? null
                                          : (0, o.jsx)('div', {
                                                className: s()(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer),
                                                children: (0, o.jsxs)('div', {
                                                    children: [
                                                        (0, o.jsx)(p.Text, {
                                                            variant: 'text-sm/normal',
                                                            'aria-label': 'super reaction tooltip upsell',
                                                            children: $.NW.string($.t.W1bMkp)
                                                        }),
                                                        (0, o.jsx)(C.Z, {
                                                            subscriptionTier: q.Si.TIER_2,
                                                            buttonText: $.NW.string($.t.mr4K7O),
                                                            className: en.burstReactionTooltipUpsellCta,
                                                            onClick: (e) => e.stopPropagation()
                                                        })
                                                    ]
                                                })
                                            });
                              })(),
                              this.renderEmojiDetails()
                          ]
                      })
                    : (0, o.jsxs)('div', {
                          className: en.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, o.jsx)(p.P3F, {
                                  onClick: l,
                                  children: (0, o.jsxs)('div', {
                                      className: en.reactionTooltipInner,
                                      children: [
                                          (0, o.jsx)(m.Z, {
                                              className: en.reactionTooltipEmoji,
                                              emojiId: e.id,
                                              emojiName: e.name,
                                              animated: e.animated,
                                              size: this.props.emojiSizeTooltip
                                          }),
                                          u()
                                      ]
                                  })
                              }),
                              this.renderEmojiDetails()
                          ]
                      });
            }),
            ei(this, 'refreshTooltipPositionKey', () => {
                this.setState({ tooltipPositionKey: String(Date.now()) });
            }),
            ei(this, 'handleShowVerificationGate', () => {
                let { message: e, isPendingMember: t } = this.props;
                if (!t) return null;
                let n = A.Z.getChannel(e.getChannelId()),
                    i = M.Z.getGuild(null == n ? void 0 : n.getGuildId());
                null != i && (0, E.hk)(i.id);
            }),
            ei(this, 'handleSetReactionRef', (e) => {
                this.setState({ reactionRef: e });
            }),
            ei(this, 'trackReactionTooltipViewed', () => {
                let { emoji: e, message: t, type: n } = this.props,
                    i = D.default.getCurrentUser(),
                    o = A.Z.getChannel(t.getChannelId()),
                    r = n === V.O.BURST,
                    a = (0, F.I5)(i),
                    s = r ? q.cd.EMOJI_IN_BURST_REACTION_HOVER : q.cd.EMOJI_IN_REACTION_HOVER;
                !r || this.userCanBurstReact() || a || (s = q.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
                    v.ZP.trackWithMetadata(Y.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                        type: s,
                        expression_id: e.id,
                        expression_name: e.name,
                        is_animated: e.animated,
                        is_custom: null != e.id,
                        nonce: this.nonce
                    }),
                    !r ||
                        null == o ||
                        a ||
                        this.userCanBurstReact() ||
                        B.default.track(Y.rMx.PREMIUM_UPSELL_VIEWED, {
                            type: q.cd.BURST_REACTION_UPSELL,
                            location: {
                                page: (null == o ? void 0 : o.getGuildId()) != null ? Y.ZY5.GUILD_CHANNEL : Y.ZY5.DM_CHANNEL,
                                section: (0, w.s4)(o),
                                object: Y.qAy.EMOJI_REACTION_TOOLTIP_UPSELL
                            }
                        });
            });
    }
}
ei(ec, 'defaultProps', { emojiSizeTooltip: 'jumbo' });
let eu = r.memo((e) => {
        let { type: t, burst_colors: n, message: i, emoji: r } = e,
            a = t === V.O.BURST,
            s = (0, x.v)(a && null != n ? n : []),
            l = (0, d.e7)([W.Z], () => void 0 !== W.Z.getEffectForEmojiId(i.getChannelId(), i.id, r)),
            c = (0, d.e7)([g.Z], () => g.Z.useReducedMotion),
            u = Z.Yk.useSetting(),
            h = D.default.getCurrentUser(),
            p = (0, F.I5)(h),
            m = (0, d.e7)([W.Z], () => W.Z.getReactionPickerAnimation(i.id, r.name, r.id)),
            f = a && (l || null != m);
        return (0, o.jsx)(
            ec,
            er(eo({}, e), {
                colors: s,
                isBurstReaction: a,
                hideEmoji: f,
                userHasPremium: p,
                reduceMotion: c,
                animateEmoji: u,
                animationStartPosition: m
            })
        );
    }),
    ed = (e) => {
        var t, n, i;
        let { emojiId: r, expressionSourceGuild: a, hasJoinedExpressionSourceGuild: s, onClose: l, popoutData: c, currentGuildId: u, nonce: d } = e;
        (0, S.u)({
            emojiId: r,
            currentGuildId: u,
            popoutData: c,
            emojiSourceGuildId: null == a ? void 0 : a.id,
            nonce: d
        });
        let h = null !== (n = null == a ? void 0 : a.isDiscoverable()) && void 0 !== n && n,
            m = null != a && h,
            f = (null !== (i = null == a ? void 0 : null === (t = a.emojis) || void 0 === t ? void 0 : t.length) && void 0 !== i ? i : 0) > 1;
        return m
            ? null == a
                ? null
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)('div', {
                              className: Q.reactionEmojiDetailsUnfurlGuildDetails,
                              children: (0, o.jsx)(H.Oe, {
                                  expressionSourceGuild: a,
                                  hasJoinedExpressionSourceGuild: s,
                                  isDisplayingJoinGuildButtonInPopout: c.type === G.$.JOIN_GUILD
                              })
                          }),
                          f &&
                              (0, o.jsx)(H.n_, {
                                  emojiId: r,
                                  expressionSourceGuild: a,
                                  hasJoinedEmojiSourceGuild: s,
                                  onClose: l,
                                  popoutData: c,
                                  isDisplayingButtonInTopSection: !1
                              })
                      ]
                  })
            : (0, o.jsx)(p.Text, {
                  variant: 'text-sm/normal',
                  'aria-label': c.type,
                  children: c.emojiDescription
              });
    },
    eh = (e) => {
        var t;
        let { emojiId: n, refreshPositionKey: i, onClose: a, nonce: l } = e,
            { joinedEmojiSourceGuild: c } = (0, d.cj)([y.ZP, M.Z], () => {
                let e = y.ZP.getCustomEmojiById(n);
                return { joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === T.B.GUILD ? M.Z.getGuild(null == e ? void 0 : e.guildId) : void 0 };
            }),
            [u, h] = r.useState(void 0),
            [m, f] = r.useState(void 0),
            [g, b] = r.useState(null),
            [v, j] = r.useState(!1),
            [O, x] = r.useState(!1),
            [S, E] = r.useState(!1),
            P = null != c,
            N = null !== (t = null == u ? void 0 : u.isDiscoverable()) && void 0 !== t && t,
            C = k.Z.getGuildId(),
            R = null != C && (C === (null == u ? void 0 : u.id) || C === (null == c ? void 0 : c.id)),
            I = D.default.getCurrentUser(),
            w = (0, G.a)({
                sourceType: g,
                expressionSourceApplication: null != m ? m : null,
                isPremium: F.ZP.isPremium(I),
                hasJoinedEmojiSourceGuild: P,
                isDiscoverable: N,
                emojiComesFromCurrentGuild: R,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1
            });
        if (
            (r.useEffect(() => {
                v &&
                    !S &&
                    (async () => {
                        i(), x(!0);
                        let e = null != n ? await (0, _.Fi)(n) : null;
                        if (null != e)
                            switch ((b(e.type), e.type)) {
                                case _.w6.APPLICATION:
                                    f(e.application);
                                    break;
                                case _.w6.GUILD:
                                    h(e.guild);
                            }
                        else h(null);
                        x(!1), E(!0), i();
                    })();
            }, [n, v, S, i]),
            P)
        )
            return null;
        let Z = () => {
                j(!v);
            },
            A = v && (void 0 !== u || void 0 !== m);
        return (0, o.jsxs)('div', {
            children: [
                A
                    ? (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)('div', { className: Q.reactionEmojiDetailsDivider }),
                              null != w.emojiDescription &&
                                  w.type !== G.$.UNAVAILABLE &&
                                  (0, o.jsx)(p.Text, {
                                      variant: 'text-sm/normal',
                                      'aria-label': w.type,
                                      children: w.emojiDescription
                                  })
                          ]
                      })
                    : (() => {
                          let e = $.NW.string($.t['Igv+LS']);
                          return (0, o.jsxs)(p.P3F, {
                              onClick: Z,
                              className: Q.reactionEmojiDetailsClickable,
                              children: [
                                  (0, o.jsx)(p.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'none',
                                      'aria-label': e,
                                      children: e
                                  }),
                                  (0, o.jsx)(p.CJ0, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: s()(Q.reactionEmojiDetailsArrow, { [Q.reactionEmojiDetailsArrowCollapsed]: !v })
                                  })
                              ]
                          });
                      })(),
                O
                    ? (0, o.jsx)(z.SE, { className: Q.emojiDetailsLoader })
                    : A &&
                      (0, o.jsx)(ed, {
                          emojiId: n,
                          expressionSourceGuild: u,
                          hasJoinedExpressionSourceGuild: P,
                          onClose: a,
                          popoutData: w,
                          currentGuildId: C,
                          nonce: l
                      })
            ]
        });
    };
