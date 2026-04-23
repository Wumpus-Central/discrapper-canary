"use strict";
n.d(t, {
    Xw: () => P,
    sL: () => y,
    Qn: () => b,
    YS: () => w,
    l3: () => O,
    Id: () => C,
    T5: () => L,
    Y4: () => U,
    NO: () => D,
    o6: () => M,
    o1: () => G,
    FD: () => k,
    zg: () => v,
});
var i = n(776231),
    r = n(617617),
    s = n(71393),
    a = n(522602),
    o = n(486020),
    l = n(723702),
    d = n(931664);
let _ = /(!|\.|;|,|-|—|–|\?|"|')/g,
    u = /(\n|\t|\s)/g;
var c = n(194004),
    E = n(823894),
    h = n(652215);
let { API_ENDPOINT: m, MEDIA_PROXY_ENDPOINT: f, PROJECT_ENV: g, ASSET_ENDPOINT: p, CDN_HOST: A } = window.GLOBAL_ENV,
    I = Object.values(c.y3),
    T = decodeURIComponent(h.Rsh.STICKER_ASSET("[\\d]+", `(${I.join("|")})`)),
    S = RegExp(`(${location.protocol}${p}|${location.protocol}${f})(${T})`, "ig"),
    N = RegExp(`${location.protocol}${m}(${T})`, "ig"),
    C = (e) => {
        if (null != e.cover_sticker_id) {
            let t = e.stickers.find((t) => t.id === e.cover_sticker_id);
            if (null != t) return t;
        }
        return e.stickers[0];
    },
    R = (e) => {
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
    y = (e) => (null == e ? null : `${e.name}.${R(e.format_type)}`),
    v = function (e) {
        let { isPreview: t = !1, size: r = 160 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e.format_type) return null;
        let s = e.format_type;
        e.format_type === c.TG.GIF && t && (s = c.TG.PNG);
        let a = R(s),
            o = h.Rsh.STICKER_ASSET(e.id, a),
            d = !1;
        try {
            let { getForceSdrEmojisStickersConfig: e } = n(796272);
            d = e({ location: "sticker_url" }).enabled;
        } catch {}
        let _ = d ? "&force_sdr=true" : "",
            u = a === c.y3.WEBP ? "&quality=lossless" : "";
        if ("development" !== g) {
            if (e.format_type === c.TG.LOTTIE) return `${location.protocol}${p}${o}`;
            let n = e.format_type === c.TG.APNG && t && !(0, l.isAndroid)() ? "&passthrough=false" : "",
                s = Math.min(2, (0, i.mZ)());
            return `${location.protocol}${f}${o}?size=${(0, i.kr)(r * s)}${n}${u}${_}`;
        }
        let E = `${location.protocol}${f}${o}`;
        return d ? `${E}?force_sdr=true` : E;
    },
    D = (e) => null != e.match("development" !== g ? S : N),
    L = (e) => ({ type: c.Z2.PACK, id: e.id, name: e.name, stickers: e.stickers, previewSticker: C(e) }),
    b = (e, t) => (e === E.BJ.ANIMATE_ON_INTERACTION ? t : e !== E.BJ.NEVER_ANIMATE),
    w = (e, t, n, i) => {
        if (a.A.getUploadCount(n, i) > 0) return !0;
        let r = d.A.getStickerPreview(n, i);
        if (null != r && r.length > 0) return !0;
        switch (e) {
            case c.D6.STICKER_PICKER:
                return "" !== t.trim();
            case c.D6.AUTOCOMPLETE:
                var s;
                return (null == (s = t) ? [] : s.replace(_, "").replace(u, " ").trim().split(" ")).length > 1;
            case c.D6.BUILT_IN_INTEGRATION:
            default:
                return !1;
        }
    },
    P = (e) => e.type === c.NL.GUILD,
    k = (e) => e.type === c.NL.STANDARD,
    M = (e) => (e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : []),
    U = (e) => {
        if (null === e) return !1;
        let t = e.guild_id;
        return void 0 !== s.A.getGuild(t);
    },
    x = [];
function G(e) {
    let t;
    return ((t = r.A.frecencyWithoutFetchingLatest), t.favoriteStickers?.stickerIds ?? x).includes(e);
}
