var i = n(582128),
    r = n(310784),
    a = n.n(r),
    s = n(306327),
    l = n(164636),
    o = n(775602);
function d(e) {
    let [t, n, i] = new s.A(e).oklab;
    return [t, n, i];
}
function c(e) {
    let [t, n, i] = d(e);
    return Math.sqrt(n * n + i * i) * Math.max(0, 1 - 2 * Math.abs(t - 0.65));
}
n.d(
    t,
    {},
    {
        Z: function (e) {
            if (0 === e.length) return ["#000000", "#ffffff"];
            if (1 === e.length) return [e[0], e[0]];
            let t = [...e].sort((e, t) => c(t) - c(e)),
                n = t[0],
                i = -1,
                r = t[1];
            for (let t of e) {
                if (t === n) continue;
                let e =
                    (function (e, t) {
                        let [n, i, r] = d(e),
                            [a, s, l] = d(t);
                        return Math.sqrt((a - n) ** 2 + (s - i) ** 2 + (l - r) ** 2);
                    })(n, t) *
                    (1 + 2 * c(t));
                e > i && ((i = e), (r = t));
            }
            return [n, r];
        },
        a: function (e) {
            let t = (0, l.bG)([o.Ay], () => o.Ay.saturation);
            return i.useMemo(() => {
                if (null == e) return null;
                if ("currentColor" === e || e.startsWith("var(")) return e;
                let n = a()(e);
                return n.set("hsl.s", n.get("hsl.s") * t).hex();
            }, [e, t]);
        },
    },
);
