var r = n(264572).Buffer;
!(function (e) {
    function t() {}
    function n(e, t) {
        if (((t = void 0 === t ? { fatal: !1 } : t), -1 === o.indexOf((e = void 0 === e ? "utf-8" : e).toLowerCase())))
            throw RangeError(
                "Failed to construct 'TextDecoder': The encoding label provided ('" + e + "') is invalid.",
            );
        if (t.fatal) throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.");
    }
    function i(e) {
        return r.from(e.buffer, e.byteOffset, e.byteLength).toString("utf-8");
    }
    function a(e) {
        var t = URL.createObjectURL(new Blob([e], { type: "text/plain;charset=UTF-8" }));
        try {
            var n = new XMLHttpRequest();
            return n.open("GET", t, !1), n.send(), n.responseText;
        } catch (t) {
            return s(e);
        } finally {
            URL.revokeObjectURL(t);
        }
    }
    function s(e) {
        for (var t = 0, n = Math.min(65536, e.length + 1), r = new Uint16Array(n), i = [], a = 0; ; ) {
            var s = t < e.length;
            if (!s || a >= n - 1) {
                if ((i.push(String.fromCharCode.apply(null, r.subarray(0, a))), !s)) return i.join("");
                (e = e.subarray(t)), (a = t = 0);
            }
            if (0 == (128 & (s = e[t++]))) r[a++] = s;
            else if (192 == (224 & s)) {
                var o = 63 & e[t++];
                r[a++] = ((31 & s) << 6) | o;
            } else if (224 == (240 & s)) {
                o = 63 & e[t++];
                var l = 63 & e[t++];
                r[a++] = ((31 & s) << 12) | (o << 6) | l;
            } else
                240 == (248 & s) &&
                    ((o = 63 & e[t++]),
                    65535 < (s = ((7 & s) << 18) | (o << 12) | ((l = 63 & e[t++]) << 6) | (63 & e[t++])) &&
                        ((s -= 65536), (r[a++] = ((s >>> 10) & 1023) | 55296), (s = 56320 | (1023 & s))),
                    (r[a++] = s));
        }
    }
    if (!e.TextEncoder || !e.TextDecoder) {
        var o = ["utf-8", "utf8", "unicode-1-1-utf-8"];
        Object.defineProperty(t.prototype, "encoding", { value: "utf-8" }),
            (t.prototype.encode = function (e, t) {
                if ((t = void 0 === t ? { stream: !1 } : t).stream)
                    throw Error("Failed to encode: the 'stream' option is unsupported.");
                t = 0;
                for (
                    var n = e.length, r = 0, i = Math.max(32, n + (n >>> 1) + 7), a = new Uint8Array((i >>> 3) << 3);
                    t < n;
                ) {
                    var s = e.charCodeAt(t++);
                    if (55296 <= s && 56319 >= s) {
                        if (t < n) {
                            var o = e.charCodeAt(t);
                            56320 == (64512 & o) && (++t, (s = ((1023 & s) << 10) + (1023 & o) + 65536));
                        }
                        if (55296 <= s && 56319 >= s) continue;
                    }
                    if (
                        (r + 4 > a.length &&
                            ((i += 8),
                            (i *= 1 + (t / e.length) * 2),
                            (o = new Uint8Array((i = (i >>> 3) << 3))).set(a),
                            (a = o)),
                        0 == (0xffffff80 & s))
                    )
                        a[r++] = s;
                    else {
                        if (0 == (0xfffff800 & s)) a[r++] = ((s >>> 6) & 31) | 192;
                        else if (0 == (0xffff0000 & s))
                            (a[r++] = ((s >>> 12) & 15) | 224), (a[r++] = ((s >>> 6) & 63) | 128);
                        else {
                            if (0 != (0xffe00000 & s)) continue;
                            (a[r++] = ((s >>> 18) & 7) | 240),
                                (a[r++] = ((s >>> 12) & 63) | 128),
                                (a[r++] = ((s >>> 6) & 63) | 128);
                        }
                        a[r++] = (63 & s) | 128;
                    }
                }
                return a.slice ? a.slice(0, r) : a.subarray(0, r);
            }),
            Object.defineProperty(n.prototype, "encoding", { value: "utf-8" }),
            Object.defineProperty(n.prototype, "fatal", { value: !1 }),
            Object.defineProperty(n.prototype, "ignoreBOM", { value: !1 });
        var l = s;
        "function" == typeof r && r.from
            ? (l = i)
            : "function" == typeof Blob &&
              "function" == typeof URL &&
              "function" == typeof URL.createObjectURL &&
              (l = a),
            (n.prototype.decode = function (e, t) {
                if ((t = void 0 === t ? { stream: !1 } : t).stream)
                    throw Error("Failed to decode: the 'stream' option is unsupported.");
                return (
                    (e = e instanceof Uint8Array ? e : new Uint8Array(e.buffer instanceof ArrayBuffer ? e.buffer : e)),
                    l(e)
                );
            }),
            (e.TextEncoder = t),
            (e.TextDecoder = n);
    }
})("u" > typeof window ? window : void 0 !== n.g ? n.g : this);
