Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.isWAV = t.isMP3 = t.isM4A = t.isFLAC = t.isAMR = t.isAAC = void 0);
let r = n(835986),
    i = n(817762);
function a(e) {
    let t = (0, i.getFileChunk)(e);
    return r.FileTypes.checkByFileType(t, "m4a");
}
(t.isAAC = function (e, t) {
    let n = (0, i.getFileChunk)(e);
    return !!r.FileTypes.checkByFileType(n, "aac") || ((null == t || !t.excludeSimilarTypes) && a(n));
}),
    (t.isAMR = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "amr");
    }),
    (t.isFLAC = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "flac");
    }),
    (t.isM4A = a),
    (t.isMP3 = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "mp3");
    }),
    (t.isWAV = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "wav");
    });
