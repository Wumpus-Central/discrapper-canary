n.d(t, { Z: () => R });
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
    T = n(373826),
    b = n(262210),
    S = n(666984),
    A = n(670451),
    N = n(228168),
    C = n(249942);
function R(e) {
    let { user: t, currentUser: n, activity: a, className: R, onClose: O } = e,
        { profileType: D } = (0, E.z)(),
        x = { [C.fullSize]: D === N.y0.FULL_SIZE },
        L = (0, _.Z)({
            activity: a,
            user: t
        }),
        P = (0, g.Z)(a),
        { largeImage: w } = (0, d.FO)(a),
        { analyticsLocations: M } = (0, c.ZP)(u.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        k = (0, h.Z)({
            display: 'live',
            user: t,
            activity: a,
            entry: L,
            analyticsLocations: M
        }),
        U = (0, m.Z)({
            userId: t.id,
            onAction: k
        });
    if (!(0, l.Z)(a)) return null;
    let G = () => {
            var e, n;
            let l = null !== (n = null === (e = a.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== n ? n : [];
            return 0 === l.length
                ? null
                : null == a.sync_id
                  ? (0, i.jsx)(T.Z, {
                        variant: 'text-xs/normal',
                        text: l.join(', ')
                    })
                  : (0, i.jsx)(T.Z, {
                        variant: 'text-xs/normal',
                        text: l.map((e, n) =>
                            (0, i.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(o.P3F, {
                                            className: s()(C.clickableText, C.inline),
                                            onClick: (e) => {
                                                e.stopPropagation(), k({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, p.d$)(a, t.id, n);
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
        B = () => {
            let { timestamps: e } = a;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, i.jsx)(b.Z, {
                      start: t,
                      end: n
                  });
        },
        Z = () =>
            t.id === n.id
                ? null
                : (0, i.jsx)('div', {
                      className: s()(C.actions, x),
                      children: (0, i.jsx)(S.Z, {
                          user: t,
                          activity: a,
                          onAction: k
                      })
                  });
    return (0, i.jsx)(c.Gt, {
        value: M,
        children: (0, i.jsxs)(y.Z, {
            ref: U,
            className: s()(C.card, R),
            onAction: k,
            onClose: O,
            children: [
                (0, i.jsx)(I.Z, {
                    ...P,
                    contextMenu: (0, i.jsx)(A.Z, {
                        display: 'live',
                        user: t,
                        activity: a,
                        entry: L,
                        onClose: O
                    })
                }),
                (0, i.jsx)('div', {
                    className: C.body,
                    children: (0, i.jsxs)('div', {
                        className: s()(C.content, x),
                        children: [
                            (0, i.jsx)(f.E, {
                                image: w,
                                size: f.J.SIZE_60,
                                className: C.clickableImage,
                                onClick: (e) => {
                                    e.stopPropagation(), k({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, p.Z5)(a, t.id);
                                }
                            }),
                            (0, i.jsxs)('div', {
                                className: C.details,
                                children: [
                                    (0, i.jsxs)('div', {
                                        children: [
                                            (0, i.jsx)(T.Z, {
                                                variant: 'heading-sm/semibold',
                                                text: a.details,
                                                onClick: () => {
                                                    k({ action: 'OPEN_SPOTIFY_TRACK' }), (0, p.aG)(a);
                                                }
                                            }),
                                            G()
                                        ]
                                    }),
                                    (0, i.jsx)(v.Z, {
                                        user: t,
                                        activity: a,
                                        className: C.badges
                                    }),
                                    B()
                                ]
                            }),
                            D === N.y0.FULL_SIZE && Z()
                        ]
                    })
                }),
                D !== N.y0.FULL_SIZE && Z()
            ]
        })
    });
}
