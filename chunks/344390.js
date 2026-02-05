s.d(t, { V1: () => r });
function r(e) {
    let t = (function (e) {
        var t;
        let s,
            r,
            i,
            { PI: n, min: l, max: a, cos: o, round: c } = Math,
            d = e[0] | (e[1] << 8) | (e[2] << 16),
            u = e[3] | (e[4] << 8),
            f = (63 & d) / 63,
            h = ((d >> 6) & 63) / 31.5 - 1,
            x = ((d >> 12) & 63) / 31.5 - 1,
            p = d >> 23,
            m = u >> 15,
            _ = a(3, m ? (p ? 5 : 7) : 7 & u),
            g = a(3, m ? 7 & u : p ? 5 : 7),
            j = p ? (15 & e[5]) / 15 : 1,
            v = (e[5] >> 4) / 15,
            A = p ? 6 : 5,
            S = 0,
            C = (t, s, r) => {
                let i = [];
                for (let n = 0; n < s; n++)
                    for (let l = +!n; l * s < t * (s - n); l++)
                        i.push((((e[A + (S >> 1)] >> ((1 & S++) << 2)) & 15) / 7.5 - 1) * r);
                return i;
            },
            y = C(_, g, ((d >> 18) & 31) / 31),
            b = C(3, 3, (((u >> 3) & 63) / 63) * 1.25),
            w = C(3, 3, (((u >> 9) & 63) / 63) * 1.25),
            I = p && C(5, 5, v),
            E =
                ((s = (t = e)[3]),
                (r = 128 & t[2]),
                ((i = 128 & t[4]) ? (r ? 5 : 7) : 7 & s) / (i ? 7 & s : r ? 5 : 7)),
            N = c(E > 1 ? 32 : 32 * E),
            O = c(E > 1 ? 32 / E : 32),
            T = new Uint8Array(N * O * 4),
            R = [],
            M = [];
        for (let e = 0, t = 0; e < O; e++)
            for (let s = 0; s < N; s++, t += 4) {
                let r = f,
                    i = h,
                    c = x,
                    d = j;
                for (let e = 0, t = a(_, p ? 5 : 3); e < t; e++) R[e] = o((n / N) * (s + 0.5) * e);
                for (let t = 0, s = a(g, p ? 5 : 3); t < s; t++) M[t] = o((n / O) * (e + 0.5) * t);
                for (let e = 0, t = 0; e < g; e++)
                    for (let s = +!e, i = 2 * M[e]; s * g < _ * (g - e); s++, t++) r += y[t] * R[s] * i;
                for (let e = 0, t = 0; e < 3; e++)
                    for (let s = +!e, r = 2 * M[e]; s < 3 - e; s++, t++) {
                        let e = R[s] * r;
                        (i += b[t] * e), (c += w[t] * e);
                    }
                if (p)
                    for (let e = 0, t = 0; e < 5; e++)
                        for (let s = +!e, r = 2 * M[e]; s < 5 - e; s++, t++) d += I[t] * R[s] * r;
                let u = r - (2 / 3) * i,
                    m = (3 * r - u + c) / 2,
                    v = m - c;
                (T[t] = a(0, 255 * l(1, m))),
                    (T[t + 1] = a(0, 255 * l(1, v))),
                    (T[t + 2] = a(0, 255 * l(1, u))),
                    (T[t + 3] = a(0, 255 * l(1, d)));
            }
        return { w: N, h: O, rgba: T };
    })(e);
    return (function (e, t, s) {
        let r = 4 * e + 1,
            i = 6 + t * (5 + r),
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
                i >>> 24,
                (i >> 16) & 255,
                (i >> 8) & 255,
                255 & i,
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
        for (let e = 0, i = 0, l = r - 1; e < t; e++, l += r - 1)
            for (
                n.push(e + 1 < t ? 0 : 1, 255 & r, r >> 8, 255 & ~r, (r >> 8) ^ 255, 0), o = (o + a) % 65521;
                i < l;
                i++
            ) {
                let e = 255 & s[i];
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
            [37, 41 + i],
        ])) {
            let s = -1;
            for (let r = e; r < t; r++) (s ^= n[r]), (s = ((s = (s >>> 4) ^ l[15 & s]) >>> 4) ^ l[15 & s]);
            (s = ~s), (n[t++] = s >>> 24), (n[t++] = (s >> 16) & 255), (n[t++] = (s >> 8) & 255), (n[t++] = 255 & s);
        }
        return "data:image/png;base64," + btoa(String.fromCharCode(...n));
    })(t.w, t.h, t.rgba);
}
