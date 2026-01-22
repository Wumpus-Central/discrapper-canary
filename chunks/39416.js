n.r(t),
    n.d(t, {
        default: () => C,
        errors: () => N,
        load: () => R,
        loadView: () => H,
    });
var r = n(643479),
    i = n(504925),
    a = n(761799),
    s = n(723727),
    o = n(601205),
    l = n(664741),
    c = n(226601),
    u = n(344470),
    d = n(766493),
    f = n(525012),
    p = n(242389),
    _ = n(842962),
    h = n(312597),
    m = n(116811),
    g = n(124864),
    E = n(284776),
    b = n(201147),
    y = n(147687),
    O = n(205710),
    A = n(479533),
    v = n(67286),
    S = n(906037),
    I = n(306827),
    T = n(264572).Buffer;
let C = {
        load: R,
        loadView: H,
        errors: I.A,
    },
    N = I.A;
function R(e, t = {}) {
    return w(e)
        ? ((t.async = !0), P(e, t).then((e) => V(e, t)))
        : U(e)
          ? ((t.async = !0), G(e).then((e) => V(e, t)))
          : V(e, t);
}
function w(e) {
    return "string" == typeof e;
}
function P(e, t) {
    return /^\w+:\/\//.test(e)
        ? "u" > typeof fetch
            ? D(e, t)
            : x(e, t)
        : j(e)
          ? Promise.resolve((0, r.C5)(e))
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
                    e.on("data", (e) => t.push(T.from(e))),
                        e.on("error", (e) => r(e)),
                        e.on("end", () => n(T.concat(t)));
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
        i.open(e, (a, s) => {
            a
                ? r(a)
                : i.stat(e, (a, o) => {
                      if (a) r(a);
                      else {
                          let a = Math.min(o.size, void 0 !== t ? t : o.size),
                              l = T.alloc(a),
                              c = {
                                  buffer: l,
                                  length: a,
                              };
                          i.read(s, c, (t) => {
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
function k() {
    try {
        return require("fs");
    } catch (e) {
        return;
    }
}
function U(e) {
    return "u" > typeof File && e instanceof File;
}
function G(e) {
    return new Promise((t, n) => {
        let r = new FileReader();
        (r.onload = (e) => t(e.target.result)), (r.onerror = () => n(r.error)), r.readAsArrayBuffer(e);
    });
}
function V(e, t) {
    return F(e) && (e = new Uint8Array(e).buffer), H(B(e), t);
}
function F(e) {
    try {
        return T.isBuffer(e);
    } catch (e) {
        return !1;
    }
}
function B(e) {
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
    let T = !1,
        C = {},
        N = [],
        {
            fileType: R,
            fileDataOffset: w,
            jfifDataOffset: P,
            tiffHeaderOffset: D,
            iptcDataOffset: x,
            xmpChunks: L,
            iccChunks: j,
            mpfDataOffset: M,
            pngHeaderOffset: k,
            pngTextChunks: U,
            pngChunkOffsets: G,
            vp8xChunkOffset: V,
            gifHeaderOffset: F,
        } = o.A.parseAppMarkers(e, n);
    if (a.A.USE_JPEG && a.A.USE_FILE && Y(w)) {
        T = !0;
        let n = u.A.read(e, w);
        t ? (C.file = n) : (C = (0, r.dP)({}, C, n));
    }
    if (a.A.USE_JPEG && a.A.USE_JFIF && W(P)) {
        T = !0;
        let n = d.A.read(e, P);
        t ? (C.jfif = n) : (C = (0, r.dP)({}, C, n));
    }
    if (a.A.USE_EXIF && K(D)) {
        T = !0;
        let { tags: n, byteOrder: o } = l.A.read(e, D, i);
        if (
            (n.Thumbnail && ((C.Thumbnail = n.Thumbnail), delete n.Thumbnail),
            t ? ((C.exif = n), z(C)) : (C = (0, r.dP)({}, C, n)),
            a.A.USE_TIFF && a.A.USE_IPTC && n["IPTC-NAA"] && !q(x))
        ) {
            let e = f.A.read(n["IPTC-NAA"].value, 0, i);
            t ? (C.iptc = e) : (C = (0, r.dP)({}, C, e));
        }
        if (a.A.USE_TIFF && a.A.USE_XMP && n.ApplicationNotes && !X(L)) {
            let e = p.A.read((0, r.YF)(n.ApplicationNotes.value), void 0, s);
            t ? (C.xmp = e) : (delete e._raw, (C = (0, r.dP)({}, C, e)));
        }
        if (a.A.USE_PHOTOSHOP && n.ImageSourceData && n.PhotoshopSettings) {
            let e = _.A.read(n.PhotoshopSettings.value, i);
            t ? (C.photoshop = e) : (C = (0, r.dP)({}, C, e));
        }
        if (a.A.USE_TIFF && a.A.USE_ICC && n.ICC_Profile && !Z(j)) {
            let e = h.A.read(n.ICC_Profile.value, [
                {
                    offset: 0,
                    length: n.ICC_Profile.value.length,
                    chunkNumber: 1,
                    chunksTotal: 1,
                },
            ]);
            t ? (C.icc = e) : (C = (0, r.dP)({}, C, e));
        }
        if (a.A.USE_MAKER_NOTES && n.MakerNote) {
            if (Q(n)) {
                let a = m.A.read(e, D, n.MakerNote.__offset, o, i);
                t ? (C.makerNotes = a) : (C = (0, r.dP)({}, C, a));
            } else if ($(n)) {
                let a = g.A.read(e, D, n.MakerNote.__offset, i);
                t ? (C.makerNotes = a) : (C = (0, r.dP)({}, C, a));
            }
        }
        n.MakerNote && delete n.MakerNote.__offset;
    }
    if (a.A.USE_JPEG && a.A.USE_IPTC && q(x)) {
        T = !0;
        let n = f.A.read(e, x, i);
        t ? (C.iptc = n) : (C = (0, r.dP)({}, C, n));
    }
    if (a.A.USE_XMP && X(L)) {
        T = !0;
        let n = p.A.read(e, L, s);
        t ? (C.xmp = n) : (delete n._raw, (C = (0, r.dP)({}, C, n)));
    }
    if ((a.A.USE_JPEG || a.A.USE_WEBP) && a.A.USE_ICC && Z(j)) {
        T = !0;
        let t = h.A.read(e, j, n);
        t instanceof Promise ? N.push(t.then(es)) : es(t);
    }
    if (a.A.USE_MPF && J(M)) {
        T = !0;
        let n = c.A.read(e, M, i);
        t ? (C.mpf = n) : (C = (0, r.dP)({}, C, n));
    }
    if (a.A.USE_PNG && a.A.USE_PNG_FILE && ee(k)) {
        T = !0;
        let n = E.A.read(e, k);
        t ? ((C.png = C.png ? (0, r.dP)({}, C.png, n) : n), (C.pngFile = n)) : (C = (0, r.dP)({}, C, n));
    }
    if (a.A.USE_PNG && et(U)) {
        T = !0;
        let { readTags: t, readTagsPromise: r } = b.A.read(e, U, n, i);
        eo(t), r && N.push(r.then((e) => e.forEach(eo)));
    }
    if (a.A.USE_PNG && en(G)) {
        T = !0;
        let n = y.A.read(e, G);
        t ? (C.png = C.png ? (0, r.dP)({}, C.png, n) : n) : (C = (0, r.dP)({}, C, n));
    }
    if (a.A.USE_WEBP && er(V)) {
        T = !0;
        let n = O.A.read(e, V);
        t ? (C.riff = C.riff ? (0, r.dP)({}, C.riff, n) : n) : (C = (0, r.dP)({}, C, n));
    }
    if (a.A.USE_GIF && ei(F)) {
        T = !0;
        let n = A.A.read(e, F);
        t ? (C.gif = C.gif ? (0, r.dP)({}, C.gif, n) : n) : (C = (0, r.dP)({}, C, n));
    }
    let B = S.A.get(C, t);
    B && (t ? (C.composite = B) : (C = (0, r.dP)({}, C, B)));
    let ea = (a.A.USE_JPEG || a.A.USE_WEBP) && a.A.USE_EXIF && a.A.USE_THUMBNAIL && v.A.get(e, C.Thumbnail, D);
    if (
        (ea ? ((T = !0), (C.Thumbnail = ea)) : delete C.Thumbnail,
        R && (t ? (C.file || (C.file = {}), (C.file.FileType = R)) : (C.FileType = R), (T = !0)),
        !T)
    )
        throw new I.A.MetadataMissingError();
    if (n) return Promise.all(N).then(() => C);
    return C;
    function es(e) {
        t ? (C.icc = e) : (C = (0, r.dP)({}, C, e));
    }
    function eo(e) {
        if (t) {
            for (let t of ["exif", "iptc"]) {
                let n = `__${t}`;
                e[n] && ((C[t] = C[t] ? (0, r.dP)({}, C.exif, e[n]) : e[n]), delete e[n]);
            }
            (C.png = C.png ? (0, r.dP)({}, C.png, e) : e), (C.pngText = C.pngText ? (0, r.dP)({}, C.png, e) : e);
        } else
            (C = (0, r.dP)({}, C, e.__exif ? e.__exif : {}, e.__iptc ? e.__iptc : {}, e)),
                delete C.__exif,
                delete C.__iptc;
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
function $(e) {
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
