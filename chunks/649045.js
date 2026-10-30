n.d(t, { A: () => p });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(323384),
    o = n(602853),
    d = n(661531),
    c = n(310784),
    u = n.n(c),
    _ = n(308050),
    E = n(998304),
    A = n(282435);
let h = 31 / 255;
function f(e, t) {
    return (0, E.lZ)({ foreground: e, background: t, ratio: 3, saturationFactor: 1 });
}
var I = n(59123);
function p(e) {
    let t,
        { applicationId: n, name: a, glyphSize: c, className: E, "aria-label": p } = e,
        {
            character: T,
            backgroundColor: m,
            foregroundColor: g,
        } = ((t = (0, o.r)(d.A.colors.BACKGROUND_BASE_LOWER).hex()),
        r.useMemo(() => {
            let { color: e, character: i } = (function (e, t) {
                var n;
                let i,
                    { color: r } =
                        A.aA[
                            (function (e) {
                                let t = 0;
                                for (let n = 0; n < e.length; n++) t = (31 * t + e.charCodeAt(n)) >>> 0;
                                return t;
                            })(e) % A.aA.length
                        ],
                    a =
                        null != t
                            ? ((n = t.replace(/^[\s\p{Cf}]+/u, "")),
                              (i = (0, _.A)().exec(n)),
                              i?.index === 0 ? i[0] : /^\P{M}\p{M}*/u.exec(n)?.[0])
                            : void 0;
                return { color: r, character: a?.toLocaleUpperCase() ?? null };
            })(n, a);
            return {
                character: i,
                ...(function (e, t) {
                    let n = u()(t);
                    function i(e, t) {
                        return u().mix(n, e, t, "rgb");
                    }
                    let r = f(u()(e), i(u()(e), h)),
                        a = h;
                    for (; a < 0.4 && 7 > u().deltaE(i(r, a), n);) a += 0.04;
                    return { backgroundColor: r.alpha(a).css(), foregroundColor: f(r, i(r, a)).hex() };
                })(e, t),
            };
        }, [n, a, t]));
    return (0, i.jsx)("div", {
        className: s()(I.V, E),
        style: { backgroundColor: m, color: g },
        role: null != p ? "img" : void 0,
        "aria-label": p,
        "aria-hidden": null == p || void 0,
        children: T ?? (0, i.jsx)(l.k, { size: "custom", width: c, height: c, color: "currentColor" }),
    });
}
