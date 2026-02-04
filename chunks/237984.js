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
    (0, o.Vz)(c.G, l.A.getDefaultLayout(c.G, 4), 4);
    let t = (0, i.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("54809"),
                n.e("43965"),
                n.e("3795"),
                n.e("99011"),
                n.e("28936"),
                n.e("40396"),
                n.e("13088"),
                n.e("48330"),
                n.e("92414"),
                n.e("94857"),
                n.e("7034"),
                n.e("49559"),
                n.e("37372"),
                n.e("97283"),
                n.e("8018"),
                n.e("3183"),
                n.e("9753"),
                n.e("72271"),
                n.e("84127"),
                n.e("24202"),
                n.e("88474"),
                n.e("17537"),
                n.e("21420"),
                n.e("34348"),
                n.e("36059"),
                n.e("6502"),
                n.e("55150"),
                n.e("1636"),
                n.e("30819"),
                n.e("12907"),
                n.e("17836"),
                n.e("61344"),
                n.e("52694"),
                n.e("27687"),
                n.e("7685"),
                n.e("71447"),
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
