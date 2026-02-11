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
    h = 2,
    p = 3,
    g = 258,
    E = 29,
    A = 256,
    I = 286,
    T = 30,
    y = 19,
    S = 573,
    v = 15,
    C = 16,
    b = 7,
    N = 256,
    R = 16,
    O = 17,
    D = 18,
    L = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
    w = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
    x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    P = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    M = 512,
    k = Array(576);
d(k);
var U = Array(2 * T);
d(U);
var G = Array(M);
d(G);
var F = Array(g - p + 1);
d(F);
var V = Array(E);
d(V);
var B = Array(T);
function j(e, t, n, r, i) {
    (this.static_tree = e),
        (this.extra_bits = t),
        (this.extra_base = n),
        (this.elems = r),
        (this.max_length = i),
        (this.has_stree = e && e.length);
}
function H(e, t) {
    (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t);
}
function Y(e) {
    return e < 256 ? G[e] : G[256 + (e >>> 7)];
}
function W(e, t) {
    (e.pending_buf[e.pending++] = 255 & t), (e.pending_buf[e.pending++] = (t >>> 8) & 255);
}
function K(e, t, n) {
    e.bi_valid > C - n
        ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
          W(e, e.bi_buf),
          (e.bi_buf = t >> (C - e.bi_valid)),
          (e.bi_valid += n - C))
        : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += n));
}
function $(e, t, n) {
    K(e, n[2 * t], n[2 * t + 1]);
}
function z(e, t) {
    var n = 0;
    do (n |= 1 & e), (e >>>= 1), (n <<= 1);
    while (--t > 0);
    return n >>> 1;
}
function q(e) {
    16 === e.bi_valid
        ? (W(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
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
        u = t.max_code,
        c = t.stat_desc.static_tree,
        d = t.stat_desc.has_stree,
        _ = t.stat_desc.extra_bits,
        f = t.stat_desc.extra_base,
        h = t.stat_desc.max_length,
        p = 0;
    for (a = 0; a <= v; a++) e.bl_count[a] = 0;
    for (l[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < S; n++)
        (a = l[2 * l[2 * (r = e.heap[n]) + 1] + 1] + 1) > h && ((a = h), p++),
            (l[2 * r + 1] = a),
            !(r > u) &&
                (e.bl_count[a]++,
                (s = 0),
                r >= f && (s = _[r - f]),
                (o = l[2 * r]),
                (e.opt_len += o * (a + s)),
                d && (e.static_len += o * (c[2 * r + 1] + s)));
    if (0 !== p) {
        do {
            for (a = h - 1; 0 === e.bl_count[a]; ) a--;
            e.bl_count[a]--, (e.bl_count[a + 1] += 2), e.bl_count[h]--, (p -= 2);
        } while (p > 0);
        for (a = h; 0 !== a; a--)
            for (r = e.bl_count[a]; 0 !== r; )
                !((i = e.heap[--n]) > u) &&
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
    for (s = 0, n = 0; s < E - 1; s++) for (e = 0, V[s] = n; e < 1 << L[s]; e++) F[n++] = s;
    for (F[n - 1] = s, o = 0, s = 0; s < 16; s++) for (e = 0, B[s] = o; e < 1 << w[s]; e++) G[o++] = s;
    for (o >>= 7; s < T; s++) for (e = 0, B[s] = o << 7; e < 1 << (w[s] - 7); e++) G[256 + o++] = s;
    for (t = 0; t <= v; t++) l[t] = 0;
    for (e = 0; e <= 143; ) (k[2 * e + 1] = 8), e++, l[8]++;
    for (; e <= 255; ) (k[2 * e + 1] = 9), e++, l[9]++;
    for (; e <= 279; ) (k[2 * e + 1] = 7), e++, l[7]++;
    for (; e <= 287; ) (k[2 * e + 1] = 8), e++, l[8]++;
    for (Z(k, I + 1, l), e = 0; e < T; e++) (U[2 * e + 1] = 5), (U[2 * e] = z(e, 5));
    (r = new j(k, L, A + 1, I, v)), (i = new j(U, w, 0, T, v)), (a = new j([], x, 0, y, b));
}
function J(e) {
    var t;
    for (t = 0; t < I; t++) e.dyn_ltree[2 * t] = 0;
    for (t = 0; t < T; t++) e.dyn_dtree[2 * t] = 0;
    for (t = 0; t < y; t++) e.bl_tree[2 * t] = 0;
    (e.dyn_ltree[2 * N] = 1), (e.opt_len = e.static_len = 0), (e.last_lit = e.matches = 0);
}
function ee(e) {
    e.bi_valid > 8 ? W(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
        (e.bi_buf = 0),
        (e.bi_valid = 0);
}
function et(e, t, n, r) {
    ee(e), r && (W(e, n), W(e, ~n)), s.arraySet(e.pending_buf, e.window, t, n, e.pending), (e.pending += n);
}
function en(e, t, n, r) {
    var i = 2 * t,
        a = 2 * n;
    return e[i] < e[a] || (e[i] === e[a] && r[t] <= r[n]);
}
function er(e, t, n) {
    for (
        var r = e.heap[n], i = n << 1;
        i <= e.heap_len &&
        (i < e.heap_len && en(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !en(t, r, e.heap[i], e.depth));
    )
        (e.heap[n] = e.heap[i]), (n = i), (i <<= 1);
    e.heap[n] = r;
}
function ei(e, t, n) {
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
                    ? $(e, i, t)
                    : ($(e, (a = F[i]) + A + 1, t),
                      0 !== (s = L[a]) && K(e, (i -= V[a]), s),
                      $(e, (a = Y(--r)), n),
                      0 !== (s = w[a]) && K(e, (r -= B[a]), s));
        while (o < e.last_lit);
    $(e, N, t);
}
function ea(e, t) {
    var n,
        r,
        i,
        a = t.dyn_tree,
        s = t.stat_desc.static_tree,
        o = t.stat_desc.has_stree,
        l = t.stat_desc.elems,
        u = -1;
    for (n = 0, e.heap_len = 0, e.heap_max = S; n < l; n++)
        0 !== a[2 * n] ? ((e.heap[++e.heap_len] = u = n), (e.depth[n] = 0)) : (a[2 * n + 1] = 0);
    for (; e.heap_len < 2; )
        (a[2 * (i = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1),
            (e.depth[i] = 0),
            e.opt_len--,
            o && (e.static_len -= s[2 * i + 1]);
    for (t.max_code = u, n = e.heap_len >> 1; n >= 1; n--) er(e, a, n);
    i = l;
    do
        (n = e.heap[1]),
            (e.heap[1] = e.heap[e.heap_len--]),
            er(e, a, 1),
            (r = e.heap[1]),
            (e.heap[--e.heap_max] = n),
            (e.heap[--e.heap_max] = r),
            (a[2 * i] = a[2 * n] + a[2 * r]),
            (e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1),
            (a[2 * n + 1] = a[2 * r + 1] = i),
            (e.heap[1] = i++),
            er(e, a, 1);
    while (e.heap_len >= 2);
    (e.heap[--e.heap_max] = e.heap[1]), X(e, t), Z(a, u, e.bl_count);
}
function es(e, t, n) {
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
                      ? (i !== a && e.bl_tree[2 * i]++, e.bl_tree[2 * R]++)
                      : o <= 10
                        ? e.bl_tree[2 * O]++
                        : e.bl_tree[2 * D]++,
                (o = 0),
                (a = i),
                0 === s ? ((l = 138), (u = 3)) : i === s ? ((l = 6), (u = 3)) : ((l = 7), (u = 4)));
}
function eo(e, t, n) {
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
                do $(e, i, e.bl_tree);
                while (0 != --o);
            else
                0 !== i
                    ? (i !== a && ($(e, i, e.bl_tree), o--), $(e, R, e.bl_tree), K(e, o - 3, 2))
                    : o <= 10
                      ? ($(e, O, e.bl_tree), K(e, o - 3, 3))
                      : ($(e, D, e.bl_tree), K(e, o - 11, 7));
            (o = 0), (a = i), 0 === s ? ((l = 138), (u = 3)) : i === s ? ((l = 6), (u = 3)) : ((l = 7), (u = 4));
        }
}
function el(e) {
    var t;
    for (
        es(e, e.dyn_ltree, e.l_desc.max_code), es(e, e.dyn_dtree, e.d_desc.max_code), ea(e, e.bl_desc), t = y - 1;
        t >= 3 && 0 === e.bl_tree[2 * P[t] + 1];
        t--
    );
    return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
}
function eu(e, t, n, r) {
    var i;
    for (K(e, t - 257, 5), K(e, n - 1, 5), K(e, r - 4, 4), i = 0; i < r; i++) K(e, e.bl_tree[2 * P[i] + 1], 3);
    eo(e, e.dyn_ltree, t - 1), eo(e, e.dyn_dtree, n - 1);
}
function ec(e) {
    var t,
        n = 0xf3ffc07f;
    for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && 0 !== e.dyn_ltree[2 * t]) return l;
    if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return u;
    for (t = 32; t < A; t++) if (0 !== e.dyn_ltree[2 * t]) return u;
    return l;
}
d(B);
var ed = !1;
function e_(e, t, n, r) {
    K(e, (_ << 1) + +!!r, 3), et(e, t, n, !0);
}
function ef(e) {
    K(e, f << 1, 3), $(e, N, k), q(e);
}
function eh(e, t, n, r) {
    var i,
        a,
        s = 0;
    e.level > 0
        ? (e.strm.data_type === c && (e.strm.data_type = ec(e)),
          ea(e, e.l_desc),
          ea(e, e.d_desc),
          (s = el(e)),
          (i = (e.opt_len + 3 + 7) >>> 3),
          (a = (e.static_len + 3 + 7) >>> 3) <= i && (i = a))
        : (i = a = n + 5),
        n + 4 <= i && -1 !== t
            ? e_(e, t, n, r)
            : e.strategy === o || a === i
              ? (K(e, (f << 1) + +!!r, 3), ei(e, k, U))
              : (K(e, (h << 1) + +!!r, 3),
                eu(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1),
                ei(e, e.dyn_ltree, e.dyn_dtree)),
        J(e),
        r && ee(e);
}
function ep(e, t, n) {
    return (
        (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255),
        (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
        (e.pending_buf[e.l_buf + e.last_lit] = 255 & n),
        e.last_lit++,
        0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[(F[n] + A + 1) * 2]++, e.dyn_dtree[2 * Y(t)]++),
        e.last_lit === e.lit_bufsize - 1
    );
}
(t._tr_init = function (e) {
    ed || (Q(), (ed = !0)),
        (e.l_desc = new H(e.dyn_ltree, r)),
        (e.d_desc = new H(e.dyn_dtree, i)),
        (e.bl_desc = new H(e.bl_tree, a)),
        (e.bi_buf = 0),
        (e.bi_valid = 0),
        J(e);
}),
    (t._tr_stored_block = e_),
    (t._tr_flush_block = eh),
    (t._tr_tally = ep),
    (t._tr_align = ef);
