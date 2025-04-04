n.d(t, { Z: () => D }), n(301563);
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
    E = n(652853),
    b = n(448980),
    y = n(336383),
    v = n(194811),
    O = n(373826),
    I = n(262210),
    S = n(666984),
    T = n(670451),
    N = n(228168),
    A = n(227832);
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
    let { user: t, currentUser: n, activity: o, className: C, onClose: P } = e,
        { profileType: D } = (0, E.z)(),
        L = { [A.fullSize]: D === N.y0.FULL_SIZE },
        x = (0, _.Z)({
            activity: o,
            user: t
        }),
        M = (0, g.Z)(o),
        { largeImage: k } = (0, d.FO)(o),
        { analyticsLocations: j } = (0, u.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        U = (0, h.Z)({
            display: 'live',
            user: t,
            activity: o,
            entry: x,
            analyticsLocations: j
        }),
        G = (0, m.Z)({
            userId: t.id,
            onAction: U
        });
    if (!(0, l.Z)(o)) return null;
    let B = () => {
            var e, n;
            let l = null != (n = null == (e = o.state) ? void 0 : e.split(';')) ? n : [];
            return 0 === l.length
                ? null
                : null == o.sync_id
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
                                            className: a()(A.clickableText, A.inline),
                                            onClick: (e) => {
                                                e.stopPropagation(), U({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, p.d$)(o, t.id, n);
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
            let { timestamps: e } = o;
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
                      className: a()(A.actions, L),
                      children: (0, r.jsx)(S.Z, {
                          user: t,
                          activity: o,
                          onAction: U
                      })
                  });
    return (0, r.jsx)(u.Gt, {
        value: j,
        children: (0, r.jsxs)(y.Z, {
            ref: G,
            className: a()(A.card, C),
            onAction: U,
            onClose: P,
            children: [
                (0, r.jsx)(
                    v.Z,
                    w(R({}, M), {
                        contextMenu: (0, r.jsx)(T.Z, {
                            display: 'live',
                            user: t,
                            activity: o,
                            entry: x,
                            onClose: P
                        })
                    })
                ),
                (0, r.jsx)('div', {
                    className: A.body,
                    children: (0, r.jsxs)('div', {
                        className: a()(A.content, L),
                        children: [
                            (0, r.jsx)(f.E, {
                                image: k,
                                size: f.J.SIZE_60,
                                className: A.clickableImage,
                                onClick: (e) => {
                                    e.stopPropagation(), U({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, p.Z5)(o, t.id);
                                }
                            }),
                            (0, r.jsxs)('div', {
                                className: A.details,
                                children: [
                                    (0, r.jsxs)('div', {
                                        children: [
                                            (0, r.jsx)(O.Z, {
                                                variant: 'heading-sm/semibold',
                                                text: o.details,
                                                onClick: () => {
                                                    U({ action: 'OPEN_SPOTIFY_TRACK' }), (0, p.aG)(o);
                                                }
                                            }),
                                            B()
                                        ]
                                    }),
                                    (0, r.jsx)(b.Z, {
                                        user: t,
                                        activity: o,
                                        className: A.badges
                                    }),
                                    F()
                                ]
                            }),
                            D === N.y0.FULL_SIZE && V()
                        ]
                    })
                }),
                D !== N.y0.FULL_SIZE && V()
            ]
        })
    });
}
