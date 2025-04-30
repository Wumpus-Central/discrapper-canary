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
    function a(e) {
        var t = URL.createObjectURL(new Blob([e], { type: 'text/plain;charset=UTF-8' }));
        try {
            var n = new XMLHttpRequest();
            return n.open('GET', t, !1), n.send(), n.responseText;
        } catch (t) {
            return o(e);
        } finally {
            URL.revokeObjectURL(t);
        }
    }
    function o(e) {
        for (var t = 0, n = Math.min(65536, e.length + 1), r = new Uint16Array(n), i = [], a = 0; ; ) {
            var o = t < e.length;
            if (!o || a >= n - 1) {
                if ((i.push(String.fromCharCode.apply(null, r.subarray(0, a))), !o)) return i.join('');
                (e = e.subarray(t)), (a = t = 0);
            }
            if (0 == (128 & (o = e[t++]))) r[a++] = o;
            else if (192 == (224 & o)) {
                var s = 63 & e[t++];
                r[a++] = ((31 & o) << 6) | s;
            } else if (224 == (240 & o)) {
                s = 63 & e[t++];
                var l = 63 & e[t++];
                r[a++] = ((31 & o) << 12) | (s << 6) | l;
            } else 240 == (248 & o) && ((s = 63 & e[t++]), 65535 < (o = ((7 & o) << 18) | (s << 12) | ((l = 63 & e[t++]) << 6) | (63 & e[t++])) && ((o -= 65536), (r[a++] = ((o >>> 10) & 1023) | 55296), (o = 56320 | (1023 & o))), (r[a++] = o));
        }
    }
    if (!e.TextEncoder || !e.TextDecoder) {
        var s = ['utf-8', 'utf8', 'unicode-1-1-utf-8'];
        Object.defineProperty(t.prototype, 'encoding', { value: 'utf-8' }),
            (t.prototype.encode = function (e, t) {
                if ((t = void 0 === t ? { stream: !1 } : t).stream) throw Error("Failed to encode: the 'stream' option is unsupported.");
                t = 0;
                for (var n = e.length, r = 0, i = Math.max(32, n + (n >>> 1) + 7), a = new Uint8Array((i >>> 3) << 3); t < n; ) {
                    var o = e.charCodeAt(t++);
                    if (55296 <= o && 56319 >= o) {
                        if (t < n) {
                            var s = e.charCodeAt(t);
                            56320 == (64512 & s) && (++t, (o = ((1023 & o) << 10) + (1023 & s) + 65536));
                        }
                        if (55296 <= o && 56319 >= o) continue;
                    }
                    if ((r + 4 > a.length && ((i += 8), (i *= 1 + (t / e.length) * 2), (s = new Uint8Array((i = (i >>> 3) << 3))).set(a), (a = s)), 0 == (4294967168 & o))) a[r++] = o;
                    else {
                        if (0 == (4294965248 & o)) a[r++] = ((o >>> 6) & 31) | 192;
                        else if (0 == (4294901760 & o)) (a[r++] = ((o >>> 12) & 15) | 224), (a[r++] = ((o >>> 6) & 63) | 128);
                        else {
                            if (0 != (4292870144 & o)) continue;
                            (a[r++] = ((o >>> 18) & 7) | 240), (a[r++] = ((o >>> 12) & 63) | 128), (a[r++] = ((o >>> 6) & 63) | 128);
                        }
                        a[r++] = (63 & o) | 128;
                    }
                }
                return a.slice ? a.slice(0, r) : a.subarray(0, r);
            }),
            Object.defineProperty(n.prototype, 'encoding', { value: 'utf-8' }),
            Object.defineProperty(n.prototype, 'fatal', { value: !1 }),
            Object.defineProperty(n.prototype, 'ignoreBOM', { value: !1 });
        var l = o;
        'function' == typeof r && r.from ? (l = i) : 'function' == typeof Blob && 'function' == typeof URL && 'function' == typeof URL.createObjectURL && (l = a),
            (n.prototype.decode = function (e, t) {
                if ((t = void 0 === t ? { stream: !1 } : t).stream) throw Error("Failed to decode: the 'stream' option is unsupported.");
                return (e = e instanceof Uint8Array ? e : new Uint8Array(e.buffer instanceof ArrayBuffer ? e.buffer : e)), l(e);
            }),
            (e.TextEncoder = t),
            (e.TextDecoder = n);
    }
})('undefined' != typeof window ? window : void 0 !== n.g ? n.g : this);
