n.r(i),
    n.d(i, {
        HeicConversionFailureReason: () => l,
        isHeicFile: () => s.E5,
        maybeConvertHeicToJpeg: () => u,
        preConvertHeicForUpload: () => c,
        renameToJpegExtension: () => s.DP,
    });
var r,
    o = n(77729),
    t = n(626584),
    s = n(201115);
let a = new t.A("HEIC");
var l =
    (((r = {}).NATIVE_MODULE_UNAVAILABLE = "native_module_unavailable"),
    (r.PLATFORM_UNSUPPORTED = "platform_unsupported"),
    (r.SIZE_LIMIT_EXCEEDED = "size_limit_exceeded"),
    (r.CONVERSION_FAILED = "conversion_failed"),
    (r.UNKNOWN_ERROR = "unknown_error"),
    r);
async function c(e, i, n) {
    if (!(0, s.E5)(e)) return e;
    let r = await u(e, i, n);
    return null != r && r.success && null != r.convertedBlob
        ? new File([r.convertedBlob], (0, s.DP)(e.name), { type: "image/jpeg", lastModified: e.lastModified })
        : e;
}
async function u(e) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 85,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (!(0, s.E5)(e)) return null;
    let r = performance.now();
    function t() {
        return Math.round(performance.now() - r);
    }
    function l(i) {
        return { success: !1, originalFile: e, sizeBefore: e.size, sizeAfter: e.size, reason: i, compressTimeMs: t() };
    }
    let c = o.A?.sysimg;
    if (null == c) return a.verbose("sysimg not available (not Electron)"), l("native_module_unavailable");
    if (!(await c.canConvertHeic()))
        return a.verbose("platform does not support HEIC conversion"), l("platform_unsupported");
    if (null != n && e.size > n) return a.verbose(`file too large: ${e.size} > ${n}`), l("size_limit_exceeded");
    try {
        let n = await e.arrayBuffer(),
            r = JSON.stringify({ format: "jpeg", quality: Math.min(100, Math.max(1, i)) }),
            o = await c.convertBytes(n, r),
            s = new Blob([o], { type: "image/jpeg" });
        return (
            a.log(`converted ${e.name}: ${e.size} -> ${s.size} bytes in ${t()}ms`),
            {
                success: !0,
                originalFile: e,
                convertedBlob: s,
                sizeBefore: e.size,
                sizeAfter: s.size,
                compressTimeMs: t(),
            }
        );
    } catch (i) {
        return a.warn(`conversion failed for ${e.name}:`, i), l("conversion_failed");
    }
}
