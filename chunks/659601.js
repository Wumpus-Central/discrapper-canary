t(393431), t(532706), t(42231), t(232424), t(949626), t(767709), t(65162), t(508300), t(321073);
var o = t(344390);
self.addEventListener("message", (e) => {
    let r,
        {
            data: { id: t, placeholderData: a },
        } = e,
        l =
            ((r = (function (e) {
                let { detail: r = 1, pop: t = 1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { PI: a, min: l, max: i, cos: s, round: n } = Math,
                    f = e[0] | (e[1] << 8) | (e[2] << 16),
                    p = e[3] | (e[4] << 8),
                    c = (63 & f) / 63,
                    u = ((f >> 6) & 63) / 31.5 - 1,
                    d = ((f >> 12) & 63) / 31.5 - 1,
                    b = f >> 23,
                    h = p >> 15,
                    v = i(3, h ? (b ? 5 : 7) : 7 & p),
                    g = i(3, h ? 7 & p : b ? 5 : 7),
                    y = b ? (15 & e[5]) / 15 : 1,
                    O = (e[5] >> 4) / 15,
                    m = b ? 6 : 5,
                    w = 0,
                    x = (r, t, o) => {
                        let a = [];
                        for (let l = 0; l < t; l++)
                            for (let i = +!l; i * t < r * (t - l); i++)
                                a.push((((e[m + (w >> 1)] >> ((1 & w++) << 2)) & 15) / 7.5 - 1) * o);
                        return a;
                    },
                    j = x(v, g, ((f >> 18) & 31) / 31 / 2),
                    k = x(3, 3, (((p >> 3) & 63) / 63) * t),
                    P = x(3, 3, (((p >> 9) & 63) / 63) * t),
                    A = b ? x(5, 5, O) : [],
                    C = (0, o.HM)(e),
                    M = n(C > 1 ? 32 : 32 * C),
                    T = n(C > 1 ? 32 / C : 32),
                    U = new Uint8Array(M * T * 4),
                    _ = [],
                    E = [];
                for (let e = 0, t = 0; e < T; e++)
                    for (let o = 0; o < M; o++, t += 4) {
                        let n = c,
                            f = u,
                            p = d,
                            h = y;
                        for (let e = 0, r = i(v, b ? 5 : 3); e < r; e++) _[e] = s((a / M) * (o + 0.5) * e);
                        for (let r = 0, t = i(g, b ? 5 : 3); r < t; r++) E[r] = s((a / T) * (e + 0.5) * r);
                        for (let e = 0, t = 0; e < g; e++)
                            for (let o = +!e, a = 2 * E[e]; o * g < v * (g - e); o++, t++)
                                o > r || e > r || (n += j[t] * _[o] * a);
                        for (let e = 0, r = 0; e < 3; e++)
                            for (let t = +!e, o = 2 * E[e]; t < 3 - e; t++, r++) {
                                let e = _[t] * o;
                                (f += k[r] * e), (p += P[r] * e);
                            }
                        if (b)
                            for (let e = 0, r = 0; e < 5; e++)
                                for (let t = +!e, o = 2 * E[e]; t < 5 - e; t++, r++) h += A[r] * _[t] * o;
                        let O = n - (2 / 3) * f,
                            m = (3 * n - O + p) / 2,
                            w = m - p;
                        (U[t] = i(0, 255 * l(1, m))),
                            (U[t + 1] = i(0, 255 * l(1, w))),
                            (U[t + 2] = i(0, 255 * l(1, O))),
                            (U[t + 3] = i(0, 255 * l(1, h)));
                    }
                return { w: M, h: T, rgba: U };
            })(
                Uint8Array.from(atob(a), (e) => e.charCodeAt(0)),
                { detail: 1, pop: 1.1 },
            )),
            (0, o.J9)(r.w, r.h, r.rgba));
    self.postMessage({ png: l, id: t });
});
