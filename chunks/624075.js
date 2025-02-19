n.d(t, { Z: () => l }), n(47120);
var r = n(191532);
function i(e, t, n) {
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
function a(e, t) {
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
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function l(e, t, n, i) {
    let a = (0, r.Z)(e, t, i),
        l = (e, t) => n.computeScrollPosition(e, t);
    return s(o({}, a), {
        getScrollPosition: l,
        isItemVisible(e, n) {
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                [i, o] = l(e, n),
                a = t();
            return r ? i >= a.scrollTop && i + o <= a.scrollTop + a.offsetHeight : i + o >= a.scrollTop && i <= a.scrollTop + a.offsetHeight;
        },
        scrollToIndex(e) {
            let { section: t, row: n, animate: r, callback: i, padding: o = 0 } = e,
                [s, c] = l(t, n);
            a.scrollIntoViewRect({
                start: s,
                end: s + c,
                padding: o,
                animate: r,
                callback: i
            });
        }
    });
}
