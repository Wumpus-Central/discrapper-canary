n.d(t, { X: () => P }), n(789020), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(954955),
    s = n.n(l),
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
    v = n(74538),
    x = n(833803),
    y = n(566006),
    E = n(981631),
    O = n(185923),
    N = n(474936),
    j = n(388032),
    C = n(672164),
    I = n(482532);
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
                S(e, t, n[t]);
            });
    }
    return e;
}
class P extends i.Component {
    render() {
        let { type: e, message: t, className: n, children: i, useChatFontScaling: o, tabIndex: l = 0 } = this.props,
            { isReactionPickerActive: s } = this.state,
            c = t.state === E.yb.SENDING,
            m = e === y.O.BURST;
        if (c || (0, b.yE)(t.flags, E.iLy.EPHEMERAL)) return null;
        let f = _.default.getCurrentUser(),
            h = (0, v.I5)(f),
            g = m ? j.NW.string(j.t.Kfcszs) : j.NW.string(j.t.lfIHs7);
        !h && m && (g = (0, r.jsx)(p.X, { tooltipText: j.NW.string(j.t.Kfcszs) }));
        let N = o ? I : C,
            { canShowImprovedReactionButton: S } = x.Z.getCurrentConfig({ location: 'ButtonAddReaction' }, { autoTrackExposure: !this.props.isForumToolbar }),
            P = {
                size: 'sm',
                color: 'currentColor',
                className: a()(N.icon, { [N.largeIcon]: S })
            };
        return (0, r.jsx)(u.yRy, {
            targetElementRef: this.ref,
            shouldShow: s,
            onRequestClose: this.handleReactionPickerToggle,
            renderPopout: this.renderReactionPopout,
            position: 'right',
            children: (e, t) => {
                var o, s;
                let { isShown: c } = t;
                return (0, r.jsx)(u.DY3, {
                    text: g,
                    color: u.FGA.PRIMARY,
                    'aria-label': m ? j.NW.string(j.t.Kfcszs) : j.NW.string(j.t.lfIHs7),
                    tooltipClassName: N.__invalid_addReactionTooltip,
                    children: (0, r.jsxs)(
                        u.P3F,
                        ((o = T({}, e)),
                        (s = s =
                            {
                                innerRef: this.ref,
                                tabIndex: l,
                                onClick: (e) => {
                                    this.handleAddReactionClick(e);
                                },
                                onMouseEnter: () => (0, d.x)(O.qR.AddReactionPopoutMouseEntered),
                                onFocus: () => (0, d.x)(O.qR.AddReactionPopoutFocused),
                                className: a()(
                                    N.reactionBtn,
                                    {
                                        [N.active]: c,
                                        [N.largeReactionBtn]: S
                                    },
                                    n
                                ),
                                children: [m ? (0, r.jsx)(u.Pt5, T({}, P)) : (0, r.jsx)(u.EO4, T({}, P)), i]
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        o)
                    )
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            S(this, 'state', { isReactionPickerActive: !1 }),
            S(this, 'ref', i.createRef()),
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
                t !== y.O.BURST ||
                    (0, v.I5)(r) ||
                    (0, m.m)({
                        analytics: {
                            type: N.cd.BURST_REACTION_UPSELL,
                            page: null != n.getGuildId() ? E.ZY5.GUILD_CHANNEL : E.ZY5.DM_CHANNEL,
                            section: (0, h.s4)(n),
                            object: E.qAy.INLINE_REACTION_PICKER_UPSELL
                        }
                    }),
                    this.handleReactionPickerToggle();
            }),
            S(this, 'renderReactionPopout', (e) => {
                let { closePopout: t } = e,
                    { type: n, channel: i, message: o } = this.props,
                    a = T(
                        { openPopoutType: 'message_reaction_emoji_picker' },
                        n === y.O.BURST && {
                            openPopoutType: 'message_super_reaction_emoji_picker',
                            page: null != i.getGuildId() ? E.ZY5.GUILD_CHANNEL : E.ZY5.DM_CHANNEL,
                            section: (0, h.s4)(i),
                            object: E.qAy.REACTION_RAIL
                        }
                    ),
                    l = (0, r.jsx)(g.$, {
                        closePopout: t,
                        channel: i,
                        onSelectEmoji: (e, n, r) => {
                            this.onAddReaction(e, r), n && (r ? s()(t, 150)() : t());
                        },
                        analyticsOverride: a,
                        messageId: o.id
                    });
                return (0, r.jsx)(c.M.Consumer, {
                    children: (e) => {
                        let { inDialog: t } = e;
                        return t
                            ? (0, r.jsx)(u.VqE, {
                                  'aria-label': j.NW.string(j.t['7Xqzdn']),
                                  children: l
                              })
                            : l;
                    }
                });
            });
    }
}
