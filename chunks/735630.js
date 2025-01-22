var r = (function () {
    var e = new Date(),
        n = 4,
        i = 3,
        a = 2,
        o = 1,
        s = 4;
    return {
        setLogLevel: function (e) {
            e == this.debug ? (s = o) : e == this.info ? (s = a) : e == this.warn ? (s = i) : (this.error, (s = n));
        },
        debug: function (n, i) {
            void 0 === console.debug && (console.debug = console.log), o >= s && console.debug('[' + r.getDurationString(new Date() - e, 1000) + ']', '[' + n + ']', i);
        },
        log: function (e, n) {
            this.debug(e.msg);
        },
        info: function (n, i) {
            a >= s && console.info('[' + r.getDurationString(new Date() - e, 1000) + ']', '[' + n + ']', i);
        },
        warn: function (n, a) {
            i >= s && console.warn('[' + r.getDurationString(new Date() - e, 1000) + ']', '[' + n + ']', a);
        },
        error: function (i, a) {
            n >= s && console.error('[' + r.getDurationString(new Date() - e, 1000) + ']', '[' + i + ']', a);
        }
    };
})();
(r.getDurationString = function (e, n) {
    function r(e, n) {
        for (var r = ('' + e).split('.'); r[0].length < n; ) r[0] = '0' + r[0];
        return r.join('.');
    }
    e < 0 ? ((i = !0), (e = -e)) : (i = !1);
    var i,
        a = e / (n || 1),
        o = Math.floor(a / 3600),
        s = Math.floor((a -= 3600 * o) / 60),
        l = 1000 * (a -= 60 * s);
    return (l -= 1000 * (a = Math.floor(a))), (l = Math.floor(l)), (i ? '-' : '') + o + ':' + r(s, 2) + ':' + r(a, 2) + '.' + r(l, 3);
}),
    (r.printRanges = function (e) {
        var n = e.length;
        if (!(n > 0)) return '(empty)';
        for (var i = '', a = 0; a < n; a++) a > 0 && (i += ','), (i += '[' + r.getDurationString(e.start(a)) + ',' + r.getDurationString(e.end(a)) + ']');
        return i;
    });
n.Log = r;
var i = function (e) {
    if (e instanceof ArrayBuffer) (this.buffer = e), (this.dataview = new DataView(e));
    else throw 'Needs an array buffer';
    this.position = 0;
};
(i.prototype.getPosition = function () {
    return this.position;
}),
    (i.prototype.getEndPosition = function () {
        return this.buffer.byteLength;
    }),
    (i.prototype.getLength = function () {
        return this.buffer.byteLength;
    }),
    (i.prototype.seek = function (e) {
        var n = Math.max(0, Math.min(this.buffer.byteLength, e));
        return (this.position = isNaN(n) || !isFinite(n) ? 0 : n), !0;
    }),
    (i.prototype.isEos = function () {
        return this.getPosition() >= this.getEndPosition();
    }),
    (i.prototype.readAnyInt = function (e, n) {
        var r = 0;
        if (this.position + e <= this.buffer.byteLength) {
            switch (e) {
                case 1:
                    r = n ? this.dataview.getInt8(this.position) : this.dataview.getUint8(this.position);
                    break;
                case 2:
                    r = n ? this.dataview.getInt16(this.position) : this.dataview.getUint16(this.position);
                    break;
                case 3:
                    if (n) throw 'No method for reading signed 24 bits values';
                    r = (this.dataview.getUint8(this.position) << 16) | (this.dataview.getUint8(this.position + 1) << 8) | this.dataview.getUint8(this.position + 2);
                    break;
                case 4:
                    r = n ? this.dataview.getInt32(this.position) : this.dataview.getUint32(this.position);
                    break;
                case 8:
                    if (n) throw 'No method for reading signed 64 bits values';
                    r = (this.dataview.getUint32(this.position) << 32) | this.dataview.getUint32(this.position + 4);
                    break;
                default:
                    throw 'readInt method not implemented for size: ' + e;
            }
            return (this.position += e), r;
        }
        throw 'Not enough bytes in buffer';
    }),
    (i.prototype.readUint8 = function () {
        return this.readAnyInt(1, !1);
    }),
    (i.prototype.readUint16 = function () {
        return this.readAnyInt(2, !1);
    }),
    (i.prototype.readUint24 = function () {
        return this.readAnyInt(3, !1);
    }),
    (i.prototype.readUint32 = function () {
        return this.readAnyInt(4, !1);
    }),
    (i.prototype.readUint64 = function () {
        return this.readAnyInt(8, !1);
    }),
    (i.prototype.readString = function (e) {
        if (this.position + e <= this.buffer.byteLength) {
            for (var n = '', r = 0; r < e; r++) n += String.fromCharCode(this.readUint8());
            return n;
        }
        throw 'Not enough bytes in buffer';
    }),
    (i.prototype.readCString = function () {
        for (var e = []; ; ) {
            var n = this.readUint8();
            if (0 !== n) e.push(n);
            else break;
        }
        return String.fromCharCode.apply(null, e);
    }),
    (i.prototype.readInt8 = function () {
        return this.readAnyInt(1, !0);
    }),
    (i.prototype.readInt16 = function () {
        return this.readAnyInt(2, !0);
    }),
    (i.prototype.readInt32 = function () {
        return this.readAnyInt(4, !0);
    }),
    (i.prototype.readInt64 = function () {
        return this.readAnyInt(8, !1);
    }),
    (i.prototype.readUint8Array = function (e) {
        for (var n = new Uint8Array(e), r = 0; r < e; r++) n[r] = this.readUint8();
        return n;
    }),
    (i.prototype.readInt16Array = function (e) {
        for (var n = new Int16Array(e), r = 0; r < e; r++) n[r] = this.readInt16();
        return n;
    }),
    (i.prototype.readUint16Array = function (e) {
        for (var n = new Int16Array(e), r = 0; r < e; r++) n[r] = this.readUint16();
        return n;
    }),
    (i.prototype.readUint32Array = function (e) {
        for (var n = new Uint32Array(e), r = 0; r < e; r++) n[r] = this.readUint32();
        return n;
    }),
    (i.prototype.readInt32Array = function (e) {
        for (var n = new Int32Array(e), r = 0; r < e; r++) n[r] = this.readInt32();
        return n;
    });
n.MP4BoxStream = i;
var a = function (e, n, r) {
    (this._byteOffset = n || 0), e instanceof ArrayBuffer ? (this.buffer = e) : 'object' == typeof e ? ((this.dataView = e), n && (this._byteOffset += n)) : (this.buffer = new ArrayBuffer(e || 0)), (this.position = 0), (this.endianness = null == r ? a.LITTLE_ENDIAN : r);
};
(a.prototype = {}),
    (a.prototype.getPosition = function () {
        return this.position;
    }),
    (a.prototype._realloc = function (e) {
        if (!!this._dynamicSize) {
            var n = this._byteOffset + this.position + e,
                r = this._buffer.byteLength;
            if (n <= r) {
                n > this._byteLength && (this._byteLength = n);
                return;
            }
            for (r < 1 && (r = 1); n > r; ) r *= 2;
            var i = new ArrayBuffer(r),
                a = new Uint8Array(this._buffer);
            new Uint8Array(i, 0, a.length).set(a), (this.buffer = i), (this._byteLength = n);
        }
    }),
    (a.prototype._trimAlloc = function () {
        if (this._byteLength != this._buffer.byteLength) {
            var e = new ArrayBuffer(this._byteLength),
                n = new Uint8Array(e),
                r = new Uint8Array(this._buffer, 0, n.length);
            n.set(r), (this.buffer = e);
        }
    }),
    (a.BIG_ENDIAN = !1),
    (a.LITTLE_ENDIAN = !0),
    (a.prototype._byteLength = 0),
    Object.defineProperty(a.prototype, 'byteLength', {
        get: function () {
            return this._byteLength - this._byteOffset;
        }
    }),
    Object.defineProperty(a.prototype, 'buffer', {
        get: function () {
            return this._trimAlloc(), this._buffer;
        },
        set: function (e) {
            (this._buffer = e), (this._dataView = new DataView(this._buffer, this._byteOffset)), (this._byteLength = this._buffer.byteLength);
        }
    }),
    Object.defineProperty(a.prototype, 'byteOffset', {
        get: function () {
            return this._byteOffset;
        },
        set: function (e) {
            (this._byteOffset = e), (this._dataView = new DataView(this._buffer, this._byteOffset)), (this._byteLength = this._buffer.byteLength);
        }
    }),
    Object.defineProperty(a.prototype, 'dataView', {
        get: function () {
            return this._dataView;
        },
        set: function (e) {
            (this._byteOffset = e.byteOffset), (this._buffer = e.buffer), (this._dataView = new DataView(this._buffer, this._byteOffset)), (this._byteLength = this._byteOffset + e.byteLength);
        }
    }),
    (a.prototype.seek = function (e) {
        var n = Math.max(0, Math.min(this.byteLength, e));
        this.position = isNaN(n) || !isFinite(n) ? 0 : n;
    }),
    (a.prototype.isEof = function () {
        return this.position >= this._byteLength;
    }),
    (a.prototype.mapUint8Array = function (e) {
        this._realloc(1 * e);
        var n = new Uint8Array(this._buffer, this.byteOffset + this.position, e);
        return (this.position += 1 * e), n;
    }),
    (a.prototype.readInt32Array = function (e, n) {
        var r = new Int32Array((e = null == e ? this.byteLength - this.position / 4 : e));
        return a.memcpy(r.buffer, 0, this.buffer, this.byteOffset + this.position, e * r.BYTES_PER_ELEMENT), a.arrayToNative(r, null == n ? this.endianness : n), (this.position += r.byteLength), r;
    }),
    (a.prototype.readInt16Array = function (e, n) {
        var r = new Int16Array((e = null == e ? this.byteLength - this.position / 2 : e));
        return a.memcpy(r.buffer, 0, this.buffer, this.byteOffset + this.position, e * r.BYTES_PER_ELEMENT), a.arrayToNative(r, null == n ? this.endianness : n), (this.position += r.byteLength), r;
    }),
    (a.prototype.readInt8Array = function (e) {
        var n = new Int8Array((e = null == e ? this.byteLength - this.position : e));
        return a.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), (this.position += n.byteLength), n;
    }),
    (a.prototype.readUint32Array = function (e, n) {
        var r = new Uint32Array((e = null == e ? this.byteLength - this.position / 4 : e));
        return a.memcpy(r.buffer, 0, this.buffer, this.byteOffset + this.position, e * r.BYTES_PER_ELEMENT), a.arrayToNative(r, null == n ? this.endianness : n), (this.position += r.byteLength), r;
    }),
    (a.prototype.readUint16Array = function (e, n) {
        var r = new Uint16Array((e = null == e ? this.byteLength - this.position / 2 : e));
        return a.memcpy(r.buffer, 0, this.buffer, this.byteOffset + this.position, e * r.BYTES_PER_ELEMENT), a.arrayToNative(r, null == n ? this.endianness : n), (this.position += r.byteLength), r;
    }),
    (a.prototype.readUint8Array = function (e) {
        var n = new Uint8Array((e = null == e ? this.byteLength - this.position : e));
        return a.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), (this.position += n.byteLength), n;
    }),
    (a.prototype.readFloat64Array = function (e, n) {
        var r = new Float64Array((e = null == e ? this.byteLength - this.position / 8 : e));
        return a.memcpy(r.buffer, 0, this.buffer, this.byteOffset + this.position, e * r.BYTES_PER_ELEMENT), a.arrayToNative(r, null == n ? this.endianness : n), (this.position += r.byteLength), r;
    }),
    (a.prototype.readFloat32Array = function (e, n) {
        var r = new Float32Array((e = null == e ? this.byteLength - this.position / 4 : e));
        return a.memcpy(r.buffer, 0, this.buffer, this.byteOffset + this.position, e * r.BYTES_PER_ELEMENT), a.arrayToNative(r, null == n ? this.endianness : n), (this.position += r.byteLength), r;
    }),
    (a.prototype.readInt32 = function (e) {
        var n = this._dataView.getInt32(this.position, null == e ? this.endianness : e);
        return (this.position += 4), n;
    }),
    (a.prototype.readInt16 = function (e) {
        var n = this._dataView.getInt16(this.position, null == e ? this.endianness : e);
        return (this.position += 2), n;
    }),
    (a.prototype.readInt8 = function () {
        var e = this._dataView.getInt8(this.position);
        return (this.position += 1), e;
    }),
    (a.prototype.readUint32 = function (e) {
        var n = this._dataView.getUint32(this.position, null == e ? this.endianness : e);
        return (this.position += 4), n;
    }),
    (a.prototype.readUint16 = function (e) {
        var n = this._dataView.getUint16(this.position, null == e ? this.endianness : e);
        return (this.position += 2), n;
    }),
    (a.prototype.readUint8 = function () {
        var e = this._dataView.getUint8(this.position);
        return (this.position += 1), e;
    }),
    (a.prototype.readFloat32 = function (e) {
        var n = this._dataView.getFloat32(this.position, null == e ? this.endianness : e);
        return (this.position += 4), n;
    }),
    (a.prototype.readFloat64 = function (e) {
        var n = this._dataView.getFloat64(this.position, null == e ? this.endianness : e);
        return (this.position += 8), n;
    }),
    (a.endianness = new Int8Array(new Int16Array([1]).buffer)[0] > 0),
    (a.memcpy = function (e, n, r, i, a) {
        var o = new Uint8Array(e, n, a),
            s = new Uint8Array(r, i, a);
        o.set(s);
    }),
    (a.arrayToNative = function (e, n) {
        return n == this.endianness ? e : this.flipArrayEndianness(e);
    }),
    (a.nativeToEndian = function (e, n) {
        return this.endianness == n ? e : this.flipArrayEndianness(e);
    }),
    (a.flipArrayEndianness = function (e) {
        for (var n = new Uint8Array(e.buffer, e.byteOffset, e.byteLength), r = 0; r < e.byteLength; r += e.BYTES_PER_ELEMENT)
            for (var i = r + e.BYTES_PER_ELEMENT - 1, a = r; i > a; i--, a++) {
                var o = n[a];
                (n[a] = n[i]), (n[i] = o);
            }
        return e;
    }),
    (a.prototype.failurePosition = 0),
    (String.fromCharCodeUint8 = function (e) {
        for (var n = [], r = 0; r < e.length; r++) n[r] = e[r];
        return String.fromCharCode.apply(null, n);
    }),
    (a.prototype.readString = function (e, n) {
        return null == n || 'ASCII' == n ? String.fromCharCodeUint8.apply(null, [this.mapUint8Array(null == e ? this.byteLength - this.position : e)]) : new TextDecoder(n).decode(this.mapUint8Array(e));
    }),
    (a.prototype.readCString = function (e) {
        var n = this.byteLength - this.position,
            r = new Uint8Array(this._buffer, this._byteOffset + this.position),
            i = n;
        null != e && (i = Math.min(e, n));
        for (var a = 0; a < i && 0 !== r[a]; a++);
        var o = String.fromCharCodeUint8.apply(null, [this.mapUint8Array(a)]);
        return null != e ? (this.position += i - a) : a != n && (this.position += 1), o;
    });
var o = 4294967296;
(a.prototype.readInt64 = function () {
    return this.readInt32() * o + this.readUint32();
}),
    (a.prototype.readUint64 = function () {
        return this.readUint32() * o + this.readUint32();
    }),
    (a.prototype.readInt64 = function () {
        return this.readUint32() * o + this.readUint32();
    }),
    (a.prototype.readUint24 = function () {
        return (this.readUint8() << 16) + (this.readUint8() << 8) + this.readUint8();
    });
(n.DataStream = a),
    (a.prototype.save = function (e) {
        var n = new Blob([this.buffer]);
        if (window.URL && URL.createObjectURL) {
            var r = window.URL.createObjectURL(n),
                i = document.createElement('a');
            document.body.appendChild(i), i.setAttribute('href', r), i.setAttribute('download', e), i.setAttribute('target', '_self'), i.click(), window.URL.revokeObjectURL(r);
        } else throw "DataStream.save: Can't create object URL.";
    }),
    (a.prototype._dynamicSize = !0),
    Object.defineProperty(a.prototype, 'dynamicSize', {
        get: function () {
            return this._dynamicSize;
        },
        set: function (e) {
            !e && this._trimAlloc(), (this._dynamicSize = e);
        }
    }),
    (a.prototype.shift = function (e) {
        var n = new ArrayBuffer(this._byteLength - e),
            r = new Uint8Array(n),
            i = new Uint8Array(this._buffer, e, r.length);
        r.set(i), (this.buffer = n), (this.position -= e);
    }),
    (a.prototype.writeInt32Array = function (e, n) {
        if ((this._realloc(4 * e.length), e instanceof Int32Array && this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)) a.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapInt32Array(e.length, n);
        else for (var r = 0; r < e.length; r++) this.writeInt32(e[r], n);
    }),
    (a.prototype.writeInt16Array = function (e, n) {
        if ((this._realloc(2 * e.length), e instanceof Int16Array && this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)) a.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapInt16Array(e.length, n);
        else for (var r = 0; r < e.length; r++) this.writeInt16(e[r], n);
    }),
    (a.prototype.writeInt8Array = function (e) {
        if ((this._realloc(1 * e.length), e instanceof Int8Array && this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)) a.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapInt8Array(e.length);
        else for (var n = 0; n < e.length; n++) this.writeInt8(e[n]);
    }),
    (a.prototype.writeUint32Array = function (e, n) {
        if ((this._realloc(4 * e.length), e instanceof Uint32Array && this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)) a.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapUint32Array(e.length, n);
        else for (var r = 0; r < e.length; r++) this.writeUint32(e[r], n);
    }),
    (a.prototype.writeUint16Array = function (e, n) {
        if ((this._realloc(2 * e.length), e instanceof Uint16Array && this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)) a.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapUint16Array(e.length, n);
        else for (var r = 0; r < e.length; r++) this.writeUint16(e[r], n);
    }),
    (a.prototype.writeUint8Array = function (e) {
        if ((this._realloc(1 * e.length), e instanceof Uint8Array && this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)) a.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapUint8Array(e.length);
        else for (var n = 0; n < e.length; n++) this.writeUint8(e[n]);
    }),
    (a.prototype.writeFloat64Array = function (e, n) {
        if ((this._realloc(8 * e.length), e instanceof Float64Array && this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)) a.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapFloat64Array(e.length, n);
        else for (var r = 0; r < e.length; r++) this.writeFloat64(e[r], n);
    }),
    (a.prototype.writeFloat32Array = function (e, n) {
        if ((this._realloc(4 * e.length), e instanceof Float32Array && this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)) a.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapFloat32Array(e.length, n);
        else for (var r = 0; r < e.length; r++) this.writeFloat32(e[r], n);
    }),
    (a.prototype.writeInt32 = function (e, n) {
        this._realloc(4), this._dataView.setInt32(this.position, e, null == n ? this.endianness : n), (this.position += 4);
    }),
    (a.prototype.writeInt16 = function (e, n) {
        this._realloc(2), this._dataView.setInt16(this.position, e, null == n ? this.endianness : n), (this.position += 2);
    }),
    (a.prototype.writeInt8 = function (e) {
        this._realloc(1), this._dataView.setInt8(this.position, e), (this.position += 1);
    }),
    (a.prototype.writeUint32 = function (e, n) {
        this._realloc(4), this._dataView.setUint32(this.position, e, null == n ? this.endianness : n), (this.position += 4);
    }),
    (a.prototype.writeUint16 = function (e, n) {
        this._realloc(2), this._dataView.setUint16(this.position, e, null == n ? this.endianness : n), (this.position += 2);
    }),
    (a.prototype.writeUint8 = function (e) {
        this._realloc(1), this._dataView.setUint8(this.position, e), (this.position += 1);
    }),
    (a.prototype.writeFloat32 = function (e, n) {
        this._realloc(4), this._dataView.setFloat32(this.position, e, null == n ? this.endianness : n), (this.position += 4);
    }),
    (a.prototype.writeFloat64 = function (e, n) {
        this._realloc(8), this._dataView.setFloat64(this.position, e, null == n ? this.endianness : n), (this.position += 8);
    }),
    (a.prototype.writeUCS2String = function (e, n, r) {
        null == r && (r = e.length);
        for (var i = 0; i < e.length && i < r; i++) this.writeUint16(e.charCodeAt(i), n);
        for (; i < r; i++) this.writeUint16(0);
    }),
    (a.prototype.writeString = function (e, n, r) {
        var i = 0;
        if (null == n || 'ASCII' == n) {
            if (null != r) {
                var a = Math.min(e.length, r);
                for (i = 0; i < a; i++) this.writeUint8(e.charCodeAt(i));
                for (; i < r; i++) this.writeUint8(0);
            } else for (i = 0; i < e.length; i++) this.writeUint8(e.charCodeAt(i));
        } else this.writeUint8Array(new TextEncoder(n).encode(e.substring(0, r)));
    }),
    (a.prototype.writeCString = function (e, n) {
        var r = 0;
        if (null != n) {
            var i = Math.min(e.length, n);
            for (r = 0; r < i; r++) this.writeUint8(e.charCodeAt(r));
            for (; r < n; r++) this.writeUint8(0);
        } else {
            for (r = 0; r < e.length; r++) this.writeUint8(e.charCodeAt(r));
            this.writeUint8(0);
        }
    }),
    (a.prototype.writeStruct = function (e, n) {
        for (var r = 0; r < e.length; r += 2) {
            var i = e[r + 1];
            this.writeType(i, n[e[r]], n);
        }
    }),
    (a.prototype.writeType = function (e, n, r) {
        if ('function' == typeof e) return e(this, n);
        if ('object' == typeof e && !(e instanceof Array)) return e.set(this, n, r);
        var i,
            o = null,
            s = 'ASCII',
            l = this.position;
        switch (('string' == typeof e && /:/.test(e) && ((e = (i = e.split(':'))[0]), (o = parseInt(i[1]))), 'string' == typeof e && /,/.test(e) && ((e = (i = e.split(','))[0]), (s = parseInt(i[1]))), e)) {
            case 'uint8':
                this.writeUint8(n);
                break;
            case 'int8':
                this.writeInt8(n);
                break;
            case 'uint16':
                this.writeUint16(n, this.endianness);
                break;
            case 'int16':
                this.writeInt16(n, this.endianness);
                break;
            case 'uint32':
                this.writeUint32(n, this.endianness);
                break;
            case 'int32':
                this.writeInt32(n, this.endianness);
                break;
            case 'float32':
                this.writeFloat32(n, this.endianness);
                break;
            case 'float64':
                this.writeFloat64(n, this.endianness);
                break;
            case 'uint16be':
                this.writeUint16(n, a.BIG_ENDIAN);
                break;
            case 'int16be':
                this.writeInt16(n, a.BIG_ENDIAN);
                break;
            case 'uint32be':
                this.writeUint32(n, a.BIG_ENDIAN);
                break;
            case 'int32be':
                this.writeInt32(n, a.BIG_ENDIAN);
                break;
            case 'float32be':
                this.writeFloat32(n, a.BIG_ENDIAN);
                break;
            case 'float64be':
                this.writeFloat64(n, a.BIG_ENDIAN);
                break;
            case 'uint16le':
                this.writeUint16(n, a.LITTLE_ENDIAN);
                break;
            case 'int16le':
                this.writeInt16(n, a.LITTLE_ENDIAN);
                break;
            case 'uint32le':
                this.writeUint32(n, a.LITTLE_ENDIAN);
                break;
            case 'int32le':
                this.writeInt32(n, a.LITTLE_ENDIAN);
                break;
            case 'float32le':
                this.writeFloat32(n, a.LITTLE_ENDIAN);
                break;
            case 'float64le':
                this.writeFloat64(n, a.LITTLE_ENDIAN);
                break;
            case 'cstring':
                this.writeCString(n, o);
                break;
            case 'string':
                this.writeString(n, s, o);
                break;
            case 'u16string':
                this.writeUCS2String(n, this.endianness, o);
                break;
            case 'u16stringle':
                this.writeUCS2String(n, a.LITTLE_ENDIAN, o);
                break;
            case 'u16stringbe':
                this.writeUCS2String(n, a.BIG_ENDIAN, o);
                break;
            default:
                if (3 == e.length) {
                    for (var u = e[1], c = 0; c < n.length; c++) this.writeType(u, n[c]);
                    break;
                }
                this.writeStruct(e, n);
        }
        null != o && ((this.position = l), this._realloc(o), (this.position = l + o));
    }),
    (a.prototype.writeUint64 = function (e) {
        var n = Math.floor(e / o);
        this.writeUint32(n), this.writeUint32(4294967295 & e);
    }),
    (a.prototype.writeUint24 = function (e) {
        this.writeUint8((16711680 & e) >> 16), this.writeUint8((65280 & e) >> 8), this.writeUint8(255 & e);
    }),
    (a.prototype.adjustUint32 = function (e, n) {
        var r = this.position;
        this.seek(e), this.writeUint32(n), this.seek(r);
    }),
    (a.prototype.mapInt32Array = function (e, n) {
        this._realloc(4 * e);
        var r = new Int32Array(this._buffer, this.byteOffset + this.position, e);
        return a.arrayToNative(r, null == n ? this.endianness : n), (this.position += 4 * e), r;
    }),
    (a.prototype.mapInt16Array = function (e, n) {
        this._realloc(2 * e);
        var r = new Int16Array(this._buffer, this.byteOffset + this.position, e);
        return a.arrayToNative(r, null == n ? this.endianness : n), (this.position += 2 * e), r;
    }),
    (a.prototype.mapInt8Array = function (e) {
        this._realloc(1 * e);
        var n = new Int8Array(this._buffer, this.byteOffset + this.position, e);
        return (this.position += 1 * e), n;
    }),
    (a.prototype.mapUint32Array = function (e, n) {
        this._realloc(4 * e);
        var r = new Uint32Array(this._buffer, this.byteOffset + this.position, e);
        return a.arrayToNative(r, null == n ? this.endianness : n), (this.position += 4 * e), r;
    }),
    (a.prototype.mapUint16Array = function (e, n) {
        this._realloc(2 * e);
        var r = new Uint16Array(this._buffer, this.byteOffset + this.position, e);
        return a.arrayToNative(r, null == n ? this.endianness : n), (this.position += 2 * e), r;
    }),
    (a.prototype.mapFloat64Array = function (e, n) {
        this._realloc(8 * e);
        var r = new Float64Array(this._buffer, this.byteOffset + this.position, e);
        return a.arrayToNative(r, null == n ? this.endianness : n), (this.position += 8 * e), r;
    }),
    (a.prototype.mapFloat32Array = function (e, n) {
        this._realloc(4 * e);
        var r = new Float32Array(this._buffer, this.byteOffset + this.position, e);
        return a.arrayToNative(r, null == n ? this.endianness : n), (this.position += 4 * e), r;
    });
