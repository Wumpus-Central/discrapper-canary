"use strict";
var r,
    i,
    a,
    s = n(549412),
    o = 4,
    l = 0,
    u = 1,
    c = 2;
function d(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
}
var _ = 0,
    f = 1,
    p = 2,
    h = 3,
    m = 258,
    g = 29,
    E = 256,
    A = 286,
    I = 30,
    T = 19,
    y = 573,
    S = 15,
    v = 16,
    C = 7,
    b = 256,
    N = 16,
    R = 17,
    O = 18,
    D = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
    L = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
    w = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    x = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    P = 512,
    M = Array(576);
d(M);
var k = Array(2 * I);
d(k);
var U = Array(P);
d(U);
var G = Array(m - h + 1);
d(G);
var V = Array(g);
d(V);
var F = Array(I);
function B(e, t, n, r, i) {
    (this.static_tree = e),
        (this.extra_bits = t),
        (this.extra_base = n),
        (this.elems = r),
        (this.max_length = i),
        (this.has_stree = e && e.length);
}
function j(e, t) {
    (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t);
}
function H(e) {
    return e < 256 ? U[e] : U[256 + (e >>> 7)];
}
function Y(e, t) {
    (e.pending_buf[e.pending++] = 255 & t), (e.pending_buf[e.pending++] = (t >>> 8) & 255);
}
function W(e, t, n) {
    e.bi_valid > v - n
        ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
          Y(e, e.bi_buf),
          (e.bi_buf = t >> (v - e.bi_valid)),
          (e.bi_valid += n - v))
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
function $(e) {
    16 === e.bi_valid
        ? (Y(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
        : e.bi_valid >= 8 && ((e.pending_buf[e.pending++] = 255 & e.bi_buf), (e.bi_buf >>= 8), (e.bi_valid -= 8));
}
function q(e, t) {
    var n,
        r,
        i,
        a,
        s,
        o,
        l = t.dyn_tree,
        u = t.max_code,
        c = t.stat_desc.static_tree,
        d = t.stat_desc.has_stree,
        _ = t.stat_desc.extra_bits,
        f = t.stat_desc.extra_base,
        p = t.stat_desc.max_length,
        h = 0;
    for (a = 0; a <= S; a++) e.bl_count[a] = 0;
    for (l[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < y; n++)
        (a = l[2 * l[2 * (r = e.heap[n]) + 1] + 1] + 1) > p && ((a = p), h++),
            (l[2 * r + 1] = a),
            !(r > u) &&
                (e.bl_count[a]++,
                (s = 0),
                r >= f && (s = _[r - f]),
                (o = l[2 * r]),
                (e.opt_len += o * (a + s)),
                d && (e.static_len += o * (c[2 * r + 1] + s)));
    if (0 !== h) {
        do {
            for (a = p - 1; 0 === e.bl_count[a]; ) a--;
            e.bl_count[a]--, (e.bl_count[a + 1] += 2), e.bl_count[p]--, (h -= 2);
        } while (h > 0);
        for (a = p; 0 !== a; a--)
            for (r = e.bl_count[a]; 0 !== r; )
                !((i = e.heap[--n]) > u) &&
                    (l[2 * i + 1] !== a && ((e.opt_len += (a - l[2 * i + 1]) * l[2 * i]), (l[2 * i + 1] = a)), r--);
    }
}
function Z(e, t, n) {
    var r,
        i,
        a = Array(S + 1),
        s = 0;
    for (r = 1; r <= S; r++) a[r] = s = (s + n[r - 1]) << 1;
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
        l = Array(S + 1);
    for (s = 0, n = 0; s < g - 1; s++) for (e = 0, V[s] = n; e < 1 << D[s]; e++) G[n++] = s;
    for (G[n - 1] = s, o = 0, s = 0; s < 16; s++) for (e = 0, F[s] = o; e < 1 << L[s]; e++) U[o++] = s;
    for (o >>= 7; s < I; s++) for (e = 0, F[s] = o << 7; e < 1 << (L[s] - 7); e++) U[256 + o++] = s;
    for (t = 0; t <= S; t++) l[t] = 0;
    for (e = 0; e <= 143; ) (M[2 * e + 1] = 8), e++, l[8]++;
    for (; e <= 255; ) (M[2 * e + 1] = 9), e++, l[9]++;
    for (; e <= 279; ) (M[2 * e + 1] = 7), e++, l[7]++;
    for (; e <= 287; ) (M[2 * e + 1] = 8), e++, l[8]++;
    for (Z(M, A + 1, l), e = 0; e < I; e++) (k[2 * e + 1] = 5), (k[2 * e] = z(e, 5));
    (r = new B(M, D, E + 1, A, S)), (i = new B(k, L, 0, I, S)), (a = new B([], w, 0, T, C));
}
function X(e) {
    var t;
    for (t = 0; t < A; t++) e.dyn_ltree[2 * t] = 0;
    for (t = 0; t < I; t++) e.dyn_dtree[2 * t] = 0;
    for (t = 0; t < T; t++) e.bl_tree[2 * t] = 0;
    (e.dyn_ltree[2 * b] = 1), (e.opt_len = e.static_len = 0), (e.last_lit = e.matches = 0);
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
                    : (K(e, (a = G[i]) + E + 1, t),
                      0 !== (s = D[a]) && W(e, (i -= V[a]), s),
                      K(e, (a = H(--r)), n),
                      0 !== (s = L[a]) && W(e, (r -= F[a]), s));
        while (o < e.last_lit);
    K(e, b, t);
}
function ei(e, t) {
    var n,
        r,
        i,
        a = t.dyn_tree,
        s = t.stat_desc.static_tree,
        o = t.stat_desc.has_stree,
        l = t.stat_desc.elems,
        u = -1;
    for (n = 0, e.heap_len = 0, e.heap_max = y; n < l; n++)
        0 !== a[2 * n] ? ((e.heap[++e.heap_len] = u = n), (e.depth[n] = 0)) : (a[2 * n + 1] = 0);
    for (; e.heap_len < 2; )
        (a[2 * (i = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1),
            (e.depth[i] = 0),
            e.opt_len--,
            o && (e.static_len -= s[2 * i + 1]);
    for (t.max_code = u, n = e.heap_len >> 1; n >= 1; n--) en(e, a, n);
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
    (e.heap[--e.heap_max] = e.heap[1]), q(e, t), Z(a, u, e.bl_count);
}
function ea(e, t, n) {
    var r,
        i,
        a = -1,
        s = t[1],
        o = 0,
        l = 7,
        u = 4;
    for (0 === s && ((l = 138), (u = 3)), t[(n + 1) * 2 + 1] = 65535, r = 0; r <= n; r++)
        (i = s),
            (s = t[(r + 1) * 2 + 1]),
            (++o < l && i === s) ||
                (o < u
                    ? (e.bl_tree[2 * i] += o)
                    : 0 !== i
                      ? (i !== a && e.bl_tree[2 * i]++, e.bl_tree[2 * N]++)
                      : o <= 10
                        ? e.bl_tree[2 * R]++
                        : e.bl_tree[2 * O]++,
                (o = 0),
                (a = i),
                0 === s ? ((l = 138), (u = 3)) : i === s ? ((l = 6), (u = 3)) : ((l = 7), (u = 4)));
}
function es(e, t, n) {
    var r,
        i,
        a = -1,
        s = t[1],
        o = 0,
        l = 7,
        u = 4;
    for (0 === s && ((l = 138), (u = 3)), r = 0; r <= n; r++)
        if (((i = s), (s = t[(r + 1) * 2 + 1]), !(++o < l) || i !== s)) {
            if (o < u)
                do K(e, i, e.bl_tree);
                while (0 != --o);
            else
                0 !== i
                    ? (i !== a && (K(e, i, e.bl_tree), o--), K(e, N, e.bl_tree), W(e, o - 3, 2))
                    : o <= 10
                      ? (K(e, R, e.bl_tree), W(e, o - 3, 3))
                      : (K(e, O, e.bl_tree), W(e, o - 11, 7));
            (o = 0), (a = i), 0 === s ? ((l = 138), (u = 3)) : i === s ? ((l = 6), (u = 3)) : ((l = 7), (u = 4));
        }
}
function eo(e) {
    var t;
    for (
        ea(e, e.dyn_ltree, e.l_desc.max_code), ea(e, e.dyn_dtree, e.d_desc.max_code), ei(e, e.bl_desc), t = T - 1;
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
function eu(e) {
    var t,
        n = 0xf3ffc07f;
    for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && 0 !== e.dyn_ltree[2 * t]) return l;
    if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return u;
    for (t = 32; t < E; t++) if (0 !== e.dyn_ltree[2 * t]) return u;
    return l;
}
d(F);
var ec = !1;
function ed(e, t, n, r) {
    W(e, (_ << 1) + +!!r, 3), ee(e, t, n, !0);
}
function e_(e) {
    W(e, f << 1, 3), K(e, b, M), $(e);
}
function ef(e, t, n, r) {
    var i,
        a,
        s = 0;
    e.level > 0
        ? (e.strm.data_type === c && (e.strm.data_type = eu(e)),
          ei(e, e.l_desc),
          ei(e, e.d_desc),
          (s = eo(e)),
          (i = (e.opt_len + 3 + 7) >>> 3),
          (a = (e.static_len + 3 + 7) >>> 3) <= i && (i = a))
        : (i = a = n + 5),
        n + 4 <= i && -1 !== t
            ? ed(e, t, n, r)
            : e.strategy === o || a === i
              ? (W(e, (f << 1) + +!!r, 3), er(e, M, k))
              : (W(e, (p << 1) + +!!r, 3),
                el(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1),
                er(e, e.dyn_ltree, e.dyn_dtree)),
        X(e),
        r && J(e);
}
function ep(e, t, n) {
    return (
        (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255),
        (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
        (e.pending_buf[e.l_buf + e.last_lit] = 255 & n),
        e.last_lit++,
        0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[(G[n] + E + 1) * 2]++, e.dyn_dtree[2 * H(t)]++),
        e.last_lit === e.lit_bufsize - 1
    );
}
(t._tr_init = function (e) {
    ec || (Q(), (ec = !0)),
        (e.l_desc = new j(e.dyn_ltree, r)),
        (e.d_desc = new j(e.dyn_dtree, i)),
        (e.bl_desc = new j(e.bl_tree, a)),
        (e.bi_buf = 0),
        (e.bi_valid = 0),
        X(e);
}),
    (t._tr_stored_block = ed),
    (t._tr_flush_block = ef),
    (t._tr_tally = ep),
    (t._tr_align = e_);
