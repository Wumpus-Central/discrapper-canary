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
let n = i(835986),
    r = i(817762);
(t.isAVIF = function (e) {
    let t = (0, r.getFileChunk)(e);
    return !!n.FileTypes.checkByFileType(t, "avif") && (0, r.isAvifStringIncluded)(t);
}),
    (t.isBMP = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "bmp");
    }),
    (t.isBPG = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "bpg");
    }),
    (t.isCR2 = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "cr2");
    }),
    (t.isEXR = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "exr");
    }),
    (t.isGIF = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "gif");
    }),
    (t.isHEIC = function (e) {
        let t = (0, r.getFileChunk)(e);
        return !!n.FileTypes.checkByFileType(t, "avif") && (0, r.isHeicSignatureIncluded)(t);
    }),
    (t.isICO = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "ico");
    }),
    (t.isJPEG = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "jpeg");
    }),
    (t.isPBM = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "pbm");
    }),
    (t.isPGM = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "pgm");
    }),
    (t.isPNG = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "png");
    }),
    (t.isPPM = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "ppm");
    }),
    (t.isPSD = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "psd");
    }),
    (t.isWEBP = function (e) {
        let t = (0, r.getFileChunk)(e);
        return n.FileTypes.checkByFileType(t, "webp");
    });
