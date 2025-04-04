n.d(t, { Z: () => R }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(727637),
    l = n(100527),
    c = n(906732),
    u = n(271383),
    d = n(430824),
    f = n(785717),
    _ = n(221292),
    p = n(687158),
    h = n(899007),
    m = n(867176),
    g = n(502762),
    E = n(952124),
    b = n(544989),
    y = n(4517),
    v = n(171368),
    O = n(895697),
    I = n(161572),
    S = n(228168),
    T = n(388032),
    N = n(200669);
function A(e, t, n) {
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
function C(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function R(e) {
    let { user: t, currentUser: n, guildId: A, channelId: R, messageId: P, roleId: w, closePopout: D, setPopoutRef: L, disableUserProfileLink: x = __OVERLAY__, newAnalyticsLocations: M = [] } = e,
        { analyticsLocations: k } = (0, c.ZP)([...M, l.Z.BITE_SIZE_PROFILE_POPOUT]),
        j = (0, f.ZB)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: A,
            channelId: R,
            messageId: P,
            roleId: w
        }),
        U = (0, p.ZP)(t.id, A),
        G = (0, o.e7)([d.Z], () => (null != A ? d.Z.getGuild(A) : null)),
        B = (0, o.e7)([u.ZP], () => (null != A ? u.ZP.getMember(A, t.id) : null)),
        F = i.useRef(null),
        V = (0, s.Z)(F);
    i.useEffect(() => {
        null == L || L(null == F ? void 0 : F.current);
    }, [F, L]);
    let Z = (e) => {
            null == D || D(), (0, v.openUserProfileModal)(C({ sourceAnalyticsLocations: k }, j, e));
        },
        H = () =>
            x
                ? null
                : (0, r.jsx)(a.sNh, {
                      id: 'view-profile',
                      label: T.NW.string(T.t['+Xp3ho']),
                      action: () => {
                          Z(),
                              (0, _.pQ)(
                                  C(
                                      {
                                          action: 'PRESS_VIEW_PROFILE',
                                          analyticsLocations: k
                                      },
                                      j
                                  )
                              );
                      }
                  });
    return (0, r.jsx)(c.Gt, {
        value: k,
        children: (0, r.jsx)(f.Mt, {
            value: j,
            shouldTrackViewOnMount: null == B || null != B.fullProfileLoadedTimestamp,
            children: (0, r.jsx)(a.VqE, {
                ref: F,
                'aria-label': t.username,
                children: (0, r.jsxs)(g.Z, {
                    user: t,
                    displayProfile: U,
                    profileType: S.y0.BITE_SIZE,
                    children: [
                        (0, r.jsx)(b.Z, {
                            profileType: S.y0.BITE_SIZE,
                            children: (0, r.jsx)(E.Z, {
                                user: t,
                                guildId: A,
                                viewProfileItem: H(),
                                onCloseProfile: D
                            })
                        }),
                        (0, r.jsxs)('header', {
                            className: N.header,
                            children: [
                                (0, r.jsx)(m.Z, {
                                    user: t,
                                    displayProfile: U,
                                    guildId: A,
                                    profileType: S.y0.BITE_SIZE
                                }),
                                (0, r.jsx)(h.Z, {
                                    user: t,
                                    displayProfile: U,
                                    guildId: A,
                                    channelId: R,
                                    profileType: S.y0.BITE_SIZE,
                                    onOpenProfile: x ? void 0 : Z
                                }),
                                (0, r.jsx)(y.Z, {
                                    location: 'BotUserProfilePopout',
                                    user: t,
                                    profileType: S.y0.BITE_SIZE,
                                    onCloseProfile: D
                                })
                            ]
                        }),
                        (0, r.jsx)(O.Z, {
                            user: t,
                            currentUser: n,
                            displayProfile: U,
                            guild: G,
                            isHovering: V,
                            onOpenProfile: x ? void 0 : Z,
                            channelId: R,
                            onClose: D
                        }),
                        (0, r.jsx)(I.Z, {
                            user: t,
                            guildId: A,
                            channelId: R,
                            onClose: D
                        })
                    ]
                })
            })
        })
    });
}
