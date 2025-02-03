var t = 30,
    n = 12;
e.exports = function (e, i) {
    var r, a, s, o, l, u, c, d, f, _, p, h, m, g, E, v, y, I, b, T, S, A, N, C, R;
    (r = e.state), (a = e.next_in), (C = e.input), (s = a + (e.avail_in - 5)), (o = e.next_out), (R = e.output), (l = o - (i - e.avail_out)), (u = o + (e.avail_out - 257)), (c = r.dmax), (d = r.wsize), (f = r.whave), (_ = r.wnext), (p = r.window), (h = r.hold), (m = r.bits), (g = r.lencode), (E = r.distcode), (v = (1 << r.lenbits) - 1), (y = (1 << r.distbits) - 1);
    n: do
        for (m < 15 && ((h += C[a++] << m), (m += 8), (h += C[a++] << m), (m += 8)), I = g[h & v]; ; ) {
            if (((h >>>= b = I >>> 24), (m -= b), 0 == (b = (I >>> 16) & 255))) R[o++] = 65535 & I;
            else if (16 & b)
                for (T = 65535 & I, (b &= 15) && (m < b && ((h += C[a++] << m), (m += 8)), (T += h & ((1 << b) - 1)), (h >>>= b), (m -= b)), m < 15 && ((h += C[a++] << m), (m += 8), (h += C[a++] << m), (m += 8)), I = E[h & y]; ; ) {
                    if (((h >>>= b = I >>> 24), (m -= b), 16 & (b = (I >>> 16) & 255))) {
                        if (((S = 65535 & I), m < (b &= 15) && ((h += C[a++] << m), (m += 8) < b && ((h += C[a++] << m), (m += 8))), (S += h & ((1 << b) - 1)) > c)) {
                            (e.msg = 'invalid distance too far back'), (r.mode = t);
                            break n;
                        }
                        if (((h >>>= b), (m -= b), S > (b = o - l))) {
                            if ((b = S - b) > f && r.sane) {
                                (e.msg = 'invalid distance too far back'), (r.mode = t);
                                break n;
                            }
                            if (((A = 0), (N = p), 0 === _)) {
                                if (((A += d - b), b < T)) {
                                    T -= b;
                                    do R[o++] = p[A++];
                                    while (--b);
                                    (A = o - S), (N = R);
                                }
                            } else if (_ < b) {
                                if (((A += d + _ - b), (b -= _) < T)) {
                                    T -= b;
                                    do R[o++] = p[A++];
                                    while (--b);
                                    if (((A = 0), _ < T)) {
                                        T -= b = _;
                                        do R[o++] = p[A++];
                                        while (--b);
                                        (A = o - S), (N = R);
                                    }
                                }
                            } else if (((A += _ - b), b < T)) {
                                T -= b;
                                do R[o++] = p[A++];
                                while (--b);
                                (A = o - S), (N = R);
                            }
                            for (; T > 2; ) (R[o++] = N[A++]), (R[o++] = N[A++]), (R[o++] = N[A++]), (T -= 3);
                            T && ((R[o++] = N[A++]), T > 1 && (R[o++] = N[A++]));
                        } else {
                            A = o - S;
                            do (R[o++] = R[A++]), (R[o++] = R[A++]), (R[o++] = R[A++]), (T -= 3);
                            while (T > 2);
                            T && ((R[o++] = R[A++]), T > 1 && (R[o++] = R[A++]));
                        }
                    } else if ((64 & b) == 0) {
                        I = E[(65535 & I) + (h & ((1 << b) - 1))];
                        continue;
                    } else {
                        (e.msg = 'invalid distance code'), (r.mode = t);
                        break n;
                    }
                    break;
                }
            else if ((64 & b) == 0) {
                I = g[(65535 & I) + (h & ((1 << b) - 1))];
                continue;
            } else if (32 & b) {
                r.mode = n;
                break n;
            } else {
                (e.msg = 'invalid literal/length code'), (r.mode = t);
                break n;
            }
            break;
        }
    while (a < s && o < u);
    (a -= T = m >> 3), (m -= T << 3), (h &= (1 << m) - 1), (e.next_in = a), (e.next_out = o), (e.avail_in = a < s ? 5 + (s - a) : 5 - (a - s)), (e.avail_out = o < u ? 257 + (u - o) : 257 - (o - u)), (r.hold = h), (r.bits = m);
};
