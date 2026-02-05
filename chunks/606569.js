"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.FileTypes = t.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = void 0);
let r = n(817762),
    i = n(639371),
    a = n(536168),
    s = n(868791),
    o = n(775356),
    l = n(501778),
    u = n(636102);
t.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = ["m4v", "flv", "mp4", "mkv", "webm", "avif", "heic"];
class c {
    static getInfoByName(e) {
        return (0, r.fetchFromObject)(c, e.toUpperCase());
    }
    static getSignaturesByName(e) {
        let { signatures: t } = (0, r.fetchFromObject)(c, e.toUpperCase());
        return t;
    }
    static detectSignature(e, t) {
        for (let n of t) {
            let t = !0,
                r = n.offset || 0,
                i = 0;
            for (let a = 0; a < n.sequence.length; a++) {
                if (n.skippedBytes && n.skippedBytes.includes(a)) {
                    i++;
                    continue;
                }
                if (e[r + a] !== n.sequence[a - i]) {
                    t = !1;
                    break;
                }
            }
            if (t) return n;
        }
    }
    static detectTypeByAdditionalCheck(e, t) {
        let n = t.map((e) => e.extension);
        if (n.some((e) => ["m4v", "flv", "mp4", "heic"].includes(e)))
            return n.includes("heic") && (0, u.isHEIC)(e)
                ? "heic"
                : (0, u.isFLV)(e)
                  ? "flv"
                  : (0, u.isM4V)(e) && !(0, u.isHEIC)(e)
                    ? "m4v"
                    : "mp4";
        if (n.some((e) => ["mkv", "webm"].includes(e))) {
            let t = (0, r.findMatroskaDocTypeElements)(e);
            if ("mkv" === t && (0, u.isMKV)(e)) return "mkv";
            if ("webm" === t && (0, u.isWEBM)(e)) return "webm";
        } else if (n.some((e) => ["avif"].includes(e)) && (0, r.isAvifStringIncluded)(e)) return "avif";
    }
    static detectbBySignatures(e, t) {
        for (let n of t) {
            let t = 0,
                r = !0,
                i = n.offset || 0,
                a = (null == n ? void 0 : n.skippedBytes)
                    ? n.sequence.length + n.skippedBytes.length
                    : n.sequence.length;
            for (let s = 0; s < a; s++) {
                if (n.skippedBytes && n.skippedBytes.includes(s)) {
                    t++;
                    continue;
                }
                if (e[i + s] !== n.sequence[s - t]) {
                    r = !1;
                    break;
                }
            }
            if (r) return n;
        }
    }
    static checkByFileType(e, t) {
        if (Object.prototype.hasOwnProperty.call(c, t.toUpperCase())) {
            let n = c.getSignaturesByName(t.toUpperCase());
            if (c.detectSignature(e, n)) return !0;
        }
        return !1;
    }
}
(t.FileTypes = c),
    (c.AAC = i.AudioTypes.AAC),
    (c.AMR = i.AudioTypes.AMR),
    (c.FLAC = i.AudioTypes.FLAC),
    (c.M4A = i.AudioTypes.M4A),
    (c.MP3 = i.AudioTypes.MP3),
    (c.WAV = i.AudioTypes.WAV),
    (c.AVIF = o.ImageTypes.AVIF),
    (c.BMP = o.ImageTypes.BMP),
    (c.BPG = o.ImageTypes.BPG),
    (c.CR2 = o.ImageTypes.CR2),
    (c.EXR = o.ImageTypes.EXR),
    (c.GIF = o.ImageTypes.GIF),
    (c.ICO = o.ImageTypes.ICO),
    (c.JPEG = o.ImageTypes.JPEG),
    (c.PBM = o.ImageTypes.PBM),
    (c.PGM = o.ImageTypes.PGM),
    (c.PNG = o.ImageTypes.PNG),
    (c.PPM = o.ImageTypes.PPM),
    (c.PSD = o.ImageTypes.PSD),
    (c.WEBP = o.ImageTypes.WEBP),
    (c.HEIC = o.ImageTypes.HEIC),
    (c.AVI = l.VideoTypes.AVI),
    (c.FLV = l.VideoTypes.FLV),
    (c.M4V = l.VideoTypes.M4V),
    (c.MKV = l.VideoTypes.MKV),
    (c.MOV = l.VideoTypes.MOV),
    (c.MP4 = l.VideoTypes.MP4),
    (c.OGG = l.VideoTypes.OGG),
    (c.SWF = l.VideoTypes.SWF),
    (c.WEBM = l.VideoTypes.WEBM),
    (c._7Z = a.CompressedTypes._7Z),
    (c.LZH = a.CompressedTypes.LZH),
    (c.RAR = a.CompressedTypes.RAR),
    (c.ZIP = a.CompressedTypes.ZIP),
    (c.BLEND = s.OtherTypes.BLEND),
    (c.DOC = s.OtherTypes.DOC),
    (c.ELF = s.OtherTypes.ELF),
    (c.EXE = s.OtherTypes.EXE),
    (c.INDD = s.OtherTypes.INDD),
    (c.MACHO = s.OtherTypes.MACHO),
    (c.ORC = s.OtherTypes.ORC),
    (c.PARQUET = s.OtherTypes.PARQUET),
    (c.PCAP = s.OtherTypes.PCAP),
    (c.PDF = s.OtherTypes.PDF),
    (c.PS = s.OtherTypes.PS),
    (c.RTF = s.OtherTypes.RTF),
    (c.SQLITE = s.OtherTypes.SQLITE),
    (c.STL = s.OtherTypes.STL),
    (c.TTF = s.OtherTypes.TTF);
