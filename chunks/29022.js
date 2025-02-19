n.d(t, { default: () => U }), n(47120), n(653041);
var i = n(200651),
    a = n(192379),
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
    x = n(18263);
function T(e) {
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
        className: x.header,
        children: [
            (0, i.jsxs)('div', {
                className: x.headerIconContainer,
                children: [
                    null != r
                        ? (0, i.jsx)(c.qEK, {
                              src: r,
                              'aria-label': t.name,
                              size: c.EFr.SIZE_120,
                              className: x.__invalid_guildIcon
                          })
                        : (0, i.jsx)('div', {
                              className: x.acronym,
                              children: t.acronym
                          }),
                    2 === s
                        ? (0, i.jsx)(c.owK, {
                              size: 'md',
                              className: x.greenPing,
                              color: l.Z.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: l.Z.unsafe_rawColors.WHITE_100.css
                          })
                        : (0, i.jsx)(d.Ee, {
                              src: n(173326),
                              className: x.redPing
                          })
                ]
            }),
            (0, i.jsxs)('div', {
                className: x.headerText,
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
        className: x.roleRow,
        children: [
            (0, i.jsx)(c.FhE, {
                className: x.roleDot,
                color: o.toString(),
                background: !1,
                tooltip: !1
            }),
            (0, i.jsx)(c.Text, {
                className: x.roleName,
                variant: 'text-sm/medium',
                color: 'interactive-active',
                children: a
            })
        ]
    });
}
let y = (e) => (e.toString() === h.Plq.MENTION_EVERYONE.toString() ? O.NW.string(O.t.yCpsQ0) : (0, p.wt)(e));
function C(e) {
    let { permissions: t, step: n } = e;
    return 2 === n
        ? null
        : (0, i.jsxs)('div', {
              className: x.tableContainer,
              children: [
                  (0, i.jsx)(c.Text, {
                      className: x.tableHeader,
                      variant: 'text-xs/semibold',
                      color: 'text-muted',
                      children: 0 === n ? O.NW.string(O.t['0WZKIy']) : O.NW.string(O.t.xU8RDg)
                  }),
                  (0, i.jsx)('div', {
                      className: x.permissionsTable,
                      children: t.map((e, t) =>
                          (0, i.jsxs)(
                              'div',
                              {
                                  className: x.permissionRow,
                                  children: [
                                      (0, i.jsx)('div', { className: 0 === n ? x.bulletPositive : x.bulletWarning }),
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
function j(e) {
    let { permissions: t, step: n } = e;
    return 0 === t.length && 2 !== n
        ? null
        : (2 === n && (t = S.$X),
          (0, i.jsxs)('div', {
              className: x.tableContainer,
              children: [
                  (0, i.jsx)(c.Text, {
                      className: x.tableHeader,
                      variant: 'text-xs/semibold',
                      color: 'text-muted',
                      children: 2 === n ? O.NW.string(O.t.FgMS6u) : O.NW.string(O.t.Yo5qlp)
                  }),
                  (0, i.jsx)('div', {
                      className: x.permissionsTable,
                      children: t.map((e, t) =>
                          (0, i.jsxs)(
                              'div',
                              {
                                  className: x.permissionRow,
                                  children: [
                                      (0, i.jsx)('div', { className: x.bullet }),
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
function R(e) {
    let { permissions: t, step: n } = e,
        { enabledPermissions: a, disabledPermissions: o } = t;
    return 0 === a.length && 2 !== n
        ? null
        : (0, i.jsxs)('div', {
              className: x.table,
              children: [
                  2 !== n
                      ? (0, i.jsx)(C, {
                            permissions: a,
                            step: n
                        })
                      : null,
                  (0, i.jsx)(j, {
                      permissions: o,
                      step: n
                  })
              ]
          });
}
function v(e) {
    let { guild: t, permissions: n, step: a, canEveryoneModerate: o, isDefaultNotificationsAllMessages: s } = e;
    return (0, i.jsx)(c.hzk, {
        children: (0, i.jsxs)('div', {
            className: x.updatedForm,
            children: [
                s
                    ? (0, i.jsxs)('div', {
                          className: x.checklistRow,
                          children: [
                              (0, i.jsx)(c.owK, {
                                  size: 'md',
                                  className: x.checklistIcon,
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
                    ? (0, i.jsxs)('div', {
                          className: x.checklistRow,
                          children: [
                              (0, i.jsx)(c.owK, {
                                  size: 'md',
                                  className: x.checklistIcon,
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
                (0, i.jsx)(R, {
                    permissions: n,
                    step: a
                })
            ]
        })
    });
}
function L(e) {
    let { onConfirm: t, onDismiss: n, canEveryoneModerate: a, step: o } = e;
    return (0, i.jsxs)(c.mzw, {
        className: x.footer,
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
                S.$X.map((i) => {
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
            let a = o.Od(i.permissions, S.mu);
            (0, _.Gf)(t.id, [
                ((e = T({}, i)),
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
        C = () => {
            u.Z.updateGuild({ defaultMessageNotifications: h.bL.ONLY_MENTIONS }), u.Z.saveGuild(t.id, { defaultMessageNotifications: h.bL.ONLY_MENTIONS });
        },
        j = () => {
            n && y(), s && C();
        };
    return (0, i.jsxs)(c.Y0X, {
        transitionState: l,
        size: c.CgR.SMALL,
        className: x.modal,
        children: [
            (0, i.jsx)(g, {
                guild: t,
                headerText: n ? O.NW.string(O.t['7/ux19']) : O.NW.string(O.t['sRcn4+']),
                headerSubtext: n ? O.NW.string(O.t.aliKPz) : O.NW.string(O.t.F4KDOD),
                step: p
            }),
            (0, i.jsx)(v, {
                guild: t,
                permissions: b,
                step: p,
                canEveryoneModerate: n,
                isDefaultNotificationsAllMessages: s
            }),
            (0, i.jsx)(L, {
                onConfirm: () => {
                    var e, i;
                    n || (j(), d(), (0, E.Qd)(r.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : '', !0, I.L.PRIMARY)), 0 === p ? (N(1), setTimeout(() => N(2), 3000)) : 2 === p && (j(), d(), (0, E.Qd)(r.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (i = null == t ? void 0 : t.id) && void 0 !== i ? i : '', !0, I.L.PRIMARY));
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
