n.d(t, { Z: () => O });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(503438),
    u = n(100527),
    c = n(906732),
    d = n(379357),
    f = n(358696),
    _ = n(649700),
    p = n(952164),
    h = n(960870),
    m = n(139793),
    g = n(994746),
    E = n(652853),
    v = n(448980),
    y = n(336383),
    I = n(194811),
    b = n(373826),
    T = n(315324),
    S = n(262210),
    A = n(666984),
    N = n(670451),
    C = n(228168),
    R = n(249942);
function O(e) {
    let { user: t, currentUser: n, activity: a, guild: O, channel: D, className: x, onClose: L } = e,
        { profileType: P } = (0, E.z)(),
        w = { [R.fullSize]: P === C.y0.FULL_SIZE },
        M = (0, _.Z)({
            activity: a,
            user: t
        }),
        k = (0, g.Z)(a),
        { largeImage: U } = (0, d.FO)(a),
        { analyticsLocations: G } = (0, c.ZP)(u.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        B = (0, h.Z)({
            display: 'live',
            user: t,
            activity: a,
            entry: M,
            analyticsLocations: G
        }),
        Z = (0, m.Z)({
            userId: t.id,
            onAction: B
        });
    if (!(0, l.Z)(a)) return null;
    let F = () => {
            var e, n;
            let l = null !== (n = null === (e = a.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== n ? n : [];
            return 0 === l.length
                ? null
                : null == a.sync_id
                  ? (0, i.jsx)(b.Z, {
                        variant: 'text-xs/normal',
                        text: l.join(', ')
                    })
                  : (0, i.jsx)(b.Z, {
                        variant: 'text-xs/normal',
                        text: l.map((e, n) =>
                            (0, i.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(o.P3F, {
                                            className: s()(R.clickableText, R.inline),
                                            onClick: (e) => {
                                                e.stopPropagation(), B({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, p.d$)(a, t.id, n);
                                            },
                                            children: e
                                        }),
                                        n < l.length - 1 ? ', ' : ''
                                    ]
                                },
                                n
                            )
                        )
                    });
        },
        V = () => {
            let { timestamps: e } = a;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, i.jsx)(S.Z, {
                      start: t,
                      end: n
                  });
        },
        j = () =>
            null == O || null == D
                ? null
                : (0, i.jsx)(T.Z, {
                      user: t,
                      guild: O,
                      channel: D,
                      onAction: B,
                      onClose: L
                  }),
        H = () =>
            t.id === n.id
                ? null
                : (0, i.jsx)('div', {
                      className: s()(R.actions, w),
                      children: (0, i.jsx)(A.Z, {
                          user: t,
                          activity: a,
                          onAction: B
                      })
                  });
    return (0, i.jsx)(c.Gt, {
        value: G,
        children: (0, i.jsxs)(y.Z, {
            ref: Z,
            className: s()(R.card, x),
            onAction: B,
            onClose: L,
            children: [
                (0, i.jsx)(I.Z, {
                    ...k,
                    contextMenu: (0, i.jsx)(N.Z, {
                        display: 'live',
                        user: t,
                        activity: a,
                        entry: M,
                        onClose: L
                    })
                }),
                (0, i.jsxs)('div', {
                    className: R.body,
                    children: [
                        (0, i.jsxs)('div', {
                            className: s()(R.content, w),
                            children: [
                                (0, i.jsx)(f.E, {
                                    image: U,
                                    size: f.J.SIZE_60,
                                    className: R.clickableImage,
                                    onClick: (e) => {
                                        e.stopPropagation(), B({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, p.Z5)(a, t.id);
                                    }
                                }),
                                (0, i.jsxs)('div', {
                                    className: R.details,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsx)(b.Z, {
                                                    variant: 'heading-sm/semibold',
                                                    text: a.details,
                                                    onClick: () => {
                                                        B({ action: 'OPEN_SPOTIFY_TRACK' }), (0, p.aG)(a);
                                                    }
                                                }),
                                                F()
                                            ]
                                        }),
                                        (0, i.jsx)(v.Z, {
                                            user: t,
                                            activity: a,
                                            className: R.badges
                                        }),
                                        V()
                                    ]
                                }),
                                P === C.y0.FULL_SIZE && H()
                            ]
                        }),
                        j()
                    ]
                }),
                P !== C.y0.FULL_SIZE && H()
            ]
        })
    });
}
