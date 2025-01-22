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
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(442837),
    c = r(481060),
    d = r(100527),
    f = r(906732),
    p = r(271383),
    h = r(699516),
    _ = r(5192),
    m = r(785717),
    g = r(221292),
    E = r(687158),
    v = r(471879),
    y = r(502762),
    b = r(848780),
    I = r(907179),
    T = r(475413),
    S = r(228168),
    A = r(388032),
    C = r(378067),
    N = r(609440);
function R(e) {
    let { user: n, guildId: r, setPopoutRef: i, channelId: s, messageId: l, roleId: h, onViewBlockedProfileClick: _, newAnalyticsLocations: b = [] } = e,
        { analyticsLocations: I } = (0, f.ZP)([...b, d.Z.BLOCKED_PROFILE_POPOUT]),
        R = (0, m.ZB)({
            layout: 'BLOCKED_PROFILE_POPOUT',
            userId: n.id,
            guildId: r,
            channelId: s,
            messageId: l,
            roleId: h
        }),
        O = o.useRef(null),
        D = (0, E.ZP)(n.id, r),
        x = (0, u.e7)([p.ZP], () => (null != r ? p.ZP.getMember(r, n.id) : null));
    return (
        o.useEffect(() => {
            null == i || i(null == O ? void 0 : O.current);
        }, [O, i]),
        (0, a.jsx)(f.Gt, {
            value: I,
            children: (0, a.jsx)(m.Mt, {
                value: R,
                shouldTrackViewOnMount: null == x || null != x.fullProfileLoadedTimestamp,
                children: (0, a.jsx)(c.Dialog, {
                    ref: O,
                    'aria-label': n.username,
                    children: (0, a.jsx)(y.Z, {
                        user: n,
                        displayProfile: D,
                        profileType: S.y0.BITE_SIZE,
                        children: (0, a.jsxs)('div', {
                            className: C.container,
                            children: [
                                (0, a.jsx)('img', {
                                    alt: '',
                                    src: N,
                                    className: C.previewForCollected,
                                    'aria-hidden': !0
                                }),
                                (0, a.jsxs)('div', {
                                    className: C.body,
                                    children: [
                                        (0, a.jsx)(v.Z, {
                                            user: n,
                                            guildId: r
                                        }),
                                        (0, a.jsx)(c.Heading, {
                                            variant: 'heading-lg/bold',
                                            className: C.header,
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
                                        (0, a.jsx)(T.tG, {
                                            className: C.centeredButton,
                                            action: 'VIEW_BLOCKED_PROFILE',
                                            text: A.intl.string(A.t.iXAna2),
                                            autoFocus: !0,
                                            fullWidth: !1,
                                            onClick: () => {
                                                null == _ || _(),
                                                    (0, g.pQ)({
                                                        action: 'VIEW_BLOCKED_PROFILE',
                                                        analyticsLocations: I,
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
    let { user: n, guildId: r, setPopoutRef: i, channelId: s, messageId: T, roleId: R, onViewBlockedProfileClick: O, newAnalyticsLocations: D = [] } = e,
        x = (0, u.e7)([h.Z], () => h.Z.isBlocked(n.id)),
        { analyticsLocations: L } = (0, f.ZP)([...D, x ? d.Z.BLOCKED_PROFILE_POPOUT : d.Z.IGNORED_PROFILE_POPOUT]),
        w = (0, m.ZB)({
            layout: x ? 'BLOCKED_PROFILE_POPOUT' : 'IGNORED_PROFILE_POPOUT',
            userId: n.id,
            guildId: r,
            channelId: s,
            messageId: T,
            roleId: R
        }),
        P = o.useRef(null),
        M = (0, E.ZP)(n.id, r),
        k = (0, u.e7)([p.ZP], () => (null != r ? p.ZP.getMember(r, n.id) : null));
    o.useEffect(() => {
        null == i || i(null == P ? void 0 : P.current);
    }, [P, i]);
    let U = x ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE';
    return (0, a.jsx)(f.Gt, {
        value: L,
        children: (0, a.jsx)(m.Mt, {
            value: w,
            shouldTrackViewOnMount: null == k || null != k.fullProfileLoadedTimestamp,
            children: (0, a.jsx)(c.Dialog, {
                ref: P,
                'aria-label': n.username,
                children: (0, a.jsx)(y.Z, {
                    user: n,
                    displayProfile: M,
                    profileType: S.y0.BITE_SIZE,
                    children: (0, a.jsxs)('div', {
                        className: C.container,
                        children: [
                            (0, a.jsx)('img', {
                                alt: '',
                                src: N,
                                className: C.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, a.jsxs)('div', {
                                className: l()(C.body, C.bodySpacing),
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: C.headerContainer,
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
                                                children: A.intl.format(x ? A.t['8F+WNz'] : A.t['/cZp5u'], { username: _.ZP.getName(r, s, n) })
                                            })
                                        ]
                                    }),
                                    (0, a.jsxs)(c.Stack, {
                                        align: 'center',
                                        children: [
                                            (0, a.jsx)(I.Z, {
                                                isBlocked: x,
                                                onClick: () => {
                                                    null == O || O(),
                                                        (0, g.pQ)({
                                                            action: U,
                                                            analyticsLocations: L,
                                                            ...w
                                                        });
                                                }
                                            }),
                                            (0, a.jsx)(b.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    null == O || O(),
                                                        (0, g.pQ)({
                                                            action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                            analyticsLocations: L,
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