var s = function (e) {
    (this.buffers = []), (this.bufferIndex = -1), e && (this.insertBuffer(e), (this.bufferIndex = 0));
};
(s.prototype = new a(new ArrayBuffer(), 0, a.BIG_ENDIAN)),
    (s.prototype.initialized = function () {
        var e;
        if (this.bufferIndex > -1) return !0;
        if (!(this.buffers.length > 0)) return r.warn('MultiBufferStream', 'No buffer to start parsing from'), this.logBufferLevel(), !1;
        return 0 === (e = this.buffers[0]).fileStart ? ((this.buffer = e), (this.bufferIndex = 0), r.debug('MultiBufferStream', 'Stream ready for parsing'), !0) : (r.warn('MultiBufferStream', 'The first buffer should have a fileStart of 0'), this.logBufferLevel(), !1);
    }),
    (ArrayBuffer.concat = function (e, n) {
        r.debug('ArrayBuffer', 'Trying to create a new buffer of size: ' + (e.byteLength + n.byteLength));
        var i = new Uint8Array(e.byteLength + n.byteLength);
        return i.set(new Uint8Array(e), 0), i.set(new Uint8Array(n), e.byteLength), i.buffer;
    }),
    (s.prototype.reduceBuffer = function (e, n, r) {
        var i;
        return (i = new Uint8Array(r)).set(new Uint8Array(e, n, r)), (i.buffer.fileStart = e.fileStart + n), (i.buffer.usedBytes = 0), i.buffer;
    }),
    (s.prototype.insertBuffer = function (e) {
        for (var n = !0, i = 0; i < this.buffers.length; i++) {
            var a = this.buffers[i];
            if (e.fileStart <= a.fileStart) {
                if (e.fileStart === a.fileStart) {
                    if (e.byteLength > a.byteLength) {
                        this.buffers.splice(i, 1), i--;
                        continue;
                    }
                    r.warn('MultiBufferStream', 'Buffer (fileStart: ' + e.fileStart + ' - Length: ' + e.byteLength + ') already appended, ignoring');
                } else e.fileStart + e.byteLength <= a.fileStart || (e = this.reduceBuffer(e, 0, a.fileStart - e.fileStart)), r.debug('MultiBufferStream', 'Appending new buffer (fileStart: ' + e.fileStart + ' - Length: ' + e.byteLength + ')'), this.buffers.splice(i, 0, e), 0 === i && (this.buffer = e);
                n = !1;
                break;
            }
            if (e.fileStart < a.fileStart + a.byteLength) {
                var o = a.fileStart + a.byteLength - e.fileStart,
                    s = e.byteLength - o;
                if (s > 0) e = this.reduceBuffer(e, o, s);
                else {
                    n = !1;
                    break;
                }
            }
        }
        n && (r.debug('MultiBufferStream', 'Appending new buffer (fileStart: ' + e.fileStart + ' - Length: ' + e.byteLength + ')'), this.buffers.push(e), 0 === i && (this.buffer = e));
    }),
    (s.prototype.logBufferLevel = function (e) {
        var n,
            i,
            a,
            o,
            s,
            l = [],
            u = '';
        for (n = 0, a = 0, o = 0; n < this.buffers.length; n++) (i = this.buffers[n]), 0 === n ? ((s = {}), l.push(s), (s.start = i.fileStart), (s.end = i.fileStart + i.byteLength), (u += '[' + s.start + '-')) : s.end === i.fileStart ? (s.end = i.fileStart + i.byteLength) : (((s = {}).start = i.fileStart), (u += l[l.length - 1].end - 1 + '], [' + s.start + '-'), (s.end = i.fileStart + i.byteLength), l.push(s)), (a += i.usedBytes), (o += i.byteLength);
        l.length > 0 && (u += s.end - 1 + ']');
        var c = e ? r.info : r.debug;
        c('MultiBufferStream', 0 === this.buffers.length ? 'No more buffer in memory' : '' + this.buffers.length + ' stored buffer(s) (' + a + '/' + o + ' bytes), continuous ranges: ' + u);
    }),
    (s.prototype.cleanBuffers = function () {
        var e, n;
        for (e = 0; e < this.buffers.length; e++) (n = this.buffers[e]).usedBytes === n.byteLength && (r.debug('MultiBufferStream', 'Removing buffer #' + e), this.buffers.splice(e, 1), e--);
    }),
    (s.prototype.mergeNextBuffer = function () {
        if (!(this.bufferIndex + 1 < this.buffers.length)) return !1;
        if ((e = this.buffers[this.bufferIndex + 1]).fileStart !== this.buffer.fileStart + this.buffer.byteLength) return !1;
        var e,
            n = this.buffer.byteLength,
            i = this.buffer.usedBytes,
            a = this.buffer.fileStart;
        return (this.buffers[this.bufferIndex] = ArrayBuffer.concat(this.buffer, e)), (this.buffer = this.buffers[this.bufferIndex]), this.buffers.splice(this.bufferIndex + 1, 1), (this.buffer.usedBytes = i), (this.buffer.fileStart = a), r.debug('ISOFile', 'Concatenating buffer for box parsing (length: ' + n + '->' + this.buffer.byteLength + ')'), !0;
    }),
    (s.prototype.findPosition = function (e, n, i) {
        var a,
            o = null,
            s = -1;
        for (a = !0 === e ? 0 : this.bufferIndex; a < this.buffers.length && (o = this.buffers[a]).fileStart <= n; ) {
            (s = a), i && (o.fileStart + o.byteLength <= n ? (o.usedBytes = o.byteLength) : (o.usedBytes = n - o.fileStart), this.logBufferLevel());
            a++;
        }
        return -1 === s ? -1 : (o = this.buffers[s]).fileStart + o.byteLength >= n ? (r.debug('MultiBufferStream', 'Found position in existing buffer #' + s), s) : -1;
    }),
    (s.prototype.findEndContiguousBuf = function (e) {
        var n,
            r,
            i,
            a = void 0 !== e ? e : this.bufferIndex;
        if (((r = this.buffers[a]), this.buffers.length > a + 1))
            for (n = a + 1; n < this.buffers.length; n++)
                if ((i = this.buffers[n]).fileStart === r.fileStart + r.byteLength) r = i;
                else break;
        return r.fileStart + r.byteLength;
    }),
    (s.prototype.getEndFilePositionAfter = function (e) {
        var n = this.findPosition(!0, e, !1);
        return -1 !== n ? this.findEndContiguousBuf(n) : e;
    }),
    (s.prototype.addUsedBytes = function (e) {
        (this.buffer.usedBytes += e), this.logBufferLevel();
    }),
    (s.prototype.setAllUsedBytes = function () {
        (this.buffer.usedBytes = this.buffer.byteLength), this.logBufferLevel();
    }),
    (s.prototype.seek = function (e, n, i) {
        var a;
        return -1 !== (a = this.findPosition(n, e, i)) ? ((this.buffer = this.buffers[a]), (this.bufferIndex = a), (this.position = e - this.buffer.fileStart), r.debug('MultiBufferStream', 'Repositioning parser at buffer position: ' + this.position), !0) : (r.debug('MultiBufferStream', 'Position ' + e + ' not found in buffered data'), !1);
    }),
    (s.prototype.getPosition = function () {
        if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw 'Error accessing position in the MultiBufferStream';
        return this.buffers[this.bufferIndex].fileStart + this.position;
    }),
    (s.prototype.getLength = function () {
        return this.byteLength;
    }),
    (s.prototype.getEndPosition = function () {
        if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw 'Error accessing position in the MultiBufferStream';
        return this.buffers[this.bufferIndex].fileStart + this.byteLength;
    });
n.MultiBufferStream = s;
var l = function () {
    var e = 3,
        n = 4,
        i = 5,
        a = 6,
        o = [];
    (o[3] = 'ES_Descriptor'),
        (o[n] = 'DecoderConfigDescriptor'),
        (o[i] = 'DecoderSpecificInfo'),
        (o[a] = 'SLConfigDescriptor'),
        (this.getDescriptorName = function (e) {
            return o[e];
        });
    var s = this,
        l = {};
    return (
        (this.parseOneDescriptor = function (e) {
            var n,
                i,
                a,
                s = 0,
                u = 0;
            for (n = e.readUint8(), s++, a = e.readUint8(), s++; 128 & a; ) (u = (127 & a) << 7), (a = e.readUint8()), s++;
            return (u += 127 & a), r.debug('MPEG4DescriptorParser', 'Found ' + (o[n] || 'Descriptor ' + n) + ', size ' + u + ' at position ' + e.getPosition()), (i = o[n] ? new l[o[n]](u) : new l.Descriptor(u)).parse(e), i;
        }),
        (l.Descriptor = function (e, n) {
            (this.tag = e), (this.size = n), (this.descs = []);
        }),
        (l.Descriptor.prototype.parse = function (e) {
            this.data = e.readUint8Array(this.size);
        }),
        (l.Descriptor.prototype.findDescriptor = function (e) {
            for (var n = 0; n < this.descs.length; n++) if (this.descs[n].tag == e) return this.descs[n];
            return null;
        }),
        (l.Descriptor.prototype.parseRemainingDescriptors = function (e) {
            for (var n = e.position; e.position < n + this.size; ) {
                var r = s.parseOneDescriptor(e);
                this.descs.push(r);
            }
        }),
        (l.ES_Descriptor = function (n) {
            l.Descriptor.call(this, e, n);
        }),
        (l.ES_Descriptor.prototype = new l.Descriptor()),
        (l.ES_Descriptor.prototype.parse = function (e) {
            if (((this.ES_ID = e.readUint16()), (this.flags = e.readUint8()), (this.size -= 3), 128 & this.flags ? ((this.dependsOn_ES_ID = e.readUint16()), (this.size -= 2)) : (this.dependsOn_ES_ID = 0), 64 & this.flags)) {
                var n = e.readUint8();
                (this.URL = e.readString(n)), (this.size -= n + 1);
            } else this.URL = '';
            32 & this.flags ? ((this.OCR_ES_ID = e.readUint16()), (this.size -= 2)) : (this.OCR_ES_ID = 0), this.parseRemainingDescriptors(e);
        }),
        (l.ES_Descriptor.prototype.getOTI = function (e) {
            var r = this.findDescriptor(n);
            return r ? r.oti : 0;
        }),
        (l.ES_Descriptor.prototype.getAudioConfig = function (e) {
            var r = this.findDescriptor(n);
            if (!r) return null;
            var a = r.findDescriptor(i);
            if (!a || !a.data) return null;
            var o = (248 & a.data[0]) >> 3;
            return 31 === o && a.data.length >= 2 && (o = 32 + ((7 & a.data[0]) << 3) + ((224 & a.data[1]) >> 5)), o;
        }),
        (l.DecoderConfigDescriptor = function (e) {
            l.Descriptor.call(this, n, e);
        }),
        (l.DecoderConfigDescriptor.prototype = new l.Descriptor()),
        (l.DecoderConfigDescriptor.prototype.parse = function (e) {
            (this.oti = e.readUint8()), (this.streamType = e.readUint8()), (this.bufferSize = e.readUint24()), (this.maxBitrate = e.readUint32()), (this.avgBitrate = e.readUint32()), (this.size -= 13), this.parseRemainingDescriptors(e);
        }),
        (l.DecoderSpecificInfo = function (e) {
            l.Descriptor.call(this, i, e);
        }),
        (l.DecoderSpecificInfo.prototype = new l.Descriptor()),
        (l.SLConfigDescriptor = function (e) {
            l.Descriptor.call(this, a, e);
        }),
        (l.SLConfigDescriptor.prototype = new l.Descriptor()),
        this
    );
};
n.MPEG4DescriptorParser = l;
var u = {
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
        (u.FullBox.prototype = new u.Box()),
            (u.ContainerBox.prototype = new u.Box()),
            (u.SampleEntry.prototype = new u.Box()),
            (u.TrackGroupTypeBox.prototype = new u.FullBox()),
            u.BASIC_BOXES.forEach(function (e) {
                u.createBoxCtor(e);
            }),
            u.FULL_BOXES.forEach(function (e) {
                u.createFullBoxCtor(e);
            }),
            u.CONTAINER_BOXES.forEach(function (e) {
                u.createContainerBoxCtor(e[0], null, e[1]);
            });
    },
    Box: function (e, n, r) {
        (this.type = e), (this.size = n), (this.uuid = r);
    },
    FullBox: function (e, n, r) {
        u.Box.call(this, e, n, r), (this.flags = 0), (this.version = 0);
    },
    ContainerBox: function (e, n, r) {
        u.Box.call(this, e, n, r), (this.boxes = []);
    },
    SampleEntry: function (e, n, r, i) {
        u.ContainerBox.call(this, e, n), (this.hdr_size = r), (this.start = i);
    },
    SampleGroupEntry: function (e) {
        this.grouping_type = e;
    },
    TrackGroupTypeBox: function (e, n) {
        u.FullBox.call(this, e, n);
    },
    createBoxCtor: function (e, n) {
        u.boxCodes.push(e),
            (u[e + 'Box'] = function (n) {
                u.Box.call(this, e, n);
            }),
            (u[e + 'Box'].prototype = new u.Box()),
            n && (u[e + 'Box'].prototype.parse = n);
    },
    createFullBoxCtor: function (e, n) {
        (u[e + 'Box'] = function (n) {
            u.FullBox.call(this, e, n);
        }),
            (u[e + 'Box'].prototype = new u.FullBox()),
            (u[e + 'Box'].prototype.parse = function (e) {
                this.parseFullHeader(e), n && n.call(this, e);
            });
    },
    addSubBoxArrays: function (e) {
        if (e) {
            this.subBoxNames = e;
            for (var n = e.length, r = 0; r < n; r++) this[e[r] + 's'] = [];
        }
    },
    createContainerBoxCtor: function (e, n, r) {
        (u[e + 'Box'] = function (n) {
            u.ContainerBox.call(this, e, n), u.addSubBoxArrays.call(this, r);
        }),
            (u[e + 'Box'].prototype = new u.ContainerBox()),
            n && (u[e + 'Box'].prototype.parse = n);
    },
    createMediaSampleEntryCtor: function (e, n, r) {
        (u.sampleEntryCodes[e] = []),
            (u[e + 'SampleEntry'] = function (e, n) {
                u.SampleEntry.call(this, e, n), u.addSubBoxArrays.call(this, r);
            }),
            (u[e + 'SampleEntry'].prototype = new u.SampleEntry()),
            n && (u[e + 'SampleEntry'].prototype.parse = n);
    },
    createSampleEntryCtor: function (e, n, r, i) {
        u.sampleEntryCodes[e].push(n),
            (u[n + 'SampleEntry'] = function (r) {
                u[e + 'SampleEntry'].call(this, n, r), u.addSubBoxArrays.call(this, i);
            }),
            (u[n + 'SampleEntry'].prototype = new u[e + 'SampleEntry']()),
            r && (u[n + 'SampleEntry'].prototype.parse = r);
    },
    createEncryptedSampleEntryCtor: function (e, n, r) {
        u.createSampleEntryCtor.call(this, e, n, r, ['sinf']);
    },
    createSampleGroupCtor: function (e, n) {
        (u[e + 'SampleGroupEntry'] = function (n) {
            u.SampleGroupEntry.call(this, e, n);
        }),
            (u[e + 'SampleGroupEntry'].prototype = new u.SampleGroupEntry()),
            n && (u[e + 'SampleGroupEntry'].prototype.parse = n);
    },
    createTrackGroupCtor: function (e, n) {
        (u[e + 'TrackGroupTypeBox'] = function (n) {
            u.TrackGroupTypeBox.call(this, e, n);
        }),
            (u[e + 'TrackGroupTypeBox'].prototype = new u.TrackGroupTypeBox()),
            n && (u[e + 'TrackGroupTypeBox'].prototype.parse = n);
    },
    createUUIDBox: function (e, n, r, i) {
        u.UUIDs.push(e),
            (u.UUIDBoxes[e] = function (i) {
                n ? u.FullBox.call(this, 'uuid', i, e) : r ? u.ContainerBox.call(this, 'uuid', i, e) : u.Box.call(this, 'uuid', i, e);
            }),
            (u.UUIDBoxes[e].prototype = n ? new u.FullBox() : r ? new u.ContainerBox() : new u.Box()),
            i &&
                (n
                    ? (u.UUIDBoxes[e].prototype.parse = function (e) {
                          this.parseFullHeader(e), i && i.call(this, e);
                      })
                    : (u.UUIDBoxes[e].prototype.parse = i));
    }
};
u.initialize(),
    (u.TKHD_FLAG_ENABLED = 1),
    (u.TKHD_FLAG_IN_MOVIE = 2),
    (u.TKHD_FLAG_IN_PREVIEW = 4),
    (u.TFHD_FLAG_BASE_DATA_OFFSET = 1),
    (u.TFHD_FLAG_SAMPLE_DESC = 2),
    (u.TFHD_FLAG_SAMPLE_DUR = 8),
    (u.TFHD_FLAG_SAMPLE_SIZE = 16),
    (u.TFHD_FLAG_SAMPLE_FLAGS = 32),
    (u.TFHD_FLAG_DUR_EMPTY = 65536),
    (u.TFHD_FLAG_DEFAULT_BASE_IS_MOOF = 131072),
    (u.TRUN_FLAGS_DATA_OFFSET = 1),
    (u.TRUN_FLAGS_FIRST_FLAG = 4),
    (u.TRUN_FLAGS_DURATION = 256),
    (u.TRUN_FLAGS_SIZE = 512),
    (u.TRUN_FLAGS_FLAGS = 1024),
    (u.TRUN_FLAGS_CTS_OFFSET = 2048),
    (u.Box.prototype.add = function (e) {
        return this.addBox(new u[e + 'Box']());
    }),
    (u.Box.prototype.addBox = function (e) {
        return this.boxes.push(e), this[e.type + 's'] ? this[e.type + 's'].push(e) : (this[e.type] = e), e;
    }),
    (u.Box.prototype.set = function (e, n) {
        return (this[e] = n), this;
    }),
    (u.Box.prototype.addEntry = function (e, n) {
        var r = n || 'entries';
        return !this[r] && (this[r] = []), this[r].push(e), this;
    });
