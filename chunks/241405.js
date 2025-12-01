var r = n(223509),
    i = n(754793),
    a = n(911725),
    o = n(154470),
    s = n(441234),
    l = n(404625),
    c = n(769667),
    u = Object.prototype.toString;
function d(e) {
    if (!(this instanceof d)) return new d(e);
    this.options = i.assign(
        {
            chunkSize: 16384,
            windowBits: 0,
            to: "",
        },
        e || {},
    );
    var t = this.options;
    t.raw &&
        t.windowBits >= 0 &&
        t.windowBits < 16 &&
        ((t.windowBits = -t.windowBits), 0 === t.windowBits && (t.windowBits = -15)),
        t.windowBits >= 0 && t.windowBits < 16 && !(e && e.windowBits) && (t.windowBits += 32),
        t.windowBits > 15 && t.windowBits < 48 && (15 & t.windowBits) == 0 && (t.windowBits |= 15),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new l()),
        (this.strm.avail_out = 0);
    var n = r.inflateInit2(this.strm, t.windowBits);
    if (n !== o.Z_OK) throw Error(s[n]);
    (this.header = new c()), r.inflateGetHeader(this.strm, this.header);
}
function f(e, t) {
    var n = new d(t);
    if ((n.push(e, !0), n.err)) throw n.msg || s[n.err];
    return n.result;
}
function p(e, t) {
    return ((t = t || {}).raw = !0), f(e, t);
}
(d.prototype.push = function (e, t) {
    var n,
        s,
        l,
        c,
        d,
        f,
        p = this.strm,
        _ = this.options.chunkSize,
        m = this.options.dictionary,
        h = !1;
    if (this.ended) return !1;
    (s = t === ~~t ? t : !0 === t ? o.Z_FINISH : o.Z_NO_FLUSH),
        "string" == typeof e
            ? (p.input = a.binstring2buf(e))
            : "[object ArrayBuffer]" === u.call(e)
              ? (p.input = new Uint8Array(e))
              : (p.input = e),
        (p.next_in = 0),
        (p.avail_in = p.input.length);
    do {
        if (
            (0 === p.avail_out && ((p.output = new i.Buf8(_)), (p.next_out = 0), (p.avail_out = _)),
            (n = r.inflate(p, o.Z_NO_FLUSH)) === o.Z_NEED_DICT &&
                m &&
                ((f =
                    "string" == typeof m
                        ? a.string2buf(m)
                        : "[object ArrayBuffer]" === u.call(m)
                          ? new Uint8Array(m)
                          : m),
                (n = r.inflateSetDictionary(this.strm, f))),
            n === o.Z_BUF_ERROR && !0 === h && ((n = o.Z_OK), (h = !1)),
            n !== o.Z_STREAM_END && n !== o.Z_OK)
        )
            return this.onEnd(n), (this.ended = !0), !1;
        p.next_out &&
            (0 === p.avail_out ||
                n === o.Z_STREAM_END ||
                (0 === p.avail_in && (s === o.Z_FINISH || s === o.Z_SYNC_FLUSH))) &&
            ("string" === this.options.to
                ? ((l = a.utf8border(p.output, p.next_out)),
                  (c = p.next_out - l),
                  (d = a.buf2string(p.output, l)),
                  (p.next_out = c),
                  (p.avail_out = _ - c),
                  c && i.arraySet(p.output, p.output, l, c, 0),
                  this.onData(d))
                : this.onData(i.shrinkBuf(p.output, p.next_out))),
            0 === p.avail_in && 0 === p.avail_out && (h = !0);
    } while ((p.avail_in > 0 || 0 === p.avail_out) && n !== o.Z_STREAM_END);
    return (n === o.Z_STREAM_END && (s = o.Z_FINISH), s === o.Z_FINISH)
        ? ((n = r.inflateEnd(this.strm)), this.onEnd(n), (this.ended = !0), n === o.Z_OK)
        : (s === o.Z_SYNC_FLUSH && (this.onEnd(o.Z_OK), (p.avail_out = 0)), !0);
}),
    (d.prototype.onData = function (e) {
        this.chunks.push(e);
    }),
    (d.prototype.onEnd = function (e) {
        e === o.Z_OK &&
            ("string" === this.options.to
                ? (this.result = this.chunks.join(""))
                : (this.result = i.flattenChunks(this.chunks))),
            (this.chunks = []),
            (this.err = e),
            (this.msg = this.strm.msg);
    }),
    (t.Inflate = d),
    (t.inflate = f),
    (t.inflateRaw = p),
    (t.ungzip = f);
