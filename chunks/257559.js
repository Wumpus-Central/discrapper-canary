n.d(t, { Z: () => w }), n(997841), n(388685);
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
    f = n(576855),
    h = n(372900),
    g = n(726521),
    m = n(294218),
    b = n(501517),
    O = n(699516),
    _ = n(594174),
    y = n(630388),
    v = n(970257),
    j = n(981631),
    C = n(388032),
    x = n(764295),
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
function I(e) {
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
function P(e, t) {
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
            { channel: o, message: s, showContextMenuHint: u, moderatorReportData: d } = l,
            p = (function (e, t) {
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
            g = o.type === j.d4z.GUILD_ANNOUNCEMENT && (0, y.yE)(s.flags, j.iLy.CROSSPOSTED);
        u &&
            (e = (0, r.jsx)(f.Z, {
                className: E.spacingTop,
                children: C.intl.format(C.t.IxY7Ex, {}),
            })),
            (0, v.vc)(s) &&
                (t = (0, r.jsx)(c.j7V, {
                    value: n,
                    onChange: this.handleToggleReport,
                    hideBorder: !0,
                    className: E.spacingTop,
                    children: C.intl.string(C.t.x0jzo6),
                }));
        let b = g ? C.intl.string(C.t["2kHABQ"]) : C.intl.string(C.t.AMvpS0),
            O = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: E.message,
                        children: (0, r.jsx)(m.Z, {
                            channel: o,
                            message: s,
                            disableInteraction: !0,
                        }),
                    }),
                    t,
                    e,
                ],
            });
        if ((null == d ? void 0 : d.moderatorReportChannelId) != null) {
            let { isFlagResolved: e } = d;
            return (0, r.jsx)(h.Z.Provider, {
                value: o.guild_id,
                children: (0, r.jsxs)(
                    c.Y0X,
                    P(I({ parentComponent: "DeleteModal" }, p), {
                        children: [
                            (0, r.jsx)(c.xBx, {
                                separator: !1,
                                children: (0, r.jsxs)(c.Kqy, {
                                    direction: "vertical",
                                    justify: "space-between",
                                    children: [
                                        (0, r.jsx)(c.olH, {
                                            className: E.closeButton,
                                            onClick: p.onClose,
                                        }),
                                        (0, r.jsx)(c.X6q, {
                                            variant: "heading-xl/bold",
                                            children: C.intl.string(C.t.MWMcg4),
                                        }),
                                    ],
                                }),
                            }),
                            (0, r.jsxs)(c.hzk, {
                                children: [
                                    (0, r.jsx)(c.X6q, {
                                        variant: "heading-md/medium",
                                        className: E.spacing,
                                        children: b,
                                    }),
                                    O,
                                ],
                            }),
                            (0, r.jsxs)(c.mzw, {
                                children: [
                                    (0, r.jsx)(c.zxk, {
                                        variant: "critical-primary",
                                        size: "sm",
                                        text: C.intl.string(C.t.oyYWHB),
                                        type: "submit",
                                        onClick: this.handleDelete,
                                    }),
                                    !e &&
                                        (0, r.jsx)(c.XZJ, {
                                            value: i,
                                            onChange: (e, t) => this.handleToggleResolveFlag(t),
                                            children: C.intl.string(x.default["8yIKen"]),
                                        }),
                                ],
                            }),
                        ],
                    }),
                ),
            });
        }
        return (0, r.jsx)(h.Z.Provider, {
            value: o.guild_id,
            children: (0, r.jsx)(a.Modal, {
                title: g ? C.intl.string(C.t.aIz1oa) : C.intl.string(C.t.MWMcg4),
                subtitle: b,
                actions: [
                    {
                        text: C.intl.string(C.t["ETE/oK"]),
                        onClick: p.onClose,
                        variant: "secondary",
                    },
                    {
                        text: C.intl.string(C.t.oyYWHB),
                        onClick: this.handleDeleteMana,
                        variant: "critical-primary",
                    },
                ],
                onClose: p.onClose,
                transitionState: p.transitionState,
                children: O,
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
let w = {
    confirmPin: function (e, t) {
        (0, c.h7j)((n) => {
            let i,
                l = (0, p.F6)(e, _.default, O.Z);
            return (
                (i = e.isPrivate()
                    ? C.intl.string(C.t.hMRngI)
                    : C.intl.formatToPlainString(C.t["3IRluL"], { channelName: l })),
                (0, r.jsx)(h.Z.Provider, {
                    value: e.guild_id,
                    children: (0, r.jsxs)(
                        c.ConfirmModal,
                        P(
                            I(
                                {
                                    header: C.intl.string(C.t.bKMaZW),
                                    confirmText: C.intl.string(C.t.rOQ5BQ),
                                    cancelText: C.intl.string(C.t["ETE/oK"]),
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
            (0, r.jsx)(h.Z.Provider, {
                value: e.guild_id,
                children: (0, r.jsxs)(
                    c.ConfirmModal,
                    P(
                        I(
                            {
                                header: C.intl.string(C.t.CFF2vL),
                                confirmText: C.intl.string(C.t.lAU5jI),
                                cancelText: C.intl.string(C.t["ETE/oK"]),
                                onConfirm: () => u.Z.unpinMessage(e, t.id),
                            },
                            n,
                        ),
                        {
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    className: E.spacing,
                                    children: C.intl.string(C.t.NjEPp6),
                                }),
                                (0, r.jsx)("div", {
                                    className: o()(E.message, E.spacing),
                                    children: (0, r.jsx)(m.Z, {
                                        channel: e,
                                        message: t,
                                        disableInteraction: !0,
                                    }),
                                }),
                                (0, r.jsx)(f.Z, { children: C.intl.format(C.t.oCVB3d, {}) }),
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
                I(
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
                P(
                    I(
                        {
                            header: C.intl.string(C.t.aIz1oa),
                            confirmText: C.intl.string(C.t["cY+Ooa"]),
                            cancelText: C.intl.string(C.t["ETE/oK"]),
                            confirmButtonColor: s.zx.Colors.BRAND,
                            onConfirm: () => d.Z.editMessage(e, t, n),
                        },
                        i,
                    ),
                    {
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            className: E.spacing,
                            children: C.intl.string(C.t.grBcMz),
                        }),
                    },
                ),
            ),
        );
    },
};
