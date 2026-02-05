"use strict";
n.d(t, {
    FD: () => x,
    Id: () => S,
    NO: () => R,
    Qn: () => D,
    T5: () => O,
    Xw: () => w,
    Y4: () => M,
    YS: () => L,
    l3: () => C,
    o1: () => G,
    o6: () => P,
    sL: () => b,
    zg: () => N,
});
var r = n(776231),
    i = n(617617),
    a = n(71393),
    s = n(522602),
    o = n(486020),
    l = n(723702),
    u = n(931664),
    c = n(930958),
    d = n(842086),
    _ = n(823894),
    f = n(652215);
let { API_ENDPOINT: p, MEDIA_PROXY_ENDPOINT: h, PROJECT_ENV: m, ASSET_ENDPOINT: g, CDN_HOST: E } = window.GLOBAL_ENV,
    A = Object.values(d.y3),
    I = decodeURIComponent(f.Rsh.STICKER_ASSET("[\\d]+", `(${A.join("|")})`)),
    T = RegExp(`(${location.protocol}${g}|${location.protocol}${h})(${I})`, "ig"),
    y = RegExp(`${location.protocol}${p}(${I})`, "ig"),
    S = (e) => {
        if (null != e.cover_sticker_id) {
            let t = e.stickers.find((t) => t.id === e.cover_sticker_id);
            if (null != t) return t;
        }
        return e.stickers[0];
    },
    v = (e) => {
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
                throw Error(`Unexpected format type: ${e}`);
        }
    },
    C = (e) => {
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
                throw Error(`Unexpected file type: ${e}`);
        }
    },
    b = (e) => (null == e ? null : `${e.name}.${v(e.format_type)}`),
    N = function (e) {
        let { isPreview: t = !1, size: i = 160 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e.format_type) return null;
        let a = e.format_type;
        e.format_type === d.TG.GIF && t && (a = d.TG.PNG);
        let s = v(a),
            o = f.Rsh.STICKER_ASSET(e.id, s),
            u = !1;
        try {
            let { getForceSdrEmojisStickersConfig: e } = n(796272);
            u = e({ location: "sticker_url" }).enabled;
        } catch {}
        let c = u ? "&force_sdr=true" : "",
            _ = s === d.y3.WEBP ? "&quality=lossless" : "";
        if ("development" !== m) {
            if (e.format_type === d.TG.LOTTIE) return `${location.protocol}${g}${o}`;
            let n = e.format_type === d.TG.APNG && t && !(0, l.isAndroid)() ? "&passthrough=false" : "",
                a = Math.min(2, (0, r.mZ)());
            return `${location.protocol}${h}${o}?size=${(0, r.kr)(i * a)}${n}${_}${c}`;
        }
        let p = `${location.protocol}${h}${o}`;
        return u ? `${p}?force_sdr=true` : p;
    },
    R = (e) => null != e.match("development" !== m ? T : y),
    O = (e) => ({ type: d.Z2.PACK, id: e.id, name: e.name, stickers: e.stickers, previewSticker: S(e) }),
    D = (e, t) => (e === _.BJ.ANIMATE_ON_INTERACTION ? t : e !== _.BJ.NEVER_ANIMATE),
    L = (e, t, n, r) => {
        if (s.A.getUploadCount(n, r) > 0) return !0;
        let i = u.A.getStickerPreview(n, r);
        if (null != i && i.length > 0) return !0;
        switch (e) {
            case d.D6.STICKER_PICKER:
                return "" !== t.trim();
            case d.D6.AUTOCOMPLETE:
                return (0, c.k)(t).length > 1;
            case d.D6.BUILT_IN_INTEGRATION:
            default:
                return !1;
        }
    },
    w = (e) => e.type === d.NL.GUILD,
    x = (e) => e.type === d.NL.STANDARD,
    P = (e) => (e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : []),
    M = (e) => {
        if (null === e) return !1;
        let t = e.guild_id;
        return void 0 !== a.A.getGuild(t);
    },
    k = [];
function U() {
    let e = i.A.frecencyWithoutFetchingLatest;
    return e.favoriteStickers?.stickerIds ?? k;
}
function G(e) {
    return U().includes(e);
}
