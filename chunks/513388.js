let i;
n.r(t), n.d(t, { default: () => tV, errors: () => tz, load: () => tW, loadView: () => t$ });
class r {
    constructor(e) {
        if (
            (function (e) {
                return (
                    "object" != typeof e ||
                    void 0 === e.length ||
                    void 0 === e.readUInt8 ||
                    void 0 === e.readUInt16LE ||
                    void 0 === e.readUInt16BE ||
                    void 0 === e.readUInt32LE ||
                    void 0 === e.readUInt32BE ||
                    void 0 === e.readInt32LE ||
                    void 0 === e.readInt32BE
                );
            })(e)
        )
            throw Error("DataView: Passed buffer type is unsupported.");
        (this.buffer = e), (this.byteLength = this.buffer.length);
    }
    getUint8(e) {
        return this.buffer.readUInt8(e);
    }
    getUint16(e, t) {
        return t ? this.buffer.readUInt16LE(e) : this.buffer.readUInt16BE(e);
    }
    getUint32(e, t) {
        return t ? this.buffer.readUInt32LE(e) : this.buffer.readUInt32BE(e);
    }
    getInt32(e, t) {
        return t ? this.buffer.readInt32LE(e) : this.buffer.readInt32BE(e);
    }
}
var o = n(264572).Buffer;
function a(e, t, n) {
    try {
        return new DataView(e, t, n);
    } catch (i) {
        return new r(e, t, n);
    }
}
function s(e, t, n) {
    let i = [];
    for (let r = 0; r < n && t + r < e.byteLength; r++) i.push(e.getUint8(t + r));
    return c(i);
}
function l(e, t) {
    let n = [],
        i = 0;
    for (; t + i < e.byteLength; ) {
        let r = e.getUint8(t + i);
        if (0 === r) break;
        n.push(r), i++;
    }
    return c(n);
}
function u(e, t) {
    let n = e.getUint8(t),
        i = s(e, t + 1, n);
    return [n, i];
}
function c(e) {
    return e.map((e) => String.fromCharCode(e)).join("");
}
function p() {
    for (let e = 1; e < arguments.length; e++) for (let t in arguments[e]) arguments[0][t] = arguments[e][t];
    return arguments[0];
}
function f(e, t, n) {
    let i = !1;
    Object.defineProperty(e, t, {
        get: () => (
            i ||
                ((i = !0),
                Object.defineProperty(e, t, { configurable: !0, enumerable: !0, value: n.apply(e), writable: !0 })),
            e[t]
        ),
        configurable: !0,
        enumerable: !0,
    });
}
function d(e) {
    return "u" > typeof btoa
        ? "string" == typeof e
            ? btoa(e)
            : btoa(Array.prototype.reduce.call(new Uint8Array(e), (e, t) => e + String.fromCharCode(t), ""))
        : void 0 !== o
          ? void 0 !== o.from
              ? o.from(e).toString("base64")
              : new o(e).toString("base64")
          : void 0;
}
function m(e, t) {
    return Array(t + 1).join(e);
}
function g(e, t, n, i = "string") {
    if (0 === t && "function" == typeof DecompressionStream) {
        let t = new DecompressionStream("deflate"),
            r = new Blob([e]).stream().pipeThrough(t);
        return "dataview" === i
            ? new Response(r).arrayBuffer().then((e) => new DataView(e))
            : new Response(r).arrayBuffer().then((e) => new TextDecoder(n).decode(e));
    }
    return void 0 !== t ? Promise.reject(`Unknown compression method ${t}.`) : e;
}
function h(e) {
    return e.map((e) => String.fromCharCode(e)).join("");
}
function y(e) {
    if (e.length >= 8) {
        let t = h(e.slice(0, 8));
        if ("ASCII\0\0\0" === t) return h(e.slice(8));
        if ("JIS\0\0\0\0\0" === t) return "[JIS encoded text]";
        if ("UNICODE\0" === t) return "[Unicode encoded text]";
        else if ("\0\0\0\0\0\0\0\0" === t) return "[Undefined encoding]";
    }
    return "Undefined";
}
function b(e) {
    return e[0][0] / e[0][1] + e[1][0] / e[1][1] / 60 + e[2][0] / e[2][1] / 3600;
}
let v = function (e, t) {
        if (18761 === e.getUint16(t)) return 18761;
        if (19789 === e.getUint16(t)) return 19789;
        throw Error("Illegal byte order value. Faulty image.");
    },
    C = function (e) {
        var t;
        let n;
        return !!e && e.byteLength >= 4 && ((n = 18761 === (t = e).getUint16(0)), 42 === t.getUint16(2, n));
    },
    P = function (e) {
        let t,
            n,
            i,
            r,
            o,
            a,
            l,
            u,
            c,
            p = 2;
        for (; p + 4 + 5 <= e.byteLength; ) {
            var f, d, m, g, h, y;
            if (((f = e), (d = p), 65472 !== f.getUint16(d))) {
                if (((m = e), (g = p), 65474 !== m.getUint16(g)))
                    if (
                        (function (e, t) {
                            let n = S.length;
                            return 65504 === e.getUint16(t) && s(e, t + 4, n) === S && 0 === e.getUint8(t + 4 + n);
                        })(e, p)
                    )
                        (t = e.getUint16(p + 2)), (r = p + 2);
                    else if (
                        (function (e, t) {
                            let n = k.length;
                            return 65505 === e.getUint16(t) && s(e, t + 4, n) === k && 0 === e.getUint8(t + 4 + n);
                        })(e, p)
                    )
                        (t = e.getUint16(p + 2)), (o = p + 10);
                    else if (
                        (function (e, t) {
                            return 65505 === e.getUint16(t) && s(e, t + 4, A.length) === A;
                        })(e, p)
                    )
                        l || (l = []), (t = e.getUint16(p + 2)), l.push({ dataOffset: p + 33, length: t - 31 });
                    else if (
                        (function (e, t) {
                            return 65505 === e.getUint16(t) && s(e, t + 4, M.length) === M;
                        })(e, p)
                    )
                        l || (l = []), (t = e.getUint16(p + 2)), l.push({ dataOffset: p + 79, length: t - 77 });
                    else if (
                        (function (e, t) {
                            let n = w.length;
                            return 65517 === e.getUint16(t) && s(e, t + 4, n) === w && 0 === e.getUint8(t + 4 + n);
                        })(e, p)
                    )
                        (t = e.getUint16(p + 2)), (a = p + 18);
                    else if (
                        (function (e, t) {
                            let n = T.length;
                            return 65506 === e.getUint16(t) && s(e, t + 4, n) === T;
                        })(e, p)
                    ) {
                        t = e.getUint16(p + 2);
                        let n = p + 18,
                            i = t - 16,
                            r = e.getUint8(p + F),
                            o = e.getUint8(p + x);
                        u || (u = []), u.push({ offset: n, length: i, chunkNumber: r, chunksTotal: o });
                    } else if (
                        (function (e, t) {
                            let n = I.length;
                            return 65506 === e.getUint16(t) && s(e, t + 4, n) === I;
                        })(e, p)
                    )
                        (t = e.getUint16(p + 2)), (c = p + 8);
                    else if (
                        (function (e, t) {
                            let n = e.getUint16(t);
                            return (
                                (n >= 65504 && n <= 65519) ||
                                65534 === n ||
                                65472 === n ||
                                65474 === n ||
                                65476 === n ||
                                65499 === n ||
                                65501 === n ||
                                65498 === n
                            );
                        })(e, p)
                    )
                        t = e.getUint16(p + 2);
                    else {
                        if (((h = e), (y = p), 65535 === h.getUint16(y))) {
                            p++;
                            continue;
                        } else break;
                    }
                else (t = e.getUint16(p + 2)), (i = p + 2);
            } else (t = e.getUint16(p + 2)), (n = p + 2);
            p += 2 + t;
        }
        return {
            hasAppMarkers: p > 2,
            fileDataOffset: n || i,
            jfifDataOffset: r,
            tiffHeaderOffset: o,
            iptcDataOffset: a,
            xmpChunks: l,
            iccChunks: u,
            mpfDataOffset: c,
        };
    },
    T = "ICC_PROFILE\0",
    F = 4 + T.length,
    x = F + 1,
    I = "MPF\0",
    S = "JFIF",
    k = "Exif",
    A = "http://ns.adobe.com/xap/1.0/\0",
    M = "http://ns.adobe.com/xmp/extension/\0",
    w = "Photoshop 3.0",
    O = function (e, t) {
        let n = { hasAppMarkers: !1 },
            i = E.length;
        for (; i + 4 + 4 <= e.byteLength; ) {
            if ("IHDR" !== s(e, i + 4, 4)) {
                var r, o;
                if (s((r = e), (o = i) + 4, 4) !== R || s(r, o + U, D.length) !== D)
                    if (
                        (function (e, t, n) {
                            let i = s(e, t + 4, 4);
                            return i === L || i === R || (i === B && n);
                        })(e, i, t)
                    ) {
                        n.hasAppMarkers = !0;
                        let t = s(e, i + 4, 4);
                        n.pngTextChunks || (n.pngTextChunks = []),
                            n.pngTextChunks.push({ length: e.getUint32(i + 0), type: t, offset: i + U });
                    } else if ("eXIf" === s(e, i + 4, 4)) (n.hasAppMarkers = !0), (n.tiffHeaderOffset = i + U);
                    else if (t && "iCCP" === s(e, i + 4, 4)) {
                        n.hasAppMarkers = !0;
                        let t = e.getUint32(i + 0),
                            r = i + U,
                            {
                                profileName: o,
                                compressionMethod: a,
                                compressedProfileOffset: s,
                            } = (function (e, t) {
                                let n = l(e, t);
                                return (
                                    (t += n.length + 1),
                                    {
                                        profileName: n,
                                        compressionMethod: e.getUint8(t),
                                        compressedProfileOffset: (t += 1),
                                    }
                                );
                            })(e, r);
                        n.iccChunks || (n.iccChunks = []),
                            n.iccChunks.push({
                                offset: s,
                                length: t - (s - r),
                                chunkNumber: 1,
                                chunksTotal: 1,
                                profileName: o,
                                compressionMethod: a,
                            });
                    } else
                        [N, _].includes(s(e, i + 4, 4)) &&
                            ((n.hasAppMarkers = !0),
                            n.pngChunkOffsets || (n.pngChunkOffsets = []),
                            n.pngChunkOffsets.push(i + 0));
                else {
                    let t = (function (e, t) {
                        t += U + D.length + 1 + 1;
                        let n = 0;
                        for (; n < 2 && t < e.byteLength; ) 0 === e.getUint8(t) && n++, t++;
                        if (!(n < 2)) return t;
                    })(e, i);
                    void 0 !== t &&
                        ((n.hasAppMarkers = !0),
                        (n.xmpChunks = [{ dataOffset: t, length: e.getUint32(i + 0) - (t - (i + U)) }]));
                }
            } else (n.hasAppMarkers = !0), (n.pngHeaderOffset = i + U);
            i += e.getUint32(i + 0) + 4 + 4 + 4;
        }
        return n;
    },
    E = "\x89PNG\r\n\x1a\n",
    U = 8,
    D = "XML:com.adobe.xmp\0",
    L = "tEXt",
    R = "iTXt",
    B = "zTXt",
    N = "pHYs",
    _ = "tIME";
