n.d(t, { Z: () => q });
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
    m = n(335131),
    p = n(436774),
    g = n(734934),
    _ = n(759198),
    f = n(300284),
    E = n(680295),
    I = n(703656),
    C = n(785717),
    v = n(687158),
    N = n(899007),
    T = n(648052),
    S = n(867176),
    Z = n(483424),
    x = n(681837),
    A = n(502762),
    b = n(530),
    L = n(309494),
    y = n(4517),
    P = n(171368),
    O = n(420654),
    R = n(695346),
    j = n(158776),
    D = n(246946),
    w = n(572004),
    M = n(5192),
    k = n(111361),
    U = n(51144),
    G = n(474376),
    B = n(435478),
    V = n(764443),
    H = n(383832),
    F = n(981631),
    z = n(228168),
    W = n(388032),
    Y = n(602654),
    K = n(591156);
function q(e) {
    var t;
    let { currentUser: n, onClose: q, setPopoutRef: X } = e,
        Q = __OVERLAY__,
        J = (0, v.ZP)(n.id),
        { analyticsLocations: $ } = (0, h.ZP)(u.Z.ACCOUNT_PROFILE_POPOUT),
        ee = (0, C.ZB)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: n.id
        }),
        { ref: et } = (0, c.Z)(),
        en = (0, d.Z)(et);
    l.useEffect(() => {
        null == X || X(et.current);
    }, [et, X]);
    let ei = (0, s.e7)([j.Z], () => j.Z.getStatus(n.id)),
        el = (0, s.e7)([D.Z], () => D.Z.hidePersonalInformation),
        er = (0, g.p)(),
        ea = R.Sb.useSetting(),
        es = (0, V.I)(ei),
        eo = (0, G.g)(q),
        ec = (0, f.Z)({ analyticsLocations: $ }),
        ed = (0, k.I5)(n),
        eu = (e) => {
            null == q || q(),
                (0, P.openUserProfileModal)({
                    sourceAnalyticsLocations: $,
                    ...ee,
                    ...e
                });
        },
        eh = () => {
            (0, I.uL)(F.Z5c.APPLICATION_STORE), q();
        };
    return (0, i.jsx)(h.Gt, {
        value: $,
        children: (0, i.jsx)(C.Mt, {
            value: ee,
            children: (0, i.jsx)(o.VqE, {
                ref: et,
                'aria-label': n.username,
                children: (0, i.jsxs)(A.Z, {
                    className: Y.themeContainer,
                    user: n,
                    displayProfile: J,
                    profileType: z.y0.BITE_SIZE,
                    children: [
                        (0, i.jsxs)('header', {
                            className: K.header,
                            children: [
                                (0, i.jsx)(S.Z, {
                                    user: n,
                                    displayProfile: J,
                                    profileType: z.y0.BITE_SIZE
                                }),
                                (0, i.jsx)(N.Z, {
                                    user: n,
                                    displayProfile: J,
                                    profileType: z.y0.BITE_SIZE,
                                    onOpenProfile: Q ? void 0 : eu
                                }),
                                (0, i.jsx)(y.Z, {
                                    location: 'AccountProfilePopoutWithEntryPoints',
                                    user: n,
                                    profileType: z.y0.BITE_SIZE,
                                    onCloseProfile: q
                                })
                            ]
                        }),
                        (null == J ? void 0 : J.profileEffectId) != null &&
                            (0, i.jsx)(E.Z, {
                                profileEffectId: null == J ? void 0 : J.profileEffectId,
                                isHovering: en
                            }),
                        (0, i.jsxs)(o.Ttm, {
                            className: Y.body,
                            children: [
                                (0, i.jsx)(b.Z, {
                                    user: n,
                                    className: Y.username,
                                    profileType: z.y0.BITE_SIZE,
                                    nickname: M.ZP.getName(null, null, n),
                                    onOpenProfile: Q ? void 0 : eu,
                                    pronouns: null == J ? void 0 : J.pronouns,
                                    tags: (0, i.jsx)(T.Z, {
                                        displayProfile: J,
                                        profileType: z.y0.BITE_SIZE,
                                        onClose: q
                                    }),
                                    nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(x.Z, { userId: n.id }),
                                            (0, i.jsx)(L.Z, {
                                                user: n,
                                                isHovering: en
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)(O.Z, {
                                    user: n,
                                    bio: null == J ? void 0 : J.bio,
                                    hidePersonalInformation: el,
                                    onClose: q
                                }),
                                (0, i.jsx)(Z.Z, {
                                    user: n,
                                    currentUser: n,
                                    displayProfile: J,
                                    onClose: q
                                }),
                                (0, i.jsxs)('div', {
                                    className: Y.menus,
                                    children: [
                                        (0, i.jsx)(A.Z.Overlay, {
                                            className: Y.menuOverlay,
                                            children: (0, i.jsxs)(B.PB, {
                                                id: 'profile-'.concat(n.id),
                                                children: [
                                                    (0, i.jsx)(B.Mv, {
                                                        id: 'edit-profile',
                                                        action: 'EDIT_PROFILE',
                                                        label: W.intl.string(W.t.s5vZlZ),
                                                        icon: o.vdY,
                                                        onClick: () => {
                                                            ec(), q();
                                                        }
                                                    }),
                                                    (0, i.jsx)('div', { className: Y.menuDivider }),
                                                    (0, i.jsx)(B.Mv, {
                                                        id: 'shop',
                                                        action: z.yM.VISIT_SHOP,
                                                        label: W.intl.string(W.t.b2d0Nz),
                                                        icon: o.EOn,
                                                        onClick: () => {
                                                            (0, m.mK)({
                                                                analyticsLocations: $,
                                                                openInLayer: !1,
                                                                analyticsSource: u.Z.ACCOUNT_PROFILE_POPOUT
                                                            }),
                                                                q();
                                                        }
                                                    }),
                                                    (0, i.jsx)('div', { className: Y.menuDivider }),
                                                    ed
                                                        ? (0, i.jsx)(B.Mv, {
                                                              id: 'view-premium-perks',
                                                              action: z.yM.VIEW_PREMIUM_PERKS,
                                                              label: W.intl.string(W.t.AnlV9f),
                                                              icon: o.SrA,
                                                              onClick: eh
                                                          })
                                                        : (0, i.jsx)(B.Mv, {
                                                              id: 'get-premium',
                                                              action: z.yM.GET_PREMIUM,
                                                              label: (0, i.jsx)(_.Z, {
                                                                  variant: 'text-sm/medium',
                                                                  children: W.intl.string(W.t.x6rkDg)
                                                              }),
                                                              icon: () =>
                                                                  (0, i.jsx)(o.SrA, {
                                                                      size: 'xs',
                                                                      color: p.JX.PREMIUM_TIER_2
                                                                  }),
                                                              onClick: eh
                                                          })
                                                ]
                                            })
                                        }),
                                        (0, i.jsx)(A.Z.Overlay, {
                                            className: Y.menuOverlay,
                                            children: (0, i.jsxs)(B.PB, {
                                                id: 'account-'.concat(n.id),
                                                children: [
                                                    (0, i.jsx)(B.Mv, {
                                                        id: 'set-status',
                                                        action: 'PRESS_SET_STATUS',
                                                        label: null !== (t = (0, U.u5)(ei)) && void 0 !== t ? t : '',
                                                        icon: () =>
                                                            (0, i.jsx)(o.qbd, {
                                                                status: ei,
                                                                size: 12
                                                            }),
                                                        hint: (er || ei === F.Skl.DND) && (0, i.jsx)(o.owu, { size: 'xxs' }),
                                                        renderSubmenu: r.tq
                                                            ? void 0
                                                            : (e) => {
                                                                  let { closePopout: t } = e;
                                                                  return (0, i.jsx)(B.eq, {
                                                                      navId: 'set-status-submenu',
                                                                      className: Y.statusPickerModalMenu,
                                                                      'aria-label': W.intl.string(W.t.E13trK),
                                                                      onClose: t,
                                                                      children: es
                                                                  });
                                                              },
                                                        onClick: r.tq
                                                            ? () => {
                                                                  q(),
                                                                      (0, o.ZDy)(
                                                                          () =>
                                                                              new Promise((e) =>
                                                                                  e((e) => {
                                                                                      let { onClose: t, ...n } = e;
                                                                                      return (0, i.jsx)(o.Y0X, {
                                                                                          ...n,
                                                                                          size: o.CgR.SMALL,
                                                                                          'aria-label': W.intl.string(W.t['3Uj+2t']),
                                                                                          className: Y.statusPickerModal,
                                                                                          children: (0, i.jsx)(o.v2r, {
                                                                                              navId: 'set-status-submenu-mobile-web',
                                                                                              variant: 'fixed',
                                                                                              'aria-label': W.intl.string(W.t.E13trK),
                                                                                              className: Y.statusPickerModalMenu,
                                                                                              hideScroller: !0,
                                                                                              onClose: t,
                                                                                              onSelect: void 0,
                                                                                              children: es
                                                                                          })
                                                                                      });
                                                                                  })
                                                                              )
                                                                      );
                                                              }
                                                            : void 0
                                                    }),
                                                    (0, i.jsx)('div', { className: Y.menuDivider }),
                                                    (0, i.jsx)(B.Mv, {
                                                        id: 'switch-accounts',
                                                        action: 'PRESS_SWITCH_ACCOUNTS',
                                                        icon: o.lMe,
                                                        label: W.intl.string(W.t.oMNyYG),
                                                        onClick: () => {
                                                            q(), (0, H.Z)();
                                                        },
                                                        renderSubmenu: (e) => {
                                                            let { closePopout: t } = e;
                                                            return (0, i.jsx)(B.eq, {
                                                                navId: 'switch-accounts-submenu',
                                                                'aria-label': W.intl.string(W.t.wFhVqK),
                                                                onClose: t,
                                                                children: eo
                                                            });
                                                        }
                                                    })
                                                ]
                                            })
                                        }),
                                        !__OVERLAY__ &&
                                            w.wS &&
                                            ea &&
                                            (0, i.jsx)(A.Z.Overlay, {
                                                className: Y.menuOverlay,
                                                children: (0, i.jsx)(B.PB, {
                                                    id: 'dev-'.concat(n.id),
                                                    children: (0, i.jsx)(B.Mv, {
                                                        id: 'copy-user-id',
                                                        action: 'COPY_USER_ID',
                                                        icon: o.VuL,
                                                        label: W.intl.string(W.t['/AXYnJ']),
                                                        onClick: () => {
                                                            (0, a.J)(n.id), q();
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
