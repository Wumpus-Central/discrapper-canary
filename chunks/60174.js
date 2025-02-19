n.d(t, { X: () => T }), n(789020), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(954955),
    s = n.n(l),
    c = n(507274),
    d = n(481060),
    u = n(255963),
    p = n(466794),
    m = n(659215),
    f = n(222677),
    h = n(995774),
    g = n(931651),
    _ = n(594174),
    b = n(630388),
    v = n(74538),
    y = n(833803),
    x = n(566006),
    O = n(981631),
    E = n(185923),
    j = n(474936),
    N = n(388032),
    C = n(773265),
    I = n(893372);
function S(e, t, n) {
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
function P(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
class T extends i.Component {
    render() {
        let { type: e, message: t, className: n, children: i, useChatFontScaling: a, tabIndex: l = 0 } = this.props,
            { isReactionPickerActive: s } = this.state,
            c = t.state === O.yb.SENDING,
            m = e === x.O.BURST;
        if (c || (0, b.yE)(t.flags, O.iLy.EPHEMERAL)) return null;
        let f = _.default.getCurrentUser(),
            h = (0, v.I5)(f),
            g = m ? N.NW.string(N.t.Kfcszs) : N.NW.string(N.t.lfIHs7);
        !h && m && (g = (0, r.jsx)(p.X, { tooltipText: N.NW.string(N.t.Kfcszs) }));
        let j = a ? I : C,
            { canShowImprovedReactionButton: S } = y.Z.getCurrentConfig({ location: 'ButtonAddReaction' }, { autoTrackExposure: !this.props.isForumToolbar }),
            T = {
                size: 'sm',
                color: 'currentColor',
                className: o()(j.icon, { [j.largeIcon]: S })
            };
        return (0, r.jsx)(d.yRy, {
            shouldShow: s,
            onRequestClose: this.handleReactionPickerToggle,
            renderPopout: this.renderReactionPopout,
            position: 'right',
            children: (e, t) => {
                var a, s;
                let { isShown: c } = t;
                return (0, r.jsx)(d.DY3, {
                    text: g,
                    color: d.FGA.PRIMARY,
                    'aria-label': m ? N.NW.string(N.t.Kfcszs) : N.NW.string(N.t.lfIHs7),
                    tooltipClassName: j.__invalid_addReactionTooltip,
                    children: (0, r.jsxs)(
                        d.P3F,
                        ((a = P({}, e)),
                        (s = s =
                            {
                                tabIndex: l,
                                onClick: (e) => {
                                    this.handleAddReactionClick(e);
                                },
                                onMouseEnter: () => (0, u.x)(E.qR.AddReactionPopoutMouseEntered),
                                onFocus: () => (0, u.x)(E.qR.AddReactionPopoutFocused),
                                className: o()(
                                    j.reactionBtn,
                                    {
                                        [j.active]: c,
                                        [j.largeReactionBtn]: S
                                    },
                                    n
                                ),
                                children: [m ? (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(d.Pt5, P({}, T)) }) : (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(d.EO4, P({}, T)) }), i]
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        a)
                    )
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            S(this, 'state', { isReactionPickerActive: !1 }),
            S(this, 'onAddReaction', (e, t) => {
                if (null == e) return;
                let { channel: n, message: r, isForumToolbar: i } = this.props;
                (0, f.rU)(n.id, r.id, (0, h.g1)(e), i ? f.TW.FORUM_TOOLBAR : f.TW.MESSAGE_INLINE_BUTTON, { burst: t });
            }),
            S(this, 'handleReactionPickerToggle', () => {
                this.setState((e) => ({ isReactionPickerActive: !e.isReactionPickerActive }));
            }),
            S(this, 'handleAddReactionClick', (e) => {
                let { type: t, channel: n } = this.props;
                e.stopPropagation();
                let r = _.default.getCurrentUser();
                t !== x.O.BURST ||
                    (0, v.I5)(r) ||
                    (0, m.m)({
                        analytics: {
                            type: j.cd.BURST_REACTION_UPSELL,
                            page: null != n.getGuildId() ? O.ZY5.GUILD_CHANNEL : O.ZY5.DM_CHANNEL,
                            section: (0, h.s4)(n),
                            object: O.qAy.INLINE_REACTION_PICKER_UPSELL
                        }
                    }),
                    this.handleReactionPickerToggle();
            }),
            S(this, 'renderReactionPopout', (e) => {
                let { closePopout: t } = e,
                    { type: n, channel: i, message: a } = this.props,
                    o = P(
                        { openPopoutType: 'message_reaction_emoji_picker' },
                        n === x.O.BURST && {
                            openPopoutType: 'message_super_reaction_emoji_picker',
                            page: null != i.getGuildId() ? O.ZY5.GUILD_CHANNEL : O.ZY5.DM_CHANNEL,
                            section: (0, h.s4)(i),
                            object: O.qAy.REACTION_RAIL
                        }
                    ),
                    l = (0, r.jsx)(g.$, {
                        closePopout: t,
                        channel: i,
                        onSelectEmoji: (e, n, r) => {
                            this.onAddReaction(e, r), n && (r ? s()(t, 150)() : t());
                        },
                        analyticsOverride: o,
                        messageId: a.id
                    });
                return (0, r.jsx)(c.M.Consumer, {
                    children: (e) =>
                        e
                            ? (0, r.jsx)(d.VqE, {
                                  'aria-label': N.NW.string(N.t['7Xqzdn']),
                                  children: l
                              })
                            : l
                });
            });
    }
}
