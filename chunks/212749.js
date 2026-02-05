"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.isWEBM = t.isSWF = t.isOGG = t.isMP4 = t.isMOV = t.isMKV = t.isM4V = t.isFLV = t.isAVI = void 0);
let r = n(835986),
    i = n(817762);
function a(e) {
    let t = (0, i.getFileChunk)(e);
    return !!r.FileTypes.checkByFileType(t, "m4v") && (0, i.isftypStringIncluded)(t);
}
(t.isAVI = function (e) {
    let t = (0, i.getFileChunk)(e);
    return r.FileTypes.checkByFileType(t, "avi");
}),
    (t.isFLV = function (e) {
        let t = (0, i.getFileChunk)(e);
        return !!r.FileTypes.checkByFileType(t, "flv") && (0, i.isFlvStringIncluded)(t);
    }),
    (t.isM4V = a),
    (t.isMKV = function (e) {
        let t = (0, i.getFileChunk)(e, 64);
        return !!r.FileTypes.checkByFileType(t, "mkv") && "mkv" === (0, i.findMatroskaDocTypeElements)(t);
    }),
    (t.isMOV = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "mov");
    }),
    (t.isMP4 = function (e, t) {
        let n = (0, i.getFileChunk)(e);
        return !!r.FileTypes.checkByFileType(n, "mp4") || ((null == t || !t.excludeSimilarTypes) && a(n));
    }),
    (t.isOGG = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "ogg");
    }),
    (t.isSWF = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "swf");
    }),
    (t.isWEBM = function (e) {
        let t = (0, i.getFileChunk)(e, 64);
        return !!r.FileTypes.checkByFileType(t, "webm") && "webm" === (0, i.findMatroskaDocTypeElements)(t);
    });
