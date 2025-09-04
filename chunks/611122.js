Object.defineProperty(t, "__esModule", { value: !0 }), (t.detectFile = void 0);
let r = n(718939),
    i = n(148468);
t.detectFile = function (e, t) {
    var n;
    if (
        t &&
        Object.prototype.hasOwnProperty.call(t, "chunkSize") &&
        (null != (n = null == t ? void 0 : t.chunkSize) ? n : 0) <= 0
    )
        throw RangeError("chunkSize must be bigger than zero");
    let a = (0, i.getFileChunk)(e, (null == t ? void 0 : t.chunkSize) || 64);
    if (0 === a.length) return;
    let o = [],
        s = [];
    for (let e in r.FileTypes)
        if (Object.prototype.hasOwnProperty.call(r.FileTypes, e)) {
            let t = r.FileTypes.getSignaturesByName(e),
                n = r.FileTypes.detectbBySignatures(a, t);
            if (n) {
                let t = r.FileTypes.getInfoByName(e);
                r.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK.includes(t.extension) && s.push(t.extension);
                let i = {
                    extension: t.extension,
                    mimeType: t.mimeType,
                    description: t.description,
                    signature: Object.assign(Object.assign({}, n), { sequence: n.sequence.map((e) => e.toString(16)) }),
                };
                o.push(i);
            }
        }
    if (0 === o.length) return;
    if (1 === o.length && 0 === s.length) return o[0];
    let l = r.FileTypes.detectTypeByAdditionalCheck(a, o);
    if (l) return o.find((e) => e.extension === l);
};
