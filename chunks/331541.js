n.d(t, { Z: () => Q });
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
    S = n(483517),
    v = n(483424),
    T = n(681837),
    I = n(502762),
    y = n(530),
    A = n(309494),
    P = n(4517),
    R = n(171368),
    D = n(420654),
    Z = n(695346),
    w = n(158776),
    k = n(246946),
    W = n(572004),
    L = n(5192),
    B = n(74538),
    M = n(514577),
    U = n(474376),
    V = n(435478),
    G = n(591974),
    F = n(764443),
    H = n(383832),
    z = n(981631),
    Y = n(228168),
    K = n(388032),
    q = n(659233),
    X = n(200669);
function J(e) {
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
function Q(e) {
    let { currentUser: t, onClose: n, setPopoutRef: Q, highlightBadge: $, openedAt: ee } = e,
        et = __OVERLAY__,
        en = (0, _.ZP)(t.id),
        { analyticsLocations: er } = (0, m.ZP)(u.Z.ACCOUNT_PROFILE_POPOUT),
        ei = (0, x.ZB)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: t.id
        }),
        { ref: es } = (0, c.Z)(),
        ea = (0, d.Z)(es);
    i.useEffect(() => {
        null == Q || Q(es.current);
    }, [es, Q]),
        i.useEffect(() => (M.a.setState({ isOpen: !0 }), () => M.a.setState({ isOpen: !1 })), []);
    let el = (0, l.e7)([w.Z], () => w.Z.getStatus(t.id)),
        eo = Z.Cr.useSetting(),
        ec = (0, F.F)(eo),
        { expiringStatusProfileFeedback: ed } = h.Y.useExperiment({ location: 'AccountProfilePopout' }, { autoTrackExposure: !1 }),
        eu = (0, l.e7)([k.Z], () => k.Z.hidePersonalInformation),
        em = (0, f.p)(),
        eg = Z.Sb.useSetting(),
        ep = (0, F.I)(el),
        eh = (0, U.g)(n),
        ef = (0, b.Z)({ analyticsLocations: er }),
        eb = (0, B.I5)(t),
        eN = (0, g.p)({ location: 'AccountProfilePopout' }),
        ex = i.useMemo(() => (0, p.Z)(), []),
        e_ = (e) => {
            null == n || n(),
                (0, R.openUserProfileModal)(
                    J(
                        {
                            customStatusPrompt: ex,
                            sourceAnalyticsLocations: er
                        },
                        ei,
                        e
                    )
                );
        };
    return (0, r.jsx)(m.Gt, {
        value: er,
        children: (0, r.jsx)(x.Mt, {
            value: ei,
            openedAt: ee,
            fetchStartedAt: null == en ? void 0 : en.fetchStartedAt,
            fetchEndedAt: null == en ? void 0 : en.fetchEndedAt,
            isLoaded: null == en ? void 0 : en.isLoaded,
            children: (0, r.jsx)(o.VqE, {
                ref: es,
                'aria-label': t.username,
                children: (0, r.jsxs)(I.Z, {
                    className: q.themeContainer,
                    user: t,
                    displayProfile: en,
                    profileType: Y.y0.BITE_SIZE,
                    children: [
                        (0, r.jsxs)('header', {
                            className: X.header,
                            children: [
                                (0, r.jsx)(O.Z, {
                                    user: t,
                                    displayProfile: en,
                                    profileType: Y.y0.BITE_SIZE
                                }),
                                (0, r.jsx)(E.Z, {
                                    user: t,
                                    displayProfile: en,
                                    profileType: Y.y0.BITE_SIZE,
                                    onOpenProfile: et ? void 0 : e_
                                }),
                                (0, r.jsx)(P.Z, {
                                    location: 'AccountProfilePopout',
                                    user: t,
                                    profileType: Y.y0.BITE_SIZE,
                                    onCloseProfile: n,
                                    prompt: eN ? ex : null
                                })
                            ]
                        }),
                        (null == en ? void 0 : en.profileEffectId) != null &&
                            (0, r.jsx)(N.Z, {
                                profileEffectId: null == en ? void 0 : en.profileEffectId,
                                isHovering: ea
                            }),
                        (0, r.jsxs)(o.Ttm, {
                            className: q.body,
                            children: [
                                (0, r.jsx)(y.Z, {
                                    user: t,
                                    className: q.username,
                                    profileType: Y.y0.BITE_SIZE,
                                    nickname: L.ZP.getName(null, null, t),
                                    onOpenProfile: et ? void 0 : e_,
                                    pronouns: null == en ? void 0 : en.pronouns,
                                    tags: (0, r.jsx)(j.Z, {
                                        displayProfile: en,
                                        profileType: Y.y0.BITE_SIZE,
                                        onClose: n,
                                        shouldOpenBadgeTooltip: null != $ ? (e) => e === $ : void 0
                                    }),
                                    nicknameIcons: (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(T.Z, { userId: t.id }),
                                            (0, r.jsx)(A.Z, {
                                                user: t,
                                                isHovering: ea
                                            })
                                        ]
                                    })
                                }),
                                (0, r.jsx)(D.Z, {
                                    user: t,
                                    bio: null == en ? void 0 : en.bio,
                                    hidePersonalInformation: eu,
                                    onClose: n
                                }),
                                (0, r.jsx)(C.Z, {
                                    isPremiumUser: eb,
                                    onInteraction: n
                                }),
                                (0, r.jsx)(v.Z, {
                                    user: t,
                                    currentUser: t,
                                    displayProfile: en,
                                    onClose: n
                                }),
                                (0, r.jsxs)('div', {
                                    className: q.menus,
                                    children: [
                                        (0, r.jsx)(I.Z.Overlay, {
                                            className: q.menuOverlay,
                                            children: (0, r.jsxs)(V.PB, {
                                                id: 'profile-'.concat(t.id),
                                                children: [
                                                    (0, r.jsx)(V.Mv, {
                                                        id: 'edit-profile',
                                                        action: 'EDIT_PROFILE',
                                                        label: K.NW.string(K.t.s5vZlZ),
                                                        icon: o.vdY,
                                                        onClick: () => {
                                                            ef(), n();
                                                        }
                                                    }),
                                                    (0, r.jsx)(S.Z, { className: q.menuDivider }),
                                                    (0, r.jsx)(V.Mv, {
                                                        id: 'set-status',
                                                        action: 'PRESS_SET_STATUS',
                                                        label: (0, r.jsx)(G.Z, {}),
                                                        sublabel:
                                                            ed &&
                                                            null != ec &&
                                                            (0, r.jsx)(o.Text, {
                                                                color: 'currentColor',
                                                                variant: 'text-xs/medium',
                                                                children: ec
                                                            }),
                                                        icon: () =>
                                                            (0, r.jsx)(o.qbd, {
                                                                status: el,
                                                                size: 12
                                                            }),
                                                        hint: (em || el === z.Skl.DND) && (0, r.jsx)(o.owu, { size: 'xxs' }),
                                                        renderSubmenu: s.tq
                                                            ? void 0
                                                            : (e) => {
                                                                  let { closePopout: t } = e;
                                                                  return (0, r.jsx)(V.eq, {
                                                                      navId: 'set-status-submenu',
                                                                      className: q.statusPickerModalMenu,
                                                                      'aria-label': K.NW.string(K.t.E13trK),
                                                                      onClose: t,
                                                                      children: ep
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
                                                                                          ((t = J({}, s)),
                                                                                          (n = n =
                                                                                              {
                                                                                                  size: o.CgR.SMALL,
                                                                                                  'aria-label': K.NW.string(K.t['3Uj+2t']),
                                                                                                  className: q.statusPickerModal,
                                                                                                  children: (0, r.jsx)(o.v2r, {
                                                                                                      navId: 'set-status-submenu-mobile-web',
                                                                                                      variant: 'fixed',
                                                                                                      'aria-label': K.NW.string(K.t.E13trK),
                                                                                                      className: q.statusPickerModalMenu,
                                                                                                      hideScroller: !0,
                                                                                                      onClose: i,
                                                                                                      onSelect: void 0,
                                                                                                      children: ep
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
                                        (0, r.jsx)(I.Z.Overlay, {
                                            className: q.menuOverlay,
                                            children: (0, r.jsxs)(V.PB, {
                                                id: 'account-'.concat(t.id),
                                                children: [
                                                    (0, r.jsx)(V.Mv, {
                                                        id: 'switch-accounts',
                                                        action: 'PRESS_SWITCH_ACCOUNTS',
                                                        icon: o.lMe,
                                                        label: K.NW.string(K.t.oMNyYG),
                                                        onClick: () => {
                                                            n(), (0, H.Z)();
                                                        },
                                                        renderSubmenu: (e) => {
                                                            let { closePopout: t } = e;
                                                            return (0, r.jsx)(V.eq, {
                                                                navId: 'switch-accounts-submenu',
                                                                'aria-label': K.NW.string(K.t.wFhVqK),
                                                                onClose: t,
                                                                children: eh
                                                            });
                                                        }
                                                    }),
                                                    !__OVERLAY__ &&
                                                        W.wS &&
                                                        eg &&
                                                        (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                (0, r.jsx)(S.Z, { className: q.menuDivider }),
                                                                (0, r.jsx)(V.Mv, {
                                                                    id: 'copy-user-id',
                                                                    action: 'COPY_USER_ID',
                                                                    icon: o.VuL,
                                                                    label: K.NW.string(K.t['/AXYnJ']),
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
