function o() {
    return t.e(447580).then(t.bind(t, 844183));
}
(t(393431), t(532706), t(42231), t(232424), t(949626), t(767709), t(65162), t(323874), t(14289), t(35956), t(321073));
let a = null,
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
function i(e, r) {
    let t = e._WebPAnimEncoderGetError(r);
    if (0 === t) return "";
    let o = "",
        a = 0;
    for (; 0 !== e.HEAPU8[t + a] && a < 256;) ((o += String.fromCharCode(e.HEAPU8[t + a])), a++);
    return o;
}
function l(e, r, t) {
    let o = e._malloc(r);
    if (0 === o) throw Error(`Failed to allocate ${r} bytes for ${t} - out of WASM memory`);
    return o;
}
async function s() {
    if (null != a) return a;
    try {
        let e = (await t.e(437971).then(t.bind(t, 543198))).default;
        return (a = await e({ locateFile: (e) => (e.endsWith(".wasm") ? new URL(t(14927), t.b).href : e) }));
    } catch (r) {
        let e = Error("WebP module failed to load. Ensure webp_wasm.js and webp_wasm.wasm are built and available.");
        throw ((e.cause = r), e);
    }
}
(t(140667), [7, 8, 9, 10, 0, 1, 2, 3].reduce((e, r, t) => ({ ...e, [r]: t }), {}));
var f,
    c =
        (((f = {})[(f.CROP_ANIMATED_IMAGE_START = 0)] = "CROP_ANIMATED_IMAGE_START"),
        (f[(f.CROP_ANIMATED_IMAGE_COMPLETE = 1)] = "CROP_ANIMATED_IMAGE_COMPLETE"),
        (f[(f.CROP_ANIMATED_IMAGE_ERROR = 2)] = "CROP_ANIMATED_IMAGE_ERROR"),
        f);
