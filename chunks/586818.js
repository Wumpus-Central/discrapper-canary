r.d(t, { $z: () => s }),
    r(415506),
    r(410992),
    r(227481),
    r(730884),
    r(20464),
    r(341884),
    r(364341),
    r(629680),
    r(505025),
    r(918970),
    r(121784),
    r(644351),
    r(146733),
    r(190126),
    r(368063),
    r(65234),
    r(111804),
    r(490233),
    r(97749),
    r(388685),
    r(539854);
let o = null,
    n = {
        0: "VP8_ENC_OK",
        1: "VP8_ENC_ERROR_OUT_OF_MEMORY: memory allocation failed",
        2: "VP8_ENC_ERROR_BITSTREAM_OUT_OF_MEMORY: memory error allocating objects",
        3: "VP8_ENC_ERROR_NULL_PARAMETER: null parameter passed",
        4: "VP8_ENC_ERROR_INVALID_CONFIGURATION: configuration is invalid",
        5: "VP8_ENC_ERROR_BAD_DIMENSION: picture has invalid width/height",
        6: "VP8_ENC_ERROR_PARTITION0_OVERFLOW: partition is bigger than 512k",
        7: "VP8_ENC_ERROR_PARTITION_OVERFLOW: partition is bigger than 16M",
        8: "VP8_ENC_ERROR_BAD_WRITE: error while flushing bytes",
        9: "VP8_ENC_ERROR_FILE_TOO_BIG: file is bigger than 4G",
        10: "VP8_ENC_ERROR_USER_ABORT: user abort requested",
        11: "VP8_ENC_ERROR_LAST: list terminator",
    };
