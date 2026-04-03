n.d(t, { CO: () => d, QW: () => c, ct: () => o });
var a = n(306327),
    i = n(827734),
    s = n(151196),
    l = n(473336);
function r(e, t, n) {
    let {
            r: i,
            g: l,
            b: r,
            a: o,
        } = (function (e, t) {
            if (t <= e[0].position) {
                let t = e[0];
                return { r: t.r, g: t.g, b: t.b, a: t.opacity };
            }
            for (let n = 0; n < e.length - 1; n++) {
                let a = e[n],
                    i = e[n + 1];
                if (t <= i.position) {
                    if (i.position === a.position) return { r: a.r, g: a.g, b: a.b, a: a.opacity };
                    let e = (t - a.position) / (i.position - a.position);
                    return {
                        r: a.r + (i.r - a.r) * e,
                        g: a.g + (i.g - a.g) * e,
                        b: a.b + (i.b - a.b) * e,
                        a: a.opacity + (i.opacity - a.opacity) * e,
                    };
                }
            }
            let n = e[e.length - 1];
            return { r: n.r, g: n.g, b: n.b, a: n.opacity };
        })(t, n),
        d = o * s.VU;
    return new a.A("srgb", [
        (e.r * (1 - d) + i * d) / 255,
        (e.g * (1 - d) + l * d) / 255,
        (e.b * (1 - d) + r * d) / 255,
    ]);
}
function o(e, t, n) {
    let a = n.map((e) => {
            let [t, n, a] = i.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: n, b: a, opacity: e.opacity, position: e.position };
        }),
        s = 1 / 0,
        l = (e) => {
            e < s && (s = e);
        };
    for (let n of a) l(e.contrast(r(t, a, n.position), "WCAG21"));
    for (let n = 0; n < a.length - 1; n++) {
        let { contrast: i } = (function (e, t, n, a, i) {
            let s = 1 / 0,
                l = a;
            for (let o = 0; o <= 100; o++) {
                let d = a + (o / 100) * (i - a),
                    c = n.contrast(r(e, t, d), "WCAG21");
                c < s && ((s = c), (l = d));
            }
            return { contrast: s, position: l };
        })(t, a, e, a[n].position, a[n + 1].position);
        l(i);
    }
    return Math.round(100 * s) / 100;
}
function d(e) {
    let [t, n, l] = i.A.colors[s.w2].resolve(e).rgba(),
        [r, o, d] = i.A.colors[s.wn].resolve(e).rgba(),
        [c, u, m, h] = i.A.colors[s.ID].resolve(e).rgba();
    return {
        text: new a.A("srgb", [t / 255, n / 255, l / 255]),
        background: { r: r * (1 - h) + c * h, g: o * (1 - h) + u * h, b: d * (1 - h) + m * h },
    };
}
function c(e, t) {
    let n,
        { text: a, background: i } = d(t),
        r = o(a, i, e),
        c = r >= s.Sf;
    if (!c)
        for (let t = 0; t < e.length; t++) {
            let r = (0, l.l1)(e[t].color);
            if (null == r) continue;
            let d = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                c = 1 / 0;
            for (let { value: u } of s.iW[r]) {
                if (u === e[t].color) continue;
                let r = o(a, i, (0, l._D)(e, t, { ...e[t], color: u }));
                if (r >= s.Sf) {
                    let e = Math.abs(parseInt(String(u).split("_").pop() ?? "0", 10) - d);
                    e < c && ((c = e), (n = { stopIndex: t, suggestedColor: u, resultingMinContrast: r }));
                }
            }
        }
    return { passes: c, minContrastRatio: r, suggestion: n };
}
