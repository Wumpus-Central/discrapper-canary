n.d(t, {
    UX: () => S,
    WV: () => T,
    Yt: () => I,
    fY: () => h,
    tW: () => y,
    vm: () => v,
}),
    n(747238),
    n(134528),
    n(947204),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(412703),
    i = n(440703),
    a = n(998218),
    s = n(835517),
    o = n(92246),
    l = n(654487),
    c = n(652215),
    u = n(427483),
    d = n(371822);
let f = 3,
    p = /\.([a-zA-Z0-9]+)$/,
    _ = ["video/mp4", "video/webm"];
var h = (function (e) {
    return (
        (e.HERO = "hero"),
        (e.HERO_IMAGE = "hero_image"),
        (e.HERO_VIDEO = "hero_video"),
        (e.QUEST_BAR_HERO = "quest_bar_hero"),
        (e.QUEST_BAR_HERO_VIDEO = "quest_bar_hero_video"),
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
    let r = O(e, t, n),
        i = v(t),
        a = null != i && _.includes(i);
    return {
        url: r,
        mimetype: i,
        isAnimated: a,
    };
}

function g(e, t) {
    return null != e ? e : t;
}
let E = {
    video_player_video: {
        variant: "video",
        property: "url",
    },
    video_player_video_low_res: {
        variant: "videoLowRes",
        property: "url",
    },
    video_player_video_hls: {
        variant: "videoHls",
        property: "url",
    },
    video_player_thumbnail: {
        variant: "video",
        property: "thumbnail",
    },
    video_player_caption: {
        variant: "video",
        property: "caption",
    },
    video_player_transcript: {
        variant: "video",
        property: "transcript",
    },
};

function y(e, t, n, a) {
    let s,
        l = !1,
        c = !1;
    switch (t) {
        case "hero":
            s = g(e.config.assets.heroVideo, e.config.assets.hero);
            break;
        case "hero_image":
            s = e.config.assets.hero;
            break;
        case "hero_video": {
            let t = e.config.assets.heroVideo;
            if (null == t) return null;
            s = t;
            break;
        }
        case "quest_bar_hero":
            s = g(e.config.assets.questBarHeroVideo, e.config.assets.questBarHero);
            break;
        case "quest_bar_hero_video": {
            let t = e.config.assets.questBarHeroVideo;
            if (null == t) return null;
            s = t;
            break;
        }
        case "reward": {
            let t = (0, o.sn)(e);
            if (t.type === i.l.VIRTUAL_CURRENCY)
                return a
                    ? {
                          url: d.A,
                          mimetype: "video/mp4",
                          isAnimated: !0,
                      }
                    : {
                          url: u.A,
                          mimetype: "video/webm",
                          isAnimated: !0,
                      };
            s = g(t.assetVideo, t.asset);
            break;
        }
        case "reward_image": {
            let t = (0, o.sn)(e);
            if (t.type === i.l.VIRTUAL_CURRENCY) return null;
            s = t.asset;
            break;
        }
        case "game_tile":
            "dark" === n && null != e.config.assets.gameTileDark
                ? (s = e.config.assets.gameTileDark)
                : "light" === n && null != e.config.assets.gameTileLight
                  ? (s = e.config.assets.gameTileLight)
                  : ((s = e.config.assets.gameTile), (l = !0));
            break;
        case "logo_type":
            "dark" === n && null != e.config.assets.logotypeDark
                ? (s = e.config.assets.logotypeDark)
                : "light" === n && null != e.config.assets.logotypeLight
                  ? (s = e.config.assets.logotypeLight)
                  : ((s = e.config.assets.logotype), (l = !0));
            break;
        case "cosponsor_logo_type":
            if (null == e.config.cosponsorMetadata) return null;
            "dark" === n && null != e.config.cosponsorMetadata.logotypeDark
                ? (s = e.config.cosponsorMetadata.logotypeDark)
                : "light" === n && null != e.config.cosponsorMetadata.logotypeLight
                  ? (s = e.config.cosponsorMetadata.logotypeLight)
                  : ((s = e.config.cosponsorMetadata.logotype), (l = !0));
            break;
        case "video_player_video":
        case "video_player_video_low_res":
        case "video_player_video_hls":
        case "video_player_thumbnail":
        case "video_player_caption":
        case "video_player_transcript": {
            var f;
            if (!("taskConfigV2" in e.config)) return null;
            let n = e.config.taskConfigV2.tasks[a ? r.n.WATCH_VIDEO_ON_MOBILE : r.n.WATCH_VIDEO],
                i = E[t],
                o = null == n || null == (f = n.assets[i.variant]) ? void 0 : f[i.property];
            if (null == o) return null;
            (s = o), (c = !0);
        }
    }
    let p = m(e.id, s, {
        theme: l ? n : void 0,
    });
    return c && null == p.mimetype ? null : p;
}

function b(e) {
    var t;
    return null != (t = e.split("?", 1).at(0)) ? t : e;
}

function O(e, t, n) {
    if (t.startsWith("blob:")) return b(t);
    let r = l.CI;
    return t.includes("/")
        ? ((r = l.GD), "".concat(r).concat(t))
        : ""
              .concat(r)
              .concat(e)
              .concat((null == n ? void 0 : n.theme) != null ? "/".concat(n.theme) : "", "/")
              .concat(t);
}

function v(e) {
    var t, n, r;
    if (e.startsWith("blob:")) {
        let t = null != (r = new URL(e).searchParams.get("mimetype")) ? r : void 0;
        return null != t ? decodeURIComponent(t) : null;
    }
    switch (null == (n = p.exec(e)) || null == (t = n[1]) ? void 0 : t.toLowerCase()) {
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

function A(e) {
    return Math.min(Math.ceil(e), c.uJv);
}

function I(e, t) {
    let n = (0, s.A)();
    return n < f
        ? {
              width: e,
              height: t,
          }
        : {
              width: e * n,
              height: t * n,
          };
}

function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (e.startsWith("blob:")) return e;
    let n = a.A.toURLSafe(e);
    return null == n
        ? e
        : (null != t.format && n.searchParams.append("format", t.format),
          null != t.width && n.searchParams.append("width", "".concat(A(t.width))),
          null != t.height && n.searchParams.append("height", "".concat(A(t.height))),
          n.toString());
}

function T(e, t) {
    if (e.startsWith("blob:")) return e;
    let n = a.A.toURLSafe(e);
    return null == n
        ? null
        : (n.searchParams.append("format", "webp"),
          null != t &&
              (n.searchParams.append("width", "".concat(A(t.width))),
              n.searchParams.append("height", "".concat(A(t.height)))),
          n.toString());
}
