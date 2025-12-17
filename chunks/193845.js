n.d(t, { default: () => _ }), n(539854);
var r = n(54381),
    i = n(473749),
    s = n(149765),
    a = n(793030),
    l = n(481060),
    o = n(422559),
    c = n(601964),
    d = n(485386),
    f = n(768581),
    m = n(700785),
    u = n(84058),
    x = n(981631),
    p = n(135899),
    b = n(388032),
    h = n(499523);
function j(e) {
    let { guild: t } = e,
        n = f.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 120,
        });
    return (0, r.jsxs)(l.xBx, {
        className: h.header,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)("div", {
                className: h.headerIconContainer,
                children:
                    null != n
                        ? (0, r.jsx)(l.qEK, {
                              src: n,
                              "aria-label": t.name,
                              size: l.EFr.SIZE_120,
                              className: h.__invalid_guildIcon,
                          })
                        : (0, r.jsx)("div", {
                              className: h.acronym,
                              children: (0, c.gM)(t),
                          }),
            }),
            (0, r.jsxs)("div", {
                className: h.headerText,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-lg/extrabold",
                        color: "text-strong",
                        children: b.intl.string(b.t.MatO7M),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        children: b.intl.string(b.t.VyPIeu),
                    }),
                ],
            }),
        ],
    });
}
let g = (e) => (e.toString() === x.Plq.MENTION_EVERYONE.toString() ? b.intl.string(b.t.yCpsQw) : (0, o.wt)(e));
function v(e) {
    let { permissions: t } = e;
    return (0, r.jsxs)("div", {
        className: h.tableContainer,
        children: [
            (0, r.jsx)(l.Text, {
                className: h.tableHeader,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: b.intl.string(b.t["0WZKI4"]),
            }),
            (0, r.jsx)("div", {
                className: h.permissionsTable,
                children: t.map((e, t) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: h.permissionRow,
                            children: [
                                (0, r.jsx)("div", { className: h.bulletWarning }),
                                (0, r.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: g(e),
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
function y(e) {
    let { permissions: t } = e;
    return (0, r.jsxs)("div", {
        className: h.tableContainer,
        children: [
            (0, r.jsx)(l.Text, {
                className: h.tableHeader,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: b.intl.string(b.t.Yo5qlq),
            }),
            (0, r.jsx)("div", {
                className: h.permissionsTable,
                children: t.map((e, t) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: h.permissionRow,
                            children: [
                                (0, r.jsx)("div", { className: h.bullet }),
                                (0, r.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: g(e),
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
function O(e) {
    let { permissions: t } = e,
        { enabledPermissions: n, disabledPermissions: i } = t;
    return (0, r.jsx)(l.hzk, {
        "data-migration-pending": !0,
        children: (0, r.jsxs)("div", {
            className: h.table,
            children: [(0, r.jsx)(v, { permissions: n }), (0, r.jsx)(y, { permissions: i })],
        }),
    });
}
function N(e) {
    let { onConfirm: t, onDismiss: n } = e;
    return (0, r.jsx)(l.mzw, {
        className: h.footer,
        "data-migration-pending": !0,
        children: (0, r.jsxs)(a.hE2, {
            fullWidth: !0,
            children: [
                (0, r.jsx)(a.zxk, {
                    variant: "secondary",
                    text: b.intl.string(b.t.gWQZvr),
                    onClick: n,
                }),
                (0, r.jsx)(a.zxk, {
                    text: b.intl.string(b.t.iOSdAW),
                    onClick: t,
                }),
            ],
        }),
    });
}
function _(e) {
    let { guild: t, transitionState: n, onClose: a } = e,
        o = i.useMemo(() => {
            let e = [],
                n = [];
            return (
                p.$X.map((r) => {
                    m.oz(r, t) ? e.push(r) : n.push(r);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: n,
                }
            );
        }, [t]);
    if (null == t) return null;
    let c = async () => {
        var e, n;
        let r = null != t ? d.Z.getEveryoneRole(t) : void 0;
        if (null == r) return;
        let i = s.Od(r.permissions, p.mu);
        await (0, u.Gf)(t.id, [
            ((e = (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, r)),
            (n = n = { permissions: i }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  }),
            e),
        ]),
            a();
    };
    return (0, r.jsxs)(l.Y0X, {
        transitionState: n,
        size: l.CgR.SMALL,
        className: h.modal,
        parentComponent: "DisableRiskyPermsModal",
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(j, { guild: t }),
            (0, r.jsx)(O, { permissions: o }),
            (0, r.jsx)(N, {
                onConfirm: c,
                onDismiss: () => {
                    a();
                },
            }),
        ],
    });
}
