n.d(t, {
    B0: () => R,
    Hc: () => D,
    J8: () => x,
    Q6: () => N,
    V9: () => j,
    WD: () => w,
    Zt: () => T,
    Zv: () => A,
    _V: () => C,
    cv: () => M,
    gM: () => G,
    jl: () => L,
    z: () => P,
}),
    n(413496),
    n(433524),
    n(35282),
    n(415506),
    n(781311);
var r = n(586132),
    i = n(134432),
    a = n(581883),
    o = n(430824),
    s = n(117530),
    l = n(768581),
    c = n(358085),
    u = n(913663),
    d = n(11513),
    f = n(373228),
    _ = n(611480),
    p = n(981631);
let { API_ENDPOINT: h, MEDIA_PROXY_ENDPOINT: m, PROJECT_ENV: g, ASSET_ENDPOINT: E, CDN_HOST: b } = window.GLOBAL_ENV,
    y = Object.values(f.og),
    O = decodeURIComponent(p.ANM.STICKER_ASSET("[\\d]+", "(".concat(y.join("|"), ")"))),
    v = RegExp(
        "(".concat(location.protocol).concat(E, "|").concat(location.protocol).concat(m, ")(").concat(O, ")"),
        "ig",
    ),
    I = RegExp("".concat(location.protocol).concat(h, "(").concat(O, ")"), "ig"),
    T = (e) => {
        if (null != e.cover_sticker_id) {
            let t = e.stickers.find((t) => t.id === e.cover_sticker_id);
            if (null != t) return t;
        }
        return e.stickers[0];
    },
    S = (e) => {
        switch (e) {
            case f.u3.PNG:
                return l.$k ? f.og.WEBP : f.og.PNG;
            case f.u3.APNG:
                return f.og.APNG;
            case f.u3.LOTTIE:
                return f.og.LOTTIE;
            case f.u3.GIF:
                return f.og.GIF;
            default:
                throw Error("Unexpected format type: ".concat(e));
        }
    },
    A = (e) => {
        switch (e) {
            case "application/json":
                return f.u3.LOTTIE;
            case "image/apng":
                return f.u3.APNG;
            case "image/png":
            case "image/webp":
                return f.u3.PNG;
            case "image/gif":
                return f.u3.GIF;
            default:
                throw Error("Unexpected file type: ".concat(e));
        }
    },
    C = (e) => (null == e ? null : "".concat(e.name, ".").concat(S(e.format_type))),
    N = function (e) {
        let { isPreview: t = !1, size: n = _.lE } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e.format_type) return null;
        let a = e.format_type;
        e.format_type === f.u3.GIF && t && (a = f.u3.PNG);
        let o = S(a),
            s = p.ANM.STICKER_ASSET(e.id, o),
            l = (0, r.W)({ location: "sticker_url" }).enabled,
            u = o === f.og.WEBP ? "&quality=lossless" : "",
            d = l ? "&force_sdr=true" : "";
        if ("development" !== g) {
            if (e.format_type === f.u3.LOTTIE) return "".concat(location.protocol).concat(E).concat(s);
            let r = e.format_type === f.u3.APNG && t && !(0, c.isAndroid)() ? "&passthrough=false" : "",
                a = Math.min(2, (0, i.x_)());
            return ""
                .concat(location.protocol)
                .concat(m)
                .concat(s, "?size=")
                .concat((0, i.oO)(n * a))
                .concat(r)
                .concat(u)
                .concat(d);
        }
        let h = "".concat(location.protocol).concat(m).concat(s);
        return l ? "".concat(h, "?force_sdr=true") : h;
    },
    R = (e) => null != e.match("development" !== g ? v : I),
    P = (e) => ({
        type: f.Ih.PACK,
        id: e.id,
        name: e.name,
        stickers: e.stickers,
        previewSticker: T(e),
    }),
    w = (e, t) => (e === _.yr.ANIMATE_ON_INTERACTION ? t : e !== _.yr.NEVER_ANIMATE),
    D = (e, t, n, r) => {
        if (s.Z.getUploadCount(n, r) > 0) return !0;
        let i = u.Z.getStickerPreview(n, r);
        if (null != i && i.length > 0) return !0;
        switch (e) {
            case f.V0.STICKER_PICKER:
                return "" !== t.trim();
            case f.V0.AUTOCOMPLETE:
                return (0, d.w)(t).length > 1;
            case f.V0.BUILT_IN_INTEGRATION:
            default:
                return !1;
        }
    },
    x = (e) => e.type === f.n0.GUILD,
    L = (e) => e.type === f.n0.STANDARD,
    M = (e) => (e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : []),
    j = (e) => {
        if (null === e) return !1;
        let t = e.guild_id;
        return void 0 !== o.Z.getGuild(t);
    },
    k = [];
function U() {
    var e, t;
    return null != (t = null == (e = a.Z.frecencyWithoutFetchingLatest.favoriteStickers) ? void 0 : e.stickerIds)
        ? t
        : k;
}
function G(e) {
    return U().includes(e);
}
