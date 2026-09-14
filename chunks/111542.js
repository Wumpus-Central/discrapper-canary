n.d(t, { N: () => l, t: () => s });
var i = n(565150),
    r = n(452661);
function a(e) {
    return e.platform !== i.xz.WEB || !0 === e.imageConversionEvaluated || null == e.file
        ? null
        : (0, r.E5)(e.file)
          ? "heic"
          : (0, r.Tn)(e.file)
            ? "jxr"
            : null;
}
function s(e) {
    return null != a(e);
}
async function l(e) {
    let t = a(e);
    if (null == t || e.platform !== i.xz.WEB) return e;
    try {
        let [
                { convertFileToJpeg: i },
                { HeicUploadConversionExperiment: a },
                { JxrUploadConversionExperiment: s },
                { default: l },
            ] = await Promise.all([
                n.e("86851").then(n.bind(n, 85582)),
                Promise.resolve().then(n.bind(n, 669646)),
                Promise.resolve().then(n.bind(n, 231971)),
                Promise.resolve().then(n.bind(n, 860840)),
            ]),
            { experiment: o, sourceMimeType: d } =
                "heic" === t ? { experiment: a, sourceMimeType: r.II } : { experiment: s, sourceMimeType: r.NX },
            c = e.file,
            u = {
                originalContentType:
                    e.compressionMetadata?.originalContentType != null &&
                    "" !== e.compressionMetadata.originalContentType
                        ? e.compressionMetadata.originalContentType
                        : d(c),
                preCompressionSize: e.compressionMetadata?.preCompressionSize ?? c.size,
            },
            _ = o.getConfig({ location: `imagePreConvert.maybePreConvertImageItem.${t}` });
        if (!_.enabled) return { ...e, compressionMetadata: u, imageConversionEvaluated: !0 };
        let E = await i(c, t, _.quality, _.maxFileSizeBytes);
        if (null == E || null == E.convertedFile)
            return {
                ...e,
                compressionMetadata: u,
                imageConversionEvaluated: !0,
                imageConversionAnalytics: E?.analytics,
            };
        let A = (await l.fromBlob(c).catch(() => null)) ?? void 0;
        return {
            ...e,
            file: E.convertedFile,
            compressionMetadata: u,
            originalMd5: A,
            imageConversionEvaluated: !0,
            imageConversionAnalytics: E.analytics,
        };
    } catch {
        return e;
    }
}
