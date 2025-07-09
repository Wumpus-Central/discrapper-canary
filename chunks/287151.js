(n.d(t, {
    aO: () => es,
    le: () => eh,
    op: () => ec,
    y4: () => eu
}),
    n(388685),
    n(781311));
var i,
    r = n(255367),
    l = n(73800),
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
    O = n(446489),
    y = n(367907),
    v = n(436774),
    T = n(98474),
    x = n(339085),
    S = n(906411),
    E = n(56314),
    R = n(231053),
    I = n(944386),
    P = n(305325),
    N = n(33154),
    C = n(692147),
    w = n(767714),
    Z = n(659215),
    A = n(222677),
    M = n(995774),
    _ = n(695346),
    L = n(592125),
    k = n(430824),
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
    et = n(239594),
    en = n(92254),
    ei = n(588429),
    er = n(215084);
function el(e, t, n) {
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                el(e, t, n[t]);
            }));
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
        (0, r.jsx)(
            b.default,
            ea(eo({}, e), {
                message: t,
                selectedReaction: n
            })
        )
    );
}
function eu(e, t, n) {
    return (n === F.O.BURST && t) || (n === F.O.NORMAL && e);
}
class ed extends (i = l.PureComponent) {
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
                      easing: d.Z.Easing.inOut(d.Z.Easing.back())
                  }),
                  d.Z.timing(this.opacity, {
                      toValue: 1,
                      duration: t ? 200 : 300
                  })
              ]).start(e))
            : (this.scale.setValue(1), this.opacity.setValue(1), e());
    }
    render() {
        let e,
            t,
            { count: n, burst_count: i, colors: l, isBurstReaction: o, hideCount: s, emoji: c, readOnly: u, isLurking: p, isGuest: m, isPendingMember: b, className: j, useChatFontScaling: y, message: v, hideEmoji: x, animationStartPosition: S, emojiSize: E } = this.props,
            { shouldShowTooltip: R, tooltipTextAria: I, reactionRef: P, tooltipPositionKey: N } = this.state,
            w = y ? ei : en,
            Z = {
                transform: [{ scale: this.scale }],
                opacity: this.opacity
            },
            A = o ? i : n;
        if (o && null != l) {
            var _;
            let { accentColor: n, backgroundColor: i, opacity: r } = l,
                o = null != (_ = (0, h.wK)(null != i ? i : '', r)) ? _ : '';
            (this.isMe() && (Z.borderColor = i), (Z.background = o), (e = n), (t = n));
        }
        let L = null == P ? void 0 : P.getBoundingClientRect(),
            k = null != S && null != L,
            D = null == S;
        return (0, r.jsx)(f.yRy, {
            targetElementRef: { current: P },
            shouldShow: R,
            'aria-label': null != I && I,
            renderPopout: this.renderTooltip,
            nudgeAlignIntoViewport: !0,
            position: 'top',
            align: 'center',
            positionKey: N,
            children: () =>
                (0, r.jsx)('div', {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    ref: this.handleSetReactionRef,
                    children: (0, r.jsx)(d.Z.div, {
                        className: a()(w.reaction, j, {
                            [w.reactionMe]: this.isMe(),
                            [w.reactionReadOnly]: u && !p && !b && !m,
                            [w.shakeReaction]: x && null == S
                        }),
                        style: Z,
                        children: (0, r.jsx)(f.yRy, {
                            targetElementRef: this.upsellPopoutTargetRef,
                            renderPopout: this.renderLurkerModeUpsellPopout,
                            position: 'top',
                            children: (n) =>
                                (0, r.jsxs)(
                                    f.P3F,
                                    ea(eo({}, n), {
                                        innerRef: this.upsellPopoutTargetRef,
                                        className: w.reactionInner,
                                        onClick: this.handleClick,
                                        'aria-disabled': u,
                                        'aria-label': (0, M.iD)(this.isMe(), A, c, o),
                                        'aria-pressed': this.isMe(),
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: a()({ [w.burstGlow]: o }),
                                                style: { boxShadow: '0 0 16px '.concat(t) }
                                            }),
                                            (0, r.jsxs)('div', {
                                                children: [
                                                    o
                                                        ? (0, r.jsxs)(r.Fragment, {
                                                              children: [
                                                                  k &&
                                                                      (0, r.jsx)(T.Z, {
                                                                          messageId: v.id,
                                                                          emoji: c,
                                                                          startPosition: S,
                                                                          targetPosition: L
                                                                      }),
                                                                  D &&
                                                                      (0, r.jsx)(q.Z, {
                                                                          count: i,
                                                                          emoji: c,
                                                                          channelId: v.getChannelId(),
                                                                          messageId: v.id,
                                                                          useChatFontScaling: y,
                                                                          color: t,
                                                                          emojiSize: Y.M.NORMAL
                                                                      })
                                                              ]
                                                          })
                                                        : null,
                                                    (0, r.jsx)(g.Z, {
                                                        className: a()({ [w.hideEmoji]: x }),
                                                        emojiId: c.id,
                                                        emojiName: c.name,
                                                        size: E,
                                                        animated: c.animated
                                                    })
                                                ]
                                            }),
                                            s
                                                ? null
                                                : (0, r.jsx)(O.Z, {
                                                      className: w.reactionCount,
                                                      value: A,
                                                      color: e,
                                                      digitWidth: es
                                                  }),
                                            (0, r.jsx)(C.Z, {
                                                count: A,
                                                reactionRef: P
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
        (super(...e),
            el(this, 'isReactionEventActive', !1),
            el(this, 'isKeyboardNavigation', !1),
            el(this, 'scale', new d.Z.Value(1)),
            el(this, 'opacity', new d.Z.Value(1)),
            el(this, 'timeout', new m.V7()),
            el(this, 'hideTimeout', new m.V7()),
            el(this, 'ctaRef', l.createRef()),
            el(this, 'type', F.O.NORMAL),
            el(this, 'colors', {
                backgroundColor: void 0,
                borderColor: void 0,
                textColor: void 0
            }),
            el(this, 'state', {
                shouldShowTooltip: !1,
                tooltipText: null,
                tooltipTextAria: null,
                reactionRef: null,
                tooltipPositionKey: void 0
            }),
            el(this, 'hasShownTooltip', !1),
            el(this, 'nonce', (0, u.Z)()),
            el(this, 'upsellPopoutTargetRef', l.createRef()),
            el(this, 'userCanBurstReact', () => this.props.userHasPremium),
            el(this, 'handleClick', (e) => {
                e.stopPropagation();
                let { message: t, emoji: n, readOnly: i, isBurstReaction: r, isPendingMember: l, isLurking: o, isGuest: a, isForumToolbar: s } = this.props,
                    c = L.Z.getChannel(t.getChannelId());
                if (o || a) {
                    var u, d;
                    null == (d = this.ctaRef) || null == (u = d.current) || u.focus();
                    return;
                }
                let h = t.getChannelId(),
                    p = s ? A.TW.FORUM_TOOLBAR : A.TW.MESSAGE_INLINE_BUTTON;
                if (r && !this.userCanBurstReact())
                    return void (0, Z.m)({
                        analytics: {
                            type: Q.cd.BURST_REACTION_UPSELL,
                            page: (null == c ? void 0 : c.getGuildId()) != null ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
                            section: null != c ? (0, M.s4)(c) : void 0,
                            object: $.qAy.EMOJI_REACTION_UPSELL
                        }
                    });
                l
                    ? this.handleShowVerificationGate()
                    : i ||
                      (this.isMe()
                          ? (0, A.WO)({
                                channelId: h,
                                messageId: t.id,
                                emoji: n,
                                location: p,
                                options: { burst: r }
                            })
                          : (0, A.rU)(h, t.id, n, p, { burst: r }));
            }),
            el(this, 'handleEnter', (e) => {
                let { emoji: t, message: n, type: i, reduceMotion: r, animateEmoji: l, autoUnfurlReactionTooltip: o } = this.props,
                    a = i === F.O.BURST;
                (a &&
                    !this.isReactionEventActive &&
                    !r &&
                    l &&
                    (0, A.T6)({
                        channelId: n.getChannelId(),
                        messageId: n.id,
                        emoji: t,
                        key: W.I.HOVER
                    }),
                    (this.isReactionEventActive = !0),
                    (this.isKeyboardNavigation = 'focus' === e.type),
                    this.timeout.start(a ? 750 : o ? 200 : 500, this.showTooltip, !1));
            }),
            el(this, 'handleEnterTooltip', () => {
                ((this.isReactionEventActive = !0), this.handleShowTooltip());
            }),
            el(this, 'handleShowTooltip', () => {
                (this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), D.Z.addChangeListener(this.updateTooltipText)));
            }),
            el(this, 'showTooltip', () => {
                this.props.readOnly || (this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), (this.hasShownTooltip = !0));
            }),
            el(this, 'handleLeave', () => {
                ((this.isReactionEventActive = !1), (this.isKeyboardNavigation = !1), this.timeout.stop(), D.Z.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1));
            }),
            el(this, 'hideTooltip', () => {
                (this.setState({ shouldShowTooltip: !1 }), this.hasShownTooltip && G.default.track($.rMx.CLOSE_POPOUT, { nonce: this.nonce }));
            }),
            el(this, 'isMe', () => {
                let { me: e, me_burst: t, type: n } = this.props;
                return eu(e, t, n);
            }),
            el(this, 'updateTooltipText', () => {
                let { message: e, emoji: t, type: n } = this.props,
                    i = (0, X.g)(e, t, n),
                    r = this.isKeyboardNavigation ? i : (0, X.g)(e, t, n, $.dG4);
                (c()('string' == typeof i, 'tooltipTextAria is not a string'),
                    this.setState({
                        tooltipText: r,
                        tooltipTextAria: i,
                        shouldShowTooltip: null != r && '' !== r
                    }));
            }),
            el(this, 'renderLurkerModeUpsellPopout', (e) => {
                let { closePopout: t } = e,
                    { message: n, isLurking: i } = this.props,
                    l = L.Z.getChannel(n.getChannelId()),
                    o = k.Z.getGuild(null == l ? void 0 : l.getGuildId());
                return i && null != o
                    ? (0, r.jsx)(N.Z, {
                          ctaRef: this.ctaRef,
                          type: N.s.REACTIONS,
                          guild: o,
                          closePopout: t
                      })
                    : (0, r.jsx)(r.Fragment, {});
            }),
            el(this, 'renderEmojiDetails', () => {
                let e = this.props.emoji;
                return (
                    null != e.id &&
                    (0, r.jsx)(em, {
                        emojiId: e.id,
                        refreshPositionKey: this.refreshTooltipPositionKey,
                        onClose: this.handleLeave,
                        nonce: this.nonce
                    })
                );
            }),
            el(this, 'renderTooltip', () => {
                let { emoji: e, message: t, type: n, me_burst: i, isBurstReaction: l = !1 } = this.props,
                    { tooltipText: o, tooltipTextAria: s } = this.state,
                    c = (n) => {
                        let i = L.Z.getChannel(t.getChannelId());
                        null != i &&
                            (this.handleLeave(),
                            ec(i, t, {
                                emoji: e,
                                reactionType: l ? F.O.BURST : F.O.NORMAL
                            }));
                    },
                    u = 'string' == typeof o ? '' === o.trim() : null == o,
                    d = () =>
                        u || null == o || null == s
                            ? null
                            : (0, r.jsx)(f.Text, {
                                  variant: 'text-sm/normal',
                                  className: er.reactionTooltipText,
                                  'aria-label': s,
                                  children: o
                              });
                return n === F.O.BURST
                    ? (0, r.jsxs)('div', {
                          className: er.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, r.jsx)(f.P3F, {
                                  className: er.burstReactionTooltipInner,
                                  onClick: c,
                                  children: (0, r.jsxs)('div', {
                                      className: er.burstReactionTooltipMessage,
                                      children: [
                                          (0, r.jsx)(g.Z, {
                                              className: er.reactionTooltipEmoji,
                                              emojiId: e.id,
                                              emojiName: e.name,
                                              animated: e.animated,
                                              size: this.props.emojiSizeTooltip
                                          }),
                                          d()
                                      ]
                                  })
                              }),
                              (() => {
                                  let e = V.default.getCurrentUser();
                                  return i
                                      ? (0, r.jsxs)('div', {
                                            className: a()(er.burstReactionTooltipPrompt, er.burstReactionTooltipSpacer),
                                            children: [
                                                (0, H.I5)(e) &&
                                                    (0, r.jsx)(f.SrA, {
                                                        size: 'md',
                                                        className: er.burstReactionTooltipNitroIcon,
                                                        color: v.JX.PREMIUM_TIER_2
                                                    }),
                                                (0, r.jsx)(f.Text, {
                                                    variant: 'text-sm/normal',
                                                    className: er.reactionTooltipText,
                                                    'aria-label': 'super reaction tooltip cta',
                                                    children: ee.intl.string(ee.t.ZbNJXl)
                                                })
                                            ]
                                        })
                                      : this.userCanBurstReact()
                                        ? (0, r.jsxs)('div', {
                                              className: a()(er.burstReactionTooltipPrompt, er.burstReactionTooltipSpacer, er.burstReactionTooltipPromptClickable),
                                              children: [
                                                  (0, r.jsx)(f.SrA, {
                                                      size: 'md',
                                                      className: er.burstReactionTooltipNitroIcon,
                                                      color: v.JX.PREMIUM_TIER_2
                                                  }),
                                                  (0, r.jsx)(f.P3F, {
                                                      onClick: this.handleClick,
                                                      children: (0, r.jsx)(f.Text, {
                                                          variant: 'text-sm/normal',
                                                          className: er.reactionTooltipText,
                                                          'aria-label': 'super reaction tooltip cta',
                                                          children: ee.intl.string(ee.t.kVfuVl)
                                                      })
                                                  })
                                              ]
                                          })
                                        : this.userCanBurstReact() || this.isKeyboardNavigation
                                          ? null
                                          : (0, r.jsx)('div', {
                                                className: a()(er.burstReactionTooltipPrompt, er.burstReactionTooltipSpacer),
                                                children: (0, r.jsxs)('div', {
                                                    children: [
                                                        (0, r.jsx)(f.Text, {
                                                            variant: 'text-sm/normal',
                                                            'aria-label': 'super reaction tooltip upsell',
                                                            children: ee.intl.string(ee.t.W1bMkp)
                                                        }),
                                                        (0, r.jsx)(w.Z, {
                                                            subscriptionTier: Q.Si.TIER_2,
                                                            textOptions: { textOverride: ee.intl.string(ee.t.mr4K7O) },
                                                            className: er.burstReactionTooltipUpsellCta,
                                                            onClick: (e) => e.stopPropagation()
                                                        })
                                                    ]
                                                })
                                            });
                              })(),
                              this.renderEmojiDetails()
                          ]
                      })
                    : (0, r.jsxs)('div', {
                          className: er.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, r.jsx)(f.P3F, {
                                  onClick: c,
                                  children: (0, r.jsxs)('div', {
                                      className: er.reactionTooltipInner,
                                      children: [
                                          (0, r.jsx)(g.Z, {
                                              className: er.reactionTooltipEmoji,
                                              emojiId: e.id,
                                              emojiName: e.name,
                                              animated: e.animated,
                                              size: this.props.emojiSizeTooltip
                                          }),
                                          d()
                                      ]
                                  })
                              }),
                              this.renderEmojiDetails()
                          ]
                      });
            }),
            el(this, 'refreshTooltipPositionKey', () => {
                this.setState({ tooltipPositionKey: String(Date.now()) });
            }),
            el(this, 'handleShowVerificationGate', () => {
                let { message: e, isPendingMember: t } = this.props;
                if (!t) return null;
                let n = L.Z.getChannel(e.getChannelId()),
                    i = k.Z.getGuild(null == n ? void 0 : n.getGuildId());
                null != i && (0, P.hk)(i.id);
            }),
            el(this, 'handleSetReactionRef', (e) => {
                this.setState({ reactionRef: e });
            }),
            el(this, 'trackReactionTooltipViewed', () => {
                let { emoji: e, message: t, type: n } = this.props,
                    i = V.default.getCurrentUser(),
                    r = L.Z.getChannel(t.getChannelId()),
                    l = n === F.O.BURST,
                    o = (0, H.I5)(i),
                    a = l ? Q.cd.EMOJI_IN_BURST_REACTION_HOVER : Q.cd.EMOJI_IN_REACTION_HOVER;
                (!l || this.userCanBurstReact() || o || (a = Q.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
                    y.ZP.trackWithMetadata($.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                        type: a,
                        expression_id: e.id,
                        expression_name: e.name,
                        is_animated: e.animated,
                        is_custom: null != e.id,
                        nonce: this.nonce
                    }),
                    !l ||
                        null == r ||
                        o ||
                        this.userCanBurstReact() ||
                        G.default.track($.rMx.PREMIUM_UPSELL_VIEWED, {
                            type: Q.cd.BURST_REACTION_UPSELL,
                            location: {
                                page: (null == r ? void 0 : r.getGuildId()) != null ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
                                section: (0, M.s4)(r),
                                object: $.qAy.EMOJI_REACTION_TOOLTIP_UPSELL
                            }
                        }));
            }));
    }
}
el(ed, 'defaultProps', { emojiSizeTooltip: 'jumbo' });
let eh = l.memo((e) => {
        let { type: t, burst_colors: n, message: i, emoji: l } = e,
            o = t === F.O.BURST,
            a = (0, E.v)(o && null != n ? n : []),
            s = (0, p.e7)([W.Z], () => void 0 !== W.Z.getEffectForEmojiId(i.getChannelId(), i.id, l)),
            c = (0, p.e7)([j.Z], () => j.Z.useReducedMotion),
            u = _.Yk.useSetting(),
            d = V.default.getCurrentUser(),
            h = (0, H.I5)(d),
            m = (0, p.e7)([W.Z], () => W.Z.getReactionPickerAnimation(i.id, l.name, l.id)),
            f = o && (s || null != m);
        return (0, r.jsx)(
            ed,
            ea(eo({}, e), {
                colors: a,
                isBurstReaction: o,
                hideEmoji: f,
                userHasPremium: h,
                reduceMotion: c,
                animateEmoji: u,
                animationStartPosition: m
            })
        );
    }),
    ep = (e) => {
        var t, n, i;
        let { emojiId: l, expressionSourceGuild: o, hasJoinedExpressionSourceGuild: a, onClose: s, popoutData: c, currentGuildId: u, nonce: d } = e;
        (0, I.u)({
            emojiId: l,
            currentGuildId: u,
            popoutData: c,
            emojiSourceGuildId: null == o ? void 0 : o.id,
            nonce: d
        });
        let h = null != (n = null == o ? void 0 : o.isDiscoverable()) && n,
            p = null != o && h,
            m = (null != (i = null == o || null == (t = o.emojis) ? void 0 : t.length) ? i : 0) > 1;
        return p
            ? null == o
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', {
                              className: et.reactionEmojiDetailsUnfurlGuildDetails,
                              children: (0, r.jsx)(K.Oe, {
                                  expressionSourceGuild: o,
                                  hasJoinedExpressionSourceGuild: a,
                                  isDisplayingJoinGuildButtonInPopout: c.type === z.$.JOIN_GUILD
                              })
                          }),
                          m &&
                              (0, r.jsx)(K.n_, {
                                  emojiId: l,
                                  expressionSourceGuild: o,
                                  hasJoinedEmojiSourceGuild: a,
                                  onClose: s,
                                  popoutData: c,
                                  isDisplayingButtonInTopSection: !1
                              })
                      ]
                  })
            : (0, r.jsx)(f.Text, {
                  variant: 'text-sm/normal',
                  'aria-label': c.type,
                  children: c.emojiDescription
              });
    },
    em = (e) => {
        var t;
        let { emojiId: n, refreshPositionKey: i, onClose: o, nonce: s } = e,
            { joinedEmojiSourceGuild: c } = (0, p.cj)([x.ZP, k.Z], () => {
                let e = x.ZP.getCustomEmojiById(n);
                return { joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === S.B.GUILD ? k.Z.getGuild(null == e ? void 0 : e.guildId) : void 0 };
            }),
            [u, d] = l.useState(void 0),
            [h, m] = l.useState(void 0),
            [g, b] = l.useState(null),
            [j, O] = l.useState(!1),
            [y, v] = l.useState(!1),
            [T, E] = l.useState(!1),
            I = null != c,
            P = null != (t = null == u ? void 0 : u.isDiscoverable()) && t,
            N = U.Z.getGuildId(),
            C = null != N && (N === (null == u ? void 0 : u.id) || N === (null == c ? void 0 : c.id)),
            w = V.default.getCurrentUser(),
            Z = (0, z.a)({
                sourceType: g,
                expressionSourceApplication: null != h ? h : null,
                isPremium: H.ZP.isPremium(w),
                hasJoinedEmojiSourceGuild: I,
                isDiscoverable: P,
                emojiComesFromCurrentGuild: C,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1
            });
        if (
            (l.useEffect(() => {
                j &&
                    !T &&
                    (async () => {
                        (i(), v(!0));
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
                        (v(!1), E(!0), i());
                    })();
            }, [n, j, T, i]),
            I)
        )
            return null;
        let A = () => {
                O(!j);
            },
            M = j && (void 0 !== u || void 0 !== h);
        return (0, r.jsxs)('div', {
            children: [
                M
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', { className: et.reactionEmojiDetailsDivider }),
                              null != Z.emojiDescription &&
                                  Z.type !== z.$.UNAVAILABLE &&
                                  (0, r.jsx)(f.Text, {
                                      variant: 'text-sm/normal',
                                      'aria-label': Z.type,
                                      children: Z.emojiDescription
                                  })
                          ]
                      })
                    : (() => {
                          let e = ee.intl.string(ee.t['Igv+LS']);
                          return (0, r.jsxs)(f.P3F, {
                              onClick: A,
                              className: et.reactionEmojiDetailsClickable,
                              children: [
                                  (0, r.jsx)(f.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'none',
                                      'aria-label': e,
                                      children: e
                                  }),
                                  (0, r.jsx)(f.CJ0, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: a()(et.reactionEmojiDetailsArrow, { [et.reactionEmojiDetailsArrowCollapsed]: !j })
                                  })
                              ]
                          });
                      })(),
                y
                    ? (0, r.jsx)(J.SE, { className: et.emojiDetailsLoader })
                    : M &&
                      (0, r.jsx)(ep, {
                          emojiId: n,
                          expressionSourceGuild: u,
                          hasJoinedExpressionSourceGuild: I,
                          onClose: o,
                          popoutData: Z,
                          currentGuildId: N,
                          nonce: s
                      })
            ]
        });
    };