function G(e, t, n) {
    if (4 === n) return e.getUint32(t);
    if (8 === n)
        return (
            console.warn(
                "This file uses an 8-bit offset which is currently not supported by ExifReader. Contact the maintainer to get it fixed.",
            ),
            e.getUint32(t + 4)
        );
    return 0;
}
function j(e, t) {
    var n, i, r, o, a, u, c, p, f, d, m, g, h, y, b, v, C, P, T, F, x, I, S, k, A, M, w;
    let O,
        E,
        { length: U, contentOffset: D } =
            ((n = e),
            (i = t),
            0 === (O = n.getUint32(i))
                ? { length: n.byteLength - i, contentOffset: i + 4 + 4 }
                : 1 === O && ((r = n), (o = i), 0 === r.getUint32(o + 8))
                  ? { length: n.getUint32(i + 12), contentOffset: i + 4 + 4 + 8 }
                  : { length: O, contentOffset: i + 4 + 4 });
    if (U < 8) return;
    let L = e.getUint32(t + 4);
    if (0x66747970 === L) {
        return (a = e), (u = D), (c = U), { type: "ftyp", majorBrand: s(a, u, 4), length: c };
    }
    if (0x69707270 === L) {
        return (p = e), (f = t), { type: "iprp", subBoxes: z(p, (d = D), (m = U) - (d - f)), length: m };
    }
    if (0x6970636f === L) {
        return (g = e), (h = t), { type: "ipco", properties: z(g, (y = D), (b = U) - (y - h)), length: b };
    }
    if (0x636f6c72 === L) {
        return (
            (v = e),
            (C = D),
            (P = U),
            {
                type: "colr",
                icc: (function (e, t) {
                    let n = s(e, t, 4);
                    if ("prof" === n || "rICC" === n)
                        return { offset: t + 4, length: e.getUint32(t + 4), chunkNumber: 1, chunksTotal: 1 };
                })(v, C),
                length: P,
            }
        );
    }
    let R = e.getUint8(D);
    return 0x6d657461 === L
        ? ((T = e), (F = t), { type: "meta", subBoxes: z(T, (x = D + 1) + 3, (I = U) - (x + 3 - F)), length: I })
        : 0x696c6f63 === L
          ? (function (e, t, n, i) {
                var r, o, a, s, l;
                let u,
                    c,
                    { offsets: p, sizes: f } =
                        ((r = t),
                        (o = n + 3),
                        (u = { item: { dataReferenceIndex: 2, extentCount: 2, extent: {} } }),
                        r < 2
                            ? ((u.itemCount = 2), (u.item.itemId = 2))
                            : 2 === r && ((u.itemCount = 4), (u.item.itemId = 4)),
                        1 === r || 2 === r ? (u.item.constructionMethod = 2) : (u.item.constructionMethod = 0),
                        ((c = { offsetSize: o, lengthSize: o, baseOffsetSize: o + 1, indexSize: o + 1 }).itemCount =
                            o + 2),
                        (c.items = c.itemCount + u.itemCount),
                        (c.item = { itemId: 0 }),
                        (c.item.constructionMethod = c.item.itemId + u.item.itemId),
                        (c.item.dataReferenceIndex = c.item.constructionMethod + u.item.constructionMethod),
                        { offsets: c, sizes: u }),
                    d = e.getUint8(p.offsetSize) >> 4;
                f.item.extent.extentOffset = d;
                let m = 15 & e.getUint8(p.lengthSize);
                f.item.extent.extentLength = m;
                let g = e.getUint8(p.baseOffsetSize) >> 4;
                f.item.baseOffset = g;
                let h = (function (e, t, n) {
                    if (1 === n || 2 === n) return 15 & e.getUint8(t);
                })(e, p.indexSize, t);
                f.item.extent.extentIndex = void 0 !== h ? h : 0;
                let y = ((a = e), (s = p.itemCount), (l = t) < 2 ? a.getUint16(s) : 2 === l ? a.getUint32(s) : void 0);
                return {
                    type: "iloc",
                    items: (function (e, t, n, i, r, o, a, s) {
                        if (void 0 === s) return [];
                        let l = [],
                            u = n.items;
                        for (let n = 0; n < s; n++) {
                            var c, p, f;
                            let n = { extents: [] };
                            (c = e),
                                (p = u),
                                (n.itemId = (f = t) < 2 ? c.getUint16(p) : 2 === f ? c.getUint32(p) : void 0),
                                (u += i.item.itemId),
                                (n.constructionMethod = 1 === t || 2 === t ? 15 & e.getUint16(u) : void 0),
                                (u += i.item.constructionMethod),
                                (n.dataReferenceIndex = e.getUint16(u)),
                                (n.baseOffset = G(e, (u += i.item.dataReferenceIndex), i.item.baseOffset)),
                                (u += i.item.baseOffset),
                                (n.extentCount = e.getUint16(u)),
                                (u += i.item.extentCount);
                            for (let s = 0; s < n.extentCount; s++) {
                                let s = {};
                                (s.extentIndex = (function (e, t, n, i) {
                                    if ((1 === t || 2 === t) && i > 0) return G(e, n, i);
                                })(e, t, u, a)),
                                    (s.extentOffset = G(e, (u += i.item.extent.extentIndex), r)),
                                    (s.extentLength = G(e, (u += i.item.extent.extentOffset), o)),
                                    (u += i.item.extent.extentLength),
                                    n.extents.push(s);
                            }
                            l.push(n);
                        }
                        return l;
                    })(e, t, p, f, d, m, h, y),
                    length: i,
                };
            })(e, R, D + 1, U)
          : 0x69696e66 === L
            ? (function (e, t, n, i, r) {
                  var o;
                  let a,
                      s,
                      { offsets: l } =
                          ((o = n),
                          (a = { entryCount: i + 3 }),
                          (s = {}),
                          0 === o ? (s.entryCount = 2) : (s.entryCount = 4),
                          (a.itemInfos = a.entryCount + s.entryCount),
                          { offsets: a });
                  return { type: "iinf", itemInfos: z(e, l.itemInfos, r - (l.itemInfos - t)), length: r };
              })(e, t, R, D + 1, U)
            : 0x696e6665 === L
              ? ((S = e),
                (k = t),
                (A = R),
                (M = D + 1),
                (M += 3),
                (E = { type: "infe", length: (w = U) }),
                (0 === A || 1 === A) &&
                    ((E.itemId = S.getUint16(M)),
                    (M += 2),
                    (E.itemProtectionIndex = S.getUint16(M)),
                    (E.itemName = l(S, (M += 2))),
                    (M += E.itemName.length + 1)),
                A >= 2 &&
                    (2 === A
                        ? ((E.itemId = S.getUint16(M)), (M += 2))
                        : 3 === A && ((E.itemId = S.getUint32(M)), (M += 4)),
                    (E.itemProtectionIndex = S.getUint16(M)),
                    (M += 2),
                    (E.itemType = S.getUint32(M)),
                    (E.itemName = l(S, (M += 4))),
                    (M += E.itemName.length + 1),
                    0x6d696d65 === E.itemType
                        ? ((E.contentType = l(S, M)),
                          k + w > (M += E.contentType.length + 1) &&
                              ((E.contentEncoding = l(S, M)), (M += E.contentEncoding.length + 1)))
                        : 0x75726920 === E.itemType && ((E.itemUri = l(S, M)), (M += E.itemUri.length + 1))),
                E)
              : { type: void 0, length: U };
}
function q(e) {
    1;
    {
        let t = {},
            n = (function (e) {
                let t = 0;
                for (; t + 4 + 4 <= e.byteLength; ) {
                    let n = j(e, t);
                    if (void 0 === n) break;
                    if ("meta" === n.type) return n;
                    t += n.length;
                }
            })(e);
        return n
            ? ((t.tiffHeaderOffset = (function (e, t) {
                  try {
                      var n, i;
                      let r = t.subBoxes
                              .find((e) => "iinf" === e.type)
                              .itemInfos.find((e) => 0x45786966 === e.itemType).itemId,
                          o = V(t, r),
                          a = o.baseOffset + o.extents[0].extentOffset;
                      return (n = e), (i = a) + 4 + n.getUint32(i);
                  } catch (e) {
                      return;
                  }
              })(e, n)),
              (t.xmpChunks = (function (e) {
                  try {
                      let t = e.subBoxes
                              .find((e) => "iinf" === e.type)
                              .itemInfos.find(
                                  (e) => 0x6d696d65 === e.itemType && "application/rdf+xml" === e.contentType,
                              ).itemId,
                          n = V(e, t),
                          i = V(e, t).extents[0];
                      return [{ dataOffset: n.baseOffset + i.extentOffset, length: i.extentLength }];
                  } catch (e) {
                      return;
                  }
              })(n)),
              (t.iccChunks = (function (e) {
                  try {
                      let t = e.subBoxes
                          .find((e) => "iprp" === e.type)
                          .subBoxes.find((e) => "ipco" === e.type)
                          .properties.find((e) => "colr" === e.type).icc;
                      if (t) return [t];
                  } catch (e) {}
              })(n)),
              (t.hasAppMarkers = void 0 !== t.tiffHeaderOffset || void 0 !== t.xmpChunks || void 0 !== t.iccChunks),
              t)
            : { hasAppMarkers: !1 };
    }
}
function V(e, t) {
    return e.subBoxes.find((e) => "iloc" === e.type).items.find((e) => e.itemId === t);
}
function z(e, t, n) {
    let i = [0x45786966, 0x6d696d65],
        r = [],
        o = t;
    for (; o < t + n; ) {
        let t = j(e, o);
        if (void 0 === t) break;
        void 0 !== t.type && (void 0 === t.itemType || -1 !== i.indexOf(t.itemType)) && r.push(t), (o += t.length);
    }
    return r;
}
let W = function (e) {
        if (!e) return !1;
        try {
            let t = j(e, 0);
            return (
                t &&
                -1 !== ["heic", "heix", "hevc", "hevx", "heim", "heis", "hevm", "hevs", "mif1"].indexOf(t.majorBrand)
            );
        } catch (e) {
            return !1;
        }
    },
    H = function (e) {
        if (!e) return !1;
        try {
            let t = j(e, 0);
            return t && "avif" === t.majorBrand;
        } catch (e) {
            return !1;
        }
    },
    $ = function (e) {
        let t = "RIFF",
            n = "WEBP";
        return !!e && s(e, 0, t.length) === t && s(e, 8, n.length) === n;
    },
    X = function (e) {
        let t,
            n,
            i,
            r,
            o = "Exif\0\0",
            a = 12,
            l = !1;
        for (; a + 8 < e.byteLength; ) {
            let u = s(e, a, 4),
                c = e.getUint32(a + 4, !0);
            "EXIF" === u
                ? ((l = !0), (t = s(e, a + 8, o.length) === o ? a + 8 + o.length : a + 8))
                : "XMP " === u
                  ? ((l = !0), (n = [{ dataOffset: a + 8, length: c }]))
                  : "ICCP" === u
                    ? ((l = !0), (i = [{ offset: a + 8, length: c, chunkNumber: 1, chunksTotal: 1 }]))
                    : "VP8X" === u && ((l = !0), (r = a + 8)),
                (a += 8 + (c % 2 == 0 ? c : c + 1));
        }
        return { hasAppMarkers: l, tiffHeaderOffset: t, xmpChunks: n, iccChunks: i, vp8xChunkOffset: r };
    },
    J = ["GIF87a", "GIF89a"],
    Z = function (e) {
        let t = [];
        return t.push({ dataOffset: 0, length: e.byteLength }), { xmpChunks: t };
    },
    K = "<?xpacket begin",
    Y = function (e, t) {
        var n, i, r, o;
        if (C(e)) return Q({ hasAppMarkers: !0, tiffHeaderOffset: 0 }, "tiff", "TIFF");
        if ((n = e) && n.byteLength >= 2 && 65496 === n.getUint16(0)) return Q(P(e), "jpeg", "JPEG");
        if ((i = e) && s(i, 0, E.length) === E) return Q(O(e, t), "png", "PNG");
        if (W(e)) return Q(q(e), "heic", "HEIC");
        if (H(e)) return Q(q(e), "avif", "AVIF");
        if ($(e)) return Q(X(e), "webp", "WebP");
        if ((r = e) && J.includes(s(r, 0, 6))) return Q({ gifHeaderOffset: 0 }, "gif", "GIF");
        if ((o = e) && s(o, 0, K.length) === K) return Q(Z(e), "xml", "XML");
        throw Error("Invalid image format");
    };
function Q(e, t, n) {
    return p({}, e, { fileType: { value: t, description: n } });
}
let ee = {
        ApertureValue: (e) => Math.pow(Math.sqrt(2), e[0] / e[1]).toFixed(2),
        ColorSpace: (e) => (1 === e ? "sRGB" : 65535 === e ? "Uncalibrated" : "Unknown"),
        ComponentsConfiguration: (e) =>
            e
                .map((e) => {
                    if (49 === e) return "Y";
                    if (50 === e) return "Cb";
                    if (51 === e) return "Cr";
                    if (52 === e) return "R";
                    if (53 === e) return "G";
                    else if (54 === e) return "B";
                })
                .join(""),
        Contrast: (e) => (0 === e ? "Normal" : 1 === e ? "Soft" : 2 === e ? "Hard" : "Unknown"),
        CustomRendered: (e) => (0 === e ? "Normal process" : 1 === e ? "Custom process" : "Unknown"),
        ExposureMode: (e) =>
            0 === e ? "Auto exposure" : 1 === e ? "Manual exposure" : 2 === e ? "Auto bracket" : "Unknown",
        ExposureProgram(e) {
            if (0 === e) return "Undefined";
            if (1 === e) return "Manual";
            if (2 === e) return "Normal program";
            if (3 === e) return "Aperture priority";
            if (4 === e) return "Shutter priority";
            else if (5 === e) return "Creative program";
            else if (6 === e) return "Action program";
            else if (7 === e) return "Portrait mode";
            else if (8 === e) return "Landscape mode";
            else if (9 === e) return "Bulb";
            return "Unknown";
        },
        ExposureTime(e) {
            if (e[0] / e[1] > 0.25) {
                let t = e[0] / e[1];
                return Number.isInteger(t) ? "" + t : t.toFixed(1);
            }
            return 0 !== e[0] ? `1/${Math.round(e[1] / e[0])}` : `0/${e[1]}`;
        },
        FNumber: (e) => `f/${Number(e[0] / e[1]).toFixed(1)}`,
        FocalLength: (e) => e[0] / e[1] + " mm",
        FocalPlaneResolutionUnit: (e) =>
            2 === e ? "inches" : 3 === e ? "centimeters" : 4 === e ? "millimeters" : "Unknown",
        LightSource: (e) => {
            if (1 === e) return "Daylight";
            if (2 === e) return "Fluorescent";
            if (3 === e) return "Tungsten (incandescent light)";
            if (4 === e) return "Flash";
            if (9 === e) return "Fine weather";
            else if (10 === e) return "Cloudy weather";
            else if (11 === e) return "Shade";
            else if (12 === e) return "Daylight fluorescent (D 5700 \u2013 7100K)";
            else if (13 === e) return "Day white fluorescent (N 4600 \u2013 5400K)";
            else if (14 === e) return "Cool white fluorescent (W 3900 \u2013 4500K)";
            else if (15 === e) return "White fluorescent (WW 3200 \u2013 3700K)";
            else if (17 === e) return "Standard light A";
            else if (18 === e) return "Standard light B";
            else if (19 === e) return "Standard light C";
            else if (20 === e) return "D55";
            else if (21 === e) return "D65";
            else if (22 === e) return "D75";
            else if (23 === e) return "D50";
            else if (24 === e) return "ISO studio tungsten";
            else if (255 === e) return "Other light source";
            return "Unknown";
        },
        MeteringMode(e) {
            if (1 === e) return "Average";
            if (2 === e) return "CenterWeightedAverage";
            if (3 === e) return "Spot";
            if (4 === e) return "MultiSpot";
            if (5 === e) return "Pattern";
            else if (6 === e) return "Partial";
            else if (255 === e) return "Other";
            return "Unknown";
        },
        ResolutionUnit: (e) => (2 === e ? "inches" : 3 === e ? "centimeters" : "Unknown"),
        Saturation: (e) => (0 === e ? "Normal" : 1 === e ? "Low saturation" : 2 === e ? "High saturation" : "Unknown"),
        FocalLengthIn35mmFilm: (e) => (0 === e ? "Unknown" : e + " mm"),
        SceneCaptureType: (e) =>
            0 === e ? "Standard" : 1 === e ? "Landscape" : 2 === e ? "Portrait" : 3 === e ? "Night scene" : "Unknown",
        Sharpness: (e) => (0 === e ? "Normal" : 1 === e ? "Soft" : 2 === e ? "Hard" : "Unknown"),
        ShutterSpeedValue(e) {
            let t = Math.pow(2, e[0] / e[1]);
            return t <= 1 ? `${Math.round(1 / t)}` : `1/${Math.round(t)}`;
        },
        WhiteBalance: (e) => (0 === e ? "Auto white balance" : 1 === e ? "Manual white balance" : "Unknown"),
        XResolution: (e) => "" + Math.round(e[0] / e[1]),
        YResolution: (e) => "" + Math.round(e[0] / e[1]),
    },
    et = {
        11: "ProcessingSoftware",
        254: {
            name: "SubfileType",
            description: (e) =>
                ({
                    0: "Full-resolution image",
                    1: "Reduced-resolution image",
                    2: "Single page of multi-page image",
                    3: "Single page of multi-page reduced-resolution image",
                    4: "Transparency mask",
                    5: "Transparency mask of reduced-resolution image",
                    6: "Transparency mask of multi-page image",
                    7: "Transparency mask of reduced-resolution multi-page image",
                    65537: "Alternate reduced-resolution image",
                    0xffffffff: "Invalid",
                })[e] || "Unknown",
        },
        255: {
            name: "OldSubfileType",
            description: (e) =>
                ({ 0: "Full-resolution image", 1: "Reduced-resolution image", 2: "Single page of multi-page image" })[
                    e
                ] || "Unknown",
        },
        256: "ImageWidth",
        257: "ImageLength",
        258: "BitsPerSample",
        259: "Compression",
        262: "PhotometricInterpretation",
        263: {
            name: "Thresholding",
            description: (e) =>
                ({ 1: "No dithering or halftoning", 2: "Ordered dither or halfton", 3: "Randomized dither" })[e] ||
                "Unknown",
        },
        264: "CellWidth",
        265: "CellLength",
        266: { name: "FillOrder", description: (e) => ({ 1: "Normal", 2: "Reversed" })[e] || "Unknown" },
        269: "DocumentName",
        270: "ImageDescription",
        271: "Make",
        272: "Model",
        273: "StripOffsets",
        274: {
            name: "Orientation",
            description: (e) =>
                1 === e
                    ? "top-left"
                    : 2 === e
                      ? "top-right"
                      : 3 === e
                        ? "bottom-right"
                        : 4 === e
                          ? "bottom-left"
                          : 5 === e
                            ? "left-top"
                            : 6 === e
                              ? "right-top"
                              : 7 === e
                                ? "right-bottom"
                                : 8 === e
                                  ? "left-bottom"
                                  : "Undefined",
        },
        277: "SamplesPerPixel",
        278: "RowsPerStrip",
        279: "StripByteCounts",
        280: "MinSampleValue",
        281: "MaxSampleValue",
        282: { name: "XResolution", description: ee.XResolution },
        283: { name: "YResolution", description: ee.YResolution },
        284: "PlanarConfiguration",
        285: "PageName",
        286: { name: "XPosition", description: (e) => "" + Math.round(e[0] / e[1]) },
        287: { name: "YPosition", description: (e) => "" + Math.round(e[0] / e[1]) },
        290: {
            name: "GrayResponseUnit",
            description: (e) => ({ 1: "0.1", 2: "0.001", 3: "0.0001", 4: "1e-05", 5: "1e-06" })[e] || "Unknown",
        },
        296: { name: "ResolutionUnit", description: ee.ResolutionUnit },
        297: "PageNumber",
        301: "TransferFunction",
        305: "Software",
        306: "DateTime",
        315: "Artist",
        316: "HostComputer",
        317: "Predictor",
        318: { name: "WhitePoint", description: (e) => e.map((e) => `${e[0]}/${e[1]}`).join(", ") },
        319: { name: "PrimaryChromaticities", description: (e) => e.map((e) => `${e[0]}/${e[1]}`).join(", ") },
        321: "HalftoneHints",
        322: "TileWidth",
        323: "TileLength",
        330: "A100DataOffset",
        332: { name: "InkSet", description: (e) => ({ 1: "CMYK", 2: "Not CMYK" })[e] || "Unknown" },
        337: "TargetPrinter",
        338: {
            name: "ExtraSamples",
            description: (e) => ({ 0: "Unspecified", 1: "Associated Alpha", 2: "Unassociated Alpha" })[e] || "Unknown",
        },
        339: {
            name: "SampleFormat",
            description: (e) => {
                let t = {
                    1: "Unsigned",
                    2: "Signed",
                    3: "Float",
                    4: "Undefined",
                    5: "Complex int",
                    6: "Complex float",
                };
                return Array.isArray(e) ? e.map((e) => t[e] || "Unknown").join(", ") : "Unknown";
            },
        },
        513: "JPEGInterchangeFormat",
        514: "JPEGInterchangeFormatLength",
        529: { name: "YCbCrCoefficients", description: (e) => e.map((e) => "" + e[0] / e[1]).join("/") },
        530: "YCbCrSubSampling",
        531: {
            name: "YCbCrPositioning",
            description: (e) => (1 === e ? "centered" : 2 === e ? "co-sited" : "undefined " + e),
        },
        532: { name: "ReferenceBlackWhite", description: (e) => e.map((e) => "" + e[0] / e[1]).join(", ") },
        700: "ApplicationNotes",
        18246: "Rating",
        18249: "RatingPercent",
        33432: { name: "Copyright", description: (e) => e.join("; ") },
        33550: "PixelScale",
        33723: "IPTC-NAA",
        33920: "IntergraphMatrix",
        33922: "ModelTiePoint",
        34118: "SEMInfo",
        34264: "ModelTransform",
        34377: "PhotoshopSettings",
        34665: "Exif IFD Pointer",
        34675: "ICC_Profile",
        34735: "GeoTiffDirectory",
        34736: "GeoTiffDoubleParams",
        34737: "GeoTiffAsciiParams",
        34853: "GPS Info IFD Pointer",
        40091: { name: "XPTitle", description: en },
        40092: { name: "XPComment", description: en },
        40093: { name: "XPAuthor", description: en },
        40094: { name: "XPKeywords", description: en },
        40095: { name: "XPSubject", description: en },
        42112: "GDALMetadata",
        42113: "GDALNoData",
        50341: "PrintIM",
        50707: "DNGBackwardVersion",
        50708: "UniqueCameraModel",
        50709: "LocalizedCameraModel",
        50721: "ColorMatrix1",
        50722: "ColorMatrix2",
        50723: "CameraCalibration1",
        50724: "CameraCalibration2",
        50725: "ReductionMatrix1",
        50726: "ReductionMatrix2",
        50727: "AnalogBalance",
        50728: "AsShotNeutral",
        50729: "AsShotWhiteXY",
        50730: "BaselineExposure",
        50731: "BaselineNoise",
        50732: "BaselineSharpness",
        50734: "LinearResponseLimit",
        50735: "CameraSerialNumber",
        50736: "DNGLensInfo",
        50739: "ShadowScale",
        50741: { name: "MakerNoteSafety", description: (e) => ({ 0: "Unsafe", 1: "Safe" })[e] || "Unknown" },
        50778: { name: "CalibrationIlluminant1", description: ee.LightSource },
        50779: { name: "CalibrationIlluminant2", description: ee.LightSource },
        50781: "RawDataUniqueID",
        50827: "OriginalRawFileName",
        50828: "OriginalRawFileData",
        50831: "AsShotICCProfile",
        50832: "AsShotPreProfileMatrix",
        50833: "CurrentICCProfile",
        50834: "CurrentPreProfileMatrix",
        50879: "ColorimetricReference",
        50885: "SRawType",
        50898: "PanasonicTitle",
        50899: "PanasonicTitle2",
        50931: "CameraCalibrationSig",
        50932: "ProfileCalibrationSig",
        50933: "ProfileIFD",
        50934: "AsShotProfileName",
        50936: "ProfileName",
        50937: "ProfileHueSatMapDims",
        50938: "ProfileHueSatMapData1",
        50939: "ProfileHueSatMapData2",
        50940: "ProfileToneCurve",
        50941: {
            name: "ProfileEmbedPolicy",
            description: (e) =>
                ({ 0: "Allow Copying", 1: "Embed if Used", 2: "Never Embed", 3: "No Restrictions" })[e] || "Unknown",
        },
        50942: "ProfileCopyright",
        50964: "ForwardMatrix1",
        50965: "ForwardMatrix2",
        50966: "PreviewApplicationName",
        50967: "PreviewApplicationVersion",
        50968: "PreviewSettingsName",
        50969: "PreviewSettingsDigest",
        50970: {
            name: "PreviewColorSpace",
            description: (e) => ({ 1: "Gray Gamma 2.2", 2: "sRGB", 3: "Adobe RGB", 4: "ProPhoto RGB" })[e] || "Unknown",
        },
        50971: "PreviewDateTime",
        50972: "RawImageDigest",
        50973: "OriginalRawFileDigest",
        50981: "ProfileLookTableDims",
        50982: "ProfileLookTableData",
        51043: "TimeCodes",
        51044: "FrameRate",
        51058: "TStop",
        51081: "ReelName",
        51089: "OriginalDefaultFinalSize",
        51090: "OriginalBestQualitySize",
        51091: "OriginalDefaultCropSize",
        51105: "CameraLabel",
        51107: { name: "ProfileHueSatMapEncoding", description: (e) => ({ 0: "Linear", 1: "sRGB" })[e] || "Unknown" },
        51108: { name: "ProfileLookTableEncoding", description: (e) => ({ 0: "Linear", 1: "sRGB" })[e] || "Unknown" },
        51109: "BaselineExposureOffset",
        51110: { name: "DefaultBlackRender", description: (e) => ({ 0: "Auto", 1: "None" })[e] || "Unknown" },
        51111: "NewRawImageDigest",
        51112: "RawToPreviewGain",
    };
