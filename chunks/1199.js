let i = r(689118),
    a = r(814033),
    o = r(873994).DecoderBuffer,
    s = r(206424),
    l = r(375990);
function u(e) {
    (this.enc = 'der'), (this.name = e.name), (this.entity = e), (this.tree = new c()), this.tree._init(e.body);
}
function c(e) {
    s.call(this, 'der', e);
}
function d(e, n) {
    let r = e.readUInt8(n);
    if (e.isError(r)) return r;
    let i = l.tagClass[r >> 6],
        a = (32 & r) == 0;
    if ((31 & r) == 31) {
        let i = r;
        for (r = 0; (128 & i) == 128; ) {
            if (((i = e.readUInt8(n)), e.isError(i))) return i;
            (r <<= 7), (r |= 127 & i);
        }
    } else r &= 31;
    let o = l.tag[r];
    return {
        cls: i,
        primitive: a,
        tag: r,
        tagStr: o
    };
}
function f(e, n, r) {
    let i = e.readUInt8(r);
    if (e.isError(i)) return i;
    if (!n && 128 === i) return null;
    if ((128 & i) == 0) return i;
    let a = 127 & i;
    if (a > 4) return e.error('length octect is too long');
    i = 0;
    for (let n = 0; n < a; n++) {
        i <<= 8;
        let n = e.readUInt8(r);
        if (e.isError(n)) return n;
        i |= n;
    }
    return i;
}
(e.exports = u),
    (u.prototype.decode = function (e, n) {
        return !o.isDecoderBuffer(e) && (e = new o(e, n)), this.tree._decode(e, n);
    }),
    i(c, s),
    (c.prototype._peekTag = function (e, n, r) {
        if (e.isEmpty()) return !1;
        let i = e.save(),
            a = d(e, 'Failed to peek tag: "' + n + '"');
        return e.isError(a) ? a : (e.restore(i), a.tag === n || a.tagStr === n || a.tagStr + 'of' === n || r);
    }),
    (c.prototype._decodeTag = function (e, n, r) {
        let i = d(e, 'Failed to decode tag of "' + n + '"');
        if (e.isError(i)) return i;
        let a = f(e, i.primitive, 'Failed to get length of "' + n + '"');
        if (e.isError(a)) return a;
        if (!r && i.tag !== n && i.tagStr !== n && i.tagStr + 'of' !== n) return e.error('Failed to match tag: "' + n + '"');
        if (i.primitive || null !== a) return e.skip(a, 'Failed to match body of: "' + n + '"');
        let o = e.save(),
            s = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"');
        return e.isError(s) ? s : ((a = e.offset - o.offset), e.restore(o), e.skip(a, 'Failed to match body of: "' + n + '"'));
    }),
    (c.prototype._skipUntilEnd = function (e, n) {
        for (;;) {
            let r;
            let i = d(e, n);
            if (e.isError(i)) return i;
            let a = f(e, i.primitive, n);
            if (e.isError(a)) return a;
            if (((r = i.primitive || null !== a ? e.skip(a) : this._skipUntilEnd(e, n)), e.isError(r))) return r;
            if ('end' === i.tagStr) break;
        }
    }),
    (c.prototype._decodeList = function (e, n, r, i) {
        let a = [];
        for (; !e.isEmpty(); ) {
            let n = this._peekTag(e, 'end');
            if (e.isError(n)) return n;
            let o = r.decode(e, 'der', i);
            if (e.isError(o) && n) break;
            a.push(o);
        }
        return a;
    }),
    (c.prototype._decodeStr = function (e, n) {
        if ('bitstr' === n) {
            let n = e.readUInt8();
            return e.isError(n)
                ? n
                : {
                      unused: n,
                      data: e.raw()
                  };
        }
        if ('bmpstr' === n) {
            let n = e.raw();
            if (n.length % 2 == 1) return e.error('Decoding of string type: bmpstr length mismatch');
            let r = '';
            for (let e = 0; e < n.length / 2; e++) r += String.fromCharCode(n.readUInt16BE(2 * e));
            return r;
        }
        if ('numstr' === n) {
            let n = e.raw().toString('ascii');
            return this._isNumstr(n) ? n : e.error('Decoding of string type: numstr unsupported characters');
        } else if ('octstr' === n) return e.raw();
        else if ('objDesc' === n) return e.raw();
        else if ('printstr' === n) {
            let n = e.raw().toString('ascii');
            return this._isPrintstr(n) ? n : e.error('Decoding of string type: printstr unsupported characters');
        } else if (/str$/.test(n)) return e.raw().toString();
        else return e.error('Decoding of string type: ' + n + ' unsupported');
    }),
    (c.prototype._decodeObjid = function (e, n, r) {
        let i;
        let a = [],
            o = 0,
            s = 0;
        for (; !e.isEmpty(); ) (s = e.readUInt8()), (o <<= 7), (o |= 127 & s), (128 & s) == 0 && (a.push(o), (o = 0));
        128 & s && a.push(o);
        let l = (a[0] / 40) | 0,
            u = a[0] % 40;
        if (((i = r ? a : [l, u].concat(a.slice(1))), n)) {
            let e = n[i.join(' ')];
            void 0 === e && (e = n[i.join('.')]), void 0 !== e && (i = e);
        }
        return i;
    }),
    (c.prototype._decodeTime = function (e, n) {
        let r, i, a, o, s, l;
        let u = e.raw().toString();
        if ('gentime' === n) (r = 0 | u.slice(0, 4)), (i = 0 | u.slice(4, 6)), (a = 0 | u.slice(6, 8)), (o = 0 | u.slice(8, 10)), (s = 0 | u.slice(10, 12)), (l = 0 | u.slice(12, 14));
        else {
            if ('utctime' !== n) return e.error('Decoding ' + n + ' time is not supported yet');
            (r = 0 | u.slice(0, 2)), (i = 0 | u.slice(2, 4)), (a = 0 | u.slice(4, 6)), (o = 0 | u.slice(6, 8)), (s = 0 | u.slice(8, 10)), (l = 0 | u.slice(10, 12)), (r = r < 70 ? 2000 + r : 1900 + r);
        }
        return Date.UTC(r, i - 1, a, o, s, l, 0);
    }),
    (c.prototype._decodeNull = function () {
        return null;
    }),
    (c.prototype._decodeBool = function (e) {
        let n = e.readUInt8();
        return e.isError(n) ? n : 0 !== n;
    }),
    (c.prototype._decodeInt = function (e, n) {
        let r = new a(e.raw());
        return n && (r = n[r.toString(10)] || r), r;
    }),
    (c.prototype._use = function (e, n) {
        return 'function' == typeof e && (e = e(n)), e._getDecoder('der').tree;
    });
