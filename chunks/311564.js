"use strict";
e.exports = function (e, t) {
    var n, r, i, s, a, o, l, u, d, c, _, f, E, h, p, m, g, A, I, T, S, y, N, O, R;
    (n = e.state),
        (r = e.next_in),
        (O = e.input),
        (i = r + (e.avail_in - 5)),
        (s = e.next_out),
        (R = e.output),
        (a = s - (t - e.avail_out)),
        (o = s + (e.avail_out - 257)),
        (l = n.dmax),
        (u = n.wsize),
        (d = n.whave),
        (c = n.wnext),
        (_ = n.window),
        (f = n.hold),
        (E = n.bits),
        (h = n.lencode),
        (p = n.distcode),
        (m = (1 << n.lenbits) - 1),
        (g = (1 << n.distbits) - 1);
    r: do
        for (E < 15 && ((f += O[r++] << E), (E += 8), (f += O[r++] << E), (E += 8)), A = h[f & m]; ; ) {
            if (((f >>>= I = A >>> 24), (E -= I), 0 == (I = (A >>> 16) & 255))) R[s++] = 65535 & A;
            else if (16 & I)
                for (
                    T = 65535 & A,
                        (I &= 15) &&
                            (E < I && ((f += O[r++] << E), (E += 8)), (T += f & ((1 << I) - 1)), (f >>>= I), (E -= I)),
                        E < 15 && ((f += O[r++] << E), (E += 8), (f += O[r++] << E), (E += 8)),
                        A = p[f & g];
                    ;
                ) {
                    if (((f >>>= I = A >>> 24), (E -= I), 16 & (I = (A >>> 16) & 255))) {
                        if (
                            ((S = 65535 & A),
                            E < (I &= 15) && ((f += O[r++] << E), (E += 8) < I && ((f += O[r++] << E), (E += 8))),
                            (S += f & ((1 << I) - 1)) > l)
                        ) {
                            (e.msg = "invalid distance too far back"), (n.mode = 30);
                            break r;
                        }
                        if (((f >>>= I), (E -= I), S > (I = s - a))) {
                            if ((I = S - I) > d && n.sane) {
                                (e.msg = "invalid distance too far back"), (n.mode = 30);
                                break r;
                            }
                            if (((y = 0), (N = _), 0 === c)) {
                                if (((y += u - I), I < T)) {
                                    T -= I;
                                    do R[s++] = _[y++];
                                    while (--I);
                                    (y = s - S), (N = R);
                                }
                            } else if (c < I) {
                                if (((y += u + c - I), (I -= c) < T)) {
                                    T -= I;
                                    do R[s++] = _[y++];
                                    while (--I);
                                    if (((y = 0), c < T)) {
                                        T -= I = c;
                                        do R[s++] = _[y++];
                                        while (--I);
                                        (y = s - S), (N = R);
                                    }
                                }
                            } else if (((y += c - I), I < T)) {
                                T -= I;
                                do R[s++] = _[y++];
                                while (--I);
                                (y = s - S), (N = R);
                            }
                            for (; T > 2; ) (R[s++] = N[y++]), (R[s++] = N[y++]), (R[s++] = N[y++]), (T -= 3);
                            T && ((R[s++] = N[y++]), T > 1 && (R[s++] = N[y++]));
                        } else {
                            y = s - S;
                            do (R[s++] = R[y++]), (R[s++] = R[y++]), (R[s++] = R[y++]), (T -= 3);
                            while (T > 2);
                            T && ((R[s++] = R[y++]), T > 1 && (R[s++] = R[y++]));
                        }
                    } else if ((64 & I) == 0) {
                        A = p[(65535 & A) + (f & ((1 << I) - 1))];
                        continue;
                    } else {
                        (e.msg = "invalid distance code"), (n.mode = 30);
                        break r;
                    }
                    break;
                }
            else if ((64 & I) == 0) {
                A = h[(65535 & A) + (f & ((1 << I) - 1))];
                continue;
            } else if (32 & I) {
                n.mode = 12;
                break r;
            } else {
                (e.msg = "invalid literal/length code"), (n.mode = 30);
                break r;
            }
            break;
        }
    while (r < i && s < o);
    (r -= T = E >> 3),
        (E -= T << 3),
        (f &= (1 << E) - 1),
        (e.next_in = r),
        (e.next_out = s),
        (e.avail_in = r < i ? 5 + (i - r) : 5 - (r - i)),
        (e.avail_out = s < o ? 257 + (o - s) : 257 - (s - o)),
        (n.hold = f),
        (n.bits = E);
};
