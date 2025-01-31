n.d(t, { Z: () => C }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(727637),
    l = n(100527),
    u = n(906732),
    c = n(271383),
    d = n(430824),
    f = n(785717),
    _ = n(221292),
    p = n(687158),
    h = n(899007),
    m = n(867176),
    g = n(502762),
    E = n(952124),
    v = n(544989),
    y = n(4517),
    I = n(171368),
    b = n(895697),
    T = n(161572),
    S = n(228168),
    A = n(388032),
    N = n(591156);
function C(e) {
    let { user: t, currentUser: n, guildId: C, channelId: R, messageId: O, roleId: D, closePopout: x, setPopoutRef: L, disableUserProfileLink: P = __OVERLAY__, newAnalyticsLocations: w = [] } = e,
        { analyticsLocations: M } = (0, u.ZP)([...w, l.Z.BITE_SIZE_PROFILE_POPOUT]),
        k = (0, f.ZB)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: C,
            channelId: R,
            messageId: O,
            roleId: D
        }),
        U = (0, p.ZP)(t.id, C),
        G = (0, a.e7)([d.Z], () => (null != C ? d.Z.getGuild(C) : null)),
        B = (0, a.e7)([c.ZP], () => (null != C ? c.ZP.getMember(C, t.id) : null)),
        Z = r.useRef(null),
        F = (0, o.Z)(Z);
    r.useEffect(() => {
        null == L || L(null == Z ? void 0 : Z.current);
    }, [Z, L]);
    let V = (e) => {
            null == x || x(),
                (0, I.openUserProfileModal)({
                    sourceAnalyticsLocations: M,
                    ...k,
                    ...e
                });
        },
        j = () =>
            P
                ? null
                : (0, i.jsx)(s.sNh, {
                      id: 'view-profile',
                      label: A.intl.string(A.t['+Xp3ho']),
                      action: () => {
                          V(),
                              (0, _.pQ)({
                                  action: 'PRESS_VIEW_PROFILE',
                                  analyticsLocations: M,
                                  ...k
                              });
                      }
                  });
    return (0, i.jsx)(u.Gt, {
        value: M,
        children: (0, i.jsx)(f.Mt, {
            value: k,
            shouldTrackViewOnMount: null == B || null != B.fullProfileLoadedTimestamp,
            children: (0, i.jsx)(s.VqE, {
                ref: Z,
                'aria-label': t.username,
                children: (0, i.jsxs)(g.Z, {
                    user: t,
                    displayProfile: U,
                    profileType: S.y0.BITE_SIZE,
                    children: [
                        (0, i.jsx)(v.Z, {
                            profileType: S.y0.BITE_SIZE,
                            children: (0, i.jsx)(E.Z, {
                                user: t,
                                guildId: C,
                                viewProfileItem: j()
                            })
                        }),
                        (0, i.jsxs)('header', {
                            className: N.header,
                            children: [
                                (0, i.jsx)(m.Z, {
                                    user: t,
                                    displayProfile: U,
                                    guildId: C,
                                    profileType: S.y0.BITE_SIZE
                                }),
                                (0, i.jsx)(h.Z, {
                                    user: t,
                                    displayProfile: U,
                                    guildId: C,
                                    channelId: R,
                                    profileType: S.y0.BITE_SIZE,
                                    onOpenProfile: P ? void 0 : V
                                }),
                                (0, i.jsx)(y.Z, {
                                    location: 'BotUserProfilePopout',
                                    user: t,
                                    profileType: S.y0.BITE_SIZE,
                                    onCloseProfile: x
                                })
                            ]
                        }),
                        (0, i.jsx)(b.Z, {
                            user: t,
                            currentUser: n,
                            displayProfile: U,
                            guild: G,
                            isHovering: F,
                            onOpenProfile: P ? void 0 : V,
                            channelId: R,
                            onClose: x
                        }),
                        (0, i.jsx)(T.Z, {
                            user: t,
                            guildId: C,
                            channelId: R,
                            onClose: x
                        })
                    ]
                })
            })
        })
    });
}
