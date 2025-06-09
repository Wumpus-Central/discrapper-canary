n.d(t, { Z: () => Z }), n(997841), n(388685);
var i = n(255367),
    r = n(73800),
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
    p = n(501517),
    h = n(699516),
    b = n(594174),
    O = n(630388),
    E = n(970257),
    y = n(981631),
    v = n(388032),
    j = n(130883),
    S = n(739788);
function _(e, t, n) {
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
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
class I extends r.PureComponent {
    render() {
        let e,
            t,
            { report: n, resolveFlag: r } = this.state,
            l = this.props,
            { channel: a, message: s, showContextMenuHint: c, moderatorReportData: u } = l,
            g = (function (e, t) {
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
            })(l, ['channel', 'message', 'showContextMenuHint', 'moderatorReportData']),
            p = a.type === y.d4z.GUILD_ANNOUNCEMENT && (0, O.yE)(s.flags, y.iLy.CROSSPOSTED);
        c &&
            (e = (0, i.jsx)(d.Z, {
                className: S.spacingTop,
                children: v.intl.format(v.t.IxY7Ex, {})
            })),
            (0, E.vc)(s) &&
                (t = (0, i.jsx)(o.j7V, {
                    value: n,
                    onChange: this.handleToggleReport,
                    hideBorder: !0,
                    className: S.spacingTop,
                    children: v.intl.string(v.t.x0jzo6)
                }));
        let h = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.X6q, {
                    variant: 'heading-md/medium',
                    className: S.spacing,
                    children: p ? v.intl.string(v.t['2kHABQ']) : v.intl.string(v.t.AMvpS0)
                }),
                (0, i.jsx)('div', {
                    className: S.message,
                    children: (0, i.jsx)(m.Z, {
                        channel: a,
                        message: s,
                        disableInteraction: !0
                    })
                }),
                t,
                e
            ]
        });
        if ((null == u ? void 0 : u.moderatorReportChannelId) != null) {
            let { isFlagResolved: e } = u;
            return (0, i.jsx)(f.Z.Provider, {
                value: a.guild_id,
                children: (0, i.jsxs)(
                    o.Y0X,
                    N(P({ parentComponent: 'DeleteModal' }, g), {
                        children: [
                            (0, i.jsx)(o.xBx, {
                                separator: !1,
                                children: (0, i.jsxs)(o.Kqy, {
                                    direction: 'vertical',
                                    justify: 'space-between',
                                    children: [
                                        (0, i.jsx)(o.olH, {
                                            className: S.closeButton,
                                            onClick: g.onClose
                                        }),
                                        (0, i.jsx)(o.X6q, {
                                            variant: 'heading-xl/bold',
                                            children: v.intl.string(v.t.MWMcg4)
                                        })
                                    ]
                                })
                            }),
                            (0, i.jsx)(o.hzk, { children: h }),
                            (0, i.jsxs)(o.mzw, {
                                children: [
                                    (0, i.jsx)(o.zxk, {
                                        type: 'submit',
                                        color: o.zxk.Colors.RED,
                                        size: o.zxk.Sizes.SMALL,
                                        onClick: this.handleDelete,
                                        children: v.intl.string(v.t.oyYWHB)
                                    }),
                                    !e &&
                                        (0, i.jsx)(o.XZJ, {
                                            value: r,
                                            onChange: (e, t) => this.handleToggleResolveFlag(t),
                                            children: v.intl.string(j.default['8yIKen'])
                                        })
                                ]
                            })
                        ]
                    })
                )
            });
        }
        return (0, i.jsx)(f.Z.Provider, {
            value: a.guild_id,
            children: (0, i.jsx)(
                o.ConfirmModal,
                N(
                    P(
                        {
                            header: p ? v.intl.string(v.t.aIz1oa) : v.intl.string(v.t.MWMcg4),
                            confirmText: v.intl.string(v.t.oyYWHB),
                            cancelText: v.intl.string(v.t['ETE/oK']),
                            onConfirm: this.handleDelete
                        },
                        g
                    ),
                    { children: h }
                )
            )
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', {
                report: !1,
                resolveFlag: !1
            }),
            _(this, 'handleDelete', () => {
                let { report: e, resolveFlag: t } = this.state,
                    { channel: n, message: i, moderatorReportData: r } = this.props,
                    { moderatorReportChannelId: l, isFlagResolved: a } = null != r ? r : {};
                e
                    ? (0, g.ak)(i, 'message_delete_alert', () =>
                          c.Z.deleteMessage(n.id, i.id).then(() => {
                              if (null != l) {
                                  var e, n;
                                  t && !a && p.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n);
                              }
                          })
                      )
                    : c.Z.deleteMessage(n.id, i.id).then(() => {
                          if (null != l) {
                              var e, n;
                              t && !a && p.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n);
                          }
                      });
            }),
            _(this, 'handleToggleReport', (e) => {
                this.setState({ report: e });
            }),
            _(this, 'handleToggleResolveFlag', (e) => {
                this.setState({ resolveFlag: e });
            });
    }
}
let Z = {
    confirmPin: function (e, t) {
        (0, o.h7j)((n) => {
            let r,
                l = (0, u.F6)(e, b.default, h.Z);
            return (
                (r = e.isPrivate() ? v.intl.string(v.t.hMRngI) : v.intl.formatToPlainString(v.t['3IRluL'], { channelName: l })),
                (0, i.jsx)(f.Z.Provider, {
                    value: e.guild_id,
                    children: (0, i.jsxs)(
                        o.ConfirmModal,
                        N(
                            P(
                                {
                                    header: v.intl.string(v.t.bKMaZW),
                                    confirmText: v.intl.string(v.t.rOQ5BQ),
                                    cancelText: v.intl.string(v.t['ETE/oK']),
                                    confirmButtonColor: o.zxk.Colors.BRAND,
                                    onConfirm: () => s.Z.pinMessage(e, t.id)
                                },
                                n
                            ),
                            {
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        className: S.spacing,
                                        children: r
                                    }),
                                    (0, i.jsx)('div', {
                                        className: S.message,
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
                    N(
                        P(
                            {
                                header: v.intl.string(v.t.CFF2vL),
                                confirmText: v.intl.string(v.t.lAU5jI),
                                cancelText: v.intl.string(v.t['ETE/oK']),
                                onConfirm: () => s.Z.unpinMessage(e, t.id)
                            },
                            n
                        ),
                        {
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    className: S.spacing,
                                    children: v.intl.string(v.t.NjEPp6)
                                }),
                                (0, i.jsx)('div', {
                                    className: a()(S.message, S.spacing),
                                    children: (0, i.jsx)(m.Z, {
                                        channel: e,
                                        message: t,
                                        disableInteraction: !0
                                    })
                                }),
                                (0, i.jsx)(d.Z, { children: v.intl.format(v.t.oCVB3d, {}) })
                            ]
                        }
                    )
                )
            })
        );
    },
    confirmDelete: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, o.h7j)((l) =>
            (0, i.jsx)(
                I,
                P(
                    {
                        channel: e,
                        message: t,
                        showContextMenuHint: n,
                        moderatorReportData: r
                    },
                    l
                )
            )
        );
    },
    confirmEdit: function (e, t, n) {
        (0, o.h7j)((r) =>
            (0, i.jsx)(
                o.ConfirmModal,
                N(
                    P(
                        {
                            header: v.intl.string(v.t.aIz1oa),
                            confirmText: v.intl.string(v.t['cY+Ooa']),
                            cancelText: v.intl.string(v.t['ETE/oK']),
                            confirmButtonColor: o.zxk.Colors.BRAND,
                            onConfirm: () => c.Z.editMessage(e, t, { content: n })
                        },
                        r
                    ),
                    {
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            className: S.spacing,
                            children: v.intl.string(v.t.grBcMz)
                        })
                    }
                )
            )
        );
    }
};
