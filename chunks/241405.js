var i = n(223509),
    r = n(754793),
    a = n(911725),
    s = n(154470),
    o = n(441234),
    l = n(404625),
    u = n(769667),
    c = Object.prototype.toString;
function d(e) {
    if (!(this instanceof d)) return new d(e);
    this.options = r.assign(
        {
            chunkSize: 16384,
            windowBits: 0,
            to: ''
        },
        e || {}
    );
    var t = this.options;
    t.raw && t.windowBits >= 0 && t.windowBits < 16 && ((t.windowBits = -t.windowBits), 0 === t.windowBits && (t.windowBits = -15)), t.windowBits >= 0 && t.windowBits < 16 && !(e && e.windowBits) && (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && (15 & t.windowBits) == 0 && (t.windowBits |= 15), (this.err = 0), (this.msg = ''), (this.ended = !1), (this.chunks = []), (this.strm = new l()), (this.strm.avail_out = 0);
    var n = i.inflateInit2(this.strm, t.windowBits);
    if (n !== s.Z_OK) throw Error(o[n]);
    (this.header = new u()), i.inflateGetHeader(this.strm, this.header);
}
function f(e, t) {
    var n = new d(t);
    if ((n.push(e, !0), n.err)) throw n.msg || o[n.err];
    return n.result;
}
function _(e, t) {
    return ((t = t || {}).raw = !0), f(e, t);
}
(d.prototype.push = function (e, t) {
    var n,
        o,
        l,
        u,
        d,
        f,
        _ = this.strm,
        p = this.options.chunkSize,
        h = this.options.dictionary,
        m = !1;
    if (this.ended) return !1;
    (o = t === ~~t ? t : !0 === t ? s.Z_FINISH : s.Z_NO_FLUSH), 'string' == typeof e ? (_.input = a.binstring2buf(e)) : '[object ArrayBuffer]' === c.call(e) ? (_.input = new Uint8Array(e)) : (_.input = e), (_.next_in = 0), (_.avail_in = _.input.length);
    do {
        if ((0 === _.avail_out && ((_.output = new r.Buf8(p)), (_.next_out = 0), (_.avail_out = p)), (n = i.inflate(_, s.Z_NO_FLUSH)) === s.Z_NEED_DICT && h && ((f = 'string' == typeof h ? a.string2buf(h) : '[object ArrayBuffer]' === c.call(h) ? new Uint8Array(h) : h), (n = i.inflateSetDictionary(this.strm, f))), n === s.Z_BUF_ERROR && !0 === m && ((n = s.Z_OK), (m = !1)), n !== s.Z_STREAM_END && n !== s.Z_OK)) return this.onEnd(n), (this.ended = !0), !1;
        _.next_out && (0 === _.avail_out || n === s.Z_STREAM_END || (0 === _.avail_in && (o === s.Z_FINISH || o === s.Z_SYNC_FLUSH))) && ('string' === this.options.to ? ((l = a.utf8border(_.output, _.next_out)), (u = _.next_out - l), (d = a.buf2string(_.output, l)), (_.next_out = u), (_.avail_out = p - u), u && r.arraySet(_.output, _.output, l, u, 0), this.onData(d)) : this.onData(r.shrinkBuf(_.output, _.next_out))), 0 === _.avail_in && 0 === _.avail_out && (m = !0);
    } while ((_.avail_in > 0 || 0 === _.avail_out) && n !== s.Z_STREAM_END);
    return (n === s.Z_STREAM_END && (o = s.Z_FINISH), o === s.Z_FINISH) ? ((n = i.inflateEnd(this.strm)), this.onEnd(n), (this.ended = !0), n === s.Z_OK) : (o === s.Z_SYNC_FLUSH && (this.onEnd(s.Z_OK), (_.avail_out = 0)), !0);
}),
    (d.prototype.onData = function (e) {
        this.chunks.push(e);
    }),
    (d.prototype.onEnd = function (e) {
        e === s.Z_OK && ('string' === this.options.to ? (this.result = this.chunks.join('')) : (this.result = r.flattenChunks(this.chunks))), (this.chunks = []), (this.err = e), (this.msg = this.strm.msg);
    }),
    (t.Inflate = d),
    (t.inflate = f),
    (t.inflateRaw = _),
    (t.ungzip = f);
