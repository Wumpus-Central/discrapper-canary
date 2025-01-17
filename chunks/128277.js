r.d(n, {
    Z: function () {
        return D;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(503438),
    c = r(100527),
    d = r(906732),
    f = r(379357),
    _ = r(358696),
    h = r(649700),
    p = r(952164),
    m = r(960870),
    g = r(139793),
    E = r(994746),
    v = r(652853),
    I = r(448980),
    T = r(336383),
    b = r(194811),
    y = r(373826),
    S = r(315324),
    A = r(262210),
    N = r(666984),
    C = r(670451),
    R = r(228168),
    O = r(249942);
function D(e) {
    let { user: n, currentUser: r, activity: s, guild: D, channel: L, className: x, onClose: w } = e,
        { profileType: P } = (0, v.z)(),
        M = { [O.fullSize]: P === R.y0.FULL_SIZE },
        k = (0, h.Z)({
            activity: s,
            user: n
        }),
        U = (0, E.Z)(s),
        { largeImage: B } = (0, f.FO)(s),
        { analyticsLocations: G } = (0, d.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        Z = (0, m.Z)({
            display: 'live',
            user: n,
            activity: s,
            entry: k,
            analyticsLocations: G
        }),
        F = (0, g.Z)({
            userId: n.id,
            onAction: Z
        });
    if (!(0, u.Z)(s)) return null;
    let V = () => {
            var e, r;
            let u = null !== (r = null === (e = s.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== r ? r : [];
            return 0 === u.length
                ? null
                : null == s.sync_id
                  ? (0, i.jsx)(y.Z, {
                        variant: 'text-xs/normal',
                        text: u.join(', ')
                    })
                  : (0, i.jsx)(y.Z, {
                        variant: 'text-xs/normal',
                        text: u.map((e, r) =>
                            (0, i.jsxs)(
                                a.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(l.Clickable, {
                                            className: o()(O.clickableText, O.inline),
                                            onClick: (e) => {
                                                e.stopPropagation(), Z({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, p.d$)(s, n.id, r);
                                            },
                                            children: e
                                        }),
                                        r < u.length - 1 ? ', ' : ''
                                    ]
                                },
                                r
                            )
                        )
                    });
        },
        j = () => {
            let { timestamps: e } = s;
            if (null == e) return null;
            let { start: n, end: r } = e;
            return null == n || null == r
                ? null
                : (0, i.jsx)(A.Z, {
                      start: n,
                      end: r
                  });
        },
        H = () =>
            null == D || null == L
                ? null
                : (0, i.jsx)(S.Z, {
                      user: n,
                      guild: D,
                      channel: L,
                      onAction: Z,
                      onClose: w
                  }),
        Y = () =>
            n.id === r.id
                ? null
                : (0, i.jsx)('div', {
                      className: o()(O.actions, M),
                      children: (0, i.jsx)(N.Z, {
                          user: n,
                          activity: s,
                          onAction: Z
                      })
                  });
    return (0, i.jsx)(d.Gt, {
        value: G,
        children: (0, i.jsxs)(T.Z, {
            ref: F,
            className: o()(O.card, x),
            onAction: Z,
            onClose: w,
            children: [
                (0, i.jsx)(b.Z, {
                    ...U,
                    contextMenu: (0, i.jsx)(C.Z, {
                        display: 'live',
                        user: n,
                        activity: s,
                        entry: k,
                        onClose: w
                    })
                }),
                (0, i.jsxs)('div', {
                    className: O.body,
                    children: [
                        (0, i.jsxs)('div', {
                            className: o()(O.content, M),
                            children: [
                                (0, i.jsx)(_.E, {
                                    image: B,
                                    size: _.J.SIZE_60,
                                    className: O.clickableImage,
                                    onClick: (e) => {
                                        e.stopPropagation(), Z({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, p.Z5)(s, n.id);
                                    }
                                }),
                                (0, i.jsxs)('div', {
                                    className: O.details,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsx)(y.Z, {
                                                    variant: 'heading-sm/semibold',
                                                    text: s.details,
                                                    onClick: () => {
                                                        Z({ action: 'OPEN_SPOTIFY_TRACK' }), (0, p.aG)(s);
                                                    }
                                                }),
                                                V()
                                            ]
                                        }),
                                        (0, i.jsx)(I.Z, {
                                            user: n,
                                            activity: s,
                                            className: O.badges
                                        }),
                                        j()
                                    ]
                                }),
                                P === R.y0.FULL_SIZE && Y()
                            ]
                        }),
                        H()
                    ]
                }),
                P !== R.y0.FULL_SIZE && Y()
            ]
        })
    });
}
