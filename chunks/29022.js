n.r(t),
    n.d(t, {
        default: function () {
            return G;
        }
    }),
    n(47120),
    n(653041);
var i,
    o,
    a = n(200651),
    l = n(192379),
    r = n(149765),
    s = n(442837),
    c = n(704215),
    d = n(692547),
    u = n(481060),
    _ = n(388905),
    m = n(434404),
    p = n(764260),
    I = n(422559),
    N = n(430824),
    E = n(768581),
    S = n(700785),
    h = n(645041),
    T = n(981631),
    x = n(921944),
    f = n(135899),
    C = n(388032),
    O = n(313488);
function g(e) {
    let { guild: t, headerText: i, headerSubtext: o, step: l } = e,
        r = E.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 120
        });
    return (0, a.jsxs)(u.ModalHeader, {
        className: O.header,
        children: [
            (0, a.jsxs)('div', {
                className: O.headerIconContainer,
                children: [
                    null != r
                        ? (0, a.jsx)(u.Avatar, {
                              src: r,
                              'aria-label': t.name,
                              size: u.AvatarSizes.SIZE_120,
                              className: O.__invalid_guildIcon
                          })
                        : (0, a.jsx)('div', {
                              className: O.acronym,
                              children: t.acronym
                          }),
                    2 === l
                        ? (0, a.jsx)(u.CircleCheckIcon, {
                              size: 'md',
                              className: O.greenPing,
                              color: d.Z.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: d.Z.unsafe_rawColors.WHITE_100.css
                          })
                        : (0, a.jsx)(_.Ee, {
                              src: n(173326),
                              className: O.redPing
                          })
                ]
            }),
            (0, a.jsxs)('div', {
                className: O.headerText,
                children: [
                    (0, a.jsx)(u.Heading, {
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        children: i
                    }),
                    (0, a.jsx)(u.Text, {
                        variant: 'text-md/normal',
                        color: 'header-primary',
                        children: o
                    })
                ]
            })
        ]
    });
}
function R(e) {
    let { guild: t } = e,
        n = (0, s.e7)([N.Z], () => N.Z.getRole(t.id, t.getEveryoneRoleId()));
    if (null == n) return null;
    let { name: i, color: o } = n;
    return (0, a.jsxs)('span', {
        className: O.roleRow,
        children: [
            (0, a.jsx)(u.RoleDot, {
                className: O.roleDot,
                color: o.toString(),
                background: !1,
                tooltip: !1
            }),
            (0, a.jsx)(u.Text, {
                className: O.roleName,
                variant: 'text-sm/medium',
                color: 'interactive-active',
                children: i
            })
        ]
    });
}
((o = i || (i = {}))[(o.DEFAULT = 0)] = 'DEFAULT'), (o[(o.SUBMITTING = 1)] = 'SUBMITTING'), (o[(o.SUBMITTED = 2)] = 'SUBMITTED');
let L = (e) => {
    if (e.toString() === T.Plq.MENTION_EVERYONE.toString()) return C.intl.string(C.t.yCpsQ0);
    return (0, I.wt)(e);
};
function v(e) {
    let { permissions: t, step: n } = e;
    return 2 === n
        ? null
        : (0, a.jsxs)('div', {
              className: O.tableContainer,
              children: [
                  (0, a.jsx)(u.Text, {
                      className: O.tableHeader,
                      variant: 'text-xs/semibold',
                      color: 'text-muted',
                      children: 0 === n ? C.intl.string(C.t['0WZKIy']) : C.intl.string(C.t.xU8RDg)
                  }),
                  (0, a.jsx)('div', {
                      className: O.permissionsTable,
                      children: t.map((e, t) =>
                          (0, a.jsxs)(
                              'div',
                              {
                                  className: O.permissionRow,
                                  children: [
                                      (0, a.jsx)('div', { className: 0 === n ? O.bulletPositive : O.bulletWarning }),
                                      (0, a.jsx)(u.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'text-normal',
                                          children: L(e)
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
        : (2 === n && (t = f.$X),
          (0, a.jsxs)('div', {
              className: O.tableContainer,
              children: [
                  (0, a.jsx)(u.Text, {
                      className: O.tableHeader,
                      variant: 'text-xs/semibold',
                      color: 'text-muted',
                      children: 2 === n ? C.intl.string(C.t.FgMS6u) : C.intl.string(C.t.Yo5qlp)
                  }),
                  (0, a.jsx)('div', {
                      className: O.permissionsTable,
                      children: t.map((e, t) =>
                          (0, a.jsxs)(
                              'div',
                              {
                                  className: O.permissionRow,
                                  children: [
                                      (0, a.jsx)('div', { className: O.bullet }),
                                      (0, a.jsx)(u.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'text-muted',
                                          children: L(e)
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
function b(e) {
    let { permissions: t, step: n } = e,
        { enabledPermissions: i, disabledPermissions: o } = t;
    return 0 === i.length && 2 !== n
        ? null
        : (0, a.jsxs)('div', {
              className: O.table,
              children: [
                  2 !== n
                      ? (0, a.jsx)(v, {
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
function y(e) {
    let { guild: t, permissions: n, step: i, canEveryoneModerate: o, isDefaultNotificationsAllMessages: l } = e;
    return (0, a.jsx)(u.ModalContent, {
        children: (0, a.jsxs)('div', {
            className: O.updatedForm,
            children: [
                l
                    ? (0, a.jsxs)('div', {
                          className: O.checklistRow,
                          children: [
                              (0, a.jsx)(u.CircleCheckIcon, {
                                  size: 'md',
                                  className: O.checklistIcon,
                                  color: d.Z.unsafe_rawColors.GREEN_360.css,
                                  secondaryColor: d.Z.unsafe_rawColors.WHITE_100.css
                              }),
                              (0, a.jsx)(u.Text, {
                                  variant: 'text-md/normal',
                                  children: C.intl.format(C.t.K8Eg4O, {
                                      infoHook: () =>
                                          (0, a.jsx)(u.Tooltip, {
                                              text: C.intl.string(C.t['3h2WyM']),
                                              'aria-label': C.intl.string(C.t['3h2WyM']),
                                              children: (e) =>
                                                  (0, a.jsx)(u.CircleInformationIcon, {
                                                      size: 'xs',
                                                      color: 'currentColor',
                                                      className: O.icon,
                                                      ...e
                                                  })
                                          })
                                  })
                              })
                          ]
                      })
                    : null,
                o
                    ? (0, a.jsxs)('div', {
                          className: O.checklistRow,
                          children: [
                              (0, a.jsx)(u.CircleCheckIcon, {
                                  size: 'md',
                                  className: O.checklistIcon,
                                  color: d.Z.unsafe_rawColors.GREEN_360.css,
                                  secondaryColor: d.Z.unsafe_rawColors.WHITE_100.css
                              }),
                              (0, a.jsx)(u.Text, {
                                  variant: 'text-md/normal',
                                  children: C.intl.string(C.t.LfeFFh)
                              }),
                              (0, a.jsx)(R, { guild: t })
                          ]
                      })
                    : null,
                (0, a.jsx)(b, {
                    permissions: n,
                    step: i
                })
            ]
        })
    });
}
function U(e) {
    let { onConfirm: t, onDismiss: n, canEveryoneModerate: i, step: o } = e;
    return (0, a.jsxs)(u.ModalFooter, {
        className: O.footer,
        children: [
            (0, a.jsx)(u.Button, {
                onClick: t,
                submitting: 1 === o,
                children: 0 === o ? (i ? C.intl.string(C.t.R7GC7e) : C.intl.string(C.t.iOSdAQ)) : C.intl.string(C.t.mVuDq6)
            }),
            0 === o
                ? (0, a.jsx)(u.Button, {
                      look: u.Button.Looks.LINK,
                      onClick: n,
                      color: u.Button.Colors.PRIMARY,
                      children: (0, a.jsx)(u.Text, {
                          variant: 'text-sm/semibold',
                          color: 'header-primary',
                          children: C.intl.string(C.t.gWQZvr)
                      })
                  })
                : null
        ]
    });
}
function G(e) {
    let { guild: t, canEveryoneModerate: n, isDefaultNotificationsAllMessages: i, transitionState: o, onClose: s } = e,
        [d, _] = l.useState(0),
        I = l.useMemo(() => {
            let e = [],
                n = [];
            return (
                f.$X.map((i) => {
                    S.oz(i, t) ? e.push(i) : n.push(i);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: n
                }
            );
        }, [t]);
    if (null == t) return null;
    let E = () => {
            let e = N.Z.getRole(t.id, t.getEveryoneRoleId());
            if (null == e) return;
            let n = r.Od(e.permissions, f.mu);
            (0, p.Gf)(t.id, [
                {
                    ...e,
                    permissions: n
                }
            ]);
        },
        R = () => {
            m.Z.updateGuild({ defaultMessageNotifications: T.bL.ONLY_MENTIONS }), m.Z.saveGuild(t.id, { defaultMessageNotifications: T.bL.ONLY_MENTIONS });
        },
        L = () => {
            n && E(), i && R();
        };
    return (0, a.jsxs)(u.ModalRoot, {
        transitionState: o,
        size: u.ModalSize.SMALL,
        className: O.modal,
        children: [
            (0, a.jsx)(g, {
                guild: t,
                headerText: n ? C.intl.string(C.t['7/ux19']) : C.intl.string(C.t['sRcn4+']),
                headerSubtext: n ? C.intl.string(C.t.aliKPz) : C.intl.string(C.t.F4KDOD),
                step: d
            }),
            (0, a.jsx)(y, {
                guild: t,
                permissions: I,
                step: d,
                canEveryoneModerate: n,
                isDefaultNotificationsAllMessages: i
            }),
            (0, a.jsx)(U, {
                onConfirm: () => {
                    var e, i;
                    !n && (L(), s(), (0, h.Qd)(c.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : '', !0, x.L.PRIMARY)), 0 === d ? (_(1), setTimeout(() => _(2), 3000)) : 2 === d && (L(), s(), (0, h.Qd)(c.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (i = null == t ? void 0 : t.id) && void 0 !== i ? i : '', !0, x.L.PRIMARY));
                },
                onDismiss: () => {
                    s(), (0, h.Qd)(c.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, t.id, !0, x.L.DISMISS);
                },
                step: d,
                canEveryoneModerate: n
            })
        ]
    });
}
