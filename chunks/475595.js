n.d(t, {
    Dm: () => h,
    N0: () => l,
    Q2: () => p,
    Rt: () => u,
    eC: () => c,
    fh: () => f
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
    i = n(918701),
    a = n(46140),
    o = n(151702);
let s = /\.([a-zA-Z0-9]+)$/,
    l = ['video/mp4', 'video/webm'];
var c = (function (e) {
    return (e.HERO = 'hero'), (e.QUEST_BAR_HERO = 'quest_bar_hero'), (e.REWARD = 'reward'), (e.GAME_TILE = 'game_tile'), (e.LOGO_TYPE = 'logo_type'), e;
})({});
function u(e, t, n) {
    let r = p(e, t, n),
        i = h(t),
        a = null != i && l.includes(i);
    return {
        url: r,
        mimetype: i,
        isAnimated: a
    };
}
function d(e, t) {
    return null != e ? e : t;
}
function f(e, t, n) {
    let s;
    switch (t) {
        case 'hero':
            s = d(e.config.assets.heroVideo, e.config.assets.hero);
            break;
        case 'quest_bar_hero':
            s = d(e.config.assets.questBarHeroVideo, e.config.assets.questBarHero);
            break;
        case 'reward': {
            let t = (0, i.hF)(e);
            if (t.type === r.w.VIRTUAL_CURRENCY)
                return {
                    url: o.Z,
                    mimetype: 'video/webm',
                    isAnimated: !0
                };
            s = d(t.assetVideo, t.asset);
            break;
        }
        case 'game_tile':
            s = e.config.assets.gameTile;
            break;
        case 'logo_type':
            s = e.config.assets.logotype;
    }
    let l = e.config.features.includes(a.S7.QUESTS_CDN);
    return u(e.id, s, {
        theme: n,
        newCdn: l
    });
}
function _(e) {
    var t;
    return null != (t = e.split('?', 1).at(0)) ? t : e;
}
function p(e, t, n) {
    if (t.startsWith('blob:')) return _(t);
    let r = (null == n ? void 0 : n.newCdn) ? a.tD : a.Uo;
    return ''
        .concat(r)
        .concat(e)
        .concat((null == n ? void 0 : n.theme) != null ? '/'.concat(n.theme) : '', '/')
        .concat(t);
}
function h(e) {
    var t, n, r;
    if (e.startsWith('blob:')) {
        let t = null != (r = new URL(e).searchParams.get('mimetype')) ? r : void 0;
        return null != t ? decodeURIComponent(t) : null;
    }
    switch (null == (n = s.exec(e)) || null == (t = n[1]) ? void 0 : t.toLowerCase()) {
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
