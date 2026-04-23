"use strict";
n.d(t, { UX: () => y, WV: () => N, Yt: () => S, dv: () => A, fY: () => h, tW: () => g, vm: () => I }),
    n(134528),
    n(947204);
var r,
    i = n(412703),
    s = n(440703),
    a = n(998218),
    o = n(835517),
    l = n(92246),
    u = n(654487),
    c = n(652215),
    d = n(427483),
    _ = n(371822);
let f = /\.([a-zA-Z0-9]+)$/,
    p = ["video/mp4", "video/webm"];
var h =
    (((r = {}).HERO = "hero"),
    (r.HERO_IMAGE = "hero_image"),
    (r.HERO_VIDEO = "hero_video"),
    (r.QUEST_BAR_HERO = "quest_bar_hero"),
    (r.QUEST_BAR_HERO_VIDEO = "quest_bar_hero_video"),
    (r.QUEST_BAR_HERO_IMAGE = "quest_bar_hero_image"),
    (r.REWARD = "reward"),
    (r.REWARD_IMAGE = "reward_image"),
    (r.GAME_TILE = "game_tile"),
    (r.LOGO_TYPE = "logo_type"),
    (r.COSPONSOR_LOGO_TYPE = "cosponsor_logo_type"),
    (r.VIDEO_PLAYER_VIDEO = "video_player_video"),
    (r.VIDEO_PLAYER_VIDEO_LOW_RES = "video_player_video_low_res"),
    (r.VIDEO_PLAYER_VIDEO_HLS = "video_player_video_hls"),
    (r.VIDEO_PLAYER_THUMBNAIL = "video_player_thumbnail"),
    (r.VIDEO_PLAYER_CAPTION = "video_player_caption"),
    (r.VIDEO_PLAYER_TRANSCRIPT = "video_player_transcript"),
    r);
function E(e, t) {
    return null != e ? e : t;
}
let m = {
    video_player_video: { variant: "video", property: "url" },
    video_player_video_low_res: { variant: "videoLowRes", property: "url" },
    video_player_video_hls: { variant: "videoHls", property: "url" },
    video_player_thumbnail: { variant: "video", property: "thumbnail" },
    video_player_caption: { variant: "video", property: "caption" },
    video_player_transcript: { variant: "video", property: "transcript" },
};
function g(e, t, n, r) {
    var a;
    let o,
        c,
        f,
        h,
        g = !1,
        A = !1;
    switch (t) {
        case "hero":
            h = E(e.config.assets.heroVideo, e.config.assets.hero);
            break;
        case "hero_image":
            h = e.config.assets.hero;
            break;
        case "hero_video": {
            let t = e.config.assets.heroVideo;
            if (null == t) return null;
            h = t;
            break;
        }
        case "quest_bar_hero":
            h = E(e.config.assets.questBarHeroVideo, e.config.assets.questBarHero);
            break;
        case "quest_bar_hero_video": {
            let t = e.config.assets.questBarHeroVideo;
            if (null == t) return null;
            h = t;
            break;
        }
        case "quest_bar_hero_image":
            h = e.config.assets.questBarHero;
            break;
        case "reward": {
            let t = (0, l.sn)(e);
            if (t.type === s.l.VIRTUAL_CURRENCY)
                return r
                    ? { url: _.A, mimetype: "video/mp4", isAnimated: !0 }
                    : { url: d.A, mimetype: "video/webm", isAnimated: !0 };
            h = E(t.assetVideo, t.asset);
            break;
        }
        case "reward_image": {
            let t = (0, l.sn)(e);
            if (t.type === s.l.VIRTUAL_CURRENCY) return null;
            h = t.asset;
            break;
        }
        case "game_tile":
            "dark" === n && null != e.config.assets.gameTileDark
                ? (h = e.config.assets.gameTileDark)
                : "light" === n && null != e.config.assets.gameTileLight
                  ? (h = e.config.assets.gameTileLight)
                  : ((h = e.config.assets.gameTile), (g = !0));
            break;
        case "logo_type":
            "dark" === n && null != e.config.assets.logotypeDark
                ? (h = e.config.assets.logotypeDark)
                : "light" === n && null != e.config.assets.logotypeLight
                  ? (h = e.config.assets.logotypeLight)
                  : ((h = e.config.assets.logotype), (g = !0));
            break;
        case "cosponsor_logo_type":
            if (null == e.config.cosponsorMetadata) return null;
            "dark" === n && null != e.config.cosponsorMetadata.logotypeDark
                ? (h = e.config.cosponsorMetadata.logotypeDark)
                : "light" === n && null != e.config.cosponsorMetadata.logotypeLight
                  ? (h = e.config.cosponsorMetadata.logotypeLight)
                  : ((h = e.config.cosponsorMetadata.logotype), (g = !0));
            break;
        case "video_player_video":
        case "video_player_video_low_res":
        case "video_player_video_hls":
        case "video_player_thumbnail":
        case "video_player_caption":
        case "video_player_transcript": {
            if (!("taskConfigV2" in e.config)) return null;
            let n = e.config.taskConfigV2.tasks[r ? i.n.WATCH_VIDEO_ON_MOBILE : i.n.WATCH_VIDEO],
                s = m[t],
                a = n?.assets[s.variant]?.[s.property];
            if (null == a) return null;
            (h = a), (A = !0);
        }
    }
    let T =
        ((o = (function (e, t, n) {
            if (t.startsWith("blob:")) return t.split("?", 1).at(0) ?? t;
            let r = u.CI;
            return t.includes("/") ? ((r = u.GD), `${r}${t}`) : `${r}${e}${n?.theme != null ? `/${n.theme}` : ""}/${t}`;
        })(e.id, (a = h), { theme: g ? n : void 0 })),
        (f = null != (c = I(a)) && p.includes(c)),
        { url: o, mimetype: c, isAnimated: f });
    return A && null == T.mimetype ? null : T;
}
function A(e) {
    if (null != e)
        return e.startsWith("http://") || e.startsWith("https://") || e.startsWith("blob:") ? e : `${u.GD}${e}`;
}
function I(e) {
    if (e.startsWith("blob:")) {
        let t = a.A.toURLSafe(e)?.searchParams.get("mimetype") ?? void 0;
        return null != t ? decodeURIComponent(t) : null;
    }
    let t = a.A.toURLSafe(e);
    switch (t?.searchParams.get("format")?.toLowerCase() ?? f.exec(e)?.[1]?.toLowerCase()) {
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
function T(e) {
    return Math.min(Math.ceil(e), c.uJv);
}
function S(e, t) {
    let n = (0, o.A)();
    return n < 3 ? { width: e, height: t } : { width: e * n, height: t * n };
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (e.startsWith("blob:")) return e;
    let n = a.A.toURLSafe(e);
    return null == n
        ? e
        : (null != t.format && n.searchParams.set("format", t.format),
          null != t.width && n.searchParams.set("width", `${T(t.width)}`),
          null != t.height && n.searchParams.set("height", `${T(t.height)}`),
          n.toString());
}
function N(e, t) {
    if (e.startsWith("blob:")) return e;
    let n = a.A.toURLSafe(e);
    return null == n
        ? null
        : (n.searchParams.set("format", "webp"),
          null != t && (n.searchParams.set("width", `${T(t.width)}`), n.searchParams.set("height", `${T(t.height)}`)),
          n.toString());
}
