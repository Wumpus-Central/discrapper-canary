n.d(t, { Z: () => Y });
var r = n(200651),
    i = n(192379),
    s = n(873546),
    a = n(852229),
    l = n(442837),
    o = n(481060),
    c = n(393238),
    d = n(727637),
    u = n(100527),
    m = n(906732),
    g = n(734934),
    p = n(300284),
    h = n(680295),
    f = n(785717),
    N = n(687158),
    x = n(899007),
    b = n(648052),
    _ = n(867176),
    E = n(537006),
    j = n(483424),
    C = n(681837),
    O = n(502762),
    v = n(530),
    S = n(309494),
    T = n(4517),
    I = n(171368),
    y = n(420654),
    A = n(695346),
    P = n(158776),
    R = n(246946),
    D = n(572004),
    Z = n(5192),
    w = n(74538),
    k = n(474376),
    W = n(435478),
    L = n(591974),
    B = n(764443),
    M = n(383832),
    U = n(981631),
    V = n(228168),
    G = n(388032),
    F = n(307525),
    H = n(913340);
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function Y(e) {
    let { currentUser: t, onClose: n, setPopoutRef: Y } = e,
        K = __OVERLAY__,
        q = (0, N.ZP)(t.id),
        { analyticsLocations: X } = (0, m.ZP)(u.Z.ACCOUNT_PROFILE_POPOUT),
        J = (0, f.ZB)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: t.id
        }),
        { ref: Q } = (0, c.Z)(),
        $ = (0, d.Z)(Q);
    i.useEffect(() => {
        null == Y || Y(Q.current);
    }, [Q, Y]);
    let ee = (0, l.e7)([P.Z], () => P.Z.getStatus(t.id)),
        et = (0, l.e7)([R.Z], () => R.Z.hidePersonalInformation),
        en = (0, g.p)(),
        er = A.Sb.useSetting(),
        ei = (0, B.I)(ee),
        es = (0, k.g)(n),
        ea = (0, p.Z)({ analyticsLocations: X }),
        el = (0, w.I5)(t),
        eo = (e) => {
            null == n || n(), (0, I.openUserProfileModal)(z({ sourceAnalyticsLocations: X }, J, e));
        };
    return (0, r.jsx)(m.Gt, {
        value: X,
        children: (0, r.jsx)(f.Mt, {
            value: J,
            children: (0, r.jsx)(o.VqE, {
                ref: Q,
                'aria-label': t.username,
                children: (0, r.jsxs)(O.Z, {
                    className: F.themeContainer,
                    user: t,
                    displayProfile: q,
                    profileType: V.y0.BITE_SIZE,
                    children: [
                        (0, r.jsxs)('header', {
                            className: H.header,
                            children: [
                                (0, r.jsx)(_.Z, {
                                    user: t,
                                    displayProfile: q,
                                    profileType: V.y0.BITE_SIZE
                                }),
                                (0, r.jsx)(x.Z, {
                                    user: t,
                                    displayProfile: q,
                                    profileType: V.y0.BITE_SIZE,
                                    onOpenProfile: K ? void 0 : eo
                                }),
                                (0, r.jsx)(T.Z, {
                                    location: 'AccountProfilePopout',
                                    user: t,
                                    profileType: V.y0.BITE_SIZE,
                                    onCloseProfile: n
                                })
                            ]
                        }),
                        (null == q ? void 0 : q.profileEffectId) != null &&
                            (0, r.jsx)(h.Z, {
                                profileEffectId: null == q ? void 0 : q.profileEffectId,
                                isHovering: $
                            }),
                        (0, r.jsxs)(o.Ttm, {
                            className: F.body,
                            children: [
                                (0, r.jsx)(v.Z, {
                                    user: t,
                                    className: F.username,
                                    profileType: V.y0.BITE_SIZE,
                                    nickname: Z.ZP.getName(null, null, t),
                                    onOpenProfile: K ? void 0 : eo,
                                    pronouns: null == q ? void 0 : q.pronouns,
                                    tags: (0, r.jsx)(b.Z, {
                                        displayProfile: q,
                                        profileType: V.y0.BITE_SIZE,
                                        onClose: n
                                    }),
                                    nicknameIcons: (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(C.Z, { userId: t.id }),
                                            (0, r.jsx)(S.Z, {
                                                user: t,
                                                isHovering: $
                                            })
                                        ]
                                    })
                                }),
                                (0, r.jsx)(y.Z, {
                                    user: t,
                                    bio: null == q ? void 0 : q.bio,
                                    hidePersonalInformation: et,
                                    onClose: n
                                }),
                                (0, r.jsx)(E.Z, {
                                    isPremiumUser: el,
                                    onInteraction: n
                                }),
                                (0, r.jsx)(j.Z, {
                                    user: t,
                                    currentUser: t,
                                    displayProfile: q,
                                    onClose: n
                                }),
                                (0, r.jsxs)('div', {
                                    className: F.menus,
                                    children: [
                                        (0, r.jsx)(O.Z.Overlay, {
                                            className: F.menuOverlay,
                                            children: (0, r.jsxs)(W.PB, {
                                                id: 'profile-'.concat(t.id),
                                                children: [
                                                    (0, r.jsx)(W.Mv, {
                                                        id: 'edit-profile',
                                                        action: 'EDIT_PROFILE',
                                                        label: G.NW.string(G.t.s5vZlZ),
                                                        icon: o.vdY,
                                                        onClick: () => {
                                                            ea(), n();
                                                        }
                                                    }),
                                                    (0, r.jsx)('div', { className: F.menuDivider }),
                                                    (0, r.jsx)(W.Mv, {
                                                        id: 'set-status',
                                                        action: 'PRESS_SET_STATUS',
                                                        label: (0, r.jsx)(L.Z, {}),
                                                        icon: () =>
                                                            (0, r.jsx)(o.qbd, {
                                                                status: ee,
                                                                size: 12
                                                            }),
                                                        hint: (en || ee === U.Skl.DND) && (0, r.jsx)(o.owu, { size: 'xxs' }),
                                                        renderSubmenu: s.tq
                                                            ? void 0
                                                            : (e) => {
                                                                  let { closePopout: t } = e;
                                                                  return (0, r.jsx)(W.eq, {
                                                                      navId: 'set-status-submenu',
                                                                      className: F.statusPickerModalMenu,
                                                                      'aria-label': G.NW.string(G.t.E13trK),
                                                                      onClose: t,
                                                                      children: ei
                                                                  });
                                                              },
                                                        onClick: s.tq
                                                            ? () => {
                                                                  n(),
                                                                      (0, o.ZDy)(
                                                                          () =>
                                                                              new Promise((e) =>
                                                                                  e((e) => {
                                                                                      var t,
                                                                                          n,
                                                                                          { onClose: i } = e,
                                                                                          s = (function (e, t) {
                                                                                              if (null == e) return {};
                                                                                              var n,
                                                                                                  r,
                                                                                                  i = (function (e, t) {
                                                                                                      if (null == e) return {};
                                                                                                      var n,
                                                                                                          r,
                                                                                                          i = {},
                                                                                                          s = Object.keys(e);
                                                                                                      for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                                                                      return i;
                                                                                                  })(e, t);
                                                                                              if (Object.getOwnPropertySymbols) {
                                                                                                  var s = Object.getOwnPropertySymbols(e);
                                                                                                  for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                                                                              }
                                                                                              return i;
                                                                                          })(e, ['onClose']);
                                                                                      return (0, r.jsx)(
                                                                                          o.Y0X,
                                                                                          ((t = z({}, s)),
                                                                                          (n = n =
                                                                                              {
                                                                                                  size: o.CgR.SMALL,
                                                                                                  'aria-label': G.NW.string(G.t['3Uj+2t']),
                                                                                                  className: F.statusPickerModal,
                                                                                                  children: (0, r.jsx)(o.v2r, {
                                                                                                      navId: 'set-status-submenu-mobile-web',
                                                                                                      variant: 'fixed',
                                                                                                      'aria-label': G.NW.string(G.t.E13trK),
                                                                                                      className: F.statusPickerModalMenu,
                                                                                                      hideScroller: !0,
                                                                                                      onClose: i,
                                                                                                      onSelect: void 0,
                                                                                                      children: ei
                                                                                                  })
                                                                                              }),
                                                                                          Object.getOwnPropertyDescriptors
                                                                                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                                                              : (function (e, t) {
                                                                                                    var n = Object.keys(e);
                                                                                                    if (Object.getOwnPropertySymbols) {
                                                                                                        var r = Object.getOwnPropertySymbols(e);
                                                                                                        n.push.apply(n, r);
                                                                                                    }
                                                                                                    return n;
                                                                                                })(Object(n)).forEach(function (e) {
                                                                                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                                                                }),
                                                                                          t)
                                                                                      );
                                                                                  })
                                                                              )
                                                                      );
                                                              }
                                                            : void 0
                                                    })
                                                ]
                                            })
                                        }),
                                        (0, r.jsx)(O.Z.Overlay, {
                                            className: F.menuOverlay,
                                            children: (0, r.jsxs)(W.PB, {
                                                id: 'account-'.concat(t.id),
                                                children: [
                                                    (0, r.jsx)(W.Mv, {
                                                        id: 'switch-accounts',
                                                        action: 'PRESS_SWITCH_ACCOUNTS',
                                                        icon: o.lMe,
                                                        label: G.NW.string(G.t.oMNyYG),
                                                        onClick: () => {
                                                            n(), (0, M.Z)();
                                                        },
                                                        renderSubmenu: (e) => {
                                                            let { closePopout: t } = e;
                                                            return (0, r.jsx)(W.eq, {
                                                                navId: 'switch-accounts-submenu',
                                                                'aria-label': G.NW.string(G.t.wFhVqK),
                                                                onClose: t,
                                                                children: es
                                                            });
                                                        }
                                                    }),
                                                    !__OVERLAY__ &&
                                                        D.wS &&
                                                        er &&
                                                        (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                (0, r.jsx)('div', { className: F.menuDivider }),
                                                                (0, r.jsx)(W.Mv, {
                                                                    id: 'copy-user-id',
                                                                    action: 'COPY_USER_ID',
                                                                    icon: o.VuL,
                                                                    label: G.NW.string(G.t['/AXYnJ']),
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
