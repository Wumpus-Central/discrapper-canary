n.d(t, { Z: () => _ }), n(997841), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    s = n(332148),
    c = n(904245),
    u = n(933557),
    d = n(576855),
    f = n(372900),
    g = n(726521),
    m = n(294218),
    b = n(699516),
    h = n(594174),
    p = n(630388),
    O = n(970257),
    y = n(981631),
    E = n(388032),
    N = n(739788);
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
            { channel: a, message: l, showContextMenuHint: s } = i,
            c = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(i, ['channel', 'message', 'showContextMenuHint']),
            u = a.type === y.d4z.GUILD_ANNOUNCEMENT && (0, p.yE)(l.flags, y.iLy.CROSSPOSTED);
        return (
            s &&
                (e = (0, r.jsx)(d.Z, {
                    className: N.spacingTop,
                    children: E.NW.format(E.t.IxY7Ex, {})
                })),
            (0, O.vc)(l) &&
                (t = (0, r.jsx)(o.j7V, {
                    value: n,
                    onChange: this.handleToggleReport,
                    hideBorder: !0,
                    className: N.spacingTop,
                    children: E.NW.string(E.t.x0jzo6)
                })),
            (0, r.jsx)(f.Z.Provider, {
                value: a.guild_id,
                children: (0, r.jsxs)(
                    o.ConfirmModal,
                    S(
                        j(
                            {
                                header: u ? E.NW.string(E.t.aIz1oa) : E.NW.string(E.t.MWMcg4),
                                confirmText: E.NW.string(E.t.oyYWHB),
                                cancelText: E.NW.string(E.t['ETE/oK']),
                                onConfirm: this.handleDelete
                            },
                            c
                        ),
                        {
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    className: N.spacing,
                                    children: u ? E.NW.string(E.t['2kHABQ']) : E.NW.string(E.t.AMvpS0)
                                }),
                                (0, r.jsx)('div', {
                                    className: N.message,
                                    children: (0, r.jsx)(m.Z, {
                                        channel: a,
                                        message: l,
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
let _ = {
    confirmPin: function (e, t) {
        (0, o.h7j)((n) => {
            let i,
                a = (0, u.F6)(e, h.default, b.Z);
            return (
                (i = e.isPrivate() ? E.NW.string(E.t.hMRngI) : E.NW.formatToPlainString(E.t['3IRluL'], { channelName: a })),
                (0, r.jsx)(f.Z.Provider, {
                    value: e.guild_id,
                    children: (0, r.jsxs)(
                        o.ConfirmModal,
                        S(
                            j(
                                {
                                    header: E.NW.string(E.t.bKMaZW),
                                    confirmText: E.NW.string(E.t.rOQ5BQ),
                                    cancelText: E.NW.string(E.t['ETE/oK']),
                                    confirmButtonColor: o.zxk.Colors.BRAND,
                                    onConfirm: () => s.Z.pinMessage(e, t.id)
                                },
                                n
                            ),
                            {
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        className: N.spacing,
                                        children: i
                                    }),
                                    (0, r.jsx)('div', {
                                        className: N.message,
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
                                header: E.NW.string(E.t.CFF2vL),
                                confirmText: E.NW.string(E.t.lAU5jI),
                                cancelText: E.NW.string(E.t['ETE/oK']),
                                onConfirm: () => s.Z.unpinMessage(e, t.id)
                            },
                            n
                        ),
                        {
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    className: N.spacing,
                                    children: E.NW.string(E.t.NjEPp6)
                                }),
                                (0, r.jsx)('div', {
                                    className: l()(N.message, N.spacing),
                                    children: (0, r.jsx)(m.Z, {
                                        channel: e,
                                        message: t,
                                        disableInteraction: !0
                                    })
                                }),
                                (0, r.jsx)(d.Z, { children: E.NW.format(E.t.oCVB3d, {}) })
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
                            header: E.NW.string(E.t.aIz1oa),
                            confirmText: E.NW.string(E.t['cY+Ooa']),
                            cancelText: E.NW.string(E.t['ETE/oK']),
                            confirmButtonColor: o.zxk.Colors.BRAND,
                            onConfirm: () => c.Z.editMessage(e, t, { content: n })
                        },
                        i
                    ),
                    {
                        children: (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            className: N.spacing,
                            children: E.NW.string(E.t.grBcMz)
                        })
                    }
                )
            )
        );
    }
};
