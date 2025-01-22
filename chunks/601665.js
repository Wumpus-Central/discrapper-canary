r.d(n, {
    Z: function () {
        return O;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(442837),
    l = r(481060),
    u = r(727637),
    c = r(100527),
    d = r(906732),
    f = r(271383),
    p = r(430824),
    h = r(785717),
    _ = r(221292),
    m = r(687158),
    g = r(899007),
    E = r(867176),
    v = r(502762),
    y = r(952124),
    b = r(544989),
    I = r(4517),
    T = r(171368),
    S = r(895697),
    A = r(161572),
    C = r(228168),
    N = r(388032),
    R = r(591156);
function O(e) {
    let { user: n, currentUser: r, guildId: i, channelId: O, messageId: D, roleId: x, closePopout: L, setPopoutRef: w, disableUserProfileLink: P = __OVERLAY__, newAnalyticsLocations: M = [] } = e,
        { analyticsLocations: k } = (0, d.ZP)([...M, c.Z.BITE_SIZE_PROFILE_POPOUT]),
        U = (0, h.ZB)({
            layout: 'BITE_SIZE_POPOUT',
            userId: n.id,
            guildId: i,
            channelId: O,
            messageId: D,
            roleId: x
        }),
        B = (0, m.ZP)(n.id, i),
        G = (0, s.e7)([p.Z], () => (null != i ? p.Z.getGuild(i) : null)),
        Z = (0, s.e7)([f.ZP], () => (null != i ? f.ZP.getMember(i, n.id) : null)),
        F = o.useRef(null),
        V = (0, u.Z)(F);
    o.useEffect(() => {
        null == w || w(null == F ? void 0 : F.current);
    }, [F, w]);
    let j = (e) => {
            null == L || L(),
                (0, T.openUserProfileModal)({
                    sourceAnalyticsLocations: k,
                    ...U,
                    ...e
                });
        },
        H = () =>
            P
                ? null
                : (0, a.jsx)(l.MenuItem, {
                      id: 'view-profile',
                      label: N.intl.string(N.t['+Xp3ho']),
                      action: () => {
                          j(),
                              (0, _.pQ)({
                                  action: 'PRESS_VIEW_PROFILE',
                                  analyticsLocations: k,
                                  ...U
                              });
                      }
                  });
    return (0, a.jsx)(d.Gt, {
        value: k,
        children: (0, a.jsx)(h.Mt, {
            value: U,
            shouldTrackViewOnMount: null == Z || null != Z.fullProfileLoadedTimestamp,
            children: (0, a.jsx)(l.Dialog, {
                ref: F,
                'aria-label': n.username,
                children: (0, a.jsxs)(v.Z, {
                    user: n,
                    displayProfile: B,
                    profileType: C.y0.BITE_SIZE,
                    children: [
                        (0, a.jsx)(b.Z, {
                            profileType: C.y0.BITE_SIZE,
                            children: (0, a.jsx)(y.Z, {
                                user: n,
                                guildId: i,
                                viewProfileItem: H()
                            })
                        }),
                        (0, a.jsxs)('header', {
                            className: R.header,
                            children: [
                                (0, a.jsx)(E.Z, {
                                    user: n,
                                    displayProfile: B,
                                    guildId: i,
                                    profileType: C.y0.BITE_SIZE
                                }),
                                (0, a.jsx)(g.Z, {
                                    user: n,
                                    displayProfile: B,
                                    guildId: i,
                                    channelId: O,
                                    profileType: C.y0.BITE_SIZE,
                                    onOpenProfile: P ? void 0 : j
                                }),
                                (0, a.jsx)(I.Z, {
                                    location: 'BotUserProfilePopout',
                                    user: n,
                                    profileType: C.y0.BITE_SIZE,
                                    onCloseProfile: L
                                })
                            ]
                        }),
                        (0, a.jsx)(S.Z, {
                            user: n,
                            currentUser: r,
                            displayProfile: B,
                            guild: G,
                            isHovering: V,
                            onOpenProfile: P ? void 0 : j,
                            channelId: O,
                            onClose: L
                        }),
                        (0, a.jsx)(A.Z, {
                            user: n,
                            guildId: i,
                            channelId: O,
                            onClose: L
                        })
                    ]
                })
            })
        })
    });
}
