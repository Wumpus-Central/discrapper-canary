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
    T = n(652853),
    b = n(64621),
    S = n(448980),
    A = n(336383),
    N = n(194811),
    C = n(373826),
    R = n(262210),
    O = n(666984),
    D = n(386019),
    L = n(228168),
    x = n(309584);
function w(e) {
    var t;
    let { user: n, currentUser: a, activity: w, profileGuildId: P, className: M, onClose: k } = e,
        { profileType: U } = (0, T.z)(),
        G = { [x.fullSize]: U === L.y0.FULL_SIZE },
        { interactionSource: B, interactionSourceId: Z } = (0, v.Xo)(),
        F = (0, _.Z)({
            activity: w,
            user: n
        }),
        V = (0, g.Z)(w),
        { largeImage: j } = (0, d.FO)(w),
        { analyticsLocations: H } = (0, c.ZP)(u.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        Y = (0, h.Z)({
            display: 'live',
            user: n,
            activity: w,
            entry: F,
            analyticsLocations: H
        }),
        W = (0, m.Z)({
            userId: n.id,
            onAction: Y
        });
    if (!(0, l.Z)(w)) return null;
    let K = () => {
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
                                            className: s()(x.clickableText, x.inline),
                                            onClick: (e) => {
                                                e.stopPropagation(), Y({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, p.d$)(w, n.id, t);
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
        z = () => {
            let { timestamps: e } = w;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, i.jsx)(R.Z, {
                      start: t,
                      end: n
                  });
        },
        q = () =>
            n.id === a.id
                ? null
                : (0, i.jsx)('div', {
                      className: s()(x.actions, G),
                      children: (0, i.jsx)(O.Z, {
                          user: n,
                          activity: w,
                          onAction: Y
                      })
                  });
    if (null === U) return null;
    let Q = null !== (t = w.application_id) && void 0 !== t ? t : w.name,
        X = B === L.n_.ACTIVITY && Z === Q;
    return (0, i.jsx)(c.Gt, {
        value: H,
        children: (0, i.jsx)(b.Z, {
            sourceType: L.n_.ACTIVITY,
            user: n,
            children: (0, i.jsx)(y.Z, {
                user: n,
                guildId: P,
                profileType: U,
                sourceId: Q,
                sourceDetails: null == F ? (0, E.Z)(w) : null,
                entry: F,
                sourceType: L.n_.ACTIVITY,
                onAction: Y,
                children: () =>
                    (0, i.jsx)(I.Z, {
                        user: n,
                        className: x.toolbarContainer,
                        sourceType: L.n_.ACTIVITY,
                        interactionSourceId: Q,
                        onAction: Y,
                        onShowToolbar: () => Y({ action: 'HOVER_ACTIVITY_CARD' }),
                        renderMoreButtonPopout: (e) =>
                            (0, i.jsx)(D.Z, {
                                display: 'live',
                                user: n,
                                activity: w,
                                entry: F,
                                onClose: k,
                                children: e
                            }),
                        children: (0, i.jsxs)(A.Z, {
                            ref: W,
                            className: s()(M, { [x.hoisted]: X }),
                            onAction: Y,
                            onClose: k,
                            children: [
                                (0, i.jsx)(N.Z, { ...V }),
                                (0, i.jsx)('div', {
                                    className: x.body,
                                    children: (0, i.jsxs)('div', {
                                        className: s()(x.content, G),
                                        children: [
                                            (0, i.jsx)(f.E, {
                                                image: j,
                                                size: f.J.SIZE_60,
                                                className: x.clickableImage,
                                                onClick: (e) => {
                                                    e.stopPropagation(), Y({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, p.Z5)(w, n.id);
                                                }
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: x.details,
                                                children: [
                                                    (0, i.jsxs)('div', {
                                                        children: [
                                                            (0, i.jsx)(C.Z, {
                                                                variant: 'heading-sm/semibold',
                                                                text: w.details,
                                                                onClick: () => {
                                                                    Y({ action: 'OPEN_SPOTIFY_TRACK' }), (0, p.aG)(w);
                                                                }
                                                            }),
                                                            K()
                                                        ]
                                                    }),
                                                    (0, i.jsx)(S.Z, {
                                                        user: n,
                                                        activity: w,
                                                        className: x.badges
                                                    }),
                                                    z()
                                                ]
                                            }),
                                            U === L.y0.FULL_SIZE && q()
                                        ]
                                    })
                                }),
                                U !== L.y0.FULL_SIZE && q()
                            ]
                        })
                    })
            })
        })
    });
}
