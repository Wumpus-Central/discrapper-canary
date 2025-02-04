n.d(t, { Z: () => K });
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
    f = n(816988),
    E = n(687158),
    I = n(899007),
    C = n(648052),
    v = n(867176),
    N = n(537006),
    T = n(483424),
    S = n(681837),
    Z = n(502762),
    x = n(530),
    A = n(309494),
    b = n(4517),
    L = n(171368),
    y = n(420654),
    P = n(695346),
    O = n(158776),
    R = n(246946),
    j = n(572004),
    D = n(5192),
    w = n(74538),
    M = n(51144),
    k = n(474376),
    U = n(435478),
    G = n(764443),
    B = n(383832),
    V = n(981631),
    H = n(228168),
    F = n(388032),
    z = n(602654),
    W = n(591156);
function K(e) {
    var t;
    let { currentUser: n, onClose: K, setPopoutRef: Y } = e,
        q = __OVERLAY__,
        X = (0, E.ZP)(n.id),
        { analyticsLocations: Q } = (0, h.ZP)(u.Z.ACCOUNT_PROFILE_POPOUT),
        J = (0, _.ZB)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: n.id
        }),
        { ref: $ } = (0, c.Z)(),
        ee = (0, d.Z)($);
    l.useEffect(() => {
        null == Y || Y($.current);
    }, [$, Y]);
    let et = (0, s.e7)([O.Z], () => O.Z.getStatus(n.id)),
        en = (0, s.e7)([R.Z], () => R.Z.hidePersonalInformation),
        ei = (0, m.p)(),
        el = P.Sb.useSetting(),
        er = (0, G.I)(et),
        ea = (0, k.g)(K),
        es = (0, p.Z)({ analyticsLocations: Q }),
        { dimissibleUpsellsEnabled: eo } = (0, f.u)({ location: 'AccountProfilePopout' }),
        ec = (0, w.I5)(n),
        ed = (e) => {
            null == K || K(),
                (0, L.openUserProfileModal)({
                    sourceAnalyticsLocations: Q,
                    ...J,
                    ...e
                });
        };
    return (0, i.jsx)(h.Gt, {
        value: Q,
        children: (0, i.jsx)(_.Mt, {
            value: J,
            children: (0, i.jsx)(o.VqE, {
                ref: $,
                'aria-label': n.username,
                children: (0, i.jsxs)(Z.Z, {
                    className: z.themeContainer,
                    user: n,
                    displayProfile: X,
                    profileType: H.y0.BITE_SIZE,
                    children: [
                        (0, i.jsxs)('header', {
                            className: W.header,
                            children: [
                                (0, i.jsx)(v.Z, {
                                    user: n,
                                    displayProfile: X,
                                    profileType: H.y0.BITE_SIZE
                                }),
                                (0, i.jsx)(I.Z, {
                                    user: n,
                                    displayProfile: X,
                                    profileType: H.y0.BITE_SIZE,
                                    onOpenProfile: q ? void 0 : ed
                                }),
                                (0, i.jsx)(b.Z, {
                                    location: 'AccountProfilePopout',
                                    user: n,
                                    profileType: H.y0.BITE_SIZE,
                                    onCloseProfile: K
                                })
                            ]
                        }),
                        (null == X ? void 0 : X.profileEffectId) != null &&
                            (0, i.jsx)(g.Z, {
                                profileEffectId: null == X ? void 0 : X.profileEffectId,
                                isHovering: ee
                            }),
                        (0, i.jsxs)(o.Ttm, {
                            className: z.body,
                            children: [
                                (0, i.jsx)(x.Z, {
                                    user: n,
                                    className: z.username,
                                    profileType: H.y0.BITE_SIZE,
                                    nickname: D.ZP.getName(null, null, n),
                                    onOpenProfile: q ? void 0 : ed,
                                    pronouns: null == X ? void 0 : X.pronouns,
                                    tags: (0, i.jsx)(C.Z, {
                                        displayProfile: X,
                                        profileType: H.y0.BITE_SIZE,
                                        onClose: K
                                    }),
                                    nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(S.Z, { userId: n.id }),
                                            (0, i.jsx)(A.Z, {
                                                user: n,
                                                isHovering: ee
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)(y.Z, {
                                    user: n,
                                    bio: null == X ? void 0 : X.bio,
                                    hidePersonalInformation: en,
                                    onClose: K
                                }),
                                eo &&
                                    (0, i.jsx)(N.Z, {
                                        isPremiumUser: ec,
                                        onInteraction: K
                                    }),
                                (0, i.jsx)(T.Z, {
                                    user: n,
                                    currentUser: n,
                                    displayProfile: X,
                                    onClose: K
                                }),
                                (0, i.jsxs)('div', {
                                    className: z.menus,
                                    children: [
                                        (0, i.jsx)(Z.Z.Overlay, {
                                            className: z.menuOverlay,
                                            children: (0, i.jsxs)(U.PB, {
                                                id: 'profile-'.concat(n.id),
                                                children: [
                                                    (0, i.jsx)(U.Mv, {
                                                        id: 'edit-profile',
                                                        action: 'EDIT_PROFILE',
                                                        label: F.intl.string(F.t.s5vZlZ),
                                                        icon: o.vdY,
                                                        onClick: () => {
                                                            es(), K();
                                                        }
                                                    }),
                                                    (0, i.jsx)('div', { className: z.menuDivider }),
                                                    (0, i.jsx)(U.Mv, {
                                                        id: 'set-status',
                                                        action: 'PRESS_SET_STATUS',
                                                        label: null !== (t = (0, M.u5)(et)) && void 0 !== t ? t : '',
                                                        icon: () =>
                                                            (0, i.jsx)(o.qbd, {
                                                                status: et,
                                                                size: 12
                                                            }),
                                                        hint: (ei || et === V.Skl.DND) && (0, i.jsx)(o.owu, { size: 'xxs' }),
                                                        renderSubmenu: r.tq
                                                            ? void 0
                                                            : (e) => {
                                                                  let { closePopout: t } = e;
                                                                  return (0, i.jsx)(U.eq, {
                                                                      navId: 'set-status-submenu',
                                                                      className: z.statusPickerModalMenu,
                                                                      'aria-label': F.intl.string(F.t.E13trK),
                                                                      onClose: t,
                                                                      children: er
                                                                  });
                                                              },
                                                        onClick: r.tq
                                                            ? () => {
                                                                  K(),
                                                                      (0, o.ZDy)(
                                                                          () =>
                                                                              new Promise((e) =>
                                                                                  e((e) => {
                                                                                      let { onClose: t, ...n } = e;
                                                                                      return (0, i.jsx)(o.Y0X, {
                                                                                          ...n,
                                                                                          size: o.CgR.SMALL,
                                                                                          'aria-label': F.intl.string(F.t['3Uj+2t']),
                                                                                          className: z.statusPickerModal,
                                                                                          children: (0, i.jsx)(o.v2r, {
                                                                                              navId: 'set-status-submenu-mobile-web',
                                                                                              variant: 'fixed',
                                                                                              'aria-label': F.intl.string(F.t.E13trK),
                                                                                              className: z.statusPickerModalMenu,
                                                                                              hideScroller: !0,
                                                                                              onClose: t,
                                                                                              onSelect: void 0,
                                                                                              children: er
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
                                        (0, i.jsx)(Z.Z.Overlay, {
                                            className: z.menuOverlay,
                                            children: (0, i.jsxs)(U.PB, {
                                                id: 'account-'.concat(n.id),
                                                children: [
                                                    (0, i.jsx)(U.Mv, {
                                                        id: 'switch-accounts',
                                                        action: 'PRESS_SWITCH_ACCOUNTS',
                                                        icon: o.lMe,
                                                        label: F.intl.string(F.t.oMNyYG),
                                                        onClick: () => {
                                                            K(), (0, B.Z)();
                                                        },
                                                        renderSubmenu: (e) => {
                                                            let { closePopout: t } = e;
                                                            return (0, i.jsx)(U.eq, {
                                                                navId: 'switch-accounts-submenu',
                                                                'aria-label': F.intl.string(F.t.wFhVqK),
                                                                onClose: t,
                                                                children: ea
                                                            });
                                                        }
                                                    }),
                                                    !__OVERLAY__ &&
                                                        j.wS &&
                                                        el &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)('div', { className: z.menuDivider }),
                                                                (0, i.jsx)(U.Mv, {
                                                                    id: 'copy-user-id',
                                                                    action: 'COPY_USER_ID',
                                                                    icon: o.VuL,
                                                                    label: F.intl.string(F.t['/AXYnJ']),
                                                                    onClick: () => {
                                                                        (0, a.J)(n.id), K();
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
