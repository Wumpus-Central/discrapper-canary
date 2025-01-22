r.d(n, {
    Z: function () {
        return M;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(503438),
    c = r(100527),
    d = r(906732),
    f = r(379357),
    p = r(358696),
    h = r(649700),
    _ = r(952164),
    m = r(960870),
    g = r(139793),
    E = r(994746),
    v = r(273284),
    y = r(510659),
    b = r(287954),
    I = r(660579),
    T = r(652853),
    S = r(64621),
    A = r(448980),
    C = r(336383),
    N = r(194811),
    R = r(373826),
    O = r(315324),
    D = r(262210),
    x = r(666984),
    L = r(386019),
    w = r(228168),
    P = r(249942);
function M(e) {
    var n;
    let { user: r, currentUser: o, activity: M, guild: k, channel: U, className: B, onClose: G, profileGuildId: Z } = e,
        { profileType: F } = (0, T.z)(),
        V = { [P.fullSize]: F === w.y0.FULL_SIZE },
        { interactionSource: j, interactionSourceId: H } = (0, y.Xo)(),
        Y = (0, h.Z)({
            activity: M,
            user: r
        }),
        W = (0, E.Z)(M),
        { largeImage: K } = (0, f.FO)(M),
        { analyticsLocations: z } = (0, d.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        q = (0, m.Z)({
            display: 'live',
            user: r,
            activity: M,
            entry: Y,
            analyticsLocations: z
        }),
        Q = (0, g.Z)({
            userId: r.id,
            onAction: q
        });
    if (!(0, u.Z)(M)) return null;
    let X = () => {
            var e, n;
            let o = null !== (n = null === (e = M.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== n ? n : [];
            return 0 === o.length
                ? null
                : null == M.sync_id
                  ? (0, i.jsx)(R.Z, {
                        variant: 'text-xs/normal',
                        text: o.join(', ')
                    })
                  : (0, i.jsx)(R.Z, {
                        variant: 'text-xs/normal',
                        text: o.map((e, n) =>
                            (0, i.jsxs)(
                                a.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(l.Clickable, {
                                            className: s()(P.clickableText, P.inline),
                                            onClick: (e) => {
                                                e.stopPropagation(), q({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, _.d$)(M, r.id, n);
                                            },
                                            children: e
                                        }),
                                        n < o.length - 1 ? ', ' : ''
                                    ]
                                },
                                n
                            )
                        )
                    });
        },
        J = () => {
            let { timestamps: e } = M;
            if (null == e) return null;
            let { start: n, end: r } = e;
            return null == n || null == r
                ? null
                : (0, i.jsx)(D.Z, {
                      start: n,
                      end: r
                  });
        },
        $ = () =>
            null == k || null == U
                ? null
                : (0, i.jsx)(O.Z, {
                      user: r,
                      guild: k,
                      channel: U,
                      onAction: q,
                      onClose: G
                  }),
        ee = () =>
            r.id === o.id
                ? null
                : (0, i.jsx)('div', {
                      className: s()(P.actions, V),
                      children: (0, i.jsx)(x.Z, {
                          user: r,
                          activity: M,
                          onAction: q
                      })
                  });
    if (null === F) return null;
    let et = null !== (n = M.application_id) && void 0 !== n ? n : M.name,
        en = j === w.n_.ACTIVITY && H === et;
    return (0, i.jsx)(d.Gt, {
        value: z,
        children: (0, i.jsx)(S.Z, {
            sourceType: w.n_.ACTIVITY,
            user: r,
            children: (0, i.jsx)(b.Z, {
                user: r,
                guildId: Z,
                profileType: F,
                sourceId: et,
                sourceDetails: null == Y ? (0, v.Z)(M) : null,
                entry: Y,
                sourceType: w.n_.ACTIVITY,
                onAction: q,
                children: () =>
                    (0, i.jsx)(I.Z, {
                        user: r,
                        className: P.toolbarContainer,
                        sourceType: w.n_.ACTIVITY,
                        interactionSourceId: et,
                        onAction: q,
                        onShowToolbar: () => q({ action: 'HOVER_ACTIVITY_CARD' }),
                        renderMoreButtonPopout: (e) =>
                            (0, i.jsx)(L.Z, {
                                display: 'live',
                                user: r,
                                activity: M,
                                entry: Y,
                                onClose: G,
                                children: e
                            }),
                        children: (0, i.jsxs)(C.Z, {
                            ref: Q,
                            className: s()(B, { [P.hoisted]: en }),
                            onAction: q,
                            onClose: G,
                            children: [
                                (0, i.jsx)(N.Z, { ...W }),
                                (0, i.jsxs)('div', {
                                    className: P.body,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: s()(P.content, V),
                                            children: [
                                                (0, i.jsx)(p.E, {
                                                    image: K,
                                                    size: p.J.SIZE_60,
                                                    className: P.clickableImage,
                                                    onClick: (e) => {
                                                        e.stopPropagation(), q({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, _.Z5)(M, r.id);
                                                    }
                                                }),
                                                (0, i.jsxs)('div', {
                                                    className: P.details,
                                                    children: [
                                                        (0, i.jsxs)('div', {
                                                            children: [
                                                                (0, i.jsx)(R.Z, {
                                                                    variant: 'heading-sm/semibold',
                                                                    text: M.details,
                                                                    onClick: () => {
                                                                        q({ action: 'OPEN_SPOTIFY_TRACK' }), (0, _.aG)(M);
                                                                    }
                                                                }),
                                                                X()
                                                            ]
                                                        }),
                                                        (0, i.jsx)(A.Z, {
                                                            user: r,
                                                            activity: M,
                                                            className: P.badges
                                                        }),
                                                        J()
                                                    ]
                                                }),
                                                F === w.y0.FULL_SIZE && ee()
                                            ]
                                        }),
                                        $()
                                    ]
                                }),
                                F !== w.y0.FULL_SIZE && ee()
                            ]
                        })
                    })
            })
        })
    });
}
