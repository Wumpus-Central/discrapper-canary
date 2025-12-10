n.d(e, { default: () => x }), n(388685), n(539854);
var i = n(54381),
    o = n(473749),
    l = n(149765),
    s = n(442837),
    a = n(704215),
    r = n(692547),
    c = n(28664),
    d = n(159691),
    _ = n(481060),
    u = n(434404),
    p = n(84058),
    E = n(422559),
    S = n(485386),
    f = n(700785),
    N = n(645041),
    O = n(981631),
    I = n(921944),
    m = n(135899),
    T = n(388032),
    h = n(281718);
function b(t) {
    let { guild: e } = t,
        n = (0, s.e7)([S.Z], () => S.Z.getEveryoneRole(e));
    if (null == n) return null;
    let { name: o, color: l } = n;
    return (0, i.jsxs)("span", {
        className: h.roleRow,
        children: [
            (0, i.jsx)(_.FhE, {
                className: h.roleDot,
                color: l.toString(),
                background: !1,
                tooltip: !1,
            }),
            (0, i.jsx)(_.Text, {
                className: h.roleName,
                variant: "text-sm/medium",
                color: "interactive-text-active",
                children: o,
            }),
        ],
    });
}
let R = (t) => (t.toString() === O.Plq.MENTION_EVERYONE.toString() ? T.intl.string(T.t.yCpsQw) : (0, E.wt)(t));
function y(t) {
    let { permissions: e, step: n } = t;
    return 2 === n
        ? null
        : (0, i.jsxs)("div", {
              className: h.tableContainer,
              children: [
                  (0, i.jsx)(_.Text, {
                      className: h.tableHeader,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: 0 === n ? T.intl.string(T.t["0WZKI4"]) : T.intl.string(T.t.xU8RDk),
                  }),
                  (0, i.jsx)("div", {
                      className: h.permissionsTable,
                      children: e.map((t, e) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: h.permissionRow,
                                  children: [
                                      (0, i.jsx)("div", { className: 0 === n ? h.bulletPositive : h.bulletWarning }),
                                      (0, i.jsx)(_.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-default",
                                          children: R(t),
                                      }),
                                  ],
                              },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
function C(t) {
    let { permissions: e, step: n } = t;
    return 0 === e.length && 2 !== n
        ? null
        : (2 === n && (e = m.$X),
          (0, i.jsxs)("div", {
              className: h.tableContainer,
              children: [
                  (0, i.jsx)(_.Text, {
                      className: h.tableHeader,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: 2 === n ? T.intl.string(T.t.FgMS6i) : T.intl.string(T.t.Yo5qlq),
                  }),
                  (0, i.jsx)("div", {
                      className: h.permissionsTable,
                      children: e.map((t, e) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: h.permissionRow,
                                  children: [
                                      (0, i.jsx)("div", { className: h.bullet }),
                                      (0, i.jsx)(_.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: R(t),
                                      }),
                                  ],
                              },
                              e,
                          ),
                      ),
                  }),
              ],
          }));
}
function g(t) {
    let { permissions: e, step: n } = t,
        { enabledPermissions: o, disabledPermissions: l } = e;
    return 0 === o.length && 2 !== n
        ? null
        : (0, i.jsxs)("div", {
              className: h.table,
              children: [
                  2 !== n
                      ? (0, i.jsx)(y, {
                            permissions: o,
                            step: n,
                        })
                      : null,
                  (0, i.jsx)(C, {
                      permissions: l,
                      step: n,
                  }),
              ],
          });
}
function L(t) {
    let { guild: e, permissions: n, step: o, canEveryoneModerate: l, isDefaultNotificationsAllMessages: s } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s
                ? (0, i.jsxs)("div", {
                      className: h.checklistRow,
                      children: [
                          (0, i.jsx)(_.owK, {
                              size: "md",
                              className: h.checklistIcon,
                              color: r.Z.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: r.Z.unsafe_rawColors.WHITE_100.css,
                          }),
                          (0, i.jsx)(_.Text, {
                              variant: "text-md/normal",
                              children: T.intl.format(T.t.K8Eg4P, {
                                  infoHook: () =>
                                      (0, i.jsx)(c.u, {
                                          text: T.intl.string(T.t["3h2WyM"]),
                                          "aria-label": T.intl.string(T.t["3h2WyM"]),
                                          children: (0, i.jsx)(_.d3s, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: h.icon,
                                          }),
                                      }),
                              }),
                          }),
                      ],
                  })
                : null,
            l
                ? (0, i.jsxs)("div", {
                      className: h.checklistRow,
                      children: [
                          (0, i.jsx)(_.owK, {
                              size: "md",
                              className: h.checklistIcon,
                              color: r.Z.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: r.Z.unsafe_rawColors.WHITE_100.css,
                          }),
                          (0, i.jsx)(_.Text, {
                              variant: "text-md/normal",
                              children: T.intl.string(T.t.LfeFFr),
                          }),
                          (0, i.jsx)(b, { guild: e }),
                      ],
                  })
                : null,
            (0, i.jsx)(g, {
                permissions: n,
                step: o,
            }),
        ],
    });
}
function x(t) {
    let { guild: e, canEveryoneModerate: n, isDefaultNotificationsAllMessages: s, transitionState: r, onClose: c } = t,
        [_, E] = o.useState(0),
        h = o.useMemo(() => {
            let t = [],
                n = [];
            return (
                m.$X.map((i) => {
                    f.oz(i, e) ? t.push(i) : n.push(i);
                }),
                {
                    enabledPermissions: t,
                    disabledPermissions: n,
                }
            );
        }, [e]);
    if (null == e) return null;
    let b = () => {
            n &&
                (() => {
                    var t, n;
                    let i = S.Z.getEveryoneRole(e),
                        o = l.Od(i.permissions, m.mu);
                    (0, p.Gf)(e.id, [
                        ((t = (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (t) {
                                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (e) {
                                        var i;
                                        (i = n[e]),
                                            e in t
                                                ? Object.defineProperty(t, e, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (t[e] = i);
                                    });
                            }
                            return t;
                        })({}, i)),
                        (n = n = { permissions: o }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (t, e) {
                                  var n = Object.keys(t);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(t);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t),
                    ]);
                })(),
                s &&
                    (u.Z.updateGuild({ defaultMessageNotifications: O.bL.ONLY_MENTIONS }),
                    u.Z.saveGuild(e.id, { defaultMessageNotifications: O.bL.ONLY_MENTIONS }));
        },
        R = [
            ...(0 === _
                ? [
                      {
                          variant: "secondary",
                          text: T.intl.string(T.t.gWQZvr),
                          onClick: () => {
                              c(), (0, N.Qd)(a.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e.id, !0, I.L.DISMISS);
                          },
                      },
                  ]
                : []),
            {
                variant: "primary",
                text: 0 === _ ? (n ? T.intl.string(T.t.R7GC7b) : T.intl.string(T.t.iOSdAW)) : T.intl.string(T.t.mVuDq5),
                onClick: () => {
                    var t, i;
                    n ||
                        (b(),
                        c(),
                        (0, N.Qd)(
                            a.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
                            null != (t = null == e ? void 0 : e.id) ? t : "",
                            !0,
                            I.L.PRIMARY,
                        )),
                        0 === _
                            ? (E(1), setTimeout(() => E(2), 3000))
                            : 2 === _ &&
                              (b(),
                              c(),
                              (0, N.Qd)(
                                  a.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
                                  null != (i = null == e ? void 0 : e.id) ? i : "",
                                  !0,
                                  I.L.PRIMARY,
                              ));
                },
                loading: 1 === _,
            },
        ];
    return (0, i.jsx)(d.u_l, {
        transitionState: r,
        onClose: c,
        size: "md",
        title: n ? T.intl.string(T.t["7/ux15"]) : T.intl.string(T.t.sRcn4z),
        subtitle: n ? T.intl.string(T.t.aliKPx) : T.intl.string(T.t.F4KDOH),
        actions: R,
        children: (0, i.jsx)(L, {
            guild: e,
            permissions: h,
            step: _,
            canEveryoneModerate: n,
            isDefaultNotificationsAllMessages: s,
        }),
    });
}
