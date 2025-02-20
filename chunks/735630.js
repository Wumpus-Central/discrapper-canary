var n = (function () {
    var e = new Date(),
        t = 4,
        r = 3,
        i = 2,
        o = 1,
        a = 4;
    return {
        setLogLevel: function (e) {
            e == this.debug ? (a = o) : e == this.info ? (a = i) : e == this.warn ? (a = r) : (this.error, (a = t));
        },
        debug: function (t, r) {
            void 0 === console.debug && (console.debug = console.log), o >= a && console.debug('[' + n.getDurationString(new Date() - e, 1000) + ']', '[' + t + ']', r);
        },
        log: function (e, t) {
            this.debug(e.msg);
        },
        info: function (t, r) {
            i >= a && console.info('[' + n.getDurationString(new Date() - e, 1000) + ']', '[' + t + ']', r);
        },
        warn: function (t, i) {
            r >= a && console.warn('[' + n.getDurationString(new Date() - e, 1000) + ']', '[' + t + ']', i);
        },
        error: function (r, i) {
            t >= a && console.error('[' + n.getDurationString(new Date() - e, 1000) + ']', '[' + r + ']', i);
        }
    };
})();
(n.getDurationString = function (e, t) {
    function n(e, t) {
        for (var n = ('' + e).split('.'); n[0].length < t; ) n[0] = '0' + n[0];
        return n.join('.');
    }
    e < 0 ? ((r = !0), (e = -e)) : (r = !1);
    var r,
        i = e / (t || 1),
        o = Math.floor(i / 3600),
        a = Math.floor((i -= 3600 * o) / 60),
        s = 1000 * (i -= 60 * a);
    return (s -= 1000 * (i = Math.floor(i))), (s = Math.floor(s)), (r ? '-' : '') + o + ':' + n(a, 2) + ':' + n(i, 2) + '.' + n(s, 3);
}),
    (n.printRanges = function (e) {
        var t = e.length;
        if (!(t > 0)) return '(empty)';
        for (var r = '', i = 0; i < t; i++) i > 0 && (r += ','), (r += '[' + n.getDurationString(e.start(i)) + ',' + n.getDurationString(e.end(i)) + ']');
        return r;
    }),
    (t.Log = n);
var r = function (e) {
    if (e instanceof ArrayBuffer) (this.buffer = e), (this.dataview = new DataView(e));
    else throw 'Needs an array buffer';
    this.position = 0;
};
(r.prototype.getPosition = function () {
    return this.position;
}),
    (r.prototype.getEndPosition = function () {
        return this.buffer.byteLength;
    }),
    (r.prototype.getLength = function () {
        return this.buffer.byteLength;
    }),
    (r.prototype.seek = function (e) {
        var t = Math.max(0, Math.min(this.buffer.byteLength, e));
        return (this.position = isNaN(t) || !isFinite(t) ? 0 : t), !0;
    }),
    (r.prototype.isEos = function () {
        return this.getPosition() >= this.getEndPosition();
    }),
    (r.prototype.readAnyInt = function (e, t) {
        var n = 0;
        if (this.position + e <= this.buffer.byteLength) {
            switch (e) {
                case 1:
                    n = t ? this.dataview.getInt8(this.position) : this.dataview.getUint8(this.position);
                    break;
                case 2:
                    n = t ? this.dataview.getInt16(this.position) : this.dataview.getUint16(this.position);
                    break;
                case 3:
                    if (t) throw 'No method for reading signed 24 bits values';
                    n = (this.dataview.getUint8(this.position) << 16) | (this.dataview.getUint8(this.position + 1) << 8) | this.dataview.getUint8(this.position + 2);
                    break;
                case 4:
                    n = t ? this.dataview.getInt32(this.position) : this.dataview.getUint32(this.position);
                    break;
                case 8:
                    if (t) throw 'No method for reading signed 64 bits values';
                    n = (this.dataview.getUint32(this.position) << 32) | this.dataview.getUint32(this.position + 4);
                    break;
                default:
                    throw 'readInt method not implemented for size: ' + e;
            }
            return (this.position += e), n;
        }
        throw 'Not enough bytes in buffer';
    }),
    (r.prototype.readUint8 = function () {
        return this.readAnyInt(1, !1);
    }),
    (r.prototype.readUint16 = function () {
        return this.readAnyInt(2, !1);
    }),
    (r.prototype.readUint24 = function () {
        return this.readAnyInt(3, !1);
    }),
    (r.prototype.readUint32 = function () {
        return this.readAnyInt(4, !1);
    }),
    (r.prototype.readUint64 = function () {
        return this.readAnyInt(8, !1);
    }),
    (r.prototype.readString = function (e) {
        if (this.position + e <= this.buffer.byteLength) {
            for (var t = '', n = 0; n < e; n++) t += String.fromCharCode(this.readUint8());
            return t;
        }
        throw 'Not enough bytes in buffer';
    }),
    (r.prototype.readCString = function () {
        for (var e = []; ; ) {
            var t = this.readUint8();
            if (0 !== t) e.push(t);
            else break;
        }
        return String.fromCharCode.apply(null, e);
    }),
    (r.prototype.readInt8 = function () {
        return this.readAnyInt(1, !0);
    }),
    (r.prototype.readInt16 = function () {
        return this.readAnyInt(2, !0);
    }),
    (r.prototype.readInt32 = function () {
        return this.readAnyInt(4, !0);
    }),
    (r.prototype.readInt64 = function () {
        return this.readAnyInt(8, !1);
    }),
    (r.prototype.readUint8Array = function (e) {
        for (var t = new Uint8Array(e), n = 0; n < e; n++) t[n] = this.readUint8();
        return t;
    }),
    (r.prototype.readInt16Array = function (e) {
        for (var t = new Int16Array(e), n = 0; n < e; n++) t[n] = this.readInt16();
        return t;
    }),
    (r.prototype.readUint16Array = function (e) {
        for (var t = new Int16Array(e), n = 0; n < e; n++) t[n] = this.readUint16();
        return t;
    }),
    (r.prototype.readUint32Array = function (e) {
        for (var t = new Uint32Array(e), n = 0; n < e; n++) t[n] = this.readUint32();
        return t;
    }),
    (r.prototype.readInt32Array = function (e) {
        for (var t = new Int32Array(e), n = 0; n < e; n++) t[n] = this.readInt32();
        return t;
    }),
    (t.MP4BoxStream = r);
var i = function (e, t, n) {
    (this._byteOffset = t || 0), e instanceof ArrayBuffer ? (this.buffer = e) : 'object' == typeof e ? ((this.dataView = e), t && (this._byteOffset += t)) : (this.buffer = new ArrayBuffer(e || 0)), (this.position = 0), (this.endianness = null == n ? i.LITTLE_ENDIAN : n);
};
(i.prototype = {}),
    (i.prototype.getPosition = function () {
        return this.position;
    }),
    (i.prototype._realloc = function (e) {
        if (this._dynamicSize) {
            var t = this._byteOffset + this.position + e,
                n = this._buffer.byteLength;
            if (t <= n) {
                t > this._byteLength && (this._byteLength = t);
                return;
            }
            for (n < 1 && (n = 1); t > n; ) n *= 2;
            var r = new ArrayBuffer(n),
                i = new Uint8Array(this._buffer);
            new Uint8Array(r, 0, i.length).set(i), (this.buffer = r), (this._byteLength = t);
        }
    }),
    (i.prototype._trimAlloc = function () {
        if (this._byteLength != this._buffer.byteLength) {
            var e = new ArrayBuffer(this._byteLength),
                t = new Uint8Array(e),
                n = new Uint8Array(this._buffer, 0, t.length);
            t.set(n), (this.buffer = e);
        }
    }),
    (i.BIG_ENDIAN = !1),
    (i.LITTLE_ENDIAN = !0),
    (i.prototype._byteLength = 0),
    Object.defineProperty(i.prototype, 'byteLength', {
        get: function () {
            return this._byteLength - this._byteOffset;
        }
    }),
    Object.defineProperty(i.prototype, 'buffer', {
        get: function () {
            return this._trimAlloc(), this._buffer;
        },
        set: function (e) {
            (this._buffer = e), (this._dataView = new DataView(this._buffer, this._byteOffset)), (this._byteLength = this._buffer.byteLength);
        }
    }),
    Object.defineProperty(i.prototype, 'byteOffset', {
        get: function () {
            return this._byteOffset;
        },
        set: function (e) {
            (this._byteOffset = e), (this._dataView = new DataView(this._buffer, this._byteOffset)), (this._byteLength = this._buffer.byteLength);
        }
    }),
    Object.defineProperty(i.prototype, 'dataView', {
        get: function () {
            return this._dataView;
        },
        set: function (e) {
            (this._byteOffset = e.byteOffset), (this._buffer = e.buffer), (this._dataView = new DataView(this._buffer, this._byteOffset)), (this._byteLength = this._byteOffset + e.byteLength);
        }
    }),
    (i.prototype.seek = function (e) {
        var t = Math.max(0, Math.min(this.byteLength, e));
        this.position = isNaN(t) || !isFinite(t) ? 0 : t;
    }),
    (i.prototype.isEof = function () {
        return this.position >= this._byteLength;
    }),
    (i.prototype.mapUint8Array = function (e) {
        this._realloc(+e);
        var t = new Uint8Array(this._buffer, this.byteOffset + this.position, e);
        return (this.position += +e), t;
    }),
    (i.prototype.readInt32Array = function (e, t) {
        var n = new Int32Array((e = null == e ? this.byteLength - this.position / 4 : e));
        return i.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), i.arrayToNative(n, null == t ? this.endianness : t), (this.position += n.byteLength), n;
    }),
    (i.prototype.readInt16Array = function (e, t) {
        var n = new Int16Array((e = null == e ? this.byteLength - this.position / 2 : e));
        return i.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), i.arrayToNative(n, null == t ? this.endianness : t), (this.position += n.byteLength), n;
    }),
    (i.prototype.readInt8Array = function (e) {
        var t = new Int8Array((e = null == e ? this.byteLength - this.position : e));
        return i.memcpy(t.buffer, 0, this.buffer, this.byteOffset + this.position, e * t.BYTES_PER_ELEMENT), (this.position += t.byteLength), t;
    }),
    (i.prototype.readUint32Array = function (e, t) {
        var n = new Uint32Array((e = null == e ? this.byteLength - this.position / 4 : e));
        return i.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), i.arrayToNative(n, null == t ? this.endianness : t), (this.position += n.byteLength), n;
    }),
    (i.prototype.readUint16Array = function (e, t) {
        var n = new Uint16Array((e = null == e ? this.byteLength - this.position / 2 : e));
        return i.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), i.arrayToNative(n, null == t ? this.endianness : t), (this.position += n.byteLength), n;
    }),
    (i.prototype.readUint8Array = function (e) {
        var t = new Uint8Array((e = null == e ? this.byteLength - this.position : e));
        return i.memcpy(t.buffer, 0, this.buffer, this.byteOffset + this.position, e * t.BYTES_PER_ELEMENT), (this.position += t.byteLength), t;
    }),
    (i.prototype.readFloat64Array = function (e, t) {
        var n = new Float64Array((e = null == e ? this.byteLength - this.position / 8 : e));
        return i.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), i.arrayToNative(n, null == t ? this.endianness : t), (this.position += n.byteLength), n;
    }),
    (i.prototype.readFloat32Array = function (e, t) {
        var n = new Float32Array((e = null == e ? this.byteLength - this.position / 4 : e));
        return i.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), i.arrayToNative(n, null == t ? this.endianness : t), (this.position += n.byteLength), n;
    }),
    (i.prototype.readInt32 = function (e) {
        var t = this._dataView.getInt32(this.position, null == e ? this.endianness : e);
        return (this.position += 4), t;
    }),
    (i.prototype.readInt16 = function (e) {
        var t = this._dataView.getInt16(this.position, null == e ? this.endianness : e);
        return (this.position += 2), t;
    }),
    (i.prototype.readInt8 = function () {
        var e = this._dataView.getInt8(this.position);
        return (this.position += 1), e;
    }),
    (i.prototype.readUint32 = function (e) {
        var t = this._dataView.getUint32(this.position, null == e ? this.endianness : e);
        return (this.position += 4), t;
    }),
    (i.prototype.readUint16 = function (e) {
        var t = this._dataView.getUint16(this.position, null == e ? this.endianness : e);
        return (this.position += 2), t;
    }),
    (i.prototype.readUint8 = function () {
        var e = this._dataView.getUint8(this.position);
        return (this.position += 1), e;
    }),
    (i.prototype.readFloat32 = function (e) {
        var t = this._dataView.getFloat32(this.position, null == e ? this.endianness : e);
        return (this.position += 4), t;
    }),
    (i.prototype.readFloat64 = function (e) {
        var t = this._dataView.getFloat64(this.position, null == e ? this.endianness : e);
        return (this.position += 8), t;
    }),
    (i.endianness = new Int8Array(new Int16Array([1]).buffer)[0] > 0),
    (i.memcpy = function (e, t, n, r, i) {
        var o = new Uint8Array(e, t, i),
            a = new Uint8Array(n, r, i);
        o.set(a);
    }),
    (i.arrayToNative = function (e, t) {
        return t == this.endianness ? e : this.flipArrayEndianness(e);
    }),
    (i.nativeToEndian = function (e, t) {
        return this.endianness == t ? e : this.flipArrayEndianness(e);
    }),
    (i.flipArrayEndianness = function (e) {
        for (var t = new Uint8Array(e.buffer, e.byteOffset, e.byteLength), n = 0; n < e.byteLength; n += e.BYTES_PER_ELEMENT)
            for (var r = n + e.BYTES_PER_ELEMENT - 1, i = n; r > i; r--, i++) {
                var o = t[i];
                (t[i] = t[r]), (t[r] = o);
            }
        return e;
    }),
    (i.prototype.failurePosition = 0),
    (String.fromCharCodeUint8 = function (e) {
        for (var t = [], n = 0; n < e.length; n++) t[n] = e[n];
        return String.fromCharCode.apply(null, t);
    }),
    (i.prototype.readString = function (e, t) {
        return null == t || 'ASCII' == t ? String.fromCharCodeUint8.apply(null, [this.mapUint8Array(null == e ? this.byteLength - this.position : e)]) : new TextDecoder(t).decode(this.mapUint8Array(e));
    }),
    (i.prototype.readCString = function (e) {
        var t = this.byteLength - this.position,
            n = new Uint8Array(this._buffer, this._byteOffset + this.position),
            r = t;
        null != e && (r = Math.min(e, t));
        for (var i = 0; i < r && 0 !== n[i]; i++);
        var o = String.fromCharCodeUint8.apply(null, [this.mapUint8Array(i)]);
        return null != e ? (this.position += r - i) : i != t && (this.position += 1), o;
    });
var o = 4294967296;
(i.prototype.readInt64 = function () {
    return this.readInt32() * o + this.readUint32();
}),
    (i.prototype.readUint64 = function () {
        return this.readUint32() * o + this.readUint32();
    }),
    (i.prototype.readInt64 = function () {
        return this.readUint32() * o + this.readUint32();
    }),
    (i.prototype.readUint24 = function () {
        return (this.readUint8() << 16) + (this.readUint8() << 8) + this.readUint8();
    }),
    (t.DataStream = i),
    (i.prototype.save = function (e) {
        var t = new Blob([this.buffer]);
        if (window.URL && URL.createObjectURL) {
            var n = window.URL.createObjectURL(t),
                r = document.createElement('a');
            document.body.appendChild(r), r.setAttribute('href', n), r.setAttribute('download', e), r.setAttribute('target', '_self'), r.click(), window.URL.revokeObjectURL(n);
        } else throw "DataStream.save: Can't create object URL.";
    }),
    (i.prototype._dynamicSize = !0),
    Object.defineProperty(i.prototype, 'dynamicSize', {
        get: function () {
            return this._dynamicSize;
        },
        set: function (e) {
            e || this._trimAlloc(), (this._dynamicSize = e);
        }
    }),
    (i.prototype.shift = function (e) {
        var t = new ArrayBuffer(this._byteLength - e),
            n = new Uint8Array(t),
            r = new Uint8Array(this._buffer, e, n.length);
        n.set(r), (this.buffer = t), (this.position -= e);
    }),
    (i.prototype.writeInt32Array = function (e, t) {
        if ((this._realloc(4 * e.length), e instanceof Int32Array && this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)) i.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapInt32Array(e.length, t);
        else for (var n = 0; n < e.length; n++) this.writeInt32(e[n], t);
    }),
    (i.prototype.writeInt16Array = function (e, t) {
        if ((this._realloc(2 * e.length), e instanceof Int16Array && this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)) i.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapInt16Array(e.length, t);
        else for (var n = 0; n < e.length; n++) this.writeInt16(e[n], t);
    }),
    (i.prototype.writeInt8Array = function (e) {
        if ((this._realloc(+e.length), e instanceof Int8Array && this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)) i.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapInt8Array(e.length);
        else for (var t = 0; t < e.length; t++) this.writeInt8(e[t]);
    }),
    (i.prototype.writeUint32Array = function (e, t) {
        if ((this._realloc(4 * e.length), e instanceof Uint32Array && this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)) i.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapUint32Array(e.length, t);
        else for (var n = 0; n < e.length; n++) this.writeUint32(e[n], t);
    }),
    (i.prototype.writeUint16Array = function (e, t) {
        if ((this._realloc(2 * e.length), e instanceof Uint16Array && this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)) i.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapUint16Array(e.length, t);
        else for (var n = 0; n < e.length; n++) this.writeUint16(e[n], t);
    }),
    (i.prototype.writeUint8Array = function (e) {
        if ((this._realloc(+e.length), e instanceof Uint8Array && this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)) i.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapUint8Array(e.length);
        else for (var t = 0; t < e.length; t++) this.writeUint8(e[t]);
    }),
    (i.prototype.writeFloat64Array = function (e, t) {
        if ((this._realloc(8 * e.length), e instanceof Float64Array && this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)) i.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapFloat64Array(e.length, t);
        else for (var n = 0; n < e.length; n++) this.writeFloat64(e[n], t);
    }),
    (i.prototype.writeFloat32Array = function (e, t) {
        if ((this._realloc(4 * e.length), e instanceof Float32Array && this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)) i.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapFloat32Array(e.length, t);
        else for (var n = 0; n < e.length; n++) this.writeFloat32(e[n], t);
    }),
    (i.prototype.writeInt32 = function (e, t) {
        this._realloc(4), this._dataView.setInt32(this.position, e, null == t ? this.endianness : t), (this.position += 4);
    }),
    (i.prototype.writeInt16 = function (e, t) {
        this._realloc(2), this._dataView.setInt16(this.position, e, null == t ? this.endianness : t), (this.position += 2);
    }),
    (i.prototype.writeInt8 = function (e) {
        this._realloc(1), this._dataView.setInt8(this.position, e), (this.position += 1);
    }),
    (i.prototype.writeUint32 = function (e, t) {
        this._realloc(4), this._dataView.setUint32(this.position, e, null == t ? this.endianness : t), (this.position += 4);
    }),
    (i.prototype.writeUint16 = function (e, t) {
        this._realloc(2), this._dataView.setUint16(this.position, e, null == t ? this.endianness : t), (this.position += 2);
    }),
    (i.prototype.writeUint8 = function (e) {
        this._realloc(1), this._dataView.setUint8(this.position, e), (this.position += 1);
    }),
    (i.prototype.writeFloat32 = function (e, t) {
        this._realloc(4), this._dataView.setFloat32(this.position, e, null == t ? this.endianness : t), (this.position += 4);
    }),
    (i.prototype.writeFloat64 = function (e, t) {
        this._realloc(8), this._dataView.setFloat64(this.position, e, null == t ? this.endianness : t), (this.position += 8);
    }),
    (i.prototype.writeUCS2String = function (e, t, n) {
        null == n && (n = e.length);
        for (var r = 0; r < e.length && r < n; r++) this.writeUint16(e.charCodeAt(r), t);
        for (; r < n; r++) this.writeUint16(0);
    }),
    (i.prototype.writeString = function (e, t, n) {
        var r = 0;
        if (null == t || 'ASCII' == t) {
            if (null != n) {
                var i = Math.min(e.length, n);
                for (r = 0; r < i; r++) this.writeUint8(e.charCodeAt(r));
                for (; r < n; r++) this.writeUint8(0);
            } else for (r = 0; r < e.length; r++) this.writeUint8(e.charCodeAt(r));
        } else this.writeUint8Array(new TextEncoder(t).encode(e.substring(0, n)));
    }),
    (i.prototype.writeCString = function (e, t) {
        var n = 0;
        if (null != t) {
            var r = Math.min(e.length, t);
            for (n = 0; n < r; n++) this.writeUint8(e.charCodeAt(n));
            for (; n < t; n++) this.writeUint8(0);
        } else {
            for (n = 0; n < e.length; n++) this.writeUint8(e.charCodeAt(n));
            this.writeUint8(0);
        }
    }),
    (i.prototype.writeStruct = function (e, t) {
        for (var n = 0; n < e.length; n += 2) {
            var r = e[n + 1];
            this.writeType(r, t[e[n]], t);
        }
    }),
    (i.prototype.writeType = function (e, t, n) {
        if ('function' == typeof e) return e(this, t);
        if ('object' == typeof e && !(e instanceof Array)) return e.set(this, t, n);
        var r,
            o = null,
            a = 'ASCII',
            s = this.position;
        switch (('string' == typeof e && /:/.test(e) && ((e = (r = e.split(':'))[0]), (o = parseInt(r[1]))), 'string' == typeof e && /,/.test(e) && ((e = (r = e.split(','))[0]), (a = parseInt(r[1]))), e)) {
            case 'uint8':
                this.writeUint8(t);
                break;
            case 'int8':
                this.writeInt8(t);
                break;
            case 'uint16':
                this.writeUint16(t, this.endianness);
                break;
            case 'int16':
                this.writeInt16(t, this.endianness);
                break;
            case 'uint32':
                this.writeUint32(t, this.endianness);
                break;
            case 'int32':
                this.writeInt32(t, this.endianness);
                break;
            case 'float32':
                this.writeFloat32(t, this.endianness);
                break;
            case 'float64':
                this.writeFloat64(t, this.endianness);
                break;
            case 'uint16be':
                this.writeUint16(t, i.BIG_ENDIAN);
                break;
            case 'int16be':
                this.writeInt16(t, i.BIG_ENDIAN);
                break;
            case 'uint32be':
                this.writeUint32(t, i.BIG_ENDIAN);
                break;
            case 'int32be':
                this.writeInt32(t, i.BIG_ENDIAN);
                break;
            case 'float32be':
                this.writeFloat32(t, i.BIG_ENDIAN);
                break;
            case 'float64be':
                this.writeFloat64(t, i.BIG_ENDIAN);
                break;
            case 'uint16le':
                this.writeUint16(t, i.LITTLE_ENDIAN);
                break;
            case 'int16le':
                this.writeInt16(t, i.LITTLE_ENDIAN);
                break;
            case 'uint32le':
                this.writeUint32(t, i.LITTLE_ENDIAN);
                break;
            case 'int32le':
                this.writeInt32(t, i.LITTLE_ENDIAN);
                break;
            case 'float32le':
                this.writeFloat32(t, i.LITTLE_ENDIAN);
                break;
            case 'float64le':
                this.writeFloat64(t, i.LITTLE_ENDIAN);
                break;
            case 'cstring':
                this.writeCString(t, o);
                break;
            case 'string':
                this.writeString(t, a, o);
                break;
            case 'u16string':
                this.writeUCS2String(t, this.endianness, o);
                break;
            case 'u16stringle':
                this.writeUCS2String(t, i.LITTLE_ENDIAN, o);
                break;
            case 'u16stringbe':
                this.writeUCS2String(t, i.BIG_ENDIAN, o);
                break;
            default:
                if (3 == e.length) {
                    for (var l = e[1], c = 0; c < t.length; c++) this.writeType(l, t[c]);
                    break;
                }
                this.writeStruct(e, t);
        }
        null != o && ((this.position = s), this._realloc(o), (this.position = s + o));
    }),
    (i.prototype.writeUint64 = function (e) {
        var t = Math.floor(e / o);
        this.writeUint32(t), this.writeUint32(4294967295 & e);
    }),
    (i.prototype.writeUint24 = function (e) {
        this.writeUint8((16711680 & e) >> 16), this.writeUint8((65280 & e) >> 8), this.writeUint8(255 & e);
    }),
    (i.prototype.adjustUint32 = function (e, t) {
        var n = this.position;
        this.seek(e), this.writeUint32(t), this.seek(n);
    }),
    (i.prototype.mapInt32Array = function (e, t) {
        this._realloc(4 * e);
        var n = new Int32Array(this._buffer, this.byteOffset + this.position, e);
        return i.arrayToNative(n, null == t ? this.endianness : t), (this.position += 4 * e), n;
    }),
    (i.prototype.mapInt16Array = function (e, t) {
        this._realloc(2 * e);
        var n = new Int16Array(this._buffer, this.byteOffset + this.position, e);
        return i.arrayToNative(n, null == t ? this.endianness : t), (this.position += 2 * e), n;
    }),
    (i.prototype.mapInt8Array = function (e) {
        this._realloc(+e);
        var t = new Int8Array(this._buffer, this.byteOffset + this.position, e);
        return (this.position += +e), t;
    }),
    (i.prototype.mapUint32Array = function (e, t) {
        this._realloc(4 * e);
        var n = new Uint32Array(this._buffer, this.byteOffset + this.position, e);
        return i.arrayToNative(n, null == t ? this.endianness : t), (this.position += 4 * e), n;
    }),
    (i.prototype.mapUint16Array = function (e, t) {
        this._realloc(2 * e);
        var n = new Uint16Array(this._buffer, this.byteOffset + this.position, e);
        return i.arrayToNative(n, null == t ? this.endianness : t), (this.position += 2 * e), n;
    }),
    (i.prototype.mapFloat64Array = function (e, t) {
        this._realloc(8 * e);
        var n = new Float64Array(this._buffer, this.byteOffset + this.position, e);
        return i.arrayToNative(n, null == t ? this.endianness : t), (this.position += 8 * e), n;
    }),
    (i.prototype.mapFloat32Array = function (e, t) {
        this._realloc(4 * e);
        var n = new Float32Array(this._buffer, this.byteOffset + this.position, e);
        return i.arrayToNative(n, null == t ? this.endianness : t), (this.position += 4 * e), n;
    });
