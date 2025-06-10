n.d(t, { Z: () => k }), n(35282);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(503438),
    c = n(100527),
    u = n(906732),
    d = n(379357),
    f = n(358696),
    _ = n(649700),
    p = n(313201),
    h = n(952164),
    m = n(960870),
    g = n(139793),
    E = n(994746),
    b = n(273284),
    y = n(510659),
    O = n(287954),
    v = n(660579),
    I = n(652853),
    T = n(64621),
    S = n(448980),
    A = n(336383),
    N = n(194811),
    C = n(373826),
    R = n(262210),
    P = n(666984),
    w = n(386019),
    D = n(228168),
    L = n(227832);
function x(e, t, n) {
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
function M(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function k(e) {
    var t;
    let { user: n, currentUser: a, activity: x, profileGuildId: k, className: j, onClose: U } = e,
        G = (0, p.Dt)(),
        B = (0, p.Dt)(),
        F = i.useRef(null),
        { themeType: V } = (0, I.z)(),
        { interactionSource: Z, interactionSourceId: H } = (0, y.Xo)(),
        Y = (0, _.Z)({
            activity: x,
            user: n
        }),
        W = (0, E.Z)(x),
        K = null != W.text && '' !== W.text,
        { largeImage: z } = (0, d.FO)(x),
        { analyticsLocations: q } = (0, u.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        X = (0, m.Z)({
            display: 'live',
            user: n,
            activity: x,
            entry: Y,
            analyticsLocations: q
        }),
        Q = (0, g.Z)({
            userId: n.id,
            onAction: X
        });
    if (!(0, l.Z)(x)) return null;
    let J = () => {
            var e, t;
            let a = null != (t = null == (e = x.state) ? void 0 : e.split(';')) ? t : [];
            return 0 === a.length
                ? null
                : null == x.sync_id
                  ? (0, r.jsx)(C.Z, {
                        variant: 'text-xs/normal',
                        text: a.join(', ')
                    })
                  : (0, r.jsx)(C.Z, {
                        variant: 'text-xs/normal',
                        text: a.map((e, t) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(s.P3F, {
                                            className: o()(L.clickableText, L.inline),
                                            onClick: (e) => {
                                                e.stopPropagation(), X({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, h.d$)(x, n.id, t);
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
        $ = () => {
            let { timestamps: e } = x;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, r.jsx)(R.Z, {
                      start: t,
                      end: n
                  });
        },
        ee = () =>
            n.id === a.id
                ? null
                : (0, r.jsx)('div', {
                      className: L.actions,
                      children: (0, r.jsx)(P.Z, {
                          user: n,
                          activity: x,
                          onAction: X
                      })
                  });
    if (null === V) return null;
    let et = null != (t = x.application_id) ? t : x.name,
        en = Z === D.n_.ACTIVITY && H === et;
    return (0, r.jsx)(u.Gt, {
        value: q,
        children: (0, r.jsx)(T.Z, {
            targetElementRef: F,
            sourceType: D.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(O.Z, {
                user: n,
                guildId: k,
                themeType: V,
                sourceId: et,
                sourceDetails: null == Y ? (0, b.Z)(x) : null,
                entry: Y,
                sourceType: D.n_.ACTIVITY,
                onAction: X,
                children: () =>
                    (0, r.jsx)(v.Z, {
                        ref: F,
                        user: n,
                        className: L.toolbarContainer,
                        sourceType: D.n_.ACTIVITY,
                        interactionSourceId: et,
                        onAction: X,
                        onShowToolbar: () => X({ action: 'HOVER_ACTIVITY_CARD' }),
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(w.Z, {
                                display: 'live',
                                user: n,
                                activity: x,
                                entry: Y,
                                onClose: U,
                                children: e
                            }),
                        children: (0, r.jsxs)(A.Z, {
                            ref: Q,
                            className: o()(j, { [L.hoisted]: en }),
                            onAction: X,
                            onClose: U,
                            'aria-labelledby': K ? ''.concat(B, ' ').concat(G) : G,
                            children: [
                                (0, r.jsx)(N.Z, M({ textId: B }, W)),
                                (0, r.jsx)('div', {
                                    className: L.body,
                                    children: (0, r.jsxs)('div', {
                                        className: L.content,
                                        children: [
                                            (0, r.jsx)(f.E, {
                                                image: z,
                                                size: V === D.lY.MODAL_V2 ? f.J.SIZE_100 : f.J.SIZE_60,
                                                className: L.clickableImage,
                                                onClick: (e) => {
                                                    e.stopPropagation(), X({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, h.Z5)(x, n.id);
                                                }
                                            }),
                                            (0, r.jsxs)('div', {
                                                className: L.details,
                                                children: [
                                                    (0, r.jsxs)('div', {
                                                        children: [
                                                            (0, r.jsx)(C.f, {
                                                                variant: 'heading-sm/semibold',
                                                                text: x.details,
                                                                onClick: () => {
                                                                    X({ action: 'OPEN_SPOTIFY_TRACK' }), (0, h.aG)(x);
                                                                },
                                                                id: G
                                                            }),
                                                            J()
                                                        ]
                                                    }),
                                                    (0, r.jsx)(S.Z, {
                                                        user: n,
                                                        activity: x,
                                                        className: L.badges
                                                    }),
                                                    $(),
                                                    V === D.lY.MODAL_V2 && ee()
                                                ]
                                            }),
                                            V === D.lY.MODAL && ee()
                                        ]
                                    })
                                }),
                                V !== D.lY.MODAL && V !== D.lY.MODAL_V2 && ee()
                            ]
                        })
                    })
            })
        })
    });
}
