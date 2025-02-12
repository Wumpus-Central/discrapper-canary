n.d(t, {
    Y: () => C,
    Z: () => N
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(100527),
    c = n(906732),
    d = n(271383),
    f = n(699516),
    _ = n(5192),
    p = n(785717),
    h = n(221292),
    m = n(687158),
    g = n(471879),
    E = n(502762),
    v = n(848780),
    y = n(907179),
    I = n(475413),
    T = n(228168),
    b = n(388032),
    S = n(805644),
    A = n(609440);
function N(e) {
    let { user: t, guildId: n, setPopoutRef: a, channelId: s, messageId: f, roleId: _, onViewBlockedProfileClick: v, newAnalyticsLocations: y = [] } = e,
        { analyticsLocations: N } = (0, c.ZP)([...y, u.Z.BLOCKED_PROFILE_POPOUT]),
        C = (0, p.ZB)({
            layout: 'BLOCKED_PROFILE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: s,
            messageId: f,
            roleId: _
        }),
        R = r.useRef(null),
        O = (0, m.ZP)(t.id, n),
        D = (0, o.e7)([d.ZP], () => (null != n ? d.ZP.getMember(n, t.id) : null));
    return (
        r.useEffect(() => {
            null == a || a(null == R ? void 0 : R.current);
        }, [R, a]),
        (0, i.jsx)(c.Gt, {
            value: N,
            children: (0, i.jsx)(p.Mt, {
                value: C,
                shouldTrackViewOnMount: null == D || null != D.fullProfileLoadedTimestamp,
                children: (0, i.jsx)(l.VqE, {
                    ref: R,
                    'aria-label': t.username,
                    children: (0, i.jsx)(E.Z, {
                        user: t,
                        displayProfile: O,
                        profileType: T.y0.BITE_SIZE,
                        children: (0, i.jsxs)('div', {
                            className: S.container,
                            children: [
                                (0, i.jsx)('img', {
                                    alt: '',
                                    src: A,
                                    className: S.previewForCollected,
                                    'aria-hidden': !0
                                }),
                                (0, i.jsxs)('div', {
                                    className: S.body,
                                    children: [
                                        (0, i.jsx)(g.Z, {
                                            user: t,
                                            guildId: n
                                        }),
                                        (0, i.jsx)(l.X6q, {
                                            variant: 'heading-lg/bold',
                                            className: S.header,
                                            children: b.intl.string(b.t.VNJ7UF)
                                        }),
                                        (0, i.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: b.intl.format(b.t.LXbngo, { username: t.username })
                                        }),
                                        (0, i.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: b.intl.string(b.t['20WzZ2'])
                                        }),
                                        (0, i.jsx)(I.tG, {
                                            className: S.centeredButton,
                                            action: 'VIEW_BLOCKED_PROFILE',
                                            text: b.intl.string(b.t.iXAna2),
                                            autoFocus: !0,
                                            fullWidth: !1,
                                            onClick: () => {
                                                null == v || v(),
                                                    (0, h.pQ)({
                                                        action: 'VIEW_BLOCKED_PROFILE',
                                                        analyticsLocations: N,
                                                        ...C
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
function C(e) {
    let { user: t, guildId: n, setPopoutRef: a, channelId: I, messageId: N, roleId: C, onViewBlockedProfileClick: R, newAnalyticsLocations: O = [] } = e,
        D = (0, o.e7)([f.Z], () => f.Z.isBlocked(t.id)),
        { analyticsLocations: L } = (0, c.ZP)([...O, D ? u.Z.BLOCKED_PROFILE_POPOUT : u.Z.IGNORED_PROFILE_POPOUT]),
        x = (0, p.ZB)({
            layout: D ? 'BLOCKED_PROFILE_POPOUT' : 'IGNORED_PROFILE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: I,
            messageId: N,
            roleId: C
        }),
        P = r.useRef(null),
        w = (0, m.ZP)(t.id, n),
        M = (0, o.e7)([d.ZP], () => (null != n ? d.ZP.getMember(n, t.id) : null));
    r.useEffect(() => {
        null == a || a(null == P ? void 0 : P.current);
    }, [P, a]);
    let k = D ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE';
    return (0, i.jsx)(c.Gt, {
        value: L,
        children: (0, i.jsx)(p.Mt, {
            value: x,
            shouldTrackViewOnMount: null == M || null != M.fullProfileLoadedTimestamp,
            children: (0, i.jsx)(l.VqE, {
                ref: P,
                'aria-label': t.username,
                children: (0, i.jsx)(E.Z, {
                    user: t,
                    displayProfile: w,
                    profileType: T.y0.BITE_SIZE,
                    children: (0, i.jsxs)('div', {
                        className: S.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: A,
                                className: S.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: s()(S.body, S.bodySpacing),
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: S.headerContainer,
                                        children: [
                                            (0, i.jsx)(g.i, {
                                                user: t,
                                                guildId: n
                                            }),
                                            (0, i.jsx)(l.X6q, {
                                                variant: 'heading-lg/bold',
                                                children: b.intl.string(b.t.b33pLC)
                                            }),
                                            (0, i.jsx)(l.Text, {
                                                variant: 'text-sm/medium',
                                                children: b.intl.format(D ? b.t['8F+WNz'] : b.t['/cZp5u'], { username: _.ZP.getName(n, I, t) })
                                            })
                                        ]
                                    }),
                                    (0, i.jsxs)(l.Kqy, {
                                        align: 'center',
                                        children: [
                                            (0, i.jsx)(y.Z, {
                                                isBlocked: D,
                                                onClick: () => {
                                                    null == R || R(),
                                                        (0, h.pQ)({
                                                            action: k,
                                                            analyticsLocations: L,
                                                            ...x
                                                        });
                                                }
                                            }),
                                            (0, i.jsx)(v.Z, {
                                                userId: t.id,
                                                onClick: () => {
                                                    null == R || R(),
                                                        (0, h.pQ)({
                                                            action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                            analyticsLocations: L,
                                                            ...x
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
