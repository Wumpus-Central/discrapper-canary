"use strict";
n.d(t, {
    Zf: () => S,
    i2: () => m,
    tW: () => I,
    vm: () => C,
    fY: () => E,
    WV: () => v,
    Yt: () => O,
    UX: () => R,
    dv: () => N,
}),
    n(134528),
    n(947204);
var i,
    r,
    s = n(412703),
    a = n(440703),
    o = n(998218),
    l = n(835517),
    u = n(801365),
    c = n(190107),
    d = n(652215),
    _ = n(427483);
let h = /\.([a-zA-Z0-9]+)$/,
    f = ["video/mp4", "video/webm"];
var E =
    (((i = {}).HERO = "hero"),
    (i.HERO_IMAGE = "hero_image"),
    (i.HERO_VIDEO = "hero_video"),
    (i.QUEST_BAR_HERO = "quest_bar_hero"),
    (i.QUEST_BAR_HERO_VIDEO = "quest_bar_hero_video"),
    (i.QUEST_BAR_HERO_IMAGE = "quest_bar_hero_image"),
    (i.REWARD = "reward"),
    (i.REWARD_IMAGE = "reward_image"),
    (i.GAME_TILE = "game_tile"),
    (i.LOGO_TYPE = "logo_type"),
    (i.COSPONSOR_LOGO_TYPE = "cosponsor_logo_type"),
    (i.VIDEO_PLAYER_VIDEO = "video_player_video"),
    (i.VIDEO_PLAYER_VIDEO_LOW_RES = "video_player_video_low_res"),
    (i.VIDEO_PLAYER_VIDEO_HLS = "video_player_video_hls"),
    (i.VIDEO_PLAYER_THUMBNAIL = "video_player_thumbnail"),
    (i.VIDEO_PLAYER_CAPTION = "video_player_caption"),
    (i.VIDEO_PLAYER_TRANSCRIPT = "video_player_transcript"),
    i);
function p(e, t) {
    return null != e ? e : t;
}
var m =
    (((r = {})[(r.TIER_1 = 1)] = "TIER_1"),
    (r[(r.TIER_2 = 2)] = "TIER_2"),
    (r[(r.TIER_3 = 3)] = "TIER_3"),
    (r[(r.TIER_4 = 4)] = "TIER_4"),
    r);
let g = {
        video_player_video: { variant: "video", property: "url" },
        video_player_video_low_res: { variant: "videoLowRes", property: "url" },
        video_player_video_hls: { variant: "videoHls", property: "url" },
        video_player_thumbnail: { variant: "video", property: "thumbnail" },
        video_player_caption: { variant: "video", property: "caption" },
        video_player_transcript: { variant: "video", property: "transcript" },
    },
    A = {
        1: "https://cdn.discordapp.com/assets/content/5bb6b03e0f5fce0d4a3ff2e8b0cb68a360d1acab6a9b1dc5b1f9c081b5d6d4e7.webm",
        2: "https://cdn.discordapp.com/assets/content/d4fc1c99b3e3044530f08ede0156d1d43a13bf78f0f539e240b63f2d4dad3554.webm",
        3: "https://cdn.discordapp.com/assets/content/864e5841fd9af8da3c50ad6d6220bee54e8c2da2d36d3c85d0a5ae95cdbf095e.webm",
        4: "https://cdn.discordapp.com/assets/content/926d445a2ed98a4feaf27f2eda8553aeca4d16f70bd6c2adc90f891c1805eade.webm",
    };
