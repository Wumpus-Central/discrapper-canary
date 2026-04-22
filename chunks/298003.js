i.d(t, { N: () => r });
var n = i(601727);
function r(e, t, i, n) {
    var r, a, s, l, u;
    let c,
        d,
        { offsets: f, sizes: p } =
            ((r = t),
            (a = i + 3),
            (c = { item: { dataReferenceIndex: 2, extentCount: 2, extent: {} } }),
            r < 2 ? ((c.itemCount = 2), (c.item.itemId = 2)) : 2 === r && ((c.itemCount = 4), (c.item.itemId = 4)),
            1 === r || 2 === r ? (c.item.constructionMethod = 2) : (c.item.constructionMethod = 0),
            ((d = { offsetSize: a, lengthSize: a, baseOffsetSize: a + 1, indexSize: a + 1 }).itemCount = a + 2),
            (d.items = d.itemCount + c.itemCount),
            (d.item = { itemId: 0 }),
            (d.item.constructionMethod = d.item.itemId + c.item.itemId),
            (d.item.dataReferenceIndex = d.item.constructionMethod + c.item.constructionMethod),
            { offsets: d, sizes: c }),
        m = e.getUint8(f.offsetSize) >> 4;
    p.item.extent.extentOffset = m;
    let g = 15 & e.getUint8(f.lengthSize);
    p.item.extent.extentLength = g;
    let h = e.getUint8(f.baseOffsetSize) >> 4;
    p.item.baseOffset = h;
    let y = (function (e, t, i) {
        if (1 === i || 2 === i) return 15 & e.getUint8(t);
    })(e, f.indexSize, t);
    p.item.extent.extentIndex = void 0 !== y ? y : 0;
    let A = ((s = e), (l = f.itemCount), (u = t) < 2 ? s.getUint16(l) : 2 === u ? s.getUint32(l) : void 0);
    return {
        type: "iloc",
        items: (function (e, t, i, n, r, a, s, l) {
            if (void 0 === l) return [];
            let u = [],
                c = i.items;
            for (let i = 0; i < l; i++) {
                var d, f, p;
                let i = { extents: [] };
                (d = e),
                    (f = c),
                    (i.itemId = (p = t) < 2 ? d.getUint16(f) : 2 === p ? d.getUint32(f) : void 0),
                    (c += n.item.itemId),
                    (i.constructionMethod = 1 === t || 2 === t ? 15 & e.getUint16(c) : void 0),
                    (c += n.item.constructionMethod),
                    (i.dataReferenceIndex = e.getUint16(c)),
                    (i.baseOffset = o(e, (c += n.item.dataReferenceIndex), n.item.baseOffset)),
                    (c += n.item.baseOffset),
                    (i.extentCount = e.getUint16(c)),
                    (c += n.item.extentCount);
                for (let l = 0; l < i.extentCount; l++) {
                    let l = {};
                    (l.extentIndex = (function (e, t, i, n) {
                        if ((1 === t || 2 === t) && n > 0) return o(e, i, n);
                    })(e, t, c, s)),
                        (l.extentOffset = o(e, (c += n.item.extent.extentIndex), r)),
                        (l.extentLength = o(e, (c += n.item.extent.extentOffset), a)),
                        (c += n.item.extent.extentLength),
                        i.extents.push(l);
                }
                u.push(i);
            }
            return u;
        })(e, t, f, p, m, g, y, A),
        length: n,
    };
}
function o(e, t, i) {
    return 4 === i
        ? e.getUint32(t)
        : 8 === i
          ? (console.warn(
                "This file uses an 8-bit offset which is currently not supported by ExifReader. Contact the maintainer to get it fixed.",
            ),
            (0, n.h)(e, t))
          : 0;
}
