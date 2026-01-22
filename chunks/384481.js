n.d(t, {
    A: () => x,
}),
    n(747238);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(90644),
    c = n(793574),
    u = n(688810),
    d = n(939341),
    f = n(623671),
    p = n(365185),
    _ = n(915089),
    h = n(172710),
    m = n(92240),
    g = n(257367),
    E = n(317572),
    b = n(939496),
    y = n(282197),
    O = n(584904),
    A = n(351638),
    v = n(531648),
    S = n(753713),
    I = n(646648),
    T = n(8738),
    C = n(996988),
    N = n(380297);

function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                R(e, t, n[t]);
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

function D(e, t) {
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

function x(e) {
    let { user: t, currentUser: n, activity: a, className: R, onClose: P } = e,
        x = (0, _.GV)(),
        L = (0, _.GV)(),
        { themeType: j } = (0, b.E)(),
        M = (0, p.A)({
            activity: a,
            user: t,
        }),
        k = (0, E.A)(a),
        U = null != k.text && "" !== k.text,
        { largeImage: G } = (0, d.XN)(a),
        { analyticsLocations: V } = (0, u.Ay)(c.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        F = (0, m.A)({
            display: "live",
            user: t,
            activity: a,
            entry: M,
            analyticsLocations: V,
        }),
        B = (0, g.A)({
            userId: t.id,
            onAction: F,
        });
    if (!(0, l.A)(a)) return null;
    let H = () => {
            var e, n;
            let l = null != (e = null == (n = a.state) ? void 0 : n.split("; ")) ? e : [];
            return 0 === l.length
                ? null
                : null == a.sync_id
                  ? (0, r.jsx)(v.A, {
                        variant: "text-xs/normal",
                        text: l.join(", "),
                    })
                  : (0, r.jsx)(v.A, {
                        variant: "text-xs/normal",
                        text: l.map((e, n) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(o.DUT, {
                                            className: s()(N.sd, N.mG),
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    F({
                                                        action: "OPEN_SPOTIFY_ARTIST",
                                                    }),
                                                    (0, h.mN)(a, t.id, n);
                                            },
                                            children: e,
                                        }),
                                        n < l.length - 1 ? ", " : "",
                                    ],
                                },
                                n,
                            ),
                        ),
                    });
        },
        Y = () => {
            let { timestamps: e } = a;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, r.jsx)(S.A, {
                      start: t,
                      end: n,
                  });
        },
        W = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)("div", {
                      className: N.o1,
                      children: (0, r.jsx)(I.A, {
                          user: t,
                          activity: a,
                          onAction: F,
                      }),
                  });
    return (0, r.jsx)(u.f5, {
        value: V,
        children: (0, r.jsxs)(O.A, {
            ref: B,
            className: s()(N.Nr, R),
            onAction: F,
            onClose: P,
            "aria-labelledby": U ? "".concat(L, " ").concat(x) : x,
            children: [
                (0, r.jsx)(
                    A.A,
                    D(
                        w(
                            {
                                textId: L,
                            },
                            k,
                        ),
                        {
                            contextMenu: (0, r.jsx)(T.A, {
                                display: "live",
                                user: t,
                                activity: a,
                                entry: M,
                                onClose: P,
                            }),
                        },
                    ),
                ),
                (0, r.jsx)("div", {
                    className: N.rf,
                    children: (0, r.jsxs)("div", {
                        className: N.Qs,
                        children: [
                            (0, r.jsx)(f.d, {
                                image: G,
                                size: j === C.d.MODAL_V2 ? f.w.SIZE_100 : f.w.SIZE_60,
                                className: N.mM,
                                onClick: (e) => {
                                    e.stopPropagation(),
                                        F({
                                            action: "OPEN_SPOTIFY_ALBUM",
                                        }),
                                        (0, h.QX)(a, t.id);
                                },
                            }),
                            (0, r.jsxs)("div", {
                                className: N.zH,
                                children: [
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)(v.Q, {
                                                variant: "heading-sm/semibold",
                                                text: a.details,
                                                onClick: () => {
                                                    F({
                                                        action: "OPEN_SPOTIFY_TRACK",
                                                    }),
                                                        (0, h.Mp)(a);
                                                },
                                                id: x,
                                            }),
                                            H(),
                                        ],
                                    }),
                                    (0, r.jsx)(y.A, {
                                        user: t,
                                        activity: a,
                                        className: N.jp,
                                    }),
                                    Y(),
                                    j === C.d.MODAL_V2 && W(),
                                ],
                            }),
                            j === C.d.MODAL && W(),
                        ],
                    }),
                }),
                j !== C.d.MODAL && j !== C.d.MODAL_V2 && W(),
            ],
        }),
    });
}