var a = function (e) {
    (this.buffers = []), (this.bufferIndex = -1), e && (this.insertBuffer(e), (this.bufferIndex = 0));
};
(a.prototype = new i(new ArrayBuffer(), 0, i.BIG_ENDIAN)),
    (a.prototype.initialized = function () {
        var e;
        return !!(this.bufferIndex > -1) || (this.buffers.length > 0 ? (0 === (e = this.buffers[0]).fileStart ? ((this.buffer = e), (this.bufferIndex = 0), n.debug('MultiBufferStream', 'Stream ready for parsing'), !0) : (n.warn('MultiBufferStream', 'The first buffer should have a fileStart of 0'), this.logBufferLevel(), !1)) : (n.warn('MultiBufferStream', 'No buffer to start parsing from'), this.logBufferLevel(), !1));
    }),
    (ArrayBuffer.concat = function (e, t) {
        n.debug('ArrayBuffer', 'Trying to create a new buffer of size: ' + (e.byteLength + t.byteLength));
        var r = new Uint8Array(e.byteLength + t.byteLength);
        return r.set(new Uint8Array(e), 0), r.set(new Uint8Array(t), e.byteLength), r.buffer;
    }),
    (a.prototype.reduceBuffer = function (e, t, n) {
        var r;
        return (r = new Uint8Array(n)).set(new Uint8Array(e, t, n)), (r.buffer.fileStart = e.fileStart + t), (r.buffer.usedBytes = 0), r.buffer;
    }),
    (a.prototype.insertBuffer = function (e) {
        for (var t = !0, r = 0; r < this.buffers.length; r++) {
            var i = this.buffers[r];
            if (e.fileStart <= i.fileStart) {
                if (e.fileStart === i.fileStart) {
                    if (e.byteLength > i.byteLength) {
                        this.buffers.splice(r, 1), r--;
                        continue;
                    }
                    n.warn('MultiBufferStream', 'Buffer (fileStart: ' + e.fileStart + ' - Length: ' + e.byteLength + ') already appended, ignoring');
                } else e.fileStart + e.byteLength <= i.fileStart || (e = this.reduceBuffer(e, 0, i.fileStart - e.fileStart)), n.debug('MultiBufferStream', 'Appending new buffer (fileStart: ' + e.fileStart + ' - Length: ' + e.byteLength + ')'), this.buffers.splice(r, 0, e), 0 === r && (this.buffer = e);
                t = !1;
                break;
            }
            if (e.fileStart < i.fileStart + i.byteLength) {
                var o = i.fileStart + i.byteLength - e.fileStart,
                    a = e.byteLength - o;
                if (a > 0) e = this.reduceBuffer(e, o, a);
                else {
                    t = !1;
                    break;
                }
            }
        }
        t && (n.debug('MultiBufferStream', 'Appending new buffer (fileStart: ' + e.fileStart + ' - Length: ' + e.byteLength + ')'), this.buffers.push(e), 0 === r && (this.buffer = e));
    }),
    (a.prototype.logBufferLevel = function (e) {
        var t,
            r,
            i,
            o,
            a,
            s = [],
            l = '';
        for (t = 0, i = 0, o = 0; t < this.buffers.length; t++) (r = this.buffers[t]), 0 === t ? (s.push((a = {})), (a.start = r.fileStart), (a.end = r.fileStart + r.byteLength), (l += '[' + a.start + '-')) : a.end === r.fileStart ? (a.end = r.fileStart + r.byteLength) : (((a = {}).start = r.fileStart), (l += s[s.length - 1].end - 1 + '], [' + a.start + '-'), (a.end = r.fileStart + r.byteLength), s.push(a)), (i += r.usedBytes), (o += r.byteLength);
        s.length > 0 && (l += a.end - 1 + ']'), (e ? n.info : n.debug)('MultiBufferStream', 0 === this.buffers.length ? 'No more buffer in memory' : '' + this.buffers.length + ' stored buffer(s) (' + i + '/' + o + ' bytes), continuous ranges: ' + l);
    }),
    (a.prototype.cleanBuffers = function () {
        var e, t;
        for (e = 0; e < this.buffers.length; e++) (t = this.buffers[e]).usedBytes === t.byteLength && (n.debug('MultiBufferStream', 'Removing buffer #' + e), this.buffers.splice(e, 1), e--);
    }),
    (a.prototype.mergeNextBuffer = function () {
        if (!(this.bufferIndex + 1 < this.buffers.length) || (e = this.buffers[this.bufferIndex + 1]).fileStart !== this.buffer.fileStart + this.buffer.byteLength) return !1;
        var e,
            t = this.buffer.byteLength,
            r = this.buffer.usedBytes,
            i = this.buffer.fileStart;
        return (this.buffers[this.bufferIndex] = ArrayBuffer.concat(this.buffer, e)), (this.buffer = this.buffers[this.bufferIndex]), this.buffers.splice(this.bufferIndex + 1, 1), (this.buffer.usedBytes = r), (this.buffer.fileStart = i), n.debug('ISOFile', 'Concatenating buffer for box parsing (length: ' + t + '->' + this.buffer.byteLength + ')'), !0;
    }),
    (a.prototype.findPosition = function (e, t, r) {
        var i,
            o = null,
            a = -1;
        for (i = !0 === e ? 0 : this.bufferIndex; i < this.buffers.length && (o = this.buffers[i]).fileStart <= t; ) (a = i), r && (o.fileStart + o.byteLength <= t ? (o.usedBytes = o.byteLength) : (o.usedBytes = t - o.fileStart), this.logBufferLevel()), i++;
        return -1 === a ? -1 : (o = this.buffers[a]).fileStart + o.byteLength >= t ? (n.debug('MultiBufferStream', 'Found position in existing buffer #' + a), a) : -1;
    }),
    (a.prototype.findEndContiguousBuf = function (e) {
        var t,
            n,
            r,
            i = void 0 !== e ? e : this.bufferIndex;
        if (((n = this.buffers[i]), this.buffers.length > i + 1))
            for (t = i + 1; t < this.buffers.length; t++)
                if ((r = this.buffers[t]).fileStart === n.fileStart + n.byteLength) n = r;
                else break;
        return n.fileStart + n.byteLength;
    }),
    (a.prototype.getEndFilePositionAfter = function (e) {
        var t = this.findPosition(!0, e, !1);
        return -1 !== t ? this.findEndContiguousBuf(t) : e;
    }),
    (a.prototype.addUsedBytes = function (e) {
        (this.buffer.usedBytes += e), this.logBufferLevel();
    }),
    (a.prototype.setAllUsedBytes = function () {
        (this.buffer.usedBytes = this.buffer.byteLength), this.logBufferLevel();
    }),
    (a.prototype.seek = function (e, t, r) {
        var i;
        return -1 !== (i = this.findPosition(t, e, r)) ? ((this.buffer = this.buffers[i]), (this.bufferIndex = i), (this.position = e - this.buffer.fileStart), n.debug('MultiBufferStream', 'Repositioning parser at buffer position: ' + this.position), !0) : (n.debug('MultiBufferStream', 'Position ' + e + ' not found in buffered data'), !1);
    }),
    (a.prototype.getPosition = function () {
        if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw 'Error accessing position in the MultiBufferStream';
        return this.buffers[this.bufferIndex].fileStart + this.position;
    }),
    (a.prototype.getLength = function () {
        return this.byteLength;
    }),
    (a.prototype.getEndPosition = function () {
        if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw 'Error accessing position in the MultiBufferStream';
        return this.buffers[this.bufferIndex].fileStart + this.byteLength;
    }),
    (t.MultiBufferStream = a);
