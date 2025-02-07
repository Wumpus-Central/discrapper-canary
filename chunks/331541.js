n.d(t, { Z: () => W });
var i = n(200651),
    l = n(192379),
    r = n(873546),
    a = n(852229),
    s = n(442837),
    o = n(481060),
    c = n(393238),
    d = n(727637),
    u = n(100527),
    h = n(906732),
    m = n(734934),
    p = n(300284),
    g = n(680295),
    _ = n(785717),
    f = n(687158),
    E = n(899007),
    I = n(648052),
    C = n(867176),
    N = n(537006),
    v = n(483424),
    T = n(681837),
    S = n(502762),
    Z = n(530),
    A = n(309494),
    x = n(4517),
    b = n(171368),
    L = n(420654),
    y = n(695346),
    P = n(158776),
    O = n(246946),
    R = n(572004),
    j = n(5192),
    D = n(74538),
    w = n(474376),
    M = n(435478),
    k = n(591974),
    U = n(764443),
    G = n(383832),
    B = n(981631),
    V = n(228168),
    H = n(388032),
    F = n(602654),
    z = n(591156);
function W(e) {
    let { currentUser: t, onClose: n, setPopoutRef: W } = e,
        Y = __OVERLAY__,
        K = (0, f.ZP)(t.id),
        { analyticsLocations: q } = (0, h.ZP)(u.Z.ACCOUNT_PROFILE_POPOUT),
        X = (0, _.ZB)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: t.id
        }),
        { ref: Q } = (0, c.Z)(),
        J = (0, d.Z)(Q);
    l.useEffect(() => {
        null == W || W(Q.current);
    }, [Q, W]);
    let $ = (0, s.e7)([P.Z], () => P.Z.getStatus(t.id)),
        ee = (0, s.e7)([O.Z], () => O.Z.hidePersonalInformation),
        et = (0, m.p)(),
        en = y.Sb.useSetting(),
        ei = (0, U.I)($),
        el = (0, w.g)(n),
        er = (0, p.Z)({ analyticsLocations: q }),
        ea = (0, D.I5)(t),
        es = (e) => {
            null == n || n(),
                (0, b.openUserProfileModal)({
                    sourceAnalyticsLocations: q,
                    ...X,
                    ...e
                });
        };
    return (0, i.jsx)(h.Gt, {
        value: q,
        children: (0, i.jsx)(_.Mt, {
            value: X,
            children: (0, i.jsx)(o.VqE, {
                ref: Q,
                'aria-label': t.username,
                children: (0, i.jsxs)(S.Z, {
                    className: F.themeContainer,
                    user: t,
                    displayProfile: K,
                    profileType: V.y0.BITE_SIZE,
                    children: [
                        (0, i.jsxs)('header', {
                            className: z.header,
                            children: [
                                (0, i.jsx)(C.Z, {
                                    user: t,
                                    displayProfile: K,
                                    profileType: V.y0.BITE_SIZE
                                }),
                                (0, i.jsx)(E.Z, {
                                    user: t,
                                    displayProfile: K,
                                    profileType: V.y0.BITE_SIZE,
                                    onOpenProfile: Y ? void 0 : es
                                }),
                                (0, i.jsx)(x.Z, {
                                    location: 'AccountProfilePopout',
                                    user: t,
                                    profileType: V.y0.BITE_SIZE,
                                    onCloseProfile: n
                                })
                            ]
                        }),
                        (null == K ? void 0 : K.profileEffectId) != null &&
                            (0, i.jsx)(g.Z, {
                                profileEffectId: null == K ? void 0 : K.profileEffectId,
                                isHovering: J
                            }),
                        (0, i.jsxs)(o.Ttm, {
                            className: F.body,
                            children: [
                                (0, i.jsx)(Z.Z, {
                                    user: t,
                                    className: F.username,
                                    profileType: V.y0.BITE_SIZE,
                                    nickname: j.ZP.getName(null, null, t),
                                    onOpenProfile: Y ? void 0 : es,
                                    pronouns: null == K ? void 0 : K.pronouns,
                                    tags: (0, i.jsx)(I.Z, {
                                        displayProfile: K,
                                        profileType: V.y0.BITE_SIZE,
                                        onClose: n
                                    }),
                                    nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(T.Z, { userId: t.id }),
                                            (0, i.jsx)(A.Z, {
                                                user: t,
                                                isHovering: J
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)(L.Z, {
                                    user: t,
                                    bio: null == K ? void 0 : K.bio,
                                    hidePersonalInformation: ee,
                                    onClose: n
                                }),
                                (0, i.jsx)(N.Z, {
                                    isPremiumUser: ea,
                                    onInteraction: n
                                }),
                                (0, i.jsx)(v.Z, {
                                    user: t,
                                    currentUser: t,
                                    displayProfile: K,
                                    onClose: n
                                }),
                                (0, i.jsxs)('div', {
                                    className: F.menus,
                                    children: [
                                        (0, i.jsx)(S.Z.Overlay, {
                                            className: F.menuOverlay,
                                            children: (0, i.jsxs)(M.PB, {
                                                id: 'profile-'.concat(t.id),
                                                children: [
                                                    (0, i.jsx)(M.Mv, {
                                                        id: 'edit-profile',
                                                        action: 'EDIT_PROFILE',
                                                        label: H.intl.string(H.t.s5vZlZ),
                                                        icon: o.vdY,
                                                        onClick: () => {
                                                            er(), n();
                                                        }
                                                    }),
                                                    (0, i.jsx)('div', { className: F.menuDivider }),
                                                    (0, i.jsx)(M.Mv, {
                                                        id: 'set-status',
                                                        action: 'PRESS_SET_STATUS',
                                                        label: (0, i.jsx)(k.Z, { user: t }),
                                                        icon: () =>
                                                            (0, i.jsx)(o.qbd, {
                                                                status: $,
                                                                size: 12
                                                            }),
                                                        hint: (et || $ === B.Skl.DND) && (0, i.jsx)(o.owu, { size: 'xxs' }),
                                                        renderSubmenu: r.tq
                                                            ? void 0
                                                            : (e) => {
                                                                  let { closePopout: t } = e;
                                                                  return (0, i.jsx)(M.eq, {
                                                                      navId: 'set-status-submenu',
                                                                      className: F.statusPickerModalMenu,
                                                                      'aria-label': H.intl.string(H.t.E13trK),
                                                                      onClose: t,
                                                                      children: ei
                                                                  });
                                                              },
                                                        onClick: r.tq
                                                            ? () => {
                                                                  n(),
                                                                      (0, o.ZDy)(
                                                                          () =>
                                                                              new Promise((e) =>
                                                                                  e((e) => {
                                                                                      let { onClose: t, ...n } = e;
                                                                                      return (0, i.jsx)(o.Y0X, {
                                                                                          ...n,
                                                                                          size: o.CgR.SMALL,
                                                                                          'aria-label': H.intl.string(H.t['3Uj+2t']),
                                                                                          className: F.statusPickerModal,
                                                                                          children: (0, i.jsx)(o.v2r, {
                                                                                              navId: 'set-status-submenu-mobile-web',
                                                                                              variant: 'fixed',
                                                                                              'aria-label': H.intl.string(H.t.E13trK),
                                                                                              className: F.statusPickerModalMenu,
                                                                                              hideScroller: !0,
                                                                                              onClose: t,
                                                                                              onSelect: void 0,
                                                                                              children: ei
                                                                                          })
                                                                                      });
                                                                                  })
                                                                              )
                                                                      );
                                                              }
                                                            : void 0
                                                    })
                                                ]
                                            })
                                        }),
                                        (0, i.jsx)(S.Z.Overlay, {
                                            className: F.menuOverlay,
                                            children: (0, i.jsxs)(M.PB, {
                                                id: 'account-'.concat(t.id),
                                                children: [
                                                    (0, i.jsx)(M.Mv, {
                                                        id: 'switch-accounts',
                                                        action: 'PRESS_SWITCH_ACCOUNTS',
                                                        icon: o.lMe,
                                                        label: H.intl.string(H.t.oMNyYG),
                                                        onClick: () => {
                                                            n(), (0, G.Z)();
                                                        },
                                                        renderSubmenu: (e) => {
                                                            let { closePopout: t } = e;
                                                            return (0, i.jsx)(M.eq, {
                                                                navId: 'switch-accounts-submenu',
                                                                'aria-label': H.intl.string(H.t.wFhVqK),
                                                                onClose: t,
                                                                children: el
                                                            });
                                                        }
                                                    }),
                                                    !__OVERLAY__ &&
                                                        R.wS &&
                                                        en &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)('div', { className: F.menuDivider }),
                                                                (0, i.jsx)(M.Mv, {
                                                                    id: 'copy-user-id',
                                                                    action: 'COPY_USER_ID',
                                                                    icon: o.VuL,
                                                                    label: H.intl.string(H.t['/AXYnJ']),
                                                                    onClick: () => {
                                                                        (0, a.J)(t.id), n();
                                                                    }
                                                                })
                                                            ]
                                                        })
                                                ]
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
