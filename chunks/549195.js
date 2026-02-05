"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.isWEBP =
        t.isPSD =
        t.isPPM =
        t.isPNG =
        t.isPGM =
        t.isPBM =
        t.isJPEG =
        t.isICO =
        t.isHEIC =
        t.isGIF =
        t.isEXR =
        t.isCR2 =
        t.isBPG =
        t.isBMP =
        t.isAVIF =
            void 0);
let r = n(835986),
    i = n(817762);
(t.isAVIF = function (e) {
    let t = (0, i.getFileChunk)(e);
    return !!r.FileTypes.checkByFileType(t, "avif") && (0, i.isAvifStringIncluded)(t);
}),
    (t.isBMP = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "bmp");
    }),
    (t.isBPG = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "bpg");
    }),
    (t.isCR2 = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "cr2");
    }),
    (t.isEXR = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "exr");
    }),
    (t.isGIF = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "gif");
    }),
    (t.isHEIC = function (e) {
        let t = (0, i.getFileChunk)(e);
        return !!r.FileTypes.checkByFileType(t, "avif") && (0, i.isHeicSignatureIncluded)(t);
    }),
    (t.isICO = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "ico");
    }),
    (t.isJPEG = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "jpeg");
    }),
    (t.isPBM = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "pbm");
    }),
    (t.isPGM = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "pgm");
    }),
    (t.isPNG = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "png");
    }),
    (t.isPPM = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "ppm");
    }),
    (t.isPSD = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "psd");
    }),
    (t.isWEBP = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "webp");
    });
