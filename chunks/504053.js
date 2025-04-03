t.d(r, { F: () => n }), t(518263), t(970173), t(520712), t(268111), t(941497), t(32026), t(480839), t(744285), t(492257), t(873817), t(610885), t(126298), t(863942), t(866573), t(642549), t(787622), t(653041);
var o = t(788900);
function n(e) {
    let r = (function (e) {
        let { detail: r = 1, pop: t = 1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { PI: n, min: a, max: l, cos: i, round: f } = Math,
            s = e[0] | (e[1] << 8) | (e[2] << 16),
            u = e[3] | (e[4] << 8),
            p = (63 & s) / 63,
            c = ((s >> 6) & 63) / 31.5 - 1,
            d = ((s >> 12) & 63) / 31.5 - 1,
            v = s >> 23,
            h = u >> 15,
            b = l(3, h ? (v ? 5 : 7) : 7 & u),
            g = l(3, h ? 7 & u : v ? 5 : 7),
            y = v ? (15 & e[5]) / 15 : 1,
            O = (e[5] >> 4) / 15,
            m = v ? 6 : 5,
            w = 0,
            x = (r, t, o) => {
                let n = [];
                for (let a = 0; a < t; a++) for (let l = +!a; l * t < r * (t - a); l++) n.push((((e[m + (w >> 1)] >> ((1 & w++) << 2)) & 15) / 7.5 - 1) * o);
                return n;
            },
            j = x(b, g, ((s >> 18) & 31) / 31 / 2),
            k = x(3, 3, (((u >> 3) & 63) / 63) * t),
            P = x(3, 3, (((u >> 9) & 63) / 63) * t),
            _ = v ? x(5, 5, O) : [],
            A = (0, o.UN)(e),
            C = f(A > 1 ? 32 : 32 * A),
            F = f(A > 1 ? 32 / A : 32),
            M = new Uint8Array(C * F * 4),
            U = [],
            T = [];
        for (let e = 0, t = 0; e < F; e++)
            for (let o = 0; o < C; o++, t += 4) {
                let f = p,
                    s = c,
                    u = d,
                    h = y;
                for (let e = 0, r = l(b, v ? 5 : 3); e < r; e++) U[e] = i((n / C) * (o + 0.5) * e);
                for (let r = 0, t = l(g, v ? 5 : 3); r < t; r++) T[r] = i((n / F) * (e + 0.5) * r);
                for (let e = 0, t = 0; e < g; e++) for (let o = +!e, n = 2 * T[e]; o * g < b * (g - e); o++, t++) o > r || e > r || (f += j[t] * U[o] * n);
                for (let e = 0, r = 0; e < 3; e++)
                    for (let t = +!e, o = 2 * T[e]; t < 3 - e; t++, r++) {
                        let e = U[t] * o;
                        (s += k[r] * e), (u += P[r] * e);
                    }
                if (v) for (let e = 0, r = 0; e < 5; e++) for (let t = +!e, o = 2 * T[e]; t < 5 - e; t++, r++) h += _[r] * U[t] * o;
                let O = f - (2 / 3) * s,
                    m = (3 * f - O + u) / 2,
                    w = m - u;
                (M[t] = l(0, 255 * a(1, m))), (M[t + 1] = l(0, 255 * a(1, w))), (M[t + 2] = l(0, 255 * a(1, O))), (M[t + 3] = l(0, 255 * a(1, h)));
            }
        return {
            w: C,
            h: F,
            rgba: M
        };
    })(
        Uint8Array.from(atob(e), (e) => e.charCodeAt(0)),
        {
            detail: 1,
            pop: 1.1
        }
    );
    return (0, o.Bd)(r.w, r.h, r.rgba);
}
