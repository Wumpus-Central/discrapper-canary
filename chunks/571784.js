n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    l = n(597312),
    o = n(442837),
    a = n(481060),
    s = n(410030),
    c = n(100527),
    u = n(906732),
    d = n(699516),
    p = n(5192),
    h = n(785717),
    f = n(221292),
    m = n(687158),
    g = n(316027),
    b = n(502762),
    _ = n(848780),
    y = n(907179),
    C = n(228168),
    x = n(388032),
    v = n(684483),
    j = n(321975);
function O(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function E(e) {
    let { user: t, channel: n, onHide: E } = e,
        N = (0, m.ZP)(t.id),
        I = (0, s.ZP)(),
        P = (0, o.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        { analyticsLocations: S } = (0, u.ZP)(P ? c.Z.BLOCKED_PROFILE_PANEL : c.Z.IGNORED_PROFILE_PANEL),
        Z = (0, h.ZB)({
            layout: P ? 'BLOCKED_PROFILE_PANEL' : 'IGNORED_PROFILE_PANEL',
            userId: t.id,
            channelId: n.id
        }),
        T = i.useRef(null);
    return (0, r.jsx)(u.Gt, {
        value: S,
        children: (0, r.jsx)(h.Mt, {
            value: Z,
            fetchStartedAt: null == N ? void 0 : N.fetchStartedAt,
            fetchEndedAt: null == N ? void 0 : N.fetchEndedAt,
            isLoaded: null == N ? void 0 : N.isLoaded,
            children: (0, r.jsx)(b.Z, {
                ref: T,
                user: t,
                displayProfile: N,
                profileType: C.y0.PANEL,
                themeOverride: I,
                children: (0, r.jsx)(l.u2, {
                    children: (0, r.jsxs)('div', {
                        className: v.container,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: j,
                                className: v.preview,
                                'aria-hidden': !0
                            }),
                            (0, r.jsxs)('div', {
                                className: v.body,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: v.headerContainer,
                                        children: [
                                            (0, r.jsx)(g.Z, { user: t }),
                                            (0, r.jsx)(a.X6q, {
                                                variant: 'heading-lg/bold',
                                                children: x.NW.string(x.t.b33pLC)
                                            }),
                                            (0, r.jsx)(a.Text, {
                                                variant: 'text-sm/medium',
                                                children: x.NW.format(P ? x.t['8F+WNz'] : x.t['/cZp5u'], { username: p.ZP.getName(n.guild_id, n.id, t) })
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(a.Kqy, {
                                        align: 'center',
                                        children: [
                                            (0, r.jsx)(y.Z, {
                                                isBlocked: P,
                                                onClick: () => {
                                                    E(),
                                                        (0, f.pQ)(
                                                            O(
                                                                {
                                                                    action: P ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: S
                                                                },
                                                                Z
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, r.jsx)(_.Z, {
                                                userId: t.id,
                                                onClick: () => {
                                                    E(),
                                                        (0, f.pQ)(
                                                            O(
                                                                {
                                                                    action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                    analyticsLocations: S
                                                                },
                                                                Z
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
