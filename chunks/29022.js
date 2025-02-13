n.d(t, { default: () => y }), n(47120), n(653041);
var i = n(200651),
    a = n(192379),
    s = n(149765),
    l = n(442837),
    o = n(704215),
    r = n(692547),
    c = n(481060),
    d = n(388905),
    _ = n(434404),
    u = n(764260),
    p = n(422559),
    m = n(430824),
    f = n(768581),
    N = n(700785),
    E = n(645041),
    I = n(981631),
    h = n(921944),
    S = n(135899),
    x = n(388032),
    T = n(377137);
function O(e) {
    let { guild: t, headerText: a, headerSubtext: s, step: l } = e,
        o = f.ZP.getGuildIconURL({
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
                    null != o
                        ? (0, i.jsx)(c.qEK, {
                              src: o,
                              'aria-label': t.name,
                              size: c.EFr.SIZE_120,
                              className: T.__invalid_guildIcon
                          })
                        : (0, i.jsx)('div', {
                              className: T.acronym,
                              children: t.acronym
                          }),
                    2 === l
                        ? (0, i.jsx)(c.owK, {
                              size: 'md',
                              className: T.greenPing,
                              color: r.Z.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: r.Z.unsafe_rawColors.WHITE_100.css
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
                        children: s
                    })
                ]
            })
        ]
    });
}
function g(e) {
    let { guild: t } = e,
        n = (0, l.e7)([m.Z], () => m.Z.getRole(t.id, t.getEveryoneRoleId()));
    if (null == n) return null;
    let { name: a, color: s } = n;
    return (0, i.jsxs)('span', {
        className: T.roleRow,
        children: [
            (0, i.jsx)(c.FhE, {
                className: T.roleDot,
                color: s.toString(),
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
let C = (e) => (e.toString() === I.Plq.MENTION_EVERYONE.toString() ? x.intl.string(x.t.yCpsQ0) : (0, p.wt)(e));
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
                      children: 0 === n ? x.intl.string(x.t['0WZKIy']) : x.intl.string(x.t.xU8RDg)
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
                                          children: C(e)
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
        : (2 === n && (t = S.$X),
          (0, i.jsxs)('div', {
              className: T.tableContainer,
              children: [
                  (0, i.jsx)(c.Text, {
                      className: T.tableHeader,
                      variant: 'text-xs/semibold',
                      color: 'text-muted',
                      children: 2 === n ? x.intl.string(x.t.FgMS6u) : x.intl.string(x.t.Yo5qlp)
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
                                          children: C(e)
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
        { enabledPermissions: a, disabledPermissions: s } = t;
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
                  (0, i.jsx)(L, {
                      permissions: s,
                      step: n
                  })
              ]
          });
}
function j(e) {
    let { guild: t, permissions: n, step: a, canEveryoneModerate: s, isDefaultNotificationsAllMessages: l } = e;
    return (0, i.jsx)(c.hzk, {
        children: (0, i.jsxs)('div', {
            className: T.updatedForm,
            children: [
                l
                    ? (0, i.jsxs)('div', {
                          className: T.checklistRow,
                          children: [
                              (0, i.jsx)(c.owK, {
                                  size: 'md',
                                  className: T.checklistIcon,
                                  color: r.Z.unsafe_rawColors.GREEN_360.css,
                                  secondaryColor: r.Z.unsafe_rawColors.WHITE_100.css
                              }),
                              (0, i.jsx)(c.Text, {
                                  variant: 'text-md/normal',
                                  children: x.intl.format(x.t.K8Eg4O, {
                                      infoHook: () =>
                                          (0, i.jsx)(c.ua7, {
                                              text: x.intl.string(x.t['3h2WyM']),
                                              'aria-label': x.intl.string(x.t['3h2WyM']),
                                              children: (e) =>
                                                  (0, i.jsx)(c.d3s, {
                                                      size: 'xs',
                                                      color: 'currentColor',
                                                      className: T.icon,
                                                      ...e
                                                  })
                                          })
                                  })
                              })
                          ]
                      })
                    : null,
                s
                    ? (0, i.jsxs)('div', {
                          className: T.checklistRow,
                          children: [
                              (0, i.jsx)(c.owK, {
                                  size: 'md',
                                  className: T.checklistIcon,
                                  color: r.Z.unsafe_rawColors.GREEN_360.css,
                                  secondaryColor: r.Z.unsafe_rawColors.WHITE_100.css
                              }),
                              (0, i.jsx)(c.Text, {
                                  variant: 'text-md/normal',
                                  children: x.intl.string(x.t.LfeFFh)
                              }),
                              (0, i.jsx)(g, { guild: t })
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
function b(e) {
    let { onConfirm: t, onDismiss: n, canEveryoneModerate: a, step: s } = e;
    return (0, i.jsxs)(c.mzw, {
        className: T.footer,
        children: [
            (0, i.jsx)(c.zxk, {
                onClick: t,
                submitting: 1 === s,
                children: 0 === s ? (a ? x.intl.string(x.t.R7GC7e) : x.intl.string(x.t.iOSdAQ)) : x.intl.string(x.t.mVuDq6)
            }),
            0 === s
                ? (0, i.jsx)(c.zxk, {
                      look: c.zxk.Looks.LINK,
                      onClick: n,
                      color: c.zxk.Colors.PRIMARY,
                      children: (0, i.jsx)(c.Text, {
                          variant: 'text-sm/semibold',
                          color: 'header-primary',
                          children: x.intl.string(x.t.gWQZvr)
                      })
                  })
                : null
        ]
    });
}
function y(e) {
    let { guild: t, canEveryoneModerate: n, isDefaultNotificationsAllMessages: l, transitionState: r, onClose: d } = e,
        [p, f] = a.useState(0),
        g = a.useMemo(() => {
            let e = [],
                n = [];
            return (
                S.$X.map((i) => {
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
            let e = m.Z.getRole(t.id, t.getEveryoneRoleId());
            if (null == e) return;
            let n = s.Od(e.permissions, S.mu);
            (0, u.Gf)(t.id, [
                {
                    ...e,
                    permissions: n
                }
            ]);
        },
        R = () => {
            _.Z.updateGuild({ defaultMessageNotifications: I.bL.ONLY_MENTIONS }), _.Z.saveGuild(t.id, { defaultMessageNotifications: I.bL.ONLY_MENTIONS });
        },
        L = () => {
            n && C(), l && R();
        };
    return (0, i.jsxs)(c.Y0X, {
        transitionState: r,
        size: c.CgR.SMALL,
        className: T.modal,
        children: [
            (0, i.jsx)(O, {
                guild: t,
                headerText: n ? x.intl.string(x.t['7/ux19']) : x.intl.string(x.t['sRcn4+']),
                headerSubtext: n ? x.intl.string(x.t.aliKPz) : x.intl.string(x.t.F4KDOD),
                step: p
            }),
            (0, i.jsx)(j, {
                guild: t,
                permissions: g,
                step: p,
                canEveryoneModerate: n,
                isDefaultNotificationsAllMessages: l
            }),
            (0, i.jsx)(b, {
                onConfirm: () => {
                    var e, i;
                    n || (L(), d(), (0, E.Qd)(o.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : '', !0, h.L.PRIMARY)), 0 === p ? (f(1), setTimeout(() => f(2), 3000)) : 2 === p && (L(), d(), (0, E.Qd)(o.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (i = null == t ? void 0 : t.id) && void 0 !== i ? i : '', !0, h.L.PRIMARY));
                },
                onDismiss: () => {
                    d(), (0, E.Qd)(o.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, t.id, !0, h.L.DISMISS);
                },
                step: p,
                canEveryoneModerate: n
            })
        ]
    });
}
