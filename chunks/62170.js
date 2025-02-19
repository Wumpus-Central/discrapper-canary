n.d(t, { Z: () => u }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(623113);
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
function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = c(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let u = i.forwardRef(function (e, t) {
    var { muted: n, volume: a, playing: c } = e,
        u = l(e, ['muted', 'volume', 'playing']);
    let [d, f] = (0, o.Z)(t);
    return (
        i.useEffect(() => {
            let e = d.current;
            null != e && void 0 !== n && (e.muted = n);
        }, [d, n]),
        i.useEffect(() => {
            let e = d.current;
            null != e && void 0 !== a && (e.volume = a);
        }, [d, a]),
        i.useEffect(() => {
            let e = d.current;
            null != e && void 0 !== c && (c ? e.play() : e.pause());
        }, [d, c]),
        (0, r.jsx)('audio', s({ ref: f }, u))
    );
});