function en(e) {
    return new TextDecoder("utf-16").decode(new Uint8Array(e)).replace(/\u0000+$/, "");
}
let ei = p({}, et, {
        33434: { name: "ExposureTime", description: ee.ExposureTime },
        33437: { name: "FNumber", description: ee.FNumber },
        34850: { name: "ExposureProgram", description: ee.ExposureProgram },
        34852: "SpectralSensitivity",
        34855: "ISOSpeedRatings",
        34856: { name: "OECF", description: () => "[Raw OECF table data]" },
        34858: "TimeZoneOffset",
        34859: "SelfTimerMode",
        34864: {
            name: "SensitivityType",
            description: (e) =>
                ({
                    1: "Standard Output Sensitivity",
                    2: "Recommended Exposure Index",
                    3: "ISO Speed",
                    4: "Standard Output Sensitivity and Recommended Exposure Index",
                    5: "Standard Output Sensitivity and ISO Speed",
                    6: "Recommended Exposure Index and ISO Speed",
                    7: "Standard Output Sensitivity, Recommended Exposure Index and ISO Speed",
                })[e] || "Unknown",
        },
        34865: "StandardOutputSensitivity",
        34866: "RecommendedExposureIndex",
        34867: "ISOSpeed",
        34868: "ISOSpeedLatitudeyyy",
        34869: "ISOSpeedLatitudezzz",
        36864: { name: "ExifVersion", description: (e) => h(e) },
        36867: "DateTimeOriginal",
        36868: "DateTimeDigitized",
        36873: "GooglePlusUploadCode",
        36880: "OffsetTime",
        36881: "OffsetTimeOriginal",
        36882: "OffsetTimeDigitized",
        37121: { name: "ComponentsConfiguration", description: ee.ComponentsConfiguration },
        37122: "CompressedBitsPerPixel",
        37377: { name: "ShutterSpeedValue", description: ee.ShutterSpeedValue },
        37378: { name: "ApertureValue", description: ee.ApertureValue },
        37379: "BrightnessValue",
        37380: "ExposureBiasValue",
        37381: { name: "MaxApertureValue", description: (e) => Math.pow(Math.sqrt(2), e[0] / e[1]).toFixed(2) },
        37382: { name: "SubjectDistance", description: (e) => e[0] / e[1] + " m" },
        37383: { name: "MeteringMode", description: ee.MeteringMode },
        37384: { name: "LightSource", description: ee.LightSource },
        37385: {
            name: "Flash",
            description: (e) => {
                if (0 === e) return "Flash did not fire";
                if (1 === e) return "Flash fired";
                if (5 === e) return "Strobe return light not detected";
                if (7 === e) return "Strobe return light detected";
                if (9 === e) return "Flash fired, compulsory flash mode";
                else if (13 === e) return "Flash fired, compulsory flash mode, return light not detected";
                else if (15 === e) return "Flash fired, compulsory flash mode, return light detected";
                else if (16 === e) return "Flash did not fire, compulsory flash mode";
                else if (24 === e) return "Flash did not fire, auto mode";
                else if (25 === e) return "Flash fired, auto mode";
                else if (29 === e) return "Flash fired, auto mode, return light not detected";
                else if (31 === e) return "Flash fired, auto mode, return light detected";
                else if (32 === e) return "No flash function";
                else if (65 === e) return "Flash fired, red-eye reduction mode";
                else if (69 === e) return "Flash fired, red-eye reduction mode, return light not detected";
                else if (71 === e) return "Flash fired, red-eye reduction mode, return light detected";
                else if (73 === e) return "Flash fired, compulsory flash mode, red-eye reduction mode";
                else if (77 === e)
                    return "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected";
                else if (79 === e)
                    return "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected";
                else if (89 === e) return "Flash fired, auto mode, red-eye reduction mode";
                else if (93 === e) return "Flash fired, auto mode, return light not detected, red-eye reduction mode";
                else if (95 === e) return "Flash fired, auto mode, return light detected, red-eye reduction mode";
                return "Unknown";
            },
        },
        37386: { name: "FocalLength", description: ee.FocalLength },
        37393: "ImageNumber",
        37394: {
            name: "SecurityClassification",
            description: (e) =>
                ({ C: "Confidential", R: "Restricted", S: "Secret", T: "Top Secret", U: "Unclassified" })[e] ||
                "Unknown",
        },
        37395: "ImageHistory",
        37396: {
            name: "SubjectArea",
            description: (e) =>
                2 === e.length
                    ? `Location; X: ${e[0]}, Y: ${e[1]}`
                    : 3 === e.length
                      ? `Circle; X: ${e[0]}, Y: ${e[1]}, diameter: ${e[2]}`
                      : 4 === e.length
                        ? `Rectangle; X: ${e[0]}, Y: ${e[1]}, width: ${e[2]}, height: ${e[3]}`
                        : "Unknown",
        },
        37500: { name: "MakerNote", description: () => "[Raw maker note data]" },
        37510: { name: "UserComment", description: y },
        37520: "SubSecTime",
        37521: "SubSecTimeOriginal",
        37522: "SubSecTimeDigitized",
        37724: "ImageSourceData",
        37888: { name: "AmbientTemperature", description: (e) => e[0] / e[1] + " \xb0C" },
        37889: { name: "Humidity", description: (e) => e[0] / e[1] + " %" },
        37890: { name: "Pressure", description: (e) => e[0] / e[1] + " hPa" },
        37891: { name: "WaterDepth", description: (e) => e[0] / e[1] + " m" },
        37892: { name: "Acceleration", description: (e) => e[0] / e[1] + " mGal" },
        37893: { name: "CameraElevationAngle", description: (e) => e[0] / e[1] + " \xb0" },
        40960: { name: "FlashpixVersion", description: (e) => e.map((e) => String.fromCharCode(e)).join("") },
        40961: { name: "ColorSpace", description: ee.ColorSpace },
        40962: "PixelXDimension",
        40963: "PixelYDimension",
        40964: "RelatedSoundFile",
        40965: "Interoperability IFD Pointer",
        41483: "FlashEnergy",
        41484: { name: "SpatialFrequencyResponse", description: () => "[Raw SFR table data]" },
        41486: "FocalPlaneXResolution",
        41487: "FocalPlaneYResolution",
        41488: { name: "FocalPlaneResolutionUnit", description: ee.FocalPlaneResolutionUnit },
        41492: { name: "SubjectLocation", description: ([e, t]) => `X: ${e}, Y: ${t}` },
        41493: "ExposureIndex",
        41495: {
            name: "SensingMethod",
            description: (e) => {
                if (1 === e) return "Undefined";
                if (2 === e) return "One-chip color area sensor";
                if (3 === e) return "Two-chip color area sensor";
                if (4 === e) return "Three-chip color area sensor";
                if (5 === e) return "Color sequential area sensor";
                else if (7 === e) return "Trilinear sensor";
                else if (8 === e) return "Color sequential linear sensor";
                return "Unknown";
            },
        },
        41728: { name: "FileSource", description: (e) => (3 === e ? "DSC" : "Unknown") },
        41729: { name: "SceneType", description: (e) => (1 === e ? "A directly photographed image" : "Unknown") },
        41730: { name: "CFAPattern", description: () => "[Raw CFA pattern table data]" },
        41985: { name: "CustomRendered", description: ee.CustomRendered },
        41986: { name: "ExposureMode", description: ee.ExposureMode },
        41987: { name: "WhiteBalance", description: ee.WhiteBalance },
        41988: {
            name: "DigitalZoomRatio",
            description: (e) => (0 === e[0] ? "Digital zoom was not used" : "" + e[0] / e[1]),
        },
        41989: { name: "FocalLengthIn35mmFilm", description: ee.FocalLengthIn35mmFilm },
        41990: { name: "SceneCaptureType", description: ee.SceneCaptureType },
        41991: {
            name: "GainControl",
            description: (e) => {
                if (0 === e) return "None";
                if (1 === e) return "Low gain up";
                if (2 === e) return "High gain up";
                if (3 === e) return "Low gain down";
                if (4 === e) return "High gain down";
                return "Unknown";
            },
        },
        41992: { name: "Contrast", description: ee.Contrast },
        41993: { name: "Saturation", description: ee.Saturation },
        41994: { name: "Sharpness", description: ee.Sharpness },
        41995: { name: "DeviceSettingDescription", description: () => "[Raw device settings table data]" },
        41996: {
            name: "SubjectDistanceRange",
            description: (e) => (1 === e ? "Macro" : 2 === e ? "Close view" : 3 === e ? "Distant view" : "Unknown"),
        },
        42016: "ImageUniqueID",
        42032: "CameraOwnerName",
        42033: "BodySerialNumber",
        42034: {
            name: "LensSpecification",
            description: (e) => {
                let t = parseFloat((e[0][0] / e[0][1]).toFixed(5)),
                    n = parseFloat((e[1][0] / e[1][1]).toFixed(5)),
                    i = `${t}-${n} mm`;
                if (0 === e[3][1]) return `${i} f/?`;
                let r = 1 / (e[2][1] / e[2][1] / (e[3][0] / e[3][1]));
                return `${i} f/${parseFloat(r.toFixed(5))}`;
            },
        },
        42035: "LensMake",
        42036: "LensModel",
        42037: "LensSerialNumber",
        42080: {
            name: "CompositeImage",
            description: (e) =>
                ({
                    1: "Not a Composite Image",
                    2: "General Composite Image",
                    3: "Composite Image Captured While Shooting",
                })[e] || "Unknown",
        },
        42081: "SourceImageNumberOfCompositeImage",
        42082: "SourceExposureTimesOfCompositeImage",
        42240: "Gamma",
        59932: "Padding",
        59933: "OffsetSchema",
        65e3: "OwnerName",
        65001: "SerialNumber",
        65002: "Lens",
        65100: "RawFile",
        65101: "Converter",
        65102: "WhiteBalance",
        65105: "Exposure",
        65106: "Shadows",
        65107: "Brightness",
        65108: "Contrast",
        65109: "Saturation",
        65110: "Sharpness",
        65111: "Smoothness",
        65112: "MoireFilter",
    }),
    er = "exif",
    eo = "interoperability",
    ea = "canon",
    es = "pentax",
    el = {
        "0th": ei,
        "1st": et,
        [er]: ei,
        gps: {
            0: {
                name: "GPSVersionID",
                description: (e) => (2 === e[0] && 2 === e[1] && 0 === e[2] && 0 === e[3] ? "Version 2.2" : "Unknown"),
            },
            1: {
                name: "GPSLatitudeRef",
                description: (e) => {
                    let t = e.join("");
                    return "N" === t ? "North latitude" : "S" === t ? "South latitude" : "Unknown";
                },
            },
            2: { name: "GPSLatitude", description: b },
            3: {
                name: "GPSLongitudeRef",
                description: (e) => {
                    let t = e.join("");
                    return "E" === t ? "East longitude" : "W" === t ? "West longitude" : "Unknown";
                },
            },
            4: { name: "GPSLongitude", description: b },
            5: {
                name: "GPSAltitudeRef",
                description: (e) =>
                    0 === e ? "Sea level" : 1 === e ? "Sea level reference (negative value)" : "Unknown",
            },
            6: { name: "GPSAltitude", description: (e) => e[0] / e[1] + " m" },
            7: {
                name: "GPSTimeStamp",
                description: (e) =>
                    e
                        .map(([e, t]) => {
                            let n = e / t;
                            return /^\d(\.|$)/.test(`${n}`) ? `0${n}` : n;
                        })
                        .join(":"),
            },
            8: "GPSSatellites",
            9: {
                name: "GPSStatus",
                description: (e) => {
                    let t = e.join("");
                    return "A" === t
                        ? "Measurement in progress"
                        : "V" === t
                          ? "Measurement Interoperability"
                          : "Unknown";
                },
            },
            10: {
                name: "GPSMeasureMode",
                description: (e) => {
                    let t = e.join("");
                    return "2" === t
                        ? "2-dimensional measurement"
                        : "3" === t
                          ? "3-dimensional measurement"
                          : "Unknown";
                },
            },
            11: "GPSDOP",
            12: {
                name: "GPSSpeedRef",
                description: (e) => {
                    let t = e.join("");
                    return "K" === t
                        ? "Kilometers per hour"
                        : "M" === t
                          ? "Miles per hour"
                          : "N" === t
                            ? "Knots"
                            : "Unknown";
                },
            },
            13: "GPSSpeed",
            14: {
                name: "GPSTrackRef",
                description: (e) => {
                    let t = e.join("");
                    return "T" === t ? "True direction" : "M" === t ? "Magnetic direction" : "Unknown";
                },
            },
            15: "GPSTrack",
            16: {
                name: "GPSImgDirectionRef",
                description: (e) => {
                    let t = e.join("");
                    return "T" === t ? "True direction" : "M" === t ? "Magnetic direction" : "Unknown";
                },
            },
            17: "GPSImgDirection",
            18: "GPSMapDatum",
            19: {
                name: "GPSDestLatitudeRef",
                description: (e) => {
                    let t = e.join("");
                    return "N" === t ? "North latitude" : "S" === t ? "South latitude" : "Unknown";
                },
            },
            20: {
                name: "GPSDestLatitude",
                description: (e) => e[0][0] / e[0][1] + e[1][0] / e[1][1] / 60 + e[2][0] / e[2][1] / 3600,
            },
            21: {
                name: "GPSDestLongitudeRef",
                description: (e) => {
                    let t = e.join("");
                    return "E" === t ? "East longitude" : "W" === t ? "West longitude" : "Unknown";
                },
            },
            22: {
                name: "GPSDestLongitude",
                description: (e) => e[0][0] / e[0][1] + e[1][0] / e[1][1] / 60 + e[2][0] / e[2][1] / 3600,
            },
            23: {
                name: "GPSDestBearingRef",
                description: (e) => {
                    let t = e.join("");
                    return "T" === t ? "True direction" : "M" === t ? "Magnetic direction" : "Unknown";
                },
            },
            24: "GPSDestBearing",
            25: {
                name: "GPSDestDistanceRef",
                description: (e) => {
                    let t = e.join("");
                    return "K" === t ? "Kilometers" : "M" === t ? "Miles" : "N" === t ? "Knots" : "Unknown";
                },
            },
            26: "GPSDestDistance",
            27: { name: "GPSProcessingMethod", description: y },
            28: { name: "GPSAreaInformation", description: y },
            29: "GPSDateStamp",
            30: {
                name: "GPSDifferential",
                description: (e) =>
                    0 === e
                        ? "Measurement without differential correction"
                        : 1 === e
                          ? "Differential correction applied"
                          : "Unknown",
            },
            31: "GPSHPositioningError",
        },
        [eo]: {
            1: "InteroperabilityIndex",
            2: { name: "InteroperabilityVersion", description: (e) => h(e) },
            4096: "RelatedImageFileFormat",
            4097: "RelatedImageWidth",
            4098: "RelatedImageHeight",
        },
        mpf: {
            45056: { name: "MPFVersion", description: (e) => h(e) },
            45057: "NumberOfImages",
            45058: "MPEntry",
            45059: "ImageUIDList",
            45060: "TotalFrames",
        },
        [ea]: { 4: { name: "ShotInfo", description: (e) => e } },
        [es]: { 0: { name: "PentaxVersion", description: (e) => e.join(".") }, 5: "PentaxModelID", 555: "LevelInfo" },
    },
    eu = { 1: 1, 2: 1, 3: 2, 4: 4, 5: 8, 7: 1, 9: 4, 10: 8, 13: 4 },
    ec = { BYTE: 1, ASCII: 2, SHORT: 3, LONG: 4, RATIONAL: 5, UNDEFINED: 7, SLONG: 9, SRATIONAL: 10, IFD: 13 },
    ep = eg,
    ef = function (e, t, n) {
        return e.getUint16(t, 18761 === n);
    },
    ed = eh,
    em = function (e) {
        if (void 0 === ec[e]) throw Error("No such type found.");
        return eu[ec[e]];
    };
