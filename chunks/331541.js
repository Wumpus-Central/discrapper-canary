n.d(t, { Z: () => J });
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
    h = n(440051),
    f = n(734934),
    b = n(300284),
    N = n(680295),
    x = n(785717),
    _ = n(687158),
    E = n(899007),
    j = n(648052),
    O = n(867176),
    C = n(537006),
    S = n(483424),
    v = n(681837),
    T = n(502762),
    I = n(530),
    y = n(309494),
    A = n(4517),
    P = n(171368),
    R = n(420654),
    D = n(695346),
    Z = n(158776),
    w = n(246946),
    k = n(572004),
    W = n(5192),
    L = n(74538),
    B = n(514577),
    M = n(474376),
    U = n(435478),
    V = n(591974),
    G = n(764443),
    F = n(383832),
    H = n(981631),
    z = n(228168),
    Y = n(388032),
    K = n(659233),
    q = n(200669);
function X(e) {
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
function J(e) {
    let { currentUser: t, onClose: n, setPopoutRef: J, pendingBadges: Q, highlightBadge: $ } = e,
        ee = __OVERLAY__,
        et = (0, _.ZP)(t.id),
        { analyticsLocations: en } = (0, m.ZP)(u.Z.ACCOUNT_PROFILE_POPOUT),
        er = (0, x.ZB)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: t.id
        }),
        { ref: ei } = (0, c.Z)(),
        es = (0, d.Z)(ei);
    i.useEffect(() => {
        null == J || J(ei.current);
    }, [ei, J]),
        i.useEffect(() => (B.a.setState({ isOpen: !0 }), () => B.a.setState({ isOpen: !1 })), []);
    let ea = (0, l.e7)([Z.Z], () => Z.Z.getStatus(t.id)),
        el = D.Cr.useSetting(),
        eo = (0, G.F)(el),
        { expiringStatusProfileFeedback: ec } = h.Y.useExperiment({ location: 'AccountProfilePopout' }, { autoTrackExposure: !1 }),
        ed = (0, l.e7)([w.Z], () => w.Z.hidePersonalInformation),
        eu = (0, f.p)(),
        em = D.Sb.useSetting(),
        eg = (0, G.I)(ea),
        ep = (0, M.g)(n),
        eh = (0, b.Z)({ analyticsLocations: en }),
        ef = (0, L.I5)(t),
        eb = (0, g.p)({ location: 'AccountProfilePopout' }),
        eN = i.useMemo(() => (0, p.Z)(), []),
        ex = (e) => {
            null == n || n(),
                (0, P.openUserProfileModal)(
                    X(
                        {
                            customStatusPrompt: eN,
                            sourceAnalyticsLocations: en
                        },
                        er,
                        e
                    )
                );
        };
    return (0, r.jsx)(m.Gt, {
        value: en,
        children: (0, r.jsx)(x.Mt, {
            value: er,
            children: (0, r.jsx)(o.VqE, {
                ref: ei,
                'aria-label': t.username,
                children: (0, r.jsxs)(T.Z, {
                    className: K.themeContainer,
                    user: t,
                    displayProfile: et,
                    profileType: z.y0.BITE_SIZE,
                    children: [
                        (0, r.jsxs)('header', {
                            className: q.header,
                            children: [
                                (0, r.jsx)(O.Z, {
                                    user: t,
                                    displayProfile: et,
                                    profileType: z.y0.BITE_SIZE
                                }),
                                (0, r.jsx)(E.Z, {
                                    user: t,
                                    displayProfile: et,
                                    profileType: z.y0.BITE_SIZE,
                                    onOpenProfile: ee ? void 0 : ex
                                }),
                                (0, r.jsx)(A.Z, {
                                    location: 'AccountProfilePopout',
                                    user: t,
                                    profileType: z.y0.BITE_SIZE,
                                    onCloseProfile: n,
                                    prompt: eb ? eN : null
                                })
                            ]
                        }),
                        (null == et ? void 0 : et.profileEffectId) != null &&
                            (0, r.jsx)(N.Z, {
                                profileEffectId: null == et ? void 0 : et.profileEffectId,
                                isHovering: es
                            }),
                        (0, r.jsxs)(o.Ttm, {
                            className: K.body,
                            children: [
                                (0, r.jsx)(I.Z, {
                                    user: t,
                                    className: K.username,
                                    profileType: z.y0.BITE_SIZE,
                                    nickname: W.ZP.getName(null, null, t),
                                    onOpenProfile: ee ? void 0 : ex,
                                    pronouns: null == et ? void 0 : et.pronouns,
                                    tags: (0, r.jsx)(j.Z, {
                                        displayProfile: et,
                                        profileType: z.y0.BITE_SIZE,
                                        onClose: n,
                                        pendingBadges: Q,
                                        shouldOpenBadgeTooltip: null != $ ? (e) => e === $ : void 0
                                    }),
                                    nicknameIcons: (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(v.Z, { userId: t.id }),
                                            (0, r.jsx)(y.Z, {
                                                user: t,
                                                isHovering: es
                                            })
                                        ]
                                    })
                                }),
                                (0, r.jsx)(R.Z, {
                                    user: t,
                                    bio: null == et ? void 0 : et.bio,
                                    hidePersonalInformation: ed,
                                    onClose: n
                                }),
                                (0, r.jsx)(C.Z, {
                                    isPremiumUser: ef,
                                    onInteraction: n
                                }),
                                (0, r.jsx)(S.Z, {
                                    user: t,
                                    currentUser: t,
                                    displayProfile: et,
                                    onClose: n
                                }),
                                (0, r.jsxs)('div', {
                                    className: K.menus,
                                    children: [
                                        (0, r.jsx)(T.Z.Overlay, {
                                            className: K.menuOverlay,
                                            children: (0, r.jsxs)(U.PB, {
                                                id: 'profile-'.concat(t.id),
                                                children: [
                                                    (0, r.jsx)(U.Mv, {
                                                        id: 'edit-profile',
                                                        action: 'EDIT_PROFILE',
                                                        label: Y.NW.string(Y.t.s5vZlZ),
                                                        icon: o.vdY,
                                                        onClick: () => {
                                                            eh(), n();
                                                        }
                                                    }),
                                                    (0, r.jsx)('div', { className: K.menuDivider }),
                                                    (0, r.jsx)(U.Mv, {
                                                        id: 'set-status',
                                                        action: 'PRESS_SET_STATUS',
                                                        label: (0, r.jsx)(V.Z, {}),
                                                        sublabel:
                                                            ec &&
                                                            null != eo &&
                                                            (0, r.jsx)(o.Text, {
                                                                color: 'currentColor',
                                                                variant: 'text-xs/medium',
                                                                children: eo
                                                            }),
                                                        icon: () =>
                                                            (0, r.jsx)(o.qbd, {
                                                                status: ea,
                                                                size: 12
                                                            }),
                                                        hint: (eu || ea === H.Skl.DND) && (0, r.jsx)(o.owu, { size: 'xxs' }),
                                                        renderSubmenu: s.tq
                                                            ? void 0
                                                            : (e) => {
                                                                  let { closePopout: t } = e;
                                                                  return (0, r.jsx)(U.eq, {
                                                                      navId: 'set-status-submenu',
                                                                      className: K.statusPickerModalMenu,
                                                                      'aria-label': Y.NW.string(Y.t.E13trK),
                                                                      onClose: t,
                                                                      children: eg
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
                                                                                          ((t = X({}, s)),
                                                                                          (n = n =
                                                                                              {
                                                                                                  size: o.CgR.SMALL,
                                                                                                  'aria-label': Y.NW.string(Y.t['3Uj+2t']),
                                                                                                  className: K.statusPickerModal,
                                                                                                  children: (0, r.jsx)(o.v2r, {
                                                                                                      navId: 'set-status-submenu-mobile-web',
                                                                                                      variant: 'fixed',
                                                                                                      'aria-label': Y.NW.string(Y.t.E13trK),
                                                                                                      className: K.statusPickerModalMenu,
                                                                                                      hideScroller: !0,
                                                                                                      onClose: i,
                                                                                                      onSelect: void 0,
                                                                                                      children: eg
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
                                        (0, r.jsx)(T.Z.Overlay, {
                                            className: K.menuOverlay,
                                            children: (0, r.jsxs)(U.PB, {
                                                id: 'account-'.concat(t.id),
                                                children: [
                                                    (0, r.jsx)(U.Mv, {
                                                        id: 'switch-accounts',
                                                        action: 'PRESS_SWITCH_ACCOUNTS',
                                                        icon: o.lMe,
                                                        label: Y.NW.string(Y.t.oMNyYG),
                                                        onClick: () => {
                                                            n(), (0, F.Z)();
                                                        },
                                                        renderSubmenu: (e) => {
                                                            let { closePopout: t } = e;
                                                            return (0, r.jsx)(U.eq, {
                                                                navId: 'switch-accounts-submenu',
                                                                'aria-label': Y.NW.string(Y.t.wFhVqK),
                                                                onClose: t,
                                                                children: ep
                                                            });
                                                        }
                                                    }),
                                                    !__OVERLAY__ &&
                                                        k.wS &&
                                                        em &&
                                                        (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                (0, r.jsx)('div', { className: K.menuDivider }),
                                                                (0, r.jsx)(U.Mv, {
                                                                    id: 'copy-user-id',
                                                                    action: 'COPY_USER_ID',
                                                                    icon: o.VuL,
                                                                    label: Y.NW.string(Y.t['/AXYnJ']),
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
