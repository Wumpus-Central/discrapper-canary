n.d(t, { Z: () => L }), n(35282);
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
    b = n(652853),
    y = n(448980),
    O = n(336383),
    v = n(194811),
    I = n(373826),
    S = n(262210),
    T = n(666984),
    A = n(670451),
    N = n(228168),
    C = n(227832);
function P(e, t, n) {
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
function R(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e) {
    let { user: t, currentUser: n, activity: a, className: P, onClose: w } = e,
        L = (0, p.Dt)(),
        x = (0, p.Dt)(),
        { themeType: k } = (0, b.z)(),
        M = (0, _.Z)({
            activity: a,
            user: t
        }),
        j = (0, E.Z)(a),
        U = null != j.text && '' !== j.text,
        { largeImage: G } = (0, d.FO)(a),
        { analyticsLocations: B } = (0, u.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        F = (0, m.Z)({
            display: 'live',
            user: t,
            activity: a,
            entry: M,
            analyticsLocations: B
        }),
        V = (0, g.Z)({
            userId: t.id,
            onAction: F
        });
    if (!(0, l.Z)(a)) return null;
    let Z = () => {
            var e, n;
            let l = null != (n = null == (e = a.state) ? void 0 : e.split(';')) ? n : [];
            return 0 === l.length
                ? null
                : null == a.sync_id
                  ? (0, r.jsx)(I.Z, {
                        variant: 'text-xs/normal',
                        text: l.join(', ')
                    })
                  : (0, r.jsx)(I.Z, {
                        variant: 'text-xs/normal',
                        text: l.map((e, n) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(s.P3F, {
                                            className: o()(C.clickableText, C.inline),
                                            onClick: (e) => {
                                                e.stopPropagation(), F({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, h.d$)(a, t.id, n);
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
        H = () => {
            let { timestamps: e } = a;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, r.jsx)(S.Z, {
                      start: t,
                      end: n
                  });
        },
        Y = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: C.actions,
                      children: (0, r.jsx)(T.Z, {
                          user: t,
                          activity: a,
                          onAction: F
                      })
                  });
    return (0, r.jsx)(u.Gt, {
        value: B,
        children: (0, r.jsxs)(O.Z, {
            ref: V,
            className: o()(C.card, P),
            onAction: F,
            onClose: w,
            'aria-labelledby': U ? ''.concat(x, ' ').concat(L) : L,
            children: [
                (0, r.jsx)(
                    v.Z,
                    D(R({ textId: x }, j), {
                        contextMenu: (0, r.jsx)(A.Z, {
                            display: 'live',
                            user: t,
                            activity: a,
                            entry: M,
                            onClose: w
                        })
                    })
                ),
                (0, r.jsx)('div', {
                    className: C.body,
                    children: (0, r.jsxs)('div', {
                        className: C.content,
                        children: [
                            (0, r.jsx)(f.E, {
                                image: G,
                                size: k === N.lY.MODAL_V2 ? f.J.SIZE_100 : f.J.SIZE_60,
                                className: C.clickableImage,
                                onClick: (e) => {
                                    e.stopPropagation(), F({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, h.Z5)(a, t.id);
                                }
                            }),
                            (0, r.jsxs)('div', {
                                className: C.details,
                                children: [
                                    (0, r.jsxs)('div', {
                                        children: [
                                            (0, r.jsx)(I.f, {
                                                variant: 'heading-sm/semibold',
                                                text: a.details,
                                                onClick: () => {
                                                    F({ action: 'OPEN_SPOTIFY_TRACK' }), (0, h.aG)(a);
                                                },
                                                id: L
                                            }),
                                            Z()
                                        ]
                                    }),
                                    (0, r.jsx)(y.Z, {
                                        user: t,
                                        activity: a,
                                        className: C.badges
                                    }),
                                    H(),
                                    k === N.lY.MODAL_V2 && Y()
                                ]
                            }),
                            k === N.lY.MODAL && Y()
                        ]
                    })
                }),
                k !== N.lY.MODAL && k !== N.lY.MODAL_V2 && Y()
            ]
        })
    });
}
