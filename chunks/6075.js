n.r(t),
    n.d(t, {
        default: () => A,
        errors: () => N,
        load: () => P,
        loadView: () => V,
    });
var r = n(822632),
    i = n(475516),
    a = n(791473),
    o = n(321294),
    s = n(488066),
    l = n(150629),
    c = n(446351),
    u = n(258823),
    d = n(552865),
    f = n(638900),
    p = n(460166),
    _ = n(74501),
    m = n(580829),
    h = n(193633),
    g = n(686728),
    E = n(957047),
    b = n(603083),
    y = n(263007),
    O = n(110552),
    v = n(256184),
    S = n(410747),
    I = n(714912),
    T = n(890742),
    C = n(413135).Buffer;
let A = {
        load: P,
        loadView: V,
        errors: T.Z,
    },
    N = T.Z;
function P(e, t = {}) {
    return R(e)
        ? ((t.async = !0), w(e, t).then((e) => Z(e, t)))
        : U(e)
          ? ((t.async = !0), G(e).then((e) => Z(e, t)))
          : Z(e, t);
}
function R(e) {
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
                    e.on("data", (e) => t.push(C.from(e))),
                        e.on("error", (e) => r(e)),
                        e.on("end", () => n(C.concat(t)));
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
        i.open(e, (a, o) => {
            a
                ? r(a)
                : i.stat(e, (a, s) => {
                      if (a) r(a);
                      else {
                          let a = Math.min(s.size, void 0 !== t ? t : s.size),
                              l = C.alloc(a),
                              c = {
                                  buffer: l,
                                  length: a,
                              };
                          i.read(o, c, (t) => {
                              t
                                  ? r(t)
                                  : i.close(o, (t) => {
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
function Z(e, t) {
    return F(e) && (e = new Uint8Array(e).buffer), V(B(e), t);
}
function F(e) {
    try {
        return C.isBuffer(e);
    } catch (e) {
        return !1;
    }
}
function B(e) {
    try {
        return new DataView(e);
    } catch (t) {
        return new i.Z(e);
    }
}
function V(
    e,
    { expanded: t = !1, async: n = !1, includeUnknown: i = !1, domParser: o } = {
        expanded: !1,
        async: !1,
        includeUnknown: !1,
        domParser: void 0,
    },
) {
    let C = !1,
        A = {},
        N = [],
        {
            fileType: P,
            fileDataOffset: R,
            jfifDataOffset: w,
            tiffHeaderOffset: D,
            iptcDataOffset: x,
            xmpChunks: L,
            iccChunks: j,
            mpfDataOffset: M,
            pngHeaderOffset: k,
            pngTextChunks: U,
            pngChunkOffsets: G,
            vp8xChunkOffset: Z,
            gifHeaderOffset: F,
        } = s.Z.parseAppMarkers(e, n);
    if (a.Z.USE_JPEG && a.Z.USE_FILE && H(R)) {
        C = !0;
        let n = u.Z.read(e, R);
        t ? (A.file = n) : (A = (0, r.wB)({}, A, n));
    }
    if (a.Z.USE_JPEG && a.Z.USE_JFIF && Y(w)) {
        C = !0;
        let n = d.Z.read(e, w);
        t ? (A.jfif = n) : (A = (0, r.wB)({}, A, n));
    }
    if (a.Z.USE_EXIF && W(D)) {
        C = !0;
        let { tags: n, byteOrder: s } = l.Z.read(e, D, i);
        if (
            (n.Thumbnail && ((A.Thumbnail = n.Thumbnail), delete n.Thumbnail),
            t ? ((A.exif = n), K(A)) : (A = (0, r.wB)({}, A, n)),
            a.Z.USE_TIFF && a.Z.USE_IPTC && n["IPTC-NAA"] && !z(x))
        ) {
            let e = f.Z.read(n["IPTC-NAA"].value, 0, i);
            t ? (A.iptc = e) : (A = (0, r.wB)({}, A, e));
        }
        if (a.Z.USE_TIFF && a.Z.USE_XMP && n.ApplicationNotes && !q(L)) {
            let e = p.Z.read((0, r.nZ)(n.ApplicationNotes.value), void 0, o);
            t ? (A.xmp = e) : (delete e._raw, (A = (0, r.wB)({}, A, e)));
        }
        if (a.Z.USE_PHOTOSHOP && n.ImageSourceData && n.PhotoshopSettings) {
            let e = _.Z.read(n.PhotoshopSettings.value, i);
            t ? (A.photoshop = e) : (A = (0, r.wB)({}, A, e));
        }
        if (a.Z.USE_TIFF && a.Z.USE_ICC && n.ICC_Profile && !Q(j)) {
            let e = m.Z.read(n.ICC_Profile.value, [
                {
                    offset: 0,
                    length: n.ICC_Profile.value.length,
                    chunkNumber: 1,
                    chunksTotal: 1,
                },
            ]);
            t ? (A.icc = e) : (A = (0, r.wB)({}, A, e));
        }
        if (a.Z.USE_MAKER_NOTES && n.MakerNote) {
            if (X(n)) {
                let a = h.Z.read(e, D, n.MakerNote.__offset, s, i);
                t ? (A.makerNotes = a) : (A = (0, r.wB)({}, A, a));
            } else if (J(n)) {
                let a = g.Z.read(e, D, n.MakerNote.__offset, i);
                t ? (A.makerNotes = a) : (A = (0, r.wB)({}, A, a));
            }
        }
        n.MakerNote && delete n.MakerNote.__offset;
    }
    if (a.Z.USE_JPEG && a.Z.USE_IPTC && z(x)) {
        C = !0;
        let n = f.Z.read(e, x, i);
        t ? (A.iptc = n) : (A = (0, r.wB)({}, A, n));
    }
    if (a.Z.USE_XMP && q(L)) {
        C = !0;
        let n = p.Z.read(e, L, o);
        t ? (A.xmp = n) : (delete n._raw, (A = (0, r.wB)({}, A, n)));
    }
    if ((a.Z.USE_JPEG || a.Z.USE_WEBP) && a.Z.USE_ICC && Q(j)) {
        C = !0;
        let t = m.Z.read(e, j, n);
        t instanceof Promise ? N.push(t.then(eo)) : eo(t);
    }
    if (a.Z.USE_MPF && $(M)) {
        C = !0;
        let n = c.Z.read(e, M, i);
        t ? (A.mpf = n) : (A = (0, r.wB)({}, A, n));
    }
    if (a.Z.USE_PNG && a.Z.USE_PNG_FILE && ee(k)) {
        C = !0;
        let n = E.Z.read(e, k);
        t ? ((A.png = A.png ? (0, r.wB)({}, A.png, n) : n), (A.pngFile = n)) : (A = (0, r.wB)({}, A, n));
    }
    if (a.Z.USE_PNG && et(U)) {
        C = !0;
        let { readTags: t, readTagsPromise: r } = b.Z.read(e, U, n, i);
        es(t), r && N.push(r.then((e) => e.forEach(es)));
    }
    if (a.Z.USE_PNG && en(G)) {
        C = !0;
        let n = y.Z.read(e, G);
        t ? (A.png = A.png ? (0, r.wB)({}, A.png, n) : n) : (A = (0, r.wB)({}, A, n));
    }
    if (a.Z.USE_WEBP && er(Z)) {
        C = !0;
        let n = O.Z.read(e, Z);
        t ? (A.riff = A.riff ? (0, r.wB)({}, A.riff, n) : n) : (A = (0, r.wB)({}, A, n));
    }
    if (a.Z.USE_GIF && ei(F)) {
        C = !0;
        let n = v.Z.read(e, F);
        t ? (A.gif = A.gif ? (0, r.wB)({}, A.gif, n) : n) : (A = (0, r.wB)({}, A, n));
    }
    let B = I.Z.get(A, t);
    B && (t ? (A.composite = B) : (A = (0, r.wB)({}, A, B)));
    let ea = (a.Z.USE_JPEG || a.Z.USE_WEBP) && a.Z.USE_EXIF && a.Z.USE_THUMBNAIL && S.Z.get(e, A.Thumbnail, D);
    if (
        (ea ? ((C = !0), (A.Thumbnail = ea)) : delete A.Thumbnail,
        P && (t ? (A.file || (A.file = {}), (A.file.FileType = P)) : (A.FileType = P), (C = !0)),
        !C)
    )
        throw new T.Z.MetadataMissingError();
    if (n) return Promise.all(N).then(() => A);
    return A;
    function eo(e) {
        t ? (A.icc = e) : (A = (0, r.wB)({}, A, e));
    }
    function es(e) {
        if (t) {
            for (let t of ["exif", "iptc"]) {
                let n = `__${t}`;
                e[n] && ((A[t] = A[t] ? (0, r.wB)({}, A.exif, e[n]) : e[n]), delete e[n]);
            }
            (A.png = A.png ? (0, r.wB)({}, A.png, e) : e), (A.pngText = A.pngText ? (0, r.wB)({}, A.png, e) : e);
        } else
            (A = (0, r.wB)({}, A, e.__exif ? e.__exif : {}, e.__iptc ? e.__iptc : {}, e)),
                delete A.__exif,
                delete A.__iptc;
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
                    (e.gps.Latitude = (0, o.gg)(e.exif.GPSLatitude.value)),
                    "S" === e.exif.GPSLatitudeRef.value.join("") && (e.gps.Latitude = -e.gps.Latitude);
            } catch (e) {}
        if (e.exif.GPSLongitude && e.exif.GPSLongitudeRef)
            try {
                (e.gps = e.gps || {}),
                    (e.gps.Longitude = (0, o.gg)(e.exif.GPSLongitude.value)),
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
function Q(e) {
    return Array.isArray(e) && e.length > 0;
}
function X(e) {
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
