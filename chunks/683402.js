"use strict";
var r,
    i = n(549412),
    s = n(666624),
    a = n(22700),
    o = n(96726),
    l = n(163173),
    u = 573;
function d(e, t) {
    return (e.msg = l[t]), t;
}
function c(e) {
    return (e << 1) - 9 * (e > 4);
}
function _(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
}
function f(e) {
    var t = e.state,
        n = t.pending;
    n > e.avail_out && (n = e.avail_out),
        0 !== n &&
            (i.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out),
            (e.next_out += n),
            (t.pending_out += n),
            (e.total_out += n),
            (e.avail_out -= n),
            (t.pending -= n),
            0 === t.pending && (t.pending_out = 0));
}
function E(e, t) {
    s._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t),
        (e.block_start = e.strstart),
        f(e.strm);
}
function h(e, t) {
    e.pending_buf[e.pending++] = t;
}
function p(e, t) {
    (e.pending_buf[e.pending++] = (t >>> 8) & 255), (e.pending_buf[e.pending++] = 255 & t);
}
function m(e, t) {
    var n,
        r,
        i = e.max_chain_length,
        s = e.strstart,
        a = e.prev_length,
        o = e.nice_match,
        l = e.strstart > e.w_size - 262 ? e.strstart - (e.w_size - 262) : 0,
        u = e.window,
        d = e.w_mask,
        c = e.prev,
        _ = e.strstart + 258,
        f = u[s + a - 1],
        E = u[s + a];
    e.prev_length >= e.good_match && (i >>= 2), o > e.lookahead && (o = e.lookahead);
    do {
        if (u[(n = t) + a] !== E || u[n + a - 1] !== f || u[n] !== u[s] || u[++n] !== u[s + 1]) continue;
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
        if (((r = 258 - (_ - s)), (s = _ - 258), r > a)) {
            if (((e.match_start = t), (a = r), r >= o)) break;
            (f = u[s + a - 1]), (E = u[s + a]);
        }
    } while ((t = c[t & d]) > l && 0 != --i);
    return a <= e.lookahead ? a : e.lookahead;
}
function g(e) {
    var t,
        n,
        r,
        s,
        l,
        u = e.w_size;
    do {
        if (((s = e.window_size - e.lookahead - e.strstart), e.strstart >= u + (u - 262))) {
            i.arraySet(e.window, e.window, u, u, 0),
                (e.match_start -= u),
                (e.strstart -= u),
                (e.block_start -= u),
                (t = n = e.hash_size);
            do (r = e.head[--t]), (e.head[t] = r >= u ? r - u : 0);
            while (--n);
            t = n = u;
            do (r = e.prev[--t]), (e.prev[t] = r >= u ? r - u : 0);
            while (--n);
            s += u;
        }
        if (0 === e.strm.avail_in) break;
        if (
            ((n = (function (e, t, n, r) {
                var s = e.avail_in;
                return (s > r && (s = r), 0 === s)
                    ? 0
                    : ((e.avail_in -= s),
                      i.arraySet(t, e.input, e.next_in, s, n),
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
    for (var n, r; ; ) {
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
                ((r = s._tr_tally(e, e.strstart - e.match_start, e.match_length - 3)),
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
        else (r = s._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++;
        if (r && (E(e, !1), 0 === e.strm.avail_out)) return 1;
    }
    return ((e.insert = e.strstart < 2 ? e.strstart : 2), 4 === t)
        ? (E(e, !0), 0 === e.strm.avail_out)
            ? 3
            : 4
        : e.last_lit && (E(e, !1), 0 === e.strm.avail_out)
          ? 1
          : 2;
}
function I(e, t) {
    for (var n, r, i; ; ) {
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
            (i = e.strstart + e.lookahead - 3),
                (r = s._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - 3)),
                (e.lookahead -= e.prev_length - 1),
                (e.prev_length -= 2);
            do
                ++e.strstart <= i &&
                    ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) & e.hash_mask),
                    (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                    (e.head[e.ins_h] = e.strstart));
            while (0 != --e.prev_length);
            if (((e.match_available = 0), (e.match_length = 2), e.strstart++, r && (E(e, !1), 0 === e.strm.avail_out)))
                return 1;
        } else if (e.match_available) {
            if (
                ((r = s._tr_tally(e, 0, e.window[e.strstart - 1])) && E(e, !1),
                e.strstart++,
                e.lookahead--,
                0 === e.strm.avail_out)
            )
                return 1;
        } else (e.match_available = 1), e.strstart++, e.lookahead--;
    }
    return (e.match_available && ((r = s._tr_tally(e, 0, e.window[e.strstart - 1])), (e.match_available = 0)),
    (e.insert = e.strstart < 2 ? e.strstart : 2),
    4 === t)
        ? (E(e, !0), 0 === e.strm.avail_out)
            ? 3
            : 4
        : e.last_lit && (E(e, !1), 0 === e.strm.avail_out)
          ? 1
          : 2;
}
function T(e, t, n, r, i) {
    (this.good_length = e), (this.max_lazy = t), (this.nice_length = n), (this.max_chain = r), (this.func = i);
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
        (this.dyn_ltree = new i.Buf16(2 * u)),
        (this.dyn_dtree = new i.Buf16(122)),
        (this.bl_tree = new i.Buf16(78)),
        _(this.dyn_ltree),
        _(this.dyn_dtree),
        _(this.bl_tree),
        (this.l_desc = null),
        (this.d_desc = null),
        (this.bl_desc = null),
        (this.bl_count = new i.Buf16(16)),
        (this.heap = new i.Buf16(573)),
        _(this.heap),
        (this.heap_len = 0),
        (this.heap_max = 0),
        (this.depth = new i.Buf16(573)),
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
        : d(e, -2);
}
function N(e) {
    var t,
        n = y(e);
    return (
        0 === n &&
            (((t = e.state).window_size = 2 * t.w_size),
            _(t.head),
            (t.max_lazy_match = r[t.level].max_lazy),
            (t.good_match = r[t.level].good_length),
            (t.nice_match = r[t.level].nice_length),
            (t.max_chain_length = r[t.level].max_chain),
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
function O(e, t, n, r, s, a) {
    if (!e) return -2;
    var o = 1;
    if (
        (-1 === t && (t = 6),
        r < 0 ? ((o = 0), (r = -r)) : r > 15 && ((o = 2), (r -= 16)),
        s < 1 || s > 9 || 8 !== n || r < 8 || r > 15 || t < 0 || t > 9 || a < 0 || a > 4)
    )
        return d(e, -2);
    8 === r && (r = 9);
    var l = new S();
    return (
        (e.state = l),
        (l.strm = e),
        (l.wrap = o),
        (l.gzhead = null),
        (l.w_bits = r),
        (l.w_size = 1 << l.w_bits),
        (l.w_mask = l.w_size - 1),
        (l.hash_bits = s + 7),
        (l.hash_size = 1 << l.hash_bits),
        (l.hash_mask = l.hash_size - 1),
        (l.hash_shift = ~~((l.hash_bits + 3 - 1) / 3)),
        (l.window = new i.Buf8(2 * l.w_size)),
        (l.head = new i.Buf16(l.hash_size)),
        (l.prev = new i.Buf16(l.w_size)),
        (l.lit_bufsize = 1 << (s + 6)),
        (l.pending_buf_size = 4 * l.lit_bufsize),
        (l.pending_buf = new i.Buf8(l.pending_buf_size)),
        (l.d_buf = +l.lit_bufsize),
        (l.l_buf = 3 * l.lit_bufsize),
        (l.level = t),
        (l.strategy = a),
        (l.method = n),
        N(e)
    );
}
(r = [
    new T(0, 0, 0, 0, function (e, t) {
        var n = 65535;
        for (65535 > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ; ) {
            if (e.lookahead <= 1) {
                if ((g(e), 0 === e.lookahead && 0 === t)) return 1;
                if (0 === e.lookahead) break;
            }
            (e.strstart += e.lookahead), (e.lookahead = 0);
            var r = e.block_start + n;
            if (
                ((0 === e.strstart || e.strstart >= r) &&
                    ((e.lookahead = e.strstart - r), (e.strstart = r), E(e, !1), 0 === e.strm.avail_out)) ||
                (e.strstart - e.block_start >= e.w_size - 262 && (E(e, !1), 0 === e.strm.avail_out))
            )
                return 1;
        }
        return ((e.insert = 0), 4 === t)
            ? (E(e, !0), 0 === e.strm.avail_out)
                ? 3
                : 4
            : (e.strstart > e.block_start && (E(e, !1), e.strm.avail_out), 1);
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
        return O(e, t, 8, 15, 8, 0);
    }),
    (t.deflateInit2 = O),
    (t.deflateReset = N),
    (t.deflateResetKeep = y),
    (t.deflateSetHeader = function (e, t) {
        return e && e.state && 2 === e.state.wrap ? ((e.state.gzhead = t), 0) : -2;
    }),
    (t.deflate = function (e, t) {
        if (!e || !e.state || t > 5 || t < 0) return e ? d(e, -2) : -2;
        if (((i = e.state), !e.output || (!e.input && 0 !== e.avail_in) || (666 === i.status && 4 !== t)))
            return d(e, 0 === e.avail_out ? -5 : -2);
        if (((i.strm = e), (n = i.last_flush), (i.last_flush = t), 42 === i.status))
            if (2 === i.wrap)
                (e.adler = 0),
                    h(i, 31),
                    h(i, 139),
                    h(i, 8),
                    i.gzhead
                        ? (h(
                              i,
                              +!!i.gzhead.text +
                                  2 * !!i.gzhead.hcrc +
                                  4 * !!i.gzhead.extra +
                                  8 * !!i.gzhead.name +
                                  16 * !!i.gzhead.comment,
                          ),
                          h(i, 255 & i.gzhead.time),
                          h(i, (i.gzhead.time >> 8) & 255),
                          h(i, (i.gzhead.time >> 16) & 255),
                          h(i, (i.gzhead.time >> 24) & 255),
                          h(i, 9 === i.level ? 2 : 4 * (i.strategy >= 2 || i.level < 2)),
                          h(i, 255 & i.gzhead.os),
                          i.gzhead.extra &&
                              i.gzhead.extra.length &&
                              (h(i, 255 & i.gzhead.extra.length), h(i, (i.gzhead.extra.length >> 8) & 255)),
                          i.gzhead.hcrc && (e.adler = o(e.adler, i.pending_buf, i.pending, 0)),
                          (i.gzindex = 0),
                          (i.status = 69))
                        : (h(i, 0),
                          h(i, 0),
                          h(i, 0),
                          h(i, 0),
                          h(i, 0),
                          h(i, 9 === i.level ? 2 : 4 * (i.strategy >= 2 || i.level < 2)),
                          h(i, 3),
                          (i.status = 113));
            else {
                var n,
                    i,
                    a,
                    l,
                    u = (8 + ((i.w_bits - 8) << 4)) << 8;
                (u |= (i.strategy >= 2 || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3) << 6),
                    0 !== i.strstart && (u |= 32),
                    (u += 31 - (u % 31)),
                    (i.status = 113),
                    p(i, u),
                    0 !== i.strstart && (p(i, e.adler >>> 16), p(i, 65535 & e.adler)),
                    (e.adler = 1);
            }
        if (69 === i.status)
            if (i.gzhead.extra) {
                for (
                    a = i.pending;
                    i.gzindex < (65535 & i.gzhead.extra.length) &&
                    (i.pending !== i.pending_buf_size ||
                        (i.gzhead.hcrc && i.pending > a && (e.adler = o(e.adler, i.pending_buf, i.pending - a, a)),
                        f(e),
                        (a = i.pending),
                        i.pending !== i.pending_buf_size));
                )
                    h(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
                i.gzhead.hcrc && i.pending > a && (e.adler = o(e.adler, i.pending_buf, i.pending - a, a)),
                    i.gzindex === i.gzhead.extra.length && ((i.gzindex = 0), (i.status = 73));
            } else i.status = 73;
        if (73 === i.status)
            if (i.gzhead.name) {
                a = i.pending;
                do {
                    if (
                        i.pending === i.pending_buf_size &&
                        (i.gzhead.hcrc && i.pending > a && (e.adler = o(e.adler, i.pending_buf, i.pending - a, a)),
                        f(e),
                        (a = i.pending),
                        i.pending === i.pending_buf_size)
                    ) {
                        l = 1;
                        break;
                    }
                    (l = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0), h(i, l);
                } while (0 !== l);
                i.gzhead.hcrc && i.pending > a && (e.adler = o(e.adler, i.pending_buf, i.pending - a, a)),
                    0 === l && ((i.gzindex = 0), (i.status = 91));
            } else i.status = 91;
        if (91 === i.status)
            if (i.gzhead.comment) {
                a = i.pending;
                do {
                    if (
                        i.pending === i.pending_buf_size &&
                        (i.gzhead.hcrc && i.pending > a && (e.adler = o(e.adler, i.pending_buf, i.pending - a, a)),
                        f(e),
                        (a = i.pending),
                        i.pending === i.pending_buf_size)
                    ) {
                        l = 1;
                        break;
                    }
                    (l = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0),
                        h(i, l);
                } while (0 !== l);
                i.gzhead.hcrc && i.pending > a && (e.adler = o(e.adler, i.pending_buf, i.pending - a, a)),
                    0 === l && (i.status = 103);
            } else i.status = 103;
        if (
            (103 === i.status &&
                (i.gzhead.hcrc
                    ? (i.pending + 2 > i.pending_buf_size && f(e),
                      i.pending + 2 <= i.pending_buf_size &&
                          (h(i, 255 & e.adler), h(i, (e.adler >> 8) & 255), (e.adler = 0), (i.status = 113)))
                    : (i.status = 113)),
            0 !== i.pending)
        ) {
            if ((f(e), 0 === e.avail_out)) return (i.last_flush = -1), 0;
        } else if (0 === e.avail_in && c(t) <= c(n) && 4 !== t) return d(e, -5);
        if (666 === i.status && 0 !== e.avail_in) return d(e, -5);
        if (0 !== e.avail_in || 0 !== i.lookahead || (0 !== t && 666 !== i.status)) {
            var m =
                2 === i.strategy
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
                                  n && (E(e, !1), 0 === e.strm.avail_out))
                              )
                                  return 1;
                          }
                          return ((e.insert = 0), 4 === t)
                              ? (E(e, !0), 0 === e.strm.avail_out)
                                  ? 3
                                  : 4
                              : e.last_lit && (E(e, !1), 0 === e.strm.avail_out)
                                ? 1
                                : 2;
                      })(i, t)
                    : 3 === i.strategy
                      ? (function (e, t) {
                            for (var n, r, i, a, o = e.window; ; ) {
                                if (e.lookahead <= 258) {
                                    if ((g(e), e.lookahead <= 258 && 0 === t)) return 1;
                                    if (0 === e.lookahead) break;
                                }
                                if (
                                    ((e.match_length = 0),
                                    e.lookahead >= 3 &&
                                        e.strstart > 0 &&
                                        (r = o[(i = e.strstart - 1)]) === o[++i] &&
                                        r === o[++i] &&
                                        r === o[++i])
                                ) {
                                    a = e.strstart + 258;
                                    do;
                                    while (
                                        r === o[++i] &&
                                        r === o[++i] &&
                                        r === o[++i] &&
                                        r === o[++i] &&
                                        r === o[++i] &&
                                        r === o[++i] &&
                                        r === o[++i] &&
                                        r === o[++i] &&
                                        i < a
                                    );
                                    (e.match_length = 258 - (a - i)),
                                        e.match_length > e.lookahead && (e.match_length = e.lookahead);
                                }
                                if (
                                    (e.match_length >= 3
                                        ? ((n = s._tr_tally(e, 1, e.match_length - 3)),
                                          (e.lookahead -= e.match_length),
                                          (e.strstart += e.match_length),
                                          (e.match_length = 0))
                                        : ((n = s._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++),
                                    n && (E(e, !1), 0 === e.strm.avail_out))
                                )
                                    return 1;
                            }
                            return ((e.insert = 0), 4 === t)
                                ? (E(e, !0), 0 === e.strm.avail_out)
                                    ? 3
                                    : 4
                                : e.last_lit && (E(e, !1), 0 === e.strm.avail_out)
                                  ? 1
                                  : 2;
                        })(i, t)
                      : r[i.level].func(i, t);
            if (((3 === m || 4 === m) && (i.status = 666), 1 === m || 3 === m))
                return 0 === e.avail_out && (i.last_flush = -1), 0;
            if (
                2 === m &&
                (1 === t
                    ? s._tr_align(i)
                    : 5 !== t &&
                      (s._tr_stored_block(i, 0, 0, !1),
                      3 === t &&
                          (_(i.head), 0 === i.lookahead && ((i.strstart = 0), (i.block_start = 0), (i.insert = 0)))),
                f(e),
                0 === e.avail_out)
            )
                return (i.last_flush = -1), 0;
        }
        return 4 !== t
            ? 0
            : i.wrap <= 0
              ? 1
              : (2 === i.wrap
                    ? (h(i, 255 & e.adler),
                      h(i, (e.adler >> 8) & 255),
                      h(i, (e.adler >> 16) & 255),
                      h(i, (e.adler >> 24) & 255),
                      h(i, 255 & e.total_in),
                      h(i, (e.total_in >> 8) & 255),
                      h(i, (e.total_in >> 16) & 255),
                      h(i, (e.total_in >> 24) & 255))
                    : (p(i, e.adler >>> 16), p(i, 65535 & e.adler)),
                f(e),
                i.wrap > 0 && (i.wrap = -i.wrap),
                +(0 === i.pending));
    }),
    (t.deflateEnd = function (e) {
        var t;
        return e && e.state
            ? 42 !== (t = e.state.status) && 69 !== t && 73 !== t && 91 !== t && 103 !== t && 113 !== t && 666 !== t
                ? d(e, -2)
                : ((e.state = null), 113 === t ? d(e, -3) : 0)
            : -2;
    }),
    (t.deflateSetDictionary = function (e, t) {
        var n,
            r,
            s,
            o,
            l,
            u,
            d,
            c,
            f = t.length;
        if (!e || !e.state || 2 === (o = (n = e.state).wrap) || (1 === o && 42 !== n.status) || n.lookahead) return -2;
        for (
            1 === o && (e.adler = a(e.adler, t, f, 0)),
                n.wrap = 0,
                f >= n.w_size &&
                    (0 === o && (_(n.head), (n.strstart = 0), (n.block_start = 0), (n.insert = 0)),
                    (c = new i.Buf8(n.w_size)),
                    i.arraySet(c, t, f - n.w_size, n.w_size, 0),
                    (t = c),
                    (f = n.w_size)),
                l = e.avail_in,
                u = e.next_in,
                d = e.input,
                e.avail_in = f,
                e.next_in = 0,
                e.input = t,
                g(n);
            n.lookahead >= 3;
        ) {
            (r = n.strstart), (s = n.lookahead - 2);
            do
                (n.ins_h = ((n.ins_h << n.hash_shift) ^ n.window[r + 3 - 1]) & n.hash_mask),
                    (n.prev[r & n.w_mask] = n.head[n.ins_h]),
                    (n.head[n.ins_h] = r),
                    r++;
            while (--s);
            (n.strstart = r), (n.lookahead = 2), g(n);
        }
        return (
            (n.strstart += n.lookahead),
            (n.block_start = n.strstart),
            (n.insert = n.lookahead),
            (n.lookahead = 0),
            (n.match_length = n.prev_length = 2),
            (n.match_available = 0),
            (e.next_in = u),
            (e.input = d),
            (e.avail_in = l),
            (n.wrap = o),
            0
        );
    }),
    (t.deflateInfo = "pako deflate (from Nodeca project)");
