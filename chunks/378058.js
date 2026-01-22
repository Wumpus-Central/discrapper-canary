n.d(t, {
    FD: () => x,
    Id: () => v,
    NO: () => N,
    Qn: () => w,
    T5: () => R,
    Xw: () => D,
    Y4: () => j,
    YS: () => P,
    l3: () => I,
    o1: () => U,
    o6: () => L,
    sL: () => T,
    zg: () => C,
}),
    n(591487),
    n(727858),
    n(747238),
    n(65821),
    n(733351);
var r = n(776231),
    i = n(617617),
    a = n(71393),
    s = n(522602),
    o = n(486020),
    l = n(723702),
    c = n(931664),
    u = n(930958),
    d = n(842086),
    f = n(823894),
    p = n(652215);
let { API_ENDPOINT: _, MEDIA_PROXY_ENDPOINT: h, PROJECT_ENV: m, ASSET_ENDPOINT: g, CDN_HOST: E } = window.GLOBAL_ENV,
    b = Object.values(d.y3),
    y = decodeURIComponent(p.Rsh.STICKER_ASSET("[\\d]+", "(".concat(b.join("|"), ")"))),
    O = RegExp(
        "(".concat(location.protocol).concat(g, "|").concat(location.protocol).concat(h, ")(").concat(y, ")"),
        "ig",
    ),
    A = RegExp("".concat(location.protocol).concat(_, "(").concat(y, ")"), "ig"),
    v = (e) => {
        if (null != e.cover_sticker_id) {
            let t = e.stickers.find((t) => t.id === e.cover_sticker_id);
            if (null != t) return t;
        }
        return e.stickers[0];
    },
    S = (e) => {
        switch (e) {
            case d.TG.PNG:
                return o.QB ? d.y3.WEBP : d.y3.PNG;
            case d.TG.APNG:
                return d.y3.APNG;
            case d.TG.LOTTIE:
                return d.y3.LOTTIE;
            case d.TG.GIF:
                return d.y3.GIF;
            default:
                throw Error("Unexpected format type: ".concat(e));
        }
    },
    I = (e) => {
        switch (e) {
            case "application/json":
                return d.TG.LOTTIE;
            case "image/apng":
                return d.TG.APNG;
            case "image/png":
            case "image/webp":
                return d.TG.PNG;
            case "image/gif":
                return d.TG.GIF;
            default:
                throw Error("Unexpected file type: ".concat(e));
        }
    },
    T = (e) => (null == e ? null : "".concat(e.name, ".").concat(S(e.format_type))),
    C = function (e) {
        let { isPreview: t = !1, size: i = 160 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e.format_type) return null;
        let a = e.format_type;
        e.format_type === d.TG.GIF && t && (a = d.TG.PNG);
        let s = S(a),
            o = p.Rsh.STICKER_ASSET(e.id, s),
            c = !1;
        try {
            let { getForceSdrEmojisStickersConfig: e } = n(796272);
            c = e({ location: "sticker_url" }).enabled;
        } catch (e) {}
        let u = c ? "&force_sdr=true" : "",
            f = s === d.y3.WEBP ? "&quality=lossless" : "";
        if ("development" !== m) {
            if (e.format_type === d.TG.LOTTIE) return "".concat(location.protocol).concat(g).concat(o);
            let n = e.format_type === d.TG.APNG && t && !(0, l.isAndroid)() ? "&passthrough=false" : "",
                a = Math.min(2, (0, r.mZ)());
            return ""
                .concat(location.protocol)
                .concat(h)
                .concat(o, "?size=")
                .concat((0, r.kr)(i * a))
                .concat(n)
                .concat(f)
                .concat(u);
        }
        let _ = "".concat(location.protocol).concat(h).concat(o);
        return c ? "".concat(_, "?force_sdr=true") : _;
    },
    N = (e) => null != e.match("development" !== m ? O : A),
    R = (e) => ({
        type: d.Z2.PACK,
        id: e.id,
        name: e.name,
        stickers: e.stickers,
        previewSticker: v(e),
    }),
    w = (e, t) => (e === f.BJ.ANIMATE_ON_INTERACTION ? t : e !== f.BJ.NEVER_ANIMATE),
    P = (e, t, n, r) => {
        if (s.A.getUploadCount(n, r) > 0) return !0;
        let i = c.A.getStickerPreview(n, r);
        if (null != i && i.length > 0) return !0;
        switch (e) {
            case d.D6.STICKER_PICKER:
                return "" !== t.trim();
            case d.D6.AUTOCOMPLETE:
                return (0, u.k)(t).length > 1;
            case d.D6.BUILT_IN_INTEGRATION:
            default:
                return !1;
        }
    },
    D = (e) => e.type === d.NL.GUILD,
    x = (e) => e.type === d.NL.STANDARD,
    L = (e) => (e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : []),
    j = (e) => {
        if (null === e) return !1;
        let t = e.guild_id;
        return void 0 !== a.A.getGuild(t);
    },
    M = [];
function k() {
    var e, t;
    return null != (e = null == (t = i.A.frecencyWithoutFetchingLatest.favoriteStickers) ? void 0 : t.stickerIds)
        ? e
        : M;
}
function U(e) {
    return k().includes(e);
}
