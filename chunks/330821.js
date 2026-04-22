Object.defineProperty(t, "__esModule", { value: !0 }), (t.isZIP = t.isRAR = t.isLZH = t.is7Z = void 0);
let n = i(835986),
    r = i(817762);
(t.is7Z = function (e) {
    let t = (0, r.getFileChunk)(e);
    return n.FileTypes.checkByFileType(t, "_7z");
}),
    (t.isLZH = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "lzh");
    }),
    (t.isRAR = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "rar");
    }),
    (t.isZIP = function (e, t) {
        let i = (0, r.getFileChunk)(e, (null == t ? void 0 : t.chunkSize) || 64);
        return n.FileTypes.checkByFileType(i, "zip");
    });
