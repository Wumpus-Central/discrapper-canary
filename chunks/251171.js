var i = r(413135).Buffer;
!(function (e) {
    function n() {}
    function r(e, n) {
        if (((n = void 0 === n ? { fatal: !1 } : n), -1 === l.indexOf((e = void 0 === e ? 'utf-8' : e).toLowerCase()))) throw RangeError("Failed to construct 'TextDecoder': The encoding label provided ('" + e + "') is invalid.");
        if (n.fatal) throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.");
    }
    function a(e) {
        return i.from(e.buffer, e.byteOffset, e.byteLength).toString('utf-8');
    }
    function o(e) {
        var n = URL.createObjectURL(new Blob([e], { type: 'text/plain;charset=UTF-8' }));
        try {
            var r = new XMLHttpRequest();
            return r.open('GET', n, !1), r.send(), r.responseText;
        } catch (n) {
            return s(e);
        } finally {
            URL.revokeObjectURL(n);
        }
    }
    function s(e) {
        for (var n = 0, r = Math.min(65536, e.length + 1), i = new Uint16Array(r), a = [], o = 0; ; ) {
            var s = n < e.length;
            if (!s || o >= r - 1) {
                if ((a.push(String.fromCharCode.apply(null, i.subarray(0, o))), !s)) return a.join('');
                (e = e.subarray(n)), (o = n = 0);
            }
            if (0 == (128 & (s = e[n++]))) i[o++] = s;
            else if (192 == (224 & s)) {
                var l = 63 & e[n++];
                i[o++] = ((31 & s) << 6) | l;
            } else if (224 == (240 & s)) {
                l = 63 & e[n++];
                var u = 63 & e[n++];
                i[o++] = ((31 & s) << 12) | (l << 6) | u;
            } else 240 == (248 & s) && ((l = 63 & e[n++]), (u = 63 & e[n++]), 65535 < (s = ((7 & s) << 18) | (l << 12) | (u << 6) | (63 & e[n++])) && ((s -= 65536), (i[o++] = ((s >>> 10) & 1023) | 55296), (s = 56320 | (1023 & s))), (i[o++] = s));
        }
    }
    if (!e.TextEncoder || !e.TextDecoder) {
        var l = ['utf-8', 'utf8', 'unicode-1-1-utf-8'];
        Object.defineProperty(n.prototype, 'encoding', { value: 'utf-8' }),
            (n.prototype.encode = function (e, n) {
                if ((n = void 0 === n ? { stream: !1 } : n).stream) throw Error("Failed to encode: the 'stream' option is unsupported.");
                n = 0;
                for (var r = e.length, i = 0, a = Math.max(32, r + (r >>> 1) + 7), o = new Uint8Array((a >>> 3) << 3); n < r; ) {
                    var s = e.charCodeAt(n++);
                    if (55296 <= s && 56319 >= s) {
                        if (n < r) {
                            var l = e.charCodeAt(n);
                            56320 == (64512 & l) && (++n, (s = ((1023 & s) << 10) + (1023 & l) + 65536));
                        }
                        if (55296 <= s && 56319 >= s) continue;
                    }
                    if ((i + 4 > o.length && ((a += 8), (a *= 1 + (n / e.length) * 2), (l = new Uint8Array((a = (a >>> 3) << 3))).set(o), (o = l)), 0 == (4294967168 & s))) o[i++] = s;
                    else {
                        if (0 == (4294965248 & s)) o[i++] = ((s >>> 6) & 31) | 192;
                        else if (0 == (4294901760 & s)) (o[i++] = ((s >>> 12) & 15) | 224), (o[i++] = ((s >>> 6) & 63) | 128);
                        else {
                            if (0 != (4292870144 & s)) continue;
                            (o[i++] = ((s >>> 18) & 7) | 240), (o[i++] = ((s >>> 12) & 63) | 128), (o[i++] = ((s >>> 6) & 63) | 128);
                        }
                        o[i++] = (63 & s) | 128;
                    }
                }
                return o.slice ? o.slice(0, i) : o.subarray(0, i);
            }),
            Object.defineProperty(r.prototype, 'encoding', { value: 'utf-8' }),
            Object.defineProperty(r.prototype, 'fatal', { value: !1 }),
            Object.defineProperty(r.prototype, 'ignoreBOM', { value: !1 });
        var u = s;
        'function' == typeof i && i.from ? (u = a) : 'function' == typeof Blob && 'function' == typeof URL && 'function' == typeof URL.createObjectURL && (u = o),
            (r.prototype.decode = function (e, n) {
                if ((n = void 0 === n ? { stream: !1 } : n).stream) throw Error("Failed to decode: the 'stream' option is unsupported.");
                return (e = e instanceof Uint8Array ? e : new Uint8Array(e.buffer instanceof ArrayBuffer ? e.buffer : e)), u(e);
            }),
            (e.TextEncoder = n),
            (e.TextDecoder = r);
    }
})('undefined' != typeof window ? window : void 0 !== r.g ? r.g : this);