var s = function () {
    var e = 3,
        t = 4,
        r = 5,
        i = 6,
        o = [];
    (o[3] = 'ES_Descriptor'),
        (o[t] = 'DecoderConfigDescriptor'),
        (o[r] = 'DecoderSpecificInfo'),
        (o[i] = 'SLConfigDescriptor'),
        (this.getDescriptorName = function (e) {
            return o[e];
        });
    var a = this,
        s = {};
    return (
        (this.parseOneDescriptor = function (e) {
            var t,
                r,
                i,
                a = 0,
                l = 0;
            for (t = e.readUint8(), a++, i = e.readUint8(), a++; 128 & i; ) (l = (127 & i) << 7), (i = e.readUint8()), a++;
            return (l += 127 & i), n.debug('MPEG4DescriptorParser', 'Found ' + (o[t] || 'Descriptor ' + t) + ', size ' + l + ' at position ' + e.getPosition()), (r = o[t] ? new s[o[t]](l) : new s.Descriptor(l)).parse(e), r;
        }),
        (s.Descriptor = function (e, t) {
            (this.tag = e), (this.size = t), (this.descs = []);
        }),
        (s.Descriptor.prototype.parse = function (e) {
            this.data = e.readUint8Array(this.size);
        }),
        (s.Descriptor.prototype.findDescriptor = function (e) {
            for (var t = 0; t < this.descs.length; t++) if (this.descs[t].tag == e) return this.descs[t];
            return null;
        }),
        (s.Descriptor.prototype.parseRemainingDescriptors = function (e) {
            for (var t = e.position; e.position < t + this.size; ) {
                var n = a.parseOneDescriptor(e);
                this.descs.push(n);
            }
        }),
        (s.ES_Descriptor = function (t) {
            s.Descriptor.call(this, e, t);
        }),
        (s.ES_Descriptor.prototype = new s.Descriptor()),
        (s.ES_Descriptor.prototype.parse = function (e) {
            if (((this.ES_ID = e.readUint16()), (this.flags = e.readUint8()), (this.size -= 3), 128 & this.flags ? ((this.dependsOn_ES_ID = e.readUint16()), (this.size -= 2)) : (this.dependsOn_ES_ID = 0), 64 & this.flags)) {
                var t = e.readUint8();
                (this.URL = e.readString(t)), (this.size -= t + 1);
            } else this.URL = '';
            32 & this.flags ? ((this.OCR_ES_ID = e.readUint16()), (this.size -= 2)) : (this.OCR_ES_ID = 0), this.parseRemainingDescriptors(e);
        }),
        (s.ES_Descriptor.prototype.getOTI = function (e) {
            var n = this.findDescriptor(t);
            return n ? n.oti : 0;
        }),
        (s.ES_Descriptor.prototype.getAudioConfig = function (e) {
            var n = this.findDescriptor(t);
            if (!n) return null;
            var i = n.findDescriptor(r);
            if (!i || !i.data) return null;
            var o = (248 & i.data[0]) >> 3;
            return 31 === o && i.data.length >= 2 && (o = 32 + ((7 & i.data[0]) << 3) + ((224 & i.data[1]) >> 5)), o;
        }),
        (s.DecoderConfigDescriptor = function (e) {
            s.Descriptor.call(this, t, e);
        }),
        (s.DecoderConfigDescriptor.prototype = new s.Descriptor()),
        (s.DecoderConfigDescriptor.prototype.parse = function (e) {
            (this.oti = e.readUint8()), (this.streamType = e.readUint8()), (this.bufferSize = e.readUint24()), (this.maxBitrate = e.readUint32()), (this.avgBitrate = e.readUint32()), (this.size -= 13), this.parseRemainingDescriptors(e);
        }),
        (s.DecoderSpecificInfo = function (e) {
            s.Descriptor.call(this, r, e);
        }),
        (s.DecoderSpecificInfo.prototype = new s.Descriptor()),
        (s.SLConfigDescriptor = function (e) {
            s.Descriptor.call(this, i, e);
        }),
        (s.SLConfigDescriptor.prototype = new s.Descriptor()),
        this
    );
};
t.MPEG4DescriptorParser = s;
var l = {
    ERR_INVALID_DATA: -1,
    ERR_NOT_ENOUGH_DATA: 0,
    OK: 1,
    BASIC_BOXES: ['mdat', 'idat', 'free', 'skip', 'meco', 'strk'],
    FULL_BOXES: ['hmhd', 'nmhd', 'iods', 'xml ', 'bxml', 'ipro', 'mere'],
    CONTAINER_BOXES: [['moov', ['trak', 'pssh']], ['trak'], ['edts'], ['mdia'], ['minf'], ['dinf'], ['stbl', ['sgpd', 'sbgp']], ['mvex', ['trex']], ['moof', ['traf']], ['traf', ['trun', 'sgpd', 'sbgp']], ['vttc'], ['tref'], ['iref'], ['mfra', ['tfra']], ['meco'], ['hnti'], ['hinf'], ['strk'], ['strd'], ['sinf'], ['rinf'], ['schi'], ['trgr'], ['udta', ['kind']], ['iprp', ['ipma']], ['ipco']],
    boxCodes: [],
    fullBoxCodes: [],
    containerBoxCodes: [],
    sampleEntryCodes: {},
    sampleGroupEntryCodes: [],
    trackGroupTypes: [],
    UUIDBoxes: {},
    UUIDs: [],
    initialize: function () {
        (l.FullBox.prototype = new l.Box()),
            (l.ContainerBox.prototype = new l.Box()),
            (l.SampleEntry.prototype = new l.Box()),
            (l.TrackGroupTypeBox.prototype = new l.FullBox()),
            l.BASIC_BOXES.forEach(function (e) {
                l.createBoxCtor(e);
            }),
            l.FULL_BOXES.forEach(function (e) {
                l.createFullBoxCtor(e);
            }),
            l.CONTAINER_BOXES.forEach(function (e) {
                l.createContainerBoxCtor(e[0], null, e[1]);
            });
    },
    Box: function (e, t, n) {
        (this.type = e), (this.size = t), (this.uuid = n);
    },
    FullBox: function (e, t, n) {
        l.Box.call(this, e, t, n), (this.flags = 0), (this.version = 0);
    },
    ContainerBox: function (e, t, n) {
        l.Box.call(this, e, t, n), (this.boxes = []);
    },
    SampleEntry: function (e, t, n, r) {
        l.ContainerBox.call(this, e, t), (this.hdr_size = n), (this.start = r);
    },
    SampleGroupEntry: function (e) {
        this.grouping_type = e;
    },
    TrackGroupTypeBox: function (e, t) {
        l.FullBox.call(this, e, t);
    },
    createBoxCtor: function (e, t) {
        l.boxCodes.push(e),
            (l[e + 'Box'] = function (t) {
                l.Box.call(this, e, t);
            }),
            (l[e + 'Box'].prototype = new l.Box()),
            t && (l[e + 'Box'].prototype.parse = t);
    },
    createFullBoxCtor: function (e, t) {
        (l[e + 'Box'] = function (t) {
            l.FullBox.call(this, e, t);
        }),
            (l[e + 'Box'].prototype = new l.FullBox()),
            (l[e + 'Box'].prototype.parse = function (e) {
                this.parseFullHeader(e), t && t.call(this, e);
            });
    },
    addSubBoxArrays: function (e) {
        if (e) {
            this.subBoxNames = e;
            for (var t = e.length, n = 0; n < t; n++) this[e[n] + 's'] = [];
        }
    },
    createContainerBoxCtor: function (e, t, n) {
        (l[e + 'Box'] = function (t) {
            l.ContainerBox.call(this, e, t), l.addSubBoxArrays.call(this, n);
        }),
            (l[e + 'Box'].prototype = new l.ContainerBox()),
            t && (l[e + 'Box'].prototype.parse = t);
    },
    createMediaSampleEntryCtor: function (e, t, n) {
        (l.sampleEntryCodes[e] = []),
            (l[e + 'SampleEntry'] = function (e, t) {
                l.SampleEntry.call(this, e, t), l.addSubBoxArrays.call(this, n);
            }),
            (l[e + 'SampleEntry'].prototype = new l.SampleEntry()),
            t && (l[e + 'SampleEntry'].prototype.parse = t);
    },
    createSampleEntryCtor: function (e, t, n, r) {
        l.sampleEntryCodes[e].push(t),
            (l[t + 'SampleEntry'] = function (n) {
                l[e + 'SampleEntry'].call(this, t, n), l.addSubBoxArrays.call(this, r);
            }),
            (l[t + 'SampleEntry'].prototype = new l[e + 'SampleEntry']()),
            n && (l[t + 'SampleEntry'].prototype.parse = n);
    },
    createEncryptedSampleEntryCtor: function (e, t, n) {
        l.createSampleEntryCtor.call(this, e, t, n, ['sinf']);
    },
    createSampleGroupCtor: function (e, t) {
        (l[e + 'SampleGroupEntry'] = function (t) {
            l.SampleGroupEntry.call(this, e, t);
        }),
            (l[e + 'SampleGroupEntry'].prototype = new l.SampleGroupEntry()),
            t && (l[e + 'SampleGroupEntry'].prototype.parse = t);
    },
    createTrackGroupCtor: function (e, t) {
        (l[e + 'TrackGroupTypeBox'] = function (t) {
            l.TrackGroupTypeBox.call(this, e, t);
        }),
            (l[e + 'TrackGroupTypeBox'].prototype = new l.TrackGroupTypeBox()),
            t && (l[e + 'TrackGroupTypeBox'].prototype.parse = t);
    },
    createUUIDBox: function (e, t, n, r) {
        l.UUIDs.push(e),
            (l.UUIDBoxes[e] = function (r) {
                t ? l.FullBox.call(this, 'uuid', r, e) : n ? l.ContainerBox.call(this, 'uuid', r, e) : l.Box.call(this, 'uuid', r, e);
            }),
            (l.UUIDBoxes[e].prototype = t ? new l.FullBox() : n ? new l.ContainerBox() : new l.Box()),
            r &&
                (t
                    ? (l.UUIDBoxes[e].prototype.parse = function (e) {
                          this.parseFullHeader(e), r && r.call(this, e);
                      })
                    : (l.UUIDBoxes[e].prototype.parse = r));
    }
};
l.initialize(),
    (l.TKHD_FLAG_ENABLED = 1),
    (l.TKHD_FLAG_IN_MOVIE = 2),
    (l.TKHD_FLAG_IN_PREVIEW = 4),
    (l.TFHD_FLAG_BASE_DATA_OFFSET = 1),
    (l.TFHD_FLAG_SAMPLE_DESC = 2),
    (l.TFHD_FLAG_SAMPLE_DUR = 8),
    (l.TFHD_FLAG_SAMPLE_SIZE = 16),
    (l.TFHD_FLAG_SAMPLE_FLAGS = 32),
    (l.TFHD_FLAG_DUR_EMPTY = 65536),
    (l.TFHD_FLAG_DEFAULT_BASE_IS_MOOF = 131072),
    (l.TRUN_FLAGS_DATA_OFFSET = 1),
    (l.TRUN_FLAGS_FIRST_FLAG = 4),
    (l.TRUN_FLAGS_DURATION = 256),
    (l.TRUN_FLAGS_SIZE = 512),
    (l.TRUN_FLAGS_FLAGS = 1024),
    (l.TRUN_FLAGS_CTS_OFFSET = 2048),
    (l.Box.prototype.add = function (e) {
        return this.addBox(new l[e + 'Box']());
    }),
    (l.Box.prototype.addBox = function (e) {
        return this.boxes.push(e), this[e.type + 's'] ? this[e.type + 's'].push(e) : (this[e.type] = e), e;
    }),
    (l.Box.prototype.set = function (e, t) {
        return (this[e] = t), this;
    }),
    (l.Box.prototype.addEntry = function (e, t) {
        var n = t || 'entries';
        return this[n] || (this[n] = []), this[n].push(e), this;
    }),
    (t.BoxParser = l),
    (l.parseUUID = function (e) {
        return l.parseHex16(e);
    }),
    (l.parseHex16 = function (e) {
        for (var t = '', n = 0; n < 16; n++) {
            var r = e.readUint8().toString(16);
            t += 1 === r.length ? '0' + r : r;
        }
        return t;
    }),
    (l.parseOneBox = function (e, t, r) {
        var i,
            o,
            a,
            s = e.getPosition(),
            c = 0;
        if (e.getEndPosition() - s < 8) return n.debug('BoxParser', 'Not enough data in stream to parse the type and size of the box'), { code: l.ERR_NOT_ENOUGH_DATA };
        if (r && r < 8) return n.debug('BoxParser', 'Not enough bytes left in the parent box to parse a new box'), { code: l.ERR_NOT_ENOUGH_DATA };
        var u = e.readUint32(),
            d = e.readString(4),
            f = d;
        if ((n.debug('BoxParser', "Found box of type '" + d + "' and size " + u + ' at position ' + s), (c = 8), 'uuid' == d)) {
            if (e.getEndPosition() - e.getPosition() < 16 || r - c < 16) return e.seek(s), n.debug('BoxParser', 'Not enough bytes left in the parent box to parse a UUID box'), { code: l.ERR_NOT_ENOUGH_DATA };
            (a = l.parseUUID(e)), (c += 16), (f = a);
        }
        if (1 == u) {
            if (e.getEndPosition() - e.getPosition() < 8 || (r && r - c < 8)) return e.seek(s), n.warn('BoxParser', 'Not enough data in stream to parse the extended size of the "' + d + '" box'), { code: l.ERR_NOT_ENOUGH_DATA };
            (u = e.readUint64()), (c += 8);
        } else if (0 === u) {
            if (r) u = r;
            else if ('mdat' !== d)
                return (
                    n.error('BoxParser', "Unlimited box size not supported for type: '" + d + "'"),
                    (i = new l.Box(d, u)),
                    {
                        code: l.OK,
                        box: i,
                        size: i.size
                    }
                );
        }
        return 0 !== u && u < c
            ? (n.error('BoxParser', 'Box of type ' + d + ' has an invalid size ' + u + ' (too small to be a box)'),
              {
                  code: l.ERR_NOT_ENOUGH_DATA,
                  type: d,
                  size: u,
                  hdr_size: c,
                  start: s
              })
            : 0 !== u && r && u > r
              ? (n.error('BoxParser', "Box of type '" + d + "' has a size " + u + ' greater than its container size ' + r),
                {
                    code: l.ERR_NOT_ENOUGH_DATA,
                    type: d,
                    size: u,
                    hdr_size: c,
                    start: s
                })
              : 0 !== u && s + u > e.getEndPosition()
                ? (e.seek(s),
                  n.info('BoxParser', "Not enough data in stream to parse the entire '" + d + "' box"),
                  {
                      code: l.ERR_NOT_ENOUGH_DATA,
                      type: d,
                      size: u,
                      hdr_size: c,
                      start: s
                  })
                : t
                  ? {
                        code: l.OK,
                        type: d,
                        size: u,
                        hdr_size: c,
                        start: s
                    }
                  : (l[d + 'Box'] ? (i = new l[d + 'Box'](u)) : 'uuid' !== d ? (n.warn('BoxParser', "Unknown box type: '" + d + "'"), ((i = new l.Box(d, u)).has_unparsed_data = !0)) : l.UUIDBoxes[a] ? (i = new l.UUIDBoxes[a](u)) : (n.warn('BoxParser', "Unknown uuid type: '" + a + "'"), ((i = new l.Box(d, u)).uuid = a), (i.has_unparsed_data = !0)),
                    (i.hdr_size = c),
                    (i.start = s),
                    i.write === l.Box.prototype.write && 'mdat' !== i.type && (n.info('BoxParser', "'" + f + "' box writing not yet implemented, keeping unparsed data in memory for later write"), i.parseDataAndRewind(e)),
                    i.parse(e),
                    (o = e.getPosition() - (i.start + i.size)) < 0 ? (n.warn('BoxParser', "Parsing of box '" + f + "' did not read the entire indicated box data size (missing " + -o + ' bytes), seeking forward'), e.seek(i.start + i.size)) : o > 0 && (n.error('BoxParser', "Parsing of box '" + f + "' read " + o + ' more bytes than the indicated box data size, seeking backwards'), 0 !== i.size && e.seek(i.start + i.size)),
                    {
                        code: l.OK,
                        box: i,
                        size: i.size
                    });
    }),
    (l.Box.prototype.parse = function (e) {
        'mdat' != this.type ? (this.data = e.readUint8Array(this.size - this.hdr_size)) : 0 === this.size ? e.seek(e.getEndPosition()) : e.seek(this.start + this.size);
    }),
    (l.Box.prototype.parseDataAndRewind = function (e) {
        (this.data = e.readUint8Array(this.size - this.hdr_size)), (e.position -= this.size - this.hdr_size);
    }),
    (l.FullBox.prototype.parseDataAndRewind = function (e) {
        this.parseFullHeader(e), (this.data = e.readUint8Array(this.size - this.hdr_size)), (this.hdr_size -= 4), (e.position -= this.size - this.hdr_size);
    }),
    (l.FullBox.prototype.parseFullHeader = function (e) {
        (this.version = e.readUint8()), (this.flags = e.readUint24()), (this.hdr_size += 4);
    }),
    (l.FullBox.prototype.parse = function (e) {
        this.parseFullHeader(e), (this.data = e.readUint8Array(this.size - this.hdr_size));
    }),
    (l.ContainerBox.prototype.parse = function (e) {
        for (; e.getPosition() < this.start + this.size; ) {
            if ((t = l.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== l.OK) return;
            if (((r = t.box), this.boxes.push(r), this.subBoxNames && -1 != this.subBoxNames.indexOf(r.type))) this[this.subBoxNames[this.subBoxNames.indexOf(r.type)] + 's'].push(r);
            else {
                var t,
                    r,
                    i = 'uuid' !== r.type ? r.type : r.uuid;
                this[i] ? n.warn('Box of type ' + i + ' already stored in field of this type') : (this[i] = r);
            }
        }
    }),
    (l.Box.prototype.parseLanguage = function (e) {
        this.language = e.readUint16();
        var t = [];
        (t[0] = (this.language >> 10) & 31), (t[1] = (this.language >> 5) & 31), (t[2] = 31 & this.language), (this.languageString = String.fromCharCode(t[0] + 96, t[1] + 96, t[2] + 96));
    }),
    (l.SAMPLE_ENTRY_TYPE_VISUAL = 'Visual'),
    (l.SAMPLE_ENTRY_TYPE_AUDIO = 'Audio'),
    (l.SAMPLE_ENTRY_TYPE_HINT = 'Hint'),
    (l.SAMPLE_ENTRY_TYPE_METADATA = 'Metadata'),
    (l.SAMPLE_ENTRY_TYPE_SUBTITLE = 'Subtitle'),
    (l.SAMPLE_ENTRY_TYPE_SYSTEM = 'System'),
    (l.SAMPLE_ENTRY_TYPE_TEXT = 'Text'),
    (l.SampleEntry.prototype.parseHeader = function (e) {
        e.readUint8Array(6), (this.data_reference_index = e.readUint16()), (this.hdr_size += 8);
    }),
    (l.SampleEntry.prototype.parse = function (e) {
        this.parseHeader(e), (this.data = e.readUint8Array(this.size - this.hdr_size));
    }),
    (l.SampleEntry.prototype.parseDataAndRewind = function (e) {
        this.parseHeader(e), (this.data = e.readUint8Array(this.size - this.hdr_size)), (this.hdr_size -= 8), (e.position -= this.size - this.hdr_size);
    }),
    (l.SampleEntry.prototype.parseFooter = function (e) {
        l.ContainerBox.prototype.parse.call(this, e);
    }),
    l.createMediaSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_HINT),
    l.createMediaSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_METADATA),
    l.createMediaSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_SUBTITLE),
    l.createMediaSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_SYSTEM),
    l.createMediaSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_TEXT),
    l.createMediaSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, function (e) {
        var t;
        this.parseHeader(e), e.readUint16(), e.readUint16(), e.readUint32Array(3), (this.width = e.readUint16()), (this.height = e.readUint16()), (this.horizresolution = e.readUint32()), (this.vertresolution = e.readUint32()), e.readUint32(), (this.frame_count = e.readUint16()), (t = Math.min(31, e.readUint8())), (this.compressorname = e.readString(t)), t < 31 && e.readString(31 - t), (this.depth = e.readUint16()), e.readUint16(), this.parseFooter(e);
    }),
    l.createMediaSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_AUDIO, function (e) {
        this.parseHeader(e), e.readUint32Array(2), (this.channel_count = e.readUint16()), (this.samplesize = e.readUint16()), e.readUint16(), e.readUint16(), (this.samplerate = e.readUint32() / 65536), this.parseFooter(e);
    }),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, 'avc1'),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, 'avc2'),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, 'avc3'),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, 'avc4'),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, 'av01'),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, 'hvc1'),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, 'hev1'),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, 'vvc1'),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, 'vvi1'),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, 'vvs1'),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, 'vvcN'),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, 'vp08'),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, 'vp09'),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_AUDIO, 'mp4a'),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_AUDIO, 'ac-3'),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_AUDIO, 'ec-3'),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_AUDIO, 'Opus'),
    l.createEncryptedSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, 'encv'),
    l.createEncryptedSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_AUDIO, 'enca'),
    l.createEncryptedSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_SUBTITLE, 'encu'),
    l.createEncryptedSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_SYSTEM, 'encs'),
    l.createEncryptedSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_TEXT, 'enct'),
    l.createEncryptedSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_METADATA, 'encm'),
    l.createBoxCtor('a1lx', function (e) {
        var t = ((1 & (1 & e.readUint8())) + 1) * 16;
        this.layer_size = [];
        for (var n = 0; n < 3; n++) 16 == t ? (this.layer_size[n] = e.readUint16()) : (this.layer_size[n] = e.readUint32());
    }),
    l.createBoxCtor('a1op', function (e) {
        this.op_index = e.readUint8();
    }),
    l.createFullBoxCtor('auxC', function (e) {
        this.aux_type = e.readCString();
        var t = this.size - this.hdr_size - (this.aux_type.length + 1);
        this.aux_subtype = e.readUint8Array(t);
    }),
    l.createBoxCtor('av1C', function (e) {
        var t = e.readUint8();
        if ((t >> 7) & !1) {
            n.error('av1C marker problem');
            return;
        }
        if (((this.version = 127 & t), 1 !== this.version)) {
            n.error('av1C version ' + this.version + ' not supported');
            return;
        }
        if (((t = e.readUint8()), (this.seq_profile = (t >> 5) & 7), (this.seq_level_idx_0 = 31 & t), (t = e.readUint8()), (this.seq_tier_0 = (t >> 7) & 1), (this.high_bitdepth = (t >> 6) & 1), (this.twelve_bit = (t >> 5) & 1), (this.monochrome = (t >> 4) & 1), (this.chroma_subsampling_x = (t >> 3) & 1), (this.chroma_subsampling_y = (t >> 2) & 1), (this.chroma_sample_position = 3 & t), (t = e.readUint8()), (this.reserved_1 = (t >> 5) & 7), 0 !== this.reserved_1)) {
            n.error('av1C reserved_1 parsing problem');
            return;
        }
        if (((this.initial_presentation_delay_present = (t >> 4) & 1), 1 === this.initial_presentation_delay_present)) this.initial_presentation_delay_minus_one = 15 & t;
        else if (((this.reserved_2 = 15 & t), 0 !== this.reserved_2)) {
            n.error('av1C reserved_2 parsing problem');
            return;
        }
        var r = this.size - this.hdr_size - 4;
        this.configOBUs = e.readUint8Array(r);
    }),
    l.createBoxCtor('avcC', function (e) {
        var t, n;
        for (t = 0, this.configurationVersion = e.readUint8(), this.AVCProfileIndication = e.readUint8(), this.profile_compatibility = e.readUint8(), this.AVCLevelIndication = e.readUint8(), this.lengthSizeMinusOne = 3 & e.readUint8(), this.nb_SPS_nalus = 31 & e.readUint8(), n = this.size - this.hdr_size - 6, this.SPS = []; t < this.nb_SPS_nalus; t++) (this.SPS[t] = {}), (this.SPS[t].length = e.readUint16()), (this.SPS[t].nalu = e.readUint8Array(this.SPS[t].length)), (n -= 2 + this.SPS[t].length);
        for (this.nb_PPS_nalus = e.readUint8(), n--, this.PPS = [], t = 0; t < this.nb_PPS_nalus; t++) (this.PPS[t] = {}), (this.PPS[t].length = e.readUint16()), (this.PPS[t].nalu = e.readUint8Array(this.PPS[t].length)), (n -= 2 + this.PPS[t].length);
        n > 0 && (this.ext = e.readUint8Array(n));
    }),
    l.createBoxCtor('btrt', function (e) {
        (this.bufferSizeDB = e.readUint32()), (this.maxBitrate = e.readUint32()), (this.avgBitrate = e.readUint32());
    }),
    l.createBoxCtor('clap', function (e) {
        (this.cleanApertureWidthN = e.readUint32()), (this.cleanApertureWidthD = e.readUint32()), (this.cleanApertureHeightN = e.readUint32()), (this.cleanApertureHeightD = e.readUint32()), (this.horizOffN = e.readUint32()), (this.horizOffD = e.readUint32()), (this.vertOffN = e.readUint32()), (this.vertOffD = e.readUint32());
    }),
    l.createBoxCtor('clli', function (e) {
        (this.max_content_light_level = e.readUint16()), (this.max_pic_average_light_level = e.readUint16());
    }),
    l.createFullBoxCtor('co64', function (e) {
        var t, n;
        if (((t = e.readUint32()), (this.chunk_offsets = []), 0 === this.version)) for (n = 0; n < t; n++) this.chunk_offsets.push(e.readUint64());
    }),
    l.createFullBoxCtor('CoLL', function (e) {
        (this.maxCLL = e.readUint16()), (this.maxFALL = e.readUint16());
    }),
    l.createBoxCtor('colr', function (e) {
        if (((this.colour_type = e.readString(4)), 'nclx' === this.colour_type)) {
            (this.colour_primaries = e.readUint16()), (this.transfer_characteristics = e.readUint16()), (this.matrix_coefficients = e.readUint16());
            var t = e.readUint8();
            this.full_range_flag = t >> 7;
        } else 'rICC' === this.colour_type ? (this.ICC_profile = e.readUint8Array(this.size - 4)) : 'prof' === this.colour_type && (this.ICC_profile = e.readUint8Array(this.size - 4));
    }),
    l.createFullBoxCtor('cprt', function (e) {
        this.parseLanguage(e), (this.notice = e.readCString());
    }),
    l.createFullBoxCtor('cslg', function (e) {
        0 === this.version && ((this.compositionToDTSShift = e.readInt32()), (this.leastDecodeToDisplayDelta = e.readInt32()), (this.greatestDecodeToDisplayDelta = e.readInt32()), (this.compositionStartTime = e.readInt32()), (this.compositionEndTime = e.readInt32()));
    }),
    l.createFullBoxCtor('ctts', function (e) {
        if (((t = e.readUint32()), (this.sample_counts = []), (this.sample_offsets = []), 0 === this.version))
            for (r = 0; r < t; r++) {
                this.sample_counts.push(e.readUint32());
                var t,
                    r,
                    i = e.readInt32();
                i < 0 && n.warn('BoxParser', 'ctts box uses negative values without using version 1'), this.sample_offsets.push(i);
            }
        else if (1 == this.version) for (r = 0; r < t; r++) this.sample_counts.push(e.readUint32()), this.sample_offsets.push(e.readInt32());
    }),
    l.createBoxCtor('dac3', function (e) {
        var t = e.readUint8(),
            n = e.readUint8(),
            r = e.readUint8();
        (this.fscod = t >> 6), (this.bsid = (t >> 1) & 31), (this.bsmod = ((1 & t) << 2) | ((n >> 6) & 3)), (this.acmod = (n >> 3) & 7), (this.lfeon = (n >> 2) & 1), (this.bit_rate_code = (3 & n) | ((r >> 5) & 7));
    }),
    l.createBoxCtor('dec3', function (e) {
        var t = e.readUint16();
        (this.data_rate = t >> 3), (this.num_ind_sub = 7 & t), (this.ind_subs = []);
        for (var n = 0; n < this.num_ind_sub + 1; n++) {
            var r = {};
            this.ind_subs.push(r);
            var i = e.readUint8(),
                o = e.readUint8(),
                a = e.readUint8();
            (r.fscod = i >> 6), (r.bsid = (i >> 1) & 31), (r.bsmod = ((1 & i) << 4) | ((o >> 4) & 15)), (r.acmod = (o >> 1) & 7), (r.lfeon = 1 & o), (r.num_dep_sub = (a >> 1) & 15), r.num_dep_sub > 0 && (r.chan_loc = ((1 & a) << 8) | e.readUint8());
        }
    }),
    l.createFullBoxCtor('dfLa', function (e) {
        var t = 127,
            n = 128,
            r = [],
            i = ['STREAMINFO', 'PADDING', 'APPLICATION', 'SEEKTABLE', 'VORBIS_COMMENT', 'CUESHEET', 'PICTURE', 'RESERVED'];
        for (this.parseFullHeader(e); ; ) {
            var o = e.readUint8(),
                a = Math.min(o & t, i.length - 1);
            if ((a ? e.readUint8Array(e.readUint24()) : (e.readUint8Array(13), (this.samplerate = e.readUint32() >> 12), e.readUint8Array(20)), r.push(i[a]), o & n)) break;
        }
        this.numMetadataBlocks = r.length + ' (' + r.join(', ') + ')';
    }),
    l.createBoxCtor('dimm', function (e) {
        this.bytessent = e.readUint64();
    }),
    l.createBoxCtor('dmax', function (e) {
        this.time = e.readUint32();
    }),
    l.createBoxCtor('dmed', function (e) {
        this.bytessent = e.readUint64();
    }),
    l.createBoxCtor('dOps', function (e) {
        if (((this.Version = e.readUint8()), (this.OutputChannelCount = e.readUint8()), (this.PreSkip = e.readUint16()), (this.InputSampleRate = e.readUint32()), (this.OutputGain = e.readInt16()), (this.ChannelMappingFamily = e.readUint8()), 0 !== this.ChannelMappingFamily)) {
            (this.StreamCount = e.readUint8()), (this.CoupledCount = e.readUint8()), (this.ChannelMapping = []);
            for (var t = 0; t < this.OutputChannelCount; t++) this.ChannelMapping[t] = e.readUint8();
        }
    }),
    l.createFullBoxCtor('dref', function (e) {
        this.entries = [];
        for (var t, n, r = e.readUint32(), i = 0; i < r; i++) {
            if ((t = l.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== l.OK) return;
            (n = t.box), this.entries.push(n);
        }
    }),
    l.createBoxCtor('drep', function (e) {
        this.bytessent = e.readUint64();
    }),
    l.createFullBoxCtor('elng', function (e) {
        this.extended_language = e.readString(this.size - this.hdr_size);
    }),
    l.createFullBoxCtor('elst', function (e) {
        this.entries = [];
        for (var t = e.readUint32(), n = 0; n < t; n++) {
            var r = {};
            this.entries.push(r), 1 === this.version ? ((r.segment_duration = e.readUint64()), (r.media_time = e.readInt64())) : ((r.segment_duration = e.readUint32()), (r.media_time = e.readInt32())), (r.media_rate_integer = e.readInt16()), (r.media_rate_fraction = e.readInt16());
        }
    }),
    l.createFullBoxCtor('emsg', function (e) {
        1 == this.version ? ((this.timescale = e.readUint32()), (this.presentation_time = e.readUint64()), (this.event_duration = e.readUint32()), (this.id = e.readUint32()), (this.scheme_id_uri = e.readCString()), (this.value = e.readCString())) : ((this.scheme_id_uri = e.readCString()), (this.value = e.readCString()), (this.timescale = e.readUint32()), (this.presentation_time_delta = e.readUint32()), (this.event_duration = e.readUint32()), (this.id = e.readUint32()));
        var t = this.size - this.hdr_size - (16 + (this.scheme_id_uri.length + 1) + (this.value.length + 1));
        1 == this.version && (t -= 4), (this.message_data = e.readUint8Array(t));
    }),
    l.createFullBoxCtor('esds', function (e) {
        var t = e.readUint8Array(this.size - this.hdr_size);
        if (void 0 !== s) {
            var n = new s();
            this.esd = n.parseOneDescriptor(new i(t.buffer, 0, i.BIG_ENDIAN));
        }
    }),
    l.createBoxCtor('fiel', function (e) {
        (this.fieldCount = e.readUint8()), (this.fieldOrdering = e.readUint8());
    }),
    l.createBoxCtor('frma', function (e) {
        this.data_format = e.readString(4);
    }),
    l.createBoxCtor('ftyp', function (e) {
        var t = this.size - this.hdr_size;
        (this.major_brand = e.readString(4)), (this.minor_version = e.readUint32()), (t -= 8), (this.compatible_brands = []);
        for (var n = 0; t >= 4; ) (this.compatible_brands[n] = e.readString(4)), (t -= 4), n++;
    }),
    l.createFullBoxCtor('hdlr', function (e) {
        0 === this.version && (e.readUint32(), (this.handler = e.readString(4)), e.readUint32Array(3), (this.name = e.readString(this.size - this.hdr_size - 20)), '\0' === this.name[this.name.length - 1] && (this.name = this.name.slice(0, -1)));
    }),
    l.createBoxCtor('hvcC', function (e) {
        (this.configurationVersion = e.readUint8()), (i = e.readUint8()), (this.general_profile_space = i >> 6), (this.general_tier_flag = (32 & i) >> 5), (this.general_profile_idc = 31 & i), (this.general_profile_compatibility = e.readUint32()), (this.general_constraint_indicator = e.readUint8Array(6)), (this.general_level_idc = e.readUint8()), (this.min_spatial_segmentation_idc = 4095 & e.readUint16()), (this.parallelismType = 3 & e.readUint8()), (this.chroma_format_idc = 3 & e.readUint8()), (this.bit_depth_luma_minus8 = 7 & e.readUint8()), (this.bit_depth_chroma_minus8 = 7 & e.readUint8()), (this.avgFrameRate = e.readUint16()), (i = e.readUint8()), (this.constantFrameRate = i >> 6), (this.numTemporalLayers = (13 & i) >> 3), (this.temporalIdNested = (4 & i) >> 2), (this.lengthSizeMinusOne = 3 & i), (this.nalu_arrays = []);
        var t,
            n,
            r,
            i,
            o = e.readUint8();
        for (t = 0; t < o; t++) {
            var a = [];
            this.nalu_arrays.push(a), (i = e.readUint8()), (a.completeness = (128 & i) >> 7), (a.nalu_type = 63 & i);
            var s = e.readUint16();
            for (n = 0; n < s; n++) {
                var l = {};
                a.push(l), (r = e.readUint16()), (l.data = e.readUint8Array(r));
            }
        }
    }),
    l.createFullBoxCtor('iinf', function (e) {
        var t;
        0 === this.version ? (this.entry_count = e.readUint16()) : (this.entry_count = e.readUint32()), (this.item_infos = []);
        for (var r = 0; r < this.entry_count; r++) {
            if ((t = l.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== l.OK) return;
            'infe' !== t.box.type && n.error('BoxParser', "Expected 'infe' box, got " + t.box.type), (this.item_infos[r] = t.box);
        }
    }),
    l.createFullBoxCtor('iloc', function (e) {
        (t = e.readUint8()), (this.offset_size = (t >> 4) & 15), (this.length_size = 15 & t), (t = e.readUint8()), (this.base_offset_size = (t >> 4) & 15), 1 === this.version || 2 === this.version ? (this.index_size = 15 & t) : (this.index_size = 0), (this.items = []);
        var t,
            n = 0;
        if (this.version < 2) n = e.readUint16();
        else if (2 === this.version) n = e.readUint32();
        else throw 'version of iloc box not supported';
        for (var r = 0; r < n; r++) {
            var i = {};
            if ((this.items.push(i), this.version < 2)) i.item_ID = e.readUint16();
            else if (2 === this.version) i.item_ID = e.readUint16();
            else throw 'version of iloc box not supported';
            switch ((1 === this.version || 2 === this.version ? (i.construction_method = 15 & e.readUint16()) : (i.construction_method = 0), (i.data_reference_index = e.readUint16()), this.base_offset_size)) {
                case 0:
                    i.base_offset = 0;
                    break;
                case 4:
                    i.base_offset = e.readUint32();
                    break;
                case 8:
                    i.base_offset = e.readUint64();
                    break;
                default:
                    throw 'Error reading base offset size';
            }
            var o = e.readUint16();
            i.extents = [];
            for (var a = 0; a < o; a++) {
                var s = {};
                if ((i.extents.push(s), 1 === this.version || 2 === this.version))
                    switch (this.index_size) {
                        case 0:
                            s.extent_index = 0;
                            break;
                        case 4:
                            s.extent_index = e.readUint32();
                            break;
                        case 8:
                            s.extent_index = e.readUint64();
                            break;
                        default:
                            throw 'Error reading extent index';
                    }
                switch (this.offset_size) {
                    case 0:
                        s.extent_offset = 0;
                        break;
                    case 4:
                        s.extent_offset = e.readUint32();
                        break;
                    case 8:
                        s.extent_offset = e.readUint64();
                        break;
                    default:
                        throw 'Error reading extent index';
                }
                switch (this.length_size) {
                    case 0:
                        s.extent_length = 0;
                        break;
                    case 4:
                        s.extent_length = e.readUint32();
                        break;
                    case 8:
                        s.extent_length = e.readUint64();
                        break;
                    default:
                        throw 'Error reading extent index';
                }
            }
        }
    }),
    l.createBoxCtor('imir', function (e) {
        var t = e.readUint8();
        (this.reserved = t >> 7), (this.axis = 1 & t);
    }),
    l.createFullBoxCtor('infe', function (e) {
        if (((0 === this.version || 1 === this.version) && ((this.item_ID = e.readUint16()), (this.item_protection_index = e.readUint16()), (this.item_name = e.readCString()), (this.content_type = e.readCString()), (this.content_encoding = e.readCString())), 1 === this.version)) {
            (this.extension_type = e.readString(4)), n.warn('BoxParser', 'Cannot parse extension type'), e.seek(this.start + this.size);
            return;
        }
        this.version >= 2 && (2 === this.version ? (this.item_ID = e.readUint16()) : 3 === this.version && (this.item_ID = e.readUint32()), (this.item_protection_index = e.readUint16()), (this.item_type = e.readString(4)), (this.item_name = e.readCString()), 'mime' === this.item_type ? ((this.content_type = e.readCString()), (this.content_encoding = e.readCString())) : 'uri ' === this.item_type && (this.item_uri_type = e.readCString()));
    }),
    l.createFullBoxCtor('ipma', function (e) {
        var t, n;
        for (t = 0, entry_count = e.readUint32(), this.associations = []; t < entry_count; t++) {
            var r = {};
            this.associations.push(r), this.version < 1 ? (r.id = e.readUint16()) : (r.id = e.readUint32());
            var i = e.readUint8();
            for (n = 0, r.props = []; n < i; n++) {
                var o = e.readUint8(),
                    a = {};
                r.props.push(a), (a.essential = (128 & o) >> 7 == 1), 1 & this.flags ? (a.property_index = ((127 & o) << 8) | e.readUint8()) : (a.property_index = 127 & o);
            }
        }
    }),
    l.createFullBoxCtor('iref', function (e) {
        var t, r;
        for (this.references = []; e.getPosition() < this.start + this.size; ) {
            if ((t = l.parseOneBox(e, !0, this.size - (e.getPosition() - this.start))).code !== l.OK) return;
            (r = 0 === this.version ? new l.SingleItemTypeReferenceBox(t.type, t.size, t.hdr_size, t.start) : new l.SingleItemTypeReferenceBoxLarge(t.type, t.size, t.hdr_size, t.start)).write === l.Box.prototype.write && 'mdat' !== r.type && (n.warn('BoxParser', r.type + ' box writing not yet implemented, keeping unparsed data in memory for later write'), r.parseDataAndRewind(e)), r.parse(e), this.references.push(r);
        }
    }),
    l.createBoxCtor('irot', function (e) {
        this.angle = 3 & e.readUint8();
    }),
    l.createFullBoxCtor('ispe', function (e) {
        (this.image_width = e.readUint32()), (this.image_height = e.readUint32());
    }),
    l.createFullBoxCtor('kind', function (e) {
        (this.schemeURI = e.readCString()), (this.value = e.readCString());
    }),
    l.createFullBoxCtor('leva', function (e) {
        var t = e.readUint8();
        this.levels = [];
        for (var r = 0; r < t; r++) {
            var i = {};
            (this.levels[r] = i), (i.track_ID = e.readUint32());
            var o = e.readUint8();
            switch (((i.padding_flag = o >> 7), (i.assignment_type = 127 & o), i.assignment_type)) {
                case 0:
                    i.grouping_type = e.readString(4);
                    break;
                case 1:
                    (i.grouping_type = e.readString(4)), (i.grouping_type_parameter = e.readUint32());
                    break;
                case 2:
                case 3:
                    break;
                case 4:
                    i.sub_track_id = e.readUint32();
                    break;
                default:
                    n.warn('BoxParser', 'Unknown leva assignement type');
            }
        }
    }),
    l.createBoxCtor('lsel', function (e) {
        this.layer_id = e.readUint16();
    }),
    l.createBoxCtor('maxr', function (e) {
        (this.period = e.readUint32()), (this.bytes = e.readUint32());
    }),
    l.createBoxCtor('mdcv', function (e) {
        (this.display_primaries = []), (this.display_primaries[0] = {}), (this.display_primaries[0].x = e.readUint16()), (this.display_primaries[0].y = e.readUint16()), (this.display_primaries[1] = {}), (this.display_primaries[1].x = e.readUint16()), (this.display_primaries[1].y = e.readUint16()), (this.display_primaries[2] = {}), (this.display_primaries[2].x = e.readUint16()), (this.display_primaries[2].y = e.readUint16()), (this.white_point = {}), (this.white_point.x = e.readUint16()), (this.white_point.y = e.readUint16()), (this.max_display_mastering_luminance = e.readUint32()), (this.min_display_mastering_luminance = e.readUint32());
    }),
    l.createFullBoxCtor('mdhd', function (e) {
        1 == this.version ? ((this.creation_time = e.readUint64()), (this.modification_time = e.readUint64()), (this.timescale = e.readUint32()), (this.duration = e.readUint64())) : ((this.creation_time = e.readUint32()), (this.modification_time = e.readUint32()), (this.timescale = e.readUint32()), (this.duration = e.readUint32())), this.parseLanguage(e), e.readUint16();
    }),
    l.createFullBoxCtor('mehd', function (e) {
        1 & this.flags && (n.warn('BoxParser', 'mehd box incorrectly uses flags set to 1, converting version to 1'), (this.version = 1)), 1 == this.version ? (this.fragment_duration = e.readUint64()) : (this.fragment_duration = e.readUint32());
    }),
    l.createFullBoxCtor('meta', function (e) {
        (this.boxes = []), l.ContainerBox.prototype.parse.call(this, e);
    }),
    l.createFullBoxCtor('mfhd', function (e) {
        this.sequence_number = e.readUint32();
    }),
    l.createFullBoxCtor('mfro', function (e) {
        this._size = e.readUint32();
    }),
    l.createFullBoxCtor('mvhd', function (e) {
        1 == this.version ? ((this.creation_time = e.readUint64()), (this.modification_time = e.readUint64()), (this.timescale = e.readUint32()), (this.duration = e.readUint64())) : ((this.creation_time = e.readUint32()), (this.modification_time = e.readUint32()), (this.timescale = e.readUint32()), (this.duration = e.readUint32())), (this.rate = e.readUint32()), (this.volume = e.readUint16() >> 8), e.readUint16(), e.readUint32Array(2), (this.matrix = e.readUint32Array(9)), e.readUint32Array(6), (this.next_track_id = e.readUint32());
    }),
    l.createBoxCtor('npck', function (e) {
        this.packetssent = e.readUint32();
    }),
    l.createBoxCtor('nump', function (e) {
        this.packetssent = e.readUint64();
    }),
    l.createFullBoxCtor('padb', function (e) {
        var t = e.readUint32();
        this.padbits = [];
        for (var n = 0; n < Math.floor((t + 1) / 2); n++) this.padbits = e.readUint8();
    }),
    l.createBoxCtor('pasp', function (e) {
        (this.hSpacing = e.readUint32()), (this.vSpacing = e.readUint32());
    }),
    l.createBoxCtor('payl', function (e) {
        this.text = e.readString(this.size - this.hdr_size);
    }),
    l.createBoxCtor('payt', function (e) {
        this.payloadID = e.readUint32();
        var t = e.readUint8();
        this.rtpmap_string = e.readString(t);
    }),
    l.createFullBoxCtor('pdin', function (e) {
        var t = (this.size - this.hdr_size) / 8;
        (this.rate = []), (this.initial_delay = []);
        for (var n = 0; n < t; n++) (this.rate[n] = e.readUint32()), (this.initial_delay[n] = e.readUint32());
    }),
    l.createFullBoxCtor('pitm', function (e) {
        0 === this.version ? (this.item_id = e.readUint16()) : (this.item_id = e.readUint32());
    }),
    l.createFullBoxCtor('pixi', function (e) {
        var t;
        for (t = 0, this.num_channels = e.readUint8(), this.bits_per_channels = []; t < this.num_channels; t++) this.bits_per_channels[t] = e.readUint8();
    }),
    l.createBoxCtor('pmax', function (e) {
        this.bytes = e.readUint32();
    }),
    l.createFullBoxCtor('prft', function (e) {
        (this.ref_track_id = e.readUint32()), (this.ntp_timestamp = e.readUint64()), 0 === this.version ? (this.media_time = e.readUint32()) : (this.media_time = e.readUint64());
    }),
    l.createFullBoxCtor('pssh', function (e) {
        if (((this.system_id = l.parseHex16(e)), this.version > 0)) {
            var t = e.readUint32();
            this.kid = [];
            for (var n = 0; n < t; n++) this.kid[n] = l.parseHex16(e);
        }
        var r = e.readUint32();
        r > 0 && (this.data = e.readUint8Array(r));
    }),
    l.createFullBoxCtor('clef', function (e) {
        (this.width = e.readUint32()), (this.height = e.readUint32());
    }),
    l.createFullBoxCtor('enof', function (e) {
        (this.width = e.readUint32()), (this.height = e.readUint32());
    }),
    l.createFullBoxCtor('prof', function (e) {
        (this.width = e.readUint32()), (this.height = e.readUint32());
    }),
    l.createContainerBoxCtor('tapt', null, ['clef', 'prof', 'enof']),
    l.createBoxCtor('rtp ', function (e) {
        (this.descriptionformat = e.readString(4)), (this.sdptext = e.readString(this.size - this.hdr_size - 4));
    }),
    l.createFullBoxCtor('saio', function (e) {
        1 & this.flags && ((this.aux_info_type = e.readUint32()), (this.aux_info_type_parameter = e.readUint32()));
        var t = e.readUint32();
        this.offset = [];
        for (var n = 0; n < t; n++) 0 === this.version ? (this.offset[n] = e.readUint32()) : (this.offset[n] = e.readUint64());
    }),
    l.createFullBoxCtor('saiz', function (e) {
        1 & this.flags && ((this.aux_info_type = e.readUint32()), (this.aux_info_type_parameter = e.readUint32())), (this.default_sample_info_size = e.readUint8());
        var t = e.readUint32();
        if (((this.sample_info_size = []), 0 === this.default_sample_info_size)) for (var n = 0; n < t; n++) this.sample_info_size[n] = e.readUint8();
    }),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_METADATA, 'mett', function (e) {
        this.parseHeader(e), (this.content_encoding = e.readCString()), (this.mime_format = e.readCString()), this.parseFooter(e);
    }),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_METADATA, 'metx', function (e) {
        this.parseHeader(e), (this.content_encoding = e.readCString()), (this.namespace = e.readCString()), (this.schema_location = e.readCString()), this.parseFooter(e);
    }),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_SUBTITLE, 'sbtt', function (e) {
        this.parseHeader(e), (this.content_encoding = e.readCString()), (this.mime_format = e.readCString()), this.parseFooter(e);
    }),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_SUBTITLE, 'stpp', function (e) {
        this.parseHeader(e), (this.namespace = e.readCString()), (this.schema_location = e.readCString()), (this.auxiliary_mime_types = e.readCString()), this.parseFooter(e);
    }),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_SUBTITLE, 'stxt', function (e) {
        this.parseHeader(e), (this.content_encoding = e.readCString()), (this.mime_format = e.readCString()), this.parseFooter(e);
    }),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_SUBTITLE, 'tx3g', function (e) {
        this.parseHeader(e), (this.displayFlags = e.readUint32()), (this.horizontal_justification = e.readInt8()), (this.vertical_justification = e.readInt8()), (this.bg_color_rgba = e.readUint8Array(4)), (this.box_record = e.readInt16Array(4)), (this.style_record = e.readUint8Array(12)), this.parseFooter(e);
    }),
    l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_METADATA, 'wvtt', function (e) {
        this.parseHeader(e), this.parseFooter(e);
    }),
    l.createSampleGroupCtor('alst', function (e) {
        var t,
            n = e.readUint16();
        for (t = 0, this.first_output_sample = e.readUint16(), this.sample_offset = []; t < n; t++) this.sample_offset[t] = e.readUint32();
        var r = this.description_length - 4 - 4 * n;
        for (t = 0, this.num_output_samples = [], this.num_total_samples = []; t < r / 4; t++) (this.num_output_samples[t] = e.readUint16()), (this.num_total_samples[t] = e.readUint16());
    }),
    l.createSampleGroupCtor('avll', function (e) {
        (this.layerNumber = e.readUint8()), (this.accurateStatisticsFlag = e.readUint8()), (this.avgBitRate = e.readUint16()), (this.avgFrameRate = e.readUint16());
    }),
    l.createSampleGroupCtor('avss', function (e) {
        (this.subSequenceIdentifier = e.readUint16()), (this.layerNumber = e.readUint8());
        var t = e.readUint8();
        (this.durationFlag = t >> 7), (this.avgRateFlag = (t >> 6) & 1), this.durationFlag && (this.duration = e.readUint32()), this.avgRateFlag && ((this.accurateStatisticsFlag = e.readUint8()), (this.avgBitRate = e.readUint16()), (this.avgFrameRate = e.readUint16())), (this.dependency = []);
        for (var n = e.readUint8(), r = 0; r < n; r++) {
            var i = {};
            this.dependency.push(i), (i.subSeqDirectionFlag = e.readUint8()), (i.layerNumber = e.readUint8()), (i.subSequenceIdentifier = e.readUint16());
        }
    }),
    l.createSampleGroupCtor('dtrt', function (e) {
        n.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
    }),
    l.createSampleGroupCtor('mvif', function (e) {
        n.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
    }),
    l.createSampleGroupCtor('prol', function (e) {
        this.roll_distance = e.readInt16();
    }),
    l.createSampleGroupCtor('rap ', function (e) {
        var t = e.readUint8();
        (this.num_leading_samples_known = t >> 7), (this.num_leading_samples = 127 & t);
    }),
    l.createSampleGroupCtor('rash', function (e) {
        if (((this.operation_point_count = e.readUint16()), this.description_length !== 2 + (1 === this.operation_point_count ? 2 : 6 * this.operation_point_count) + 9)) n.warn('BoxParser', 'Mismatch in ' + this.grouping_type + ' sample group length'), (this.data = e.readUint8Array(this.description_length - 2));
        else {
            if (1 === this.operation_point_count) this.target_rate_share = e.readUint16();
            else {
                (this.target_rate_share = []), (this.available_bitrate = []);
                for (var t = 0; t < this.operation_point_count; t++) (this.available_bitrate[t] = e.readUint32()), (this.target_rate_share[t] = e.readUint16());
            }
            (this.maximum_bitrate = e.readUint32()), (this.minimum_bitrate = e.readUint32()), (this.discard_priority = e.readUint8());
        }
    }),
    l.createSampleGroupCtor('roll', function (e) {
        this.roll_distance = e.readInt16();
    }),
    (l.SampleGroupEntry.prototype.parse = function (e) {
        n.warn('BoxParser', 'Unknown Sample Group type: ' + this.grouping_type), (this.data = e.readUint8Array(this.description_length));
    }),
    l.createSampleGroupCtor('scif', function (e) {
        n.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
    }),
    l.createSampleGroupCtor('scnm', function (e) {
        n.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
    }),
    l.createSampleGroupCtor('seig', function (e) {
        this.reserved = e.readUint8();
        var t = e.readUint8();
        (this.crypt_byte_block = t >> 4), (this.skip_byte_block = 15 & t), (this.isProtected = e.readUint8()), (this.Per_Sample_IV_Size = e.readUint8()), (this.KID = l.parseHex16(e)), (this.constant_IV_size = 0), (this.constant_IV = 0), 1 === this.isProtected && 0 === this.Per_Sample_IV_Size && ((this.constant_IV_size = e.readUint8()), (this.constant_IV = e.readUint8Array(this.constant_IV_size)));
    }),
    l.createSampleGroupCtor('stsa', function (e) {
        n.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
    }),
    l.createSampleGroupCtor('sync', function (e) {
        var t = e.readUint8();
        this.NAL_unit_type = 63 & t;
    }),
    l.createSampleGroupCtor('tele', function (e) {
        var t = e.readUint8();
        this.level_independently_decodable = t >> 7;
    }),
    l.createSampleGroupCtor('tsas', function (e) {
        n.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
    }),
    l.createSampleGroupCtor('tscl', function (e) {
        n.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
    }),
    l.createSampleGroupCtor('vipr', function (e) {
        n.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
    }),
    l.createFullBoxCtor('sbgp', function (e) {
        (this.grouping_type = e.readString(4)), 1 === this.version ? (this.grouping_type_parameter = e.readUint32()) : (this.grouping_type_parameter = 0), (this.entries = []);
        for (var t = e.readUint32(), n = 0; n < t; n++) {
            var r = {};
            this.entries.push(r), (r.sample_count = e.readInt32()), (r.group_description_index = e.readInt32());
        }
    }),
    l.createFullBoxCtor('schm', function (e) {
        (this.scheme_type = e.readString(4)), (this.scheme_version = e.readUint32()), 1 & this.flags && (this.scheme_uri = e.readString(this.size - this.hdr_size - 8));
    }),
    l.createBoxCtor('sdp ', function (e) {
        this.sdptext = e.readString(this.size - this.hdr_size);
    }),
    l.createFullBoxCtor('sdtp', function (e) {
        var t,
            n = this.size - this.hdr_size;
        (this.is_leading = []), (this.sample_depends_on = []), (this.sample_is_depended_on = []), (this.sample_has_redundancy = []);
        for (var r = 0; r < n; r++) (t = e.readUint8()), (this.is_leading[r] = t >> 6), (this.sample_depends_on[r] = (t >> 4) & 3), (this.sample_is_depended_on[r] = (t >> 2) & 3), (this.sample_has_redundancy[r] = 3 & t);
    }),
    l.createFullBoxCtor('senc'),
    l.createFullBoxCtor('sgpd', function (e) {
        (this.grouping_type = e.readString(4)), n.debug('BoxParser', 'Found Sample Groups of type ' + this.grouping_type), 1 === this.version ? (this.default_length = e.readUint32()) : (this.default_length = 0), this.version >= 2 && (this.default_group_description_index = e.readUint32()), (this.entries = []);
        for (var t, r = e.readUint32(), i = 0; i < r; i++) (t = l[this.grouping_type + 'SampleGroupEntry'] ? new l[this.grouping_type + 'SampleGroupEntry'](this.grouping_type) : new l.SampleGroupEntry(this.grouping_type)), this.entries.push(t), 1 === this.version && 0 === this.default_length ? (t.description_length = e.readUint32()) : (t.description_length = this.default_length), t.write === l.SampleGroupEntry.prototype.write && (n.info('BoxParser', 'SampleGroup for type ' + this.grouping_type + ' writing not yet implemented, keeping unparsed data in memory for later write'), (t.data = e.readUint8Array(t.description_length)), (e.position -= t.description_length)), t.parse(e);
    }),
    l.createFullBoxCtor('sidx', function (e) {
        (this.reference_ID = e.readUint32()), (this.timescale = e.readUint32()), 0 === this.version ? ((this.earliest_presentation_time = e.readUint32()), (this.first_offset = e.readUint32())) : ((this.earliest_presentation_time = e.readUint64()), (this.first_offset = e.readUint64())), e.readUint16(), (this.references = []);
        for (var t = e.readUint16(), n = 0; n < t; n++) {
            var r = {};
            this.references.push(r);
            var i = e.readUint32();
            (r.reference_type = (i >> 31) & 1), (r.referenced_size = 2147483647 & i), (r.subsegment_duration = e.readUint32()), (i = e.readUint32()), (r.starts_with_SAP = (i >> 31) & 1), (r.SAP_type = (i >> 28) & 7), (r.SAP_delta_time = 268435455 & i);
        }
    }),
    (l.SingleItemTypeReferenceBox = function (e, t, n, r) {
        l.Box.call(this, e, t), (this.hdr_size = n), (this.start = r);
    }),
    (l.SingleItemTypeReferenceBox.prototype = new l.Box()),
    (l.SingleItemTypeReferenceBox.prototype.parse = function (e) {
        this.from_item_ID = e.readUint16();
        var t = e.readUint16();
        this.references = [];
        for (var n = 0; n < t; n++) this.references[n] = e.readUint16();
    }),
    (l.SingleItemTypeReferenceBoxLarge = function (e, t, n, r) {
        l.Box.call(this, e, t), (this.hdr_size = n), (this.start = r);
    }),
    (l.SingleItemTypeReferenceBoxLarge.prototype = new l.Box()),
    (l.SingleItemTypeReferenceBoxLarge.prototype.parse = function (e) {
        this.from_item_ID = e.readUint32();
        var t = e.readUint16();
        this.references = [];
        for (var n = 0; n < t; n++) this.references[n] = e.readUint32();
    }),
    l.createFullBoxCtor('SmDm', function (e) {
        (this.primaryRChromaticity_x = e.readUint16()), (this.primaryRChromaticity_y = e.readUint16()), (this.primaryGChromaticity_x = e.readUint16()), (this.primaryGChromaticity_y = e.readUint16()), (this.primaryBChromaticity_x = e.readUint16()), (this.primaryBChromaticity_y = e.readUint16()), (this.whitePointChromaticity_x = e.readUint16()), (this.whitePointChromaticity_y = e.readUint16()), (this.luminanceMax = e.readUint32()), (this.luminanceMin = e.readUint32());
    }),
    l.createFullBoxCtor('smhd', function (e) {
        (this.balance = e.readUint16()), e.readUint16();
    }),
    l.createFullBoxCtor('ssix', function (e) {
        this.subsegments = [];
        for (var t = e.readUint32(), n = 0; n < t; n++) {
            var r = {};
            this.subsegments.push(r), (r.ranges = []);
            for (var i = e.readUint32(), o = 0; o < i; o++) {
                var a = {};
                r.ranges.push(a), (a.level = e.readUint8()), (a.range_size = e.readUint24());
            }
        }
    }),
    l.createFullBoxCtor('stco', function (e) {
        var t;
        if (((t = e.readUint32()), (this.chunk_offsets = []), 0 === this.version)) for (var n = 0; n < t; n++) this.chunk_offsets.push(e.readUint32());
    }),
    l.createFullBoxCtor('stdp', function (e) {
        var t = (this.size - this.hdr_size) / 2;
        this.priority = [];
        for (var n = 0; n < t; n++) this.priority[n] = e.readUint16();
    }),
    l.createFullBoxCtor('sthd'),
    l.createFullBoxCtor('stri', function (e) {
        (this.switch_group = e.readUint16()), (this.alternate_group = e.readUint16()), (this.sub_track_id = e.readUint32());
        var t = (this.size - this.hdr_size - 8) / 4;
        this.attribute_list = [];
        for (var n = 0; n < t; n++) this.attribute_list[n] = e.readUint32();
    }),
    l.createFullBoxCtor('stsc', function (e) {
        var t, n;
        if (((t = e.readUint32()), (this.first_chunk = []), (this.samples_per_chunk = []), (this.sample_description_index = []), 0 === this.version)) for (n = 0; n < t; n++) this.first_chunk.push(e.readUint32()), this.samples_per_chunk.push(e.readUint32()), this.sample_description_index.push(e.readUint32());
    }),
    l.createFullBoxCtor('stsd', function (e) {
        var t, r, i, o;
        for (t = 1, this.entries = [], i = e.readUint32(); t <= i; t++) {
            if ((r = l.parseOneBox(e, !0, this.size - (e.getPosition() - this.start))).code !== l.OK) return;
            l[r.type + 'SampleEntry'] ? (((o = new l[r.type + 'SampleEntry'](r.size)).hdr_size = r.hdr_size), (o.start = r.start)) : (n.warn('BoxParser', 'Unknown sample entry type: ' + r.type), (o = new l.SampleEntry(r.type, r.size, r.hdr_size, r.start))), o.write === l.SampleEntry.prototype.write && (n.info('BoxParser', 'SampleEntry ' + o.type + ' box writing not yet implemented, keeping unparsed data in memory for later write'), o.parseDataAndRewind(e)), o.parse(e), this.entries.push(o);
        }
    }),
    l.createFullBoxCtor('stsg', function (e) {
        this.grouping_type = e.readUint32();
        var t = e.readUint16();
        this.group_description_index = [];
        for (var n = 0; n < t; n++) this.group_description_index[n] = e.readUint32();
    }),
    l.createFullBoxCtor('stsh', function (e) {
        var t, n;
        if (((t = e.readUint32()), (this.shadowed_sample_numbers = []), (this.sync_sample_numbers = []), 0 === this.version)) for (n = 0; n < t; n++) this.shadowed_sample_numbers.push(e.readUint32()), this.sync_sample_numbers.push(e.readUint32());
    }),
    l.createFullBoxCtor('stss', function (e) {
        var t, n;
        if (((n = e.readUint32()), 0 === this.version)) for (t = 0, this.sample_numbers = []; t < n; t++) this.sample_numbers.push(e.readUint32());
    }),
    l.createFullBoxCtor('stsz', function (e) {
        var t;
        if (((this.sample_sizes = []), 0 === this.version)) for (t = 0, this.sample_size = e.readUint32(), this.sample_count = e.readUint32(); t < this.sample_count; t++) 0 === this.sample_size ? this.sample_sizes.push(e.readUint32()) : (this.sample_sizes[t] = this.sample_size);
    }),
    l.createFullBoxCtor('stts', function (e) {
        var t, r, i;
        if (((t = e.readUint32()), (this.sample_counts = []), (this.sample_deltas = []), 0 === this.version)) for (r = 0; r < t; r++) this.sample_counts.push(e.readUint32()), (i = e.readInt32()) < 0 && (n.warn('BoxParser', 'File uses negative stts sample delta, using value 1 instead, sync may be lost!'), (i = 1)), this.sample_deltas.push(i);
    }),
    l.createFullBoxCtor('stvi', function (e) {
        var t,
            n,
            r = e.readUint32();
        (this.single_view_allowed = 3 & r), (this.stereo_scheme = e.readUint32());
        var i = e.readUint32();
        for (this.stereo_indication_type = e.readString(i), this.boxes = []; e.getPosition() < this.start + this.size; ) {
            if ((t = l.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== l.OK) return;
            (n = t.box), this.boxes.push(n), (this[n.type] = n);
        }
    }),
    l.createBoxCtor('styp', function (e) {
        l.ftypBox.prototype.parse.call(this, e);
    }),
    l.createFullBoxCtor('stz2', function (e) {
        if (((this.sample_sizes = []), 0 === this.version)) {
            if (((this.reserved = e.readUint24()), (this.field_size = e.readUint8()), (r = e.readUint32()), 4 === this.field_size))
                for (t = 0; t < r; t += 2) {
                    var t,
                        r,
                        i = e.readUint8();
                    (this.sample_sizes[t] = (i >> 4) & 15), (this.sample_sizes[t + 1] = 15 & i);
                }
            else if (8 === this.field_size) for (t = 0; t < r; t++) this.sample_sizes[t] = e.readUint8();
            else if (16 === this.field_size) for (t = 0; t < r; t++) this.sample_sizes[t] = e.readUint16();
            else n.error('BoxParser', 'Error in length field in stz2 box');
        }
    }),
    l.createFullBoxCtor('subs', function (e) {
        for (t = 0, r = e.readUint32(), this.entries = []; t < r; t++) {
            var t,
                n,
                r,
                i,
                o = {};
            if (((this.entries[t] = o), (o.sample_delta = e.readUint32()), (o.subsamples = []), (i = e.readUint16()) > 0))
                for (n = 0; n < i; n++) {
                    var a = {};
                    o.subsamples.push(a), 1 == this.version ? (a.size = e.readUint32()) : (a.size = e.readUint16()), (a.priority = e.readUint8()), (a.discardable = e.readUint8()), (a.codec_specific_parameters = e.readUint32());
                }
        }
    }),
    l.createFullBoxCtor('tenc', function (e) {
        if ((e.readUint8(), 0 === this.version)) e.readUint8();
        else {
            var t = e.readUint8();
            (this.default_crypt_byte_block = (t >> 4) & 15), (this.default_skip_byte_block = 15 & t);
        }
        (this.default_isProtected = e.readUint8()), (this.default_Per_Sample_IV_Size = e.readUint8()), (this.default_KID = l.parseHex16(e)), 1 === this.default_isProtected && 0 === this.default_Per_Sample_IV_Size && ((this.default_constant_IV_size = e.readUint8()), (this.default_constant_IV = e.readUint8Array(this.default_constant_IV_size)));
    }),
    l.createFullBoxCtor('tfdt', function (e) {
        1 == this.version ? (this.baseMediaDecodeTime = e.readUint64()) : (this.baseMediaDecodeTime = e.readUint32());
    }),
    l.createFullBoxCtor('tfhd', function (e) {
        var t = 0;
        (this.track_id = e.readUint32()), this.size - this.hdr_size > t && this.flags & l.TFHD_FLAG_BASE_DATA_OFFSET ? ((this.base_data_offset = e.readUint64()), (t += 8)) : (this.base_data_offset = 0), this.size - this.hdr_size > t && this.flags & l.TFHD_FLAG_SAMPLE_DESC ? ((this.default_sample_description_index = e.readUint32()), (t += 4)) : (this.default_sample_description_index = 0), this.size - this.hdr_size > t && this.flags & l.TFHD_FLAG_SAMPLE_DUR ? ((this.default_sample_duration = e.readUint32()), (t += 4)) : (this.default_sample_duration = 0), this.size - this.hdr_size > t && this.flags & l.TFHD_FLAG_SAMPLE_SIZE ? ((this.default_sample_size = e.readUint32()), (t += 4)) : (this.default_sample_size = 0), this.size - this.hdr_size > t && this.flags & l.TFHD_FLAG_SAMPLE_FLAGS ? ((this.default_sample_flags = e.readUint32()), (t += 4)) : (this.default_sample_flags = 0);
    }),
    l.createFullBoxCtor('tfra', function (e) {
        (this.track_ID = e.readUint32()), e.readUint24();
        var t = e.readUint8();
        (this.length_size_of_traf_num = (t >> 4) & 3), (this.length_size_of_trun_num = (t >> 2) & 3), (this.length_size_of_sample_num = 3 & t), (this.entries = []);
        for (var n = e.readUint32(), r = 0; r < n; r++) 1 === this.version ? ((this.time = e.readUint64()), (this.moof_offset = e.readUint64())) : ((this.time = e.readUint32()), (this.moof_offset = e.readUint32())), (this.traf_number = e['readUint' + 8 * (this.length_size_of_traf_num + 1)]()), (this.trun_number = e['readUint' + 8 * (this.length_size_of_trun_num + 1)]()), (this.sample_number = e['readUint' + 8 * (this.length_size_of_sample_num + 1)]());
    }),
    l.createFullBoxCtor('tkhd', function (e) {
        1 == this.version ? ((this.creation_time = e.readUint64()), (this.modification_time = e.readUint64()), (this.track_id = e.readUint32()), e.readUint32(), (this.duration = e.readUint64())) : ((this.creation_time = e.readUint32()), (this.modification_time = e.readUint32()), (this.track_id = e.readUint32()), e.readUint32(), (this.duration = e.readUint32())), e.readUint32Array(2), (this.layer = e.readInt16()), (this.alternate_group = e.readInt16()), (this.volume = e.readInt16() >> 8), e.readUint16(), (this.matrix = e.readInt32Array(9)), (this.width = e.readUint32()), (this.height = e.readUint32());
    }),
    l.createBoxCtor('tmax', function (e) {
        this.time = e.readUint32();
    }),
    l.createBoxCtor('tmin', function (e) {
        this.time = e.readUint32();
    }),
    l.createBoxCtor('totl', function (e) {
        this.bytessent = e.readUint32();
    }),
    l.createBoxCtor('tpay', function (e) {
        this.bytessent = e.readUint32();
    }),
    l.createBoxCtor('tpyl', function (e) {
        this.bytessent = e.readUint64();
    }),
    (l.TrackGroupTypeBox.prototype.parse = function (e) {
        this.parseFullHeader(e), (this.track_group_id = e.readUint32());
    }),
    l.createTrackGroupCtor('msrc'),
    (l.TrackReferenceTypeBox = function (e, t, n, r) {
        l.Box.call(this, e, t), (this.hdr_size = n), (this.start = r);
    }),
    (l.TrackReferenceTypeBox.prototype = new l.Box()),
    (l.TrackReferenceTypeBox.prototype.parse = function (e) {
        this.track_ids = e.readUint32Array((this.size - this.hdr_size) / 4);
    }),
    (l.trefBox.prototype.parse = function (e) {
        for (var t, r; e.getPosition() < this.start + this.size; ) {
            if ((t = l.parseOneBox(e, !0, this.size - (e.getPosition() - this.start))).code !== l.OK) return;
            (r = new l.TrackReferenceTypeBox(t.type, t.size, t.hdr_size, t.start)).write === l.Box.prototype.write && 'mdat' !== r.type && (n.info('BoxParser', 'TrackReference ' + r.type + ' box writing not yet implemented, keeping unparsed data in memory for later write'), r.parseDataAndRewind(e)), r.parse(e), this.boxes.push(r);
        }
    }),
    l.createFullBoxCtor('trep', function (e) {
        for (this.track_ID = e.readUint32(), this.boxes = []; e.getPosition() < this.start + this.size; ) {
            if ((ret = l.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== l.OK) return;
            (box = ret.box), this.boxes.push(box);
        }
    }),
    l.createFullBoxCtor('trex', function (e) {
        (this.track_id = e.readUint32()), (this.default_sample_description_index = e.readUint32()), (this.default_sample_duration = e.readUint32()), (this.default_sample_size = e.readUint32()), (this.default_sample_flags = e.readUint32());
    }),
    l.createBoxCtor('trpy', function (e) {
        this.bytessent = e.readUint64();
    }),
    l.createFullBoxCtor('trun', function (e) {
        var t = 0;
        if (((this.sample_count = e.readUint32()), (t += 4), this.size - this.hdr_size > t && this.flags & l.TRUN_FLAGS_DATA_OFFSET ? ((this.data_offset = e.readInt32()), (t += 4)) : (this.data_offset = 0), this.size - this.hdr_size > t && this.flags & l.TRUN_FLAGS_FIRST_FLAG ? ((this.first_sample_flags = e.readUint32()), (t += 4)) : (this.first_sample_flags = 0), (this.sample_duration = []), (this.sample_size = []), (this.sample_flags = []), (this.sample_composition_time_offset = []), this.size - this.hdr_size > t)) for (var n = 0; n < this.sample_count; n++) this.flags & l.TRUN_FLAGS_DURATION && (this.sample_duration[n] = e.readUint32()), this.flags & l.TRUN_FLAGS_SIZE && (this.sample_size[n] = e.readUint32()), this.flags & l.TRUN_FLAGS_FLAGS && (this.sample_flags[n] = e.readUint32()), this.flags & l.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? (this.sample_composition_time_offset[n] = e.readUint32()) : (this.sample_composition_time_offset[n] = e.readInt32()));
    }),
    l.createFullBoxCtor('tsel', function (e) {
        this.switch_group = e.readUint32();
        var t = (this.size - this.hdr_size - 4) / 4;
        this.attribute_list = [];
        for (var n = 0; n < t; n++) this.attribute_list[n] = e.readUint32();
    }),
    l.createFullBoxCtor('txtC', function (e) {
        this.config = e.readCString();
    }),
    l.createFullBoxCtor('url ', function (e) {
        1 !== this.flags && (this.location = e.readCString());
    }),
    l.createFullBoxCtor('urn ', function (e) {
        (this.name = e.readCString()), this.size - this.hdr_size - this.name.length - 1 > 0 && (this.location = e.readCString());
    }),
    l.createUUIDBox('a5d40b30e81411ddba2f0800200c9a66', !0, !1, function (e) {
        this.LiveServerManifest = e
            .readString(this.size - this.hdr_size)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }),
    l.createUUIDBox('d08a4f1810f34a82b6c832d8aba183d3', !0, !1, function (e) {
        this.system_id = l.parseHex16(e);
        var t = e.readUint32();
        t > 0 && (this.data = e.readUint8Array(t));
    }),
    l.createUUIDBox('a2394f525a9b4f14a2446c427c648df4', !0, !1),
    l.createUUIDBox('8974dbce7be74c5184f97148f9882554', !0, !1, function (e) {
        (this.default_AlgorithmID = e.readUint24()), (this.default_IV_size = e.readUint8()), (this.default_KID = l.parseHex16(e));
    }),
    l.createUUIDBox('d4807ef2ca3946958e5426cb9e46a79f', !0, !1, function (e) {
        (this.fragment_count = e.readUint8()), (this.entries = []);
        for (var t = 0; t < this.fragment_count; t++) {
            var n = {},
                r = 0,
                i = 0;
            1 === this.version ? ((r = e.readUint64()), (i = e.readUint64())) : ((r = e.readUint32()), (i = e.readUint32())), (n.absolute_time = r), (n.absolute_duration = i), this.entries.push(n);
        }
    }),
    l.createUUIDBox('6d1d9b0542d544e680e2141daff757b2', !0, !1, function (e) {
        1 === this.version ? ((this.absolute_time = e.readUint64()), (this.duration = e.readUint64())) : ((this.absolute_time = e.readUint32()), (this.duration = e.readUint32()));
    }),
    l.createFullBoxCtor('vmhd', function (e) {
        (this.graphicsmode = e.readUint16()), (this.opcolor = e.readUint16Array(3));
    }),
    l.createFullBoxCtor('vpcC', function (e) {
        var t;
        1 === this.version ? ((this.profile = e.readUint8()), (this.level = e.readUint8()), (t = e.readUint8()), (this.bitDepth = t >> 4), (this.chromaSubsampling = (t >> 1) & 7), (this.videoFullRangeFlag = 1 & t), (this.colourPrimaries = e.readUint8()), (this.transferCharacteristics = e.readUint8()), (this.matrixCoefficients = e.readUint8())) : ((this.profile = e.readUint8()), (this.level = e.readUint8()), (t = e.readUint8()), (this.bitDepth = (t >> 4) & 15), (this.colorSpace = 15 & t), (t = e.readUint8()), (this.chromaSubsampling = (t >> 4) & 15), (this.transferFunction = (t >> 1) & 7), (this.videoFullRangeFlag = 1 & t)), (this.codecIntializationDataSize = e.readUint16()), (this.codecIntializationData = e.readUint8Array(this.codecIntializationDataSize));
    }),
    l.createBoxCtor('vttC', function (e) {
        this.text = e.readString(this.size - this.hdr_size);
    }),
    l.createFullBoxCtor('vvcC', function (e) {
        var t,
            n,
            r = {
                held_bits: void 0,
                num_held_bits: 0,
                stream_read_1_bytes: function (e) {
                    (this.held_bits = e.readUint8()), (this.num_held_bits = 8);
                },
                stream_read_2_bytes: function (e) {
                    (this.held_bits = e.readUint16()), (this.num_held_bits = 16);
                },
                extract_bits: function (e) {
                    var t = (this.held_bits >> (this.num_held_bits - e)) & ((1 << e) - 1);
                    return (this.num_held_bits -= e), t;
                }
            };
        if ((r.stream_read_1_bytes(e), r.extract_bits(5), (this.lengthSizeMinusOne = r.extract_bits(2)), (this.ptl_present_flag = r.extract_bits(1)), this.ptl_present_flag)) {
            if ((r.stream_read_2_bytes(e), (this.ols_idx = r.extract_bits(9)), (this.num_sublayers = r.extract_bits(3)), (this.constant_frame_rate = r.extract_bits(2)), (this.chroma_format_idc = r.extract_bits(2)), r.stream_read_1_bytes(e), (this.bit_depth_minus8 = r.extract_bits(3)), r.extract_bits(5), r.stream_read_2_bytes(e), r.extract_bits(2), (this.num_bytes_constraint_info = r.extract_bits(6)), (this.general_profile_idc = r.extract_bits(7)), (this.general_tier_flag = r.extract_bits(1)), (this.general_level_idc = e.readUint8()), r.stream_read_1_bytes(e), (this.ptl_frame_only_constraint_flag = r.extract_bits(1)), (this.ptl_multilayer_enabled_flag = r.extract_bits(1)), (this.general_constraint_info = new Uint8Array(this.num_bytes_constraint_info)), this.num_bytes_constraint_info)) {
                for (t = 0; t < this.num_bytes_constraint_info - 1; t++) {
                    var i = r.extract_bits(6);
                    r.stream_read_1_bytes(e);
                    var o = r.extract_bits(2);
                    this.general_constraint_info[t] = (i << 2) | o;
                }
                this.general_constraint_info[this.num_bytes_constraint_info - 1] = r.extract_bits(6);
            } else r.extract_bits(6);
            for (r.stream_read_1_bytes(e), this.ptl_sublayer_present_mask = 0, n = this.num_sublayers - 2; n >= 0; --n) {
                var a = r.extract_bits(1);
                this.ptl_sublayer_present_mask |= a << n;
            }
            for (n = this.num_sublayers; n <= 8 && this.num_sublayers > 1; ++n) r.extract_bits(1);
            for (n = this.num_sublayers - 2; n >= 0; --n) this.ptl_sublayer_present_mask & (1 << n) && (this.sublayer_level_idc[n] = e.readUint8());
            if (((this.ptl_num_sub_profiles = e.readUint8()), (this.general_sub_profile_idc = []), this.ptl_num_sub_profiles)) for (t = 0; t < this.ptl_num_sub_profiles; t++) this.general_sub_profile_idc.push(e.readUint32());
            (this.max_picture_width = e.readUint16()), (this.max_picture_height = e.readUint16()), (this.avg_frame_rate = e.readUint16());
        }
        var s = 12,
            l = 13;
        this.nalu_arrays = [];
        var c = e.readUint8();
        for (t = 0; t < c; t++) {
            var u = [];
            this.nalu_arrays.push(u), r.stream_read_1_bytes(e), (u.completeness = r.extract_bits(1)), r.extract_bits(2), (u.nalu_type = r.extract_bits(5));
            var d = 1;
            for (u.nalu_type != l && u.nalu_type != s && (d = e.readUint16()), n = 0; n < d; n++) {
                var f = e.readUint16();
                u.push({
                    data: e.readUint8Array(f),
                    length: f
                });
            }
        }
    }),
    l.createFullBoxCtor('vvnC', function (e) {
        var t = strm.readUint8();
        this.lengthSizeMinusOne = 3 & t;
    }),
    (l.SampleEntry.prototype.isVideo = function () {
        return !1;
    }),
    (l.SampleEntry.prototype.isAudio = function () {
        return !1;
    }),
    (l.SampleEntry.prototype.isSubtitle = function () {
        return !1;
    }),
    (l.SampleEntry.prototype.isMetadata = function () {
        return !1;
    }),
    (l.SampleEntry.prototype.isHint = function () {
        return !1;
    }),
    (l.SampleEntry.prototype.getCodec = function () {
        return this.type.replace('.', '');
    }),
    (l.SampleEntry.prototype.getWidth = function () {
        return '';
    }),
    (l.SampleEntry.prototype.getHeight = function () {
        return '';
    }),
    (l.SampleEntry.prototype.getChannelCount = function () {
        return '';
    }),
    (l.SampleEntry.prototype.getSampleRate = function () {
        return '';
    }),
    (l.SampleEntry.prototype.getSampleSize = function () {
        return '';
    }),
    (l.VisualSampleEntry.prototype.isVideo = function () {
        return !0;
    }),
    (l.VisualSampleEntry.prototype.getWidth = function () {
        return this.width;
    }),
    (l.VisualSampleEntry.prototype.getHeight = function () {
        return this.height;
    }),
    (l.AudioSampleEntry.prototype.isAudio = function () {
        return !0;
    }),
    (l.AudioSampleEntry.prototype.getChannelCount = function () {
        return this.channel_count;
    }),
    (l.AudioSampleEntry.prototype.getSampleRate = function () {
        return this.samplerate;
    }),
    (l.AudioSampleEntry.prototype.getSampleSize = function () {
        return this.samplesize;
    }),
    (l.SubtitleSampleEntry.prototype.isSubtitle = function () {
        return !0;
    }),
    (l.MetadataSampleEntry.prototype.isMetadata = function () {
        return !0;
    }),
    (l.decimalToHex = function (e, t) {
        var n = Number(e).toString(16);
        for (t = null == t ? (t = 2) : t; n.length < t; ) n = '0' + n;
        return n;
    }),
    (l.avc1SampleEntry.prototype.getCodec =
        l.avc2SampleEntry.prototype.getCodec =
        l.avc3SampleEntry.prototype.getCodec =
        l.avc4SampleEntry.prototype.getCodec =
            function () {
                var e = l.SampleEntry.prototype.getCodec.call(this);
                return this.avcC ? e + '.' + l.decimalToHex(this.avcC.AVCProfileIndication) + l.decimalToHex(this.avcC.profile_compatibility) + l.decimalToHex(this.avcC.AVCLevelIndication) : e;
            }),
    (l.hev1SampleEntry.prototype.getCodec = l.hvc1SampleEntry.prototype.getCodec =
        function () {
            var e,
                t = l.SampleEntry.prototype.getCodec.call(this);
            if (this.hvcC) {
                switch (((t += '.'), this.hvcC.general_profile_space)) {
                    case 0:
                        t += '';
                        break;
                    case 1:
                        t += 'A';
                        break;
                    case 2:
                        t += 'B';
                        break;
                    case 3:
                        t += 'C';
                }
                (t += this.hvcC.general_profile_idc), (t += '.');
                var n = this.hvcC.general_profile_compatibility,
                    r = 0;
                for (e = 0; e < 32 && ((r |= 1 & n), 31 != e); e++) (r <<= 1), (n >>= 1);
                (t += l.decimalToHex(r, 0)), (t += '.'), 0 === this.hvcC.general_tier_flag ? (t += 'L') : (t += 'H'), (t += this.hvcC.general_level_idc);
                var i = !1,
                    o = '';
                for (e = 5; e >= 0; e--) (this.hvcC.general_constraint_indicator[e] || i) && ((o = '.' + l.decimalToHex(this.hvcC.general_constraint_indicator[e], 0) + o), (i = !0));
                t += o;
            }
            return t;
        }),
    (l.vvc1SampleEntry.prototype.getCodec = l.vvi1SampleEntry.prototype.getCodec =
        function () {
            var e = l.SampleEntry.prototype.getCodec.call(this);
            if (this.vvcC) {
                (e += '.' + this.vvcC.general_profile_idc), this.vvcC.general_tier_flag ? (e += '.H') : (e += '.L'), (e += this.vvcC.general_level_idc);
                var t = '';
                if (this.vvcC.general_constraint_info) {
                    var n,
                        r,
                        i,
                        o = [];
                    for (r = 0, n = 0 | (this.vvcC.ptl_frame_only_constraint << 7) | (this.vvcC.ptl_multilayer_enabled << 6); r < this.vvcC.general_constraint_info.length; ++r) (n |= (this.vvcC.general_constraint_info[r] >> 2) & 63), o.push(n), n && (i = r), (n = (this.vvcC.general_constraint_info[r] >> 2) & 3);
                    if (void 0 === i) t = '.CA';
                    else {
                        t = '.C';
                        var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
                            s = 0,
                            c = 0;
                        for (r = 0; r <= i; ++r) for (s = (s << 8) | o[r], c += 8; c >= 5; ) (t += a[(s >> (c - 5)) & 31]), (c -= 5), (s &= (1 << c) - 1);
                        c && ((s <<= 5 - c), (t += a[31 & s]));
                    }
                }
                e += t;
            }
            return e;
        }),
    (l.mp4aSampleEntry.prototype.getCodec = function () {
        var e = l.SampleEntry.prototype.getCodec.call(this);
        if (!this.esds || !this.esds.esd) return e;
        var t = this.esds.esd.getOTI(),
            n = this.esds.esd.getAudioConfig();
        return e + '.' + l.decimalToHex(t) + (n ? '.' + n : '');
    }),
    (l.stxtSampleEntry.prototype.getCodec = function () {
        var e = l.SampleEntry.prototype.getCodec.call(this);
        return this.mime_format ? e + '.' + this.mime_format : e;
    }),
    (l.vp08SampleEntry.prototype.getCodec = l.vp09SampleEntry.prototype.getCodec =
        function () {
            var e = l.SampleEntry.prototype.getCodec.call(this),
                t = this.vpcC.level;
            0 == t && (t = '00');
            var n = this.vpcC.bitDepth;
            return 8 == n && (n = '08'), e + '.0' + this.vpcC.profile + '.' + t + '.' + n;
        }),
    (l.av01SampleEntry.prototype.getCodec = function () {
        var e,
            t = l.SampleEntry.prototype.getCodec.call(this),
            n = this.av1C.seq_level_idx_0;
        return n < 10 && (n = '0' + n), 2 === this.av1C.seq_profile && 1 === this.av1C.high_bitdepth ? (e = 1 === this.av1C.twelve_bit ? '12' : '10') : this.av1C.seq_profile <= 2 && (e = 1 === this.av1C.high_bitdepth ? '10' : '08'), t + '.' + this.av1C.seq_profile + '.' + n + (this.av1C.seq_tier_0 ? 'H' : 'M') + '.' + e;
    }),
    (l.Box.prototype.writeHeader = function (e, t) {
        (this.size += 8), this.size > o && (this.size += 8), 'uuid' === this.type && (this.size += 16), n.debug('BoxWriter', 'Writing box ' + this.type + ' of size: ' + this.size + ' at position ' + e.getPosition() + (t || '')), this.size > o ? e.writeUint32(1) : ((this.sizePosition = e.getPosition()), e.writeUint32(this.size)), e.writeString(this.type, null, 4), 'uuid' === this.type && e.writeUint8Array(this.uuid), this.size > o && e.writeUint64(this.size);
    }),
    (l.FullBox.prototype.writeHeader = function (e) {
        (this.size += 4), l.Box.prototype.writeHeader.call(this, e, ' v=' + this.version + ' f=' + this.flags), e.writeUint8(this.version), e.writeUint24(this.flags);
    }),
    (l.Box.prototype.write = function (e) {
        'mdat' === this.type ? this.data && ((this.size = this.data.length), this.writeHeader(e), e.writeUint8Array(this.data)) : ((this.size = this.data ? this.data.length : 0), this.writeHeader(e), this.data && e.writeUint8Array(this.data));
    }),
    (l.ContainerBox.prototype.write = function (e) {
        (this.size = 0), this.writeHeader(e);
        for (var t = 0; t < this.boxes.length; t++) this.boxes[t] && (this.boxes[t].write(e), (this.size += this.boxes[t].size));
        n.debug('BoxWriter', 'Adjusting box ' + this.type + ' with new size ' + this.size), e.adjustUint32(this.sizePosition, this.size);
    }),
    (l.TrackReferenceTypeBox.prototype.write = function (e) {
        (this.size = 4 * this.track_ids.length), this.writeHeader(e), e.writeUint32Array(this.track_ids);
    }),
    (l.avcCBox.prototype.write = function (e) {
        var t;
        for (t = 0, this.size = 7; t < this.SPS.length; t++) this.size += 2 + this.SPS[t].length;
        for (t = 0; t < this.PPS.length; t++) this.size += 2 + this.PPS[t].length;
        for (this.ext && (this.size += this.ext.length), this.writeHeader(e), e.writeUint8(this.configurationVersion), e.writeUint8(this.AVCProfileIndication), e.writeUint8(this.profile_compatibility), e.writeUint8(this.AVCLevelIndication), e.writeUint8(this.lengthSizeMinusOne + 252), e.writeUint8(this.SPS.length + 224), t = 0; t < this.SPS.length; t++) e.writeUint16(this.SPS[t].length), e.writeUint8Array(this.SPS[t].nalu);
        for (e.writeUint8(this.PPS.length), t = 0; t < this.PPS.length; t++) e.writeUint16(this.PPS[t].length), e.writeUint8Array(this.PPS[t].nalu);
        this.ext && e.writeUint8Array(this.ext);
    }),
    (l.co64Box.prototype.write = function (e) {
        var t;
        for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.chunk_offsets.length, this.writeHeader(e), e.writeUint32(this.chunk_offsets.length), t = 0; t < this.chunk_offsets.length; t++) e.writeUint64(this.chunk_offsets[t]);
    }),
    (l.cslgBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 20), this.writeHeader(e), e.writeInt32(this.compositionToDTSShift), e.writeInt32(this.leastDecodeToDisplayDelta), e.writeInt32(this.greatestDecodeToDisplayDelta), e.writeInt32(this.compositionStartTime), e.writeInt32(this.compositionEndTime);
    }),
    (l.cttsBox.prototype.write = function (e) {
        var t;
        for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(e), e.writeUint32(this.sample_counts.length), t = 0; t < this.sample_counts.length; t++) e.writeUint32(this.sample_counts[t]), 1 === this.version ? e.writeInt32(this.sample_offsets[t]) : e.writeUint32(this.sample_offsets[t]);
    }),
    (l.drefBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 4), this.writeHeader(e), e.writeUint32(this.entries.length);
        for (var t = 0; t < this.entries.length; t++) this.entries[t].write(e), (this.size += this.entries[t].size);
        n.debug('BoxWriter', 'Adjusting box ' + this.type + ' with new size ' + this.size), e.adjustUint32(this.sizePosition, this.size);
    }),
    (l.elngBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = this.extended_language.length), this.writeHeader(e), e.writeString(this.extended_language);
    }),
    (l.elstBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 4 + 12 * this.entries.length), this.writeHeader(e), e.writeUint32(this.entries.length);
        for (var t = 0; t < this.entries.length; t++) {
            var n = this.entries[t];
            e.writeUint32(n.segment_duration), e.writeInt32(n.media_time), e.writeInt16(n.media_rate_integer), e.writeInt16(n.media_rate_fraction);
        }
    }),
    (l.emsgBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 16 + this.message_data.length + (this.scheme_id_uri.length + 1) + (this.value.length + 1)), this.writeHeader(e), e.writeCString(this.scheme_id_uri), e.writeCString(this.value), e.writeUint32(this.timescale), e.writeUint32(this.presentation_time_delta), e.writeUint32(this.event_duration), e.writeUint32(this.id), e.writeUint8Array(this.message_data);
    }),
    (l.ftypBox.prototype.write = function (e) {
        (this.size = 8 + 4 * this.compatible_brands.length), this.writeHeader(e), e.writeString(this.major_brand, null, 4), e.writeUint32(this.minor_version);
        for (var t = 0; t < this.compatible_brands.length; t++) e.writeString(this.compatible_brands[t], null, 4);
    }),
    (l.hdlrBox.prototype.write = function (e) {
        (this.size = 20 + this.name.length + 1), (this.version = 0), (this.flags = 0), this.writeHeader(e), e.writeUint32(0), e.writeString(this.handler, null, 4), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeCString(this.name);
    }),
    (l.kindBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = this.schemeURI.length + 1 + (this.value.length + 1)), this.writeHeader(e), e.writeCString(this.schemeURI), e.writeCString(this.value);
    }),
    (l.mdhdBox.prototype.write = function (e) {
        (this.size = 20), (this.flags = 0), (this.version = 0), this.writeHeader(e), e.writeUint32(this.creation_time), e.writeUint32(this.modification_time), e.writeUint32(this.timescale), e.writeUint32(this.duration), e.writeUint16(this.language), e.writeUint16(0);
    }),
    (l.mehdBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 4), this.writeHeader(e), e.writeUint32(this.fragment_duration);
    }),
    (l.mfhdBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 4), this.writeHeader(e), e.writeUint32(this.sequence_number);
    }),
    (l.mvhdBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 96), this.writeHeader(e), e.writeUint32(this.creation_time), e.writeUint32(this.modification_time), e.writeUint32(this.timescale), e.writeUint32(this.duration), e.writeUint32(this.rate), e.writeUint16(this.volume << 8), e.writeUint16(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32Array(this.matrix), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(this.next_track_id);
    }),
    (l.SampleEntry.prototype.writeHeader = function (e) {
        (this.size = 8), l.Box.prototype.writeHeader.call(this, e), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint16(this.data_reference_index);
    }),
    (l.SampleEntry.prototype.writeFooter = function (e) {
        for (var t = 0; t < this.boxes.length; t++) this.boxes[t].write(e), (this.size += this.boxes[t].size);
        n.debug('BoxWriter', 'Adjusting box ' + this.type + ' with new size ' + this.size), e.adjustUint32(this.sizePosition, this.size);
    }),
    (l.SampleEntry.prototype.write = function (e) {
        this.writeHeader(e), e.writeUint8Array(this.data), (this.size += this.data.length), n.debug('BoxWriter', 'Adjusting box ' + this.type + ' with new size ' + this.size), e.adjustUint32(this.sizePosition, this.size);
    }),
    (l.VisualSampleEntry.prototype.write = function (e) {
        this.writeHeader(e), (this.size += 70), e.writeUint16(0), e.writeUint16(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint16(this.width), e.writeUint16(this.height), e.writeUint32(this.horizresolution), e.writeUint32(this.vertresolution), e.writeUint32(0), e.writeUint16(this.frame_count), e.writeUint8(Math.min(31, this.compressorname.length)), e.writeString(this.compressorname, null, 31), e.writeUint16(this.depth), e.writeInt16(-1), this.writeFooter(e);
    }),
    (l.AudioSampleEntry.prototype.write = function (e) {
        this.writeHeader(e), (this.size += 20), e.writeUint32(0), e.writeUint32(0), e.writeUint16(this.channel_count), e.writeUint16(this.samplesize), e.writeUint16(0), e.writeUint16(0), e.writeUint32(this.samplerate << 16), this.writeFooter(e);
    }),
    (l.stppSampleEntry.prototype.write = function (e) {
        this.writeHeader(e), (this.size += this.namespace.length + 1 + this.schema_location.length + 1 + this.auxiliary_mime_types.length + 1), e.writeCString(this.namespace), e.writeCString(this.schema_location), e.writeCString(this.auxiliary_mime_types), this.writeFooter(e);
    }),
    (l.SampleGroupEntry.prototype.write = function (e) {
        e.writeUint8Array(this.data);
    }),
    (l.sbgpBox.prototype.write = function (e) {
        (this.version = 1), (this.flags = 0), (this.size = 12 + 8 * this.entries.length), this.writeHeader(e), e.writeString(this.grouping_type, null, 4), e.writeUint32(this.grouping_type_parameter), e.writeUint32(this.entries.length);
        for (var t = 0; t < this.entries.length; t++) {
            var n = this.entries[t];
            e.writeInt32(n.sample_count), e.writeInt32(n.group_description_index);
        }
    }),
    (l.sgpdBox.prototype.write = function (e) {
        var t, n;
        for (t = 0, this.flags = 0, this.size = 12; t < this.entries.length; t++) (n = this.entries[t]), 1 === this.version && (0 === this.default_length && (this.size += 4), (this.size += n.data.length));
        for (this.writeHeader(e), e.writeString(this.grouping_type, null, 4), 1 === this.version && e.writeUint32(this.default_length), this.version >= 2 && e.writeUint32(this.default_sample_description_index), e.writeUint32(this.entries.length), t = 0; t < this.entries.length; t++) (n = this.entries[t]), 1 === this.version && 0 === this.default_length && e.writeUint32(n.description_length), n.write(e);
    }),
    (l.sidxBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 20 + 12 * this.references.length), this.writeHeader(e), e.writeUint32(this.reference_ID), e.writeUint32(this.timescale), e.writeUint32(this.earliest_presentation_time), e.writeUint32(this.first_offset), e.writeUint16(0), e.writeUint16(this.references.length);
        for (var t = 0; t < this.references.length; t++) {
            var n = this.references[t];
            e.writeUint32((n.reference_type << 31) | n.referenced_size), e.writeUint32(n.subsegment_duration), e.writeUint32((n.starts_with_SAP << 31) | (n.SAP_type << 28) | n.SAP_delta_time);
        }
    }),
    (l.smhdBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 1), (this.size = 4), this.writeHeader(e), e.writeUint16(this.balance), e.writeUint16(0);
    }),
    (l.stcoBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 4 + 4 * this.chunk_offsets.length), this.writeHeader(e), e.writeUint32(this.chunk_offsets.length), e.writeUint32Array(this.chunk_offsets);
    }),
    (l.stscBox.prototype.write = function (e) {
        var t;
        for (this.version = 0, this.flags = 0, this.size = 4 + 12 * this.first_chunk.length, this.writeHeader(e), e.writeUint32(this.first_chunk.length), t = 0; t < this.first_chunk.length; t++) e.writeUint32(this.first_chunk[t]), e.writeUint32(this.samples_per_chunk[t]), e.writeUint32(this.sample_description_index[t]);
    }),
    (l.stsdBox.prototype.write = function (e) {
        var t;
        for (this.version = 0, this.flags = 0, this.size = 0, this.writeHeader(e), e.writeUint32(this.entries.length), this.size += 4, t = 0; t < this.entries.length; t++) this.entries[t].write(e), (this.size += this.entries[t].size);
        n.debug('BoxWriter', 'Adjusting box ' + this.type + ' with new size ' + this.size), e.adjustUint32(this.sizePosition, this.size);
    }),
    (l.stshBox.prototype.write = function (e) {
        var t;
        for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.shadowed_sample_numbers.length, this.writeHeader(e), e.writeUint32(this.shadowed_sample_numbers.length), t = 0; t < this.shadowed_sample_numbers.length; t++) e.writeUint32(this.shadowed_sample_numbers[t]), e.writeUint32(this.sync_sample_numbers[t]);
    }),
    (l.stssBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 4 + 4 * this.sample_numbers.length), this.writeHeader(e), e.writeUint32(this.sample_numbers.length), e.writeUint32Array(this.sample_numbers);
    }),
    (l.stszBox.prototype.write = function (e) {
        var t,
            n = !0;
        if (((this.version = 0), (this.flags = 0), this.sample_sizes.length > 0))
            for (t = 0; t + 1 < this.sample_sizes.length; ) {
                if (this.sample_sizes[t + 1] !== this.sample_sizes[0]) {
                    n = !1;
                    break;
                }
                t++;
            }
        else n = !1;
        (this.size = 8), n || (this.size += 4 * this.sample_sizes.length), this.writeHeader(e), n ? e.writeUint32(this.sample_sizes[0]) : e.writeUint32(0), e.writeUint32(this.sample_sizes.length), n || e.writeUint32Array(this.sample_sizes);
    }),
    (l.sttsBox.prototype.write = function (e) {
        var t;
        for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(e), e.writeUint32(this.sample_counts.length), t = 0; t < this.sample_counts.length; t++) e.writeUint32(this.sample_counts[t]), e.writeUint32(this.sample_deltas[t]);
    }),
    (l.tfdtBox.prototype.write = function (e) {
        var t = 4294967295;
        (this.version = +(this.baseMediaDecodeTime > t)), (this.flags = 0), (this.size = 4), 1 === this.version && (this.size += 4), this.writeHeader(e), 1 === this.version ? e.writeUint64(this.baseMediaDecodeTime) : e.writeUint32(this.baseMediaDecodeTime);
    }),
    (l.tfhdBox.prototype.write = function (e) {
        (this.version = 0), (this.size = 4), this.flags & l.TFHD_FLAG_BASE_DATA_OFFSET && (this.size += 8), this.flags & l.TFHD_FLAG_SAMPLE_DESC && (this.size += 4), this.flags & l.TFHD_FLAG_SAMPLE_DUR && (this.size += 4), this.flags & l.TFHD_FLAG_SAMPLE_SIZE && (this.size += 4), this.flags & l.TFHD_FLAG_SAMPLE_FLAGS && (this.size += 4), this.writeHeader(e), e.writeUint32(this.track_id), this.flags & l.TFHD_FLAG_BASE_DATA_OFFSET && e.writeUint64(this.base_data_offset), this.flags & l.TFHD_FLAG_SAMPLE_DESC && e.writeUint32(this.default_sample_description_index), this.flags & l.TFHD_FLAG_SAMPLE_DUR && e.writeUint32(this.default_sample_duration), this.flags & l.TFHD_FLAG_SAMPLE_SIZE && e.writeUint32(this.default_sample_size), this.flags & l.TFHD_FLAG_SAMPLE_FLAGS && e.writeUint32(this.default_sample_flags);
    }),
    (l.tkhdBox.prototype.write = function (e) {
        (this.version = 0), (this.size = 80), this.writeHeader(e), e.writeUint32(this.creation_time), e.writeUint32(this.modification_time), e.writeUint32(this.track_id), e.writeUint32(0), e.writeUint32(this.duration), e.writeUint32(0), e.writeUint32(0), e.writeInt16(this.layer), e.writeInt16(this.alternate_group), e.writeInt16(this.volume << 8), e.writeUint16(0), e.writeInt32Array(this.matrix), e.writeUint32(this.width), e.writeUint32(this.height);
    }),
    (l.trexBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 20), this.writeHeader(e), e.writeUint32(this.track_id), e.writeUint32(this.default_sample_description_index), e.writeUint32(this.default_sample_duration), e.writeUint32(this.default_sample_size), e.writeUint32(this.default_sample_flags);
    }),
    (l.trunBox.prototype.write = function (e) {
        (this.version = 0), (this.size = 4), this.flags & l.TRUN_FLAGS_DATA_OFFSET && (this.size += 4), this.flags & l.TRUN_FLAGS_FIRST_FLAG && (this.size += 4), this.flags & l.TRUN_FLAGS_DURATION && (this.size += 4 * this.sample_duration.length), this.flags & l.TRUN_FLAGS_SIZE && (this.size += 4 * this.sample_size.length), this.flags & l.TRUN_FLAGS_FLAGS && (this.size += 4 * this.sample_flags.length), this.flags & l.TRUN_FLAGS_CTS_OFFSET && (this.size += 4 * this.sample_composition_time_offset.length), this.writeHeader(e), e.writeUint32(this.sample_count), this.flags & l.TRUN_FLAGS_DATA_OFFSET && ((this.data_offset_position = e.getPosition()), e.writeInt32(this.data_offset)), this.flags & l.TRUN_FLAGS_FIRST_FLAG && e.writeUint32(this.first_sample_flags);
        for (var t = 0; t < this.sample_count; t++) this.flags & l.TRUN_FLAGS_DURATION && e.writeUint32(this.sample_duration[t]), this.flags & l.TRUN_FLAGS_SIZE && e.writeUint32(this.sample_size[t]), this.flags & l.TRUN_FLAGS_FLAGS && e.writeUint32(this.sample_flags[t]), this.flags & l.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? e.writeUint32(this.sample_composition_time_offset[t]) : e.writeInt32(this.sample_composition_time_offset[t]));
    }),
    (l['url Box'].prototype.write = function (e) {
        (this.version = 0), this.location ? ((this.flags = 0), (this.size = this.location.length + 1)) : ((this.flags = 1), (this.size = 0)), this.writeHeader(e), this.location && e.writeCString(this.location);
    }),
    (l['urn Box'].prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = this.name.length + 1 + (this.location ? this.location.length + 1 : 0)), this.writeHeader(e), e.writeCString(this.name), this.location && e.writeCString(this.location);
    }),
    (l.vmhdBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 1), (this.size = 8), this.writeHeader(e), e.writeUint16(this.graphicsmode), e.writeUint16Array(this.opcolor);
    }),
    (l.cttsBox.prototype.unpack = function (e) {
        var t, n, r;
        for (t = 0, r = 0; t < this.sample_counts.length; t++) for (n = 0; n < this.sample_counts[t]; n++) (e[r].pts = e[r].dts + this.sample_offsets[t]), r++;
    }),
    (l.sttsBox.prototype.unpack = function (e) {
        var t, n, r;
        for (t = 0, r = 0; t < this.sample_counts.length; t++) for (n = 0; n < this.sample_counts[t]; n++) 0 === r ? (e[r].dts = 0) : (e[r].dts = e[r - 1].dts + this.sample_deltas[t]), r++;
    }),
    (l.stcoBox.prototype.unpack = function (e) {
        var t;
        for (t = 0; t < this.chunk_offsets.length; t++) e[t].offset = this.chunk_offsets[t];
    }),
    (l.stscBox.prototype.unpack = function (e) {
        var t, n, r, i, o;
        for (t = 0, i = 0, o = 0; t < this.first_chunk.length; t++)
            for (n = 0; n < (t + 1 < this.first_chunk.length ? this.first_chunk[t + 1] : 1 / 0); n++)
                for (o++, r = 0; r < this.samples_per_chunk[t]; r++) {
                    if (!e[i]) return;
                    (e[i].description_index = this.sample_description_index[t]), (e[i].chunk_index = o), i++;
                }
    }),
    (l.stszBox.prototype.unpack = function (e) {
        var t;
        for (t = 0; t < this.sample_sizes.length; t++) e[t].size = this.sample_sizes[t];
    }),
    (l.DIFF_BOXES_PROP_NAMES = ['boxes', 'entries', 'references', 'subsamples', 'items', 'item_infos', 'extents', 'associations', 'subsegments', 'ranges', 'seekLists', 'seekPoints', 'esd', 'levels']),
    (l.DIFF_PRIMITIVE_ARRAY_PROP_NAMES = ['compatible_brands', 'matrix', 'opcolor', 'sample_counts', 'sample_counts', 'sample_deltas', 'first_chunk', 'samples_per_chunk', 'sample_sizes', 'chunk_offsets', 'sample_offsets', 'sample_description_index', 'sample_duration']),
    (l.boxEqualFields = function (e, t) {
        var n;
        if (e && !t) return !1;
        for (n in e)
            if (!(l.DIFF_BOXES_PROP_NAMES.indexOf(n) > -1)) {
                if (e[n] instanceof l.Box || t[n] instanceof l.Box) continue;
                else {
                    if (void 0 === e[n] || void 0 === t[n] || 'function' == typeof e[n] || 'function' == typeof t[n] || (e.subBoxNames && e.subBoxNames.indexOf(n.slice(0, 4)) > -1) || (t.subBoxNames && t.subBoxNames.indexOf(n.slice(0, 4)) > -1) || 'data' === n || 'start' === n || 'size' === n || 'creation_time' === n || 'modification_time' === n) continue;
                    if (l.DIFF_PRIMITIVE_ARRAY_PROP_NAMES.indexOf(n) > -1) continue;
                    if (e[n] !== t[n]) return !1;
                }
            }
        return !0;
    }),
    (l.boxEqual = function (e, t) {
        if (!l.boxEqualFields(e, t)) return !1;
        for (var n = 0; n < l.DIFF_BOXES_PROP_NAMES.length; n++) {
            var r = l.DIFF_BOXES_PROP_NAMES[n];
            if (e[r] && t[r] && !l.boxEqual(e[r], t[r])) return !1;
        }
        return !0;
    });
