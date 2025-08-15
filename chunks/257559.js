n.d(t, { Z: () => Z }), n(997841), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(82659),
    s = n(755721),
    c = n(481060),
    u = n(332148),
    d = n(904245),
    p = n(933557),
    f = n(576855),
    h = n(724723),
    g = n(372900),
    m = n(726521),
    b = n(294218),
    _ = n(501517),
    O = n(699516),
    y = n(594174),
    v = n(630388),
    j = n(970257),
    C = n(981631),
    E = n(388032),
    x = n(764295),
    S = n(477425);
function I(e, t, n) {
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
                I(e, t, n[t]);
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
class w extends i.PureComponent {
    render() {
        let e,
            t,
            n = h.Z.getCurrentConfig({ location: "DeleteModal" }).enabled,
            { report: i, resolveFlag: l } = this.state,
            o = this.props,
            { channel: s, message: u, showContextMenuHint: d, moderatorReportData: p } = o,
            m = (function (e, t) {
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
            })(o, ["channel", "message", "showContextMenuHint", "moderatorReportData"]),
            _ = s.type === C.d4z.GUILD_ANNOUNCEMENT && (0, v.yE)(u.flags, C.iLy.CROSSPOSTED);
        d &&
            (e = (0, r.jsx)(f.Z, {
                className: S.spacingTop,
                children: E.intl.format(E.t.IxY7Ex, {}),
            })),
            (0, j.vc)(u) &&
                (t = (0, r.jsx)(c.j7V, {
                    value: i,
                    onChange: this.handleToggleReport,
                    hideBorder: !0,
                    className: S.spacingTop,
                    children: E.intl.string(E.t.x0jzo6),
                }));
        let O = _ ? E.intl.string(E.t["2kHABQ"]) : E.intl.string(E.t.AMvpS0),
            y = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: S.message,
                        children: (0, r.jsx)(b.Z, {
                            channel: s,
                            message: u,
                            disableInteraction: !0,
                        }),
                    }),
                    t,
                    e,
                ],
            }),
            I = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: "heading-md/medium",
                        className: S.spacing,
                        children: O,
                    }),
                    y,
                ],
            });
        if ((null == p ? void 0 : p.moderatorReportChannelId) != null) {
            let { isFlagResolved: e } = p;
            return (0, r.jsx)(g.Z.Provider, {
                value: s.guild_id,
                children: (0, r.jsxs)(
                    c.Y0X,
                    N(P({ parentComponent: "DeleteModal" }, m), {
                        children: [
                            (0, r.jsx)(c.xBx, {
                                separator: !1,
                                children: (0, r.jsxs)(c.Kqy, {
                                    direction: "vertical",
                                    justify: "space-between",
                                    children: [
                                        (0, r.jsx)(c.olH, {
                                            className: S.closeButton,
                                            onClick: m.onClose,
                                        }),
                                        (0, r.jsx)(c.X6q, {
                                            variant: "heading-xl/bold",
                                            children: E.intl.string(E.t.MWMcg4),
                                        }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)(c.hzk, { children: I }),
                            (0, r.jsxs)(c.mzw, {
                                children: [
                                    (0, r.jsx)(c.zxk, {
                                        variant: "critical-primary",
                                        size: "sm",
                                        text: E.intl.string(E.t.oyYWHB),
                                        type: "submit",
                                        onClick: this.handleDelete,
                                    }),
                                    !e &&
                                        (0, r.jsx)(c.XZJ, {
                                            value: l,
                                            onChange: (e, t) => this.handleToggleResolveFlag(t),
                                            children: E.intl.string(x.default["8yIKen"]),
                                        }),
                                ],
                            }),
                        ],
                    }),
                ),
            });
        }
        return (0, r.jsx)(g.Z.Provider, {
            value: s.guild_id,
            children: n
                ? (0, r.jsx)(a.Modal, {
                      title: _ ? E.intl.string(E.t.aIz1oa) : E.intl.string(E.t.MWMcg4),
                      subtitle: O,
                      actions: [
                          {
                              text: E.intl.string(E.t["ETE/oK"]),
                              onClick: m.onClose,
                              variant: "secondary",
                          },
                          {
                              text: E.intl.string(E.t.oyYWHB),
                              onClick: this.handleDeleteMana,
                              variant: "critical-primary",
                          },
                      ],
                      onClose: m.onClose,
                      transitionState: m.transitionState,
                      children: y,
                  })
                : (0, r.jsx)(
                      c.ConfirmModal,
                      N(
                          P(
                              {
                                  header: _ ? E.intl.string(E.t.aIz1oa) : E.intl.string(E.t.MWMcg4),
                                  confirmText: E.intl.string(E.t.oyYWHB),
                                  cancelText: E.intl.string(E.t["ETE/oK"]),
                                  onConfirm: this.handleDelete,
                              },
                              m,
                          ),
                          { children: I },
                      ),
                  ),
        });
    }
    constructor(...e) {
        super(...e),
            I(this, "state", {
                report: !1,
                resolveFlag: !1,
            }),
            I(this, "handleDelete", () => {
                let { report: e, resolveFlag: t } = this.state,
                    { channel: n, message: r, moderatorReportData: i } = this.props,
                    { moderatorReportChannelId: l, isFlagResolved: o } = null != i ? i : {};
                e
                    ? (0, m.ak)(r, "message_delete_alert", () =>
                          d.Z.deleteMessage(n.id, r.id).then(() => {
                              if (null != l) {
                                  var e, n;
                                  t && !o && _.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n);
                              }
                          }),
                      )
                    : d.Z.deleteMessage(n.id, r.id).then(() => {
                          if (null != l) {
                              var e, n;
                              t && !o && _.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n);
                          }
                      });
            }),
            I(this, "handleDeleteMana", () => {
                var e, t;
                this.handleDelete(), null == (e = (t = this.props).onClose) || e.call(t);
            }),
            I(this, "handleToggleReport", (e) => {
                this.setState({ report: e });
            }),
            I(this, "handleToggleResolveFlag", (e) => {
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
                    ? E.intl.string(E.t.hMRngI)
                    : E.intl.formatToPlainString(E.t["3IRluL"], { channelName: l })),
                (0, r.jsx)(g.Z.Provider, {
                    value: e.guild_id,
                    children: (0, r.jsxs)(
                        c.ConfirmModal,
                        N(
                            P(
                                {
                                    header: E.intl.string(E.t.bKMaZW),
                                    confirmText: E.intl.string(E.t.rOQ5BQ),
                                    cancelText: E.intl.string(E.t["ETE/oK"]),
                                    confirmButtonColor: s.zx.Colors.BRAND,
                                    onConfirm: () => u.Z.pinMessage(e, t.id),
                                },
                                n,
                            ),
                            {
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-md/normal",
                                        className: S.spacing,
                                        children: i,
                                    }),
                                    (0, r.jsx)("div", {
                                        className: S.message,
                                        children: (0, r.jsx)(b.Z, {
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
            (0, r.jsx)(g.Z.Provider, {
                value: e.guild_id,
                children: (0, r.jsxs)(
                    c.ConfirmModal,
                    N(
                        P(
                            {
                                header: E.intl.string(E.t.CFF2vL),
                                confirmText: E.intl.string(E.t.lAU5jI),
                                cancelText: E.intl.string(E.t["ETE/oK"]),
                                onConfirm: () => u.Z.unpinMessage(e, t.id),
                            },
                            n,
                        ),
                        {
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    className: S.spacing,
                                    children: E.intl.string(E.t.NjEPp6),
                                }),
                                (0, r.jsx)("div", {
                                    className: o()(S.message, S.spacing),
                                    children: (0, r.jsx)(b.Z, {
                                        channel: e,
                                        message: t,
                                        disableInteraction: !0,
                                    }),
                                }),
                                (0, r.jsx)(f.Z, { children: E.intl.format(E.t.oCVB3d, {}) }),
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
                w,
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
                N(
                    P(
                        {
                            header: E.intl.string(E.t.aIz1oa),
                            confirmText: E.intl.string(E.t["cY+Ooa"]),
                            cancelText: E.intl.string(E.t["ETE/oK"]),
                            confirmButtonColor: s.zx.Colors.BRAND,
                            onConfirm: () => d.Z.editMessage(e, t, n),
                        },
                        i,
                    ),
                    {
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            className: S.spacing,
                            children: E.intl.string(E.t.grBcMz),
                        }),
                    },
                ),
            ),
        );
    },
};
