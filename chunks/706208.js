i.d(t, { A: () => o });
var n = i(643479),
    r = i(761799);
let o = {
        isJpegFile: function (e) {
            return !!e && e.byteLength >= 2 && 65496 === e.getUint16(0);
        },
        findJpegOffsets: function (e) {
            let t,
                i,
                o,
                g,
                h,
                y,
                A,
                v,
                T,
                b = 2;
            for (; b + 4 + 5 <= e.byteLength; ) {
                var P, S, F, I, C, x, E, M, U, O;
                if (r.A.USE_FILE && ((P = e), (S = b), 65472 === P.getUint16(S))) (t = e.getUint16(b + 2)), (i = b + 2);
                else {
                    if (r.A.USE_FILE && ((F = e), (I = b), 65474 === F.getUint16(I)))
                        (t = e.getUint16(b + 2)), (o = b + 2);
                    else if (
                        r.A.USE_JFIF &&
                        (function (e, t) {
                            let i = c.length;
                            return (
                                65504 === e.getUint16(t) && (0, n.hT)(e, t + 4, i) === c && 0 === e.getUint8(t + 4 + i)
                            );
                        })(e, b)
                    )
                        (t = e.getUint16(b + 2)), (g = b + 2);
                    else if (
                        r.A.USE_EXIF &&
                        (function (e, t) {
                            let i = d.length;
                            return (
                                65505 === e.getUint16(t) && (0, n.hT)(e, t + 4, i) === d && 0 === e.getUint8(t + 4 + i)
                            );
                        })(e, b)
                    )
                        (t = e.getUint16(b + 2)), (h = b + 10);
                    else {
                        if (
                            r.A.USE_XMP &&
                            ((C = e),
                            (x = b),
                            65505 === C.getUint16(x) &&
                                (function (e, t) {
                                    let i = f.length;
                                    return (0, n.hT)(e, t + 4, i) === f;
                                })(C, x))
                        )
                            A || (A = []), (t = e.getUint16(b + 2)), A.push({ dataOffset: b + 33, length: t - 31 });
                        else {
                            if (
                                r.A.USE_XMP &&
                                ((E = e),
                                (M = b),
                                65505 === E.getUint16(M) &&
                                    (function (e, t) {
                                        let i = p.length;
                                        return (0, n.hT)(e, t + 4, i) === p;
                                    })(E, M))
                            )
                                A || (A = []), (t = e.getUint16(b + 2)), A.push({ dataOffset: b + 79, length: t - 77 });
                            else if (
                                r.A.USE_IPTC &&
                                (function (e, t) {
                                    let i = m.length;
                                    return (
                                        65517 === e.getUint16(t) &&
                                        (0, n.hT)(e, t + 4, i) === m &&
                                        0 === e.getUint8(t + 4 + i)
                                    );
                                })(e, b)
                            )
                                (t = e.getUint16(b + 2)), (y = b + 18);
                            else if (
                                r.A.USE_ICC &&
                                (function (e, t) {
                                    let i = a.length;
                                    return 65506 === e.getUint16(t) && (0, n.hT)(e, t + 4, i) === a;
                                })(e, b)
                            ) {
                                t = e.getUint16(b + 2);
                                let i = b + 18,
                                    n = t - 16,
                                    r = e.getUint8(b + s),
                                    o = e.getUint8(b + l);
                                v || (v = []), v.push({ offset: i, length: n, chunkNumber: r, chunksTotal: o });
                            } else if (
                                r.A.USE_MPF &&
                                (function (e, t) {
                                    let i = u.length;
                                    return 65506 === e.getUint16(t) && (0, n.hT)(e, t + 4, i) === u;
                                })(e, b)
                            )
                                (t = e.getUint16(b + 2)), (T = b + 8);
                            else if (
                                (function (e, t) {
                                    let i = e.getUint16(t);
                                    return (
                                        (i >= 65504 && i <= 65519) ||
                                        65534 === i ||
                                        65472 === i ||
                                        65474 === i ||
                                        65476 === i ||
                                        65499 === i ||
                                        65501 === i ||
                                        65498 === i
                                    );
                                })(e, b)
                            )
                                t = e.getUint16(b + 2);
                            else {
                                if (((U = e), (O = b), 65535 === U.getUint16(O))) {
                                    b++;
                                    continue;
                                } else break;
                            }
                        }
                    }
                }
                b += 2 + t;
            }
            return {
                hasAppMarkers: b > 2,
                fileDataOffset: i || o,
                jfifDataOffset: g,
                tiffHeaderOffset: h,
                iptcDataOffset: y,
                xmpChunks: A,
                iccChunks: v,
                mpfDataOffset: T,
            };
        },
    },
    a = "ICC_PROFILE\0",
    s = 4 + a.length,
    l = s + 1,
    u = "MPF\0",
    c = "JFIF",
    d = "Exif",
    f = "http://ns.adobe.com/xap/1.0/\0",
    p = "http://ns.adobe.com/xmp/extension/\0",
    m = "Photoshop 3.0";
