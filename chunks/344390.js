s.d(t, { V1: () => i });
function i(e) {
    let t = (function (e) {
        var t;
        let s,
            i,
            r,
            { PI: n, min: l, max: a, cos: o, round: c } = Math,
            d = e[0] | (e[1] << 8) | (e[2] << 16),
            u = e[3] | (e[4] << 8),
            f = (63 & d) / 63,
            h = ((d >> 6) & 63) / 31.5 - 1,
            x = ((d >> 12) & 63) / 31.5 - 1,
            p = d >> 23,
            _ = u >> 15,
            m = a(3, _ ? (p ? 5 : 7) : 7 & u),
            g = a(3, _ ? 7 & u : p ? 5 : 7),
            j = p ? (15 & e[5]) / 15 : 1,
            v = (e[5] >> 4) / 15,
            A = p ? 6 : 5,
            C = 0,
            S = (t, s, i) => {
                let r = [];
                for (let n = 0; n < s; n++)
                    for (let l = +!n; l * s < t * (s - n); l++)
                        r.push((((e[A + (C >> 1)] >> ((1 & C++) << 2)) & 15) / 7.5 - 1) * i);
                return r;
            },
            y = S(m, g, ((d >> 18) & 31) / 31),
            b = S(3, 3, (((u >> 3) & 63) / 63) * 1.25),
            w = S(3, 3, (((u >> 9) & 63) / 63) * 1.25),
            E = p && S(5, 5, v),
            I =
                ((s = (t = e)[3]),
                (i = 128 & t[2]),
                ((r = 128 & t[4]) ? (i ? 5 : 7) : 7 & s) / (r ? 7 & s : i ? 5 : 7)),
            N = c(I > 1 ? 32 : 32 * I),
            O = c(I > 1 ? 32 / I : 32),
            R = new Uint8Array(N * O * 4),
            T = [],
            M = [];
        for (let e = 0, t = 0; e < O; e++)
            for (let s = 0; s < N; s++, t += 4) {
                let i = f,
                    r = h,
                    c = x,
                    d = j;
                for (let e = 0, t = a(m, p ? 5 : 3); e < t; e++) T[e] = o((n / N) * (s + 0.5) * e);
                for (let t = 0, s = a(g, p ? 5 : 3); t < s; t++) M[t] = o((n / O) * (e + 0.5) * t);
                for (let e = 0, t = 0; e < g; e++)
                    for (let s = +!e, r = 2 * M[e]; s * g < m * (g - e); s++, t++) i += y[t] * T[s] * r;
                for (let e = 0, t = 0; e < 3; e++)
                    for (let s = +!e, i = 2 * M[e]; s < 3 - e; s++, t++) {
                        let e = T[s] * i;
                        (r += b[t] * e), (c += w[t] * e);
                    }
                if (p)
                    for (let e = 0, t = 0; e < 5; e++)
                        for (let s = +!e, i = 2 * M[e]; s < 5 - e; s++, t++) d += E[t] * T[s] * i;
                let u = i - (2 / 3) * r,
                    _ = (3 * i - u + c) / 2,
                    v = _ - c;
                (R[t] = a(0, 255 * l(1, _))),
                    (R[t + 1] = a(0, 255 * l(1, v))),
                    (R[t + 2] = a(0, 255 * l(1, u))),
                    (R[t + 3] = a(0, 255 * l(1, d)));
            }
        return { w: N, h: O, rgba: R };
    })(e);
    return (function (e, t, s) {
        let i = 4 * e + 1,
            r = 6 + t * (5 + i),
            n = [
                137,
                80,
                78,
                71,
                13,
                10,
                26,
                10,
                0,
                0,
                0,
                13,
                73,
                72,
                68,
                82,
                0,
                0,
                e >> 8,
                255 & e,
                0,
                0,
                t >> 8,
                255 & t,
                8,
                6,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                r >>> 24,
                (r >> 16) & 255,
                (r >> 8) & 255,
                255 & r,
                73,
                68,
                65,
                84,
                120,
                1,
            ],
            l = [
                0, 0x1db71064, 0x3b6e20c8, 0x26d930ac, 0x76dc4190, 0x6b6b51f4, 0x4db26158, 0x5005713c, -0x12477ce0,
                -0xff06cbc, -0x29295c18, -0x349e4c74, -0x649b3d50, -0x792c2d2c, -0x5ff51d88, -0x42420de4,
            ],
            a = 1,
            o = 0;
        for (let e = 0, r = 0, l = i - 1; e < t; e++, l += i - 1)
            for (
                n.push(e + 1 < t ? 0 : 1, 255 & i, i >> 8, 255 & ~i, (i >> 8) ^ 255, 0), o = (o + a) % 65521;
                r < l;
                r++
            ) {
                let e = 255 & s[r];
                n.push(e), (o = (o + (a = (a + e) % 65521)) % 65521);
            }
        for (let [e, t] of (n.push(
            o >> 8,
            255 & o,
            a >> 8,
            255 & a,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            73,
            69,
            78,
            68,
            174,
            66,
            96,
            130,
        ),
        [
            [12, 29],
            [37, 41 + r],
        ])) {
            let s = -1;
            for (let i = e; i < t; i++) (s ^= n[i]), (s = ((s = (s >>> 4) ^ l[15 & s]) >>> 4) ^ l[15 & s]);
            (s = ~s), (n[t++] = s >>> 24), (n[t++] = (s >> 16) & 255), (n[t++] = (s >> 8) & 255), (n[t++] = 255 & s);
        }
        return "data:image/png;base64," + btoa(String.fromCharCode(...n));
    })(t.w, t.h, t.rgba);
}
