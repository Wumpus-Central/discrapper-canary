n.d(t, { Z: () => P }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(727637),
    s = n(100527),
    l = n(906732),
    c = n(580552),
    u = n(688465),
    d = n(680295),
    f = n(5192),
    _ = n(785717),
    p = n(221292),
    h = n(687158),
    m = n(899007),
    g = n(648052),
    E = n(867176),
    b = n(280885),
    y = n(502762),
    v = n(530),
    O = n(679332),
    I = n(544989),
    S = n(171368),
    T = n(228168),
    N = n(388032),
    A = n(200669);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function R(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e) {
    let { user: t, guildId: n, channelId: C, messageId: P, roleId: w, openedAt: D, setPopoutRef: L, closePopout: x, disableUserProfileLink: M = __OVERLAY__, newAnalyticsLocations: k = [] } = e,
        j = (0, h.ZP)(t.id, n),
        { analyticsLocations: U } = (0, l.ZP)([...k, s.Z.BITE_SIZE_PROFILE_POPOUT]),
        G = (0, _.ZB)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: C,
            messageId: P,
            roleId: w
        }),
        B = i.useRef(null),
        F = (0, a.Z)(B);
    i.useEffect(() => {
        null == L || L(null == B ? void 0 : B.current);
    }, [B, L]);
    let V = () => {
            null == x || x(), (0, S.openUserProfileModal)(R({ sourceAnalyticsLocations: U }, G));
        },
        Z = !M && (0, c.Z)(t.id),
        H = () =>
            Z
                ? (0, r.jsx)(o.sNh, {
                      id: 'view-profile',
                      label: N.NW.string(N.t['+Xp3ho']),
                      action: () => {
                          V(),
                              (0, p.pQ)(
                                  R(
                                      {
                                          action: 'PRESS_VIEW_PROFILE',
                                          analyticsLocations: U
                                      },
                                      G
                                  )
                              );
                      }
                  })
                : null;
    return (0, r.jsx)(l.Gt, {
        value: U,
        children: (0, r.jsx)(_.Mt, {
            value: G,
            openedAt: D,
            fetchStartedAt: null == j ? void 0 : j.fetchStartedAt,
            fetchEndedAt: null == j ? void 0 : j.fetchEndedAt,
            isLoaded: null == j ? void 0 : j.isLoaded,
            children: (0, r.jsxs)(o.VqE, {
                ref: B,
                'aria-label': t.username,
                children: [
                    (0, r.jsxs)(y.Z, {
                        user: t,
                        displayProfile: j,
                        profileType: T.y0.BITE_SIZE,
                        children: [
                            (0, r.jsx)(I.Z, {
                                profileType: T.y0.BITE_SIZE,
                                children: (0, r.jsx)(O.Z, {
                                    user: t,
                                    viewProfileItem: H()
                                })
                            }),
                            (0, r.jsxs)('header', {
                                className: A.header,
                                children: [
                                    (0, r.jsx)(E.Z, {
                                        user: t,
                                        displayProfile: j,
                                        guildId: n,
                                        profileType: T.y0.BITE_SIZE
                                    }),
                                    (0, r.jsx)(m.Z, {
                                        user: t,
                                        displayProfile: j,
                                        guildId: n,
                                        channelId: C,
                                        profileType: T.y0.BITE_SIZE,
                                        onOpenProfile: Z ? V : void 0
                                    }),
                                    t.isClyde() && (0, r.jsx)(u.Z, { className: A.headerTag })
                                ]
                            }),
                            (0, r.jsxs)(o.Ttm, {
                                fade: !0,
                                className: A.body,
                                children: [
                                    (0, r.jsx)(v.Z, {
                                        user: t,
                                        profileType: T.y0.BITE_SIZE,
                                        nickname: f.ZP.getName(n, C, t),
                                        onOpenProfile: Z ? V : void 0,
                                        tags: (0, r.jsx)(g.Z, {
                                            displayProfile: j,
                                            profileType: T.y0.BITE_SIZE,
                                            onClose: x
                                        })
                                    }),
                                    (0, r.jsx)(b.Z, {
                                        userId: t.id,
                                        userBio: null == j ? void 0 : j.bio,
                                        setLineClamp: !1,
                                        textColor: 'header-primary'
                                    })
                                ]
                            }),
                            (0, r.jsx)('footer', { className: A.footer })
                        ]
                    }),
                    (null == j ? void 0 : j.profileEffectId) != null &&
                        (0, r.jsx)(d.Z, {
                            profileEffectId: null == j ? void 0 : j.profileEffectId,
                            isHovering: F
                        })
                ]
            })
        })
    });
}
