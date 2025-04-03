n.d(t, { default: () => U }), n(47120), n(653041);
var a = n(200651),
    i = n(192379),
    o = n(149765),
    s = n(442837),
    r = n(704215),
    l = n(692547),
    c = n(481060),
    d = n(388905),
    u = n(434404),
    _ = n(764260),
    p = n(422559),
    f = n(430824),
    N = n(768581),
    m = n(700785),
    E = n(645041),
    h = n(981631),
    I = n(921944),
    S = n(135899),
    O = n(388032),
    x = n(800830);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function g(e) {
    let { guild: t, headerText: i, headerSubtext: o, step: s } = e,
        r = N.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 120
        });
    return (0, a.jsxs)(c.xBx, {
        className: x.header,
        children: [
            (0, a.jsxs)('div', {
                className: x.headerIconContainer,
                children: [
                    null != r
                        ? (0, a.jsx)(c.qEK, {
                              src: r,
                              'aria-label': t.name,
                              size: c.EFr.SIZE_120,
                              className: x.__invalid_guildIcon
                          })
                        : (0, a.jsx)('div', {
                              className: x.acronym,
                              children: t.acronym
                          }),
                    2 === s
                        ? (0, a.jsx)(c.owK, {
                              size: 'md',
                              className: x.greenPing,
                              color: l.Z.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: l.Z.unsafe_rawColors.WHITE_100.css
                          })
                        : (0, a.jsx)(d.Ee, {
                              src: n(173326),
                              className: x.redPing
                          })
                ]
            }),
            (0, a.jsxs)('div', {
                className: x.headerText,
                children: [
                    (0, a.jsx)(c.X6q, {
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        children: i
                    }),
                    (0, a.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        color: 'header-primary',
                        children: o
                    })
                ]
            })
        ]
    });
}
function b(e) {
    let { guild: t } = e,
        n = (0, s.e7)([f.Z], () => f.Z.getRole(t.id, t.getEveryoneRoleId()));
    if (null == n) return null;
    let { name: i, color: o } = n;
    return (0, a.jsxs)('span', {
        className: x.roleRow,
        children: [
            (0, a.jsx)(c.FhE, {
                className: x.roleDot,
                color: o.toString(),
                background: !1,
                tooltip: !1
            }),
            (0, a.jsx)(c.Text, {
                className: x.roleName,
                variant: 'text-sm/medium',
                color: 'interactive-active',
                children: i
            })
        ]
    });
}
let y = (e) => (e.toString() === h.Plq.MENTION_EVERYONE.toString() ? O.NW.string(O.t.yCpsQ0) : (0, p.wt)(e));
function C(e) {
    let { permissions: t, step: n } = e;
    return 2 === n
        ? null
        : (0, a.jsxs)('div', {
              className: x.tableContainer,
              children: [
                  (0, a.jsx)(c.Text, {
                      className: x.tableHeader,
                      variant: 'text-xs/semibold',
                      color: 'text-muted',
                      children: 0 === n ? O.NW.string(O.t['0WZKIy']) : O.NW.string(O.t.xU8RDg)
                  }),
                  (0, a.jsx)('div', {
                      className: x.permissionsTable,
                      children: t.map((e, t) =>
                          (0, a.jsxs)(
                              'div',
                              {
                                  className: x.permissionRow,
                                  children: [
                                      (0, a.jsx)('div', { className: 0 === n ? x.bulletPositive : x.bulletWarning }),
                                      (0, a.jsx)(c.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'text-normal',
                                          children: y(e)
                                      })
                                  ]
                              },
                              t
                          )
                      )
                  })
              ]
          });
}
function j(e) {
    let { permissions: t, step: n } = e;
    return 0 === t.length && 2 !== n
        ? null
        : (2 === n && (t = S.$X),
          (0, a.jsxs)('div', {
              className: x.tableContainer,
              children: [
                  (0, a.jsx)(c.Text, {
                      className: x.tableHeader,
                      variant: 'text-xs/semibold',
                      color: 'text-muted',
                      children: 2 === n ? O.NW.string(O.t.FgMS6u) : O.NW.string(O.t.Yo5qlp)
                  }),
                  (0, a.jsx)('div', {
                      className: x.permissionsTable,
                      children: t.map((e, t) =>
                          (0, a.jsxs)(
                              'div',
                              {
                                  className: x.permissionRow,
                                  children: [
                                      (0, a.jsx)('div', { className: x.bullet }),
                                      (0, a.jsx)(c.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'text-muted',
                                          children: y(e)
                                      })
                                  ]
                              },
                              t
                          )
                      )
                  })
              ]
          }));
}
function R(e) {
    let { permissions: t, step: n } = e,
        { enabledPermissions: i, disabledPermissions: o } = t;
    return 0 === i.length && 2 !== n
        ? null
        : (0, a.jsxs)('div', {
              className: x.table,
              children: [
                  2 !== n
                      ? (0, a.jsx)(C, {
                            permissions: i,
                            step: n
                        })
                      : null,
                  (0, a.jsx)(j, {
                      permissions: o,
                      step: n
                  })
              ]
          });
}
function v(e) {
    let { guild: t, permissions: n, step: i, canEveryoneModerate: o, isDefaultNotificationsAllMessages: s } = e;
    return (0, a.jsx)(c.hzk, {
        children: (0, a.jsxs)('div', {
            className: x.updatedForm,
            children: [
                s
                    ? (0, a.jsxs)('div', {
                          className: x.checklistRow,
                          children: [
                              (0, a.jsx)(c.owK, {
                                  size: 'md',
                                  className: x.checklistIcon,
                                  color: l.Z.unsafe_rawColors.GREEN_360.css,
                                  secondaryColor: l.Z.unsafe_rawColors.WHITE_100.css
                              }),
                              (0, a.jsx)(c.Text, {
                                  variant: 'text-md/normal',
                                  children: O.NW.format(O.t.K8Eg4O, {
                                      infoHook: () =>
                                          (0, a.jsx)(c.ua7, {
                                              text: O.NW.string(O.t['3h2WyM']),
                                              'aria-label': O.NW.string(O.t['3h2WyM']),
                                              children: (e) =>
                                                  (0, a.jsx)(
                                                      c.d3s,
                                                      T(
                                                          {
                                                              size: 'xs',
                                                              color: 'currentColor',
                                                              className: x.icon
                                                          },
                                                          e
                                                      )
                                                  )
                                          })
                                  })
                              })
                          ]
                      })
                    : null,
                o
                    ? (0, a.jsxs)('div', {
                          className: x.checklistRow,
                          children: [
                              (0, a.jsx)(c.owK, {
                                  size: 'md',
                                  className: x.checklistIcon,
                                  color: l.Z.unsafe_rawColors.GREEN_360.css,
                                  secondaryColor: l.Z.unsafe_rawColors.WHITE_100.css
                              }),
                              (0, a.jsx)(c.Text, {
                                  variant: 'text-md/normal',
                                  children: O.NW.string(O.t.LfeFFh)
                              }),
                              (0, a.jsx)(b, { guild: t })
                          ]
                      })
                    : null,
                (0, a.jsx)(R, {
                    permissions: n,
                    step: i
                })
            ]
        })
    });
}
function L(e) {
    let { onConfirm: t, onDismiss: n, canEveryoneModerate: i, step: o } = e;
    return (0, a.jsxs)(c.mzw, {
        className: x.footer,
        children: [
            (0, a.jsx)(c.zxk, {
                onClick: t,
                submitting: 1 === o,
                children: 0 === o ? (i ? O.NW.string(O.t.R7GC7e) : O.NW.string(O.t.iOSdAQ)) : O.NW.string(O.t.mVuDq6)
            }),
            0 === o
                ? (0, a.jsx)(c.zxk, {
                      look: c.zxk.Looks.LINK,
                      onClick: n,
                      color: c.zxk.Colors.PRIMARY,
                      children: (0, a.jsx)(c.Text, {
                          variant: 'text-sm/semibold',
                          color: 'header-primary',
                          children: O.NW.string(O.t.gWQZvr)
                      })
                  })
                : null
        ]
    });
}
function U(e) {
    let { guild: t, canEveryoneModerate: n, isDefaultNotificationsAllMessages: s, transitionState: l, onClose: d } = e,
        [p, N] = i.useState(0),
        b = i.useMemo(() => {
            let e = [],
                n = [];
            return (
                S.$X.map((a) => {
                    m.oz(a, t) ? e.push(a) : n.push(a);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: n
                }
            );
        }, [t]);
    if (null == t) return null;
    let y = () => {
            var e, n;
            let a = f.Z.getRole(t.id, t.getEveryoneRoleId());
            if (null == a) return;
            let i = o.Od(a.permissions, S.mu);
            (0, _.Gf)(t.id, [
                ((e = T({}, a)),
                (n = n = { permissions: i }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, a);
                          }
                          return n;
                      })(Object(n)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      }),
                e)
            ]);
        },
        C = () => {
            u.Z.updateGuild({ defaultMessageNotifications: h.bL.ONLY_MENTIONS }), u.Z.saveGuild(t.id, { defaultMessageNotifications: h.bL.ONLY_MENTIONS });
        },
        j = () => {
            n && y(), s && C();
        };
    return (0, a.jsxs)(c.Y0X, {
        transitionState: l,
        size: c.CgR.SMALL,
        className: x.modal,
        children: [
            (0, a.jsx)(g, {
                guild: t,
                headerText: n ? O.NW.string(O.t['7/ux19']) : O.NW.string(O.t['sRcn4+']),
                headerSubtext: n ? O.NW.string(O.t.aliKPz) : O.NW.string(O.t.F4KDOD),
                step: p
            }),
            (0, a.jsx)(v, {
                guild: t,
                permissions: b,
                step: p,
                canEveryoneModerate: n,
                isDefaultNotificationsAllMessages: s
            }),
            (0, a.jsx)(L, {
                onConfirm: () => {
                    var e, a;
                    n || (j(), d(), (0, E.Qd)(r.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (e = null == t ? void 0 : t.id) ? e : '', !0, I.L.PRIMARY)), 0 === p ? (N(1), setTimeout(() => N(2), 3000)) : 2 === p && (j(), d(), (0, E.Qd)(r.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (a = null == t ? void 0 : t.id) ? a : '', !0, I.L.PRIMARY));
                },
                onDismiss: () => {
                    d(), (0, E.Qd)(r.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, t.id, !0, I.L.DISMISS);
                },
                step: p,
                canEveryoneModerate: n
            })
        ]
    });
}
