n.r(t),
    n.d(t, {
        default: () => C,
        errors: () => N,
        load: () => R,
        loadView: () => V,
    });
var r = n(463424),
    i = n(87706),
    o = n(441349),
    a = n(473108),
    s = n(532280),
    l = n(956484),
    c = n(816880),
    u = n(671536),
    d = n(137295),
    f = n(872724),
    _ = n(755416),
    p = n(698057),
    h = n(623975),
    m = n(794341),
    g = n(561025),
    E = n(761682),
    b = n(63463),
    y = n(90253),
    O = n(162739),
    v = n(161425),
    I = n(554814),
    T = n(523544),
    S = n(715770),
    A = n(413135).Buffer;
let C = {
        load: R,
        loadView: V,
        errors: S.Z,
    },
    N = S.Z;
function R(e, t = {}) {
    return P(e)
        ? ((t.async = !0), w(e, t).then((e) => B(e, t)))
        : U(e)
          ? ((t.async = !0), G(e).then((e) => B(e, t)))
          : B(e, t);
}
function P(e) {
    return "string" == typeof e;
}
function w(e, t) {
    return /^\w+:\/\//.test(e)
        ? "undefined" != typeof fetch
            ? D(e, t)
            : x(e, t)
        : j(e)
          ? Promise.resolve((0, r.u0)(e))
          : M(e, t);
}
function D(e, { length: t } = {}) {
    let n = { method: "GET" };
    return (
        Number.isInteger(t) && t >= 0 && (n.headers = { range: `bytes=0-${t - 1}` }),
        fetch(e, n).then((e) => e.arrayBuffer())
    );
}
function x(e, { length: t } = {}) {
    return new Promise((n, r) => {
        let i = {};
        Number.isInteger(t) && t >= 0 && (i.headers = { range: `bytes=0-${t - 1}` }),
            L(e)(e, i, (e) => {
                if (e.statusCode >= 200 && e.statusCode <= 299) {
                    let t = [];
                    e.on("data", (e) => t.push(A.from(e))),
                        e.on("error", (e) => r(e)),
                        e.on("end", () => n(A.concat(t)));
                } else r(`Could not fetch file: ${e.statusCode} ${e.statusMessage}`), e.resume();
            }).on("error", (e) => r(e));
    });
}
function L(e) {
    return /^https:\/\//.test(e) ? require("https").get : require("http").get;
}
function j(e) {
    return /^data:[^;,]*(;base64)?,/.test(e);
}
function M(e, { length: t } = {}) {
    return new Promise((n, r) => {
        let i = k();
        i.open(e, (o, a) => {
            o
                ? r(o)
                : i.stat(e, (o, s) => {
                      if (o) r(o);
                      else {
                          let o = Math.min(s.size, void 0 !== t ? t : s.size),
                              l = A.alloc(o),
                              c = {
                                  buffer: l,
                                  length: o,
                              };
                          i.read(a, c, (t) => {
                              t
                                  ? r(t)
                                  : i.close(a, (t) => {
                                        t && console.warn(`Could not close file ${e}:`, t), n(l);
                                    });
                          });
                      }
                  });
        });
    });
}
function k() {
    try {
        return require("fs");
    } catch (e) {
        return;
    }
}
function U(e) {
    return "undefined" != typeof File && e instanceof File;
}
function G(e) {
    return new Promise((t, n) => {
        let r = new FileReader();
        (r.onload = (e) => t(e.target.result)), (r.onerror = () => n(r.error)), r.readAsArrayBuffer(e);
    });
}
function B(e, t) {
    return Z(e) && (e = new Uint8Array(e).buffer), V(F(e), t);
}
function Z(e) {
    try {
        return A.isBuffer(e);
    } catch (e) {
        return !1;
    }
}
function F(e) {
    try {
        return new DataView(e);
    } catch (t) {
        return new i.Z(e);
    }
}
function V(
    e,
    { expanded: t = !1, async: n = !1, includeUnknown: i = !1, domParser: a } = {
        expanded: !1,
        async: !1,
        includeUnknown: !1,
        domParser: void 0,
    },
) {
    let A = !1,
        C = {},
        N = [],
        {
            fileType: R,
            fileDataOffset: P,
            jfifDataOffset: w,
            tiffHeaderOffset: D,
            iptcDataOffset: x,
            xmpChunks: L,
            iccChunks: j,
            mpfDataOffset: M,
            pngHeaderOffset: k,
            pngTextChunks: U,
            pngChunkOffsets: G,
            vp8xChunkOffset: B,
            gifHeaderOffset: Z,
        } = s.Z.parseAppMarkers(e, n);
    if (o.Z.USE_JPEG && o.Z.USE_FILE && H(P)) {
        A = !0;
        let n = u.Z.read(e, P);
        t ? (C.file = n) : (C = (0, r.wB)({}, C, n));
    }
    if (o.Z.USE_JPEG && o.Z.USE_JFIF && Y(w)) {
        A = !0;
        let n = d.Z.read(e, w);
        t ? (C.jfif = n) : (C = (0, r.wB)({}, C, n));
    }
    if (o.Z.USE_EXIF && W(D)) {
        A = !0;
        let { tags: n, byteOrder: s } = l.Z.read(e, D, i);
        if (
            (n.Thumbnail && ((C.Thumbnail = n.Thumbnail), delete n.Thumbnail),
            t ? ((C.exif = n), K(C)) : (C = (0, r.wB)({}, C, n)),
            o.Z.USE_TIFF && o.Z.USE_IPTC && n["IPTC-NAA"] && !z(x))
        ) {
            let e = f.Z.read(n["IPTC-NAA"].value, 0, i);
            t ? (C.iptc = e) : (C = (0, r.wB)({}, C, e));
        }
        if (o.Z.USE_TIFF && o.Z.USE_XMP && n.ApplicationNotes && !q(L)) {
            let e = _.Z.read((0, r.nZ)(n.ApplicationNotes.value), void 0, a);
            t ? (C.xmp = e) : (delete e._raw, (C = (0, r.wB)({}, C, e)));
        }
        if (o.Z.USE_PHOTOSHOP && n.ImageSourceData && n.PhotoshopSettings) {
            let e = p.Z.read(n.PhotoshopSettings.value, i);
            t ? (C.photoshop = e) : (C = (0, r.wB)({}, C, e));
        }
        if (o.Z.USE_TIFF && o.Z.USE_ICC && n.ICC_Profile && !X(j)) {
            let e = h.Z.read(n.ICC_Profile.value, [
                {
                    offset: 0,
                    length: n.ICC_Profile.value.length,
                    chunkNumber: 1,
                    chunksTotal: 1,
                },
            ]);
            t ? (C.icc = e) : (C = (0, r.wB)({}, C, e));
        }
        if (o.Z.USE_MAKER_NOTES && n.MakerNote) {
            if (Q(n)) {
                let o = m.Z.read(e, D, n.MakerNote.__offset, s, i);
                t ? (C.makerNotes = o) : (C = (0, r.wB)({}, C, o));
            } else if (J(n)) {
                let o = g.Z.read(e, D, n.MakerNote.__offset, i);
                t ? (C.makerNotes = o) : (C = (0, r.wB)({}, C, o));
            }
        }
        n.MakerNote && delete n.MakerNote.__offset;
    }
    if (o.Z.USE_JPEG && o.Z.USE_IPTC && z(x)) {
        A = !0;
        let n = f.Z.read(e, x, i);
        t ? (C.iptc = n) : (C = (0, r.wB)({}, C, n));
    }
    if (o.Z.USE_XMP && q(L)) {
        A = !0;
        let n = _.Z.read(e, L, a);
        t ? (C.xmp = n) : (delete n._raw, (C = (0, r.wB)({}, C, n)));
    }
    if ((o.Z.USE_JPEG || o.Z.USE_WEBP) && o.Z.USE_ICC && X(j)) {
        A = !0;
        let t = h.Z.read(e, j, n);
        t instanceof Promise ? N.push(t.then(ea)) : ea(t);
    }
    if (o.Z.USE_MPF && $(M)) {
        A = !0;
        let n = c.Z.read(e, M, i);
        t ? (C.mpf = n) : (C = (0, r.wB)({}, C, n));
    }
    if (o.Z.USE_PNG && o.Z.USE_PNG_FILE && ee(k)) {
        A = !0;
        let n = E.Z.read(e, k);
        t ? ((C.png = C.png ? (0, r.wB)({}, C.png, n) : n), (C.pngFile = n)) : (C = (0, r.wB)({}, C, n));
    }
    if (o.Z.USE_PNG && et(U)) {
        A = !0;
        let { readTags: t, readTagsPromise: r } = b.Z.read(e, U, n, i);
        es(t), r && N.push(r.then((e) => e.forEach(es)));
    }
    if (o.Z.USE_PNG && en(G)) {
        A = !0;
        let n = y.Z.read(e, G);
        t ? (C.png = C.png ? (0, r.wB)({}, C.png, n) : n) : (C = (0, r.wB)({}, C, n));
    }
    if (o.Z.USE_WEBP && er(B)) {
        A = !0;
        let n = O.Z.read(e, B);
        t ? (C.riff = C.riff ? (0, r.wB)({}, C.riff, n) : n) : (C = (0, r.wB)({}, C, n));
    }
    if (o.Z.USE_GIF && ei(Z)) {
        A = !0;
        let n = v.Z.read(e, Z);
        t ? (C.gif = C.gif ? (0, r.wB)({}, C.gif, n) : n) : (C = (0, r.wB)({}, C, n));
    }
    let F = T.Z.get(C, t);
    F && (t ? (C.composite = F) : (C = (0, r.wB)({}, C, F)));
    let eo = (o.Z.USE_JPEG || o.Z.USE_WEBP) && o.Z.USE_EXIF && o.Z.USE_THUMBNAIL && I.Z.get(e, C.Thumbnail, D);
    if (
        (eo ? ((A = !0), (C.Thumbnail = eo)) : delete C.Thumbnail,
        R && (t ? (C.file || (C.file = {}), (C.file.FileType = R)) : (C.FileType = R), (A = !0)),
        !A)
    )
        throw new S.Z.MetadataMissingError();
    if (n) return Promise.all(N).then(() => C);
    return C;
    function ea(e) {
        t ? (C.icc = e) : (C = (0, r.wB)({}, C, e));
    }
    function es(e) {
        if (t) {
            for (let t of ["exif", "iptc"]) {
                let n = `__${t}`;
                e[n] && ((C[t] = C[t] ? (0, r.wB)({}, C.exif, e[n]) : e[n]), delete e[n]);
            }
            (C.png = C.png ? (0, r.wB)({}, C.png, e) : e), (C.pngText = C.pngText ? (0, r.wB)({}, C.png, e) : e);
        } else
            (C = (0, r.wB)({}, C, e.__exif ? e.__exif : {}, e.__iptc ? e.__iptc : {}, e)),
                delete C.__exif,
                delete C.__iptc;
    }
}
function H(e) {
    return void 0 !== e;
}
function Y(e) {
    return void 0 !== e;
}
function W(e) {
    return void 0 !== e;
}
function K(e) {
    if (e.exif) {
        if (e.exif.GPSLatitude && e.exif.GPSLatitudeRef)
            try {
                (e.gps = e.gps || {}),
                    (e.gps.Latitude = (0, a.gg)(e.exif.GPSLatitude.value)),
                    "S" === e.exif.GPSLatitudeRef.value.join("") && (e.gps.Latitude = -e.gps.Latitude);
            } catch (e) {}
        if (e.exif.GPSLongitude && e.exif.GPSLongitudeRef)
            try {
                (e.gps = e.gps || {}),
                    (e.gps.Longitude = (0, a.gg)(e.exif.GPSLongitude.value)),
                    "W" === e.exif.GPSLongitudeRef.value.join("") && (e.gps.Longitude = -e.gps.Longitude);
            } catch (e) {}
        if (e.exif.GPSAltitude && e.exif.GPSAltitudeRef)
            try {
                (e.gps = e.gps || {}),
                    (e.gps.Altitude = e.exif.GPSAltitude.value[0] / e.exif.GPSAltitude.value[1]),
                    1 === e.exif.GPSAltitudeRef.value && (e.gps.Altitude = -e.gps.Altitude);
            } catch (e) {}
    }
}
function z(e) {
    return void 0 !== e;
}
function q(e) {
    return Array.isArray(e) && e.length > 0;
}
function X(e) {
    return Array.isArray(e) && e.length > 0;
}
function Q(e) {
    return (
        e.Make &&
        e.Make.value &&
        Array.isArray(e.Make.value) &&
        "Canon" === e.Make.value[0] &&
        e.MakerNote &&
        e.MakerNote.__offset
    );
}
function J(e) {
    let t = "PENTAX ";
    return (
        e.MakerNote.value.length > t.length &&
        (0, r.nZ)(e.MakerNote.value.slice(0, t.length)) === t &&
        e.MakerNote.__offset
    );
}
function $(e) {
    return void 0 !== e;
}
function ee(e) {
    return void 0 !== e;
}
function et(e) {
    return void 0 !== e;
}
function en(e) {
    return void 0 !== e;
}
function er(e) {
    return void 0 !== e;
}
function ei(e) {
    return void 0 !== e;
}
