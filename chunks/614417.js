n.d(t, { Z: () => N }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(699516),
    f = n(5192),
    _ = n(785717),
    p = n(221292),
    h = n(687158),
    m = n(471879),
    g = n(502762),
    E = n(848780),
    b = n(907179),
    y = n(228168),
    v = n(388032),
    O = n(357576),
    I = n(609440);
function S(e, t, n) {
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
function T(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function N(e) {
    let { user: t, guildId: n, setPopoutRef: o, channelId: S, messageId: N, roleId: A, openedAt: C, onViewBlockedProfileClick: P, newAnalyticsLocations: R = [] } = e,
        w = (0, s.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        { analyticsLocations: D } = (0, u.ZP)([...R, w ? c.Z.BLOCKED_PROFILE_POPOUT : c.Z.IGNORED_PROFILE_POPOUT]),
        L = (0, _.ZB)({
            layout: w ? 'BLOCKED_PROFILE_POPOUT' : 'IGNORED_PROFILE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: S,
            messageId: N,
            roleId: A
        }),
        x = i.useRef(null),
        M = (0, h.ZP)(t.id, n);
    i.useEffect(() => {
        null == o || o(null == x ? void 0 : x.current);
    }, [x, o]);
    let k = w ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE';
    return (0, r.jsx)(u.Gt, {
        value: D,
        children: (0, r.jsx)(_.Mt, {
            value: L,
            openedAt: C,
            fetchStartedAt: null == M ? void 0 : M.fetchStartedAt,
            fetchEndedAt: null == M ? void 0 : M.fetchEndedAt,
            isLoaded: null == M ? void 0 : M.isLoaded,
            children: (0, r.jsx)(l.VqE, {
                ref: x,
                'aria-label': t.username,
                children: (0, r.jsx)(g.Z, {
                    user: t,
                    displayProfile: M,
                    profileType: y.y0.BITE_SIZE,
                    children: (0, r.jsxs)('div', {
                        className: O.container,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: I,
                                className: O.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, r.jsxs)('div', {
                                className: a()(O.body, O.bodySpacing),
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: O.headerContainer,
                                        children: [
                                            (0, r.jsx)(m.i, {
                                                user: t,
                                                guildId: n
                                            }),
                                            (0, r.jsx)(l.X6q, {
                                                variant: 'heading-lg/bold',
                                                children: v.NW.string(v.t.b33pLC)
                                            }),
                                            (0, r.jsx)(l.Text, {
                                                variant: 'text-sm/medium',
                                                children: v.NW.format(w ? v.t['8F+WNz'] : v.t['/cZp5u'], { username: f.ZP.getName(n, S, t) })
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(l.Kqy, {
                                        align: 'center',
                                        children: [
                                            (0, r.jsx)(b.Z, {
                                                isBlocked: w,
                                                onClick: () => {
                                                    null == P || P(),
                                                        (0, p.pQ)(
                                                            T(
                                                                {
                                                                    action: k,
                                                                    analyticsLocations: D
                                                                },
                                                                L
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, r.jsx)(E.Z, {
                                                userId: t.id,
                                                onClick: () => {
                                                    null == P || P(),
                                                        (0, p.pQ)(
                                                            T(
                                                                {
                                                                    action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                    analyticsLocations: D
                                                                },
                                                                L
                                                            )
                                                        );
                                                }
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}
