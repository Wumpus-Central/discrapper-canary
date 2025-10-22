n.d(t, { default: () => D }), n(388685), n(539854);
var i = n(951288),
    a = n(647438),
    o = n(149765),
    s = n(442837),
    r = n(704215),
    l = n(692547),
    c = n(28664),
    d = n(755721),
    _ = n(481060),
    u = n(388905),
    p = n(434404),
    f = n(84058),
    m = n(422559),
    E = n(601964),
    N = n(485386),
    S = n(768581),
    I = n(700785),
    h = n(645041),
    O = n(981631),
    T = n(921944),
    x = n(135899),
    g = n(388032),
    b = n(59067);
function C(e) {
    let { guild: t, headerText: a, headerSubtext: o, step: s } = e,
        r = S.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 120,
        });
    return (0, i.jsxs)(_.xBx, {
        className: b.header,
        children: [
            (0, i.jsxs)("div", {
                className: b.headerIconContainer,
                children: [
                    null != r
                        ? (0, i.jsx)(_.qEK, {
                              src: r,
                              "aria-label": t.name,
                              size: _.EFr.SIZE_120,
                              className: b.__invalid_guildIcon,
                          })
                        : (0, i.jsx)("div", {
                              className: b.acronym,
                              children: (0, E.gM)(t),
                          }),
                    2 === s
                        ? (0, i.jsx)(_.owK, {
                              size: "md",
                              className: b.greenPing,
                              color: l.Z.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: l.Z.unsafe_rawColors.WHITE_100.css,
                          })
                        : (0, i.jsx)(u.Ee, {
                              src: n(173326),
                              className: b.redPing,
                          }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: b.headerText,
                children: [
                    (0, i.jsx)(_.Heading, {
                        variant: "heading-lg/extrabold",
                        color: "header-primary",
                        children: a,
                    }),
                    (0, i.jsx)(_.Text, {
                        variant: "text-md/normal",
                        color: "header-primary",
                        children: o,
                    }),
                ],
            }),
        ],
    });
}
function y(e) {
    let { guild: t } = e,
        n = (0, s.e7)([N.Z], () => N.Z.getEveryoneRole(t));
    if (null == n) return null;
    let { name: a, color: o } = n;
    return (0, i.jsxs)("span", {
        className: b.roleRow,
        children: [
            (0, i.jsx)(_.FhE, {
                className: b.roleDot,
                color: o.toString(),
                background: !1,
                tooltip: !1,
            }),
            (0, i.jsx)(_.Text, {
                className: b.roleName,
                variant: "text-sm/medium",
                color: "interactive-active",
                children: a,
            }),
        ],
    });
}
let R = (e) => (e.toString() === O.Plq.MENTION_EVERYONE.toString() ? g.intl.string(g.t.yCpsQw) : (0, m.wt)(e));
function j(e) {
    let { permissions: t, step: n } = e;
    return 2 === n
        ? null
        : (0, i.jsxs)("div", {
              className: b.tableContainer,
              children: [
                  (0, i.jsx)(_.Text, {
                      className: b.tableHeader,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: 0 === n ? g.intl.string(g.t["0WZKI4"]) : g.intl.string(g.t.xU8RDk),
                  }),
                  (0, i.jsx)("div", {
                      className: b.permissionsTable,
                      children: t.map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: b.permissionRow,
                                  children: [
                                      (0, i.jsx)("div", { className: 0 === n ? b.bulletPositive : b.bulletWarning }),
                                      (0, i.jsx)(_.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-default",
                                          children: R(e),
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
function L(e) {
    let { permissions: t, step: n } = e;
    return 0 === t.length && 2 !== n
        ? null
        : (2 === n && (t = x.$X),
          (0, i.jsxs)("div", {
              className: b.tableContainer,
              children: [
                  (0, i.jsx)(_.Text, {
                      className: b.tableHeader,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: 2 === n ? g.intl.string(g.t.FgMS6i) : g.intl.string(g.t.Yo5qlq),
                  }),
                  (0, i.jsx)("div", {
                      className: b.permissionsTable,
                      children: t.map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: b.permissionRow,
                                  children: [
                                      (0, i.jsx)("div", { className: b.bullet }),
                                      (0, i.jsx)(_.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: R(e),
                                      }),
                                  ],
                              },
                              t,
                          ),
                      ),
                  }),
              ],
          }));
}
function v(e) {
    let { permissions: t, step: n } = e,
        { enabledPermissions: a, disabledPermissions: o } = t;
    return 0 === a.length && 2 !== n
        ? null
        : (0, i.jsxs)("div", {
              className: b.table,
              children: [
                  2 !== n
                      ? (0, i.jsx)(j, {
                            permissions: a,
                            step: n,
                        })
                      : null,
                  (0, i.jsx)(L, {
                      permissions: o,
                      step: n,
                  }),
              ],
          });
}
function U(e) {
    let { guild: t, permissions: n, step: a, canEveryoneModerate: o, isDefaultNotificationsAllMessages: s } = e;
    return (0, i.jsx)(_.hzk, {
        children: (0, i.jsxs)("div", {
            className: b.updatedForm,
            children: [
                s
                    ? (0, i.jsxs)("div", {
                          className: b.checklistRow,
                          children: [
                              (0, i.jsx)(_.owK, {
                                  size: "md",
                                  className: b.checklistIcon,
                                  color: l.Z.unsafe_rawColors.GREEN_360.css,
                                  secondaryColor: l.Z.unsafe_rawColors.WHITE_100.css,
                              }),
                              (0, i.jsx)(_.Text, {
                                  variant: "text-md/normal",
                                  children: g.intl.format(g.t.K8Eg4P, {
                                      infoHook: () =>
                                          (0, i.jsx)(c.u, {
                                              text: g.intl.string(g.t["3h2WyM"]),
                                              "aria-label": g.intl.string(g.t["3h2WyM"]),
                                              children: (0, i.jsx)(_.d3s, {
                                                  size: "xs",
                                                  color: "currentColor",
                                                  className: b.icon,
                                              }),
                                          }),
                                  }),
                              }),
                          ],
                      })
                    : null,
                o
                    ? (0, i.jsxs)("div", {
                          className: b.checklistRow,
                          children: [
                              (0, i.jsx)(_.owK, {
                                  size: "md",
                                  className: b.checklistIcon,
                                  color: l.Z.unsafe_rawColors.GREEN_360.css,
                                  secondaryColor: l.Z.unsafe_rawColors.WHITE_100.css,
                              }),
                              (0, i.jsx)(_.Text, {
                                  variant: "text-md/normal",
                                  children: g.intl.string(g.t.LfeFFr),
                              }),
                              (0, i.jsx)(y, { guild: t }),
                          ],
                      })
                    : null,
                (0, i.jsx)(v, {
                    permissions: n,
                    step: a,
                }),
            ],
        }),
    });
}
function G(e) {
    let { onConfirm: t, onDismiss: n, canEveryoneModerate: a, step: o } = e;
    return (0, i.jsxs)(_.mzw, {
        className: b.footer,
        children: [
            (0, i.jsx)(_.Button, {
                variant: "primary",
                text: 0 === o ? (a ? g.intl.string(g.t.R7GC7b) : g.intl.string(g.t.iOSdAW)) : g.intl.string(g.t.mVuDq5),
                onClick: t,
                loading: 1 === o,
            }),
            0 === o
                ? (0, i.jsx)(d.zx, {
                      look: d.zx.Looks.LINK,
                      onClick: n,
                      color: d.zx.Colors.PRIMARY,
                      children: (0, i.jsx)(_.Text, {
                          variant: "text-sm/semibold",
                          color: "header-primary",
                          children: g.intl.string(g.t.gWQZvr),
                      }),
                  })
                : null,
        ],
    });
}
function D(e) {
    let { guild: t, canEveryoneModerate: n, isDefaultNotificationsAllMessages: s, transitionState: l, onClose: c } = e,
        [d, u] = a.useState(0),
        m = a.useMemo(() => {
            let e = [],
                n = [];
            return (
                x.$X.map((i) => {
                    I.oz(i, t) ? e.push(i) : n.push(i);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: n,
                }
            );
        }, [t]);
    if (null == t) return null;
    let E = () => {
        n &&
            (() => {
                var e, n;
                let i = N.Z.getEveryoneRole(t),
                    a = o.Od(i.permissions, x.mu);
                (0, f.Gf)(t.id, [
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
                ]);
            })(),
            s &&
                (p.Z.updateGuild({ defaultMessageNotifications: O.bL.ONLY_MENTIONS }),
                p.Z.saveGuild(t.id, { defaultMessageNotifications: O.bL.ONLY_MENTIONS }));
    };
    return (0, i.jsxs)(_.Y0X, {
        transitionState: l,
        size: _.CgR.SMALL,
        className: b.modal,
        parentComponent: "GuildSettingsDisableUnsafeDefaultPermissionsNotice",
        children: [
            (0, i.jsx)(C, {
                guild: t,
                headerText: n ? g.intl.string(g.t["7/ux15"]) : g.intl.string(g.t.sRcn4z),
                headerSubtext: n ? g.intl.string(g.t.aliKPx) : g.intl.string(g.t.F4KDOH),
                step: d,
            }),
            (0, i.jsx)(U, {
                guild: t,
                permissions: m,
                step: d,
                canEveryoneModerate: n,
                isDefaultNotificationsAllMessages: s,
            }),
            (0, i.jsx)(G, {
                onConfirm: () => {
                    var e, i;
                    n ||
                        (E(),
                        c(),
                        (0, h.Qd)(
                            r.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
                            null != (e = null == t ? void 0 : t.id) ? e : "",
                            !0,
                            T.L.PRIMARY,
                        )),
                        0 === d
                            ? (u(1), setTimeout(() => u(2), 3000))
                            : 2 === d &&
                              (E(),
                              c(),
                              (0, h.Qd)(
                                  r.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
                                  null != (i = null == t ? void 0 : t.id) ? i : "",
                                  !0,
                                  T.L.PRIMARY,
                              ));
                },
                onDismiss: () => {
                    c(), (0, h.Qd)(r.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, t.id, !0, T.L.DISMISS);
                },
                step: d,
                canEveryoneModerate: n,
            }),
        ],
    });
}
