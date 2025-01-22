var i = r(288537),
    a = r(754793),
    o = r(911725),
    s = r(441234),
    l = r(404625),
    u = Object.prototype.toString,
    c = 0,
    d = 4,
    f = 0,
    p = 1,
    h = 2,
    _ = -1,
    m = 0,
    g = 8;
function E(e) {
    if (!(this instanceof E)) return new E(e);
    this.options = a.assign(
        {
            level: _,
            method: g,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: m,
            to: ''
        },
        e || {}
    );
    var n,
        r = this.options;
    r.raw && r.windowBits > 0 ? (r.windowBits = -r.windowBits) : r.gzip && r.windowBits > 0 && r.windowBits < 16 && (r.windowBits += 16), (this.err = 0), (this.msg = ''), (this.ended = !1), (this.chunks = []), (this.strm = new l()), (this.strm.avail_out = 0);
    var c = i.deflateInit2(this.strm, r.level, r.method, r.windowBits, r.memLevel, r.strategy);
    if (c !== f) throw Error(s[c]);
    if ((r.header && i.deflateSetHeader(this.strm, r.header), r.dictionary)) {
        if (((n = 'string' == typeof r.dictionary ? o.string2buf(r.dictionary) : '[object ArrayBuffer]' === u.call(r.dictionary) ? new Uint8Array(r.dictionary) : r.dictionary), (c = i.deflateSetDictionary(this.strm, n)) !== f)) throw Error(s[c]);
        this._dict_set = !0;
    }
}
function v(e, n) {
    var r = new E(n);
    if ((r.push(e, !0), r.err)) throw r.msg || s[r.err];
    return r.result;
}
function y(e, n) {
    return ((n = n || {}).raw = !0), v(e, n);
}
function b(e, n) {
    return ((n = n || {}).gzip = !0), v(e, n);
}
(E.prototype.push = function (e, n) {
    var r,
        s,
        l = this.strm,
        _ = this.options.chunkSize;
    if (this.ended) return !1;
    (s = n === ~~n ? n : !0 === n ? d : c), 'string' == typeof e ? (l.input = o.string2buf(e)) : '[object ArrayBuffer]' === u.call(e) ? (l.input = new Uint8Array(e)) : (l.input = e), (l.next_in = 0), (l.avail_in = l.input.length);
    do {
        if ((0 === l.avail_out && ((l.output = new a.Buf8(_)), (l.next_out = 0), (l.avail_out = _)), (r = i.deflate(l, s)) !== p && r !== f)) return this.onEnd(r), (this.ended = !0), !1;
        (0 === l.avail_out || (0 === l.avail_in && (s === d || s === h))) && ('string' === this.options.to ? this.onData(o.buf2binstring(a.shrinkBuf(l.output, l.next_out))) : this.onData(a.shrinkBuf(l.output, l.next_out)));
    } while ((l.avail_in > 0 || 0 === l.avail_out) && r !== p);
    return s === d ? ((r = i.deflateEnd(this.strm)), this.onEnd(r), (this.ended = !0), r === f) : (s === h && (this.onEnd(f), (l.avail_out = 0)), !0);
}),
    (E.prototype.onData = function (e) {
        this.chunks.push(e);
    }),
    (E.prototype.onEnd = function (e) {
        e === f && ('string' === this.options.to ? (this.result = this.chunks.join('')) : (this.result = a.flattenChunks(this.chunks))), (this.chunks = []), (this.err = e), (this.msg = this.strm.msg);
    }),
    (n.Deflate = E),
    (n.deflate = v),
    (n.deflateRaw = y),
    (n.gzip = b);