(n.BoxParser = u),
    (u.parseUUID = function (e) {
        return u.parseHex16(e);
    }),
    (u.parseHex16 = function (e) {
        for (var n = '', r = 0; r < 16; r++) {
            var i = e.readUint8().toString(16);
            n += 1 === i.length ? '0' + i : i;
        }
        return n;
    }),
    (u.parseOneBox = function (e, n, i) {
        var a,
            o,
            s,
            l = e.getPosition(),
            c = 0;
        if (e.getEndPosition() - l < 8) return r.debug('BoxParser', 'Not enough data in stream to parse the type and size of the box'), { code: u.ERR_NOT_ENOUGH_DATA };
        if (i && i < 8) return r.debug('BoxParser', 'Not enough bytes left in the parent box to parse a new box'), { code: u.ERR_NOT_ENOUGH_DATA };
        var d = e.readUint32(),
            f = e.readString(4),
            p = f;
        if ((r.debug('BoxParser', "Found box of type '" + f + "' and size " + d + ' at position ' + l), (c = 8), 'uuid' == f)) {
            if (e.getEndPosition() - e.getPosition() < 16 || i - c < 16) return e.seek(l), r.debug('BoxParser', 'Not enough bytes left in the parent box to parse a UUID box'), { code: u.ERR_NOT_ENOUGH_DATA };
            (s = u.parseUUID(e)), (c += 16), (p = s);
        }
        if (1 == d) {
            if (e.getEndPosition() - e.getPosition() < 8 || (i && i - c < 8)) return e.seek(l), r.warn('BoxParser', 'Not enough data in stream to parse the extended size of the "' + f + '" box'), { code: u.ERR_NOT_ENOUGH_DATA };
            (d = e.readUint64()), (c += 8);
        } else if (0 === d) {
            if (i) d = i;
            else if ('mdat' !== f)
                return (
                    r.error('BoxParser', "Unlimited box size not supported for type: '" + f + "'"),
                    (a = new u.Box(f, d)),
                    {
                        code: u.OK,
                        box: a,
                        size: a.size
                    }
                );
        }
        return 0 !== d && d < c
            ? (r.error('BoxParser', 'Box of type ' + f + ' has an invalid size ' + d + ' (too small to be a box)'),
              {
                  code: u.ERR_NOT_ENOUGH_DATA,
                  type: f,
                  size: d,
                  hdr_size: c,
                  start: l
              })
            : 0 !== d && i && d > i
              ? (r.error('BoxParser', "Box of type '" + f + "' has a size " + d + ' greater than its container size ' + i),
                {
                    code: u.ERR_NOT_ENOUGH_DATA,
                    type: f,
                    size: d,
                    hdr_size: c,
                    start: l
                })
              : 0 !== d && l + d > e.getEndPosition()
                ? (e.seek(l),
                  r.info('BoxParser', "Not enough data in stream to parse the entire '" + f + "' box"),
                  {
                      code: u.ERR_NOT_ENOUGH_DATA,
                      type: f,
                      size: d,
                      hdr_size: c,
                      start: l
                  })
                : n
                  ? {
                        code: u.OK,
                        type: f,
                        size: d,
                        hdr_size: c,
                        start: l
                    }
                  : (u[f + 'Box'] ? (a = new u[f + 'Box'](d)) : 'uuid' !== f ? (r.warn('BoxParser', "Unknown box type: '" + f + "'"), ((a = new u.Box(f, d)).has_unparsed_data = !0)) : u.UUIDBoxes[s] ? (a = new u.UUIDBoxes[s](d)) : (r.warn('BoxParser', "Unknown uuid type: '" + s + "'"), ((a = new u.Box(f, d)).uuid = s), (a.has_unparsed_data = !0)),
                    (a.hdr_size = c),
                    (a.start = l),
                    a.write === u.Box.prototype.write && 'mdat' !== a.type && (r.info('BoxParser', "'" + p + "' box writing not yet implemented, keeping unparsed data in memory for later write"), a.parseDataAndRewind(e)),
                    a.parse(e),
                    (o = e.getPosition() - (a.start + a.size)) < 0 ? (r.warn('BoxParser', "Parsing of box '" + p + "' did not read the entire indicated box data size (missing " + -o + ' bytes), seeking forward'), e.seek(a.start + a.size)) : o > 0 && (r.error('BoxParser', "Parsing of box '" + p + "' read " + o + ' more bytes than the indicated box data size, seeking backwards'), 0 !== a.size && e.seek(a.start + a.size)),
                    {
                        code: u.OK,
                        box: a,
                        size: a.size
                    });
    }),
    (u.Box.prototype.parse = function (e) {
        'mdat' != this.type ? (this.data = e.readUint8Array(this.size - this.hdr_size)) : 0 === this.size ? e.seek(e.getEndPosition()) : e.seek(this.start + this.size);
    }),
    (u.Box.prototype.parseDataAndRewind = function (e) {
        (this.data = e.readUint8Array(this.size - this.hdr_size)), (e.position -= this.size - this.hdr_size);
    }),
    (u.FullBox.prototype.parseDataAndRewind = function (e) {
        this.parseFullHeader(e), (this.data = e.readUint8Array(this.size - this.hdr_size)), (this.hdr_size -= 4), (e.position -= this.size - this.hdr_size);
    }),
    (u.FullBox.prototype.parseFullHeader = function (e) {
        (this.version = e.readUint8()), (this.flags = e.readUint24()), (this.hdr_size += 4);
    }),
    (u.FullBox.prototype.parse = function (e) {
        this.parseFullHeader(e), (this.data = e.readUint8Array(this.size - this.hdr_size));
    }),
    (u.ContainerBox.prototype.parse = function (e) {
        for (; e.getPosition() < this.start + this.size; ) {
            if ((n = u.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== u.OK) return;
            if (((i = n.box), this.boxes.push(i), this.subBoxNames && -1 != this.subBoxNames.indexOf(i.type))) this[this.subBoxNames[this.subBoxNames.indexOf(i.type)] + 's'].push(i);
            else {
                var n,
                    i,
                    a = 'uuid' !== i.type ? i.type : i.uuid;
                this[a] ? r.warn('Box of type ' + a + ' already stored in field of this type') : (this[a] = i);
            }
        }
    }),
    (u.Box.prototype.parseLanguage = function (e) {
        this.language = e.readUint16();
        var n = [];
        (n[0] = (this.language >> 10) & 31), (n[1] = (this.language >> 5) & 31), (n[2] = 31 & this.language), (this.languageString = String.fromCharCode(n[0] + 96, n[1] + 96, n[2] + 96));
    }),
    (u.SAMPLE_ENTRY_TYPE_VISUAL = 'Visual'),
    (u.SAMPLE_ENTRY_TYPE_AUDIO = 'Audio'),
    (u.SAMPLE_ENTRY_TYPE_HINT = 'Hint'),
    (u.SAMPLE_ENTRY_TYPE_METADATA = 'Metadata'),
    (u.SAMPLE_ENTRY_TYPE_SUBTITLE = 'Subtitle'),
    (u.SAMPLE_ENTRY_TYPE_SYSTEM = 'System'),
    (u.SAMPLE_ENTRY_TYPE_TEXT = 'Text'),
    (u.SampleEntry.prototype.parseHeader = function (e) {
        e.readUint8Array(6), (this.data_reference_index = e.readUint16()), (this.hdr_size += 8);
    }),
    (u.SampleEntry.prototype.parse = function (e) {
        this.parseHeader(e), (this.data = e.readUint8Array(this.size - this.hdr_size));
    }),
    (u.SampleEntry.prototype.parseDataAndRewind = function (e) {
        this.parseHeader(e), (this.data = e.readUint8Array(this.size - this.hdr_size)), (this.hdr_size -= 8), (e.position -= this.size - this.hdr_size);
    }),
    (u.SampleEntry.prototype.parseFooter = function (e) {
        u.ContainerBox.prototype.parse.call(this, e);
    }),
    u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_HINT),
    u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_METADATA),
    u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SUBTITLE),
    u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SYSTEM),
    u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_TEXT),
    u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, function (e) {
        var n;
        this.parseHeader(e), e.readUint16(), e.readUint16(), e.readUint32Array(3), (this.width = e.readUint16()), (this.height = e.readUint16()), (this.horizresolution = e.readUint32()), (this.vertresolution = e.readUint32()), e.readUint32(), (this.frame_count = e.readUint16()), (n = Math.min(31, e.readUint8())), (this.compressorname = e.readString(n)), n < 31 && e.readString(31 - n), (this.depth = e.readUint16()), e.readUint16(), this.parseFooter(e);
    }),
    u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_AUDIO, function (e) {
        this.parseHeader(e), e.readUint32Array(2), (this.channel_count = e.readUint16()), (this.samplesize = e.readUint16()), e.readUint16(), e.readUint16(), (this.samplerate = e.readUint32() / 65536), this.parseFooter(e);
    }),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'avc1'),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'avc2'),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'avc3'),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'avc4'),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'av01'),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'hvc1'),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'hev1'),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'vvc1'),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'vvi1'),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'vvs1'),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'vvcN'),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'vp08'),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'vp09'),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_AUDIO, 'mp4a'),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_AUDIO, 'ac-3'),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_AUDIO, 'ec-3'),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_AUDIO, 'Opus'),
    u.createEncryptedSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'encv'),
    u.createEncryptedSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_AUDIO, 'enca'),
    u.createEncryptedSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SUBTITLE, 'encu'),
    u.createEncryptedSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SYSTEM, 'encs'),
    u.createEncryptedSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_TEXT, 'enct'),
    u.createEncryptedSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_METADATA, 'encm'),
    u.createBoxCtor('a1lx', function (e) {
        var n = ((1 & (1 & e.readUint8())) + 1) * 16;
        this.layer_size = [];
        for (var r = 0; r < 3; r++) 16 == n ? (this.layer_size[r] = e.readUint16()) : (this.layer_size[r] = e.readUint32());
    }),
    u.createBoxCtor('a1op', function (e) {
        this.op_index = e.readUint8();
    }),
    u.createFullBoxCtor('auxC', function (e) {
        this.aux_type = e.readCString();
        var n = this.size - this.hdr_size - (this.aux_type.length + 1);
        this.aux_subtype = e.readUint8Array(n);
    }),
    u.createBoxCtor('av1C', function (e) {
        var n = e.readUint8();
        if ((n >> 7) & !1) {
            r.error('av1C marker problem');
            return;
        }
        if (((this.version = 127 & n), 1 !== this.version)) {
            r.error('av1C version ' + this.version + ' not supported');
            return;
        }
        if (((n = e.readUint8()), (this.seq_profile = (n >> 5) & 7), (this.seq_level_idx_0 = 31 & n), (n = e.readUint8()), (this.seq_tier_0 = (n >> 7) & 1), (this.high_bitdepth = (n >> 6) & 1), (this.twelve_bit = (n >> 5) & 1), (this.monochrome = (n >> 4) & 1), (this.chroma_subsampling_x = (n >> 3) & 1), (this.chroma_subsampling_y = (n >> 2) & 1), (this.chroma_sample_position = 3 & n), (n = e.readUint8()), (this.reserved_1 = (n >> 5) & 7), 0 !== this.reserved_1)) {
            r.error('av1C reserved_1 parsing problem');
            return;
        }
        if (((this.initial_presentation_delay_present = (n >> 4) & 1), 1 === this.initial_presentation_delay_present)) this.initial_presentation_delay_minus_one = 15 & n;
        else if (((this.reserved_2 = 15 & n), 0 !== this.reserved_2)) {
            r.error('av1C reserved_2 parsing problem');
            return;
        }
        var i = this.size - this.hdr_size - 4;
        this.configOBUs = e.readUint8Array(i);
    }),
    u.createBoxCtor('avcC', function (e) {
        var n, r;
        for (n = 0, this.configurationVersion = e.readUint8(), this.AVCProfileIndication = e.readUint8(), this.profile_compatibility = e.readUint8(), this.AVCLevelIndication = e.readUint8(), this.lengthSizeMinusOne = 3 & e.readUint8(), this.nb_SPS_nalus = 31 & e.readUint8(), r = this.size - this.hdr_size - 6, this.SPS = []; n < this.nb_SPS_nalus; n++) (this.SPS[n] = {}), (this.SPS[n].length = e.readUint16()), (this.SPS[n].nalu = e.readUint8Array(this.SPS[n].length)), (r -= 2 + this.SPS[n].length);
        for (this.nb_PPS_nalus = e.readUint8(), r--, this.PPS = [], n = 0; n < this.nb_PPS_nalus; n++) (this.PPS[n] = {}), (this.PPS[n].length = e.readUint16()), (this.PPS[n].nalu = e.readUint8Array(this.PPS[n].length)), (r -= 2 + this.PPS[n].length);
        r > 0 && (this.ext = e.readUint8Array(r));
    }),
    u.createBoxCtor('btrt', function (e) {
        (this.bufferSizeDB = e.readUint32()), (this.maxBitrate = e.readUint32()), (this.avgBitrate = e.readUint32());
    }),
    u.createBoxCtor('clap', function (e) {
        (this.cleanApertureWidthN = e.readUint32()), (this.cleanApertureWidthD = e.readUint32()), (this.cleanApertureHeightN = e.readUint32()), (this.cleanApertureHeightD = e.readUint32()), (this.horizOffN = e.readUint32()), (this.horizOffD = e.readUint32()), (this.vertOffN = e.readUint32()), (this.vertOffD = e.readUint32());
    }),
    u.createBoxCtor('clli', function (e) {
        (this.max_content_light_level = e.readUint16()), (this.max_pic_average_light_level = e.readUint16());
    }),
    u.createFullBoxCtor('co64', function (e) {
        var n, r;
        if (((n = e.readUint32()), (this.chunk_offsets = []), 0 === this.version)) for (r = 0; r < n; r++) this.chunk_offsets.push(e.readUint64());
    }),
    u.createFullBoxCtor('CoLL', function (e) {
        (this.maxCLL = e.readUint16()), (this.maxFALL = e.readUint16());
    }),
    u.createBoxCtor('colr', function (e) {
        if (((this.colour_type = e.readString(4)), 'nclx' === this.colour_type)) {
            (this.colour_primaries = e.readUint16()), (this.transfer_characteristics = e.readUint16()), (this.matrix_coefficients = e.readUint16());
            var n = e.readUint8();
            this.full_range_flag = n >> 7;
        } else 'rICC' === this.colour_type ? (this.ICC_profile = e.readUint8Array(this.size - 4)) : 'prof' === this.colour_type && (this.ICC_profile = e.readUint8Array(this.size - 4));
    }),
    u.createFullBoxCtor('cprt', function (e) {
        this.parseLanguage(e), (this.notice = e.readCString());
    }),
    u.createFullBoxCtor('cslg', function (e) {
        0 === this.version && ((this.compositionToDTSShift = e.readInt32()), (this.leastDecodeToDisplayDelta = e.readInt32()), (this.greatestDecodeToDisplayDelta = e.readInt32()), (this.compositionStartTime = e.readInt32()), (this.compositionEndTime = e.readInt32()));
    }),
    u.createFullBoxCtor('ctts', function (e) {
        if (((n = e.readUint32()), (this.sample_counts = []), (this.sample_offsets = []), 0 === this.version))
            for (i = 0; i < n; i++) {
                this.sample_counts.push(e.readUint32());
                var n,
                    i,
                    a = e.readInt32();
                a < 0 && r.warn('BoxParser', 'ctts box uses negative values without using version 1'), this.sample_offsets.push(a);
            }
        else if (1 == this.version) for (i = 0; i < n; i++) this.sample_counts.push(e.readUint32()), this.sample_offsets.push(e.readInt32());
    }),
    u.createBoxCtor('dac3', function (e) {
        var n = e.readUint8(),
            r = e.readUint8(),
            i = e.readUint8();
        (this.fscod = n >> 6), (this.bsid = (n >> 1) & 31), (this.bsmod = ((1 & n) << 2) | ((r >> 6) & 3)), (this.acmod = (r >> 3) & 7), (this.lfeon = (r >> 2) & 1), (this.bit_rate_code = (3 & r) | ((i >> 5) & 7));
    }),
    u.createBoxCtor('dec3', function (e) {
        var n = e.readUint16();
        (this.data_rate = n >> 3), (this.num_ind_sub = 7 & n), (this.ind_subs = []);
        for (var r = 0; r < this.num_ind_sub + 1; r++) {
            var i = {};
            this.ind_subs.push(i);
            var a = e.readUint8(),
                o = e.readUint8(),
                s = e.readUint8();
            (i.fscod = a >> 6), (i.bsid = (a >> 1) & 31), (i.bsmod = ((1 & a) << 4) | ((o >> 4) & 15)), (i.acmod = (o >> 1) & 7), (i.lfeon = 1 & o), (i.num_dep_sub = (s >> 1) & 15), i.num_dep_sub > 0 && (i.chan_loc = ((1 & s) << 8) | e.readUint8());
        }
    }),
    u.createFullBoxCtor('dfLa', function (e) {
        var n = 127,
            r = 128,
            i = [],
            a = ['STREAMINFO', 'PADDING', 'APPLICATION', 'SEEKTABLE', 'VORBIS_COMMENT', 'CUESHEET', 'PICTURE', 'RESERVED'];
        for (this.parseFullHeader(e); ; ) {
            var o = e.readUint8(),
                s = Math.min(o & n, a.length - 1);
            if ((s ? e.readUint8Array(e.readUint24()) : (e.readUint8Array(13), (this.samplerate = e.readUint32() >> 12), e.readUint8Array(20)), i.push(a[s]), o & r)) break;
        }
        this.numMetadataBlocks = i.length + ' (' + i.join(', ') + ')';
    }),
    u.createBoxCtor('dimm', function (e) {
        this.bytessent = e.readUint64();
    }),
    u.createBoxCtor('dmax', function (e) {
        this.time = e.readUint32();
    }),
    u.createBoxCtor('dmed', function (e) {
        this.bytessent = e.readUint64();
    }),
    u.createBoxCtor('dOps', function (e) {
        if (((this.Version = e.readUint8()), (this.OutputChannelCount = e.readUint8()), (this.PreSkip = e.readUint16()), (this.InputSampleRate = e.readUint32()), (this.OutputGain = e.readInt16()), (this.ChannelMappingFamily = e.readUint8()), 0 !== this.ChannelMappingFamily)) {
            (this.StreamCount = e.readUint8()), (this.CoupledCount = e.readUint8()), (this.ChannelMapping = []);
            for (var n = 0; n < this.OutputChannelCount; n++) this.ChannelMapping[n] = e.readUint8();
        }
    }),
    u.createFullBoxCtor('dref', function (e) {
        this.entries = [];
        for (var n, r, i = e.readUint32(), a = 0; a < i; a++) {
            if ((n = u.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== u.OK) return;
            (r = n.box), this.entries.push(r);
        }
    }),
    u.createBoxCtor('drep', function (e) {
        this.bytessent = e.readUint64();
    }),
    u.createFullBoxCtor('elng', function (e) {
        this.extended_language = e.readString(this.size - this.hdr_size);
    }),
    u.createFullBoxCtor('elst', function (e) {
        this.entries = [];
        for (var n = e.readUint32(), r = 0; r < n; r++) {
            var i = {};
            this.entries.push(i), 1 === this.version ? ((i.segment_duration = e.readUint64()), (i.media_time = e.readInt64())) : ((i.segment_duration = e.readUint32()), (i.media_time = e.readInt32())), (i.media_rate_integer = e.readInt16()), (i.media_rate_fraction = e.readInt16());
        }
    }),
    u.createFullBoxCtor('emsg', function (e) {
        1 == this.version ? ((this.timescale = e.readUint32()), (this.presentation_time = e.readUint64()), (this.event_duration = e.readUint32()), (this.id = e.readUint32()), (this.scheme_id_uri = e.readCString()), (this.value = e.readCString())) : ((this.scheme_id_uri = e.readCString()), (this.value = e.readCString()), (this.timescale = e.readUint32()), (this.presentation_time_delta = e.readUint32()), (this.event_duration = e.readUint32()), (this.id = e.readUint32()));
        var n = this.size - this.hdr_size - (16 + (this.scheme_id_uri.length + 1) + (this.value.length + 1));
        1 == this.version && (n -= 4), (this.message_data = e.readUint8Array(n));
    }),
    u.createFullBoxCtor('esds', function (e) {
        var n = e.readUint8Array(this.size - this.hdr_size);
        if (void 0 !== l) {
            var r = new l();
            this.esd = r.parseOneDescriptor(new a(n.buffer, 0, a.BIG_ENDIAN));
        }
    }),
    u.createBoxCtor('fiel', function (e) {
        (this.fieldCount = e.readUint8()), (this.fieldOrdering = e.readUint8());
    }),
    u.createBoxCtor('frma', function (e) {
        this.data_format = e.readString(4);
    }),
    u.createBoxCtor('ftyp', function (e) {
        var n = this.size - this.hdr_size;
        (this.major_brand = e.readString(4)), (this.minor_version = e.readUint32()), (n -= 8), (this.compatible_brands = []);
        for (var r = 0; n >= 4; ) (this.compatible_brands[r] = e.readString(4)), (n -= 4), r++;
    }),
    u.createFullBoxCtor('hdlr', function (e) {
        0 === this.version && (e.readUint32(), (this.handler = e.readString(4)), e.readUint32Array(3), (this.name = e.readString(this.size - this.hdr_size - 20)), '\0' === this.name[this.name.length - 1] && (this.name = this.name.slice(0, -1)));
    }),
    u.createBoxCtor('hvcC', function (e) {
        (this.configurationVersion = e.readUint8()), (a = e.readUint8()), (this.general_profile_space = a >> 6), (this.general_tier_flag = (32 & a) >> 5), (this.general_profile_idc = 31 & a), (this.general_profile_compatibility = e.readUint32()), (this.general_constraint_indicator = e.readUint8Array(6)), (this.general_level_idc = e.readUint8()), (this.min_spatial_segmentation_idc = 4095 & e.readUint16()), (this.parallelismType = 3 & e.readUint8()), (this.chroma_format_idc = 3 & e.readUint8()), (this.bit_depth_luma_minus8 = 7 & e.readUint8()), (this.bit_depth_chroma_minus8 = 7 & e.readUint8()), (this.avgFrameRate = e.readUint16()), (a = e.readUint8()), (this.constantFrameRate = a >> 6), (this.numTemporalLayers = (13 & a) >> 3), (this.temporalIdNested = (4 & a) >> 2), (this.lengthSizeMinusOne = 3 & a), (this.nalu_arrays = []);
        var n,
            r,
            i,
            a,
            o = e.readUint8();
        for (n = 0; n < o; n++) {
            var s = [];
            this.nalu_arrays.push(s), (a = e.readUint8()), (s.completeness = (128 & a) >> 7), (s.nalu_type = 63 & a);
            var l = e.readUint16();
            for (r = 0; r < l; r++) {
                var u = {};
                s.push(u), (i = e.readUint16()), (u.data = e.readUint8Array(i));
            }
        }
    }),
    u.createFullBoxCtor('iinf', function (e) {
        var n;
        0 === this.version ? (this.entry_count = e.readUint16()) : (this.entry_count = e.readUint32()), (this.item_infos = []);
        for (var i = 0; i < this.entry_count; i++) {
            if ((n = u.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== u.OK) return;
            'infe' !== n.box.type && r.error('BoxParser', "Expected 'infe' box, got " + n.box.type), (this.item_infos[i] = n.box);
        }
    }),
    u.createFullBoxCtor('iloc', function (e) {
        (n = e.readUint8()), (this.offset_size = (n >> 4) & 15), (this.length_size = 15 & n), (n = e.readUint8()), (this.base_offset_size = (n >> 4) & 15), 1 === this.version || 2 === this.version ? (this.index_size = 15 & n) : (this.index_size = 0), (this.items = []);
        var n,
            r = 0;
        if (this.version < 2) r = e.readUint16();
        else if (2 === this.version) r = e.readUint32();
        else throw 'version of iloc box not supported';
        for (var i = 0; i < r; i++) {
            var a = {};
            if ((this.items.push(a), this.version < 2)) a.item_ID = e.readUint16();
            else if (2 === this.version) a.item_ID = e.readUint16();
            else throw 'version of iloc box not supported';
            switch ((1 === this.version || 2 === this.version ? (a.construction_method = 15 & e.readUint16()) : (a.construction_method = 0), (a.data_reference_index = e.readUint16()), this.base_offset_size)) {
                case 0:
                    a.base_offset = 0;
                    break;
                case 4:
                    a.base_offset = e.readUint32();
                    break;
                case 8:
                    a.base_offset = e.readUint64();
                    break;
                default:
                    throw 'Error reading base offset size';
            }
            var o = e.readUint16();
            a.extents = [];
            for (var s = 0; s < o; s++) {
                var l = {};
                if ((a.extents.push(l), 1 === this.version || 2 === this.version))
                    switch (this.index_size) {
                        case 0:
                            l.extent_index = 0;
                            break;
                        case 4:
                            l.extent_index = e.readUint32();
                            break;
                        case 8:
                            l.extent_index = e.readUint64();
                            break;
                        default:
                            throw 'Error reading extent index';
                    }
                switch (this.offset_size) {
                    case 0:
                        l.extent_offset = 0;
                        break;
                    case 4:
                        l.extent_offset = e.readUint32();
                        break;
                    case 8:
                        l.extent_offset = e.readUint64();
                        break;
                    default:
                        throw 'Error reading extent index';
                }
                switch (this.length_size) {
                    case 0:
                        l.extent_length = 0;
                        break;
                    case 4:
                        l.extent_length = e.readUint32();
                        break;
                    case 8:
                        l.extent_length = e.readUint64();
                        break;
                    default:
                        throw 'Error reading extent index';
                }
            }
        }
    }),
    u.createBoxCtor('imir', function (e) {
        var n = e.readUint8();
        (this.reserved = n >> 7), (this.axis = 1 & n);
    }),
    u.createFullBoxCtor('infe', function (e) {
        if (((0 === this.version || 1 === this.version) && ((this.item_ID = e.readUint16()), (this.item_protection_index = e.readUint16()), (this.item_name = e.readCString()), (this.content_type = e.readCString()), (this.content_encoding = e.readCString())), 1 === this.version)) {
            (this.extension_type = e.readString(4)), r.warn('BoxParser', 'Cannot parse extension type'), e.seek(this.start + this.size);
            return;
        }
        this.version >= 2 && (2 === this.version ? (this.item_ID = e.readUint16()) : 3 === this.version && (this.item_ID = e.readUint32()), (this.item_protection_index = e.readUint16()), (this.item_type = e.readString(4)), (this.item_name = e.readCString()), 'mime' === this.item_type ? ((this.content_type = e.readCString()), (this.content_encoding = e.readCString())) : 'uri ' === this.item_type && (this.item_uri_type = e.readCString()));
    }),
    u.createFullBoxCtor('ipma', function (e) {
        var n, r;
        for (n = 0, entry_count = e.readUint32(), this.associations = []; n < entry_count; n++) {
            var i = {};
            this.associations.push(i), this.version < 1 ? (i.id = e.readUint16()) : (i.id = e.readUint32());
            var a = e.readUint8();
            for (r = 0, i.props = []; r < a; r++) {
                var o = e.readUint8(),
                    s = {};
                i.props.push(s), (s.essential = (128 & o) >> 7 == 1), 1 & this.flags ? (s.property_index = ((127 & o) << 8) | e.readUint8()) : (s.property_index = 127 & o);
            }
        }
    }),
    u.createFullBoxCtor('iref', function (e) {
        var n, i;
        for (this.references = []; e.getPosition() < this.start + this.size; ) {
            if ((n = u.parseOneBox(e, !0, this.size - (e.getPosition() - this.start))).code !== u.OK) return;
            (i = 0 === this.version ? new u.SingleItemTypeReferenceBox(n.type, n.size, n.hdr_size, n.start) : new u.SingleItemTypeReferenceBoxLarge(n.type, n.size, n.hdr_size, n.start)).write === u.Box.prototype.write && 'mdat' !== i.type && (r.warn('BoxParser', i.type + ' box writing not yet implemented, keeping unparsed data in memory for later write'), i.parseDataAndRewind(e)), i.parse(e), this.references.push(i);
        }
    }),
    u.createBoxCtor('irot', function (e) {
        this.angle = 3 & e.readUint8();
    }),
    u.createFullBoxCtor('ispe', function (e) {
        (this.image_width = e.readUint32()), (this.image_height = e.readUint32());
    }),
    u.createFullBoxCtor('kind', function (e) {
        (this.schemeURI = e.readCString()), (this.value = e.readCString());
    }),
    u.createFullBoxCtor('leva', function (e) {
        var n = e.readUint8();
        this.levels = [];
        for (var i = 0; i < n; i++) {
            var a = {};
            (this.levels[i] = a), (a.track_ID = e.readUint32());
            var o = e.readUint8();
            switch (((a.padding_flag = o >> 7), (a.assignment_type = 127 & o), a.assignment_type)) {
                case 0:
                    a.grouping_type = e.readString(4);
                    break;
                case 1:
                    (a.grouping_type = e.readString(4)), (a.grouping_type_parameter = e.readUint32());
                    break;
                case 2:
                case 3:
                    break;
                case 4:
                    a.sub_track_id = e.readUint32();
                    break;
                default:
                    r.warn('BoxParser', 'Unknown leva assignement type');
            }
        }
    }),
    u.createBoxCtor('lsel', function (e) {
        this.layer_id = e.readUint16();
    }),
    u.createBoxCtor('maxr', function (e) {
        (this.period = e.readUint32()), (this.bytes = e.readUint32());
    }),
    u.createBoxCtor('mdcv', function (e) {
        (this.display_primaries = []), (this.display_primaries[0] = {}), (this.display_primaries[0].x = e.readUint16()), (this.display_primaries[0].y = e.readUint16()), (this.display_primaries[1] = {}), (this.display_primaries[1].x = e.readUint16()), (this.display_primaries[1].y = e.readUint16()), (this.display_primaries[2] = {}), (this.display_primaries[2].x = e.readUint16()), (this.display_primaries[2].y = e.readUint16()), (this.white_point = {}), (this.white_point.x = e.readUint16()), (this.white_point.y = e.readUint16()), (this.max_display_mastering_luminance = e.readUint32()), (this.min_display_mastering_luminance = e.readUint32());
    }),
    u.createFullBoxCtor('mdhd', function (e) {
        1 == this.version ? ((this.creation_time = e.readUint64()), (this.modification_time = e.readUint64()), (this.timescale = e.readUint32()), (this.duration = e.readUint64())) : ((this.creation_time = e.readUint32()), (this.modification_time = e.readUint32()), (this.timescale = e.readUint32()), (this.duration = e.readUint32())), this.parseLanguage(e), e.readUint16();
    }),
    u.createFullBoxCtor('mehd', function (e) {
        1 & this.flags && (r.warn('BoxParser', 'mehd box incorrectly uses flags set to 1, converting version to 1'), (this.version = 1)), 1 == this.version ? (this.fragment_duration = e.readUint64()) : (this.fragment_duration = e.readUint32());
    }),
    u.createFullBoxCtor('meta', function (e) {
        (this.boxes = []), u.ContainerBox.prototype.parse.call(this, e);
    }),
    u.createFullBoxCtor('mfhd', function (e) {
        this.sequence_number = e.readUint32();
    }),
    u.createFullBoxCtor('mfro', function (e) {
        this._size = e.readUint32();
    }),
    u.createFullBoxCtor('mvhd', function (e) {
        1 == this.version ? ((this.creation_time = e.readUint64()), (this.modification_time = e.readUint64()), (this.timescale = e.readUint32()), (this.duration = e.readUint64())) : ((this.creation_time = e.readUint32()), (this.modification_time = e.readUint32()), (this.timescale = e.readUint32()), (this.duration = e.readUint32())), (this.rate = e.readUint32()), (this.volume = e.readUint16() >> 8), e.readUint16(), e.readUint32Array(2), (this.matrix = e.readUint32Array(9)), e.readUint32Array(6), (this.next_track_id = e.readUint32());
    }),
    u.createBoxCtor('npck', function (e) {
        this.packetssent = e.readUint32();
    }),
    u.createBoxCtor('nump', function (e) {
        this.packetssent = e.readUint64();
    }),
    u.createFullBoxCtor('padb', function (e) {
        var n = e.readUint32();
        this.padbits = [];
        for (var r = 0; r < Math.floor((n + 1) / 2); r++) this.padbits = e.readUint8();
    }),
    u.createBoxCtor('pasp', function (e) {
        (this.hSpacing = e.readUint32()), (this.vSpacing = e.readUint32());
    }),
    u.createBoxCtor('payl', function (e) {
        this.text = e.readString(this.size - this.hdr_size);
    }),
    u.createBoxCtor('payt', function (e) {
        this.payloadID = e.readUint32();
        var n = e.readUint8();
        this.rtpmap_string = e.readString(n);
    }),
    u.createFullBoxCtor('pdin', function (e) {
        var n = (this.size - this.hdr_size) / 8;
        (this.rate = []), (this.initial_delay = []);
        for (var r = 0; r < n; r++) (this.rate[r] = e.readUint32()), (this.initial_delay[r] = e.readUint32());
    }),
    u.createFullBoxCtor('pitm', function (e) {
        0 === this.version ? (this.item_id = e.readUint16()) : (this.item_id = e.readUint32());
    }),
    u.createFullBoxCtor('pixi', function (e) {
        var n;
        for (n = 0, this.num_channels = e.readUint8(), this.bits_per_channels = []; n < this.num_channels; n++) this.bits_per_channels[n] = e.readUint8();
    }),
    u.createBoxCtor('pmax', function (e) {
        this.bytes = e.readUint32();
    }),
    u.createFullBoxCtor('prft', function (e) {
        (this.ref_track_id = e.readUint32()), (this.ntp_timestamp = e.readUint64()), 0 === this.version ? (this.media_time = e.readUint32()) : (this.media_time = e.readUint64());
    }),
    u.createFullBoxCtor('pssh', function (e) {
        if (((this.system_id = u.parseHex16(e)), this.version > 0)) {
            var n = e.readUint32();
            this.kid = [];
            for (var r = 0; r < n; r++) this.kid[r] = u.parseHex16(e);
        }
        var i = e.readUint32();
        i > 0 && (this.data = e.readUint8Array(i));
    }),
    u.createFullBoxCtor('clef', function (e) {
        (this.width = e.readUint32()), (this.height = e.readUint32());
    }),
    u.createFullBoxCtor('enof', function (e) {
        (this.width = e.readUint32()), (this.height = e.readUint32());
    }),
    u.createFullBoxCtor('prof', function (e) {
        (this.width = e.readUint32()), (this.height = e.readUint32());
    }),
    u.createContainerBoxCtor('tapt', null, ['clef', 'prof', 'enof']),
    u.createBoxCtor('rtp ', function (e) {
        (this.descriptionformat = e.readString(4)), (this.sdptext = e.readString(this.size - this.hdr_size - 4));
    }),
    u.createFullBoxCtor('saio', function (e) {
        1 & this.flags && ((this.aux_info_type = e.readUint32()), (this.aux_info_type_parameter = e.readUint32()));
        var n = e.readUint32();
        this.offset = [];
        for (var r = 0; r < n; r++) 0 === this.version ? (this.offset[r] = e.readUint32()) : (this.offset[r] = e.readUint64());
    }),
    u.createFullBoxCtor('saiz', function (e) {
        1 & this.flags && ((this.aux_info_type = e.readUint32()), (this.aux_info_type_parameter = e.readUint32())), (this.default_sample_info_size = e.readUint8());
        var n = e.readUint32();
        if (((this.sample_info_size = []), 0 === this.default_sample_info_size)) for (var r = 0; r < n; r++) this.sample_info_size[r] = e.readUint8();
    }),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_METADATA, 'mett', function (e) {
        this.parseHeader(e), (this.content_encoding = e.readCString()), (this.mime_format = e.readCString()), this.parseFooter(e);
    }),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_METADATA, 'metx', function (e) {
        this.parseHeader(e), (this.content_encoding = e.readCString()), (this.namespace = e.readCString()), (this.schema_location = e.readCString()), this.parseFooter(e);
    }),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SUBTITLE, 'sbtt', function (e) {
        this.parseHeader(e), (this.content_encoding = e.readCString()), (this.mime_format = e.readCString()), this.parseFooter(e);
    }),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SUBTITLE, 'stpp', function (e) {
        this.parseHeader(e), (this.namespace = e.readCString()), (this.schema_location = e.readCString()), (this.auxiliary_mime_types = e.readCString()), this.parseFooter(e);
    }),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SUBTITLE, 'stxt', function (e) {
        this.parseHeader(e), (this.content_encoding = e.readCString()), (this.mime_format = e.readCString()), this.parseFooter(e);
    }),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SUBTITLE, 'tx3g', function (e) {
        this.parseHeader(e), (this.displayFlags = e.readUint32()), (this.horizontal_justification = e.readInt8()), (this.vertical_justification = e.readInt8()), (this.bg_color_rgba = e.readUint8Array(4)), (this.box_record = e.readInt16Array(4)), (this.style_record = e.readUint8Array(12)), this.parseFooter(e);
    }),
    u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_METADATA, 'wvtt', function (e) {
        this.parseHeader(e), this.parseFooter(e);
    }),
    u.createSampleGroupCtor('alst', function (e) {
        var n,
            r = e.readUint16();
        for (n = 0, this.first_output_sample = e.readUint16(), this.sample_offset = []; n < r; n++) this.sample_offset[n] = e.readUint32();
        var i = this.description_length - 4 - 4 * r;
        for (n = 0, this.num_output_samples = [], this.num_total_samples = []; n < i / 4; n++) (this.num_output_samples[n] = e.readUint16()), (this.num_total_samples[n] = e.readUint16());
    }),
    u.createSampleGroupCtor('avll', function (e) {
        (this.layerNumber = e.readUint8()), (this.accurateStatisticsFlag = e.readUint8()), (this.avgBitRate = e.readUint16()), (this.avgFrameRate = e.readUint16());
    }),
    u.createSampleGroupCtor('avss', function (e) {
        (this.subSequenceIdentifier = e.readUint16()), (this.layerNumber = e.readUint8());
        var n = e.readUint8();
        (this.durationFlag = n >> 7), (this.avgRateFlag = (n >> 6) & 1), this.durationFlag && (this.duration = e.readUint32()), this.avgRateFlag && ((this.accurateStatisticsFlag = e.readUint8()), (this.avgBitRate = e.readUint16()), (this.avgFrameRate = e.readUint16())), (this.dependency = []);
        for (var r = e.readUint8(), i = 0; i < r; i++) {
            var a = {};
            this.dependency.push(a), (a.subSeqDirectionFlag = e.readUint8()), (a.layerNumber = e.readUint8()), (a.subSequenceIdentifier = e.readUint16());
        }
    }),
    u.createSampleGroupCtor('dtrt', function (e) {
        r.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
    }),
    u.createSampleGroupCtor('mvif', function (e) {
        r.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
    }),
    u.createSampleGroupCtor('prol', function (e) {
        this.roll_distance = e.readInt16();
    }),
    u.createSampleGroupCtor('rap ', function (e) {
        var n = e.readUint8();
        (this.num_leading_samples_known = n >> 7), (this.num_leading_samples = 127 & n);
    }),
    u.createSampleGroupCtor('rash', function (e) {
        if (((this.operation_point_count = e.readUint16()), this.description_length !== 2 + (1 === this.operation_point_count ? 2 : 6 * this.operation_point_count) + 9)) r.warn('BoxParser', 'Mismatch in ' + this.grouping_type + ' sample group length'), (this.data = e.readUint8Array(this.description_length - 2));
        else {
            if (1 === this.operation_point_count) this.target_rate_share = e.readUint16();
            else {
                (this.target_rate_share = []), (this.available_bitrate = []);
                for (var n = 0; n < this.operation_point_count; n++) (this.available_bitrate[n] = e.readUint32()), (this.target_rate_share[n] = e.readUint16());
            }
            (this.maximum_bitrate = e.readUint32()), (this.minimum_bitrate = e.readUint32()), (this.discard_priority = e.readUint8());
        }
    }),
    u.createSampleGroupCtor('roll', function (e) {
        this.roll_distance = e.readInt16();
    }),
    (u.SampleGroupEntry.prototype.parse = function (e) {
        r.warn('BoxParser', 'Unknown Sample Group type: ' + this.grouping_type), (this.data = e.readUint8Array(this.description_length));
    }),
    u.createSampleGroupCtor('scif', function (e) {
        r.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
    }),
    u.createSampleGroupCtor('scnm', function (e) {
        r.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
    }),
    u.createSampleGroupCtor('seig', function (e) {
        this.reserved = e.readUint8();
        var n = e.readUint8();
        (this.crypt_byte_block = n >> 4), (this.skip_byte_block = 15 & n), (this.isProtected = e.readUint8()), (this.Per_Sample_IV_Size = e.readUint8()), (this.KID = u.parseHex16(e)), (this.constant_IV_size = 0), (this.constant_IV = 0), 1 === this.isProtected && 0 === this.Per_Sample_IV_Size && ((this.constant_IV_size = e.readUint8()), (this.constant_IV = e.readUint8Array(this.constant_IV_size)));
    }),
    u.createSampleGroupCtor('stsa', function (e) {
        r.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
    }),
    u.createSampleGroupCtor('sync', function (e) {
        var n = e.readUint8();
        this.NAL_unit_type = 63 & n;
    }),
    u.createSampleGroupCtor('tele', function (e) {
        var n = e.readUint8();
        this.level_independently_decodable = n >> 7;
    }),
    u.createSampleGroupCtor('tsas', function (e) {
        r.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
    }),
    u.createSampleGroupCtor('tscl', function (e) {
        r.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
    }),
    u.createSampleGroupCtor('vipr', function (e) {
        r.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
    }),
    u.createFullBoxCtor('sbgp', function (e) {
        (this.grouping_type = e.readString(4)), 1 === this.version ? (this.grouping_type_parameter = e.readUint32()) : (this.grouping_type_parameter = 0), (this.entries = []);
        for (var n = e.readUint32(), r = 0; r < n; r++) {
            var i = {};
            this.entries.push(i), (i.sample_count = e.readInt32()), (i.group_description_index = e.readInt32());
        }
    }),
    u.createFullBoxCtor('schm', function (e) {
        (this.scheme_type = e.readString(4)), (this.scheme_version = e.readUint32()), 1 & this.flags && (this.scheme_uri = e.readString(this.size - this.hdr_size - 8));
    }),
    u.createBoxCtor('sdp ', function (e) {
        this.sdptext = e.readString(this.size - this.hdr_size);
    }),
    u.createFullBoxCtor('sdtp', function (e) {
        var n,
            r = this.size - this.hdr_size;
        (this.is_leading = []), (this.sample_depends_on = []), (this.sample_is_depended_on = []), (this.sample_has_redundancy = []);
        for (var i = 0; i < r; i++) (n = e.readUint8()), (this.is_leading[i] = n >> 6), (this.sample_depends_on[i] = (n >> 4) & 3), (this.sample_is_depended_on[i] = (n >> 2) & 3), (this.sample_has_redundancy[i] = 3 & n);
    }),
    u.createFullBoxCtor('senc'),
    u.createFullBoxCtor('sgpd', function (e) {
        (this.grouping_type = e.readString(4)), r.debug('BoxParser', 'Found Sample Groups of type ' + this.grouping_type), 1 === this.version ? (this.default_length = e.readUint32()) : (this.default_length = 0), this.version >= 2 && (this.default_group_description_index = e.readUint32()), (this.entries = []);
        for (var n, i = e.readUint32(), a = 0; a < i; a++) (n = u[this.grouping_type + 'SampleGroupEntry'] ? new u[this.grouping_type + 'SampleGroupEntry'](this.grouping_type) : new u.SampleGroupEntry(this.grouping_type)), this.entries.push(n), 1 === this.version && 0 === this.default_length ? (n.description_length = e.readUint32()) : (n.description_length = this.default_length), n.write === u.SampleGroupEntry.prototype.write && (r.info('BoxParser', 'SampleGroup for type ' + this.grouping_type + ' writing not yet implemented, keeping unparsed data in memory for later write'), (n.data = e.readUint8Array(n.description_length)), (e.position -= n.description_length)), n.parse(e);
    }),
    u.createFullBoxCtor('sidx', function (e) {
        (this.reference_ID = e.readUint32()), (this.timescale = e.readUint32()), 0 === this.version ? ((this.earliest_presentation_time = e.readUint32()), (this.first_offset = e.readUint32())) : ((this.earliest_presentation_time = e.readUint64()), (this.first_offset = e.readUint64())), e.readUint16(), (this.references = []);
        for (var n = e.readUint16(), r = 0; r < n; r++) {
            var i = {};
            this.references.push(i);
            var a = e.readUint32();
            (i.reference_type = (a >> 31) & 1), (i.referenced_size = 2147483647 & a), (i.subsegment_duration = e.readUint32()), (a = e.readUint32()), (i.starts_with_SAP = (a >> 31) & 1), (i.SAP_type = (a >> 28) & 7), (i.SAP_delta_time = 268435455 & a);
        }
    }),
    (u.SingleItemTypeReferenceBox = function (e, n, r, i) {
        u.Box.call(this, e, n), (this.hdr_size = r), (this.start = i);
    }),
    (u.SingleItemTypeReferenceBox.prototype = new u.Box()),
    (u.SingleItemTypeReferenceBox.prototype.parse = function (e) {
        this.from_item_ID = e.readUint16();
        var n = e.readUint16();
        this.references = [];
        for (var r = 0; r < n; r++) this.references[r] = e.readUint16();
    }),
    (u.SingleItemTypeReferenceBoxLarge = function (e, n, r, i) {
        u.Box.call(this, e, n), (this.hdr_size = r), (this.start = i);
    }),
    (u.SingleItemTypeReferenceBoxLarge.prototype = new u.Box()),
    (u.SingleItemTypeReferenceBoxLarge.prototype.parse = function (e) {
        this.from_item_ID = e.readUint32();
        var n = e.readUint16();
        this.references = [];
        for (var r = 0; r < n; r++) this.references[r] = e.readUint32();
    }),
    u.createFullBoxCtor('SmDm', function (e) {
        (this.primaryRChromaticity_x = e.readUint16()), (this.primaryRChromaticity_y = e.readUint16()), (this.primaryGChromaticity_x = e.readUint16()), (this.primaryGChromaticity_y = e.readUint16()), (this.primaryBChromaticity_x = e.readUint16()), (this.primaryBChromaticity_y = e.readUint16()), (this.whitePointChromaticity_x = e.readUint16()), (this.whitePointChromaticity_y = e.readUint16()), (this.luminanceMax = e.readUint32()), (this.luminanceMin = e.readUint32());
    }),
    u.createFullBoxCtor('smhd', function (e) {
        (this.balance = e.readUint16()), e.readUint16();
    }),
    u.createFullBoxCtor('ssix', function (e) {
        this.subsegments = [];
        for (var n = e.readUint32(), r = 0; r < n; r++) {
            var i = {};
            this.subsegments.push(i), (i.ranges = []);
            for (var a = e.readUint32(), o = 0; o < a; o++) {
                var s = {};
                i.ranges.push(s), (s.level = e.readUint8()), (s.range_size = e.readUint24());
            }
        }
    }),
    u.createFullBoxCtor('stco', function (e) {
        var n;
        if (((n = e.readUint32()), (this.chunk_offsets = []), 0 === this.version)) for (var r = 0; r < n; r++) this.chunk_offsets.push(e.readUint32());
    }),
    u.createFullBoxCtor('stdp', function (e) {
        var n = (this.size - this.hdr_size) / 2;
        this.priority = [];
        for (var r = 0; r < n; r++) this.priority[r] = e.readUint16();
    }),
    u.createFullBoxCtor('sthd'),
    u.createFullBoxCtor('stri', function (e) {
        (this.switch_group = e.readUint16()), (this.alternate_group = e.readUint16()), (this.sub_track_id = e.readUint32());
        var n = (this.size - this.hdr_size - 8) / 4;
        this.attribute_list = [];
        for (var r = 0; r < n; r++) this.attribute_list[r] = e.readUint32();
    }),
    u.createFullBoxCtor('stsc', function (e) {
        var n, r;
        if (((n = e.readUint32()), (this.first_chunk = []), (this.samples_per_chunk = []), (this.sample_description_index = []), 0 === this.version)) for (r = 0; r < n; r++) this.first_chunk.push(e.readUint32()), this.samples_per_chunk.push(e.readUint32()), this.sample_description_index.push(e.readUint32());
    }),
    u.createFullBoxCtor('stsd', function (e) {
        var n, i, a, o;
        for (n = 1, this.entries = [], a = e.readUint32(); n <= a; n++) {
            if ((i = u.parseOneBox(e, !0, this.size - (e.getPosition() - this.start))).code !== u.OK) return;
            u[i.type + 'SampleEntry'] ? (((o = new u[i.type + 'SampleEntry'](i.size)).hdr_size = i.hdr_size), (o.start = i.start)) : (r.warn('BoxParser', 'Unknown sample entry type: ' + i.type), (o = new u.SampleEntry(i.type, i.size, i.hdr_size, i.start))), o.write === u.SampleEntry.prototype.write && (r.info('BoxParser', 'SampleEntry ' + o.type + ' box writing not yet implemented, keeping unparsed data in memory for later write'), o.parseDataAndRewind(e)), o.parse(e), this.entries.push(o);
        }
    }),
    u.createFullBoxCtor('stsg', function (e) {
        this.grouping_type = e.readUint32();
        var n = e.readUint16();
        this.group_description_index = [];
        for (var r = 0; r < n; r++) this.group_description_index[r] = e.readUint32();
    }),
    u.createFullBoxCtor('stsh', function (e) {
        var n, r;
        if (((n = e.readUint32()), (this.shadowed_sample_numbers = []), (this.sync_sample_numbers = []), 0 === this.version)) for (r = 0; r < n; r++) this.shadowed_sample_numbers.push(e.readUint32()), this.sync_sample_numbers.push(e.readUint32());
    }),
    u.createFullBoxCtor('stss', function (e) {
        var n, r;
        if (((r = e.readUint32()), 0 === this.version)) for (n = 0, this.sample_numbers = []; n < r; n++) this.sample_numbers.push(e.readUint32());
    }),
    u.createFullBoxCtor('stsz', function (e) {
        var n;
        if (((this.sample_sizes = []), 0 === this.version)) for (n = 0, this.sample_size = e.readUint32(), this.sample_count = e.readUint32(); n < this.sample_count; n++) 0 === this.sample_size ? this.sample_sizes.push(e.readUint32()) : (this.sample_sizes[n] = this.sample_size);
    }),
    u.createFullBoxCtor('stts', function (e) {
        var n, i, a;
        if (((n = e.readUint32()), (this.sample_counts = []), (this.sample_deltas = []), 0 === this.version)) for (i = 0; i < n; i++) this.sample_counts.push(e.readUint32()), (a = e.readInt32()) < 0 && (r.warn('BoxParser', 'File uses negative stts sample delta, using value 1 instead, sync may be lost!'), (a = 1)), this.sample_deltas.push(a);
    }),
    u.createFullBoxCtor('stvi', function (e) {
        var n,
            r,
            i = e.readUint32();
        (this.single_view_allowed = 3 & i), (this.stereo_scheme = e.readUint32());
        var a = e.readUint32();
        for (this.stereo_indication_type = e.readString(a), this.boxes = []; e.getPosition() < this.start + this.size; ) {
            if ((n = u.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== u.OK) return;
            (r = n.box), this.boxes.push(r), (this[r.type] = r);
        }
    }),
    u.createBoxCtor('styp', function (e) {
        u.ftypBox.prototype.parse.call(this, e);
    }),
    u.createFullBoxCtor('stz2', function (e) {
        if (((this.sample_sizes = []), 0 === this.version)) {
            if (((this.reserved = e.readUint24()), (this.field_size = e.readUint8()), (i = e.readUint32()), 4 === this.field_size))
                for (n = 0; n < i; n += 2) {
                    var n,
                        i,
                        a = e.readUint8();
                    (this.sample_sizes[n] = (a >> 4) & 15), (this.sample_sizes[n + 1] = 15 & a);
                }
            else if (8 === this.field_size) for (n = 0; n < i; n++) this.sample_sizes[n] = e.readUint8();
            else if (16 === this.field_size) for (n = 0; n < i; n++) this.sample_sizes[n] = e.readUint16();
            else r.error('BoxParser', 'Error in length field in stz2 box');
        }
    }),
    u.createFullBoxCtor('subs', function (e) {
        for (n = 0, i = e.readUint32(), this.entries = []; n < i; n++) {
            var n,
                r,
                i,
                a,
                o = {};
            if (((this.entries[n] = o), (o.sample_delta = e.readUint32()), (o.subsamples = []), (a = e.readUint16()) > 0))
                for (r = 0; r < a; r++) {
                    var s = {};
                    o.subsamples.push(s), 1 == this.version ? (s.size = e.readUint32()) : (s.size = e.readUint16()), (s.priority = e.readUint8()), (s.discardable = e.readUint8()), (s.codec_specific_parameters = e.readUint32());
                }
        }
    }),
    u.createFullBoxCtor('tenc', function (e) {
        if ((e.readUint8(), 0 === this.version)) e.readUint8();
        else {
            var n = e.readUint8();
            (this.default_crypt_byte_block = (n >> 4) & 15), (this.default_skip_byte_block = 15 & n);
        }
        (this.default_isProtected = e.readUint8()), (this.default_Per_Sample_IV_Size = e.readUint8()), (this.default_KID = u.parseHex16(e)), 1 === this.default_isProtected && 0 === this.default_Per_Sample_IV_Size && ((this.default_constant_IV_size = e.readUint8()), (this.default_constant_IV = e.readUint8Array(this.default_constant_IV_size)));
    }),
    u.createFullBoxCtor('tfdt', function (e) {
        1 == this.version ? (this.baseMediaDecodeTime = e.readUint64()) : (this.baseMediaDecodeTime = e.readUint32());
    }),
    u.createFullBoxCtor('tfhd', function (e) {
        var n = 0;
        (this.track_id = e.readUint32()), this.size - this.hdr_size > n && this.flags & u.TFHD_FLAG_BASE_DATA_OFFSET ? ((this.base_data_offset = e.readUint64()), (n += 8)) : (this.base_data_offset = 0), this.size - this.hdr_size > n && this.flags & u.TFHD_FLAG_SAMPLE_DESC ? ((this.default_sample_description_index = e.readUint32()), (n += 4)) : (this.default_sample_description_index = 0), this.size - this.hdr_size > n && this.flags & u.TFHD_FLAG_SAMPLE_DUR ? ((this.default_sample_duration = e.readUint32()), (n += 4)) : (this.default_sample_duration = 0), this.size - this.hdr_size > n && this.flags & u.TFHD_FLAG_SAMPLE_SIZE ? ((this.default_sample_size = e.readUint32()), (n += 4)) : (this.default_sample_size = 0), this.size - this.hdr_size > n && this.flags & u.TFHD_FLAG_SAMPLE_FLAGS ? ((this.default_sample_flags = e.readUint32()), (n += 4)) : (this.default_sample_flags = 0);
    }),
    u.createFullBoxCtor('tfra', function (e) {
        (this.track_ID = e.readUint32()), e.readUint24();
        var n = e.readUint8();
        (this.length_size_of_traf_num = (n >> 4) & 3), (this.length_size_of_trun_num = (n >> 2) & 3), (this.length_size_of_sample_num = 3 & n), (this.entries = []);
        for (var r = e.readUint32(), i = 0; i < r; i++) 1 === this.version ? ((this.time = e.readUint64()), (this.moof_offset = e.readUint64())) : ((this.time = e.readUint32()), (this.moof_offset = e.readUint32())), (this.traf_number = e['readUint' + 8 * (this.length_size_of_traf_num + 1)]()), (this.trun_number = e['readUint' + 8 * (this.length_size_of_trun_num + 1)]()), (this.sample_number = e['readUint' + 8 * (this.length_size_of_sample_num + 1)]());
    }),
    u.createFullBoxCtor('tkhd', function (e) {
        1 == this.version ? ((this.creation_time = e.readUint64()), (this.modification_time = e.readUint64()), (this.track_id = e.readUint32()), e.readUint32(), (this.duration = e.readUint64())) : ((this.creation_time = e.readUint32()), (this.modification_time = e.readUint32()), (this.track_id = e.readUint32()), e.readUint32(), (this.duration = e.readUint32())), e.readUint32Array(2), (this.layer = e.readInt16()), (this.alternate_group = e.readInt16()), (this.volume = e.readInt16() >> 8), e.readUint16(), (this.matrix = e.readInt32Array(9)), (this.width = e.readUint32()), (this.height = e.readUint32());
    }),
    u.createBoxCtor('tmax', function (e) {
        this.time = e.readUint32();
    }),
    u.createBoxCtor('tmin', function (e) {
        this.time = e.readUint32();
    }),
    u.createBoxCtor('totl', function (e) {
        this.bytessent = e.readUint32();
    }),
    u.createBoxCtor('tpay', function (e) {
        this.bytessent = e.readUint32();
    }),
    u.createBoxCtor('tpyl', function (e) {
        this.bytessent = e.readUint64();
    }),
    (u.TrackGroupTypeBox.prototype.parse = function (e) {
        this.parseFullHeader(e), (this.track_group_id = e.readUint32());
    }),
    u.createTrackGroupCtor('msrc'),
    (u.TrackReferenceTypeBox = function (e, n, r, i) {
        u.Box.call(this, e, n), (this.hdr_size = r), (this.start = i);
    }),
    (u.TrackReferenceTypeBox.prototype = new u.Box()),
    (u.TrackReferenceTypeBox.prototype.parse = function (e) {
        this.track_ids = e.readUint32Array((this.size - this.hdr_size) / 4);
    }),
    (u.trefBox.prototype.parse = function (e) {
        for (var n, i; e.getPosition() < this.start + this.size; ) {
            if ((n = u.parseOneBox(e, !0, this.size - (e.getPosition() - this.start))).code !== u.OK) return;
            (i = new u.TrackReferenceTypeBox(n.type, n.size, n.hdr_size, n.start)).write === u.Box.prototype.write && 'mdat' !== i.type && (r.info('BoxParser', 'TrackReference ' + i.type + ' box writing not yet implemented, keeping unparsed data in memory for later write'), i.parseDataAndRewind(e)), i.parse(e), this.boxes.push(i);
        }
    }),
    u.createFullBoxCtor('trep', function (e) {
        for (this.track_ID = e.readUint32(), this.boxes = []; e.getPosition() < this.start + this.size; ) {
            if ((ret = u.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== u.OK) return;
            (box = ret.box), this.boxes.push(box);
        }
    }),
    u.createFullBoxCtor('trex', function (e) {
        (this.track_id = e.readUint32()), (this.default_sample_description_index = e.readUint32()), (this.default_sample_duration = e.readUint32()), (this.default_sample_size = e.readUint32()), (this.default_sample_flags = e.readUint32());
    }),
    u.createBoxCtor('trpy', function (e) {
        this.bytessent = e.readUint64();
    }),
    u.createFullBoxCtor('trun', function (e) {
        var n = 0;
        if (((this.sample_count = e.readUint32()), (n += 4), this.size - this.hdr_size > n && this.flags & u.TRUN_FLAGS_DATA_OFFSET ? ((this.data_offset = e.readInt32()), (n += 4)) : (this.data_offset = 0), this.size - this.hdr_size > n && this.flags & u.TRUN_FLAGS_FIRST_FLAG ? ((this.first_sample_flags = e.readUint32()), (n += 4)) : (this.first_sample_flags = 0), (this.sample_duration = []), (this.sample_size = []), (this.sample_flags = []), (this.sample_composition_time_offset = []), this.size - this.hdr_size > n)) for (var r = 0; r < this.sample_count; r++) this.flags & u.TRUN_FLAGS_DURATION && (this.sample_duration[r] = e.readUint32()), this.flags & u.TRUN_FLAGS_SIZE && (this.sample_size[r] = e.readUint32()), this.flags & u.TRUN_FLAGS_FLAGS && (this.sample_flags[r] = e.readUint32()), this.flags & u.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? (this.sample_composition_time_offset[r] = e.readUint32()) : (this.sample_composition_time_offset[r] = e.readInt32()));
    }),
    u.createFullBoxCtor('tsel', function (e) {
        this.switch_group = e.readUint32();
        var n = (this.size - this.hdr_size - 4) / 4;
        this.attribute_list = [];
        for (var r = 0; r < n; r++) this.attribute_list[r] = e.readUint32();
    }),
    u.createFullBoxCtor('txtC', function (e) {
        this.config = e.readCString();
    }),
    u.createFullBoxCtor('url ', function (e) {
        1 !== this.flags && (this.location = e.readCString());
    }),
    u.createFullBoxCtor('urn ', function (e) {
        (this.name = e.readCString()), this.size - this.hdr_size - this.name.length - 1 > 0 && (this.location = e.readCString());
    }),
    u.createUUIDBox('a5d40b30e81411ddba2f0800200c9a66', !0, !1, function (e) {
        this.LiveServerManifest = e
            .readString(this.size - this.hdr_size)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }),
    u.createUUIDBox('d08a4f1810f34a82b6c832d8aba183d3', !0, !1, function (e) {
        this.system_id = u.parseHex16(e);
        var n = e.readUint32();
        n > 0 && (this.data = e.readUint8Array(n));
    }),
    u.createUUIDBox('a2394f525a9b4f14a2446c427c648df4', !0, !1),
    u.createUUIDBox('8974dbce7be74c5184f97148f9882554', !0, !1, function (e) {
        (this.default_AlgorithmID = e.readUint24()), (this.default_IV_size = e.readUint8()), (this.default_KID = u.parseHex16(e));
    }),
    u.createUUIDBox('d4807ef2ca3946958e5426cb9e46a79f', !0, !1, function (e) {
        (this.fragment_count = e.readUint8()), (this.entries = []);
        for (var n = 0; n < this.fragment_count; n++) {
            var r = {},
                i = 0,
                a = 0;
            1 === this.version ? ((i = e.readUint64()), (a = e.readUint64())) : ((i = e.readUint32()), (a = e.readUint32())), (r.absolute_time = i), (r.absolute_duration = a), this.entries.push(r);
        }
    }),
    u.createUUIDBox('6d1d9b0542d544e680e2141daff757b2', !0, !1, function (e) {
        1 === this.version ? ((this.absolute_time = e.readUint64()), (this.duration = e.readUint64())) : ((this.absolute_time = e.readUint32()), (this.duration = e.readUint32()));
    }),
    u.createFullBoxCtor('vmhd', function (e) {
        (this.graphicsmode = e.readUint16()), (this.opcolor = e.readUint16Array(3));
    }),
    u.createFullBoxCtor('vpcC', function (e) {
        var n;
        1 === this.version ? ((this.profile = e.readUint8()), (this.level = e.readUint8()), (n = e.readUint8()), (this.bitDepth = n >> 4), (this.chromaSubsampling = (n >> 1) & 7), (this.videoFullRangeFlag = 1 & n), (this.colourPrimaries = e.readUint8()), (this.transferCharacteristics = e.readUint8()), (this.matrixCoefficients = e.readUint8())) : ((this.profile = e.readUint8()), (this.level = e.readUint8()), (n = e.readUint8()), (this.bitDepth = (n >> 4) & 15), (this.colorSpace = 15 & n), (n = e.readUint8()), (this.chromaSubsampling = (n >> 4) & 15), (this.transferFunction = (n >> 1) & 7), (this.videoFullRangeFlag = 1 & n)), (this.codecIntializationDataSize = e.readUint16()), (this.codecIntializationData = e.readUint8Array(this.codecIntializationDataSize));
    }),
    u.createBoxCtor('vttC', function (e) {
        this.text = e.readString(this.size - this.hdr_size);
    }),
    u.createFullBoxCtor('vvcC', function (e) {
        var n,
            r,
            i = {
                held_bits: void 0,
                num_held_bits: 0,
                stream_read_1_bytes: function (e) {
                    (this.held_bits = e.readUint8()), (this.num_held_bits = 8);
                },
                stream_read_2_bytes: function (e) {
                    (this.held_bits = e.readUint16()), (this.num_held_bits = 16);
                },
                extract_bits: function (e) {
                    var n = (this.held_bits >> (this.num_held_bits - e)) & ((1 << e) - 1);
                    return (this.num_held_bits -= e), n;
                }
            };
        if ((i.stream_read_1_bytes(e), i.extract_bits(5), (this.lengthSizeMinusOne = i.extract_bits(2)), (this.ptl_present_flag = i.extract_bits(1)), this.ptl_present_flag)) {
            if ((i.stream_read_2_bytes(e), (this.ols_idx = i.extract_bits(9)), (this.num_sublayers = i.extract_bits(3)), (this.constant_frame_rate = i.extract_bits(2)), (this.chroma_format_idc = i.extract_bits(2)), i.stream_read_1_bytes(e), (this.bit_depth_minus8 = i.extract_bits(3)), i.extract_bits(5), i.stream_read_2_bytes(e), i.extract_bits(2), (this.num_bytes_constraint_info = i.extract_bits(6)), (this.general_profile_idc = i.extract_bits(7)), (this.general_tier_flag = i.extract_bits(1)), (this.general_level_idc = e.readUint8()), i.stream_read_1_bytes(e), (this.ptl_frame_only_constraint_flag = i.extract_bits(1)), (this.ptl_multilayer_enabled_flag = i.extract_bits(1)), (this.general_constraint_info = new Uint8Array(this.num_bytes_constraint_info)), this.num_bytes_constraint_info)) {
                for (n = 0; n < this.num_bytes_constraint_info - 1; n++) {
                    var a = i.extract_bits(6);
                    i.stream_read_1_bytes(e);
                    var o = i.extract_bits(2);
                    this.general_constraint_info[n] = (a << 2) | o;
                }
                this.general_constraint_info[this.num_bytes_constraint_info - 1] = i.extract_bits(6);
            } else i.extract_bits(6);
            for (i.stream_read_1_bytes(e), this.ptl_sublayer_present_mask = 0, r = this.num_sublayers - 2; r >= 0; --r) {
                var s = i.extract_bits(1);
                this.ptl_sublayer_present_mask |= s << r;
            }
            for (r = this.num_sublayers; r <= 8 && this.num_sublayers > 1; ++r) i.extract_bits(1);
            for (r = this.num_sublayers - 2; r >= 0; --r) this.ptl_sublayer_present_mask & (1 << r) && (this.sublayer_level_idc[r] = e.readUint8());
            if (((this.ptl_num_sub_profiles = e.readUint8()), (this.general_sub_profile_idc = []), this.ptl_num_sub_profiles)) for (n = 0; n < this.ptl_num_sub_profiles; n++) this.general_sub_profile_idc.push(e.readUint32());
            (this.max_picture_width = e.readUint16()), (this.max_picture_height = e.readUint16()), (this.avg_frame_rate = e.readUint16());
        }
        var l = 12,
            u = 13;
        this.nalu_arrays = [];
        var c = e.readUint8();
        for (n = 0; n < c; n++) {
            var d = [];
            this.nalu_arrays.push(d), i.stream_read_1_bytes(e), (d.completeness = i.extract_bits(1)), i.extract_bits(2), (d.nalu_type = i.extract_bits(5));
            var f = 1;
            for (d.nalu_type != u && d.nalu_type != l && (f = e.readUint16()), r = 0; r < f; r++) {
                var p = e.readUint16();
                d.push({
                    data: e.readUint8Array(p),
                    length: p
                });
            }
        }
    }),
    u.createFullBoxCtor('vvnC', function (e) {
        var n = strm.readUint8();
        this.lengthSizeMinusOne = 3 & n;
    }),
    (u.SampleEntry.prototype.isVideo = function () {
        return !1;
    }),
    (u.SampleEntry.prototype.isAudio = function () {
        return !1;
    }),
    (u.SampleEntry.prototype.isSubtitle = function () {
        return !1;
    }),
    (u.SampleEntry.prototype.isMetadata = function () {
        return !1;
    }),
    (u.SampleEntry.prototype.isHint = function () {
        return !1;
    }),
    (u.SampleEntry.prototype.getCodec = function () {
        return this.type.replace('.', '');
    }),
    (u.SampleEntry.prototype.getWidth = function () {
        return '';
    }),
    (u.SampleEntry.prototype.getHeight = function () {
        return '';
    }),
    (u.SampleEntry.prototype.getChannelCount = function () {
        return '';
    }),
    (u.SampleEntry.prototype.getSampleRate = function () {
        return '';
    }),
    (u.SampleEntry.prototype.getSampleSize = function () {
        return '';
    }),
    (u.VisualSampleEntry.prototype.isVideo = function () {
        return !0;
    }),
    (u.VisualSampleEntry.prototype.getWidth = function () {
        return this.width;
    }),
    (u.VisualSampleEntry.prototype.getHeight = function () {
        return this.height;
    }),
    (u.AudioSampleEntry.prototype.isAudio = function () {
        return !0;
    }),
    (u.AudioSampleEntry.prototype.getChannelCount = function () {
        return this.channel_count;
    }),
    (u.AudioSampleEntry.prototype.getSampleRate = function () {
        return this.samplerate;
    }),
    (u.AudioSampleEntry.prototype.getSampleSize = function () {
        return this.samplesize;
    }),
    (u.SubtitleSampleEntry.prototype.isSubtitle = function () {
        return !0;
    }),
    (u.MetadataSampleEntry.prototype.isMetadata = function () {
        return !0;
    }),
    (u.decimalToHex = function (e, n) {
        var r = Number(e).toString(16);
        for (n = null == n ? (n = 2) : n; r.length < n; ) r = '0' + r;
        return r;
    }),
    (u.avc1SampleEntry.prototype.getCodec =
        u.avc2SampleEntry.prototype.getCodec =
        u.avc3SampleEntry.prototype.getCodec =
        u.avc4SampleEntry.prototype.getCodec =
            function () {
                var e = u.SampleEntry.prototype.getCodec.call(this);
                return this.avcC ? e + '.' + u.decimalToHex(this.avcC.AVCProfileIndication) + u.decimalToHex(this.avcC.profile_compatibility) + u.decimalToHex(this.avcC.AVCLevelIndication) : e;
            }),
    (u.hev1SampleEntry.prototype.getCodec = u.hvc1SampleEntry.prototype.getCodec =
        function () {
            var e,
                n = u.SampleEntry.prototype.getCodec.call(this);
            if (this.hvcC) {
                switch (((n += '.'), this.hvcC.general_profile_space)) {
                    case 0:
                        n += '';
                        break;
                    case 1:
                        n += 'A';
                        break;
                    case 2:
                        n += 'B';
                        break;
                    case 3:
                        n += 'C';
                }
                n += this.hvcC.general_profile_idc + '.';
                var r = this.hvcC.general_profile_compatibility,
                    i = 0;
                for (e = 0; e < 32 && ((i |= 1 & r), 31 != e); e++) {
                    (i <<= 1), (r >>= 1);
                }
                (n += u.decimalToHex(i, 0) + '.'), 0 === this.hvcC.general_tier_flag ? (n += 'L') : (n += 'H'), (n += this.hvcC.general_level_idc);
                var a = !1,
                    o = '';
                for (e = 5; e >= 0; e--) (this.hvcC.general_constraint_indicator[e] || a) && ((o = '.' + u.decimalToHex(this.hvcC.general_constraint_indicator[e], 0) + o), (a = !0));
                n += o;
            }
            return n;
        }),
    (u.vvc1SampleEntry.prototype.getCodec = u.vvi1SampleEntry.prototype.getCodec =
        function () {
            var e = u.SampleEntry.prototype.getCodec.call(this);
            if (this.vvcC) {
                (e += '.' + this.vvcC.general_profile_idc), this.vvcC.general_tier_flag ? (e += '.H') : (e += '.L'), (e += this.vvcC.general_level_idc);
                var n = '';
                if (this.vvcC.general_constraint_info) {
                    var r,
                        i,
                        a,
                        o = [];
                    for (i = 0, r = 0 | (this.vvcC.ptl_frame_only_constraint << 7) | (this.vvcC.ptl_multilayer_enabled << 6); i < this.vvcC.general_constraint_info.length; ++i) (r |= (this.vvcC.general_constraint_info[i] >> 2) & 63), o.push(r), r && (a = i), (r = (this.vvcC.general_constraint_info[i] >> 2) & 3);
                    if (void 0 === a) n = '.CA';
                    else {
                        n = '.C';
                        var s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
                            l = 0,
                            c = 0;
                        for (i = 0; i <= a; ++i) for (l = (l << 8) | o[i], c += 8; c >= 5; ) (n += s[(l >> (c - 5)) & 31]), (c -= 5), (l &= (1 << c) - 1);
                        c && ((l <<= 5 - c), (n += s[31 & l]));
                    }
                }
                e += n;
            }
            return e;
        }),
    (u.mp4aSampleEntry.prototype.getCodec = function () {
        var e = u.SampleEntry.prototype.getCodec.call(this);
        if (!this.esds || !this.esds.esd) return e;
        var n = this.esds.esd.getOTI(),
            r = this.esds.esd.getAudioConfig();
        return e + '.' + u.decimalToHex(n) + (r ? '.' + r : '');
    }),
    (u.stxtSampleEntry.prototype.getCodec = function () {
        var e = u.SampleEntry.prototype.getCodec.call(this);
        return this.mime_format ? e + '.' + this.mime_format : e;
    }),
    (u.vp08SampleEntry.prototype.getCodec = u.vp09SampleEntry.prototype.getCodec =
        function () {
            var e = u.SampleEntry.prototype.getCodec.call(this),
                n = this.vpcC.level;
            0 == n && (n = '00');
            var r = this.vpcC.bitDepth;
            return 8 == r && (r = '08'), e + '.0' + this.vpcC.profile + '.' + n + '.' + r;
        }),
    (u.av01SampleEntry.prototype.getCodec = function () {
        var e,
            n = u.SampleEntry.prototype.getCodec.call(this),
            r = this.av1C.seq_level_idx_0;
        return r < 10 && (r = '0' + r), 2 === this.av1C.seq_profile && 1 === this.av1C.high_bitdepth ? (e = 1 === this.av1C.twelve_bit ? '12' : '10') : this.av1C.seq_profile <= 2 && (e = 1 === this.av1C.high_bitdepth ? '10' : '08'), n + '.' + this.av1C.seq_profile + '.' + r + (this.av1C.seq_tier_0 ? 'H' : 'M') + '.' + e;
    }),
    (u.Box.prototype.writeHeader = function (e, n) {
        (this.size += 8), this.size > o && (this.size += 8), 'uuid' === this.type && (this.size += 16), r.debug('BoxWriter', 'Writing box ' + this.type + ' of size: ' + this.size + ' at position ' + e.getPosition() + (n || '')), this.size > o ? e.writeUint32(1) : ((this.sizePosition = e.getPosition()), e.writeUint32(this.size)), e.writeString(this.type, null, 4), 'uuid' === this.type && e.writeUint8Array(this.uuid), this.size > o && e.writeUint64(this.size);
    }),
    (u.FullBox.prototype.writeHeader = function (e) {
        (this.size += 4), u.Box.prototype.writeHeader.call(this, e, ' v=' + this.version + ' f=' + this.flags), e.writeUint8(this.version), e.writeUint24(this.flags);
    }),
    (u.Box.prototype.write = function (e) {
        'mdat' === this.type ? this.data && ((this.size = this.data.length), this.writeHeader(e), e.writeUint8Array(this.data)) : ((this.size = this.data ? this.data.length : 0), this.writeHeader(e), this.data && e.writeUint8Array(this.data));
    }),
    (u.ContainerBox.prototype.write = function (e) {
        (this.size = 0), this.writeHeader(e);
        for (var n = 0; n < this.boxes.length; n++) this.boxes[n] && (this.boxes[n].write(e), (this.size += this.boxes[n].size));
        r.debug('BoxWriter', 'Adjusting box ' + this.type + ' with new size ' + this.size), e.adjustUint32(this.sizePosition, this.size);
    }),
    (u.TrackReferenceTypeBox.prototype.write = function (e) {
        (this.size = 4 * this.track_ids.length), this.writeHeader(e), e.writeUint32Array(this.track_ids);
    }),
    (u.avcCBox.prototype.write = function (e) {
        var n;
        for (n = 0, this.size = 7; n < this.SPS.length; n++) this.size += 2 + this.SPS[n].length;
        for (n = 0; n < this.PPS.length; n++) this.size += 2 + this.PPS[n].length;
        for (this.ext && (this.size += this.ext.length), this.writeHeader(e), e.writeUint8(this.configurationVersion), e.writeUint8(this.AVCProfileIndication), e.writeUint8(this.profile_compatibility), e.writeUint8(this.AVCLevelIndication), e.writeUint8(this.lengthSizeMinusOne + 252), e.writeUint8(this.SPS.length + 224), n = 0; n < this.SPS.length; n++) e.writeUint16(this.SPS[n].length), e.writeUint8Array(this.SPS[n].nalu);
        for (e.writeUint8(this.PPS.length), n = 0; n < this.PPS.length; n++) e.writeUint16(this.PPS[n].length), e.writeUint8Array(this.PPS[n].nalu);
        this.ext && e.writeUint8Array(this.ext);
    }),
    (u.co64Box.prototype.write = function (e) {
        var n;
        for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.chunk_offsets.length, this.writeHeader(e), e.writeUint32(this.chunk_offsets.length), n = 0; n < this.chunk_offsets.length; n++) e.writeUint64(this.chunk_offsets[n]);
    }),
    (u.cslgBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 20), this.writeHeader(e), e.writeInt32(this.compositionToDTSShift), e.writeInt32(this.leastDecodeToDisplayDelta), e.writeInt32(this.greatestDecodeToDisplayDelta), e.writeInt32(this.compositionStartTime), e.writeInt32(this.compositionEndTime);
    }),
    (u.cttsBox.prototype.write = function (e) {
        var n;
        for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(e), e.writeUint32(this.sample_counts.length), n = 0; n < this.sample_counts.length; n++) e.writeUint32(this.sample_counts[n]), 1 === this.version ? e.writeInt32(this.sample_offsets[n]) : e.writeUint32(this.sample_offsets[n]);
    }),
    (u.drefBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 4), this.writeHeader(e), e.writeUint32(this.entries.length);
        for (var n = 0; n < this.entries.length; n++) this.entries[n].write(e), (this.size += this.entries[n].size);
        r.debug('BoxWriter', 'Adjusting box ' + this.type + ' with new size ' + this.size), e.adjustUint32(this.sizePosition, this.size);
    }),
    (u.elngBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = this.extended_language.length), this.writeHeader(e), e.writeString(this.extended_language);
    }),
    (u.elstBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 4 + 12 * this.entries.length), this.writeHeader(e), e.writeUint32(this.entries.length);
        for (var n = 0; n < this.entries.length; n++) {
            var r = this.entries[n];
            e.writeUint32(r.segment_duration), e.writeInt32(r.media_time), e.writeInt16(r.media_rate_integer), e.writeInt16(r.media_rate_fraction);
        }
    }),
    (u.emsgBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 16 + this.message_data.length + (this.scheme_id_uri.length + 1) + (this.value.length + 1)), this.writeHeader(e), e.writeCString(this.scheme_id_uri), e.writeCString(this.value), e.writeUint32(this.timescale), e.writeUint32(this.presentation_time_delta), e.writeUint32(this.event_duration), e.writeUint32(this.id), e.writeUint8Array(this.message_data);
    }),
    (u.ftypBox.prototype.write = function (e) {
        (this.size = 8 + 4 * this.compatible_brands.length), this.writeHeader(e), e.writeString(this.major_brand, null, 4), e.writeUint32(this.minor_version);
        for (var n = 0; n < this.compatible_brands.length; n++) e.writeString(this.compatible_brands[n], null, 4);
    }),
    (u.hdlrBox.prototype.write = function (e) {
        (this.size = 20 + this.name.length + 1), (this.version = 0), (this.flags = 0), this.writeHeader(e), e.writeUint32(0), e.writeString(this.handler, null, 4), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeCString(this.name);
    }),
    (u.kindBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = this.schemeURI.length + 1 + (this.value.length + 1)), this.writeHeader(e), e.writeCString(this.schemeURI), e.writeCString(this.value);
    }),
    (u.mdhdBox.prototype.write = function (e) {
        (this.size = 20), (this.flags = 0), (this.version = 0), this.writeHeader(e), e.writeUint32(this.creation_time), e.writeUint32(this.modification_time), e.writeUint32(this.timescale), e.writeUint32(this.duration), e.writeUint16(this.language), e.writeUint16(0);
    }),
    (u.mehdBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 4), this.writeHeader(e), e.writeUint32(this.fragment_duration);
    }),
    (u.mfhdBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 4), this.writeHeader(e), e.writeUint32(this.sequence_number);
    }),
    (u.mvhdBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 96), this.writeHeader(e), e.writeUint32(this.creation_time), e.writeUint32(this.modification_time), e.writeUint32(this.timescale), e.writeUint32(this.duration), e.writeUint32(this.rate), e.writeUint16(this.volume << 8), e.writeUint16(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32Array(this.matrix), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(this.next_track_id);
    }),
    (u.SampleEntry.prototype.writeHeader = function (e) {
        (this.size = 8), u.Box.prototype.writeHeader.call(this, e), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint16(this.data_reference_index);
    }),
    (u.SampleEntry.prototype.writeFooter = function (e) {
        for (var n = 0; n < this.boxes.length; n++) this.boxes[n].write(e), (this.size += this.boxes[n].size);
        r.debug('BoxWriter', 'Adjusting box ' + this.type + ' with new size ' + this.size), e.adjustUint32(this.sizePosition, this.size);
    }),
    (u.SampleEntry.prototype.write = function (e) {
        this.writeHeader(e), e.writeUint8Array(this.data), (this.size += this.data.length), r.debug('BoxWriter', 'Adjusting box ' + this.type + ' with new size ' + this.size), e.adjustUint32(this.sizePosition, this.size);
    }),
    (u.VisualSampleEntry.prototype.write = function (e) {
        this.writeHeader(e), (this.size += 70), e.writeUint16(0), e.writeUint16(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint16(this.width), e.writeUint16(this.height), e.writeUint32(this.horizresolution), e.writeUint32(this.vertresolution), e.writeUint32(0), e.writeUint16(this.frame_count), e.writeUint8(Math.min(31, this.compressorname.length)), e.writeString(this.compressorname, null, 31), e.writeUint16(this.depth), e.writeInt16(-1), this.writeFooter(e);
    }),
    (u.AudioSampleEntry.prototype.write = function (e) {
        this.writeHeader(e), (this.size += 20), e.writeUint32(0), e.writeUint32(0), e.writeUint16(this.channel_count), e.writeUint16(this.samplesize), e.writeUint16(0), e.writeUint16(0), e.writeUint32(this.samplerate << 16), this.writeFooter(e);
    }),
    (u.stppSampleEntry.prototype.write = function (e) {
        this.writeHeader(e), (this.size += this.namespace.length + 1 + this.schema_location.length + 1 + this.auxiliary_mime_types.length + 1), e.writeCString(this.namespace), e.writeCString(this.schema_location), e.writeCString(this.auxiliary_mime_types), this.writeFooter(e);
    }),
    (u.SampleGroupEntry.prototype.write = function (e) {
        e.writeUint8Array(this.data);
    }),
    (u.sbgpBox.prototype.write = function (e) {
        (this.version = 1), (this.flags = 0), (this.size = 12 + 8 * this.entries.length), this.writeHeader(e), e.writeString(this.grouping_type, null, 4), e.writeUint32(this.grouping_type_parameter), e.writeUint32(this.entries.length);
        for (var n = 0; n < this.entries.length; n++) {
            var r = this.entries[n];
            e.writeInt32(r.sample_count), e.writeInt32(r.group_description_index);
        }
    }),
    (u.sgpdBox.prototype.write = function (e) {
        var n, r;
        for (n = 0, this.flags = 0, this.size = 12; n < this.entries.length; n++) (r = this.entries[n]), 1 === this.version && (0 === this.default_length && (this.size += 4), (this.size += r.data.length));
        for (this.writeHeader(e), e.writeString(this.grouping_type, null, 4), 1 === this.version && e.writeUint32(this.default_length), this.version >= 2 && e.writeUint32(this.default_sample_description_index), e.writeUint32(this.entries.length), n = 0; n < this.entries.length; n++) (r = this.entries[n]), 1 === this.version && 0 === this.default_length && e.writeUint32(r.description_length), r.write(e);
    }),
    (u.sidxBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 20 + 12 * this.references.length), this.writeHeader(e), e.writeUint32(this.reference_ID), e.writeUint32(this.timescale), e.writeUint32(this.earliest_presentation_time), e.writeUint32(this.first_offset), e.writeUint16(0), e.writeUint16(this.references.length);
        for (var n = 0; n < this.references.length; n++) {
            var r = this.references[n];
            e.writeUint32((r.reference_type << 31) | r.referenced_size), e.writeUint32(r.subsegment_duration), e.writeUint32((r.starts_with_SAP << 31) | (r.SAP_type << 28) | r.SAP_delta_time);
        }
    }),
    (u.smhdBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 1), (this.size = 4), this.writeHeader(e), e.writeUint16(this.balance), e.writeUint16(0);
    }),
    (u.stcoBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 4 + 4 * this.chunk_offsets.length), this.writeHeader(e), e.writeUint32(this.chunk_offsets.length), e.writeUint32Array(this.chunk_offsets);
    }),
    (u.stscBox.prototype.write = function (e) {
        var n;
        for (this.version = 0, this.flags = 0, this.size = 4 + 12 * this.first_chunk.length, this.writeHeader(e), e.writeUint32(this.first_chunk.length), n = 0; n < this.first_chunk.length; n++) e.writeUint32(this.first_chunk[n]), e.writeUint32(this.samples_per_chunk[n]), e.writeUint32(this.sample_description_index[n]);
    }),
    (u.stsdBox.prototype.write = function (e) {
        var n;
        for (this.version = 0, this.flags = 0, this.size = 0, this.writeHeader(e), e.writeUint32(this.entries.length), this.size += 4, n = 0; n < this.entries.length; n++) this.entries[n].write(e), (this.size += this.entries[n].size);
        r.debug('BoxWriter', 'Adjusting box ' + this.type + ' with new size ' + this.size), e.adjustUint32(this.sizePosition, this.size);
    }),
    (u.stshBox.prototype.write = function (e) {
        var n;
        for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.shadowed_sample_numbers.length, this.writeHeader(e), e.writeUint32(this.shadowed_sample_numbers.length), n = 0; n < this.shadowed_sample_numbers.length; n++) e.writeUint32(this.shadowed_sample_numbers[n]), e.writeUint32(this.sync_sample_numbers[n]);
    }),
    (u.stssBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 4 + 4 * this.sample_numbers.length), this.writeHeader(e), e.writeUint32(this.sample_numbers.length), e.writeUint32Array(this.sample_numbers);
    }),
    (u.stszBox.prototype.write = function (e) {
        var n,
            r = !0;
        if (((this.version = 0), (this.flags = 0), this.sample_sizes.length > 0))
            for (n = 0; n + 1 < this.sample_sizes.length; ) {
                if (this.sample_sizes[n + 1] !== this.sample_sizes[0]) {
                    r = !1;
                    break;
                }
                n++;
            }
        else r = !1;
        (this.size = 8), !r && (this.size += 4 * this.sample_sizes.length), this.writeHeader(e), r ? e.writeUint32(this.sample_sizes[0]) : e.writeUint32(0), e.writeUint32(this.sample_sizes.length), !r && e.writeUint32Array(this.sample_sizes);
    }),
    (u.sttsBox.prototype.write = function (e) {
        var n;
        for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(e), e.writeUint32(this.sample_counts.length), n = 0; n < this.sample_counts.length; n++) e.writeUint32(this.sample_counts[n]), e.writeUint32(this.sample_deltas[n]);
    }),
    (u.tfdtBox.prototype.write = function (e) {
        var n = 4294967295;
        (this.version = this.baseMediaDecodeTime > n ? 1 : 0), (this.flags = 0), (this.size = 4), 1 === this.version && (this.size += 4), this.writeHeader(e), 1 === this.version ? e.writeUint64(this.baseMediaDecodeTime) : e.writeUint32(this.baseMediaDecodeTime);
    }),
    (u.tfhdBox.prototype.write = function (e) {
        (this.version = 0), (this.size = 4), this.flags & u.TFHD_FLAG_BASE_DATA_OFFSET && (this.size += 8), this.flags & u.TFHD_FLAG_SAMPLE_DESC && (this.size += 4), this.flags & u.TFHD_FLAG_SAMPLE_DUR && (this.size += 4), this.flags & u.TFHD_FLAG_SAMPLE_SIZE && (this.size += 4), this.flags & u.TFHD_FLAG_SAMPLE_FLAGS && (this.size += 4), this.writeHeader(e), e.writeUint32(this.track_id), this.flags & u.TFHD_FLAG_BASE_DATA_OFFSET && e.writeUint64(this.base_data_offset), this.flags & u.TFHD_FLAG_SAMPLE_DESC && e.writeUint32(this.default_sample_description_index), this.flags & u.TFHD_FLAG_SAMPLE_DUR && e.writeUint32(this.default_sample_duration), this.flags & u.TFHD_FLAG_SAMPLE_SIZE && e.writeUint32(this.default_sample_size), this.flags & u.TFHD_FLAG_SAMPLE_FLAGS && e.writeUint32(this.default_sample_flags);
    }),
    (u.tkhdBox.prototype.write = function (e) {
        (this.version = 0), (this.size = 80), this.writeHeader(e), e.writeUint32(this.creation_time), e.writeUint32(this.modification_time), e.writeUint32(this.track_id), e.writeUint32(0), e.writeUint32(this.duration), e.writeUint32(0), e.writeUint32(0), e.writeInt16(this.layer), e.writeInt16(this.alternate_group), e.writeInt16(this.volume << 8), e.writeUint16(0), e.writeInt32Array(this.matrix), e.writeUint32(this.width), e.writeUint32(this.height);
    }),
    (u.trexBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = 20), this.writeHeader(e), e.writeUint32(this.track_id), e.writeUint32(this.default_sample_description_index), e.writeUint32(this.default_sample_duration), e.writeUint32(this.default_sample_size), e.writeUint32(this.default_sample_flags);
    }),
    (u.trunBox.prototype.write = function (e) {
        (this.version = 0), (this.size = 4), this.flags & u.TRUN_FLAGS_DATA_OFFSET && (this.size += 4), this.flags & u.TRUN_FLAGS_FIRST_FLAG && (this.size += 4), this.flags & u.TRUN_FLAGS_DURATION && (this.size += 4 * this.sample_duration.length), this.flags & u.TRUN_FLAGS_SIZE && (this.size += 4 * this.sample_size.length), this.flags & u.TRUN_FLAGS_FLAGS && (this.size += 4 * this.sample_flags.length), this.flags & u.TRUN_FLAGS_CTS_OFFSET && (this.size += 4 * this.sample_composition_time_offset.length), this.writeHeader(e), e.writeUint32(this.sample_count), this.flags & u.TRUN_FLAGS_DATA_OFFSET && ((this.data_offset_position = e.getPosition()), e.writeInt32(this.data_offset)), this.flags & u.TRUN_FLAGS_FIRST_FLAG && e.writeUint32(this.first_sample_flags);
        for (var n = 0; n < this.sample_count; n++) this.flags & u.TRUN_FLAGS_DURATION && e.writeUint32(this.sample_duration[n]), this.flags & u.TRUN_FLAGS_SIZE && e.writeUint32(this.sample_size[n]), this.flags & u.TRUN_FLAGS_FLAGS && e.writeUint32(this.sample_flags[n]), this.flags & u.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? e.writeUint32(this.sample_composition_time_offset[n]) : e.writeInt32(this.sample_composition_time_offset[n]));
    }),
    (u['url Box'].prototype.write = function (e) {
        (this.version = 0), this.location ? ((this.flags = 0), (this.size = this.location.length + 1)) : ((this.flags = 1), (this.size = 0)), this.writeHeader(e), this.location && e.writeCString(this.location);
    }),
    (u['urn Box'].prototype.write = function (e) {
        (this.version = 0), (this.flags = 0), (this.size = this.name.length + 1 + (this.location ? this.location.length + 1 : 0)), this.writeHeader(e), e.writeCString(this.name), this.location && e.writeCString(this.location);
    }),
    (u.vmhdBox.prototype.write = function (e) {
        (this.version = 0), (this.flags = 1), (this.size = 8), this.writeHeader(e), e.writeUint16(this.graphicsmode), e.writeUint16Array(this.opcolor);
    }),
    (u.cttsBox.prototype.unpack = function (e) {
        var n, r, i;
        for (n = 0, i = 0; n < this.sample_counts.length; n++) for (r = 0; r < this.sample_counts[n]; r++) (e[i].pts = e[i].dts + this.sample_offsets[n]), i++;
    }),
    (u.sttsBox.prototype.unpack = function (e) {
        var n, r, i;
        for (n = 0, i = 0; n < this.sample_counts.length; n++) for (r = 0; r < this.sample_counts[n]; r++) 0 === i ? (e[i].dts = 0) : (e[i].dts = e[i - 1].dts + this.sample_deltas[n]), i++;
    }),
    (u.stcoBox.prototype.unpack = function (e) {
        var n;
        for (n = 0; n < this.chunk_offsets.length; n++) e[n].offset = this.chunk_offsets[n];
    }),
    (u.stscBox.prototype.unpack = function (e) {
        var n, r, i, a, o;
        for (n = 0, a = 0, o = 0; n < this.first_chunk.length; n++)
            for (r = 0; r < (n + 1 < this.first_chunk.length ? this.first_chunk[n + 1] : 1 / 0); r++)
                for (o++, i = 0; i < this.samples_per_chunk[n]; i++) {
                    if (!e[a]) return;
                    (e[a].description_index = this.sample_description_index[n]), (e[a].chunk_index = o);
                    a++;
                }
    }),
    (u.stszBox.prototype.unpack = function (e) {
        var n;
        for (n = 0; n < this.sample_sizes.length; n++) e[n].size = this.sample_sizes[n];
    }),
    (u.DIFF_BOXES_PROP_NAMES = ['boxes', 'entries', 'references', 'subsamples', 'items', 'item_infos', 'extents', 'associations', 'subsegments', 'ranges', 'seekLists', 'seekPoints', 'esd', 'levels']),
    (u.DIFF_PRIMITIVE_ARRAY_PROP_NAMES = ['compatible_brands', 'matrix', 'opcolor', 'sample_counts', 'sample_counts', 'sample_deltas', 'first_chunk', 'samples_per_chunk', 'sample_sizes', 'chunk_offsets', 'sample_offsets', 'sample_description_index', 'sample_duration']),
    (u.boxEqualFields = function (e, n) {
        var r;
        if (e && !n) return !1;
        for (r in e) {
            if (!(u.DIFF_BOXES_PROP_NAMES.indexOf(r) > -1))
                if (e[r] instanceof u.Box || n[r] instanceof u.Box) continue;
                else {
                    if (void 0 === e[r] || void 0 === n[r]) continue;
                    if ('function' == typeof e[r] || 'function' == typeof n[r]) continue;
                    if ((e.subBoxNames && e.subBoxNames.indexOf(r.slice(0, 4)) > -1) || (n.subBoxNames && n.subBoxNames.indexOf(r.slice(0, 4)) > -1)) continue;
                    if ('data' === r || 'start' === r || 'size' === r || 'creation_time' === r || 'modification_time' === r) continue;
                    if (u.DIFF_PRIMITIVE_ARRAY_PROP_NAMES.indexOf(r) > -1) continue;
                    else if (e[r] !== n[r]) return !1;
                }
        }
        return !0;
    }),
    (u.boxEqual = function (e, n) {
        if (!u.boxEqualFields(e, n)) return !1;
        for (var r = 0; r < u.DIFF_BOXES_PROP_NAMES.length; r++) {
            var i = u.DIFF_BOXES_PROP_NAMES[r];
            if (e[i] && n[i] && !u.boxEqual(e[i], n[i])) return !1;
        }
        return !0;
    });
