n.d(t, {
    $: () => p,
    P: () => _,
});
var r = n(442837),
    i = n(722733),
    a = n(633289),
    o = n(751823);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = { defaultWatchMultipleStreams: !1 },
    f = (0, i.ZP)({
        name: "2025-08-go-live-default-multiwatch",
        kind: "user",
        defaultConfig: d,
        variations: { 1: u(l({}, d), { defaultWatchMultipleStreams: !0 }) },
    });
function p(e) {
    let { location: t } = e,
        { isInHoldout: n } = o.L.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n ? f.definition.defaultConfig : f.getConfig({ location: t });
}
function _(e) {
    let { location: t } = e;
    return (0, r.e7)([a.Z], () => p({ location: t }));
}
