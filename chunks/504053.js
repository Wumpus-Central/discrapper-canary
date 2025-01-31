e.d(t, { F: () => o }), e(518263), e(970173), e(520712), e(268111), e(941497), e(32026), e(480839), e(744285), e(492257), e(873817), e(863942), e(642549), e(653041);
var n = e(788900);
function o(r) {
    let t = (function (r) {
        let { detail: t = 1, pop: e = 1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { PI: o, min: i, max: u, cos: f, round: a } = Math,
            c = r[0] | (r[1] << 8) | (r[2] << 16),
            l = r[3] | (r[4] << 8),
            s = (63 & c) / 63,
            d = ((c >> 6) & 63) / 31.5 - 1,
            p = ((c >> 12) & 63) / 31.5 - 1,
            v = c >> 23,
            h = l >> 15,
            b = u(3, h ? (v ? 5 : 7) : 7 & l),
            g = u(3, h ? 7 & l : v ? 5 : 7),
            y = v ? (15 & r[5]) / 15 : 1,
            O = (r[5] >> 4) / 15,
            m = v ? 6 : 5,
            w = 0,
            x = (t, e, n) => {
                let o = [];
                for (let i = 0; i < e; i++) for (let u = i ? 0 : 1; u * e < t * (e - i); u++) o.push((((r[m + (w >> 1)] >> ((1 & w++) << 2)) & 15) / 7.5 - 1) * n);
                return o;
            },
            j = x(b, g, ((c >> 18) & 31) / 31 / 2),
            k = x(3, 3, (((l >> 3) & 63) / 63) * e),
            P = x(3, 3, (((l >> 9) & 63) / 63) * e),
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
                    c = d,
                    l = p,
                    h = y;
                for (let r = 0, t = u(b, v ? 5 : 3); r < t; r++) U[r] = f((o / C) * (n + 0.5) * r);
                for (let t = 0, e = u(g, v ? 5 : 3); t < e; t++) T[t] = f((o / F) * (r + 0.5) * t);
                for (let r = 0, e = 0; r < g; r++) for (let n = r ? 0 : 1, o = 2 * T[r]; n * g < b * (g - r); n++, e++) !(n > t) && !(r > t) && (a += j[e] * U[n] * o);
                for (let r = 0, t = 0; r < 3; r++)
                    for (let e = r ? 0 : 1, n = 2 * T[r]; e < 3 - r; e++, t++) {
                        let r = U[e] * n;
                        (c += k[t] * r), (l += P[t] * r);
                    }
                if (v) for (let r = 0, t = 0; r < 5; r++) for (let e = r ? 0 : 1, n = 2 * T[r]; e < 5 - r; e++, t++) h += _[t] * U[e] * n;
                let O = a - (2 / 3) * c,
                    m = (3 * a - O + l) / 2,
                    w = m - l;
                (M[e] = u(0, 255 * i(1, m))), (M[e + 1] = u(0, 255 * i(1, w))), (M[e + 2] = u(0, 255 * i(1, O))), (M[e + 3] = u(0, 255 * i(1, h)));
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
