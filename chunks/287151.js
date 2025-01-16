n.d(t, {
    aO: function () {
        return eo;
    },
    le: function () {
        return er;
    },
    op: function () {
        return ea;
    },
    y4: function () {
        return es;
    }
}),
    n(47120);
var i,
    o = n(200651),
    a = n(192379),
    s = n(120356),
    l = n.n(s),
    r = n(772848),
    c = n(748780),
    d = n(866442),
    u = n(442837),
    h = n(846519),
    m = n(481060),
    p = n(596454),
    f = n(785388),
    g = n(607070),
    v = n(446489),
    b = n(367907),
    T = n(436774),
    x = n(98474),
    _ = n(339085),
    j = n(906411),
    C = n(56314),
    S = n(231053),
    E = n(944386),
    I = n(305325),
    R = n(33154),
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
    W = n(183023),
    z = n(524444),
    K = n(89729),
    J = n(620652),
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
let eo = 9;
function ea(e, t, n) {
    (0, m.openModal)((e) =>
        (0, o.jsx)(f.default, {
            ...e,
            message: t,
            selectedReaction: n
        })
    );
}
function es(e, t, n) {
    return (n === G.O.BURST && t) || (n === G.O.NORMAL && e);
}
class el extends (i = a.PureComponent) {
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
        let { count: n, burst_count: i, colors: a, isBurstReaction: s, hideCount: r, emoji: u, readOnly: h, isLurking: f, isGuest: g, isPendingMember: b, className: T, useChatFontScaling: _, message: j, hideEmoji: C, animationStartPosition: S, emojiSize: E } = this.props,
            { shouldShowTooltip: I, tooltipTextAria: R, reactionRef: Z, tooltipPositionKey: y } = this.state,
            A = _ ? et : ee,
            M = {
                transform: [{ scale: this.scale }],
                opacity: this.opacity
            },
            P = s ? i : n;
        if (s && null != a) {
            var w;
            let { accentColor: n, backgroundColor: i, opacity: o } = a,
                s = null !== (w = (0, d.wK)(null != i ? i : '', o)) && void 0 !== w ? w : '';
            this.isMe() && (M.borderColor = i), (M.background = s), (e = n), (t = n);
        }
        let L = null == Z ? void 0 : Z.getBoundingClientRect(),
            k = null != S && null != L,
            U = null == S;
        return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsx)(m.Popout, {
                shouldShow: I,
                'aria-label': null != R && R,
                renderPopout: this.renderTooltip,
                nudgeAlignIntoViewport: !0,
                position: 'top',
                align: 'center',
                positionKey: y,
                children: () =>
                    (0, o.jsx)('div', {
                        onMouseEnter: this.handleEnter,
                        onMouseLeave: this.handleLeave,
                        ref: this.handleSetReactionRef,
                        children: (0, o.jsx)(c.Z.div, {
                            className: l()(A.reaction, T, {
                                [A.reactionMe]: this.isMe(),
                                [A.reactionReadOnly]: h && !f && !b && !g,
                                [A.shakeReaction]: C && null == S
                            }),
                            style: M,
                            children: (0, o.jsx)(m.Popout, {
                                renderPopout: this.renderLurkerModeUpsellPopout,
                                position: 'top',
                                children: (n) =>
                                    (0, o.jsxs)(m.Clickable, {
                                        ...n,
                                        className: A.reactionInner,
                                        onClick: this.handleClick,
                                        'aria-disabled': h,
                                        'aria-label': (0, O.iD)(this.isMe(), P, u, s),
                                        'aria-pressed': this.isMe(),
                                        children: [
                                            (0, o.jsx)('div', {
                                                className: l()({ [A.burstGlow]: s }),
                                                style: { boxShadow: '0 0 16px '.concat(t) }
                                            }),
                                            (0, o.jsxs)('div', {
                                                children: [
                                                    s
                                                        ? (0, o.jsxs)(o.Fragment, {
                                                              children: [
                                                                  k &&
                                                                      (0, o.jsx)(x.Z, {
                                                                          messageId: j.id,
                                                                          emoji: u,
                                                                          startPosition: S,
                                                                          targetPosition: L
                                                                      }),
                                                                  U &&
                                                                      (0, o.jsx)(X.Z, {
                                                                          count: i,
                                                                          emoji: u,
                                                                          channelId: j.getChannelId(),
                                                                          messageId: j.id,
                                                                          useChatFontScaling: _,
                                                                          color: t,
                                                                          emojiSize: 'reactionLarge' === E ? J.M.NORMAL_NEW : J.M.NORMAL
                                                                      })
                                                              ]
                                                          })
                                                        : null,
                                                    (0, o.jsx)(p.Z, {
                                                        className: l()({ [A.hideEmoji]: C }),
                                                        emojiId: u.id,
                                                        emojiName: u.name,
                                                        size: E,
                                                        animated: u.animated
                                                    })
                                                ]
                                            }),
                                            r
                                                ? null
                                                : (0, o.jsx)(v.Z, {
                                                      className: A.reactionCount,
                                                      value: P,
                                                      color: e,
                                                      digitWidth: eo
                                                  }),
                                            (0, o.jsx)(N.Z, {
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
            ei(this, 'ctaRef', a.createRef()),
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
                let { message: t, emoji: n, readOnly: i, isBurstReaction: o, isPendingMember: a, isLurking: s, isGuest: l, isForumToolbar: r } = this.props,
                    c = P.Z.getChannel(t.getChannelId());
                if (s || l) {
                    var d, u;
                    null === (u = this.ctaRef) || void 0 === u || null === (d = u.current) || void 0 === d || d.focus();
                    return;
                }
                let h = t.getChannelId(),
                    m = r ? A.TW.FORUM_TOOLBAR : A.TW.MESSAGE_INLINE_BUTTON;
                if (o && !this.userCanBurstReact()) {
                    (0, y.openBurstReactionsUpsellModal)({
                        analytics: {
                            type: q.cd.BURST_REACTION_UPSELL,
                            page: (null == c ? void 0 : c.getGuildId()) != null ? Y.ZY5.GUILD_CHANNEL : Y.ZY5.DM_CHANNEL,
                            section: null != c ? (0, O.s4)(c) : void 0,
                            object: Y.qAy.EMOJI_REACTION_UPSELL
                        }
                    });
                    return;
                }
                a
                    ? this.handleShowVerificationGate()
                    : !i &&
                      (this.isMe()
                          ? (0, A.WO)({
                                channelId: h,
                                messageId: t.id,
                                emoji: n,
                                location: m,
                                options: { burst: o }
                            })
                          : (0, A.rU)(h, t.id, n, m, { burst: o }));
            }),
            ei(this, 'handleEnter', (e) => {
                let { emoji: t, message: n, type: i, reduceMotion: o, animateEmoji: a, autoUnfurlReactionTooltip: s } = this.props,
                    l = i === G.O.BURST;
                l &&
                    !this.isReactionEventActive &&
                    !o &&
                    a &&
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
                !this.props.readOnly && (this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), (this.hasShownTooltip = !0));
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
                    i = (0, K.g)(e, t, n),
                    o = this.isKeyboardNavigation ? i : (0, K.g)(e, t, n, Y.dG4);
                this.setState({
                    tooltipText: o,
                    tooltipTextAria: i,
                    shouldShowTooltip: null != o && '' !== o
                });
            }),
            ei(this, 'renderLurkerModeUpsellPopout', (e) => {
                let { closePopout: t } = e,
                    { message: n, isLurking: i } = this.props,
                    a = P.Z.getChannel(n.getChannelId()),
                    s = w.Z.getGuild(null == a ? void 0 : a.getGuildId());
                return i && null != s
                    ? (0, o.jsx)(R.Z, {
                          ctaRef: this.ctaRef,
                          type: R.s.REACTIONS,
                          guild: s,
                          closePopout: t
                      })
                    : (0, o.jsx)(o.Fragment, {});
            }),
            ei(this, 'renderEmojiDetails', () => {
                let e = this.props.emoji;
                return (
                    null != e.id &&
                    (0, o.jsx)(ed, {
                        emojiId: e.id,
                        refreshPositionKey: this.refreshTooltipPositionKey,
                        onClose: this.handleLeave,
                        nonce: this.nonce
                    })
                );
            }),
            ei(this, 'renderTooltip', () => {
                let { emoji: e, message: t, type: n, me_burst: i, isBurstReaction: a = !1 } = this.props,
                    { tooltipText: s } = this.state,
                    r = (n) => {
                        let i = P.Z.getChannel(t.getChannelId());
                        if (null != i)
                            this.handleLeave(),
                                ea(i, t, {
                                    emoji: e,
                                    reactionType: a ? G.O.BURST : G.O.NORMAL
                                });
                    },
                    c = 'string' == typeof s ? '' === s.trim() : null == s,
                    d = () =>
                        c || null == s
                            ? null
                            : (0, o.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  className: en.reactionTooltipText,
                                  'aria-label': s,
                                  children: s
                              });
                return n === G.O.BURST
                    ? (0, o.jsxs)('div', {
                          className: en.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, o.jsx)(m.Clickable, {
                                  className: en.burstReactionTooltipInner,
                                  onClick: r,
                                  children: (0, o.jsxs)('div', {
                                      className: en.burstReactionTooltipMessage,
                                      children: [
                                          (0, o.jsx)(p.Z, {
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
                                  if (i)
                                      return (0, o.jsxs)('div', {
                                          className: l()(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer),
                                          children: [
                                              (0, D.I5)(e) &&
                                                  (0, o.jsx)(m.NitroWheelIcon, {
                                                      size: 'md',
                                                      className: en.burstReactionTooltipNitroIcon,
                                                      color: T.JX.PREMIUM_TIER_2
                                                  }),
                                              (0, o.jsx)(m.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: en.reactionTooltipText,
                                                  'aria-label': 'super reaction tooltip cta',
                                                  children: $.intl.string($.t.ZbNJXl)
                                              })
                                          ]
                                      });
                                  if (this.userCanBurstReact())
                                      return (0, o.jsxs)('div', {
                                          className: l()(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer, en.burstReactionTooltipPromptClickable),
                                          children: [
                                              (0, o.jsx)(m.NitroWheelIcon, {
                                                  size: 'md',
                                                  className: en.burstReactionTooltipNitroIcon,
                                                  color: T.JX.PREMIUM_TIER_2
                                              }),
                                              (0, o.jsx)(m.Clickable, {
                                                  onClick: this.handleClick,
                                                  children: (0, o.jsx)(m.Text, {
                                                      variant: 'text-sm/normal',
                                                      className: en.reactionTooltipText,
                                                      'aria-label': 'super reaction tooltip cta',
                                                      children: $.intl.string($.t.kVfuVl)
                                                  })
                                              })
                                          ]
                                      });
                                  if (!this.userCanBurstReact() && !this.isKeyboardNavigation)
                                      return (0, o.jsx)('div', {
                                          className: l()(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer),
                                          children: (0, o.jsxs)('div', {
                                              children: [
                                                  (0, o.jsx)(m.Text, {
                                                      variant: 'text-sm/normal',
                                                      'aria-label': 'super reaction tooltip upsell',
                                                      children: $.intl.string($.t.W1bMkp)
                                                  }),
                                                  (0, o.jsx)(Z.Z, {
                                                      subscriptionTier: q.Si.TIER_2,
                                                      buttonText: $.intl.string($.t.mr4K7O),
                                                      className: en.burstReactionTooltipUpsellCta,
                                                      onClick: (e) => e.stopPropagation()
                                                  })
                                              ]
                                          })
                                      });
                                  return null;
                              })(),
                              this.renderEmojiDetails()
                          ]
                      })
                    : (0, o.jsxs)('div', {
                          className: en.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, o.jsx)(m.Clickable, {
                                  onClick: r,
                                  children: (0, o.jsxs)('div', {
                                      className: en.reactionTooltipInner,
                                      children: [
                                          (0, o.jsx)(p.Z, {
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
                null != i && (0, I.hk)(i.id);
            }),
            ei(this, 'handleSetReactionRef', (e) => {
                this.setState({ reactionRef: e });
            }),
            ei(this, 'trackReactionTooltipViewed', () => {
                let { emoji: e, message: t, type: n } = this.props,
                    i = U.default.getCurrentUser(),
                    o = P.Z.getChannel(t.getChannelId()),
                    a = n === G.O.BURST,
                    s = (0, D.I5)(i),
                    l = a ? q.cd.EMOJI_IN_BURST_REACTION_HOVER : q.cd.EMOJI_IN_REACTION_HOVER;
                a && !this.userCanBurstReact() && !s && (l = q.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
                    b.ZP.trackWithMetadata(Y.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                        type: l,
                        expression_id: e.id,
                        expression_name: e.name,
                        is_animated: e.animated,
                        is_custom: null != e.id,
                        nonce: this.nonce
                    }),
                    a &&
                        null != o &&
                        !s &&
                        !this.userCanBurstReact() &&
                        F.default.track(Y.rMx.PREMIUM_UPSELL_VIEWED, {
                            type: q.cd.BURST_REACTION_UPSELL,
                            location: {
                                page: (null == o ? void 0 : o.getGuildId()) != null ? Y.ZY5.GUILD_CHANNEL : Y.ZY5.DM_CHANNEL,
                                section: (0, O.s4)(o),
                                object: Y.qAy.EMOJI_REACTION_TOOLTIP_UPSELL
                            }
                        });
            });
    }
}
ei(el, 'defaultProps', { emojiSizeTooltip: 'jumbo' });
let er = a.memo((e) => {
        let { type: t, burst_colors: n, message: i, emoji: a } = e,
            s = t === G.O.BURST,
            l = (0, C.v)(s && null != n ? n : []),
            r = (0, u.e7)([V.Z], () => void 0 !== V.Z.getEffectForEmojiId(i.getChannelId(), i.id, a)),
            c = (0, u.e7)([g.Z], () => g.Z.useReducedMotion),
            d = M.Yk.useSetting(),
            h = U.default.getCurrentUser(),
            m = (0, D.I5)(h),
            p = (0, u.e7)([V.Z], () => V.Z.getReactionPickerAnimation(i.id, a.name, a.id)),
            f = s && (r || null != p);
        return (0, o.jsx)(el, {
            ...e,
            colors: l,
            isBurstReaction: s,
            hideEmoji: f,
            userHasPremium: m,
            reduceMotion: c,
            animateEmoji: d,
            animationStartPosition: p
        });
    }),
    ec = (e) => {
        var t, n, i;
        let { emojiId: a, expressionSourceGuild: s, hasJoinedExpressionSourceGuild: l, onClose: r, popoutData: c, currentGuildId: d, nonce: u } = e;
        (0, E.u)({
            emojiId: a,
            currentGuildId: d,
            popoutData: c,
            emojiSourceGuildId: null == s ? void 0 : s.id,
            nonce: u
        });
        let h = null !== (n = null == s ? void 0 : s.isDiscoverable()) && void 0 !== n && n,
            p = null != s && h,
            f = (null !== (i = null == s ? void 0 : null === (t = s.emojis) || void 0 === t ? void 0 : t.length) && void 0 !== i ? i : 0) > 1;
        return (0, o.jsx)(o.Fragment, {
            children: p
                ? null == s
                    ? null
                    : (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)('div', {
                                  className: Q.reactionEmojiDetailsUnfurlGuildDetails,
                                  children: (0, o.jsx)(W.Oe, {
                                      expressionSourceGuild: s,
                                      hasJoinedExpressionSourceGuild: l,
                                      isDisplayingJoinGuildButtonInPopout: c.type === H.$.JOIN_GUILD
                                  })
                              }),
                              f &&
                                  (0, o.jsx)(W.n_, {
                                      emojiId: a,
                                      expressionSourceGuild: s,
                                      hasJoinedEmojiSourceGuild: l,
                                      onClose: r,
                                      popoutData: c,
                                      isDisplayingButtonInTopSection: !1
                                  })
                          ]
                      })
                : (0, o.jsx)(m.Text, {
                      variant: 'text-sm/normal',
                      'aria-label': c.type,
                      children: c.emojiDescription
                  })
        });
    },
    ed = (e) => {
        var t;
        let { emojiId: n, refreshPositionKey: i, onClose: s, nonce: r } = e,
            { joinedEmojiSourceGuild: c } = (0, u.cj)([_.ZP, w.Z], () => {
                let e = _.ZP.getCustomEmojiById(n);
                return { joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === j.B.GUILD ? w.Z.getGuild(null == e ? void 0 : e.guildId) : void 0 };
            }),
            [d, h] = a.useState(void 0),
            [p, f] = a.useState(void 0),
            [g, v] = a.useState(null),
            [b, T] = a.useState(!1),
            [x, C] = a.useState(!1),
            [E, I] = a.useState(!1),
            R = null != c,
            N = null !== (t = null == d ? void 0 : d.isDiscoverable()) && void 0 !== t && t,
            Z = k.Z.getGuildId(),
            y = null != Z && (Z === (null == d ? void 0 : d.id) || Z === (null == c ? void 0 : c.id)),
            A = U.default.getCurrentUser(),
            O = (0, H.a)({
                sourceType: g,
                expressionSourceApplication: null != p ? p : null,
                isPremium: D.ZP.isPremium(A),
                hasJoinedEmojiSourceGuild: R,
                isDiscoverable: N,
                emojiComesFromCurrentGuild: y,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1
            });
        a.useEffect(() => {
            if (!!b && !E)
                (async () => {
                    i(), C(!0);
                    let e = null != n ? await (0, S.Fi)(n) : null;
                    if (null != e)
                        switch ((v(e.type), e.type)) {
                            case S.w6.APPLICATION:
                                f(e.application);
                                break;
                            case S.w6.GUILD:
                                h(e.guild);
                        }
                    else h(null);
                    C(!1), I(!0), i();
                })();
        }, [n, b, E, i]);
        if (R) return null;
        let M = () => {
                T(!b);
            },
            P = b && (void 0 !== d || void 0 !== p);
        return (0, o.jsxs)('div', {
            children: [
                P
                    ? (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)('div', { className: Q.reactionEmojiDetailsDivider }),
                              null != O.emojiDescription &&
                                  O.type !== H.$.UNAVAILABLE &&
                                  (0, o.jsx)(m.Text, {
                                      variant: 'text-sm/normal',
                                      'aria-label': O.type,
                                      children: O.emojiDescription
                                  })
                          ]
                      })
                    : (() => {
                          let e = $.intl.string($.t['Igv+LS']);
                          return (0, o.jsxs)(m.Clickable, {
                              onClick: M,
                              className: Q.reactionEmojiDetailsClickable,
                              children: [
                                  (0, o.jsx)(m.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'none',
                                      'aria-label': e,
                                      children: e
                                  }),
                                  (0, o.jsx)(m.ChevronSmallDownIcon, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: l()(Q.reactionEmojiDetailsArrow, { [Q.reactionEmojiDetailsArrowCollapsed]: !b })
                                  })
                              ]
                          });
                      })(),
                x
                    ? (0, o.jsx)(z.SE, { className: Q.emojiDetailsLoader })
                    : P &&
                      (0, o.jsx)(ec, {
                          emojiId: n,
                          expressionSourceGuild: d,
                          hasJoinedExpressionSourceGuild: R,
                          onClose: s,
                          popoutData: O,
                          currentGuildId: Z,
                          nonce: r
                      })
            ]
        });
    };
