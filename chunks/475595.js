n.d(t, {
    Dm: () => g,
    N0: () => u,
    Q2: () => m,
    Rt: () => _,
    eC: () => d,
    f0: () => b,
    fh: () => p
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
    a = n(918701),
    o = n(46140),
    s = n(981631),
    l = n(151702);
let c = /\.([a-zA-Z0-9]+)$/,
    u = ['video/mp4', 'video/webm'];
var d = (function (e) {
    return (e.HERO = 'hero'), (e.HERO_IMAGE = 'hero_image'), (e.HERO_VIDEO = 'hero_video'), (e.QUEST_BAR_HERO = 'quest_bar_hero'), (e.QUEST_BAR_HERO_VIDEO = 'quest_bar_hero_video'), (e.REWARD = 'reward'), (e.GAME_TILE = 'game_tile'), (e.LOGO_TYPE = 'logo_type'), e;
})({});
function _(e, t, n) {
    let r = m(e, t, n),
        i = g(t),
        a = null != i && u.includes(i);
    return {
        url: r,
        mimetype: i,
        isAnimated: a
    };
}
function f(e, t) {
    return null != e ? e : t;
}
function p(e, t, n) {
    var i, s;
    let c;
    switch (t) {
        case 'hero':
            c = f(e.config.assets.heroVideo, e.config.assets.hero);
            break;
        case 'hero_image':
            c = e.config.assets.hero;
            break;
        case 'hero_video': {
            let t = e.config.assets.heroVideo,
                n = 'videoMetadata' in e.config ? (null == (i = e.config.videoMetadata) ? void 0 : i.assets.questHomeVideo) : null,
                r = null != t ? t : n;
            if (null == r) return null;
            c = r;
            break;
        }
        case 'quest_bar_hero':
            c = f(e.config.assets.questBarHeroVideo, e.config.assets.questBarHero);
            break;
        case 'quest_bar_hero_video': {
            let t = e.config.assets.questBarHeroVideo,
                n = 'videoMetadata' in e.config ? (null == (s = e.config.videoMetadata) ? void 0 : s.assets.questBarPreviewVideo) : null,
                r = null != t ? t : n;
            if (null == r) return null;
            c = r;
            break;
        }
        case 'reward': {
            let t = (0, a.hF)(e);
            if (t.type === r.w.VIRTUAL_CURRENCY)
                return {
                    url: l.Z,
                    mimetype: 'video/webm',
                    isAnimated: !0
                };
            c = f(t.assetVideo, t.asset);
            break;
        }
        case 'game_tile':
            c = e.config.assets.gameTile;
            break;
        case 'logo_type':
            c = e.config.assets.logotype;
    }
    let u = e.config.features.includes(o.S7.QUESTS_CDN);
    return _(e.id, c, {
        theme: n,
        newCdn: u
    });
}
function h(e) {
    var t;
    return null != (t = e.split('?', 1).at(0)) ? t : e;
}
function m(e, t, n) {
    if (t.startsWith('blob:')) return h(t);
    let r = (null == n ? void 0 : n.newCdn) ? o.tD : o.Uo;
    return ''
        .concat(r)
        .concat(e)
        .concat((null == n ? void 0 : n.theme) != null ? '/'.concat(n.theme) : '', '/')
        .concat(t);
}
function g(e) {
    var t, n, r;
    if (e.startsWith('blob:')) {
        let t = null != (r = new URL(e).searchParams.get('mimetype')) ? r : void 0;
        return null != t ? decodeURIComponent(t) : null;
    }
    switch (null == (n = c.exec(e)) || null == (t = n[1]) ? void 0 : t.toLowerCase()) {
        case 'webm':
            return 'video/webm';
        case 'mp4':
            return 'video/mp4';
        case 'webp':
            return 'image/webp';
        case 'jpg':
        case 'jpeg':
            return 'image/jpeg';
        case 'png':
            return 'image/png';
        case 'gif':
            return 'image/gif';
        case 'svg':
            return 'image/svg+xml';
        case 'txt':
            return 'text/plain';
        case 'vtt':
            return 'text/vtt';
        case 'ts':
            return 'video/mp2t';
        case 'm3u8':
            return 'application/x-mpegURL';
        default:
            return null;
    }
}
function E(e) {
    return Math.min(Math.ceil(e), s.hiG);
}
function b(e, t) {
    let n = i.Z.toURLSafe(e);
    return null == n ? null : (n.searchParams.append('format', 'webp'), null != t && (n.searchParams.append('width', ''.concat(E(t.width))), n.searchParams.append('height', ''.concat(E(t.height)))), n.toString());
}
