"use strict";
n.d(t, {
    FD: () => M,
    Id: () => y,
    NO: () => R,
    Qn: () => D,
    T5: () => b,
    Xw: () => w,
    Y4: () => x,
    YS: () => L,
    l3: () => v,
    o1: () => U,
    o6: () => P,
    sL: () => C,
    zg: () => O,
});
var r = n(776231),
    i = n(617617),
    s = n(71393),
    a = n(522602),
    o = n(486020),
    l = n(723702),
    u = n(931664),
    c = n(930958),
    d = n(842086),
    _ = n(823894),
    f = n(652215);
let { API_ENDPOINT: p, MEDIA_PROXY_ENDPOINT: h, PROJECT_ENV: E, ASSET_ENDPOINT: m, CDN_HOST: g } = window.GLOBAL_ENV,
    A = Object.values(d.y3),
    I = decodeURIComponent(f.Rsh.STICKER_ASSET("[\\d]+", `(${A.join("|")})`)),
    T = RegExp(`(${location.protocol}${m}|${location.protocol}${h})(${I})`, "ig"),
    S = RegExp(`${location.protocol}${p}(${I})`, "ig"),
    y = (e) => {
        if (null != e.cover_sticker_id) {
            let t = e.stickers.find((t) => t.id === e.cover_sticker_id);
            if (null != t) return t;
        }
        return e.stickers[0];
    },
    N = (e) => {
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
    v = (e) => {
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
    C = (e) => (null == e ? null : `${e.name}.${N(e.format_type)}`),
    O = function (e) {
        let { isPreview: t = !1, size: i = 160 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e.format_type) return null;
        let s = e.format_type;
        e.format_type === d.TG.GIF && t && (s = d.TG.PNG);
        let a = N(s),
            o = f.Rsh.STICKER_ASSET(e.id, a),
            u = !1;
        try {
            let { getForceSdrEmojisStickersConfig: e } = n(796272);
            u = e({ location: "sticker_url" }).enabled;
        } catch {}
        let c = u ? "&force_sdr=true" : "",
            _ = a === d.y3.WEBP ? "&quality=lossless" : "";
        if ("development" !== E) {
            if (e.format_type === d.TG.LOTTIE) return `${location.protocol}${m}${o}`;
            let n = e.format_type === d.TG.APNG && t && !(0, l.isAndroid)() ? "&passthrough=false" : "",
                s = Math.min(2, (0, r.mZ)());
            return `${location.protocol}${h}${o}?size=${(0, r.kr)(i * s)}${n}${_}${c}`;
        }
        let p = `${location.protocol}${h}${o}`;
        return u ? `${p}?force_sdr=true` : p;
    },
    R = (e) => null != e.match("development" !== E ? T : S),
    b = (e) => ({ type: d.Z2.PACK, id: e.id, name: e.name, stickers: e.stickers, previewSticker: y(e) }),
    D = (e, t) => (e === _.BJ.ANIMATE_ON_INTERACTION ? t : e !== _.BJ.NEVER_ANIMATE),
    L = (e, t, n, r) => {
        if (a.A.getUploadCount(n, r) > 0) return !0;
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
    M = (e) => e.type === d.NL.STANDARD,
    P = (e) => (e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : []),
    x = (e) => {
        if (null === e) return !1;
        let t = e.guild_id;
        return void 0 !== s.A.getGuild(t);
    },
    k = [];
function U(e) {
    let t;
    return ((t = i.A.frecencyWithoutFetchingLatest), t.favoriteStickers?.stickerIds ?? k).includes(e);
}
