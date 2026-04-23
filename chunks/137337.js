async function a({
    gif: e,
    x: r,
    y: o,
    width: i,
    height: n,
    imageRotation: l = 0,
    flipHorizontal: s = !1,
    resizeWidth: f = null,
    resizeHeight: c = null,
}) {
    return (await t.e("47580").then(t.bind(t, 844183))).crop_and_rotate_gif(e, r, o, i, n, l, s, f, c);
}
t(393431), t(532706), t(42231), t(232424), t(949626), t(767709), t(65162), t(323874), t(14289), t(35956), t(321073);
let o = null,
    i = {
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
function n(e, r) {
    let t = e._WebPAnimEncoderGetError(r);
    if (0 === t) return "";
    let a = "",
        o = 0;
    for (; 0 !== e.HEAPU8[t + o] && o < 256; ) (a += String.fromCharCode(e.HEAPU8[t + o])), o++;
    return a;
}
function l(e, r, t) {
    let a = e._malloc(r);
    if (0 === a) throw Error(`Failed to allocate ${r} bytes for ${t} - out of WASM memory`);
    return a;
}
async function s() {
    if (null != o) return o;
    try {
        let e = (await t.e("37971").then(t.bind(t, 543198))).default;
        return (o = await e({ locateFile: (e) => (e.endsWith(".wasm") ? new URL(t(14927), t.b).href : e) }));
    } catch (r) {
        let e = Error("WebP module failed to load. Ensure webp_wasm.js and webp_wasm.wasm are built and available.");
        throw ((e.cause = r), e);
    }
}
async function f(e) {
    if (!(e instanceof Uint8Array)) throw Error("webpData must be a Uint8Array");
    if (0 === e.length) throw Error("webpData cannot be empty");
    let r = await s(),
        t = l(r, e.length, "WebP input data");
    r.HEAPU8.set(e, t);
    let a = r._malloc(8);
    if (0 === a) throw (r._free(t), Error("Failed to allocate 8 bytes for WebPData struct - out of WASM memory"));
    (r.HEAPU32[a >> 2] = t), (r.HEAPU32[(a >> 2) + 1] = e.length);
    let o = r._malloc(32);
    if (0 === o)
        throw (
            (r._free(t),
            r._free(a),
            Error("Failed to allocate 32 bytes for WebPAnimDecoderOptions - out of WASM memory"))
        );
    r._WebPAnimDecoderOptionsInitInternal(o, 263);
    let i = r._WebPAnimDecoderNewInternal(a, o, 263);
    if ((r._free(o), 0 === i))
        throw (
            (r._free(t), r._free(a), Error("Failed to create WebP decoder - file may be corrupt or not a valid WebP"))
        );
    try {
        let e = l(r, 32, "WebPAnimInfo");
        r._WebPAnimDecoderGetInfo(i, e);
        let t = r.HEAPU32[e >> 2],
            a = r.HEAPU32[(e >> 2) + 1],
            o = r.HEAPU32[(e >> 2) + 4];
        r._free(e);
        let n = [],
            s = t * a * 4;
        for (; 0 !== r._WebPAnimDecoderHasMoreFrames(i); ) {
            let e = r._malloc(4);
            if (0 === e) throw Error("Failed to allocate 4 bytes for frame buffer pointer - out of WASM memory");
            let o = r._malloc(4);
            if (0 === o)
                throw (r._free(e), Error("Failed to allocate 4 bytes for timestamp pointer - out of WASM memory"));
            let l = r._WebPAnimDecoderGetNext(i, e, o);
            if (0 === l) {
                r._free(e), r._free(o);
                break;
            }
            let f = r.HEAPU32[e >> 2],
                c = r.HEAP32[o >> 2],
                u = new Uint8Array(r.HEAPU8.buffer, f, s).slice();
            n.push({ data: u, timestamp: c, width: t, height: a }), r._free(e), r._free(o);
        }
        return { frames: n, width: t, height: a, frameCount: o };
    } finally {
        r._WebPAnimDecoderDelete(i), r._free(t), r._free(a);
    }
}
async function c(e, r, t) {
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (!Array.isArray(e)) throw Error("frames must be an array");
    if (0 === e.length) throw Error("Cannot encode WebP animation with zero frames");
    if (!Number.isInteger(r) || r <= 0) throw Error(`width must be a positive integer, got: ${r}`);
    if (!Number.isInteger(t) || t <= 0) throw Error(`height must be a positive integer, got: ${t}`);
    let o = r * t * 4;
    for (let a = 0; a < e.length; a++) {
        let i = e[a];
        if (null == i || !(i.data instanceof Uint8Array))
            throw Error(`Frame ${a} must have a 'data' property that is a Uint8Array`);
        if (i.data.length !== o)
            throw Error(`Frame ${a} data size mismatch: expected ${o} bytes (${r}x${t}x4), got ${i.data.length}`);
    }
    let f = await s(),
        c = a.quality ?? 85,
        u = a.method ?? 4,
        m = l(f, 128, "WebPAnimEncoderOptions");
    f._WebPAnimEncoderOptionsInitInternal(m, 265), (f.HEAP32[(m >> 2) + 2] = 1), (f.HEAP32[(m >> 2) + 5] = 0);
    let d = f._WebPAnimEncoderNewInternal(r, t, m, 265);
    if ((f._free(m), 0 === d)) throw Error("Failed to create WebP encoder");
    let _ = f._malloc(256);
    if (0 === _)
        throw (f._WebPAnimEncoderDelete(d), Error("Failed to allocate 256 bytes for WebPConfig - out of WASM memory"));
    f._WebPConfigInitInternal(_, 0, c, 527), (f.HEAP32[(_ >> 2) + 2] = u);
    try {
        for (let a = 0; a < e.length; a++) {
            let o = e[a],
                l = o.timestamp ?? 100 * a,
                s = f._malloc(512);
            if (0 === s) throw Error(`Failed to allocate 512 bytes for WebPPicture (frame ${a}) - out of WASM memory`);
            let c = f._WebPPictureInitInternal(s, 527);
            if (0 === c) throw (f._free(s), Error(`Failed to initialize WebPPicture for frame ${a}`));
            (f.HEAP32[(s + 8) >> 2] = r), (f.HEAP32[(s + 12) >> 2] = t), (f.HEAP32[s >> 2] = 1);
            let u = f._malloc(o.data.length);
            if (0 === u)
                throw (
                    (f._WebPPictureFree(s),
                    f._free(s),
                    Error(`Failed to allocate ${o.data.length} bytes for frame ${a} RGBA data - out of WASM memory`))
                );
            f.HEAPU8.set(o.data, u);
            let m = 4 * r,
                b = f._WebPPictureImportRGBA(s, u, m);
            if ((f._free(u), 0 === b)) {
                let e = (function (e, r) {
                    let t = e.HEAP32[(r + 168) >> 2];
                    return i[t] ?? `Unknown error code: ${t}`;
                })(f, s);
                throw (f._WebPPictureFree(s), f._free(s), Error(`Failed to import RGBA data for frame ${a}: ${e}`));
            }
            let h = f._WebPAnimEncoderAdd(d, s, l, _);
            if ((f._WebPPictureFree(s), f._free(s), 0 === h)) {
                let e = n(f, d);
                throw Error(`Failed to add frame ${a} to WebP encoder: ${e}`);
            }
        }
        let a = e[e.length - 1].timestamp ?? (e.length - 1) * 100,
            o = f._WebPAnimEncoderAdd(d, 0, a + 100, 0);
        if (0 === o) {
            let e = n(f, d);
            throw Error(`Failed to add final frame marker to WebP encoder: ${e}`);
        }
        let l = f._malloc(8);
        if (0 === l) throw Error("Failed to allocate 8 bytes for output WebPData struct - out of WASM memory");
        (f.HEAPU32[l >> 2] = 0), (f.HEAPU32[(l >> 2) + 1] = 0);
        let s = f._WebPAnimEncoderAssemble(d, l);
        if (0 === s) {
            let e = n(f, d);
            throw (f._free(l), Error(`Failed to assemble WebP animation: ${e}`));
        }
        let c = f.HEAPU32[l >> 2],
            u = f.HEAPU32[(l >> 2) + 1],
            m = new Uint8Array(f.HEAPU8.buffer, c, u).slice();
        return f._WebPFree(c), f._free(l), m;
    } finally {
        f._free(_), f._WebPAnimEncoderDelete(d);
    }
}
async function u(e) {
    let {
        webp: r,
        x: t,
        y: a,
        width: o,
        height: i,
        imageRotation: n = 0,
        flipHorizontal: l = !1,
        resizeWidth: s = null,
        resizeHeight: u = null,
        quality: m = 75,
    } = e;
    if (!(r instanceof Uint8Array)) throw Error("webp must be a Uint8Array");
    if (!Number.isInteger(t) || !Number.isInteger(a)) throw Error(`Crop position must be integers, got x=${t}, y=${a}`);
    if (!Number.isInteger(o) || o <= 0 || !Number.isInteger(i) || i <= 0)
        throw Error(`Crop dimensions must be positive integers, got width=${o}, height=${i}`);
    if (t < 0 || a < 0) throw Error(`Crop position cannot be negative, got x=${t}, y=${a}`);
    let { frames: d, width: _, height: b } = await f(r),
        h = d,
        E = _,
        p = b;
    if (t < 0 || a < 0 || t + o > _ || a + i > b)
        throw Error(`Crop region (${t},${a},${o}x${i}) exceeds source image bounds (${_}x${b})`);
    if (
        ((h = h.map((e) => ({
            data: (function (e) {
                let { data: r, origWidth: t, origHeight: a, crop: o } = e,
                    { x: i, y: n, width: l, height: s } = o;
                if (i < 0 || n < 0 || l <= 0 || s <= 0)
                    throw Error(`Invalid crop parameters: x=${i}, y=${n}, width=${l}, height=${s}`);
                if (i + l > t || n + s > a)
                    throw Error(`Crop region (${i},${n},${l}x${s}) exceeds image bounds (${t}x${a})`);
                let f = new Uint8Array(l * s * 4);
                for (let e = 0; e < s; e++) {
                    let a = ((n + e) * t + i) * 4,
                        o = e * l * 4,
                        s = 4 * l;
                    f.set(r.subarray(a, a + s), o);
                }
                return f;
            })({ data: e.data, origWidth: E, origHeight: p, crop: { x: t, y: a, width: o, height: i } }),
            timestamp: e.timestamp,
        }))),
        (E = o),
        (p = i),
        l &&
            (h = h.map((e) => ({
                data: (function (e, r, t) {
                    let a = new Uint8Array(r * t * 4);
                    for (let o = 0; o < t; o++)
                        for (let t = 0; t < r; t++) {
                            let i = (o * r + t) * 4,
                                n = r - 1 - t,
                                l = (o * r + n) * 4;
                            (a[l] = e[i]), (a[l + 1] = e[i + 1]), (a[l + 2] = e[i + 2]), (a[l + 3] = e[i + 3]);
                        }
                    return a;
                })(e.data, E, p),
                timestamp: e.timestamp,
            }))),
        0 !== n &&
            ((h = h.map((e) => ({
                data: (function (e, r, t, a) {
                    let o = ((a % 360) + 360) % 360;
                    if (0 === o) return { data: e, width: r, height: t };
                    let i = 90 === o || 270 === o ? t : r,
                        n = 90 === o || 270 === o ? r : t,
                        l = new Uint8Array(i * n * 4);
                    for (let a = 0; a < t; a++)
                        for (let n = 0; n < r; n++) {
                            let s,
                                f,
                                c = (a * r + n) * 4;
                            switch (o) {
                                case 90:
                                    (s = t - 1 - a), (f = n);
                                    break;
                                case 180:
                                    (s = r - 1 - n), (f = t - 1 - a);
                                    break;
                                case 270:
                                    (s = a), (f = r - 1 - n);
                                    break;
                                default:
                                    (s = n), (f = a);
                            }
                            let u = (f * i + s) * 4;
                            (l[u] = e[c]), (l[u + 1] = e[c + 1]), (l[u + 2] = e[c + 2]), (l[u + 3] = e[c + 3]);
                        }
                    return { data: l, width: i, height: n };
                })(e.data, E, p, n).data,
                timestamp: e.timestamp,
            }))),
            (90 === n || 270 === n) && ([E, p] = [p, E])),
        null != s || null != u)
    ) {
        let e = s ?? E,
            r = u ?? p;
        null != s && null == u
            ? (r = Math.round((p / E) * s))
            : null != u && null == s && (e = Math.round((E / p) * u)),
            (e !== E || r !== p) &&
                ((h = h.map((t) => ({
                    data: (function (e, r, t, a, o) {
                        if (a === r && o === t) return e;
                        let i = new Uint8Array(a * o * 4);
                        for (let n = 0; n < o; n++)
                            for (let l = 0; l < a; l++) {
                                let s = Math.floor((l * r) / a),
                                    f = (Math.floor((n * t) / o) * r + s) * 4,
                                    c = (n * a + l) * 4;
                                (i[c] = e[f]), (i[c + 1] = e[f + 1]), (i[c + 2] = e[f + 2]), (i[c + 3] = e[f + 3]);
                            }
                        return i;
                    })(t.data, E, p, e, r),
                    timestamp: t.timestamp,
                }))),
                (E = e),
                (p = r));
    }
    return await c(h, E, p, { quality: m });
}
t(140667), [7, 8, 9, 10, 0, 1, 2, 3].reduce((e, r, t) => ({ ...e, [r]: t }), {});
var m,
    d =
        (((m = {})[(m.CROP_ANIMATED_IMAGE_START = 0)] = "CROP_ANIMATED_IMAGE_START"),
        (m[(m.CROP_ANIMATED_IMAGE_COMPLETE = 1)] = "CROP_ANIMATED_IMAGE_COMPLETE"),
        (m[(m.CROP_ANIMATED_IMAGE_ERROR = 2)] = "CROP_ANIMATED_IMAGE_ERROR"),
        m);
async function _(e) {
    let {
        data: r,
        x: t,
        y: o,
        width: i,
        height: n,
        imageRotation: l = 0,
        flipHorizontal: s = !1,
        resizeWidth: f = null,
        resizeHeight: c = null,
        format: m,
    } = e;
    try {
        let e;
        (e =
            "webp" === m
                ? await u({
                      webp: r,
                      x: t,
                      y: o,
                      width: i,
                      height: n,
                      imageRotation: l,
                      flipHorizontal: s,
                      resizeWidth: f,
                      resizeHeight: c,
                  })
                : await a({
                      gif: r,
                      x: t,
                      y: o,
                      width: i,
                      height: n,
                      imageRotation: l,
                      flipHorizontal: s,
                      resizeWidth: f,
                      resizeHeight: c,
                  })),
            self.postMessage({ type: d.CROP_ANIMATED_IMAGE_COMPLETE, result: e });
    } catch (t) {
        let e = t instanceof Error ? t.message : String(t),
            r = t instanceof Error ? t.stack : void 0;
        self.postMessage({ type: d.CROP_ANIMATED_IMAGE_ERROR, error: { message: e, stack: r } });
    }
}
self.addEventListener("message", (e) => {
    let { data: r } = e;
    r.type === d.CROP_ANIMATED_IMAGE_START &&
        _({
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
        });
});
