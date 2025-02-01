let i = n(689118),
    r = n(988324).Buffer,
    a = n(206424),
    s = n(375990);
function o(e) {
    (this.enc = 'der'), (this.name = e.name), (this.entity = e), (this.tree = new l()), this.tree._init(e.body);
}
function l(e) {
    a.call(this, 'der', e);
}
function u(e) {
    return e < 10 ? '0' + e : e;
}
function c(e, t, n, i) {
    let r;
    if (('seqof' === e ? (e = 'seq') : 'setof' === e && (e = 'set'), s.tagByName.hasOwnProperty(e))) r = s.tagByName[e];
    else {
        if ('number' != typeof e || (0 | e) !== e) return i.error('Unknown tag: ' + e);
        r = e;
    }
    return r >= 31 ? i.error('Multi-octet tag encoding unsupported') : (t || (r |= 32), (r |= s.tagClassByName[n || 'universal'] << 6));
}
(e.exports = o),
    (o.prototype.encode = function (e, t) {
        return this.tree._encode(e, t).join();
    }),
    i(l, a),
    (l.prototype._encodeComposite = function (e, t, n, i) {
        let a = c(e, t, n, this.reporter);
        if (i.length < 128) {
            let e = r.alloc(2);
            return (e[0] = a), (e[1] = i.length), this._createEncoderBuffer([e, i]);
        }
        let s = 1;
        for (let e = i.length; e >= 256; e >>= 8) s++;
        let o = r.alloc(2 + s);
        (o[0] = a), (o[1] = 128 | s);
        for (let e = 1 + s, t = i.length; t > 0; e--, t >>= 8) o[e] = 255 & t;
        return this._createEncoderBuffer([o, i]);
    }),
    (l.prototype._encodeStr = function (e, t) {
        if ('bitstr' === t) return this._createEncoderBuffer([0 | e.unused, e.data]);
        if ('bmpstr' === t) {
            let t = r.alloc(2 * e.length);
            for (let n = 0; n < e.length; n++) t.writeUInt16BE(e.charCodeAt(n), 2 * n);
            return this._createEncoderBuffer(t);
        }
        if ('numstr' === t) return this._isNumstr(e) ? this._createEncoderBuffer(e) : this.reporter.error('Encoding of string type: numstr supports only digits and space');
        if ('printstr' === t) return this._isPrintstr(e) ? this._createEncoderBuffer(e) : this.reporter.error('Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark');
        if (/str$/.test(t)) return this._createEncoderBuffer(e);
        else if ('objDesc' === t) return this._createEncoderBuffer(e);
        else return this.reporter.error('Encoding of string type: ' + t + ' unsupported');
    }),
    (l.prototype._encodeObjid = function (e, t, n) {
        if ('string' == typeof e) {
            if (!t) return this.reporter.error('string objid given, but no values map found');
            if (!t.hasOwnProperty(e)) return this.reporter.error('objid not found in values map');
            e = t[e].split(/[\s.]+/g);
            for (let t = 0; t < e.length; t++) e[t] |= 0;
        } else if (Array.isArray(e)) {
            e = e.slice();
            for (let t = 0; t < e.length; t++) e[t] |= 0;
        }
        if (!Array.isArray(e)) return this.reporter.error('objid() should be either array or string, got: ' + JSON.stringify(e));
        if (!n) {
            if (e[1] >= 40) return this.reporter.error('Second objid identifier OOB');
            e.splice(0, 2, 40 * e[0] + e[1]);
        }
        let i = 0;
        for (let t = 0; t < e.length; t++) {
            let n = e[t];
            for (i++; n >= 128; n >>= 7) i++;
        }
        let a = r.alloc(i),
            s = a.length - 1;
        for (let t = e.length - 1; t >= 0; t--) {
            let n = e[t];
            for (a[s--] = 127 & n; (n >>= 7) > 0; ) a[s--] = 128 | (127 & n);
        }
        return this._createEncoderBuffer(a);
    }),
    (l.prototype._encodeTime = function (e, t) {
        let n;
        let i = new Date(e);
        return 'gentime' === t ? (n = [u(i.getUTCFullYear()), u(i.getUTCMonth() + 1), u(i.getUTCDate()), u(i.getUTCHours()), u(i.getUTCMinutes()), u(i.getUTCSeconds()), 'Z'].join('')) : 'utctime' === t ? (n = [u(i.getUTCFullYear() % 100), u(i.getUTCMonth() + 1), u(i.getUTCDate()), u(i.getUTCHours()), u(i.getUTCMinutes()), u(i.getUTCSeconds()), 'Z'].join('')) : this.reporter.error('Encoding ' + t + ' time is not supported yet'), this._encodeStr(n, 'octstr');
    }),
    (l.prototype._encodeNull = function () {
        return this._createEncoderBuffer('');
    }),
    (l.prototype._encodeInt = function (e, t) {
        if ('string' == typeof e) {
            if (!t) return this.reporter.error('String int or enum given, but no values map');
            if (!t.hasOwnProperty(e)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(e));
            e = t[e];
        }
        if ('number' != typeof e && !r.isBuffer(e)) {
            let t = e.toArray();
            !e.sign && 128 & t[0] && t.unshift(0), (e = r.from(t));
        }
        if (r.isBuffer(e)) {
            let t = e.length;
            0 === e.length && t++;
            let n = r.alloc(t);
            return e.copy(n), 0 === e.length && (n[0] = 0), this._createEncoderBuffer(n);
        }
        if (e < 128) return this._createEncoderBuffer(e);
        if (e < 256) return this._createEncoderBuffer([0, e]);
        let n = 1;
        for (let t = e; t >= 256; t >>= 8) n++;
        let i = Array(n);
        for (let t = i.length - 1; t >= 0; t--) (i[t] = 255 & e), (e >>= 8);
        return 128 & i[0] && i.unshift(0), this._createEncoderBuffer(r.from(i));
    }),
    (l.prototype._encodeBool = function (e) {
        return this._createEncoderBuffer(e ? 255 : 0);
    }),
    (l.prototype._use = function (e, t) {
        return 'function' == typeof e && (e = e(t)), e._getEncoder('der').tree;
    }),
    (l.prototype._skipDefault = function (e, t, n) {
        let i;
        let r = this._baseState;
        if (null === r.default) return !1;
        let a = e.join();
        if ((void 0 === r.defaultBuffer && (r.defaultBuffer = this._encodeValue(r.default, t, n).join()), a.length !== r.defaultBuffer.length)) return !1;
        for (i = 0; i < a.length; i++) if (a[i] !== r.defaultBuffer[i]) return !1;
        return !0;
    });
