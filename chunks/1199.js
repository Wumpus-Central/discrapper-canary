let r = n(689118),
    i = n(814033),
    o = n(873994).DecoderBuffer,
    a = n(206424),
    s = n(375990);
function l(e) {
    (this.enc = 'der'), (this.name = e.name), (this.entity = e), (this.tree = new c()), this.tree._init(e.body);
}
function c(e) {
    a.call(this, 'der', e);
}
function u(e, t) {
    let n = e.readUInt8(t);
    if (e.isError(n)) return n;
    let r = s.tagClass[n >> 6],
        i = (32 & n) == 0;
    if ((31 & n) == 31) {
        let r = n;
        for (n = 0; (128 & r) == 128; ) {
            if (((r = e.readUInt8(t)), e.isError(r))) return r;
            (n <<= 7), (n |= 127 & r);
        }
    } else n &= 31;
    let o = s.tag[n];
    return {
        cls: r,
        primitive: i,
        tag: n,
        tagStr: o
    };
}
function d(e, t, n) {
    let r = e.readUInt8(n);
    if (e.isError(r)) return r;
    if (!t && 128 === r) return null;
    if ((128 & r) == 0) return r;
    let i = 127 & r;
    if (i > 4) return e.error('length octect is too long');
    r = 0;
    for (let t = 0; t < i; t++) {
        r <<= 8;
        let t = e.readUInt8(n);
        if (e.isError(t)) return t;
        r |= t;
    }
    return r;
}
(e.exports = l),
    (l.prototype.decode = function (e, t) {
        return o.isDecoderBuffer(e) || (e = new o(e, t)), this.tree._decode(e, t);
    }),
    r(c, a),
    (c.prototype._peekTag = function (e, t, n) {
        if (e.isEmpty()) return !1;
        let r = e.save(),
            i = u(e, 'Failed to peek tag: "' + t + '"');
        return e.isError(i) ? i : (e.restore(r), i.tag === t || i.tagStr === t || i.tagStr + 'of' === t || n);
    }),
    (c.prototype._decodeTag = function (e, t, n) {
        let r = u(e, 'Failed to decode tag of "' + t + '"');
        if (e.isError(r)) return r;
        let i = d(e, r.primitive, 'Failed to get length of "' + t + '"');
        if (e.isError(i)) return i;
        if (!n && r.tag !== t && r.tagStr !== t && r.tagStr + 'of' !== t) return e.error('Failed to match tag: "' + t + '"');
        if (r.primitive || null !== i) return e.skip(i, 'Failed to match body of: "' + t + '"');
        let o = e.save(),
            a = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"');
        return e.isError(a) ? a : ((i = e.offset - o.offset), e.restore(o), e.skip(i, 'Failed to match body of: "' + t + '"'));
    }),
    (c.prototype._skipUntilEnd = function (e, t) {
        for (;;) {
            let n;
            let r = u(e, t);
            if (e.isError(r)) return r;
            let i = d(e, r.primitive, t);
            if (e.isError(i)) return i;
            if (((n = r.primitive || null !== i ? e.skip(i) : this._skipUntilEnd(e, t)), e.isError(n))) return n;
            if ('end' === r.tagStr) break;
        }
    }),
    (c.prototype._decodeList = function (e, t, n, r) {
        let i = [];
        for (; !e.isEmpty(); ) {
            let t = this._peekTag(e, 'end');
            if (e.isError(t)) return t;
            let o = n.decode(e, 'der', r);
            if (e.isError(o) && t) break;
            i.push(o);
        }
        return i;
    }),
    (c.prototype._decodeStr = function (e, t) {
        if ('bitstr' === t) {
            let t = e.readUInt8();
            return e.isError(t)
                ? t
                : {
                      unused: t,
                      data: e.raw()
                  };
        }
        if ('bmpstr' === t) {
            let t = e.raw();
            if (t.length % 2 == 1) return e.error('Decoding of string type: bmpstr length mismatch');
            let n = '';
            for (let e = 0; e < t.length / 2; e++) n += String.fromCharCode(t.readUInt16BE(2 * e));
            return n;
        }
        if ('numstr' === t) {
            let t = e.raw().toString('ascii');
            return this._isNumstr(t) ? t : e.error('Decoding of string type: numstr unsupported characters');
        }
        if ('octstr' === t) return e.raw();
        if ('objDesc' === t) return e.raw();
        else if ('printstr' === t) {
            let t = e.raw().toString('ascii');
            return this._isPrintstr(t) ? t : e.error('Decoding of string type: printstr unsupported characters');
        } else if (/str$/.test(t)) return e.raw().toString();
        else return e.error('Decoding of string type: ' + t + ' unsupported');
    }),
    (c.prototype._decodeObjid = function (e, t, n) {
        let r;
        let i = [],
            o = 0,
            a = 0;
        for (; !e.isEmpty(); ) (a = e.readUInt8()), (o <<= 7), (o |= 127 & a), (128 & a) == 0 && (i.push(o), (o = 0));
        128 & a && i.push(o);
        let s = (i[0] / 40) | 0,
            l = i[0] % 40;
        if (((r = n ? i : [s, l].concat(i.slice(1))), t)) {
            let e = t[r.join(' ')];
            void 0 === e && (e = t[r.join('.')]), void 0 !== e && (r = e);
        }
        return r;
    }),
    (c.prototype._decodeTime = function (e, t) {
        let n, r, i, o, a, s;
        let l = e.raw().toString();
        if ('gentime' === t) (n = 0 | l.slice(0, 4)), (r = 0 | l.slice(4, 6)), (i = 0 | l.slice(6, 8)), (o = 0 | l.slice(8, 10)), (a = 0 | l.slice(10, 12)), (s = 0 | l.slice(12, 14));
        else {
            if ('utctime' !== t) return e.error('Decoding ' + t + ' time is not supported yet');
            (n = 0 | l.slice(0, 2)), (r = 0 | l.slice(2, 4)), (i = 0 | l.slice(4, 6)), (o = 0 | l.slice(6, 8)), (a = 0 | l.slice(8, 10)), (s = 0 | l.slice(10, 12)), (n = n < 70 ? 2000 + n : 1900 + n);
        }
        return Date.UTC(n, r - 1, i, o, a, s, 0);
    }),
    (c.prototype._decodeNull = function () {
        return null;
    }),
    (c.prototype._decodeBool = function (e) {
        let t = e.readUInt8();
        return e.isError(t) ? t : 0 !== t;
    }),
    (c.prototype._decodeInt = function (e, t) {
        let n = new i(e.raw());
        return t && (n = t[n.toString(10)] || n), n;
    }),
    (c.prototype._use = function (e, t) {
        return 'function' == typeof e && (e = e(t)), e._getDecoder('der').tree;
    });
