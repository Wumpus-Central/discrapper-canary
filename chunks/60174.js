(n.d(t, { X: () => D }), n(997841), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(954955),
    l = n.n(s),
    c = n(507274),
    u = n(481060),
    d = n(255963),
    f = n(387188),
    _ = n(466794),
    p = n(659215),
    h = n(222677),
    m = n(995774),
    g = n(931651),
    E = n(594174),
    b = n(630388),
    y = n(74538),
    O = n(566006),
    v = n(981631),
    I = n(185923),
    T = n(474936),
    S = n(388032),
    A = n(92254),
    N = n(588429);
function C(e, t, n) {
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
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            }));
    }
    return e;
}
function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class D extends i.Component {
    render() {
        let { type: e, message: t, className: n, children: i, useChatFontScaling: o, tabIndex: s = 0 } = this.props,
            { isReactionPickerActive: l } = this.state,
            c = t.state === v.yb.SENDING,
            p = e === O.O.BURST;
        if (c || (0, b.yE)(t.flags, v.iLy.EPHEMERAL)) return null;
        let h = E.default.getCurrentUser(),
            m = (0, y.I5)(h),
            g = p ? S.intl.string(S.t.Kfcszs) : S.intl.string(S.t.lfIHs7);
        !m && p && (g = (0, r.jsx)(_.X, { tooltipText: S.intl.string(S.t.Kfcszs) }));
        let T = o ? N : A,
            C = {
                size: 'sm',
                color: 'currentColor',
                className: T.icon
            };
        return t.type === v.uaV.EMOJI_ADDED && 0 === t.reactions.length
            ? (0, r.jsx)(f.e, {
                  message: t,
                  className: a()(T.reactionBtn, n)
              })
            : (0, r.jsx)(u.yRy, {
                  targetElementRef: this.ref,
                  shouldShow: l,
                  onRequestClose: this.handleReactionPickerToggle,
                  renderPopout: this.renderReactionPopout,
                  position: 'right',
                  children: (e, t) => {
                      let { isShown: o } = t;
                      return (0, r.jsx)(u.DY3, {
                          text: g,
                          color: u.FGA.PRIMARY,
                          'aria-label': p ? S.intl.string(S.t.Kfcszs) : S.intl.string(S.t.lfIHs7),
                          tooltipClassName: T.__invalid_addReactionTooltip,
                          children: (0, r.jsxs)(
                              u.P3F,
                              w(R({}, e), {
                                  innerRef: this.ref,
                                  tabIndex: s,
                                  onClick: (e) => {
                                      this.handleAddReactionClick(e);
                                  },
                                  onMouseEnter: () => (0, d.x)(I.qR.AddReactionPopoutMouseEntered),
                                  onFocus: () => (0, d.x)(I.qR.AddReactionPopoutFocused),
                                  className: a()(T.reactionBtn, { [T.active]: o }, n),
                                  children: [p ? (0, r.jsx)(u.Pt5, R({}, C)) : (0, r.jsx)(u.EO4, R({}, C)), i]
                              })
                          )
                      });
                  }
              });
    }
    constructor(...e) {
        (super(...e),
            C(this, 'state', { isReactionPickerActive: !1 }),
            C(this, 'ref', i.createRef()),
            C(this, 'onAddReaction', (e, t) => {
                if (null == e) return;
                let { channel: n, message: r, isForumToolbar: i } = this.props;
                (0, h.rU)(n.id, r.id, (0, m.g1)(e), i ? h.TW.FORUM_TOOLBAR : h.TW.MESSAGE_INLINE_BUTTON, { burst: t });
            }),
            C(this, 'handleReactionPickerToggle', () => {
                this.setState((e) => ({ isReactionPickerActive: !e.isReactionPickerActive }));
            }),
            C(this, 'handleAddReactionClick', (e) => {
                let { type: t, channel: n } = this.props;
                e.stopPropagation();
                let r = E.default.getCurrentUser();
                (t !== O.O.BURST ||
                    (0, y.I5)(r) ||
                    (0, p.m)({
                        analytics: {
                            type: T.cd.BURST_REACTION_UPSELL,
                            page: null != n.getGuildId() ? v.ZY5.GUILD_CHANNEL : v.ZY5.DM_CHANNEL,
                            section: (0, m.s4)(n),
                            object: v.qAy.INLINE_REACTION_PICKER_UPSELL
                        }
                    }),
                    this.handleReactionPickerToggle());
            }),
            C(this, 'renderReactionPopout', (e) => {
                let { closePopout: t } = e,
                    { type: n, channel: i, message: o } = this.props,
                    a = R(
                        { openPopoutType: 'message_reaction_emoji_picker' },
                        n === O.O.BURST && {
                            openPopoutType: 'message_super_reaction_emoji_picker',
                            page: null != i.getGuildId() ? v.ZY5.GUILD_CHANNEL : v.ZY5.DM_CHANNEL,
                            section: (0, m.s4)(i),
                            object: v.qAy.REACTION_RAIL
                        }
                    ),
                    s = (0, r.jsx)(g.$, {
                        closePopout: t,
                        channel: i,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: r, isBurst: i } = e;
                            (this.onAddReaction(n, i), r && (i ? l()(t, 150)() : t()));
                        },
                        analyticsOverride: a,
                        messageId: o.id
                    });
                return (0, r.jsx)(c.M.Consumer, {
                    children: (e) => {
                        let { inDialog: t } = e;
                        return t
                            ? (0, r.jsx)(u.VqE, {
                                  'aria-label': S.intl.string(S.t['7Xqzdn']),
                                  children: s
                              })
                            : s;
                    }
                });
            }));
    }
}
