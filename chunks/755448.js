var t = 30,
    n = 12;
e.exports = function (e, r) {
    var i, a, o, s, l, c, u, d, f, _, p, h, m, g, E, b, y, O, v, I, S, T, A, N, C;
    (i = e.state), (a = e.next_in), (N = e.input), (o = a + (e.avail_in - 5)), (s = e.next_out), (C = e.output), (l = s - (r - e.avail_out)), (c = s + (e.avail_out - 257)), (u = i.dmax), (d = i.wsize), (f = i.whave), (_ = i.wnext), (p = i.window), (h = i.hold), (m = i.bits), (g = i.lencode), (E = i.distcode), (b = (1 << i.lenbits) - 1), (y = (1 << i.distbits) - 1);
    r: do
        for (m < 15 && ((h += N[a++] << m), (m += 8), (h += N[a++] << m), (m += 8)), O = g[h & b]; ; ) {
            if (((h >>>= v = O >>> 24), (m -= v), 0 == (v = (O >>> 16) & 255))) C[s++] = 65535 & O;
            else if (16 & v)
                for (I = 65535 & O, (v &= 15) && (m < v && ((h += N[a++] << m), (m += 8)), (I += h & ((1 << v) - 1)), (h >>>= v), (m -= v)), m < 15 && ((h += N[a++] << m), (m += 8), (h += N[a++] << m), (m += 8)), O = E[h & y]; ; ) {
                    if (((h >>>= v = O >>> 24), (m -= v), 16 & (v = (O >>> 16) & 255))) {
                        if (((S = 65535 & O), m < (v &= 15) && ((h += N[a++] << m), (m += 8) < v && ((h += N[a++] << m), (m += 8))), (S += h & ((1 << v) - 1)) > u)) {
                            (e.msg = 'invalid distance too far back'), (i.mode = t);
                            break r;
                        }
                        if (((h >>>= v), (m -= v), S > (v = s - l))) {
                            if ((v = S - v) > f && i.sane) {
                                (e.msg = 'invalid distance too far back'), (i.mode = t);
                                break r;
                            }
                            if (((T = 0), (A = p), 0 === _)) {
                                if (((T += d - v), v < I)) {
                                    I -= v;
                                    do C[s++] = p[T++];
                                    while (--v);
                                    (T = s - S), (A = C);
                                }
                            } else if (_ < v) {
                                if (((T += d + _ - v), (v -= _) < I)) {
                                    I -= v;
                                    do C[s++] = p[T++];
                                    while (--v);
                                    if (((T = 0), _ < I)) {
                                        I -= v = _;
                                        do C[s++] = p[T++];
                                        while (--v);
                                        (T = s - S), (A = C);
                                    }
                                }
                            } else if (((T += _ - v), v < I)) {
                                I -= v;
                                do C[s++] = p[T++];
                                while (--v);
                                (T = s - S), (A = C);
                            }
                            for (; I > 2; ) (C[s++] = A[T++]), (C[s++] = A[T++]), (C[s++] = A[T++]), (I -= 3);
                            I && ((C[s++] = A[T++]), I > 1 && (C[s++] = A[T++]));
                        } else {
                            T = s - S;
                            do (C[s++] = C[T++]), (C[s++] = C[T++]), (C[s++] = C[T++]), (I -= 3);
                            while (I > 2);
                            I && ((C[s++] = C[T++]), I > 1 && (C[s++] = C[T++]));
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
