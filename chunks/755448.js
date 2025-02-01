var t = 30,
    n = 12;
e.exports = function (e, i) {
    var r, a, s, o, l, u, c, d, f, _, p, h, m, g, E, v, y, I, T, b, S, A, N, C, R;
    (r = e.state), (a = e.next_in), (C = e.input), (s = a + (e.avail_in - 5)), (o = e.next_out), (R = e.output), (l = o - (i - e.avail_out)), (u = o + (e.avail_out - 257)), (c = r.dmax), (d = r.wsize), (f = r.whave), (_ = r.wnext), (p = r.window), (h = r.hold), (m = r.bits), (g = r.lencode), (E = r.distcode), (v = (1 << r.lenbits) - 1), (y = (1 << r.distbits) - 1);
    n: do
        for (m < 15 && ((h += C[a++] << m), (m += 8), (h += C[a++] << m), (m += 8)), I = g[h & v]; ; ) {
            if (((h >>>= T = I >>> 24), (m -= T), 0 == (T = (I >>> 16) & 255))) R[o++] = 65535 & I;
            else if (16 & T)
                for (b = 65535 & I, (T &= 15) && (m < T && ((h += C[a++] << m), (m += 8)), (b += h & ((1 << T) - 1)), (h >>>= T), (m -= T)), m < 15 && ((h += C[a++] << m), (m += 8), (h += C[a++] << m), (m += 8)), I = E[h & y]; ; ) {
                    if (((h >>>= T = I >>> 24), (m -= T), 16 & (T = (I >>> 16) & 255))) {
                        if (((S = 65535 & I), m < (T &= 15) && ((h += C[a++] << m), (m += 8) < T && ((h += C[a++] << m), (m += 8))), (S += h & ((1 << T) - 1)) > c)) {
                            (e.msg = 'invalid distance too far back'), (r.mode = t);
                            break n;
                        }
                        if (((h >>>= T), (m -= T), S > (T = o - l))) {
                            if ((T = S - T) > f && r.sane) {
                                (e.msg = 'invalid distance too far back'), (r.mode = t);
                                break n;
                            }
                            if (((A = 0), (N = p), 0 === _)) {
                                if (((A += d - T), T < b)) {
                                    b -= T;
                                    do R[o++] = p[A++];
                                    while (--T);
                                    (A = o - S), (N = R);
                                }
                            } else if (_ < T) {
                                if (((A += d + _ - T), (T -= _) < b)) {
                                    b -= T;
                                    do R[o++] = p[A++];
                                    while (--T);
                                    if (((A = 0), _ < b)) {
                                        b -= T = _;
                                        do R[o++] = p[A++];
                                        while (--T);
                                        (A = o - S), (N = R);
                                    }
                                }
                            } else if (((A += _ - T), T < b)) {
                                b -= T;
                                do R[o++] = p[A++];
                                while (--T);
                                (A = o - S), (N = R);
                            }
                            for (; b > 2; ) (R[o++] = N[A++]), (R[o++] = N[A++]), (R[o++] = N[A++]), (b -= 3);
                            b && ((R[o++] = N[A++]), b > 1 && (R[o++] = N[A++]));
                        } else {
                            A = o - S;
                            do (R[o++] = R[A++]), (R[o++] = R[A++]), (R[o++] = R[A++]), (b -= 3);
                            while (b > 2);
                            b && ((R[o++] = R[A++]), b > 1 && (R[o++] = R[A++]));
                        }
                    } else if ((64 & T) == 0) {
                        I = E[(65535 & I) + (h & ((1 << T) - 1))];
                        continue;
                    } else {
                        (e.msg = 'invalid distance code'), (r.mode = t);
                        break n;
                    }
                    break;
                }
            else if ((64 & T) == 0) {
                I = g[(65535 & I) + (h & ((1 << T) - 1))];
                continue;
            } else if (32 & T) {
                r.mode = n;
                break n;
            } else {
                (e.msg = 'invalid literal/length code'), (r.mode = t);
                break n;
            }
            break;
        }
    while (a < s && o < u);
    (a -= b = m >> 3), (m -= b << 3), (h &= (1 << m) - 1), (e.next_in = a), (e.next_out = o), (e.avail_in = a < s ? 5 + (s - a) : 5 - (a - s)), (e.avail_out = o < u ? 257 + (u - o) : 257 - (o - u)), (r.hold = h), (r.bits = m);
};
