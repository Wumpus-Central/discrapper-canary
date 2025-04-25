n.d(t, { Z: () => M }), n(35282);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
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
    A = n(194811),
    N = n(373826),
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
    let { user: n, currentUser: a, activity: L, profileGuildId: M, className: k, onClose: j } = e,
        U = i.useRef(null),
        { themeType: G } = (0, O.z)(),
        { interactionSource: B, interactionSourceId: V } = (0, b.Xo)(),
        F = (0, _.Z)({
            activity: L,
            user: n
        }),
        Z = (0, g.Z)(L),
        { largeImage: H } = (0, d.FO)(L),
        { analyticsLocations: Y } = (0, u.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        W = (0, h.Z)({
            display: 'live',
            user: n,
            activity: L,
            entry: F,
            analyticsLocations: Y
        }),
        K = (0, m.Z)({
            userId: n.id,
            onAction: W
        });
    if (!(0, l.Z)(L)) return null;
    let z = () => {
            var e, t;
            let a = null != (t = null == (e = L.state) ? void 0 : e.split(';')) ? t : [];
            return 0 === a.length
                ? null
                : null == L.sync_id
                  ? (0, r.jsx)(N.Z, {
                        variant: 'text-xs/normal',
                        text: a.join(', ')
                    })
                  : (0, r.jsx)(N.Z, {
                        variant: 'text-xs/normal',
                        text: a.map((e, t) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(s.P3F, {
                                            className: o()(D.clickableText, D.inline),
                                            onClick: (e) => {
                                                e.stopPropagation(), W({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, p.d$)(L, n.id, t);
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
            n.id === a.id
                ? null
                : (0, r.jsx)('div', {
                      className: D.actions,
                      children: (0, r.jsx)(R.Z, {
                          user: n,
                          activity: L,
                          onAction: W
                      })
                  });
    if (null === G) return null;
    let X = null != (t = L.application_id) ? t : L.name,
        J = B === w.n_.ACTIVITY && V === X;
    return (0, r.jsx)(u.Gt, {
        value: Y,
        children: (0, r.jsx)(I.Z, {
            targetElementRef: U,
            sourceType: w.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(y.Z, {
                user: n,
                guildId: M,
                themeType: G,
                sourceId: X,
                sourceDetails: null == F ? (0, E.Z)(L) : null,
                entry: F,
                sourceType: w.n_.ACTIVITY,
                onAction: W,
                children: () =>
                    (0, r.jsx)(v.Z, {
                        ref: U,
                        user: n,
                        className: D.toolbarContainer,
                        sourceType: w.n_.ACTIVITY,
                        interactionSourceId: X,
                        onAction: W,
                        onShowToolbar: () => W({ action: 'HOVER_ACTIVITY_CARD' }),
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(P.Z, {
                                display: 'live',
                                user: n,
                                activity: L,
                                entry: F,
                                onClose: j,
                                children: e
                            }),
                        children: (0, r.jsxs)(T.Z, {
                            ref: K,
                            className: o()(k, { [D.hoisted]: J }),
                            onAction: W,
                            onClose: j,
                            children: [
                                (0, r.jsx)(A.Z, x({}, Z)),
                                (0, r.jsx)('div', {
                                    className: D.body,
                                    children: (0, r.jsxs)('div', {
                                        className: D.content,
                                        children: [
                                            (0, r.jsx)(f.E, {
                                                image: H,
                                                size: G === w.lY.MODAL_V2 ? f.J.SIZE_100 : f.J.SIZE_60,
                                                className: D.clickableImage,
                                                onClick: (e) => {
                                                    e.stopPropagation(), W({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, p.Z5)(L, n.id);
                                                }
                                            }),
                                            (0, r.jsxs)('div', {
                                                className: D.details,
                                                children: [
                                                    (0, r.jsxs)('div', {
                                                        children: [
                                                            (0, r.jsx)(N.Z, {
                                                                variant: 'heading-sm/semibold',
                                                                text: L.details,
                                                                onClick: () => {
                                                                    W({ action: 'OPEN_SPOTIFY_TRACK' }), (0, p.aG)(L);
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
                                                    q(),
                                                    G === w.lY.MODAL_V2 && Q()
                                                ]
                                            }),
                                            G === w.lY.MODAL && Q()
                                        ]
                                    })
                                }),
                                G !== w.lY.MODAL && G !== w.lY.MODAL_V2 && Q()
                            ]
                        })
                    })
            })
        })
    });
}
