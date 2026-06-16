"use strict";
var i,
    r = n(549412),
    s = n(666624),
    a = n(22700),
    o = n(96726),
    l = n(163173),
    u = 573;
function c(e, t) {
    return (e.msg = l[t]), t;
}
function d(e) {
    return (e << 1) - 9 * (e > 4);
}
function _(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
}
function h(e) {
    var t = e.state,
        n = t.pending;
    n > e.avail_out && (n = e.avail_out),
        0 !== n &&
            (r.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out),
            (e.next_out += n),
            (t.pending_out += n),
            (e.total_out += n),
            (e.avail_out -= n),
            (t.pending -= n),
            0 === t.pending && (t.pending_out = 0));
}
function f(e, t) {
    s._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t),
        (e.block_start = e.strstart),
        h(e.strm);
}
function p(e, t) {
    e.pending_buf[e.pending++] = t;
}
function E(e, t) {
    (e.pending_buf[e.pending++] = (t >>> 8) & 255), (e.pending_buf[e.pending++] = 255 & t);
}
function m(e, t) {
    var n,
        i,
        r = e.max_chain_length,
        s = e.strstart,
        a = e.prev_length,
        o = e.nice_match,
        l = e.strstart > e.w_size - 262 ? e.strstart - (e.w_size - 262) : 0,
        u = e.window,
        c = e.w_mask,
        d = e.prev,
        _ = e.strstart + 258,
        h = u[s + a - 1],
        f = u[s + a];
    e.prev_length >= e.good_match && (r >>= 2), o > e.lookahead && (o = e.lookahead);
    do {
        if (u[(n = t) + a] !== f || u[n + a - 1] !== h || u[n] !== u[s] || u[++n] !== u[s + 1]) continue;
        (s += 2), n++;
        do;
        while (
            u[++s] === u[++n] &&
            u[++s] === u[++n] &&
            u[++s] === u[++n] &&
            u[++s] === u[++n] &&
            u[++s] === u[++n] &&
            u[++s] === u[++n] &&
            u[++s] === u[++n] &&
            u[++s] === u[++n] &&
            s < _
        );
        if (((i = 258 - (_ - s)), (s = _ - 258), i > a)) {
            if (((e.match_start = t), (a = i), i >= o)) break;
            (h = u[s + a - 1]), (f = u[s + a]);
        }
    } while ((t = d[t & c]) > l && 0 != --r);
    return a <= e.lookahead ? a : e.lookahead;
}
function g(e) {
    var t,
        n,
        i,
        s,
        l,
        u = e.w_size;
    do {
        if (((s = e.window_size - e.lookahead - e.strstart), e.strstart >= u + (u - 262))) {
            r.arraySet(e.window, e.window, u, u, 0),
                (e.match_start -= u),
                (e.strstart -= u),
                (e.block_start -= u),
                (t = n = e.hash_size);
            do (i = e.head[--t]), (e.head[t] = i >= u ? i - u : 0);
            while (--n);
            t = n = u;
            do (i = e.prev[--t]), (e.prev[t] = i >= u ? i - u : 0);
            while (--n);
            s += u;
        }
        if (0 === e.strm.avail_in) break;
        if (
            ((n = (function (e, t, n, i) {
                var s = e.avail_in;
                return (s > i && (s = i), 0 === s)
                    ? 0
                    : ((e.avail_in -= s),
                      r.arraySet(t, e.input, e.next_in, s, n),
                      1 === e.state.wrap
                          ? (e.adler = a(e.adler, t, s, n))
                          : 2 === e.state.wrap && (e.adler = o(e.adler, t, s, n)),
                      (e.next_in += s),
                      (e.total_in += s),
                      s);
            })(e.strm, e.window, e.strstart + e.lookahead, s)),
            (e.lookahead += n),
            e.lookahead + e.insert >= 3)
        )
            for (
                l = e.strstart - e.insert,
                    e.ins_h = e.window[l],
                    e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[l + 1]) & e.hash_mask;
                e.insert &&
                ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[l + 3 - 1]) & e.hash_mask),
                (e.prev[l & e.w_mask] = e.head[e.ins_h]),
                (e.head[e.ins_h] = l),
                l++,
                e.insert--,
                !(e.lookahead + e.insert < 3));
            );
    } while (e.lookahead < 262 && 0 !== e.strm.avail_in);
}
function A(e, t) {
    for (var n, i; ; ) {
        if (e.lookahead < 262) {
            if ((g(e), e.lookahead < 262 && 0 === t)) return 1;
            if (0 === e.lookahead) break;
        }
        if (
            ((n = 0),
            e.lookahead >= 3 &&
                ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) & e.hash_mask),
                (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                (e.head[e.ins_h] = e.strstart)),
            0 !== n && e.strstart - n <= e.w_size - 262 && (e.match_length = m(e, n)),
            e.match_length >= 3)
        )
            if (
                ((i = s._tr_tally(e, e.strstart - e.match_start, e.match_length - 3)),
                (e.lookahead -= e.match_length),
                e.match_length <= e.max_lazy_match && e.lookahead >= 3)
            ) {
                e.match_length--;
                do
                    e.strstart++,
                        (e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) & e.hash_mask),
                        (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                        (e.head[e.ins_h] = e.strstart);
                while (0 != --e.match_length);
                e.strstart++;
            } else
                (e.strstart += e.match_length),
                    (e.match_length = 0),
                    (e.ins_h = e.window[e.strstart]),
                    (e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 1]) & e.hash_mask);
        else (i = s._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++;
        if (i && (f(e, !1), 0 === e.strm.avail_out)) return 1;
    }
    return ((e.insert = e.strstart < 2 ? e.strstart : 2), 4 === t)
        ? (f(e, !0), 0 === e.strm.avail_out)
            ? 3
            : 4
        : e.last_lit && (f(e, !1), 0 === e.strm.avail_out)
          ? 1
          : 2;
}
function I(e, t) {
    for (var n, i, r; ; ) {
        if (e.lookahead < 262) {
            if ((g(e), e.lookahead < 262 && 0 === t)) return 1;
            if (0 === e.lookahead) break;
        }
        if (
            ((n = 0),
            e.lookahead >= 3 &&
                ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) & e.hash_mask),
                (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                (e.head[e.ins_h] = e.strstart)),
            (e.prev_length = e.match_length),
            (e.prev_match = e.match_start),
            (e.match_length = 2),
            0 !== n &&
                e.prev_length < e.max_lazy_match &&
                e.strstart - n <= e.w_size - 262 &&
                ((e.match_length = m(e, n)),
                e.match_length <= 5 &&
                    (1 === e.strategy || (3 === e.match_length && e.strstart - e.match_start > 4096)) &&
                    (e.match_length = 2)),
            e.prev_length >= 3 && e.match_length <= e.prev_length)
        ) {
            (r = e.strstart + e.lookahead - 3),
                (i = s._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - 3)),
                (e.lookahead -= e.prev_length - 1),
                (e.prev_length -= 2);
            do
                ++e.strstart <= r &&
                    ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) & e.hash_mask),
                    (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                    (e.head[e.ins_h] = e.strstart));
            while (0 != --e.prev_length);
            if (((e.match_available = 0), (e.match_length = 2), e.strstart++, i && (f(e, !1), 0 === e.strm.avail_out)))
                return 1;
        } else if (e.match_available) {
            if (
                ((i = s._tr_tally(e, 0, e.window[e.strstart - 1])) && f(e, !1),
                e.strstart++,
                e.lookahead--,
                0 === e.strm.avail_out)
            )
                return 1;
        } else (e.match_available = 1), e.strstart++, e.lookahead--;
    }
    return (e.match_available && ((i = s._tr_tally(e, 0, e.window[e.strstart - 1])), (e.match_available = 0)),
    (e.insert = e.strstart < 2 ? e.strstart : 2),
    4 === t)
        ? (f(e, !0), 0 === e.strm.avail_out)
            ? 3
            : 4
        : e.last_lit && (f(e, !1), 0 === e.strm.avail_out)
          ? 1
          : 2;
}
function T(e, t, n, i, r) {
    (this.good_length = e), (this.max_lazy = t), (this.nice_length = n), (this.max_chain = i), (this.func = r);
}
function S() {
    (this.strm = null),
        (this.status = 0),
        (this.pending_buf = null),
        (this.pending_buf_size = 0),
        (this.pending_out = 0),
        (this.pending = 0),
        (this.wrap = 0),
        (this.gzhead = null),
        (this.gzindex = 0),
        (this.method = 8),
        (this.last_flush = -1),
        (this.w_size = 0),
        (this.w_bits = 0),
        (this.w_mask = 0),
        (this.window = null),
        (this.window_size = 0),
        (this.prev = null),
        (this.head = null),
        (this.ins_h = 0),
        (this.hash_size = 0),
        (this.hash_bits = 0),
        (this.hash_mask = 0),
        (this.hash_shift = 0),
        (this.block_start = 0),
        (this.match_length = 0),
        (this.prev_match = 0),
        (this.match_available = 0),
        (this.strstart = 0),
        (this.match_start = 0),
        (this.lookahead = 0),
        (this.prev_length = 0),
        (this.max_chain_length = 0),
        (this.max_lazy_match = 0),
        (this.level = 0),
        (this.strategy = 0),
        (this.good_match = 0),
        (this.nice_match = 0),
        (this.dyn_ltree = new r.Buf16(2 * u)),
        (this.dyn_dtree = new r.Buf16(122)),
        (this.bl_tree = new r.Buf16(78)),
        _(this.dyn_ltree),
        _(this.dyn_dtree),
        _(this.bl_tree),
        (this.l_desc = null),
        (this.d_desc = null),
        (this.bl_desc = null),
        (this.bl_count = new r.Buf16(16)),
        (this.heap = new r.Buf16(573)),
        _(this.heap),
        (this.heap_len = 0),
        (this.heap_max = 0),
        (this.depth = new r.Buf16(573)),
        _(this.depth),
        (this.l_buf = 0),
        (this.lit_bufsize = 0),
        (this.last_lit = 0),
        (this.d_buf = 0),
        (this.opt_len = 0),
        (this.static_len = 0),
        (this.matches = 0),
        (this.insert = 0),
        (this.bi_buf = 0),
        (this.bi_valid = 0);
}
function y(e) {
    var t;
    return e && e.state
        ? ((e.total_in = e.total_out = 0),
          (e.data_type = 2),
          ((t = e.state).pending = 0),
          (t.pending_out = 0),
          t.wrap < 0 && (t.wrap = -t.wrap),
          (t.status = t.wrap ? 42 : 113),
          (e.adler = +(2 !== t.wrap)),
          (t.last_flush = 0),
          s._tr_init(t),
          0)
        : c(e, -2);
}
function C(e) {
    var t,
        n = y(e);
    return (
        0 === n &&
            (((t = e.state).window_size = 2 * t.w_size),
            _(t.head),
            (t.max_lazy_match = i[t.level].max_lazy),
            (t.good_match = i[t.level].good_length),
            (t.nice_match = i[t.level].nice_length),
            (t.max_chain_length = i[t.level].max_chain),
            (t.strstart = 0),
            (t.block_start = 0),
            (t.lookahead = 0),
            (t.insert = 0),
            (t.match_length = t.prev_length = 2),
            (t.match_available = 0),
            (t.ins_h = 0)),
        n
    );
}
function N(e, t, n, i, s, a) {
    if (!e) return -2;
    var o = 1;
    if (
        (-1 === t && (t = 6),
        i < 0 ? ((o = 0), (i = -i)) : i > 15 && ((o = 2), (i -= 16)),
        s < 1 || s > 9 || 8 !== n || i < 8 || i > 15 || t < 0 || t > 9 || a < 0 || a > 4)
    )
        return c(e, -2);
    8 === i && (i = 9);
    var l = new S();
    return (
        (e.state = l),
        (l.strm = e),
        (l.wrap = o),
        (l.gzhead = null),
        (l.w_bits = i),
        (l.w_size = 1 << l.w_bits),
        (l.w_mask = l.w_size - 1),
        (l.hash_bits = s + 7),
        (l.hash_size = 1 << l.hash_bits),
        (l.hash_mask = l.hash_size - 1),
        (l.hash_shift = ~~((l.hash_bits + 3 - 1) / 3)),
        (l.window = new r.Buf8(2 * l.w_size)),
        (l.head = new r.Buf16(l.hash_size)),
        (l.prev = new r.Buf16(l.w_size)),
        (l.lit_bufsize = 1 << (s + 6)),
        (l.pending_buf_size = 4 * l.lit_bufsize),
        (l.pending_buf = new r.Buf8(l.pending_buf_size)),
        (l.d_buf = +l.lit_bufsize),
        (l.l_buf = 3 * l.lit_bufsize),
        (l.level = t),
        (l.strategy = a),
        (l.method = n),
        C(e)
    );
}
(i = [
    new T(0, 0, 0, 0, function (e, t) {
        var n = 65535;
        for (65535 > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ; ) {
            if (e.lookahead <= 1) {
                if ((g(e), 0 === e.lookahead && 0 === t)) return 1;
                if (0 === e.lookahead) break;
            }
            (e.strstart += e.lookahead), (e.lookahead = 0);
            var i = e.block_start + n;
            if (
                ((0 === e.strstart || e.strstart >= i) &&
                    ((e.lookahead = e.strstart - i), (e.strstart = i), f(e, !1), 0 === e.strm.avail_out)) ||
                (e.strstart - e.block_start >= e.w_size - 262 && (f(e, !1), 0 === e.strm.avail_out))
            )
                return 1;
        }
        return ((e.insert = 0), 4 === t)
            ? (f(e, !0), 0 === e.strm.avail_out)
                ? 3
                : 4
            : (e.strstart > e.block_start && (f(e, !1), e.strm.avail_out), 1);
    }),
    new T(4, 4, 8, 4, A),
    new T(4, 5, 16, 8, A),
    new T(4, 6, 32, 32, A),
    new T(4, 4, 16, 16, I),
    new T(8, 16, 32, 32, I),
    new T(8, 16, 128, 128, I),
    new T(8, 32, 128, 256, I),
    new T(32, 128, 258, 1024, I),
    new T(32, 258, 258, 4096, I),
]),
    (t.deflateInit = function (e, t) {
        return N(e, t, 8, 15, 8, 0);
    }),
    (t.deflateInit2 = N),
    (t.deflateReset = C),
    (t.deflateResetKeep = y),
    (t.deflateSetHeader = function (e, t) {
        return e && e.state && 2 === e.state.wrap ? ((e.state.gzhead = t), 0) : -2;
    }),
    (t.deflate = function (e, t) {
        if (!e || !e.state || t > 5 || t < 0) return e ? c(e, -2) : -2;
        if (((r = e.state), !e.output || (!e.input && 0 !== e.avail_in) || (666 === r.status && 4 !== t)))
            return c(e, 0 === e.avail_out ? -5 : -2);
        if (((r.strm = e), (n = r.last_flush), (r.last_flush = t), 42 === r.status))
            if (2 === r.wrap)
                (e.adler = 0),
                    p(r, 31),
                    p(r, 139),
                    p(r, 8),
                    r.gzhead
                        ? (p(
                              r,
                              +!!r.gzhead.text +
                                  2 * !!r.gzhead.hcrc +
                                  4 * !!r.gzhead.extra +
                                  8 * !!r.gzhead.name +
                                  16 * !!r.gzhead.comment,
                          ),
                          p(r, 255 & r.gzhead.time),
                          p(r, (r.gzhead.time >> 8) & 255),
                          p(r, (r.gzhead.time >> 16) & 255),
                          p(r, (r.gzhead.time >> 24) & 255),
                          p(r, 9 === r.level ? 2 : 4 * (r.strategy >= 2 || r.level < 2)),
                          p(r, 255 & r.gzhead.os),
                          r.gzhead.extra &&
                              r.gzhead.extra.length &&
                              (p(r, 255 & r.gzhead.extra.length), p(r, (r.gzhead.extra.length >> 8) & 255)),
                          r.gzhead.hcrc && (e.adler = o(e.adler, r.pending_buf, r.pending, 0)),
                          (r.gzindex = 0),
                          (r.status = 69))
                        : (p(r, 0),
                          p(r, 0),
                          p(r, 0),
                          p(r, 0),
                          p(r, 0),
                          p(r, 9 === r.level ? 2 : 4 * (r.strategy >= 2 || r.level < 2)),
                          p(r, 3),
                          (r.status = 113));
            else {
                var n,
                    r,
                    a,
                    l,
                    u = (8 + ((r.w_bits - 8) << 4)) << 8;
                (u |= (r.strategy >= 2 || r.level < 2 ? 0 : r.level < 6 ? 1 : 6 === r.level ? 2 : 3) << 6),
                    0 !== r.strstart && (u |= 32),
                    (u += 31 - (u % 31)),
                    (r.status = 113),
                    E(r, u),
                    0 !== r.strstart && (E(r, e.adler >>> 16), E(r, 65535 & e.adler)),
                    (e.adler = 1);
            }
        if (69 === r.status)
            if (r.gzhead.extra) {
                for (
                    a = r.pending;
                    r.gzindex < (65535 & r.gzhead.extra.length) &&
                    (r.pending !== r.pending_buf_size ||
                        (r.gzhead.hcrc && r.pending > a && (e.adler = o(e.adler, r.pending_buf, r.pending - a, a)),
                        h(e),
                        (a = r.pending),
                        r.pending !== r.pending_buf_size));
                )
                    p(r, 255 & r.gzhead.extra[r.gzindex]), r.gzindex++;
                r.gzhead.hcrc && r.pending > a && (e.adler = o(e.adler, r.pending_buf, r.pending - a, a)),
                    r.gzindex === r.gzhead.extra.length && ((r.gzindex = 0), (r.status = 73));
            } else r.status = 73;
        if (73 === r.status)
            if (r.gzhead.name) {
                a = r.pending;
                do {
                    if (
                        r.pending === r.pending_buf_size &&
                        (r.gzhead.hcrc && r.pending > a && (e.adler = o(e.adler, r.pending_buf, r.pending - a, a)),
                        h(e),
                        (a = r.pending),
                        r.pending === r.pending_buf_size)
                    ) {
                        l = 1;
                        break;
                    }
                    (l = r.gzindex < r.gzhead.name.length ? 255 & r.gzhead.name.charCodeAt(r.gzindex++) : 0), p(r, l);
                } while (0 !== l);
                r.gzhead.hcrc && r.pending > a && (e.adler = o(e.adler, r.pending_buf, r.pending - a, a)),
                    0 === l && ((r.gzindex = 0), (r.status = 91));
            } else r.status = 91;
        if (91 === r.status)
            if (r.gzhead.comment) {
                a = r.pending;
                do {
                    if (
                        r.pending === r.pending_buf_size &&
                        (r.gzhead.hcrc && r.pending > a && (e.adler = o(e.adler, r.pending_buf, r.pending - a, a)),
                        h(e),
                        (a = r.pending),
                        r.pending === r.pending_buf_size)
                    ) {
                        l = 1;
                        break;
                    }
                    (l = r.gzindex < r.gzhead.comment.length ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++) : 0),
                        p(r, l);
                } while (0 !== l);
                r.gzhead.hcrc && r.pending > a && (e.adler = o(e.adler, r.pending_buf, r.pending - a, a)),
                    0 === l && (r.status = 103);
            } else r.status = 103;
        if (
            (103 === r.status &&
                (r.gzhead.hcrc
                    ? (r.pending + 2 > r.pending_buf_size && h(e),
                      r.pending + 2 <= r.pending_buf_size &&
                          (p(r, 255 & e.adler), p(r, (e.adler >> 8) & 255), (e.adler = 0), (r.status = 113)))
                    : (r.status = 113)),
            0 !== r.pending)
        ) {
            if ((h(e), 0 === e.avail_out)) return (r.last_flush = -1), 0;
        } else if (0 === e.avail_in && d(t) <= d(n) && 4 !== t) return c(e, -5);
        if (666 === r.status && 0 !== e.avail_in) return c(e, -5);
        if (0 !== e.avail_in || 0 !== r.lookahead || (0 !== t && 666 !== r.status)) {
            var m =
                2 === r.strategy
                    ? (function (e, t) {
                          for (var n; ; ) {
                              if (0 === e.lookahead && (g(e), 0 === e.lookahead)) {
                                  if (0 === t) return 1;
                                  break;
                              }
                              if (
                                  ((e.match_length = 0),
                                  (n = s._tr_tally(e, 0, e.window[e.strstart])),
                                  e.lookahead--,
                                  e.strstart++,
                                  n && (f(e, !1), 0 === e.strm.avail_out))
                              )
                                  return 1;
                          }
                          return ((e.insert = 0), 4 === t)
                              ? (f(e, !0), 0 === e.strm.avail_out)
                                  ? 3
                                  : 4
                              : e.last_lit && (f(e, !1), 0 === e.strm.avail_out)
                                ? 1
                                : 2;
                      })(r, t)
                    : 3 === r.strategy
                      ? (function (e, t) {
                            for (var n, i, r, a, o = e.window; ; ) {
                                if (e.lookahead <= 258) {
                                    if ((g(e), e.lookahead <= 258 && 0 === t)) return 1;
                                    if (0 === e.lookahead) break;
                                }
                                if (
                                    ((e.match_length = 0),
                                    e.lookahead >= 3 &&
                                        e.strstart > 0 &&
                                        (i = o[(r = e.strstart - 1)]) === o[++r] &&
                                        i === o[++r] &&
                                        i === o[++r])
                                ) {
                                    a = e.strstart + 258;
                                    do;
                                    while (
                                        i === o[++r] &&
                                        i === o[++r] &&
                                        i === o[++r] &&
                                        i === o[++r] &&
                                        i === o[++r] &&
                                        i === o[++r] &&
                                        i === o[++r] &&
                                        i === o[++r] &&
                                        r < a
                                    );
                                    (e.match_length = 258 - (a - r)),
                                        e.match_length > e.lookahead && (e.match_length = e.lookahead);
                                }
                                if (
                                    (e.match_length >= 3
                                        ? ((n = s._tr_tally(e, 1, e.match_length - 3)),
                                          (e.lookahead -= e.match_length),
                                          (e.strstart += e.match_length),
                                          (e.match_length = 0))
                                        : ((n = s._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++),
                                    n && (f(e, !1), 0 === e.strm.avail_out))
                                )
                                    return 1;
                            }
                            return ((e.insert = 0), 4 === t)
                                ? (f(e, !0), 0 === e.strm.avail_out)
                                    ? 3
                                    : 4
                                : e.last_lit && (f(e, !1), 0 === e.strm.avail_out)
                                  ? 1
                                  : 2;
                        })(r, t)
                      : i[r.level].func(r, t);
            if (((3 === m || 4 === m) && (r.status = 666), 1 === m || 3 === m))
                return 0 === e.avail_out && (r.last_flush = -1), 0;
            if (
                2 === m &&
                (1 === t
                    ? s._tr_align(r)
                    : 5 !== t &&
                      (s._tr_stored_block(r, 0, 0, !1),
                      3 === t &&
                          (_(r.head), 0 === r.lookahead && ((r.strstart = 0), (r.block_start = 0), (r.insert = 0)))),
                h(e),
                0 === e.avail_out)
            )
                return (r.last_flush = -1), 0;
        }
        return 4 !== t
            ? 0
            : r.wrap <= 0
              ? 1
              : (2 === r.wrap
                    ? (p(r, 255 & e.adler),
                      p(r, (e.adler >> 8) & 255),
                      p(r, (e.adler >> 16) & 255),
                      p(r, (e.adler >> 24) & 255),
                      p(r, 255 & e.total_in),
                      p(r, (e.total_in >> 8) & 255),
                      p(r, (e.total_in >> 16) & 255),
                      p(r, (e.total_in >> 24) & 255))
                    : (E(r, e.adler >>> 16), E(r, 65535 & e.adler)),
                h(e),
                r.wrap > 0 && (r.wrap = -r.wrap),
                +(0 === r.pending));
    }),
    (t.deflateEnd = function (e) {
        var t;
        return e && e.state
            ? 42 !== (t = e.state.status) && 69 !== t && 73 !== t && 91 !== t && 103 !== t && 113 !== t && 666 !== t
                ? c(e, -2)
                : ((e.state = null), 113 === t ? c(e, -3) : 0)
            : -2;
    }),
    (t.deflateSetDictionary = function (e, t) {
        var n,
            i,
            s,
            o,
            l,
            u,
            c,
            d,
            h = t.length;
        if (!e || !e.state || 2 === (o = (n = e.state).wrap) || (1 === o && 42 !== n.status) || n.lookahead) return -2;
        for (
            1 === o && (e.adler = a(e.adler, t, h, 0)),
                n.wrap = 0,
                h >= n.w_size &&
                    (0 === o && (_(n.head), (n.strstart = 0), (n.block_start = 0), (n.insert = 0)),
                    (d = new r.Buf8(n.w_size)),
                    r.arraySet(d, t, h - n.w_size, n.w_size, 0),
                    (t = d),
                    (h = n.w_size)),
                l = e.avail_in,
                u = e.next_in,
                c = e.input,
                e.avail_in = h,
                e.next_in = 0,
                e.input = t,
                g(n);
            n.lookahead >= 3;
        ) {
            (i = n.strstart), (s = n.lookahead - 2);
            do
                (n.ins_h = ((n.ins_h << n.hash_shift) ^ n.window[i + 3 - 1]) & n.hash_mask),
                    (n.prev[i & n.w_mask] = n.head[n.ins_h]),
                    (n.head[n.ins_h] = i),
                    i++;
            while (--s);
            (n.strstart = i), (n.lookahead = 2), g(n);
        }
        return (
            (n.strstart += n.lookahead),
            (n.block_start = n.strstart),
            (n.insert = n.lookahead),
            (n.lookahead = 0),
            (n.match_length = n.prev_length = 2),
            (n.match_available = 0),
            (e.next_in = u),
            (e.input = c),
            (e.avail_in = l),
            (n.wrap = o),
            0
        );
    }),
    (t.deflateInfo = "pako deflate (from Nodeca project)");
