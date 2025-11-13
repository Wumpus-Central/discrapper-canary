n.r(t),
    n.d(t, {
        default: () => C,
        errors: () => N,
        load: () => R,
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
    _ = n(460166),
    p = n(74501),
    h = n(580829),
    m = n(193633),
    g = n(686728),
    E = n(957047),
    b = n(603083),
    y = n(263007),
    O = n(110552),
    v = n(256184),
    I = n(410747),
    T = n(714912),
    S = n(890742),
    A = n(413135).Buffer;
let C = {
        load: R,
        loadView: V,
        errors: S.Z,
    },
    N = S.Z;
function R(e, t = {}) {
    return P(e)
        ? ((t.async = !0), D(e, t).then((e) => B(e, t)))
        : U(e)
          ? ((t.async = !0), G(e).then((e) => B(e, t)))
          : B(e, t);
}
function P(e) {
    return "string" == typeof e;
}
function D(e, t) {
    return /^\w+:\/\//.test(e)
        ? "undefined" != typeof fetch
            ? w(e, t)
            : x(e, t)
        : M(e)
          ? Promise.resolve((0, r.u0)(e))
          : j(e, t);
}
function w(e, { length: t } = {}) {
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
function M(e) {
    return /^data:[^;,]*(;base64)?,/.test(e);
}
function j(e, { length: t } = {}) {
    return new Promise((n, r) => {
        let i = k();
        i.open(e, (a, o) => {
            a
                ? r(a)
                : i.stat(e, (a, s) => {
                      if (a) r(a);
                      else {
                          let a = Math.min(s.size, void 0 !== t ? t : s.size),
                              l = A.alloc(a),
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
    { expanded: t = !1, async: n = !1, includeUnknown: i = !1, domParser: o } = {
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
            jfifDataOffset: D,
            tiffHeaderOffset: w,
            iptcDataOffset: x,
            xmpChunks: L,
            iccChunks: M,
            mpfDataOffset: j,
            pngHeaderOffset: k,
            pngTextChunks: U,
            pngChunkOffsets: G,
            vp8xChunkOffset: B,
            gifHeaderOffset: Z,
        } = s.Z.parseAppMarkers(e, n);
    if (a.Z.USE_JPEG && a.Z.USE_FILE && H(P)) {
        A = !0;
        let n = u.Z.read(e, P);
        t ? (C.file = n) : (C = (0, r.wB)({}, C, n));
    }
    if (a.Z.USE_JPEG && a.Z.USE_JFIF && Y(D)) {
        A = !0;
        let n = d.Z.read(e, D);
        t ? (C.jfif = n) : (C = (0, r.wB)({}, C, n));
    }
    if (a.Z.USE_EXIF && W(w)) {
        A = !0;
        let { tags: n, byteOrder: s } = l.Z.read(e, w, i);
        if (
            (n.Thumbnail && ((C.Thumbnail = n.Thumbnail), delete n.Thumbnail),
            t ? ((C.exif = n), K(C)) : (C = (0, r.wB)({}, C, n)),
            a.Z.USE_TIFF && a.Z.USE_IPTC && n["IPTC-NAA"] && !z(x))
        ) {
            let e = f.Z.read(n["IPTC-NAA"].value, 0, i);
            t ? (C.iptc = e) : (C = (0, r.wB)({}, C, e));
        }
        if (a.Z.USE_TIFF && a.Z.USE_XMP && n.ApplicationNotes && !q(L)) {
            let e = _.Z.read((0, r.nZ)(n.ApplicationNotes.value), void 0, o);
            t ? (C.xmp = e) : (delete e._raw, (C = (0, r.wB)({}, C, e)));
        }
        if (a.Z.USE_PHOTOSHOP && n.ImageSourceData && n.PhotoshopSettings) {
            let e = p.Z.read(n.PhotoshopSettings.value, i);
            t ? (C.photoshop = e) : (C = (0, r.wB)({}, C, e));
        }
        if (a.Z.USE_TIFF && a.Z.USE_ICC && n.ICC_Profile && !X(M)) {
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
        if (a.Z.USE_MAKER_NOTES && n.MakerNote) {
            if (Q(n)) {
                let a = m.Z.read(e, w, n.MakerNote.__offset, s, i);
                t ? (C.makerNotes = a) : (C = (0, r.wB)({}, C, a));
            } else if (J(n)) {
                let a = g.Z.read(e, w, n.MakerNote.__offset, i);
                t ? (C.makerNotes = a) : (C = (0, r.wB)({}, C, a));
            }
        }
        n.MakerNote && delete n.MakerNote.__offset;
    }
    if (a.Z.USE_JPEG && a.Z.USE_IPTC && z(x)) {
        A = !0;
        let n = f.Z.read(e, x, i);
        t ? (C.iptc = n) : (C = (0, r.wB)({}, C, n));
    }
    if (a.Z.USE_XMP && q(L)) {
        A = !0;
        let n = _.Z.read(e, L, o);
        t ? (C.xmp = n) : (delete n._raw, (C = (0, r.wB)({}, C, n)));
    }
    if ((a.Z.USE_JPEG || a.Z.USE_WEBP) && a.Z.USE_ICC && X(M)) {
        A = !0;
        let t = h.Z.read(e, M, n);
        t instanceof Promise ? N.push(t.then(eo)) : eo(t);
    }
    if (a.Z.USE_MPF && $(j)) {
        A = !0;
        let n = c.Z.read(e, j, i);
        t ? (C.mpf = n) : (C = (0, r.wB)({}, C, n));
    }
    if (a.Z.USE_PNG && a.Z.USE_PNG_FILE && ee(k)) {
        A = !0;
        let n = E.Z.read(e, k);
        t ? ((C.png = C.png ? (0, r.wB)({}, C.png, n) : n), (C.pngFile = n)) : (C = (0, r.wB)({}, C, n));
    }
    if (a.Z.USE_PNG && et(U)) {
        A = !0;
        let { readTags: t, readTagsPromise: r } = b.Z.read(e, U, n, i);
        es(t), r && N.push(r.then((e) => e.forEach(es)));
    }
    if (a.Z.USE_PNG && en(G)) {
        A = !0;
        let n = y.Z.read(e, G);
        t ? (C.png = C.png ? (0, r.wB)({}, C.png, n) : n) : (C = (0, r.wB)({}, C, n));
    }
    if (a.Z.USE_WEBP && er(B)) {
        A = !0;
        let n = O.Z.read(e, B);
        t ? (C.riff = C.riff ? (0, r.wB)({}, C.riff, n) : n) : (C = (0, r.wB)({}, C, n));
    }
    if (a.Z.USE_GIF && ei(Z)) {
        A = !0;
        let n = v.Z.read(e, Z);
        t ? (C.gif = C.gif ? (0, r.wB)({}, C.gif, n) : n) : (C = (0, r.wB)({}, C, n));
    }
    let F = T.Z.get(C, t);
    F && (t ? (C.composite = F) : (C = (0, r.wB)({}, C, F)));
    let ea = (a.Z.USE_JPEG || a.Z.USE_WEBP) && a.Z.USE_EXIF && a.Z.USE_THUMBNAIL && I.Z.get(e, C.Thumbnail, w);
    if (
        (ea ? ((A = !0), (C.Thumbnail = ea)) : delete C.Thumbnail,
        R && (t ? (C.file || (C.file = {}), (C.file.FileType = R)) : (C.FileType = R), (A = !0)),
        !A)
    )
        throw new S.Z.MetadataMissingError();
    if (n) return Promise.all(N).then(() => C);
    return C;
    function eo(e) {
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
