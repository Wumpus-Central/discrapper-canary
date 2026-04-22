Object.defineProperty(t, "__esModule", { value: !0 }), (t.FileTypes = t.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = void 0);
let n = i(817762),
    r = i(639371),
    o = i(536168),
    a = i(868791),
    s = i(775356),
    l = i(501778),
    u = i(636102);
t.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = ["m4v", "flv", "mp4", "mkv", "webm", "avif", "heic"];
class c {
    static getInfoByName(e) {
        return (0, n.fetchFromObject)(c, e.toUpperCase());
    }
    static getSignaturesByName(e) {
        let { signatures: t } = (0, n.fetchFromObject)(c, e.toUpperCase());
        return t;
    }
    static detectSignature(e, t) {
        for (let i of t) {
            let t = !0,
                n = i.offset || 0,
                r = 0;
            for (let o = 0; o < i.sequence.length; o++) {
                if (i.skippedBytes && i.skippedBytes.includes(o)) {
                    r++;
                    continue;
                }
                if (e[n + o] !== i.sequence[o - r]) {
                    t = !1;
                    break;
                }
            }
            if (t) return i;
        }
    }
    static detectTypeByAdditionalCheck(e, t) {
        let i = t.map((e) => e.extension);
        if (i.some((e) => ["m4v", "flv", "mp4", "heic"].includes(e)))
            return i.includes("heic") && (0, u.isHEIC)(e)
                ? "heic"
                : (0, u.isFLV)(e)
                  ? "flv"
                  : (0, u.isM4V)(e) && !(0, u.isHEIC)(e)
                    ? "m4v"
                    : "mp4";
        if (i.some((e) => ["mkv", "webm"].includes(e))) {
            let t = (0, n.findMatroskaDocTypeElements)(e);
            if ("mkv" === t && (0, u.isMKV)(e)) return "mkv";
            if ("webm" === t && (0, u.isWEBM)(e)) return "webm";
        } else if (i.some((e) => ["avif"].includes(e)) && (0, n.isAvifStringIncluded)(e)) return "avif";
    }
    static detectbBySignatures(e, t) {
        for (let i of t) {
            let t = 0,
                n = !0,
                r = i.offset || 0,
                o = (null == i ? void 0 : i.skippedBytes)
                    ? i.sequence.length + i.skippedBytes.length
                    : i.sequence.length;
            for (let a = 0; a < o; a++) {
                if (i.skippedBytes && i.skippedBytes.includes(a)) {
                    t++;
                    continue;
                }
                if (e[r + a] !== i.sequence[a - t]) {
                    n = !1;
                    break;
                }
            }
            if (n) return i;
        }
    }
    static checkByFileType(e, t) {
        if (Object.prototype.hasOwnProperty.call(c, t.toUpperCase())) {
            let i = c.getSignaturesByName(t.toUpperCase());
            if (c.detectSignature(e, i)) return !0;
        }
        return !1;
    }
}
(t.FileTypes = c),
    (c.AAC = r.AudioTypes.AAC),
    (c.AMR = r.AudioTypes.AMR),
    (c.FLAC = r.AudioTypes.FLAC),
    (c.M4A = r.AudioTypes.M4A),
    (c.MP3 = r.AudioTypes.MP3),
    (c.WAV = r.AudioTypes.WAV),
    (c.AVIF = s.ImageTypes.AVIF),
    (c.BMP = s.ImageTypes.BMP),
    (c.BPG = s.ImageTypes.BPG),
    (c.CR2 = s.ImageTypes.CR2),
    (c.EXR = s.ImageTypes.EXR),
    (c.GIF = s.ImageTypes.GIF),
    (c.ICO = s.ImageTypes.ICO),
    (c.JPEG = s.ImageTypes.JPEG),
    (c.PBM = s.ImageTypes.PBM),
    (c.PGM = s.ImageTypes.PGM),
    (c.PNG = s.ImageTypes.PNG),
    (c.PPM = s.ImageTypes.PPM),
    (c.PSD = s.ImageTypes.PSD),
    (c.WEBP = s.ImageTypes.WEBP),
    (c.HEIC = s.ImageTypes.HEIC),
    (c.AVI = l.VideoTypes.AVI),
    (c.FLV = l.VideoTypes.FLV),
    (c.M4V = l.VideoTypes.M4V),
    (c.MKV = l.VideoTypes.MKV),
    (c.MOV = l.VideoTypes.MOV),
    (c.MP4 = l.VideoTypes.MP4),
    (c.OGG = l.VideoTypes.OGG),
    (c.SWF = l.VideoTypes.SWF),
    (c.WEBM = l.VideoTypes.WEBM),
    (c._7Z = o.CompressedTypes._7Z),
    (c.LZH = o.CompressedTypes.LZH),
    (c.RAR = o.CompressedTypes.RAR),
    (c.ZIP = o.CompressedTypes.ZIP),
    (c.BLEND = a.OtherTypes.BLEND),
    (c.DOC = a.OtherTypes.DOC),
    (c.ELF = a.OtherTypes.ELF),
    (c.EXE = a.OtherTypes.EXE),
    (c.INDD = a.OtherTypes.INDD),
    (c.MACHO = a.OtherTypes.MACHO),
    (c.ORC = a.OtherTypes.ORC),
    (c.PARQUET = a.OtherTypes.PARQUET),
    (c.PCAP = a.OtherTypes.PCAP),
    (c.PDF = a.OtherTypes.PDF),
    (c.PS = a.OtherTypes.PS),
    (c.RTF = a.OtherTypes.RTF),
    (c.SQLITE = a.OtherTypes.SQLITE),
    (c.STL = a.OtherTypes.STL),
    (c.TTF = a.OtherTypes.TTF);
