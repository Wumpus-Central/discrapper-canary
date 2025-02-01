n.d(t, { Z: () => R }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(727637),
    o = n(100527),
    l = n(906732),
    u = n(580552),
    c = n(688465),
    d = n(680295),
    f = n(5192),
    _ = n(785717),
    p = n(221292),
    h = n(687158),
    m = n(899007),
    g = n(648052),
    E = n(867176),
    v = n(280885),
    y = n(502762),
    I = n(530),
    T = n(679332),
    b = n(544989),
    S = n(171368),
    A = n(228168),
    N = n(388032),
    C = n(591156);
function R(e) {
    let { user: t, guildId: n, channelId: R, messageId: O, roleId: D, setPopoutRef: x, closePopout: L, disableUserProfileLink: P = __OVERLAY__, newAnalyticsLocations: w = [] } = e,
        M = (0, h.ZP)(t.id, n),
        { analyticsLocations: k } = (0, l.ZP)([...w, o.Z.BITE_SIZE_PROFILE_POPOUT]),
        U = (0, _.ZB)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: R,
            messageId: O,
            roleId: D
        }),
        G = r.useRef(null),
        B = (0, s.Z)(G);
    r.useEffect(() => {
        null == x || x(null == G ? void 0 : G.current);
    }, [G, x]);
    let Z = () => {
            null == L || L(),
                (0, S.openUserProfileModal)({
                    sourceAnalyticsLocations: k,
                    ...U
                });
        },
        F = !P && (0, u.Z)(t.id),
        V = () =>
            F
                ? (0, i.jsx)(a.sNh, {
                      id: 'view-profile',
                      label: N.intl.string(N.t['+Xp3ho']),
                      action: () => {
                          Z(),
                              (0, p.pQ)({
                                  action: 'PRESS_VIEW_PROFILE',
                                  analyticsLocations: k,
                                  ...U
                              });
                      }
                  })
                : null;
    return (0, i.jsx)(l.Gt, {
        value: k,
        children: (0, i.jsx)(_.Mt, {
            value: U,
            children: (0, i.jsxs)(a.VqE, {
                ref: G,
                'aria-label': t.username,
                children: [
                    (0, i.jsxs)(y.Z, {
                        user: t,
                        displayProfile: M,
                        profileType: A.y0.BITE_SIZE,
                        children: [
                            (0, i.jsx)(b.Z, {
                                profileType: A.y0.BITE_SIZE,
                                children: (0, i.jsx)(T.Z, {
                                    user: t,
                                    viewProfileItem: V()
                                })
                            }),
                            (0, i.jsxs)('header', {
                                className: C.header,
                                children: [
                                    (0, i.jsx)(E.Z, {
                                        user: t,
                                        displayProfile: M,
                                        guildId: n,
                                        profileType: A.y0.BITE_SIZE
                                    }),
                                    (0, i.jsx)(m.Z, {
                                        user: t,
                                        displayProfile: M,
                                        guildId: n,
                                        channelId: R,
                                        profileType: A.y0.BITE_SIZE,
                                        onOpenProfile: F ? Z : void 0
                                    }),
                                    t.isClyde() && (0, i.jsx)(c.Z, { className: C.headerTag })
                                ]
                            }),
                            (0, i.jsxs)(a.Ttm, {
                                fade: !0,
                                className: C.body,
                                children: [
                                    (0, i.jsx)(I.Z, {
                                        user: t,
                                        profileType: A.y0.BITE_SIZE,
                                        nickname: f.ZP.getName(n, R, t),
                                        onOpenProfile: F ? Z : void 0,
                                        tags: (0, i.jsx)(g.Z, {
                                            displayProfile: M,
                                            profileType: A.y0.BITE_SIZE,
                                            onClose: L
                                        })
                                    }),
                                    (0, i.jsx)(v.Z, {
                                        userId: t.id,
                                        userBio: null == M ? void 0 : M.bio,
                                        setLineClamp: !1,
                                        textColor: 'header-primary'
                                    })
                                ]
                            }),
                            (0, i.jsx)('footer', { className: C.footer })
                        ]
                    }),
                    (null == M ? void 0 : M.profileEffectId) != null &&
                        (0, i.jsx)(d.Z, {
                            profileEffectId: null == M ? void 0 : M.profileEffectId,
                            isHovering: B
                        })
                ]
            })
        })
    });
}
