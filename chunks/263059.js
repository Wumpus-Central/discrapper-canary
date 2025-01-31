n.d(t, { Z: () => w });
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
    E = n(273284),
    v = n(510659),
    y = n(287954),
    I = n(660579),
    b = n(652853),
    T = n(64621),
    S = n(448980),
    A = n(336383),
    N = n(194811),
    C = n(373826),
    R = n(315324),
    O = n(262210),
    D = n(666984),
    x = n(386019),
    L = n(228168),
    P = n(249942);
function w(e) {
    var t;
    let { user: n, currentUser: a, activity: w, guild: M, channel: k, className: U, onClose: G, profileGuildId: B } = e,
        { profileType: Z } = (0, b.z)(),
        F = { [P.fullSize]: Z === L.y0.FULL_SIZE },
        { interactionSource: V, interactionSourceId: j } = (0, v.Xo)(),
        H = (0, _.Z)({
            activity: w,
            user: n
        }),
        Y = (0, g.Z)(w),
        { largeImage: W } = (0, d.FO)(w),
        { analyticsLocations: K } = (0, c.ZP)(u.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        z = (0, h.Z)({
            display: 'live',
            user: n,
            activity: w,
            entry: H,
            analyticsLocations: K
        }),
        q = (0, m.Z)({
            userId: n.id,
            onAction: z
        });
    if (!(0, l.Z)(w)) return null;
    let Q = () => {
            var e, t;
            let a = null !== (t = null === (e = w.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== t ? t : [];
            return 0 === a.length
                ? null
                : null == w.sync_id
                  ? (0, i.jsx)(C.Z, {
                        variant: 'text-xs/normal',
                        text: a.join(', ')
                    })
                  : (0, i.jsx)(C.Z, {
                        variant: 'text-xs/normal',
                        text: a.map((e, t) =>
                            (0, i.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(o.P3F, {
                                            className: s()(P.clickableText, P.inline),
                                            onClick: (e) => {
                                                e.stopPropagation(), z({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, p.d$)(w, n.id, t);
                                            },
                                            children: e
                                        }),
                                        t < a.length - 1 ? ', ' : ''
                                    ]
                                },
                                t
                            )
                        )
                    });
        },
        X = () => {
            let { timestamps: e } = w;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, i.jsx)(O.Z, {
                      start: t,
                      end: n
                  });
        },
        J = () =>
            null == M || null == k
                ? null
                : (0, i.jsx)(R.Z, {
                      user: n,
                      guild: M,
                      channel: k,
                      onAction: z,
                      onClose: G
                  }),
        $ = () =>
            n.id === a.id
                ? null
                : (0, i.jsx)('div', {
                      className: s()(P.actions, F),
                      children: (0, i.jsx)(D.Z, {
                          user: n,
                          activity: w,
                          onAction: z
                      })
                  });
    if (null === Z) return null;
    let ee = null !== (t = w.application_id) && void 0 !== t ? t : w.name,
        et = V === L.n_.ACTIVITY && j === ee;
    return (0, i.jsx)(c.Gt, {
        value: K,
        children: (0, i.jsx)(T.Z, {
            sourceType: L.n_.ACTIVITY,
            user: n,
            children: (0, i.jsx)(y.Z, {
                user: n,
                guildId: B,
                profileType: Z,
                sourceId: ee,
                sourceDetails: null == H ? (0, E.Z)(w) : null,
                entry: H,
                sourceType: L.n_.ACTIVITY,
                onAction: z,
                children: () =>
                    (0, i.jsx)(I.Z, {
                        user: n,
                        className: P.toolbarContainer,
                        sourceType: L.n_.ACTIVITY,
                        interactionSourceId: ee,
                        onAction: z,
                        onShowToolbar: () => z({ action: 'HOVER_ACTIVITY_CARD' }),
                        renderMoreButtonPopout: (e) =>
                            (0, i.jsx)(x.Z, {
                                display: 'live',
                                user: n,
                                activity: w,
                                entry: H,
                                onClose: G,
                                children: e
                            }),
                        children: (0, i.jsxs)(A.Z, {
                            ref: q,
                            className: s()(U, { [P.hoisted]: et }),
                            onAction: z,
                            onClose: G,
                            children: [
                                (0, i.jsx)(N.Z, { ...Y }),
                                (0, i.jsxs)('div', {
                                    className: P.body,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: s()(P.content, F),
                                            children: [
                                                (0, i.jsx)(f.E, {
                                                    image: W,
                                                    size: f.J.SIZE_60,
                                                    className: P.clickableImage,
                                                    onClick: (e) => {
                                                        e.stopPropagation(), z({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, p.Z5)(w, n.id);
                                                    }
                                                }),
                                                (0, i.jsxs)('div', {
                                                    className: P.details,
                                                    children: [
                                                        (0, i.jsxs)('div', {
                                                            children: [
                                                                (0, i.jsx)(C.Z, {
                                                                    variant: 'heading-sm/semibold',
                                                                    text: w.details,
                                                                    onClick: () => {
                                                                        z({ action: 'OPEN_SPOTIFY_TRACK' }), (0, p.aG)(w);
                                                                    }
                                                                }),
                                                                Q()
                                                            ]
                                                        }),
                                                        (0, i.jsx)(S.Z, {
                                                            user: n,
                                                            activity: w,
                                                            className: P.badges
                                                        }),
                                                        X()
                                                    ]
                                                }),
                                                Z === L.y0.FULL_SIZE && $()
                                            ]
                                        }),
                                        J()
                                    ]
                                }),
                                Z !== L.y0.FULL_SIZE && $()
                            ]
                        })
                    })
            })
        })
    });
}
