n.d(t, {
    Z: function () {
        return en;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(722770),
    a = n(873546),
    s = n(852229),
    o = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(727637),
    h = n(100527),
    m = n(906732),
    p = n(335131),
    g = n(436774),
    f = n(440051),
    _ = n(734934),
    E = n(158238),
    I = n(759198),
    C = n(300284),
    N = n(680295),
    v = n(703656),
    S = n(785717),
    T = n(687158),
    b = n(899007),
    A = n(648052),
    Z = n(867176),
    x = n(483424),
    L = n(681837),
    P = n(502762),
    O = n(530),
    y = n(309494),
    R = n(495804),
    j = n(171368),
    D = n(420654),
    M = n(695346),
    w = n(158776),
    k = n(246946),
    U = n(572004),
    G = n(70956),
    B = n(5192),
    H = n(111361),
    V = n(51144),
    F = n(246133),
    z = n(474376),
    W = n(435478),
    Y = n(383832),
    K = n(981631),
    q = n(228168),
    X = n(388032),
    Q = n(602654),
    J = n(591156);
let $ = [
    {
        duration: 30 * G.Z.Millis.MINUTE,
        label: () => X.intl.string(X.t.RxJGbG)
    },
    {
        duration: G.Z.Millis.HOUR,
        label: () => X.intl.string(X.t.UMWBZm)
    },
    {
        duration: 3 * G.Z.Millis.HOUR,
        label: () => X.intl.string(X.t.QmYWtr)
    },
    {
        duration: 8 * G.Z.Millis.HOUR,
        label: () => X.intl.string(X.t.EpAXPD)
    },
    {
        duration: G.Z.Millis.DAY,
        label: () => X.intl.string(X.t['755t4u'])
    },
    {
        duration: void 0,
        label: () => X.intl.string(X.t['46dqJS'])
    }
];
function ee(e, t, n) {
    let r = (0, i.jsx)(i.Fragment, {
        children: $.map((n) => {
            let { duration: r, label: l } = n;
            return (0, i.jsx)(
                c.MenuItem,
                {
                    id: ''.concat(e, '-').concat(r),
                    label: l(),
                    action: () => (0, F.Z)(e, t, void 0, r),
                    dontCloseOnAction: !0
                },
                r
            );
        })
    });
    return (0, i.jsx)(c.MenuItem, {
        id: e,
        className: Q.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        label: (t) => {
            let { isFocused: r } = t;
            return (0, i.jsxs)('div', {
                className: Q.statusItem,
                children: [
                    (0, i.jsx)(c.Status, {
                        status: e,
                        className: Q.icon,
                        size: 10,
                        color: r ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: Q.status,
                        children: (0, V.u5)(e)
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: Q.description,
                            children: n
                        })
                ]
            });
        },
        action: () => (0, F.Z)(e, t),
        dontCloseOnAction: !0,
        children: e !== K.Skl.ONLINE ? r : void 0
    });
}
function et(e, t, n) {
    return (0, i.jsx)(c.MenuItem, {
        id: e,
        keepItemStyles: !0,
        render: (t) => {
            let { isFocused: r } = t;
            return (0, i.jsxs)('div', {
                className: Q.statusItem,
                children: [
                    (0, i.jsx)(c.Status, {
                        status: e,
                        className: Q.icon,
                        size: 10,
                        color: r ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: Q.status,
                        children: (0, V.u5)(e)
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: Q.description,
                            children: n
                        })
                ]
            });
        },
        action: () => (0, F.Z)(e, t),
        dontCloseOnAction: !0
    });
}
function en(e) {
    var t;
    let { currentUser: n, onClose: G, setPopoutRef: F } = e,
        en = __OVERLAY__,
        ei = (0, T.ZP)(n.id),
        { analyticsLocations: er } = (0, m.ZP)(h.Z.ACCOUNT_PROFILE_POPOUT),
        el = (0, S.ZB)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: n.id
        }),
        { ref: ea } = (0, d.Z)(),
        es = (0, u.Z)(ea);
    r.useEffect(() => {
        null == F || F(ea.current);
    }, [ea, F]);
    let eo = (0, o.e7)([w.Z], () => w.Z.getStatus(n.id)),
        ec = (0, o.e7)([k.Z], () => k.Z.hidePersonalInformation),
        ed = (0, _.p)(),
        eu = M.Sb.useSetting(),
        eh = (function (e) {
            let t = f.Y.useExperiment({ location: 'AccountProfilePopout' }).expiringStatus,
                n = M.Cr.useSetting(),
                r = (0, _.p)(),
                a = E.e.useExperiment({ location: 'AccountProfilePopout' }).allowQuietMode || r,
                s = M.fv.useSetting(),
                o = e === K.Skl.DND,
                d = (t) => {
                    let i =
                        null != n && '0' !== n
                            ? X.intl.formatToPlainString(X.t.BWD8fn, {
                                  endTime: new Date(Number(n)).toLocaleString(X.intl.currentLocale, {
                                      month: 'numeric',
                                      day: 'numeric',
                                      hour: 'numeric',
                                      minute: '2-digit'
                                  })
                              })
                            : void 0;
                    if (e === t && null != i) return i;
                    switch (t) {
                        case K.Skl.DND:
                            return a ? X.intl.string(X.t.day5Aw) : X.intl.string(X.t.U9Vv19);
                        case K.Skl.INVISIBLE:
                            return X.intl.string(X.t.MqanVF);
                        default:
                            return;
                    }
                },
                u = (0, i.jsx)(i.Fragment, {
                    children: $.map((t) => {
                        let { duration: n, label: r } = t;
                        return (0, i.jsx)(
                            c.MenuItem,
                            {
                                id: ''.concat(e, '-').concat(n),
                                label: r(),
                                action: () => {
                                    (0, _.oW)(!0, n);
                                },
                                dontCloseOnAction: !0
                            },
                            n
                        );
                    })
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    et(K.Skl.ONLINE, e),
                    (0, i.jsx)(c.MenuSeparator, {}, 'menu-separator-statuses'),
                    t ? ee(K.Skl.IDLE, e, d(K.Skl.IDLE)) : et(K.Skl.IDLE, e, d(K.Skl.IDLE)),
                    t ? ee(K.Skl.DND, e, d(K.Skl.DND)) : et(K.Skl.DND, e, d(K.Skl.DND)),
                    t ? ee(K.Skl.INVISIBLE, e, d(K.Skl.INVISIBLE)) : et(K.Skl.INVISIBLE, e, d(K.Skl.INVISIBLE)),
                    a || r
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(c.MenuSeparator, {}, 'menu-separator-statuses'),
                                  (0, i.jsx)(
                                      c.MenuItem,
                                      {
                                          id: 'quiet-mode',
                                          'aria-label': 'focus mode',
                                          className: Q.expiringStatusMenuItem,
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: () =>
                                              (0, i.jsxs)('div', {
                                                  className: Q.statusItem,
                                                  children: [
                                                      (0, i.jsx)(c.BellSlashIcon, {
                                                          size: 'xxs',
                                                          className: Q.icon
                                                      }),
                                                      (0, i.jsxs)('div', {
                                                          className: Q.focusModeTitle,
                                                          children: [
                                                              X.intl.string(X.t.gJRnwM),
                                                              (0, i.jsx)(c.TextBadge, {
                                                                  text: r ? X.intl.string(X.t.ApAu9f) : o ? X.intl.string(X.t.gH3Fra) : X.intl.string(X.t['64pl8/']),
                                                                  color: r ? l.Z.BRAND_500 : o ? l.Z.RED_400 : l.Z.PRIMARY_500
                                                              })
                                                          ]
                                                      }),
                                                      (0, i.jsx)('div', {
                                                          className: Q.description,
                                                          children:
                                                              r && null != s && '0' !== s
                                                                  ? X.intl.formatToPlainString(X.t.BWD8fn, {
                                                                        endTime: new Date(Number(s)).toLocaleString(X.intl.currentLocale, {
                                                                            month: 'numeric',
                                                                            day: 'numeric',
                                                                            hour: 'numeric',
                                                                            minute: '2-digit'
                                                                        })
                                                                    })
                                                                  : X.intl.string(X.t['Br1q+/'])
                                                      })
                                                  ]
                                              }),
                                          action: () => {
                                              (0, _.oW)(!r);
                                          },
                                          dontCloseOnAction: !0,
                                          children: u
                                      },
                                      'quiet-mode'
                                  )
                              ]
                          })
                        : null
                ]
            });
        })(eo),
        em = (0, z.g)(G),
        ep = (0, C.Z)({ analyticsLocations: er }),
        eg = (0, H.I5)(n),
        ef = (e) => {
            null == G || G(),
                (0, j.openUserProfileModal)({
                    sourceAnalyticsLocations: er,
                    ...el,
                    ...e
                });
        },
        e_ = () => {
            (0, v.uL)(K.Z5c.APPLICATION_STORE), G();
        };
    return (0, i.jsx)(m.Gt, {
        value: er,
        children: (0, i.jsx)(S.Mt, {
            value: el,
            children: (0, i.jsx)(c.Dialog, {
                ref: ea,
                'aria-label': n.username,
                children: (0, i.jsxs)(P.Z, {
                    className: Q.themeContainer,
                    user: n,
                    displayProfile: ei,
                    profileType: q.y0.BITE_SIZE,
                    children: [
                        (0, i.jsxs)('header', {
                            className: J.header,
                            children: [
                                (0, i.jsx)(Z.Z, {
                                    user: n,
                                    displayProfile: ei,
                                    profileType: q.y0.BITE_SIZE
                                }),
                                (0, i.jsx)(b.Z, {
                                    user: n,
                                    displayProfile: ei,
                                    profileType: q.y0.BITE_SIZE,
                                    onOpenProfile: en ? void 0 : ef
                                }),
                                (0, i.jsx)(R.Z, {
                                    location: 'AccountProfilePopoutWithEntryPoints',
                                    user: n,
                                    profileType: q.y0.BITE_SIZE,
                                    onCloseProfile: G
                                })
                            ]
                        }),
                        (null == ei ? void 0 : ei.profileEffectId) != null &&
                            (0, i.jsx)(N.Z, {
                                profileEffectId: null == ei ? void 0 : ei.profileEffectId,
                                isHovering: es
                            }),
                        (0, i.jsxs)(c.Scroller, {
                            className: Q.body,
                            children: [
                                (0, i.jsx)(O.Z, {
                                    user: n,
                                    className: Q.username,
                                    profileType: q.y0.BITE_SIZE,
                                    nickname: B.ZP.getName(null, null, n),
                                    onOpenProfile: en ? void 0 : ef,
                                    pronouns: null == ei ? void 0 : ei.pronouns,
                                    tags: (0, i.jsx)(A.Z, {
                                        displayProfile: ei,
                                        profileType: q.y0.BITE_SIZE,
                                        onClose: G
                                    }),
                                    nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(L.Z, { userId: n.id }),
                                            (0, i.jsx)(y.Z, {
                                                user: n,
                                                isHovering: es
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)(D.Z, {
                                    user: n,
                                    bio: null == ei ? void 0 : ei.bio,
                                    hidePersonalInformation: ec,
                                    onClose: G
                                }),
                                (0, i.jsx)(x.Z, {
                                    user: n,
                                    currentUser: n,
                                    onClose: G
                                }),
                                (0, i.jsxs)('div', {
                                    className: Q.menus,
                                    children: [
                                        (0, i.jsx)(P.Z.Overlay, {
                                            className: Q.menuOverlay,
                                            children: (0, i.jsxs)(W.PB, {
                                                id: 'profile-'.concat(n.id),
                                                children: [
                                                    (0, i.jsx)(W.Mv, {
                                                        id: 'edit-profile',
                                                        action: 'EDIT_PROFILE',
                                                        label: X.intl.string(X.t.s5vZlZ),
                                                        icon: c.PencilIcon,
                                                        onClick: () => {
                                                            ep(), G();
                                                        }
                                                    }),
                                                    (0, i.jsx)('div', { className: Q.menuDivider }),
                                                    (0, i.jsx)(W.Mv, {
                                                        id: 'shop',
                                                        action: q.yM.VISIT_SHOP,
                                                        label: X.intl.string(X.t.b2d0Nz),
                                                        icon: c.ShopIcon,
                                                        onClick: () => {
                                                            (0, p.mK)({
                                                                analyticsLocations: er,
                                                                openInLayer: !1,
                                                                analyticsSource: h.Z.ACCOUNT_PROFILE_POPOUT
                                                            }),
                                                                G();
                                                        }
                                                    }),
                                                    (0, i.jsx)('div', { className: Q.menuDivider }),
                                                    eg
                                                        ? (0, i.jsx)(W.Mv, {
                                                              id: 'view-premium-perks',
                                                              action: q.yM.VIEW_PREMIUM_PERKS,
                                                              label: X.intl.string(X.t.AnlV9f),
                                                              icon: c.NitroWheelIcon,
                                                              onClick: e_
                                                          })
                                                        : (0, i.jsx)(W.Mv, {
                                                              id: 'get-premium',
                                                              action: q.yM.GET_PREMIUM,
                                                              label: (0, i.jsx)(I.Z, {
                                                                  variant: 'text-sm/medium',
                                                                  children: X.intl.string(X.t.x6rkDg)
                                                              }),
                                                              icon: () =>
                                                                  (0, i.jsx)(c.NitroWheelIcon, {
                                                                      size: 'xs',
                                                                      color: g.JX.PREMIUM_TIER_2
                                                                  }),
                                                              onClick: e_
                                                          })
                                                ]
                                            })
                                        }),
                                        (0, i.jsx)(P.Z.Overlay, {
                                            className: Q.menuOverlay,
                                            children: (0, i.jsxs)(W.PB, {
                                                id: 'account-'.concat(n.id),
                                                children: [
                                                    (0, i.jsx)(W.Mv, {
                                                        id: 'set-status',
                                                        action: 'PRESS_SET_STATUS',
                                                        label: null !== (t = (0, V.u5)(eo)) && void 0 !== t ? t : '',
                                                        icon: () =>
                                                            (0, i.jsx)(c.Status, {
                                                                status: eo,
                                                                size: 12
                                                            }),
                                                        hint: (ed || eo === K.Skl.DND) && (0, i.jsx)(c.BellSlashIcon, { size: 'xxs' }),
                                                        renderSubmenu: a.tq
                                                            ? void 0
                                                            : (e) => {
                                                                  let { closePopout: t } = e;
                                                                  return (0, i.jsx)(W.eq, {
                                                                      navId: 'set-status-submenu',
                                                                      className: Q.statusPickerModalMenu,
                                                                      'aria-label': X.intl.string(X.t.E13trK),
                                                                      onClose: t,
                                                                      children: eh
                                                                  });
                                                              },
                                                        onClick: a.tq
                                                            ? () => {
                                                                  G(),
                                                                      (0, c.openModalLazy)(
                                                                          () =>
                                                                              new Promise((e) =>
                                                                                  e((e) => {
                                                                                      let { onClose: t, ...n } = e;
                                                                                      return (0, i.jsx)(c.ModalRoot, {
                                                                                          ...n,
                                                                                          size: c.ModalSize.SMALL,
                                                                                          'aria-label': X.intl.string(X.t['3Uj+2t']),
                                                                                          className: Q.statusPickerModal,
                                                                                          children: (0, i.jsx)(c.Menu, {
                                                                                              navId: 'set-status-submenu-mobile-web',
                                                                                              variant: 'fixed',
                                                                                              'aria-label': X.intl.string(X.t.E13trK),
                                                                                              className: Q.statusPickerModalMenu,
                                                                                              hideScroller: !0,
                                                                                              onClose: t,
                                                                                              onSelect: void 0,
                                                                                              children: eh
                                                                                          })
                                                                                      });
                                                                                  })
                                                                              )
                                                                      );
                                                              }
                                                            : void 0
                                                    }),
                                                    (0, i.jsx)('div', { className: Q.menuDivider }),
                                                    (0, i.jsx)(W.Mv, {
                                                        id: 'switch-accounts',
                                                        action: 'PRESS_SWITCH_ACCOUNTS',
                                                        icon: c.UserCircleIcon,
                                                        label: X.intl.string(X.t.oMNyYG),
                                                        onClick: () => {
                                                            G(), (0, Y.Z)();
                                                        },
                                                        renderSubmenu: (e) => {
                                                            let { closePopout: t } = e;
                                                            return (0, i.jsx)(W.eq, {
                                                                navId: 'switch-accounts-submenu',
                                                                'aria-label': X.intl.string(X.t.wFhVqK),
                                                                onClose: t,
                                                                children: em
                                                            });
                                                        }
                                                    })
                                                ]
                                            })
                                        }),
                                        !__OVERLAY__ &&
                                            U.wS &&
                                            eu &&
                                            (0, i.jsx)(P.Z.Overlay, {
                                                className: Q.menuOverlay,
                                                children: (0, i.jsx)(W.PB, {
                                                    id: 'dev-'.concat(n.id),
                                                    children: (0, i.jsx)(W.Mv, {
                                                        id: 'copy-user-id',
                                                        action: 'COPY_USER_ID',
                                                        icon: c.IdIcon,
                                                        label: X.intl.string(X.t['/AXYnJ']),
                                                        onClick: () => {
                                                            (0, s.J)(n.id), G();
                                                        }
                                                    })
                                                })
                                            })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
