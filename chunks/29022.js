n.d(t, { default: () => U }), n(388685), n(539854);
var i = n(200651),
    a = n(192379),
    o = n(149765),
    s = n(442837),
    r = n(704215),
    l = n(692547),
    c = n(481060),
    d = n(388905),
    _ = n(434404),
    u = n(764260),
    p = n(422559),
    f = n(430824),
    N = n(768581),
    m = n(700785),
    E = n(645041),
    S = n(981631),
    I = n(921944),
    h = n(135899),
    O = n(388032),
    T = n(390633);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function g(e) {
    let { guild: t, headerText: a, headerSubtext: o, step: s } = e,
        r = N.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 120
        });
    return (0, i.jsxs)(c.xBx, {
        className: T.header,
        children: [
            (0, i.jsxs)('div', {
                className: T.headerIconContainer,
                children: [
                    null != r
                        ? (0, i.jsx)(c.qEK, {
                              src: r,
                              'aria-label': t.name,
                              size: c.EFr.SIZE_120,
                              className: T.__invalid_guildIcon
                          })
                        : (0, i.jsx)('div', {
                              className: T.acronym,
                              children: t.acronym
                          }),
                    2 === s
                        ? (0, i.jsx)(c.owK, {
                              size: 'md',
                              className: T.greenPing,
                              color: l.Z.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: l.Z.unsafe_rawColors.WHITE_100.css
                          })
                        : (0, i.jsx)(d.Ee, {
                              src: n(173326),
                              className: T.redPing
                          })
                ]
            }),
            (0, i.jsxs)('div', {
                className: T.headerText,
                children: [
                    (0, i.jsx)(c.X6q, {
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        children: a
                    }),
                    (0, i.jsx)(c.Text, {
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
    let { name: a, color: o } = n;
    return (0, i.jsxs)('span', {
        className: T.roleRow,
        children: [
            (0, i.jsx)(c.FhE, {
                className: T.roleDot,
                color: o.toString(),
                background: !1,
                tooltip: !1
            }),
            (0, i.jsx)(c.Text, {
                className: T.roleName,
                variant: 'text-sm/medium',
                color: 'interactive-active',
                children: a
            })
        ]
    });
}
let y = (e) => (e.toString() === S.Plq.MENTION_EVERYONE.toString() ? O.NW.string(O.t.yCpsQ0) : (0, p.wt)(e));
function R(e) {
    let { permissions: t, step: n } = e;
    return 2 === n
        ? null
        : (0, i.jsxs)('div', {
              className: T.tableContainer,
              children: [
                  (0, i.jsx)(c.Text, {
                      className: T.tableHeader,
                      variant: 'text-xs/semibold',
                      color: 'text-muted',
                      children: 0 === n ? O.NW.string(O.t['0WZKIy']) : O.NW.string(O.t.xU8RDg)
                  }),
                  (0, i.jsx)('div', {
                      className: T.permissionsTable,
                      children: t.map((e, t) =>
                          (0, i.jsxs)(
                              'div',
                              {
                                  className: T.permissionRow,
                                  children: [
                                      (0, i.jsx)('div', { className: 0 === n ? T.bulletPositive : T.bulletWarning }),
                                      (0, i.jsx)(c.Text, {
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
function C(e) {
    let { permissions: t, step: n } = e;
    return 0 === t.length && 2 !== n
        ? null
        : (2 === n && (t = h.$X),
          (0, i.jsxs)('div', {
              className: T.tableContainer,
              children: [
                  (0, i.jsx)(c.Text, {
                      className: T.tableHeader,
                      variant: 'text-xs/semibold',
                      color: 'text-muted',
                      children: 2 === n ? O.NW.string(O.t.FgMS6u) : O.NW.string(O.t.Yo5qlp)
                  }),
                  (0, i.jsx)('div', {
                      className: T.permissionsTable,
                      children: t.map((e, t) =>
                          (0, i.jsxs)(
                              'div',
                              {
                                  className: T.permissionRow,
                                  children: [
                                      (0, i.jsx)('div', { className: T.bullet }),
                                      (0, i.jsx)(c.Text, {
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
function j(e) {
    let { permissions: t, step: n } = e,
        { enabledPermissions: a, disabledPermissions: o } = t;
    return 0 === a.length && 2 !== n
        ? null
        : (0, i.jsxs)('div', {
              className: T.table,
              children: [
                  2 !== n
                      ? (0, i.jsx)(R, {
                            permissions: a,
                            step: n
                        })
                      : null,
                  (0, i.jsx)(C, {
                      permissions: o,
                      step: n
                  })
              ]
          });
}
function L(e) {
    let { guild: t, permissions: n, step: a, canEveryoneModerate: o, isDefaultNotificationsAllMessages: s } = e;
    return (0, i.jsx)(c.hzk, {
        children: (0, i.jsxs)('div', {
            className: T.updatedForm,
            children: [
                s
                    ? (0, i.jsxs)('div', {
                          className: T.checklistRow,
                          children: [
                              (0, i.jsx)(c.owK, {
                                  size: 'md',
                                  className: T.checklistIcon,
                                  color: l.Z.unsafe_rawColors.GREEN_360.css,
                                  secondaryColor: l.Z.unsafe_rawColors.WHITE_100.css
                              }),
                              (0, i.jsx)(c.Text, {
                                  variant: 'text-md/normal',
                                  children: O.NW.format(O.t.K8Eg4O, {
                                      infoHook: () =>
                                          (0, i.jsx)(c.ua7, {
                                              text: O.NW.string(O.t['3h2WyM']),
                                              'aria-label': O.NW.string(O.t['3h2WyM']),
                                              children: (e) =>
                                                  (0, i.jsx)(
                                                      c.d3s,
                                                      x(
                                                          {
                                                              size: 'xs',
                                                              color: 'currentColor',
                                                              className: T.icon
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
                    ? (0, i.jsxs)('div', {
                          className: T.checklistRow,
                          children: [
                              (0, i.jsx)(c.owK, {
                                  size: 'md',
                                  className: T.checklistIcon,
                                  color: l.Z.unsafe_rawColors.GREEN_360.css,
                                  secondaryColor: l.Z.unsafe_rawColors.WHITE_100.css
                              }),
                              (0, i.jsx)(c.Text, {
                                  variant: 'text-md/normal',
                                  children: O.NW.string(O.t.LfeFFh)
                              }),
                              (0, i.jsx)(b, { guild: t })
                          ]
                      })
                    : null,
                (0, i.jsx)(j, {
                    permissions: n,
                    step: a
                })
            ]
        })
    });
}
function v(e) {
    let { onConfirm: t, onDismiss: n, canEveryoneModerate: a, step: o } = e;
    return (0, i.jsxs)(c.mzw, {
        className: T.footer,
        children: [
            (0, i.jsx)(c.zxk, {
                onClick: t,
                submitting: 1 === o,
                children: 0 === o ? (a ? O.NW.string(O.t.R7GC7e) : O.NW.string(O.t.iOSdAQ)) : O.NW.string(O.t.mVuDq6)
            }),
            0 === o
                ? (0, i.jsx)(c.zxk, {
                      look: c.zxk.Looks.LINK,
                      onClick: n,
                      color: c.zxk.Colors.PRIMARY,
                      children: (0, i.jsx)(c.Text, {
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
        [p, N] = a.useState(0),
        b = a.useMemo(() => {
            let e = [],
                n = [];
            return (
                h.$X.map((i) => {
                    m.oz(i, t) ? e.push(i) : n.push(i);
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
            let i = f.Z.getRole(t.id, t.getEveryoneRoleId());
            if (null == i) return;
            let a = o.Od(i.permissions, h.mu);
            (0, u.Gf)(t.id, [
                ((e = x({}, i)),
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
                e)
            ]);
        },
        R = () => {
            _.Z.updateGuild({ defaultMessageNotifications: S.bL.ONLY_MENTIONS }), _.Z.saveGuild(t.id, { defaultMessageNotifications: S.bL.ONLY_MENTIONS });
        },
        C = () => {
            n && y(), s && R();
        };
    return (0, i.jsxs)(c.Y0X, {
        transitionState: l,
        size: c.CgR.SMALL,
        className: T.modal,
        children: [
            (0, i.jsx)(g, {
                guild: t,
                headerText: n ? O.NW.string(O.t['7/ux19']) : O.NW.string(O.t['sRcn4+']),
                headerSubtext: n ? O.NW.string(O.t.aliKPz) : O.NW.string(O.t.F4KDOD),
                step: p
            }),
            (0, i.jsx)(L, {
                guild: t,
                permissions: b,
                step: p,
                canEveryoneModerate: n,
                isDefaultNotificationsAllMessages: s
            }),
            (0, i.jsx)(v, {
                onConfirm: () => {
                    var e, i;
                    n || (C(), d(), (0, E.Qd)(r.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (e = null == t ? void 0 : t.id) ? e : '', !0, I.L.PRIMARY)), 0 === p ? (N(1), setTimeout(() => N(2), 3000)) : 2 === p && (C(), d(), (0, E.Qd)(r.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (i = null == t ? void 0 : t.id) ? i : '', !0, I.L.PRIMARY));
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
