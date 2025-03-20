n.d(t, { Z: () => q });
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
    g = n(368326),
    p = n(429467),
    h = n(734934),
    f = n(300284),
    x = n(680295),
    N = n(785717),
    b = n(687158),
    _ = n(899007),
    E = n(648052),
    j = n(867176),
    C = n(537006),
    O = n(483424),
    v = n(681837),
    S = n(502762),
    T = n(530),
    I = n(309494),
    y = n(4517),
    A = n(171368),
    P = n(420654),
    R = n(695346),
    D = n(158776),
    Z = n(246946),
    w = n(572004),
    k = n(5192),
    W = n(74538),
    L = n(474376),
    B = n(435478),
    M = n(591974),
    U = n(764443),
    V = n(383832),
    G = n(981631),
    F = n(228168),
    H = n(388032),
    z = n(652480),
    Y = n(231930);
function K(e) {
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
function q(e) {
    let { currentUser: t, onClose: n, setPopoutRef: q, highlightBadge: X } = e,
        J = __OVERLAY__,
        Q = (0, b.ZP)(t.id),
        { analyticsLocations: $ } = (0, m.ZP)(u.Z.ACCOUNT_PROFILE_POPOUT),
        ee = (0, N.ZB)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: t.id
        }),
        { ref: et } = (0, c.Z)(),
        en = (0, d.Z)(et);
    i.useEffect(() => {
        null == q || q(et.current);
    }, [et, q]);
    let er = (0, l.e7)([D.Z], () => D.Z.getStatus(t.id)),
        ei = (0, l.e7)([Z.Z], () => Z.Z.hidePersonalInformation),
        es = (0, h.p)(),
        ea = R.Sb.useSetting(),
        el = (0, U.I)(er),
        eo = (0, L.g)(n),
        ec = (0, f.Z)({ analyticsLocations: $ }),
        ed = (0, W.I5)(t),
        eu = (0, g.p)({ location: 'AccountProfilePopout' }),
        em = i.useMemo(() => (0, p.Z)(), []),
        eg = (e) => {
            null == n || n(),
                (0, A.openUserProfileModal)(
                    K(
                        {
                            customStatusPrompt: em,
                            sourceAnalyticsLocations: $
                        },
                        ee,
                        e
                    )
                );
        };
    return (0, r.jsx)(m.Gt, {
        value: $,
        children: (0, r.jsx)(N.Mt, {
            value: ee,
            children: (0, r.jsx)(o.VqE, {
                ref: et,
                'aria-label': t.username,
                children: (0, r.jsxs)(S.Z, {
                    className: z.themeContainer,
                    user: t,
                    displayProfile: Q,
                    profileType: F.y0.BITE_SIZE,
                    children: [
                        (0, r.jsxs)('header', {
                            className: Y.header,
                            children: [
                                (0, r.jsx)(j.Z, {
                                    user: t,
                                    displayProfile: Q,
                                    profileType: F.y0.BITE_SIZE
                                }),
                                (0, r.jsx)(_.Z, {
                                    user: t,
                                    displayProfile: Q,
                                    profileType: F.y0.BITE_SIZE,
                                    onOpenProfile: J ? void 0 : eg
                                }),
                                (0, r.jsx)(y.Z, {
                                    location: 'AccountProfilePopout',
                                    user: t,
                                    profileType: F.y0.BITE_SIZE,
                                    onCloseProfile: n,
                                    prompt: eu ? em : null
                                })
                            ]
                        }),
                        (null == Q ? void 0 : Q.profileEffectId) != null &&
                            (0, r.jsx)(x.Z, {
                                profileEffectId: null == Q ? void 0 : Q.profileEffectId,
                                isHovering: en
                            }),
                        (0, r.jsxs)(o.Ttm, {
                            className: z.body,
                            children: [
                                (0, r.jsx)(T.Z, {
                                    user: t,
                                    className: z.username,
                                    profileType: F.y0.BITE_SIZE,
                                    nickname: k.ZP.getName(null, null, t),
                                    onOpenProfile: J ? void 0 : eg,
                                    pronouns: null == Q ? void 0 : Q.pronouns,
                                    tags: (0, r.jsx)(E.Z, {
                                        displayProfile: Q,
                                        profileType: F.y0.BITE_SIZE,
                                        onClose: n,
                                        shouldOpenBadgeTooltip: null != X ? (e) => e === X : void 0
                                    }),
                                    nicknameIcons: (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(v.Z, { userId: t.id }),
                                            (0, r.jsx)(I.Z, {
                                                user: t,
                                                isHovering: en
                                            })
                                        ]
                                    })
                                }),
                                (0, r.jsx)(P.Z, {
                                    user: t,
                                    bio: null == Q ? void 0 : Q.bio,
                                    hidePersonalInformation: ei,
                                    onClose: n
                                }),
                                (0, r.jsx)(C.Z, {
                                    isPremiumUser: ed,
                                    onInteraction: n
                                }),
                                (0, r.jsx)(O.Z, {
                                    user: t,
                                    currentUser: t,
                                    displayProfile: Q,
                                    onClose: n
                                }),
                                (0, r.jsxs)('div', {
                                    className: z.menus,
                                    children: [
                                        (0, r.jsx)(S.Z.Overlay, {
                                            className: z.menuOverlay,
                                            children: (0, r.jsxs)(B.PB, {
                                                id: 'profile-'.concat(t.id),
                                                children: [
                                                    (0, r.jsx)(B.Mv, {
                                                        id: 'edit-profile',
                                                        action: 'EDIT_PROFILE',
                                                        label: H.NW.string(H.t.s5vZlZ),
                                                        icon: o.vdY,
                                                        onClick: () => {
                                                            ec(), n();
                                                        }
                                                    }),
                                                    (0, r.jsx)('div', { className: z.menuDivider }),
                                                    (0, r.jsx)(B.Mv, {
                                                        id: 'set-status',
                                                        action: 'PRESS_SET_STATUS',
                                                        label: (0, r.jsx)(M.Z, {}),
                                                        icon: () =>
                                                            (0, r.jsx)(o.qbd, {
                                                                status: er,
                                                                size: 12
                                                            }),
                                                        hint: (es || er === G.Skl.DND) && (0, r.jsx)(o.owu, { size: 'xxs' }),
                                                        renderSubmenu: s.tq
                                                            ? void 0
                                                            : (e) => {
                                                                  let { closePopout: t } = e;
                                                                  return (0, r.jsx)(B.eq, {
                                                                      navId: 'set-status-submenu',
                                                                      className: z.statusPickerModalMenu,
                                                                      'aria-label': H.NW.string(H.t.E13trK),
                                                                      onClose: t,
                                                                      children: el
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
                                                                                          ((t = K({}, s)),
                                                                                          (n = n =
                                                                                              {
                                                                                                  size: o.CgR.SMALL,
                                                                                                  'aria-label': H.NW.string(H.t['3Uj+2t']),
                                                                                                  className: z.statusPickerModal,
                                                                                                  children: (0, r.jsx)(o.v2r, {
                                                                                                      navId: 'set-status-submenu-mobile-web',
                                                                                                      variant: 'fixed',
                                                                                                      'aria-label': H.NW.string(H.t.E13trK),
                                                                                                      className: z.statusPickerModalMenu,
                                                                                                      hideScroller: !0,
                                                                                                      onClose: i,
                                                                                                      onSelect: void 0,
                                                                                                      children: el
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
                                        (0, r.jsx)(S.Z.Overlay, {
                                            className: z.menuOverlay,
                                            children: (0, r.jsxs)(B.PB, {
                                                id: 'account-'.concat(t.id),
                                                children: [
                                                    (0, r.jsx)(B.Mv, {
                                                        id: 'switch-accounts',
                                                        action: 'PRESS_SWITCH_ACCOUNTS',
                                                        icon: o.lMe,
                                                        label: H.NW.string(H.t.oMNyYG),
                                                        onClick: () => {
                                                            n(), (0, V.Z)();
                                                        },
                                                        renderSubmenu: (e) => {
                                                            let { closePopout: t } = e;
                                                            return (0, r.jsx)(B.eq, {
                                                                navId: 'switch-accounts-submenu',
                                                                'aria-label': H.NW.string(H.t.wFhVqK),
                                                                onClose: t,
                                                                children: eo
                                                            });
                                                        }
                                                    }),
                                                    !__OVERLAY__ &&
                                                        w.wS &&
                                                        ea &&
                                                        (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                (0, r.jsx)('div', { className: z.menuDivider }),
                                                                (0, r.jsx)(B.Mv, {
                                                                    id: 'copy-user-id',
                                                                    action: 'COPY_USER_ID',
                                                                    icon: o.VuL,
                                                                    label: H.NW.string(H.t['/AXYnJ']),
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
