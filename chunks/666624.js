"use strict";
var r,
    i,
    s,
    a = n(549412);
function o(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
}
var l = 573,
    u = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
    d = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
    c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    _ = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    f = Array(576);
o(f);
var E = Array(60);
o(E);
var h = Array(512);
o(h);
var p = Array(256);
o(p);
var m = Array(29);
o(m);
var g = Array(30);
function A(e, t, n, r, i) {
    (this.static_tree = e),
        (this.extra_bits = t),
        (this.extra_base = n),
        (this.elems = r),
        (this.max_length = i),
        (this.has_stree = e && e.length);
}
function I(e, t) {
    (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t);
}
function T(e) {
    return e < 256 ? h[e] : h[256 + (e >>> 7)];
}
function S(e, t) {
    (e.pending_buf[e.pending++] = 255 & t), (e.pending_buf[e.pending++] = (t >>> 8) & 255);
}
function y(e, t, n) {
    e.bi_valid > 16 - n
        ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
          S(e, e.bi_buf),
          (e.bi_buf = t >> (16 - e.bi_valid)),
          (e.bi_valid += n - 16))
        : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += n));
}
function N(e, t, n) {
    y(e, n[2 * t], n[2 * t + 1]);
}
function O(e, t) {
    var n = 0;
    do (n |= 1 & e), (e >>>= 1), (n <<= 1);
    while (--t > 0);
    return n >>> 1;
}
function R(e, t, n) {
    var r,
        i,
        s = Array(16),
        a = 0;
    for (r = 1; r <= 15; r++) s[r] = a = (a + n[r - 1]) << 1;
    for (i = 0; i <= t; i++) {
        var o = e[2 * i + 1];
        0 !== o && (e[2 * i] = O(s[o]++, o));
    }
}
function v(e) {
    var t;
    for (t = 0; t < 286; t++) e.dyn_ltree[2 * t] = 0;
    for (t = 0; t < 30; t++) e.dyn_dtree[2 * t] = 0;
    for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
    (e.dyn_ltree[512] = 1), (e.opt_len = e.static_len = 0), (e.last_lit = e.matches = 0);
}
function C(e) {
    e.bi_valid > 8 ? S(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
        (e.bi_buf = 0),
        (e.bi_valid = 0);
}
function b(e, t, n, r) {
    var i = 2 * t,
        s = 2 * n;
    return e[i] < e[s] || (e[i] === e[s] && r[t] <= r[n]);
}
function D(e, t, n) {
    for (
        var r = e.heap[n], i = n << 1;
        i <= e.heap_len &&
        (i < e.heap_len && b(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !b(t, r, e.heap[i], e.depth));
    )
        (e.heap[n] = e.heap[i]), (n = i), (i <<= 1);
    e.heap[n] = r;
}
function L(e, t, n) {
    var r,
        i,
        s,
        a,
        o = 0;
    if (0 !== e.last_lit)
        do
            (r = (e.pending_buf[e.d_buf + 2 * o] << 8) | e.pending_buf[e.d_buf + 2 * o + 1]),
                (i = e.pending_buf[e.l_buf + o]),
                o++,
                0 === r
                    ? N(e, i, t)
                    : (N(e, (s = p[i]) + 256 + 1, t),
                      0 !== (a = u[s]) && y(e, (i -= m[s]), a),
                      N(e, (s = T(--r)), n),
                      0 !== (a = d[s]) && y(e, (r -= g[s]), a));
        while (o < e.last_lit);
    N(e, 256, t);
}
function w(e, t) {
    var n,
        r,
        i,
        s = t.dyn_tree,
        a = t.stat_desc.static_tree,
        o = t.stat_desc.has_stree,
        u = t.stat_desc.elems,
        d = -1;
    for (n = 0, e.heap_len = 0, e.heap_max = l; n < u; n++)
        0 !== s[2 * n] ? ((e.heap[++e.heap_len] = d = n), (e.depth[n] = 0)) : (s[2 * n + 1] = 0);
    for (; e.heap_len < 2; )
        (s[2 * (i = e.heap[++e.heap_len] = d < 2 ? ++d : 0)] = 1),
            (e.depth[i] = 0),
            e.opt_len--,
            o && (e.static_len -= a[2 * i + 1]);
    for (t.max_code = d, n = e.heap_len >> 1; n >= 1; n--) D(e, s, n);
    i = u;
    do
        (n = e.heap[1]),
            (e.heap[1] = e.heap[e.heap_len--]),
            D(e, s, 1),
            (r = e.heap[1]),
            (e.heap[--e.heap_max] = n),
            (e.heap[--e.heap_max] = r),
            (s[2 * i] = s[2 * n] + s[2 * r]),
            (e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1),
            (s[2 * n + 1] = s[2 * r + 1] = i),
            (e.heap[1] = i++),
            D(e, s, 1);
    while (e.heap_len >= 2);
    (e.heap[--e.heap_max] = e.heap[1]),
        (function (e, t) {
            var n,
                r,
                i,
                s,
                a,
                o,
                u = t.dyn_tree,
                d = t.max_code,
                c = t.stat_desc.static_tree,
                _ = t.stat_desc.has_stree,
                f = t.stat_desc.extra_bits,
                E = t.stat_desc.extra_base,
                h = t.stat_desc.max_length,
                p = 0;
            for (s = 0; s <= 15; s++) e.bl_count[s] = 0;
            for (u[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < l; n++)
                (s = u[2 * u[2 * (r = e.heap[n]) + 1] + 1] + 1) > h && ((s = h), p++),
                    (u[2 * r + 1] = s),
                    !(r > d) &&
                        (e.bl_count[s]++,
                        (a = 0),
                        r >= E && (a = f[r - E]),
                        (o = u[2 * r]),
                        (e.opt_len += o * (s + a)),
                        _ && (e.static_len += o * (c[2 * r + 1] + a)));
            if (0 !== p) {
                do {
                    for (s = h - 1; 0 === e.bl_count[s]; ) s--;
                    e.bl_count[s]--, (e.bl_count[s + 1] += 2), e.bl_count[h]--, (p -= 2);
                } while (p > 0);
                for (s = h; 0 !== s; s--)
                    for (r = e.bl_count[s]; 0 !== r; )
                        !((i = e.heap[--n]) > d) &&
                            (u[2 * i + 1] !== s && ((e.opt_len += (s - u[2 * i + 1]) * u[2 * i]), (u[2 * i + 1] = s)),
                            r--);
            }
        })(e, t),
        R(s, d, e.bl_count);
}
function M(e, t, n) {
    var r,
        i,
        s = -1,
        a = t[1],
        o = 0,
        l = 7,
        u = 4;
    for (0 === a && ((l = 138), (u = 3)), t[(n + 1) * 2 + 1] = 65535, r = 0; r <= n; r++)
        (i = a),
            (a = t[(r + 1) * 2 + 1]),
            (++o < l && i === a) ||
                (o < u
                    ? (e.bl_tree[2 * i] += o)
                    : 0 !== i
                      ? (i !== s && e.bl_tree[2 * i]++, e.bl_tree[32]++)
                      : o <= 10
                        ? e.bl_tree[34]++
                        : e.bl_tree[36]++,
                (o = 0),
                (s = i),
                0 === a ? ((l = 138), (u = 3)) : i === a ? ((l = 6), (u = 3)) : ((l = 7), (u = 4)));
}
function P(e, t, n) {
    var r,
        i,
        s = -1,
        a = t[1],
        o = 0,
        l = 7,
        u = 4;
    for (0 === a && ((l = 138), (u = 3)), r = 0; r <= n; r++)
        if (((i = a), (a = t[(r + 1) * 2 + 1]), !(++o < l) || i !== a)) {
            if (o < u)
                do N(e, i, e.bl_tree);
                while (0 != --o);
            else
                0 !== i
                    ? (i !== s && (N(e, i, e.bl_tree), o--), N(e, 16, e.bl_tree), y(e, o - 3, 2))
                    : o <= 10
                      ? (N(e, 17, e.bl_tree), y(e, o - 3, 3))
                      : (N(e, 18, e.bl_tree), y(e, o - 11, 7));
            (o = 0), (s = i), 0 === a ? ((l = 138), (u = 3)) : i === a ? ((l = 6), (u = 3)) : ((l = 7), (u = 4));
        }
}
o(g);
var U = !1;
function k(e, t, n, r) {
    y(e, 0 + +!!r, 3), C(e), S(e, n), S(e, ~n), a.arraySet(e.pending_buf, e.window, t, n, e.pending), (e.pending += n);
}
(t._tr_init = function (e) {
    U ||
        (!(function () {
            var e,
                t,
                n,
                a,
                o,
                l = Array(16);
            for (a = 0, n = 0; a < 28; a++) for (e = 0, m[a] = n; e < 1 << u[a]; e++) p[n++] = a;
            for (p[n - 1] = a, o = 0, a = 0; a < 16; a++) for (e = 0, g[a] = o; e < 1 << d[a]; e++) h[o++] = a;
            for (o >>= 7; a < 30; a++) for (e = 0, g[a] = o << 7; e < 1 << (d[a] - 7); e++) h[256 + o++] = a;
            for (t = 0; t <= 15; t++) l[t] = 0;
            for (e = 0; e <= 143; ) (f[2 * e + 1] = 8), e++, l[8]++;
            for (; e <= 255; ) (f[2 * e + 1] = 9), e++, l[9]++;
            for (; e <= 279; ) (f[2 * e + 1] = 7), e++, l[7]++;
            for (; e <= 287; ) (f[2 * e + 1] = 8), e++, l[8]++;
            for (R(f, 287, l), e = 0; e < 30; e++) (E[2 * e + 1] = 5), (E[2 * e] = O(e, 5));
            (r = new A(f, u, 257, 286, 15)), (i = new A(E, d, 0, 30, 15)), (s = new A([], c, 0, 19, 7));
        })(),
        (U = !0)),
        (e.l_desc = new I(e.dyn_ltree, r)),
        (e.d_desc = new I(e.dyn_dtree, i)),
        (e.bl_desc = new I(e.bl_tree, s)),
        (e.bi_buf = 0),
        (e.bi_valid = 0),
        v(e);
}),
    (t._tr_stored_block = k),
    (t._tr_flush_block = function (e, t, n, r) {
        var i,
            s,
            a = 0;
        e.level > 0
            ? (2 === e.strm.data_type &&
                  (e.strm.data_type = (function (e) {
                      var t,
                          n = 0xf3ffc07f;
                      for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && 0 !== e.dyn_ltree[2 * t]) return 0;
                      if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1;
                      for (t = 32; t < 256; t++) if (0 !== e.dyn_ltree[2 * t]) return 1;
                      return 0;
                  })(e)),
              w(e, e.l_desc),
              w(e, e.d_desc),
              (a = (function (e) {
                  var t;
                  for (
                      M(e, e.dyn_ltree, e.l_desc.max_code),
                          M(e, e.dyn_dtree, e.d_desc.max_code),
                          w(e, e.bl_desc),
                          t = 18;
                      t >= 3 && 0 === e.bl_tree[2 * _[t] + 1];
                      t--
                  );
                  return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
              })(e)),
              (i = (e.opt_len + 3 + 7) >>> 3),
              (s = (e.static_len + 3 + 7) >>> 3) <= i && (i = s))
            : (i = s = n + 5),
            n + 4 <= i && -1 !== t
                ? k(e, t, n, r)
                : 4 === e.strategy || s === i
                  ? (y(e, 2 + +!!r, 3), L(e, f, E))
                  : (y(e, 4 + +!!r, 3),
                    (function (e, t, n, r) {
                        var i;
                        for (y(e, t - 257, 5), y(e, n - 1, 5), y(e, r - 4, 4), i = 0; i < r; i++)
                            y(e, e.bl_tree[2 * _[i] + 1], 3);
                        P(e, e.dyn_ltree, t - 1), P(e, e.dyn_dtree, n - 1);
                    })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1),
                    L(e, e.dyn_ltree, e.dyn_dtree)),
            v(e),
            r && C(e);
    }),
    (t._tr_tally = function (e, t, n) {
        return (
            (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255),
            (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
            (e.pending_buf[e.l_buf + e.last_lit] = 255 & n),
            e.last_lit++,
            0 === t
                ? e.dyn_ltree[2 * n]++
                : (e.matches++, t--, e.dyn_ltree[(p[n] + 256 + 1) * 2]++, e.dyn_dtree[2 * T(t)]++),
            e.last_lit === e.lit_bufsize - 1
        );
    }),
    (t._tr_align = function (e) {
        y(e, 2, 3),
            N(e, 256, f),
            16 === e.bi_valid
                ? (S(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
                : e.bi_valid >= 8 &&
                  ((e.pending_buf[e.pending++] = 255 & e.bi_buf), (e.bi_buf >>= 8), (e.bi_valid -= 8));
    });
