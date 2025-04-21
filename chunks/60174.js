n.d(t, { X: () => P }), n(997841), n(388685);
var r = n(200651),
    i = n(192379),
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
    y = n(833803),
    v = n(566006),
    E = n(981631),
    O = n(185923),
    j = n(474936),
    C = n(388032),
    S = n(92254),
    I = n(588429);
function N(e, t, n) {
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
function T(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
class P extends i.Component {
    render() {
        let { type: e, message: t, className: n, children: i, useChatFontScaling: l, tabIndex: o = 0 } = this.props,
            { isReactionPickerActive: s } = this.state,
            c = t.state === E.yb.SENDING,
            m = e === v.O.BURST;
        if (c || (0, b.yE)(t.flags, E.iLy.EPHEMERAL)) return null;
        let f = _.default.getCurrentUser(),
            h = (0, x.I5)(f),
            g = m ? C.intl.string(C.t.Kfcszs) : C.intl.string(C.t.lfIHs7);
        !h && m && (g = (0, r.jsx)(p.X, { tooltipText: C.intl.string(C.t.Kfcszs) }));
        let j = l ? I : S,
            { canShowImprovedReactionButton: N } = y.Z.getCurrentConfig({ location: 'ButtonAddReaction' }, { autoTrackExposure: !this.props.isForumToolbar }),
            P = {
                size: 'sm',
                color: 'currentColor',
                className: a()(j.icon, { [j.largeIcon]: N })
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
                    'aria-label': m ? C.intl.string(C.t.Kfcszs) : C.intl.string(C.t.lfIHs7),
                    tooltipClassName: j.__invalid_addReactionTooltip,
                    children: (0, r.jsxs)(
                        u.P3F,
                        ((l = T({}, e)),
                        (s = s =
                            {
                                innerRef: this.ref,
                                tabIndex: o,
                                onClick: (e) => {
                                    this.handleAddReactionClick(e);
                                },
                                onMouseEnter: () => (0, d.x)(O.qR.AddReactionPopoutMouseEntered),
                                onFocus: () => (0, d.x)(O.qR.AddReactionPopoutFocused),
                                className: a()(
                                    j.reactionBtn,
                                    {
                                        [j.active]: c,
                                        [j.largeReactionBtn]: N
                                    },
                                    n
                                ),
                                children: [m ? (0, r.jsx)(u.Pt5, T({}, P)) : (0, r.jsx)(u.EO4, T({}, P)), i]
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
            N(this, 'state', { isReactionPickerActive: !1 }),
            N(this, 'ref', i.createRef()),
            N(this, 'onAddReaction', (e, t) => {
                if (null == e) return;
                let { channel: n, message: r, isForumToolbar: i } = this.props;
                (0, f.rU)(n.id, r.id, (0, h.g1)(e), i ? f.TW.FORUM_TOOLBAR : f.TW.MESSAGE_INLINE_BUTTON, { burst: t });
            }),
            N(this, 'handleReactionPickerToggle', () => {
                this.setState((e) => ({ isReactionPickerActive: !e.isReactionPickerActive }));
            }),
            N(this, 'handleAddReactionClick', (e) => {
                let { type: t, channel: n } = this.props;
                e.stopPropagation();
                let r = _.default.getCurrentUser();
                t !== v.O.BURST ||
                    (0, x.I5)(r) ||
                    (0, m.m)({
                        analytics: {
                            type: j.cd.BURST_REACTION_UPSELL,
                            page: null != n.getGuildId() ? E.ZY5.GUILD_CHANNEL : E.ZY5.DM_CHANNEL,
                            section: (0, h.s4)(n),
                            object: E.qAy.INLINE_REACTION_PICKER_UPSELL
                        }
                    }),
                    this.handleReactionPickerToggle();
            }),
            N(this, 'renderReactionPopout', (e) => {
                let { closePopout: t } = e,
                    { type: n, channel: i, message: l } = this.props,
                    a = T(
                        { openPopoutType: 'message_reaction_emoji_picker' },
                        n === v.O.BURST && {
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
                                  'aria-label': C.intl.string(C.t['7Xqzdn']),
                                  children: o
                              })
                            : o;
                    }
                });
            });
    }
}
