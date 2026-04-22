"use strict";
var r = n(683402),
    i = n(549412),
    s = n(382811),
    a = n(163173),
    o = n(267795),
    l = Object.prototype.toString;
function u(e) {
    if (!(this instanceof u)) return new u(e);
    this.options = i.assign(
        { level: -1, method: 8, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: 0, to: "" },
        e || {},
    );
    var t,
        n = this.options;
    n.raw && n.windowBits > 0
        ? (n.windowBits = -n.windowBits)
        : n.gzip && n.windowBits > 0 && n.windowBits < 16 && (n.windowBits += 16),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new o()),
        (this.strm.avail_out = 0);
    var d = r.deflateInit2(this.strm, n.level, n.method, n.windowBits, n.memLevel, n.strategy);
    if (0 !== d) throw Error(a[d]);
    if ((n.header && r.deflateSetHeader(this.strm, n.header), n.dictionary)) {
        if (
            ((t =
                "string" == typeof n.dictionary
                    ? s.string2buf(n.dictionary)
                    : "[object ArrayBuffer]" === l.call(n.dictionary)
                      ? new Uint8Array(n.dictionary)
                      : n.dictionary),
            0 !== (d = r.deflateSetDictionary(this.strm, t)))
        )
            throw Error(a[d]);
        this._dict_set = !0;
    }
}
function d(e, t) {
    var n = new u(t);
    if ((n.push(e, !0), n.err)) throw n.msg || a[n.err];
    return n.result;
}
(u.prototype.push = function (e, t) {
    var n,
        a,
        o = this.strm,
        u = this.options.chunkSize;
    if (this.ended) return !1;
    (a = t === ~~t ? t : 4 * (!0 === t)),
        "string" == typeof e
            ? (o.input = s.string2buf(e))
            : "[object ArrayBuffer]" === l.call(e)
              ? (o.input = new Uint8Array(e))
              : (o.input = e),
        (o.next_in = 0),
        (o.avail_in = o.input.length);
    do {
        if (
            (0 === o.avail_out && ((o.output = new i.Buf8(u)), (o.next_out = 0), (o.avail_out = u)),
            1 !== (n = r.deflate(o, a)) && 0 !== n)
        )
            return this.onEnd(n), (this.ended = !0), !1;
        (0 === o.avail_out || (0 === o.avail_in && (4 === a || 2 === a))) &&
            ("string" === this.options.to
                ? this.onData(s.buf2binstring(i.shrinkBuf(o.output, o.next_out)))
                : this.onData(i.shrinkBuf(o.output, o.next_out)));
    } while ((o.avail_in > 0 || 0 === o.avail_out) && 1 !== n);
    return 4 === a
        ? ((n = r.deflateEnd(this.strm)), this.onEnd(n), (this.ended = !0), 0 === n)
        : (2 === a && (this.onEnd(0), (o.avail_out = 0)), !0);
}),
    (u.prototype.onData = function (e) {
        this.chunks.push(e);
    }),
    (u.prototype.onEnd = function (e) {
        0 === e &&
            ("string" === this.options.to
                ? (this.result = this.chunks.join(""))
                : (this.result = i.flattenChunks(this.chunks))),
            (this.chunks = []),
            (this.err = e),
            (this.msg = this.strm.msg);
    }),
    (t.Deflate = u),
    (t.deflate = d),
    (t.deflateRaw = function (e, t) {
        return ((t = t || {}).raw = !0), d(e, t);
    }),
    (t.gzip = function (e, t) {
        return ((t = t || {}).gzip = !0), d(e, t);
    });
