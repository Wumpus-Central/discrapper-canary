n.d(t, {
    N: () => m,
    f: () => h,
});
var r = n(54381);
n(473749);
var i = n(608787),
    a = n(481060),
    o = n(765250),
    s = n(788983),
    l = n(355863),
    c = n(757744),
    u = n(501787);
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
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
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
    (0, o.te)(c.$S, l.Z.getDefaultLayout(c.$S, c.HN), c.HN);
    let t = (0, i.Un)({
        createPromise: () =>
            Promise.all([
                n.e("61924"),
                n.e("49552"),
                n.e("90508"),
                n.e("43342"),
                n.e("39206"),
                n.e("46931"),
                n.e("60831"),
                n.e("83243"),
                n.e("50751"),
                n.e("29709"),
                n.e("84983"),
                n.e("13368"),
            ]).then(n.bind(n, 989373)),
        webpackId: 989373,
        name: "AppOverlay",
    });
    await s.bA(
        u.$J,
        (e) =>
            (0, r.jsx)(t, {
                withTitleBar: !1,
                windowKey: e,
            }),
        e,
    );
}
function m(e, t) {
    let i = (0, a.VnL)(t);
    (0, a.ZDy)(
        async () => {
            let { default: i } = await n.e("63940").then(n.bind(n, 17060));
            return (n) =>
                (0, r.jsx)(
                    i,
                    p(f({}, n), {
                        location: e,
                        appContext: t,
                    }),
                );
        },
        null != i ? { contextKey: i } : void 0,
    );
}
