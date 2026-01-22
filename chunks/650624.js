Object.defineProperty(t, "__esModule", {
    value: !0,
}),
    (t.isPCAP =
        t.isDOC =
        t.isTTF =
        t.isSTL =
        t.isSQLITE =
        t.isRTF =
        t.isPS =
        t.isPDF =
        t.isPARQUET =
        t.isORC =
        t.isINDD =
        t.isMACHO =
        t.isEXE =
        t.isELF =
        t.isBLEND =
            void 0);
let r = n(835986),
    i = n(817762);
(t.isBLEND = function (e) {
    let t = (0, i.getFileChunk)(e);
    return r.FileTypes.checkByFileType(t, "blend");
}),
    (t.isELF = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "elf");
    }),
    (t.isEXE = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "exe");
    }),
    (t.isMACHO = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "macho");
    }),
    (t.isINDD = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "indd");
    }),
    (t.isORC = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "orc");
    }),
    (t.isPARQUET = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "parquet");
    }),
    (t.isPDF = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "pdf");
    }),
    (t.isPS = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "ps");
    }),
    (t.isRTF = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "rtf");
    }),
    (t.isSQLITE = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "sqlite");
    }),
    (t.isSTL = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "stl");
    }),
    (t.isTTF = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "ttf");
    }),
    (t.isDOC = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "doc");
    }),
    (t.isPCAP = function (e) {
        let t = (0, i.getFileChunk)(e);
        return r.FileTypes.checkByFileType(t, "pcap");
    });
