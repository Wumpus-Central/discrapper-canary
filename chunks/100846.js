r.d(t, { a6: () => f }),
    r(65821),
    r(927092),
    r(212978),
    r(201528),
    r(393431),
    r(752391),
    r(532706),
    r(42231),
    r(232424),
    r(757074),
    r(949626),
    r(767709),
    r(65162),
    r(896048),
    r(693327),
    r(554719),
    r(680155),
    r(323874),
    r(14289),
    r(35956),
    r(321073);
let o = null,
    a = {
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
function n(e, t) {
    let r = e._WebPAnimEncoderGetError(t);
    if (0 === r) return "";
    let o = "",
        a = 0;
    for (; 0 !== e.HEAPU8[r + a] && a < 256; ) (o += String.fromCharCode(e.HEAPU8[r + a])), a++;
    return o;
}
function i(e, t, r) {
    let o = e._malloc(t);
    if (0 === o) throw Error("Failed to allocate ".concat(t, " bytes for ").concat(r, " - out of WASM memory"));
    return o;
}
async function l() {
    if (null != o) return o;
    try {
        let e = (await r.e("37971").then(r.bind(r, 543198))).default;
        return (o = await e({ locateFile: (e) => (e.endsWith(".wasm") ? new URL(r(14927), r.b).href : e) }));
    } catch (t) {
        let e = Error("WebP module failed to load. Ensure webp_wasm.js and webp_wasm.wasm are built and available.");
        throw ((e.cause = t), e);
    }
}
async function c(e) {
    if (!(e instanceof Uint8Array)) throw Error("webpData must be a Uint8Array");
    if (0 === e.length) throw Error("webpData cannot be empty");
    let t = await l(),
        r = i(t, e.length, "WebP input data");
    t.HEAPU8.set(e, r);
    let o = t._malloc(8);
    if (0 === o) throw (t._free(r), Error("Failed to allocate 8 bytes for WebPData struct - out of WASM memory"));
    (t.HEAPU32[o >> 2] = r), (t.HEAPU32[(o >> 2) + 1] = e.length);
    let a = t._malloc(32);
    if (0 === a)
        throw (
            (t._free(r),
            t._free(o),
            Error("Failed to allocate 32 bytes for WebPAnimDecoderOptions - out of WASM memory"))
        );
    t._WebPAnimDecoderOptionsInitInternal(a, 263);
    let n = t._WebPAnimDecoderNewInternal(o, a, 263);
    if ((t._free(a), 0 === n))
        throw (
            (t._free(r), t._free(o), Error("Failed to create WebP decoder - file may be corrupt or not a valid WebP"))
        );
    try {
        let e = i(t, 32, "WebPAnimInfo");
        t._WebPAnimDecoderGetInfo(n, e);
        let r = t.HEAPU32[e >> 2],
            o = t.HEAPU32[(e >> 2) + 1],
            a = t.HEAPU32[(e >> 2) + 4];
        t._free(e);
        let l = [],
            c = r * o * 4;
        for (; 0 !== t._WebPAnimDecoderHasMoreFrames(n); ) {
            let e = t._malloc(4);
            if (0 === e) throw Error("Failed to allocate 4 bytes for frame buffer pointer - out of WASM memory");
            let a = t._malloc(4);
            if (0 === a)
                throw (t._free(e), Error("Failed to allocate 4 bytes for timestamp pointer - out of WASM memory"));
            let i = t._WebPAnimDecoderGetNext(n, e, a);
            if (0 === i) {
                t._free(e), t._free(a);
                break;
            }
            let s = t.HEAPU32[e >> 2],
                f = t.HEAP32[a >> 2],
                u = new Uint8Array(t.HEAPU8.buffer, s, c).slice();
            l.push({
                data: u,
                timestamp: f,
                width: r,
                height: o,
            }),
                t._free(e),
                t._free(a);
        }
        return {
            frames: l,
            width: r,
            height: o,
            frameCount: a,
        };
    } finally {
        t._WebPAnimDecoderDelete(n), t._free(r), t._free(o);
    }
}
async function s(e, t, r) {
    var o, c, s, f;
    let u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (!Array.isArray(e)) throw Error("frames must be an array");
    if (0 === e.length) throw Error("Cannot encode WebP animation with zero frames");
    if (!Number.isInteger(t) || t <= 0) throw Error("width must be a positive integer, got: ".concat(t));
    if (!Number.isInteger(r) || r <= 0) throw Error("height must be a positive integer, got: ".concat(r));
    let m = t * r * 4;
    for (let o = 0; o < e.length; o++) {
        let a = e[o];
        if (null == a || !(a.data instanceof Uint8Array))
            throw Error("Frame ".concat(o, " must have a 'data' property that is a Uint8Array"));
        if (a.data.length !== m)
            throw Error(
                "Frame "
                    .concat(o, " data size mismatch: expected ")
                    .concat(m, " bytes (")
                    .concat(t, "x")
                    .concat(r, "x4), got ")
                    .concat(a.data.length),
            );
    }
    let d = await l(),
        b = null != (o = u.quality) ? o : 85,
        _ = null != (c = u.method) ? c : 4,
        h = i(d, 128, "WebPAnimEncoderOptions");
    d._WebPAnimEncoderOptionsInitInternal(h, 265), (d.HEAP32[(h >> 2) + 2] = 1), (d.HEAP32[(h >> 2) + 5] = 0);
    let p = d._WebPAnimEncoderNewInternal(t, r, h, 265);
    if ((d._free(h), 0 === p)) throw Error("Failed to create WebP encoder");
    let E = d._malloc(256);
    if (0 === E)
        throw (d._WebPAnimEncoderDelete(p), Error("Failed to allocate 256 bytes for WebPConfig - out of WASM memory"));
    d._WebPConfigInitInternal(E, 0, b, 527), (d.HEAP32[(E >> 2) + 2] = _);
    try {
        for (let o = 0; o < e.length; o++) {
            let i = e[o],
                l = null != (f = i.timestamp) ? f : 100 * o,
                c = d._malloc(512);
            if (0 === c)
                throw Error("Failed to allocate 512 bytes for WebPPicture (frame ".concat(o, ") - out of WASM memory"));
            let s = d._WebPPictureInitInternal(c, 527);
            if (0 === s) throw (d._free(c), Error("Failed to initialize WebPPicture for frame ".concat(o)));
            (d.HEAP32[(c + 8) >> 2] = t), (d.HEAP32[(c + 12) >> 2] = r), (d.HEAP32[c >> 2] = 1);
            let u = d._malloc(i.data.length);
            if (0 === u)
                throw (
                    (d._WebPPictureFree(c),
                    d._free(c),
                    Error(
                        "Failed to allocate "
                            .concat(i.data.length, " bytes for frame ")
                            .concat(o, " RGBA data - out of WASM memory"),
                    ))
                );
            d.HEAPU8.set(i.data, u);
            let m = 4 * t,
                b = d._WebPPictureImportRGBA(c, u, m);
            if ((d._free(u), 0 === b)) {
                let e = (function (e, t) {
                    var r;
                    let o = e.HEAP32[(t + 168) >> 2];
                    return null != (r = a[o]) ? r : "Unknown error code: ".concat(o);
                })(d, c);
                throw (
                    (d._WebPPictureFree(c),
                    d._free(c),
                    Error("Failed to import RGBA data for frame ".concat(o, ": ").concat(e)))
                );
            }
            let _ = d._WebPAnimEncoderAdd(p, c, l, E);
            if ((d._WebPPictureFree(c), d._free(c), 0 === _)) {
                let e = n(d, p);
                throw Error("Failed to add frame ".concat(o, " to WebP encoder: ").concat(e));
            }
        }
        let o = null != (s = e[e.length - 1].timestamp) ? s : (e.length - 1) * 100,
            i = d._WebPAnimEncoderAdd(p, 0, o + 100, 0);
        if (0 === i) {
            let e = n(d, p);
            throw Error("Failed to add final frame marker to WebP encoder: ".concat(e));
        }
        let l = d._malloc(8);
        if (0 === l) throw Error("Failed to allocate 8 bytes for output WebPData struct - out of WASM memory");
        (d.HEAPU32[l >> 2] = 0), (d.HEAPU32[(l >> 2) + 1] = 0);
        let c = d._WebPAnimEncoderAssemble(p, l);
        if (0 === c) {
            let e = n(d, p);
            throw (d._free(l), Error("Failed to assemble WebP animation: ".concat(e)));
        }
        let u = d.HEAPU32[l >> 2],
            m = d.HEAPU32[(l >> 2) + 1],
            b = new Uint8Array(d.HEAPU8.buffer, u, m).slice();
        return d._WebPFree(u), d._free(l), b;
    } finally {
        d._free(E), d._WebPAnimEncoderDelete(p);
    }
}
async function f(e) {
    let {
        webp: t,
        x: r,
        y: o,
        width: a,
        height: n,
        imageRotation: i = 0,
        resizeWidth: l = null,
        resizeHeight: f = null,
        quality: u = 75,
    } = e;
    if (!(t instanceof Uint8Array)) throw Error("webp must be a Uint8Array");
    if (!Number.isInteger(r) || !Number.isInteger(o))
        throw Error("Crop position must be integers, got x=".concat(r, ", y=").concat(o));
    if (!Number.isInteger(a) || a <= 0 || !Number.isInteger(n) || n <= 0)
        throw Error("Crop dimensions must be positive integers, got width=".concat(a, ", height=").concat(n));
    if (r < 0 || o < 0) throw Error("Crop position cannot be negative, got x=".concat(r, ", y=").concat(o));
    let { frames: m, width: d, height: b } = await c(t);
    if (r + a > d || o + n > b)
        throw Error(
            "Crop region ("
                .concat(r, ",")
                .concat(o, ",")
                .concat(a, "x")
                .concat(n, ") exceeds image bounds (")
                .concat(d, "x")
                .concat(b, ")"),
        );
    let _ = m.map((e) => ({
            data: (function (e) {
                let { data: t, origWidth: r, origHeight: o, crop: a } = e,
                    { x: n, y: i, width: l, height: c } = a;
                if (n < 0 || i < 0 || l <= 0 || c <= 0)
                    throw Error(
                        "Invalid crop parameters: x="
                            .concat(n, ", y=")
                            .concat(i, ", width=")
                            .concat(l, ", height=")
                            .concat(c),
                    );
                if (n + l > r || i + c > o)
                    throw Error(
                        "Crop region ("
                            .concat(n, ",")
                            .concat(i, ",")
                            .concat(l, "x")
                            .concat(c, ") exceeds image bounds (")
                            .concat(r, "x")
                            .concat(o, ")"),
                    );
                let s = new Uint8Array(l * c * 4);
                for (let e = 0; e < c; e++) {
                    let o = ((i + e) * r + n) * 4,
                        a = e * l * 4,
                        c = 4 * l;
                    s.set(t.subarray(o, o + c), a);
                }
                return s;
            })({
                data: e.data,
                origWidth: d,
                origHeight: b,
                crop: {
                    x: r,
                    y: o,
                    width: a,
                    height: n,
                },
            }),
            timestamp: e.timestamp,
        })),
        h = a,
        p = n;
    if (
        (0 !== i &&
            ((_ = _.map((e) => ({
                data: (function (e, t, r, o) {
                    let a = ((o % 360) + 360) % 360;
                    if (0 === a)
                        return {
                            data: e,
                            width: t,
                            height: r,
                        };
                    let n = 90 === a || 270 === a ? r : t,
                        i = 90 === a || 270 === a ? t : r,
                        l = new Uint8Array(n * i * 4);
                    for (let o = 0; o < r; o++)
                        for (let i = 0; i < t; i++) {
                            let c,
                                s,
                                f = (o * t + i) * 4;
                            switch (a) {
                                case 90:
                                    (c = r - 1 - o), (s = i);
                                    break;
                                case 180:
                                    (c = t - 1 - i), (s = r - 1 - o);
                                    break;
                                case 270:
                                    (c = o), (s = t - 1 - i);
                                    break;
                                default:
                                    (c = i), (s = o);
                            }
                            let u = (s * n + c) * 4;
                            (l[u] = e[f]), (l[u + 1] = e[f + 1]), (l[u + 2] = e[f + 2]), (l[u + 3] = e[f + 3]);
                        }
                    return {
                        data: l,
                        width: n,
                        height: i,
                    };
                })(e.data, h, p, i).data,
                timestamp: e.timestamp,
            }))),
            (90 === i || 270 === i) && ([h, p] = [p, h])),
        null != l || null != f)
    ) {
        let e = null != l ? l : h,
            t = null != f ? f : p;
        null != l && null == f
            ? (t = Math.round((p / h) * l))
            : null != f && null == l && (e = Math.round((h / p) * f)),
            (e !== h || t !== p) &&
                ((_ = _.map((r) => ({
                    data: (function (e, t, r, o, a) {
                        if (o === t && a === r) return e;
                        let n = new Uint8Array(o * a * 4);
                        for (let i = 0; i < a; i++)
                            for (let l = 0; l < o; l++) {
                                let c = Math.floor((l * t) / o),
                                    s = (Math.floor((i * r) / a) * t + c) * 4,
                                    f = (i * o + l) * 4;
                                (n[f] = e[s]), (n[f + 1] = e[s + 1]), (n[f + 2] = e[s + 2]), (n[f + 3] = e[s + 3]);
                            }
                        return n;
                    })(r.data, h, p, e, t),
                    timestamp: r.timestamp,
                }))),
                (h = e),
                (p = t));
    }
    return await s(_, h, p, { quality: u });
}
