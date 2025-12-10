var t = 30,
    n = 12;
e.exports = function (e, r) {
    var i, a, o, s, l, c, u, d, f, p, _, m, h, g, E, b, y, O, v, S, I, T, C, A, N;
    (i = e.state),
        (a = e.next_in),
        (A = e.input),
        (o = a + (e.avail_in - 5)),
        (s = e.next_out),
        (N = e.output),
        (l = s - (r - e.avail_out)),
        (c = s + (e.avail_out - 257)),
        (u = i.dmax),
        (d = i.wsize),
        (f = i.whave),
        (p = i.wnext),
        (_ = i.window),
        (m = i.hold),
        (h = i.bits),
        (g = i.lencode),
        (E = i.distcode),
        (b = (1 << i.lenbits) - 1),
        (y = (1 << i.distbits) - 1);
    r: do
        for (h < 15 && ((m += A[a++] << h), (h += 8), (m += A[a++] << h), (h += 8)), O = g[m & b]; ; ) {
            if (((m >>>= v = O >>> 24), (h -= v), 0 == (v = (O >>> 16) & 255))) N[s++] = 65535 & O;
            else if (16 & v)
                for (
                    S = 65535 & O,
                        (v &= 15) &&
                            (h < v && ((m += A[a++] << h), (h += 8)), (S += m & ((1 << v) - 1)), (m >>>= v), (h -= v)),
                        h < 15 && ((m += A[a++] << h), (h += 8), (m += A[a++] << h), (h += 8)),
                        O = E[m & y];
                    ;
                ) {
                    if (((m >>>= v = O >>> 24), (h -= v), 16 & (v = (O >>> 16) & 255))) {
                        if (
                            ((I = 65535 & O),
                            h < (v &= 15) && ((m += A[a++] << h), (h += 8) < v && ((m += A[a++] << h), (h += 8))),
                            (I += m & ((1 << v) - 1)) > u)
                        ) {
                            (e.msg = "invalid distance too far back"), (i.mode = t);
                            break r;
                        }
                        if (((m >>>= v), (h -= v), I > (v = s - l))) {
                            if ((v = I - v) > f && i.sane) {
                                (e.msg = "invalid distance too far back"), (i.mode = t);
                                break r;
                            }
                            if (((T = 0), (C = _), 0 === p)) {
                                if (((T += d - v), v < S)) {
                                    S -= v;
                                    do N[s++] = _[T++];
                                    while (--v);
                                    (T = s - I), (C = N);
                                }
                            } else if (p < v) {
                                if (((T += d + p - v), (v -= p) < S)) {
                                    S -= v;
                                    do N[s++] = _[T++];
                                    while (--v);
                                    if (((T = 0), p < S)) {
                                        S -= v = p;
                                        do N[s++] = _[T++];
                                        while (--v);
                                        (T = s - I), (C = N);
                                    }
                                }
                            } else if (((T += p - v), v < S)) {
                                S -= v;
                                do N[s++] = _[T++];
                                while (--v);
                                (T = s - I), (C = N);
                            }
                            for (; S > 2; ) (N[s++] = C[T++]), (N[s++] = C[T++]), (N[s++] = C[T++]), (S -= 3);
                            S && ((N[s++] = C[T++]), S > 1 && (N[s++] = C[T++]));
                        } else {
                            T = s - I;
                            do (N[s++] = N[T++]), (N[s++] = N[T++]), (N[s++] = N[T++]), (S -= 3);
                            while (S > 2);
                            S && ((N[s++] = N[T++]), S > 1 && (N[s++] = N[T++]));
                        }
                    } else if ((64 & v) == 0) {
                        O = E[(65535 & O) + (m & ((1 << v) - 1))];
                        continue;
                    } else {
                        (e.msg = "invalid distance code"), (i.mode = t);
                        break r;
                    }
                    break;
                }
            else if ((64 & v) == 0) {
                O = g[(65535 & O) + (m & ((1 << v) - 1))];
                continue;
            } else if (32 & v) {
                i.mode = n;
                break r;
            } else {
                (e.msg = "invalid literal/length code"), (i.mode = t);
                break r;
            }
            break;
        }
    while (a < o && s < c);
    (a -= S = h >> 3),
        (h -= S << 3),
        (m &= (1 << h) - 1),
        (e.next_in = a),
        (e.next_out = s),
        (e.avail_in = a < o ? 5 + (o - a) : 5 - (a - o)),
        (e.avail_out = s < c ? 257 + (c - s) : 257 - (s - c)),
        (i.hold = m),
        (i.bits = h);
};
