r.d(t, {
    GS: () => i,
    b0: () => l,
}),
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
let a = null;
function n(e, t, r) {
    let a = e._malloc(t);
    if (0 === a) throw Error("Failed to allocate ".concat(t, " bytes for ").concat(r, " - out of WASM memory"));
    return a;
}
async function i() {
    if (null != a) return a;
    try {
        let e = (await r.e("35770").then(r.bind(r, 152989))).default;
        return (a = await e({ locateFile: (e) => (e.endsWith(".wasm") ? new URL(r(432362), r.b).href : e) }));
    } catch (t) {
        let e = Error("WebP module failed to load. Ensure webp_wasm.js and webp_wasm.wasm are built and available.");
        throw ((e.cause = t), e);
    }
}
async function o(e) {
    if (!(e instanceof Uint8Array)) throw Error("webpData must be a Uint8Array");
    if (0 === e.length) throw Error("webpData cannot be empty");
    let t = await i(),
        r = n(t, e.length, "WebP input data");
    t.HEAPU8.set(e, r);
    let a = t._malloc(8);
    if (0 === a) throw (t._free(r), Error("Failed to allocate 8 bytes for WebPData struct - out of WASM memory"));
    (t.HEAPU32[a >> 2] = r), (t.HEAPU32[(a >> 2) + 1] = e.length);
    let o = t._malloc(32);
    if (0 === o)
        throw (
            (t._free(r),
            t._free(a),
            Error("Failed to allocate 32 bytes for WebPAnimDecoderOptions - out of WASM memory"))
        );
    t._WebPAnimDecoderOptionsInitInternal(o, 263);
    let l = t._WebPAnimDecoderNewInternal(a, o, 263);
    if ((t._free(o), 0 === l))
        throw (
            (t._free(r), t._free(a), Error("Failed to create WebP decoder - file may be corrupt or not a valid WebP"))
        );
    try {
        let e = n(t, 32, "WebPAnimInfo");
        t._WebPAnimDecoderGetInfo(l, e);
        let r = t.HEAPU32[e >> 2],
            a = t.HEAPU32[(e >> 2) + 1],
            i = t.HEAPU32[(e >> 2) + 4];
        t._free(e);
        let o = [],
            c = r * a * 4;
        for (; 0 !== t._WebPAnimDecoderHasMoreFrames(l); ) {
            let e = t._malloc(4);
            if (0 === e) throw Error("Failed to allocate 4 bytes for frame buffer pointer - out of WASM memory");
            let n = t._malloc(4);
            if (0 === n)
                throw (t._free(e), Error("Failed to allocate 4 bytes for timestamp pointer - out of WASM memory"));
            let i = t._WebPAnimDecoderGetNext(l, e, n);
            if (0 === i) {
                t._free(e), t._free(n);
                break;
            }
            let u = t.HEAPU32[e >> 2],
                s = t.HEAP32[n >> 2],
                f = new Uint8Array(t.HEAPU8.buffer, u, c).slice();
            o.push({
                data: f,
                timestamp: s,
                width: r,
                height: a,
            }),
                t._free(e),
                t._free(n);
        }
        return {
            frames: o,
            width: r,
            height: a,
            frameCount: i,
        };
    } finally {
        t._WebPAnimDecoderDelete(l), t._free(r), t._free(a);
    }
}
async function l(e) {
    if (!(e instanceof Uint8Array) || 0 === e.length) return !1;
    try {
        let { frameCount: t } = await o(e);
        return t > 1;
    } catch (e) {
        return !1;
    }
}
