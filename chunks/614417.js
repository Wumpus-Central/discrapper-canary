n.d(t, { Z: () => A }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(271383),
    f = n(699516),
    _ = n(5192),
    p = n(785717),
    h = n(221292),
    m = n(687158),
    g = n(471879),
    E = n(502762),
    b = n(848780),
    y = n(907179),
    v = n(228168),
    O = n(388032),
    I = n(357576),
    S = n(609440);
function T(e, t, n) {
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
function N(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e) {
    let { user: t, guildId: n, setPopoutRef: o, channelId: T, messageId: A, roleId: C, onViewBlockedProfileClick: R, newAnalyticsLocations: P = [] } = e,
        w = (0, s.e7)([f.Z], () => f.Z.isBlocked(t.id)),
        { analyticsLocations: D } = (0, u.ZP)([...P, w ? c.Z.BLOCKED_PROFILE_POPOUT : c.Z.IGNORED_PROFILE_POPOUT]),
        L = (0, p.ZB)({
            layout: w ? 'BLOCKED_PROFILE_POPOUT' : 'IGNORED_PROFILE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: T,
            messageId: A,
            roleId: C
        }),
        x = i.useRef(null),
        M = (0, m.ZP)(t.id, n),
        k = (0, s.e7)([d.ZP], () => (null != n ? d.ZP.getMember(n, t.id) : null));
    i.useEffect(() => {
        null == o || o(null == x ? void 0 : x.current);
    }, [x, o]);
    let j = w ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE';
    return (0, r.jsx)(u.Gt, {
        value: D,
        children: (0, r.jsx)(p.Mt, {
            value: L,
            shouldTrackViewOnMount: null == k || null != k.fullProfileLoadedTimestamp,
            children: (0, r.jsx)(l.VqE, {
                ref: x,
                'aria-label': t.username,
                children: (0, r.jsx)(E.Z, {
                    user: t,
                    displayProfile: M,
                    profileType: v.y0.BITE_SIZE,
                    children: (0, r.jsxs)('div', {
                        className: I.container,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: S,
                                className: I.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, r.jsxs)('div', {
                                className: a()(I.body, I.bodySpacing),
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: I.headerContainer,
                                        children: [
                                            (0, r.jsx)(g.i, {
                                                user: t,
                                                guildId: n
                                            }),
                                            (0, r.jsx)(l.X6q, {
                                                variant: 'heading-lg/bold',
                                                children: O.NW.string(O.t.b33pLC)
                                            }),
                                            (0, r.jsx)(l.Text, {
                                                variant: 'text-sm/medium',
                                                children: O.NW.format(w ? O.t['8F+WNz'] : O.t['/cZp5u'], { username: _.ZP.getName(n, T, t) })
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(l.Kqy, {
                                        align: 'center',
                                        children: [
                                            (0, r.jsx)(y.Z, {
                                                isBlocked: w,
                                                onClick: () => {
                                                    null == R || R(),
                                                        (0, h.pQ)(
                                                            N(
                                                                {
                                                                    action: j,
                                                                    analyticsLocations: D
                                                                },
                                                                L
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, r.jsx)(b.Z, {
                                                userId: t.id,
                                                onClick: () => {
                                                    null == R || R(),
                                                        (0, h.pQ)(
                                                            N(
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
