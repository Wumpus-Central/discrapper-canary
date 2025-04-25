n.d(t, {
    aO: () => el,
    le: () => eh,
    op: () => ec,
    y4: () => eu
}),
    n(388685),
    n(781311);
var i,
    r = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(512722),
    c = n.n(l),
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
    x = n(98474),
    T = n(339085),
    S = n(906411),
    _ = n(56314),
    C = n(231053),
    P = n(944386),
    R = n(305325),
    E = n(33154),
    I = n(692147),
    N = n(197115),
    w = n(659215),
    Z = n(222677),
    A = n(995774),
    M = n(695346),
    k = n(592125),
    L = n(430824),
    D = n(542578),
    U = n(914010),
    B = n(594174),
    F = n(451478),
    V = n(626135),
    H = n(74538),
    G = n(960020),
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
    er = n(215084);
function eo(e, t, n) {
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
function ea(e) {
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
                eo(e, t, n[t]);
            });
    }
    return e;
}
function es(e, t) {
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
let el = 9;
function ec(e, t, n) {
    (0, f.h7j)((e) =>
        (0, r.jsx)(
            b.default,
            es(ea({}, e), {
                message: t,
                selectedReaction: n
            })
        )
    );
}
function eu(e, t, n) {
    return (n === z.O.BURST && t) || (n === z.O.NORMAL && e);
}
class ed extends (i = o.PureComponent) {
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
        F.Z.isFocused()
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
            { count: n, burst_count: i, colors: o, isBurstReaction: a, hideCount: l, emoji: c, readOnly: u, isLurking: p, isGuest: m, isPendingMember: b, className: j, useChatFontScaling: O, message: y, hideEmoji: T, animationStartPosition: S, emojiSize: _ } = this.props,
            { shouldShowTooltip: C, tooltipTextAria: P, reactionRef: R, tooltipPositionKey: E } = this.state,
            N = O ? ei : en,
            w = {
                transform: [{ scale: this.scale }],
                opacity: this.opacity
            },
            Z = a ? i : n;
        if (a && null != o) {
            var M;
            let { accentColor: n, backgroundColor: i, opacity: r } = o,
                a = null != (M = (0, h.wK)(null != i ? i : '', r)) ? M : '';
            this.isMe() && (w.borderColor = i), (w.background = a), (e = n), (t = n);
        }
        let k = null == R ? void 0 : R.getBoundingClientRect(),
            L = null != S && null != k,
            D = null == S;
        return (0, r.jsx)(f.yRy, {
            targetElementRef: { current: R },
            shouldShow: C,
            'aria-label': null != P && P,
            renderPopout: this.renderTooltip,
            nudgeAlignIntoViewport: !0,
            position: 'top',
            align: 'center',
            positionKey: E,
            children: () =>
                (0, r.jsx)('div', {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    ref: this.handleSetReactionRef,
                    children: (0, r.jsx)(d.Z.div, {
                        className: s()(N.reaction, j, {
                            [N.reactionMe]: this.isMe(),
                            [N.reactionReadOnly]: u && !p && !b && !m,
                            [N.shakeReaction]: T && null == S
                        }),
                        style: w,
                        children: (0, r.jsx)(f.yRy, {
                            targetElementRef: this.upsellPopoutTargetRef,
                            renderPopout: this.renderLurkerModeUpsellPopout,
                            position: 'top',
                            children: (n) =>
                                (0, r.jsxs)(
                                    f.P3F,
                                    es(ea({}, n), {
                                        innerRef: this.upsellPopoutTargetRef,
                                        className: N.reactionInner,
                                        onClick: this.handleClick,
                                        'aria-disabled': u,
                                        'aria-label': (0, A.iD)(this.isMe(), Z, c, a),
                                        'aria-pressed': this.isMe(),
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: s()({ [N.burstGlow]: a }),
                                                style: { boxShadow: '0 0 16px '.concat(t) }
                                            }),
                                            (0, r.jsxs)('div', {
                                                children: [
                                                    a
                                                        ? (0, r.jsxs)(r.Fragment, {
                                                              children: [
                                                                  L &&
                                                                      (0, r.jsx)(x.Z, {
                                                                          messageId: y.id,
                                                                          emoji: c,
                                                                          startPosition: S,
                                                                          targetPosition: k
                                                                      }),
                                                                  D &&
                                                                      (0, r.jsx)(q.Z, {
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
                                                    (0, r.jsx)(g.Z, {
                                                        className: s()({ [N.hideEmoji]: T }),
                                                        emojiId: c.id,
                                                        emojiName: c.name,
                                                        size: _,
                                                        animated: c.animated
                                                    })
                                                ]
                                            }),
                                            l
                                                ? null
                                                : (0, r.jsx)(v.Z, {
                                                      className: N.reactionCount,
                                                      value: Z,
                                                      color: e,
                                                      digitWidth: el
                                                  }),
                                            (0, r.jsx)(I.Z, {
                                                count: Z,
                                                reactionRef: R
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
            eo(this, 'isReactionEventActive', !1),
            eo(this, 'isKeyboardNavigation', !1),
            eo(this, 'scale', new d.Z.Value(1)),
            eo(this, 'opacity', new d.Z.Value(1)),
            eo(this, 'timeout', new m.V7()),
            eo(this, 'hideTimeout', new m.V7()),
            eo(this, 'ctaRef', o.createRef()),
            eo(this, 'type', z.O.NORMAL),
            eo(this, 'colors', {
                backgroundColor: void 0,
                borderColor: void 0,
                textColor: void 0
            }),
            eo(this, 'state', {
                shouldShowTooltip: !1,
                tooltipText: null,
                tooltipTextAria: null,
                reactionRef: null,
                tooltipPositionKey: void 0
            }),
            eo(this, 'hasShownTooltip', !1),
            eo(this, 'nonce', (0, u.Z)()),
            eo(this, 'upsellPopoutTargetRef', o.createRef()),
            eo(this, 'userCanBurstReact', () => this.props.userHasPremium),
            eo(this, 'handleClick', (e) => {
                e.stopPropagation();
                let { message: t, emoji: n, readOnly: i, isBurstReaction: r, isPendingMember: o, isLurking: a, isGuest: s, isForumToolbar: l } = this.props,
                    c = k.Z.getChannel(t.getChannelId());
                if (a || s) {
                    var u, d;
                    null == (d = this.ctaRef) || null == (u = d.current) || u.focus();
                    return;
                }
                let h = t.getChannelId(),
                    p = l ? Z.TW.FORUM_TOOLBAR : Z.TW.MESSAGE_INLINE_BUTTON;
                if (r && !this.userCanBurstReact())
                    return void (0, w.m)({
                        analytics: {
                            type: Q.cd.BURST_REACTION_UPSELL,
                            page: (null == c ? void 0 : c.getGuildId()) != null ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
                            section: null != c ? (0, A.s4)(c) : void 0,
                            object: $.qAy.EMOJI_REACTION_UPSELL
                        }
                    });
                o
                    ? this.handleShowVerificationGate()
                    : i ||
                      (this.isMe()
                          ? (0, Z.WO)({
                                channelId: h,
                                messageId: t.id,
                                emoji: n,
                                location: p,
                                options: { burst: r }
                            })
                          : (0, Z.rU)(h, t.id, n, p, { burst: r }));
            }),
            eo(this, 'handleEnter', (e) => {
                let { emoji: t, message: n, type: i, reduceMotion: r, animateEmoji: o, autoUnfurlReactionTooltip: a } = this.props,
                    s = i === z.O.BURST;
                s &&
                    !this.isReactionEventActive &&
                    !r &&
                    o &&
                    (0, Z.T6)({
                        channelId: n.getChannelId(),
                        messageId: n.id,
                        emoji: t,
                        key: G.I.HOVER
                    }),
                    (this.isReactionEventActive = !0),
                    (this.isKeyboardNavigation = 'focus' === e.type),
                    this.timeout.start(s ? 750 : a ? 200 : 500, this.showTooltip, !1);
            }),
            eo(this, 'handleEnterTooltip', () => {
                (this.isReactionEventActive = !0), this.handleShowTooltip();
            }),
            eo(this, 'handleShowTooltip', () => {
                this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), D.Z.addChangeListener(this.updateTooltipText));
            }),
            eo(this, 'showTooltip', () => {
                this.props.readOnly || (this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), (this.hasShownTooltip = !0));
            }),
            eo(this, 'handleLeave', () => {
                (this.isReactionEventActive = !1), (this.isKeyboardNavigation = !1), this.timeout.stop(), D.Z.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1);
            }),
            eo(this, 'hideTooltip', () => {
                this.setState({ shouldShowTooltip: !1 }), this.hasShownTooltip && V.default.track($.rMx.CLOSE_POPOUT, { nonce: this.nonce });
            }),
            eo(this, 'isMe', () => {
                let { me: e, me_burst: t, type: n } = this.props;
                return eu(e, t, n);
            }),
            eo(this, 'updateTooltipText', () => {
                let { message: e, emoji: t, type: n } = this.props,
                    i = (0, X.g)(e, t, n),
                    r = this.isKeyboardNavigation ? i : (0, X.g)(e, t, n, $.dG4);
                c()('string' == typeof i, 'tooltipTextAria is not a string'),
                    this.setState({
                        tooltipText: r,
                        tooltipTextAria: i,
                        shouldShowTooltip: null != r && '' !== r
                    });
            }),
            eo(this, 'renderLurkerModeUpsellPopout', (e) => {
                let { closePopout: t } = e,
                    { message: n, isLurking: i } = this.props,
                    o = k.Z.getChannel(n.getChannelId()),
                    a = L.Z.getGuild(null == o ? void 0 : o.getGuildId());
                return i && null != a
                    ? (0, r.jsx)(E.Z, {
                          ctaRef: this.ctaRef,
                          type: E.s.REACTIONS,
                          guild: a,
                          closePopout: t
                      })
                    : (0, r.jsx)(r.Fragment, {});
            }),
            eo(this, 'renderEmojiDetails', () => {
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
            eo(this, 'renderTooltip', () => {
                let { emoji: e, message: t, type: n, me_burst: i, isBurstReaction: o = !1 } = this.props,
                    { tooltipText: a, tooltipTextAria: l } = this.state,
                    c = (n) => {
                        let i = k.Z.getChannel(t.getChannelId());
                        null != i &&
                            (this.handleLeave(),
                            ec(i, t, {
                                emoji: e,
                                reactionType: o ? z.O.BURST : z.O.NORMAL
                            }));
                    },
                    u = 'string' == typeof a ? '' === a.trim() : null == a,
                    d = () =>
                        u || null == a || null == l
                            ? null
                            : (0, r.jsx)(f.Text, {
                                  variant: 'text-sm/normal',
                                  className: er.reactionTooltipText,
                                  'aria-label': l,
                                  children: a
                              });
                return n === z.O.BURST
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
                                  let e = B.default.getCurrentUser();
                                  return i
                                      ? (0, r.jsxs)('div', {
                                            className: s()(er.burstReactionTooltipPrompt, er.burstReactionTooltipSpacer),
                                            children: [
                                                (0, H.I5)(e) &&
                                                    (0, r.jsx)(f.SrA, {
                                                        size: 'md',
                                                        className: er.burstReactionTooltipNitroIcon,
                                                        color: y.JX.PREMIUM_TIER_2
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
                                              className: s()(er.burstReactionTooltipPrompt, er.burstReactionTooltipSpacer, er.burstReactionTooltipPromptClickable),
                                              children: [
                                                  (0, r.jsx)(f.SrA, {
                                                      size: 'md',
                                                      className: er.burstReactionTooltipNitroIcon,
                                                      color: y.JX.PREMIUM_TIER_2
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
                                                className: s()(er.burstReactionTooltipPrompt, er.burstReactionTooltipSpacer),
                                                children: (0, r.jsxs)('div', {
                                                    children: [
                                                        (0, r.jsx)(f.Text, {
                                                            variant: 'text-sm/normal',
                                                            'aria-label': 'super reaction tooltip upsell',
                                                            children: ee.intl.string(ee.t.W1bMkp)
                                                        }),
                                                        (0, r.jsx)(N.Z, {
                                                            subscriptionTier: Q.Si.TIER_2,
                                                            buttonText: ee.intl.string(ee.t.mr4K7O),
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
            eo(this, 'refreshTooltipPositionKey', () => {
                this.setState({ tooltipPositionKey: String(Date.now()) });
            }),
            eo(this, 'handleShowVerificationGate', () => {
                let { message: e, isPendingMember: t } = this.props;
                if (!t) return null;
                let n = k.Z.getChannel(e.getChannelId()),
                    i = L.Z.getGuild(null == n ? void 0 : n.getGuildId());
                null != i && (0, R.hk)(i.id);
            }),
            eo(this, 'handleSetReactionRef', (e) => {
                this.setState({ reactionRef: e });
            }),
            eo(this, 'trackReactionTooltipViewed', () => {
                let { emoji: e, message: t, type: n } = this.props,
                    i = B.default.getCurrentUser(),
                    r = k.Z.getChannel(t.getChannelId()),
                    o = n === z.O.BURST,
                    a = (0, H.I5)(i),
                    s = o ? Q.cd.EMOJI_IN_BURST_REACTION_HOVER : Q.cd.EMOJI_IN_REACTION_HOVER;
                !o || this.userCanBurstReact() || a || (s = Q.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
                    O.ZP.trackWithMetadata($.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                        type: s,
                        expression_id: e.id,
                        expression_name: e.name,
                        is_animated: e.animated,
                        is_custom: null != e.id,
                        nonce: this.nonce
                    }),
                    !o ||
                        null == r ||
                        a ||
                        this.userCanBurstReact() ||
                        V.default.track($.rMx.PREMIUM_UPSELL_VIEWED, {
                            type: Q.cd.BURST_REACTION_UPSELL,
                            location: {
                                page: (null == r ? void 0 : r.getGuildId()) != null ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
                                section: (0, A.s4)(r),
                                object: $.qAy.EMOJI_REACTION_TOOLTIP_UPSELL
                            }
                        });
            });
    }
}
eo(ed, 'defaultProps', { emojiSizeTooltip: 'jumbo' });
let eh = o.memo((e) => {
        let { type: t, burst_colors: n, message: i, emoji: o } = e,
            a = t === z.O.BURST,
            s = (0, _.v)(a && null != n ? n : []),
            l = (0, p.e7)([G.Z], () => void 0 !== G.Z.getEffectForEmojiId(i.getChannelId(), i.id, o)),
            c = (0, p.e7)([j.Z], () => j.Z.useReducedMotion),
            u = M.Yk.useSetting(),
            d = B.default.getCurrentUser(),
            h = (0, H.I5)(d),
            m = (0, p.e7)([G.Z], () => G.Z.getReactionPickerAnimation(i.id, o.name, o.id)),
            f = a && (l || null != m);
        return (0, r.jsx)(
            ed,
            es(ea({}, e), {
                colors: s,
                isBurstReaction: a,
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
        let { emojiId: o, expressionSourceGuild: a, hasJoinedExpressionSourceGuild: s, onClose: l, popoutData: c, currentGuildId: u, nonce: d } = e;
        (0, P.u)({
            emojiId: o,
            currentGuildId: u,
            popoutData: c,
            emojiSourceGuildId: null == a ? void 0 : a.id,
            nonce: d
        });
        let h = null != (n = null == a ? void 0 : a.isDiscoverable()) && n,
            p = null != a && h,
            m = (null != (i = null == a || null == (t = a.emojis) ? void 0 : t.length) ? i : 0) > 1;
        return p
            ? null == a
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', {
                              className: et.reactionEmojiDetailsUnfurlGuildDetails,
                              children: (0, r.jsx)(K.Oe, {
                                  expressionSourceGuild: a,
                                  hasJoinedExpressionSourceGuild: s,
                                  isDisplayingJoinGuildButtonInPopout: c.type === W.$.JOIN_GUILD
                              })
                          }),
                          m &&
                              (0, r.jsx)(K.n_, {
                                  emojiId: o,
                                  expressionSourceGuild: a,
                                  hasJoinedEmojiSourceGuild: s,
                                  onClose: l,
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
        let { emojiId: n, refreshPositionKey: i, onClose: a, nonce: l } = e,
            { joinedEmojiSourceGuild: c } = (0, p.cj)([T.ZP, L.Z], () => {
                let e = T.ZP.getCustomEmojiById(n);
                return { joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === S.B.GUILD ? L.Z.getGuild(null == e ? void 0 : e.guildId) : void 0 };
            }),
            [u, d] = o.useState(void 0),
            [h, m] = o.useState(void 0),
            [g, b] = o.useState(null),
            [j, v] = o.useState(!1),
            [O, y] = o.useState(!1),
            [x, _] = o.useState(!1),
            P = null != c,
            R = null != (t = null == u ? void 0 : u.isDiscoverable()) && t,
            E = U.Z.getGuildId(),
            I = null != E && (E === (null == u ? void 0 : u.id) || E === (null == c ? void 0 : c.id)),
            N = B.default.getCurrentUser(),
            w = (0, W.a)({
                sourceType: g,
                expressionSourceApplication: null != h ? h : null,
                isPremium: H.ZP.isPremium(N),
                hasJoinedEmojiSourceGuild: P,
                isDiscoverable: R,
                emojiComesFromCurrentGuild: I,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1
            });
        if (
            (o.useEffect(() => {
                j &&
                    !x &&
                    (async () => {
                        i(), y(!0);
                        let e = null != n ? await (0, C.Fi)(n) : null;
                        if (null != e)
                            switch ((b(e.type), e.type)) {
                                case C.w6.APPLICATION:
                                    m(e.application);
                                    break;
                                case C.w6.GUILD:
                                    d(e.guild);
                            }
                        else d(null);
                        y(!1), _(!0), i();
                    })();
            }, [n, j, x, i]),
            P)
        )
            return null;
        let Z = () => {
                v(!j);
            },
            A = j && (void 0 !== u || void 0 !== h);
        return (0, r.jsxs)('div', {
            children: [
                A
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', { className: et.reactionEmojiDetailsDivider }),
                              null != w.emojiDescription &&
                                  w.type !== W.$.UNAVAILABLE &&
                                  (0, r.jsx)(f.Text, {
                                      variant: 'text-sm/normal',
                                      'aria-label': w.type,
                                      children: w.emojiDescription
                                  })
                          ]
                      })
                    : (() => {
                          let e = ee.intl.string(ee.t['Igv+LS']);
                          return (0, r.jsxs)(f.P3F, {
                              onClick: Z,
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
                                      className: s()(et.reactionEmojiDetailsArrow, { [et.reactionEmojiDetailsArrowCollapsed]: !j })
                                  })
                              ]
                          });
                      })(),
                O
                    ? (0, r.jsx)(J.SE, { className: et.emojiDetailsLoader })
                    : A &&
                      (0, r.jsx)(ep, {
                          emojiId: n,
                          expressionSourceGuild: u,
                          hasJoinedExpressionSourceGuild: P,
                          onClose: a,
                          popoutData: w,
                          currentGuildId: E,
                          nonce: l
                      })
            ]
        });
    };
