var r,
    i,
    a,
    s = n(549412),
    o = 4,
    l = 0,
    c = 1,
    u = 2;

function d(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
}
var f = 0,
    p = 1,
    _ = 2,
    h = 3,
    m = 258,
    g = 29,
    E = 256,
    b = 286,
    y = 30,
    O = 19,
    A = 573,
    v = 15,
    S = 16,
    I = 7,
    T = 256,
    C = 16,
    N = 17,
    R = 18,
    w = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
    P = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
    D = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    x = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    L = 512,
    j = Array(576);
d(j);
var M = Array(2 * y);
d(M);
var k = Array(L);
d(k);
var U = Array(m - h + 1);
d(U);
var G = Array(g);
d(G);
var V = Array(y);

function F(e, t, n, r, i) {
    (this.static_tree = e),
        (this.extra_bits = t),
        (this.extra_base = n),
        (this.elems = r),
        (this.max_length = i),
        (this.has_stree = e && e.length);
}

function B(e, t) {
    (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t);
}

function H(e) {
    return e < 256 ? k[e] : k[256 + (e >>> 7)];
}

function Y(e, t) {
    (e.pending_buf[e.pending++] = 255 & t), (e.pending_buf[e.pending++] = (t >>> 8) & 255);
}

function W(e, t, n) {
    e.bi_valid > S - n
        ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
          Y(e, e.bi_buf),
          (e.bi_buf = t >> (S - e.bi_valid)),
          (e.bi_valid += n - S))
        : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += n));
}

function K(e, t, n) {
    W(e, n[2 * t], n[2 * t + 1]);
}

function z(e, t) {
    var n = 0;
    do (n |= 1 & e), (e >>>= 1), (n <<= 1);
    while (--t > 0);
    return n >>> 1;
}

