r.d(n, {
    Y: function () {
        return O;
    },
    Z: function () {
        return R;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(442837),
    c = r(481060),
    d = r(100527),
    f = r(906732),
    _ = r(271383),
    h = r(699516),
    p = r(5192),
    m = r(785717),
    g = r(221292),
    E = r(687158),
    v = r(471879),
    I = r(502762),
    T = r(848780),
    b = r(907179),
    y = r(475413),
    S = r(228168),
    A = r(388032),
    N = r(378067),
    C = r(609440);
function R(e) {
    let { user: n, guildId: r, setPopoutRef: i, channelId: o, messageId: l, roleId: h, onViewBlockedProfileClick: p, newAnalyticsLocations: T = [] } = e,
        { analyticsLocations: b } = (0, f.ZP)([...T, d.Z.BLOCKED_PROFILE_POPOUT]),
        R = (0, m.ZB)({
            layout: 'BLOCKED_PROFILE_POPOUT',
            userId: n.id,
            guildId: r,
            channelId: o,
            messageId: l,
            roleId: h
        }),
        O = s.useRef(null),
        D = (0, E.ZP)(n.id, r),
        L = (0, u.e7)([_.ZP], () => (null != r ? _.ZP.getMember(r, n.id) : null));
    return (
        s.useEffect(() => {
            null == i || i(null == O ? void 0 : O.current);
        }, [O, i]),
        (0, a.jsx)(f.Gt, {
            value: b,
            children: (0, a.jsx)(m.Mt, {
                value: R,
                shouldTrackViewOnMount: null == L || null != L.fullProfileLoadedTimestamp,
                children: (0, a.jsx)(c.Dialog, {
                    ref: O,
                    'aria-label': n.username,
                    children: (0, a.jsx)(I.Z, {
                        user: n,
                        displayProfile: D,
                        profileType: S.y0.BITE_SIZE,
                        children: (0, a.jsxs)('div', {
                            className: N.container,
                            children: [
                                (0, a.jsx)('img', {
                                    alt: '',
                                    src: C,
                                    className: N.previewForCollected,
                                    'aria-hidden': !0
                                }),
                                (0, a.jsxs)('div', {
                                    className: N.body,
                                    children: [
                                        (0, a.jsx)(v.Z, {
                                            user: n,
                                            guildId: r
                                        }),
                                        (0, a.jsx)(c.Heading, {
                                            variant: 'heading-lg/bold',
                                            className: N.header,
                                            children: A.intl.string(A.t.VNJ7UF)
                                        }),
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            children: A.intl.format(A.t.LXbngo, { username: n.username })
                                        }),
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            children: A.intl.string(A.t['20WzZ2'])
                                        }),
                                        (0, a.jsx)(y.tG, {
                                            className: N.centeredButton,
                                            action: 'VIEW_BLOCKED_PROFILE',
                                            text: A.intl.string(A.t.iXAna2),
                                            autoFocus: !0,
                                            fullWidth: !1,
                                            onClick: () => {
                                                null == p || p(),
                                                    (0, g.pQ)({
                                                        action: 'VIEW_BLOCKED_PROFILE',
                                                        analyticsLocations: b,
                                                        ...R
                                                    });
                                            }
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        })
    );
}
function O(e) {
    let { user: n, guildId: r, setPopoutRef: i, channelId: o, messageId: y, roleId: R, onViewBlockedProfileClick: O, newAnalyticsLocations: D = [] } = e,
        L = (0, u.e7)([h.Z], () => h.Z.isBlocked(n.id)),
        { analyticsLocations: x } = (0, f.ZP)([...D, L ? d.Z.BLOCKED_PROFILE_POPOUT : d.Z.IGNORED_PROFILE_POPOUT]),
        w = (0, m.ZB)({
            layout: L ? 'BLOCKED_PROFILE_POPOUT' : 'IGNORED_PROFILE_POPOUT',
            userId: n.id,
            guildId: r,
            channelId: o,
            messageId: y,
            roleId: R
        }),
        P = s.useRef(null),
        M = (0, E.ZP)(n.id, r),
        k = (0, u.e7)([_.ZP], () => (null != r ? _.ZP.getMember(r, n.id) : null));
    s.useEffect(() => {
        null == i || i(null == P ? void 0 : P.current);
    }, [P, i]);
    let U = L ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE';
    return (0, a.jsx)(f.Gt, {
        value: x,
        children: (0, a.jsx)(m.Mt, {
            value: w,
            shouldTrackViewOnMount: null == k || null != k.fullProfileLoadedTimestamp,
            children: (0, a.jsx)(c.Dialog, {
                ref: P,
                'aria-label': n.username,
                children: (0, a.jsx)(I.Z, {
                    user: n,
                    displayProfile: M,
                    profileType: S.y0.BITE_SIZE,
                    children: (0, a.jsxs)('div', {
                        className: N.container,
                        children: [
                            (0, a.jsx)('img', {
                                alt: '',
                                src: C,
                                className: N.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, a.jsxs)('div', {
                                className: l()(N.body, N.bodySpacing),
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: N.headerContainer,
                                        children: [
                                            (0, a.jsx)(v.i, {
                                                user: n,
                                                guildId: r
                                            }),
                                            (0, a.jsx)(c.Heading, {
                                                variant: 'heading-lg/bold',
                                                children: A.intl.string(A.t.b33pLC)
                                            }),
                                            (0, a.jsx)(c.Text, {
                                                variant: 'text-sm/medium',
                                                children: A.intl.format(L ? A.t['8F+WNz'] : A.t['/cZp5u'], { username: p.ZP.getName(r, o, n) })
                                            })
                                        ]
                                    }),
                                    (0, a.jsxs)(c.Stack, {
                                        align: 'center',
                                        children: [
                                            (0, a.jsx)(b.Z, {
                                                isBlocked: L,
                                                onClick: () => {
                                                    null == O || O(),
                                                        (0, g.pQ)({
                                                            action: U,
                                                            analyticsLocations: x,
                                                            ...w
                                                        });
                                                }
                                            }),
                                            (0, a.jsx)(T.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    null == O || O(),
                                                        (0, g.pQ)({
                                                            action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                            analyticsLocations: x,
                                                            ...w
                                                        });
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
