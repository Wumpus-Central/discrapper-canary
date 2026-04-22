"use strict";
n.d(t, {
    FD: () => M,
    Id: () => y,
    NO: () => C,
    Qn: () => D,
    T5: () => b,
    Xw: () => w,
    Y4: () => U,
    YS: () => L,
    l3: () => O,
    o1: () => x,
    o6: () => P,
    sL: () => R,
    zg: () => v,
});
var r = n(776231),
    i = n(617617),
    s = n(71393),
    a = n(522602),
    o = n(486020),
    l = n(723702),
    u = n(931664),
    d = n(930958),
    c = n(842086),
    _ = n(823894),
    f = n(652215);
let { API_ENDPOINT: E, MEDIA_PROXY_ENDPOINT: h, PROJECT_ENV: p, ASSET_ENDPOINT: m, CDN_HOST: g } = window.GLOBAL_ENV,
    A = Object.values(c.y3),
    I = decodeURIComponent(f.Rsh.STICKER_ASSET("[\\d]+", `(${A.join("|")})`)),
    T = RegExp(`(${location.protocol}${m}|${location.protocol}${h})(${I})`, "ig"),
    S = RegExp(`${location.protocol}${E}(${I})`, "ig"),
    y = (e) => {
        if (null != e.cover_sticker_id) {
            let t = e.stickers.find((t) => t.id === e.cover_sticker_id);
            if (null != t) return t;
        }
        return e.stickers[0];
    },
    N = (e) => {
        switch (e) {
            case c.TG.PNG:
                return o.QB ? c.y3.WEBP : c.y3.PNG;
            case c.TG.APNG:
                return c.y3.APNG;
            case c.TG.LOTTIE:
                return c.y3.LOTTIE;
            case c.TG.GIF:
                return c.y3.GIF;
            default:
                throw Error(`Unexpected format type: ${e}`);
        }
    },
    O = (e) => {
        switch (e) {
            case "application/json":
                return c.TG.LOTTIE;
            case "image/apng":
                return c.TG.APNG;
            case "image/png":
            case "image/webp":
                return c.TG.PNG;
            case "image/gif":
                return c.TG.GIF;
            default:
                throw Error(`Unexpected file type: ${e}`);
        }
    },
    R = (e) => (null == e ? null : `${e.name}.${N(e.format_type)}`),
    v = function (e) {
        let { isPreview: t = !1, size: i = 160 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e.format_type) return null;
        let s = e.format_type;
        e.format_type === c.TG.GIF && t && (s = c.TG.PNG);
        let a = N(s),
            o = f.Rsh.STICKER_ASSET(e.id, a),
            u = !1;
        try {
            let { getForceSdrEmojisStickersConfig: e } = n(796272);
            u = e({ location: "sticker_url" }).enabled;
        } catch {}
        let d = u ? "&force_sdr=true" : "",
            _ = a === c.y3.WEBP ? "&quality=lossless" : "";
        if ("development" !== p) {
            if (e.format_type === c.TG.LOTTIE) return `${location.protocol}${m}${o}`;
            let n = e.format_type === c.TG.APNG && t && !(0, l.isAndroid)() ? "&passthrough=false" : "",
                s = Math.min(2, (0, r.mZ)());
            return `${location.protocol}${h}${o}?size=${(0, r.kr)(i * s)}${n}${_}${d}`;
        }
        let E = `${location.protocol}${h}${o}`;
        return u ? `${E}?force_sdr=true` : E;
    },
    C = (e) => null != e.match("development" !== p ? T : S),
    b = (e) => ({ type: c.Z2.PACK, id: e.id, name: e.name, stickers: e.stickers, previewSticker: y(e) }),
    D = (e, t) => (e === _.BJ.ANIMATE_ON_INTERACTION ? t : e !== _.BJ.NEVER_ANIMATE),
    L = (e, t, n, r) => {
        if (a.A.getUploadCount(n, r) > 0) return !0;
        let i = u.A.getStickerPreview(n, r);
        if (null != i && i.length > 0) return !0;
        switch (e) {
            case c.D6.STICKER_PICKER:
                return "" !== t.trim();
            case c.D6.AUTOCOMPLETE:
                return (0, d.k)(t).length > 1;
            case c.D6.BUILT_IN_INTEGRATION:
            default:
                return !1;
        }
    },
    w = (e) => e.type === c.NL.GUILD,
    M = (e) => e.type === c.NL.STANDARD,
    P = (e) => (e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : []),
    U = (e) => {
        if (null === e) return !1;
        let t = e.guild_id;
        return void 0 !== s.A.getGuild(t);
    },
    k = [];
function x(e) {
    let t;
    return ((t = i.A.frecencyWithoutFetchingLatest), t.favoriteStickers?.stickerIds ?? k).includes(e);
}
