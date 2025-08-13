n.d(t, { Z: () => j }), n(997841), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(82659),
    l = n(755721),
    c = n(481060),
    u = n(332148),
    d = n(904245),
    f = n(933557),
    _ = n(576855),
    p = n(724723),
    h = n(372900),
    m = n(726521),
    g = n(294218),
    E = n(501517),
    b = n(699516),
    y = n(594174),
    O = n(630388),
    v = n(970257),
    I = n(981631),
    T = n(388032),
    S = n(130883),
    A = n(934747);
function N(e, t, n) {
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
function C(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = D(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function L(e, t) {
    (0, c.h7j)((n) => {
        let i,
            o = (0, f.F6)(e, y.default, b.Z);
        return (
            (i = e.isPrivate()
                ? T.intl.string(T.t.hMRngI)
                : T.intl.formatToPlainString(T.t["3IRluL"], { channelName: o })),
            (0, r.jsx)(h.Z.Provider, {
                value: e.guild_id,
                children: (0, r.jsxs)(
                    c.ConfirmModal,
                    P(
                        C(
                            {
                                header: T.intl.string(T.t.bKMaZW),
                                confirmText: T.intl.string(T.t.rOQ5BQ),
                                cancelText: T.intl.string(T.t["ETE/oK"]),
                                confirmButtonColor: l.zx.Colors.BRAND,
                                onConfirm: () => u.Z.pinMessage(e, t.id),
                            },
                            n,
                        ),
                        {
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    className: A.spacing,
                                    children: i,
                                }),
                                (0, r.jsx)("div", {
                                    className: A.message,
                                    children: (0, r.jsx)(g.Z, {
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
}
function x(e, t) {
    (0, c.h7j)((n) =>
        (0, r.jsx)(h.Z.Provider, {
            value: e.guild_id,
            children: (0, r.jsxs)(
                c.ConfirmModal,
                P(
                    C(
                        {
                            header: T.intl.string(T.t.CFF2vL),
                            confirmText: T.intl.string(T.t.lAU5jI),
                            cancelText: T.intl.string(T.t["ETE/oK"]),
                            onConfirm: () => u.Z.unpinMessage(e, t.id),
                        },
                        n,
                    ),
                    {
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: "text-md/normal",
                                className: A.spacing,
                                children: T.intl.string(T.t.NjEPp6),
                            }),
                            (0, r.jsx)("div", {
                                className: a()(A.message, A.spacing),
                                children: (0, r.jsx)(g.Z, {
                                    channel: e,
                                    message: t,
                                    disableInteraction: !0,
                                }),
                            }),
                            (0, r.jsx)(_.Z, { children: T.intl.format(T.t.oCVB3d, {}) }),
                        ],
                    },
                ),
            ),
        }),
    );
}
class M extends i.PureComponent {
    render() {
        let e,
            t,
            n = p.Z.getCurrentConfig({ location: "DeleteModal" }).enabled,
            { report: i, resolveFlag: o } = this.state,
            a = this.props,
            { channel: l, message: u, showContextMenuHint: d, moderatorReportData: f } = a,
            m = w(a, ["channel", "message", "showContextMenuHint", "moderatorReportData"]),
            E = l.type === I.d4z.GUILD_ANNOUNCEMENT && (0, O.yE)(u.flags, I.iLy.CROSSPOSTED);
        d &&
            (e = (0, r.jsx)(_.Z, {
                className: A.spacingTop,
                children: T.intl.format(T.t.IxY7Ex, {}),
            })),
            (0, v.vc)(u) &&
                (t = (0, r.jsx)(c.j7V, {
                    value: i,
                    onChange: this.handleToggleReport,
                    hideBorder: !0,
                    className: A.spacingTop,
                    children: T.intl.string(T.t.x0jzo6),
                }));
        let b = E ? T.intl.string(T.t["2kHABQ"]) : T.intl.string(T.t.AMvpS0),
            y = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: A.message,
                        children: (0, r.jsx)(g.Z, {
                            channel: l,
                            message: u,
                            disableInteraction: !0,
                        }),
                    }),
                    t,
                    e,
                ],
            }),
            N = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: "heading-md/medium",
                        className: A.spacing,
                        children: b,
                    }),
                    y,
                ],
            });
        if ((null == f ? void 0 : f.moderatorReportChannelId) != null) {
            let { isFlagResolved: e } = f;
            return (0, r.jsx)(h.Z.Provider, {
                value: l.guild_id,
                children: (0, r.jsxs)(
                    c.Y0X,
                    P(C({ parentComponent: "DeleteModal" }, m), {
                        children: [
                            (0, r.jsx)(c.xBx, {
                                separator: !1,
                                children: (0, r.jsxs)(c.Kqy, {
                                    direction: "vertical",
                                    justify: "space-between",
                                    children: [
                                        (0, r.jsx)(c.olH, {
                                            className: A.closeButton,
                                            onClick: m.onClose,
                                        }),
                                        (0, r.jsx)(c.X6q, {
                                            variant: "heading-xl/bold",
                                            children: T.intl.string(T.t.MWMcg4),
                                        }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)(c.hzk, { children: N }),
                            (0, r.jsxs)(c.mzw, {
                                children: [
                                    (0, r.jsx)(c.zxk, {
                                        variant: "critical-primary",
                                        size: "sm",
                                        text: T.intl.string(T.t.oyYWHB),
                                        type: "submit",
                                        onClick: this.handleDelete,
                                    }),
                                    !e &&
                                        (0, r.jsx)(c.XZJ, {
                                            value: o,
                                            onChange: (e, t) => this.handleToggleResolveFlag(t),
                                            children: T.intl.string(S.default["8yIKen"]),
                                        }),
                                ],
                            }),
                        ],
                    }),
                ),
            });
        }
        return (0, r.jsx)(h.Z.Provider, {
            value: l.guild_id,
            children: n
                ? (0, r.jsx)(s.Modal, {
                      title: E ? T.intl.string(T.t.aIz1oa) : T.intl.string(T.t.MWMcg4),
                      subtitle: b,
                      actions: [
                          {
                              text: T.intl.string(T.t["ETE/oK"]),
                              onClick: m.onClose,
                              variant: "secondary",
                          },
                          {
                              text: T.intl.string(T.t.oyYWHB),
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
                      P(
                          C(
                              {
                                  header: E ? T.intl.string(T.t.aIz1oa) : T.intl.string(T.t.MWMcg4),
                                  confirmText: T.intl.string(T.t.oyYWHB),
                                  cancelText: T.intl.string(T.t["ETE/oK"]),
                                  onConfirm: this.handleDelete,
                              },
                              m,
                          ),
                          { children: N },
                      ),
                  ),
        });
    }
    constructor(...e) {
        super(...e),
            N(this, "state", {
                report: !1,
                resolveFlag: !1,
            }),
            N(this, "handleDelete", () => {
                let { report: e, resolveFlag: t } = this.state,
                    { channel: n, message: r, moderatorReportData: i } = this.props,
                    { moderatorReportChannelId: o, isFlagResolved: a } = null != i ? i : {};
                e
                    ? (0, m.ak)(r, "message_delete_alert", () =>
                          d.Z.deleteMessage(n.id, r.id).then(() => {
                              if (null != o) {
                                  var e, n;
                                  t && !a && E.Z.resolveFlag(o), null == (e = (n = this.props).onClose) || e.call(n);
                              }
                          }),
                      )
                    : d.Z.deleteMessage(n.id, r.id).then(() => {
                          if (null != o) {
                              var e, n;
                              t && !a && E.Z.resolveFlag(o), null == (e = (n = this.props).onClose) || e.call(n);
                          }
                      });
            }),
            N(this, "handleDeleteMana", () => {
                var e, t;
                this.handleDelete(), null == (e = (t = this.props).onClose) || e.call(t);
            }),
            N(this, "handleToggleReport", (e) => {
                this.setState({ report: e });
            }),
            N(this, "handleToggleResolveFlag", (e) => {
                this.setState({ resolveFlag: e });
            });
    }
}
let j = {
    confirmPin: L,
    confirmUnpin: x,
    confirmDelete: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, c.h7j)((o) =>
            (0, r.jsx)(
                M,
                C(
                    {
                        channel: e,
                        message: t,
                        showContextMenuHint: n,
                        moderatorReportData: i,
                    },
                    o,
                ),
            ),
        );
    },
    confirmEdit: function (e, t, n) {
        (0, c.h7j)((i) =>
            (0, r.jsx)(
                c.ConfirmModal,
                P(
                    C(
                        {
                            header: T.intl.string(T.t.aIz1oa),
                            confirmText: T.intl.string(T.t["cY+Ooa"]),
                            cancelText: T.intl.string(T.t["ETE/oK"]),
                            confirmButtonColor: l.zx.Colors.BRAND,
                            onConfirm: () => d.Z.editMessage(e, t, n),
                        },
                        i,
                    ),
                    {
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            className: A.spacing,
                            children: T.intl.string(T.t.grBcMz),
                        }),
                    },
                ),
            ),
        );
    },
};
