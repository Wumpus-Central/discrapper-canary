n.d(t, { Z: () => Z }), n(997841), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(82659),
    s = n(755721),
    c = n(481060),
    u = n(332148),
    d = n(904245),
    p = n(933557),
    h = n(576855),
    f = n(372900),
    g = n(726521),
    m = n(294218),
    b = n(501517),
    O = n(699516),
    y = n(594174),
    _ = n(630388),
    v = n(970257),
    j = n(981631),
    x = n(388032),
    C = n(764295),
    E = n(477425);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
class N extends i.PureComponent {
    render() {
        let e,
            t,
            { report: n, resolveFlag: i } = this.state,
            l = this.props,
            { channel: o, message: u, showContextMenuHint: d, moderatorReportData: p } = l,
            g = (function (e, t) {
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
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(l, ["channel", "message", "showContextMenuHint", "moderatorReportData"]),
            b = o.type === j.d4z.GUILD_ANNOUNCEMENT && (0, _.yE)(u.flags, j.iLy.CROSSPOSTED);
        d &&
            (e = (0, r.jsx)(h.Z, {
                className: E.spacingTop,
                children: x.intl.format(x.t.IxY7Ex, {}),
            })),
            (0, v.vc)(u) &&
                (t = (0, r.jsx)(c.j7V, {
                    value: n,
                    onChange: this.handleToggleReport,
                    hideBorder: !0,
                    className: E.spacingTop,
                    children: x.intl.string(x.t.x0jzo6),
                }));
        let O = b ? x.intl.string(x.t["2kHABQ"]) : x.intl.string(x.t.AMvpS0),
            y = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: E.message,
                        children: (0, r.jsx)(m.Z, {
                            channel: o,
                            message: u,
                            disableInteraction: !0,
                        }),
                    }),
                    t,
                    e,
                ],
            });
        if ((null == p ? void 0 : p.moderatorReportChannelId) != null) {
            let { isFlagResolved: e } = p;
            return (0, r.jsx)(f.Z.Provider, {
                value: o.guild_id,
                children: (0, r.jsxs)(
                    c.Y0X,
                    I(P({ parentComponent: "DeleteModal" }, g), {
                        children: [
                            (0, r.jsx)(c.xBx, {
                                separator: !1,
                                children: (0, r.jsxs)(c.Kqy, {
                                    direction: "vertical",
                                    justify: "space-between",
                                    children: [
                                        (0, r.jsx)(c.olH, {
                                            className: E.closeButton,
                                            onClick: g.onClose,
                                        }),
                                        (0, r.jsx)(c.X6q, {
                                            variant: "heading-xl/bold",
                                            children: x.intl.string(x.t.MWMcg4),
                                        }),
                                    ],
                                }),
                            }),
                            (0, r.jsxs)(c.hzk, {
                                children: [
                                    (0, r.jsx)(c.X6q, {
                                        variant: "heading-md/medium",
                                        className: E.spacing,
                                        children: O,
                                    }),
                                    y,
                                ],
                            }),
                            (0, r.jsxs)(c.mzw, {
                                children: [
                                    (0, r.jsx)(c.zxk, {
                                        variant: "critical-primary",
                                        size: "sm",
                                        text: x.intl.string(x.t.oyYWHB),
                                        type: "submit",
                                        onClick: this.handleDelete,
                                    }),
                                    !e &&
                                        (0, r.jsx)(s.$q, {
                                            value: i,
                                            onChange: (e, t) => this.handleToggleResolveFlag(t),
                                            children: x.intl.string(C.default["8yIKen"]),
                                        }),
                                ],
                            }),
                        ],
                    }),
                ),
            });
        }
        return (0, r.jsx)(f.Z.Provider, {
            value: o.guild_id,
            children: (0, r.jsx)(a.Modal, {
                title: b ? x.intl.string(x.t.aIz1oa) : x.intl.string(x.t.MWMcg4),
                subtitle: O,
                actions: [
                    {
                        text: x.intl.string(x.t["ETE/oK"]),
                        onClick: g.onClose,
                        variant: "secondary",
                    },
                    {
                        text: x.intl.string(x.t.oyYWHB),
                        onClick: this.handleDeleteMana,
                        variant: "critical-primary",
                    },
                ],
                onClose: g.onClose,
                transitionState: g.transitionState,
                children: y,
            }),
        });
    }
    constructor(...e) {
        super(...e),
            S(this, "state", {
                report: !1,
                resolveFlag: !1,
            }),
            S(this, "handleDelete", () => {
                let { report: e, resolveFlag: t } = this.state,
                    { channel: n, message: r, moderatorReportData: i } = this.props,
                    { moderatorReportChannelId: l, isFlagResolved: o } = null != i ? i : {};
                e
                    ? (0, g.ak)(r, "message_delete_alert", () =>
                          d.Z.deleteMessage(n.id, r.id).then(() => {
                              if (null != l) {
                                  var e, n;
                                  t && !o && b.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n);
                              }
                          }),
                      )
                    : d.Z.deleteMessage(n.id, r.id).then(() => {
                          if (null != l) {
                              var e, n;
                              t && !o && b.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n);
                          }
                      });
            }),
            S(this, "handleDeleteMana", () => {
                var e, t;
                this.handleDelete(), null == (e = (t = this.props).onClose) || e.call(t);
            }),
            S(this, "handleToggleReport", (e) => {
                this.setState({ report: e });
            }),
            S(this, "handleToggleResolveFlag", (e) => {
                this.setState({ resolveFlag: e });
            });
    }
}
let Z = {
    confirmPin: function (e, t) {
        (0, c.h7j)((n) => {
            let i,
                l = (0, p.F6)(e, y.default, O.Z);
            return (
                (i = e.isPrivate()
                    ? x.intl.string(x.t.hMRngI)
                    : x.intl.formatToPlainString(x.t["3IRluL"], { channelName: l })),
                (0, r.jsx)(f.Z.Provider, {
                    value: e.guild_id,
                    children: (0, r.jsxs)(
                        c.ConfirmModal,
                        I(
                            P(
                                {
                                    header: x.intl.string(x.t.bKMaZW),
                                    confirmText: x.intl.string(x.t.rOQ5BQ),
                                    cancelText: x.intl.string(x.t["ETE/oK"]),
                                    confirmButtonColor: s.zx.Colors.BRAND,
                                    onConfirm: () => u.Z.pinMessage(e, t.id),
                                },
                                n,
                            ),
                            {
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-md/normal",
                                        className: E.spacing,
                                        children: i,
                                    }),
                                    (0, r.jsx)("div", {
                                        className: E.message,
                                        children: (0, r.jsx)(m.Z, {
                                            channel: e,
                                            message: t,
                                            animateAvatar: !1,
                                            disableInteraction: !0,
                                        }),
                                    }),
                                ],
                            },
                        ),
                    ),
                })
            );
        });
    },
    confirmUnpin: function (e, t) {
        (0, c.h7j)((n) =>
            (0, r.jsx)(f.Z.Provider, {
                value: e.guild_id,
                children: (0, r.jsxs)(
                    c.ConfirmModal,
                    I(
                        P(
                            {
                                header: x.intl.string(x.t.CFF2vL),
                                confirmText: x.intl.string(x.t.lAU5jI),
                                cancelText: x.intl.string(x.t["ETE/oK"]),
                                onConfirm: () => u.Z.unpinMessage(e, t.id),
                            },
                            n,
                        ),
                        {
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    className: E.spacing,
                                    children: x.intl.string(x.t.NjEPp6),
                                }),
                                (0, r.jsx)("div", {
                                    className: o()(E.message, E.spacing),
                                    children: (0, r.jsx)(m.Z, {
                                        channel: e,
                                        message: t,
                                        disableInteraction: !0,
                                    }),
                                }),
                                (0, r.jsx)(h.Z, { children: x.intl.format(x.t.oCVB3d, {}) }),
                            ],
                        },
                    ),
                ),
            }),
        );
    },
    confirmDelete: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, c.h7j)((l) =>
            (0, r.jsx)(
                N,
                P(
                    {
                        channel: e,
                        message: t,
                        showContextMenuHint: n,
                        moderatorReportData: i,
                    },
                    l,
                ),
            ),
        );
    },
    confirmEdit: function (e, t, n) {
        (0, c.h7j)((i) =>
            (0, r.jsx)(
                c.ConfirmModal,
                I(
                    P(
                        {
                            header: x.intl.string(x.t.aIz1oa),
                            confirmText: x.intl.string(x.t["cY+Ooa"]),
                            cancelText: x.intl.string(x.t["ETE/oK"]),
                            confirmButtonColor: s.zx.Colors.BRAND,
                            onConfirm: () => d.Z.editMessage(e, t, n),
                        },
                        i,
                    ),
                    {
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            className: E.spacing,
                            children: x.intl.string(x.t.grBcMz),
                        }),
                    },
                ),
            ),
        );
    },
};