var c = function () {};
(c.prototype.parseSample = function (e) {
    var n,
        r,
        a = new i(e.buffer);
    for (n = []; !a.isEos(); ) (r = u.parseOneBox(a, !1)).code === u.OK && 'vttc' === r.box.type && n.push(r.box);
    return n;
}),
    (c.prototype.getText = function (e, n, r) {
        function i(e, n, r) {
            return (r = r || '0'), (e += '').length >= n ? e : Array(n - e.length + 1).join(r) + e;
        }
        function a(e) {
            var n = Math.floor(e / 3600),
                r = Math.floor((e - 3600 * n) / 60),
                a = Math.floor(e - 3600 * n - 60 * r),
                o = Math.floor((e - 3600 * n - 60 * r - a) * 1000);
            return '' + i(n, 2) + ':' + i(r, 2) + ':' + i(a, 2) + '.' + i(o, 3);
        }
        for (var o = this.parseSample(r), s = '', l = 0; l < o.length; l++) {
            var u = o[l];
            s += a(e) + ' --> ' + a(n) + '\r\n' + u.payl.text;
        }
        return s;
    });
var d = function () {};
d.prototype.parseSample = function (e) {
    var n,
        r = {};
    r.resources = [];
    var a = new i(e.data.buffer);
    if (e.subsamples && 0 !== e.subsamples.length) {
        if (((r.documentString = a.readString(e.subsamples[0].size)), e.subsamples.length > 1)) for (n = 1; n < e.subsamples.length; n++) r.resources[n] = a.readUint8Array(e.subsamples[n].size);
    } else r.documentString = a.readString(e.data.length);
    return 'undefined' != typeof DOMParser && (r.document = new DOMParser().parseFromString(r.documentString, 'application/xml')), r;
};
var f = function () {};
(f.prototype.parseSample = function (e) {
    return new i(e.data.buffer).readString(e.data.length);
}),
    (f.prototype.parseConfig = function (e) {
        var n = new i(e.buffer);
        return n.readUint32(), n.readCString();
    });
