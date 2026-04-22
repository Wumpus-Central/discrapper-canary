Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.isWAV = t.isMP3 = t.isM4A = t.isFLAC = t.isAMR = t.isAAC = void 0);
let n = i(835986),
    r = i(817762);
function o(e) {
    let t = (0, r.getFileChunk)(e);
    return n.FileTypes.checkByFileType(t, "m4a");
}
(t.isAAC = function (e, t) {
    let i = (0, r.getFileChunk)(e);
    return !!n.FileTypes.checkByFileType(i, "aac") || ((null == t || !t.excludeSimilarTypes) && o(i));
}),
    (t.isAMR = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "amr");
    }),
    (t.isFLAC = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "flac");
    }),
    (t.isM4A = o),
    (t.isMP3 = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "mp3");
    }),
    (t.isWAV = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "wav");
    });
