n.d(t, { L: () => g }), n(896048);
var r = n(627968),
    i = n(397927),
    a = n(562519);
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
function o(e) {
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
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = 5 * n(927813).A.Millis.DAY,
    d = 3,
    f = new a.A("overlay_survey_timestamps");
function p() {
    return Array.from(f.values()).reduce((e, t) => Math.max(e, t), 0);
}
function _() {
    let e = Date.now(),
        t = p();
    return null != t && e - t < u;
}
function h() {
    return (
        Array.from(f.values()).filter((e) => {
            let t = new Date(e);
            return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
        }).length >= d
    );
}
function m() {
    let e = Date.now();
    f.add(e);
}
function g(e, t) {
    _() ||
        h() ||
        (0, i.mMO)(async () => {
            let { default: i } = await n.e("82318").then(n.bind(n, 387101));
            return (
                m(),
                (n) =>
                    (0, r.jsx)(
                        i,
                        c(o({}, n), {
                            clientSettingType: e,
                            gameId: t,
                        }),
                    )
            );
        });
}