function eg(e, t) {
    return e.getUint8(t);
}
function eh(e, t, n) {
    return e.getUint32(t, 18761 === n);
}
function ey(e, t, n) {
    return e.getInt32(t, 18761 === n);
}
let eb = {
    1: ep,
    2: function (e, t) {
        return e.getUint8(t);
    },
    3: ef,
    4: ed,
    5: function (e, t, n) {
        return [eh(e, t, n), eh(e, t + 4, n)];
    },
    7: function (e, t) {
        return eg(e, t);
    },
    9: ey,
    10: function (e, t, n) {
        return [ey(e, t, n), ey(e, t + 4, n)];
    },
    13: function (e, t, n) {
        return eh(e, t, n);
    },
};
function ev(e, t, n, i, r, o) {
    var a, s, l;
    let u = em("SHORT"),
        c = {},
        p = ((a = e), (s = i), (l = r), s + em("SHORT") <= a.byteLength ? ef(a, s, l) : 0);
    i += u;
    for (let a = 0; a < p && !(i + 12 > e.byteLength); a++) {
        let a = (function (e, t, n, i, r, o) {
            var a, s, l, u, c, p, f;
            let d,
                m,
                g = em("SHORT"),
                h = g + em("SHORT"),
                y = h + em("LONG"),
                b = ef(e, i, r),
                v = ef(e, i + g, r),
                C = ed(e, i + h, r);
            if (void 0 === eu[v] || (!o && void 0 === el[t][b])) return;
            ((a = v), (s = C), eu[a] * s <= em("LONG"))
                ? (d = eC(e, (m = i + y), v, C, r))
                : ((m = ed(e, i + y, r)),
                  (l = e),
                  (u = n),
                  (c = m),
                  (p = v),
                  (f = C),
                  (d = u + c + eu[p] * f <= l.byteLength ? eC(e, n + m, v, C, r, 33723 === b) : "<faulty value>")),
                v === ec.ASCII &&
                    (d = (function (e) {
                        try {
                            return e.map((e) => decodeURIComponent(escape(e)));
                        } catch (t) {
                            return e;
                        }
                    })(
                        (d = (function (e) {
                            let t = [],
                                n = 0;
                            for (let i = 0; i < e.length; i++) {
                                if ("\0" === e[i]) {
                                    n++;
                                    continue;
                                }
                                void 0 === t[n] && (t[n] = ""), (t[n] += e[i]);
                            }
                            return t;
                        })(d)),
                    ));
            let P = `undefined-${b}`,
                T = d;
            if (void 0 !== el[t][b])
                if (void 0 !== el[t][b].name && void 0 !== el[t][b].description) {
                    P = el[t][b].name;
                    try {
                        T = el[t][b].description(d);
                    } catch (e) {
                        T = eP(d);
                    }
                } else
                    v === ec.RATIONAL || v === ec.SRATIONAL
                        ? ((P = el[t][b]), (T = "" + d[0] / d[1]))
                        : ((P = el[t][b]), (T = eP(d)));
            return { id: b, name: P, value: d, description: T, __offset: m };
        })(e, t, n, i, r, o);
        void 0 !== a &&
            ((c[a.name] = { id: a.id, value: a.value, description: a.description }),
            ("MakerNote" === a.name || (t === es && "LevelInfo" === a.name)) && (c[a.name].__offset = a.__offset)),
            (i += 12);
    }
    if (i < e.byteLength - em("LONG")) {
        let a = ed(e, i, r);
        0 !== a && "0th" === t && (c.Thumbnail = ev(e, "1st", n, n + a, r, o));
    }
    return c;
}
function eC(e, t, n, i, r, o = !1) {
    let a = [];
    o && ((i *= eu[n]), (n = ec.BYTE));
    for (let o = 0; o < i; o++) a.push(eb[n](e, t, r)), (t += eu[n]);
    return n === ec.ASCII ? (a = a.map((e) => String.fromCharCode(e))) : 1 === a.length && (a = a[0]), a;
}
function eP(e) {
    return e instanceof Array ? e.join(", ") : e;
}
let eT = "Exif IFD Pointer",
    eF = "GPS Info IFD Pointer",
    ex = "Interoperability IFD Pointer",
    eI = function (e, t, n) {
        var i, r, o, a, s, l, u, c, f, d, m, g, h, y, b;
        let C = v(e, t),
            P = (function (e, t, n, i) {
                return ev(e, "0th", t, t + ed(e, t + 4, n), n, i);
            })(e, t, C, n);
        return {
            tags:
                ((m =
                    ((l =
                        ((i = P),
                        (r = e),
                        (o = t),
                        (a = C),
                        (s = n),
                        (P = void 0 !== i[eT] ? p(i, ev(r, er, o, o + i[eT].value, a, s)) : i))),
                    (u = e),
                    (c = t),
                    (f = C),
                    (d = n),
                    (P = void 0 !== l[eF] ? p(l, ev(u, "gps", c, c + l[eF].value, f, d)) : l))),
                (g = e),
                (h = t),
                (y = C),
                (b = n),
                (P = void 0 !== m[ex] ? p(m, ev(g, eo, h, h + m[ex].value, y, b)) : m)),
            byteOrder: C,
        };
    },
    eS = function (e, t, n) {
        let i = v(e, t),
            r = ev(e, "mpf", t, t + ed(e, t + 4, i), i, n);
        return (function (e, t, n, i) {
            if (!n.MPEntry) return n;
            let r = [];
            for (let o = 0; o < Math.ceil(n.MPEntry.value.length / 16); o++) {
                r[o] = {};
                let a = ek(n.MPEntry.value, 16 * o, em("LONG"), i);
                (r[o].ImageFlags = (function (e) {
                    let t = [(e >> 31) & 1, (e >> 30) & 1, (e >> 29) & 1],
                        n = [];
                    return (
                        t[0] && n.push("Dependent Parent Image"),
                        t[1] && n.push("Dependent Child Image"),
                        t[2] && n.push("Representative Image"),
                        { value: t, description: n.join(", ") || "None" }
                    );
                })(a)),
                    (r[o].ImageFormat = (function (e) {
                        let t = (e >> 24) & 7;
                        return { value: t, description: 0 === t ? "JPEG" : "Unknown" };
                    })(a)),
                    (r[o].ImageType = (function (e) {
                        let t = 0xffffff & e;
                        return {
                            value: t,
                            description:
                                {
                                    196608: "Baseline MP Primary Image",
                                    65537: "Large Thumbnail (VGA equivalent)",
                                    65538: "Large Thumbnail (Full HD equivalent)",
                                    131073: "Multi-Frame Image (Panorama)",
                                    131074: "Multi-Frame Image (Disparity)",
                                    131075: "Multi-Frame Image (Multi-Angle)",
                                    0: "Undefined",
                                }[t] || "Unknown",
                        };
                    })(a));
                let s = ek(n.MPEntry.value, 16 * o + 4, em("LONG"), i);
                r[o].ImageSize = { value: s, description: "" + s };
                let l = (function (e, t, n, i) {
                    return 0 === e ? 0 : ek(t.value, 16 * e + 8, em("LONG"), n) + i;
                })(o, n.MPEntry, i, t);
                r[o].ImageOffset = { value: l, description: "" + l };
                let u = ek(n.MPEntry.value, 16 * o + 12, em("SHORT"), i);
                r[o].DependentImage1EntryNumber = { value: u, description: "" + u };
                let c = ek(n.MPEntry.value, 16 * o + 14, em("SHORT"), i);
                (r[o].DependentImage2EntryNumber = { value: c, description: "" + c }),
                    (r[o].image = e.buffer.slice(l, l + s)),
                    f(r[o], "base64", function () {
                        return d(this.image);
                    });
            }
            return (n.Images = r), n;
        })(e, t, r, i);
    };
