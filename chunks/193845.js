n.d(t, { default: () => f }), n(539854);
var i = n(54381),
    a = n(473749),
    o = n(149765),
    r = n(755721),
    l = n(481060),
    s = n(422559),
    c = n(601964),
    d = n(485386),
    _ = n(768581),
    p = n(700785),
    u = n(84058),
    m = n(981631),
    E = n(135899),
    O = n(388032),
    S = n(56726);
function h(e) {
    let { guild: t } = e,
        n = _.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 120,
        });
    return (0, i.jsxs)(l.xBx, {
        className: S.header,
        "data-migration-pending": !0,
        children: [
            (0, i.jsx)("div", {
                className: S.headerIconContainer,
                children:
                    null != n
                        ? (0, i.jsx)(l.qEK, {
                              src: n,
                              "aria-label": t.name,
                              size: l.EFr.SIZE_120,
                              className: S.__invalid_guildIcon,
                          })
                        : (0, i.jsx)("div", {
                              className: S.acronym,
                              children: (0, c.gM)(t),
                          }),
            }),
            (0, i.jsxs)("div", {
                className: S.headerText,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: "heading-lg/extrabold",
                        color: "header-primary",
                        children: O.intl.string(O.t.MatO7M),
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "header-primary",
                        children: O.intl.string(O.t.VyPIeu),
                    }),
                ],
            }),
        ],
    });
}
let I = (e) => (e.toString() === m.Plq.MENTION_EVERYONE.toString() ? O.intl.string(O.t.yCpsQw) : (0, s.wt)(e));
function T(e) {
    let { permissions: t } = e;
    return (0, i.jsxs)("div", {
        className: S.tableContainer,
        children: [
            (0, i.jsx)(l.Text, {
                className: S.tableHeader,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: O.intl.string(O.t["0WZKI4"]),
            }),
            (0, i.jsx)("div", {
                className: S.permissionsTable,
                children: t.map((e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: S.permissionRow,
                            children: [
                                (0, i.jsx)("div", { className: S.bulletWarning }),
                                (0, i.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: I(e),
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
    let { permissions: t } = e;
    return (0, i.jsxs)("div", {
        className: S.tableContainer,
        children: [
            (0, i.jsx)(l.Text, {
                className: S.tableHeader,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: O.intl.string(O.t.Yo5qlq),
            }),
            (0, i.jsx)("div", {
                className: S.permissionsTable,
                children: t.map((e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: S.permissionRow,
                            children: [
                                (0, i.jsx)("div", { className: S.bullet }),
                                (0, i.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: I(e),
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
    let { permissions: t } = e,
        { enabledPermissions: n, disabledPermissions: a } = t;
    return (0, i.jsx)(l.hzk, {
        "data-migration-pending": !0,
        children: (0, i.jsxs)("div", {
            className: S.table,
            children: [(0, i.jsx)(T, { permissions: n }), (0, i.jsx)(N, { permissions: a })],
        }),
    });
}
function b(e) {
    let { onConfirm: t, onDismiss: n } = e;
    return (0, i.jsxs)(l.mzw, {
        className: S.footer,
        "data-migration-pending": !0,
        children: [
            (0, i.jsx)(l.Button, {
                variant: "primary",
                text: O.intl.string(O.t.iOSdAW),
                onClick: t,
            }),
            (0, i.jsx)(r.zx, {
                look: r.zx.Looks.LINK,
                onClick: n,
                color: r.zx.Colors.PRIMARY,
                children: (0, i.jsx)(l.Text, {
                    variant: "text-sm/semibold",
                    color: "header-primary",
                    children: O.intl.string(O.t.gWQZvr),
                }),
            }),
        ],
    });
}
function f(e) {
    let { guild: t, transitionState: n, onClose: r } = e,
        s = a.useMemo(() => {
            let e = [],
                n = [];
            return (
                E.$X.map((i) => {
                    p.oz(i, t) ? e.push(i) : n.push(i);
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
        let a = o.Od(i.permissions, E.mu);
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
        className: S.modal,
        parentComponent: "DisableRiskyPermsModal",
        "data-migration-pending": !0,
        children: [
            (0, i.jsx)(h, { guild: t }),
            (0, i.jsx)(y, { permissions: s }),
            (0, i.jsx)(b, {
                onConfirm: c,
                onDismiss: () => {
                    r();
                },
            }),
        ],
    });
}