function q(e) {
    16 === e.bi_valid
        ? (Y(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
        : e.bi_valid >= 8 && ((e.pending_buf[e.pending++] = 255 & e.bi_buf), (e.bi_buf >>= 8), (e.bi_valid -= 8));
}

function X(e, t) {
    var n,
        r,
        i,
        a,
        s,
        o,
        l = t.dyn_tree,
        c = t.max_code,
        u = t.stat_desc.static_tree,
        d = t.stat_desc.has_stree,
        f = t.stat_desc.extra_bits,
        p = t.stat_desc.extra_base,
        _ = t.stat_desc.max_length,
        h = 0;
    for (a = 0; a <= v; a++) e.bl_count[a] = 0;
    for (l[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < A; n++)
        (a = l[2 * l[2 * (r = e.heap[n]) + 1] + 1] + 1) > _ && ((a = _), h++),
            (l[2 * r + 1] = a),
            !(r > c) &&
                (e.bl_count[a]++,
                (s = 0),
                r >= p && (s = f[r - p]),
                (o = l[2 * r]),
                (e.opt_len += o * (a + s)),
                d && (e.static_len += o * (u[2 * r + 1] + s)));
    if (0 !== h) {
        do {
            for (a = _ - 1; 0 === e.bl_count[a]; ) a--;
            e.bl_count[a]--, (e.bl_count[a + 1] += 2), e.bl_count[_]--, (h -= 2);
        } while (h > 0);
        for (a = _; 0 !== a; a--)
            for (r = e.bl_count[a]; 0 !== r; )
                !((i = e.heap[--n]) > c) &&
                    (l[2 * i + 1] !== a && ((e.opt_len += (a - l[2 * i + 1]) * l[2 * i]), (l[2 * i + 1] = a)), r--);
    }
}

function Z(e, t, n) {
    var r,
        i,
        a = Array(v + 1),
        s = 0;
    for (r = 1; r <= v; r++) a[r] = s = (s + n[r - 1]) << 1;
    for (i = 0; i <= t; i++) {
        var o = e[2 * i + 1];
        0 !== o && (e[2 * i] = z(a[o]++, o));
    }
}

function Q() {
    var e,
        t,
        n,
        s,
        o,
        l = Array(v + 1);
    for (s = 0, n = 0; s < g - 1; s++) for (e = 0, G[s] = n; e < 1 << w[s]; e++) U[n++] = s;
    for (U[n - 1] = s, o = 0, s = 0; s < 16; s++) for (e = 0, V[s] = o; e < 1 << P[s]; e++) k[o++] = s;
    for (o >>= 7; s < y; s++) for (e = 0, V[s] = o << 7; e < 1 << (P[s] - 7); e++) k[256 + o++] = s;
    for (t = 0; t <= v; t++) l[t] = 0;
    for (e = 0; e <= 143; ) (j[2 * e + 1] = 8), e++, l[8]++;
    for (; e <= 255; ) (j[2 * e + 1] = 9), e++, l[9]++;
    for (; e <= 279; ) (j[2 * e + 1] = 7), e++, l[7]++;
    for (; e <= 287; ) (j[2 * e + 1] = 8), e++, l[8]++;
    for (Z(j, b + 1, l), e = 0; e < y; e++) (M[2 * e + 1] = 5), (M[2 * e] = z(e, 5));
    (r = new F(j, w, E + 1, b, v)), (i = new F(M, P, 0, y, v)), (a = new F([], D, 0, O, I));
}

function $(e) {
    var t;
    for (t = 0; t < b; t++) e.dyn_ltree[2 * t] = 0;
    for (t = 0; t < y; t++) e.dyn_dtree[2 * t] = 0;
    for (t = 0; t < O; t++) e.bl_tree[2 * t] = 0;
    (e.dyn_ltree[2 * T] = 1), (e.opt_len = e.static_len = 0), (e.last_lit = e.matches = 0);
}

function J(e) {
    e.bi_valid > 8 ? Y(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
        (e.bi_buf = 0),
        (e.bi_valid = 0);
}

function ee(e, t, n, r) {
    J(e), r && (Y(e, n), Y(e, ~n)), s.arraySet(e.pending_buf, e.window, t, n, e.pending), (e.pending += n);
}

function et(e, t, n, r) {
    var i = 2 * t,
        a = 2 * n;
    return e[i] < e[a] || (e[i] === e[a] && r[t] <= r[n]);
}

function en(e, t, n) {
    for (
        var r = e.heap[n], i = n << 1;
        i <= e.heap_len &&
        (i < e.heap_len && et(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !et(t, r, e.heap[i], e.depth));
    )
        (e.heap[n] = e.heap[i]), (n = i), (i <<= 1);
    e.heap[n] = r;
}

function er(e, t, n) {
    var r,
        i,
        a,
        s,
        o = 0;
    if (0 !== e.last_lit)
        do
            (r = (e.pending_buf[e.d_buf + 2 * o] << 8) | e.pending_buf[e.d_buf + 2 * o + 1]),
                (i = e.pending_buf[e.l_buf + o]),
                o++,
                0 === r
                    ? K(e, i, t)
                    : (K(e, (a = U[i]) + E + 1, t),
                      0 !== (s = w[a]) && W(e, (i -= G[a]), s),
                      K(e, (a = H(--r)), n),
                      0 !== (s = P[a]) && W(e, (r -= V[a]), s));
        while (o < e.last_lit);
    K(e, T, t);
}

function ei(e, t) {
    var n,
        r,
        i,
        a = t.dyn_tree,
        s = t.stat_desc.static_tree,
        o = t.stat_desc.has_stree,
        l = t.stat_desc.elems,
        c = -1;
    for (n = 0, e.heap_len = 0, e.heap_max = A; n < l; n++)
        0 !== a[2 * n] ? ((e.heap[++e.heap_len] = c = n), (e.depth[n] = 0)) : (a[2 * n + 1] = 0);
    for (; e.heap_len < 2; )
        (a[2 * (i = e.heap[++e.heap_len] = c < 2 ? ++c : 0)] = 1),
            (e.depth[i] = 0),
            e.opt_len--,
            o && (e.static_len -= s[2 * i + 1]);
    for (t.max_code = c, n = e.heap_len >> 1; n >= 1; n--) en(e, a, n);
    i = l;
    do
        (n = e.heap[1]),
            (e.heap[1] = e.heap[e.heap_len--]),
            en(e, a, 1),
            (r = e.heap[1]),
            (e.heap[--e.heap_max] = n),
            (e.heap[--e.heap_max] = r),
            (a[2 * i] = a[2 * n] + a[2 * r]),
            (e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1),
            (a[2 * n + 1] = a[2 * r + 1] = i),
            (e.heap[1] = i++),
            en(e, a, 1);
    while (e.heap_len >= 2);
    (e.heap[--e.heap_max] = e.heap[1]), X(e, t), Z(a, c, e.bl_count);
}

function ea(e, t, n) {
    var r,
        i,
        a = -1,
        s = t[1],
        o = 0,
        l = 7,
        c = 4;
    for (0 === s && ((l = 138), (c = 3)), t[(n + 1) * 2 + 1] = 65535, r = 0; r <= n; r++)
        (i = s),
            (s = t[(r + 1) * 2 + 1]),
            (++o < l && i === s) ||
                (o < c
                    ? (e.bl_tree[2 * i] += o)
                    : 0 !== i
                      ? (i !== a && e.bl_tree[2 * i]++, e.bl_tree[2 * C]++)
                      : o <= 10
                        ? e.bl_tree[2 * N]++
                        : e.bl_tree[2 * R]++,
                (o = 0),
                (a = i),
                0 === s ? ((l = 138), (c = 3)) : i === s ? ((l = 6), (c = 3)) : ((l = 7), (c = 4)));
}

function es(e, t, n) {
    var r,
        i,
        a = -1,
        s = t[1],
        o = 0,
        l = 7,
        c = 4;
    for (0 === s && ((l = 138), (c = 3)), r = 0; r <= n; r++)
        if (((i = s), (s = t[(r + 1) * 2 + 1]), !(++o < l) || i !== s)) {
            if (o < c)
                do K(e, i, e.bl_tree);
                while (0 != --o);
            else
                0 !== i
                    ? (i !== a && (K(e, i, e.bl_tree), o--), K(e, C, e.bl_tree), W(e, o - 3, 2))
                    : o <= 10
                      ? (K(e, N, e.bl_tree), W(e, o - 3, 3))
                      : (K(e, R, e.bl_tree), W(e, o - 11, 7));
            (o = 0), (a = i), 0 === s ? ((l = 138), (c = 3)) : i === s ? ((l = 6), (c = 3)) : ((l = 7), (c = 4));
        }
}

function eo(e) {
    var t;
    for (
        ea(e, e.dyn_ltree, e.l_desc.max_code), ea(e, e.dyn_dtree, e.d_desc.max_code), ei(e, e.bl_desc), t = O - 1;
        t >= 3 && 0 === e.bl_tree[2 * x[t] + 1];
        t--
    );
    return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
}

function el(e, t, n, r) {
    var i;
    for (W(e, t - 257, 5), W(e, n - 1, 5), W(e, r - 4, 4), i = 0; i < r; i++) W(e, e.bl_tree[2 * x[i] + 1], 3);
    es(e, e.dyn_ltree, t - 1), es(e, e.dyn_dtree, n - 1);
}

function ec(e) {
    var t,
        n = 0xf3ffc07f;
    for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && 0 !== e.dyn_ltree[2 * t]) return l;
    if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return c;
    for (t = 32; t < E; t++) if (0 !== e.dyn_ltree[2 * t]) return c;
    return l;
}
d(V);
var eu = !1;

function ed(e, t, n, r) {
    W(e, (f << 1) + +!!r, 3), ee(e, t, n, !0);
}

function ef(e) {
    W(e, p << 1, 3), K(e, T, j), q(e);
}

function ep(e, t, n, r) {
    var i,
        a,
        s = 0;
    e.level > 0
        ? (e.strm.data_type === u && (e.strm.data_type = ec(e)),
          ei(e, e.l_desc),
          ei(e, e.d_desc),
          (s = eo(e)),
          (i = (e.opt_len + 3 + 7) >>> 3),
          (a = (e.static_len + 3 + 7) >>> 3) <= i && (i = a))
        : (i = a = n + 5),
        n + 4 <= i && -1 !== t
            ? ed(e, t, n, r)
            : e.strategy === o || a === i
              ? (W(e, (p << 1) + +!!r, 3), er(e, j, M))
              : (W(e, (_ << 1) + +!!r, 3),
                el(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1),
                er(e, e.dyn_ltree, e.dyn_dtree)),
        $(e),
        r && J(e);
}

function e_(e, t, n) {
    return (
        (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255),
        (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
        (e.pending_buf[e.l_buf + e.last_lit] = 255 & n),
        e.last_lit++,
        0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[(U[n] + E + 1) * 2]++, e.dyn_dtree[2 * H(t)]++),
        e.last_lit === e.lit_bufsize - 1
    );
}
(t._tr_init = function (e) {
    eu || (Q(), (eu = !0)),
        (e.l_desc = new B(e.dyn_ltree, r)),
        (e.d_desc = new B(e.dyn_dtree, i)),
        (e.bl_desc = new B(e.bl_tree, a)),
        (e.bi_buf = 0),
        (e.bi_valid = 0),
        $(e);
}),
    (t._tr_stored_block = ed),
    (t._tr_flush_block = ep),
    (t._tr_tally = e_),
    (t._tr_align = ef);