function ek(e, t, n, i) {
    if (18761 === i) {
        let i = 0;
        for (let r = 0; r < n; r++) i += e[t + r] << (8 * r);
        return i;
    }
    let r = 0;
    for (let i = 0; i < n; i++) r += e[t + i] << (8 * (n - 1 - i));
    return r;
}
let eA = function (e, t) {
        let n = ef(e, t),
            i = (function (e, t, n) {
                if (8 > n) return;
                let i = ep(e, t + 7);
                return { value: i, description: "" + i };
            })(e, t, n);
        return {
            "Bits Per Sample": (function (e, t, n) {
                if (3 > n) return;
                let i = ep(e, t + 2);
                return { value: i, description: "" + i };
            })(e, t, n),
            "Image Height": (function (e, t, n) {
                if (5 > n) return;
                let i = ef(e, t + 3);
                return { value: i, description: `${i}px` };
            })(e, t, n),
            "Image Width": (function (e, t, n) {
                if (7 > n) return;
                let i = ef(e, t + 5);
                return { value: i, description: `${i}px` };
            })(e, t, n),
            "Color Components": i,
            Subsampling:
                i &&
                (function (e, t, n, i) {
                    var r;
                    let o, a;
                    if (8 + 3 * n > i) return;
                    let s = [];
                    for (let i = 0; i < n; i++) {
                        let n = t + 8 + 3 * i;
                        s.push([ep(e, n), ep(e, n + 1), ep(e, n + 2)]);
                    }
                    return {
                        value: s,
                        description:
                            s.length > 1
                                ? ((o = { 1: "Y", 2: "Cb", 3: "Cr", 4: "I", 5: "Q" }),
                                  s.map((e) => o[e[0]]).join("") +
                                      ((a = {
                                          17: "4:4:4 (1 1)",
                                          18: "4:4:0 (1 2)",
                                          20: "4:4:1 (1 4)",
                                          33: "4:2:2 (2 1)",
                                          34: "4:2:0 (2 2)",
                                          36: "4:2:1 (2 4)",
                                          65: "4:1:1 (4 1)",
                                          66: "4:1:0 (4 2)",
                                      }),
                                      0 === (r = s).length || void 0 === r[0][1] || void 0 === a[r[0][1]]
                                          ? ""
                                          : a[r[0][1]]))
                                : "",
                    };
                })(e, t, i.value, n),
        };
    },
    eM = function (e, t) {
        let n = ef(e, t),
            i = (function (e, t, n) {
                if (15 > n) return;
                let i = ep(e, t + 14);
                return { value: i, description: `${i}px` };
            })(e, t, n),
            r = (function (e, t, n) {
                if (16 > n) return;
                let i = ep(e, t + 15);
                return { value: i, description: `${i}px` };
            })(e, t, n),
            o = {
                "JFIF Version": (function (e, t, n) {
                    if (9 > n) return;
                    let i = ep(e, t + 7),
                        r = ep(e, t + 7 + 1);
                    return { value: 256 * i + r, description: i + "." + r };
                })(e, t, n),
                "Resolution Unit": (function (e, t, n) {
                    var i;
                    if (10 > n) return;
                    let r = ep(e, t + 9);
                    return {
                        value: r,
                        description: 0 === (i = r) ? "None" : 1 === i ? "inches" : 2 === i ? "cm" : "Unknown",
                    };
                })(e, t, n),
                XResolution: (function (e, t, n) {
                    if (12 > n) return;
                    let i = ef(e, t + 10);
                    return { value: i, description: "" + i };
                })(e, t, n),
                YResolution: (function (e, t, n) {
                    if (14 > n) return;
                    let i = ef(e, t + 12);
                    return { value: i, description: "" + i };
                })(e, t, n),
                "JFIF Thumbnail Width": i,
                "JFIF Thumbnail Height": r,
            };
        if (void 0 !== i && void 0 !== r) {
            let a = (function (e, t, n, i) {
                if (0 !== n && !(16 + n > i))
                    return { value: e.buffer.slice(t + 16, t + 16 + n), description: "<24-bit RGB pixel data>" };
            })(e, t, 3 * i.value * r.value, n);
            a && (o["JFIF Thumbnail"] = a);
        }
        for (let e in o) void 0 === o[e] && delete o[e];
        return o;
    },
    ew = {
        256: { name: "Model Version", description: (e) => ((e[0] << 8) + e[1]).toString() },
        261: { name: "Destination", repeatable: !0 },
        276: { name: "File Format", description: (e) => ((e[0] << 8) + e[1]).toString() },
        278: { name: "File Format Version", description: (e) => ((e[0] << 8) + e[1]).toString() },
        286: "Service Identifier",
        296: "Envelope Number",
        306: "Product ID",
        316: "Envelope Priority",
        326: { name: "Date Sent", description: eO },
        336: { name: "Time Sent", description: eE },
        346: { name: "Coded Character Set", description: eU, encoding_name: eU },
        356: "UNO",
        376: { name: "ARM Identifier", description: (e) => ((e[0] << 8) + e[1]).toString() },
        378: { name: "ARM Version", description: (e) => ((e[0] << 8) + e[1]).toString() },
        512: { name: "Record Version", description: (e) => ((e[0] << 8) + e[1]).toString() },
        515: "Object Type Reference",
        516: "Object Attribute Reference",
        517: "Object Name",
        519: "Edit Status",
        520: { name: "Editorial Update", description: (e) => ("01" === h(e) ? "Additional Language" : "Unknown") },
        522: "Urgency",
        524: {
            name: "Subject Reference",
            repeatable: !0,
            description: (e) => {
                let t = h(e).split(":");
                return t[2] + (t[3] ? "/" + t[3] : "") + (t[4] ? "/" + t[4] : "");
            },
        },
        527: "Category",
        532: { name: "Supplemental Category", repeatable: !0 },
        534: "Fixture Identifier",
        537: { name: "Keywords", repeatable: !0 },
        538: { name: "Content Location Code", repeatable: !0 },
        539: { name: "Content Location Name", repeatable: !0 },
        542: "Release Date",
        547: "Release Time",
        549: "Expiration Date",
        550: "Expiration Time",
        552: "Special Instructions",
        554: {
            name: "Action Advised",
            description: (e) => {
                let t = h(e);
                return "01" === t
                    ? "Object Kill"
                    : "02" === t
                      ? "Object Replace"
                      : "03" === t
                        ? "Object Append"
                        : "04" === t
                          ? "Object Reference"
                          : "Unknown";
            },
        },
        557: { name: "Reference Service", repeatable: !0 },
        559: { name: "Reference Date", repeatable: !0 },
        562: { name: "Reference Number", repeatable: !0 },
        567: { name: "Date Created", description: eO },
        572: { name: "Time Created", description: eE },
        574: { name: "Digital Creation Date", description: eO },
        575: { name: "Digital Creation Time", description: eE },
        577: "Originating Program",
        582: "Program Version",
        587: {
            name: "Object Cycle",
            description: (e) => {
                let t = h(e);
                return "a" === t ? "morning" : "p" === t ? "evening" : "b" === t ? "both" : "Unknown";
            },
        },
        592: { name: "By-line", repeatable: !0 },
        597: { name: "By-line Title", repeatable: !0 },
        602: "City",
        604: "Sub-location",
        607: "Province/State",
        612: "Country/Primary Location Code",
        613: "Country/Primary Location Name",
        615: "Original Transmission Reference",
        617: "Headline",
        622: "Credit",
        627: "Source",
        628: "Copyright Notice",
        630: { name: "Contact", repeatable: !0 },
        632: "Caption/Abstract",
        634: { name: "Writer/Editor", repeatable: !0 },
        637: { name: "Rasterized Caption", description: (e) => e },
        642: "Image Type",
        643: {
            name: "Image Orientation",
            description: (e) => {
                let t = h(e);
                return "P" === t ? "Portrait" : "L" === t ? "Landscape" : "S" === t ? "Square" : "Unknown";
            },
        },
        647: "Language Identifier",
        662: {
            name: "Audio Type",
            description: (e) => {
                let t = h(e),
                    n = t.charAt(0),
                    i = t.charAt(1),
                    r = "";
                return ("1" === n ? (r += "Mono") : "2" === n && (r += "Stereo"),
                "A" === i
                    ? (r += ", actuality")
                    : "C" === i
                      ? (r += ", question and answer session")
                      : "M" === i
                        ? (r += ", music, transmitted by itself")
                        : "Q" === i
                          ? (r += ", response to a question")
                          : "R" === i
                            ? (r += ", raw sound")
                            : "S" === i
                              ? (r += ", scener")
                              : "V" === i
                                ? (r += ", voicer")
                                : "W" === i && (r += ", wrap"),
                "" !== r)
                    ? r
                    : t;
            },
        },
        663: { name: "Audio Sampling Rate", description: (e) => parseInt(h(e), 10) + " Hz" },
        664: {
            name: "Audio Sampling Resolution",
            description: (e) => {
                let t = parseInt(h(e), 10);
                return t + (1 === t ? " bit" : " bits");
            },
        },
        665: {
            name: "Audio Duration",
            description: (e) => {
                let t = h(e);
                return t.length >= 6 ? t.substr(0, 2) + ":" + t.substr(2, 2) + ":" + t.substr(4, 2) : t;
            },
        },
        666: "Audio Outcue",
        698: "Short Document ID",
        699: "Unique Document ID",
        700: "Owner ID",
        712: {
            name: (e) => (2 === e.length ? "ObjectData Preview File Format" : "Record 2 destination"),
            description: (e) => {
                if (2 === e.length) {
                    let t = (e[0] << 8) + e[1];
                    if (0 === t) return "No ObjectData";
                    if (1 === t) return "IPTC-NAA Digital Newsphoto Parameter Record";
                    if (2 === t) return "IPTC7901 Recommended Message Format";
                    else if (3 === t) return "Tagged Image File Format (Adobe/Aldus Image data)";
                    else if (4 === t) return "Illustrator (Adobe Graphics data)";
                    else if (5 === t) return "AppleSingle (Apple Computer Inc)";
                    else if (6 === t) return "NAA 89-3 (ANPA 1312)";
                    else if (7 === t) return "MacBinary II";
                    else if (8 === t) return "IPTC Unstructured Character Oriented File Format (UCOFF)";
                    else if (9 === t) return "United Press International ANPA 1312 variant";
                    else if (10 === t) return "United Press International Down-Load Message";
                    else if (11 === t) return "JPEG File Interchange (JFIF)";
                    else if (12 === t) return "Photo-CD Image-Pac (Eastman Kodak)";
                    else if (13 === t) return "Microsoft Bit Mapped Graphics File [*.BMP]";
                    else if (14 === t) return "Digital Audio File [*.WAV] (Microsoft & Creative Labs)";
                    else if (15 === t) return "Audio plus Moving Video [*.AVI] (Microsoft)";
                    else if (16 === t) return "PC DOS/Windows Executable Files [*.COM][*.EXE]";
                    else if (17 === t) return "Compressed Binary File [*.ZIP] (PKWare Inc)";
                    else if (18 === t) return "Audio Interchange File Format AIFF (Apple Computer Inc)";
                    else if (19 === t) return "RIFF Wave (Microsoft Corporation)";
                    else if (20 === t) return "Freehand (Macromedia/Aldus)";
                    else if (21 === t) return 'Hypertext Markup Language "HTML" (The Internet Society)';
                    else if (22 === t) return "MPEG 2 Audio Layer 2 (Musicom), ISO/IEC";
                    else if (23 === t) return "MPEG 2 Audio Layer 3, ISO/IEC";
                    else if (24 === t) return "Portable Document File (*.PDF) Adobe";
                    else if (25 === t) return "News Industry Text Format (NITF)";
                    else if (26 === t) return "Tape Archive (*.TAR)";
                    else if (27 === t) return "Tidningarnas Telegrambyr\xe5 NITF version (TTNITF DTD)";
                    else if (28 === t) return "Ritzaus Bureau NITF version (RBNITF DTD)";
                    else if (29 === t) return "Corel Draw [*.CDR]";
                    return `Unknown format ${t}`;
                }
                return h(e);
            },
        },
        713: {
            name: "ObjectData Preview File Format Version",
            description: (e, t) => {
                let n = {
                        "00": { "00": "1" },
                        "01": { "01": "1", "02": "2", "03": "3", "04": "4" },
                        "02": { "04": "4" },
                        "03": { "01": "5.0", "02": "6.0" },
                        "04": { "01": "1.40" },
                        "05": { "01": "2" },
                        "06": { "01": "1" },
                        11: { "01": "1.02" },
                        20: { "01": "3.1", "02": "4.0", "03": "5.0", "04": "5.5" },
                        21: { "02": "2.0" },
                    },
                    i = h(e);
                if (t["ObjectData Preview File Format"]) {
                    let e = h(t["ObjectData Preview File Format"].value);
                    if (n[e] && n[e][i]) return n[e][i];
                }
                return i;
            },
        },
        714: "ObjectData Preview Data",
        1802: { name: "Size Mode", description: (e) => e[0].toString() },
        1812: {
            name: "Max Subfile Size",
            description: (e) => {
                let t = 0;
                for (let n = 0; n < e.length; n++) t = (t << 8) + e[n];
                return t.toString();
            },
        },
        1882: {
            name: "ObjectData Size Announced",
            description: (e) => {
                let t = 0;
                for (let n = 0; n < e.length; n++) t = (t << 8) + e[n];
                return t.toString();
            },
        },
        1887: {
            name: "Maximum ObjectData Size",
            description: (e) => {
                let t = 0;
                for (let n = 0; n < e.length; n++) t = (t << 8) + e[n];
                return t.toString();
            },
        },
    };
function eO(e) {
    let t = h(e);
    return t.length >= 8 ? t.substr(0, 4) + "-" + t.substr(4, 2) + "-" + t.substr(6, 2) : t;
}
function eE(e) {
    let t = h(e),
        n = t;
    return (
        t.length >= 6 &&
            ((n = t.substr(0, 2) + ":" + t.substr(2, 2) + ":" + t.substr(4, 2)),
            11 === t.length && (n += t.substr(6, 1) + t.substr(7, 2) + ":" + t.substr(9, 2))),
        n
    );
}
function eU(e) {
    let t = h(e);
    if ("\x1b%G" === t) return "UTF-8";
    if ("\x1b%5" === t) return "Windows-1252";
    if ("\x1b%/G" === t) return "UTF-8 Level 1";
    if ("\x1b%/H" === t) return "UTF-8 Level 2";
    if ("\x1b%/I" === t) return "UTF-8 Level 3";
    else if ("\x1b/A" === t) return "ISO-8859-1";
    else if ("\x1b/B" === t) return "ISO-8859-2";
    else if ("\x1b/C" === t) return "ISO-8859-3";
    else if ("\x1b/D" === t) return "ISO-8859-4";
    else if ("\x1b/@" === t) return "ISO-8859-5";
    else if ("\x1b/G" === t) return "ISO-8859-6";
    else if ("\x1b/F" === t) return "ISO-8859-7";
    else if ("\x1b/H" === t) return "ISO-8859-8";
    return "Unknown";
}
let eD = function () {
        if ("u" > typeof TextDecoder) return TextDecoder;
    },
    eL = function (e, t) {
        let n = eD();
        if (void 0 !== n && void 0 !== e)
            try {
                return new n(e).decode(t instanceof DataView ? t.buffer : Uint8Array.from(t));
            } catch (e) {}
        var i = t.map((e) => String.fromCharCode(e)).join("");
        try {
            return decodeURIComponent(escape(i));
        } catch (e) {
            return i;
        }
    },
    eR = function (e, t, n) {
        try {
            if (Array.isArray(e)) return eB(new DataView(Uint8Array.from(e).buffer), { size: e.length }, 0, n);
            let { naaBlock: i, dataOffset: r } = (function (e, t) {
                for (; t + 12 <= e.byteLength; ) {
                    var n, i;
                    let r = (function (e, t) {
                        if (0x3842494d !== e.getUint32(t, !1)) throw Error("Not an IPTC resource block.");
                        let n = e.getUint8(t + 4 + 2),
                            i = (n % 2 == 0 ? n + 1 : n) + 1;
                        return { headerSize: 6 + i + 4, type: e.getUint16(t + 4), size: e.getUint32(t + 4 + 2 + i) };
                    })(e, t);
                    if (((n = r), 1028 === n.type)) return { naaBlock: r, dataOffset: t + r.headerSize };
                    t += r.headerSize + r.size + ((i = r), +(i.size % 2 != 0));
                }
                throw Error("No IPTC NAA resource block.");
            })(e, t);
            return eB(e, i, r, n);
        } catch (e) {
            return {};
        }
    };
function eB(e, t, n, i) {
    let r,
        o = {},
        a = n + t.size;
    for (; n < a && n < e.byteLength; ) {
        let { tag: t, tagSize: a } = (function (e, t, n, i, r) {
            var o, a, s, l;
            if (((o = e), (a = t), 28 !== o.getUint8(a))) return { tag: null, tagSize: 0 };
            let u = e.getUint16(t + 1),
                c = e.getUint16(t + 3);
            if (!r && !ew[u]) return { tag: void 0, tagSize: c };
            let p = (function (e, t, n) {
                    let i = [];
                    for (let r = 0; r < n; r++) i.push(e.getUint8(t + r));
                    return i;
                })(e, t + 5, c),
                f = {
                    id: u,
                    name: (function (e, t, n) {
                        return e
                            ? "string" == typeof e
                                ? e
                                : "function" == typeof e.name
                                  ? e.name(n)
                                  : e.name
                            : `undefined-${t}`;
                    })(ew[u], u, p),
                    value: p,
                    description: (function (e, t, n, i) {
                        var r, o, a;
                        if ((r = e) && void 0 !== r.description)
                            try {
                                return e.description(t, n);
                            } catch (e) {}
                        return ((o = e), (a = t), o && a instanceof Array) ? eL(i, t) : t;
                    })(ew[u], p, n, i),
                };
            return (
                ew[(s = u)] && ew[s].repeatable && (f.repeatable = !0),
                ew[(l = u)] && void 0 !== ew[l].encoding_name && (f.encoding = ew[u].encoding_name(p)),
                { tag: f, tagSize: c }
            );
        })(e, n, o, r, i);
        if (null === t) break;
        t &&
            ("encoding" in t && (r = t.encoding),
            void 0 === o[t.name] || void 0 === t.repeatable
                ? (o[t.name] = { id: t.id, value: t.value, description: t.description })
                : (o[t.name] instanceof Array ||
                      (o[t.name] = [{ id: o[t.name].id, value: o[t.name].value, description: o[t.name].description }]),
                  o[t.name].push({ id: t.id, value: t.value, description: t.description }))),
            (n += 5 + a);
    }
    return o;
}
let eN = {
    "tiff:Orientation": (e) =>
        "1" === e
            ? "Horizontal (normal)"
            : "2" === e
              ? "Mirror horizontal"
              : "3" === e
                ? "Rotate 180"
                : "4" === e
                  ? "Mirror vertical"
                  : "5" === e
                    ? "Mirror horizontal and rotate 270 CW"
                    : "6" === e
                      ? "Rotate 90 CW"
                      : "7" === e
                        ? "Mirror horizontal and rotate 90 CW"
                        : "8" === e
                          ? "Rotate 270 CW"
                          : e,
    "tiff:ResolutionUnit": (e) => ee.ResolutionUnit(parseInt(e, 10)),
    "tiff:XResolution": (e) => e_(ee.XResolution, e),
    "tiff:YResolution": (e) => e_(ee.YResolution, e),
    "exif:ApertureValue": (e) => e_(ee.ApertureValue, e),
    "exif:GPSLatitude": ej,
    "exif:GPSLongitude": ej,
    "exif:FNumber": (e) => e_(ee.FNumber, e),
    "exif:FocalLength": (e) => e_(ee.FocalLength, e),
    "exif:FocalPlaneResolutionUnit": (e) => ee.FocalPlaneResolutionUnit(parseInt(e, 10)),
    "exif:ColorSpace": (e) => {
        var t;
        return ee.ColorSpace("0x" === (t = e).substring(0, 2) ? parseInt(t.substring(2), 16) : parseInt(t, 10));
    },
    "exif:ComponentsConfiguration"(e, t) {
        if (/^\d, \d, \d, \d$/.test(t)) {
            let e = t.split(", ").map((e) => e.charCodeAt(0));
            return ee.ComponentsConfiguration(e);
        }
        return t;
    },
    "exif:Contrast": (e) => ee.Contrast(parseInt(e, 10)),
    "exif:CustomRendered": (e) => ee.CustomRendered(parseInt(e, 10)),
    "exif:ExposureMode": (e) => ee.ExposureMode(parseInt(e, 10)),
    "exif:ExposureProgram": (e) => ee.ExposureProgram(parseInt(e, 10)),
    "exif:ExposureTime": (e) => (eG(e) ? ee.ExposureTime(e.split("/").map((e) => parseInt(e, 10))) : e),
    "exif:MeteringMode": (e) => ee.MeteringMode(parseInt(e, 10)),
    "exif:Saturation": (e) => ee.Saturation(parseInt(e, 10)),
    "exif:SceneCaptureType": (e) => ee.SceneCaptureType(parseInt(e, 10)),
    "exif:Sharpness": (e) => ee.Sharpness(parseInt(e, 10)),
    "exif:ShutterSpeedValue": (e) => e_(ee.ShutterSpeedValue, e),
    "exif:WhiteBalance": (e) => ee.WhiteBalance(parseInt(e, 10)),
};
function e_(e, t) {
    return eG(t) ? e(t.split("/")) : t;
}
function eG(e) {
    return /^-?\d+\/-?\d+$/.test(e);
}
function ej(e) {
    let [t, n] = e.split(",");
    if (void 0 !== t && void 0 !== n) {
        let e = parseFloat(t),
            i = parseFloat(n),
            r = n.charAt(n.length - 1);
        if (!Number.isNaN(e) && !Number.isNaN(i)) return "" + (e + i / 60) + r;
    }
    return e;
}
let eq = function (e) {
        if (e) return e;
        if ("u" > typeof DOMParser) return new DOMParser();
        try {
            let { DOMParser: e, onErrorStopParsing: t } = require("@xmldom/xmldom");
            return new e({ onError: t });
        } catch (e) {
            return;
        }
    },
    eV = {
        xmp: "http://ns.adobe.com/xap/1.0/",
        tiff: "http://ns.adobe.com/tiff/1.0/",
        exif: "http://ns.adobe.com/exif/1.0/",
        dc: "http://purl.org/dc/elements/1.1/",
        xmpMM: "http://ns.adobe.com/xap/1.0/mm/",
        stEvt: "http://ns.adobe.com/xap/1.0/sType/ResourceEvent#",
        stRef: "http://ns.adobe.com/xap/1.0/sType/ResourceRef#",
        photoshop: "http://ns.adobe.com/photoshop/1.0/",
    },
    ez = function (e, t, n) {
        let i = {};
        if ("string" == typeof e) return e$(i, e, n), i;
        let [r, o] = (function (e, t) {
                if (0 === t.length) return [];
                let n = [eH(e, t.slice(0, 1))];
                return t.length > 1 && n.push(eH(e, t.slice(1))), n;
            })(e, t),
            a = e$(i, r, n);
        if (o) {
            let r = e$(i, o, n);
            a || r || (delete i._raw, e$(i, eH(e, t), n));
        }
        return i;
    };
