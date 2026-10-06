n.d(t, { N: () => l, t: () => s });
var i = n(274652),
    r = n(452661);
function a(e) {
    return e.platform !== i.x.WEB || !0 === e.imageConversionEvaluated || null == e.file
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
    if (null == t || e.platform !== i.x.WEB) return e;
    try {
        let [{ convertFileToJpeg: i }, { default: a }] = await Promise.all([
                n.e("86851").then(n.bind(n, 85582)),
                Promise.resolve().then(n.bind(n, 860840)),
            ]),
            s = "heic" === t ? r.II : r.NX,
            l = e.file,
            o = {
                originalContentType:
                    e.compressionMetadata?.originalContentType != null &&
                    "" !== e.compressionMetadata.originalContentType
                        ? e.compressionMetadata.originalContentType
                        : s(l),
                preCompressionSize: e.compressionMetadata?.preCompressionSize ?? l.size,
            },
            d = await i(l, t);
        if (null == d || null == d.convertedFile)
            return {
                ...e,
                compressionMetadata: o,
                imageConversionEvaluated: !0,
                imageConversionAnalytics: d?.analytics,
            };
        let c = (await a.fromBlob(l).catch(() => null)) ?? void 0;
        return {
            ...e,
            file: d.convertedFile,
            compressionMetadata: o,
            originalMd5: c,
            imageConversionEvaluated: !0,
            imageConversionAnalytics: d.analytics,
        };
    } catch {
        return e;
    }
}
