(n.d(t, { X: () => P }), n(997841), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(954955),
    s = n.n(o),
    c = n(507274),
    u = n(481060),
    d = n(255963),
    p = n(387188),
    m = n(466794),
    f = n(659215),
    h = n(222677),
    g = n(995774),
    _ = n(931651),
    b = n(594174),
    E = n(630388),
    x = n(74538),
    y = n(566006),
    v = n(981631),
    C = n(185923),
    O = n(474936),
    j = n(388032),
    I = n(92254),
    S = n(588429);
function T(e, t, n) {
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
function N(e) {
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
                T(e, t, n[t]);
            }));
    }
    return e;
}
class P extends i.Component {
    render() {
        let { type: e, message: t, className: n, children: i, useChatFontScaling: l, tabIndex: o = 0 } = this.props,
            { isReactionPickerActive: s } = this.state,
            c = t.state === v.yb.SENDING,
            f = e === y.O.BURST;
        if (c || (0, E.yE)(t.flags, v.iLy.EPHEMERAL)) return null;
        let h = b.default.getCurrentUser(),
            g = (0, x.I5)(h),
            _ = f ? j.intl.string(j.t.Kfcszs) : j.intl.string(j.t.lfIHs7);
        !g && f && (_ = (0, r.jsx)(m.X, { tooltipText: j.intl.string(j.t.Kfcszs) }));
        let O = l ? S : I,
            T = {
                size: 'sm',
                color: 'currentColor',
                className: O.icon
            };
        return t.type === v.uaV.EMOJI_ADDED && 0 === t.reactions.length
            ? (0, r.jsx)(p.e, {
                  message: t,
                  className: a()(O.reactionBtn, n)
              })
            : (0, r.jsx)(u.yRy, {
                  targetElementRef: this.ref,
                  shouldShow: s,
                  onRequestClose: this.handleReactionPickerToggle,
                  renderPopout: this.renderReactionPopout,
                  position: 'right',
                  children: (e, t) => {
                      var l, s;
                      let { isShown: c } = t;
                      return (0, r.jsx)(u.DY3, {
                          text: _,
                          color: u.FGA.PRIMARY,
                          'aria-label': f ? j.intl.string(j.t.Kfcszs) : j.intl.string(j.t.lfIHs7),
                          tooltipClassName: O.__invalid_addReactionTooltip,
                          children: (0, r.jsxs)(
                              u.P3F,
                              ((l = N({}, e)),
                              (s = s =
                                  {
                                      innerRef: this.ref,
                                      tabIndex: o,
                                      onClick: (e) => {
                                          this.handleAddReactionClick(e);
                                      },
                                      onMouseEnter: () => (0, d.x)(C.qR.AddReactionPopoutMouseEntered),
                                      onFocus: () => (0, d.x)(C.qR.AddReactionPopoutFocused),
                                      className: a()(O.reactionBtn, { [O.active]: c }, n),
                                      children: [f ? (0, r.jsx)(u.Pt5, N({}, T)) : (0, r.jsx)(u.EO4, N({}, T)), i]
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(s)).forEach(function (e) {
                                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                                    }),
                              l)
                          )
                      });
                  }
              });
    }
    constructor(...e) {
        (super(...e),
            T(this, 'state', { isReactionPickerActive: !1 }),
            T(this, 'ref', i.createRef()),
            T(this, 'onAddReaction', (e, t) => {
                if (null == e) return;
                let { channel: n, message: r, isForumToolbar: i } = this.props;
                (0, h.rU)(n.id, r.id, (0, g.g1)(e), i ? h.TW.FORUM_TOOLBAR : h.TW.MESSAGE_INLINE_BUTTON, { burst: t });
            }),
            T(this, 'handleReactionPickerToggle', () => {
                this.setState((e) => ({ isReactionPickerActive: !e.isReactionPickerActive }));
            }),
            T(this, 'handleAddReactionClick', (e) => {
                let { type: t, channel: n } = this.props;
                e.stopPropagation();
                let r = b.default.getCurrentUser();
                (t !== y.O.BURST ||
                    (0, x.I5)(r) ||
                    (0, f.m)({
                        analytics: {
                            type: O.cd.BURST_REACTION_UPSELL,
                            page: null != n.getGuildId() ? v.ZY5.GUILD_CHANNEL : v.ZY5.DM_CHANNEL,
                            section: (0, g.s4)(n),
                            object: v.qAy.INLINE_REACTION_PICKER_UPSELL
                        }
                    }),
                    this.handleReactionPickerToggle());
            }),
            T(this, 'renderReactionPopout', (e) => {
                let { closePopout: t } = e,
                    { type: n, channel: i, message: l } = this.props,
                    a = N(
                        { openPopoutType: 'message_reaction_emoji_picker' },
                        n === y.O.BURST && {
                            openPopoutType: 'message_super_reaction_emoji_picker',
                            page: null != i.getGuildId() ? v.ZY5.GUILD_CHANNEL : v.ZY5.DM_CHANNEL,
                            section: (0, g.s4)(i),
                            object: v.qAy.REACTION_RAIL
                        }
                    ),
                    o = (0, r.jsx)(_.$, {
                        closePopout: t,
                        channel: i,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: r, isBurst: i } = e;
                            (this.onAddReaction(n, i), r && (i ? s()(t, 150)() : t()));
                        },
                        analyticsOverride: a,
                        messageId: l.id
                    });
                return (0, r.jsx)(c.M.Consumer, {
                    children: (e) => {
                        let { inDialog: t } = e;
                        return t
                            ? (0, r.jsx)(u.VqE, {
                                  'aria-label': j.intl.string(j.t['7Xqzdn']),
                                  children: o
                              })
                            : o;
                    }
                });
            }));
    }
}
