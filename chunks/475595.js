n.d(t, {
    Dm: () => y,
    N0: () => _,
    Q2: () => b,
    eC: () => p,
    f0: () => T,
    fh: () => g,
    nK: () => v,
    sN: () => I,
}),
    n(35282),
    n(784620),
    n(973216),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685);
var r = n(887003),
    i = n(591759),
    a = n(921948),
    o = n(509212),
    s = n(46140),
    l = n(981631),
    c = n(255649),
    u = n(636573);
let d = 3,
    f = /\.([a-zA-Z0-9]+)$/,
    _ = ["video/mp4", "video/webm"];
var p = (function (e) {
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
        e
    );
})({});
function h(e, t, n) {
    let r = b(e, t, n),
        i = y(t),
        a = null != i && _.includes(i);
    return {
        url: r,
        mimetype: i,
        isAnimated: a,
    };
}
function m(e, t) {
    return null != e ? e : t;
}
function g(e, t, n, i) {
    var a, l;
    let d,
        f = !1;
    switch (t) {
        case "hero":
            d = m(e.config.assets.heroVideo, e.config.assets.hero);
            break;
        case "hero_image":
            d = e.config.assets.hero;
            break;
        case "hero_video": {
            let t = e.config.assets.heroVideo,
                n =
                    "videoMetadata" in e.config
                        ? null == (a = e.config.videoMetadata)
                            ? void 0
                            : a.assets.questHomeVideo
                        : null,
                r = null != t ? t : n;
            if (null == r) return null;
            d = r;
            break;
        }
        case "quest_bar_hero":
            d = m(e.config.assets.questBarHeroVideo, e.config.assets.questBarHero);
            break;
        case "quest_bar_hero_video": {
            let t = e.config.assets.questBarHeroVideo,
                n =
                    "videoMetadata" in e.config
                        ? null == (l = e.config.videoMetadata)
                            ? void 0
                            : l.assets.questBarPreviewVideo
                        : null,
                r = null != t ? t : n;
            if (null == r) return null;
            d = r;
            break;
        }
        case "reward": {
            let t = (0, o.hF)(e);
            if (t.type === r.w.VIRTUAL_CURRENCY)
                return i
                    ? {
                          url: u.Z,
                          mimetype: "video/mp4",
                          isAnimated: !0,
                      }
                    : {
                          url: c.Z,
                          mimetype: "video/webm",
                          isAnimated: !0,
                      };
            d = m(t.assetVideo, t.asset);
            break;
        }
        case "reward_image": {
            let t = (0, o.hF)(e);
            if (t.type === r.w.VIRTUAL_CURRENCY) return null;
            d = t.asset;
            break;
        }
        case "game_tile":
            "dark" === n && null != e.config.assets.gameTileDark
                ? (d = e.config.assets.gameTileDark)
                : "light" === n && null != e.config.assets.gameTileLight
                  ? (d = e.config.assets.gameTileLight)
                  : ((d = e.config.assets.gameTile), (f = !0));
            break;
        case "logo_type":
            "dark" === n && null != e.config.assets.logotypeDark
                ? (d = e.config.assets.logotypeDark)
                : "light" === n && null != e.config.assets.logotypeLight
                  ? (d = e.config.assets.logotypeLight)
                  : ((d = e.config.assets.logotype), (f = !0));
            break;
        case "cosponsor_logo_type":
            if (null == e.config.cosponsorMetadata) return null;
            "dark" === n && null != e.config.cosponsorMetadata.logotypeDark
                ? (d = e.config.cosponsorMetadata.logotypeDark)
                : "light" === n && null != e.config.cosponsorMetadata.logotypeLight
                  ? (d = e.config.cosponsorMetadata.logotypeLight)
                  : ((d = e.config.cosponsorMetadata.logotype), (f = !0));
    }
    let _ = e.config.features.includes(s.S7.QUESTS_CDN);
    return h(e.id, d, {
        theme: f ? n : void 0,
        newCdn: _,
    });
}
function E(e) {
    var t;
    return null != (t = e.split("?", 1).at(0)) ? t : e;
}
function b(e, t, n) {
    if (t.startsWith("blob:")) return E(t);
    let r = (null == n ? void 0 : n.newCdn) ? s.tD : s.Uo;
    return ""
        .concat(r)
        .concat(e)
        .concat((null == n ? void 0 : n.theme) != null ? "/".concat(n.theme) : "", "/")
        .concat(t);
}
function y(e) {
    var t, n, r;
    if (e.startsWith("blob:")) {
        let t = null != (r = new URL(e).searchParams.get("mimetype")) ? r : void 0;
        return null != t ? decodeURIComponent(t) : null;
    }
    switch (null == (n = f.exec(e)) || null == (t = n[1]) ? void 0 : t.toLowerCase()) {
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
function O(e) {
    return Math.min(Math.ceil(e), l.hiG);
}
function v(e, t) {
    let n = (0, a.Z)();
    return n < d
        ? {
              width: e,
              height: t,
          }
        : {
              width: e * n,
              height: t * n,
          };
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (e.startsWith("blob:")) return e;
    let n = i.Z.toURLSafe(e);
    return null == n
        ? e
        : (null != t.format && n.searchParams.append("format", t.format),
          null != t.width && n.searchParams.append("width", "".concat(O(t.width))),
          null != t.height && n.searchParams.append("height", "".concat(O(t.height))),
          n.toString());
}
function T(e, t) {
    if (e.startsWith("blob:")) return e;
    let n = i.Z.toURLSafe(e);
    return null == n
        ? null
        : (n.searchParams.append("format", "webp"),
          null != t &&
              (n.searchParams.append("width", "".concat(O(t.width))),
              n.searchParams.append("height", "".concat(O(t.height)))),
          n.toString());
}
