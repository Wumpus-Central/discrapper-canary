var i,
    a = r(754793),
    s = r(831868),
    o = r(660694),
    l = r(899203),
    u = r(441234),
    c = 0,
    d = 1,
    f = 3,
    _ = 4,
    h = 5,
    p = 0,
    m = 1,
    g = -2,
    E = -3,
    v = -5,
    I = -1,
    T = 1,
    b = 2,
    y = 3,
    S = 4,
    A = 0,
    N = 2,
    C = 8,
    R = 9,
    O = 15,
    D = 8,
    L = 286,
    x = 30,
    w = 19,
    P = 573,
    M = 15,
    k = 3,
    U = 258,
    B = 262,
    G = 32,
    Z = 42,
    F = 69,
    V = 73,
    j = 91,
    H = 103,
    Y = 113,
    W = 666,
    K = 1,
    z = 2,
    q = 3,
    Q = 4,
    X = 3;
function J(e, n) {
    return (e.msg = u[n]), n;
}
function $(e) {
    return (e << 1) - (e > 4 ? 9 : 0);
}
function ee(e) {
    for (var n = e.length; --n >= 0; ) e[n] = 0;
}
function et(e) {
    var n = e.state,
        r = n.pending;
    if ((r > e.avail_out && (r = e.avail_out), 0 !== r)) a.arraySet(e.output, n.pending_buf, n.pending_out, r, e.next_out), (e.next_out += r), (n.pending_out += r), (e.total_out += r), (e.avail_out -= r), (n.pending -= r), 0 === n.pending && (n.pending_out = 0);
}
function en(e, n) {
    s._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, n), (e.block_start = e.strstart), et(e.strm);
}
function er(e, n) {
    e.pending_buf[e.pending++] = n;
}
function ei(e, n) {
    (e.pending_buf[e.pending++] = (n >>> 8) & 255), (e.pending_buf[e.pending++] = 255 & n);
}
function ea(e, n, r, i) {
    var s = e.avail_in;
    return (s > i && (s = i), 0 === s) ? 0 : ((e.avail_in -= s), a.arraySet(n, e.input, e.next_in, s, r), 1 === e.state.wrap ? (e.adler = o(e.adler, n, s, r)) : 2 === e.state.wrap && (e.adler = l(e.adler, n, s, r)), (e.next_in += s), (e.total_in += s), s);
}
function es(e, n) {
    var r,
        i,
        a = e.max_chain_length,
        s = e.strstart,
        o = e.prev_length,
        l = e.nice_match,
        u = e.strstart > e.w_size - B ? e.strstart - (e.w_size - B) : 0,
        c = e.window,
        d = e.w_mask,
        f = e.prev,
        _ = e.strstart + U,
        h = c[s + o - 1],
        p = c[s + o];
    e.prev_length >= e.good_match && (a >>= 2), l > e.lookahead && (l = e.lookahead);
    do {
        if (c[(r = n) + o] !== p || c[r + o - 1] !== h || c[r] !== c[s] || c[++r] !== c[s + 1]) continue;
        (s += 2), r++;
        do;
        while (c[++s] === c[++r] && c[++s] === c[++r] && c[++s] === c[++r] && c[++s] === c[++r] && c[++s] === c[++r] && c[++s] === c[++r] && c[++s] === c[++r] && c[++s] === c[++r] && s < _);
        if (((i = U - (_ - s)), (s = _ - U), i > o)) {
            if (((e.match_start = n), (o = i), i >= l)) break;
            (h = c[s + o - 1]), (p = c[s + o]);
        }
    } while ((n = f[n & d]) > u && 0 != --a);
    return o <= e.lookahead ? o : e.lookahead;
}
function eo(e) {
    var n,
        r,
        i,
        s,
        o,
        l = e.w_size;
    do {
        if (((s = e.window_size - e.lookahead - e.strstart), e.strstart >= l + (l - B))) {
            a.arraySet(e.window, e.window, l, l, 0), (e.match_start -= l), (e.strstart -= l), (e.block_start -= l), (n = r = e.hash_size);
            do (i = e.head[--n]), (e.head[n] = i >= l ? i - l : 0);
            while (--r);
            n = r = l;
            do (i = e.prev[--n]), (e.prev[n] = i >= l ? i - l : 0);
            while (--r);
            s += l;
        }
        if (0 === e.strm.avail_in) break;
        if (((r = ea(e.strm, e.window, e.strstart + e.lookahead, s)), (e.lookahead += r), e.lookahead + e.insert >= k)) for (o = e.strstart - e.insert, e.ins_h = e.window[o], e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[o + 1]) & e.hash_mask; e.insert && ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[o + k - 1]) & e.hash_mask), (e.prev[o & e.w_mask] = e.head[e.ins_h]), (e.head[e.ins_h] = o), o++, e.insert--, !(e.lookahead + e.insert < k)); );
    } while (e.lookahead < B && 0 !== e.strm.avail_in);
}
function el(e, n) {
    for (var r, i; ; ) {
        if (e.lookahead < B) {
            if ((eo(e), e.lookahead < B && n === c)) return K;
            if (0 === e.lookahead) break;
        }
        if (((r = 0), e.lookahead >= k && ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + k - 1]) & e.hash_mask), (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]), (e.head[e.ins_h] = e.strstart)), 0 !== r && e.strstart - r <= e.w_size - B && (e.match_length = es(e, r)), e.match_length >= k)) {
            if (((i = s._tr_tally(e, e.strstart - e.match_start, e.match_length - k)), (e.lookahead -= e.match_length), e.match_length <= e.max_lazy_match && e.lookahead >= k)) {
                e.match_length--;
                do e.strstart++, (e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + k - 1]) & e.hash_mask), (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]), (e.head[e.ins_h] = e.strstart);
                while (0 != --e.match_length);
                e.strstart++;
            } else (e.strstart += e.match_length), (e.match_length = 0), (e.ins_h = e.window[e.strstart]), (e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 1]) & e.hash_mask);
        } else (i = s._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++;
        if (i && (en(e, !1), 0 === e.strm.avail_out)) return K;
    }
    if (((e.insert = e.strstart < k - 1 ? e.strstart : k - 1), n === _)) return (en(e, !0), 0 === e.strm.avail_out) ? q : Q;
    return e.last_lit && (en(e, !1), 0 === e.strm.avail_out) ? K : z;
}
function eu(e, n) {
    for (var r, i, a; ; ) {
        if (e.lookahead < B) {
            if ((eo(e), e.lookahead < B && n === c)) return K;
            if (0 === e.lookahead) break;
        }
        if (((r = 0), e.lookahead >= k && ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + k - 1]) & e.hash_mask), (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]), (e.head[e.ins_h] = e.strstart)), (e.prev_length = e.match_length), (e.prev_match = e.match_start), (e.match_length = k - 1), 0 !== r && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - B && ((e.match_length = es(e, r)), e.match_length <= 5 && (e.strategy === T || (e.match_length === k && e.strstart - e.match_start > 4096)) && (e.match_length = k - 1)), e.prev_length >= k && e.match_length <= e.prev_length)) {
            (a = e.strstart + e.lookahead - k), (i = s._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - k)), (e.lookahead -= e.prev_length - 1), (e.prev_length -= 2);
            do ++e.strstart <= a && ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + k - 1]) & e.hash_mask), (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]), (e.head[e.ins_h] = e.strstart));
            while (0 != --e.prev_length);
            if (((e.match_available = 0), (e.match_length = k - 1), e.strstart++, i && (en(e, !1), 0 === e.strm.avail_out))) return K;
        } else if (e.match_available) {
            if (((i = s._tr_tally(e, 0, e.window[e.strstart - 1])) && en(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out)) return K;
        } else (e.match_available = 1), e.strstart++, e.lookahead--;
    }
    if ((e.match_available && ((i = s._tr_tally(e, 0, e.window[e.strstart - 1])), (e.match_available = 0)), (e.insert = e.strstart < k - 1 ? e.strstart : k - 1), n === _)) return (en(e, !0), 0 === e.strm.avail_out) ? q : Q;
    return e.last_lit && (en(e, !1), 0 === e.strm.avail_out) ? K : z;
}
function ec(e, n) {
    for (var r, i, a, o, l = e.window; ; ) {
        if (e.lookahead <= U) {
            if ((eo(e), e.lookahead <= U && n === c)) return K;
            if (0 === e.lookahead) break;
        }
        if (((e.match_length = 0), e.lookahead >= k && e.strstart > 0 && (i = l[(a = e.strstart - 1)]) === l[++a] && i === l[++a] && i === l[++a])) {
            o = e.strstart + U;
            do;
            while (i === l[++a] && i === l[++a] && i === l[++a] && i === l[++a] && i === l[++a] && i === l[++a] && i === l[++a] && i === l[++a] && a < o);
            (e.match_length = U - (o - a)), e.match_length > e.lookahead && (e.match_length = e.lookahead);
        }
        if ((e.match_length >= k ? ((r = s._tr_tally(e, 1, e.match_length - k)), (e.lookahead -= e.match_length), (e.strstart += e.match_length), (e.match_length = 0)) : ((r = s._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++), r && (en(e, !1), 0 === e.strm.avail_out))) return K;
    }
    if (((e.insert = 0), n === _)) return (en(e, !0), 0 === e.strm.avail_out) ? q : Q;
    return e.last_lit && (en(e, !1), 0 === e.strm.avail_out) ? K : z;
}
function ed(e, n) {
    for (var r; ; ) {
        if (0 === e.lookahead && (eo(e), 0 === e.lookahead)) {
            if (n === c) return K;
            break;
        }
        if (((e.match_length = 0), (r = s._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++, r && (en(e, !1), 0 === e.strm.avail_out))) return K;
    }
    if (((e.insert = 0), n === _)) return (en(e, !0), 0 === e.strm.avail_out) ? q : Q;
    return e.last_lit && (en(e, !1), 0 === e.strm.avail_out) ? K : z;
}
function ef(e, n, r, i, a) {
    (this.good_length = e), (this.max_lazy = n), (this.nice_length = r), (this.max_chain = i), (this.func = a);
}
function e_(e) {
    (e.window_size = 2 * e.w_size), ee(e.head), (e.max_lazy_match = i[e.level].max_lazy), (e.good_match = i[e.level].good_length), (e.nice_match = i[e.level].nice_length), (e.max_chain_length = i[e.level].max_chain), (e.strstart = 0), (e.block_start = 0), (e.lookahead = 0), (e.insert = 0), (e.match_length = e.prev_length = k - 1), (e.match_available = 0), (e.ins_h = 0);
}
function eh() {
    (this.strm = null), (this.status = 0), (this.pending_buf = null), (this.pending_buf_size = 0), (this.pending_out = 0), (this.pending = 0), (this.wrap = 0), (this.gzhead = null), (this.gzindex = 0), (this.method = C), (this.last_flush = -1), (this.w_size = 0), (this.w_bits = 0), (this.w_mask = 0), (this.window = null), (this.window_size = 0), (this.prev = null), (this.head = null), (this.ins_h = 0), (this.hash_size = 0), (this.hash_bits = 0), (this.hash_mask = 0), (this.hash_shift = 0), (this.block_start = 0), (this.match_length = 0), (this.prev_match = 0), (this.match_available = 0), (this.strstart = 0), (this.match_start = 0), (this.lookahead = 0), (this.prev_length = 0), (this.max_chain_length = 0), (this.max_lazy_match = 0), (this.level = 0), (this.strategy = 0), (this.good_match = 0), (this.nice_match = 0), (this.dyn_ltree = new a.Buf16(2 * P)), (this.dyn_dtree = new a.Buf16((2 * x + 1) * 2)), (this.bl_tree = new a.Buf16((2 * w + 1) * 2)), ee(this.dyn_ltree), ee(this.dyn_dtree), ee(this.bl_tree), (this.l_desc = null), (this.d_desc = null), (this.bl_desc = null), (this.bl_count = new a.Buf16(M + 1)), (this.heap = new a.Buf16(2 * L + 1)), ee(this.heap), (this.heap_len = 0), (this.heap_max = 0), (this.depth = new a.Buf16(2 * L + 1)), ee(this.depth), (this.l_buf = 0), (this.lit_bufsize = 0), (this.last_lit = 0), (this.d_buf = 0), (this.opt_len = 0), (this.static_len = 0), (this.matches = 0), (this.insert = 0), (this.bi_buf = 0), (this.bi_valid = 0);
}
function ep(e) {
    var n;
    return e && e.state ? ((e.total_in = e.total_out = 0), (e.data_type = N), ((n = e.state).pending = 0), (n.pending_out = 0), n.wrap < 0 && (n.wrap = -n.wrap), (n.status = n.wrap ? Z : Y), (e.adler = 2 === n.wrap ? 0 : 1), (n.last_flush = c), s._tr_init(n), p) : J(e, g);
}
function em(e) {
    var n = ep(e);
    return n === p && e_(e.state), n;
}
function eg(e, n) {
    return e && e.state && 2 === e.state.wrap ? ((e.state.gzhead = n), p) : g;
}
function eE(e, n, r, i, s, o) {
    if (!e) return g;
    var l = 1;
    if ((n === I && (n = 6), i < 0 ? ((l = 0), (i = -i)) : i > 15 && ((l = 2), (i -= 16)), s < 1 || s > R || r !== C || i < 8 || i > 15 || n < 0 || n > 9 || o < 0 || o > S)) return J(e, g);
    8 === i && (i = 9);
    var u = new eh();
    return (e.state = u), (u.strm = e), (u.wrap = l), (u.gzhead = null), (u.w_bits = i), (u.w_size = 1 << u.w_bits), (u.w_mask = u.w_size - 1), (u.hash_bits = s + 7), (u.hash_size = 1 << u.hash_bits), (u.hash_mask = u.hash_size - 1), (u.hash_shift = ~~((u.hash_bits + k - 1) / k)), (u.window = new a.Buf8(2 * u.w_size)), (u.head = new a.Buf16(u.hash_size)), (u.prev = new a.Buf16(u.w_size)), (u.lit_bufsize = 1 << (s + 6)), (u.pending_buf_size = 4 * u.lit_bufsize), (u.pending_buf = new a.Buf8(u.pending_buf_size)), (u.d_buf = 1 * u.lit_bufsize), (u.l_buf = 3 * u.lit_bufsize), (u.level = n), (u.strategy = o), (u.method = r), em(e);
}
function ev(e, n) {
    return eE(e, n, C, O, D, A);
}
function eI(e, n) {
    if (!e || !e.state || n > h || n < 0) return e ? J(e, g) : g;
    if (((a = e.state), !e.output || (!e.input && 0 !== e.avail_in) || (a.status === W && n !== _))) return J(e, 0 === e.avail_out ? v : g);
    if (((a.strm = e), (r = a.last_flush), (a.last_flush = n), a.status === Z)) {
        if (2 === a.wrap) (e.adler = 0), er(a, 31), er(a, 139), er(a, 8), a.gzhead ? (er(a, (a.gzhead.text ? 1 : 0) + (a.gzhead.hcrc ? 2 : 0) + (a.gzhead.extra ? 4 : 0) + (a.gzhead.name ? 8 : 0) + (a.gzhead.comment ? 16 : 0)), er(a, 255 & a.gzhead.time), er(a, (a.gzhead.time >> 8) & 255), er(a, (a.gzhead.time >> 16) & 255), er(a, (a.gzhead.time >> 24) & 255), er(a, 9 === a.level ? 2 : a.strategy >= b || a.level < 2 ? 4 : 0), er(a, 255 & a.gzhead.os), a.gzhead.extra && a.gzhead.extra.length && (er(a, 255 & a.gzhead.extra.length), er(a, (a.gzhead.extra.length >> 8) & 255)), a.gzhead.hcrc && (e.adler = l(e.adler, a.pending_buf, a.pending, 0)), (a.gzindex = 0), (a.status = F)) : (er(a, 0), er(a, 0), er(a, 0), er(a, 0), er(a, 0), er(a, 9 === a.level ? 2 : a.strategy >= b || a.level < 2 ? 4 : 0), er(a, X), (a.status = Y));
        else {
            var r,
                a,
                o,
                u,
                E = (C + ((a.w_bits - 8) << 4)) << 8,
                I = -1;
            (E |= (I = a.strategy >= b || a.level < 2 ? 0 : a.level < 6 ? 1 : 6 === a.level ? 2 : 3) << 6), 0 !== a.strstart && (E |= G), (E += 31 - (E % 31)), (a.status = Y), ei(a, E), 0 !== a.strstart && (ei(a, e.adler >>> 16), ei(a, 65535 & e.adler)), (e.adler = 1);
        }
    }
    if (a.status === F) {
        if (a.gzhead.extra) {
            for (o = a.pending; a.gzindex < (65535 & a.gzhead.extra.length) && (a.pending !== a.pending_buf_size || (a.gzhead.hcrc && a.pending > o && (e.adler = l(e.adler, a.pending_buf, a.pending - o, o)), et(e), (o = a.pending), a.pending !== a.pending_buf_size)); ) {
                er(a, 255 & a.gzhead.extra[a.gzindex]), a.gzindex++;
            }
            a.gzhead.hcrc && a.pending > o && (e.adler = l(e.adler, a.pending_buf, a.pending - o, o)), a.gzindex === a.gzhead.extra.length && ((a.gzindex = 0), (a.status = V));
        } else a.status = V;
    }
    if (a.status === V) {
        if (a.gzhead.name) {
            o = a.pending;
            do {
                if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > o && (e.adler = l(e.adler, a.pending_buf, a.pending - o, o)), et(e), (o = a.pending), a.pending === a.pending_buf_size)) {
                    u = 1;
                    break;
                }
                (u = a.gzindex < a.gzhead.name.length ? 255 & a.gzhead.name.charCodeAt(a.gzindex++) : 0), er(a, u);
            } while (0 !== u);
            a.gzhead.hcrc && a.pending > o && (e.adler = l(e.adler, a.pending_buf, a.pending - o, o)), 0 === u && ((a.gzindex = 0), (a.status = j));
        } else a.status = j;
    }
    if (a.status === j) {
        if (a.gzhead.comment) {
            o = a.pending;
            do {
                if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > o && (e.adler = l(e.adler, a.pending_buf, a.pending - o, o)), et(e), (o = a.pending), a.pending === a.pending_buf_size)) {
                    u = 1;
                    break;
                }
                (u = a.gzindex < a.gzhead.comment.length ? 255 & a.gzhead.comment.charCodeAt(a.gzindex++) : 0), er(a, u);
            } while (0 !== u);
            a.gzhead.hcrc && a.pending > o && (e.adler = l(e.adler, a.pending_buf, a.pending - o, o)), 0 === u && (a.status = H);
        } else a.status = H;
    }
    if ((a.status === H && (a.gzhead.hcrc ? (a.pending + 2 > a.pending_buf_size && et(e), a.pending + 2 <= a.pending_buf_size && (er(a, 255 & e.adler), er(a, (e.adler >> 8) & 255), (e.adler = 0), (a.status = Y))) : (a.status = Y)), 0 !== a.pending)) {
        if ((et(e), 0 === e.avail_out)) return (a.last_flush = -1), p;
    } else if (0 === e.avail_in && $(n) <= $(r) && n !== _) return J(e, v);
    if (a.status === W && 0 !== e.avail_in) return J(e, v);
    if (0 !== e.avail_in || 0 !== a.lookahead || (n !== c && a.status !== W)) {
        var T = a.strategy === b ? ed(a, n) : a.strategy === y ? ec(a, n) : i[a.level].func(a, n);
        if (((T === q || T === Q) && (a.status = W), T === K || T === q)) return 0 === e.avail_out && (a.last_flush = -1), p;
        if (T === z && (n === d ? s._tr_align(a) : n !== h && (s._tr_stored_block(a, 0, 0, !1), n === f && (ee(a.head), 0 === a.lookahead && ((a.strstart = 0), (a.block_start = 0), (a.insert = 0)))), et(e), 0 === e.avail_out)) return (a.last_flush = -1), p;
    }
    return n !== _ ? p : a.wrap <= 0 ? m : (2 === a.wrap ? (er(a, 255 & e.adler), er(a, (e.adler >> 8) & 255), er(a, (e.adler >> 16) & 255), er(a, (e.adler >> 24) & 255), er(a, 255 & e.total_in), er(a, (e.total_in >> 8) & 255), er(a, (e.total_in >> 16) & 255), er(a, (e.total_in >> 24) & 255)) : (ei(a, e.adler >>> 16), ei(a, 65535 & e.adler)), et(e), a.wrap > 0 && (a.wrap = -a.wrap), 0 !== a.pending ? p : m);
}
function eT(e) {
    var n;
    return e && e.state ? ((n = e.state.status) !== Z && n !== F && n !== V && n !== j && n !== H && n !== Y && n !== W ? J(e, g) : ((e.state = null), n === Y ? J(e, E) : p)) : g;
}
function eb(e, n) {
    var r,
        i,
        s,
        l,
        u,
        c,
        d,
        f,
        _ = n.length;
    if (!e || !e.state || 2 === (l = (r = e.state).wrap) || (1 === l && r.status !== Z) || r.lookahead) return g;
    for (1 === l && (e.adler = o(e.adler, n, _, 0)), r.wrap = 0, _ >= r.w_size && (0 === l && (ee(r.head), (r.strstart = 0), (r.block_start = 0), (r.insert = 0)), (f = new a.Buf8(r.w_size)), a.arraySet(f, n, _ - r.w_size, r.w_size, 0), (n = f), (_ = r.w_size)), u = e.avail_in, c = e.next_in, d = e.input, e.avail_in = _, e.next_in = 0, e.input = n, eo(r); r.lookahead >= k; ) {
        (i = r.strstart), (s = r.lookahead - (k - 1));
        do (r.ins_h = ((r.ins_h << r.hash_shift) ^ r.window[i + k - 1]) & r.hash_mask), (r.prev[i & r.w_mask] = r.head[r.ins_h]), (r.head[r.ins_h] = i), i++;
        while (--s);
        (r.strstart = i), (r.lookahead = k - 1), eo(r);
    }
    return (r.strstart += r.lookahead), (r.block_start = r.strstart), (r.insert = r.lookahead), (r.lookahead = 0), (r.match_length = r.prev_length = k - 1), (r.match_available = 0), (e.next_in = c), (e.input = d), (e.avail_in = u), (r.wrap = l), p;
}
(i = [
    new ef(0, 0, 0, 0, function e(e, n) {
        var r = 65535;
        for (65535 > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5); ; ) {
            if (e.lookahead <= 1) {
                if ((eo(e), 0 === e.lookahead && n === c)) return K;
                if (0 === e.lookahead) break;
            }
            (e.strstart += e.lookahead), (e.lookahead = 0);
            var i = e.block_start + r;
            if (((0 === e.strstart || e.strstart >= i) && ((e.lookahead = e.strstart - i), (e.strstart = i), en(e, !1), 0 === e.strm.avail_out)) || (e.strstart - e.block_start >= e.w_size - B && (en(e, !1), 0 === e.strm.avail_out))) return K;
        }
        if (((e.insert = 0), n === _)) return (en(e, !0), 0 === e.strm.avail_out) ? q : Q;
        return e.strstart > e.block_start && (en(e, !1), e.strm.avail_out), K;
    }),
    new ef(4, 4, 8, 4, el),
    new ef(4, 5, 16, 8, el),
    new ef(4, 6, 32, 32, el),
    new ef(4, 4, 16, 16, eu),
    new ef(8, 16, 32, 32, eu),
    new ef(8, 16, 128, 128, eu),
    new ef(8, 32, 128, 256, eu),
    new ef(32, 128, 258, 1024, eu),
    new ef(32, 258, 258, 4096, eu)
]),
    (n.deflateInit = ev),
    (n.deflateInit2 = eE),
    (n.deflateReset = em),
    (n.deflateResetKeep = ep),
    (n.deflateSetHeader = eg),
    (n.deflate = eI),
    (n.deflateEnd = eT),
    (n.deflateSetDictionary = eb),
    (n.deflateInfo = 'pako deflate (from Nodeca project)');
