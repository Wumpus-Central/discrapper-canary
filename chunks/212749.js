Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.isWEBM = t.isSWF = t.isOGG = t.isMP4 = t.isMOV = t.isMKV = t.isM4V = t.isFLV = t.isAVI = void 0);
let n = i(835986),
    r = i(817762);
function o(e) {
    let t = (0, r.getFileChunk)(e);
    return !!n.FileTypes.checkByFileType(t, "m4v") && (0, r.isftypStringIncluded)(t);
}
(t.isAVI = function (e) {
    let t = (0, r.getFileChunk)(e);
    return n.FileTypes.checkByFileType(t, "avi");
}),
    (t.isFLV = function (e) {
        let t = (0, r.getFileChunk)(e);
        return !!n.FileTypes.checkByFileType(t, "flv") && (0, r.isFlvStringIncluded)(t);
    }),
    (t.isM4V = o),
    (t.isMKV = function (e) {
        let t = (0, r.getFileChunk)(e, 64);
        return !!n.FileTypes.checkByFileType(t, "mkv") && "mkv" === (0, r.findMatroskaDocTypeElements)(t);
    }),
    (t.isMOV = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "mov");
    }),
    (t.isMP4 = function (e, t) {
        let i = (0, r.getFileChunk)(e);
        return !!n.FileTypes.checkByFileType(i, "mp4") || ((null == t || !t.excludeSimilarTypes) && o(i));
    }),
    (t.isOGG = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "ogg");
    }),
    (t.isSWF = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "swf");
    }),
    (t.isWEBM = function (e) {
        let t = (0, r.getFileChunk)(e, 64);
        return !!n.FileTypes.checkByFileType(t, "webm") && "webm" === (0, r.findMatroskaDocTypeElements)(t);
    });
