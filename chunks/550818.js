n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
    l = n(597312),
    a = n(442837),
    s = n(481060),
    o = n(410030),
    c = n(100527),
    d = n(906732),
    u = n(699516),
    h = n(5192),
    p = n(785717),
    f = n(221292),
    g = n(687158),
    m = n(316027),
    b = n(502762),
    _ = n(848780),
    y = n(907179),
    j = n(228168),
    O = n(388032),
    x = n(443773),
    v = n(268293);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function E(e) {
    let { user: t, channel: n, onHide: E } = e,
        Z = (0, g.ZP)(t.id),
        I = (0, o.ZP)(),
        S = (0, a.e7)([u.Z], () => u.Z.isBlocked(t.id)),
        { analyticsLocations: P } = (0, d.ZP)(S ? c.Z.BLOCKED_PROFILE_PANEL : c.Z.IGNORED_PROFILE_PANEL),
        T = (0, p.ZB)({
            layout: 'SIDEBAR',
            userId: t.id,
            channelId: n.id
        }),
        N = i.useRef(null);
    return (0, r.jsx)(d.Gt, {
        value: P,
        children: (0, r.jsx)(p.Mt, {
            value: T,
            fetchStartedAt: null == Z ? void 0 : Z.fetchStartedAt,
            fetchEndedAt: null == Z ? void 0 : Z.fetchEndedAt,
            isLoaded: null == Z ? void 0 : Z.isLoaded,
            children: (0, r.jsx)(b.Z, {
                ref: N,
                user: t,
                displayProfile: Z,
                themeType: j.lY.SIDEBAR,
                themeOverride: I,
                children: (0, r.jsx)(l.u2, {
                    children: (0, r.jsxs)('div', {
                        className: x.container,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: v,
                                className: x.preview,
                                'aria-hidden': !0
                            }),
                            (0, r.jsxs)('div', {
                                className: x.body,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: x.headerContainer,
                                        children: [
                                            (0, r.jsx)(m.Z, { user: t }),
                                            (0, r.jsx)(s.X6q, {
                                                variant: 'heading-lg/bold',
                                                children: O.intl.string(O.t.b33pLC)
                                            }),
                                            (0, r.jsx)(s.Text, {
                                                variant: 'text-sm/medium',
                                                children: O.intl.format(S ? O.t['8F+WNz'] : O.t['/cZp5u'], { username: h.ZP.getName(n.guild_id, n.id, t) })
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(s.Kqy, {
                                        align: 'center',
                                        children: [
                                            (0, r.jsx)(y.Z, {
                                                isBlocked: S,
                                                onClick: () => {
                                                    (E(),
                                                        (0, f.pQ)(
                                                            C(
                                                                {
                                                                    action: S ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: P
                                                                },
                                                                T
                                                            )
                                                        ));
                                                }
                                            }),
                                            (0, r.jsx)(_.Z, {
                                                userId: t.id,
                                                onClick: () => {
                                                    (E(),
                                                        (0, f.pQ)(
                                                            C(
                                                                {
                                                                    action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                    analyticsLocations: P
                                                                },
                                                                T
                                                            )
                                                        ));
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
