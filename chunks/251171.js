var r = n(413135).Buffer;
!(function (e) {
    function t() {}
    function n(e, t) {
        if (((t = void 0 === t ? { fatal: !1 } : t), -1 === s.indexOf((e = void 0 === e ? 'utf-8' : e).toLowerCase()))) throw RangeError("Failed to construct 'TextDecoder': The encoding label provided ('" + e + "') is invalid.");
        if (t.fatal) throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.");
    }
    function i(e) {
        return r.from(e.buffer, e.byteOffset, e.byteLength).toString('utf-8');
    }
    function o(e) {
        var t = URL.createObjectURL(new Blob([e], { type: 'text/plain;charset=UTF-8' }));
        try {
            var n = new XMLHttpRequest();
            return n.open('GET', t, !1), n.send(), n.responseText;
        } catch (t) {
            return a(e);
        } finally {
            URL.revokeObjectURL(t);
        }
    }
    function a(e) {
        for (var t = 0, n = Math.min(65536, e.length + 1), r = new Uint16Array(n), i = [], o = 0; ; ) {
            var a = t < e.length;
            if (!a || o >= n - 1) {
                if ((i.push(String.fromCharCode.apply(null, r.subarray(0, o))), !a)) return i.join('');
                (e = e.subarray(t)), (o = t = 0);
            }
            if (0 == (128 & (a = e[t++]))) r[o++] = a;
            else if (192 == (224 & a)) {
                var s = 63 & e[t++];
                r[o++] = ((31 & a) << 6) | s;
            } else if (224 == (240 & a)) {
                s = 63 & e[t++];
                var l = 63 & e[t++];
                r[o++] = ((31 & a) << 12) | (s << 6) | l;
            } else 240 == (248 & a) && ((s = 63 & e[t++]), 65535 < (a = ((7 & a) << 18) | (s << 12) | ((l = 63 & e[t++]) << 6) | (63 & e[t++])) && ((a -= 65536), (r[o++] = ((a >>> 10) & 1023) | 55296), (a = 56320 | (1023 & a))), (r[o++] = a));
        }
    }
    if (!e.TextEncoder || !e.TextDecoder) {
        var s = ['utf-8', 'utf8', 'unicode-1-1-utf-8'];
        Object.defineProperty(t.prototype, 'encoding', { value: 'utf-8' }),
            (t.prototype.encode = function (e, t) {
                if ((t = void 0 === t ? { stream: !1 } : t).stream) throw Error("Failed to encode: the 'stream' option is unsupported.");
                t = 0;
                for (var n = e.length, r = 0, i = Math.max(32, n + (n >>> 1) + 7), o = new Uint8Array((i >>> 3) << 3); t < n; ) {
                    var a = e.charCodeAt(t++);
                    if (55296 <= a && 56319 >= a) {
                        if (t < n) {
                            var s = e.charCodeAt(t);
                            56320 == (64512 & s) && (++t, (a = ((1023 & a) << 10) + (1023 & s) + 65536));
                        }
                        if (55296 <= a && 56319 >= a) continue;
                    }
                    if ((r + 4 > o.length && ((i += 8), (i *= 1 + (t / e.length) * 2), (s = new Uint8Array((i = (i >>> 3) << 3))).set(o), (o = s)), 0 == (4294967168 & a))) o[r++] = a;
                    else {
                        if (0 == (4294965248 & a)) o[r++] = ((a >>> 6) & 31) | 192;
                        else if (0 == (4294901760 & a)) (o[r++] = ((a >>> 12) & 15) | 224), (o[r++] = ((a >>> 6) & 63) | 128);
                        else {
                            if (0 != (4292870144 & a)) continue;
                            (o[r++] = ((a >>> 18) & 7) | 240), (o[r++] = ((a >>> 12) & 63) | 128), (o[r++] = ((a >>> 6) & 63) | 128);
                        }
                        o[r++] = (63 & a) | 128;
                    }
                }
                return o.slice ? o.slice(0, r) : o.subarray(0, r);
            }),
            Object.defineProperty(n.prototype, 'encoding', { value: 'utf-8' }),
            Object.defineProperty(n.prototype, 'fatal', { value: !1 }),
            Object.defineProperty(n.prototype, 'ignoreBOM', { value: !1 });
        var l = a;
        'function' == typeof r && r.from ? (l = i) : 'function' == typeof Blob && 'function' == typeof URL && 'function' == typeof URL.createObjectURL && (l = o),
            (n.prototype.decode = function (e, t) {
                if ((t = void 0 === t ? { stream: !1 } : t).stream) throw Error("Failed to decode: the 'stream' option is unsupported.");
                return (e = e instanceof Uint8Array ? e : new Uint8Array(e.buffer instanceof ArrayBuffer ? e.buffer : e)), l(e);
            }),
            (e.TextEncoder = t),
            (e.TextDecoder = n);
    }
})('undefined' != typeof window ? window : void 0 !== n.g ? n.g : this);
