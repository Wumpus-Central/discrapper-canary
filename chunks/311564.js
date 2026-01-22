var t = 30,
    n = 12;
e.exports = function (e, r) {
    var i, a, s, o, l, c, u, d, f, p, _, h, m, g, E, b, y, O, A, v, S, I, T, C, N;
    (i = e.state),
        (a = e.next_in),
        (C = e.input),
        (s = a + (e.avail_in - 5)),
        (o = e.next_out),
        (N = e.output),
        (l = o - (r - e.avail_out)),
        (c = o + (e.avail_out - 257)),
        (u = i.dmax),
        (d = i.wsize),
        (f = i.whave),
        (p = i.wnext),
        (_ = i.window),
        (h = i.hold),
        (m = i.bits),
        (g = i.lencode),
        (E = i.distcode),
        (b = (1 << i.lenbits) - 1),
        (y = (1 << i.distbits) - 1);
    r: do
        for (m < 15 && ((h += C[a++] << m), (m += 8), (h += C[a++] << m), (m += 8)), O = g[h & b]; ; ) {
            if (((h >>>= A = O >>> 24), (m -= A), 0 == (A = (O >>> 16) & 255))) N[o++] = 65535 & O;
            else if (16 & A)
                for (
                    v = 65535 & O,
                        (A &= 15) &&
                            (m < A && ((h += C[a++] << m), (m += 8)), (v += h & ((1 << A) - 1)), (h >>>= A), (m -= A)),
                        m < 15 && ((h += C[a++] << m), (m += 8), (h += C[a++] << m), (m += 8)),
                        O = E[h & y];
                    ;
                ) {
                    if (((h >>>= A = O >>> 24), (m -= A), 16 & (A = (O >>> 16) & 255))) {
                        if (
                            ((S = 65535 & O),
                            m < (A &= 15) && ((h += C[a++] << m), (m += 8) < A && ((h += C[a++] << m), (m += 8))),
                            (S += h & ((1 << A) - 1)) > u)
                        ) {
                            (e.msg = "invalid distance too far back"), (i.mode = t);
                            break r;
                        }
                        if (((h >>>= A), (m -= A), S > (A = o - l))) {
                            if ((A = S - A) > f && i.sane) {
                                (e.msg = "invalid distance too far back"), (i.mode = t);
                                break r;
                            }
                            if (((I = 0), (T = _), 0 === p)) {
                                if (((I += d - A), A < v)) {
                                    v -= A;
                                    do N[o++] = _[I++];
                                    while (--A);
                                    (I = o - S), (T = N);
                                }
                            } else if (p < A) {
                                if (((I += d + p - A), (A -= p) < v)) {
                                    v -= A;
                                    do N[o++] = _[I++];
                                    while (--A);
                                    if (((I = 0), p < v)) {
                                        v -= A = p;
                                        do N[o++] = _[I++];
                                        while (--A);
                                        (I = o - S), (T = N);
                                    }
                                }
                            } else if (((I += p - A), A < v)) {
                                v -= A;
                                do N[o++] = _[I++];
                                while (--A);
                                (I = o - S), (T = N);
                            }
                            for (; v > 2; ) (N[o++] = T[I++]), (N[o++] = T[I++]), (N[o++] = T[I++]), (v -= 3);
                            v && ((N[o++] = T[I++]), v > 1 && (N[o++] = T[I++]));
                        } else {
                            I = o - S;
                            do (N[o++] = N[I++]), (N[o++] = N[I++]), (N[o++] = N[I++]), (v -= 3);
                            while (v > 2);
                            v && ((N[o++] = N[I++]), v > 1 && (N[o++] = N[I++]));
                        }
                    } else if ((64 & A) == 0) {
                        O = E[(65535 & O) + (h & ((1 << A) - 1))];
                        continue;
                    } else {
                        (e.msg = "invalid distance code"), (i.mode = t);
                        break r;
                    }
                    break;
                }
            else if ((64 & A) == 0) {
                O = g[(65535 & O) + (h & ((1 << A) - 1))];
                continue;
            } else if (32 & A) {
                i.mode = n;
                break r;
            } else {
                (e.msg = "invalid literal/length code"), (i.mode = t);
                break r;
            }
            break;
        }
    while (a < s && o < c);
    (a -= v = m >> 3),
        (m -= v << 3),
        (h &= (1 << m) - 1),
        (e.next_in = a),
        (e.next_out = o),
        (e.avail_in = a < s ? 5 + (s - a) : 5 - (a - s)),
        (e.avail_out = o < c ? 257 + (c - o) : 257 - (o - c)),
        (i.hold = h),
        (i.bits = m);
};
