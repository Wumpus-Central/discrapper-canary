"use strict";
var t = 30,
    n = 12;
e.exports = function (e, r) {
    var i, a, s, o, l, u, c, d, _, f, p, h, m, g, E, A, I, T, y, S, v, C, b, N, R;
    (i = e.state),
        (a = e.next_in),
        (N = e.input),
        (s = a + (e.avail_in - 5)),
        (o = e.next_out),
        (R = e.output),
        (l = o - (r - e.avail_out)),
        (u = o + (e.avail_out - 257)),
        (c = i.dmax),
        (d = i.wsize),
        (_ = i.whave),
        (f = i.wnext),
        (p = i.window),
        (h = i.hold),
        (m = i.bits),
        (g = i.lencode),
        (E = i.distcode),
        (A = (1 << i.lenbits) - 1),
        (I = (1 << i.distbits) - 1);
    r: do
        for (m < 15 && ((h += N[a++] << m), (m += 8), (h += N[a++] << m), (m += 8)), T = g[h & A]; ; ) {
            if (((h >>>= y = T >>> 24), (m -= y), 0 == (y = (T >>> 16) & 255))) R[o++] = 65535 & T;
            else if (16 & y)
                for (
                    S = 65535 & T,
                        (y &= 15) &&
                            (m < y && ((h += N[a++] << m), (m += 8)), (S += h & ((1 << y) - 1)), (h >>>= y), (m -= y)),
                        m < 15 && ((h += N[a++] << m), (m += 8), (h += N[a++] << m), (m += 8)),
                        T = E[h & I];
                    ;
                ) {
                    if (((h >>>= y = T >>> 24), (m -= y), 16 & (y = (T >>> 16) & 255))) {
                        if (
                            ((v = 65535 & T),
                            m < (y &= 15) && ((h += N[a++] << m), (m += 8) < y && ((h += N[a++] << m), (m += 8))),
                            (v += h & ((1 << y) - 1)) > c)
                        ) {
                            (e.msg = "invalid distance too far back"), (i.mode = t);
                            break r;
                        }
                        if (((h >>>= y), (m -= y), v > (y = o - l))) {
                            if ((y = v - y) > _ && i.sane) {
                                (e.msg = "invalid distance too far back"), (i.mode = t);
                                break r;
                            }
                            if (((C = 0), (b = p), 0 === f)) {
                                if (((C += d - y), y < S)) {
                                    S -= y;
                                    do R[o++] = p[C++];
                                    while (--y);
                                    (C = o - v), (b = R);
                                }
                            } else if (f < y) {
                                if (((C += d + f - y), (y -= f) < S)) {
                                    S -= y;
                                    do R[o++] = p[C++];
                                    while (--y);
                                    if (((C = 0), f < S)) {
                                        S -= y = f;
                                        do R[o++] = p[C++];
                                        while (--y);
                                        (C = o - v), (b = R);
                                    }
                                }
                            } else if (((C += f - y), y < S)) {
                                S -= y;
                                do R[o++] = p[C++];
                                while (--y);
                                (C = o - v), (b = R);
                            }
                            for (; S > 2; ) (R[o++] = b[C++]), (R[o++] = b[C++]), (R[o++] = b[C++]), (S -= 3);
                            S && ((R[o++] = b[C++]), S > 1 && (R[o++] = b[C++]));
                        } else {
                            C = o - v;
                            do (R[o++] = R[C++]), (R[o++] = R[C++]), (R[o++] = R[C++]), (S -= 3);
                            while (S > 2);
                            S && ((R[o++] = R[C++]), S > 1 && (R[o++] = R[C++]));
                        }
                    } else if ((64 & y) == 0) {
                        T = E[(65535 & T) + (h & ((1 << y) - 1))];
                        continue;
                    } else {
                        (e.msg = "invalid distance code"), (i.mode = t);
                        break r;
                    }
                    break;
                }
            else if ((64 & y) == 0) {
                T = g[(65535 & T) + (h & ((1 << y) - 1))];
                continue;
            } else if (32 & y) {
                i.mode = n;
                break r;
            } else {
                (e.msg = "invalid literal/length code"), (i.mode = t);
                break r;
            }
            break;
        }
    while (a < s && o < u);
    (a -= S = m >> 3),
        (m -= S << 3),
        (h &= (1 << m) - 1),
        (e.next_in = a),
        (e.next_out = o),
        (e.avail_in = a < s ? 5 + (s - a) : 5 - (a - s)),
        (e.avail_out = o < u ? 257 + (u - o) : 257 - (o - u)),
        (i.hold = h),
        (i.bits = m);
};
