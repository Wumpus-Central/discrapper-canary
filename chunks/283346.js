var n = r(264572).Buffer;
!(function (e) {
    function t() {}
    function r(e, t) {
        if (((t = void 0 === t ? { fatal: !1 } : t), -1 === o.indexOf((e = void 0 === e ? "utf-8" : e).toLowerCase())))
            throw RangeError(
                "Failed to construct 'TextDecoder': The encoding label provided ('" + e + "') is invalid.",
            );
        if (t.fatal) throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.");
    }
    function i(e) {
        for (var t = 0, r = Math.min(65536, e.length + 1), n = new Uint16Array(r), i = [], o = 0; ; ) {
            var a = t < e.length;
            if (!a || o >= r - 1) {
                if ((i.push(String.fromCharCode.apply(null, n.subarray(0, o))), !a)) return i.join("");
                (e = e.subarray(t)), (o = t = 0);
            }
            if (0 == (128 & (a = e[t++]))) n[o++] = a;
            else if (192 == (224 & a)) {
                var s = 63 & e[t++];
                n[o++] = ((31 & a) << 6) | s;
            } else if (224 == (240 & a)) {
                s = 63 & e[t++];
                var l = 63 & e[t++];
                n[o++] = ((31 & a) << 12) | (s << 6) | l;
            } else
                240 == (248 & a) &&
                    ((s = 63 & e[t++]),
                    65535 < (a = ((7 & a) << 18) | (s << 12) | ((l = 63 & e[t++]) << 6) | (63 & e[t++])) &&
                        ((a -= 65536), (n[o++] = ((a >>> 10) & 1023) | 55296), (a = 56320 | (1023 & a))),
                    (n[o++] = a));
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
                    var r = e.length, n = 0, i = Math.max(32, r + (r >>> 1) + 7), o = new Uint8Array((i >>> 3) << 3);
                    t < r;
                ) {
                    var a = e.charCodeAt(t++);
                    if (55296 <= a && 56319 >= a) {
                        if (t < r) {
                            var s = e.charCodeAt(t);
                            56320 == (64512 & s) && (++t, (a = ((1023 & a) << 10) + (1023 & s) + 65536));
                        }
                        if (55296 <= a && 56319 >= a) continue;
                    }
                    if (
                        (n + 4 > o.length &&
                            ((i += 8),
                            (i *= 1 + (t / e.length) * 2),
                            (s = new Uint8Array((i = (i >>> 3) << 3))).set(o),
                            (o = s)),
                        0 == (0xffffff80 & a))
                    )
                        o[n++] = a;
                    else {
                        if (0 == (0xfffff800 & a)) o[n++] = ((a >>> 6) & 31) | 192;
                        else if (0 == (0xffff0000 & a))
                            (o[n++] = ((a >>> 12) & 15) | 224), (o[n++] = ((a >>> 6) & 63) | 128);
                        else {
                            if (0 != (0xffe00000 & a)) continue;
                            (o[n++] = ((a >>> 18) & 7) | 240),
                                (o[n++] = ((a >>> 12) & 63) | 128),
                                (o[n++] = ((a >>> 6) & 63) | 128);
                        }
                        o[n++] = (63 & a) | 128;
                    }
                }
                return o.slice ? o.slice(0, n) : o.subarray(0, n);
            }),
            Object.defineProperty(r.prototype, "encoding", { value: "utf-8" }),
            Object.defineProperty(r.prototype, "fatal", { value: !1 }),
            Object.defineProperty(r.prototype, "ignoreBOM", { value: !1 });
        var a = i;
        "function" == typeof n && n.from
            ? (a = function (e) {
                  return n.from(e.buffer, e.byteOffset, e.byteLength).toString("utf-8");
              })
            : "function" == typeof Blob &&
              "function" == typeof URL &&
              "function" == typeof URL.createObjectURL &&
              (a = function (e) {
                  var t = URL.createObjectURL(new Blob([e], { type: "text/plain;charset=UTF-8" }));
                  try {
                      var r = new XMLHttpRequest();
                      return r.open("GET", t, !1), r.send(), r.responseText;
                  } catch (t) {
                      return i(e);
                  } finally {
                      URL.revokeObjectURL(t);
                  }
              }),
            (r.prototype.decode = function (e, t) {
                if ((t = void 0 === t ? { stream: !1 } : t).stream)
                    throw Error("Failed to decode: the 'stream' option is unsupported.");
                return (
                    (e = e instanceof Uint8Array ? e : new Uint8Array(e.buffer instanceof ArrayBuffer ? e.buffer : e)),
                    a(e)
                );
            }),
            (e.TextEncoder = t),
            (e.TextDecoder = r);
    }
})("u" > typeof window ? window : void 0 !== r.g ? r.g : this);
