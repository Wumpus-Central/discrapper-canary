var t = 30,
    n = 12;
e.exports = function (e, r) {
    var i, a, o, s, l, c, u, d, f, _, p, h, m, g, E, b, y, O, v, I, T, S, A, N, C;
    (i = e.state), (a = e.next_in), (N = e.input), (o = a + (e.avail_in - 5)), (s = e.next_out), (C = e.output), (l = s - (r - e.avail_out)), (c = s + (e.avail_out - 257)), (u = i.dmax), (d = i.wsize), (f = i.whave), (_ = i.wnext), (p = i.window), (h = i.hold), (m = i.bits), (g = i.lencode), (E = i.distcode), (b = (1 << i.lenbits) - 1), (y = (1 << i.distbits) - 1);
    r: do
        for (m < 15 && ((h += N[a++] << m), (m += 8), (h += N[a++] << m), (m += 8)), O = g[h & b]; ; ) {
            if (((h >>>= v = O >>> 24), (m -= v), 0 == (v = (O >>> 16) & 255))) C[s++] = 65535 & O;
            else if (16 & v)
                for (I = 65535 & O, (v &= 15) && (m < v && ((h += N[a++] << m), (m += 8)), (I += h & ((1 << v) - 1)), (h >>>= v), (m -= v)), m < 15 && ((h += N[a++] << m), (m += 8), (h += N[a++] << m), (m += 8)), O = E[h & y]; ; ) {
                    if (((h >>>= v = O >>> 24), (m -= v), 16 & (v = (O >>> 16) & 255))) {
                        if (((T = 65535 & O), m < (v &= 15) && ((h += N[a++] << m), (m += 8) < v && ((h += N[a++] << m), (m += 8))), (T += h & ((1 << v) - 1)) > u)) {
                            (e.msg = 'invalid distance too far back'), (i.mode = t);
                            break r;
                        }
                        if (((h >>>= v), (m -= v), T > (v = s - l))) {
                            if ((v = T - v) > f && i.sane) {
                                (e.msg = 'invalid distance too far back'), (i.mode = t);
                                break r;
                            }
                            if (((S = 0), (A = p), 0 === _)) {
                                if (((S += d - v), v < I)) {
                                    I -= v;
                                    do C[s++] = p[S++];
                                    while (--v);
                                    (S = s - T), (A = C);
                                }
                            } else if (_ < v) {
                                if (((S += d + _ - v), (v -= _) < I)) {
                                    I -= v;
                                    do C[s++] = p[S++];
                                    while (--v);
                                    if (((S = 0), _ < I)) {
                                        I -= v = _;
                                        do C[s++] = p[S++];
                                        while (--v);
                                        (S = s - T), (A = C);
                                    }
                                }
                            } else if (((S += _ - v), v < I)) {
                                I -= v;
                                do C[s++] = p[S++];
                                while (--v);
                                (S = s - T), (A = C);
                            }
                            for (; I > 2; ) (C[s++] = A[S++]), (C[s++] = A[S++]), (C[s++] = A[S++]), (I -= 3);
                            I && ((C[s++] = A[S++]), I > 1 && (C[s++] = A[S++]));
                        } else {
                            S = s - T;
                            do (C[s++] = C[S++]), (C[s++] = C[S++]), (C[s++] = C[S++]), (I -= 3);
                            while (I > 2);
                            I && ((C[s++] = C[S++]), I > 1 && (C[s++] = C[S++]));
                        }
                    } else if ((64 & v) == 0) {
                        O = E[(65535 & O) + (h & ((1 << v) - 1))];
                        continue;
                    } else {
                        (e.msg = 'invalid distance code'), (i.mode = t);
                        break r;
                    }
                    break;
                }
            else if ((64 & v) == 0) {
                O = g[(65535 & O) + (h & ((1 << v) - 1))];
                continue;
            } else if (32 & v) {
                i.mode = n;
                break r;
            } else {
                (e.msg = 'invalid literal/length code'), (i.mode = t);
                break r;
            }
            break;
        }
    while (a < o && s < c);
    (a -= I = m >> 3), (m -= I << 3), (h &= (1 << m) - 1), (e.next_in = a), (e.next_out = s), (e.avail_in = a < o ? 5 + (o - a) : 5 - (a - o)), (e.avail_out = s < c ? 257 + (c - s) : 257 - (s - c)), (i.hold = h), (i.bits = m);
};
