n.d(t, { Z: () => l });
var r = n(626135),
    i = n(360347),
    a = n(981631);
function o(e, t, n) {
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
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            }));
    }
    return e;
}
function l(e) {
    let { tab_opened: t, source: n } = e,
        o = (0, i.Z)();
    r.default.track(
        a.rMx.FRIENDS_LIST_CLICKED,
        s(
            {
                tab_opened: t,
                source: n
            },
            o
        )
    );
}
