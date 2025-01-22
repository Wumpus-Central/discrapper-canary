r.d(n, {
    Z: function () {
        return D;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(481060),
    l = r(727637),
    u = r(100527),
    c = r(906732),
    d = r(580552),
    f = r(688465),
    p = r(680295),
    h = r(5192),
    _ = r(785717),
    m = r(221292),
    g = r(687158),
    E = r(899007),
    v = r(648052),
    y = r(867176),
    b = r(280885),
    I = r(502762),
    T = r(530),
    S = r(679332),
    A = r(544989),
    C = r(171368),
    N = r(228168),
    R = r(388032),
    O = r(591156);
function D(e) {
    let { user: n, guildId: r, channelId: i, messageId: D, roleId: L, setPopoutRef: x, closePopout: w, disableUserProfileLink: P = __OVERLAY__, newAnalyticsLocations: M = [] } = e,
        k = (0, g.ZP)(n.id, r),
        { analyticsLocations: U } = (0, c.ZP)([...M, u.Z.BITE_SIZE_PROFILE_POPOUT]),
        B = (0, _.ZB)({
            layout: 'BITE_SIZE_POPOUT',
            userId: n.id,
            guildId: r,
            channelId: i,
            messageId: D,
            roleId: L
        }),
        G = o.useRef(null),
        Z = (0, l.Z)(G);
    o.useEffect(() => {
        null == x || x(null == G ? void 0 : G.current);
    }, [G, x]);
    let F = () => {
            null == w || w(),
                (0, C.openUserProfileModal)({
                    sourceAnalyticsLocations: U,
                    ...B
                });
        },
        V = !P && (0, d.Z)(n.id),
        j = () =>
            V
                ? (0, a.jsx)(s.MenuItem, {
                      id: 'view-profile',
                      label: R.intl.string(R.t['+Xp3ho']),
                      action: () => {
                          F(),
                              (0, m.pQ)({
                                  action: 'PRESS_VIEW_PROFILE',
                                  analyticsLocations: U,
                                  ...B
                              });
                      }
                  })
                : null;
    return (0, a.jsx)(c.Gt, {
        value: U,
        children: (0, a.jsx)(_.Mt, {
            value: B,
            children: (0, a.jsxs)(s.Dialog, {
                ref: G,
                'aria-label': n.username,
                children: [
                    (0, a.jsxs)(I.Z, {
                        user: n,
                        displayProfile: k,
                        profileType: N.y0.BITE_SIZE,
                        children: [
                            (0, a.jsx)(A.Z, {
                                profileType: N.y0.BITE_SIZE,
                                children: (0, a.jsx)(S.Z, {
                                    user: n,
                                    viewProfileItem: j()
                                })
                            }),
                            (0, a.jsxs)('header', {
                                className: O.header,
                                children: [
                                    (0, a.jsx)(y.Z, {
                                        user: n,
                                        displayProfile: k,
                                        guildId: r,
                                        profileType: N.y0.BITE_SIZE
                                    }),
                                    (0, a.jsx)(E.Z, {
                                        user: n,
                                        displayProfile: k,
                                        guildId: r,
                                        channelId: i,
                                        profileType: N.y0.BITE_SIZE,
                                        onOpenProfile: V ? F : void 0
                                    }),
                                    n.isClyde() && (0, a.jsx)(f.Z, { className: O.headerTag })
                                ]
                            }),
                            (0, a.jsxs)(s.Scroller, {
                                fade: !0,
                                className: O.body,
                                children: [
                                    (0, a.jsx)(T.Z, {
                                        user: n,
                                        profileType: N.y0.BITE_SIZE,
                                        nickname: h.ZP.getName(r, i, n),
                                        onOpenProfile: V ? F : void 0,
                                        tags: (0, a.jsx)(v.Z, {
                                            displayProfile: k,
                                            profileType: N.y0.BITE_SIZE,
                                            onClose: w
                                        })
                                    }),
                                    (0, a.jsx)(b.Z, {
                                        userId: n.id,
                                        userBio: null == k ? void 0 : k.bio,
                                        setLineClamp: !1,
                                        textColor: 'header-primary'
                                    })
                                ]
                            }),
                            (0, a.jsx)('footer', { className: O.footer })
                        ]
                    }),
                    (null == k ? void 0 : k.profileEffectId) != null &&
                        (0, a.jsx)(p.Z, {
                            profileEffectId: null == k ? void 0 : k.profileEffectId,
                            isHovering: Z
                        })
                ]
            })
        })
    });
}
