var r = n(288537),
    i = n(754793),
    o = n(911725),
    a = n(441234),
    s = n(404625),
    l = Object.prototype.toString,
    c = 0,
    u = 4,
    d = 0,
    f = 1,
    _ = 2,
    p = -1,
    h = 0,
    m = 8;
function g(e) {
    if (!(this instanceof g)) return new g(e);
    this.options = i.assign(
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
    n.raw && n.windowBits > 0 ? (n.windowBits = -n.windowBits) : n.gzip && n.windowBits > 0 && n.windowBits < 16 && (n.windowBits += 16), (this.err = 0), (this.msg = ''), (this.ended = !1), (this.chunks = []), (this.strm = new s()), (this.strm.avail_out = 0);
    var c = r.deflateInit2(this.strm, n.level, n.method, n.windowBits, n.memLevel, n.strategy);
    if (c !== d) throw Error(a[c]);
    if ((n.header && r.deflateSetHeader(this.strm, n.header), n.dictionary)) {
        if (((t = 'string' == typeof n.dictionary ? o.string2buf(n.dictionary) : '[object ArrayBuffer]' === l.call(n.dictionary) ? new Uint8Array(n.dictionary) : n.dictionary), (c = r.deflateSetDictionary(this.strm, t)) !== d)) throw Error(a[c]);
        this._dict_set = !0;
    }
}
function E(e, t) {
    var n = new g(t);
    if ((n.push(e, !0), n.err)) throw n.msg || a[n.err];
    return n.result;
}
function b(e, t) {
    return ((t = t || {}).raw = !0), E(e, t);
}
function y(e, t) {
    return ((t = t || {}).gzip = !0), E(e, t);
}
(g.prototype.push = function (e, t) {
    var n,
        a,
        s = this.strm,
        p = this.options.chunkSize;
    if (this.ended) return !1;
    (a = t === ~~t ? t : !0 === t ? u : c), 'string' == typeof e ? (s.input = o.string2buf(e)) : '[object ArrayBuffer]' === l.call(e) ? (s.input = new Uint8Array(e)) : (s.input = e), (s.next_in = 0), (s.avail_in = s.input.length);
    do {
        if ((0 === s.avail_out && ((s.output = new i.Buf8(p)), (s.next_out = 0), (s.avail_out = p)), (n = r.deflate(s, a)) !== f && n !== d)) return this.onEnd(n), (this.ended = !0), !1;
        (0 === s.avail_out || (0 === s.avail_in && (a === u || a === _))) && ('string' === this.options.to ? this.onData(o.buf2binstring(i.shrinkBuf(s.output, s.next_out))) : this.onData(i.shrinkBuf(s.output, s.next_out)));
    } while ((s.avail_in > 0 || 0 === s.avail_out) && n !== f);
    return a === u ? ((n = r.deflateEnd(this.strm)), this.onEnd(n), (this.ended = !0), n === d) : (a === _ && (this.onEnd(d), (s.avail_out = 0)), !0);
}),
    (g.prototype.onData = function (e) {
        this.chunks.push(e);
    }),
    (g.prototype.onEnd = function (e) {
        e === d && ('string' === this.options.to ? (this.result = this.chunks.join('')) : (this.result = i.flattenChunks(this.chunks))), (this.chunks = []), (this.err = e), (this.msg = this.strm.msg);
    }),
    (t.Deflate = g),
    (t.deflate = E),
    (t.deflateRaw = b),
    (t.gzip = y);
