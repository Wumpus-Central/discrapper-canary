n.d(t, {
    aO: () => ea,
    le: () => er,
    op: () => eo,
    y4: () => es
}),
    n(47120);
var i,
    a = n(200651),
    o = n(192379),
    s = n(120356),
    l = n.n(s),
    r = n(772848),
    c = n(748780),
    d = n(866442),
    u = n(442837),
    h = n(846519),
    m = n(481060),
    p = n(596454),
    g = n(785388),
    f = n(607070),
    v = n(446489),
    T = n(367907),
    x = n(436774),
    _ = n(98474),
    b = n(339085),
    j = n(906411),
    C = n(56314),
    R = n(231053),
    S = n(944386),
    E = n(305325),
    I = n(33154),
    N = n(692147),
    Z = n(197115),
    y = n(659215),
    A = n(222677),
    O = n(995774),
    M = n(695346),
    P = n(592125),
    w = n(430824),
    L = n(542578),
    k = n(914010),
    U = n(594174),
    B = n(451478),
    F = n(626135),
    D = n(74538),
    V = n(960020),
    G = n(566006),
    H = n(886132),
    z = n(183023),
    W = n(524444),
    J = n(89729),
    K = n(620652),
    X = n(640753),
    Y = n(981631),
    q = n(474936),
    $ = n(388032),
    Q = n(124396),
    ee = n(636804),
    et = n(952714),
    en = n(758718);
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
let ea = 9;
function eo(e, t, n) {
    (0, m.h7j)((e) =>
        (0, a.jsx)(g.default, {
            ...e,
            message: t,
            selectedReaction: n
        })
    );
}
function es(e, t, n) {
    return (n === G.O.BURST && t) || (n === G.O.NORMAL && e);
}
class el extends (i = o.PureComponent) {
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
        let { count: n, burst_count: i, colors: o, isBurstReaction: s, hideCount: r, emoji: u, readOnly: h, isLurking: g, isGuest: f, isPendingMember: T, className: x, useChatFontScaling: b, message: j, hideEmoji: C, animationStartPosition: R, emojiSize: S } = this.props,
            { shouldShowTooltip: E, tooltipTextAria: I, reactionRef: Z, tooltipPositionKey: y } = this.state,
            A = b ? et : ee,
            M = {
                transform: [{ scale: this.scale }],
                opacity: this.opacity
            },
            P = s ? i : n;
        if (s && null != o) {
            var w;
            let { accentColor: n, backgroundColor: i, opacity: a } = o,
                s = null !== (w = (0, d.wK)(null != i ? i : '', a)) && void 0 !== w ? w : '';
            this.isMe() && (M.borderColor = i), (M.background = s), (e = n), (t = n);
        }
        let L = null == Z ? void 0 : Z.getBoundingClientRect(),
            k = null != R && null != L,
            U = null == R;
        return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(m.yRy, {
                shouldShow: E,
                'aria-label': null != I && I,
                renderPopout: this.renderTooltip,
                nudgeAlignIntoViewport: !0,
                position: 'top',
                align: 'center',
                positionKey: y,
                children: () =>
                    (0, a.jsx)('div', {
                        onMouseEnter: this.handleEnter,
                        onMouseLeave: this.handleLeave,
                        ref: this.handleSetReactionRef,
                        children: (0, a.jsx)(c.Z.div, {
                            className: l()(A.reaction, x, {
                                [A.reactionMe]: this.isMe(),
                                [A.reactionReadOnly]: h && !g && !T && !f,
                                [A.shakeReaction]: C && null == R
                            }),
                            style: M,
                            children: (0, a.jsx)(m.yRy, {
                                renderPopout: this.renderLurkerModeUpsellPopout,
                                position: 'top',
                                children: (n) =>
                                    (0, a.jsxs)(m.P3F, {
                                        ...n,
                                        className: A.reactionInner,
                                        onClick: this.handleClick,
                                        'aria-disabled': h,
                                        'aria-label': (0, O.iD)(this.isMe(), P, u, s),
                                        'aria-pressed': this.isMe(),
                                        children: [
                                            (0, a.jsx)('div', {
                                                className: l()({ [A.burstGlow]: s }),
                                                style: { boxShadow: '0 0 16px '.concat(t) }
                                            }),
                                            (0, a.jsxs)('div', {
                                                children: [
                                                    s
                                                        ? (0, a.jsxs)(a.Fragment, {
                                                              children: [
                                                                  k &&
                                                                      (0, a.jsx)(_.Z, {
                                                                          messageId: j.id,
                                                                          emoji: u,
                                                                          startPosition: R,
                                                                          targetPosition: L
                                                                      }),
                                                                  U &&
                                                                      (0, a.jsx)(X.Z, {
                                                                          count: i,
                                                                          emoji: u,
                                                                          channelId: j.getChannelId(),
                                                                          messageId: j.id,
                                                                          useChatFontScaling: b,
                                                                          color: t,
                                                                          emojiSize: 'reactionLarge' === S ? K.M.NORMAL_NEW : K.M.NORMAL
                                                                      })
                                                              ]
                                                          })
                                                        : null,
                                                    (0, a.jsx)(p.Z, {
                                                        className: l()({ [A.hideEmoji]: C }),
                                                        emojiId: u.id,
                                                        emojiName: u.name,
                                                        size: S,
                                                        animated: u.animated
                                                    })
                                                ]
                                            }),
                                            r
                                                ? null
                                                : (0, a.jsx)(v.Z, {
                                                      className: A.reactionCount,
                                                      value: P,
                                                      color: e,
                                                      digitWidth: ea
                                                  }),
                                            (0, a.jsx)(N.Z, {
                                                count: P,
                                                reactionRef: Z
                                            })
                                        ]
                                    })
                            })
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
            ei(this, 'ctaRef', o.createRef()),
            ei(this, 'type', G.O.NORMAL),
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
            ei(this, 'nonce', (0, r.Z)()),
            ei(this, 'userCanBurstReact', () => this.props.userHasPremium),
            ei(this, 'handleClick', (e) => {
                e.stopPropagation();
                let { message: t, emoji: n, readOnly: i, isBurstReaction: a, isPendingMember: o, isLurking: s, isGuest: l, isForumToolbar: r } = this.props,
                    c = P.Z.getChannel(t.getChannelId());
                if (s || l) {
                    var d, u;
                    null === (u = this.ctaRef) || void 0 === u || null === (d = u.current) || void 0 === d || d.focus();
                    return;
                }
                let h = t.getChannelId(),
                    m = r ? A.TW.FORUM_TOOLBAR : A.TW.MESSAGE_INLINE_BUTTON;
                if (a && !this.userCanBurstReact()) {
                    (0, y.m)({
                        analytics: {
                            type: q.cd.BURST_REACTION_UPSELL,
                            page: (null == c ? void 0 : c.getGuildId()) != null ? Y.ZY5.GUILD_CHANNEL : Y.ZY5.DM_CHANNEL,
                            section: null != c ? (0, O.s4)(c) : void 0,
                            object: Y.qAy.EMOJI_REACTION_UPSELL
                        }
                    });
                    return;
                }
                o
                    ? this.handleShowVerificationGate()
                    : i ||
                      (this.isMe()
                          ? (0, A.WO)({
                                channelId: h,
                                messageId: t.id,
                                emoji: n,
                                location: m,
                                options: { burst: a }
                            })
                          : (0, A.rU)(h, t.id, n, m, { burst: a }));
            }),
            ei(this, 'handleEnter', (e) => {
                let { emoji: t, message: n, type: i, reduceMotion: a, animateEmoji: o, autoUnfurlReactionTooltip: s } = this.props,
                    l = i === G.O.BURST;
                l &&
                    !this.isReactionEventActive &&
                    !a &&
                    o &&
                    (0, A.T6)({
                        channelId: n.getChannelId(),
                        messageId: n.id,
                        emoji: t,
                        key: V.I.HOVER
                    }),
                    (this.isReactionEventActive = !0),
                    (this.isKeyboardNavigation = 'focus' === e.type),
                    this.timeout.start(l ? 750 : s ? 200 : 500, this.showTooltip, !1);
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
                this.setState({ shouldShowTooltip: !1 }), this.hasShownTooltip && F.default.track(Y.rMx.CLOSE_POPOUT, { nonce: this.nonce });
            }),
            ei(this, 'isMe', () => {
                let { me: e, me_burst: t, type: n } = this.props;
                return es(e, t, n);
            }),
            ei(this, 'updateTooltipText', () => {
                let { message: e, emoji: t, type: n } = this.props,
                    i = (0, J.g)(e, t, n),
                    a = this.isKeyboardNavigation ? i : (0, J.g)(e, t, n, Y.dG4);
                this.setState({
                    tooltipText: a,
                    tooltipTextAria: i,
                    shouldShowTooltip: null != a && '' !== a
                });
            }),
            ei(this, 'renderLurkerModeUpsellPopout', (e) => {
                let { closePopout: t } = e,
                    { message: n, isLurking: i } = this.props,
                    o = P.Z.getChannel(n.getChannelId()),
                    s = w.Z.getGuild(null == o ? void 0 : o.getGuildId());
                return i && null != s
                    ? (0, a.jsx)(I.Z, {
                          ctaRef: this.ctaRef,
                          type: I.s.REACTIONS,
                          guild: s,
                          closePopout: t
                      })
                    : (0, a.jsx)(a.Fragment, {});
            }),
            ei(this, 'renderEmojiDetails', () => {
                let e = this.props.emoji;
                return (
                    null != e.id &&
                    (0, a.jsx)(ed, {
                        emojiId: e.id,
                        refreshPositionKey: this.refreshTooltipPositionKey,
                        onClose: this.handleLeave,
                        nonce: this.nonce
                    })
                );
            }),
            ei(this, 'renderTooltip', () => {
                let { emoji: e, message: t, type: n, me_burst: i, isBurstReaction: o = !1 } = this.props,
                    { tooltipText: s } = this.state,
                    r = (n) => {
                        let i = P.Z.getChannel(t.getChannelId());
                        null != i &&
                            (this.handleLeave(),
                            eo(i, t, {
                                emoji: e,
                                reactionType: o ? G.O.BURST : G.O.NORMAL
                            }));
                    },
                    c = 'string' == typeof s ? '' === s.trim() : null == s,
                    d = () =>
                        c || null == s
                            ? null
                            : (0, a.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  className: en.reactionTooltipText,
                                  'aria-label': s,
                                  children: s
                              });
                return n === G.O.BURST
                    ? (0, a.jsxs)('div', {
                          className: en.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, a.jsx)(m.P3F, {
                                  className: en.burstReactionTooltipInner,
                                  onClick: r,
                                  children: (0, a.jsxs)('div', {
                                      className: en.burstReactionTooltipMessage,
                                      children: [
                                          (0, a.jsx)(p.Z, {
                                              className: en.reactionTooltipEmoji,
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
                                  let e = U.default.getCurrentUser();
                                  return i
                                      ? (0, a.jsxs)('div', {
                                            className: l()(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer),
                                            children: [
                                                (0, D.I5)(e) &&
                                                    (0, a.jsx)(m.SrA, {
                                                        size: 'md',
                                                        className: en.burstReactionTooltipNitroIcon,
                                                        color: x.JX.PREMIUM_TIER_2
                                                    }),
                                                (0, a.jsx)(m.Text, {
                                                    variant: 'text-sm/normal',
                                                    className: en.reactionTooltipText,
                                                    'aria-label': 'super reaction tooltip cta',
                                                    children: $.intl.string($.t.ZbNJXl)
                                                })
                                            ]
                                        })
                                      : this.userCanBurstReact()
                                        ? (0, a.jsxs)('div', {
                                              className: l()(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer, en.burstReactionTooltipPromptClickable),
                                              children: [
                                                  (0, a.jsx)(m.SrA, {
                                                      size: 'md',
                                                      className: en.burstReactionTooltipNitroIcon,
                                                      color: x.JX.PREMIUM_TIER_2
                                                  }),
                                                  (0, a.jsx)(m.P3F, {
                                                      onClick: this.handleClick,
                                                      children: (0, a.jsx)(m.Text, {
                                                          variant: 'text-sm/normal',
                                                          className: en.reactionTooltipText,
                                                          'aria-label': 'super reaction tooltip cta',
                                                          children: $.intl.string($.t.kVfuVl)
                                                      })
                                                  })
                                              ]
                                          })
                                        : this.userCanBurstReact() || this.isKeyboardNavigation
                                          ? null
                                          : (0, a.jsx)('div', {
                                                className: l()(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer),
                                                children: (0, a.jsxs)('div', {
                                                    children: [
                                                        (0, a.jsx)(m.Text, {
                                                            variant: 'text-sm/normal',
                                                            'aria-label': 'super reaction tooltip upsell',
                                                            children: $.intl.string($.t.W1bMkp)
                                                        }),
                                                        (0, a.jsx)(Z.Z, {
                                                            subscriptionTier: q.Si.TIER_2,
                                                            buttonText: $.intl.string($.t.mr4K7O),
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
                    : (0, a.jsxs)('div', {
                          className: en.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, a.jsx)(m.P3F, {
                                  onClick: r,
                                  children: (0, a.jsxs)('div', {
                                      className: en.reactionTooltipInner,
                                      children: [
                                          (0, a.jsx)(p.Z, {
                                              className: en.reactionTooltipEmoji,
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
            ei(this, 'refreshTooltipPositionKey', () => {
                this.setState({ tooltipPositionKey: String(Date.now()) });
            }),
            ei(this, 'handleShowVerificationGate', () => {
                let { message: e, isPendingMember: t } = this.props;
                if (!t) return null;
                let n = P.Z.getChannel(e.getChannelId()),
                    i = w.Z.getGuild(null == n ? void 0 : n.getGuildId());
                null != i && (0, E.hk)(i.id);
            }),
            ei(this, 'handleSetReactionRef', (e) => {
                this.setState({ reactionRef: e });
            }),
            ei(this, 'trackReactionTooltipViewed', () => {
                let { emoji: e, message: t, type: n } = this.props,
                    i = U.default.getCurrentUser(),
                    a = P.Z.getChannel(t.getChannelId()),
                    o = n === G.O.BURST,
                    s = (0, D.I5)(i),
                    l = o ? q.cd.EMOJI_IN_BURST_REACTION_HOVER : q.cd.EMOJI_IN_REACTION_HOVER;
                !o || this.userCanBurstReact() || s || (l = q.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
                    T.ZP.trackWithMetadata(Y.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                        type: l,
                        expression_id: e.id,
                        expression_name: e.name,
                        is_animated: e.animated,
                        is_custom: null != e.id,
                        nonce: this.nonce
                    }),
                    !o ||
                        null == a ||
                        s ||
                        this.userCanBurstReact() ||
                        F.default.track(Y.rMx.PREMIUM_UPSELL_VIEWED, {
                            type: q.cd.BURST_REACTION_UPSELL,
                            location: {
                                page: (null == a ? void 0 : a.getGuildId()) != null ? Y.ZY5.GUILD_CHANNEL : Y.ZY5.DM_CHANNEL,
                                section: (0, O.s4)(a),
                                object: Y.qAy.EMOJI_REACTION_TOOLTIP_UPSELL
                            }
                        });
            });
    }
}
ei(el, 'defaultProps', { emojiSizeTooltip: 'jumbo' });
let er = o.memo((e) => {
        let { type: t, burst_colors: n, message: i, emoji: o } = e,
            s = t === G.O.BURST,
            l = (0, C.v)(s && null != n ? n : []),
            r = (0, u.e7)([V.Z], () => void 0 !== V.Z.getEffectForEmojiId(i.getChannelId(), i.id, o)),
            c = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
            d = M.Yk.useSetting(),
            h = U.default.getCurrentUser(),
            m = (0, D.I5)(h),
            p = (0, u.e7)([V.Z], () => V.Z.getReactionPickerAnimation(i.id, o.name, o.id)),
            g = s && (r || null != p);
        return (0, a.jsx)(el, {
            ...e,
            colors: l,
            isBurstReaction: s,
            hideEmoji: g,
            userHasPremium: m,
            reduceMotion: c,
            animateEmoji: d,
            animationStartPosition: p
        });
    }),
    ec = (e) => {
        var t, n, i;
        let { emojiId: o, expressionSourceGuild: s, hasJoinedExpressionSourceGuild: l, onClose: r, popoutData: c, currentGuildId: d, nonce: u } = e;
        (0, S.u)({
            emojiId: o,
            currentGuildId: d,
            popoutData: c,
            emojiSourceGuildId: null == s ? void 0 : s.id,
            nonce: u
        });
        let h = null !== (n = null == s ? void 0 : s.isDiscoverable()) && void 0 !== n && n,
            p = null != s && h,
            g = (null !== (i = null == s ? void 0 : null === (t = s.emojis) || void 0 === t ? void 0 : t.length) && void 0 !== i ? i : 0) > 1;
        return (0, a.jsx)(a.Fragment, {
            children: p
                ? null == s
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)('div', {
                                  className: Q.reactionEmojiDetailsUnfurlGuildDetails,
                                  children: (0, a.jsx)(z.Oe, {
                                      expressionSourceGuild: s,
                                      hasJoinedExpressionSourceGuild: l,
                                      isDisplayingJoinGuildButtonInPopout: c.type === H.$.JOIN_GUILD
                                  })
                              }),
                              g &&
                                  (0, a.jsx)(z.n_, {
                                      emojiId: o,
                                      expressionSourceGuild: s,
                                      hasJoinedEmojiSourceGuild: l,
                                      onClose: r,
                                      popoutData: c,
                                      isDisplayingButtonInTopSection: !1
                                  })
                          ]
                      })
                : (0, a.jsx)(m.Text, {
                      variant: 'text-sm/normal',
                      'aria-label': c.type,
                      children: c.emojiDescription
                  })
        });
    },
    ed = (e) => {
        var t;
        let { emojiId: n, refreshPositionKey: i, onClose: s, nonce: r } = e,
            { joinedEmojiSourceGuild: c } = (0, u.cj)([b.ZP, w.Z], () => {
                let e = b.ZP.getCustomEmojiById(n);
                return { joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === j.B.GUILD ? w.Z.getGuild(null == e ? void 0 : e.guildId) : void 0 };
            }),
            [d, h] = o.useState(void 0),
            [p, g] = o.useState(void 0),
            [f, v] = o.useState(null),
            [T, x] = o.useState(!1),
            [_, C] = o.useState(!1),
            [S, E] = o.useState(!1),
            I = null != c,
            N = null !== (t = null == d ? void 0 : d.isDiscoverable()) && void 0 !== t && t,
            Z = k.Z.getGuildId(),
            y = null != Z && (Z === (null == d ? void 0 : d.id) || Z === (null == c ? void 0 : c.id)),
            A = U.default.getCurrentUser(),
            O = (0, H.a)({
                sourceType: f,
                expressionSourceApplication: null != p ? p : null,
                isPremium: D.ZP.isPremium(A),
                hasJoinedEmojiSourceGuild: I,
                isDiscoverable: N,
                emojiComesFromCurrentGuild: y,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1
            });
        if (
            (o.useEffect(() => {
                T &&
                    !S &&
                    (async () => {
                        i(), C(!0);
                        let e = null != n ? await (0, R.Fi)(n) : null;
                        if (null != e)
                            switch ((v(e.type), e.type)) {
                                case R.w6.APPLICATION:
                                    g(e.application);
                                    break;
                                case R.w6.GUILD:
                                    h(e.guild);
                            }
                        else h(null);
                        C(!1), E(!0), i();
                    })();
            }, [n, T, S, i]),
            I)
        )
            return null;
        let M = () => {
                x(!T);
            },
            P = T && (void 0 !== d || void 0 !== p);
        return (0, a.jsxs)('div', {
            children: [
                P
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)('div', { className: Q.reactionEmojiDetailsDivider }),
                              null != O.emojiDescription &&
                                  O.type !== H.$.UNAVAILABLE &&
                                  (0, a.jsx)(m.Text, {
                                      variant: 'text-sm/normal',
                                      'aria-label': O.type,
                                      children: O.emojiDescription
                                  })
                          ]
                      })
                    : (() => {
                          let e = $.intl.string($.t['Igv+LS']);
                          return (0, a.jsxs)(m.P3F, {
                              onClick: M,
                              className: Q.reactionEmojiDetailsClickable,
                              children: [
                                  (0, a.jsx)(m.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'none',
                                      'aria-label': e,
                                      children: e
                                  }),
                                  (0, a.jsx)(m.CJ0, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: l()(Q.reactionEmojiDetailsArrow, { [Q.reactionEmojiDetailsArrowCollapsed]: !T })
                                  })
                              ]
                          });
                      })(),
                _
                    ? (0, a.jsx)(W.SE, { className: Q.emojiDetailsLoader })
                    : P &&
                      (0, a.jsx)(ec, {
                          emojiId: n,
                          expressionSourceGuild: d,
                          hasJoinedExpressionSourceGuild: I,
                          onClose: s,
                          popoutData: O,
                          currentGuildId: Z,
                          nonce: r
                      })
            ]
        });
    };
