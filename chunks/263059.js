n.d(t, { Z: () => M }), n(301563);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(503438),
    c = n(100527),
    u = n(906732),
    d = n(379357),
    f = n(358696),
    _ = n(649700),
    p = n(952164),
    h = n(960870),
    m = n(139793),
    g = n(994746),
    E = n(273284),
    b = n(510659),
    y = n(287954),
    v = n(660579),
    O = n(652853),
    I = n(64621),
    S = n(448980),
    T = n(336383),
    N = n(194811),
    A = n(373826),
    C = n(262210),
    R = n(666984),
    P = n(386019),
    w = n(228168),
    D = n(227832);
function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function x(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e) {
    var t;
    let { user: n, currentUser: o, activity: L, profileGuildId: M, className: k, onClose: j } = e,
        { profileType: U } = (0, O.z)(),
        G = { [D.fullSize]: U === w.y0.FULL_SIZE },
        { interactionSource: B, interactionSourceId: F } = (0, b.Xo)(),
        V = (0, _.Z)({
            activity: L,
            user: n
        }),
        Z = (0, g.Z)(L),
        { largeImage: H } = (0, d.FO)(L),
        { analyticsLocations: W } = (0, u.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        Y = (0, h.Z)({
            display: 'live',
            user: n,
            activity: L,
            entry: V,
            analyticsLocations: W
        }),
        K = (0, m.Z)({
            userId: n.id,
            onAction: Y
        });
    if (!(0, l.Z)(L)) return null;
    let z = () => {
            var e, t;
            let o = null != (t = null == (e = L.state) ? void 0 : e.split(';')) ? t : [];
            return 0 === o.length
                ? null
                : null == L.sync_id
                  ? (0, r.jsx)(A.Z, {
                        variant: 'text-xs/normal',
                        text: o.join(', ')
                    })
                  : (0, r.jsx)(A.Z, {
                        variant: 'text-xs/normal',
                        text: o.map((e, t) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(s.P3F, {
                                            className: a()(D.clickableText, D.inline),
                                            onClick: (e) => {
                                                e.stopPropagation(), Y({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, p.d$)(L, n.id, t);
                                            },
                                            children: e
                                        }),
                                        t < o.length - 1 ? ', ' : ''
                                    ]
                                },
                                t
                            )
                        )
                    });
        },
        q = () => {
            let { timestamps: e } = L;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, r.jsx)(C.Z, {
                      start: t,
                      end: n
                  });
        },
        Q = () =>
            n.id === o.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(D.actions, G),
                      children: (0, r.jsx)(R.Z, {
                          user: n,
                          activity: L,
                          onAction: Y
                      })
                  });
    if (null === U) return null;
    let X = null != (t = L.application_id) ? t : L.name,
        J = B === w.n_.ACTIVITY && F === X;
    return (0, r.jsx)(u.Gt, {
        value: W,
        children: (0, r.jsx)(I.Z, {
            sourceType: w.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(y.Z, {
                user: n,
                guildId: M,
                profileType: U,
                sourceId: X,
                sourceDetails: null == V ? (0, E.Z)(L) : null,
                entry: V,
                sourceType: w.n_.ACTIVITY,
                onAction: Y,
                children: () =>
                    (0, r.jsx)(v.Z, {
                        user: n,
                        className: D.toolbarContainer,
                        sourceType: w.n_.ACTIVITY,
                        interactionSourceId: X,
                        onAction: Y,
                        onShowToolbar: () => Y({ action: 'HOVER_ACTIVITY_CARD' }),
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(P.Z, {
                                display: 'live',
                                user: n,
                                activity: L,
                                entry: V,
                                onClose: j,
                                children: e
                            }),
                        children: (0, r.jsxs)(T.Z, {
                            ref: K,
                            className: a()(k, { [D.hoisted]: J }),
                            onAction: Y,
                            onClose: j,
                            children: [
                                (0, r.jsx)(N.Z, x({}, Z)),
                                (0, r.jsx)('div', {
                                    className: D.body,
                                    children: (0, r.jsxs)('div', {
                                        className: a()(D.content, G),
                                        children: [
                                            (0, r.jsx)(f.E, {
                                                image: H,
                                                size: f.J.SIZE_60,
                                                className: D.clickableImage,
                                                onClick: (e) => {
                                                    e.stopPropagation(), Y({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, p.Z5)(L, n.id);
                                                }
                                            }),
                                            (0, r.jsxs)('div', {
                                                className: D.details,
                                                children: [
                                                    (0, r.jsxs)('div', {
                                                        children: [
                                                            (0, r.jsx)(A.Z, {
                                                                variant: 'heading-sm/semibold',
                                                                text: L.details,
                                                                onClick: () => {
                                                                    Y({ action: 'OPEN_SPOTIFY_TRACK' }), (0, p.aG)(L);
                                                                }
                                                            }),
                                                            z()
                                                        ]
                                                    }),
                                                    (0, r.jsx)(S.Z, {
                                                        user: n,
                                                        activity: L,
                                                        className: D.badges
                                                    }),
                                                    q()
                                                ]
                                            }),
                                            U === w.y0.FULL_SIZE && Q()
                                        ]
                                    })
                                }),
                                U !== w.y0.FULL_SIZE && Q()
                            ]
                        })
                    })
            })
        })
    });
}
