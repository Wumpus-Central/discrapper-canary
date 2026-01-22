n.d(t, {
    A: () => f,
});
var r = n(523527),
    i = n(267102),
    a = n(87001),
    s = n(574172),
    o = n(21515),
    l = n(652215);

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

function u(e, t) {
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
async function d(e) {
    let t = (0, i.zd)();
    a.A.getWindowOpen(l.MLl.ACTIVITY_POPOUT) && (0, s.close)(l.MLl.ACTIVITY_POPOUT),
        await o.launchFrame(e),
        t === l.BRT.POPOUT && (0, r.A)();
}
let f = (function (e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
})(
    (function (e) {
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
    })({}, o),
    {
        launchFrame: d,
    },
);
