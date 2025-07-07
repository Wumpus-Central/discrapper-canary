n.d(t, {
    D: () => c,
    V: () => u
});
var r = n(615287),
    i = n(960048);
function a(e, t, n) {
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
function o(e) {
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
                a(e, t, n[t]);
            }));
    }
    return e;
}
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function c(e) {
    var t, n;
    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        s = arguments.length > 2 ? arguments[2] : void 0;
    i.Z.captureException(
        e,
        l(o({}, s), {
            extra: l(o({}, null != (t = null == s ? void 0 : s.extra) ? t : {}), { overlayMethod: null == a ? null : r.gl[null != a ? a : r.gl.Disabled] }),
            tags: o({ source: 'overlay' }, null != (n = null == s ? void 0 : s.tags) ? n : {})
        })
    );
}
function u(e) {
    var t, n;
    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        s = arguments.length > 2 ? arguments[2] : void 0;
    return i.Z.captureCrash(
        e,
        l(o({}, s), {
            extra: l(o({}, null != (t = null == s ? void 0 : s.extra) ? t : {}), { overlayMethod: null == a ? null : r.gl[null != a ? a : r.gl.Disabled] }),
            tags: o({ source: 'overlay' }, null != (n = null == s ? void 0 : s.tags) ? n : {})
        })
    );
}
