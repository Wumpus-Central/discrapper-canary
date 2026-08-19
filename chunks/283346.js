var n = r(264572).Buffer;
!(function (e) {
    function t() {}
    function r(e, t) {
        if (((t = void 0 === t ? { fatal: !1 } : t), -1 === i.indexOf((e = void 0 === e ? "utf-8" : e).toLowerCase())))
            throw RangeError(
                "Failed to construct 'TextDecoder': The encoding label provided ('" + e + "') is invalid.",
            );
        if (t.fatal) throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.");
    }
    function o(e) {
        for (var t = 0, r = Math.min(65536, e.length + 1), n = new Uint16Array(r), o = [], i = 0; ; ) {
            var a = t < e.length;
            if (!a || i >= r - 1) {
                if ((o.push(String.fromCharCode.apply(null, n.subarray(0, i))), !a)) return o.join("");
                (e = e.subarray(t)), (i = t = 0);
            }
            if (0 == (128 & (a = e[t++]))) n[i++] = a;
            else if (192 == (224 & a)) {
                var s = 63 & e[t++];
                n[i++] = ((31 & a) << 6) | s;
            } else if (224 == (240 & a)) {
                s = 63 & e[t++];
                var l = 63 & e[t++];
                n[i++] = ((31 & a) << 12) | (s << 6) | l;
            } else
                240 == (248 & a) &&
                    ((s = 63 & e[t++]),
                    65535 < (a = ((7 & a) << 18) | (s << 12) | ((l = 63 & e[t++]) << 6) | (63 & e[t++])) &&
                        ((a -= 65536), (n[i++] = ((a >>> 10) & 1023) | 55296), (a = 56320 | (1023 & a))),
                    (n[i++] = a));
        }
    }
    if (!e.TextEncoder || !e.TextDecoder) {
        var i = ["utf-8", "utf8", "unicode-1-1-utf-8"];
        Object.defineProperty(t.prototype, "encoding", { value: "utf-8" }),
            (t.prototype.encode = function (e, t) {
                if ((t = void 0 === t ? { stream: !1 } : t).stream)
                    throw Error("Failed to encode: the 'stream' option is unsupported.");
                t = 0;
                for (
                    var r = e.length, n = 0, o = Math.max(32, r + (r >>> 1) + 7), i = new Uint8Array((o >>> 3) << 3);
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
                        (n + 4 > i.length &&
                            ((o += 8),
                            (o *= 1 + (t / e.length) * 2),
                            (s = new Uint8Array((o = (o >>> 3) << 3))).set(i),
                            (i = s)),
                        0 == (0xffffff80 & a))
                    )
                        i[n++] = a;
                    else {
                        if (0 == (0xfffff800 & a)) i[n++] = ((a >>> 6) & 31) | 192;
                        else if (0 == (0xffff0000 & a))
                            (i[n++] = ((a >>> 12) & 15) | 224), (i[n++] = ((a >>> 6) & 63) | 128);
                        else {
                            if (0 != (0xffe00000 & a)) continue;
                            (i[n++] = ((a >>> 18) & 7) | 240),
                                (i[n++] = ((a >>> 12) & 63) | 128),
                                (i[n++] = ((a >>> 6) & 63) | 128);
                        }
                        i[n++] = (63 & a) | 128;
                    }
                }
                return i.slice ? i.slice(0, n) : i.subarray(0, n);
            }),
            Object.defineProperty(r.prototype, "encoding", { value: "utf-8" }),
            Object.defineProperty(r.prototype, "fatal", { value: !1 }),
            Object.defineProperty(r.prototype, "ignoreBOM", { value: !1 });
        var a = o;
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
                      return o(e);
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
