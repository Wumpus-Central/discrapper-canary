var i,
    r = n(754793),
    a = n(831868),
    s = n(660694),
    o = n(899203),
    l = n(441234),
    u = 0,
    c = 1,
    d = 3,
    f = 4,
    _ = 5,
    p = 0,
    h = 1,
    m = -2,
    g = -3,
    E = -5,
    v = -1,
    y = 1,
    I = 2,
    T = 3,
    b = 4,
    S = 0,
    A = 2,
    N = 8,
    C = 9,
    R = 15,
    O = 8,
    D = 286,
    x = 30,
    L = 19,
    P = 573,
    w = 15,
    M = 3,
    k = 258,
    U = 262,
    G = 32,
    B = 42,
    Z = 69,
    F = 73,
    V = 91,
    j = 103,
    H = 113,
    Y = 666,
    W = 1,
    K = 2,
    z = 3,
    q = 4,
    Q = 3;
function X(e, t) {
    return (e.msg = l[t]), t;
}
function J(e) {
    return (e << 1) - (e > 4 ? 9 : 0);
}
function $(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
}
function ee(e) {
    var t = e.state,
        n = t.pending;
    n > e.avail_out && (n = e.avail_out), 0 !== n && (r.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out), (e.next_out += n), (t.pending_out += n), (e.total_out += n), (e.avail_out -= n), (t.pending -= n), 0 === t.pending && (t.pending_out = 0));
}
function et(e, t) {
    a._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), (e.block_start = e.strstart), ee(e.strm);
}
function en(e, t) {
    e.pending_buf[e.pending++] = t;
}
function ei(e, t) {
    (e.pending_buf[e.pending++] = (t >>> 8) & 255), (e.pending_buf[e.pending++] = 255 & t);
}
function er(e, t, n, i) {
    var a = e.avail_in;
    return (a > i && (a = i), 0 === a) ? 0 : ((e.avail_in -= a), r.arraySet(t, e.input, e.next_in, a, n), 1 === e.state.wrap ? (e.adler = s(e.adler, t, a, n)) : 2 === e.state.wrap && (e.adler = o(e.adler, t, a, n)), (e.next_in += a), (e.total_in += a), a);
}
function ea(e, t) {
    var n,
        i,
        r = e.max_chain_length,
        a = e.strstart,
        s = e.prev_length,
        o = e.nice_match,
        l = e.strstart > e.w_size - U ? e.strstart - (e.w_size - U) : 0,
        u = e.window,
        c = e.w_mask,
        d = e.prev,
        f = e.strstart + k,
        _ = u[a + s - 1],
        p = u[a + s];
    e.prev_length >= e.good_match && (r >>= 2), o > e.lookahead && (o = e.lookahead);
    do {
        if (u[(n = t) + s] !== p || u[n + s - 1] !== _ || u[n] !== u[a] || u[++n] !== u[a + 1]) continue;
        (a += 2), n++;
        do;
        while (u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && a < f);
        if (((i = k - (f - a)), (a = f - k), i > s)) {
            if (((e.match_start = t), (s = i), i >= o)) break;
            (_ = u[a + s - 1]), (p = u[a + s]);
        }
    } while ((t = d[t & c]) > l && 0 != --r);
    return s <= e.lookahead ? s : e.lookahead;
}
function es(e) {
    var t,
        n,
        i,
        a,
        s,
        o = e.w_size;
    do {
        if (((a = e.window_size - e.lookahead - e.strstart), e.strstart >= o + (o - U))) {
            r.arraySet(e.window, e.window, o, o, 0), (e.match_start -= o), (e.strstart -= o), (e.block_start -= o), (t = n = e.hash_size);
            do (i = e.head[--t]), (e.head[t] = i >= o ? i - o : 0);
            while (--n);
            t = n = o;
            do (i = e.prev[--t]), (e.prev[t] = i >= o ? i - o : 0);
            while (--n);
            a += o;
        }
        if (0 === e.strm.avail_in) break;
        if (((n = er(e.strm, e.window, e.strstart + e.lookahead, a)), (e.lookahead += n), e.lookahead + e.insert >= M)) for (s = e.strstart - e.insert, e.ins_h = e.window[s], e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[s + 1]) & e.hash_mask; e.insert && ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[s + M - 1]) & e.hash_mask), (e.prev[s & e.w_mask] = e.head[e.ins_h]), (e.head[e.ins_h] = s), s++, e.insert--, !(e.lookahead + e.insert < M)); );
    } while (e.lookahead < U && 0 !== e.strm.avail_in);
}
function eo(e, t) {
    for (var n, i; ; ) {
        if (e.lookahead < U) {
            if ((es(e), e.lookahead < U && t === u)) return W;
            if (0 === e.lookahead) break;
        }
        if (((n = 0), e.lookahead >= M && ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + M - 1]) & e.hash_mask), (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]), (e.head[e.ins_h] = e.strstart)), 0 !== n && e.strstart - n <= e.w_size - U && (e.match_length = ea(e, n)), e.match_length >= M)) {
            if (((i = a._tr_tally(e, e.strstart - e.match_start, e.match_length - M)), (e.lookahead -= e.match_length), e.match_length <= e.max_lazy_match && e.lookahead >= M)) {
                e.match_length--;
                do e.strstart++, (e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + M - 1]) & e.hash_mask), (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]), (e.head[e.ins_h] = e.strstart);
                while (0 != --e.match_length);
                e.strstart++;
            } else (e.strstart += e.match_length), (e.match_length = 0), (e.ins_h = e.window[e.strstart]), (e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 1]) & e.hash_mask);
        } else (i = a._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++;
        if (i && (et(e, !1), 0 === e.strm.avail_out)) return W;
    }
    return ((e.insert = e.strstart < M - 1 ? e.strstart : M - 1), t === f) ? ((et(e, !0), 0 === e.strm.avail_out) ? z : q) : e.last_lit && (et(e, !1), 0 === e.strm.avail_out) ? W : K;
}
function el(e, t) {
    for (var n, i, r; ; ) {
        if (e.lookahead < U) {
            if ((es(e), e.lookahead < U && t === u)) return W;
            if (0 === e.lookahead) break;
        }
        if (((n = 0), e.lookahead >= M && ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + M - 1]) & e.hash_mask), (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]), (e.head[e.ins_h] = e.strstart)), (e.prev_length = e.match_length), (e.prev_match = e.match_start), (e.match_length = M - 1), 0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - U && ((e.match_length = ea(e, n)), e.match_length <= 5 && (e.strategy === y || (e.match_length === M && e.strstart - e.match_start > 4096)) && (e.match_length = M - 1)), e.prev_length >= M && e.match_length <= e.prev_length)) {
            (r = e.strstart + e.lookahead - M), (i = a._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - M)), (e.lookahead -= e.prev_length - 1), (e.prev_length -= 2);
            do ++e.strstart <= r && ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + M - 1]) & e.hash_mask), (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]), (e.head[e.ins_h] = e.strstart));
            while (0 != --e.prev_length);
            if (((e.match_available = 0), (e.match_length = M - 1), e.strstart++, i && (et(e, !1), 0 === e.strm.avail_out))) return W;
        } else if (e.match_available) {
            if (((i = a._tr_tally(e, 0, e.window[e.strstart - 1])) && et(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out)) return W;
        } else (e.match_available = 1), e.strstart++, e.lookahead--;
    }
    return (e.match_available && ((i = a._tr_tally(e, 0, e.window[e.strstart - 1])), (e.match_available = 0)), (e.insert = e.strstart < M - 1 ? e.strstart : M - 1), t === f) ? ((et(e, !0), 0 === e.strm.avail_out) ? z : q) : e.last_lit && (et(e, !1), 0 === e.strm.avail_out) ? W : K;
}
function eu(e, t) {
    for (var n, i, r, s, o = e.window; ; ) {
        if (e.lookahead <= k) {
            if ((es(e), e.lookahead <= k && t === u)) return W;
            if (0 === e.lookahead) break;
        }
        if (((e.match_length = 0), e.lookahead >= M && e.strstart > 0 && (i = o[(r = e.strstart - 1)]) === o[++r] && i === o[++r] && i === o[++r])) {
            s = e.strstart + k;
            do;
            while (i === o[++r] && i === o[++r] && i === o[++r] && i === o[++r] && i === o[++r] && i === o[++r] && i === o[++r] && i === o[++r] && r < s);
            (e.match_length = k - (s - r)), e.match_length > e.lookahead && (e.match_length = e.lookahead);
        }
        if ((e.match_length >= M ? ((n = a._tr_tally(e, 1, e.match_length - M)), (e.lookahead -= e.match_length), (e.strstart += e.match_length), (e.match_length = 0)) : ((n = a._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++), n && (et(e, !1), 0 === e.strm.avail_out))) return W;
    }
    return ((e.insert = 0), t === f) ? ((et(e, !0), 0 === e.strm.avail_out) ? z : q) : e.last_lit && (et(e, !1), 0 === e.strm.avail_out) ? W : K;
}
function ec(e, t) {
    for (var n; ; ) {
        if (0 === e.lookahead && (es(e), 0 === e.lookahead)) {
            if (t === u) return W;
            break;
        }
        if (((e.match_length = 0), (n = a._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++, n && (et(e, !1), 0 === e.strm.avail_out))) return W;
    }
    return ((e.insert = 0), t === f) ? ((et(e, !0), 0 === e.strm.avail_out) ? z : q) : e.last_lit && (et(e, !1), 0 === e.strm.avail_out) ? W : K;
}
function ed(e, t, n, i, r) {
    (this.good_length = e), (this.max_lazy = t), (this.nice_length = n), (this.max_chain = i), (this.func = r);
}
function ef(e) {
    (e.window_size = 2 * e.w_size), $(e.head), (e.max_lazy_match = i[e.level].max_lazy), (e.good_match = i[e.level].good_length), (e.nice_match = i[e.level].nice_length), (e.max_chain_length = i[e.level].max_chain), (e.strstart = 0), (e.block_start = 0), (e.lookahead = 0), (e.insert = 0), (e.match_length = e.prev_length = M - 1), (e.match_available = 0), (e.ins_h = 0);
}
function e_() {
    (this.strm = null), (this.status = 0), (this.pending_buf = null), (this.pending_buf_size = 0), (this.pending_out = 0), (this.pending = 0), (this.wrap = 0), (this.gzhead = null), (this.gzindex = 0), (this.method = N), (this.last_flush = -1), (this.w_size = 0), (this.w_bits = 0), (this.w_mask = 0), (this.window = null), (this.window_size = 0), (this.prev = null), (this.head = null), (this.ins_h = 0), (this.hash_size = 0), (this.hash_bits = 0), (this.hash_mask = 0), (this.hash_shift = 0), (this.block_start = 0), (this.match_length = 0), (this.prev_match = 0), (this.match_available = 0), (this.strstart = 0), (this.match_start = 0), (this.lookahead = 0), (this.prev_length = 0), (this.max_chain_length = 0), (this.max_lazy_match = 0), (this.level = 0), (this.strategy = 0), (this.good_match = 0), (this.nice_match = 0), (this.dyn_ltree = new r.Buf16(2 * P)), (this.dyn_dtree = new r.Buf16((2 * x + 1) * 2)), (this.bl_tree = new r.Buf16((2 * L + 1) * 2)), $(this.dyn_ltree), $(this.dyn_dtree), $(this.bl_tree), (this.l_desc = null), (this.d_desc = null), (this.bl_desc = null), (this.bl_count = new r.Buf16(w + 1)), (this.heap = new r.Buf16(2 * D + 1)), $(this.heap), (this.heap_len = 0), (this.heap_max = 0), (this.depth = new r.Buf16(2 * D + 1)), $(this.depth), (this.l_buf = 0), (this.lit_bufsize = 0), (this.last_lit = 0), (this.d_buf = 0), (this.opt_len = 0), (this.static_len = 0), (this.matches = 0), (this.insert = 0), (this.bi_buf = 0), (this.bi_valid = 0);
}
function ep(e) {
    var t;
    return e && e.state ? ((e.total_in = e.total_out = 0), (e.data_type = A), ((t = e.state).pending = 0), (t.pending_out = 0), t.wrap < 0 && (t.wrap = -t.wrap), (t.status = t.wrap ? B : H), (e.adler = 2 === t.wrap ? 0 : 1), (t.last_flush = u), a._tr_init(t), p) : X(e, m);
}
function eh(e) {
    var t = ep(e);
    return t === p && ef(e.state), t;
}
function em(e, t) {
    return e && e.state && 2 === e.state.wrap ? ((e.state.gzhead = t), p) : m;
}
function eg(e, t, n, i, a, s) {
    if (!e) return m;
    var o = 1;
    if ((t === v && (t = 6), i < 0 ? ((o = 0), (i = -i)) : i > 15 && ((o = 2), (i -= 16)), a < 1 || a > C || n !== N || i < 8 || i > 15 || t < 0 || t > 9 || s < 0 || s > b)) return X(e, m);
    8 === i && (i = 9);
    var l = new e_();
    return (e.state = l), (l.strm = e), (l.wrap = o), (l.gzhead = null), (l.w_bits = i), (l.w_size = 1 << l.w_bits), (l.w_mask = l.w_size - 1), (l.hash_bits = a + 7), (l.hash_size = 1 << l.hash_bits), (l.hash_mask = l.hash_size - 1), (l.hash_shift = ~~((l.hash_bits + M - 1) / M)), (l.window = new r.Buf8(2 * l.w_size)), (l.head = new r.Buf16(l.hash_size)), (l.prev = new r.Buf16(l.w_size)), (l.lit_bufsize = 1 << (a + 6)), (l.pending_buf_size = 4 * l.lit_bufsize), (l.pending_buf = new r.Buf8(l.pending_buf_size)), (l.d_buf = 1 * l.lit_bufsize), (l.l_buf = 3 * l.lit_bufsize), (l.level = t), (l.strategy = s), (l.method = n), eh(e);
}
function eE(e, t) {
    return eg(e, t, N, R, O, S);
}
function ev(e, t) {
    if (!e || !e.state || t > _ || t < 0) return e ? X(e, m) : m;
    if (((r = e.state), !e.output || (!e.input && 0 !== e.avail_in) || (r.status === Y && t !== f))) return X(e, 0 === e.avail_out ? E : m);
    if (((r.strm = e), (n = r.last_flush), (r.last_flush = t), r.status === B)) {
        if (2 === r.wrap) (e.adler = 0), en(r, 31), en(r, 139), en(r, 8), r.gzhead ? (en(r, (r.gzhead.text ? 1 : 0) + (r.gzhead.hcrc ? 2 : 0) + (r.gzhead.extra ? 4 : 0) + (r.gzhead.name ? 8 : 0) + (r.gzhead.comment ? 16 : 0)), en(r, 255 & r.gzhead.time), en(r, (r.gzhead.time >> 8) & 255), en(r, (r.gzhead.time >> 16) & 255), en(r, (r.gzhead.time >> 24) & 255), en(r, 9 === r.level ? 2 : r.strategy >= I || r.level < 2 ? 4 : 0), en(r, 255 & r.gzhead.os), r.gzhead.extra && r.gzhead.extra.length && (en(r, 255 & r.gzhead.extra.length), en(r, (r.gzhead.extra.length >> 8) & 255)), r.gzhead.hcrc && (e.adler = o(e.adler, r.pending_buf, r.pending, 0)), (r.gzindex = 0), (r.status = Z)) : (en(r, 0), en(r, 0), en(r, 0), en(r, 0), en(r, 0), en(r, 9 === r.level ? 2 : r.strategy >= I || r.level < 2 ? 4 : 0), en(r, Q), (r.status = H));
        else {
            var n,
                r,
                s,
                l,
                g = (N + ((r.w_bits - 8) << 4)) << 8,
                v = -1;
            (g |= (v = r.strategy >= I || r.level < 2 ? 0 : r.level < 6 ? 1 : 6 === r.level ? 2 : 3) << 6), 0 !== r.strstart && (g |= G), (g += 31 - (g % 31)), (r.status = H), ei(r, g), 0 !== r.strstart && (ei(r, e.adler >>> 16), ei(r, 65535 & e.adler)), (e.adler = 1);
        }
    }
    if (r.status === Z) {
        if (r.gzhead.extra) {
            for (s = r.pending; r.gzindex < (65535 & r.gzhead.extra.length) && (r.pending !== r.pending_buf_size || (r.gzhead.hcrc && r.pending > s && (e.adler = o(e.adler, r.pending_buf, r.pending - s, s)), ee(e), (s = r.pending), r.pending !== r.pending_buf_size)); ) en(r, 255 & r.gzhead.extra[r.gzindex]), r.gzindex++;
            r.gzhead.hcrc && r.pending > s && (e.adler = o(e.adler, r.pending_buf, r.pending - s, s)), r.gzindex === r.gzhead.extra.length && ((r.gzindex = 0), (r.status = F));
        } else r.status = F;
    }
    if (r.status === F) {
        if (r.gzhead.name) {
            s = r.pending;
            do {
                if (r.pending === r.pending_buf_size && (r.gzhead.hcrc && r.pending > s && (e.adler = o(e.adler, r.pending_buf, r.pending - s, s)), ee(e), (s = r.pending), r.pending === r.pending_buf_size)) {
                    l = 1;
                    break;
                }
                (l = r.gzindex < r.gzhead.name.length ? 255 & r.gzhead.name.charCodeAt(r.gzindex++) : 0), en(r, l);
            } while (0 !== l);
            r.gzhead.hcrc && r.pending > s && (e.adler = o(e.adler, r.pending_buf, r.pending - s, s)), 0 === l && ((r.gzindex = 0), (r.status = V));
        } else r.status = V;
    }
    if (r.status === V) {
        if (r.gzhead.comment) {
            s = r.pending;
            do {
                if (r.pending === r.pending_buf_size && (r.gzhead.hcrc && r.pending > s && (e.adler = o(e.adler, r.pending_buf, r.pending - s, s)), ee(e), (s = r.pending), r.pending === r.pending_buf_size)) {
                    l = 1;
                    break;
                }
                (l = r.gzindex < r.gzhead.comment.length ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++) : 0), en(r, l);
            } while (0 !== l);
            r.gzhead.hcrc && r.pending > s && (e.adler = o(e.adler, r.pending_buf, r.pending - s, s)), 0 === l && (r.status = j);
        } else r.status = j;
    }
    if ((r.status === j && (r.gzhead.hcrc ? (r.pending + 2 > r.pending_buf_size && ee(e), r.pending + 2 <= r.pending_buf_size && (en(r, 255 & e.adler), en(r, (e.adler >> 8) & 255), (e.adler = 0), (r.status = H))) : (r.status = H)), 0 !== r.pending)) {
        if ((ee(e), 0 === e.avail_out)) return (r.last_flush = -1), p;
    } else if (0 === e.avail_in && J(t) <= J(n) && t !== f) return X(e, E);
    if (r.status === Y && 0 !== e.avail_in) return X(e, E);
    if (0 !== e.avail_in || 0 !== r.lookahead || (t !== u && r.status !== Y)) {
        var y = r.strategy === I ? ec(r, t) : r.strategy === T ? eu(r, t) : i[r.level].func(r, t);
        if (((y === z || y === q) && (r.status = Y), y === W || y === z)) return 0 === e.avail_out && (r.last_flush = -1), p;
        if (y === K && (t === c ? a._tr_align(r) : t !== _ && (a._tr_stored_block(r, 0, 0, !1), t === d && ($(r.head), 0 === r.lookahead && ((r.strstart = 0), (r.block_start = 0), (r.insert = 0)))), ee(e), 0 === e.avail_out)) return (r.last_flush = -1), p;
    }
    return t !== f ? p : r.wrap <= 0 ? h : (2 === r.wrap ? (en(r, 255 & e.adler), en(r, (e.adler >> 8) & 255), en(r, (e.adler >> 16) & 255), en(r, (e.adler >> 24) & 255), en(r, 255 & e.total_in), en(r, (e.total_in >> 8) & 255), en(r, (e.total_in >> 16) & 255), en(r, (e.total_in >> 24) & 255)) : (ei(r, e.adler >>> 16), ei(r, 65535 & e.adler)), ee(e), r.wrap > 0 && (r.wrap = -r.wrap), 0 !== r.pending ? p : h);
}
function ey(e) {
    var t;
    return e && e.state ? ((t = e.state.status) !== B && t !== Z && t !== F && t !== V && t !== j && t !== H && t !== Y ? X(e, m) : ((e.state = null), t === H ? X(e, g) : p)) : m;
}
function eI(e, t) {
    var n,
        i,
        a,
        o,
        l,
        u,
        c,
        d,
        f = t.length;
    if (!e || !e.state || 2 === (o = (n = e.state).wrap) || (1 === o && n.status !== B) || n.lookahead) return m;
    for (1 === o && (e.adler = s(e.adler, t, f, 0)), n.wrap = 0, f >= n.w_size && (0 === o && ($(n.head), (n.strstart = 0), (n.block_start = 0), (n.insert = 0)), (d = new r.Buf8(n.w_size)), r.arraySet(d, t, f - n.w_size, n.w_size, 0), (t = d), (f = n.w_size)), l = e.avail_in, u = e.next_in, c = e.input, e.avail_in = f, e.next_in = 0, e.input = t, es(n); n.lookahead >= M; ) {
        (i = n.strstart), (a = n.lookahead - (M - 1));
        do (n.ins_h = ((n.ins_h << n.hash_shift) ^ n.window[i + M - 1]) & n.hash_mask), (n.prev[i & n.w_mask] = n.head[n.ins_h]), (n.head[n.ins_h] = i), i++;
        while (--a);
        (n.strstart = i), (n.lookahead = M - 1), es(n);
    }
    return (n.strstart += n.lookahead), (n.block_start = n.strstart), (n.insert = n.lookahead), (n.lookahead = 0), (n.match_length = n.prev_length = M - 1), (n.match_available = 0), (e.next_in = u), (e.input = c), (e.avail_in = l), (n.wrap = o), p;
}
(i = [
    new ed(0, 0, 0, 0, function (e, t) {
        var n = 65535;
        for (65535 > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ; ) {
            if (e.lookahead <= 1) {
                if ((es(e), 0 === e.lookahead && t === u)) return W;
                if (0 === e.lookahead) break;
            }
            (e.strstart += e.lookahead), (e.lookahead = 0);
            var i = e.block_start + n;
            if (((0 === e.strstart || e.strstart >= i) && ((e.lookahead = e.strstart - i), (e.strstart = i), et(e, !1), 0 === e.strm.avail_out)) || (e.strstart - e.block_start >= e.w_size - U && (et(e, !1), 0 === e.strm.avail_out))) return W;
        }
        return ((e.insert = 0), t === f) ? ((et(e, !0), 0 === e.strm.avail_out) ? z : q) : (e.strstart > e.block_start && (et(e, !1), e.strm.avail_out), W);
    }),
    new ed(4, 4, 8, 4, eo),
    new ed(4, 5, 16, 8, eo),
    new ed(4, 6, 32, 32, eo),
    new ed(4, 4, 16, 16, el),
    new ed(8, 16, 32, 32, el),
    new ed(8, 16, 128, 128, el),
    new ed(8, 32, 128, 256, el),
    new ed(32, 128, 258, 1024, el),
    new ed(32, 258, 258, 4096, el)
]),
    (t.deflateInit = eE),
    (t.deflateInit2 = eg),
    (t.deflateReset = eh),
    (t.deflateResetKeep = ep),
    (t.deflateSetHeader = em),
    (t.deflate = ev),
    (t.deflateEnd = ey),
    (t.deflateSetDictionary = eI),
    (t.deflateInfo = 'pako deflate (from Nodeca project)');
