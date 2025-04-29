n.d(t, { $: () => u }), n(200651);
var r = n(192379),
    i = n(392711),
    o = n.n(i);
n(902704);
var a = n(941028);
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
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function u(e) {
    r.useEffect(
        () => (
            o().forEach(e, (e, t) => (0, a.ym)(t, e)),
            () => {
                o().forEach(e, (e, t) => (0, a.w5)(t, e));
            }
        ),
        [e]
    );
}
