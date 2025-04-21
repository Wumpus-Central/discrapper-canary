n.d(t, { Z: () => D }), n(35282);
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
    E = n(652853),
    b = n(448980),
    y = n(336383),
    v = n(194811),
    O = n(373826),
    I = n(262210),
    S = n(666984),
    T = n(670451),
    A = n(228168),
    N = n(227832);
function C(e, t, n) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e) {
    let { user: t, currentUser: n, activity: a, className: C, onClose: P } = e,
        { profileType: D } = (0, E.z)(),
        L = { [N.fullSize]: D === A.y0.FULL_SIZE },
        x = (0, _.Z)({
            activity: a,
            user: t
        }),
        M = (0, g.Z)(a),
        { largeImage: k } = (0, d.FO)(a),
        { analyticsLocations: j } = (0, u.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        U = (0, h.Z)({
            display: 'live',
            user: t,
            activity: a,
            entry: x,
            analyticsLocations: j
        }),
        G = (0, m.Z)({
            userId: t.id,
            onAction: U
        });
    if (!(0, l.Z)(a)) return null;
    let B = () => {
            var e, n;
            let l = null != (n = null == (e = a.state) ? void 0 : e.split(';')) ? n : [];
            return 0 === l.length
                ? null
                : null == a.sync_id
                  ? (0, r.jsx)(O.Z, {
                        variant: 'text-xs/normal',
                        text: l.join(', ')
                    })
                  : (0, r.jsx)(O.Z, {
                        variant: 'text-xs/normal',
                        text: l.map((e, n) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(s.P3F, {
                                            className: o()(N.clickableText, N.inline),
                                            onClick: (e) => {
                                                e.stopPropagation(), U({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, p.d$)(a, t.id, n);
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
        F = () => {
            let { timestamps: e } = a;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, r.jsx)(I.Z, {
                      start: t,
                      end: n
                  });
        },
        V = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: o()(N.actions, L),
                      children: (0, r.jsx)(S.Z, {
                          user: t,
                          activity: a,
                          onAction: U
                      })
                  });
    return (0, r.jsx)(u.Gt, {
        value: j,
        children: (0, r.jsxs)(y.Z, {
            ref: G,
            className: o()(N.card, C),
            onAction: U,
            onClose: P,
            children: [
                (0, r.jsx)(
                    v.Z,
                    w(R({}, M), {
                        contextMenu: (0, r.jsx)(T.Z, {
                            display: 'live',
                            user: t,
                            activity: a,
                            entry: x,
                            onClose: P
                        })
                    })
                ),
                (0, r.jsx)('div', {
                    className: N.body,
                    children: (0, r.jsxs)('div', {
                        className: o()(N.content, L),
                        children: [
                            (0, r.jsx)(f.E, {
                                image: k,
                                size: f.J.SIZE_60,
                                className: N.clickableImage,
                                onClick: (e) => {
                                    e.stopPropagation(), U({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, p.Z5)(a, t.id);
                                }
                            }),
                            (0, r.jsxs)('div', {
                                className: N.details,
                                children: [
                                    (0, r.jsxs)('div', {
                                        children: [
                                            (0, r.jsx)(O.Z, {
                                                variant: 'heading-sm/semibold',
                                                text: a.details,
                                                onClick: () => {
                                                    U({ action: 'OPEN_SPOTIFY_TRACK' }), (0, p.aG)(a);
                                                }
                                            }),
                                            B()
                                        ]
                                    }),
                                    (0, r.jsx)(b.Z, {
                                        user: t,
                                        activity: a,
                                        className: N.badges
                                    }),
                                    F()
                                ]
                            }),
                            D === A.y0.FULL_SIZE && V()
                        ]
                    })
                }),
                D !== A.y0.FULL_SIZE && V()
            ]
        })
    });
}