let u = [500, 1e3, 2e3, 4e3, 8e3, 16e3];
self.addEventListener("message", (e) => {
    let { data: r } = e;
    r.type === c.CROP_ANIMATED_IMAGE_START &&
        (async function (e) {
            let {
                data: r,
                x: t,
                y: a,
                width: f,
                height: m,
                imageRotation: d = 0,
                flipHorizontal: _ = !1,
                resizeWidth: h = null,
                resizeHeight: b = null,
                format: E,
                compressGIFToFitBytes: p = null,
            } = e;
            try {
                let e,
                    A,
                    P = !1;
                if ("webp" === E)
                    e = await (async function (e) {
                        let {
                            webp: r,
                            x: t,
                            y: o,
                            width: a,
                            height: f,
                            imageRotation: c = 0,
                            flipHorizontal: u = !1,
                            resizeWidth: m = null,
                            resizeHeight: d = null,
                            quality: _ = 75,
                        } = e;
                        if (!(r instanceof Uint8Array)) throw Error("webp must be a Uint8Array");
                        if (!Number.isInteger(t) || !Number.isInteger(o))
                            throw Error(`Crop position must be integers, got x=${t}, y=${o}`);
                        if (!Number.isInteger(a) || a <= 0 || !Number.isInteger(f) || f <= 0)
                            throw Error(`Crop dimensions must be positive integers, got width=${a}, height=${f}`);
                        if (t < 0 || o < 0) throw Error(`Crop position cannot be negative, got x=${t}, y=${o}`);
                        let {
                                frames: h,
                                width: b,
                                height: E,
                            } = await (async function (e) {
                                if (!(e instanceof Uint8Array)) throw Error("webpData must be a Uint8Array");
                                if (0 === e.length) throw Error("webpData cannot be empty");
                                let r = await s(),
                                    t = l(r, e.length, "WebP input data");
                                r.HEAPU8.set(e, t);
                                let o = r._malloc(8);
                                if (0 === o)
                                    throw (
                                        r._free(t),
                                        Error("Failed to allocate 8 bytes for WebPData struct - out of WASM memory")
                                    );
                                ((r.HEAPU32[o >> 2] = t), (r.HEAPU32[(o >> 2) + 1] = e.length));
                                let a = r._malloc(32);
                                if (0 === a)
                                    throw (
                                        r._free(t),
                                        r._free(o),
                                        Error(
                                            "Failed to allocate 32 bytes for WebPAnimDecoderOptions - out of WASM memory",
                                        )
                                    );
                                r._WebPAnimDecoderOptionsInitInternal(a, 263);
                                let n = r._WebPAnimDecoderNewInternal(o, a, 263);
                                if ((r._free(a), 0 === n))
                                    throw (
                                        r._free(t),
                                        r._free(o),
                                        Error("Failed to create WebP decoder - file may be corrupt or not a valid WebP")
                                    );
                                try {
                                    let e = l(r, 32, "WebPAnimInfo");
                                    r._WebPAnimDecoderGetInfo(n, e);
                                    let t = r.HEAPU32[e >> 2],
                                        o = r.HEAPU32[(e >> 2) + 1],
                                        a = r.HEAPU32[(e >> 2) + 4];
                                    r._free(e);
                                    let i = [],
                                        s = t * o * 4;
                                    for (; 0 !== r._WebPAnimDecoderHasMoreFrames(n);) {
                                        let e = r._malloc(4);
                                        if (0 === e)
                                            throw Error(
                                                "Failed to allocate 4 bytes for frame buffer pointer - out of WASM memory",
                                            );
                                        let a = r._malloc(4);
                                        if (0 === a)
                                            throw (
                                                r._free(e),
                                                Error(
                                                    "Failed to allocate 4 bytes for timestamp pointer - out of WASM memory",
                                                )
                                            );
                                        let l = r._WebPAnimDecoderGetNext(n, e, a);
                                        if (0 === l) {
                                            (r._free(e), r._free(a));
                                            break;
                                        }
                                        let f = r.HEAPU32[e >> 2],
                                            c = r.HEAP32[a >> 2],
                                            u = new Uint8Array(r.HEAPU8.buffer, f, s).slice();
                                        (i.push({ data: u, timestamp: c, width: t, height: o }),
                                            r._free(e),
                                            r._free(a));
                                    }
                                    return { frames: i, width: t, height: o, frameCount: a };
                                } finally {
                                    (r._WebPAnimDecoderDelete(n), r._free(t), r._free(o));
                                }
                            })(r),
                            p = h,
                            A = b,
                            P = E;
                        if (t < 0 || o < 0 || t + a > b || o + f > E)
                            throw Error(`Crop region (${t},${o},${a}x${f}) exceeds source image bounds (${b}x${E})`);
                        if (
                            ((p = p.map((e) => ({
                                data: (function (e) {
                                    let { data: r, origWidth: t, origHeight: o, crop: a } = e,
                                        { x: n, y: i, width: l, height: s } = a;
                                    if (n < 0 || i < 0 || l <= 0 || s <= 0)
                                        throw Error(`Invalid crop parameters: x=${n}, y=${i}, width=${l}, height=${s}`);
                                    if (n + l > t || i + s > o)
                                        throw Error(
                                            `Crop region (${n},${i},${l}x${s}) exceeds image bounds (${t}x${o})`,
                                        );
                                    let f = new Uint8Array(l * s * 4);
                                    for (let e = 0; e < s; e++) {
                                        let o = ((i + e) * t + n) * 4,
                                            a = e * l * 4,
                                            s = 4 * l;
                                        f.set(r.subarray(o, o + s), a);
                                    }
                                    return f;
                                })({
                                    data: e.data,
                                    origWidth: A,
                                    origHeight: P,
                                    crop: { x: t, y: o, width: a, height: f },
                                }),
                                timestamp: e.timestamp,
                            }))),
                            (A = a),
                            (P = f),
                            u &&
                                (p = p.map((e) => ({
                                    data: (function (e, r, t) {
                                        let o = new Uint8Array(r * t * 4);
                                        for (let a = 0; a < t; a++)
                                            for (let t = 0; t < r; t++) {
                                                let n = (a * r + t) * 4,
                                                    i = r - 1 - t,
                                                    l = (a * r + i) * 4;
                                                ((o[l] = e[n]),
                                                    (o[l + 1] = e[n + 1]),
                                                    (o[l + 2] = e[n + 2]),
                                                    (o[l + 3] = e[n + 3]));
                                            }
                                        return o;
                                    })(e.data, A, P),
                                    timestamp: e.timestamp,
                                }))),
                            0 !== c &&
                                ((p = p.map((e) => ({
                                    data: (function (e, r, t, o) {
                                        let a = ((o % 360) + 360) % 360;
                                        if (0 === a) return { data: e, width: r, height: t };
                                        let n = 90 === a || 270 === a ? t : r,
                                            i = 90 === a || 270 === a ? r : t,
                                            l = new Uint8Array(n * i * 4);
                                        for (let o = 0; o < t; o++)
                                            for (let i = 0; i < r; i++) {
                                                let s,
                                                    f,
                                                    c = (o * r + i) * 4;
                                                switch (a) {
                                                    case 90:
                                                        ((s = t - 1 - o), (f = i));
                                                        break;
                                                    case 180:
                                                        ((s = r - 1 - i), (f = t - 1 - o));
                                                        break;
                                                    case 270:
                                                        ((s = o), (f = r - 1 - i));
                                                        break;
                                                    default:
                                                        ((s = i), (f = o));
                                                }
                                                let u = (f * n + s) * 4;
                                                ((l[u] = e[c]),
                                                    (l[u + 1] = e[c + 1]),
                                                    (l[u + 2] = e[c + 2]),
                                                    (l[u + 3] = e[c + 3]));
                                            }
                                        return { data: l, width: n, height: i };
                                    })(e.data, A, P, c).data,
                                    timestamp: e.timestamp,
                                }))),
                                (90 === c || 270 === c) && ([A, P] = [P, A])),
                            null != m || null != d)
                        ) {
                            let e = m ?? A,
                                r = d ?? P;
                            (null != m && null == d
                                ? (r = Math.round((P / A) * m))
                                : null != d && null == m && (e = Math.round((A / P) * d)),
                                (e !== A || r !== P) &&
                                    ((p = p.map((t) => ({
                                        data: (function (e, r, t, o, a) {
                                            if (o === r && a === t) return e;
                                            let n = new Uint8Array(o * a * 4);
                                            for (let i = 0; i < a; i++)
                                                for (let l = 0; l < o; l++) {
                                                    let s = Math.floor((l * r) / o),
                                                        f = (Math.floor((i * t) / a) * r + s) * 4,
                                                        c = (i * o + l) * 4;
                                                    ((n[c] = e[f]),
                                                        (n[c + 1] = e[f + 1]),
                                                        (n[c + 2] = e[f + 2]),
                                                        (n[c + 3] = e[f + 3]));
                                                }
                                            return n;
                                        })(t.data, A, P, e, r),
                                        timestamp: t.timestamp,
                                    }))),
                                    (A = e),
                                    (P = r)));
                        }
                        return await (async function (e, r, t) {
                            let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                            if (!Array.isArray(e)) throw Error("frames must be an array");
                            if (0 === e.length) throw Error("Cannot encode WebP animation with zero frames");
                            if (!Number.isInteger(r) || r <= 0)
                                throw Error(`width must be a positive integer, got: ${r}`);
                            if (!Number.isInteger(t) || t <= 0)
                                throw Error(`height must be a positive integer, got: ${t}`);
                            let a = r * t * 4;
                            for (let o = 0; o < e.length; o++) {
                                let n = e[o];
                                if (null == n || !(n.data instanceof Uint8Array))
                                    throw Error(`Frame ${o} must have a 'data' property that is a Uint8Array`);
                                if (n.data.length !== a)
                                    throw Error(
                                        `Frame ${o} data size mismatch: expected ${a} bytes (${r}x${t}x4), got ${n.data.length}`,
                                    );
                            }
                            let f = await s(),
                                c = o.quality ?? 85,
                                u = o.method ?? 4,
                                m = l(f, 128, "WebPAnimEncoderOptions");
                            (f._WebPAnimEncoderOptionsInitInternal(m, 265),
                                (f.HEAP32[(m >> 2) + 2] = 1),
                                (f.HEAP32[(m >> 2) + 5] = 0));
                            let d = f._WebPAnimEncoderNewInternal(r, t, m, 265);
                            if ((f._free(m), 0 === d)) throw Error("Failed to create WebP encoder");
                            let _ = f._malloc(256);
                            if (0 === _)
                                throw (
                                    f._WebPAnimEncoderDelete(d),
                                    Error("Failed to allocate 256 bytes for WebPConfig - out of WASM memory")
                                );
                            (f._WebPConfigInitInternal(_, 0, c, 527), (f.HEAP32[(_ >> 2) + 2] = u));
                            try {
                                for (let o = 0; o < e.length; o++) {
                                    let a = e[o],
                                        l = a.timestamp ?? 100 * o,
                                        s = f._malloc(512);
                                    if (0 === s)
                                        throw Error(
                                            `Failed to allocate 512 bytes for WebPPicture (frame ${o}) - out of WASM memory`,
                                        );
                                    let c = f._WebPPictureInitInternal(s, 527);
                                    if (0 === c)
                                        throw (f._free(s), Error(`Failed to initialize WebPPicture for frame ${o}`));
                                    ((f.HEAP32[(s + 8) >> 2] = r),
                                        (f.HEAP32[(s + 12) >> 2] = t),
                                        (f.HEAP32[s >> 2] = 1));
                                    let u = f._malloc(a.data.length);
                                    if (0 === u)
                                        throw (
                                            f._WebPPictureFree(s),
                                            f._free(s),
                                            Error(
                                                `Failed to allocate ${a.data.length} bytes for frame ${o} RGBA data - out of WASM memory`,
                                            )
                                        );
                                    f.HEAPU8.set(a.data, u);
                                    let m = 4 * r,
                                        h = f._WebPPictureImportRGBA(s, u, m);
                                    if ((f._free(u), 0 === h)) {
                                        let e = (function (e, r) {
                                            let t = e.HEAP32[(r + 168) >> 2];
                                            return n[t] ?? `Unknown error code: ${t}`;
                                        })(f, s);
                                        throw (
                                            f._WebPPictureFree(s),
                                            f._free(s),
                                            Error(`Failed to import RGBA data for frame ${o}: ${e}`)
                                        );
                                    }
                                    let b = f._WebPAnimEncoderAdd(d, s, l, _);
                                    if ((f._WebPPictureFree(s), f._free(s), 0 === b)) {
                                        let e = i(f, d);
                                        throw Error(`Failed to add frame ${o} to WebP encoder: ${e}`);
                                    }
                                }
                                let o = e[e.length - 1].timestamp ?? (e.length - 1) * 100,
                                    a = f._WebPAnimEncoderAdd(d, 0, o + 100, 0);
                                if (0 === a) {
                                    let e = i(f, d);
                                    throw Error(`Failed to add final frame marker to WebP encoder: ${e}`);
                                }
                                let l = f._malloc(8);
                                if (0 === l)
                                    throw Error(
                                        "Failed to allocate 8 bytes for output WebPData struct - out of WASM memory",
                                    );
                                ((f.HEAPU32[l >> 2] = 0), (f.HEAPU32[(l >> 2) + 1] = 0));
                                let s = f._WebPAnimEncoderAssemble(d, l);
                                if (0 === s) {
                                    let e = i(f, d);
                                    throw (f._free(l), Error(`Failed to assemble WebP animation: ${e}`));
                                }
                                let c = f.HEAPU32[l >> 2],
                                    u = f.HEAPU32[(l >> 2) + 1],
                                    m = new Uint8Array(f.HEAPU8.buffer, c, u).slice();
                                return (f._WebPFree(c), f._free(l), m);
                            } finally {
                                (f._free(_), f._WebPAnimEncoderDelete(d));
                            }
                        })(p, A, P, { quality: _ });
                    })({
                        webp: r,
                        x: t,
                        y: a,
                        width: f,
                        height: m,
                        imageRotation: d,
                        flipHorizontal: _,
                        resizeWidth: h,
                        resizeHeight: b,
                    });
                else if (
                    ((e = await (async function ({
                        gif: e,
                        x: r,
                        y: t,
                        width: a,
                        height: n,
                        imageRotation: i = 0,
                        flipHorizontal: l = !1,
                        resizeWidth: s = null,
                        resizeHeight: f = null,
                    }) {
                        return (await o()).crop_and_rotate_gif(e, r, t, a, n, i, l, s, f);
                    })({
                        gif: r,
                        x: t,
                        y: a,
                        width: f,
                        height: m,
                        imageRotation: d,
                        flipHorizontal: _,
                        resizeWidth: h,
                        resizeHeight: b,
                    })),
                    null != p && e.byteLength > p)
                )
                    try {
                        let r = await (async function (e, r) {
                            let t = null,
                                a = 0,
                                n = u.length - 1;
                            for (; a <= n;) {
                                let i = Math.floor((a + n) / 2),
                                    l = await (async function ({ gif: e, threshold: r }) {
                                        return (await o()).lossy_recompress_gif(e, r);
                                    })({ gif: e, threshold: u[i] });
                                l.byteLength <= r ? ((t = l), (n = i - 1)) : (a = i + 1);
                            }
                            return t;
                        })(e, p);
                        null != r && ((e = r), (P = !0));
                    } catch (e) {
                        A = e instanceof Error ? e.message : String(e);
                    }
                self.postMessage({
                    type: c.CROP_ANIMATED_IMAGE_COMPLETE,
                    result: e,
                    compressed: P,
                    compressionError: A,
                });
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t),
                    r = t instanceof Error ? t.stack : void 0;
                self.postMessage({ type: c.CROP_ANIMATED_IMAGE_ERROR, error: { message: e, stack: r } });
            }
        })({
            data: r.data,
            x: r.x,
            y: r.y,
            width: r.width,
            height: r.height,
            imageRotation: r.imageRotation,
            flipHorizontal: r.flipHorizontal,
            resizeWidth: r.resizeWidth,
            resizeHeight: r.resizeHeight,
            format: r.format,
            compressGIFToFitBytes: r.compressGIFToFitBytes,
        });
});
