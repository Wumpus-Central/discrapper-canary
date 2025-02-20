e.d(t, { F: () => o }), e(518263), e(970173), e(520712), e(268111), e(941497), e(32026), e(480839), e(744285), e(492257), e(873817), e(610885), e(126298), e(863942), e(866573), e(642549), e(787622), e(653041);
var n = e(788900);
function o(r) {
    let t = (function (r) {
        let { detail: t = 1, pop: e = 1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { PI: o, min: f, max: i, cos: u, round: a } = Math,
            l = r[0] | (r[1] << 8) | (r[2] << 16),
            c = r[3] | (r[4] << 8),
            s = (63 & l) / 63,
            p = ((l >> 6) & 63) / 31.5 - 1,
            d = ((l >> 12) & 63) / 31.5 - 1,
            v = l >> 23,
            h = c >> 15,
            b = i(3, h ? (v ? 5 : 7) : 7 & c),
            g = i(3, h ? 7 & c : v ? 5 : 7),
            y = v ? (15 & r[5]) / 15 : 1,
            O = (r[5] >> 4) / 15,
            m = v ? 6 : 5,
            w = 0,
            x = (t, e, n) => {
                let o = [];
                for (let f = 0; f < e; f++) for (let i = +!f; i * e < t * (e - f); i++) o.push((((r[m + (w >> 1)] >> ((1 & w++) << 2)) & 15) / 7.5 - 1) * n);
                return o;
            },
            j = x(b, g, ((l >> 18) & 31) / 31 / 2),
            k = x(3, 3, (((c >> 3) & 63) / 63) * e),
            P = x(3, 3, (((c >> 9) & 63) / 63) * e),
            _ = v ? x(5, 5, O) : [],
            A = (0, n.UN)(r),
            C = a(A > 1 ? 32 : 32 * A),
            F = a(A > 1 ? 32 / A : 32),
            M = new Uint8Array(C * F * 4),
            U = [],
            T = [];
        for (let r = 0, e = 0; r < F; r++)
            for (let n = 0; n < C; n++, e += 4) {
                let a = s,
                    l = p,
                    c = d,
                    h = y;
                for (let r = 0, t = i(b, v ? 5 : 3); r < t; r++) U[r] = u((o / C) * (n + 0.5) * r);
                for (let t = 0, e = i(g, v ? 5 : 3); t < e; t++) T[t] = u((o / F) * (r + 0.5) * t);
                for (let r = 0, e = 0; r < g; r++) for (let n = +!r, o = 2 * T[r]; n * g < b * (g - r); n++, e++) !(n > t) && !(r > t) && (a += j[e] * U[n] * o);
                for (let r = 0, t = 0; r < 3; r++)
                    for (let e = +!r, n = 2 * T[r]; e < 3 - r; e++, t++) {
                        let r = U[e] * n;
                        (l += k[t] * r), (c += P[t] * r);
                    }
                if (v) for (let r = 0, t = 0; r < 5; r++) for (let e = +!r, n = 2 * T[r]; e < 5 - r; e++, t++) h += _[t] * U[e] * n;
                let O = a - (2 / 3) * l,
                    m = (3 * a - O + c) / 2,
                    w = m - c;
                (M[e] = i(0, 255 * f(1, m))), (M[e + 1] = i(0, 255 * f(1, w))), (M[e + 2] = i(0, 255 * f(1, O))), (M[e + 3] = i(0, 255 * f(1, h)));
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
    return (0, n.Bd)(t.w, t.h, t.rgba);
}