class eW extends Error {
    constructor(e) {
        super(e), (this.name = "ParseError");
    }
}
function eH(e, t) {
    let n = new Uint8Array(t.reduce((e, t) => e + t.length, 0)),
        i = 0;
    for (let r = 0; r < t.length; r++) {
        let o = t[r],
            a = e.buffer.slice(o.dataOffset, o.dataOffset + o.length);
        n.set(new Uint8Array(a), i), (i += o.length);
    }
    return new DataView(n.buffer);
}
function e$(e, t, n) {
    try {
        let { doc: i, raw: r } = (function (e, t) {
            let n = eq(t);
            if (!n)
                throw (
                    (console.warn("Warning: DOMParser is not available. It is needed to be able to parse XMP tags."),
                    Error())
                );
            let i = "string" == typeof e ? e : s(e, 0, e.byteLength);
            return {
                doc: (function e(t, n, i = !1) {
                    try {
                        let e = t.parseFromString(n, "application/xml"),
                            i = e.getElementsByTagName("parsererror");
                        if (i.length > 0) throw new eW(i[0].textContent);
                        return e;
                    } catch (r) {
                        if (
                            "ParseError" === r.name &&
                            (function (e) {
                                let t = [
                                    "prefix is non-null and namespace is null",
                                    "prefix not bound to a namespace",
                                    "prefix inte bundet till en namnrymd",
                                    /Namespace prefix .+ is not defined/,
                                ];
                                for (let n = 0; n < t.length; n++) if (new RegExp(t[n]).test(e.message)) return !0;
                                return !1;
                            })(r) &&
                            !i
                        )
                            return e(
                                t,
                                (function (e) {
                                    var t, n, i;
                                    let r,
                                        o = e.match(/<([A-Za-z_][A-Za-z0-9._-]*)([^>]*)>/);
                                    if (!o) return e;
                                    let a = o[1],
                                        s = (function (e) {
                                            let t,
                                                n = [],
                                                i = /xmlns:([\w-]+)=["'][^"']+["']/g;
                                            for (; null !== (t = i.exec(e)); ) -1 === n.indexOf(t[1]) && n.push(t[1]);
                                            return n;
                                        })(e),
                                        l = (function (e) {
                                            let t,
                                                n = [],
                                                i = /\b([A-Za-z_][A-Za-z0-9._-]*):[A-Za-z_][A-Za-z0-9._-]*\b/g;
                                            for (; null !== (t = i.exec(e)); ) {
                                                let e = t[1];
                                                "xmlns" !== e && "xml" !== e && -1 === n.indexOf(e) && n.push(e);
                                            }
                                            return n;
                                        })(e).filter((e) => -1 === s.indexOf(e));
                                    return 0 === l.length
                                        ? e
                                        : ((t = e),
                                          (n = a),
                                          (i = (function (e) {
                                              let t = [];
                                              for (let n = 0; n < e.length; n++) {
                                                  let i = e[n],
                                                      r = eV[i] || "http://fallback.namespace/" + i;
                                                  t.push(" xmlns:" + i + '="' + r + '"');
                                              }
                                              return t.join("");
                                          })(l)),
                                          (r = RegExp("<" + n + "([^>]*)>")),
                                          t.replace(r, "<" + n + "$1" + i + ">"));
                                })(n),
                                !0,
                            );
                        throw r;
                    }
                })(n, i.replace(/^.+(<\?xpacket begin)/, "$1").replace(/(<\?xpacket end=".*"\?>).+$/, "$1")),
                raw: i,
            };
        })(t, n);
        e._raw = (e._raw || "") + r;
        let o = (function e(t) {
            for (let n = 0; n < t.childNodes.length; n++) {
                if ("x:xmpmeta" === t.childNodes[n].tagName) return e(t.childNodes[n]);
                if ("rdf:RDF" === t.childNodes[n].tagName) return t.childNodes[n];
            }
            throw Error();
        })(i);
        return (
            p(
                e,
                eX(
                    (function e(t, n = !1) {
                        var i;
                        let r,
                            o = (function (e) {
                                let t = [];
                                for (let n = 0; n < e.childNodes.length; n++) t.push(e.childNodes[n]);
                                return t;
                            })(t);
                        if (1 === (i = o).length && "#text" === i[0].nodeName) return n ? {} : o[0].nodeValue;
                        return (
                            (r = {}),
                            o.forEach((t) => {
                                var n, i;
                                if ((n = t).nodeName && "#text" !== n.nodeName) {
                                    let n = {
                                        attributes: (function (e) {
                                            let t = {};
                                            for (let n = 0; n < e.attributes.length; n++)
                                                t[e.attributes[n].nodeName] = decodeURIComponent(
                                                    escape(e.attributes[n].value),
                                                );
                                            return t;
                                        })((i = t)),
                                        value: e(i),
                                    };
                                    void 0 !== r[t.nodeName]
                                        ? (Array.isArray(r[t.nodeName]) || (r[t.nodeName] = [r[t.nodeName]]),
                                          r[t.nodeName].push(n))
                                        : (r[t.nodeName] = n);
                                }
                            }),
                            r
                        );
                    })(o, !0),
                ),
            ),
            !0
        );
    } catch (e) {
        return !1;
    }
}
function eX(e) {
    let t = {};
    if ("string" == typeof e) return e;
    for (let n in e) {
        let i = e[n];
        Array.isArray(i) || (i = [i]),
            i.forEach((e) => {
                p(t, eJ(e.attributes)), "object" == typeof e.value && p(t, eQ(e.value));
            });
    }
    return t;
}
function eJ(e) {
    let t = {};
    for (let i in e)
        try {
            var n;
            (n = i),
                "rdf:parseType" === n ||
                    eZ(n) ||
                    (t[eK(i)] = { value: e[i], attributes: {}, description: eY(e[i], i) });
        } catch (e) {}
    return t;
}
function eZ(e) {
    return "xmlns" === e.split(":")[0];
}
function eK(e) {
    return /^MicrosoftPhoto(_\d+_)?:Rating$/i.test(e) ? "RatingPercent" : e.split(":")[1];
}
function eY(e, t) {
    if (Array.isArray(e)) {
        let n = e.map((e) => (void 0 !== e.value ? eY(e.value) : eY(e))).join(", ");
        return t && "function" == typeof eN[t] ? eN[t](e, n) : n;
    }
    if ("object" == typeof e) {
        var n,
            i = e;
        let t = [];
        for (let e in i) {
            t.push(
                `${"CiAdrCity" === ((n = e)) ? "CreatorCity" : "CiAdrCtry" === n ? "CreatorCountry" : "CiAdrExtadr" === n ? "CreatorAddress" : "CiAdrPcode" === n ? "CreatorPostalCode" : "CiAdrRegion" === n ? "CreatorRegion" : "CiEmailWork" === n ? "CreatorWorkEmail" : "CiTelWork" === n ? "CreatorWorkPhone" : "CiUrlWork" === n ? "CreatorWorkUrl" : n}: ${eY(i[e].value)}`,
            );
        }
        return t.join("; ");
    }
    try {
        if (t && "function" == typeof eN[t]) return eN[t](e);
        return decodeURIComponent(escape(e));
    } catch (t) {
        return e;
    }
}
function eQ(e) {
    let t = {};
    for (let n in e)
        try {
            eZ(n) ||
                (t[eK(n)] = (function (e, t) {
                    var n, i, r, o, a;
                    return ((n = e), Array.isArray(n))
                        ? ((i = e), (r = t), e7(i[i.length - 1], r))
                        : ((o = e),
                            "Resource" === o.attributes["rdf:parseType"] &&
                                "string" == typeof o.value &&
                                "" === o.value.trim())
                          ? { value: "", attributes: {}, description: "" }
                          : e0(e)
                            ? e1(e, t)
                            : e3(e)
                              ? e6(e, t)
                              : e5(e)
                                ? e4(e, t)
                                : ((a = e), void 0 !== e8(a.value))
                                  ? (function (e, t) {
                                        let n = e8(e.value).value["rdf:li"],
                                            i = e2(e),
                                            r = [];
                                        return (
                                            void 0 === n ? (n = []) : Array.isArray(n) || (n = [n]),
                                            n.forEach((e) => {
                                                var t;
                                                r.push(
                                                    ((t = e),
                                                    e0(t) ? e1(t) : e3(t) ? e6(t).value : e5(t) ? e4(t).value : e7(t)),
                                                );
                                            }),
                                            { value: r, attributes: i, description: eY(r, t) }
                                        );
                                    })(e, t)
                                  : e7(e, t);
                })(e[n], n));
        } catch (e) {}
    return t;
}
function e0(e) {
    return (
        ("Resource" === e.attributes["rdf:parseType"] && void 0 !== e.value["rdf:value"]) ||
        (void 0 !== e.value["rdf:Description"] && void 0 !== e.value["rdf:Description"].value["rdf:value"])
    );
}
function e1(e, t) {
    var n;
    let i = e2(e);
    void 0 !== e.value["rdf:Description"] && (e = e.value["rdf:Description"]),
        p(
            i,
            e2(e),
            (function (e) {
                let t = {};
                for (let n in e.value) "rdf:value" === n || eZ(n) || (t[eK(n)] = e.value[n].value);
                return t;
            })(e),
        );
    let r = e9((n = e).value["rdf:value"]) || n.value["rdf:value"].value;
    return { value: r, attributes: i, description: eY(r, t) };
}
function e2(e) {
    let t = {};
    for (let n in e.attributes) "rdf:parseType" === n || "rdf:resource" === n || eZ(n) || (t[eK(n)] = e.attributes[n]);
    return t;
}
function e3(e) {
    return (
        "Resource" === e.attributes["rdf:parseType"] ||
        (void 0 !== e.value["rdf:Description"] && void 0 === e.value["rdf:Description"].value["rdf:value"])
    );
}
function e6(e, t) {
    let n = { value: {}, attributes: {} };
    return (
        void 0 !== e.value["rdf:Description"] &&
            (p(n.value, eJ(e.value["rdf:Description"].attributes)),
            p(n.attributes, e2(e)),
            (e = e.value["rdf:Description"])),
        p(n.value, eQ(e.value)),
        (n.description = eY(n.value, t)),
        n
    );
}
function e5(e) {
    return (
        0 === Object.keys(e.value).length &&
        void 0 === e.attributes["xml:lang"] &&
        void 0 === e.attributes["rdf:resource"]
    );
}
function e4(e, t) {
    let n = eJ(e.attributes);
    return { value: n, attributes: {}, description: eY(n, t) };
}
function e8(e) {
    return e["rdf:Bag"] || e["rdf:Seq"] || e["rdf:Alt"];
}
function e7(e, t) {
    let n = e9(e) || eX(e.value);
    return { value: n, attributes: e2(e), description: eY(n, t) };
}
function e9(e) {
    return e.attributes && e.attributes["rdf:resource"];
}
let te = {
        2e3: {
            name: "PathInformation",
            description: function (e) {
                let t = {},
                    n = [];
                for (let i = 0; i < e.byteLength; i += 26) {
                    let r = ef(e, i);
                    tt[r] && (t[r] || (t[r] = tt[r].description), n.push({ type: r, path: tt[r].path(e, i + 2) }));
                }
                return JSON.stringify({ types: t, paths: n });
            },
        },
        2999: {
            name: "ClippingPathName",
            description(e) {
                let [, t] = u(e, 0);
                return t;
            },
        },
    },
    tt = {
        0: { description: "Closed subpath length", path: (e, t) => [ef(e, t)] },
        1: { description: "Closed subpath Bezier knot, linked", path: tn },
        2: { description: "Closed subpath Bezier knot, unlinked", path: tn },
        3: { description: "Open subpath length", path: (e, t) => [ef(e, t)] },
        4: { description: "Open subpath Bezier knot, linked", path: tn },
        5: { description: "Open subpath Bezier knot, unlinked", path: tn },
        6: { description: "Path fill rule", path: () => [] },
        8: { description: "Initial fill rule", path: (e, t) => [ef(e, t)] },
        7: {
            description: "Clipboard",
            path: function (e, t) {
                return [[ti(e, t, 8), ti(e, t + 4, 8), ti(e, t + 8, 8), ti(e, t + 12, 8)], ti(e, t + 16, 8)];
            },
        },
    };
