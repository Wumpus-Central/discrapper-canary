r.d(n, {
    Z: function () {
        return B;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(666912),
    l = r(442837),
    u = r(481060),
    c = r(727637),
    d = r(616780),
    f = r(100527),
    _ = r(906732),
    h = r(680295),
    p = r(271383),
    m = r(430824),
    g = r(785717),
    E = r(221292),
    v = r(687158),
    I = r(326094),
    T = r(510659),
    b = r(113557),
    y = r(867176),
    S = r(451834),
    A = r(502762),
    N = r(544989),
    C = r(481932),
    R = r(195387),
    O = r(272510),
    D = r(495804),
    L = r(171368),
    x = r(978395),
    w = r(161572),
    P = r(228168),
    M = r(981631),
    k = r(388032),
    U = r(591156);
function B(e) {
    let { user: n, currentUser: r, guildId: i, channelId: B, messageId: G, roleId: Z, closePopout: F, setPopoutRef: V, disableUserProfileLink: j = __OVERLAY__, newAnalyticsLocations: H = [] } = e,
        { analyticsLocations: Y } = (0, _.ZP)([...H, f.Z.BITE_SIZE_PROFILE_POPOUT]),
        W = (0, I.Z)({
            user: n,
            currentUser: r,
            location: M.Sbl.BITE_SIZE_POPOUT
        }),
        K = (0, g.ZB)({
            layout: W ? 'BITE_SIZE_POPOUT' : 'BITE_SIZE_POPOUT_RESTRICTED_BLOCKER_PROFILE',
            userId: n.id,
            guildId: i,
            channelId: B,
            messageId: G,
            roleId: Z
        }),
        z = (0, l.e7)([m.Z], () => (null != i ? m.Z.getGuild(i) : null)),
        q = (0, l.e7)([p.ZP], () => (null != i ? p.ZP.getMember(i, n.id) : null)),
        Q = s.useMemo(() => (null != i ? { [i]: [n.id] } : {}), [i, n.id]);
    (0, d.$)(Q);
    let X = s.useRef(null),
        J = (0, v.ZP)(n.id, i),
        $ = (0, c.Z)(X),
        ee = (0, T.$m)(),
        et = (0, u.useSpring)({
            opacity: null != ee.interactionType ? 1 : 0,
            config: { duration: 150 }
        });
    s.useEffect(() => {
        null == V || V(null == X ? void 0 : X.current);
    }, [X, V]);
    let en = (e) => {
            null == F || F(),
                (0, L.openUserProfileModal)({
                    sourceAnalyticsLocations: Y,
                    ...K,
                    ...e
                });
        },
        er = () =>
            j
                ? null
                : (0, a.jsx)(u.MenuItem, {
                      id: 'view-profile',
                      label: k.intl.string(k.t['+Xp3ho']),
                      action: () => {
                          en(),
                              (0, E.pQ)({
                                  action: 'PRESS_VIEW_PROFILE',
                                  analyticsLocations: Y,
                                  ...K
                              });
                      }
                  });
    return (0, a.jsx)(_.Gt, {
        value: Y,
        children: (0, a.jsx)(g.Mt, {
            value: K,
            shouldTrackViewOnMount: null == q || null != q.fullProfileLoadedTimestamp,
            children: (0, a.jsx)(T.NJ, {
                value: ee,
                children: (0, a.jsxs)(u.Dialog, {
                    ref: X,
                    'aria-label': n.username,
                    children: [
                        (0, a.jsxs)(A.Z, {
                            user: n,
                            displayProfile: J,
                            profileType: P.y0.BITE_SIZE,
                            children: [
                                null != ee.interactionType &&
                                    (0, a.jsx)(o.animated.div, {
                                        style: et,
                                        className: U.backdrop
                                    }),
                                (0, a.jsxs)(N.Z, {
                                    profileType: P.y0.BITE_SIZE,
                                    children: [
                                        (0, a.jsx)(R.Z, {
                                            shouldShowTooltip: null === ee.interactionType,
                                            user: n,
                                            guildId: i,
                                            channelId: B,
                                            onClose: F
                                        }),
                                        (0, a.jsx)(C.Z, {
                                            shouldShowTooltip: null === ee.interactionType,
                                            profileType: P.y0.BITE_SIZE,
                                            user: n
                                        }),
                                        n.id !== r.id &&
                                            (0, a.jsx)(O.Z, {
                                                user: n,
                                                guildId: i,
                                                viewProfileItem: er()
                                            })
                                    ]
                                }),
                                (0, a.jsxs)('header', {
                                    className: U.header,
                                    children: [
                                        (0, a.jsx)(y.Z, {
                                            user: n,
                                            displayProfile: J,
                                            guildId: i,
                                            profileType: P.y0.BITE_SIZE
                                        }),
                                        (0, a.jsx)(S.Z, {
                                            userId: n.id,
                                            className: U.toast,
                                            onClose: F
                                        }),
                                        (0, a.jsx)(b.Z, {
                                            location: 'UserProfilePopout',
                                            user: n,
                                            displayProfile: J,
                                            guildId: i,
                                            channelId: B,
                                            profileType: P.y0.BITE_SIZE,
                                            onOpenProfile: j ? void 0 : en
                                        }),
                                        (0, a.jsx)(D.Z, {
                                            location: 'UserProfilePopout',
                                            user: n,
                                            guildId: i,
                                            channelId: B,
                                            profileType: P.y0.BITE_SIZE,
                                            onCloseProfile: F
                                        })
                                    ]
                                }),
                                (0, a.jsx)(x.Z, {
                                    user: n,
                                    currentUser: r,
                                    displayProfile: J,
                                    guild: z,
                                    isHovering: null == ee.interactionType && $,
                                    onOpenProfile: j ? void 0 : en,
                                    channelId: B,
                                    onClose: F
                                }),
                                (0, a.jsx)(w.Z, {
                                    user: n,
                                    guildId: i,
                                    channelId: B,
                                    onClose: F
                                })
                            ]
                        }),
                        (null == J ? void 0 : J.profileEffectId) != null &&
                            (0, a.jsx)(h.Z, {
                                profileEffectId: null == J ? void 0 : J.profileEffectId,
                                isHovering: $
                            })
                    ]
                })
            })
        })
    });
}
