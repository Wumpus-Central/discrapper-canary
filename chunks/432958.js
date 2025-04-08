n.d(t, { A: () => I });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(597312),
    s = n(442837),
    c = n(481060),
    u = n(410030),
    d = n(100527),
    p = n(906732),
    h = n(699516),
    f = n(5192),
    m = n(785717),
    g = n(221292),
    b = n(687158),
    _ = n(471879),
    C = n(502762),
    y = n(848780),
    x = n(907179);
n(475413);
var v = n(228168),
    j = n(388032),
    O = n(682964),
    E = n(321975);
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
function I(e) {
    let { user: t, channel: n, onViewBlockedProfileClick: l } = e,
        I = (0, b.ZP)(t.id),
        P = (0, u.ZP)(),
        S = (0, s.e7)([h.Z], () => h.Z.isBlocked(t.id)),
        { analyticsLocations: Z } = (0, p.ZP)(S ? d.Z.BLOCKED_PROFILE_PANEL : d.Z.IGNORED_PROFILE_PANEL),
        T = (0, m.ZB)({
            layout: S ? 'BLOCKED_PROFILE_PANEL' : 'IGNORED_PROFILE_PANEL',
            userId: t.id,
            channelId: n.id
        }),
        A = i.useRef(null);
    return (0, r.jsx)(p.Gt, {
        value: Z,
        children: (0, r.jsx)(m.Mt, {
            value: T,
            children: (0, r.jsx)(C.Z, {
                ref: A,
                user: t,
                displayProfile: I,
                profileType: v.y0.PANEL,
                themeOverride: P,
                children: (0, r.jsx)(a.u2, {
                    children: (0, r.jsxs)('div', {
                        className: O.container,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: E,
                                className: O.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, r.jsxs)('div', {
                                className: o()(O.body, O.bodySpacing),
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: O.headerContainer,
                                        children: [
                                            (0, r.jsx)(_.i, { user: t }),
                                            (0, r.jsx)(c.X6q, {
                                                variant: 'heading-lg/bold',
                                                children: j.NW.string(j.t.b33pLC)
                                            }),
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-sm/medium',
                                                children: j.NW.format(S ? j.t['8F+WNz'] : j.t['/cZp5u'], { username: f.ZP.getName(n.guild_id, n.id, t) })
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(c.Kqy, {
                                        align: 'center',
                                        children: [
                                            (0, r.jsx)(x.Z, {
                                                isBlocked: S,
                                                onClick: () => {
                                                    null == l || l(),
                                                        (0, g.pQ)(
                                                            N(
                                                                {
                                                                    action: S ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: Z
                                                                },
                                                                T
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, r.jsx)(y.Z, {
                                                userId: t.id,
                                                onClick: () => {
                                                    null == l || l(),
                                                        (0, g.pQ)(
                                                            N(
                                                                {
                                                                    action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                    analyticsLocations: Z
                                                                },
                                                                T
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