function tn(e, t) {
    let n = [];
    for (let i = 0; i < 24; i += 8)
        n.push(
            (function (e, t) {
                let n = ti(e, t, 8);
                return [ti(e, t + 4, 8), n];
            })(e, t + i),
        );
    return n;
}
function ti(e, t, n) {
    var i, r;
    let o = ed(e, t),
        a = o & parseInt(m("1", 32 - n), 2);
    return (
        (o >>> 31 == 0 ? 1 : -1) *
        (parseInt(
            (r =
                ((0x7f000000 & o) >>> (32 - n)).toString(2) +
                "." +
                (m("0", 32 - n - (i = a.toString(2)).length) + i)).replace(".", ""),
            2,
        ) /
            Math.pow(2, (r.split(".")[1] || "").length))
    );
}
let tr = function (e, t) {
        let n = a(new Uint8Array(e).buffer),
            i = {},
            r = 0;
        for (; r < e.length; ) {
            let e = s(n, r, ta),
                o = ef(n, (r += ta)),
                { tagName: l, tagNameSize: c } = (function (e, t) {
                    let [n, i] = u(e, t);
                    return { tagName: i, tagNameSize: 1 + n + +(n % 2 == 0) };
                })(n, (r += 2)),
                p = ed(n, (r += c));
            if (((r += 4), e === to)) {
                let e = a(n.buffer, r, p),
                    u = { id: o, value: s(e, 0, p) };
                if (te[o]) {
                    try {
                        u.description = te[o].description(e);
                    } catch (e) {
                        u.description = "<no description formatter>";
                    }
                    i[l || te[o].name] = u;
                } else t && (i[`undefined-${o}`] = u);
            }
            r += p + (p % 2);
        }
        return i;
    },
    to = "8BIM",
    ta = to.length,
    ts = {
        desc: { name: "ICC Description" },
        cprt: { name: "ICC Copyright" },
        dmdd: { name: "ICC Device Model Description" },
        vued: { name: "ICC Viewing Conditions Description" },
        dmnd: { name: "ICC Device Manufacturer for Display" },
        tech: { name: "Technology" },
    },
    tl = {
        4: { name: "Preferred CMM type", value: (e, t) => s(e, t, 4), description: (e) => (null !== e ? tu(e) : "") },
        8: {
            name: "Profile Version",
            value: (e, t) =>
                e.getUint8(t).toString(10) +
                "." +
                (e.getUint8(t + 1) >> 4).toString(10) +
                "." +
                (e.getUint8(t + 1) % 16).toString(10),
        },
        12: {
            name: "Profile/Device class",
            value: (e, t) => s(e, t, 4),
            description: (e) => {
                switch (e.toLowerCase()) {
                    case "scnr":
                        return "Input Device profile";
                    case "mntr":
                        return "Display Device profile";
                    case "prtr":
                        return "Output Device profile";
                    case "link":
                        return "DeviceLink profile";
                    case "abst":
                        return "Abstract profile";
                    case "spac":
                        return "ColorSpace profile";
                    case "nmcl":
                        return "NamedColor profile";
                    case "cenc":
                        return "ColorEncodingSpace profile";
                    case "mid ":
                        return "MultiplexIdentification profile";
                    case "mlnk":
                        return "MultiplexLink profile";
                    case "mvis":
                        return "MultiplexVisualization profile";
                    default:
                        return e;
                }
            },
        },
        16: { name: "Color Space", value: (e, t) => s(e, t, 4) },
        20: { name: "Connection Space", value: (e, t) => s(e, t, 4) },
        24: {
            name: "ICC Profile Date",
            value: (e, t) => {
                var n, i;
                return ((n = e),
                (i = t),
                new Date(
                    Date.UTC(
                        n.getUint16(i),
                        n.getUint16(i + 2) - 1,
                        n.getUint16(i + 4),
                        n.getUint16(i + 6),
                        n.getUint16(i + 8),
                        n.getUint16(i + 10),
                    ),
                )).toISOString();
            },
        },
        36: {
            name: "ICC Signature",
            value: (e, t) => {
                var n;
                return (n = e.buffer.slice(t, t + 4)), String.fromCharCode.apply(null, new Uint8Array(n));
            },
        },
        40: { name: "Primary Platform", value: (e, t) => s(e, t, 4), description: (e) => tu(e) },
        48: { name: "Device Manufacturer", value: (e, t) => s(e, t, 4), description: (e) => tu(e) },
        52: { name: "Device Model Number", value: (e, t) => s(e, t, 4) },
        64: {
            name: "Rendering Intent",
            value: (e, t) => e.getUint32(t),
            description: (e) => {
                switch (e) {
                    case 0:
                        return "Perceptual";
                    case 1:
                        return "Relative Colorimetric";
                    case 2:
                        return "Saturation";
                    case 3:
                        return "Absolute Colorimetric";
                    default:
                        return e;
                }
            },
        },
        80: { name: "Profile Creator", value: (e, t) => s(e, t, 4) },
    };
function tu(e) {
    switch (e.toLowerCase()) {
        case "appl":
            return "Apple";
        case "adbe":
            return "Adobe";
        case "msft":
            return "Microsoft";
        case "sunw":
            return "Sun Microsystems";
        case "sgi":
            return "Silicon Graphics";
        case "tgnt":
            return "Taligent";
        default:
            return e;
    }
}
let tc = function (e, t, n) {
    var r, o;
    return n && t[0].compressionMethod !== i
        ? ((r = e),
          0 !== (o = t)[0].compressionMethod
              ? {}
              : g(
                    new DataView(r.buffer.slice(o[0].offset, o[0].offset + o[0].length)),
                    o[0].compressionMethod,
                    "utf-8",
                    "dataview",
                )
                    .then(tp)
                    .catch(() => ({})))
        : (function (e, t) {
              try {
                  var n;
                  let i = t.reduce((e, t) => e + t.length, 0),
                      r = new Uint8Array(i),
                      o = 0,
                      a = ((n = e), Array.isArray(n) ? new DataView(Uint8Array.from(n).buffer).buffer : n.buffer);
                  for (let e = 1; e <= t.length; e++) {
                      let n = t.find((t) => t.chunkNumber === e);
                      if (!n) throw Error(`ICC chunk ${e} not found`);
                      let i = a.slice(n.offset, n.offset + n.length),
                          s = new Uint8Array(i);
                      r.set(s, o), (o += s.length);
                  }
                  return tp(new DataView(r.buffer));
              } catch (e) {
                  return {};
              }
          })(e, t);
};
function tp(e) {
    let t = e.buffer,
        n = e.getUint32();
    if (e.byteLength !== n) throw Error("ICC profile length not matching");
    if (e.byteLength < 84) throw Error("ICC profile too short");
    let i = {},
        r = Object.keys(tl);
    for (let t = 0; t < r.length; t++) {
        let n = r[t],
            o = tl[n],
            a = o.value(e, parseInt(n, 10)),
            s = a;
        o.description && (s = o.description(a)), (i[o.name] = { value: a, description: s });
    }
    if ("acsp" !== tf(t.slice(36, 40))) throw Error("ICC profile: missing signature");
    if (t.length < 132) return i;
    let o = e.getUint32(128),
        a = 132;
    for (let n = 0; n < o; n++) {
        var l;
        if (((l = a), t.length < l + 12)) break;
        let n = s(e, a, 4),
            r = e.getUint32(a + 4),
            o = e.getUint32(a + 8);
        if (r > t.length) break;
        let u = s(e, r, 4);
        if ("desc" === u) {
            let a = e.getUint32(r + 8);
            if (a > o) return i;
            td(i, n, tf(t.slice(r + 12, r + a + 11)));
        } else if ("mluc" === u) {
            let t = e.getUint32(r + 8),
                o = e.getUint32(r + 12),
                a = r + 16,
                l = [];
            for (let n = 0; n < t; n++) {
                let t = s(e, a + 0, 2),
                    n = s(e, a + 2, 2),
                    i = e.getUint32(a + 4),
                    u = e.getUint32(a + 8),
                    p = (function (e, t, n) {
                        let i = [];
                        for (let r = 0; r < n && t + r < e.byteLength; r += 2) i.push(e.getUint16(t + r));
                        return 0 === i[i.length - 1] && i.pop(), c(i);
                    })(e, r + u, i);
                l.push({ languageCode: t, countryCode: n, text: p }), (a += o);
            }
            if (1 === t) td(i, n, l[0].text);
            else {
                let e = {};
                for (let t = 0; t < l.length; t++) e[`${l[t].languageCode}-${l[t].countryCode}`] = l[t].text;
                td(i, n, e);
            }
        } else
            "text" === u
                ? td(i, n, tf(t.slice(r + 8, r + o - 7)))
                : "sig " === u && td(i, n, tf(t.slice(r + 8, r + 12)));
        a += 12;
    }
    return i;
}
function tf(e) {
    return String.fromCharCode.apply(null, new Uint8Array(e));
}
function td(e, t, n) {
    ts[t] ? (e[ts[t].name] = { value: n, description: n }) : (e[t] = { value: n, description: n });
}
let tm = function (e, t, n, i, r) {
        var o, a;
        let s,
            l = ev(e, ea, t, t + n, i, r);
        return (
            l.ShotInfo &&
                ((l = p(
                    {},
                    l,
                    ((o = l.ShotInfo.value),
                    (s = {}),
                    void 0 !== o[27] &&
                        (s.AutoRotate = {
                            value: o[27],
                            description:
                                0 === (a = o[27])
                                    ? "None"
                                    : 1 === a
                                      ? "Rotate 90 CW"
                                      : 2 === a
                                        ? "Rotate 180"
                                        : 3 === a
                                          ? "Rotate 270 CW"
                                          : "Unknown",
                        }),
                    s),
                )),
                delete l.ShotInfo),
            l
        );
    },
    tg = 78420,
    th = 1,
    ty = 3,
    tb = 5,
    tv = function (e, t, n, i) {
        var r;
        let o = v(e, t + n + 8),
            a = t + n,
            s = ev(e, es, a, a + 10, o, i, !0);
        return (
            (r = s).PentaxModelID &&
                r.PentaxModelID.value === tg &&
                r.LevelInfo &&
                ((s = p(
                    {},
                    s,
                    (function (e, t, n) {
                        var i;
                        let r = {};
                        if (t + 7 > e.byteLength) return r;
                        let o = e.getInt8(t + th);
                        r.CameraOrientation = {
                            value: o,
                            description:
                                0 === (i = o)
                                    ? "Horizontal (normal)"
                                    : 1 === i
                                      ? "Rotate 270 CW"
                                      : 2 === i
                                        ? "Rotate 180"
                                        : 3 === i
                                          ? "Rotate 90 CW"
                                          : 4 === i
                                            ? "Upwards"
                                            : 5 === i
                                              ? "Downwards"
                                              : "Unknown",
                        };
                        let a = e.getInt16(t + ty, 18761 === n);
                        r.RollAngle = { value: a, description: "" + -0.5 * a };
                        let s = e.getInt16(t + tb, 18761 === n);
                        return (r.PitchAngle = { value: s, description: "" + -0.5 * s }), r;
                    })(e, a + s.LevelInfo.__offset, o),
                )),
                delete s.LevelInfo),
            s
        );
    },
    tC = function (e, t, n, r) {
        let o = {},
            a = [];
        for (let s = 0; s < t.length; s++) {
            let { offset: l, length: u, type: c } = t[s],
                p = (function (e, t, n, r, o) {
                    var a;
                    let s,
                        l = [],
                        u = [],
                        c = [],
                        p = tP,
                        f = i;
                    for (let o = 0; o < n && t + o < e.byteLength; o++) {
                        if (p === tT) {
                            (f = (function ({ type: e, dataView: t, offset: n }) {
                                if (e === R) {
                                    if (1 === t.getUint8(n)) return t.getUint8(n + 1);
                                } else if (e === B) return t.getUint8(n);
                                return i;
                            })({ type: r, dataView: e, offset: t + o })),
                                r === R && (o += 1),
                                (p = tS(r, p));
                            continue;
                        }
                        if (p === tI) {
                            s = new DataView(e.buffer.slice(t + o, t + n));
                            break;
                        }
                        let a = e.getUint8(t + o);
                        0 === a ? (p = tS(r, p)) : p === tP ? l.push(a) : p === tF ? u.push(a) : p === tx && c.push(a);
                    }
                    if (f !== i && !o) return {};
                    let d = g(s, f, (a = r) === L || a === B ? "latin1" : "utf-8");
                    return d instanceof Promise
                        ? d
                              .then((e) => tk(e, r, u, l))
                              .catch(() => tk("<text using unknown compression>".split(""), r, u, l))
                        : tk(d, r, u, l);
                })(e, l, u, c, n);
            if (p instanceof Promise)
                a.push(
                    p.then(({ name: e, value: t, description: n }) => {
                        try {
                            if (tA(e, t)) return { __exif: eI(tw(t), 6, r).tags };
                            if (tM(e, t)) return { __iptc: eR(tw(t), 0, r) };
                            if (e && !tA(e, t) && !tM(e, t)) return { [e]: { value: t, description: n } };
                        } catch (e) {}
                        return {};
                    }),
                );
            else {
                let { name: e, value: t, description: n } = p;
                e && (o[e] = { value: t, description: n });
            }
        }
        return { readTags: o, readTagsPromise: a.length > 0 ? Promise.all(a) : void 0 };
    },
    tP = "STATE_KEYWORD",
    tT = "STATE_COMPRESSION",
    tF = "STATE_LANG",
    tx = "STATE_TRANSLATED_KEYWORD",
    tI = "STATE_TEXT";
function tS(e, t) {
    return t === tP && [R, B].includes(e) ? tT : t === tT ? (e === R ? tF : tI) : t === tF ? tx : tI;
}
function tk(e, t, n, i) {
    var r;
    let o = (r = e) instanceof DataView ? s(r, 0, r.byteLength) : r;
    return {
        name: (function (e, t, n) {
            let i = c(n);
            if (e === L || 0 === t.length) return i;
            let r = c(t);
            return `${i} (${r})`;
        })(t, n, i),
        value: o,
        description: t === R ? eL("UTF-8", e) : o,
    };
}
function tA(e, t) {
    return "raw profile type exif" === e.toLowerCase() && "exif" === t.substring(1, 5);
}
function tM(e, t) {
    return "raw profile type iptc" === e.toLowerCase() && "iptc" === t.substring(1, 5);
}
function tw(e) {
    var t = e.match(/\n(exif|iptc)\n\s*\d+\n([\s\S]*)$/)[2].replace(/\n/g, "");
    let n = new DataView(new ArrayBuffer(t.length / 2));
    for (let e = 0; e < t.length; e += 2) n.setUint8(e / 2, parseInt(t.substring(e, e + 2), 16));
    return n;
}
let tO = function (e, t) {
    let n = {};
    for (let i = 0; i < t.length; i++) {
        let r = ed(e, t[i] + 0),
            o = s(e, t[i] + 4, 4);
        o === N
            ? ((n["Pixels Per Unit X"] = (function (e, t, n) {
                  if (!tE(e, t, n, 0, 4)) return;
                  let i = ed(e, t + U + 0);
                  return { value: i, description: "" + i };
              })(e, t[i], r)),
              (n["Pixels Per Unit Y"] = (function (e, t, n) {
                  if (!tE(e, t, n, 4, 4)) return;
                  let i = ed(e, t + U + 4);
                  return { value: i, description: "" + i };
              })(e, t[i], r)),
              (n["Pixel Units"] = (function (e, t, n) {
                  if (!tE(e, t, n, 8, 1)) return;
                  let i = ep(e, t + U + 8);
                  return { value: i, description: 1 === i ? "meters" : "Unknown" };
              })(e, t[i], r)))
            : o === _ &&
              (n["Modify Date"] = (function (e, t, n) {
                  if (!tE(e, t, n, 0, 7)) return;
                  let i = ef(e, t + U),
                      r = ep(e, t + U + 2),
                      o = ep(e, t + U + 3),
                      a = ep(e, t + U + 4),
                      s = ep(e, t + U + 5),
                      l = ep(e, t + U + 6);
                  return {
                      value: [i, r, o, a, s, l],
                      description: `${tU(i, 4)}-${tU(r, 2)}-${tU(o, 2)} ${tU(a, 2)}:${tU(s, 2)}:${tU(l, 2)}`,
                  };
              })(e, t[i], r));
    }
    return n;
};
function tE(e, t, n, i, r) {
    return i + r <= n && t + U + i + r <= e.byteLength;
}
function tU(e, t) {
    return `${"0".repeat(t - ("" + e).length)}${e}`;
}
let tD = function (e, t) {
    let n,
        i,
        r = {},
        o = ep(e, t);
    return (
        (r.Alpha = { value: +!!(n = 16 & o), description: n ? "Yes" : "No" }),
        (r.Animation = { value: +!!(i = 2 & o), description: i ? "Yes" : "No" }),
        (r.ImageWidth = tL(e, t + 4)),
        (r.ImageHeight = tL(e, t + 7)),
        r
    );
};
function tL(e, t) {
    let n = ep(e, t) + 256 * ep(e, t + 1) + 65536 * ep(e, t + 2) + 1;
    return { value: n, description: n + "px" };
}
let tR = [6, 7, 99],
    tB = function (e, t, n) {
        var i;
        if (
            (i = t) &&
            (void 0 === i.Compression || tR.includes(i.Compression.value)) &&
            i.JPEGInterchangeFormat &&
            i.JPEGInterchangeFormat.value &&
            i.JPEGInterchangeFormatLength &&
            i.JPEGInterchangeFormatLength.value
        ) {
            t.type = "image/jpeg";
            let i = n + t.JPEGInterchangeFormat.value;
            (t.image = e.buffer.slice(i, i + t.JPEGInterchangeFormatLength.value)),
                f(t, "base64", function () {
                    return d(this.image);
                });
        }
        return t;
    },
    tN = function (e, t) {
        let n = {},
            i = !1,
            r = t_(e, "exif", "FocalLength", t),
            o = t_(e, "exif", "FocalPlaneXResolution", t),
            a = t_(e, "exif", "FocalPlaneYResolution", t),
            s = t_(e, "exif", "FocalPlaneResolutionUnit", t),
            l = t_(e, "file", "Image Width", t),
            u = t_(e, "file", "Image Height", t),
            c =
                t_(e, "exif", "FocalLengthIn35mmFilm", t) ||
                (function (e, t, n, i, r, o) {
                    if (e && t && n && i && r && o)
                        try {
                            let a;
                            switch (n) {
                                case 2:
                                    a = 25.4;
                                    break;
                                case 3:
                                    a = 10;
                                    break;
                                case 4:
                                    a = 1;
                                    break;
                                default:
                                    return;
                            }
                            let s = (e[0] / e[1]) * a,
                                l = (t[0] / t[1]) * a,
                                u = Math.sqrt((i / s) ** 2 + (r / l) ** 2);
                            return (o[0] / o[1]) * (43.27 / u);
                        } catch (e) {}
                })(o, a, s, l, u, r);
        c && ((n.FocalLength35efl = { value: c, description: ee.FocalLengthIn35mmFilm(c) }), (i = !0));
        let p = (function (e, t) {
            if (e && t)
                try {
                    let n = t / (e[0] / e[1]);
                    return { value: n, description: n.toFixed(1) };
                } catch (e) {}
        })(r, c);
        p && ((n.ScaleFactorTo35mmEquivalent = p), (i = !0));
        let f = (function (e) {
            if (e)
                try {
                    let t = 2 * Math.atan(36 / (2 * e)) * (180 / Math.PI);
                    return { value: t, description: t.toFixed(1) + " deg" };
                } catch (e) {}
        })(c);
        if ((f && ((n.FieldOfView = f), (i = !0)), i)) return n;
    };
