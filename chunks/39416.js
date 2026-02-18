"use strict";
n.r(t), n.d(t, { default: () => b, errors: () => R, load: () => O, loadView: () => j });
var r = n(643479),
    i = n(504925),
    s = n(761799),
    a = n(723727),
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
    E = n(124864),
    g = n(284776),
    A = n(201147),
    I = n(147687),
    T = n(205710),
    S = n(479533),
    y = n(67286),
    v = n(906037),
    N = n(306827),
    C = n(264572).Buffer;
let b = { load: O, loadView: j, errors: N.A },
    R = N.A;
function O(e, t = {}) {
    return D(e)
        ? ((t.async = !0), L(e, t).then((e) => V(e, t)))
        : G(e)
          ? ((t.async = !0), F(e).then((e) => V(e, t)))
          : V(e, t);
}
function D(e) {
    return "string" == typeof e;
}
function L(e, t) {
    return /^\w+:\/\//.test(e)
        ? "u" > typeof fetch
            ? w(e, t)
            : x(e, t)
        : P(e)
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
            M(e)(e, i, (e) => {
                if (e.statusCode >= 200 && e.statusCode <= 299) {
                    let t = [];
                    e.on("data", (e) => t.push(C.from(e))),
                        e.on("error", (e) => r(e)),
                        e.on("end", () => n(C.concat(t)));
                } else r(`Could not fetch file: ${e.statusCode} ${e.statusMessage}`), e.resume();
            }).on("error", (e) => r(e));
    });
}
function M(e) {
    return /^https:\/\//.test(e) ? require("https").get : require("http").get;
}
function P(e) {
    return /^data:[^;,]*(;base64)?,/.test(e);
}
function k(e, { length: t } = {}) {
    return new Promise((n, r) => {
        let i = U();
        i.open(e, (s, a) => {
            s
                ? r(s)
                : i.stat(e, (s, o) => {
                      if (s) r(s);
                      else {
                          let s = Math.min(o.size, void 0 !== t ? t : o.size),
                              l = C.alloc(s),
                              u = { buffer: l, length: s };
                          i.read(a, u, (t) => {
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
function F(e) {
    return new Promise((t, n) => {
        let r = new FileReader();
        (r.onload = (e) => t(e.target.result)), (r.onerror = () => n(r.error)), r.readAsArrayBuffer(e);
    });
}
function V(e, t) {
    return B(e) && (e = new Uint8Array(e).buffer), j(H(e), t);
}
function B(e) {
    try {
        return C.isBuffer(e);
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
function j(
    e,
    { expanded: t = !1, async: n = !1, includeUnknown: i = !1, domParser: a } = {
        expanded: !1,
        async: !1,
        includeUnknown: !1,
        domParser: void 0,
    },
) {
    let C = !1,
        b = {},
        R = [],
        {
            fileType: O,
            fileDataOffset: D,
            jfifDataOffset: L,
            tiffHeaderOffset: w,
            iptcDataOffset: x,
            xmpChunks: M,
            iccChunks: P,
            mpfDataOffset: k,
            pngHeaderOffset: U,
            pngTextChunks: G,
            pngChunkOffsets: F,
            vp8xChunkOffset: V,
            gifHeaderOffset: B,
        } = o.A.parseAppMarkers(e, n);
    if (s.A.USE_JPEG && s.A.USE_FILE && Y(D)) {
        C = !0;
        let n = c.A.read(e, D);
        t ? (b.file = n) : (b = (0, r.dP)({}, b, n));
    }
    if (s.A.USE_JPEG && s.A.USE_JFIF && W(L)) {
        C = !0;
        let n = d.A.read(e, L);
        t ? (b.jfif = n) : (b = (0, r.dP)({}, b, n));
    }
    if (s.A.USE_EXIF && K(w)) {
        C = !0;
        let { tags: n, byteOrder: o } = l.A.read(e, w, i);
        if (
            (n.Thumbnail && ((b.Thumbnail = n.Thumbnail), delete n.Thumbnail),
            t ? ((b.exif = n), z(b)) : (b = (0, r.dP)({}, b, n)),
            s.A.USE_TIFF && s.A.USE_IPTC && n["IPTC-NAA"] && !$(x))
        ) {
            let e = _.A.read(n["IPTC-NAA"].value, 0, i);
            t ? (b.iptc = e) : (b = (0, r.dP)({}, b, e));
        }
        if (s.A.USE_TIFF && s.A.USE_XMP && n.ApplicationNotes && !q(M)) {
            let e = f.A.read((0, r.YF)(n.ApplicationNotes.value), void 0, a);
            t ? (b.xmp = e) : (delete e._raw, (b = (0, r.dP)({}, b, e)));
        }
        if (s.A.USE_PHOTOSHOP && n.ImageSourceData && n.PhotoshopSettings) {
            let e = p.A.read(n.PhotoshopSettings.value, i);
            t ? (b.photoshop = e) : (b = (0, r.dP)({}, b, e));
        }
        if (s.A.USE_TIFF && s.A.USE_ICC && n.ICC_Profile && !Z(P)) {
            let e = h.A.read(n.ICC_Profile.value, [
                { offset: 0, length: n.ICC_Profile.value.length, chunkNumber: 1, chunksTotal: 1 },
            ]);
            t ? (b.icc = e) : (b = (0, r.dP)({}, b, e));
        }
        if (s.A.USE_MAKER_NOTES && n.MakerNote) {
            if (X(n)) {
                let s = m.A.read(e, w, n.MakerNote.__offset, o, i);
                t ? (b.makerNotes = s) : (b = (0, r.dP)({}, b, s));
            } else if (Q(n)) {
                let s = E.A.read(e, w, n.MakerNote.__offset, i);
                t ? (b.makerNotes = s) : (b = (0, r.dP)({}, b, s));
            }
        }
        n.MakerNote && delete n.MakerNote.__offset;
    }
    if (s.A.USE_JPEG && s.A.USE_IPTC && $(x)) {
        C = !0;
        let n = _.A.read(e, x, i);
        t ? (b.iptc = n) : (b = (0, r.dP)({}, b, n));
    }
    if (s.A.USE_XMP && q(M)) {
        C = !0;
        let n = f.A.read(e, M, a);
        t ? (b.xmp = n) : (delete n._raw, (b = (0, r.dP)({}, b, n)));
    }
    if ((s.A.USE_JPEG || s.A.USE_WEBP) && s.A.USE_ICC && Z(P)) {
        C = !0;
        let t = h.A.read(e, P, n);
        t instanceof Promise ? R.push(t.then(ea)) : ea(t);
    }
    if (s.A.USE_MPF && J(k)) {
        C = !0;
        let n = u.A.read(e, k, i);
        t ? (b.mpf = n) : (b = (0, r.dP)({}, b, n));
    }
    if (s.A.USE_PNG && s.A.USE_PNG_FILE && ee(U)) {
        C = !0;
        let n = g.A.read(e, U);
        t ? ((b.png = b.png ? (0, r.dP)({}, b.png, n) : n), (b.pngFile = n)) : (b = (0, r.dP)({}, b, n));
    }
    if (s.A.USE_PNG && et(G)) {
        C = !0;
        let { readTags: t, readTagsPromise: r } = A.A.read(e, G, n, i);
        eo(t), r && R.push(r.then((e) => e.forEach(eo)));
    }
    if (s.A.USE_PNG && en(F)) {
        C = !0;
        let n = I.A.read(e, F);
        t ? (b.png = b.png ? (0, r.dP)({}, b.png, n) : n) : (b = (0, r.dP)({}, b, n));
    }
    if (s.A.USE_WEBP && er(V)) {
        C = !0;
        let n = T.A.read(e, V);
        t ? (b.riff = b.riff ? (0, r.dP)({}, b.riff, n) : n) : (b = (0, r.dP)({}, b, n));
    }
    if (s.A.USE_GIF && ei(B)) {
        C = !0;
        let n = S.A.read(e, B);
        t ? (b.gif = b.gif ? (0, r.dP)({}, b.gif, n) : n) : (b = (0, r.dP)({}, b, n));
    }
    let H = v.A.get(b, t);
    H && (t ? (b.composite = H) : (b = (0, r.dP)({}, b, H)));
    let es = (s.A.USE_JPEG || s.A.USE_WEBP) && s.A.USE_EXIF && s.A.USE_THUMBNAIL && y.A.get(e, b.Thumbnail, w);
    if (
        (es ? ((C = !0), (b.Thumbnail = es)) : delete b.Thumbnail,
        O && (t ? (b.file || (b.file = {}), (b.file.FileType = O)) : (b.FileType = O), (C = !0)),
        !C)
    )
        throw new N.A.MetadataMissingError();
    if (n) return Promise.all(R).then(() => b);
    return b;
    function ea(e) {
        t ? (b.icc = e) : (b = (0, r.dP)({}, b, e));
    }
    function eo(e) {
        if (t) {
            for (let t of ["exif", "iptc"]) {
                let n = `__${t}`;
                e[n] && ((b[t] = b[t] ? (0, r.dP)({}, b.exif, e[n]) : e[n]), delete e[n]);
            }
            (b.png = b.png ? (0, r.dP)({}, b.png, e) : e), (b.pngText = b.pngText ? (0, r.dP)({}, b.png, e) : e);
        } else
            (b = (0, r.dP)({}, b, e.__exif ? e.__exif : {}, e.__iptc ? e.__iptc : {}, e)),
                delete b.__exif,
                delete b.__iptc;
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
                    (e.gps.Latitude = (0, a.e7)(e.exif.GPSLatitude.value)),
                    "S" === e.exif.GPSLatitudeRef.value.join("") && (e.gps.Latitude = -e.gps.Latitude);
            } catch (e) {}
        if (e.exif.GPSLongitude && e.exif.GPSLongitudeRef)
            try {
                (e.gps = e.gps || {}),
                    (e.gps.Longitude = (0, a.e7)(e.exif.GPSLongitude.value)),
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
function Q(e) {
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