(n.XMLSubtitlein4Parser = d), (n.Textin4Parser = f);
var p = function (e) {
    (this.stream = e || new s()), (this.boxes = []), (this.mdats = []), (this.moofs = []), (this.isProgressive = !1), (this.moovStartFound = !1), (this.onMoovStart = null), (this.moovStartSent = !1), (this.onReady = null), (this.readySent = !1), (this.onSegment = null), (this.onSamples = null), (this.onError = null), (this.sampleListBuilt = !1), (this.fragmentedTracks = []), (this.extractedTracks = []), (this.isFragmentationInitialized = !1), (this.sampleProcessingStarted = !1), (this.nextMoofNumber = 0), (this.itemListBuilt = !1), (this.onSidx = null), (this.sidxSent = !1);
};
(p.prototype.setSegmentOptions = function (e, n, r) {
    var i = this.getTrackById(e);
    if (i) {
        var a = {};
        this.fragmentedTracks.push(a), (a.id = e), (a.user = n), (a.trak = i), (i.nextSample = 0), (a.segmentStream = null), (a.nb_samples = 1000), (a.rapAlignement = !0), r && (r.nbSamples && (a.nb_samples = r.nbSamples), r.rapAlignement && (a.rapAlignement = r.rapAlignement));
    }
}),
    (p.prototype.unsetSegmentOptions = function (e) {
        for (var n = -1, r = 0; r < this.fragmentedTracks.length; r++) this.fragmentedTracks[r].id == e && (n = r);
        n > -1 && this.fragmentedTracks.splice(n, 1);
    }),
    (p.prototype.setExtractionOptions = function (e, n, r) {
        var i = this.getTrackById(e);
        if (i) {
            var a = {};
            this.extractedTracks.push(a), (a.id = e), (a.user = n), (a.trak = i), (i.nextSample = 0), (a.nb_samples = 1000), (a.samples = []), r && r.nbSamples && (a.nb_samples = r.nbSamples);
        }
    }),
    (p.prototype.unsetExtractionOptions = function (e) {
        for (var n = -1, r = 0; r < this.extractedTracks.length; r++) this.extractedTracks[r].id == e && (n = r);
        n > -1 && this.extractedTracks.splice(n, 1);
    }),
    (p.prototype.parse = function () {
        var e,
            n,
            i,
            a = !1;
        if (!this.restoreParsePosition || !!this.restoreParsePosition())
            for (;;) {
                if (this.hasIncompleteMdat && this.hasIncompleteMdat()) {
                    if (this.processIncompleteMdat()) continue;
                    return;
                }
                if ((this.saveParsePosition && this.saveParsePosition(), (e = u.parseOneBox(this.stream, a)).code === u.ERR_NOT_ENOUGH_DATA)) {
                    if (!this.processIncompleteBox) return;
                    if (this.processIncompleteBox(e)) continue;
                    return;
                }
                switch (((i = 'uuid' !== (n = e.box).type ? n.type : n.uuid), this.boxes.push(n), i)) {
                    case 'mdat':
                        this.mdats.push(n);
                        break;
                    case 'moof':
                        this.moofs.push(n);
                        break;
                    case 'moov':
                        (this.moovStartFound = !0), 0 === this.mdats.length && (this.isProgressive = !0);
                    default:
                        void 0 !== this[i] && r.warn('ISOFile', 'Duplicate Box of type: ' + i + ', overriding previous occurrence'), (this[i] = n);
                }
                this.updateUsedBytes && this.updateUsedBytes(n, e);
            }
    }),
    (p.prototype.checkBuffer = function (e) {
        if (null == e) throw 'Buffer must be defined and non empty';
        if (void 0 === e.fileStart) throw 'Buffer must have a fileStart property';
        return 0 === e.byteLength ? (r.warn('ISOFile', 'Ignoring empty buffer (fileStart: ' + e.fileStart + ')'), this.stream.logBufferLevel(), !1) : (r.info('ISOFile', 'Processing buffer (fileStart: ' + e.fileStart + ')'), (e.usedBytes = 0), this.stream.insertBuffer(e), this.stream.logBufferLevel(), !!this.stream.initialized() || (r.warn('ISOFile', 'Not ready to start parsing'), !1));
    }),
    (p.prototype.appendBuffer = function (e, n) {
        var i;
        if (!!this.checkBuffer(e)) return this.parse(), this.moovStartFound && !this.moovStartSent && ((this.moovStartSent = !0), this.onMoovStart && this.onMoovStart()), this.moov ? (!this.sampleListBuilt && (this.buildSampleLists(), (this.sampleListBuilt = !0)), this.updateSampleLists(), this.onReady && !this.readySent && ((this.readySent = !0), this.onReady(this.getInfo())), this.processSamples(n), this.nextSeekPosition ? ((i = this.nextSeekPosition), (this.nextSeekPosition = void 0)) : (i = this.nextParsePosition), this.stream.getEndFilePositionAfter && (i = this.stream.getEndFilePositionAfter(i))) : (i = this.nextParsePosition ? this.nextParsePosition : 0), this.sidx && this.onSidx && !this.sidxSent && (this.onSidx(this.sidx), (this.sidxSent = !0)), this.meta && (this.flattenItemInfo && !this.itemListBuilt && (this.flattenItemInfo(), (this.itemListBuilt = !0)), this.processItems && this.processItems(this.onItem)), this.stream.cleanBuffers && (r.info('ISOFile', 'Done processing buffer (fileStart: ' + e.fileStart + ') - next buffer to fetch should have a fileStart position of ' + i), this.stream.logBufferLevel(), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0), r.info('ISOFile', 'Sample data size in memory: ' + this.getAllocatedSampleDataSize())), i;
    }),
    (p.prototype.getInfo = function () {
        var e,
            n,
            r,
            i,
            a,
            o,
            s = {},
            l = new Date('1904-01-01T00:00:00Z').getTime();
        if (this.moov)
            for (s.hasMoov = !0, s.duration = this.moov.mvhd.duration, s.timescale = this.moov.mvhd.timescale, s.isFragmented = null != this.moov.mvex, s.isFragmented && this.moov.mvex.mehd && (s.fragment_duration = this.moov.mvex.mehd.fragment_duration), s.isProgressive = this.isProgressive, s.hasIOD = null != this.moov.iods, s.brands = [], s.brands.push(this.ftyp.major_brand), s.brands = s.brands.concat(this.ftyp.compatible_brands), s.created = new Date(l + 1000 * this.moov.mvhd.creation_time), s.modified = new Date(l + 1000 * this.moov.mvhd.modification_time), s.tracks = [], s.audioTracks = [], s.videoTracks = [], s.subtitleTracks = [], s.metadataTracks = [], s.hintTracks = [], s.otherTracks = [], e = 0; e < this.moov.traks.length; e++) {
                if (((o = (r = this.moov.traks[e]).mdia.minf.stbl.stsd.entries[0]), (i = {}), s.tracks.push(i), (i.id = r.tkhd.track_id), (i.name = r.mdia.hdlr.name), (i.references = []), r.tref)) for (n = 0; n < r.tref.boxes.length; n++) (a = {}), i.references.push(a), (a.type = r.tref.boxes[n].type), (a.track_ids = r.tref.boxes[n].track_ids);
                r.edts && (i.edits = r.edts.elst.entries),
                    (i.created = new Date(l + 1000 * r.tkhd.creation_time)),
                    (i.modified = new Date(l + 1000 * r.tkhd.modification_time)),
                    (i.movie_duration = r.tkhd.duration),
                    (i.movie_timescale = s.timescale),
                    (i.layer = r.tkhd.layer),
                    (i.alternate_group = r.tkhd.alternate_group),
                    (i.volume = r.tkhd.volume),
                    (i.matrix = r.tkhd.matrix),
                    (i.track_width = r.tkhd.width / 65536),
                    (i.track_height = r.tkhd.height / 65536),
                    (i.timescale = r.mdia.mdhd.timescale),
                    (i.cts_shift = r.mdia.minf.stbl.cslg),
                    (i.duration = r.mdia.mdhd.duration),
                    (i.samples_duration = r.samples_duration),
                    (i.codec = o.getCodec()),
                    (i.kind =
                        r.udta && r.udta.kinds.length
                            ? r.udta.kinds[0]
                            : {
                                  schemeURI: '',
                                  value: ''
                              }),
                    (i.language = r.mdia.elng ? r.mdia.elng.extended_language : r.mdia.mdhd.languageString),
                    (i.nb_samples = r.samples.length),
                    (i.size = r.samples_size),
                    (i.bitrate = (8 * i.size * i.timescale) / i.samples_duration),
                    o.isAudio() ? ((i.type = 'audio'), s.audioTracks.push(i), (i.audio = {}), (i.audio.sample_rate = o.getSampleRate()), (i.audio.channel_count = o.getChannelCount()), (i.audio.sample_size = o.getSampleSize())) : o.isVideo() ? ((i.type = 'video'), s.videoTracks.push(i), (i.video = {}), (i.video.width = o.getWidth()), (i.video.height = o.getHeight())) : o.isSubtitle() ? ((i.type = 'subtitles'), s.subtitleTracks.push(i)) : o.isHint() ? ((i.type = 'metadata'), s.hintTracks.push(i)) : o.isMetadata() ? ((i.type = 'metadata'), s.metadataTracks.push(i)) : ((i.type = 'metadata'), s.otherTracks.push(i));
            }
        else s.hasMoov = !1;
        if (((s.mime = ''), s.hasMoov && s.tracks)) {
            for (s.videoTracks && s.videoTracks.length > 0 ? (s.mime += 'video/mp4; codecs="') : s.audioTracks && s.audioTracks.length > 0 ? (s.mime += 'audio/mp4; codecs="') : (s.mime += 'application/mp4; codecs="'), e = 0; e < s.tracks.length; e++) 0 !== e && (s.mime += ','), (s.mime += s.tracks[e].codec);
            (s.mime += '"; profiles="'), (s.mime += this.ftyp.compatible_brands.join()), (s.mime += '"');
        }
        return s;
    }),
    (p.prototype.processSamples = function (e) {
        if (this.sampleProcessingStarted) {
            if (this.isFragmentationInitialized && null !== this.onSegment)
                for (n = 0; n < this.fragmentedTracks.length; n++) {
                    var n,
                        i,
                        a = this.fragmentedTracks[n];
                    for (i = a.trak; i.nextSample < i.samples.length && this.sampleProcessingStarted; ) {
                        r.debug('ISOFile', 'Creating media fragment on track #' + a.id + ' for sample ' + i.nextSample);
                        var o = this.createFragment(a.id, i.nextSample, a.segmentStream);
                        if (o) (a.segmentStream = o), i.nextSample++;
                        else break;
                        if ((i.nextSample % a.nb_samples == 0 || e || i.nextSample >= i.samples.length) && (r.info('ISOFile', 'Sending fragmented data on track #' + a.id + ' for samples [' + Math.max(0, i.nextSample - a.nb_samples) + ',' + (i.nextSample - 1) + ']'), r.info('ISOFile', 'Sample data size in memory: ' + this.getAllocatedSampleDataSize()), this.onSegment && this.onSegment(a.id, a.user, a.segmentStream.buffer, i.nextSample, e || i.nextSample >= i.samples.length), (a.segmentStream = null), a !== this.fragmentedTracks[n])) break;
                    }
                }
            if (null !== this.onSamples)
                for (n = 0; n < this.extractedTracks.length; n++) {
                    var s = this.extractedTracks[n];
                    for (i = s.trak; i.nextSample < i.samples.length && this.sampleProcessingStarted; ) {
                        r.debug('ISOFile', 'Exporting on track #' + s.id + ' sample #' + i.nextSample);
                        var l = this.getSample(i, i.nextSample);
                        if (l) i.nextSample++, s.samples.push(l);
                        else break;
                        if ((i.nextSample % s.nb_samples == 0 || i.nextSample >= i.samples.length) && (r.debug('ISOFile', 'Sending samples on track #' + s.id + ' for sample ' + i.nextSample), this.onSamples && this.onSamples(s.id, s.user, s.samples), (s.samples = []), s !== this.extractedTracks[n])) break;
                    }
                }
        }
    }),
    (p.prototype.getBox = function (e) {
        var n = this.getBoxes(e, !0);
        return n.length ? n[0] : null;
    }),
    (p.prototype.getBoxes = function (e, n) {
        var r = [];
        return p._sweep.call(this, e, r, n), r;
    }),
    (p._sweep = function (e, n, r) {
        for (var i in (this.type && this.type == e && n.push(this), this.boxes)) {
            if (n.length && r) return;
            p._sweep.call(this.boxes[i], e, n, r);
        }
    }),
    (p.prototype.getTrackSamplesInfo = function (e) {
        var n = this.getTrackById(e);
        return n ? n.samples : void 0;
    }),
    (p.prototype.getTrackSample = function (e, n) {
        var r = this.getTrackById(e);
        return this.getSample(r, n);
    }),
    (p.prototype.releaseUsedSamples = function (e, n) {
        var i = 0,
            a = this.getTrackById(e);
        !a.lastValidSample && (a.lastValidSample = 0);
        for (var o = a.lastValidSample; o < n; o++) i += this.releaseSample(a, o);
        r.info('ISOFile', 'Track #' + e + ' released samples up to ' + n + ' (released size: ' + i + ', remaining: ' + this.samplesDataSize + ')'), (a.lastValidSample = n);
    }),
    (p.prototype.start = function () {
        (this.sampleProcessingStarted = !0), this.processSamples(!1);
    }),
    (p.prototype.stop = function () {
        this.sampleProcessingStarted = !1;
    }),
    (p.prototype.flush = function () {
        r.info('ISOFile', 'Flushing remaining samples'), this.updateSampleLists(), this.processSamples(!0), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0);
    }),
    (p.prototype.seekTrack = function (e, n, i) {
        var a,
            o,
            s,
            l = 1 / 0,
            u = 0,
            c = 0;
        if (0 === i.samples.length)
            return (
                r.info('ISOFile', 'No sample in track, cannot seek! Using time ' + r.getDurationString(0, 1) + ' and offset: 0'),
                {
                    offset: 0,
                    time: 0
                }
            );
        for (a = 0; a < i.samples.length; a++) {
            if (((o = i.samples[a]), 0 === a)) (c = 0), (s = o.timescale);
            else if (o.cts > e * o.timescale) {
                c = a - 1;
                break;
            }
            n && o.is_sync && (u = a);
        }
        for (n && (c = u), e = i.samples[c].cts, i.nextSample = c; i.samples[c].alreadyRead === i.samples[c].size && i.samples[c + 1]; ) {
            c++;
        }
        return (
            (l = i.samples[c].offset + i.samples[c].alreadyRead),
            r.info('ISOFile', 'Seeking to ' + (n ? 'RAP' : '') + ' sample #' + i.nextSample + ' on track ' + i.tkhd.track_id + ', time ' + r.getDurationString(e, s) + ' and offset: ' + l),
            {
                offset: l,
                time: e / s
            }
        );
    }),
    (p.prototype.seek = function (e, n) {
        var i,
            a,
            o,
            s = this.moov,
            l = {
                offset: 1 / 0,
                time: 1 / 0
            };
        if (this.moov) {
            for (o = 0; o < s.traks.length; o++) (i = s.traks[o]), (a = this.seekTrack(e, n, i)).offset < l.offset && (l.offset = a.offset), a.time < l.time && (l.time = a.time);
            return (
                r.info('ISOFile', 'Seeking at time ' + r.getDurationString(l.time, 1) + ' needs a buffer with a fileStart position of ' + l.offset),
                l.offset === 1 / 0
                    ? (l = {
                          offset: this.nextParsePosition,
                          time: 0
                      })
                    : (l.offset = this.stream.getEndFilePositionAfter(l.offset)),
                r.info('ISOFile', 'Adjusted seek position (after checking data already in buffer): ' + l.offset),
                l
            );
        }
        throw 'Cannot seek: moov not received!';
    }),
    (p.prototype.equal = function (e) {
        for (var n = 0; n < this.boxes.length && n < e.boxes.length; ) {
            var r = this.boxes[n],
                i = e.boxes[n];
            if (!u.boxEqual(r, i)) return !1;
            n++;
        }
        return !0;
    });