function t_(e, t, n, i) {
    return i && e[t] && e[t][n] ? e[t][n].value : !i && e[n] ? e[n].value : void 0;
}
function tG(e) {
    (this.name = "MetadataMissingError"), (this.message = e || "No Exif data"), (this.stack = Error().stack);
}
tG.prototype = Error();
let tj = { MetadataMissingError: tG };
var tq = n(264572).Buffer;
let tV = { load: tW, loadView: t$, errors: tj },
    tz = tj;
function tW(e, t = {}) {
    var n, i;
    return "string" == typeof e
        ? ((t.async = !0),
          (function (e, t) {
              var n;
              if (/^\w+:\/\//.test(e))
                  return "u" > typeof fetch
                      ? (function (e, { length: t } = {}) {
                            let n = { method: "GET" };
                            return (
                                Number.isInteger(t) && t >= 0 && (n.headers = { range: `bytes=0-${t - 1}` }),
                                fetch(e, n).then((e) => e.arrayBuffer())
                            );
                        })(e, t)
                      : (function (e, { length: t } = {}) {
                            return new Promise((n, i) => {
                                var r;
                                let o = {};
                                Number.isInteger(t) && t >= 0 && (o.headers = { range: `bytes=0-${t - 1}` }),
                                    ((r = e), /^https:\/\//.test(r) ? require("https").get : require("http").get)(
                                        e,
                                        o,
                                        (e) => {
                                            if (e.statusCode >= 200 && e.statusCode <= 299) {
                                                let t = [];
                                                e.on("data", (e) => t.push(tq.from(e))),
                                                    e.on("error", (e) => i(e)),
                                                    e.on("end", () => n(tq.concat(t)));
                                            } else
                                                i(`Could not fetch file: ${e.statusCode} ${e.statusMessage}`),
                                                    e.resume();
                                        },
                                    ).on("error", (e) => i(e));
                            });
                        })(e, t);
              return ((n = e), /^data:[^;,]*(;base64)?,/.test(n))
                  ? Promise.resolve(
                        (function (e) {
                            let t = e.substring(e.indexOf(",") + 1);
                            if (-1 !== e.indexOf(";base64"))
                                return "u" > typeof atob
                                    ? Uint8Array.from(atob(t), (e) => e.charCodeAt(0)).buffer
                                    : void 0 === o
                                      ? void 0
                                      : void 0 !== o.from
                                        ? o.from(t, "base64")
                                        : new o(t, "base64");
                            let n = decodeURIComponent(t);
                            return void 0 !== o
                                ? void 0 !== o.from
                                    ? o.from(n)
                                    : new o(n)
                                : Uint8Array.from(n, (e) => e.charCodeAt(0)).buffer;
                        })(e),
                    )
                  : (function (e, { length: t } = {}) {
                        return new Promise((n, i) => {
                            let r = (function () {
                                try {
                                    return require("fs");
                                } catch (e) {
                                    return;
                                }
                            })();
                            r.open(e, (o, a) => {
                                o
                                    ? i(o)
                                    : r.stat(e, (o, s) => {
                                          if (o) i(o);
                                          else {
                                              let o = Math.min(s.size, void 0 !== t ? t : s.size),
                                                  l = tq.alloc(o);
                                              r.read(a, { buffer: l, length: o }, (t) => {
                                                  t
                                                      ? i(t)
                                                      : r.close(a, (t) => {
                                                            t && console.warn(`Could not close file ${e}:`, t), n(l);
                                                        });
                                              });
                                          }
                                      });
                            });
                        });
                    })(e, t);
          })(e, t).then((e) => tH(e, t)))
        : ((n = e), "u" > typeof File && n instanceof File)
          ? ((t.async = !0),
            ((i = e),
            new Promise((e, t) => {
                let n = new FileReader();
                (n.onload = (t) => e(t.target.result)), (n.onerror = () => t(n.error)), n.readAsArrayBuffer(i);
            })).then((e) => tH(e, t)))
          : tH(e, t);
}
function tH(e, t) {
    return (
        (function (e) {
            try {
                return tq.isBuffer(e);
            } catch (e) {
                return !1;
            }
        })(e) && (e = new Uint8Array(e).buffer),
        t$(
            (function (e) {
                try {
                    return new DataView(e);
                } catch (t) {
                    return new r(e);
                }
            })(e),
            t,
        )
    );
}
function t$(
    e,
    { expanded: t = !1, async: n = !1, includeUnknown: i = !1, domParser: r } = {
        expanded: !1,
        async: !1,
        includeUnknown: !1,
        domParser: void 0,
    },
) {
    var o, a, l, u, f;
    let d = !1,
        m = {},
        g = [],
        {
            fileType: h,
            fileDataOffset: y,
            jfifDataOffset: v,
            tiffHeaderOffset: C,
            iptcDataOffset: P,
            xmpChunks: T,
            iccChunks: F,
            mpfDataOffset: x,
            pngHeaderOffset: I,
            pngTextChunks: S,
            pngChunkOffsets: k,
            vp8xChunkOffset: A,
            gifHeaderOffset: M,
        } = Y(e, n);
    if (void 0 !== y) {
        d = !0;
        let n = eA(e, y);
        t ? (m.file = n) : (m = p({}, m, n));
    }
    if (void 0 !== v) {
        d = !0;
        let n = eM(e, v);
        t ? (m.jfif = n) : (m = p({}, m, n));
    }
    if (void 0 !== C) {
        d = !0;
        let { tags: n, byteOrder: s } = eI(e, C, i);
        if (
            (n.Thumbnail && ((m.Thumbnail = n.Thumbnail), delete n.Thumbnail),
            t
                ? ((m.exif = n),
                  (function (e) {
                      if (e.exif) {
                          if (e.exif.GPSLatitude && e.exif.GPSLatitudeRef)
                              try {
                                  (e.gps = e.gps || {}),
                                      (e.gps.Latitude = b(e.exif.GPSLatitude.value)),
                                      "S" === e.exif.GPSLatitudeRef.value.join("") &&
                                          (e.gps.Latitude = -e.gps.Latitude);
                              } catch (e) {}
                          if (e.exif.GPSLongitude && e.exif.GPSLongitudeRef)
                              try {
                                  (e.gps = e.gps || {}),
                                      (e.gps.Longitude = b(e.exif.GPSLongitude.value)),
                                      "W" === e.exif.GPSLongitudeRef.value.join("") &&
                                          (e.gps.Longitude = -e.gps.Longitude);
                              } catch (e) {}
                          if (e.exif.GPSAltitude && e.exif.GPSAltitudeRef)
                              try {
                                  (e.gps = e.gps || {}),
                                      (e.gps.Altitude = e.exif.GPSAltitude.value[0] / e.exif.GPSAltitude.value[1]),
                                      1 === e.exif.GPSAltitudeRef.value && (e.gps.Altitude = -e.gps.Altitude);
                              } catch (e) {}
                      }
                  })(m))
                : (m = p({}, m, n)),
            n["IPTC-NAA"] && void 0 === P)
        ) {
            let e = eR(n["IPTC-NAA"].value, 0, i);
            t ? (m.iptc = e) : (m = p({}, m, e));
        }
        if ((0, n.ApplicationNotes && !tX(T))) {
            let e = ez(c(n.ApplicationNotes.value), void 0, r);
            t ? (m.xmp = e) : (delete e._raw, (m = p({}, m, e)));
        }
        if ((0, n.ImageSourceData && n.PhotoshopSettings)) {
            let e = tr(n.PhotoshopSettings.value, i);
            t ? (m.photoshop = e) : (m = p({}, m, e));
        }
        if ((0, n.ICC_Profile && !tJ(F))) {
            let e = tc(n.ICC_Profile.value, [
                { offset: 0, length: n.ICC_Profile.value.length, chunkNumber: 1, chunksTotal: 1 },
            ]);
            t ? (m.icc = e) : (m = p({}, m, e));
        }
        if ((0, n.MakerNote)) {
            if (
                (o = n).Make &&
                o.Make.value &&
                Array.isArray(o.Make.value) &&
                "Canon" === o.Make.value[0] &&
                o.MakerNote &&
                o.MakerNote.__offset
            ) {
                let r = tm(e, C, n.MakerNote.__offset, s, i);
                t ? (m.makerNotes = r) : (m = p({}, m, r));
            } else {
                let r;
                if (
                    ((r = "PENTAX "),
                    (a = n).MakerNote.value.length > r.length &&
                        c(a.MakerNote.value.slice(0, r.length)) === r &&
                        a.MakerNote.__offset)
                ) {
                    let r = tv(e, C, n.MakerNote.__offset, i);
                    t ? (m.makerNotes = r) : (m = p({}, m, r));
                }
            }
        }
        n.MakerNote && delete n.MakerNote.__offset;
    }
    if (void 0 !== P) {
        d = !0;
        let n = eR(e, P, i);
        t ? (m.iptc = n) : (m = p({}, m, n));
    }
    if (tX(T)) {
        d = !0;
        let n = ez(e, T, r);
        t ? (m.xmp = n) : (delete n._raw, (m = p({}, m, n)));
    }
    if (tJ(F)) {
        d = !0;
        let t = tc(e, F, n);
        t instanceof Promise ? g.push(t.then(E)) : E(t);
    }
    if (void 0 !== x) {
        d = !0;
        let n = eS(e, x, i);
        t ? (m.mpf = n) : (m = p({}, m, n));
    }
    if (void 0 !== I) {
        d = !0;
        let n = {
            "Image Width": (function (e, t) {
                if (t + 0 + 4 > e.byteLength) return;
                let n = ed(e, t);
                return { value: n, description: `${n}px` };
            })((l = e), (u = I)),
            "Image Height": (function (e, t) {
                if (t + 4 + 4 > e.byteLength) return;
                let n = ed(e, t + 4);
                return { value: n, description: `${n}px` };
            })(l, u),
            "Bit Depth": (function (e, t) {
                if (t + 8 + 1 > e.byteLength) return;
                let n = ep(e, t + 8);
                return { value: n, description: `${n}` };
            })(l, u),
            "Color Type": (function (e, t) {
                if (t + 9 + 1 > e.byteLength) return;
                let n = ep(e, t + 9);
                return {
                    value: n,
                    description:
                        { 0: "Grayscale", 2: "RGB", 3: "Palette", 4: "Grayscale with Alpha", 6: "RGB with Alpha" }[n] ||
                        "Unknown",
                };
            })(l, u),
            Compression: (function (e, t) {
                if (t + 10 + 1 > e.byteLength) return;
                let n = ep(e, t + 10);
                return { value: n, description: 0 === n ? "Deflate/Inflate" : "Unknown" };
            })(l, u),
            Filter: (function (e, t) {
                if (t + 11 + 1 > e.byteLength) return;
                let n = ep(e, t + 11);
                return { value: n, description: 0 === n ? "Adaptive" : "Unknown" };
            })(l, u),
            Interlace: (function (e, t) {
                if (t + 12 + 1 > e.byteLength) return;
                let n = ep(e, t + 12);
                return { value: n, description: { 0: "Noninterlaced", 1: "Adam7 Interlace" }[n] || "Unknown" };
            })(l, u),
        };
        t ? ((m.png = m.png ? p({}, m.png, n) : n), (m.pngFile = n)) : (m = p({}, m, n));
    }
    if (void 0 !== S) {
        d = !0;
        let { readTags: t, readTagsPromise: r } = tC(e, S, n, i);
        U(t), r && g.push(r.then((e) => e.forEach(U)));
    }
    if (void 0 !== k) {
        d = !0;
        let n = tO(e, k);
        t ? (m.png = m.png ? p({}, m.png, n) : n) : (m = p({}, m, n));
    }
    if (void 0 !== A) {
        d = !0;
        let n = tD(e, A);
        t ? (m.riff = m.riff ? p({}, m.riff, n) : n) : (m = p({}, m, n));
    }
    if (void 0 !== M) {
        d = !0;
        let n = {
            "GIF Version": (function (e) {
                if (6 > e.byteLength) return;
                let t = s(e, 3, 3);
                return { value: t, description: t };
            })((f = e)),
            "Image Width": (function (e) {
                if (8 > e.byteLength) return;
                let t = e.getUint16(6, !0);
                return { value: t, description: `${t}px` };
            })(f),
            "Image Height": (function (e) {
                if (10 > e.byteLength) return;
                let t = e.getUint16(8, !0);
                return { value: t, description: `${t}px` };
            })(f),
            "Global Color Map": (function (e) {
                if (11 > e.byteLength) return;
                let t = (128 & e.getUint8(10)) >>> 7;
                return { value: t, description: 1 === t ? "Yes" : "No" };
            })(f),
            "Bits Per Pixel": (function (e) {
                if (11 > e.byteLength) return;
                let t = (7 & e.getUint8(10)) + 1;
                return { value: t, description: `${t} ${1 === t ? "bit" : "bits"}` };
            })(f),
            "Color Resolution Depth": (function (e) {
                if (11 > e.byteLength) return;
                let t = ((112 & e.getUint8(10)) >>> 4) + 1;
                return { value: t, description: `${t} ${1 === t ? "bit" : "bits"}` };
            })(f),
        };
        t ? (m.gif = m.gif ? p({}, m.gif, n) : n) : (m = p({}, m, n));
    }
    let w = tN(m, t);
    w && (t ? (m.composite = w) : (m = p({}, m, w)));
    let O = tB(e, m.Thumbnail, C);
    if (
        (O ? ((d = !0), (m.Thumbnail = O)) : delete m.Thumbnail,
        h && (t ? (m.file || (m.file = {}), (m.file.FileType = h)) : (m.FileType = h), (d = !0)),
        !d)
    )
        throw new tj.MetadataMissingError();
    if (n) return Promise.all(g).then(() => m);
    return m;
    function E(e) {
        t ? (m.icc = e) : (m = p({}, m, e));
    }
    function U(e) {
        if (t) {
            for (let t of ["exif", "iptc"]) {
                let n = `__${t}`;
                e[n] && ((m[t] = m[t] ? p({}, m.exif, e[n]) : e[n]), delete e[n]);
            }
            (m.png = m.png ? p({}, m.png, e) : e), (m.pngText = m.pngText ? p({}, m.png, e) : e);
        } else (m = p({}, m, e.__exif ? e.__exif : {}, e.__iptc ? e.__iptc : {}, e)), delete m.__exif, delete m.__iptc;
    }
}
function tX(e) {
    return Array.isArray(e) && e.length > 0;
}
function tJ(e) {
    return Array.isArray(e) && e.length > 0;
}
