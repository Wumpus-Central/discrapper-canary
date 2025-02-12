i.d(t, {
    aO: () => ea,
    le: () => er,
    op: () => eo,
    y4: () => es
}),
    i(47120);
var n,
    a = i(200651),
    o = i(192379),
    s = i(120356),
    l = i.n(s),
    r = i(772848),
    c = i(748780),
    d = i(866442),
    u = i(442837),
    h = i(846519),
    m = i(481060),
    p = i(596454),
    g = i(785388),
    f = i(607070),
    v = i(446489),
    x = i(367907),
    b = i(436774),
    T = i(98474),
    j = i(339085),
    _ = i(906411),
    C = i(56314),
    R = i(231053),
    S = i(944386),
    N = i(305325),
    I = i(33154),
    E = i(692147),
    Z = i(197115),
    y = i(659215),
    O = i(222677),
    A = i(995774),
    M = i(695346),
    P = i(592125),
    w = i(430824),
    L = i(542578),
    k = i(914010),
    B = i(594174),
    U = i(451478),
    F = i(626135),
    V = i(74538),
    D = i(960020),
    G = i(566006),
    H = i(886132),
    z = i(183023),
    W = i(524444),
    K = i(89729),
    J = i(620652),
    X = i(640753),
    Y = i(981631),
    q = i(474936),
    $ = i(388032),
    Q = i(702350),
    ee = i(111777),
    et = i(90285),
    ei = i(595186);
