a.d(t, { CO: () => d, QW: () => c, ct: () => o });
var n = a(306327),
    l = a(827734),
    i = a(151196),
    s = a(473336);
function r(e, t, a) {
    let {
            r: l,
            g: s,
            b: r,
            a: o,
        } = (function (e, t) {
            if (t <= e[0].position) {
                let t = e[0];
                return { r: t.r, g: t.g, b: t.b, a: t.opacity };
            }
            for (let a = 0; a < e.length - 1; a++) {
                let n = e[a],
                    l = e[a + 1];
                if (t <= l.position) {
                    if (l.position === n.position) return { r: n.r, g: n.g, b: n.b, a: n.opacity };
                    let e = (t - n.position) / (l.position - n.position);
                    return {
                        r: n.r + (l.r - n.r) * e,
                        g: n.g + (l.g - n.g) * e,
                        b: n.b + (l.b - n.b) * e,
                        a: n.opacity + (l.opacity - n.opacity) * e,
                    };
                }
            }
            let a = e[e.length - 1];
            return { r: a.r, g: a.g, b: a.b, a: a.opacity };
        })(t, a),
        d = o * i.VU;
    return new n.A("srgb", [
        (e.r * (1 - d) + l * d) / 255,
        (e.g * (1 - d) + s * d) / 255,
        (e.b * (1 - d) + r * d) / 255,
    ]);
}
function o(e, t, a) {
    let n = a.map((e) => {
            let [t, a, n] = l.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: n, opacity: e.opacity, position: e.position };
        }),
        i = 1 / 0,
        s = (e) => {
            e < i && (i = e);
        };
    for (let a of n) s(e.contrast(r(t, n, a.position), "WCAG21"));
    for (let a = 0; a < n.length - 1; a++) {
        let { contrast: l } = (function (e, t, a, n, l) {
            let i = 1 / 0,
                s = n;
            for (let o = 0; o <= 100; o++) {
                let d = n + (o / 100) * (l - n),
                    c = a.contrast(r(e, t, d), "WCAG21");
                c < i && ((i = c), (s = d));
            }
            return { contrast: i, position: s };
        })(t, n, e, n[a].position, n[a + 1].position);
        s(l);
    }
    return Math.round(100 * i) / 100;
}
function d(e) {
    let [t, a, s] = l.A.colors[i.w2].resolve(e).rgba(),
        [r, o, d] = l.A.colors[i.wn].resolve(e).rgba(),
        [c, u, m, h] = l.A.colors[i.ID].resolve(e).rgba();
    return {
        text: new n.A("srgb", [t / 255, a / 255, s / 255]),
        background: { r: r * (1 - h) + c * h, g: o * (1 - h) + u * h, b: d * (1 - h) + m * h },
    };
}
function c(e, t) {
    let a,
        { text: n, background: l } = d(t),
        r = o(n, l, e),
        c = r >= i.Sf;
    if (!c)
        for (let t = 0; t < e.length; t++) {
            let r = (0, s.l1)(e[t].color);
            if (null == r) continue;
            let d = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                c = 1 / 0;
            for (let { value: u } of i.iW[r]) {
                if (u === e[t].color) continue;
                let r = o(n, l, (0, s._D)(e, t, { ...e[t], color: u }));
                if (r >= i.Sf) {
                    let e = Math.abs(parseInt(String(u).split("_").pop() ?? "0", 10) - d);
                    e < c && ((c = e), (a = { stopIndex: t, suggestedColor: u, resultingMinContrast: r }));
                }
            }
        }
    return { passes: c, minContrastRatio: r, suggestion: a };
}
