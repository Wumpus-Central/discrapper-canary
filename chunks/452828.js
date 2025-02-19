n.d(t, { Z: () => c });
var r = n(192379);
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
let l = Object.freeze({
    scrollTop: 0,
    scrollLeft: 0,
    scrollHeight: 0,
    scrollWidth: 0,
    offsetHeight: 0,
    offsetWidth: 0,
    dirty: 2
});
function c() {
    let e = (0, r.useRef)(null),
        t = (0, r.useRef)(l),
        n = (0, r.useCallback)(() => {
            let { current: n } = e,
                { dirty: r } = t.current;
            if (null == n || 0 === r) return t.current;
            if (1 === r) {
                let { scrollTop: e, scrollLeft: r } = n;
                t.current = s(o({}, t.current), {
                    scrollTop: e,
                    scrollLeft: r,
                    dirty: 0
                });
            } else {
                let { scrollTop: e, scrollLeft: r, scrollHeight: i, scrollWidth: o, offsetHeight: a, offsetWidth: s } = n;
                t.current = {
                    scrollTop: e,
                    scrollLeft: r,
                    scrollHeight: i,
                    scrollWidth: o,
                    offsetHeight: a,
                    offsetWidth: s,
                    dirty: 0
                };
            }
            return t.current;
        }, []);
    return {
        scrollerRef: e,
        scrollerState: t,
        getScrollerState: n
    };
}
