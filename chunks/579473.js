"use strict";
n.d(t, { UX: () => C, WV: () => R, Yt: () => N, dv: () => S, fY: () => h, tW: () => A, vm: () => y }),
    n(134528),
    n(947204);
var r = n(412703),
    i = n(440703),
    s = n(998218),
    a = n(835517),
    o = n(92246),
    l = n(654487),
    u = n(652215),
    c = n(427483),
    d = n(371822);
let _ = 3,
    f = /\.([a-zA-Z0-9]+)$/,
    p = ["video/mp4", "video/webm"];
var h = (function (e) {
    return (
        (e.HERO = "hero"),
        (e.HERO_IMAGE = "hero_image"),
        (e.HERO_VIDEO = "hero_video"),
        (e.QUEST_BAR_HERO = "quest_bar_hero"),
        (e.QUEST_BAR_HERO_VIDEO = "quest_bar_hero_video"),
        (e.QUEST_BAR_HERO_IMAGE = "quest_bar_hero_image"),
        (e.REWARD = "reward"),
        (e.REWARD_IMAGE = "reward_image"),
        (e.GAME_TILE = "game_tile"),
        (e.LOGO_TYPE = "logo_type"),
        (e.COSPONSOR_LOGO_TYPE = "cosponsor_logo_type"),
        (e.VIDEO_PLAYER_VIDEO = "video_player_video"),
        (e.VIDEO_PLAYER_VIDEO_LOW_RES = "video_player_video_low_res"),
        (e.VIDEO_PLAYER_VIDEO_HLS = "video_player_video_hls"),
        (e.VIDEO_PLAYER_THUMBNAIL = "video_player_thumbnail"),
        (e.VIDEO_PLAYER_CAPTION = "video_player_caption"),
        (e.VIDEO_PLAYER_TRANSCRIPT = "video_player_transcript"),
        e
    );
})({});
function m(e, t, n) {
    let r = T(e, t, n),
        i = y(t),
        s = null != i && p.includes(i);
    return { url: r, mimetype: i, isAnimated: s };
}
function E(e, t) {
    return null != e ? e : t;
}
let g = {
    video_player_video: { variant: "video", property: "url" },
    video_player_video_low_res: { variant: "videoLowRes", property: "url" },
    video_player_video_hls: { variant: "videoHls", property: "url" },
    video_player_thumbnail: { variant: "video", property: "thumbnail" },
    video_player_caption: { variant: "video", property: "caption" },
    video_player_transcript: { variant: "video", property: "transcript" },
};
function A(e, t, n, s) {
    let a,
        l = !1,
        u = !1;
    switch (t) {
        case "hero":
            a = E(e.config.assets.heroVideo, e.config.assets.hero);
            break;
        case "hero_image":
            a = e.config.assets.hero;
            break;
        case "hero_video": {
            let t = e.config.assets.heroVideo;
            if (null == t) return null;
            a = t;
            break;
        }
        case "quest_bar_hero":
            a = E(e.config.assets.questBarHeroVideo, e.config.assets.questBarHero);
            break;
        case "quest_bar_hero_video": {
            let t = e.config.assets.questBarHeroVideo;
            if (null == t) return null;
            a = t;
            break;
        }
        case "quest_bar_hero_image":
            a = e.config.assets.questBarHero;
            break;
        case "reward": {
            let t = (0, o.sn)(e);
            if (t.type === i.l.VIRTUAL_CURRENCY)
                return s
                    ? { url: d.A, mimetype: "video/mp4", isAnimated: !0 }
                    : { url: c.A, mimetype: "video/webm", isAnimated: !0 };
            a = E(t.assetVideo, t.asset);
            break;
        }
        case "reward_image": {
            let t = (0, o.sn)(e);
            if (t.type === i.l.VIRTUAL_CURRENCY) return null;
            a = t.asset;
            break;
        }
        case "game_tile":
            "dark" === n && null != e.config.assets.gameTileDark
                ? (a = e.config.assets.gameTileDark)
                : "light" === n && null != e.config.assets.gameTileLight
                  ? (a = e.config.assets.gameTileLight)
                  : ((a = e.config.assets.gameTile), (l = !0));
            break;
        case "logo_type":
            "dark" === n && null != e.config.assets.logotypeDark
                ? (a = e.config.assets.logotypeDark)
                : "light" === n && null != e.config.assets.logotypeLight
                  ? (a = e.config.assets.logotypeLight)
                  : ((a = e.config.assets.logotype), (l = !0));
            break;
        case "cosponsor_logo_type":
            if (null == e.config.cosponsorMetadata) return null;
            "dark" === n && null != e.config.cosponsorMetadata.logotypeDark
                ? (a = e.config.cosponsorMetadata.logotypeDark)
                : "light" === n && null != e.config.cosponsorMetadata.logotypeLight
                  ? (a = e.config.cosponsorMetadata.logotypeLight)
                  : ((a = e.config.cosponsorMetadata.logotype), (l = !0));
            break;
        case "video_player_video":
        case "video_player_video_low_res":
        case "video_player_video_hls":
        case "video_player_thumbnail":
        case "video_player_caption":
        case "video_player_transcript": {
            if (!("taskConfigV2" in e.config)) return null;
            let n = e.config.taskConfigV2.tasks[s ? r.n.WATCH_VIDEO_ON_MOBILE : r.n.WATCH_VIDEO],
                i = g[t],
                o = n?.assets[i.variant]?.[i.property];
            if (null == o) return null;
            (a = o), (u = !0);
        }
    }
    let _ = m(e.id, a, { theme: l ? n : void 0 });
    return u && null == _.mimetype ? null : _;
}
function I(e) {
    return e.split("?", 1).at(0) ?? e;
}
function T(e, t, n) {
    if (t.startsWith("blob:")) return I(t);
    let r = l.CI;
    return t.includes("/") ? ((r = l.GD), `${r}${t}`) : `${r}${e}${n?.theme != null ? `/${n.theme}` : ""}/${t}`;
}
function S(e) {
    return e.startsWith("http://") || e.startsWith("https://") || e.startsWith("blob:") ? e : `${l.GD}${e}`;
}
function y(e) {
    if (e.startsWith("blob:")) {
        let t = s.A.toURLSafe(e)?.searchParams.get("mimetype") ?? void 0;
        return null != t ? decodeURIComponent(t) : null;
    }
    let t = s.A.toURLSafe(e);
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
function v(e) {
    return Math.min(Math.ceil(e), u.uJv);
}
function N(e, t) {
    let n = (0, a.A)();
    return n < _ ? { width: e, height: t } : { width: e * n, height: t * n };
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (e.startsWith("blob:")) return e;
    let n = s.A.toURLSafe(e);
    return null == n
        ? e
        : (null != t.format && n.searchParams.set("format", t.format),
          null != t.width && n.searchParams.set("width", `${v(t.width)}`),
          null != t.height && n.searchParams.set("height", `${v(t.height)}`),
          n.toString());
}
function R(e, t) {
    if (e.startsWith("blob:")) return e;
    let n = s.A.toURLSafe(e);
    return null == n
        ? null
        : (n.searchParams.set("format", "webp"),
          null != t && (n.searchParams.set("width", `${v(t.width)}`), n.searchParams.set("height", `${v(t.height)}`)),
          n.toString());
}
