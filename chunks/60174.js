n.d(t, { X: () => T }), n(997841), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(954955),
    s = n.n(o),
    c = n(507274),
    u = n(481060),
    d = n(255963),
    p = n(466794),
    m = n(659215),
    f = n(222677),
    h = n(995774),
    g = n(931651),
    _ = n(594174),
    b = n(630388),
    x = n(74538),
    y = n(566006),
    E = n(981631),
    v = n(185923),
    O = n(474936),
    j = n(388032),
    C = n(92254),
    S = n(588429);
function I(e, t, n) {
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
class T extends i.Component {
    render() {
        let { type: e, message: t, className: n, children: i, useChatFontScaling: l, tabIndex: o = 0 } = this.props,
            { isReactionPickerActive: s } = this.state,
            c = t.state === E.yb.SENDING,
            m = e === y.O.BURST;
        if (c || (0, b.yE)(t.flags, E.iLy.EPHEMERAL)) return null;
        let f = _.default.getCurrentUser(),
            h = (0, x.I5)(f),
            g = m ? j.intl.string(j.t.Kfcszs) : j.intl.string(j.t.lfIHs7);
        !h && m && (g = (0, r.jsx)(p.X, { tooltipText: j.intl.string(j.t.Kfcszs) }));
        let O = l ? S : C,
            I = {
                size: 'sm',
                color: 'currentColor',
                className: O.icon
            };
        return (0, r.jsx)(u.yRy, {
            targetElementRef: this.ref,
            shouldShow: s,
            onRequestClose: this.handleReactionPickerToggle,
            renderPopout: this.renderReactionPopout,
            position: 'right',
            children: (e, t) => {
                var l, s;
                let { isShown: c } = t;
                return (0, r.jsx)(u.DY3, {
                    text: g,
                    color: u.FGA.PRIMARY,
                    'aria-label': m ? j.intl.string(j.t.Kfcszs) : j.intl.string(j.t.lfIHs7),
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
                                onMouseEnter: () => (0, d.x)(v.qR.AddReactionPopoutMouseEntered),
                                onFocus: () => (0, d.x)(v.qR.AddReactionPopoutFocused),
                                className: a()(O.reactionBtn, { [O.active]: c }, n),
                                children: [m ? (0, r.jsx)(u.Pt5, N({}, I)) : (0, r.jsx)(u.EO4, N({}, I)), i]
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
        super(...e),
            I(this, 'state', { isReactionPickerActive: !1 }),
            I(this, 'ref', i.createRef()),
            I(this, 'onAddReaction', (e, t) => {
                if (null == e) return;
                let { channel: n, message: r, isForumToolbar: i } = this.props;
                (0, f.rU)(n.id, r.id, (0, h.g1)(e), i ? f.TW.FORUM_TOOLBAR : f.TW.MESSAGE_INLINE_BUTTON, { burst: t });
            }),
            I(this, 'handleReactionPickerToggle', () => {
                this.setState((e) => ({ isReactionPickerActive: !e.isReactionPickerActive }));
            }),
            I(this, 'handleAddReactionClick', (e) => {
                let { type: t, channel: n } = this.props;
                e.stopPropagation();
                let r = _.default.getCurrentUser();
                t !== y.O.BURST ||
                    (0, x.I5)(r) ||
                    (0, m.m)({
                        analytics: {
                            type: O.cd.BURST_REACTION_UPSELL,
                            page: null != n.getGuildId() ? E.ZY5.GUILD_CHANNEL : E.ZY5.DM_CHANNEL,
                            section: (0, h.s4)(n),
                            object: E.qAy.INLINE_REACTION_PICKER_UPSELL
                        }
                    }),
                    this.handleReactionPickerToggle();
            }),
            I(this, 'renderReactionPopout', (e) => {
                let { closePopout: t } = e,
                    { type: n, channel: i, message: l } = this.props,
                    a = N(
                        { openPopoutType: 'message_reaction_emoji_picker' },
                        n === y.O.BURST && {
                            openPopoutType: 'message_super_reaction_emoji_picker',
                            page: null != i.getGuildId() ? E.ZY5.GUILD_CHANNEL : E.ZY5.DM_CHANNEL,
                            section: (0, h.s4)(i),
                            object: E.qAy.REACTION_RAIL
                        }
                    ),
                    o = (0, r.jsx)(g.$, {
                        closePopout: t,
                        channel: i,
                        onSelectEmoji: (e, n, r) => {
                            this.onAddReaction(e, r), n && (r ? s()(t, 150)() : t());
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
            });
    }
}
