n.d(t, {
    i: () => c,
    j: () => u
});
var r = n(200651);
n(192379);
var i = n(952265),
    o = n(723359),
    a = n(231338);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e) {
    (0, i.ZD)(
        async () => {
            let { default: e } = await Promise.all([n.e('63288'), n.e('1337'), n.e('7729')]).then(n.bind(n, 298237));
            return (t) => (0, r.jsx)(e, l({}, t));
        },
        {
            modalKey: o.$$,
            onCloseRequest: a.dG,
            onCloseCallback: e
        }
    );
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, i.ZD)(
        async () => {
            let { default: t } = await n.e('60827').then(n.bind(n, 324239));
            return (n) => (0, r.jsx)(t, l({ claimRequired: e }, n));
        },
        {
            onCloseRequest: e ? a.dG : null,
            onCloseCallback: t
        }
    );
}
