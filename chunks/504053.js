t.d(e, { F: () => n }), t(410992), t(227481), t(730884), t(20464), t(341884), t(364341), t(629680), t(505025), t(918970), t(121784), t(644351), t(146733), t(608445), t(853839), t(570086), t(479048), t(539854);
var o = t(788900);
function n(r) {
    let e = (function (r) {
        let { detail: e = 1, pop: t = 1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { PI: n, min: a, max: f, cos: l, round: i } = Math,
            s = r[0] | (r[1] << 8) | (r[2] << 16),
            u = r[3] | (r[4] << 8),
            p = (63 & s) / 63,
            c = ((s >> 6) & 63) / 31.5 - 1,
            d = ((s >> 12) & 63) / 31.5 - 1,
            v = s >> 23,
            b = u >> 15,
            h = f(3, b ? (v ? 5 : 7) : 7 & u),
            g = f(3, b ? 7 & u : v ? 5 : 7),
            y = v ? (15 & r[5]) / 15 : 1,
            O = (r[5] >> 4) / 15,
            m = v ? 6 : 5,
            w = 0,
            x = (e, t, o) => {
                let n = [];
                for (let a = 0; a < t; a++) for (let f = +!a; f * t < e * (t - a); f++) n.push((((r[m + (w >> 1)] >> ((1 & w++) << 2)) & 15) / 7.5 - 1) * o);
                return n;
            },
            j = x(h, g, ((s >> 18) & 31) / 31 / 2),
            k = x(3, 3, (((u >> 3) & 63) / 63) * t),
            P = x(3, 3, (((u >> 9) & 63) / 63) * t),
            _ = v ? x(5, 5, O) : [],
            A = (0, o.UN)(r),
            C = i(A > 1 ? 32 : 32 * A),
            F = i(A > 1 ? 32 / A : 32),
            M = new Uint8Array(C * F * 4),
            U = [],
            T = [];
        for (let r = 0, t = 0; r < F; r++)
            for (let o = 0; o < C; o++, t += 4) {
                let i = p,
                    s = c,
                    u = d,
                    b = y;
                for (let r = 0, e = f(h, v ? 5 : 3); r < e; r++) U[r] = l((n / C) * (o + 0.5) * r);
                for (let e = 0, t = f(g, v ? 5 : 3); e < t; e++) T[e] = l((n / F) * (r + 0.5) * e);
                for (let r = 0, t = 0; r < g; r++) for (let o = +!r, n = 2 * T[r]; o * g < h * (g - r); o++, t++) o > e || r > e || (i += j[t] * U[o] * n);
                for (let r = 0, e = 0; r < 3; r++)
                    for (let t = +!r, o = 2 * T[r]; t < 3 - r; t++, e++) {
                        let r = U[t] * o;
                        (s += k[e] * r), (u += P[e] * r);
                    }
                if (v) for (let r = 0, e = 0; r < 5; r++) for (let t = +!r, o = 2 * T[r]; t < 5 - r; t++, e++) b += _[e] * U[t] * o;
                let O = i - (2 / 3) * s,
                    m = (3 * i - O + u) / 2,
                    w = m - u;
                (M[t] = f(0, 255 * a(1, m))), (M[t + 1] = f(0, 255 * a(1, w))), (M[t + 2] = f(0, 255 * a(1, O))), (M[t + 3] = f(0, 255 * a(1, b)));
            }
        return {
            w: C,
            h: F,
            rgba: M
        };
    })(
        Uint8Array.from(atob(r), (r) => r.charCodeAt(0)),
        {
            detail: 1,
            pop: 1.1
        }
    );
    return (0, o.Bd)(e.w, e.h, e.rgba);
}
