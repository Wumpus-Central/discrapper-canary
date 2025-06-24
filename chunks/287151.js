n.d(t, {
    aO: () => es,
    le: () => eh,
    op: () => ec,
    y4: () => eu
}),
    n(388685),
    n(781311);
var i,
    o = n(255367),
    l = n(73800),
    r = n(120356),
    a = n.n(r),
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
    E = n(339085),
    R = n(906411),
    S = n(56314),
    x = n(231053),
    N = n(944386),
    I = n(305325),
    P = n(33154),
    C = n(692147),
    Z = n(767714),
    w = n(659215),
    A = n(222677),
    M = n(995774),
    _ = n(695346),
    L = n(592125),
    k = n(430824),
    U = n(542578),
    D = n(914010),
    V = n(594174),
    B = n(451478),
    G = n(626135),
    H = n(74538),
    F = n(960020),
    z = n(566006),
    W = n(886132),
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
    eo = n(215084);
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
function er(e) {
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
                el(e, t, n[t]);
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
        (0, o.jsx)(
            b.default,
            ea(er({}, e), {
                message: t,
                selectedReaction: n
            })
        )
    );
}
function eu(e, t, n) {
    return (n === z.O.BURST && t) || (n === z.O.NORMAL && e);
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
            { count: n, burst_count: i, colors: l, isBurstReaction: r, hideCount: s, emoji: c, readOnly: u, isLurking: p, isGuest: m, isPendingMember: b, className: j, useChatFontScaling: O, message: y, hideEmoji: E, animationStartPosition: R, emojiSize: S } = this.props,
            { shouldShowTooltip: x, tooltipTextAria: N, reactionRef: I, tooltipPositionKey: P } = this.state,
            Z = O ? ei : en,
            w = {
                transform: [{ scale: this.scale }],
                opacity: this.opacity
            },
            A = r ? i : n;
        if (r && null != l) {
            var _;
            let { accentColor: n, backgroundColor: i, opacity: o } = l,
                r = null != (_ = (0, h.wK)(null != i ? i : '', o)) ? _ : '';
            this.isMe() && (w.borderColor = i), (w.background = r), (e = n), (t = n);
        }
        let L = null == I ? void 0 : I.getBoundingClientRect(),
            k = null != R && null != L,
            U = null == R;
        return (0, o.jsx)(f.yRy, {
            targetElementRef: { current: I },
            shouldShow: x,
            'aria-label': null != N && N,
            renderPopout: this.renderTooltip,
            nudgeAlignIntoViewport: !0,
            position: 'top',
            align: 'center',
            positionKey: P,
            children: () =>
                (0, o.jsx)('div', {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    ref: this.handleSetReactionRef,
                    children: (0, o.jsx)(d.Z.div, {
                        className: a()(Z.reaction, j, {
                            [Z.reactionMe]: this.isMe(),
                            [Z.reactionReadOnly]: u && !p && !b && !m,
                            [Z.shakeReaction]: E && null == R
                        }),
                        style: w,
                        children: (0, o.jsx)(f.yRy, {
                            targetElementRef: this.upsellPopoutTargetRef,
                            renderPopout: this.renderLurkerModeUpsellPopout,
                            position: 'top',
                            children: (n) =>
                                (0, o.jsxs)(
                                    f.P3F,
                                    ea(er({}, n), {
                                        innerRef: this.upsellPopoutTargetRef,
                                        className: Z.reactionInner,
                                        onClick: this.handleClick,
                                        'aria-disabled': u,
                                        'aria-label': (0, M.iD)(this.isMe(), A, c, r),
                                        'aria-pressed': this.isMe(),
                                        children: [
                                            (0, o.jsx)('div', {
                                                className: a()({ [Z.burstGlow]: r }),
                                                style: { boxShadow: '0 0 16px '.concat(t) }
                                            }),
                                            (0, o.jsxs)('div', {
                                                children: [
                                                    r
                                                        ? (0, o.jsxs)(o.Fragment, {
                                                              children: [
                                                                  k &&
                                                                      (0, o.jsx)(T.Z, {
                                                                          messageId: y.id,
                                                                          emoji: c,
                                                                          startPosition: R,
                                                                          targetPosition: L
                                                                      }),
                                                                  U &&
                                                                      (0, o.jsx)(q.Z, {
                                                                          count: i,
                                                                          emoji: c,
                                                                          channelId: y.getChannelId(),
                                                                          messageId: y.id,
                                                                          useChatFontScaling: O,
                                                                          color: t,
                                                                          emojiSize: Y.M.NORMAL
                                                                      })
                                                              ]
                                                          })
                                                        : null,
                                                    (0, o.jsx)(g.Z, {
                                                        className: a()({ [Z.hideEmoji]: E }),
                                                        emojiId: c.id,
                                                        emojiName: c.name,
                                                        size: S,
                                                        animated: c.animated
                                                    })
                                                ]
                                            }),
                                            s
                                                ? null
                                                : (0, o.jsx)(v.Z, {
                                                      className: Z.reactionCount,
                                                      value: A,
                                                      color: e,
                                                      digitWidth: es
                                                  }),
                                            (0, o.jsx)(C.Z, {
                                                count: A,
                                                reactionRef: I
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
            el(this, 'isReactionEventActive', !1),
            el(this, 'isKeyboardNavigation', !1),
            el(this, 'scale', new d.Z.Value(1)),
            el(this, 'opacity', new d.Z.Value(1)),
            el(this, 'timeout', new m.V7()),
            el(this, 'hideTimeout', new m.V7()),
            el(this, 'ctaRef', l.createRef()),
            el(this, 'type', z.O.NORMAL),
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
                let { message: t, emoji: n, readOnly: i, isBurstReaction: o, isPendingMember: l, isLurking: r, isGuest: a, isForumToolbar: s } = this.props,
                    c = L.Z.getChannel(t.getChannelId());
                if (r || a) {
                    var u, d;
                    null == (d = this.ctaRef) || null == (u = d.current) || u.focus();
                    return;
                }
                let h = t.getChannelId(),
                    p = s ? A.TW.FORUM_TOOLBAR : A.TW.MESSAGE_INLINE_BUTTON;
                if (o && !this.userCanBurstReact())
                    return void (0, w.m)({
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
                                options: { burst: o }
                            })
                          : (0, A.rU)(h, t.id, n, p, { burst: o }));
            }),
            el(this, 'handleEnter', (e) => {
                let { emoji: t, message: n, type: i, reduceMotion: o, animateEmoji: l, autoUnfurlReactionTooltip: r } = this.props,
                    a = i === z.O.BURST;
                a &&
                    !this.isReactionEventActive &&
                    !o &&
                    l &&
                    (0, A.T6)({
                        channelId: n.getChannelId(),
                        messageId: n.id,
                        emoji: t,
                        key: F.I.HOVER
                    }),
                    (this.isReactionEventActive = !0),
                    (this.isKeyboardNavigation = 'focus' === e.type),
                    this.timeout.start(a ? 750 : r ? 200 : 500, this.showTooltip, !1);
            }),
            el(this, 'handleEnterTooltip', () => {
                (this.isReactionEventActive = !0), this.handleShowTooltip();
            }),
            el(this, 'handleShowTooltip', () => {
                this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), U.Z.addChangeListener(this.updateTooltipText));
            }),
            el(this, 'showTooltip', () => {
                this.props.readOnly || (this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), (this.hasShownTooltip = !0));
            }),
            el(this, 'handleLeave', () => {
                (this.isReactionEventActive = !1), (this.isKeyboardNavigation = !1), this.timeout.stop(), U.Z.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1);
            }),
            el(this, 'hideTooltip', () => {
                this.setState({ shouldShowTooltip: !1 }), this.hasShownTooltip && G.default.track($.rMx.CLOSE_POPOUT, { nonce: this.nonce });
            }),
            el(this, 'isMe', () => {
                let { me: e, me_burst: t, type: n } = this.props;
                return eu(e, t, n);
            }),
            el(this, 'updateTooltipText', () => {
                let { message: e, emoji: t, type: n } = this.props,
                    i = (0, X.g)(e, t, n),
                    o = this.isKeyboardNavigation ? i : (0, X.g)(e, t, n, $.dG4);
                c()('string' == typeof i, 'tooltipTextAria is not a string'),
                    this.setState({
                        tooltipText: o,
                        tooltipTextAria: i,
                        shouldShowTooltip: null != o && '' !== o
                    });
            }),
            el(this, 'renderLurkerModeUpsellPopout', (e) => {
                let { closePopout: t } = e,
                    { message: n, isLurking: i } = this.props,
                    l = L.Z.getChannel(n.getChannelId()),
                    r = k.Z.getGuild(null == l ? void 0 : l.getGuildId());
                return i && null != r
                    ? (0, o.jsx)(P.Z, {
                          ctaRef: this.ctaRef,
                          type: P.s.REACTIONS,
                          guild: r,
                          closePopout: t
                      })
                    : (0, o.jsx)(o.Fragment, {});
            }),
            el(this, 'renderEmojiDetails', () => {
                let e = this.props.emoji;
                return (
                    null != e.id &&
                    (0, o.jsx)(em, {
                        emojiId: e.id,
                        refreshPositionKey: this.refreshTooltipPositionKey,
                        onClose: this.handleLeave,
                        nonce: this.nonce
                    })
                );
            }),
            el(this, 'renderTooltip', () => {
                let { emoji: e, message: t, type: n, me_burst: i, isBurstReaction: l = !1 } = this.props,
                    { tooltipText: r, tooltipTextAria: s } = this.state,
                    c = (n) => {
                        let i = L.Z.getChannel(t.getChannelId());
                        null != i &&
                            (this.handleLeave(),
                            ec(i, t, {
                                emoji: e,
                                reactionType: l ? z.O.BURST : z.O.NORMAL
                            }));
                    },
                    u = 'string' == typeof r ? '' === r.trim() : null == r,
                    d = () =>
                        u || null == r || null == s
                            ? null
                            : (0, o.jsx)(f.Text, {
                                  variant: 'text-sm/normal',
                                  className: eo.reactionTooltipText,
                                  'aria-label': s,
                                  children: r
                              });
                return n === z.O.BURST
                    ? (0, o.jsxs)('div', {
                          className: eo.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, o.jsx)(f.P3F, {
                                  className: eo.burstReactionTooltipInner,
                                  onClick: c,
                                  children: (0, o.jsxs)('div', {
                                      className: eo.burstReactionTooltipMessage,
                                      children: [
                                          (0, o.jsx)(g.Z, {
                                              className: eo.reactionTooltipEmoji,
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
                                      ? (0, o.jsxs)('div', {
                                            className: a()(eo.burstReactionTooltipPrompt, eo.burstReactionTooltipSpacer),
                                            children: [
                                                (0, H.I5)(e) &&
                                                    (0, o.jsx)(f.SrA, {
                                                        size: 'md',
                                                        className: eo.burstReactionTooltipNitroIcon,
                                                        color: y.JX.PREMIUM_TIER_2
                                                    }),
                                                (0, o.jsx)(f.Text, {
                                                    variant: 'text-sm/normal',
                                                    className: eo.reactionTooltipText,
                                                    'aria-label': 'super reaction tooltip cta',
                                                    children: ee.intl.string(ee.t.ZbNJXl)
                                                })
                                            ]
                                        })
                                      : this.userCanBurstReact()
                                        ? (0, o.jsxs)('div', {
                                              className: a()(eo.burstReactionTooltipPrompt, eo.burstReactionTooltipSpacer, eo.burstReactionTooltipPromptClickable),
                                              children: [
                                                  (0, o.jsx)(f.SrA, {
                                                      size: 'md',
                                                      className: eo.burstReactionTooltipNitroIcon,
                                                      color: y.JX.PREMIUM_TIER_2
                                                  }),
                                                  (0, o.jsx)(f.P3F, {
                                                      onClick: this.handleClick,
                                                      children: (0, o.jsx)(f.Text, {
                                                          variant: 'text-sm/normal',
                                                          className: eo.reactionTooltipText,
                                                          'aria-label': 'super reaction tooltip cta',
                                                          children: ee.intl.string(ee.t.kVfuVl)
                                                      })
                                                  })
                                              ]
                                          })
                                        : this.userCanBurstReact() || this.isKeyboardNavigation
                                          ? null
                                          : (0, o.jsx)('div', {
                                                className: a()(eo.burstReactionTooltipPrompt, eo.burstReactionTooltipSpacer),
                                                children: (0, o.jsxs)('div', {
                                                    children: [
                                                        (0, o.jsx)(f.Text, {
                                                            variant: 'text-sm/normal',
                                                            'aria-label': 'super reaction tooltip upsell',
                                                            children: ee.intl.string(ee.t.W1bMkp)
                                                        }),
                                                        (0, o.jsx)(Z.Z, {
                                                            subscriptionTier: Q.Si.TIER_2,
                                                            textOptions: { textOverride: ee.intl.string(ee.t.mr4K7O) },
                                                            className: eo.burstReactionTooltipUpsellCta,
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
                          className: eo.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, o.jsx)(f.P3F, {
                                  onClick: c,
                                  children: (0, o.jsxs)('div', {
                                      className: eo.reactionTooltipInner,
                                      children: [
                                          (0, o.jsx)(g.Z, {
                                              className: eo.reactionTooltipEmoji,
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
                null != i && (0, I.hk)(i.id);
            }),
            el(this, 'handleSetReactionRef', (e) => {
                this.setState({ reactionRef: e });
            }),
            el(this, 'trackReactionTooltipViewed', () => {
                let { emoji: e, message: t, type: n } = this.props,
                    i = V.default.getCurrentUser(),
                    o = L.Z.getChannel(t.getChannelId()),
                    l = n === z.O.BURST,
                    r = (0, H.I5)(i),
                    a = l ? Q.cd.EMOJI_IN_BURST_REACTION_HOVER : Q.cd.EMOJI_IN_REACTION_HOVER;
                !l || this.userCanBurstReact() || r || (a = Q.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
                    O.ZP.trackWithMetadata($.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                        type: a,
                        expression_id: e.id,
                        expression_name: e.name,
                        is_animated: e.animated,
                        is_custom: null != e.id,
                        nonce: this.nonce
                    }),
                    !l ||
                        null == o ||
                        r ||
                        this.userCanBurstReact() ||
                        G.default.track($.rMx.PREMIUM_UPSELL_VIEWED, {
                            type: Q.cd.BURST_REACTION_UPSELL,
                            location: {
                                page: (null == o ? void 0 : o.getGuildId()) != null ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
                                section: (0, M.s4)(o),
                                object: $.qAy.EMOJI_REACTION_TOOLTIP_UPSELL
                            }
                        });
            });
    }
}
el(ed, 'defaultProps', { emojiSizeTooltip: 'jumbo' });
let eh = l.memo((e) => {
        let { type: t, burst_colors: n, message: i, emoji: l } = e,
            r = t === z.O.BURST,
            a = (0, S.v)(r && null != n ? n : []),
            s = (0, p.e7)([F.Z], () => void 0 !== F.Z.getEffectForEmojiId(i.getChannelId(), i.id, l)),
            c = (0, p.e7)([j.Z], () => j.Z.useReducedMotion),
            u = _.Yk.useSetting(),
            d = V.default.getCurrentUser(),
            h = (0, H.I5)(d),
            m = (0, p.e7)([F.Z], () => F.Z.getReactionPickerAnimation(i.id, l.name, l.id)),
            f = r && (s || null != m);
        return (0, o.jsx)(
            ed,
            ea(er({}, e), {
                colors: a,
                isBurstReaction: r,
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
        let { emojiId: l, expressionSourceGuild: r, hasJoinedExpressionSourceGuild: a, onClose: s, popoutData: c, currentGuildId: u, nonce: d } = e;
        (0, N.u)({
            emojiId: l,
            currentGuildId: u,
            popoutData: c,
            emojiSourceGuildId: null == r ? void 0 : r.id,
            nonce: d
        });
        let h = null != (n = null == r ? void 0 : r.isDiscoverable()) && n,
            p = null != r && h,
            m = (null != (i = null == r || null == (t = r.emojis) ? void 0 : t.length) ? i : 0) > 1;
        return p
            ? null == r
                ? null
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)('div', {
                              className: et.reactionEmojiDetailsUnfurlGuildDetails,
                              children: (0, o.jsx)(K.Oe, {
                                  expressionSourceGuild: r,
                                  hasJoinedExpressionSourceGuild: a,
                                  isDisplayingJoinGuildButtonInPopout: c.type === W.$.JOIN_GUILD
                              })
                          }),
                          m &&
                              (0, o.jsx)(K.n_, {
                                  emojiId: l,
                                  expressionSourceGuild: r,
                                  hasJoinedEmojiSourceGuild: a,
                                  onClose: s,
                                  popoutData: c,
                                  isDisplayingButtonInTopSection: !1
                              })
                      ]
                  })
            : (0, o.jsx)(f.Text, {
                  variant: 'text-sm/normal',
                  'aria-label': c.type,
                  children: c.emojiDescription
              });
    },
    em = (e) => {
        var t;
        let { emojiId: n, refreshPositionKey: i, onClose: r, nonce: s } = e,
            { joinedEmojiSourceGuild: c } = (0, p.cj)([E.ZP, k.Z], () => {
                let e = E.ZP.getCustomEmojiById(n);
                return { joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === R.B.GUILD ? k.Z.getGuild(null == e ? void 0 : e.guildId) : void 0 };
            }),
            [u, d] = l.useState(void 0),
            [h, m] = l.useState(void 0),
            [g, b] = l.useState(null),
            [j, v] = l.useState(!1),
            [O, y] = l.useState(!1),
            [T, S] = l.useState(!1),
            N = null != c,
            I = null != (t = null == u ? void 0 : u.isDiscoverable()) && t,
            P = D.Z.getGuildId(),
            C = null != P && (P === (null == u ? void 0 : u.id) || P === (null == c ? void 0 : c.id)),
            Z = V.default.getCurrentUser(),
            w = (0, W.a)({
                sourceType: g,
                expressionSourceApplication: null != h ? h : null,
                isPremium: H.ZP.isPremium(Z),
                hasJoinedEmojiSourceGuild: N,
                isDiscoverable: I,
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
                        i(), y(!0);
                        let e = null != n ? await (0, x.Fi)(n) : null;
                        if (null != e)
                            switch ((b(e.type), e.type)) {
                                case x.w6.APPLICATION:
                                    m(e.application);
                                    break;
                                case x.w6.GUILD:
                                    d(e.guild);
                            }
                        else d(null);
                        y(!1), S(!0), i();
                    })();
            }, [n, j, T, i]),
            N)
        )
            return null;
        let A = () => {
                v(!j);
            },
            M = j && (void 0 !== u || void 0 !== h);
        return (0, o.jsxs)('div', {
            children: [
                M
                    ? (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)('div', { className: et.reactionEmojiDetailsDivider }),
                              null != w.emojiDescription &&
                                  w.type !== W.$.UNAVAILABLE &&
                                  (0, o.jsx)(f.Text, {
                                      variant: 'text-sm/normal',
                                      'aria-label': w.type,
                                      children: w.emojiDescription
                                  })
                          ]
                      })
                    : (() => {
                          let e = ee.intl.string(ee.t['Igv+LS']);
                          return (0, o.jsxs)(f.P3F, {
                              onClick: A,
                              className: et.reactionEmojiDetailsClickable,
                              children: [
                                  (0, o.jsx)(f.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'none',
                                      'aria-label': e,
                                      children: e
                                  }),
                                  (0, o.jsx)(f.CJ0, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: a()(et.reactionEmojiDetailsArrow, { [et.reactionEmojiDetailsArrowCollapsed]: !j })
                                  })
                              ]
                          });
                      })(),
                O
                    ? (0, o.jsx)(J.SE, { className: et.emojiDetailsLoader })
                    : M &&
                      (0, o.jsx)(ep, {
                          emojiId: n,
                          expressionSourceGuild: u,
                          hasJoinedExpressionSourceGuild: N,
                          onClose: r,
                          popoutData: w,
                          currentGuildId: P,
                          nonce: s
                      })
            ]
        });
    };