var c = function () {};
(c.prototype.parseSample = function (e) {
    var t,
        n,
        i = new r(e.buffer);
    for (t = []; !i.isEos(); ) (n = l.parseOneBox(i, !1)).code === l.OK && 'vttc' === n.box.type && t.push(n.box);
    return t;
}),
    (c.prototype.getText = function (e, t, n) {
        function r(e, t, n) {
            return (n = n || '0'), (e += '').length >= t ? e : Array(t - e.length + 1).join(n) + e;
        }
        function i(e) {
            var t = Math.floor(e / 3600),
                n = Math.floor((e - 3600 * t) / 60),
                i = Math.floor(e - 3600 * t - 60 * n),
                o = Math.floor((e - 3600 * t - 60 * n - i) * 1000);
            return '' + r(t, 2) + ':' + r(n, 2) + ':' + r(i, 2) + '.' + r(o, 3);
        }
        for (var o = this.parseSample(n), a = '', s = 0; s < o.length; s++) {
            var l = o[s];
            (a += i(e) + ' --> ' + i(t) + '\r\n'), (a += l.payl.text);
        }
        return a;
    });
var u = function () {};
u.prototype.parseSample = function (e) {
    var t,
        n = {};
    n.resources = [];
    var i = new r(e.data.buffer);
    if (e.subsamples && 0 !== e.subsamples.length) {
        if (((n.documentString = i.readString(e.subsamples[0].size)), e.subsamples.length > 1)) for (t = 1; t < e.subsamples.length; t++) n.resources[t] = i.readUint8Array(e.subsamples[t].size);
    } else n.documentString = i.readString(e.data.length);
    return 'undefined' != typeof DOMParser && (n.document = new DOMParser().parseFromString(n.documentString, 'application/xml')), n;
};
var d = function () {};
(d.prototype.parseSample = function (e) {
    return new r(e.data.buffer).readString(e.data.length);
}),
    (d.prototype.parseConfig = function (e) {
        var t = new r(e.buffer);
        return t.readUint32(), t.readCString();
    }),
    (t.XMLSubtitlein4Parser = u),
    (t.Textin4Parser = d);
