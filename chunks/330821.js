Object.defineProperty(t, "__esModule", { value: !0 }), (t.isZIP = t.isRAR = t.isLZH = t.is7Z = void 0);
let r = n(835986),
    i = n(817762);
(t.is7Z = function (e) {
    let t = (0, i.getFileChunk)(e);
    return r.FileTypes.checkByFileType(t, "_7z");
}),
    (t.isLZH = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "lzh");
    }),
    (t.isRAR = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "rar");
    }),
    (t.isZIP = function (e, t) {
        let n = (0, i.getFileChunk)(e, (null == t ? void 0 : t.chunkSize) || 64);
        return r.FileTypes.checkByFileType(n, "zip");
    });
