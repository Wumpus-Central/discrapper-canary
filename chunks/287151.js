n.d(t, {
    aO: () => ea,
    le: () => eh,
    op: () => ec,
    y4: () => eu
}),
    n(388685),
    n(781311);
var i,
    r = n(255367),
    o = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    c = n.n(a),
    u = n(772848),
    d = n(748780),
    h = n(866442),
    p = n(442837),
    f = n(846519),
    m = n(481060),
    g = n(596454),
    b = n(785388),
    O = n(607070),
    v = n(446489),
    j = n(367907),
    y = n(436774),
    _ = n(98474),
    S = n(339085),
    T = n(906411),
    x = n(56314),
    P = n(231053),
    E = n(944386),
    C = n(305325),
    I = n(33154),
    R = n(692147),
    w = n(767714),
    N = n(659215),
    Z = n(222677),
    A = n(995774),
    M = n(695346),
    L = n(592125),
    k = n(430824),
    D = n(542578),
    U = n(914010),
    F = n(594174),
    B = n(451478),
    V = n(626135),
    G = n(74538),
    z = n(960020),
    H = n(566006),
    W = n(886132),
    J = n(183023),
    K = n(524444),
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
function el(e) {
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
let ea = 12;
function ec(e, t, n) {
    (0, m.h7j)((e) =>
        (0, r.jsx)(
            b.default,
            es(el({}, e), {
                message: t,
                selectedReaction: n
            })
        )
    );
}
function eu(e, t, n) {
    return (n === H.O.BURST && t) || (n === H.O.NORMAL && e);
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
            { count: n, burst_count: i, colors: o, isBurstReaction: l, hideCount: a, emoji: c, readOnly: u, isLurking: p, isGuest: f, isPendingMember: b, className: O, useChatFontScaling: j, message: y, hideEmoji: S, animationStartPosition: T, emojiSize: x } = this.props,
            { shouldShowTooltip: P, tooltipTextAria: E, reactionRef: C, tooltipPositionKey: I } = this.state,
            w = j ? ei : en,
            N = {
                transform: [{ scale: this.scale }],
                opacity: this.opacity
            },
            Z = l ? i : n;
        if (l && null != o) {
            var M;
            let { accentColor: n, backgroundColor: i, opacity: r } = o,
                l = null != (M = (0, h.wK)(null != i ? i : '', r)) ? M : '';
            this.isMe() && (N.borderColor = i), (N.background = l), (e = n), (t = n);
        }
        let L = null == C ? void 0 : C.getBoundingClientRect(),
            k = null != T && null != L,
            D = null == T;
        return (0, r.jsx)(m.yRy, {
            targetElementRef: { current: C },
            shouldShow: P,
            'aria-label': null != E && E,
            renderPopout: this.renderTooltip,
            nudgeAlignIntoViewport: !0,
            position: 'top',
            align: 'center',
            positionKey: I,
            children: () =>
                (0, r.jsx)('div', {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    ref: this.handleSetReactionRef,
                    children: (0, r.jsx)(d.Z.div, {
                        className: s()(w.reaction, O, {
                            [w.reactionMe]: this.isMe(),
                            [w.reactionReadOnly]: u && !p && !b && !f,
                            [w.shakeReaction]: S && null == T
                        }),
                        style: N,
                        children: (0, r.jsx)(m.yRy, {
                            targetElementRef: this.upsellPopoutTargetRef,
                            renderPopout: this.renderLurkerModeUpsellPopout,
                            position: 'top',
                            children: (n) =>
                                (0, r.jsxs)(
                                    m.P3F,
                                    es(el({}, n), {
                                        innerRef: this.upsellPopoutTargetRef,
                                        className: w.reactionInner,
                                        onClick: this.handleClick,
                                        'aria-disabled': u,
                                        'aria-label': (0, A.iD)(this.isMe(), Z, c, l),
                                        'aria-pressed': this.isMe(),
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: s()({ [w.burstGlow]: l }),
                                                style: { boxShadow: '0 0 16px '.concat(t) }
                                            }),
                                            (0, r.jsxs)('div', {
                                                children: [
                                                    l
                                                        ? (0, r.jsxs)(r.Fragment, {
                                                              children: [
                                                                  k &&
                                                                      (0, r.jsx)(_.Z, {
                                                                          messageId: y.id,
                                                                          emoji: c,
                                                                          startPosition: T,
                                                                          targetPosition: L
                                                                      }),
                                                                  D &&
                                                                      (0, r.jsx)(q.Z, {
                                                                          count: i,
                                                                          emoji: c,
                                                                          channelId: y.getChannelId(),
                                                                          messageId: y.id,
                                                                          useChatFontScaling: j,
                                                                          color: t,
                                                                          emojiSize: Y.M.NORMAL
                                                                      })
                                                              ]
                                                          })
                                                        : null,
                                                    (0, r.jsx)(g.Z, {
                                                        className: s()({ [w.hideEmoji]: S }),
                                                        emojiId: c.id,
                                                        emojiName: c.name,
                                                        size: x,
                                                        animated: c.animated
                                                    })
                                                ]
                                            }),
                                            a
                                                ? null
                                                : (0, r.jsx)(v.Z, {
                                                      className: w.reactionCount,
                                                      value: Z,
                                                      color: e,
                                                      digitWidth: ea
                                                  }),
                                            (0, r.jsx)(R.Z, {
                                                count: Z,
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
            eo(this, 'isReactionEventActive', !1),
            eo(this, 'isKeyboardNavigation', !1),
            eo(this, 'scale', new d.Z.Value(1)),
            eo(this, 'opacity', new d.Z.Value(1)),
            eo(this, 'timeout', new f.V7()),
            eo(this, 'hideTimeout', new f.V7()),
            eo(this, 'ctaRef', o.createRef()),
            eo(this, 'type', H.O.NORMAL),
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
                let { message: t, emoji: n, readOnly: i, isBurstReaction: r, isPendingMember: o, isLurking: l, isGuest: s, isForumToolbar: a } = this.props,
                    c = L.Z.getChannel(t.getChannelId());
                if (l || s) {
                    var u, d;
                    null == (d = this.ctaRef) || null == (u = d.current) || u.focus();
                    return;
                }
                let h = t.getChannelId(),
                    p = a ? Z.TW.FORUM_TOOLBAR : Z.TW.MESSAGE_INLINE_BUTTON;
                if (r && !this.userCanBurstReact())
                    return void (0, N.m)({
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
                let { emoji: t, message: n, type: i, reduceMotion: r, animateEmoji: o, autoUnfurlReactionTooltip: l } = this.props,
                    s = i === H.O.BURST;
                s &&
                    !this.isReactionEventActive &&
                    !r &&
                    o &&
                    (0, Z.T6)({
                        channelId: n.getChannelId(),
                        messageId: n.id,
                        emoji: t,
                        key: z.I.HOVER
                    }),
                    (this.isReactionEventActive = !0),
                    (this.isKeyboardNavigation = 'focus' === e.type),
                    this.timeout.start(s ? 750 : l ? 200 : 500, this.showTooltip, !1);
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
                    o = L.Z.getChannel(n.getChannelId()),
                    l = k.Z.getGuild(null == o ? void 0 : o.getGuildId());
                return i && null != l
                    ? (0, r.jsx)(I.Z, {
                          ctaRef: this.ctaRef,
                          type: I.s.REACTIONS,
                          guild: l,
                          closePopout: t
                      })
                    : (0, r.jsx)(r.Fragment, {});
            }),
            eo(this, 'renderEmojiDetails', () => {
                let e = this.props.emoji;
                return (
                    null != e.id &&
                    (0, r.jsx)(ef, {
                        emojiId: e.id,
                        refreshPositionKey: this.refreshTooltipPositionKey,
                        onClose: this.handleLeave,
                        nonce: this.nonce
                    })
                );
            }),
            eo(this, 'renderTooltip', () => {
                let { emoji: e, message: t, type: n, me_burst: i, isBurstReaction: o = !1 } = this.props,
                    { tooltipText: l, tooltipTextAria: a } = this.state,
                    c = (n) => {
                        let i = L.Z.getChannel(t.getChannelId());
                        null != i &&
                            (this.handleLeave(),
                            ec(i, t, {
                                emoji: e,
                                reactionType: o ? H.O.BURST : H.O.NORMAL
                            }));
                    },
                    u = 'string' == typeof l ? '' === l.trim() : null == l,
                    d = () =>
                        u || null == l || null == a
                            ? null
                            : (0, r.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  className: er.reactionTooltipText,
                                  'aria-label': a,
                                  children: l
                              });
                return n === H.O.BURST
                    ? (0, r.jsxs)('div', {
                          className: er.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, r.jsx)(m.P3F, {
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
                                  let e = F.default.getCurrentUser();
                                  return i
                                      ? (0, r.jsxs)('div', {
                                            className: s()(er.burstReactionTooltipPrompt, er.burstReactionTooltipSpacer),
                                            children: [
                                                (0, G.I5)(e) &&
                                                    (0, r.jsx)(m.SrA, {
                                                        size: 'md',
                                                        className: er.burstReactionTooltipNitroIcon,
                                                        color: y.JX.PREMIUM_TIER_2
                                                    }),
                                                (0, r.jsx)(m.Text, {
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
                                                  (0, r.jsx)(m.SrA, {
                                                      size: 'md',
                                                      className: er.burstReactionTooltipNitroIcon,
                                                      color: y.JX.PREMIUM_TIER_2
                                                  }),
                                                  (0, r.jsx)(m.P3F, {
                                                      onClick: this.handleClick,
                                                      children: (0, r.jsx)(m.Text, {
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
                                                        (0, r.jsx)(m.Text, {
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
                              (0, r.jsx)(m.P3F, {
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
                let n = L.Z.getChannel(e.getChannelId()),
                    i = k.Z.getGuild(null == n ? void 0 : n.getGuildId());
                null != i && (0, C.hk)(i.id);
            }),
            eo(this, 'handleSetReactionRef', (e) => {
                this.setState({ reactionRef: e });
            }),
            eo(this, 'trackReactionTooltipViewed', () => {
                let { emoji: e, message: t, type: n } = this.props,
                    i = F.default.getCurrentUser(),
                    r = L.Z.getChannel(t.getChannelId()),
                    o = n === H.O.BURST,
                    l = (0, G.I5)(i),
                    s = o ? Q.cd.EMOJI_IN_BURST_REACTION_HOVER : Q.cd.EMOJI_IN_REACTION_HOVER;
                !o || this.userCanBurstReact() || l || (s = Q.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
                    j.ZP.trackWithMetadata($.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                        type: s,
                        expression_id: e.id,
                        expression_name: e.name,
                        is_animated: e.animated,
                        is_custom: null != e.id,
                        nonce: this.nonce
                    }),
                    !o ||
                        null == r ||
                        l ||
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
            l = t === H.O.BURST,
            s = (0, x.v)(l && null != n ? n : []),
            a = (0, p.e7)([z.Z], () => void 0 !== z.Z.getEffectForEmojiId(i.getChannelId(), i.id, o)),
            c = (0, p.e7)([O.Z], () => O.Z.useReducedMotion),
            u = M.Yk.useSetting(),
            d = F.default.getCurrentUser(),
            h = (0, G.I5)(d),
            f = (0, p.e7)([z.Z], () => z.Z.getReactionPickerAnimation(i.id, o.name, o.id)),
            m = l && (a || null != f);
        return (0, r.jsx)(
            ed,
            es(el({}, e), {
                colors: s,
                isBurstReaction: l,
                hideEmoji: m,
                userHasPremium: h,
                reduceMotion: c,
                animateEmoji: u,
                animationStartPosition: f
            })
        );
    }),
    ep = (e) => {
        var t, n, i;
        let { emojiId: o, expressionSourceGuild: l, hasJoinedExpressionSourceGuild: s, onClose: a, popoutData: c, currentGuildId: u, nonce: d } = e;
        (0, E.u)({
            emojiId: o,
            currentGuildId: u,
            popoutData: c,
            emojiSourceGuildId: null == l ? void 0 : l.id,
            nonce: d
        });
        let h = null != (n = null == l ? void 0 : l.isDiscoverable()) && n,
            p = null != l && h,
            f = (null != (i = null == l || null == (t = l.emojis) ? void 0 : t.length) ? i : 0) > 1;
        return p
            ? null == l
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', {
                              className: et.reactionEmojiDetailsUnfurlGuildDetails,
                              children: (0, r.jsx)(J.Oe, {
                                  expressionSourceGuild: l,
                                  hasJoinedExpressionSourceGuild: s,
                                  isDisplayingJoinGuildButtonInPopout: c.type === W.$.JOIN_GUILD
                              })
                          }),
                          f &&
                              (0, r.jsx)(J.n_, {
                                  emojiId: o,
                                  expressionSourceGuild: l,
                                  hasJoinedEmojiSourceGuild: s,
                                  onClose: a,
                                  popoutData: c,
                                  isDisplayingButtonInTopSection: !1
                              })
                      ]
                  })
            : (0, r.jsx)(m.Text, {
                  variant: 'text-sm/normal',
                  'aria-label': c.type,
                  children: c.emojiDescription
              });
    },
    ef = (e) => {
        var t;
        let { emojiId: n, refreshPositionKey: i, onClose: l, nonce: a } = e,
            { joinedEmojiSourceGuild: c } = (0, p.cj)([S.ZP, k.Z], () => {
                let e = S.ZP.getCustomEmojiById(n);
                return { joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === T.B.GUILD ? k.Z.getGuild(null == e ? void 0 : e.guildId) : void 0 };
            }),
            [u, d] = o.useState(void 0),
            [h, f] = o.useState(void 0),
            [g, b] = o.useState(null),
            [O, v] = o.useState(!1),
            [j, y] = o.useState(!1),
            [_, x] = o.useState(!1),
            E = null != c,
            C = null != (t = null == u ? void 0 : u.isDiscoverable()) && t,
            I = U.Z.getGuildId(),
            R = null != I && (I === (null == u ? void 0 : u.id) || I === (null == c ? void 0 : c.id)),
            w = F.default.getCurrentUser(),
            N = (0, W.a)({
                sourceType: g,
                expressionSourceApplication: null != h ? h : null,
                isPremium: G.ZP.isPremium(w),
                hasJoinedEmojiSourceGuild: E,
                isDiscoverable: C,
                emojiComesFromCurrentGuild: R,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1
            });
        if (
            (o.useEffect(() => {
                O &&
                    !_ &&
                    (async () => {
                        i(), y(!0);
                        let e = null != n ? await (0, P.Fi)(n) : null;
                        if (null != e)
                            switch ((b(e.type), e.type)) {
                                case P.w6.APPLICATION:
                                    f(e.application);
                                    break;
                                case P.w6.GUILD:
                                    d(e.guild);
                            }
                        else d(null);
                        y(!1), x(!0), i();
                    })();
            }, [n, O, _, i]),
            E)
        )
            return null;
        let Z = () => {
                v(!O);
            },
            A = O && (void 0 !== u || void 0 !== h);
        return (0, r.jsxs)('div', {
            children: [
                A
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', { className: et.reactionEmojiDetailsDivider }),
                              null != N.emojiDescription &&
                                  N.type !== W.$.UNAVAILABLE &&
                                  (0, r.jsx)(m.Text, {
                                      variant: 'text-sm/normal',
                                      'aria-label': N.type,
                                      children: N.emojiDescription
                                  })
                          ]
                      })
                    : (() => {
                          let e = ee.intl.string(ee.t['Igv+LS']);
                          return (0, r.jsxs)(m.P3F, {
                              onClick: Z,
                              className: et.reactionEmojiDetailsClickable,
                              children: [
                                  (0, r.jsx)(m.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'none',
                                      'aria-label': e,
                                      children: e
                                  }),
                                  (0, r.jsx)(m.CJ0, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: s()(et.reactionEmojiDetailsArrow, { [et.reactionEmojiDetailsArrowCollapsed]: !O })
                                  })
                              ]
                          });
                      })(),
                j
                    ? (0, r.jsx)(K.SE, { className: et.emojiDetailsLoader })
                    : A &&
                      (0, r.jsx)(ep, {
                          emojiId: n,
                          expressionSourceGuild: u,
                          hasJoinedExpressionSourceGuild: E,
                          onClose: l,
                          popoutData: N,
                          currentGuildId: I,
                          nonce: a
                      })
            ]
        });
    };
