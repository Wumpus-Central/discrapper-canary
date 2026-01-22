n.d(t, {
    w: () => y,
});
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(417597),
    l = n(397927),
    c = n(287809),
    u = n(53719),
    d = n(390370),
    f = n(191627),
    p = n(842130),
    _ = n(985018),
    h = n(487693);

function m(e, t, n) {
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

function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}

function E(e, t) {
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

function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function y(e) {
    let { user: t } = e,
        a = (0, o.bG)([c.default], () => c.default.getCurrentUser()),
        m = i.useCallback(() => {
            s()(void 0 !== a, "User must be logged in to accept a link request"),
                (0, l.mMO)(async () => {
                    let { default: e } = await n.e("43139").then(n.bind(n, 179950));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            b(g({}, n), {
                                currentUser: a,
                                otherUser: t,
                            }),
                        );
                });
        }, [a, t]);
    return (0, r.jsxs)("div", {
        className: h.kL,
        children: [
            (0, r.jsx)("div", {
                className: h.zH,
                children: (0, r.jsx)(d.A, {
                    otherUser: t,
                    status: f.Ef.ACTIVE,
                }),
            }),
            (0, r.jsx)("div", {
                className: h.o1,
                children: (0, r.jsx)(u.A, {
                    icon: l.PGe,
                    tooltip: _.intl.string(p.default.l20ZZp),
                    onClick: m,
                }),
            }),
        ],
    });
}
