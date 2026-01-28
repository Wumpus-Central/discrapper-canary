n.d(t, {
    b: () => m,
    o: () => h,
});
var r = n(627968);
n(64700);
var i = n(156828),
    a = n(397927),
    o = n(391973),
    s = n(574172),
    l = n(555528),
    c = n(644434),
    u = n(392164);

function d(e, t, n) {
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

function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}

function p(e, t) {
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

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function h() {
    let e = {
        outOfProcessOverlay: !0,
        focusable: !1,
    };
    (0, o.Vz)(c.G, l.A.getDefaultLayout(c.G, 3), 3);
    let t = (0, i.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("54809"),
                n.e("10614"),
                n.e("73924"),
                n.e("99011"),
                n.e("97283"),
                n.e("67923"),
                n.e("78572"),
                n.e("60989"),
                n.e("23367"),
                n.e("83898"),
                n.e("31748"),
                n.e("74492"),
                n.e("71447"),
                n.e("46636"),
                n.e("12925"),
            ]).then(n.bind(n, 176019)),
        webpackId: 176019,
        name: "AppOverlay",
    });
    await s.open(
        u.f,
        (e) =>
            (0, r.jsx)(t, {
                withTitleBar: !1,
                windowKey: e,
            }),
        e,
    );
}

function m(e, t) {
    let i = (0, a.TId)(t);
    (0, a.mMO)(
        async () => {
            let { default: i } = await Promise.all([n.e("27495"), n.e("56159")]).then(n.bind(n, 599466));
            return (n) =>
                (0, r.jsx)(
                    i,
                    _(f({}, n), {
                        location: e,
                        appContext: t,
                    }),
                );
        },
        null != i
            ? {
                  contextKey: i,
              }
            : void 0,
    );
}
