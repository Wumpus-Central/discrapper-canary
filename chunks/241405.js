var i = r(223509),
    a = r(754793),
    o = r(911725),
    s = r(154470),
    l = r(441234),
    u = r(404625),
    c = r(769667),
    d = Object.prototype.toString;
function f(e) {
    if (!(this instanceof f)) return new f(e);
    this.options = a.assign(
        {
            chunkSize: 16384,
            windowBits: 0,
            to: ''
        },
        e || {}
    );
    var n = this.options;
    n.raw && n.windowBits >= 0 && n.windowBits < 16 && ((n.windowBits = -n.windowBits), 0 === n.windowBits && (n.windowBits = -15)), n.windowBits >= 0 && n.windowBits < 16 && !(e && e.windowBits) && (n.windowBits += 32), n.windowBits > 15 && n.windowBits < 48 && (15 & n.windowBits) == 0 && (n.windowBits |= 15), (this.err = 0), (this.msg = ''), (this.ended = !1), (this.chunks = []), (this.strm = new u()), (this.strm.avail_out = 0);
    var r = i.inflateInit2(this.strm, n.windowBits);
    if (r !== s.Z_OK) throw Error(l[r]);
    (this.header = new c()), i.inflateGetHeader(this.strm, this.header);
}
function p(e, n) {
    var r = new f(n);
    if ((r.push(e, !0), r.err)) throw r.msg || l[r.err];
    return r.result;
}
function h(e, n) {
    return ((n = n || {}).raw = !0), p(e, n);
}
(f.prototype.push = function (e, n) {
    var r,
        l,
        u,
        c,
        f,
        p,
        h = this.strm,
        _ = this.options.chunkSize,
        m = this.options.dictionary,
        g = !1;
    if (this.ended) return !1;
    (l = n === ~~n ? n : !0 === n ? s.Z_FINISH : s.Z_NO_FLUSH), 'string' == typeof e ? (h.input = o.binstring2buf(e)) : '[object ArrayBuffer]' === d.call(e) ? (h.input = new Uint8Array(e)) : (h.input = e), (h.next_in = 0), (h.avail_in = h.input.length);
    do {
        if ((0 === h.avail_out && ((h.output = new a.Buf8(_)), (h.next_out = 0), (h.avail_out = _)), (r = i.inflate(h, s.Z_NO_FLUSH)) === s.Z_NEED_DICT && m && ((p = 'string' == typeof m ? o.string2buf(m) : '[object ArrayBuffer]' === d.call(m) ? new Uint8Array(m) : m), (r = i.inflateSetDictionary(this.strm, p))), r === s.Z_BUF_ERROR && !0 === g && ((r = s.Z_OK), (g = !1)), r !== s.Z_STREAM_END && r !== s.Z_OK)) return this.onEnd(r), (this.ended = !0), !1;
        h.next_out && (0 === h.avail_out || r === s.Z_STREAM_END || (0 === h.avail_in && (l === s.Z_FINISH || l === s.Z_SYNC_FLUSH))) && ('string' === this.options.to ? ((u = o.utf8border(h.output, h.next_out)), (c = h.next_out - u), (f = o.buf2string(h.output, u)), (h.next_out = c), (h.avail_out = _ - c), c && a.arraySet(h.output, h.output, u, c, 0), this.onData(f)) : this.onData(a.shrinkBuf(h.output, h.next_out))), 0 === h.avail_in && 0 === h.avail_out && (g = !0);
    } while ((h.avail_in > 0 || 0 === h.avail_out) && r !== s.Z_STREAM_END);
    return (r === s.Z_STREAM_END && (l = s.Z_FINISH), l === s.Z_FINISH) ? ((r = i.inflateEnd(this.strm)), this.onEnd(r), (this.ended = !0), r === s.Z_OK) : (l === s.Z_SYNC_FLUSH && (this.onEnd(s.Z_OK), (h.avail_out = 0)), !0);
}),
    (f.prototype.onData = function (e) {
        this.chunks.push(e);
    }),
    (f.prototype.onEnd = function (e) {
        e === s.Z_OK && ('string' === this.options.to ? (this.result = this.chunks.join('')) : (this.result = a.flattenChunks(this.chunks))), (this.chunks = []), (this.err = e), (this.msg = this.strm.msg);
    }),
    (n.Inflate = f),
    (n.inflate = p),
    (n.inflateRaw = h),
    (n.ungzip = p);
