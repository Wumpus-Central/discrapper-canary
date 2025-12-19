n.d(t, { default: () => y }), n(539854);
var i = n(54381),
    a = n(473749),
    o = n(149765),
    r = n(793030),
    l = n(481060),
    s = n(422559),
    c = n(601964),
    d = n(485386),
    p = n(768581),
    _ = n(700785),
    u = n(84058),
    f = n(981631),
    m = n(135899),
    E = n(388032),
    O = n(499523);
function S(e) {
    let { guild: t } = e,
        n = p.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 120,
        });
    return (0, i.jsxs)(l.xBx, {
        className: O.header,
        "data-migration-pending": !0,
        children: [
            (0, i.jsx)("div", {
                className: O.headerIconContainer,
                children:
                    null != n
                        ? (0, i.jsx)(l.qEK, {
                              src: n,
                              "aria-label": t.name,
                              size: l.EFr.SIZE_120,
                              className: O.__invalid_guildIcon,
                          })
                        : (0, i.jsx)("div", {
                              className: O.acronym,
                              children: (0, c.gM)(t),
                          }),
            }),
            (0, i.jsxs)("div", {
                className: O.headerText,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: "heading-lg/extrabold",
                        color: "text-strong",
                        children: E.intl.string(E.t.MatO7M),
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        children: E.intl.string(E.t.VyPIeu),
                    }),
                ],
            }),
        ],
    });
}
let h = (e) => (e.toString() === f.Plq.MENTION_EVERYONE.toString() ? E.intl.string(E.t.yCpsQw) : (0, s.wt)(e));
function T(e) {
    let { permissions: t } = e;
    return (0, i.jsxs)("div", {
        className: O.tableContainer,
        children: [
            (0, i.jsx)(l.Text, {
                className: O.tableHeader,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: E.intl.string(E.t["0WZKI4"]),
            }),
            (0, i.jsx)("div", {
                className: O.permissionsTable,
                children: t.map((e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: O.permissionRow,
                            children: [
                                (0, i.jsx)("div", { className: O.bulletWarning }),
                                (0, i.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: h(e),
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
function I(e) {
    let { permissions: t } = e;
    return (0, i.jsxs)("div", {
        className: O.tableContainer,
        children: [
            (0, i.jsx)(l.Text, {
                className: O.tableHeader,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: E.intl.string(E.t.Yo5qlq),
            }),
            (0, i.jsx)("div", {
                className: O.permissionsTable,
                children: t.map((e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: O.permissionRow,
                            children: [
                                (0, i.jsx)("div", { className: O.bullet }),
                                (0, i.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: h(e),
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
function N(e) {
    let { permissions: t } = e,
        { enabledPermissions: n, disabledPermissions: a } = t;
    return (0, i.jsx)(l.hzk, {
        "data-migration-pending": !0,
        children: (0, i.jsxs)("div", {
            className: O.table,
            children: [(0, i.jsx)(T, { permissions: n }), (0, i.jsx)(I, { permissions: a })],
        }),
    });
}
function b(e) {
    let { onConfirm: t, onDismiss: n } = e;
    return (0, i.jsx)(l.mzw, {
        className: O.footer,
        "data-migration-pending": !0,
        children: (0, i.jsxs)(r.hE2, {
            fullWidth: !0,
            children: [
                (0, i.jsx)(r.zxk, {
                    variant: "secondary",
                    text: E.intl.string(E.t.gWQZvr),
                    onClick: n,
                }),
                (0, i.jsx)(r.zxk, {
                    text: E.intl.string(E.t.iOSdAW),
                    onClick: t,
                }),
            ],
        }),
    });
}
function y(e) {
    let { guild: t, transitionState: n, onClose: r } = e,
        s = a.useMemo(() => {
            let e = [],
                n = [];
            return (
                m.$X.map((i) => {
                    _.oz(i, t) ? e.push(i) : n.push(i);
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
        let i = null != t ? d.Z.getEveryoneRole(t) : void 0;
        if (null == i) return;
        let a = o.Od(i.permissions, m.mu);
        await (0, u.Gf)(t.id, [
            ((e = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, i)),
            (n = n = { permissions: a }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  }),
            e),
        ]),
            r();
    };
    return (0, i.jsxs)(l.Y0X, {
        transitionState: n,
        size: l.CgR.SMALL,
        className: O.modal,
        parentComponent: "DisableRiskyPermsModal",
        "data-migration-pending": !0,
        children: [
            (0, i.jsx)(S, { guild: t }),
            (0, i.jsx)(N, { permissions: s }),
            (0, i.jsx)(b, {
                onConfirm: c,
                onDismiss: () => {
                    r();
                },
            }),
        ],
    });
}
