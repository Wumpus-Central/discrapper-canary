var i = n(413135).Buffer;
!(function (e) {
    function t() {}
    function n(e, t) {
        if (((t = void 0 === t ? { fatal: !1 } : t), -1 === o.indexOf((e = void 0 === e ? 'utf-8' : e).toLowerCase()))) throw RangeError("Failed to construct 'TextDecoder': The encoding label provided ('" + e + "') is invalid.");
        if (t.fatal) throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.");
    }
    function r(e) {
        return i.from(e.buffer, e.byteOffset, e.byteLength).toString('utf-8');
    }
    function a(e) {
        var t = URL.createObjectURL(new Blob([e], { type: 'text/plain;charset=UTF-8' }));
        try {
            var n = new XMLHttpRequest();
            return n.open('GET', t, !1), n.send(), n.responseText;
        } catch (t) {
            return s(e);
        } finally {
            URL.revokeObjectURL(t);
        }
    }
    function s(e) {
        for (var t = 0, n = Math.min(65536, e.length + 1), i = new Uint16Array(n), r = [], a = 0; ; ) {
            var s = t < e.length;
            if (!s || a >= n - 1) {
                if ((r.push(String.fromCharCode.apply(null, i.subarray(0, a))), !s)) return r.join('');
                (e = e.subarray(t)), (a = t = 0);
            }
            if (0 == (128 & (s = e[t++]))) i[a++] = s;
            else if (192 == (224 & s)) {
                var o = 63 & e[t++];
                i[a++] = ((31 & s) << 6) | o;
            } else if (224 == (240 & s)) {
                o = 63 & e[t++];
                var l = 63 & e[t++];
                i[a++] = ((31 & s) << 12) | (o << 6) | l;
            } else 240 == (248 & s) && ((o = 63 & e[t++]), 65535 < (s = ((7 & s) << 18) | (o << 12) | ((l = 63 & e[t++]) << 6) | (63 & e[t++])) && ((s -= 65536), (i[a++] = ((s >>> 10) & 1023) | 55296), (s = 56320 | (1023 & s))), (i[a++] = s));
        }
    }
    if (!e.TextEncoder || !e.TextDecoder) {
        var o = ['utf-8', 'utf8', 'unicode-1-1-utf-8'];
        Object.defineProperty(t.prototype, 'encoding', { value: 'utf-8' }),
            (t.prototype.encode = function (e, t) {
                if ((t = void 0 === t ? { stream: !1 } : t).stream) throw Error("Failed to encode: the 'stream' option is unsupported.");
                t = 0;
                for (var n = e.length, i = 0, r = Math.max(32, n + (n >>> 1) + 7), a = new Uint8Array((r >>> 3) << 3); t < n; ) {
                    var s = e.charCodeAt(t++);
                    if (55296 <= s && 56319 >= s) {
                        if (t < n) {
                            var o = e.charCodeAt(t);
                            56320 == (64512 & o) && (++t, (s = ((1023 & s) << 10) + (1023 & o) + 65536));
                        }
                        if (55296 <= s && 56319 >= s) continue;
                    }
                    if ((i + 4 > a.length && ((r += 8), (r *= 1 + (t / e.length) * 2), (o = new Uint8Array((r = (r >>> 3) << 3))).set(a), (a = o)), 0 == (4294967168 & s))) a[i++] = s;
                    else {
                        if (0 == (4294965248 & s)) a[i++] = ((s >>> 6) & 31) | 192;
                        else if (0 == (4294901760 & s)) (a[i++] = ((s >>> 12) & 15) | 224), (a[i++] = ((s >>> 6) & 63) | 128);
                        else {
                            if (0 != (4292870144 & s)) continue;
                            (a[i++] = ((s >>> 18) & 7) | 240), (a[i++] = ((s >>> 12) & 63) | 128), (a[i++] = ((s >>> 6) & 63) | 128);
                        }
                        a[i++] = (63 & s) | 128;
                    }
                }
                return a.slice ? a.slice(0, i) : a.subarray(0, i);
            }),
            Object.defineProperty(n.prototype, 'encoding', { value: 'utf-8' }),
            Object.defineProperty(n.prototype, 'fatal', { value: !1 }),
            Object.defineProperty(n.prototype, 'ignoreBOM', { value: !1 });
        var l = s;
        'function' == typeof i && i.from ? (l = r) : 'function' == typeof Blob && 'function' == typeof URL && 'function' == typeof URL.createObjectURL && (l = a),
            (n.prototype.decode = function (e, t) {
                if ((t = void 0 === t ? { stream: !1 } : t).stream) throw Error("Failed to decode: the 'stream' option is unsupported.");
                return (e = e instanceof Uint8Array ? e : new Uint8Array(e.buffer instanceof ArrayBuffer ? e.buffer : e)), l(e);
            }),
            (e.TextEncoder = t),
            (e.TextDecoder = n);
    }
})('undefined' != typeof window ? window : void 0 !== n.g ? n.g : this);
