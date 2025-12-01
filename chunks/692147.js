n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n(399606),
    s = n(351780),
    l = n(576125),
    c = n(465858),
    u = n(112843),
    d = n(524484);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e) {
    let { reactionRef: t, count: n } = e,
        r = i.useRef(n),
        l = (0, o.e7)([s.Z], () => s.Z.getState()),
        d = (0, u.Z)(),
        f = (0, c.Z)(t);
    return (
        i.useEffect(() => {
            if (n > r.current && null != f) {
                let e = (0, a.clamp)(n, l.confettiCount / 2, 2 * l.confettiCount);
                d.fire(f.x, f.y, { count: e });
            }
            r.current = n;
        }, [n, f, d, l.confettiCount]),
        null
    );
}
function m(e) {
    return (0, r.jsx)(l.Z, {
        confettiLocation: d.Hn.REACTION,
        children: (0, r.jsx)(_, p({}, e)),
    });
}
