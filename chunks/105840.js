l.d(t, { A: () => p });
var n = l(582128),
    a = l(602853),
    r = l(661531),
    i = l(310784),
    s = l.n(i),
    u = l(308050),
    c = l(998304),
    d = l(282435);
let o = 31 / 255;
function f(e, t) {
    return (0, c.lZ)({ foreground: e, background: t, ratio: 3, saturationFactor: 1 });
}
function p(e, t) {
    let l = (0, a.r)(r.A.colors.BACKGROUND_BASE_LOWER).hex();
    return n.useMemo(() => {
        let { color: n, character: a } = (function (e, t) {
            var l;
            let n,
                { color: a } =
                    d.aA[
                        (function (e) {
                            let t = 0;
                            for (let l = 0; l < e.length; l++) t = (31 * t + e.charCodeAt(l)) >>> 0;
                            return t;
                        })(e) % d.aA.length
                    ],
                r =
                    null != t
                        ? ((l = t.replace(/^[\s\p{Cf}]+/u, "")),
                          (n = (0, u.A)().exec(l)),
                          n?.index === 0 ? n[0] : /^\P{M}\p{M}*/u.exec(l)?.[0])
                        : void 0;
            return { color: a, character: r?.toLocaleUpperCase() ?? null };
        })(e, t);
        return {
            character: a,
            ...(function (e, t) {
                let l = s()(t);
                function n(e, t) {
                    return s().mix(l, e, t, "rgb");
                }
                let a = f(s()(e), n(s()(e), o)),
                    r = o;
                for (; r < 0.4 && 7 > s().deltaE(n(a, r), l);) r += 0.04;
                return { backgroundColor: a.alpha(r).css(), foregroundColor: f(a, n(a, r)).hex() };
            })(n, l),
        };
    }, [e, t, l]);
}