function en(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
let ea = 9;
function eo(e, t, i) {
    (0, m.h7j)((e) =>
        (0, a.jsx)(g.default, {
            ...e,
            message: t,
            selectedReaction: i
        })
    );
}
function es(e, t, i) {
    return (i === G.O.BURST && t) || (i === G.O.NORMAL && e);
}
class el extends (n = o.PureComponent) {
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
        let { count: i, burst_count: n, colors: o, isBurstReaction: s, hideCount: r, emoji: u, readOnly: h, isLurking: g, isGuest: f, isPendingMember: x, className: b, useChatFontScaling: j, message: _, hideEmoji: C, animationStartPosition: R, emojiSize: S } = this.props,
            { shouldShowTooltip: N, tooltipTextAria: I, reactionRef: Z, tooltipPositionKey: y } = this.state,
            O = j ? et : ee,
            M = {
                transform: [{ scale: this.scale }],
                opacity: this.opacity
            },
            P = s ? n : i;
        if (s && null != o) {
            var w;
            let { accentColor: i, backgroundColor: n, opacity: a } = o,
                s = null !== (w = (0, d.wK)(null != n ? n : '', a)) && void 0 !== w ? w : '';
            this.isMe() && (M.borderColor = n), (M.background = s), (e = i), (t = i);
        }
        let L = null == Z ? void 0 : Z.getBoundingClientRect(),
            k = null != R && null != L,
            B = null == R;
        return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(m.yRy, {
                shouldShow: N,
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
                            className: l()(O.reaction, b, {
                                [O.reactionMe]: this.isMe(),
                                [O.reactionReadOnly]: h && !g && !x && !f,
                                [O.shakeReaction]: C && null == R
                            }),
                            style: M,
                            children: (0, a.jsx)(m.yRy, {
                                renderPopout: this.renderLurkerModeUpsellPopout,
                                position: 'top',
                                children: (i) =>
                                    (0, a.jsxs)(m.P3F, {
                                        ...i,
                                        className: O.reactionInner,
                                        onClick: this.handleClick,
                                        'aria-disabled': h,
                                        'aria-label': (0, A.iD)(this.isMe(), P, u, s),
                                        'aria-pressed': this.isMe(),
                                        children: [
                                            (0, a.jsx)('div', {
                                                className: l()({ [O.burstGlow]: s }),
                                                style: { boxShadow: '0 0 16px '.concat(t) }
                                            }),
                                            (0, a.jsxs)('div', {
                                                children: [
                                                    s
                                                        ? (0, a.jsxs)(a.Fragment, {
                                                              children: [
                                                                  k &&
                                                                      (0, a.jsx)(T.Z, {
                                                                          messageId: _.id,
                                                                          emoji: u,
                                                                          startPosition: R,
                                                                          targetPosition: L
                                                                      }),
                                                                  B &&
                                                                      (0, a.jsx)(X.Z, {
                                                                          count: n,
                                                                          emoji: u,
                                                                          channelId: _.getChannelId(),
                                                                          messageId: _.id,
                                                                          useChatFontScaling: j,
                                                                          color: t,
                                                                          emojiSize: 'reactionLarge' === S ? J.M.NORMAL_NEW : J.M.NORMAL
                                                                      })
                                                              ]
                                                          })
                                                        : null,
                                                    (0, a.jsx)(p.Z, {
                                                        className: l()({ [O.hideEmoji]: C }),
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
                                                      className: O.reactionCount,
                                                      value: P,
                                                      color: e,
                                                      digitWidth: ea
                                                  }),
                                            (0, a.jsx)(E.Z, {
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
            en(this, 'isReactionEventActive', !1),
            en(this, 'isKeyboardNavigation', !1),
            en(this, 'scale', new c.Z.Value(1)),
            en(this, 'opacity', new c.Z.Value(1)),
            en(this, 'timeout', new h.V7()),
            en(this, 'hideTimeout', new h.V7()),
            en(this, 'ctaRef', o.createRef()),
            en(this, 'type', G.O.NORMAL),
            en(this, 'colors', {
                backgroundColor: void 0,
                borderColor: void 0,
                textColor: void 0
            }),
            en(this, 'state', {
                shouldShowTooltip: !1,
                tooltipText: null,
                tooltipTextAria: null,
                reactionRef: null,
                tooltipPositionKey: void 0
            }),
            en(this, 'hasShownTooltip', !1),
            en(this, 'nonce', (0, r.Z)()),
            en(this, 'userCanBurstReact', () => this.props.userHasPremium),
            en(this, 'handleClick', (e) => {
                e.stopPropagation();
                let { message: t, emoji: i, readOnly: n, isBurstReaction: a, isPendingMember: o, isLurking: s, isGuest: l, isForumToolbar: r } = this.props,
                    c = P.Z.getChannel(t.getChannelId());
                if (s || l) {
                    var d, u;
                    null === (u = this.ctaRef) || void 0 === u || null === (d = u.current) || void 0 === d || d.focus();
                    return;
                }
                let h = t.getChannelId(),
                    m = r ? O.TW.FORUM_TOOLBAR : O.TW.MESSAGE_INLINE_BUTTON;
                if (a && !this.userCanBurstReact()) {
                    (0, y.m)({
                        analytics: {
                            type: q.cd.BURST_REACTION_UPSELL,
                            page: (null == c ? void 0 : c.getGuildId()) != null ? Y.ZY5.GUILD_CHANNEL : Y.ZY5.DM_CHANNEL,
                            section: null != c ? (0, A.s4)(c) : void 0,
                            object: Y.qAy.EMOJI_REACTION_UPSELL
                        }
                    });
                    return;
                }
                o
                    ? this.handleShowVerificationGate()
                    : n ||
                      (this.isMe()
                          ? (0, O.WO)({
                                channelId: h,
                                messageId: t.id,
                                emoji: i,
                                location: m,
                                options: { burst: a }
                            })
                          : (0, O.rU)(h, t.id, i, m, { burst: a }));
            }),
            en(this, 'handleEnter', (e) => {
                let { emoji: t, message: i, type: n, reduceMotion: a, animateEmoji: o, autoUnfurlReactionTooltip: s } = this.props,
                    l = n === G.O.BURST;
                l &&
                    !this.isReactionEventActive &&
                    !a &&
                    o &&
                    (0, O.T6)({
                        channelId: i.getChannelId(),
                        messageId: i.id,
                        emoji: t,
                        key: D.I.HOVER
                    }),
                    (this.isReactionEventActive = !0),
                    (this.isKeyboardNavigation = 'focus' === e.type),
                    this.timeout.start(l ? 750 : s ? 200 : 500, this.showTooltip, !1);
            }),
            en(this, 'handleEnterTooltip', () => {
                (this.isReactionEventActive = !0), this.handleShowTooltip();
            }),
            en(this, 'handleShowTooltip', () => {
                this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), L.Z.addChangeListener(this.updateTooltipText));
            }),
            en(this, 'showTooltip', () => {
                this.props.readOnly || (this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), (this.hasShownTooltip = !0));
            }),
            en(this, 'handleLeave', () => {
                (this.isReactionEventActive = !1), (this.isKeyboardNavigation = !1), this.timeout.stop(), L.Z.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1);
            }),
            en(this, 'hideTooltip', () => {
                this.setState({ shouldShowTooltip: !1 }), this.hasShownTooltip && F.default.track(Y.rMx.CLOSE_POPOUT, { nonce: this.nonce });
            }),
            en(this, 'isMe', () => {
                let { me: e, me_burst: t, type: i } = this.props;
                return es(e, t, i);
            }),
            en(this, 'updateTooltipText', () => {
                let { message: e, emoji: t, type: i } = this.props,
                    n = (0, K.g)(e, t, i),
                    a = this.isKeyboardNavigation ? n : (0, K.g)(e, t, i, Y.dG4);
                this.setState({
                    tooltipText: a,
                    tooltipTextAria: n,
                    shouldShowTooltip: null != a && '' !== a
                });
            }),
            en(this, 'renderLurkerModeUpsellPopout', (e) => {
                let { closePopout: t } = e,
                    { message: i, isLurking: n } = this.props,
                    o = P.Z.getChannel(i.getChannelId()),
                    s = w.Z.getGuild(null == o ? void 0 : o.getGuildId());
                return n && null != s
                    ? (0, a.jsx)(I.Z, {
                          ctaRef: this.ctaRef,
                          type: I.s.REACTIONS,
                          guild: s,
                          closePopout: t
                      })
                    : (0, a.jsx)(a.Fragment, {});
            }),
            en(this, 'renderEmojiDetails', () => {
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
            en(this, 'renderTooltip', () => {
                let { emoji: e, message: t, type: i, me_burst: n, isBurstReaction: o = !1 } = this.props,
                    { tooltipText: s } = this.state,
                    r = (i) => {
                        let n = P.Z.getChannel(t.getChannelId());
                        null != n &&
                            (this.handleLeave(),
                            eo(n, t, {
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
                                  className: ei.reactionTooltipText,
                                  'aria-label': s,
                                  children: s
                              });
                return i === G.O.BURST
                    ? (0, a.jsxs)('div', {
                          className: ei.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, a.jsx)(m.P3F, {
                                  className: ei.burstReactionTooltipInner,
                                  onClick: r,
                                  children: (0, a.jsxs)('div', {
                                      className: ei.burstReactionTooltipMessage,
                                      children: [
                                          (0, a.jsx)(p.Z, {
                                              className: ei.reactionTooltipEmoji,
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
                                  return n
                                      ? (0, a.jsxs)('div', {
                                            className: l()(ei.burstReactionTooltipPrompt, ei.burstReactionTooltipSpacer),
                                            children: [
                                                (0, V.I5)(e) &&
                                                    (0, a.jsx)(m.SrA, {
                                                        size: 'md',
                                                        className: ei.burstReactionTooltipNitroIcon,
                                                        color: b.JX.PREMIUM_TIER_2
                                                    }),
                                                (0, a.jsx)(m.Text, {
                                                    variant: 'text-sm/normal',
                                                    className: ei.reactionTooltipText,
                                                    'aria-label': 'super reaction tooltip cta',
                                                    children: $.intl.string($.t.ZbNJXl)
                                                })
                                            ]
                                        })
                                      : this.userCanBurstReact()
                                        ? (0, a.jsxs)('div', {
                                              className: l()(ei.burstReactionTooltipPrompt, ei.burstReactionTooltipSpacer, ei.burstReactionTooltipPromptClickable),
                                              children: [
                                                  (0, a.jsx)(m.SrA, {
                                                      size: 'md',
                                                      className: ei.burstReactionTooltipNitroIcon,
                                                      color: b.JX.PREMIUM_TIER_2
                                                  }),
                                                  (0, a.jsx)(m.P3F, {
                                                      onClick: this.handleClick,
                                                      children: (0, a.jsx)(m.Text, {
                                                          variant: 'text-sm/normal',
                                                          className: ei.reactionTooltipText,
                                                          'aria-label': 'super reaction tooltip cta',
                                                          children: $.intl.string($.t.kVfuVl)
                                                      })
                                                  })
                                              ]
                                          })
                                        : this.userCanBurstReact() || this.isKeyboardNavigation
                                          ? null
                                          : (0, a.jsx)('div', {
                                                className: l()(ei.burstReactionTooltipPrompt, ei.burstReactionTooltipSpacer),
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
                                                            className: ei.burstReactionTooltipUpsellCta,
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
                          className: ei.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, a.jsx)(m.P3F, {
                                  onClick: r,
                                  children: (0, a.jsxs)('div', {
                                      className: ei.reactionTooltipInner,
                                      children: [
                                          (0, a.jsx)(p.Z, {
                                              className: ei.reactionTooltipEmoji,
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
            en(this, 'refreshTooltipPositionKey', () => {
                this.setState({ tooltipPositionKey: String(Date.now()) });
            }),
            en(this, 'handleShowVerificationGate', () => {
                let { message: e, isPendingMember: t } = this.props;
                if (!t) return null;
                let i = P.Z.getChannel(e.getChannelId()),
                    n = w.Z.getGuild(null == i ? void 0 : i.getGuildId());
                null != n && (0, N.hk)(n.id);
            }),
            en(this, 'handleSetReactionRef', (e) => {
                this.setState({ reactionRef: e });
            }),
            en(this, 'trackReactionTooltipViewed', () => {
                let { emoji: e, message: t, type: i } = this.props,
                    n = B.default.getCurrentUser(),
                    a = P.Z.getChannel(t.getChannelId()),
                    o = i === G.O.BURST,
                    s = (0, V.I5)(n),
                    l = o ? q.cd.EMOJI_IN_BURST_REACTION_HOVER : q.cd.EMOJI_IN_REACTION_HOVER;
                !o || this.userCanBurstReact() || s || (l = q.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
                    x.ZP.trackWithMetadata(Y.rMx.EXPRESSION_TOOLTIP_VIEWED, {
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
                                section: (0, A.s4)(a),
                                object: Y.qAy.EMOJI_REACTION_TOOLTIP_UPSELL
                            }
                        });
            });
    }
}
en(el, 'defaultProps', { emojiSizeTooltip: 'jumbo' });
let er = o.memo((e) => {
        let { type: t, burst_colors: i, message: n, emoji: o } = e,
            s = t === G.O.BURST,
            l = (0, C.v)(s && null != i ? i : []),
            r = (0, u.e7)([D.Z], () => void 0 !== D.Z.getEffectForEmojiId(n.getChannelId(), n.id, o)),
            c = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
            d = M.Yk.useSetting(),
            h = B.default.getCurrentUser(),
            m = (0, V.I5)(h),
            p = (0, u.e7)([D.Z], () => D.Z.getReactionPickerAnimation(n.id, o.name, o.id)),
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
        var t, i, n;
        let { emojiId: o, expressionSourceGuild: s, hasJoinedExpressionSourceGuild: l, onClose: r, popoutData: c, currentGuildId: d, nonce: u } = e;
        (0, S.u)({
            emojiId: o,
            currentGuildId: d,
            popoutData: c,
            emojiSourceGuildId: null == s ? void 0 : s.id,
            nonce: u
        });
        let h = null !== (i = null == s ? void 0 : s.isDiscoverable()) && void 0 !== i && i,
            p = null != s && h,
            g = (null !== (n = null == s ? void 0 : null === (t = s.emojis) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 1;
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
        let { emojiId: i, refreshPositionKey: n, onClose: s, nonce: r } = e,
            { joinedEmojiSourceGuild: c } = (0, u.cj)([j.ZP, w.Z], () => {
                let e = j.ZP.getCustomEmojiById(i);
                return { joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === _.B.GUILD ? w.Z.getGuild(null == e ? void 0 : e.guildId) : void 0 };
            }),
            [d, h] = o.useState(void 0),
            [p, g] = o.useState(void 0),
            [f, v] = o.useState(null),
            [x, b] = o.useState(!1),
            [T, C] = o.useState(!1),
            [S, N] = o.useState(!1),
            I = null != c,
            E = null !== (t = null == d ? void 0 : d.isDiscoverable()) && void 0 !== t && t,
            Z = k.Z.getGuildId(),
            y = null != Z && (Z === (null == d ? void 0 : d.id) || Z === (null == c ? void 0 : c.id)),
            O = B.default.getCurrentUser(),
            A = (0, H.a)({
                sourceType: f,
                expressionSourceApplication: null != p ? p : null,
                isPremium: V.ZP.isPremium(O),
                hasJoinedEmojiSourceGuild: I,
                isDiscoverable: E,
                emojiComesFromCurrentGuild: y,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1
            });
        if (
            (o.useEffect(() => {
                x &&
                    !S &&
                    (async () => {
                        n(), C(!0);
                        let e = null != i ? await (0, R.Fi)(i) : null;
                        if (null != e)
                            switch ((v(e.type), e.type)) {
                                case R.w6.APPLICATION:
                                    g(e.application);
                                    break;
                                case R.w6.GUILD:
                                    h(e.guild);
                            }
                        else h(null);
                        C(!1), N(!0), n();
                    })();
            }, [i, x, S, n]),
            I)
        )
            return null;
        let M = () => {
                b(!x);
            },
            P = x && (void 0 !== d || void 0 !== p);
        return (0, a.jsxs)('div', {
            children: [
                P
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)('div', { className: Q.reactionEmojiDetailsDivider }),
                              null != A.emojiDescription &&
                                  A.type !== H.$.UNAVAILABLE &&
                                  (0, a.jsx)(m.Text, {
                                      variant: 'text-sm/normal',
                                      'aria-label': A.type,
                                      children: A.emojiDescription
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
                                      className: l()(Q.reactionEmojiDetailsArrow, { [Q.reactionEmojiDetailsArrowCollapsed]: !x })
                                  })
                              ]
                          });
                      })(),
                T
                    ? (0, a.jsx)(W.SE, { className: Q.emojiDetailsLoader })
                    : P &&
                      (0, a.jsx)(ec, {
                          emojiId: i,
                          expressionSourceGuild: d,
                          hasJoinedExpressionSourceGuild: I,
                          onClose: s,
                          popoutData: A,
                          currentGuildId: Z,
                          nonce: r
                      })
            ]
        });
    };
