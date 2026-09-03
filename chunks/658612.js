n.d(t, { d: () => a, z: () => s });
var i = n(565150),
    r = n(201115);
function a(e) {
    return e.platform === i.xz.WEB && !0 !== e.heicConversionEvaluated && null != e.file && (0, r.E5)(e.file);
}
async function s(e) {
    if (!a(e)) return e;
    try {
        let [
                { maybeConvertHeicToJpeg: t, renameToJpegExtension: i, HeicConversionFailureReason: a },
                { HeicUploadConversionExperiment: s },
                { default: l },
            ] = await Promise.all([
                n.e("422405").then(n.bind(n, 158948)),
                Promise.resolve().then(n.bind(n, 669646)),
                Promise.resolve().then(n.bind(n, 860840)),
            ]),
            o = s.getConfig({ location: "heicPreConvert.maybePreConvertHeicItem" });
        if (!o.enabled) return { ...e, heicConversionEvaluated: !0 };
        let d = e.file,
            c = await t(d, o.quality, o.maxFileSizeBytes);
        if (null == c || !c.success || null == c.convertedBlob) {
            let t =
                null == c
                    ? void 0
                    : {
                          convertedMimeType: null,
                          conversionFailureReason: c.reason ?? a.UNKNOWN_ERROR,
                          compressTimeMs: c.compressTimeMs,
                      };
            return { ...e, heicConversionEvaluated: !0, heicConversionAnalytics: t };
        }
        let u = new File([c.convertedBlob], i(d.name), { type: "image/jpeg", lastModified: d.lastModified }),
            _ = (await l.fromBlob(d).catch(() => null)) ?? void 0,
            E = {
                originalContentType:
                    e.compressionMetadata?.originalContentType != null &&
                    "" !== e.compressionMetadata.originalContentType
                        ? e.compressionMetadata.originalContentType
                        : (0, r.II)(d),
                preCompressionSize: e.compressionMetadata?.preCompressionSize ?? d.size,
            };
        return {
            ...e,
            file: u,
            compressionMetadata: E,
            originalMd5: _,
            heicConversionEvaluated: !0,
            heicConversionAnalytics: { convertedMimeType: "image/jpeg", compressTimeMs: c.compressTimeMs },
        };
    } catch {
        return e;
    }
}
