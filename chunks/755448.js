var n = 30,
    r = 12;
e.exports = function (e, i) {
    var a, o, s, l, u, c, d, f, p, h, _, m, g, E, v, y, b, I, T, S, A, C, N, R, O;
    (a = e.state), (o = e.next_in), (R = e.input), (s = o + (e.avail_in - 5)), (l = e.next_out), (O = e.output), (u = l - (i - e.avail_out)), (c = l + (e.avail_out - 257)), (d = a.dmax), (f = a.wsize), (p = a.whave), (h = a.wnext), (_ = a.window), (m = a.hold), (g = a.bits), (E = a.lencode), (v = a.distcode), (y = (1 << a.lenbits) - 1), (b = (1 << a.distbits) - 1);
    n: do
        for (g < 15 && ((m += R[o++] << g), (g += 8), (m += R[o++] << g), (g += 8)), I = E[m & y]; ; ) {
            if (((m >>>= T = I >>> 24), (g -= T), 0 == (T = (I >>> 16) & 255))) O[l++] = 65535 & I;
            else if (16 & T)
                for (S = 65535 & I, (T &= 15) && (g < T && ((m += R[o++] << g), (g += 8)), (S += m & ((1 << T) - 1)), (m >>>= T), (g -= T)), g < 15 && ((m += R[o++] << g), (g += 8), (m += R[o++] << g), (g += 8)), I = v[m & b]; ; ) {
                    if (((m >>>= T = I >>> 24), (g -= T), 16 & (T = (I >>> 16) & 255))) {
                        if (((A = 65535 & I), g < (T &= 15) && ((m += R[o++] << g), (g += 8) < T && ((m += R[o++] << g), (g += 8))), (A += m & ((1 << T) - 1)) > d)) {
                            (e.msg = 'invalid distance too far back'), (a.mode = n);
                            break n;
                        }
                        if (((m >>>= T), (g -= T), A > (T = l - u))) {
                            if ((T = A - T) > p && a.sane) {
                                (e.msg = 'invalid distance too far back'), (a.mode = n);
                                break n;
                            }
                            if (((C = 0), (N = _), 0 === h)) {
                                if (((C += f - T), T < S)) {
                                    S -= T;
                                    do O[l++] = _[C++];
                                    while (--T);
                                    (C = l - A), (N = O);
                                }
                            } else if (h < T) {
                                if (((C += f + h - T), (T -= h) < S)) {
                                    S -= T;
                                    do O[l++] = _[C++];
                                    while (--T);
                                    if (((C = 0), h < S)) {
                                        S -= T = h;
                                        do O[l++] = _[C++];
                                        while (--T);
                                        (C = l - A), (N = O);
                                    }
                                }
                            } else if (((C += h - T), T < S)) {
                                S -= T;
                                do O[l++] = _[C++];
                                while (--T);
                                (C = l - A), (N = O);
                            }
                            for (; S > 2; ) (O[l++] = N[C++]), (O[l++] = N[C++]), (O[l++] = N[C++]), (S -= 3);
                            S && ((O[l++] = N[C++]), S > 1 && (O[l++] = N[C++]));
                        } else {
                            C = l - A;
                            do (O[l++] = O[C++]), (O[l++] = O[C++]), (O[l++] = O[C++]), (S -= 3);
                            while (S > 2);
                            S && ((O[l++] = O[C++]), S > 1 && (O[l++] = O[C++]));
                        }
                    } else if ((64 & T) == 0) {
                        I = v[(65535 & I) + (m & ((1 << T) - 1))];
                        continue;
                    } else {
                        (e.msg = 'invalid distance code'), (a.mode = n);
                        break n;
                    }
                    break;
                }
            else if ((64 & T) == 0) {
                I = E[(65535 & I) + (m & ((1 << T) - 1))];
                continue;
            } else if (32 & T) {
                a.mode = r;
                break n;
            } else {
                (e.msg = 'invalid literal/length code'), (a.mode = n);
                break n;
            }
            break;
        }
    while (o < s && l < c);
    (o -= S = g >> 3), (g -= S << 3), (m &= (1 << g) - 1), (e.next_in = o), (e.next_out = l), (e.avail_in = o < s ? 5 + (s - o) : 5 - (o - s)), (e.avail_out = l < c ? 257 + (c - l) : 257 - (l - c)), (a.hold = m), (a.bits = g);
};
