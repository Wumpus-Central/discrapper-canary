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
    p = n(649700),
    _ = n(952164),
    h = n(960870),
    m = n(139793),
    g = n(994746),
    E = n(652853),
    v = n(448980),
    b = n(336383),
    y = n(194811),
    O = n(373826),
    S = n(262210),
    I = n(666984),
    T = n(670451),
    N = n(228168),
    A = n(481736);
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
        x = { [A.fullSize]: D === N.y0.FULL_SIZE },
        L = (0, p.Z)({
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
            entry: L,
            analyticsLocations: j
        }),
        G = (0, m.Z)({
            userId: t.id,
            onAction: U
        });
    if (!(0, l.Z)(o)) return null;
    let B = () => {
            var e, n;
            let l = null !== (n = null === (e = o.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== n ? n : [];
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
                                                e.stopPropagation(), U({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, _.d$)(o, t.id, n);
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
        Z = () => {
            let { timestamps: e } = o;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, r.jsx)(S.Z, {
                      start: t,
                      end: n
                  });
        },
        F = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(A.actions, x),
                      children: (0, r.jsx)(I.Z, {
                          user: t,
                          activity: o,
                          onAction: U
                      })
                  });
    return (0, r.jsx)(u.Gt, {
        value: j,
        children: (0, r.jsxs)(b.Z, {
            ref: G,
            className: a()(A.card, C),
            onAction: U,
            onClose: P,
            children: [
                (0, r.jsx)(
                    y.Z,
                    w(R({}, M), {
                        contextMenu: (0, r.jsx)(T.Z, {
                            display: 'live',
                            user: t,
                            activity: o,
                            entry: L,
                            onClose: P
                        })
                    })
                ),
                (0, r.jsx)('div', {
                    className: A.body,
                    children: (0, r.jsxs)('div', {
                        className: a()(A.content, x),
                        children: [
                            (0, r.jsx)(f.E, {
                                image: k,
                                size: f.J.SIZE_60,
                                className: A.clickableImage,
                                onClick: (e) => {
                                    e.stopPropagation(), U({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, _.Z5)(o, t.id);
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
                                                    U({ action: 'OPEN_SPOTIFY_TRACK' }), (0, _.aG)(o);
                                                }
                                            }),
                                            B()
                                        ]
                                    }),
                                    (0, r.jsx)(v.Z, {
                                        user: t,
                                        activity: o,
                                        className: A.badges
                                    }),
                                    Z()
                                ]
                            }),
                            D === N.y0.FULL_SIZE && F()
                        ]
                    })
                }),
                D !== N.y0.FULL_SIZE && F()
            ]
        })
    });
}
