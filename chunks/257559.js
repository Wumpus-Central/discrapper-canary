n.d(t, { Z: () => Z }), n(789020), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(332148),
    c = n(904245),
    u = n(933557),
    d = n(576855),
    f = n(372900),
    g = n(726521),
    m = n(294218),
    b = n(699516),
    p = n(594174),
    h = n(630388),
    y = n(970257),
    N = n(981631),
    O = n(388032),
    E = n(739788);
function v(e, t, n) {
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
function j(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class P extends i.PureComponent {
    render() {
        let e,
            t,
            { report: n } = this.state,
            i = this.props,
            { channel: l, message: a, showContextMenuHint: s } = i,
            c = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(i, ['channel', 'message', 'showContextMenuHint']),
            u = l.type === N.d4z.GUILD_ANNOUNCEMENT && (0, h.yE)(a.flags, N.iLy.CROSSPOSTED);
        return (
            s &&
                (e = (0, r.jsx)(d.Z, {
                    className: E.spacingTop,
                    children: O.NW.format(O.t.IxY7Ex, {})
                })),
            (0, y.vc)(a) &&
                (t = (0, r.jsx)(o.j7V, {
                    value: n,
                    onChange: this.handleToggleReport,
                    hideBorder: !0,
                    className: E.spacingTop,
                    children: O.NW.string(O.t.x0jzo6)
                })),
            (0, r.jsx)(f.Z.Provider, {
                value: l.guild_id,
                children: (0, r.jsxs)(
                    o.ConfirmModal,
                    S(
                        j(
                            {
                                header: u ? O.NW.string(O.t.aIz1oa) : O.NW.string(O.t.MWMcg4),
                                confirmText: O.NW.string(O.t.oyYWHB),
                                cancelText: O.NW.string(O.t['ETE/oK']),
                                onConfirm: this.handleDelete
                            },
                            c
                        ),
                        {
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    className: E.spacing,
                                    children: u ? O.NW.string(O.t['2kHABQ']) : O.NW.string(O.t.AMvpS0)
                                }),
                                (0, r.jsx)('div', {
                                    className: E.message,
                                    children: (0, r.jsx)(m.Z, {
                                        channel: l,
                                        message: a,
                                        disableInteraction: !0
                                    })
                                }),
                                t,
                                e
                            ]
                        }
                    )
                )
            })
        );
    }
    constructor(...e) {
        super(...e),
            v(this, 'state', { report: !1 }),
            v(this, 'handleDelete', () => {
                let { report: e } = this.state,
                    { channel: t, message: n } = this.props;
                e ? (0, g.ak)(n, 'message_delete_alert', () => c.Z.deleteMessage(t.id, n.id)) : c.Z.deleteMessage(t.id, n.id);
            }),
            v(this, 'handleToggleReport', (e) => {
                this.setState({ report: e });
            });
    }
}
let Z = {
    confirmPin: function (e, t) {
        (0, o.h7j)((n) => {
            let i,
                l = (0, u.F6)(e, p.default, b.Z);
            return (
                (i = e.isPrivate() ? O.NW.string(O.t.hMRngI) : O.NW.formatToPlainString(O.t['3IRluL'], { channelName: l })),
                (0, r.jsx)(f.Z.Provider, {
                    value: e.guild_id,
                    children: (0, r.jsxs)(
                        o.ConfirmModal,
                        S(
                            j(
                                {
                                    header: O.NW.string(O.t.bKMaZW),
                                    confirmText: O.NW.string(O.t.rOQ5BQ),
                                    cancelText: O.NW.string(O.t['ETE/oK']),
                                    confirmButtonColor: o.zxk.Colors.BRAND,
                                    onConfirm: () => s.Z.pinMessage(e, t.id)
                                },
                                n
                            ),
                            {
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        className: E.spacing,
                                        children: i
                                    }),
                                    (0, r.jsx)('div', {
                                        className: E.message,
                                        children: (0, r.jsx)(m.Z, {
                                            channel: e,
                                            message: t,
                                            animateAvatar: !1,
                                            disableInteraction: !0
                                        })
                                    })
                                ]
                            }
                        )
                    )
                })
            );
        });
    },
    confirmUnpin: function (e, t) {
        (0, o.h7j)((n) =>
            (0, r.jsx)(f.Z.Provider, {
                value: e.guild_id,
                children: (0, r.jsxs)(
                    o.ConfirmModal,
                    S(
                        j(
                            {
                                header: O.NW.string(O.t.CFF2vL),
                                confirmText: O.NW.string(O.t.lAU5jI),
                                cancelText: O.NW.string(O.t['ETE/oK']),
                                onConfirm: () => s.Z.unpinMessage(e, t.id)
                            },
                            n
                        ),
                        {
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    className: E.spacing,
                                    children: O.NW.string(O.t.NjEPp6)
                                }),
                                (0, r.jsx)('div', {
                                    className: a()(E.message, E.spacing),
                                    children: (0, r.jsx)(m.Z, {
                                        channel: e,
                                        message: t,
                                        disableInteraction: !0
                                    })
                                }),
                                (0, r.jsx)(d.Z, { children: O.NW.format(O.t.oCVB3d, {}) })
                            ]
                        }
                    )
                )
            })
        );
    },
    confirmDelete: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (0, o.h7j)((i) =>
            (0, r.jsx)(
                P,
                j(
                    {
                        channel: e,
                        message: t,
                        showContextMenuHint: n
                    },
                    i
                )
            )
        );
    },
    confirmEdit: function (e, t, n) {
        (0, o.h7j)((i) =>
            (0, r.jsx)(
                o.ConfirmModal,
                S(
                    j(
                        {
                            header: O.NW.string(O.t.aIz1oa),
                            confirmText: O.NW.string(O.t['cY+Ooa']),
                            cancelText: O.NW.string(O.t['ETE/oK']),
                            confirmButtonColor: o.zxk.Colors.BRAND,
                            onConfirm: () => c.Z.editMessage(e, t, { content: n })
                        },
                        i
                    ),
                    {
                        children: (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            className: E.spacing,
                            children: O.NW.string(O.t.grBcMz)
                        })
                    }
                )
            )
        );
    }
};
