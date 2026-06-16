"use strict";
e.exports = function (e, t) {
    var n, i, r, s, a, o, l, u, c, d, _, h, f, p, E, m, g, A, I, T, S, y, C, N, v;
    (n = e.state),
        (i = e.next_in),
        (N = e.input),
        (r = i + (e.avail_in - 5)),
        (s = e.next_out),
        (v = e.output),
        (a = s - (t - e.avail_out)),
        (o = s + (e.avail_out - 257)),
        (l = n.dmax),
        (u = n.wsize),
        (c = n.whave),
        (d = n.wnext),
        (_ = n.window),
        (h = n.hold),
        (f = n.bits),
        (p = n.lencode),
        (E = n.distcode),
        (m = (1 << n.lenbits) - 1),
        (g = (1 << n.distbits) - 1);
    i: do
        for (f < 15 && ((h += N[i++] << f), (f += 8), (h += N[i++] << f), (f += 8)), A = p[h & m]; ; ) {
            if (((h >>>= I = A >>> 24), (f -= I), 0 == (I = (A >>> 16) & 255))) v[s++] = 65535 & A;
            else if (16 & I)
                for (
                    T = 65535 & A,
                        (I &= 15) &&
                            (f < I && ((h += N[i++] << f), (f += 8)), (T += h & ((1 << I) - 1)), (h >>>= I), (f -= I)),
                        f < 15 && ((h += N[i++] << f), (f += 8), (h += N[i++] << f), (f += 8)),
                        A = E[h & g];
                    ;
                ) {
                    if (((h >>>= I = A >>> 24), (f -= I), 16 & (I = (A >>> 16) & 255))) {
                        if (
                            ((S = 65535 & A),
                            f < (I &= 15) && ((h += N[i++] << f), (f += 8) < I && ((h += N[i++] << f), (f += 8))),
                            (S += h & ((1 << I) - 1)) > l)
                        ) {
                            (e.msg = "invalid distance too far back"), (n.mode = 30);
                            break i;
                        }
                        if (((h >>>= I), (f -= I), S > (I = s - a))) {
                            if ((I = S - I) > c && n.sane) {
                                (e.msg = "invalid distance too far back"), (n.mode = 30);
                                break i;
                            }
                            if (((y = 0), (C = _), 0 === d)) {
                                if (((y += u - I), I < T)) {
                                    T -= I;
                                    do v[s++] = _[y++];
                                    while (--I);
                                    (y = s - S), (C = v);
                                }
                            } else if (d < I) {
                                if (((y += u + d - I), (I -= d) < T)) {
                                    T -= I;
                                    do v[s++] = _[y++];
                                    while (--I);
                                    if (((y = 0), d < T)) {
                                        T -= I = d;
                                        do v[s++] = _[y++];
                                        while (--I);
                                        (y = s - S), (C = v);
                                    }
                                }
                            } else if (((y += d - I), I < T)) {
                                T -= I;
                                do v[s++] = _[y++];
                                while (--I);
                                (y = s - S), (C = v);
                            }
                            for (; T > 2; ) (v[s++] = C[y++]), (v[s++] = C[y++]), (v[s++] = C[y++]), (T -= 3);
                            T && ((v[s++] = C[y++]), T > 1 && (v[s++] = C[y++]));
                        } else {
                            y = s - S;
                            do (v[s++] = v[y++]), (v[s++] = v[y++]), (v[s++] = v[y++]), (T -= 3);
                            while (T > 2);
                            T && ((v[s++] = v[y++]), T > 1 && (v[s++] = v[y++]));
                        }
                    } else if ((64 & I) == 0) {
                        A = E[(65535 & A) + (h & ((1 << I) - 1))];
                        continue;
                    } else {
                        (e.msg = "invalid distance code"), (n.mode = 30);
                        break i;
                    }
                    break;
                }
            else if ((64 & I) == 0) {
                A = p[(65535 & A) + (h & ((1 << I) - 1))];
                continue;
            } else if (32 & I) {
                n.mode = 12;
                break i;
            } else {
                (e.msg = "invalid literal/length code"), (n.mode = 30);
                break i;
            }
            break;
        }
    while (i < r && s < o);
    (i -= T = f >> 3),
        (f -= T << 3),
        (h &= (1 << f) - 1),
        (e.next_in = i),
        (e.next_out = s),
        (e.avail_in = i < r ? 5 + (r - i) : 5 - (i - r)),
        (e.avail_out = s < o ? 257 + (o - s) : 257 - (s - o)),
        (n.hold = h),
        (n.bits = f);
};
