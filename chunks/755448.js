var t = 30,
    n = 12;
e.exports = function (e, r) {
    var i, o, a, s, l, c, u, d, f, _, p, h, m, g, E, b, y, v, O, I, S, T, N, A, C;
    (i = e.state), (o = e.next_in), (A = e.input), (a = o + (e.avail_in - 5)), (s = e.next_out), (C = e.output), (l = s - (r - e.avail_out)), (c = s + (e.avail_out - 257)), (u = i.dmax), (d = i.wsize), (f = i.whave), (_ = i.wnext), (p = i.window), (h = i.hold), (m = i.bits), (g = i.lencode), (E = i.distcode), (b = (1 << i.lenbits) - 1), (y = (1 << i.distbits) - 1);
    r: do
        for (m < 15 && ((h += A[o++] << m), (m += 8), (h += A[o++] << m), (m += 8)), v = g[h & b]; ; ) {
            if (((h >>>= O = v >>> 24), (m -= O), 0 == (O = (v >>> 16) & 255))) C[s++] = 65535 & v;
            else if (16 & O)
                for (I = 65535 & v, (O &= 15) && (m < O && ((h += A[o++] << m), (m += 8)), (I += h & ((1 << O) - 1)), (h >>>= O), (m -= O)), m < 15 && ((h += A[o++] << m), (m += 8), (h += A[o++] << m), (m += 8)), v = E[h & y]; ; ) {
                    if (((h >>>= O = v >>> 24), (m -= O), 16 & (O = (v >>> 16) & 255))) {
                        if (((S = 65535 & v), m < (O &= 15) && ((h += A[o++] << m), (m += 8) < O && ((h += A[o++] << m), (m += 8))), (S += h & ((1 << O) - 1)) > u)) {
                            (e.msg = 'invalid distance too far back'), (i.mode = t);
                            break r;
                        }
                        if (((h >>>= O), (m -= O), S > (O = s - l))) {
                            if ((O = S - O) > f && i.sane) {
                                (e.msg = 'invalid distance too far back'), (i.mode = t);
                                break r;
                            }
                            if (((T = 0), (N = p), 0 === _)) {
                                if (((T += d - O), O < I)) {
                                    I -= O;
                                    do C[s++] = p[T++];
                                    while (--O);
                                    (T = s - S), (N = C);
                                }
                            } else if (_ < O) {
                                if (((T += d + _ - O), (O -= _) < I)) {
                                    I -= O;
                                    do C[s++] = p[T++];
                                    while (--O);
                                    if (((T = 0), _ < I)) {
                                        I -= O = _;
                                        do C[s++] = p[T++];
                                        while (--O);
                                        (T = s - S), (N = C);
                                    }
                                }
                            } else if (((T += _ - O), O < I)) {
                                I -= O;
                                do C[s++] = p[T++];
                                while (--O);
                                (T = s - S), (N = C);
                            }
                            for (; I > 2; ) (C[s++] = N[T++]), (C[s++] = N[T++]), (C[s++] = N[T++]), (I -= 3);
                            I && ((C[s++] = N[T++]), I > 1 && (C[s++] = N[T++]));
                        } else {
                            T = s - S;
                            do (C[s++] = C[T++]), (C[s++] = C[T++]), (C[s++] = C[T++]), (I -= 3);
                            while (I > 2);
                            I && ((C[s++] = C[T++]), I > 1 && (C[s++] = C[T++]));
                        }
                    } else if ((64 & O) == 0) {
                        v = E[(65535 & v) + (h & ((1 << O) - 1))];
                        continue;
                    } else {
                        (e.msg = 'invalid distance code'), (i.mode = t);
                        break r;
                    }
                    break;
                }
            else if ((64 & O) == 0) {
                v = g[(65535 & v) + (h & ((1 << O) - 1))];
                continue;
            } else if (32 & O) {
                i.mode = n;
                break r;
            } else {
                (e.msg = 'invalid literal/length code'), (i.mode = t);
                break r;
            }
            break;
        }
    while (o < a && s < c);
    (o -= I = m >> 3), (m -= I << 3), (h &= (1 << m) - 1), (e.next_in = o), (e.next_out = s), (e.avail_in = o < a ? 5 + (a - o) : 5 - (o - a)), (e.avail_out = s < c ? 257 + (c - s) : 257 - (s - c)), (i.hold = h), (i.bits = m);
};