function I(e, t, n, i, r) {
    var o;
    let l,
        d,
        h,
        E,
        m = !1,
        I = !1;
    switch (t) {
        case "hero":
            E = p(e.config.assets.heroVideo, e.config.assets.hero);
            break;
        case "hero_image":
            E = e.config.assets.hero;
            break;
        case "hero_video": {
            let t = e.config.assets.heroVideo;
            if (null == t) return null;
            E = t;
            break;
        }
        case "quest_bar_hero":
            E = p(e.config.assets.questBarHeroVideo, e.config.assets.questBarHero);
            break;
        case "quest_bar_hero_video": {
            let t = e.config.assets.questBarHeroVideo;
            if (null == t) return null;
            E = t;
            break;
        }
        case "quest_bar_hero_image":
            E = e.config.assets.questBarHero;
            break;
        case "reward": {
            let t = (0, u.sn)(e);
            if (t.type === a.l.VIRTUAL_CURRENCY) {
                let e = null != r ? A[r] : void 0;
                if (null != e) return { url: e, mimetype: "video/webm", isAnimated: !0 };
                return i
                    ? {
                          url: "https://cdn.discordapp.com/assets/content/f763593591e9ac5ee5abab6d8cce6c395263fa51f6c1e30c07cbfc793cd877d2.mp4",
                          mimetype: "video/mp4",
                          isAnimated: !0,
                      }
                    : { url: _.A, mimetype: "video/webm", isAnimated: !0 };
            }
            E = p(t.assetVideo, t.asset);
            break;
        }
        case "reward_image": {
            let t = (0, u.sn)(e);
            if (t.type === a.l.VIRTUAL_CURRENCY) return null;
            E = t.asset;
            break;
        }
        case "game_tile":
            "dark" === n && null != e.config.assets.gameTileDark
                ? (E = e.config.assets.gameTileDark)
                : "light" === n && null != e.config.assets.gameTileLight
                  ? (E = e.config.assets.gameTileLight)
                  : ((E = e.config.assets.gameTile), (m = !0));
            break;
        case "logo_type":
            "dark" === n && null != e.config.assets.logotypeDark
                ? (E = e.config.assets.logotypeDark)
                : "light" === n && null != e.config.assets.logotypeLight
                  ? (E = e.config.assets.logotypeLight)
                  : ((E = e.config.assets.logotype), (m = !0));
            break;
        case "cosponsor_logo_type":
            if (null == e.config.cosponsorMetadata) return null;
            "dark" === n && null != e.config.cosponsorMetadata.logotypeDark
                ? (E = e.config.cosponsorMetadata.logotypeDark)
                : "light" === n && null != e.config.cosponsorMetadata.logotypeLight
                  ? (E = e.config.cosponsorMetadata.logotypeLight)
                  : ((E = e.config.cosponsorMetadata.logotype), (m = !0));
            break;
        case "video_player_video":
        case "video_player_video_low_res":
        case "video_player_video_hls":
        case "video_player_thumbnail":
        case "video_player_caption":
        case "video_player_transcript": {
            if (!("taskConfigV2" in e.config)) return null;
            let n = e.config.taskConfigV2.tasks[i ? s.n.WATCH_VIDEO_ON_MOBILE : s.n.WATCH_VIDEO],
                r = g[t],
                a = n?.assets[r.variant]?.[r.property];
            if (null == a) return null;
            (E = a), (I = !0);
        }
    }
    let T =
        ((l = (function (e, t, n) {
            if (t.startsWith("blob:")) return t.split("?", 1).at(0) ?? t;
            let i = c.CI;
            return t.includes("/") ? ((i = c.GD), `${i}${t}`) : `${i}${e}${n?.theme != null ? `/${n.theme}` : ""}/${t}`;
        })(e.id, (o = E), { theme: m ? n : void 0 })),
        (h = null != (d = C(o)) && f.includes(d)),
        { url: l, mimetype: d, isAnimated: h });
    return I && null == T.mimetype ? null : T;
}
function T(e) {
    return e.startsWith("http://") || e.startsWith("https://") || e.startsWith("blob:") ? e : `${c.GD}${e}`;
}
function S(e) {
    if (null != e) return T(e);
}
function N(e) {
    return T(e);
}
function C(e) {
    if (e.startsWith("blob:")) {
        let t = o.A.toURLSafe(e)?.searchParams.get("mimetype") ?? void 0;
        return null != t ? decodeURIComponent(t) : null;
    }
    let t = o.A.toURLSafe(e);
    switch (t?.searchParams.get("format")?.toLowerCase() ?? h.exec(e)?.[1]?.toLowerCase()) {
        case "webm":
            return "video/webm";
        case "mp4":
            return "video/mp4";
        case "webp":
            return "image/webp";
        case "jpg":
        case "jpeg":
            return "image/jpeg";
        case "png":
            return "image/png";
        case "gif":
            return "image/gif";
        case "svg":
            return "image/svg+xml";
        case "txt":
            return "text/plain";
        case "vtt":
            return "text/vtt";
        case "ts":
            return "video/mp2t";
        case "m3u8":
            return "application/x-mpegURL";
        default:
            return null;
    }
}
function y(e) {
    return Math.min(Math.ceil(e), d.uJv);
}
function O(e, t) {
    let n = (0, l.A)();
    return n < 3 ? { width: e, height: t } : { width: e * n, height: t * n };
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (e.startsWith("blob:")) return e;
    let n = o.A.toURLSafe(e);
    return null == n
        ? e
        : (null != t.format && n.searchParams.set("format", t.format),
          null != t.width && n.searchParams.set("width", `${y(t.width)}`),
          null != t.height && n.searchParams.set("height", `${y(t.height)}`),
          n.toString());
}
function v(e, t) {
    if (e.startsWith("blob:")) return e;
    let n = o.A.toURLSafe(e);
    return null == n
        ? null
        : (n.searchParams.set("format", "webp"),
          null != t && (n.searchParams.set("width", `${y(t.width)}`), n.searchParams.set("height", `${y(t.height)}`)),
          n.toString());
}
