"use strict";
n.r(t), n.d(t, { default: () => R, errors: () => O, load: () => D, loadView: () => Y });
var r = n(643479),
    i = n(504925),
    a = n(761799),
    s = n(723727),
    o = n(601205),
    l = n(664741),
    u = n(226601),
    c = n(344470),
    d = n(766493),
    _ = n(525012),
    f = n(242389),
    h = n(842962),
    p = n(312597),
    g = n(116811),
    E = n(124864),
    A = n(284776),
    I = n(201147),
    T = n(147687),
    y = n(205710),
    S = n(479533),
    v = n(67286),
    C = n(906037),
    b = n(306827),
    N = n(264572).Buffer;
let R = { load: D, loadView: Y, errors: b.A },
    O = b.A;
function D(e, t = {}) {
    return L(e)
        ? ((t.async = !0), w(e, t).then((e) => B(e, t)))
        : F(e)
          ? ((t.async = !0), V(e).then((e) => B(e, t)))
          : B(e, t);
}
function L(e) {
    return "string" == typeof e;
}
function w(e, t) {
    return /^\w+:\/\//.test(e)
        ? "u" > typeof fetch
            ? x(e, t)
            : P(e, t)
        : k(e)
          ? Promise.resolve((0, r.C5)(e))
          : U(e, t);
}
function x(e, { length: t } = {}) {
    let n = { method: "GET" };
    return (
        Number.isInteger(t) && t >= 0 && (n.headers = { range: `bytes=0-${t - 1}` }),
        fetch(e, n).then((e) => e.arrayBuffer())
    );
}
function P(e, { length: t } = {}) {
    return new Promise((n, r) => {
        let i = {};
        Number.isInteger(t) && t >= 0 && (i.headers = { range: `bytes=0-${t - 1}` }),
            M(e)(e, i, (e) => {
                if (e.statusCode >= 200 && e.statusCode <= 299) {
                    let t = [];
                    e.on("data", (e) => t.push(N.from(e))),
                        e.on("error", (e) => r(e)),
                        e.on("end", () => n(N.concat(t)));
                } else r(`Could not fetch file: ${e.statusCode} ${e.statusMessage}`), e.resume();
            }).on("error", (e) => r(e));
    });
}
function M(e) {
    return /^https:\/\//.test(e) ? require("https").get : require("http").get;
}
function k(e) {
    return /^data:[^;,]*(;base64)?,/.test(e);
}
function U(e, { length: t } = {}) {
    return new Promise((n, r) => {
        let i = G();
        i.open(e, (a, s) => {
            a
                ? r(a)
                : i.stat(e, (a, o) => {
                      if (a) r(a);
                      else {
                          let a = Math.min(o.size, void 0 !== t ? t : o.size),
                              l = N.alloc(a),
                              u = { buffer: l, length: a };
                          i.read(s, u, (t) => {
                              t
                                  ? r(t)
                                  : i.close(s, (t) => {
                                        t && console.warn(`Could not close file ${e}:`, t), n(l);
                                    });
                          });
                      }
                  });
        });
    });
}
function G() {
    try {
        return require("fs");
    } catch (e) {
        return;
    }
}
function F(e) {
    return "u" > typeof File && e instanceof File;
}
function V(e) {
    return new Promise((t, n) => {
        let r = new FileReader();
        (r.onload = (e) => t(e.target.result)), (r.onerror = () => n(r.error)), r.readAsArrayBuffer(e);
    });
}
function B(e, t) {
    return j(e) && (e = new Uint8Array(e).buffer), Y(H(e), t);
}
function j(e) {
    try {
        return N.isBuffer(e);
    } catch (e) {
        return !1;
    }
}
function H(e) {
    try {
        return new DataView(e);
    } catch (t) {
        return new i.A(e);
    }
}
function Y(
    e,
    { expanded: t = !1, async: n = !1, includeUnknown: i = !1, domParser: s } = {
        expanded: !1,
        async: !1,
        includeUnknown: !1,
        domParser: void 0,
    },
) {
    let N = !1,
        R = {},
        O = [],
        {
            fileType: D,
            fileDataOffset: L,
            jfifDataOffset: w,
            tiffHeaderOffset: x,
            iptcDataOffset: P,
            xmpChunks: M,
            iccChunks: k,
            mpfDataOffset: U,
            pngHeaderOffset: G,
            pngTextChunks: F,
            pngChunkOffsets: V,
            vp8xChunkOffset: B,
            gifHeaderOffset: j,
        } = o.A.parseAppMarkers(e, n);
    if (a.A.USE_JPEG && a.A.USE_FILE && W(L)) {
        N = !0;
        let n = c.A.read(e, L);
        t ? (R.file = n) : (R = (0, r.dP)({}, R, n));
    }
    if (a.A.USE_JPEG && a.A.USE_JFIF && K(w)) {
        N = !0;
        let n = d.A.read(e, w);
        t ? (R.jfif = n) : (R = (0, r.dP)({}, R, n));
    }
    if (a.A.USE_EXIF && $(x)) {
        N = !0;
        let { tags: n, byteOrder: o } = l.A.read(e, x, i);
        if (
            (n.Thumbnail && ((R.Thumbnail = n.Thumbnail), delete n.Thumbnail),
            t ? ((R.exif = n), z(R)) : (R = (0, r.dP)({}, R, n)),
            a.A.USE_TIFF && a.A.USE_IPTC && n["IPTC-NAA"] && !q(P))
        ) {
            let e = _.A.read(n["IPTC-NAA"].value, 0, i);
            t ? (R.iptc = e) : (R = (0, r.dP)({}, R, e));
        }
        if (a.A.USE_TIFF && a.A.USE_XMP && n.ApplicationNotes && !X(M)) {
            let e = f.A.read((0, r.YF)(n.ApplicationNotes.value), void 0, s);
            t ? (R.xmp = e) : (delete e._raw, (R = (0, r.dP)({}, R, e)));
        }
        if (a.A.USE_PHOTOSHOP && n.ImageSourceData && n.PhotoshopSettings) {
            let e = h.A.read(n.PhotoshopSettings.value, i);
            t ? (R.photoshop = e) : (R = (0, r.dP)({}, R, e));
        }
        if (a.A.USE_TIFF && a.A.USE_ICC && n.ICC_Profile && !Z(k)) {
            let e = p.A.read(n.ICC_Profile.value, [
                { offset: 0, length: n.ICC_Profile.value.length, chunkNumber: 1, chunksTotal: 1 },
            ]);
            t ? (R.icc = e) : (R = (0, r.dP)({}, R, e));
        }
        if (a.A.USE_MAKER_NOTES && n.MakerNote) {
            if (Q(n)) {
                let a = g.A.read(e, x, n.MakerNote.__offset, o, i);
                t ? (R.makerNotes = a) : (R = (0, r.dP)({}, R, a));
            } else if (J(n)) {
                let a = E.A.read(e, x, n.MakerNote.__offset, i);
                t ? (R.makerNotes = a) : (R = (0, r.dP)({}, R, a));
            }
        }
        n.MakerNote && delete n.MakerNote.__offset;
    }
    if (a.A.USE_JPEG && a.A.USE_IPTC && q(P)) {
        N = !0;
        let n = _.A.read(e, P, i);
        t ? (R.iptc = n) : (R = (0, r.dP)({}, R, n));
    }
    if (a.A.USE_XMP && X(M)) {
        N = !0;
        let n = f.A.read(e, M, s);
        t ? (R.xmp = n) : (delete n._raw, (R = (0, r.dP)({}, R, n)));
    }
    if ((a.A.USE_JPEG || a.A.USE_WEBP) && a.A.USE_ICC && Z(k)) {
        N = !0;
        let t = p.A.read(e, k, n);
        t instanceof Promise ? O.push(t.then(eo)) : eo(t);
    }
    if (a.A.USE_MPF && ee(U)) {
        N = !0;
        let n = u.A.read(e, U, i);
        t ? (R.mpf = n) : (R = (0, r.dP)({}, R, n));
    }
    if (a.A.USE_PNG && a.A.USE_PNG_FILE && et(G)) {
        N = !0;
        let n = A.A.read(e, G);
        t ? ((R.png = R.png ? (0, r.dP)({}, R.png, n) : n), (R.pngFile = n)) : (R = (0, r.dP)({}, R, n));
    }
    if (a.A.USE_PNG && en(F)) {
        N = !0;
        let { readTags: t, readTagsPromise: r } = I.A.read(e, F, n, i);
        el(t), r && O.push(r.then((e) => e.forEach(el)));
    }
    if (a.A.USE_PNG && er(V)) {
        N = !0;
        let n = T.A.read(e, V);
        t ? (R.png = R.png ? (0, r.dP)({}, R.png, n) : n) : (R = (0, r.dP)({}, R, n));
    }
    if (a.A.USE_WEBP && ei(B)) {
        N = !0;
        let n = y.A.read(e, B);
        t ? (R.riff = R.riff ? (0, r.dP)({}, R.riff, n) : n) : (R = (0, r.dP)({}, R, n));
    }
    if (a.A.USE_GIF && ea(j)) {
        N = !0;
        let n = S.A.read(e, j);
        t ? (R.gif = R.gif ? (0, r.dP)({}, R.gif, n) : n) : (R = (0, r.dP)({}, R, n));
    }
    let H = C.A.get(R, t);
    H && (t ? (R.composite = H) : (R = (0, r.dP)({}, R, H)));
    let es = (a.A.USE_JPEG || a.A.USE_WEBP) && a.A.USE_EXIF && a.A.USE_THUMBNAIL && v.A.get(e, R.Thumbnail, x);
    if (
        (es ? ((N = !0), (R.Thumbnail = es)) : delete R.Thumbnail,
        D && (t ? (R.file || (R.file = {}), (R.file.FileType = D)) : (R.FileType = D), (N = !0)),
        !N)
    )
        throw new b.A.MetadataMissingError();
    if (n) return Promise.all(O).then(() => R);
    return R;
    function eo(e) {
        t ? (R.icc = e) : (R = (0, r.dP)({}, R, e));
    }
    function el(e) {
        if (t) {
            for (let t of ["exif", "iptc"]) {
                let n = `__${t}`;
                e[n] && ((R[t] = R[t] ? (0, r.dP)({}, R.exif, e[n]) : e[n]), delete e[n]);
            }
            (R.png = R.png ? (0, r.dP)({}, R.png, e) : e), (R.pngText = R.pngText ? (0, r.dP)({}, R.png, e) : e);
        } else
            (R = (0, r.dP)({}, R, e.__exif ? e.__exif : {}, e.__iptc ? e.__iptc : {}, e)),
                delete R.__exif,
                delete R.__iptc;
    }
}
function W(e) {
    return void 0 !== e;
}
function K(e) {
    return void 0 !== e;
}
function $(e) {
    return void 0 !== e;
}
function z(e) {
    if (e.exif) {
        if (e.exif.GPSLatitude && e.exif.GPSLatitudeRef)
            try {
                (e.gps = e.gps || {}),
                    (e.gps.Latitude = (0, s.e7)(e.exif.GPSLatitude.value)),
                    "S" === e.exif.GPSLatitudeRef.value.join("") && (e.gps.Latitude = -e.gps.Latitude);
            } catch (e) {}
        if (e.exif.GPSLongitude && e.exif.GPSLongitudeRef)
            try {
                (e.gps = e.gps || {}),
                    (e.gps.Longitude = (0, s.e7)(e.exif.GPSLongitude.value)),
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
function q(e) {
    return void 0 !== e;
}
function X(e) {
    return Array.isArray(e) && e.length > 0;
}
function Z(e) {
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
        (0, r.YF)(e.MakerNote.value.slice(0, t.length)) === t &&
        e.MakerNote.__offset
    );
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
function ea(e) {
    return void 0 !== e;
}
