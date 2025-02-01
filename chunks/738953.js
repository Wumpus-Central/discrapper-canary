n.d(t, { Z: () => k }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(642128),
    s = n(442837),
    o = n(481060),
    l = n(727637),
    u = n(616780),
    c = n(100527),
    d = n(906732),
    f = n(680295),
    _ = n(271383),
    p = n(430824),
    h = n(785717),
    m = n(221292),
    g = n(687158),
    E = n(326094),
    v = n(510659),
    y = n(113557),
    I = n(867176),
    T = n(451834),
    b = n(502762),
    S = n(544989),
    A = n(481932),
    N = n(195387),
    C = n(272510),
    R = n(4517),
    O = n(171368),
    D = n(978395),
    x = n(161572),
    L = n(228168),
    P = n(981631),
    w = n(388032),
    M = n(591156);
function k(e) {
    let { user: t, currentUser: n, guildId: k, channelId: U, messageId: G, roleId: B, closePopout: Z, setPopoutRef: F, disableUserProfileLink: V = __OVERLAY__, newAnalyticsLocations: j = [] } = e,
        { analyticsLocations: H } = (0, d.ZP)([...j, c.Z.BITE_SIZE_PROFILE_POPOUT]),
        Y = (0, E.Z)({
            user: t,
            currentUser: n,
            location: P.Sbl.BITE_SIZE_POPOUT
        }),
        W = (0, h.ZB)({
            layout: Y ? 'BITE_SIZE_POPOUT' : 'BITE_SIZE_POPOUT_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            guildId: k,
            channelId: U,
            messageId: G,
            roleId: B
        }),
        K = (0, s.e7)([p.Z], () => (null != k ? p.Z.getGuild(k) : null)),
        z = (0, s.e7)([_.ZP], () => (null != k ? _.ZP.getMember(k, t.id) : null)),
        q = r.useMemo(() => (null != k ? { [k]: [t.id] } : {}), [k, t.id]);
    (0, u.$)(q);
    let Q = r.useRef(null),
        X = (0, g.ZP)(t.id, k),
        J = (0, l.Z)(Q),
        $ = (0, v.$m)(),
        ee = (0, o.q_F)({
            opacity: null != $.interactionType ? 1 : 0,
            config: { duration: 150 }
        });
    r.useEffect(() => {
        null == F || F(null == Q ? void 0 : Q.current);
    }, [Q, F]);
    let et = (e) => {
            null == Z || Z(),
                (0, O.openUserProfileModal)({
                    sourceAnalyticsLocations: H,
                    ...W,
                    ...e
                });
        },
        en = () =>
            V
                ? null
                : (0, i.jsx)(o.sNh, {
                      id: 'view-profile',
                      label: w.intl.string(w.t['+Xp3ho']),
                      action: () => {
                          et(),
                              (0, m.pQ)({
                                  action: 'PRESS_VIEW_PROFILE',
                                  analyticsLocations: H,
                                  ...W
                              });
                      }
                  });
    return (0, i.jsx)(d.Gt, {
        value: H,
        children: (0, i.jsx)(h.Mt, {
            value: W,
            shouldTrackViewOnMount: null == z || null != z.fullProfileLoadedTimestamp,
            children: (0, i.jsx)(v.NJ, {
                value: $,
                children: (0, i.jsxs)(o.VqE, {
                    ref: Q,
                    'aria-label': t.username,
                    children: [
                        (0, i.jsxs)(b.Z, {
                            user: t,
                            displayProfile: X,
                            profileType: L.y0.BITE_SIZE,
                            children: [
                                null != $.interactionType &&
                                    (0, i.jsx)(a.animated.div, {
                                        style: ee,
                                        className: M.backdrop
                                    }),
                                (0, i.jsxs)(S.Z, {
                                    profileType: L.y0.BITE_SIZE,
                                    children: [
                                        (0, i.jsx)(N.Z, {
                                            shouldShowTooltip: null === $.interactionType,
                                            user: t,
                                            guildId: k,
                                            channelId: U,
                                            onClose: Z
                                        }),
                                        (0, i.jsx)(A.Z, {
                                            shouldShowTooltip: null === $.interactionType,
                                            profileType: L.y0.BITE_SIZE,
                                            user: t
                                        }),
                                        t.id !== n.id &&
                                            (0, i.jsx)(C.Z, {
                                                user: t,
                                                guildId: k,
                                                viewProfileItem: en()
                                            })
                                    ]
                                }),
                                (0, i.jsxs)('header', {
                                    className: M.header,
                                    children: [
                                        (0, i.jsx)(I.Z, {
                                            user: t,
                                            displayProfile: X,
                                            guildId: k,
                                            profileType: L.y0.BITE_SIZE
                                        }),
                                        (0, i.jsx)(T.Z, {
                                            userId: t.id,
                                            className: M.toast,
                                            onClose: Z
                                        }),
                                        (0, i.jsx)(y.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            displayProfile: X,
                                            guildId: k,
                                            channelId: U,
                                            profileType: L.y0.BITE_SIZE,
                                            onOpenProfile: V ? void 0 : et
                                        }),
                                        (0, i.jsx)(R.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            guildId: k,
                                            channelId: U,
                                            profileType: L.y0.BITE_SIZE,
                                            onCloseProfile: Z
                                        })
                                    ]
                                }),
                                (0, i.jsx)(D.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: X,
                                    guild: K,
                                    isHovering: null == $.interactionType && J,
                                    onOpenProfile: V ? void 0 : et,
                                    channelId: U,
                                    onClose: Z
                                }),
                                (0, i.jsx)(x.Z, {
                                    user: t,
                                    guildId: k,
                                    channelId: U,
                                    onClose: Z
                                })
                            ]
                        }),
                        (null == X ? void 0 : X.profileEffectId) != null &&
                            (0, i.jsx)(f.Z, {
                                profileEffectId: null == X ? void 0 : X.profileEffectId,
                                isHovering: J
                            })
                    ]
                })
            })
        })
    });
}
