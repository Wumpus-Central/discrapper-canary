(n.d(t, { default: () => D }), n(388685), n(539854));
var i = n(255367),
    a = n(73800),
    o = n(149765),
    s = n(442837),
    l = n(704215),
    r = n(692547),
    c = n(755721),
    d = n(481060),
    _ = n(388905),
    u = n(434404),
    p = n(764260),
    f = n(422559),
    m = n(601964),
    E = n(485386),
    N = n(768581),
    S = n(700785),
    I = n(645041),
    h = n(981631),
    O = n(921944),
    T = n(135899),
    x = n(388032),
    g = n(800830);
function b(e) {
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
function y(e) {
    let { guild: t, headerText: a, headerSubtext: o, step: s } = e,
        l = N.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 120
        });
    return (0, i.jsxs)(d.xBx, {
        className: g.header,
        children: [
            (0, i.jsxs)('div', {
                className: g.headerIconContainer,
                children: [
                    null != l
                        ? (0, i.jsx)(d.qEK, {
                              src: l,
                              'aria-label': t.name,
                              size: d.EFr.SIZE_120,
                              className: g.__invalid_guildIcon
                          })
                        : (0, i.jsx)('div', {
                              className: g.acronym,
                              children: (0, m.gM)(t)
                          }),
                    2 === s
                        ? (0, i.jsx)(d.owK, {
                              size: 'md',
                              className: g.greenPing,
                              color: r.Z.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: r.Z.unsafe_rawColors.WHITE_100.css
                          })
                        : (0, i.jsx)(_.Ee, {
                              src: n(173326),
                              className: g.redPing
                          })
                ]
            }),
            (0, i.jsxs)('div', {
                className: g.headerText,
                children: [
                    (0, i.jsx)(d.X6q, {
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        children: a
                    }),
                    (0, i.jsx)(d.Text, {
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
        n = (0, s.e7)([E.Z], () => E.Z.getEveryoneRole(t));
    if (null == n) return null;
    let { name: a, color: o } = n;
    return (0, i.jsxs)('span', {
        className: g.roleRow,
        children: [
            (0, i.jsx)(d.FhE, {
                className: g.roleDot,
                color: o.toString(),
                background: !1,
                tooltip: !1
            }),
            (0, i.jsx)(d.Text, {
                className: g.roleName,
                variant: 'text-sm/medium',
                color: 'interactive-active',
                children: a
            })
        ]
    });
}
let R = (e) => (e.toString() === h.Plq.MENTION_EVERYONE.toString() ? x.intl.string(x.t.yCpsQ0) : (0, f.wt)(e));
function j(e) {
    let { permissions: t, step: n } = e;
    return 2 === n
        ? null
        : (0, i.jsxs)('div', {
              className: g.tableContainer,
              children: [
                  (0, i.jsx)(d.Text, {
                      className: g.tableHeader,
                      variant: 'text-xs/semibold',
                      color: 'text-muted',
                      children: 0 === n ? x.intl.string(x.t['0WZKIy']) : x.intl.string(x.t.xU8RDg)
                  }),
                  (0, i.jsx)('div', {
                      className: g.permissionsTable,
                      children: t.map((e, t) =>
                          (0, i.jsxs)(
                              'div',
                              {
                                  className: g.permissionRow,
                                  children: [
                                      (0, i.jsx)('div', { className: 0 === n ? g.bulletPositive : g.bulletWarning }),
                                      (0, i.jsx)(d.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'text-default',
                                          children: R(e)
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
function L(e) {
    let { permissions: t, step: n } = e;
    return 0 === t.length && 2 !== n
        ? null
        : (2 === n && (t = T.$X),
          (0, i.jsxs)('div', {
              className: g.tableContainer,
              children: [
                  (0, i.jsx)(d.Text, {
                      className: g.tableHeader,
                      variant: 'text-xs/semibold',
                      color: 'text-muted',
                      children: 2 === n ? x.intl.string(x.t.FgMS6u) : x.intl.string(x.t.Yo5qlp)
                  }),
                  (0, i.jsx)('div', {
                      className: g.permissionsTable,
                      children: t.map((e, t) =>
                          (0, i.jsxs)(
                              'div',
                              {
                                  className: g.permissionRow,
                                  children: [
                                      (0, i.jsx)('div', { className: g.bullet }),
                                      (0, i.jsx)(d.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'text-muted',
                                          children: R(e)
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
function v(e) {
    let { permissions: t, step: n } = e,
        { enabledPermissions: a, disabledPermissions: o } = t;
    return 0 === a.length && 2 !== n
        ? null
        : (0, i.jsxs)('div', {
              className: g.table,
              children: [
                  2 !== n
                      ? (0, i.jsx)(j, {
                            permissions: a,
                            step: n
                        })
                      : null,
                  (0, i.jsx)(L, {
                      permissions: o,
                      step: n
                  })
              ]
          });
}
function U(e) {
    let { guild: t, permissions: n, step: a, canEveryoneModerate: o, isDefaultNotificationsAllMessages: s } = e;
    return (0, i.jsx)(d.hzk, {
        children: (0, i.jsxs)('div', {
            className: g.updatedForm,
            children: [
                s
                    ? (0, i.jsxs)('div', {
                          className: g.checklistRow,
                          children: [
                              (0, i.jsx)(d.owK, {
                                  size: 'md',
                                  className: g.checklistIcon,
                                  color: r.Z.unsafe_rawColors.GREEN_360.css,
                                  secondaryColor: r.Z.unsafe_rawColors.WHITE_100.css
                              }),
                              (0, i.jsx)(d.Text, {
                                  variant: 'text-md/normal',
                                  children: x.intl.format(x.t.K8Eg4O, {
                                      infoHook: () =>
                                          (0, i.jsx)(d.ua7, {
                                              text: x.intl.string(x.t['3h2WyM']),
                                              'aria-label': x.intl.string(x.t['3h2WyM']),
                                              children: (e) =>
                                                  (0, i.jsx)(
                                                      d.d3s,
                                                      b(
                                                          {
                                                              size: 'xs',
                                                              color: 'currentColor',
                                                              className: g.icon
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
                          className: g.checklistRow,
                          children: [
                              (0, i.jsx)(d.owK, {
                                  size: 'md',
                                  className: g.checklistIcon,
                                  color: r.Z.unsafe_rawColors.GREEN_360.css,
                                  secondaryColor: r.Z.unsafe_rawColors.WHITE_100.css
                              }),
                              (0, i.jsx)(d.Text, {
                                  variant: 'text-md/normal',
                                  children: x.intl.string(x.t.LfeFFh)
                              }),
                              (0, i.jsx)(C, { guild: t })
                          ]
                      })
                    : null,
                (0, i.jsx)(v, {
                    permissions: n,
                    step: a
                })
            ]
        })
    });
}
function G(e) {
    let { onConfirm: t, onDismiss: n, canEveryoneModerate: a, step: o } = e;
    return (0, i.jsxs)(d.mzw, {
        className: g.footer,
        children: [
            (0, i.jsx)(d.zxk, {
                variant: 'primary',
                text: 0 === o ? (a ? x.intl.string(x.t.R7GC7e) : x.intl.string(x.t.iOSdAQ)) : x.intl.string(x.t.mVuDq6),
                onClick: t,
                loading: 1 === o
            }),
            0 === o
                ? (0, i.jsx)(c.zx, {
                      look: c.zx.Looks.LINK,
                      onClick: n,
                      color: c.zx.Colors.PRIMARY,
                      children: (0, i.jsx)(d.Text, {
                          variant: 'text-sm/semibold',
                          color: 'header-primary',
                          children: x.intl.string(x.t.gWQZvr)
                      })
                  })
                : null
        ]
    });
}
function D(e) {
    let { guild: t, canEveryoneModerate: n, isDefaultNotificationsAllMessages: s, transitionState: r, onClose: c } = e,
        [_, f] = a.useState(0),
        m = a.useMemo(() => {
            let e = [],
                n = [];
            return (
                T.$X.map((i) => {
                    S.oz(i, t) ? e.push(i) : n.push(i);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: n
                }
            );
        }, [t]);
    if (null == t) return null;
    let N = () => {
            var e, n;
            let i = E.Z.getEveryoneRole(t),
                a = o.Od(i.permissions, T.mu);
            (0, p.Gf)(t.id, [
                ((e = b({}, i)),
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
            (u.Z.updateGuild({ defaultMessageNotifications: h.bL.ONLY_MENTIONS }), u.Z.saveGuild(t.id, { defaultMessageNotifications: h.bL.ONLY_MENTIONS }));
        },
        R = () => {
            (n && N(), s && C());
        };
    return (0, i.jsxs)(d.Y0X, {
        transitionState: r,
        size: d.CgR.SMALL,
        className: g.modal,
        parentComponent: 'GuildSettingsDisableUnsafeDefaultPermissionsNotice',
        children: [
            (0, i.jsx)(y, {
                guild: t,
                headerText: n ? x.intl.string(x.t['7/ux19']) : x.intl.string(x.t['sRcn4+']),
                headerSubtext: n ? x.intl.string(x.t.aliKPz) : x.intl.string(x.t.F4KDOD),
                step: _
            }),
            (0, i.jsx)(U, {
                guild: t,
                permissions: m,
                step: _,
                canEveryoneModerate: n,
                isDefaultNotificationsAllMessages: s
            }),
            (0, i.jsx)(G, {
                onConfirm: () => {
                    var e, i;
                    (n || (R(), c(), (0, I.Qd)(l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (e = null == t ? void 0 : t.id) ? e : '', !0, O.L.PRIMARY)), 0 === _ ? (f(1), setTimeout(() => f(2), 3000)) : 2 === _ && (R(), c(), (0, I.Qd)(l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (i = null == t ? void 0 : t.id) ? i : '', !0, O.L.PRIMARY)));
                },
                onDismiss: () => {
                    (c(), (0, I.Qd)(l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, t.id, !0, O.L.DISMISS));
                },
                step: _,
                canEveryoneModerate: n
            })
        ]
    });
}
