"use strict";
n.r(t), n.d(t, { default: () => N, errors: () => R, load: () => O, loadView: () => H });
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
    p = n(842962),
    h = n(312597),
    m = n(116811),
    g = n(124864),
    E = n(284776),
    A = n(201147),
    I = n(147687),
    T = n(205710),
    y = n(479533),
    S = n(67286),
    v = n(906037),
    C = n(306827),
    b = n(264572).Buffer;
let N = { load: O, loadView: H, errors: C.A },
    R = C.A;
function O(e, t = {}) {
    return D(e)
        ? ((t.async = !0), L(e, t).then((e) => F(e, t)))
        : G(e)
          ? ((t.async = !0), V(e).then((e) => F(e, t)))
          : F(e, t);
}
function D(e) {
    return "string" == typeof e;
}
function L(e, t) {
    return /^\w+:\/\//.test(e)
        ? "u" > typeof fetch
            ? w(e, t)
            : x(e, t)
        : M(e)
          ? Promise.resolve((0, r.C5)(e))
          : k(e, t);
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
            P(e)(e, i, (e) => {
                if (e.statusCode >= 200 && e.statusCode <= 299) {
                    let t = [];
                    e.on("data", (e) => t.push(b.from(e))),
                        e.on("error", (e) => r(e)),
                        e.on("end", () => n(b.concat(t)));
                } else r(`Could not fetch file: ${e.statusCode} ${e.statusMessage}`), e.resume();
            }).on("error", (e) => r(e));
    });
}
function P(e) {
    return /^https:\/\//.test(e) ? require("https").get : require("http").get;
}
function M(e) {
    return /^data:[^;,]*(;base64)?,/.test(e);
}
function k(e, { length: t } = {}) {
    return new Promise((n, r) => {
        let i = U();
        i.open(e, (a, s) => {
            a
                ? r(a)
                : i.stat(e, (a, o) => {
                      if (a) r(a);
                      else {
                          let a = Math.min(o.size, void 0 !== t ? t : o.size),
                              l = b.alloc(a),
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
function U() {
    try {
        return require("fs");
    } catch (e) {
        return;
    }
}
function G(e) {
    return "u" > typeof File && e instanceof File;
}
function V(e) {
    return new Promise((t, n) => {
        let r = new FileReader();
        (r.onload = (e) => t(e.target.result)), (r.onerror = () => n(r.error)), r.readAsArrayBuffer(e);
    });
}
function F(e, t) {
    return B(e) && (e = new Uint8Array(e).buffer), H(j(e), t);
}
function B(e) {
    try {
        return b.isBuffer(e);
    } catch (e) {
        return !1;
    }
}
function j(e) {
    try {
        return new DataView(e);
    } catch (t) {
        return new i.A(e);
    }
}
function H(
    e,
    { expanded: t = !1, async: n = !1, includeUnknown: i = !1, domParser: s } = {
        expanded: !1,
        async: !1,
        includeUnknown: !1,
        domParser: void 0,
    },
) {
    let b = !1,
        N = {},
        R = [],
        {
            fileType: O,
            fileDataOffset: D,
            jfifDataOffset: L,
            tiffHeaderOffset: w,
            iptcDataOffset: x,
            xmpChunks: P,
            iccChunks: M,
            mpfDataOffset: k,
            pngHeaderOffset: U,
            pngTextChunks: G,
            pngChunkOffsets: V,
            vp8xChunkOffset: F,
            gifHeaderOffset: B,
        } = o.A.parseAppMarkers(e, n);
    if (a.A.USE_JPEG && a.A.USE_FILE && Y(D)) {
        b = !0;
        let n = c.A.read(e, D);
        t ? (N.file = n) : (N = (0, r.dP)({}, N, n));
    }
    if (a.A.USE_JPEG && a.A.USE_JFIF && W(L)) {
        b = !0;
        let n = d.A.read(e, L);
        t ? (N.jfif = n) : (N = (0, r.dP)({}, N, n));
    }
    if (a.A.USE_EXIF && K(w)) {
        b = !0;
        let { tags: n, byteOrder: o } = l.A.read(e, w, i);
        if (
            (n.Thumbnail && ((N.Thumbnail = n.Thumbnail), delete n.Thumbnail),
            t ? ((N.exif = n), z(N)) : (N = (0, r.dP)({}, N, n)),
            a.A.USE_TIFF && a.A.USE_IPTC && n["IPTC-NAA"] && !$(x))
        ) {
            let e = _.A.read(n["IPTC-NAA"].value, 0, i);
            t ? (N.iptc = e) : (N = (0, r.dP)({}, N, e));
        }
        if (a.A.USE_TIFF && a.A.USE_XMP && n.ApplicationNotes && !q(P)) {
            let e = f.A.read((0, r.YF)(n.ApplicationNotes.value), void 0, s);
            t ? (N.xmp = e) : (delete e._raw, (N = (0, r.dP)({}, N, e)));
        }
        if (a.A.USE_PHOTOSHOP && n.ImageSourceData && n.PhotoshopSettings) {
            let e = p.A.read(n.PhotoshopSettings.value, i);
            t ? (N.photoshop = e) : (N = (0, r.dP)({}, N, e));
        }
        if (a.A.USE_TIFF && a.A.USE_ICC && n.ICC_Profile && !Z(M)) {
            let e = h.A.read(n.ICC_Profile.value, [
                { offset: 0, length: n.ICC_Profile.value.length, chunkNumber: 1, chunksTotal: 1 },
            ]);
            t ? (N.icc = e) : (N = (0, r.dP)({}, N, e));
        }
        if (a.A.USE_MAKER_NOTES && n.MakerNote) {
            if (Q(n)) {
                let a = m.A.read(e, w, n.MakerNote.__offset, o, i);
                t ? (N.makerNotes = a) : (N = (0, r.dP)({}, N, a));
            } else if (X(n)) {
                let a = g.A.read(e, w, n.MakerNote.__offset, i);
                t ? (N.makerNotes = a) : (N = (0, r.dP)({}, N, a));
            }
        }
        n.MakerNote && delete n.MakerNote.__offset;
    }
    if (a.A.USE_JPEG && a.A.USE_IPTC && $(x)) {
        b = !0;
        let n = _.A.read(e, x, i);
        t ? (N.iptc = n) : (N = (0, r.dP)({}, N, n));
    }
    if (a.A.USE_XMP && q(P)) {
        b = !0;
        let n = f.A.read(e, P, s);
        t ? (N.xmp = n) : (delete n._raw, (N = (0, r.dP)({}, N, n)));
    }
    if ((a.A.USE_JPEG || a.A.USE_WEBP) && a.A.USE_ICC && Z(M)) {
        b = !0;
        let t = h.A.read(e, M, n);
        t instanceof Promise ? R.push(t.then(es)) : es(t);
    }
    if (a.A.USE_MPF && J(k)) {
        b = !0;
        let n = u.A.read(e, k, i);
        t ? (N.mpf = n) : (N = (0, r.dP)({}, N, n));
    }
    if (a.A.USE_PNG && a.A.USE_PNG_FILE && ee(U)) {
        b = !0;
        let n = E.A.read(e, U);
        t ? ((N.png = N.png ? (0, r.dP)({}, N.png, n) : n), (N.pngFile = n)) : (N = (0, r.dP)({}, N, n));
    }
    if (a.A.USE_PNG && et(G)) {
        b = !0;
        let { readTags: t, readTagsPromise: r } = A.A.read(e, G, n, i);
        eo(t), r && R.push(r.then((e) => e.forEach(eo)));
    }
    if (a.A.USE_PNG && en(V)) {
        b = !0;
        let n = I.A.read(e, V);
        t ? (N.png = N.png ? (0, r.dP)({}, N.png, n) : n) : (N = (0, r.dP)({}, N, n));
    }
    if (a.A.USE_WEBP && er(F)) {
        b = !0;
        let n = T.A.read(e, F);
        t ? (N.riff = N.riff ? (0, r.dP)({}, N.riff, n) : n) : (N = (0, r.dP)({}, N, n));
    }
    if (a.A.USE_GIF && ei(B)) {
        b = !0;
        let n = y.A.read(e, B);
        t ? (N.gif = N.gif ? (0, r.dP)({}, N.gif, n) : n) : (N = (0, r.dP)({}, N, n));
    }
    let j = v.A.get(N, t);
    j && (t ? (N.composite = j) : (N = (0, r.dP)({}, N, j)));
    let ea = (a.A.USE_JPEG || a.A.USE_WEBP) && a.A.USE_EXIF && a.A.USE_THUMBNAIL && S.A.get(e, N.Thumbnail, w);
    if (
        (ea ? ((b = !0), (N.Thumbnail = ea)) : delete N.Thumbnail,
        O && (t ? (N.file || (N.file = {}), (N.file.FileType = O)) : (N.FileType = O), (b = !0)),
        !b)
    )
        throw new C.A.MetadataMissingError();
    if (n) return Promise.all(R).then(() => N);
    return N;
    function es(e) {
        t ? (N.icc = e) : (N = (0, r.dP)({}, N, e));
    }
    function eo(e) {
        if (t) {
            for (let t of ["exif", "iptc"]) {
                let n = `__${t}`;
                e[n] && ((N[t] = N[t] ? (0, r.dP)({}, N.exif, e[n]) : e[n]), delete e[n]);
            }
            (N.png = N.png ? (0, r.dP)({}, N.png, e) : e), (N.pngText = N.pngText ? (0, r.dP)({}, N.png, e) : e);
        } else
            (N = (0, r.dP)({}, N, e.__exif ? e.__exif : {}, e.__iptc ? e.__iptc : {}, e)),
                delete N.__exif,
                delete N.__iptc;
    }
}
function Y(e) {
    return void 0 !== e;
}
function W(e) {
    return void 0 !== e;
}
function K(e) {
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
function $(e) {
    return void 0 !== e;
}
function q(e) {
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
function X(e) {
    let t = "PENTAX ";
    return (
        e.MakerNote.value.length > t.length &&
        (0, r.YF)(e.MakerNote.value.slice(0, t.length)) === t &&
        e.MakerNote.__offset
    );
}
function J(e) {
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
