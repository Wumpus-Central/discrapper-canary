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
    L = n(161572),
    x = n(228168),
    w = n(981631),
    P = n(388032),
    M = n(591156);
function k(e) {
    let { user: t, currentUser: n, guildId: k, channelId: U, messageId: G, roleId: B, closePopout: Z, setPopoutRef: F, disableUserProfileLink: V = __OVERLAY__, newAnalyticsLocations: j = [], appContext: H = w.IlC.APP } = e,
        { analyticsLocations: Y } = (0, d.ZP)([...j, c.Z.BITE_SIZE_PROFILE_POPOUT]),
        W = (0, E.Z)({
            user: t,
            currentUser: n,
            location: w.Sbl.BITE_SIZE_POPOUT
        }),
        K = (0, h.ZB)({
            layout: W ? 'BITE_SIZE_POPOUT' : 'BITE_SIZE_POPOUT_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            guildId: k,
            channelId: U,
            messageId: G,
            roleId: B
        }),
        z = (0, s.e7)([p.Z], () => (null != k ? p.Z.getGuild(k) : null)),
        q = (0, s.e7)([_.ZP], () => (null != k ? _.ZP.getMember(k, t.id) : null)),
        Q = r.useMemo(() => (null != k ? { [k]: [t.id] } : {}), [k, t.id]);
    (0, u.$)(Q);
    let X = r.useRef(null),
        J = (0, g.ZP)(t.id, k),
        $ = (0, l.Z)(X),
        ee = (0, v.$m)(),
        et = (0, o.q_F)({
            opacity: null != ee.interactionType ? 1 : 0,
            config: { duration: 150 }
        });
    r.useEffect(() => {
        null == F || F(null == X ? void 0 : X.current);
    }, [X, F]);
    let en = (e) => {
            null == Z || Z(),
                (0, O.openUserProfileModal)({
                    sourceAnalyticsLocations: Y,
                    ...K,
                    ...e,
                    appContext: H
                });
        },
        ei = () =>
            V
                ? null
                : (0, i.jsx)(o.sNh, {
                      id: 'view-profile',
                      label: P.intl.string(P.t['+Xp3ho']),
                      action: () => {
                          en(),
                              (0, m.pQ)({
                                  action: 'PRESS_VIEW_PROFILE',
                                  analyticsLocations: Y,
                                  ...K
                              });
                      }
                  });
    return (0, i.jsx)(d.Gt, {
        value: Y,
        children: (0, i.jsx)(h.Mt, {
            value: K,
            shouldTrackViewOnMount: null == q || null != q.fullProfileLoadedTimestamp,
            children: (0, i.jsx)(v.NJ, {
                value: ee,
                children: (0, i.jsxs)(o.VqE, {
                    ref: X,
                    'aria-label': t.username,
                    children: [
                        (0, i.jsxs)(b.Z, {
                            user: t,
                            displayProfile: J,
                            profileType: x.y0.BITE_SIZE,
                            children: [
                                null != ee.interactionType &&
                                    (0, i.jsx)(a.animated.div, {
                                        style: et,
                                        className: M.backdrop
                                    }),
                                (0, i.jsxs)(S.Z, {
                                    profileType: x.y0.BITE_SIZE,
                                    children: [
                                        (0, i.jsx)(N.Z, {
                                            shouldShowTooltip: null === ee.interactionType,
                                            user: t,
                                            guildId: k,
                                            channelId: U,
                                            onClose: Z,
                                            appContext: H
                                        }),
                                        (0, i.jsx)(A.Z, {
                                            shouldShowTooltip: null === ee.interactionType,
                                            profileType: x.y0.BITE_SIZE,
                                            user: t
                                        }),
                                        t.id !== n.id &&
                                            (0, i.jsx)(C.Z, {
                                                user: t,
                                                guildId: k,
                                                viewProfileItem: ei(),
                                                appContext: H
                                            })
                                    ]
                                }),
                                (0, i.jsxs)('header', {
                                    className: M.header,
                                    children: [
                                        (0, i.jsx)(I.Z, {
                                            user: t,
                                            displayProfile: J,
                                            guildId: k,
                                            profileType: x.y0.BITE_SIZE
                                        }),
                                        (0, i.jsx)(T.Z, {
                                            userId: t.id,
                                            className: M.toast,
                                            onClose: Z
                                        }),
                                        (0, i.jsx)(y.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            displayProfile: J,
                                            guildId: k,
                                            channelId: U,
                                            profileType: x.y0.BITE_SIZE,
                                            onOpenProfile: V ? void 0 : en
                                        }),
                                        (0, i.jsx)(R.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            guildId: k,
                                            channelId: U,
                                            profileType: x.y0.BITE_SIZE,
                                            onCloseProfile: Z
                                        })
                                    ]
                                }),
                                (0, i.jsx)(D.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: J,
                                    guild: z,
                                    isHovering: null == ee.interactionType && $,
                                    onOpenProfile: V ? void 0 : en,
                                    channelId: U,
                                    onClose: Z
                                }),
                                (0, i.jsx)(L.Z, {
                                    user: t,
                                    guildId: k,
                                    channelId: U,
                                    onClose: Z,
                                    appContext: H
                                })
                            ]
                        }),
                        (null == J ? void 0 : J.profileEffectId) != null &&
                            (0, i.jsx)(f.Z, {
                                profileEffectId: null == J ? void 0 : J.profileEffectId,
                                isHovering: $
                            })
                    ]
                })
            })
        })
    });
}
