n.d(t, {
    A: () => S,
    Z: () => I
});
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
    v = n(848780),
    y = n(907179),
    x = n(475413),
    j = n(228168),
    O = n(388032),
    N = n(497345),
    E = n(321975);
function P(e) {
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
        o = (0, b.ZP)(t.id),
        s = (0, u.ZP)(),
        { analyticsLocations: h } = (0, p.ZP)(d.Z.BLOCKED_PROFILE_PANEL),
        f = (0, m.ZB)({
            layout: 'BLOCKED_PROFILE_PANEL',
            userId: t.id,
            channelId: n.id
        }),
        v = i.useRef(null);
    return (0, r.jsx)(p.Gt, {
        value: h,
        children: (0, r.jsx)(m.Mt, {
            value: f,
            children: (0, r.jsx)(C.Z, {
                ref: v,
                user: t,
                displayProfile: o,
                profileType: j.y0.PANEL,
                themeOverride: s,
                children: (0, r.jsx)(a.u2, {
                    children: (0, r.jsxs)('div', {
                        className: N.container,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: E,
                                className: N.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, r.jsxs)('div', {
                                className: N.body,
                                children: [
                                    (0, r.jsx)(_.Z, {
                                        user: t,
                                        guildId: null
                                    }),
                                    (0, r.jsx)(c.X6q, {
                                        variant: 'heading-lg/bold',
                                        className: N.header,
                                        children: O.NW.string(O.t.VNJ7UF)
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        children: O.NW.format(O.t.LXbngo, { username: t.username })
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        children: O.NW.string(O.t['20WzZ2'])
                                    }),
                                    (0, r.jsx)(x.tG, {
                                        className: N.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: O.NW.string(O.t.iXAna2),
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == l || l(),
                                                (0, g.pQ)(
                                                    P(
                                                        {
                                                            action: 'VIEW_BLOCKED_PROFILE',
                                                            analyticsLocations: h
                                                        },
                                                        f
                                                    )
                                                );
                                        }
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
function S(e) {
    let { user: t, channel: n, onViewBlockedProfileClick: l } = e,
        x = (0, b.ZP)(t.id),
        I = (0, u.ZP)(),
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
                displayProfile: x,
                profileType: j.y0.PANEL,
                themeOverride: I,
                children: (0, r.jsx)(a.u2, {
                    children: (0, r.jsxs)('div', {
                        className: N.container,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: E,
                                className: N.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, r.jsxs)('div', {
                                className: o()(N.body, N.bodySpacing),
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: N.headerContainer,
                                        children: [
                                            (0, r.jsx)(_.i, { user: t }),
                                            (0, r.jsx)(c.X6q, {
                                                variant: 'heading-lg/bold',
                                                children: O.NW.string(O.t.b33pLC)
                                            }),
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-sm/medium',
                                                children: O.NW.format(S ? O.t['8F+WNz'] : O.t['/cZp5u'], { username: f.ZP.getName(n.guild_id, n.id, t) })
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(c.Kqy, {
                                        align: 'center',
                                        children: [
                                            (0, r.jsx)(y.Z, {
                                                isBlocked: S,
                                                onClick: () => {
                                                    null == l || l(),
                                                        (0, g.pQ)(
                                                            P(
                                                                {
                                                                    action: S ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: Z
                                                                },
                                                                T
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, r.jsx)(v.Z, {
                                                userId: t.id,
                                                onClick: () => {
                                                    null == l || l(),
                                                        (0, g.pQ)(
                                                            P(
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
