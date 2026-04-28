r.d(e, { V1: () => f });
function f(t) {
    let e = (function (t) {
        var e;
        let r,
            f,
            o,
            { PI: l, min: c, max: n, cos: a, round: d } = Math,
            u = t[0] | (t[1] << 8) | (t[2] << 16),
            x = t[3] | (t[4] << 8),
            b = (63 & u) / 63,
            h = ((u >> 6) & 63) / 31.5 - 1,
            i = ((u >> 12) & 63) / 31.5 - 1,
            p = u >> 23,
            s = x >> 15,
            g = n(3, s ? (p ? 5 : 7) : 7 & x),
            k = n(3, s ? 7 & x : p ? 5 : 7),
            w = p ? (15 & t[5]) / 15 : 1,
            C = (t[5] >> 4) / 15,
            m = p ? 6 : 5,
            _ = 0,
            v = (e, r, f) => {
                let o = [];
                for (let l = 0; l < r; l++)
                    for (let c = +!l; c * r < e * (r - l); c++)
                        o.push((((t[m + (_ >> 1)] >> ((1 & _++) << 2)) & 15) / 7.5 - 1) * f);
                return o;
            },
            y = v(g, k, ((u >> 18) & 31) / 31),
            A = v(3, 3, (((x >> 3) & 63) / 63) * 1.25),
            M = v(3, 3, (((x >> 9) & 63) / 63) * 1.25),
            S = p && v(5, 5, C),
            U =
                ((r = (e = t)[3]),
                (f = 128 & e[2]),
                ((o = 128 & e[4]) ? (f ? 5 : 7) : 7 & r) / (o ? 7 & r : f ? 5 : 7)),
            V = d(U > 1 ? 32 : 32 * U),
            j = d(U > 1 ? 32 / U : 32),
            q = new Uint8Array(V * j * 4),
            z = [],
            B = [];
        for (let t = 0, e = 0; t < j; t++)
            for (let r = 0; r < V; r++, e += 4) {
                let f = b,
                    o = h,
                    d = i,
                    u = w;
                for (let t = 0, e = n(g, p ? 5 : 3); t < e; t++) z[t] = a((l / V) * (r + 0.5) * t);
                for (let e = 0, r = n(k, p ? 5 : 3); e < r; e++) B[e] = a((l / j) * (t + 0.5) * e);
                for (let t = 0, e = 0; t < k; t++)
                    for (let r = +!t, o = 2 * B[t]; r * k < g * (k - t); r++, e++) f += y[e] * z[r] * o;
                for (let t = 0, e = 0; t < 3; t++)
                    for (let r = +!t, f = 2 * B[t]; r < 3 - t; r++, e++) {
                        let t = z[r] * f;
                        (o += A[e] * t), (d += M[e] * t);
                    }
                if (p)
                    for (let t = 0, e = 0; t < 5; t++)
                        for (let r = +!t, f = 2 * B[t]; r < 5 - t; r++, e++) u += S[e] * z[r] * f;
                let x = f - (2 / 3) * o,
                    s = (3 * f - x + d) / 2,
                    C = s - d;
                (q[e] = n(0, 255 * c(1, s))),
                    (q[e + 1] = n(0, 255 * c(1, C))),
                    (q[e + 2] = n(0, 255 * c(1, x))),
                    (q[e + 3] = n(0, 255 * c(1, u)));
            }
        return { w: V, h: j, rgba: q };
    })(t);
    return (function (t, e, r) {
        let f = 4 * t + 1,
            o = 6 + e * (5 + f),
            l = [
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
                t >> 8,
                255 & t,
                0,
                0,
                e >> 8,
                255 & e,
                8,
                6,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                o >>> 24,
                (o >> 16) & 255,
                (o >> 8) & 255,
                255 & o,
                73,
                68,
                65,
                84,
                120,
                1,
            ],
            c = [
                0, 0x1db71064, 0x3b6e20c8, 0x26d930ac, 0x76dc4190, 0x6b6b51f4, 0x4db26158, 0x5005713c, -0x12477ce0,
                -0xff06cbc, -0x29295c18, -0x349e4c74, -0x649b3d50, -0x792c2d2c, -0x5ff51d88, -0x42420de4,
            ],
            n = 1,
            a = 0;
        for (let t = 0, o = 0, c = f - 1; t < e; t++, c += f - 1)
            for (
                l.push(t + 1 < e ? 0 : 1, 255 & f, f >> 8, 255 & ~f, (f >> 8) ^ 255, 0), a = (a + n) % 65521;
                o < c;
                o++
            ) {
                let t = 255 & r[o];
                l.push(t), (a = (a + (n = (n + t) % 65521)) % 65521);
            }
        for (let [t, e] of (l.push(
            a >> 8,
            255 & a,
            n >> 8,
            255 & n,
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
            [37, 41 + o],
        ])) {
            let r = -1;
            for (let f = t; f < e; f++) (r ^= l[f]), (r = ((r = (r >>> 4) ^ c[15 & r]) >>> 4) ^ c[15 & r]);
            (r = ~r), (l[e++] = r >>> 24), (l[e++] = (r >> 16) & 255), (l[e++] = (r >> 8) & 255), (l[e++] = 255 & r);
        }
        return "data:image/png;base64," + btoa(String.fromCharCode(...l));
    })(e.w, e.h, e.rgba);
}
