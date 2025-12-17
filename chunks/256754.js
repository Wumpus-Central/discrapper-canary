n.d(t, { i: () => p });
var r = n(54381),
    i = n(481060),
    a = n(626135),
    o = n(598117),
    s = n(457574),
    l = n(981631);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let p = async (e) => {
    let { analyticsLocation: t = null } = e,
        c = d(e, ["analyticsLocation"]);
    a.default.track(l.rMx.OPEN_MODAL, {
        type: "Emoji Studio",
        source: t,
    }),
        await (0, i.ZDy)(
            async () => {
                let { EmojiStudioModal: e } = await Promise.all([n.e("30409"), n.e("2262")]).then(n.bind(n, 546200));
                return (t) => (0, r.jsx)(e, u({}, t, c));
            },
            {
                modalKey: o.Hj,
                onCloseRequest: () => {
                    (0, s.E)();
                },
            },
        );
};
