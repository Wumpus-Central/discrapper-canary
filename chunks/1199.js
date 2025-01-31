let i = n(689118),
    r = n(814033),
    a = n(873994).DecoderBuffer,
    s = n(206424),
    o = n(375990);
function l(e) {
    (this.enc = 'der'), (this.name = e.name), (this.entity = e), (this.tree = new u()), this.tree._init(e.body);
}
function u(e) {
    s.call(this, 'der', e);
}
function c(e, t) {
    let n = e.readUInt8(t);
    if (e.isError(n)) return n;
    let i = o.tagClass[n >> 6],
        r = (32 & n) == 0;
    if ((31 & n) == 31) {
        let i = n;
        for (n = 0; (128 & i) == 128; ) {
            if (((i = e.readUInt8(t)), e.isError(i))) return i;
            (n <<= 7), (n |= 127 & i);
        }
    } else n &= 31;
    let a = o.tag[n];
    return {
        cls: i,
        primitive: r,
        tag: n,
        tagStr: a
    };
}
function d(e, t, n) {
    let i = e.readUInt8(n);
    if (e.isError(i)) return i;
    if (!t && 128 === i) return null;
    if ((128 & i) == 0) return i;
    let r = 127 & i;
    if (r > 4) return e.error('length octect is too long');
    i = 0;
    for (let t = 0; t < r; t++) {
        i <<= 8;
        let t = e.readUInt8(n);
        if (e.isError(t)) return t;
        i |= t;
    }
    return i;
}
(e.exports = l),
    (l.prototype.decode = function (e, t) {
        return a.isDecoderBuffer(e) || (e = new a(e, t)), this.tree._decode(e, t);
    }),
    i(u, s),
    (u.prototype._peekTag = function (e, t, n) {
        if (e.isEmpty()) return !1;
        let i = e.save(),
            r = c(e, 'Failed to peek tag: "' + t + '"');
        return e.isError(r) ? r : (e.restore(i), r.tag === t || r.tagStr === t || r.tagStr + 'of' === t || n);
    }),
    (u.prototype._decodeTag = function (e, t, n) {
        let i = c(e, 'Failed to decode tag of "' + t + '"');
        if (e.isError(i)) return i;
        let r = d(e, i.primitive, 'Failed to get length of "' + t + '"');
        if (e.isError(r)) return r;
        if (!n && i.tag !== t && i.tagStr !== t && i.tagStr + 'of' !== t) return e.error('Failed to match tag: "' + t + '"');
        if (i.primitive || null !== r) return e.skip(r, 'Failed to match body of: "' + t + '"');
        let a = e.save(),
            s = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"');
        return e.isError(s) ? s : ((r = e.offset - a.offset), e.restore(a), e.skip(r, 'Failed to match body of: "' + t + '"'));
    }),
    (u.prototype._skipUntilEnd = function (e, t) {
        for (;;) {
            let n;
            let i = c(e, t);
            if (e.isError(i)) return i;
            let r = d(e, i.primitive, t);
            if (e.isError(r)) return r;
            if (((n = i.primitive || null !== r ? e.skip(r) : this._skipUntilEnd(e, t)), e.isError(n))) return n;
            if ('end' === i.tagStr) break;
        }
    }),
    (u.prototype._decodeList = function (e, t, n, i) {
        let r = [];
        for (; !e.isEmpty(); ) {
            let t = this._peekTag(e, 'end');
            if (e.isError(t)) return t;
            let a = n.decode(e, 'der', i);
            if (e.isError(a) && t) break;
            r.push(a);
        }
        return r;
    }),
    (u.prototype._decodeStr = function (e, t) {
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
    (u.prototype._decodeObjid = function (e, t, n) {
        let i;
        let r = [],
            a = 0,
            s = 0;
        for (; !e.isEmpty(); ) (s = e.readUInt8()), (a <<= 7), (a |= 127 & s), (128 & s) == 0 && (r.push(a), (a = 0));
        128 & s && r.push(a);
        let o = (r[0] / 40) | 0,
            l = r[0] % 40;
        if (((i = n ? r : [o, l].concat(r.slice(1))), t)) {
            let e = t[i.join(' ')];
            void 0 === e && (e = t[i.join('.')]), void 0 !== e && (i = e);
        }
        return i;
    }),
    (u.prototype._decodeTime = function (e, t) {
        let n, i, r, a, s, o;
        let l = e.raw().toString();
        if ('gentime' === t) (n = 0 | l.slice(0, 4)), (i = 0 | l.slice(4, 6)), (r = 0 | l.slice(6, 8)), (a = 0 | l.slice(8, 10)), (s = 0 | l.slice(10, 12)), (o = 0 | l.slice(12, 14));
        else {
            if ('utctime' !== t) return e.error('Decoding ' + t + ' time is not supported yet');
            (n = 0 | l.slice(0, 2)), (i = 0 | l.slice(2, 4)), (r = 0 | l.slice(4, 6)), (a = 0 | l.slice(6, 8)), (s = 0 | l.slice(8, 10)), (o = 0 | l.slice(10, 12)), (n = n < 70 ? 2000 + n : 1900 + n);
        }
        return Date.UTC(n, i - 1, r, a, s, o, 0);
    }),
    (u.prototype._decodeNull = function () {
        return null;
    }),
    (u.prototype._decodeBool = function (e) {
        let t = e.readUInt8();
        return e.isError(t) ? t : 0 !== t;
    }),
    (u.prototype._decodeInt = function (e, t) {
        let n = new r(e.raw());
        return t && (n = t[n.toString(10)] || n), n;
    }),
    (u.prototype._use = function (e, t) {
        return 'function' == typeof e && (e = e(t)), e._getDecoder('der').tree;
    });
