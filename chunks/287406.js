var i = n(288537),
    r = n(754793),
    a = n(911725),
    s = n(441234),
    o = n(404625),
    l = Object.prototype.toString,
    u = 0,
    c = 4,
    d = 0,
    f = 1,
    _ = 2,
    p = -1,
    h = 0,
    m = 8;
function g(e) {
    if (!(this instanceof g)) return new g(e);
    this.options = r.assign(
        {
            level: p,
            method: m,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: h,
            to: ''
        },
        e || {}
    );
    var t,
        n = this.options;
    n.raw && n.windowBits > 0 ? (n.windowBits = -n.windowBits) : n.gzip && n.windowBits > 0 && n.windowBits < 16 && (n.windowBits += 16), (this.err = 0), (this.msg = ''), (this.ended = !1), (this.chunks = []), (this.strm = new o()), (this.strm.avail_out = 0);
    var u = i.deflateInit2(this.strm, n.level, n.method, n.windowBits, n.memLevel, n.strategy);
    if (u !== d) throw Error(s[u]);
    if ((n.header && i.deflateSetHeader(this.strm, n.header), n.dictionary)) {
        if (((t = 'string' == typeof n.dictionary ? a.string2buf(n.dictionary) : '[object ArrayBuffer]' === l.call(n.dictionary) ? new Uint8Array(n.dictionary) : n.dictionary), (u = i.deflateSetDictionary(this.strm, t)) !== d)) throw Error(s[u]);
        this._dict_set = !0;
    }
}
function E(e, t) {
    var n = new g(t);
    if ((n.push(e, !0), n.err)) throw n.msg || s[n.err];
    return n.result;
}
function v(e, t) {
    return ((t = t || {}).raw = !0), E(e, t);
}
function y(e, t) {
    return ((t = t || {}).gzip = !0), E(e, t);
}
(g.prototype.push = function (e, t) {
    var n,
        s,
        o = this.strm,
        p = this.options.chunkSize;
    if (this.ended) return !1;
    (s = t === ~~t ? t : !0 === t ? c : u), 'string' == typeof e ? (o.input = a.string2buf(e)) : '[object ArrayBuffer]' === l.call(e) ? (o.input = new Uint8Array(e)) : (o.input = e), (o.next_in = 0), (o.avail_in = o.input.length);
    do {
        if ((0 === o.avail_out && ((o.output = new r.Buf8(p)), (o.next_out = 0), (o.avail_out = p)), (n = i.deflate(o, s)) !== f && n !== d)) return this.onEnd(n), (this.ended = !0), !1;
        (0 === o.avail_out || (0 === o.avail_in && (s === c || s === _))) && ('string' === this.options.to ? this.onData(a.buf2binstring(r.shrinkBuf(o.output, o.next_out))) : this.onData(r.shrinkBuf(o.output, o.next_out)));
    } while ((o.avail_in > 0 || 0 === o.avail_out) && n !== f);
    return s === c ? ((n = i.deflateEnd(this.strm)), this.onEnd(n), (this.ended = !0), n === d) : (s === _ && (this.onEnd(d), (o.avail_out = 0)), !0);
}),
    (g.prototype.onData = function (e) {
        this.chunks.push(e);
    }),
    (g.prototype.onEnd = function (e) {
        e === d && ('string' === this.options.to ? (this.result = this.chunks.join('')) : (this.result = r.flattenChunks(this.chunks))), (this.chunks = []), (this.err = e), (this.msg = this.strm.msg);
    }),
    (t.Deflate = g),
    (t.deflate = E),
    (t.deflateRaw = v),
    (t.gzip = y);
