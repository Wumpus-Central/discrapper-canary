var i = n(264572).Buffer;
!(function (e) {
    function t() {}
    function n(e, t) {
        if (((t = void 0 === t ? { fatal: !1 } : t), -1 === s.indexOf((e = void 0 === e ? "utf-8" : e).toLowerCase())))
            throw RangeError(
                "Failed to construct 'TextDecoder': The encoding label provided ('" + e + "') is invalid.",
            );
        if (t.fatal) throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.");
    }
    function r(e) {
        for (var t = 0, n = Math.min(65536, e.length + 1), i = new Uint16Array(n), r = [], s = 0; ; ) {
            var a = t < e.length;
            if (!a || s >= n - 1) {
                if ((r.push(String.fromCharCode.apply(null, i.subarray(0, s))), !a)) return r.join("");
                (e = e.subarray(t)), (s = t = 0);
            }
            if (0 == (128 & (a = e[t++]))) i[s++] = a;
            else if (192 == (224 & a)) {
                var o = 63 & e[t++];
                i[s++] = ((31 & a) << 6) | o;
            } else if (224 == (240 & a)) {
                o = 63 & e[t++];
                var l = 63 & e[t++];
                i[s++] = ((31 & a) << 12) | (o << 6) | l;
            } else
                240 == (248 & a) &&
                    ((o = 63 & e[t++]),
                    65535 < (a = ((7 & a) << 18) | (o << 12) | ((l = 63 & e[t++]) << 6) | (63 & e[t++])) &&
                        ((a -= 65536), (i[s++] = ((a >>> 10) & 1023) | 55296), (a = 56320 | (1023 & a))),
                    (i[s++] = a));
        }
    }
    if (!e.TextEncoder || !e.TextDecoder) {
        var s = ["utf-8", "utf8", "unicode-1-1-utf-8"];
        Object.defineProperty(t.prototype, "encoding", { value: "utf-8" }),
            (t.prototype.encode = function (e, t) {
                if ((t = void 0 === t ? { stream: !1 } : t).stream)
                    throw Error("Failed to encode: the 'stream' option is unsupported.");
                t = 0;
                for (
                    var n = e.length, i = 0, r = Math.max(32, n + (n >>> 1) + 7), s = new Uint8Array((r >>> 3) << 3);
                    t < n;
                ) {
                    var a = e.charCodeAt(t++);
                    if (55296 <= a && 56319 >= a) {
                        if (t < n) {
                            var o = e.charCodeAt(t);
                            56320 == (64512 & o) && (++t, (a = ((1023 & a) << 10) + (1023 & o) + 65536));
                        }
                        if (55296 <= a && 56319 >= a) continue;
                    }
                    if (
                        (i + 4 > s.length &&
                            ((r += 8),
                            (r *= 1 + (t / e.length) * 2),
                            (o = new Uint8Array((r = (r >>> 3) << 3))).set(s),
                            (s = o)),
                        0 == (0xffffff80 & a))
                    )
                        s[i++] = a;
                    else {
                        if (0 == (0xfffff800 & a)) s[i++] = ((a >>> 6) & 31) | 192;
                        else if (0 == (0xffff0000 & a))
                            (s[i++] = ((a >>> 12) & 15) | 224), (s[i++] = ((a >>> 6) & 63) | 128);
                        else {
                            if (0 != (0xffe00000 & a)) continue;
                            (s[i++] = ((a >>> 18) & 7) | 240),
                                (s[i++] = ((a >>> 12) & 63) | 128),
                                (s[i++] = ((a >>> 6) & 63) | 128);
                        }
                        s[i++] = (63 & a) | 128;
                    }
                }
                return s.slice ? s.slice(0, i) : s.subarray(0, i);
            }),
            Object.defineProperty(n.prototype, "encoding", { value: "utf-8" }),
            Object.defineProperty(n.prototype, "fatal", { value: !1 }),
            Object.defineProperty(n.prototype, "ignoreBOM", { value: !1 });
        var a = r;
        "function" == typeof i && i.from
            ? (a = function (e) {
                  return i.from(e.buffer, e.byteOffset, e.byteLength).toString("utf-8");
              })
            : "function" == typeof Blob &&
              "function" == typeof URL &&
              "function" == typeof URL.createObjectURL &&
              (a = function (e) {
                  var t = URL.createObjectURL(new Blob([e], { type: "text/plain;charset=UTF-8" }));
                  try {
                      var n = new XMLHttpRequest();
                      return n.open("GET", t, !1), n.send(), n.responseText;
                  } catch (t) {
                      return r(e);
                  } finally {
                      URL.revokeObjectURL(t);
                  }
              }),
            (n.prototype.decode = function (e, t) {
                if ((t = void 0 === t ? { stream: !1 } : t).stream)
                    throw Error("Failed to decode: the 'stream' option is unsupported.");
                return (
                    (e = e instanceof Uint8Array ? e : new Uint8Array(e.buffer instanceof ArrayBuffer ? e.buffer : e)),
                    a(e)
                );
            }),
            (e.TextEncoder = t),
            (e.TextDecoder = n);
    }
})("u" > typeof window ? window : void 0 !== n.g ? n.g : this);
