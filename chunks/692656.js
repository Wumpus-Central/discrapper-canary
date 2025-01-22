let i = r(689118),
    a = r(988324).Buffer,
    o = r(206424),
    s = r(375990);
function l(e) {
    (this.enc = 'der'), (this.name = e.name), (this.entity = e), (this.tree = new u()), this.tree._init(e.body);
}
function u(e) {
    o.call(this, 'der', e);
}
function c(e) {
    return e < 10 ? '0' + e : e;
}
function d(e, n, r, i) {
    let a;
    if (('seqof' === e ? (e = 'seq') : 'setof' === e && (e = 'set'), s.tagByName.hasOwnProperty(e))) a = s.tagByName[e];
    else {
        if ('number' != typeof e || (0 | e) !== e) return i.error('Unknown tag: ' + e);
        a = e;
    }
    return a >= 31 ? i.error('Multi-octet tag encoding unsupported') : (!n && (a |= 32), (a |= s.tagClassByName[r || 'universal'] << 6));
}
(e.exports = l),
    (l.prototype.encode = function (e, n) {
        return this.tree._encode(e, n).join();
    }),
    i(u, o),
    (u.prototype._encodeComposite = function (e, n, r, i) {
        let o = d(e, n, r, this.reporter);
        if (i.length < 128) {
            let e = a.alloc(2);
            return (e[0] = o), (e[1] = i.length), this._createEncoderBuffer([e, i]);
        }
        let s = 1;
        for (let e = i.length; e >= 256; e >>= 8) s++;
        let l = a.alloc(2 + s);
        (l[0] = o), (l[1] = 128 | s);
        for (let e = 1 + s, n = i.length; n > 0; e--, n >>= 8) l[e] = 255 & n;
        return this._createEncoderBuffer([l, i]);
    }),
    (u.prototype._encodeStr = function (e, n) {
        if ('bitstr' === n) return this._createEncoderBuffer([0 | e.unused, e.data]);
        if ('bmpstr' === n) {
            let n = a.alloc(2 * e.length);
            for (let r = 0; r < e.length; r++) n.writeUInt16BE(e.charCodeAt(r), 2 * r);
            return this._createEncoderBuffer(n);
        }
        if ('numstr' === n) return this._isNumstr(e) ? this._createEncoderBuffer(e) : this.reporter.error('Encoding of string type: numstr supports only digits and space');
        else if ('printstr' === n) return this._isPrintstr(e) ? this._createEncoderBuffer(e) : this.reporter.error('Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark');
        else if (/str$/.test(n)) return this._createEncoderBuffer(e);
        else if ('objDesc' === n) return this._createEncoderBuffer(e);
        else return this.reporter.error('Encoding of string type: ' + n + ' unsupported');
    }),
    (u.prototype._encodeObjid = function (e, n, r) {
        if ('string' == typeof e) {
            if (!n) return this.reporter.error('string objid given, but no values map found');
            if (!n.hasOwnProperty(e)) return this.reporter.error('objid not found in values map');
            e = n[e].split(/[\s.]+/g);
            for (let n = 0; n < e.length; n++) e[n] |= 0;
        } else if (Array.isArray(e)) {
            e = e.slice();
            for (let n = 0; n < e.length; n++) e[n] |= 0;
        }
        if (!Array.isArray(e)) return this.reporter.error('objid() should be either array or string, got: ' + JSON.stringify(e));
        if (!r) {
            if (e[1] >= 40) return this.reporter.error('Second objid identifier OOB');
            e.splice(0, 2, 40 * e[0] + e[1]);
        }
        let i = 0;
        for (let n = 0; n < e.length; n++) {
            let r = e[n];
            for (i++; r >= 128; r >>= 7) i++;
        }
        let o = a.alloc(i),
            s = o.length - 1;
        for (let n = e.length - 1; n >= 0; n--) {
            let r = e[n];
            for (o[s--] = 127 & r; (r >>= 7) > 0; ) o[s--] = 128 | (127 & r);
        }
        return this._createEncoderBuffer(o);
    }),
    (u.prototype._encodeTime = function (e, n) {
        let r;
        let i = new Date(e);
        return 'gentime' === n ? (r = [c(i.getUTCFullYear()), c(i.getUTCMonth() + 1), c(i.getUTCDate()), c(i.getUTCHours()), c(i.getUTCMinutes()), c(i.getUTCSeconds()), 'Z'].join('')) : 'utctime' === n ? (r = [c(i.getUTCFullYear() % 100), c(i.getUTCMonth() + 1), c(i.getUTCDate()), c(i.getUTCHours()), c(i.getUTCMinutes()), c(i.getUTCSeconds()), 'Z'].join('')) : this.reporter.error('Encoding ' + n + ' time is not supported yet'), this._encodeStr(r, 'octstr');
    }),
    (u.prototype._encodeNull = function () {
        return this._createEncoderBuffer('');
    }),
    (u.prototype._encodeInt = function (e, n) {
        if ('string' == typeof e) {
            if (!n) return this.reporter.error('String int or enum given, but no values map');
            if (!n.hasOwnProperty(e)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(e));
            e = n[e];
        }
        if ('number' != typeof e && !a.isBuffer(e)) {
            let n = e.toArray();
            !e.sign && 128 & n[0] && n.unshift(0), (e = a.from(n));
        }
        if (a.isBuffer(e)) {
            let n = e.length;
            0 === e.length && n++;
            let r = a.alloc(n);
            return e.copy(r), 0 === e.length && (r[0] = 0), this._createEncoderBuffer(r);
        }
        if (e < 128) return this._createEncoderBuffer(e);
        if (e < 256) return this._createEncoderBuffer([0, e]);
        let r = 1;
        for (let n = e; n >= 256; n >>= 8) r++;
        let i = Array(r);
        for (let n = i.length - 1; n >= 0; n--) (i[n] = 255 & e), (e >>= 8);
        return 128 & i[0] && i.unshift(0), this._createEncoderBuffer(a.from(i));
    }),
    (u.prototype._encodeBool = function (e) {
        return this._createEncoderBuffer(e ? 255 : 0);
    }),
    (u.prototype._use = function (e, n) {
        return 'function' == typeof e && (e = e(n)), e._getEncoder('der').tree;
    }),
    (u.prototype._skipDefault = function (e, n, r) {
        let i;
        let a = this._baseState;
        if (null === a.default) return !1;
        let o = e.join();
        if ((void 0 === a.defaultBuffer && (a.defaultBuffer = this._encodeValue(a.default, n, r).join()), o.length !== a.defaultBuffer.length)) return !1;
        for (i = 0; i < o.length; i++) if (o[i] !== a.defaultBuffer[i]) return !1;
        return !0;
    });
