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
    v = n(537006),
    N = n(483424),
    T = n(681837),
    S = n(502762),
    Z = n(530),
    x = n(309494),
    A = n(4517),
    b = n(171368),
    L = n(420654),
    y = n(695346),
    P = n(158776),
    O = n(246946),
    R = n(572004),
    j = n(5192),
    D = n(74538),
    w = n(51144),
    M = n(474376),
    k = n(435478),
    U = n(764443),
    G = n(383832),
    B = n(981631),
    V = n(228168),
    H = n(388032),
    F = n(602654),
    z = n(591156);
function W(e) {
    var t;
    let { currentUser: n, onClose: W, setPopoutRef: Y } = e,
        K = __OVERLAY__,
        q = (0, f.ZP)(n.id),
        { analyticsLocations: X } = (0, h.ZP)(u.Z.ACCOUNT_PROFILE_POPOUT),
        Q = (0, _.ZB)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: n.id
        }),
        { ref: J } = (0, c.Z)(),
        $ = (0, d.Z)(J);
    l.useEffect(() => {
        null == Y || Y(J.current);
    }, [J, Y]);
    let ee = (0, s.e7)([P.Z], () => P.Z.getStatus(n.id)),
        et = (0, s.e7)([O.Z], () => O.Z.hidePersonalInformation),
        en = (0, m.p)(),
        ei = y.Sb.useSetting(),
        el = (0, U.I)(ee),
        er = (0, M.g)(W),
        ea = (0, p.Z)({ analyticsLocations: X }),
        es = (0, D.I5)(n),
        eo = (e) => {
            null == W || W(),
                (0, b.openUserProfileModal)({
                    sourceAnalyticsLocations: X,
                    ...Q,
                    ...e
                });
        };
    return (0, i.jsx)(h.Gt, {
        value: X,
        children: (0, i.jsx)(_.Mt, {
            value: Q,
            children: (0, i.jsx)(o.VqE, {
                ref: J,
                'aria-label': n.username,
                children: (0, i.jsxs)(S.Z, {
                    className: F.themeContainer,
                    user: n,
                    displayProfile: q,
                    profileType: V.y0.BITE_SIZE,
                    children: [
                        (0, i.jsxs)('header', {
                            className: z.header,
                            children: [
                                (0, i.jsx)(C.Z, {
                                    user: n,
                                    displayProfile: q,
                                    profileType: V.y0.BITE_SIZE
                                }),
                                (0, i.jsx)(E.Z, {
                                    user: n,
                                    displayProfile: q,
                                    profileType: V.y0.BITE_SIZE,
                                    onOpenProfile: K ? void 0 : eo
                                }),
                                (0, i.jsx)(A.Z, {
                                    location: 'AccountProfilePopout',
                                    user: n,
                                    profileType: V.y0.BITE_SIZE,
                                    onCloseProfile: W
                                })
                            ]
                        }),
                        (null == q ? void 0 : q.profileEffectId) != null &&
                            (0, i.jsx)(g.Z, {
                                profileEffectId: null == q ? void 0 : q.profileEffectId,
                                isHovering: $
                            }),
                        (0, i.jsxs)(o.Ttm, {
                            className: F.body,
                            children: [
                                (0, i.jsx)(Z.Z, {
                                    user: n,
                                    className: F.username,
                                    profileType: V.y0.BITE_SIZE,
                                    nickname: j.ZP.getName(null, null, n),
                                    onOpenProfile: K ? void 0 : eo,
                                    pronouns: null == q ? void 0 : q.pronouns,
                                    tags: (0, i.jsx)(I.Z, {
                                        displayProfile: q,
                                        profileType: V.y0.BITE_SIZE,
                                        onClose: W
                                    }),
                                    nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(T.Z, { userId: n.id }),
                                            (0, i.jsx)(x.Z, {
                                                user: n,
                                                isHovering: $
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)(L.Z, {
                                    user: n,
                                    bio: null == q ? void 0 : q.bio,
                                    hidePersonalInformation: et,
                                    onClose: W
                                }),
                                (0, i.jsx)(v.Z, {
                                    isPremiumUser: es,
                                    onInteraction: W
                                }),
                                (0, i.jsx)(N.Z, {
                                    user: n,
                                    currentUser: n,
                                    displayProfile: q,
                                    onClose: W
                                }),
                                (0, i.jsxs)('div', {
                                    className: F.menus,
                                    children: [
                                        (0, i.jsx)(S.Z.Overlay, {
                                            className: F.menuOverlay,
                                            children: (0, i.jsxs)(k.PB, {
                                                id: 'profile-'.concat(n.id),
                                                children: [
                                                    (0, i.jsx)(k.Mv, {
                                                        id: 'edit-profile',
                                                        action: 'EDIT_PROFILE',
                                                        label: H.intl.string(H.t.s5vZlZ),
                                                        icon: o.vdY,
                                                        onClick: () => {
                                                            ea(), W();
                                                        }
                                                    }),
                                                    (0, i.jsx)('div', { className: F.menuDivider }),
                                                    (0, i.jsx)(k.Mv, {
                                                        id: 'set-status',
                                                        action: 'PRESS_SET_STATUS',
                                                        label: null !== (t = (0, w.u5)(ee)) && void 0 !== t ? t : '',
                                                        icon: () =>
                                                            (0, i.jsx)(o.qbd, {
                                                                status: ee,
                                                                size: 12
                                                            }),
                                                        hint: (en || ee === B.Skl.DND) && (0, i.jsx)(o.owu, { size: 'xxs' }),
                                                        renderSubmenu: r.tq
                                                            ? void 0
                                                            : (e) => {
                                                                  let { closePopout: t } = e;
                                                                  return (0, i.jsx)(k.eq, {
                                                                      navId: 'set-status-submenu',
                                                                      className: F.statusPickerModalMenu,
                                                                      'aria-label': H.intl.string(H.t.E13trK),
                                                                      onClose: t,
                                                                      children: el
                                                                  });
                                                              },
                                                        onClick: r.tq
                                                            ? () => {
                                                                  W(),
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
                                                                                              children: el
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
                                            children: (0, i.jsxs)(k.PB, {
                                                id: 'account-'.concat(n.id),
                                                children: [
                                                    (0, i.jsx)(k.Mv, {
                                                        id: 'switch-accounts',
                                                        action: 'PRESS_SWITCH_ACCOUNTS',
                                                        icon: o.lMe,
                                                        label: H.intl.string(H.t.oMNyYG),
                                                        onClick: () => {
                                                            W(), (0, G.Z)();
                                                        },
                                                        renderSubmenu: (e) => {
                                                            let { closePopout: t } = e;
                                                            return (0, i.jsx)(k.eq, {
                                                                navId: 'switch-accounts-submenu',
                                                                'aria-label': H.intl.string(H.t.wFhVqK),
                                                                onClose: t,
                                                                children: er
                                                            });
                                                        }
                                                    }),
                                                    !__OVERLAY__ &&
                                                        R.wS &&
                                                        ei &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)('div', { className: F.menuDivider }),
                                                                (0, i.jsx)(k.Mv, {
                                                                    id: 'copy-user-id',
                                                                    action: 'COPY_USER_ID',
                                                                    icon: o.VuL,
                                                                    label: H.intl.string(H.t['/AXYnJ']),
                                                                    onClick: () => {
                                                                        (0, a.J)(n.id), W();
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
