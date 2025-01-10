r.d(n, {
    Z: function () {
        return O;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(481060),
    u = r(727637),
    c = r(100527),
    d = r(906732),
    f = r(271383),
    _ = r(430824),
    h = r(785717),
    p = r(221292),
    m = r(687158),
    g = r(899007),
    E = r(867176),
    v = r(502762),
    I = r(952124),
    T = r(544989),
    b = r(495804),
    y = r(171368),
    S = r(895697),
    A = r(161572),
    N = r(228168),
    C = r(388032),
    R = r(591156);
function O(e) {
    let { user: n, currentUser: r, guildId: i, channelId: O, messageId: D, roleId: L, closePopout: x, setPopoutRef: w, disableUserProfileLink: P = __OVERLAY__, newAnalyticsLocations: M = [] } = e,
        { analyticsLocations: k } = (0, d.ZP)([...M, c.Z.BITE_SIZE_PROFILE_POPOUT]),
        U = (0, h.ZB)({
            layout: 'BITE_SIZE_POPOUT',
            userId: n.id,
            guildId: i,
            channelId: O,
            messageId: D,
            roleId: L
        }),
        B = (0, m.ZP)(n.id, i),
        G = (0, o.e7)([_.Z], () => (null != i ? _.Z.getGuild(i) : null)),
        F = (0, o.e7)([f.ZP], () => (null != i ? f.ZP.getMember(i, n.id) : null)),
        Z = s.useRef(null),
        V = (0, u.Z)(Z);
    s.useEffect(() => {
        null == w || w(null == Z ? void 0 : Z.current);
    }, [Z, w]);
    let j = (e) => {
            null == x || x(),
                (0, y.openUserProfileModal)({
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
                      label: C.intl.string(C.t['+Xp3ho']),
                      action: () => {
                          j(),
                              (0, p.pQ)({
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
            shouldTrackViewOnMount: null == F || null != F.fullProfileLoadedTimestamp,
            children: (0, a.jsx)(l.Dialog, {
                ref: Z,
                'aria-label': n.username,
                children: (0, a.jsxs)(v.Z, {
                    user: n,
                    displayProfile: B,
                    profileType: N.y0.BITE_SIZE,
                    children: [
                        (0, a.jsx)(T.Z, {
                            profileType: N.y0.BITE_SIZE,
                            children: (0, a.jsx)(I.Z, {
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
                                    profileType: N.y0.BITE_SIZE
                                }),
                                (0, a.jsx)(g.Z, {
                                    user: n,
                                    displayProfile: B,
                                    guildId: i,
                                    channelId: O,
                                    profileType: N.y0.BITE_SIZE,
                                    onOpenProfile: P ? void 0 : j
                                }),
                                (0, a.jsx)(b.Z, {
                                    location: 'BotUserProfilePopout',
                                    user: n,
                                    profileType: N.y0.BITE_SIZE,
                                    onCloseProfile: x
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
                            onClose: x
                        }),
                        (0, a.jsx)(A.Z, {
                            user: n,
                            guildId: i,
                            channelId: O,
                            onClose: x
                        })
                    ]
                })
            })
        })
    });
}