var f = function (e) {
    (this.stream = e || new a()), (this.boxes = []), (this.mdats = []), (this.moofs = []), (this.isProgressive = !1), (this.moovStartFound = !1), (this.onMoovStart = null), (this.moovStartSent = !1), (this.onReady = null), (this.readySent = !1), (this.onSegment = null), (this.onSamples = null), (this.onError = null), (this.sampleListBuilt = !1), (this.fragmentedTracks = []), (this.extractedTracks = []), (this.isFragmentationInitialized = !1), (this.sampleProcessingStarted = !1), (this.nextMoofNumber = 0), (this.itemListBuilt = !1), (this.onSidx = null), (this.sidxSent = !1);
};
(f.prototype.setSegmentOptions = function (e, t, n) {
    var r = this.getTrackById(e);
    if (r) {
        var i = {};
        this.fragmentedTracks.push(i), (i.id = e), (i.user = t), (i.trak = r), (r.nextSample = 0), (i.segmentStream = null), (i.nb_samples = 1000), (i.rapAlignement = !0), n && (n.nbSamples && (i.nb_samples = n.nbSamples), n.rapAlignement && (i.rapAlignement = n.rapAlignement));
    }
}),
    (f.prototype.unsetSegmentOptions = function (e) {
        for (var t = -1, n = 0; n < this.fragmentedTracks.length; n++) this.fragmentedTracks[n].id == e && (t = n);
        t > -1 && this.fragmentedTracks.splice(t, 1);
    }),
    (f.prototype.setExtractionOptions = function (e, t, n) {
        var r = this.getTrackById(e);
        if (r) {
            var i = {};
            this.extractedTracks.push(i), (i.id = e), (i.user = t), (i.trak = r), (r.nextSample = 0), (i.nb_samples = 1000), (i.samples = []), n && n.nbSamples && (i.nb_samples = n.nbSamples);
        }
    }),
    (f.prototype.unsetExtractionOptions = function (e) {
        for (var t = -1, n = 0; n < this.extractedTracks.length; n++) this.extractedTracks[n].id == e && (t = n);
        t > -1 && this.extractedTracks.splice(t, 1);
    }),
    (f.prototype.parse = function () {
        var e,
            t,
            r,
            i = !1;
        if (!this.restoreParsePosition || this.restoreParsePosition())
            for (;;) {
                if (this.hasIncompleteMdat && this.hasIncompleteMdat()) {
                    if (this.processIncompleteMdat()) continue;
                    return;
                }
                if ((this.saveParsePosition && this.saveParsePosition(), (e = l.parseOneBox(this.stream, i)).code === l.ERR_NOT_ENOUGH_DATA)) {
                    if (!this.processIncompleteBox) return;
                    if (this.processIncompleteBox(e)) continue;
                    return;
                }
                switch (((r = 'uuid' !== (t = e.box).type ? t.type : t.uuid), this.boxes.push(t), r)) {
                    case 'mdat':
                        this.mdats.push(t);
                        break;
                    case 'moof':
                        this.moofs.push(t);
                        break;
                    case 'moov':
                        (this.moovStartFound = !0), 0 === this.mdats.length && (this.isProgressive = !0);
                    default:
                        void 0 !== this[r] && n.warn('ISOFile', 'Duplicate Box of type: ' + r + ', overriding previous occurrence'), (this[r] = t);
                }
                this.updateUsedBytes && this.updateUsedBytes(t, e);
            }
    }),
    (f.prototype.checkBuffer = function (e) {
        if (null == e) throw 'Buffer must be defined and non empty';
        if (void 0 === e.fileStart) throw 'Buffer must have a fileStart property';
        return 0 === e.byteLength ? (n.warn('ISOFile', 'Ignoring empty buffer (fileStart: ' + e.fileStart + ')'), this.stream.logBufferLevel(), !1) : (n.info('ISOFile', 'Processing buffer (fileStart: ' + e.fileStart + ')'), (e.usedBytes = 0), this.stream.insertBuffer(e), this.stream.logBufferLevel(), !!this.stream.initialized() || (n.warn('ISOFile', 'Not ready to start parsing'), !1));
    }),
    (f.prototype.appendBuffer = function (e, t) {
        var r;
        if (this.checkBuffer(e)) return this.parse(), this.moovStartFound && !this.moovStartSent && ((this.moovStartSent = !0), this.onMoovStart && this.onMoovStart()), this.moov ? (this.sampleListBuilt || (this.buildSampleLists(), (this.sampleListBuilt = !0)), this.updateSampleLists(), this.onReady && !this.readySent && ((this.readySent = !0), this.onReady(this.getInfo())), this.processSamples(t), this.nextSeekPosition ? ((r = this.nextSeekPosition), (this.nextSeekPosition = void 0)) : (r = this.nextParsePosition), this.stream.getEndFilePositionAfter && (r = this.stream.getEndFilePositionAfter(r))) : (r = this.nextParsePosition ? this.nextParsePosition : 0), this.sidx && this.onSidx && !this.sidxSent && (this.onSidx(this.sidx), (this.sidxSent = !0)), this.meta && (this.flattenItemInfo && !this.itemListBuilt && (this.flattenItemInfo(), (this.itemListBuilt = !0)), this.processItems && this.processItems(this.onItem)), this.stream.cleanBuffers && (n.info('ISOFile', 'Done processing buffer (fileStart: ' + e.fileStart + ') - next buffer to fetch should have a fileStart position of ' + r), this.stream.logBufferLevel(), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0), n.info('ISOFile', 'Sample data size in memory: ' + this.getAllocatedSampleDataSize())), r;
    }),
    (f.prototype.getInfo = function () {
        var e,
            t,
            n,
            r,
            i,
            o,
            a = {},
            s = new Date('1904-01-01T00:00:00Z').getTime();
        if (this.moov)
            for (a.hasMoov = !0, a.duration = this.moov.mvhd.duration, a.timescale = this.moov.mvhd.timescale, a.isFragmented = null != this.moov.mvex, a.isFragmented && this.moov.mvex.mehd && (a.fragment_duration = this.moov.mvex.mehd.fragment_duration), a.isProgressive = this.isProgressive, a.hasIOD = null != this.moov.iods, a.brands = [], a.brands.push(this.ftyp.major_brand), a.brands = a.brands.concat(this.ftyp.compatible_brands), a.created = new Date(s + 1000 * this.moov.mvhd.creation_time), a.modified = new Date(s + 1000 * this.moov.mvhd.modification_time), a.tracks = [], a.audioTracks = [], a.videoTracks = [], a.subtitleTracks = [], a.metadataTracks = [], a.hintTracks = [], a.otherTracks = [], e = 0; e < this.moov.traks.length; e++) {
                if (((o = (n = this.moov.traks[e]).mdia.minf.stbl.stsd.entries[0]), (r = {}), a.tracks.push(r), (r.id = n.tkhd.track_id), (r.name = n.mdia.hdlr.name), (r.references = []), n.tref)) for (t = 0; t < n.tref.boxes.length; t++) (i = {}), r.references.push(i), (i.type = n.tref.boxes[t].type), (i.track_ids = n.tref.boxes[t].track_ids);
                n.edts && (r.edits = n.edts.elst.entries),
                    (r.created = new Date(s + 1000 * n.tkhd.creation_time)),
                    (r.modified = new Date(s + 1000 * n.tkhd.modification_time)),
                    (r.movie_duration = n.tkhd.duration),
                    (r.movie_timescale = a.timescale),
                    (r.layer = n.tkhd.layer),
                    (r.alternate_group = n.tkhd.alternate_group),
                    (r.volume = n.tkhd.volume),
                    (r.matrix = n.tkhd.matrix),
                    (r.track_width = n.tkhd.width / 65536),
                    (r.track_height = n.tkhd.height / 65536),
                    (r.timescale = n.mdia.mdhd.timescale),
                    (r.cts_shift = n.mdia.minf.stbl.cslg),
                    (r.duration = n.mdia.mdhd.duration),
                    (r.samples_duration = n.samples_duration),
                    (r.codec = o.getCodec()),
                    (r.kind =
                        n.udta && n.udta.kinds.length
                            ? n.udta.kinds[0]
                            : {
                                  schemeURI: '',
                                  value: ''
                              }),
                    (r.language = n.mdia.elng ? n.mdia.elng.extended_language : n.mdia.mdhd.languageString),
                    (r.nb_samples = n.samples.length),
                    (r.size = n.samples_size),
                    (r.bitrate = (8 * r.size * r.timescale) / r.samples_duration),
                    o.isAudio() ? ((r.type = 'audio'), a.audioTracks.push(r), (r.audio = {}), (r.audio.sample_rate = o.getSampleRate()), (r.audio.channel_count = o.getChannelCount()), (r.audio.sample_size = o.getSampleSize())) : o.isVideo() ? ((r.type = 'video'), a.videoTracks.push(r), (r.video = {}), (r.video.width = o.getWidth()), (r.video.height = o.getHeight())) : o.isSubtitle() ? ((r.type = 'subtitles'), a.subtitleTracks.push(r)) : o.isHint() ? ((r.type = 'metadata'), a.hintTracks.push(r)) : o.isMetadata() ? ((r.type = 'metadata'), a.metadataTracks.push(r)) : ((r.type = 'metadata'), a.otherTracks.push(r));
            }
        else a.hasMoov = !1;
        if (((a.mime = ''), a.hasMoov && a.tracks)) {
            for (a.videoTracks && a.videoTracks.length > 0 ? (a.mime += 'video/mp4; codecs="') : a.audioTracks && a.audioTracks.length > 0 ? (a.mime += 'audio/mp4; codecs="') : (a.mime += 'application/mp4; codecs="'), e = 0; e < a.tracks.length; e++) 0 !== e && (a.mime += ','), (a.mime += a.tracks[e].codec);
            (a.mime += '"; profiles="'), (a.mime += this.ftyp.compatible_brands.join()), (a.mime += '"');
        }
        return a;
    }),
    (f.prototype.processSamples = function (e) {
        if (this.sampleProcessingStarted) {
            if (this.isFragmentationInitialized && null !== this.onSegment)
                for (t = 0; t < this.fragmentedTracks.length; t++) {
                    var t,
                        r,
                        i = this.fragmentedTracks[t];
                    for (r = i.trak; r.nextSample < r.samples.length && this.sampleProcessingStarted; ) {
                        n.debug('ISOFile', 'Creating media fragment on track #' + i.id + ' for sample ' + r.nextSample);
                        var o = this.createFragment(i.id, r.nextSample, i.segmentStream);
                        if (o) (i.segmentStream = o), r.nextSample++;
                        else break;
                        if ((r.nextSample % i.nb_samples == 0 || e || r.nextSample >= r.samples.length) && (n.info('ISOFile', 'Sending fragmented data on track #' + i.id + ' for samples [' + Math.max(0, r.nextSample - i.nb_samples) + ',' + (r.nextSample - 1) + ']'), n.info('ISOFile', 'Sample data size in memory: ' + this.getAllocatedSampleDataSize()), this.onSegment && this.onSegment(i.id, i.user, i.segmentStream.buffer, r.nextSample, e || r.nextSample >= r.samples.length), (i.segmentStream = null), i !== this.fragmentedTracks[t])) break;
                    }
                }
            if (null !== this.onSamples)
                for (t = 0; t < this.extractedTracks.length; t++) {
                    var a = this.extractedTracks[t];
                    for (r = a.trak; r.nextSample < r.samples.length && this.sampleProcessingStarted; ) {
                        n.debug('ISOFile', 'Exporting on track #' + a.id + ' sample #' + r.nextSample);
                        var s = this.getSample(r, r.nextSample);
                        if (s) r.nextSample++, a.samples.push(s);
                        else break;
                        if ((r.nextSample % a.nb_samples == 0 || r.nextSample >= r.samples.length) && (n.debug('ISOFile', 'Sending samples on track #' + a.id + ' for sample ' + r.nextSample), this.onSamples && this.onSamples(a.id, a.user, a.samples), (a.samples = []), a !== this.extractedTracks[t])) break;
                    }
                }
        }
    }),
    (f.prototype.getBox = function (e) {
        var t = this.getBoxes(e, !0);
        return t.length ? t[0] : null;
    }),
    (f.prototype.getBoxes = function (e, t) {
        var n = [];
        return f._sweep.call(this, e, n, t), n;
    }),
    (f._sweep = function (e, t, n) {
        for (var r in (this.type && this.type == e && t.push(this), this.boxes)) {
            if (t.length && n) return;
            f._sweep.call(this.boxes[r], e, t, n);
        }
    }),
    (f.prototype.getTrackSamplesInfo = function (e) {
        var t = this.getTrackById(e);
        return t ? t.samples : void 0;
    }),
    (f.prototype.getTrackSample = function (e, t) {
        var n = this.getTrackById(e);
        return this.getSample(n, t);
    }),
    (f.prototype.releaseUsedSamples = function (e, t) {
        var r = 0,
            i = this.getTrackById(e);
        i.lastValidSample || (i.lastValidSample = 0);
        for (var o = i.lastValidSample; o < t; o++) r += this.releaseSample(i, o);
        n.info('ISOFile', 'Track #' + e + ' released samples up to ' + t + ' (released size: ' + r + ', remaining: ' + this.samplesDataSize + ')'), (i.lastValidSample = t);
    }),
    (f.prototype.start = function () {
        (this.sampleProcessingStarted = !0), this.processSamples(!1);
    }),
    (f.prototype.stop = function () {
        this.sampleProcessingStarted = !1;
    }),
    (f.prototype.flush = function () {
        n.info('ISOFile', 'Flushing remaining samples'), this.updateSampleLists(), this.processSamples(!0), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0);
    }),
    (f.prototype.seekTrack = function (e, t, r) {
        var i,
            o,
            a,
            s = 1 / 0,
            l = 0,
            c = 0;
        if (0 === r.samples.length)
            return (
                n.info('ISOFile', 'No sample in track, cannot seek! Using time ' + n.getDurationString(0, 1) + ' and offset: 0'),
                {
                    offset: 0,
                    time: 0
                }
            );
        for (i = 0; i < r.samples.length; i++) {
            if (((o = r.samples[i]), 0 === i)) (c = 0), (a = o.timescale);
            else if (o.cts > e * o.timescale) {
                c = i - 1;
                break;
            }
            t && o.is_sync && (l = i);
        }
        for (t && (c = l), e = r.samples[c].cts, r.nextSample = c; r.samples[c].alreadyRead === r.samples[c].size && r.samples[c + 1]; ) c++;
        return (
            (s = r.samples[c].offset + r.samples[c].alreadyRead),
            n.info('ISOFile', 'Seeking to ' + (t ? 'RAP' : '') + ' sample #' + r.nextSample + ' on track ' + r.tkhd.track_id + ', time ' + n.getDurationString(e, a) + ' and offset: ' + s),
            {
                offset: s,
                time: e / a
            }
        );
    }),
    (f.prototype.seek = function (e, t) {
        var r,
            i,
            o,
            a = this.moov,
            s = {
                offset: 1 / 0,
                time: 1 / 0
            };
        if (this.moov) {
            for (o = 0; o < a.traks.length; o++) (r = a.traks[o]), (i = this.seekTrack(e, t, r)).offset < s.offset && (s.offset = i.offset), i.time < s.time && (s.time = i.time);
            return (
                n.info('ISOFile', 'Seeking at time ' + n.getDurationString(s.time, 1) + ' needs a buffer with a fileStart position of ' + s.offset),
                s.offset === 1 / 0
                    ? (s = {
                          offset: this.nextParsePosition,
                          time: 0
                      })
                    : (s.offset = this.stream.getEndFilePositionAfter(s.offset)),
                n.info('ISOFile', 'Adjusted seek position (after checking data already in buffer): ' + s.offset),
                s
            );
        }
        throw 'Cannot seek: moov not received!';
    }),
    (f.prototype.equal = function (e) {
        for (var t = 0; t < this.boxes.length && t < e.boxes.length; ) {
            var n = this.boxes[t],
                r = e.boxes[t];
            if (!l.boxEqual(n, r)) return !1;
            t++;
        }
        return !0;
    }),
    (t.ISOFile = f),
    (f.prototype.lastBoxStartPosition = 0),
    (f.prototype.parsingMdat = null),
    (f.prototype.nextParsePosition = 0),
    (f.prototype.discardMdatData = !1),
    (f.prototype.processIncompleteBox = function (e) {
        var t;
        return 'mdat' === e.type ? (((t = new l[e.type + 'Box'](e.size)), (this.parsingMdat = t), this.boxes.push(t), this.mdats.push(t), (t.start = e.start), (t.hdr_size = e.hdr_size), this.stream.addUsedBytes(t.hdr_size), (this.lastBoxStartPosition = t.start + t.size), this.stream.seek(t.start + t.size, !1, this.discardMdatData)) ? ((this.parsingMdat = null), !0) : (this.moovStartFound ? (this.nextParsePosition = this.stream.findEndContiguousBuf()) : (this.nextParsePosition = t.start + t.size), !1)) : ('moov' === e.type && ((this.moovStartFound = !0), 0 === this.mdats.length && (this.isProgressive = !0)), this.stream.mergeNextBuffer && this.stream.mergeNextBuffer()) ? ((this.nextParsePosition = this.stream.getEndPosition()), !0) : (e.type ? (this.moovStartFound ? (this.nextParsePosition = this.stream.getEndPosition()) : (this.nextParsePosition = this.stream.getPosition() + e.size)) : (this.nextParsePosition = this.stream.getEndPosition()), !1);
    }),
    (f.prototype.hasIncompleteMdat = function () {
        return null !== this.parsingMdat;
    }),
    (f.prototype.processIncompleteMdat = function () {
        var e;
        return ((e = this.parsingMdat), this.stream.seek(e.start + e.size, !1, this.discardMdatData)) ? (n.debug('ISOFile', "Found 'mdat' end in buffered data"), (this.parsingMdat = null), !0) : ((this.nextParsePosition = this.stream.findEndContiguousBuf()), !1);
    }),
    (f.prototype.restoreParsePosition = function () {
        return this.stream.seek(this.lastBoxStartPosition, !0, this.discardMdatData);
    }),
    (f.prototype.saveParsePosition = function () {
        this.lastBoxStartPosition = this.stream.getPosition();
    }),
    (f.prototype.updateUsedBytes = function (e, t) {
        this.stream.addUsedBytes && ('mdat' === e.type ? (this.stream.addUsedBytes(e.hdr_size), this.discardMdatData && this.stream.addUsedBytes(e.size - e.hdr_size)) : this.stream.addUsedBytes(e.size));
    }),
    (f.prototype.add = l.Box.prototype.add),
    (f.prototype.addBox = l.Box.prototype.addBox),
    (f.prototype.init = function (e) {
        var t = e || {};
        this.add('ftyp')
            .set('major_brand', (t.brands && t.brands[0]) || 'iso4')
            .set('minor_version', 0)
            .set('compatible_brands', t.brands || ['iso4']);
        var n = this.add('moov');
        return (
            n
                .add('mvhd')
                .set('timescale', t.timescale || 600)
                .set('rate', t.rate || 65536)
                .set('creation_time', 0)
                .set('modification_time', 0)
                .set('duration', t.duration || 0)
                .set('volume', 256 * !t.width)
                .set('matrix', [65536, 0, 0, 0, 65536, 0, 0, 0, 1073741824])
                .set('next_track_id', 1),
            n.add('mvex'),
            this
        );
    }),
    (f.prototype.addTrack = function (e) {
        this.moov || this.init(e);
        var t = e || {};
        (t.width = t.width || 320), (t.height = t.height || 320), (t.id = t.id || this.moov.mvhd.next_track_id), (t.type = t.type || 'avc1');
        var n = this.moov.add('trak');
        (this.moov.mvhd.next_track_id = t.id + 1),
            n
                .add('tkhd')
                .set('flags', l.TKHD_FLAG_ENABLED | l.TKHD_FLAG_IN_MOVIE | l.TKHD_FLAG_IN_PREVIEW)
                .set('creation_time', 0)
                .set('modification_time', 0)
                .set('track_id', t.id)
                .set('duration', t.duration || 0)
                .set('layer', t.layer || 0)
                .set('alternate_group', 0)
                .set('volume', 1)
                .set('matrix', [0, 0, 0, 0, 0, 0, 0, 0, 0])
                .set('width', t.width << 16)
                .set('height', t.height << 16);
        var i = n.add('mdia');
        i
            .add('mdhd')
            .set('creation_time', 0)
            .set('modification_time', 0)
            .set('timescale', t.timescale || 1)
            .set('duration', t.media_duration || 0)
            .set('language', t.language || 'und'),
            i
                .add('hdlr')
                .set('handler', t.hdlr || 'vide')
                .set('name', t.name || 'Track created with MP4Box.js'),
            i.add('elng').set('extended_language', t.language || 'fr-FR');
        var o = i.add('minf');
        if (void 0 !== l[t.type + 'SampleEntry']) {
            var a = new l[t.type + 'SampleEntry']();
            a.data_reference_index = 1;
            var s = '';
            for (var c in l.sampleEntryCodes)
                for (var u = l.sampleEntryCodes[c], d = 0; d < u.length; d++)
                    if (u.indexOf(t.type) > -1) {
                        s = c;
                        break;
                    }
            switch (s) {
                case 'Visual':
                    if (
                        (o.add('vmhd').set('graphicsmode', 0).set('opcolor', [0, 0, 0]),
                        a
                            .set('width', t.width)
                            .set('height', t.height)
                            .set('horizresolution', 4718592)
                            .set('vertresolution', 4718592)
                            .set('frame_count', 1)
                            .set('compressorname', t.type + ' Compressor')
                            .set('depth', 24),
                        t.avcDecoderConfigRecord)
                    ) {
                        var f = new l.avcCBox(),
                            p = new r(t.avcDecoderConfigRecord);
                        f.parse(p), a.addBox(f);
                    }
                    break;
                case 'Audio':
                    o.add('smhd').set('balance', t.balance || 0),
                        a
                            .set('channel_count', t.channel_count || 2)
                            .set('samplesize', t.samplesize || 16)
                            .set('samplerate', t.samplerate || 65536);
                    break;
                case 'Hint':
                    o.add('hmhd');
                    break;
                case 'Subtitle':
                    o.add('sthd'),
                        'stpp' === t.type &&
                            a
                                .set('namespace', t.namespace || 'nonamespace')
                                .set('schema_location', t.schema_location || '')
                                .set('auxiliary_mime_types', t.auxiliary_mime_types || '');
                    break;
                default:
                    o.add('nmhd');
            }
            t.description && a.addBox(t.description),
                t.description_boxes &&
                    t.description_boxes.forEach(function (e) {
                        a.addBox(e);
                    }),
                o.add('dinf').add('dref').addEntry(new l['url Box']().set('flags', 1));
            var _ = o.add('stbl');
            return (
                _.add('stsd').addEntry(a),
                _.add('stts').set('sample_counts', []).set('sample_deltas', []),
                _.add('stsc').set('first_chunk', []).set('samples_per_chunk', []).set('sample_description_index', []),
                _.add('stco').set('chunk_offsets', []),
                _.add('stsz').set('sample_sizes', []),
                this.moov.mvex
                    .add('trex')
                    .set('track_id', t.id)
                    .set('default_sample_description_index', t.default_sample_description_index || 1)
                    .set('default_sample_duration', t.default_sample_duration || 0)
                    .set('default_sample_size', t.default_sample_size || 0)
                    .set('default_sample_flags', t.default_sample_flags || 0),
                this.buildTrakSampleLists(n),
                t.id
            );
        }
    }),
    (l.Box.prototype.computeSize = function (e) {
        var t = e || new i();
        (t.endianness = i.BIG_ENDIAN), this.write(t);
    }),
    (f.prototype.addSample = function (e, t, n) {
        var r = n || {},
            i = {},
            o = this.getTrackById(e);
        if (null !== o) {
            (i.number = o.samples.length), (i.track_id = o.tkhd.track_id), (i.timescale = o.mdia.mdhd.timescale), (i.description_index = r.sample_description_index ? r.sample_description_index - 1 : 0), (i.description = o.mdia.minf.stbl.stsd.entries[i.description_index]), (i.data = t), (i.size = t.byteLength), (i.alreadyRead = i.size), (i.duration = r.duration || 1), (i.cts = r.cts || 0), (i.dts = r.dts || 0), (i.is_sync = r.is_sync || !1), (i.is_leading = r.is_leading || 0), (i.depends_on = r.depends_on || 0), (i.is_depended_on = r.is_depended_on || 0), (i.has_redundancy = r.has_redundancy || 0), (i.degradation_priority = r.degradation_priority || 0), (i.offset = 0), (i.subsamples = r.subsamples), o.samples.push(i), (o.samples_size += i.size), (o.samples_duration += i.duration), o.first_dts || (o.first_dts = r.dts), this.processSamples();
            var a = this.createSingleSampleMoof(i);
            return this.addBox(a), a.computeSize(), (a.trafs[0].truns[0].data_offset = a.size + 8), (this.add('mdat').data = new Uint8Array(t)), i;
        }
    }),
    (f.prototype.createSingleSampleMoof = function (e) {
        var t = 0;
        t = e.is_sync ? 33554432 : 65536;
        var n = new l.moofBox();
        n.add('mfhd').set('sequence_number', this.nextMoofNumber), this.nextMoofNumber++;
        var r = n.add('traf'),
            i = this.getTrackById(e.track_id);
        return (
            r.add('tfhd').set('track_id', e.track_id).set('flags', l.TFHD_FLAG_DEFAULT_BASE_IS_MOOF),
            r.add('tfdt').set('baseMediaDecodeTime', e.dts - (i.first_dts || 0)),
            r
                .add('trun')
                .set('flags', l.TRUN_FLAGS_DATA_OFFSET | l.TRUN_FLAGS_DURATION | l.TRUN_FLAGS_SIZE | l.TRUN_FLAGS_FLAGS | l.TRUN_FLAGS_CTS_OFFSET)
                .set('data_offset', 0)
                .set('first_sample_flags', 0)
                .set('sample_count', 1)
                .set('sample_duration', [e.duration])
                .set('sample_size', [e.size])
                .set('sample_flags', [t])
                .set('sample_composition_time_offset', [e.cts - e.dts]),
            n
        );
    }),
    (f.prototype.lastMoofIndex = 0),
    (f.prototype.samplesDataSize = 0),
    (f.prototype.resetTables = function () {
        for (e = 0, this.initial_duration = this.moov.mvhd.duration, this.moov.mvhd.duration = 0; e < this.moov.traks.length; e++) {
            ((t = this.moov.traks[e]).tkhd.duration = 0), (t.mdia.mdhd.duration = 0), ((t.mdia.minf.stbl.stco || t.mdia.minf.stbl.co64).chunk_offsets = []), ((n = t.mdia.minf.stbl.stsc).first_chunk = []), (n.samples_per_chunk = []), (n.sample_description_index = []), ((t.mdia.minf.stbl.stsz || t.mdia.minf.stbl.stz2).sample_sizes = []), ((r = t.mdia.minf.stbl.stts).sample_counts = []), (r.sample_deltas = []), (i = t.mdia.minf.stbl.ctts) && ((i.sample_counts = []), (i.sample_offsets = [])), (o = t.mdia.minf.stbl.stss);
            var e,
                t,
                n,
                r,
                i,
                o,
                a = t.mdia.minf.stbl.boxes.indexOf(o);
            -1 != a && (t.mdia.minf.stbl.boxes[a] = null);
        }
    }),
    (f.initSampleGroups = function (e, t, n, r, i) {
        var o, a, s, l;
        function c(e, t, n) {
            (this.grouping_type = e), (this.grouping_type_parameter = t), (this.sbgp = n), (this.last_sample_in_run = -1), (this.entry_index = -1);
        }
        for (t && (t.sample_groups_info = []), e.sample_groups_info || (e.sample_groups_info = []), a = 0; a < n.length; a++) {
            for (l = n[a].grouping_type + '/' + n[a].grouping_type_parameter, s = new c(n[a].grouping_type, n[a].grouping_type_parameter, n[a]), t && (t.sample_groups_info[l] = s), e.sample_groups_info[l] || (e.sample_groups_info[l] = s), o = 0; o < r.length; o++) r[o].grouping_type === n[a].grouping_type && ((s.description = r[o]), (s.description.used = !0));
            if (i) for (o = 0; o < i.length; o++) i[o].grouping_type === n[a].grouping_type && ((s.fragment_description = i[o]), (s.fragment_description.used = !0), (s.is_fragment = !0));
        }
        if (t) {
            if (i) for (a = 0; a < i.length; a++) i[a].used || !(i[a].version >= 2) || ((l = i[a].grouping_type + '/0'), ((s = new c(i[a].grouping_type, 0)).is_fragment = !0), t.sample_groups_info[l] || (t.sample_groups_info[l] = s));
        } else for (a = 0; a < r.length; a++) r[a].used || !(r[a].version >= 2) || ((l = r[a].grouping_type + '/0'), (s = new c(r[a].grouping_type, 0)), e.sample_groups_info[l] || (e.sample_groups_info[l] = s));
    }),
    (f.setSampleGroupProperties = function (e, t, n, r) {
        var i, o, a;
        for (i in ((t.sample_groups = []), r)) (t.sample_groups[i] = {}), (t.sample_groups[i].grouping_type = r[i].grouping_type), (t.sample_groups[i].grouping_type_parameter = r[i].grouping_type_parameter), n >= r[i].last_sample_in_run && (r[i].last_sample_in_run < 0 && (r[i].last_sample_in_run = 0), r[i].entry_index++, r[i].entry_index <= r[i].sbgp.entries.length - 1 && (r[i].last_sample_in_run += r[i].sbgp.entries[r[i].entry_index].sample_count)), r[i].entry_index <= r[i].sbgp.entries.length - 1 ? (t.sample_groups[i].group_description_index = r[i].sbgp.entries[r[i].entry_index].group_description_index) : (t.sample_groups[i].group_description_index = -1), 0 !== t.sample_groups[i].group_description_index && ((a = r[i].fragment_description ? r[i].fragment_description : r[i].description), t.sample_groups[i].group_description_index > 0 ? ((o = t.sample_groups[i].group_description_index > 65535 ? (t.sample_groups[i].group_description_index >> 16) - 1 : t.sample_groups[i].group_description_index - 1), a && o >= 0 && (t.sample_groups[i].description = a.entries[o])) : a && a.version >= 2 && a.default_group_description_index > 0 && (t.sample_groups[i].description = a.entries[a.default_group_description_index - 1]));
    }),
    (f.process_sdtp = function (e, t, n) {
        t && (e ? ((t.is_leading = e.is_leading[n]), (t.depends_on = e.sample_depends_on[n]), (t.is_depended_on = e.sample_is_depended_on[n]), (t.has_redundancy = e.sample_has_redundancy[n])) : ((t.is_leading = 0), (t.depends_on = 0), (t.is_depended_on = 0), (t.has_redundancy = 0)));
    }),
    (f.prototype.buildSampleLists = function () {
        var e, t;
        for (e = 0; e < this.moov.traks.length; e++) (t = this.moov.traks[e]), this.buildTrakSampleLists(t);
    }),
    (f.prototype.buildTrakSampleLists = function (e) {
        if (((e.samples = []), (e.samples_duration = 0), (e.samples_size = 0), (n = e.mdia.minf.stbl.stco || e.mdia.minf.stbl.co64), (r = e.mdia.minf.stbl.stsc), (i = e.mdia.minf.stbl.stsz || e.mdia.minf.stbl.stz2), (o = e.mdia.minf.stbl.stts), (a = e.mdia.minf.stbl.ctts), (s = e.mdia.minf.stbl.stss), (l = e.mdia.minf.stbl.stsd), (c = e.mdia.minf.stbl.subs), (p = e.mdia.minf.stbl.stdp), (u = e.mdia.minf.stbl.sbgps), (d = e.mdia.minf.stbl.sgpds), (v = -1), (b = -1), (y = -1), (O = -1), (S = 0), (I = 0), (T = 0), f.initSampleGroups(e, null, u, d), void 0 !== i)) {
            for (t = 0; t < i.sample_sizes.length; t++) {
                var t,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    l,
                    c,
                    u,
                    d,
                    p,
                    _,
                    h,
                    m,
                    g,
                    E,
                    v,
                    b,
                    y,
                    O,
                    S,
                    I,
                    T,
                    N = {};
                (N.number = t), (N.track_id = e.tkhd.track_id), (N.timescale = e.mdia.mdhd.timescale), (N.alreadyRead = 0), (e.samples[t] = N), (N.size = i.sample_sizes[t]), (e.samples_size += N.size), 0 === t ? ((h = 1), (_ = 0), (N.chunk_index = h), (N.chunk_run_index = _), (E = r.samples_per_chunk[_]), (g = 0), (m = _ + 1 < r.first_chunk.length ? r.first_chunk[_ + 1] - 1 : 1 / 0)) : t < E ? ((N.chunk_index = h), (N.chunk_run_index = _)) : (h++, (N.chunk_index = h), (g = 0), h <= m || (m = ++_ + 1 < r.first_chunk.length ? r.first_chunk[_ + 1] - 1 : 1 / 0), (N.chunk_run_index = _), (E += r.samples_per_chunk[_])), (N.description_index = r.sample_description_index[N.chunk_run_index] - 1), (N.description = l.entries[N.description_index]), (N.offset = n.chunk_offsets[N.chunk_index - 1] + g), (g += N.size), t > v && (b++, v < 0 && (v = 0), (v += o.sample_counts[b])), t > 0 ? ((e.samples[t - 1].duration = o.sample_deltas[b]), (e.samples_duration += e.samples[t - 1].duration), (N.dts = e.samples[t - 1].dts + e.samples[t - 1].duration)) : (N.dts = 0), a ? (t >= y && (O++, y < 0 && (y = 0), (y += a.sample_counts[O])), (N.cts = e.samples[t].dts + a.sample_offsets[O])) : (N.cts = N.dts), s ? (t == s.sample_numbers[S] - 1 ? ((N.is_sync = !0), S++) : ((N.is_sync = !1), (N.degradation_priority = 0)), c && c.entries[I].sample_delta + T == t + 1 && ((N.subsamples = c.entries[I].subsamples), (T += c.entries[I].sample_delta), I++)) : (N.is_sync = !0), f.process_sdtp(e.mdia.minf.stbl.sdtp, N, N.number), p ? (N.degradation_priority = p.priority[t]) : (N.degradation_priority = 0), c && c.entries[I].sample_delta + T == t && ((N.subsamples = c.entries[I].subsamples), (T += c.entries[I].sample_delta)), (u.length > 0 || d.length > 0) && f.setSampleGroupProperties(e, N, t, e.sample_groups_info);
            }
            t > 0 && ((e.samples[t - 1].duration = Math.max(e.mdia.mdhd.duration - e.samples[t - 1].dts, 0)), (e.samples_duration += e.samples[t - 1].duration));
        }
    }),
    (f.prototype.updateSampleLists = function () {
        if (void 0 !== this.moov) {
            for (; this.lastMoofIndex < this.moofs.length; )
                if (((c = this.moofs[this.lastMoofIndex]), this.lastMoofIndex++, 'moof' == c.type))
                    for (e = 0, u = c; e < u.trafs.length; e++) {
                        for (d = u.trafs[e], p = this.getTrackById(d.tfhd.track_id), _ = this.getTrexById(d.tfhd.track_id), r = d.tfhd.flags & l.TFHD_FLAG_SAMPLE_DESC ? d.tfhd.default_sample_description_index : _ ? _.default_sample_description_index : 1, i = d.tfhd.flags & l.TFHD_FLAG_SAMPLE_DUR ? d.tfhd.default_sample_duration : _ ? _.default_sample_duration : 0, o = d.tfhd.flags & l.TFHD_FLAG_SAMPLE_SIZE ? d.tfhd.default_sample_size : _ ? _.default_sample_size : 0, a = d.tfhd.flags & l.TFHD_FLAG_SAMPLE_FLAGS ? d.tfhd.default_sample_flags : _ ? _.default_sample_flags : 0, d.sample_number = 0, d.sbgps.length > 0 && f.initSampleGroups(p, d, d.sbgps, p.mdia.minf.stbl.sgpds, d.sgpds), t = 0; t < d.truns.length; t++) {
                            var e,
                                t,
                                n,
                                r,
                                i,
                                o,
                                a,
                                s,
                                c,
                                u,
                                d,
                                p,
                                _,
                                h,
                                m,
                                g = d.truns[t];
                            for (n = 0; n < g.sample_count; n++) {
                                ((h = {}).moof_number = this.lastMoofIndex), (h.number_in_traf = d.sample_number), d.sample_number++, (h.number = p.samples.length), (d.first_sample_index = p.samples.length), p.samples.push(h), (h.track_id = p.tkhd.track_id), (h.timescale = p.mdia.mdhd.timescale), (h.description_index = r - 1), (h.description = p.mdia.minf.stbl.stsd.entries[h.description_index]), (h.size = o), g.flags & l.TRUN_FLAGS_SIZE && (h.size = g.sample_size[n]), (p.samples_size += h.size), (h.duration = i), g.flags & l.TRUN_FLAGS_DURATION && (h.duration = g.sample_duration[n]), (p.samples_duration += h.duration), p.first_traf_merged || n > 0 ? (h.dts = p.samples[p.samples.length - 2].dts + p.samples[p.samples.length - 2].duration) : (d.tfdt ? (h.dts = d.tfdt.baseMediaDecodeTime) : (h.dts = 0), (p.first_traf_merged = !0)), (h.cts = h.dts), g.flags & l.TRUN_FLAGS_CTS_OFFSET && (h.cts = h.dts + g.sample_composition_time_offset[n]), (m = a), g.flags & l.TRUN_FLAGS_FLAGS ? (m = g.sample_flags[n]) : 0 === n && g.flags & l.TRUN_FLAGS_FIRST_FLAG && (m = g.first_sample_flags), (h.is_sync = !((m >> 16) & 1)), (h.is_leading = (m >> 26) & 3), (h.depends_on = (m >> 24) & 3), (h.is_depended_on = (m >> 22) & 3), (h.has_redundancy = (m >> 20) & 3), (h.degradation_priority = 65535 & m);
                                var E = !!(d.tfhd.flags & l.TFHD_FLAG_BASE_DATA_OFFSET),
                                    v = !!(d.tfhd.flags & l.TFHD_FLAG_DEFAULT_BASE_IS_MOOF),
                                    b = !!(g.flags & l.TRUN_FLAGS_DATA_OFFSET),
                                    y = 0;
                                (y = E ? d.tfhd.base_data_offset : v ? u.start : 0 === t ? u.start : s), 0 === t && 0 === n ? (b ? (h.offset = y + g.data_offset) : (h.offset = y)) : (h.offset = s), (s = h.offset + h.size), (d.sbgps.length > 0 || d.sgpds.length > 0 || p.mdia.minf.stbl.sbgps.length > 0 || p.mdia.minf.stbl.sgpds.length > 0) && f.setSampleGroupProperties(p, h, h.number_in_traf, d.sample_groups_info);
                            }
                        }
                        if (d.subs) {
                            p.has_fragment_subsamples = !0;
                            var O = d.first_sample_index;
                            for (t = 0; t < d.subs.entries.length; t++) (O += d.subs.entries[t].sample_delta), ((h = p.samples[O - 1]).subsamples = d.subs.entries[t].subsamples);
                        }
                    }
        }
    }),
    (f.prototype.getSample = function (e, t) {
        var r,
            o = e.samples[t];
        if (!this.moov) return null;
        if (o.data) {
            if (o.alreadyRead == o.size) return o;
        } else (o.data = new Uint8Array(o.size)), (o.alreadyRead = 0), (this.samplesDataSize += o.size), n.debug('ISOFile', 'Allocating sample #' + t + ' on track #' + e.tkhd.track_id + ' of size ' + o.size + ' (total: ' + this.samplesDataSize + ')');
        for (;;) {
            var a = this.stream.findPosition(!0, o.offset + o.alreadyRead, !1);
            if (!(a > -1)) return null;
            var s = (r = this.stream.buffers[a]).byteLength - (o.offset + o.alreadyRead - r.fileStart);
            if (o.size - o.alreadyRead <= s) return n.debug('ISOFile', 'Getting sample #' + t + ' data (alreadyRead: ' + o.alreadyRead + ' offset: ' + (o.offset + o.alreadyRead - r.fileStart) + ' read size: ' + (o.size - o.alreadyRead) + ' full size: ' + o.size + ')'), i.memcpy(o.data.buffer, o.alreadyRead, r, o.offset + o.alreadyRead - r.fileStart, o.size - o.alreadyRead), (r.usedBytes += o.size - o.alreadyRead), this.stream.logBufferLevel(), (o.alreadyRead = o.size), o;
            if (0 === s) return null;
            n.debug('ISOFile', 'Getting sample #' + t + ' partial data (alreadyRead: ' + o.alreadyRead + ' offset: ' + (o.offset + o.alreadyRead - r.fileStart) + ' read size: ' + s + ' full size: ' + o.size + ')'), i.memcpy(o.data.buffer, o.alreadyRead, r, o.offset + o.alreadyRead - r.fileStart, s), (o.alreadyRead += s), (r.usedBytes += s), this.stream.logBufferLevel();
        }
    }),
    (f.prototype.releaseSample = function (e, t) {
        var n = e.samples[t];
        return n.data ? ((this.samplesDataSize -= n.size), (n.data = null), (n.alreadyRead = 0), n.size) : 0;
    }),
    (f.prototype.getAllocatedSampleDataSize = function () {
        return this.samplesDataSize;
    }),
    (f.prototype.getCodecs = function () {
        var e,
            t = '';
        for (e = 0; e < this.moov.traks.length; e++) {
            var n = this.moov.traks[e];
            e > 0 && (t += ','), (t += n.mdia.minf.stbl.stsd.entries[0].getCodec());
        }
        return t;
    }),
    (f.prototype.getTrexById = function (e) {
        var t;
        if (!this.moov || !this.moov.mvex) return null;
        for (t = 0; t < this.moov.mvex.trexs.length; t++) {
            var n = this.moov.mvex.trexs[t];
            if (n.track_id == e) return n;
        }
        return null;
    }),
    (f.prototype.getTrackById = function (e) {
        if (void 0 === this.moov) return null;
        for (var t = 0; t < this.moov.traks.length; t++) {
            var n = this.moov.traks[t];
            if (n.tkhd.track_id == e) return n;
        }
        return null;
    }),
    (f.prototype.items = []),
    (f.prototype.itemsDataSize = 0),
    (f.prototype.flattenItemInfo = function () {
        var e = this.items,
            t = this.meta;
        if (null != t && void 0 !== t.hdlr && void 0 !== t.iinf) {
            for (r = 0; r < t.iinf.item_infos.length; r++) ((o = {}).id = t.iinf.item_infos[r].item_ID), (e[o.id] = o), (o.ref_to = []), (o.name = t.iinf.item_infos[r].item_name), t.iinf.item_infos[r].protection_index > 0 && (o.protection = t.ipro.protections[t.iinf.item_infos[r].protection_index - 1]), t.iinf.item_infos[r].item_type ? (o.type = t.iinf.item_infos[r].item_type) : (o.type = 'mime'), (o.content_type = t.iinf.item_infos[r].content_type), (o.content_encoding = t.iinf.item_infos[r].content_encoding);
            if (t.iloc)
                for (r = 0; r < t.iloc.items.length; r++) {
                    var r,
                        i,
                        o,
                        a = t.iloc.items[r];
                    switch (((o = e[a.item_ID]), 0 !== a.data_reference_index && (n.warn('Item storage with reference to other files: not supported'), (o.source = t.dinf.boxes[a.data_reference_index - 1])), a.construction_method)) {
                        case 0:
                            break;
                        case 1:
                        case 2:
                            n.warn('Item storage with construction_method : not supported');
                    }
                    for (i = 0, o.extents = [], o.size = 0; i < a.extents.length; i++) (o.extents[i] = {}), (o.extents[i].offset = a.extents[i].extent_offset + a.base_offset), (o.extents[i].length = a.extents[i].extent_length), (o.extents[i].alreadyRead = 0), (o.size += o.extents[i].length);
                }
            if ((t.pitm && (e[t.pitm.item_id].primary = !0), t.iref))
                for (r = 0; r < t.iref.references.length; r++) {
                    var s = t.iref.references[r];
                    for (i = 0; i < s.references.length; i++)
                        e[s.from_item_ID].ref_to.push({
                            type: s.type,
                            id: s.references[i]
                        });
                }
            if (t.iprp)
                for (var l = 0; l < t.iprp.ipmas.length; l++) {
                    var c = t.iprp.ipmas[l];
                    for (r = 0; r < c.associations.length; r++) {
                        var u = c.associations[r];
                        for (void 0 === (o = e[u.id]).properties && ((o.properties = {}), (o.properties.boxes = [])), i = 0; i < u.props.length; i++) {
                            var d = u.props[i];
                            if (d.property_index > 0 && d.property_index - 1 < t.iprp.ipco.boxes.length) {
                                var f = t.iprp.ipco.boxes[d.property_index - 1];
                                (o.properties[f.type] = f), o.properties.boxes.push(f);
                            }
                        }
                    }
                }
        }
    }),
    (f.prototype.getItem = function (e) {
        if (!this.meta) return null;
        if (!(r = this.items[e]).data && r.size) (r.data = new Uint8Array(r.size)), (r.alreadyRead = 0), (this.itemsDataSize += r.size), n.debug('ISOFile', 'Allocating item #' + e + ' of size ' + r.size + ' (total: ' + this.itemsDataSize + ')');
        else if (r.alreadyRead === r.size) return r;
        for (var t, r, o = 0; o < r.extents.length; o++) {
            var a = r.extents[o];
            if (a.alreadyRead !== a.length) {
                var s = this.stream.findPosition(!0, a.offset + a.alreadyRead, !1);
                if (!(s > -1)) return null;
                var l = (t = this.stream.buffers[s]).byteLength - (a.offset + a.alreadyRead - t.fileStart);
                if (!(a.length - a.alreadyRead <= l)) return n.debug('ISOFile', 'Getting item #' + e + ' extent #' + o + ' partial data (alreadyRead: ' + a.alreadyRead + ' offset: ' + (a.offset + a.alreadyRead - t.fileStart) + ' read size: ' + l + ' full extent size: ' + a.length + ' full item size: ' + r.size + ')'), i.memcpy(r.data.buffer, r.alreadyRead, t, a.offset + a.alreadyRead - t.fileStart, l), (a.alreadyRead += l), (r.alreadyRead += l), (t.usedBytes += l), this.stream.logBufferLevel(), null;
                n.debug('ISOFile', 'Getting item #' + e + ' extent #' + o + ' data (alreadyRead: ' + a.alreadyRead + ' offset: ' + (a.offset + a.alreadyRead - t.fileStart) + ' read size: ' + (a.length - a.alreadyRead) + ' full extent size: ' + a.length + ' full item size: ' + r.size + ')'), i.memcpy(r.data.buffer, r.alreadyRead, t, a.offset + a.alreadyRead - t.fileStart, a.length - a.alreadyRead), (t.usedBytes += a.length - a.alreadyRead), this.stream.logBufferLevel(), (r.alreadyRead += a.length - a.alreadyRead), (a.alreadyRead = a.length);
            }
        }
        return r.alreadyRead === r.size ? r : null;
    }),
    (f.prototype.releaseItem = function (e) {
        var t = this.items[e];
        if (!t.data) return 0;
        (this.itemsDataSize -= t.size), (t.data = null), (t.alreadyRead = 0);
        for (var n = 0; n < t.extents.length; n++) t.extents[n].alreadyRead = 0;
        return t.size;
    }),
    (f.prototype.processItems = function (e) {
        for (var t in this.items) {
            var n = this.items[t];
            this.getItem(n.id), e && !n.sent && (e(n), (n.sent = !0), (n.data = null));
        }
    }),
    (f.prototype.hasItem = function (e) {
        for (var t in this.items) {
            var n = this.items[t];
            if (n.name === e) return n.id;
        }
        return -1;
    }),
    (f.prototype.getMetaHandler = function () {
        return this.meta ? this.meta.hdlr.handler : null;
    }),
    (f.prototype.getPrimaryItem = function () {
        return this.meta && this.meta.pitm ? this.getItem(this.meta.pitm.item_id) : null;
    }),
    (f.prototype.itemToFragmentedTrackFile = function (e) {
        var t = e || {},
            n = null;
        if (null == (n = t.itemId ? this.getItem(t.itemId) : this.getPrimaryItem())) return null;
        var r = new f();
        r.discardMdatData = !1;
        var i = {
            type: n.type,
            description_boxes: n.properties.boxes
        };
        n.properties.ispe && ((i.width = n.properties.ispe.image_width), (i.height = n.properties.ispe.image_height));
        var o = r.addTrack(i);
        return o ? (r.addSample(o, n.data), r) : null;
    }),
    (f.prototype.write = function (e) {
        for (var t = 0; t < this.boxes.length; t++) this.boxes[t].write(e);
    }),
    (f.prototype.createFragment = function (e, t, r) {
        var o = this.getTrackById(e),
            a = this.getSample(o, t);
        if (null == a) return (a = o.samples[t]), this.nextSeekPosition ? (this.nextSeekPosition = Math.min(a.offset + a.alreadyRead, this.nextSeekPosition)) : (this.nextSeekPosition = o.samples[t].offset + a.alreadyRead), null;
        var s = r || new i();
        s.endianness = i.BIG_ENDIAN;
        var c = this.createSingleSampleMoof(a);
        c.write(s), (c.trafs[0].truns[0].data_offset = c.size + 8), n.debug('MP4Box', 'Adjusting data_offset with new value ' + c.trafs[0].truns[0].data_offset), s.adjustUint32(c.trafs[0].truns[0].data_offset_position, c.trafs[0].truns[0].data_offset);
        var u = new l.mdatBox();
        return (u.data = a.data), u.write(s), s;
    }),
    (f.writeInitializationSegment = function (e, t, r, o) {
        n.debug('ISOFile', 'Generating initialization segment');
        var a,
            s = new i();
        (s.endianness = i.BIG_ENDIAN), e.write(s);
        var l = t.add('mvex');
        for (r && l.add('mehd').set('fragment_duration', r), a = 0; a < t.traks.length; a++) l.add('trex').set('track_id', t.traks[a].tkhd.track_id).set('default_sample_description_index', 1).set('default_sample_duration', o).set('default_sample_size', 0).set('default_sample_flags', 65536);
        return t.write(s), s.buffer;
    }),
    (f.prototype.save = function (e) {
        var t = new i();
        (t.endianness = i.BIG_ENDIAN), this.write(t), t.save(e);
    }),
    (f.prototype.getBuffer = function () {
        var e = new i();
        return (e.endianness = i.BIG_ENDIAN), this.write(e), e.buffer;
    }),
    (f.prototype.initializeSegmentation = function () {
        for (null === this.onSegment && n.warn('MP4Box', 'No segmentation callback set!'), this.isFragmentationInitialized || ((this.isFragmentationInitialized = !0), (this.nextMoofNumber = 0), this.resetTables()), t = [], e = 0; e < this.fragmentedTracks.length; e++) {
            var e,
                t,
                r,
                i,
                o = new l.moovBox();
            (o.mvhd = this.moov.mvhd), o.boxes.push(o.mvhd), (r = this.getTrackById(this.fragmentedTracks[e].id)), o.boxes.push(r), o.traks.push(r), ((i = {}).id = r.tkhd.track_id), (i.user = this.fragmentedTracks[e].user), (i.buffer = f.writeInitializationSegment(this.ftyp, o, this.moov.mvex && this.moov.mvex.mehd ? this.moov.mvex.mehd.fragment_duration : void 0, this.moov.traks[e].samples.length > 0 ? this.moov.traks[e].samples[0].duration : 0)), t.push(i);
        }
        return t;
    }),
    (l.Box.prototype.printHeader = function (e) {
        (this.size += 8), this.size > o && (this.size += 8), 'uuid' === this.type && (this.size += 16), e.log(e.indent + 'size:' + this.size), e.log(e.indent + 'type:' + this.type);
    }),
    (l.FullBox.prototype.printHeader = function (e) {
        (this.size += 4), l.Box.prototype.printHeader.call(this, e), e.log(e.indent + 'version:' + this.version), e.log(e.indent + 'flags:' + this.flags);
    }),
    (l.Box.prototype.print = function (e) {
        this.printHeader(e);
    }),
    (l.ContainerBox.prototype.print = function (e) {
        this.printHeader(e);
        for (var t = 0; t < this.boxes.length; t++)
            if (this.boxes[t]) {
                var n = e.indent;
                (e.indent += ' '), this.boxes[t].print(e), (e.indent = n);
            }
    }),
    (f.prototype.print = function (e) {
        e.indent = '';
        for (var t = 0; t < this.boxes.length; t++) this.boxes[t] && this.boxes[t].print(e);
    }),
    (l.mvhdBox.prototype.print = function (e) {
        l.FullBox.prototype.printHeader.call(this, e), e.log(e.indent + 'creation_time: ' + this.creation_time), e.log(e.indent + 'modification_time: ' + this.modification_time), e.log(e.indent + 'timescale: ' + this.timescale), e.log(e.indent + 'duration: ' + this.duration), e.log(e.indent + 'rate: ' + this.rate), e.log(e.indent + 'volume: ' + (this.volume >> 8)), e.log(e.indent + 'matrix: ' + this.matrix.join(', ')), e.log(e.indent + 'next_track_id: ' + this.next_track_id);
    }),
    (l.tkhdBox.prototype.print = function (e) {
        l.FullBox.prototype.printHeader.call(this, e), e.log(e.indent + 'creation_time: ' + this.creation_time), e.log(e.indent + 'modification_time: ' + this.modification_time), e.log(e.indent + 'track_id: ' + this.track_id), e.log(e.indent + 'duration: ' + this.duration), e.log(e.indent + 'volume: ' + (this.volume >> 8)), e.log(e.indent + 'matrix: ' + this.matrix.join(', ')), e.log(e.indent + 'layer: ' + this.layer), e.log(e.indent + 'alternate_group: ' + this.alternate_group), e.log(e.indent + 'width: ' + this.width), e.log(e.indent + 'height: ' + this.height);
    });
var p = {};
(p.createFile = function (e, t) {
    var n = void 0 === e || e,
        r = new f(t);
    return (r.discardMdatData = !n), r;
}),
    (t.createFile = p.createFile);
