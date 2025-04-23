n.d(t, { Z: () => Z }), n(997841), n(388685);
var i = n(200651),
    r = n(192379),
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
    h = n(699516),
    b = n(594174),
    p = n(630388),
    O = n(970257),
    y = n(981631),
    E = n(388032),
    v = n(739788);
function j(e, t, n) {
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
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                j(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class _ extends r.PureComponent {
    render() {
        let e,
            t,
            { report: n } = this.state,
            r = this.props,
            { channel: l, message: a, showContextMenuHint: s } = r,
            c = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            l = Object.keys(e);
                        for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(r, ['channel', 'message', 'showContextMenuHint']),
            u = l.type === y.d4z.GUILD_ANNOUNCEMENT && (0, p.yE)(a.flags, y.iLy.CROSSPOSTED);
        return (
            s &&
                (e = (0, i.jsx)(d.Z, {
                    className: v.spacingTop,
                    children: E.intl.format(E.t.IxY7Ex, {})
                })),
            (0, O.vc)(a) &&
                (t = (0, i.jsx)(o.j7V, {
                    value: n,
                    onChange: this.handleToggleReport,
                    hideBorder: !0,
                    className: v.spacingTop,
                    children: E.intl.string(E.t.x0jzo6)
                })),
            (0, i.jsx)(f.Z.Provider, {
                value: l.guild_id,
                children: (0, i.jsxs)(
                    o.ConfirmModal,
                    P(
                        S(
                            {
                                header: u ? E.intl.string(E.t.aIz1oa) : E.intl.string(E.t.MWMcg4),
                                confirmText: E.intl.string(E.t.oyYWHB),
                                cancelText: E.intl.string(E.t['ETE/oK']),
                                onConfirm: this.handleDelete
                            },
                            c
                        ),
                        {
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    className: v.spacing,
                                    children: u ? E.intl.string(E.t['2kHABQ']) : E.intl.string(E.t.AMvpS0)
                                }),
                                (0, i.jsx)('div', {
                                    className: v.message,
                                    children: (0, i.jsx)(m.Z, {
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
            j(this, 'state', { report: !1 }),
            j(this, 'handleDelete', () => {
                let { report: e } = this.state,
                    { channel: t, message: n } = this.props;
                e ? (0, g.ak)(n, 'message_delete_alert', () => c.Z.deleteMessage(t.id, n.id)) : c.Z.deleteMessage(t.id, n.id);
            }),
            j(this, 'handleToggleReport', (e) => {
                this.setState({ report: e });
            });
    }
}
let Z = {
    confirmPin: function (e, t) {
        (0, o.h7j)((n) => {
            let r,
                l = (0, u.F6)(e, b.default, h.Z);
            return (
                (r = e.isPrivate() ? E.intl.string(E.t.hMRngI) : E.intl.formatToPlainString(E.t['3IRluL'], { channelName: l })),
                (0, i.jsx)(f.Z.Provider, {
                    value: e.guild_id,
                    children: (0, i.jsxs)(
                        o.ConfirmModal,
                        P(
                            S(
                                {
                                    header: E.intl.string(E.t.bKMaZW),
                                    confirmText: E.intl.string(E.t.rOQ5BQ),
                                    cancelText: E.intl.string(E.t['ETE/oK']),
                                    confirmButtonColor: o.zxk.Colors.BRAND,
                                    onConfirm: () => s.Z.pinMessage(e, t.id)
                                },
                                n
                            ),
                            {
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        className: v.spacing,
                                        children: r
                                    }),
                                    (0, i.jsx)('div', {
                                        className: v.message,
                                        children: (0, i.jsx)(m.Z, {
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
            (0, i.jsx)(f.Z.Provider, {
                value: e.guild_id,
                children: (0, i.jsxs)(
                    o.ConfirmModal,
                    P(
                        S(
                            {
                                header: E.intl.string(E.t.CFF2vL),
                                confirmText: E.intl.string(E.t.lAU5jI),
                                cancelText: E.intl.string(E.t['ETE/oK']),
                                onConfirm: () => s.Z.unpinMessage(e, t.id)
                            },
                            n
                        ),
                        {
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    className: v.spacing,
                                    children: E.intl.string(E.t.NjEPp6)
                                }),
                                (0, i.jsx)('div', {
                                    className: a()(v.message, v.spacing),
                                    children: (0, i.jsx)(m.Z, {
                                        channel: e,
                                        message: t,
                                        disableInteraction: !0
                                    })
                                }),
                                (0, i.jsx)(d.Z, { children: E.intl.format(E.t.oCVB3d, {}) })
                            ]
                        }
                    )
                )
            })
        );
    },
    confirmDelete: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (0, o.h7j)((r) =>
            (0, i.jsx)(
                _,
                S(
                    {
                        channel: e,
                        message: t,
                        showContextMenuHint: n
                    },
                    r
                )
            )
        );
    },
    confirmEdit: function (e, t, n) {
        (0, o.h7j)((r) =>
            (0, i.jsx)(
                o.ConfirmModal,
                P(
                    S(
                        {
                            header: E.intl.string(E.t.aIz1oa),
                            confirmText: E.intl.string(E.t['cY+Ooa']),
                            cancelText: E.intl.string(E.t['ETE/oK']),
                            confirmButtonColor: o.zxk.Colors.BRAND,
                            onConfirm: () => c.Z.editMessage(e, t, { content: n })
                        },
                        r
                    ),
                    {
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            className: v.spacing,
                            children: E.intl.string(E.t.grBcMz)
                        })
                    }
                )
            )
        );
    }
};
