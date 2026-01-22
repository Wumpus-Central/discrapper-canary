n.d(t, {
    A: () => N,
}),
    n(938796),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(665260),
    o = n(158954),
    c = n(314116),
    u = n(397927),
    d = n(687709),
    f = n(843472),
    p = n(47167),
    h = n(12351),
    b = n(386467),
    g = n(928658),
    m = n(226698),
    A = n(994500),
    y = n(287809),
    O = n(628691),
    j = n(636922),
    v = n(652215),
    x = n(985018),
    E = n(641131),
    _ = n(378720);

function C(e, t, n) {
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

function S(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
class I extends l.PureComponent {
    render() {
        let e,
            t,
            { report: n, resolveFlag: l } = this.state,
            i = this.props,
            { channel: a, message: c, showContextMenuHint: d, moderatorReportData: f } = i,
            p = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    l,
                    i = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                        (r = n[l]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                    return i;
                }
                if (
                    ((i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = {},
                            i = Object.getOwnPropertyNames(e);
                        for (r = 0; r < i.length; r++)
                            (n = i[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (l[n] = e[n]);
                        return l;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                        (r = n[l]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            })(i, ["channel", "message", "showContextMenuHint", "moderatorReportData"]),
            g = a.type === v.rbe.GUILD_ANNOUNCEMENT && (0, s.Lt)(c.flags, v.pr7.CROSSPOSTED);
        d &&
            (e = (0, r.jsx)(h.A, {
                className: _.Vc,
                children: x.intl.format(x.t.IxY7E6, {}),
            })),
            (0, O.AR)(c) &&
                (t = (0, r.jsx)("div", {
                    className: _.Vc,
                    children: (0, r.jsx)(u.dOG, {
                        label: x.intl.string(x.t.x0jzo9),
                        checked: n,
                        onChange: this.handleToggleReport,
                    }),
                }));
        let m = g ? x.intl.string(x.t["2kHABX"]) : x.intl.string(x.t.AMvpS4),
            A = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: _.iU,
                        children: (0, r.jsx)(j.A, {
                            channel: a,
                            message: c,
                            disableInteraction: !0,
                        }),
                    }),
                    t,
                    e,
                ],
            });
        if ((null == f ? void 0 : f.moderatorReportChannelId) != null) {
            var y, C;
            let { isFlagResolved: e } = f;
            return (0, r.jsx)(b.A.Provider, {
                value: a.guild_id,
                children: (0, r.jsx)(
                    o.Modal,
                    ((y = S(
                        {
                            title: x.intl.string(x.t.MWMcg7),
                            subtitle: m,
                            actions: [
                                {
                                    variant: "critical-primary",
                                    text: x.intl.string(x.t.oyYWHE),
                                    onClick: this.handleDelete,
                                },
                            ],
                            actionBarInput: e
                                ? void 0
                                : (0, r.jsx)(u.Checkbox, {
                                      checked: l,
                                      label: x.intl.string(E.default["8yIKem"]),
                                      onChange: (e) => this.handleToggleResolveFlag(e),
                                  }),
                        },
                        p,
                    )),
                    (C = C =
                        {
                            children: A,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(C))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(C)).forEach(function (e) {
                              Object.defineProperty(y, e, Object.getOwnPropertyDescriptor(C, e));
                          }),
                    y),
                ),
            });
        }
        return (0, r.jsx)(b.A.Provider, {
            value: a.guild_id,
            children: (0, r.jsx)(o.Modal, {
                title: g ? x.intl.string(x.t.aIz1oV) : x.intl.string(x.t.MWMcg7),
                subtitle: m,
                actions: [
                    {
                        text: x.intl.string(x.t["ETE/oC"]),
                        onClick: p.onClose,
                        variant: "secondary",
                    },
                    {
                        text: x.intl.string(x.t.oyYWHE),
                        onClick: this.handleDeleteMana,
                        variant: "critical-primary",
                    },
                ],
                onClose: p.onClose,
                transitionState: p.transitionState,
                children: A,
            }),
        });
    }
    constructor(...e) {
        super(...e),
            C(this, "state", {
                report: !1,
                resolveFlag: !1,
            }),
            C(this, "handleDelete", () => {
                let { report: e, resolveFlag: t } = this.state,
                    { channel: n, message: r, moderatorReportData: l } = this.props,
                    { moderatorReportChannelId: i, isFlagResolved: a } = null != l ? l : {};
                e
                    ? (0, g.V2)(r, "message_delete_alert", () =>
                          f.A.deleteMessage(n.id, r.id).then(() => {
                              if (null != i) {
                                  var e, n;
                                  t && !a && m.A.resolveFlag(i), null == (e = (n = this.props).onClose) || e.call(n);
                              }
                          }),
                      )
                    : f.A.deleteMessage(n.id, r.id).then(() => {
                          if (null != i) {
                              var e, n;
                              t && !a && m.A.resolveFlag(i), null == (e = (n = this.props).onClose) || e.call(n);
                          }
                      });
            }),
            C(this, "handleDeleteMana", () => {
                var e, t;
                this.handleDelete(), null == (e = (t = this.props).onClose) || e.call(t);
            }),
            C(this, "handleToggleReport", (e) => {
                this.setState({
                    report: e,
                });
            }),
            C(this, "handleToggleResolveFlag", (e) => {
                this.setState({
                    resolveFlag: e,
                });
            });
    }
}
let N = {
    confirmPin: function (e, t) {
        let n,
            l = (0, p.m1)(e, y.default, A.A);
        (n = e.isPrivate()
            ? x.intl.string(x.t.hMRngA)
            : x.intl.formatToPlainString(x.t["3IRluI"], {
                  channelName: l,
              })),
            (0, c.A)({
                title: x.intl.string(x.t.bKMaZX),
                subtitle: n,
                confirmText: x.intl.string(x.t.rOQ5BX),
                variant: "primary",
                onConfirm: () => {
                    d.A.pinMessage(e, t.id);
                },
                cancelText: x.intl.string(x.t["ETE/oC"]),
                children: (0, r.jsx)("div", {
                    className: _.iU,
                    children: (0, r.jsx)(j.A, {
                        channel: e,
                        message: t,
                        animateAvatar: !1,
                        disableInteraction: !0,
                    }),
                }),
            });
    },
    confirmUnpin: function (e, t) {
        (0, c.A)({
            title: x.intl.string(x.t.CFF2vL),
            subtitle: x.intl.string(x.t.NjEPp7),
            confirmText: x.intl.string(x.t.lAU5jB),
            variant: "critical",
            onConfirm: () => {
                d.A.unpinMessage(e, t.id);
            },
            cancelText: x.intl.string(x.t["ETE/oC"]),
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: a()(_.iU, _.YK),
                        children: (0, r.jsx)(j.A, {
                            channel: e,
                            message: t,
                            disableInteraction: !0,
                        }),
                    }),
                    (0, r.jsx)(h.A, {
                        children: x.intl.format(x.t.oCVB3Y, {}),
                    }),
                ],
            }),
        });
    },
    confirmDelete: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, u.qfG)((i) =>
            (0, r.jsx)(
                I,
                S(
                    {
                        channel: e,
                        message: t,
                        showContextMenuHint: n,
                        moderatorReportData: l,
                    },
                    i,
                ),
            ),
        );
    },
    confirmEdit: function (e, t, n) {
        (0, c.A)({
            title: x.intl.string(x.t.aIz1oV),
            subtitle: x.intl.string(x.t.grBcM8),
            confirmText: x.intl.string(x.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                f.A.editMessage(e, t, n);
            },
            cancelText: x.intl.string(x.t["ETE/oC"]),
        });
    },
};