(n.ISOFile = p),
    (p.prototype.lastBoxStartPosition = 0),
    (p.prototype.parsingMdat = null),
    (p.prototype.nextParsePosition = 0),
    (p.prototype.discardMdatData = !1),
    (p.prototype.processIncompleteBox = function (e) {
        var n;
        if ('mdat' === e.type) return ((n = new u[e.type + 'Box'](e.size)), (this.parsingMdat = n), this.boxes.push(n), this.mdats.push(n), (n.start = e.start), (n.hdr_size = e.hdr_size), this.stream.addUsedBytes(n.hdr_size), (this.lastBoxStartPosition = n.start + n.size), this.stream.seek(n.start + n.size, !1, this.discardMdatData)) ? ((this.parsingMdat = null), !0) : (this.moovStartFound ? (this.nextParsePosition = this.stream.findEndContiguousBuf()) : (this.nextParsePosition = n.start + n.size), !1);
        return ('moov' === e.type && ((this.moovStartFound = !0), 0 === this.mdats.length && (this.isProgressive = !0)), this.stream.mergeNextBuffer && this.stream.mergeNextBuffer()) ? ((this.nextParsePosition = this.stream.getEndPosition()), !0) : (e.type ? (this.moovStartFound ? (this.nextParsePosition = this.stream.getEndPosition()) : (this.nextParsePosition = this.stream.getPosition() + e.size)) : (this.nextParsePosition = this.stream.getEndPosition()), !1);
    }),
    (p.prototype.hasIncompleteMdat = function () {
        return null !== this.parsingMdat;
    }),
    (p.prototype.processIncompleteMdat = function () {
        var e;
        return ((e = this.parsingMdat), this.stream.seek(e.start + e.size, !1, this.discardMdatData)) ? (r.debug('ISOFile', "Found 'mdat' end in buffered data"), (this.parsingMdat = null), !0) : ((this.nextParsePosition = this.stream.findEndContiguousBuf()), !1);
    }),
    (p.prototype.restoreParsePosition = function () {
        return this.stream.seek(this.lastBoxStartPosition, !0, this.discardMdatData);
    }),
    (p.prototype.saveParsePosition = function () {
        this.lastBoxStartPosition = this.stream.getPosition();
    }),
    (p.prototype.updateUsedBytes = function (e, n) {
        this.stream.addUsedBytes && ('mdat' === e.type ? (this.stream.addUsedBytes(e.hdr_size), this.discardMdatData && this.stream.addUsedBytes(e.size - e.hdr_size)) : this.stream.addUsedBytes(e.size));
    }),
    (p.prototype.add = u.Box.prototype.add),
    (p.prototype.addBox = u.Box.prototype.addBox),
    (p.prototype.init = function (e) {
        var n = e || {};
        this.add('ftyp')
            .set('major_brand', (n.brands && n.brands[0]) || 'iso4')
            .set('minor_version', 0)
            .set('compatible_brands', n.brands || ['iso4']);
        var r = this.add('moov');
        return (
            r
                .add('mvhd')
                .set('timescale', n.timescale || 600)
                .set('rate', n.rate || 65536)
                .set('creation_time', 0)
                .set('modification_time', 0)
                .set('duration', n.duration || 0)
                .set('volume', n.width ? 0 : 256)
                .set('matrix', [65536, 0, 0, 0, 65536, 0, 0, 0, 1073741824])
                .set('next_track_id', 1),
            r.add('mvex'),
            this
        );
    }),
    (p.prototype.addTrack = function (e) {
        !this.moov && this.init(e);
        var n = e || {};
        (n.width = n.width || 320), (n.height = n.height || 320), (n.id = n.id || this.moov.mvhd.next_track_id), (n.type = n.type || 'avc1');
        var r = this.moov.add('trak');
        (this.moov.mvhd.next_track_id = n.id + 1),
            r
                .add('tkhd')
                .set('flags', u.TKHD_FLAG_ENABLED | u.TKHD_FLAG_IN_MOVIE | u.TKHD_FLAG_IN_PREVIEW)
                .set('creation_time', 0)
                .set('modification_time', 0)
                .set('track_id', n.id)
                .set('duration', n.duration || 0)
                .set('layer', n.layer || 0)
                .set('alternate_group', 0)
                .set('volume', 1)
                .set('matrix', [0, 0, 0, 0, 0, 0, 0, 0, 0])
                .set('width', n.width << 16)
                .set('height', n.height << 16);
        var a = r.add('mdia');
        a
            .add('mdhd')
            .set('creation_time', 0)
            .set('modification_time', 0)
            .set('timescale', n.timescale || 1)
            .set('duration', n.media_duration || 0)
            .set('language', n.language || 'und'),
            a
                .add('hdlr')
                .set('handler', n.hdlr || 'vide')
                .set('name', n.name || 'Track created with MP4Box.js'),
            a.add('elng').set('extended_language', n.language || 'fr-FR');
        var o = a.add('minf');
        if (void 0 !== u[n.type + 'SampleEntry']) {
            var s = new u[n.type + 'SampleEntry']();
            s.data_reference_index = 1;
            var l = '';
            for (var c in u.sampleEntryCodes) {
                for (var d = u.sampleEntryCodes[c], f = 0; f < d.length; f++)
                    if (d.indexOf(n.type) > -1) {
                        l = c;
                        break;
                    }
            }
            switch (l) {
                case 'Visual':
                    if (
                        (o.add('vmhd').set('graphicsmode', 0).set('opcolor', [0, 0, 0]),
                        s
                            .set('width', n.width)
                            .set('height', n.height)
                            .set('horizresolution', 4718592)
                            .set('vertresolution', 4718592)
                            .set('frame_count', 1)
                            .set('compressorname', n.type + ' Compressor')
                            .set('depth', 24),
                        n.avcDecoderConfigRecord)
                    ) {
                        var p = new u.avcCBox(),
                            h = new i(n.avcDecoderConfigRecord);
                        p.parse(h), s.addBox(p);
                    }
                    break;
                case 'Audio':
                    o.add('smhd').set('balance', n.balance || 0),
                        s
                            .set('channel_count', n.channel_count || 2)
                            .set('samplesize', n.samplesize || 16)
                            .set('samplerate', n.samplerate || 65536);
                    break;
                case 'Hint':
                    o.add('hmhd');
                    break;
                case 'Subtitle':
                    if ((o.add('sthd'), 'stpp' === n.type))
                        s.set('namespace', n.namespace || 'nonamespace')
                            .set('schema_location', n.schema_location || '')
                            .set('auxiliary_mime_types', n.auxiliary_mime_types || '');
                    break;
                case 'Metadata':
                case 'System':
                    o.add('nmhd');
                    break;
                default:
                    o.add('nmhd');
            }
            n.description && s.addBox(n.description),
                n.description_boxes &&
                    n.description_boxes.forEach(function (e) {
                        s.addBox(e);
                    }),
                o.add('dinf').add('dref').addEntry(new u['url Box']().set('flags', 1));
            var _ = o.add('stbl');
            return (
                _.add('stsd').addEntry(s),
                _.add('stts').set('sample_counts', []).set('sample_deltas', []),
                _.add('stsc').set('first_chunk', []).set('samples_per_chunk', []).set('sample_description_index', []),
                _.add('stco').set('chunk_offsets', []),
                _.add('stsz').set('sample_sizes', []),
                this.moov.mvex
                    .add('trex')
                    .set('track_id', n.id)
                    .set('default_sample_description_index', n.default_sample_description_index || 1)
                    .set('default_sample_duration', n.default_sample_duration || 0)
                    .set('default_sample_size', n.default_sample_size || 0)
                    .set('default_sample_flags', n.default_sample_flags || 0),
                this.buildTrakSampleLists(r),
                n.id
            );
        }
    }),
    (u.Box.prototype.computeSize = function (e) {
        var n = e || new a();
        (n.endianness = a.BIG_ENDIAN), this.write(n);
    }),
    (p.prototype.addSample = function (e, n, r) {
        var i = r || {},
            a = {},
            o = this.getTrackById(e);
        if (null !== o) {
            (a.number = o.samples.length), (a.track_id = o.tkhd.track_id), (a.timescale = o.mdia.mdhd.timescale), (a.description_index = i.sample_description_index ? i.sample_description_index - 1 : 0), (a.description = o.mdia.minf.stbl.stsd.entries[a.description_index]), (a.data = n), (a.size = n.byteLength), (a.alreadyRead = a.size), (a.duration = i.duration || 1), (a.cts = i.cts || 0), (a.dts = i.dts || 0), (a.is_sync = i.is_sync || !1), (a.is_leading = i.is_leading || 0), (a.depends_on = i.depends_on || 0), (a.is_depended_on = i.is_depended_on || 0), (a.has_redundancy = i.has_redundancy || 0), (a.degradation_priority = i.degradation_priority || 0), (a.offset = 0), (a.subsamples = i.subsamples), o.samples.push(a), (o.samples_size += a.size), (o.samples_duration += a.duration), !o.first_dts && (o.first_dts = i.dts), this.processSamples();
            var s = this.createSingleSampleMoof(a);
            return this.addBox(s), s.computeSize(), (s.trafs[0].truns[0].data_offset = s.size + 8), (this.add('mdat').data = new Uint8Array(n)), a;
        }
    }),
    (p.prototype.createSingleSampleMoof = function (e) {
        var n = 0;
        n = e.is_sync ? 33554432 : 65536;
        var r = new u.moofBox();
        r.add('mfhd').set('sequence_number', this.nextMoofNumber), this.nextMoofNumber++;
        var i = r.add('traf'),
            a = this.getTrackById(e.track_id);
        return (
            i.add('tfhd').set('track_id', e.track_id).set('flags', u.TFHD_FLAG_DEFAULT_BASE_IS_MOOF),
            i.add('tfdt').set('baseMediaDecodeTime', e.dts - (a.first_dts || 0)),
            i
                .add('trun')
                .set('flags', u.TRUN_FLAGS_DATA_OFFSET | u.TRUN_FLAGS_DURATION | u.TRUN_FLAGS_SIZE | u.TRUN_FLAGS_FLAGS | u.TRUN_FLAGS_CTS_OFFSET)
                .set('data_offset', 0)
                .set('first_sample_flags', 0)
                .set('sample_count', 1)
                .set('sample_duration', [e.duration])
                .set('sample_size', [e.size])
                .set('sample_flags', [n])
                .set('sample_composition_time_offset', [e.cts - e.dts]),
            r
        );
    }),
    (p.prototype.lastMoofIndex = 0),
    (p.prototype.samplesDataSize = 0),
    (p.prototype.resetTables = function () {
        for (e = 0, this.initial_duration = this.moov.mvhd.duration, this.moov.mvhd.duration = 0; e < this.moov.traks.length; e++) {
            ((n = this.moov.traks[e]).tkhd.duration = 0), (n.mdia.mdhd.duration = 0), ((n.mdia.minf.stbl.stco || n.mdia.minf.stbl.co64).chunk_offsets = []), ((r = n.mdia.minf.stbl.stsc).first_chunk = []), (r.samples_per_chunk = []), (r.sample_description_index = []), ((n.mdia.minf.stbl.stsz || n.mdia.minf.stbl.stz2).sample_sizes = []), ((i = n.mdia.minf.stbl.stts).sample_counts = []), (i.sample_deltas = []), (a = n.mdia.minf.stbl.ctts) && ((a.sample_counts = []), (a.sample_offsets = [])), (o = n.mdia.minf.stbl.stss);
            var e,
                n,
                r,
                i,
                a,
                o,
                s = n.mdia.minf.stbl.boxes.indexOf(o);
            -1 != s && (n.mdia.minf.stbl.boxes[s] = null);
        }
    }),
    (p.initSampleGroups = function (e, n, r, i, a) {
        var o, s, l, u;
        function c(e, n, r) {
            (this.grouping_type = e), (this.grouping_type_parameter = n), (this.sbgp = r), (this.last_sample_in_run = -1), (this.entry_index = -1);
        }
        for (n && (n.sample_groups_info = []), !e.sample_groups_info && (e.sample_groups_info = []), s = 0; s < r.length; s++) {
            for (u = r[s].grouping_type + '/' + r[s].grouping_type_parameter, l = new c(r[s].grouping_type, r[s].grouping_type_parameter, r[s]), n && (n.sample_groups_info[u] = l), !e.sample_groups_info[u] && (e.sample_groups_info[u] = l), o = 0; o < i.length; o++) i[o].grouping_type === r[s].grouping_type && ((l.description = i[o]), (l.description.used = !0));
            if (a) for (o = 0; o < a.length; o++) a[o].grouping_type === r[s].grouping_type && ((l.fragment_description = a[o]), (l.fragment_description.used = !0), (l.is_fragment = !0));
        }
        if (n) {
            if (a) for (s = 0; s < a.length; s++) !a[s].used && a[s].version >= 2 && ((u = a[s].grouping_type + '/0'), ((l = new c(a[s].grouping_type, 0)).is_fragment = !0), !n.sample_groups_info[u] && (n.sample_groups_info[u] = l));
        } else for (s = 0; s < i.length; s++) !i[s].used && i[s].version >= 2 && ((u = i[s].grouping_type + '/0'), (l = new c(i[s].grouping_type, 0)), !e.sample_groups_info[u] && (e.sample_groups_info[u] = l));
    }),
    (p.setSampleGroupProperties = function (e, n, r, i) {
        var a, o, s;
        for (a in ((n.sample_groups = []), i)) (n.sample_groups[a] = {}), (n.sample_groups[a].grouping_type = i[a].grouping_type), (n.sample_groups[a].grouping_type_parameter = i[a].grouping_type_parameter), r >= i[a].last_sample_in_run && (i[a].last_sample_in_run < 0 && (i[a].last_sample_in_run = 0), i[a].entry_index++, i[a].entry_index <= i[a].sbgp.entries.length - 1 && (i[a].last_sample_in_run += i[a].sbgp.entries[i[a].entry_index].sample_count)), i[a].entry_index <= i[a].sbgp.entries.length - 1 ? (n.sample_groups[a].group_description_index = i[a].sbgp.entries[i[a].entry_index].group_description_index) : (n.sample_groups[a].group_description_index = -1), 0 !== n.sample_groups[a].group_description_index && ((s = i[a].fragment_description ? i[a].fragment_description : i[a].description), n.sample_groups[a].group_description_index > 0 ? ((o = n.sample_groups[a].group_description_index > 65535 ? (n.sample_groups[a].group_description_index >> 16) - 1 : n.sample_groups[a].group_description_index - 1), s && o >= 0 && (n.sample_groups[a].description = s.entries[o])) : s && s.version >= 2 && s.default_group_description_index > 0 && (n.sample_groups[a].description = s.entries[s.default_group_description_index - 1]));
    }),
    (p.process_sdtp = function (e, n, r) {
        if (!!n) e ? ((n.is_leading = e.is_leading[r]), (n.depends_on = e.sample_depends_on[r]), (n.is_depended_on = e.sample_is_depended_on[r]), (n.has_redundancy = e.sample_has_redundancy[r])) : ((n.is_leading = 0), (n.depends_on = 0), (n.is_depended_on = 0), (n.has_redundancy = 0));
    }),
    (p.prototype.buildSampleLists = function () {
        var e, n;
        for (e = 0; e < this.moov.traks.length; e++) (n = this.moov.traks[e]), this.buildTrakSampleLists(n);
    }),
    (p.prototype.buildTrakSampleLists = function (e) {
        if (((e.samples = []), (e.samples_duration = 0), (e.samples_size = 0), (r = e.mdia.minf.stbl.stco || e.mdia.minf.stbl.co64), (i = e.mdia.minf.stbl.stsc), (a = e.mdia.minf.stbl.stsz || e.mdia.minf.stbl.stz2), (o = e.mdia.minf.stbl.stts), (s = e.mdia.minf.stbl.ctts), (l = e.mdia.minf.stbl.stss), (u = e.mdia.minf.stbl.stsd), (c = e.mdia.minf.stbl.subs), (h = e.mdia.minf.stbl.stdp), (d = e.mdia.minf.stbl.sbgps), (f = e.mdia.minf.stbl.sgpds), (y = -1), (b = -1), (I = -1), (T = -1), (S = 0), (A = 0), (C = 0), p.initSampleGroups(e, null, d, f), void 0 !== a)) {
            for (n = 0; n < a.sample_sizes.length; n++) {
                var n,
                    r,
                    i,
                    a,
                    o,
                    s,
                    l,
                    u,
                    c,
                    d,
                    f,
                    h,
                    _,
                    m,
                    g,
                    E,
                    v,
                    y,
                    b,
                    I,
                    T,
                    S,
                    A,
                    C,
                    N = {};
                (N.number = n), (N.track_id = e.tkhd.track_id), (N.timescale = e.mdia.mdhd.timescale), (N.alreadyRead = 0), (e.samples[n] = N), (N.size = a.sample_sizes[n]), (e.samples_size += N.size), 0 === n ? ((m = 1), (_ = 0), (N.chunk_index = m), (N.chunk_run_index = _), (v = i.samples_per_chunk[_]), (E = 0), (g = _ + 1 < i.first_chunk.length ? i.first_chunk[_ + 1] - 1 : 1 / 0)) : n < v ? ((N.chunk_index = m), (N.chunk_run_index = _)) : (m++, (N.chunk_index = m), (E = 0), m <= g || (g = ++_ + 1 < i.first_chunk.length ? i.first_chunk[_ + 1] - 1 : 1 / 0), (N.chunk_run_index = _), (v += i.samples_per_chunk[_])), (N.description_index = i.sample_description_index[N.chunk_run_index] - 1), (N.description = u.entries[N.description_index]), (N.offset = r.chunk_offsets[N.chunk_index - 1] + E), (E += N.size), n > y && (b++, y < 0 && (y = 0), (y += o.sample_counts[b])), n > 0 ? ((e.samples[n - 1].duration = o.sample_deltas[b]), (e.samples_duration += e.samples[n - 1].duration), (N.dts = e.samples[n - 1].dts + e.samples[n - 1].duration)) : (N.dts = 0), s ? (n >= I && (T++, I < 0 && (I = 0), (I += s.sample_counts[T])), (N.cts = e.samples[n].dts + s.sample_offsets[T])) : (N.cts = N.dts), l ? (n == l.sample_numbers[S] - 1 ? ((N.is_sync = !0), S++) : ((N.is_sync = !1), (N.degradation_priority = 0)), c && c.entries[A].sample_delta + C == n + 1 && ((N.subsamples = c.entries[A].subsamples), (C += c.entries[A].sample_delta), A++)) : (N.is_sync = !0), p.process_sdtp(e.mdia.minf.stbl.sdtp, N, N.number), h ? (N.degradation_priority = h.priority[n]) : (N.degradation_priority = 0), c && c.entries[A].sample_delta + C == n && ((N.subsamples = c.entries[A].subsamples), (C += c.entries[A].sample_delta)), (d.length > 0 || f.length > 0) && p.setSampleGroupProperties(e, N, n, e.sample_groups_info);
            }
            n > 0 && ((e.samples[n - 1].duration = Math.max(e.mdia.mdhd.duration - e.samples[n - 1].dts, 0)), (e.samples_duration += e.samples[n - 1].duration));
        }
    }),
    (p.prototype.updateSampleLists = function () {
        if (void 0 !== this.moov) {
            for (; this.lastMoofIndex < this.moofs.length; )
                if (((c = this.moofs[this.lastMoofIndex]), this.lastMoofIndex++, 'moof' == c.type))
                    for (e = 0, d = c; e < d.trafs.length; e++) {
                        for (f = d.trafs[e], h = this.getTrackById(f.tfhd.track_id), _ = this.getTrexById(f.tfhd.track_id), i = f.tfhd.flags & u.TFHD_FLAG_SAMPLE_DESC ? f.tfhd.default_sample_description_index : _ ? _.default_sample_description_index : 1, a = f.tfhd.flags & u.TFHD_FLAG_SAMPLE_DUR ? f.tfhd.default_sample_duration : _ ? _.default_sample_duration : 0, o = f.tfhd.flags & u.TFHD_FLAG_SAMPLE_SIZE ? f.tfhd.default_sample_size : _ ? _.default_sample_size : 0, s = f.tfhd.flags & u.TFHD_FLAG_SAMPLE_FLAGS ? f.tfhd.default_sample_flags : _ ? _.default_sample_flags : 0, f.sample_number = 0, f.sbgps.length > 0 && p.initSampleGroups(h, f, f.sbgps, h.mdia.minf.stbl.sgpds, f.sgpds), n = 0; n < f.truns.length; n++) {
                            var e,
                                n,
                                r,
                                i,
                                a,
                                o,
                                s,
                                l,
                                c,
                                d,
                                f,
                                h,
                                _,
                                m,
                                g,
                                E = f.truns[n];
                            for (r = 0; r < E.sample_count; r++) {
                                ((m = {}).moof_number = this.lastMoofIndex), (m.number_in_traf = f.sample_number), f.sample_number++, (m.number = h.samples.length), (f.first_sample_index = h.samples.length), h.samples.push(m), (m.track_id = h.tkhd.track_id), (m.timescale = h.mdia.mdhd.timescale), (m.description_index = i - 1), (m.description = h.mdia.minf.stbl.stsd.entries[m.description_index]), (m.size = o), E.flags & u.TRUN_FLAGS_SIZE && (m.size = E.sample_size[r]), (h.samples_size += m.size), (m.duration = a), E.flags & u.TRUN_FLAGS_DURATION && (m.duration = E.sample_duration[r]), (h.samples_duration += m.duration), h.first_traf_merged || r > 0 ? (m.dts = h.samples[h.samples.length - 2].dts + h.samples[h.samples.length - 2].duration) : (f.tfdt ? (m.dts = f.tfdt.baseMediaDecodeTime) : (m.dts = 0), (h.first_traf_merged = !0)), (m.cts = m.dts), E.flags & u.TRUN_FLAGS_CTS_OFFSET && (m.cts = m.dts + E.sample_composition_time_offset[r]), (g = s), E.flags & u.TRUN_FLAGS_FLAGS ? (g = E.sample_flags[r]) : 0 === r && E.flags & u.TRUN_FLAGS_FIRST_FLAG && (g = E.first_sample_flags), (m.is_sync = !((g >> 16) & 1)), (m.is_leading = (g >> 26) & 3), (m.depends_on = (g >> 24) & 3), (m.is_depended_on = (g >> 22) & 3), (m.has_redundancy = (g >> 20) & 3), (m.degradation_priority = 65535 & g);
                                var v = !!(f.tfhd.flags & u.TFHD_FLAG_BASE_DATA_OFFSET),
                                    y = !!(f.tfhd.flags & u.TFHD_FLAG_DEFAULT_BASE_IS_MOOF),
                                    b = !!(E.flags & u.TRUN_FLAGS_DATA_OFFSET),
                                    I = 0;
                                (I = v ? f.tfhd.base_data_offset : y ? d.start : 0 === n ? d.start : l), 0 === n && 0 === r ? (b ? (m.offset = I + E.data_offset) : (m.offset = I)) : (m.offset = l), (l = m.offset + m.size), (f.sbgps.length > 0 || f.sgpds.length > 0 || h.mdia.minf.stbl.sbgps.length > 0 || h.mdia.minf.stbl.sgpds.length > 0) && p.setSampleGroupProperties(h, m, m.number_in_traf, f.sample_groups_info);
                            }
                        }
                        if (f.subs) {
                            h.has_fragment_subsamples = !0;
                            var T = f.first_sample_index;
                            for (n = 0; n < f.subs.entries.length; n++) (T += f.subs.entries[n].sample_delta), ((m = h.samples[T - 1]).subsamples = f.subs.entries[n].subsamples);
                        }
                    }
        }
    }),
    (p.prototype.getSample = function (e, n) {
        var i,
            o = e.samples[n];
        if (!this.moov) return null;
        if (o.data) {
            if (o.alreadyRead == o.size) return o;
        } else (o.data = new Uint8Array(o.size)), (o.alreadyRead = 0), (this.samplesDataSize += o.size), r.debug('ISOFile', 'Allocating sample #' + n + ' on track #' + e.tkhd.track_id + ' of size ' + o.size + ' (total: ' + this.samplesDataSize + ')');
        for (;;) {
            var s = this.stream.findPosition(!0, o.offset + o.alreadyRead, !1);
            if (!(s > -1)) return null;
            var l = (i = this.stream.buffers[s]).byteLength - (o.offset + o.alreadyRead - i.fileStart);
            if (o.size - o.alreadyRead <= l) return r.debug('ISOFile', 'Getting sample #' + n + ' data (alreadyRead: ' + o.alreadyRead + ' offset: ' + (o.offset + o.alreadyRead - i.fileStart) + ' read size: ' + (o.size - o.alreadyRead) + ' full size: ' + o.size + ')'), a.memcpy(o.data.buffer, o.alreadyRead, i, o.offset + o.alreadyRead - i.fileStart, o.size - o.alreadyRead), (i.usedBytes += o.size - o.alreadyRead), this.stream.logBufferLevel(), (o.alreadyRead = o.size), o;
            if (0 === l) return null;
            r.debug('ISOFile', 'Getting sample #' + n + ' partial data (alreadyRead: ' + o.alreadyRead + ' offset: ' + (o.offset + o.alreadyRead - i.fileStart) + ' read size: ' + l + ' full size: ' + o.size + ')'), a.memcpy(o.data.buffer, o.alreadyRead, i, o.offset + o.alreadyRead - i.fileStart, l), (o.alreadyRead += l), (i.usedBytes += l), this.stream.logBufferLevel();
        }
    }),
    (p.prototype.releaseSample = function (e, n) {
        var r = e.samples[n];
        return r.data ? ((this.samplesDataSize -= r.size), (r.data = null), (r.alreadyRead = 0), r.size) : 0;
    }),
    (p.prototype.getAllocatedSampleDataSize = function () {
        return this.samplesDataSize;
    }),
    (p.prototype.getCodecs = function () {
        var e,
            n = '';
        for (e = 0; e < this.moov.traks.length; e++) {
            var r = this.moov.traks[e];
            e > 0 && (n += ','), (n += r.mdia.minf.stbl.stsd.entries[0].getCodec());
        }
        return n;
    }),
    (p.prototype.getTrexById = function (e) {
        var n;
        if (!this.moov || !this.moov.mvex) return null;
        for (n = 0; n < this.moov.mvex.trexs.length; n++) {
            var r = this.moov.mvex.trexs[n];
            if (r.track_id == e) return r;
        }
        return null;
    }),
    (p.prototype.getTrackById = function (e) {
        if (void 0 === this.moov) return null;
        for (var n = 0; n < this.moov.traks.length; n++) {
            var r = this.moov.traks[n];
            if (r.tkhd.track_id == e) return r;
        }
        return null;
    }),
    (p.prototype.items = []),
    (p.prototype.itemsDataSize = 0),
    (p.prototype.flattenItemInfo = function () {
        var e = this.items,
            n = this.meta;
        if (null != n && void 0 !== n.hdlr) {
            if (void 0 !== n.iinf) {
                for (i = 0; i < n.iinf.item_infos.length; i++) ((o = {}).id = n.iinf.item_infos[i].item_ID), (e[o.id] = o), (o.ref_to = []), (o.name = n.iinf.item_infos[i].item_name), n.iinf.item_infos[i].protection_index > 0 && (o.protection = n.ipro.protections[n.iinf.item_infos[i].protection_index - 1]), n.iinf.item_infos[i].item_type ? (o.type = n.iinf.item_infos[i].item_type) : (o.type = 'mime'), (o.content_type = n.iinf.item_infos[i].content_type), (o.content_encoding = n.iinf.item_infos[i].content_encoding);
                if (n.iloc)
                    for (i = 0; i < n.iloc.items.length; i++) {
                        var i,
                            a,
                            o,
                            s = n.iloc.items[i];
                        switch (((o = e[s.item_ID]), 0 !== s.data_reference_index && (r.warn('Item storage with reference to other files: not supported'), (o.source = n.dinf.boxes[s.data_reference_index - 1])), s.construction_method)) {
                            case 0:
                                break;
                            case 1:
                                r.warn('Item storage with construction_method : not supported');
                                break;
                            case 2:
                                r.warn('Item storage with construction_method : not supported');
                        }
                        for (a = 0, o.extents = [], o.size = 0; a < s.extents.length; a++) (o.extents[a] = {}), (o.extents[a].offset = s.extents[a].extent_offset + s.base_offset), (o.extents[a].length = s.extents[a].extent_length), (o.extents[a].alreadyRead = 0), (o.size += o.extents[a].length);
                    }
                if ((n.pitm && (e[n.pitm.item_id].primary = !0), n.iref))
                    for (i = 0; i < n.iref.references.length; i++) {
                        var l = n.iref.references[i];
                        for (a = 0; a < l.references.length; a++)
                            e[l.from_item_ID].ref_to.push({
                                type: l.type,
                                id: l.references[a]
                            });
                    }
                if (n.iprp)
                    for (var u = 0; u < n.iprp.ipmas.length; u++) {
                        var c = n.iprp.ipmas[u];
                        for (i = 0; i < c.associations.length; i++) {
                            var d = c.associations[i];
                            for (void 0 === (o = e[d.id]).properties && ((o.properties = {}), (o.properties.boxes = [])), a = 0; a < d.props.length; a++) {
                                var f = d.props[a];
                                if (f.property_index > 0 && f.property_index - 1 < n.iprp.ipco.boxes.length) {
                                    var p = n.iprp.ipco.boxes[f.property_index - 1];
                                    (o.properties[p.type] = p), o.properties.boxes.push(p);
                                }
                            }
                        }
                    }
            }
        }
    }),
    (p.prototype.getItem = function (e) {
        if (!this.meta) return null;
        if (!(i = this.items[e]).data && i.size) (i.data = new Uint8Array(i.size)), (i.alreadyRead = 0), (this.itemsDataSize += i.size), r.debug('ISOFile', 'Allocating item #' + e + ' of size ' + i.size + ' (total: ' + this.itemsDataSize + ')');
        else if (i.alreadyRead === i.size) return i;
        for (var n, i, o = 0; o < i.extents.length; o++) {
            var s = i.extents[o];
            if (s.alreadyRead !== s.length) {
                var l = this.stream.findPosition(!0, s.offset + s.alreadyRead, !1);
                if (!(l > -1)) return null;
                var u = (n = this.stream.buffers[l]).byteLength - (s.offset + s.alreadyRead - n.fileStart);
                if (!(s.length - s.alreadyRead <= u)) return r.debug('ISOFile', 'Getting item #' + e + ' extent #' + o + ' partial data (alreadyRead: ' + s.alreadyRead + ' offset: ' + (s.offset + s.alreadyRead - n.fileStart) + ' read size: ' + u + ' full extent size: ' + s.length + ' full item size: ' + i.size + ')'), a.memcpy(i.data.buffer, i.alreadyRead, n, s.offset + s.alreadyRead - n.fileStart, u), (s.alreadyRead += u), (i.alreadyRead += u), (n.usedBytes += u), this.stream.logBufferLevel(), null;
                r.debug('ISOFile', 'Getting item #' + e + ' extent #' + o + ' data (alreadyRead: ' + s.alreadyRead + ' offset: ' + (s.offset + s.alreadyRead - n.fileStart) + ' read size: ' + (s.length - s.alreadyRead) + ' full extent size: ' + s.length + ' full item size: ' + i.size + ')'), a.memcpy(i.data.buffer, i.alreadyRead, n, s.offset + s.alreadyRead - n.fileStart, s.length - s.alreadyRead), (n.usedBytes += s.length - s.alreadyRead), this.stream.logBufferLevel(), (i.alreadyRead += s.length - s.alreadyRead), (s.alreadyRead = s.length);
            }
        }
        return i.alreadyRead === i.size ? i : null;
    }),
    (p.prototype.releaseItem = function (e) {
        var n = this.items[e];
        if (!n.data) return 0;
        (this.itemsDataSize -= n.size), (n.data = null), (n.alreadyRead = 0);
        for (var r = 0; r < n.extents.length; r++) n.extents[r].alreadyRead = 0;
        return n.size;
    }),
    (p.prototype.processItems = function (e) {
        for (var n in this.items) {
            var r = this.items[n];
            this.getItem(r.id), e && !r.sent && (e(r), (r.sent = !0), (r.data = null));
        }
    }),
    (p.prototype.hasItem = function (e) {
        for (var n in this.items) {
            var r = this.items[n];
            if (r.name === e) return r.id;
        }
        return -1;
    }),
    (p.prototype.getMetaHandler = function () {
        return this.meta ? this.meta.hdlr.handler : null;
    }),
    (p.prototype.getPrimaryItem = function () {
        return this.meta && this.meta.pitm ? this.getItem(this.meta.pitm.item_id) : null;
    }),
    (p.prototype.itemToFragmentedTrackFile = function (e) {
        var n = e || {},
            r = null;
        if (null == (r = n.itemId ? this.getItem(n.itemId) : this.getPrimaryItem())) return null;
        var i = new p();
        i.discardMdatData = !1;
        var a = {
            type: r.type,
            description_boxes: r.properties.boxes
        };
        r.properties.ispe && ((a.width = r.properties.ispe.image_width), (a.height = r.properties.ispe.image_height));
        var o = i.addTrack(a);
        return o ? (i.addSample(o, r.data), i) : null;
    }),
    (p.prototype.write = function (e) {
        for (var n = 0; n < this.boxes.length; n++) this.boxes[n].write(e);
    }),
    (p.prototype.createFragment = function (e, n, i) {
        var o = this.getTrackById(e),
            s = this.getSample(o, n);
        if (null == s) return (s = o.samples[n]), this.nextSeekPosition ? (this.nextSeekPosition = Math.min(s.offset + s.alreadyRead, this.nextSeekPosition)) : (this.nextSeekPosition = o.samples[n].offset + s.alreadyRead), null;
        var l = i || new a();
        l.endianness = a.BIG_ENDIAN;
        var c = this.createSingleSampleMoof(s);
        c.write(l), (c.trafs[0].truns[0].data_offset = c.size + 8), r.debug('MP4Box', 'Adjusting data_offset with new value ' + c.trafs[0].truns[0].data_offset), l.adjustUint32(c.trafs[0].truns[0].data_offset_position, c.trafs[0].truns[0].data_offset);
        var d = new u.mdatBox();
        return (d.data = s.data), d.write(l), l;
    }),
    (p.writeInitializationSegment = function (e, n, i, o) {
        r.debug('ISOFile', 'Generating initialization segment');
        var s,
            l = new a();
        (l.endianness = a.BIG_ENDIAN), e.write(l);
        var u = n.add('mvex');
        for (i && u.add('mehd').set('fragment_duration', i), s = 0; s < n.traks.length; s++) u.add('trex').set('track_id', n.traks[s].tkhd.track_id).set('default_sample_description_index', 1).set('default_sample_duration', o).set('default_sample_size', 0).set('default_sample_flags', 65536);
        return n.write(l), l.buffer;
    }),
    (p.prototype.save = function (e) {
        var n = new a();
        (n.endianness = a.BIG_ENDIAN), this.write(n), n.save(e);
    }),
    (p.prototype.getBuffer = function () {
        var e = new a();
        return (e.endianness = a.BIG_ENDIAN), this.write(e), e.buffer;
    }),
    (p.prototype.initializeSegmentation = function () {
        for (null === this.onSegment && r.warn('MP4Box', 'No segmentation callback set!'), !this.isFragmentationInitialized && ((this.isFragmentationInitialized = !0), (this.nextMoofNumber = 0), this.resetTables()), n = [], e = 0; e < this.fragmentedTracks.length; e++) {
            var e,
                n,
                i,
                a,
                o = new u.moovBox();
            (o.mvhd = this.moov.mvhd), o.boxes.push(o.mvhd), (i = this.getTrackById(this.fragmentedTracks[e].id)), o.boxes.push(i), o.traks.push(i), ((a = {}).id = i.tkhd.track_id), (a.user = this.fragmentedTracks[e].user), (a.buffer = p.writeInitializationSegment(this.ftyp, o, this.moov.mvex && this.moov.mvex.mehd ? this.moov.mvex.mehd.fragment_duration : void 0, this.moov.traks[e].samples.length > 0 ? this.moov.traks[e].samples[0].duration : 0)), n.push(a);
        }
        return n;
    }),
    (u.Box.prototype.printHeader = function (e) {
        (this.size += 8), this.size > o && (this.size += 8), 'uuid' === this.type && (this.size += 16), e.log(e.indent + 'size:' + this.size), e.log(e.indent + 'type:' + this.type);
    }),
    (u.FullBox.prototype.printHeader = function (e) {
        (this.size += 4), u.Box.prototype.printHeader.call(this, e), e.log(e.indent + 'version:' + this.version), e.log(e.indent + 'flags:' + this.flags);
    }),
    (u.Box.prototype.print = function (e) {
        this.printHeader(e);
    }),
    (u.ContainerBox.prototype.print = function (e) {
        this.printHeader(e);
        for (var n = 0; n < this.boxes.length; n++)
            if (this.boxes[n]) {
                var r = e.indent;
                (e.indent += ' '), this.boxes[n].print(e), (e.indent = r);
            }
    }),
    (p.prototype.print = function (e) {
        e.indent = '';
        for (var n = 0; n < this.boxes.length; n++) this.boxes[n] && this.boxes[n].print(e);
    }),
    (u.mvhdBox.prototype.print = function (e) {
        u.FullBox.prototype.printHeader.call(this, e), e.log(e.indent + 'creation_time: ' + this.creation_time), e.log(e.indent + 'modification_time: ' + this.modification_time), e.log(e.indent + 'timescale: ' + this.timescale), e.log(e.indent + 'duration: ' + this.duration), e.log(e.indent + 'rate: ' + this.rate), e.log(e.indent + 'volume: ' + (this.volume >> 8)), e.log(e.indent + 'matrix: ' + this.matrix.join(', ')), e.log(e.indent + 'next_track_id: ' + this.next_track_id);
    }),
    (u.tkhdBox.prototype.print = function (e) {
        u.FullBox.prototype.printHeader.call(this, e), e.log(e.indent + 'creation_time: ' + this.creation_time), e.log(e.indent + 'modification_time: ' + this.modification_time), e.log(e.indent + 'track_id: ' + this.track_id), e.log(e.indent + 'duration: ' + this.duration), e.log(e.indent + 'volume: ' + (this.volume >> 8)), e.log(e.indent + 'matrix: ' + this.matrix.join(', ')), e.log(e.indent + 'layer: ' + this.layer), e.log(e.indent + 'alternate_group: ' + this.alternate_group), e.log(e.indent + 'width: ' + this.width), e.log(e.indent + 'height: ' + this.height);
    });
var h = {};
h.createFile = function (e, n) {
    var r = void 0 === e || e,
        i = new p(n);
    return (i.discardMdatData = !r), i;
};
n.createFile = h.createFile;
