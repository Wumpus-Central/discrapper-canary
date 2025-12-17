n.d(t, {
    ER: () => g,
    ku: () => v,
});
var r = n(791473),
    i = n(822632),
    a = n(462468);
let o = 1718909296,
    s = 1768977008,
    l = 1835365473,
    c = 1768714083,
    u = 1768517222,
    d = 1768842853,
    f = 1768973167,
    p = 1668246642,
    _ = 1165519206,
    m = 1835625829,
    h = 1970432288;
function g(e, t) {
    let n = 4,
        r = 8,
        i = 1,
        { length: _, contentOffset: m } = E(e, t);
    if (_ < r) return;
    let h = e.getUint32(t + n);
    if (h === o) return w(e, m, _);
    if (h === s) return D(e, t, m, _);
    if (h === f) return x(e, t, m, _);
    if (h === p) return L(e, m, _);
    let g = e.getUint8(m);
    return h === l
        ? M(e, t, m + i, _)
        : h === c
          ? (0, a.I)(e, g, m + i, _)
          : h === u
            ? U(e, t, g, m + i, _)
            : h === d
              ? Z(e, t, g, m + i, _)
              : {
                    type: void 0,
                    length: _,
                };
}
function E(e, t) {
    let n = 4,
        r = 4,
        i = 8,
        a = 12,
        o = e.getUint32(t);
    return b(o)
        ? {
              length: e.byteLength - t,
              contentOffset: t + n + r,
          }
        : y(o) && O(e, t)
          ? {
                length: e.getUint32(t + a),
                contentOffset: t + n + r + i,
            }
          : {
                length: o,
                contentOffset: t + n + r,
            };
}
function b(e) {
    return 0 === e;
}
function y(e) {
    return 1 === e;
}
function O(e, t) {
    let n = 8;
    return 0 === e.getUint32(t + n);
}
function v(e) {
    if (r.Z.USE_EXIF || r.Z.USE_XMP || r.Z.USE_ICC) {
        let t = {},
            n = S(e);
        return n
            ? (r.Z.USE_EXIF && (t.tiffHeaderOffset = I(e, n)),
              r.Z.USE_XMP && (t.xmpChunks = N(n)),
              r.Z.USE_ICC && (t.iccChunks = R(n)),
              (t.hasAppMarkers = void 0 !== t.tiffHeaderOffset || void 0 !== t.xmpChunks || void 0 !== t.iccChunks),
              t)
            : { hasAppMarkers: !1 };
    }
    return {};
}
function S(e) {
    let t = 4,
        n = 4,
        r = 0;
    for (; r + t + n <= e.byteLength; ) {
        let t = g(e, r);
        if (void 0 === t) break;
        if ("meta" === t.type) return t;
        r += t.length;
    }
}
function I(e, t) {
    try {
        let n = T(t).itemId,
            r = C(t, n),
            i = r.baseOffset + r.extents[0].extentOffset;
        return A(e, i);
    } catch (e) {
        return;
    }
}
function T(e) {
    return e.subBoxes.find((e) => "iinf" === e.type).itemInfos.find((e) => e.itemType === _);
}
function C(e, t) {
    return e.subBoxes.find((e) => "iloc" === e.type).items.find((e) => e.itemId === t);
}
function A(e, t) {
    return t + 4 + e.getUint32(t);
}
function N(e) {
    try {
        let t = P(e).itemId,
            n = C(e, t),
            r = C(e, t).extents[0];
        return [
            {
                dataOffset: n.baseOffset + r.extentOffset,
                length: r.extentLength,
            },
        ];
    } catch (e) {
        return;
    }
}
function P(e) {
    return e.subBoxes
        .find((e) => "iinf" === e.type)
        .itemInfos.find((e) => e.itemType === m && "application/rdf+xml" === e.contentType);
}
function R(e) {
    try {
        let t = e.subBoxes
            .find((e) => "iprp" === e.type)
            .subBoxes.find((e) => "ipco" === e.type)
            .properties.find((e) => "colr" === e.type).icc;
        if (t) return [t];
    } catch (e) {}
}
function w(e, t, n) {
    let r = 4;
    return {
        type: "ftyp",
        majorBrand: (0, i.oH)(e, t, r),
        length: n,
    };
}
function D(e, t, n, r) {
    return {
        type: "iprp",
        subBoxes: k(e, n, r - (n - t)),
        length: r,
    };
}
function x(e, t, n, r) {
    return {
        type: "ipco",
        properties: k(e, n, r - (n - t)),
        length: r,
    };
}
function L(e, t, n) {
    return {
        type: "colr",
        icc: j(e, t),
        length: n,
    };
}
function j(e, t) {
    let n = 4,
        r = (0, i.oH)(e, t, n);
    if ("prof" === r || "rICC" === r)
        return {
            offset: t + n,
            length: e.getUint32(t + n),
            chunkNumber: 1,
            chunksTotal: 1,
        };
}
function M(e, t, n, r) {
    return {
        type: "meta",
        subBoxes: k(e, n + 3, r - (n + 3 - t)),
        length: r,
    };
}
function k(e, t, n) {
    let r = [_, m],
        i = [],
        a = t;
    for (; a < t + n; ) {
        let t = g(e, a);
        if (void 0 === t) break;
        void 0 !== t.type && (void 0 === t.itemType || -1 !== r.indexOf(t.itemType)) && i.push(t), (a += t.length);
    }
    return i;
}
function U(e, t, n, r, i) {
    let { offsets: a } = G(n, r);
    return {
        type: "iinf",
        itemInfos: k(e, a.itemInfos, i - (a.itemInfos - t)),
        length: i,
    };
}
function G(e, t) {
    let n = { entryCount: t + 3 },
        r = {};
    return (
        0 === e ? (r.entryCount = 2) : (r.entryCount = 4), (n.itemInfos = n.entryCount + r.entryCount), { offsets: n }
    );
}
function Z(e, t, n, r, a) {
    r += 3;
    let o = {
        type: "infe",
        length: a,
    };
    return (
        (0 === n || 1 === n) &&
            ((o.itemId = e.getUint16(r)),
            (r += 2),
            (o.itemProtectionIndex = e.getUint16(r)),
            (r += 2),
            (o.itemName = (0, i.o7)(e, r)),
            (r += o.itemName.length + 1)),
        n >= 2 &&
            (2 === n ? ((o.itemId = e.getUint16(r)), (r += 2)) : 3 === n && ((o.itemId = e.getUint32(r)), (r += 4)),
            (o.itemProtectionIndex = e.getUint16(r)),
            (r += 2),
            (o.itemType = e.getUint32(r)),
            (r += 4),
            (o.itemName = (0, i.o7)(e, r)),
            (r += o.itemName.length + 1),
            o.itemType === m
                ? ((o.contentType = (0, i.o7)(e, r)),
                  t + a > (r += o.contentType.length + 1) &&
                      ((o.contentEncoding = (0, i.o7)(e, r)), (r += o.contentEncoding.length + 1)))
                : o.itemType === h && ((o.itemUri = (0, i.o7)(e, r)), (r += o.itemUri.length + 1))),
        o
    );
}
