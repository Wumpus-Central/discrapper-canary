(n.d(t, { default: () => G }), n(388685), n(539854));
var i = n(255367),
    a = n(73800),
    o = n(149765),
    s = n(442837),
    r = n(704215),
    l = n(692547),
    c = n(481060),
    d = n(388905),
    _ = n(434404),
    u = n(764260),
    p = n(422559),
    f = n(601964),
    m = n(485386),
    E = n(768581),
    N = n(700785),
    S = n(645041),
    I = n(981631),
    h = n(921944),
    O = n(135899),
    T = n(388032),
    x = n(800830);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function b(e) {
    let { guild: t, headerText: a, headerSubtext: o, step: s } = e,
        r = E.ZP.getGuildIconURL({
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
                              children: (0, f.gM)(t)
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
function C(e) {
    let { guild: t } = e,
        n = (0, s.e7)([m.Z], () => m.Z.getEveryoneRole(t));
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
let y = (e) => (e.toString() === I.Plq.MENTION_EVERYONE.toString() ? T.intl.string(T.t.yCpsQ0) : (0, p.wt)(e));
function R(e) {
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
                      children: 0 === n ? T.intl.string(T.t['0WZKIy']) : T.intl.string(T.t.xU8RDg)
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
                                          color: 'text-default',
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
        : (2 === n && (t = O.$X),
          (0, i.jsxs)('div', {
              className: x.tableContainer,
              children: [
                  (0, i.jsx)(c.Text, {
                      className: x.tableHeader,
                      variant: 'text-xs/semibold',
                      color: 'text-muted',
                      children: 2 === n ? T.intl.string(T.t.FgMS6u) : T.intl.string(T.t.Yo5qlp)
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
function L(e) {
    let { permissions: t, step: n } = e,
        { enabledPermissions: a, disabledPermissions: o } = t;
    return 0 === a.length && 2 !== n
        ? null
        : (0, i.jsxs)('div', {
              className: x.table,
              children: [
                  2 !== n
                      ? (0, i.jsx)(R, {
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
                                  children: T.intl.format(T.t.K8Eg4O, {
                                      infoHook: () =>
                                          (0, i.jsx)(c.ua7, {
                                              text: T.intl.string(T.t['3h2WyM']),
                                              'aria-label': T.intl.string(T.t['3h2WyM']),
                                              children: (e) =>
                                                  (0, i.jsx)(
                                                      c.d3s,
                                                      g(
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
                                  children: T.intl.string(T.t.LfeFFh)
                              }),
                              (0, i.jsx)(C, { guild: t })
                          ]
                      })
                    : null,
                (0, i.jsx)(L, {
                    permissions: n,
                    step: a
                })
            ]
        })
    });
}
function U(e) {
    let { onConfirm: t, onDismiss: n, canEveryoneModerate: a, step: o } = e;
    return (0, i.jsxs)(c.mzw, {
        className: x.footer,
        children: [
            (0, i.jsx)(c.zxk, {
                onClick: t,
                submitting: 1 === o,
                children: 0 === o ? (a ? T.intl.string(T.t.R7GC7e) : T.intl.string(T.t.iOSdAQ)) : T.intl.string(T.t.mVuDq6)
            }),
            0 === o
                ? (0, i.jsx)(c.zxk, {
                      look: c.zxk.Looks.LINK,
                      onClick: n,
                      color: c.zxk.Colors.PRIMARY,
                      children: (0, i.jsx)(c.Text, {
                          variant: 'text-sm/semibold',
                          color: 'header-primary',
                          children: T.intl.string(T.t.gWQZvr)
                      })
                  })
                : null
        ]
    });
}
function G(e) {
    let { guild: t, canEveryoneModerate: n, isDefaultNotificationsAllMessages: s, transitionState: l, onClose: d } = e,
        [p, f] = a.useState(0),
        E = a.useMemo(() => {
            let e = [],
                n = [];
            return (
                O.$X.map((i) => {
                    N.oz(i, t) ? e.push(i) : n.push(i);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: n
                }
            );
        }, [t]);
    if (null == t) return null;
    let C = () => {
            var e, n;
            let i = m.Z.getEveryoneRole(t),
                a = o.Od(i.permissions, O.mu);
            (0, u.Gf)(t.id, [
                ((e = g({}, i)),
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
        y = () => {
            (_.Z.updateGuild({ defaultMessageNotifications: I.bL.ONLY_MENTIONS }), _.Z.saveGuild(t.id, { defaultMessageNotifications: I.bL.ONLY_MENTIONS }));
        },
        R = () => {
            (n && C(), s && y());
        };
    return (0, i.jsxs)(c.Y0X, {
        transitionState: l,
        size: c.CgR.SMALL,
        className: x.modal,
        parentComponent: 'GuildSettingsDisableUnsafeDefaultPermissionsNotice',
        children: [
            (0, i.jsx)(b, {
                guild: t,
                headerText: n ? T.intl.string(T.t['7/ux19']) : T.intl.string(T.t['sRcn4+']),
                headerSubtext: n ? T.intl.string(T.t.aliKPz) : T.intl.string(T.t.F4KDOD),
                step: p
            }),
            (0, i.jsx)(v, {
                guild: t,
                permissions: E,
                step: p,
                canEveryoneModerate: n,
                isDefaultNotificationsAllMessages: s
            }),
            (0, i.jsx)(U, {
                onConfirm: () => {
                    var e, i;
                    (n || (R(), d(), (0, S.Qd)(r.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (e = null == t ? void 0 : t.id) ? e : '', !0, h.L.PRIMARY)), 0 === p ? (f(1), setTimeout(() => f(2), 3000)) : 2 === p && (R(), d(), (0, S.Qd)(r.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (i = null == t ? void 0 : t.id) ? i : '', !0, h.L.PRIMARY)));
                },
                onDismiss: () => {
                    (d(), (0, S.Qd)(r.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, t.id, !0, h.L.DISMISS));
                },
                step: p,
                canEveryoneModerate: n
            })
        ]
    });
}
