Object.defineProperty(t, "__esModule", { value: !0 }), (t.FileTypes = t.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = void 0);
let r = n(148468),
    i = n(988310),
    a = n(487571),
    o = n(153582),
    s = n(711720),
    l = n(115868),
    c = n(688077);
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
            for (let o = 0; o < a; o++) {
                if (n.skippedBytes && n.skippedBytes.includes(o)) {
                    t++;
                    continue;
                }
                if (e[i + o] !== n.sequence[o - t]) {
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
    (u.AVIF = s.ImageTypes.AVIF),
    (u.BMP = s.ImageTypes.BMP),
    (u.BPG = s.ImageTypes.BPG),
    (u.CR2 = s.ImageTypes.CR2),
    (u.EXR = s.ImageTypes.EXR),
    (u.GIF = s.ImageTypes.GIF),
    (u.ICO = s.ImageTypes.ICO),
    (u.JPEG = s.ImageTypes.JPEG),
    (u.PBM = s.ImageTypes.PBM),
    (u.PGM = s.ImageTypes.PGM),
    (u.PNG = s.ImageTypes.PNG),
    (u.PPM = s.ImageTypes.PPM),
    (u.PSD = s.ImageTypes.PSD),
    (u.WEBP = s.ImageTypes.WEBP),
    (u.HEIC = s.ImageTypes.HEIC),
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
    (u.BLEND = o.OtherTypes.BLEND),
    (u.DOC = o.OtherTypes.DOC),
    (u.ELF = o.OtherTypes.ELF),
    (u.EXE = o.OtherTypes.EXE),
    (u.INDD = o.OtherTypes.INDD),
    (u.MACHO = o.OtherTypes.MACHO),
    (u.ORC = o.OtherTypes.ORC),
    (u.PARQUET = o.OtherTypes.PARQUET),
    (u.PCAP = o.OtherTypes.PCAP),
    (u.PDF = o.OtherTypes.PDF),
    (u.PS = o.OtherTypes.PS),
    (u.RTF = o.OtherTypes.RTF),
    (u.SQLITE = o.OtherTypes.SQLITE),
    (u.STL = o.OtherTypes.STL),
    (u.TTF = o.OtherTypes.TTF);
