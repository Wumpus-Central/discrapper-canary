Object.defineProperty(t, "__esModule", { value: !0 }), (t.FileTypes = t.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = void 0);
let r = n(817762),
    i = n(639371),
    a = n(536168),
    s = n(868791),
    o = n(775356),
    l = n(501778),
    c = n(636102);
t.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = ["m4v", "flv", "mp4", "mkv", "webm", "avif", "heic"];
class u {
    static getInfoByName(e) {
        return (0, r.fetchFromObject)(u, e.toUpperCase());
    }
    static getSignaturesByName(e) {
        let { signatures: t } = (0, r.fetchFromObject)(u, e.toUpperCase());
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
            return n.includes("heic") && (0, c.isHEIC)(e)
                ? "heic"
                : (0, c.isFLV)(e)
                  ? "flv"
                  : (0, c.isM4V)(e) && !(0, c.isHEIC)(e)
                    ? "m4v"
                    : "mp4";
        if (n.some((e) => ["mkv", "webm"].includes(e))) {
            let t = (0, r.findMatroskaDocTypeElements)(e);
            if ("mkv" === t && (0, c.isMKV)(e)) return "mkv";
            if ("webm" === t && (0, c.isWEBM)(e)) return "webm";
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
        if (Object.prototype.hasOwnProperty.call(u, t.toUpperCase())) {
            let n = u.getSignaturesByName(t.toUpperCase());
            if (u.detectSignature(e, n)) return !0;
        }
        return !1;
    }
}
(t.FileTypes = u),
    (u.AAC = i.AudioTypes.AAC),
    (u.AMR = i.AudioTypes.AMR),
    (u.FLAC = i.AudioTypes.FLAC),
    (u.M4A = i.AudioTypes.M4A),
    (u.MP3 = i.AudioTypes.MP3),
    (u.WAV = i.AudioTypes.WAV),
    (u.AVIF = o.ImageTypes.AVIF),
    (u.BMP = o.ImageTypes.BMP),
    (u.BPG = o.ImageTypes.BPG),
    (u.CR2 = o.ImageTypes.CR2),
    (u.EXR = o.ImageTypes.EXR),
    (u.GIF = o.ImageTypes.GIF),
    (u.ICO = o.ImageTypes.ICO),
    (u.JPEG = o.ImageTypes.JPEG),
    (u.PBM = o.ImageTypes.PBM),
    (u.PGM = o.ImageTypes.PGM),
    (u.PNG = o.ImageTypes.PNG),
    (u.PPM = o.ImageTypes.PPM),
    (u.PSD = o.ImageTypes.PSD),
    (u.WEBP = o.ImageTypes.WEBP),
    (u.HEIC = o.ImageTypes.HEIC),
    (u.AVI = l.VideoTypes.AVI),
    (u.FLV = l.VideoTypes.FLV),
    (u.M4V = l.VideoTypes.M4V),
    (u.MKV = l.VideoTypes.MKV),
    (u.MOV = l.VideoTypes.MOV),
    (u.MP4 = l.VideoTypes.MP4),
    (u.OGG = l.VideoTypes.OGG),
    (u.SWF = l.VideoTypes.SWF),
    (u.WEBM = l.VideoTypes.WEBM),
    (u._7Z = a.CompressedTypes._7Z),
    (u.LZH = a.CompressedTypes.LZH),
    (u.RAR = a.CompressedTypes.RAR),
    (u.ZIP = a.CompressedTypes.ZIP),
    (u.BLEND = s.OtherTypes.BLEND),
    (u.DOC = s.OtherTypes.DOC),
    (u.ELF = s.OtherTypes.ELF),
    (u.EXE = s.OtherTypes.EXE),
    (u.INDD = s.OtherTypes.INDD),
    (u.MACHO = s.OtherTypes.MACHO),
    (u.ORC = s.OtherTypes.ORC),
    (u.PARQUET = s.OtherTypes.PARQUET),
    (u.PCAP = s.OtherTypes.PCAP),
    (u.PDF = s.OtherTypes.PDF),
    (u.PS = s.OtherTypes.PS),
    (u.RTF = s.OtherTypes.RTF),
    (u.SQLITE = s.OtherTypes.SQLITE),
    (u.STL = s.OtherTypes.STL),
    (u.TTF = s.OtherTypes.TTF);
