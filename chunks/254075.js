n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(417597),
    o = n(3137),
    l = n(620141),
    c = n(966598),
    u = n(224964),
    d = n(31408);
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
        l = (0, s.bG)([o.A], () => o.A.getState()),
        d = (0, u.A)(),
        f = (0, c.A)(t);
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
function h(e) {
    return (0, r.jsx)(l.A, {
        confettiLocation: d.k.REACTION,
        children: (0, r.jsx)(_, p({}, e)),
    });
}
