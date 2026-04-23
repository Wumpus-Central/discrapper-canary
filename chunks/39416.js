i.r(t), i.d(t, { default: () => x, errors: () => E, load: () => M, loadView: () => O });
var n = i(643479),
    r = i(504925),
    o = i(761799),
    a = i(723727),
    s = i(601205),
    l = i(664741),
    u = i(226601),
    c = i(344470),
    d = i(766493),
    f = i(525012),
    p = i(242389),
    m = i(842962),
    g = i(312597),
    h = i(116811),
    y = i(124864),
    A = i(284776),
    v = i(201147),
    T = i(147687),
    b = i(205710),
    P = i(479533),
    S = i(67286),
    F = i(906037),
    I = i(306827),
    C = i(264572).Buffer;
let x = { load: M, loadView: O, errors: I.A },
    E = I.A;
function M(e, t = {}) {
    var i, r;
    return "string" == typeof e
        ? ((t.async = !0),
          (function (e, t) {
              var i;
              if (/^\w+:\/\//.test(e))
                  return "u" > typeof fetch
                      ? (function (e, { length: t } = {}) {
                            let i = { method: "GET" };
                            return (
                                Number.isInteger(t) && t >= 0 && (i.headers = { range: `bytes=0-${t - 1}` }),
                                fetch(e, i).then((e) => e.arrayBuffer())
                            );
                        })(e, t)
                      : (function (e, { length: t } = {}) {
                            return new Promise((i, n) => {
                                var r;
                                let o = {};
                                Number.isInteger(t) && t >= 0 && (o.headers = { range: `bytes=0-${t - 1}` }),
                                    ((r = e), /^https:\/\//.test(r) ? require("https").get : require("http").get)(
                                        e,
                                        o,
                                        (e) => {
                                            if (e.statusCode >= 200 && e.statusCode <= 299) {
                                                let t = [];
                                                e.on("data", (e) => t.push(C.from(e))),
                                                    e.on("error", (e) => n(e)),
                                                    e.on("end", () => i(C.concat(t)));
                                            } else
                                                n(`Could not fetch file: ${e.statusCode} ${e.statusMessage}`),
                                                    e.resume();
                                        },
                                    ).on("error", (e) => n(e));
                            });
                        })(e, t);
              return ((i = e), /^data:[^;,]*(;base64)?,/.test(i))
                  ? Promise.resolve((0, n.C5)(e))
                  : (function (e, { length: t } = {}) {
                        return new Promise((i, n) => {
                            let r = (function () {
                                try {
                                    return require("fs");
                                } catch (e) {
                                    return;
                                }
                            })();
                            r.open(e, (o, a) => {
                                o
                                    ? n(o)
                                    : r.stat(e, (o, s) => {
                                          if (o) n(o);
                                          else {
                                              let o = Math.min(s.size, void 0 !== t ? t : s.size),
                                                  l = C.alloc(o);
                                              r.read(a, { buffer: l, length: o }, (t) => {
                                                  t
                                                      ? n(t)
                                                      : r.close(a, (t) => {
                                                            t && console.warn(`Could not close file ${e}:`, t), i(l);
                                                        });
                                              });
                                          }
                                      });
                            });
                        });
                    })(e, t);
          })(e, t).then((e) => U(e, t)))
        : ((i = e), "u" > typeof File && i instanceof File)
          ? ((t.async = !0),
            ((r = e),
            new Promise((e, t) => {
                let i = new FileReader();
                (i.onload = (t) => e(t.target.result)), (i.onerror = () => t(i.error)), i.readAsArrayBuffer(r);
            })).then((e) => U(e, t)))
          : U(e, t);
}
function U(e, t) {
    return (
        (function (e) {
            try {
                return C.isBuffer(e);
            } catch (e) {
                return !1;
            }
        })(e) && (e = new Uint8Array(e).buffer),
        O(
            (function (e) {
                try {
                    return new DataView(e);
                } catch (t) {
                    return new r.A(e);
                }
            })(e),
            t,
        )
    );
}
function O(
    e,
    { expanded: t = !1, async: i = !1, includeUnknown: r = !1, domParser: C } = {
        expanded: !1,
        async: !1,
        includeUnknown: !1,
        domParser: void 0,
    },
) {
    let x = !1,
        E = {},
        M = [],
        {
            fileType: U,
            fileDataOffset: L,
            jfifDataOffset: _,
            tiffHeaderOffset: D,
            iptcDataOffset: R,
            xmpChunks: B,
            iccChunks: N,
            mpfDataOffset: G,
            pngHeaderOffset: j,
            pngTextChunks: q,
            pngChunkOffsets: V,
            vp8xChunkOffset: z,
            gifHeaderOffset: H,
        } = s.A.parseAppMarkers(e, i);
    if (o.A.USE_JPEG && o.A.USE_FILE && void 0 !== L) {
        x = !0;
        let i = c.A.read(e, L);
        t ? (E.file = i) : (E = (0, n.dP)({}, E, i));
    }
    if (o.A.USE_JPEG && o.A.USE_JFIF && void 0 !== _) {
        x = !0;
        let i = d.A.read(e, _);
        t ? (E.jfif = i) : (E = (0, n.dP)({}, E, i));
    }
    if (o.A.USE_EXIF && void 0 !== D) {
        x = !0;
        let { tags: i, byteOrder: s } = l.A.read(e, D, r);
        if (
            (i.Thumbnail && ((E.Thumbnail = i.Thumbnail), delete i.Thumbnail),
            t
                ? ((E.exif = i),
                  (function (e) {
                      if (e.exif) {
                          if (e.exif.GPSLatitude && e.exif.GPSLatitudeRef)
                              try {
                                  (e.gps = e.gps || {}),
                                      (e.gps.Latitude = (0, a.e7)(e.exif.GPSLatitude.value)),
                                      "S" === e.exif.GPSLatitudeRef.value.join("") &&
                                          (e.gps.Latitude = -e.gps.Latitude);
                              } catch (e) {}
                          if (e.exif.GPSLongitude && e.exif.GPSLongitudeRef)
                              try {
                                  (e.gps = e.gps || {}),
                                      (e.gps.Longitude = (0, a.e7)(e.exif.GPSLongitude.value)),
                                      "W" === e.exif.GPSLongitudeRef.value.join("") &&
                                          (e.gps.Longitude = -e.gps.Longitude);
                              } catch (e) {}
                          if (e.exif.GPSAltitude && e.exif.GPSAltitudeRef)
                              try {
                                  (e.gps = e.gps || {}),
                                      (e.gps.Altitude = e.exif.GPSAltitude.value[0] / e.exif.GPSAltitude.value[1]),
                                      1 === e.exif.GPSAltitudeRef.value && (e.gps.Altitude = -e.gps.Altitude);
                              } catch (e) {}
                      }
                  })(E))
                : (E = (0, n.dP)({}, E, i)),
            o.A.USE_TIFF && o.A.USE_IPTC && i["IPTC-NAA"] && void 0 === R)
        ) {
            let e = f.A.read(i["IPTC-NAA"].value, 0, r);
            t ? (E.iptc = e) : (E = (0, n.dP)({}, E, e));
        }
        if (o.A.USE_TIFF && o.A.USE_XMP && i.ApplicationNotes && !k(B)) {
            let e = p.A.read((0, n.YF)(i.ApplicationNotes.value), void 0, C);
            t ? (E.xmp = e) : (delete e._raw, (E = (0, n.dP)({}, E, e)));
        }
        if (o.A.USE_PHOTOSHOP && i.ImageSourceData && i.PhotoshopSettings) {
            let e = m.A.read(i.PhotoshopSettings.value, r);
            t ? (E.photoshop = e) : (E = (0, n.dP)({}, E, e));
        }
        if (o.A.USE_TIFF && o.A.USE_ICC && i.ICC_Profile && !w(N)) {
            let e = g.A.read(i.ICC_Profile.value, [
                { offset: 0, length: i.ICC_Profile.value.length, chunkNumber: 1, chunksTotal: 1 },
            ]);
            t ? (E.icc = e) : (E = (0, n.dP)({}, E, e));
        }
        if (o.A.USE_MAKER_NOTES && i.MakerNote) {
            var W, $;
            if (
                (W = i).Make &&
                W.Make.value &&
                Array.isArray(W.Make.value) &&
                "Canon" === W.Make.value[0] &&
                W.MakerNote &&
                W.MakerNote.__offset
            ) {
                let o = h.A.read(e, D, i.MakerNote.__offset, s, r);
                t ? (E.makerNotes = o) : (E = (0, n.dP)({}, E, o));
            } else {
                let o;
                if (
                    ((o = "PENTAX "),
                    ($ = i).MakerNote.value.length > o.length &&
                        (0, n.YF)($.MakerNote.value.slice(0, o.length)) === o &&
                        $.MakerNote.__offset)
                ) {
                    let o = y.A.read(e, D, i.MakerNote.__offset, r);
                    t ? (E.makerNotes = o) : (E = (0, n.dP)({}, E, o));
                }
            }
        }
        i.MakerNote && delete i.MakerNote.__offset;
    }
    if (o.A.USE_JPEG && o.A.USE_IPTC && void 0 !== R) {
        x = !0;
        let i = f.A.read(e, R, r);
        t ? (E.iptc = i) : (E = (0, n.dP)({}, E, i));
    }
    if (o.A.USE_XMP && k(B)) {
        x = !0;
        let i = p.A.read(e, B, C);
        t ? (E.xmp = i) : (delete i._raw, (E = (0, n.dP)({}, E, i)));
    }
    if ((o.A.USE_JPEG || o.A.USE_WEBP) && o.A.USE_ICC && w(N)) {
        x = !0;
        let t = g.A.read(e, N, i);
        t instanceof Promise ? M.push(t.then(Z)) : Z(t);
    }
    if (o.A.USE_MPF && void 0 !== G) {
        x = !0;
        let i = u.A.read(e, G, r);
        t ? (E.mpf = i) : (E = (0, n.dP)({}, E, i));
    }
    if (o.A.USE_PNG && o.A.USE_PNG_FILE && void 0 !== j) {
        x = !0;
        let i = A.A.read(e, j);
        t ? ((E.png = E.png ? (0, n.dP)({}, E.png, i) : i), (E.pngFile = i)) : (E = (0, n.dP)({}, E, i));
    }
    if (o.A.USE_PNG && void 0 !== q) {
        x = !0;
        let { readTags: t, readTagsPromise: n } = v.A.read(e, q, i, r);
        K(t), n && M.push(n.then((e) => e.forEach(K)));
    }
    if (o.A.USE_PNG && void 0 !== V) {
        x = !0;
        let i = T.A.read(e, V);
        t ? (E.png = E.png ? (0, n.dP)({}, E.png, i) : i) : (E = (0, n.dP)({}, E, i));
    }
    if (o.A.USE_WEBP && void 0 !== z) {
        x = !0;
        let i = b.A.read(e, z);
        t ? (E.riff = E.riff ? (0, n.dP)({}, E.riff, i) : i) : (E = (0, n.dP)({}, E, i));
    }
    if (o.A.USE_GIF && void 0 !== H) {
        x = !0;
        let i = P.A.read(e, H);
        t ? (E.gif = E.gif ? (0, n.dP)({}, E.gif, i) : i) : (E = (0, n.dP)({}, E, i));
    }
    let J = F.A.get(E, t);
    J && (t ? (E.composite = J) : (E = (0, n.dP)({}, E, J)));
    let X = (o.A.USE_JPEG || o.A.USE_WEBP) && o.A.USE_EXIF && o.A.USE_THUMBNAIL && S.A.get(e, E.Thumbnail, D);
    if (
        (X ? ((x = !0), (E.Thumbnail = X)) : delete E.Thumbnail,
        U && (t ? (E.file || (E.file = {}), (E.file.FileType = U)) : (E.FileType = U), (x = !0)),
        !x)
    )
        throw new I.A.MetadataMissingError();
    if (i) return Promise.all(M).then(() => E);
    return E;
    function Z(e) {
        t ? (E.icc = e) : (E = (0, n.dP)({}, E, e));
    }
    function K(e) {
        if (t) {
            for (let t of ["exif", "iptc"]) {
                let i = `__${t}`;
                e[i] && ((E[t] = E[t] ? (0, n.dP)({}, E.exif, e[i]) : e[i]), delete e[i]);
            }
            (E.png = E.png ? (0, n.dP)({}, E.png, e) : e), (E.pngText = E.pngText ? (0, n.dP)({}, E.png, e) : e);
        } else
            (E = (0, n.dP)({}, E, e.__exif ? e.__exif : {}, e.__iptc ? e.__iptc : {}, e)),
                delete E.__exif,
                delete E.__iptc;
    }
}
function k(e) {
    return Array.isArray(e) && e.length > 0;
}
function w(e) {
    return Array.isArray(e) && e.length > 0;
}
