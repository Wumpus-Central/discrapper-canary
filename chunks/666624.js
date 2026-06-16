"use strict";
var i,
    r,
    s,
    a = n(549412);
function o(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
}
var l = 573,
    u = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
    c = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
    d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    _ = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    h = Array(576);
o(h);
var f = Array(60);
o(f);
var p = Array(512);
o(p);
var E = Array(256);
o(E);
var m = Array(29);
o(m);
var g = Array(30);
function A(e, t, n, i, r) {
    (this.static_tree = e),
        (this.extra_bits = t),
        (this.extra_base = n),
        (this.elems = i),
        (this.max_length = r),
        (this.has_stree = e && e.length);
}
function I(e, t) {
    (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t);
}
function T(e) {
    return e < 256 ? p[e] : p[256 + (e >>> 7)];
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
function C(e, t, n) {
    y(e, n[2 * t], n[2 * t + 1]);
}
function N(e, t) {
    var n = 0;
    do (n |= 1 & e), (e >>>= 1), (n <<= 1);
    while (--t > 0);
    return n >>> 1;
}
function v(e, t, n) {
    var i,
        r,
        s = Array(16),
        a = 0;
    for (i = 1; i <= 15; i++) s[i] = a = (a + n[i - 1]) << 1;
    for (r = 0; r <= t; r++) {
        var o = e[2 * r + 1];
        0 !== o && (e[2 * r] = N(s[o]++, o));
    }
}
function R(e) {
    var t;
    for (t = 0; t < 286; t++) e.dyn_ltree[2 * t] = 0;
    for (t = 0; t < 30; t++) e.dyn_dtree[2 * t] = 0;
    for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
    (e.dyn_ltree[512] = 1), (e.opt_len = e.static_len = 0), (e.last_lit = e.matches = 0);
}
function O(e) {
    e.bi_valid > 8 ? S(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
        (e.bi_buf = 0),
        (e.bi_valid = 0);
}
function b(e, t, n, i) {
    var r = 2 * t,
        s = 2 * n;
    return e[r] < e[s] || (e[r] === e[s] && i[t] <= i[n]);
}
function D(e, t, n) {
    for (
        var i = e.heap[n], r = n << 1;
        r <= e.heap_len &&
        (r < e.heap_len && b(t, e.heap[r + 1], e.heap[r], e.depth) && r++, !b(t, i, e.heap[r], e.depth));
    )
        (e.heap[n] = e.heap[r]), (n = r), (r <<= 1);
    e.heap[n] = i;
}
function L(e, t, n) {
    var i,
        r,
        s,
        a,
        o = 0;
    if (0 !== e.last_lit)
        do
            (i = (e.pending_buf[e.d_buf + 2 * o] << 8) | e.pending_buf[e.d_buf + 2 * o + 1]),
                (r = e.pending_buf[e.l_buf + o]),
                o++,
                0 === i
                    ? C(e, r, t)
                    : (C(e, (s = E[r]) + 256 + 1, t),
                      0 !== (a = u[s]) && y(e, (r -= m[s]), a),
                      C(e, (s = T(--i)), n),
                      0 !== (a = c[s]) && y(e, (i -= g[s]), a));
        while (o < e.last_lit);
    C(e, 256, t);
}
function w(e, t) {
    var n,
        i,
        r,
        s = t.dyn_tree,
        a = t.stat_desc.static_tree,
        o = t.stat_desc.has_stree,
        u = t.stat_desc.elems,
        c = -1;
    for (n = 0, e.heap_len = 0, e.heap_max = l; n < u; n++)
        0 !== s[2 * n] ? ((e.heap[++e.heap_len] = c = n), (e.depth[n] = 0)) : (s[2 * n + 1] = 0);
    for (; e.heap_len < 2; )
        (s[2 * (r = e.heap[++e.heap_len] = c < 2 ? ++c : 0)] = 1),
            (e.depth[r] = 0),
            e.opt_len--,
            o && (e.static_len -= a[2 * r + 1]);
    for (t.max_code = c, n = e.heap_len >> 1; n >= 1; n--) D(e, s, n);
    r = u;
    do
        (n = e.heap[1]),
            (e.heap[1] = e.heap[e.heap_len--]),
            D(e, s, 1),
            (i = e.heap[1]),
            (e.heap[--e.heap_max] = n),
            (e.heap[--e.heap_max] = i),
            (s[2 * r] = s[2 * n] + s[2 * i]),
            (e.depth[r] = (e.depth[n] >= e.depth[i] ? e.depth[n] : e.depth[i]) + 1),
            (s[2 * n + 1] = s[2 * i + 1] = r),
            (e.heap[1] = r++),
            D(e, s, 1);
    while (e.heap_len >= 2);
    (e.heap[--e.heap_max] = e.heap[1]),
        (function (e, t) {
            var n,
                i,
                r,
                s,
                a,
                o,
                u = t.dyn_tree,
                c = t.max_code,
                d = t.stat_desc.static_tree,
                _ = t.stat_desc.has_stree,
                h = t.stat_desc.extra_bits,
                f = t.stat_desc.extra_base,
                p = t.stat_desc.max_length,
                E = 0;
            for (s = 0; s <= 15; s++) e.bl_count[s] = 0;
            for (u[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < l; n++)
                (s = u[2 * u[2 * (i = e.heap[n]) + 1] + 1] + 1) > p && ((s = p), E++),
                    (u[2 * i + 1] = s),
                    !(i > c) &&
                        (e.bl_count[s]++,
                        (a = 0),
                        i >= f && (a = h[i - f]),
                        (o = u[2 * i]),
                        (e.opt_len += o * (s + a)),
                        _ && (e.static_len += o * (d[2 * i + 1] + a)));
            if (0 !== E) {
                do {
                    for (s = p - 1; 0 === e.bl_count[s]; ) s--;
                    e.bl_count[s]--, (e.bl_count[s + 1] += 2), e.bl_count[p]--, (E -= 2);
                } while (E > 0);
                for (s = p; 0 !== s; s--)
                    for (i = e.bl_count[s]; 0 !== i; )
                        !((r = e.heap[--n]) > c) &&
                            (u[2 * r + 1] !== s && ((e.opt_len += (s - u[2 * r + 1]) * u[2 * r]), (u[2 * r + 1] = s)),
                            i--);
            }
        })(e, t),
        v(s, c, e.bl_count);
}
function M(e, t, n) {
    var i,
        r,
        s = -1,
        a = t[1],
        o = 0,
        l = 7,
        u = 4;
    for (0 === a && ((l = 138), (u = 3)), t[(n + 1) * 2 + 1] = 65535, i = 0; i <= n; i++)
        (r = a),
            (a = t[(i + 1) * 2 + 1]),
            (++o < l && r === a) ||
                (o < u
                    ? (e.bl_tree[2 * r] += o)
                    : 0 !== r
                      ? (r !== s && e.bl_tree[2 * r]++, e.bl_tree[32]++)
                      : o <= 10
                        ? e.bl_tree[34]++
                        : e.bl_tree[36]++,
                (o = 0),
                (s = r),
                0 === a ? ((l = 138), (u = 3)) : r === a ? ((l = 6), (u = 3)) : ((l = 7), (u = 4)));
}
function P(e, t, n) {
    var i,
        r,
        s = -1,
        a = t[1],
        o = 0,
        l = 7,
        u = 4;
    for (0 === a && ((l = 138), (u = 3)), i = 0; i <= n; i++)
        if (((r = a), (a = t[(i + 1) * 2 + 1]), !(++o < l) || r !== a)) {
            if (o < u)
                do C(e, r, e.bl_tree);
                while (0 != --o);
            else
                0 !== r
                    ? (r !== s && (C(e, r, e.bl_tree), o--), C(e, 16, e.bl_tree), y(e, o - 3, 2))
                    : o <= 10
                      ? (C(e, 17, e.bl_tree), y(e, o - 3, 3))
                      : (C(e, 18, e.bl_tree), y(e, o - 11, 7));
            (o = 0), (s = r), 0 === a ? ((l = 138), (u = 3)) : r === a ? ((l = 6), (u = 3)) : ((l = 7), (u = 4));
        }
}
o(g);
var x = !1;
function k(e, t, n, i) {
    y(e, 0 + +!!i, 3), O(e), S(e, n), S(e, ~n), a.arraySet(e.pending_buf, e.window, t, n, e.pending), (e.pending += n);
}
(t._tr_init = function (e) {
    x ||
        (!(function () {
            var e,
                t,
                n,
                a,
                o,
                l = Array(16);
            for (a = 0, n = 0; a < 28; a++) for (e = 0, m[a] = n; e < 1 << u[a]; e++) E[n++] = a;
            for (E[n - 1] = a, o = 0, a = 0; a < 16; a++) for (e = 0, g[a] = o; e < 1 << c[a]; e++) p[o++] = a;
            for (o >>= 7; a < 30; a++) for (e = 0, g[a] = o << 7; e < 1 << (c[a] - 7); e++) p[256 + o++] = a;
            for (t = 0; t <= 15; t++) l[t] = 0;
            for (e = 0; e <= 143; ) (h[2 * e + 1] = 8), e++, l[8]++;
            for (; e <= 255; ) (h[2 * e + 1] = 9), e++, l[9]++;
            for (; e <= 279; ) (h[2 * e + 1] = 7), e++, l[7]++;
            for (; e <= 287; ) (h[2 * e + 1] = 8), e++, l[8]++;
            for (v(h, 287, l), e = 0; e < 30; e++) (f[2 * e + 1] = 5), (f[2 * e] = N(e, 5));
            (i = new A(h, u, 257, 286, 15)), (r = new A(f, c, 0, 30, 15)), (s = new A([], d, 0, 19, 7));
        })(),
        (x = !0)),
        (e.l_desc = new I(e.dyn_ltree, i)),
        (e.d_desc = new I(e.dyn_dtree, r)),
        (e.bl_desc = new I(e.bl_tree, s)),
        (e.bi_buf = 0),
        (e.bi_valid = 0),
        R(e);
}),
    (t._tr_stored_block = k),
    (t._tr_flush_block = function (e, t, n, i) {
        var r,
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
              (r = (e.opt_len + 3 + 7) >>> 3),
              (s = (e.static_len + 3 + 7) >>> 3) <= r && (r = s))
            : (r = s = n + 5),
            n + 4 <= r && -1 !== t
                ? k(e, t, n, i)
                : 4 === e.strategy || s === r
                  ? (y(e, 2 + +!!i, 3), L(e, h, f))
                  : (y(e, 4 + +!!i, 3),
                    (function (e, t, n, i) {
                        var r;
                        for (y(e, t - 257, 5), y(e, n - 1, 5), y(e, i - 4, 4), r = 0; r < i; r++)
                            y(e, e.bl_tree[2 * _[r] + 1], 3);
                        P(e, e.dyn_ltree, t - 1), P(e, e.dyn_dtree, n - 1);
                    })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1),
                    L(e, e.dyn_ltree, e.dyn_dtree)),
            R(e),
            i && O(e);
    }),
    (t._tr_tally = function (e, t, n) {
        return (
            (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255),
            (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
            (e.pending_buf[e.l_buf + e.last_lit] = 255 & n),
            e.last_lit++,
            0 === t
                ? e.dyn_ltree[2 * n]++
                : (e.matches++, t--, e.dyn_ltree[(E[n] + 256 + 1) * 2]++, e.dyn_dtree[2 * T(t)]++),
            e.last_lit === e.lit_bufsize - 1
        );
    }),
    (t._tr_align = function (e) {
        y(e, 2, 3),
            C(e, 256, h),
            16 === e.bi_valid
                ? (S(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
                : e.bi_valid >= 8 &&
                  ((e.pending_buf[e.pending++] = 255 & e.bi_buf), (e.bi_buf >>= 8), (e.bi_valid -= 8));
    });
