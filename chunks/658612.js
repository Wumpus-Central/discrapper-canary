"use strict";
n.d(t, { d: () => a, z: () => s });
var i = n(565150),
    r = n(201115);
function a(e) {
    return e.platform === i.xz.WEB && !0 !== e.heicConversionEvaluated && null != e.file && (0, r.E5)(e.file);
}
async function s(e) {
    if (!a(e)) return e;
    try {
        let [{ preConvertHeicForUpload: t }, { HeicUploadConversionExperiment: i }, { default: a }] = await Promise.all(
                [
                    n.e("422405").then(n.bind(n, 158948)),
                    Promise.resolve().then(n.bind(n, 669646)),
                    Promise.resolve().then(n.bind(n, 860840)),
                ],
            ),
            s = i.getConfig({ location: "heicPreConvert.maybePreConvertHeicItem" });
        if (!s.enabled) return { ...e, heicConversionEvaluated: !0 };
        let l = e.file,
            o = await t(l, s.quality, s.maxFileSizeBytes);
        if (o === l) return { ...e, heicConversionEvaluated: !0 };
        let d = (await a.fromBlob(l).catch(() => null)) ?? void 0,
            c = {
                originalContentType:
                    e.compressionMetadata?.originalContentType != null &&
                    "" !== e.compressionMetadata.originalContentType
                        ? e.compressionMetadata.originalContentType
                        : (0, r.II)(l),
                preCompressionSize: e.compressionMetadata?.preCompressionSize ?? l.size,
            };
        return { ...e, file: o, compressionMetadata: c, originalMd5: d, heicConversionEvaluated: !0 };
    } catch {
        return e;
    }
}