function a(e, t) {
    let r = e._WebPAnimEncoderGetError(t);
    if (0 === r) return "";
    let o = "",
        n = 0;
    for (; 0 !== e.HEAPU8[r + n] && n < 256; ) (o += String.fromCharCode(e.HEAPU8[r + n])), n++;
    return o;
}
function i(e, t, r) {
    let o = e._malloc(t);
    if (0 === o) throw Error("Failed to allocate ".concat(t, " bytes for ").concat(r, " - out of WASM memory"));
    return o;
}
async function c() {
    if (null != o) return o;
    try {
        let e = (await r.e("35770").then(r.bind(r, 152989))).default;
        return (o = await e({ locateFile: (e) => (e.endsWith(".wasm") ? new URL(r(432362), r.b).href : e) }));
    } catch (t) {
        let e = Error("WebP module failed to load. Ensure webp_wasm.js and webp_wasm.wasm are built and available.");
        throw ((e.cause = t), e);
    }
}
async function l(e) {
    if (!(e instanceof Uint8Array)) throw Error("webpData must be a Uint8Array");
    if (0 === e.length) throw Error("webpData cannot be empty");
    let t = await c(),
        r = i(t, e.length, "WebP input data");
    t.HEAPU8.set(e, r);
    let o = t._malloc(8);
    if (0 === o) throw (t._free(r), Error("Failed to allocate 8 bytes for WebPData struct - out of WASM memory"));
    (t.HEAPU32[o >> 2] = r), (t.HEAPU32[(o >> 2) + 1] = e.length);
    let n = t._malloc(32);
    if (0 === n)
        throw (
            (t._free(r),
            t._free(o),
            Error("Failed to allocate 32 bytes for WebPAnimDecoderOptions - out of WASM memory"))
        );
    t._WebPAnimDecoderOptionsInitInternal(n, 263);
    let a = t._WebPAnimDecoderNewInternal(o, n, 263);
    if ((t._free(n), 0 === a))
        throw (
            (t._free(r), t._free(o), Error("Failed to create WebP decoder - file may be corrupt or not a valid WebP"))
        );
    try {
        let e = i(t, 32, "WebPAnimInfo");
        t._WebPAnimDecoderGetInfo(a, e);
        let r = t.HEAPU32[e >> 2],
            o = t.HEAPU32[(e >> 2) + 1],
            n = t.HEAPU32[(e >> 2) + 4];
        t._free(e);
        let c = [],
            l = r * o * 4;
        for (; 0 !== t._WebPAnimDecoderHasMoreFrames(a); ) {
            let e = t._malloc(4);
            if (0 === e) throw Error("Failed to allocate 4 bytes for frame buffer pointer - out of WASM memory");
            let n = t._malloc(4);
            if (0 === n)
                throw (t._free(e), Error("Failed to allocate 4 bytes for timestamp pointer - out of WASM memory"));
            let i = t._WebPAnimDecoderGetNext(a, e, n);
            if (0 === i) {
                t._free(e), t._free(n);
                break;
            }
            let f = t.HEAPU32[e >> 2],
                s = t.HEAP32[n >> 2],
                u = new Uint8Array(t.HEAPU8.buffer, f, l).slice();
            c.push({
                data: u,
                timestamp: s,
                width: r,
                height: o,
            }),
                t._free(e),
                t._free(n);
        }
        return {
            frames: c,
            width: r,
            height: o,
            frameCount: n,
        };
    } finally {
        t._WebPAnimDecoderDelete(a), t._free(r), t._free(o);
    }
}
async function f(e, t, r) {
    var o, l, f, s;
    let u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (!Array.isArray(e)) throw Error("frames must be an array");
    if (0 === e.length) throw Error("Cannot encode WebP animation with zero frames");
    if (!Number.isInteger(t) || t <= 0) throw Error("width must be a positive integer, got: ".concat(t));
    if (!Number.isInteger(r) || r <= 0) throw Error("height must be a positive integer, got: ".concat(r));
    let b = t * r * 4;
    for (let o = 0; o < e.length; o++) {
        let n = e[o];
        if (null == n || !(n.data instanceof Uint8Array))
            throw Error("Frame ".concat(o, " must have a 'data' property that is a Uint8Array"));
        if (n.data.length !== b)
            throw Error(
                "Frame "
                    .concat(o, " data size mismatch: expected ")
                    .concat(b, " bytes (")
                    .concat(t, "x")
                    .concat(r, "x4), got ")
                    .concat(n.data.length),
            );
    }
    let m = await c(),
        d = null != (o = u.quality) ? o : 85,
        _ = null != (l = u.method) ? l : 4,
        h = i(m, 128, "WebPAnimEncoderOptions");
    m._WebPAnimEncoderOptionsInitInternal(h, 265), (m.HEAP32[(h >> 2) + 2] = 1), (m.HEAP32[(h >> 2) + 5] = 0);
    let p = m._WebPAnimEncoderNewInternal(t, r, h, 265);
    if ((m._free(h), 0 === p)) throw Error("Failed to create WebP encoder");
    let E = m._malloc(256);
    if (0 === E)
        throw (m._WebPAnimEncoderDelete(p), Error("Failed to allocate 256 bytes for WebPConfig - out of WASM memory"));
    m._WebPConfigInitInternal(E, 0, d, 527), (m.HEAP32[(E >> 2) + 2] = _);
    try {
        for (let o = 0; o < e.length; o++) {
            let i = e[o],
                c = null != (f = i.timestamp) ? f : 100 * o,
                l = m._malloc(512);
            if (0 === l)
                throw Error("Failed to allocate 512 bytes for WebPPicture (frame ".concat(o, ") - out of WASM memory"));
            let s = m._WebPPictureInitInternal(l, 527);
            if (0 === s) throw (m._free(l), Error("Failed to initialize WebPPicture for frame ".concat(o)));
            (m.HEAP32[(l + 8) >> 2] = t), (m.HEAP32[(l + 12) >> 2] = r), (m.HEAP32[l >> 2] = 1);
            let u = m._malloc(i.data.length);
            if (0 === u)
                throw (
                    (m._WebPPictureFree(l),
                    m._free(l),
                    Error(
                        "Failed to allocate "
                            .concat(i.data.length, " bytes for frame ")
                            .concat(o, " RGBA data - out of WASM memory"),
                    ))
                );
            m.HEAPU8.set(i.data, u);
            let b = 4 * t,
                d = m._WebPPictureImportRGBA(l, u, b);
            if ((m._free(u), 0 === d)) {
                let e = (function (e, t) {
                    var r;
                    let o = e.HEAP32[(t + 168) >> 2];
                    return null != (r = n[o]) ? r : "Unknown error code: ".concat(o);
                })(m, l);
                throw (
                    (m._WebPPictureFree(l),
                    m._free(l),
                    Error("Failed to import RGBA data for frame ".concat(o, ": ").concat(e)))
                );
            }
            let _ = m._WebPAnimEncoderAdd(p, l, c, E);
            if ((m._WebPPictureFree(l), m._free(l), 0 === _)) {
                let e = a(m, p);
                throw Error("Failed to add frame ".concat(o, " to WebP encoder: ").concat(e));
            }
        }
        let o = null != (s = e[e.length - 1].timestamp) ? s : (e.length - 1) * 100,
            i = m._WebPAnimEncoderAdd(p, 0, o + 100, 0);
        if (0 === i) {
            let e = a(m, p);
            throw Error("Failed to add final frame marker to WebP encoder: ".concat(e));
        }
        let c = m._malloc(8);
        if (0 === c) throw Error("Failed to allocate 8 bytes for output WebPData struct - out of WASM memory");
        (m.HEAPU32[c >> 2] = 0), (m.HEAPU32[(c >> 2) + 1] = 0);
        let l = m._WebPAnimEncoderAssemble(p, c);
        if (0 === l) {
            let e = a(m, p);
            throw (m._free(c), Error("Failed to assemble WebP animation: ".concat(e)));
        }
        let u = m.HEAPU32[c >> 2],
            b = m.HEAPU32[(c >> 2) + 1],
            d = new Uint8Array(m.HEAPU8.buffer, u, b).slice();
        return m._WebPFree(u), m._free(c), d;
    } finally {
        m._free(E), m._WebPAnimEncoderDelete(p);
    }
}
async function s(e) {
    let {
        webp: t,
        x: r,
        y: o,
        width: n,
        height: a,
        imageRotation: i = 0,
        resizeWidth: c = null,
        resizeHeight: s = null,
        quality: u = 75,
    } = e;
    if (!(t instanceof Uint8Array)) throw Error("webp must be a Uint8Array");
    if (!Number.isInteger(r) || !Number.isInteger(o))
        throw Error("Crop position must be integers, got x=".concat(r, ", y=").concat(o));
    if (!Number.isInteger(n) || n <= 0 || !Number.isInteger(a) || a <= 0)
        throw Error("Crop dimensions must be positive integers, got width=".concat(n, ", height=").concat(a));
    if (r < 0 || o < 0) throw Error("Crop position cannot be negative, got x=".concat(r, ", y=").concat(o));
    let { frames: b, width: m, height: d } = await l(t);
    if (r + n > m || o + a > d)
        throw Error(
            "Crop region ("
                .concat(r, ",")
                .concat(o, ",")
                .concat(n, "x")
                .concat(a, ") exceeds image bounds (")
                .concat(m, "x")
                .concat(d, ")"),
        );
    let _ = b.map((e) => ({
            data: (function (e) {
                let { data: t, origWidth: r, origHeight: o, crop: n } = e,
                    { x: a, y: i, width: c, height: l } = n;
                if (a < 0 || i < 0 || c <= 0 || l <= 0)
                    throw Error(
                        "Invalid crop parameters: x="
                            .concat(a, ", y=")
                            .concat(i, ", width=")
                            .concat(c, ", height=")
                            .concat(l),
                    );
                if (a + c > r || i + l > o)
                    throw Error(
                        "Crop region ("
                            .concat(a, ",")
                            .concat(i, ",")
                            .concat(c, "x")
                            .concat(l, ") exceeds image bounds (")
                            .concat(r, "x")
                            .concat(o, ")"),
                    );
                let f = new Uint8Array(c * l * 4);
                for (let e = 0; e < l; e++) {
                    let o = ((i + e) * r + a) * 4,
                        n = e * c * 4,
                        l = 4 * c;
                    f.set(t.subarray(o, o + l), n);
                }
                return f;
            })({
                data: e.data,
                origWidth: m,
                origHeight: d,
                crop: {
                    x: r,
                    y: o,
                    width: n,
                    height: a,
                },
            }),
            timestamp: e.timestamp,
        })),
        h = n,
        p = a;
    if (
        (0 !== i &&
            ((_ = _.map((e) => ({
                data: (function (e, t, r, o) {
                    let n = ((o % 360) + 360) % 360;
                    if (0 === n)
                        return {
                            data: e,
                            width: t,
                            height: r,
                        };
                    let a = 90 === n || 270 === n ? r : t,
                        i = 90 === n || 270 === n ? t : r,
                        c = new Uint8Array(a * i * 4);
                    for (let o = 0; o < r; o++)
                        for (let i = 0; i < t; i++) {
                            let l,
                                f,
                                s = (o * t + i) * 4;
                            switch (n) {
                                case 90:
                                    (l = r - 1 - o), (f = i);
                                    break;
                                case 180:
                                    (l = t - 1 - i), (f = r - 1 - o);
                                    break;
                                case 270:
                                    (l = o), (f = t - 1 - i);
                                    break;
                                default:
                                    (l = i), (f = o);
                            }
                            let u = (f * a + l) * 4;
                            (c[u] = e[s]), (c[u + 1] = e[s + 1]), (c[u + 2] = e[s + 2]), (c[u + 3] = e[s + 3]);
                        }
                    return {
                        data: c,
                        width: a,
                        height: i,
                    };
                })(e.data, h, p, i).data,
                timestamp: e.timestamp,
            }))),
            (90 === i || 270 === i) && ([h, p] = [p, h])),
        null != c || null != s)
    ) {
        let e = null != c ? c : h,
            t = null != s ? s : p;
        null != c && null == s
            ? (t = Math.round((p / h) * c))
            : null != s && null == c && (e = Math.round((h / p) * s)),
            (e !== h || t !== p) &&
                ((_ = _.map((r) => ({
                    data: (function (e, t, r, o, n) {
                        if (o === t && n === r) return e;
                        let a = new Uint8Array(o * n * 4);
                        for (let i = 0; i < n; i++)
                            for (let c = 0; c < o; c++) {
                                let l = Math.floor((c * t) / o),
                                    f = (Math.floor((i * r) / n) * t + l) * 4,
                                    s = (i * o + c) * 4;
                                (a[s] = e[f]), (a[s + 1] = e[f + 1]), (a[s + 2] = e[f + 2]), (a[s + 3] = e[f + 3]);
                            }
                        return a;
                    })(r.data, h, p, e, t),
                    timestamp: r.timestamp,
                }))),
                (h = e),
                (p = t));
    }
    return await f(_, h, p, { quality: u });
}
