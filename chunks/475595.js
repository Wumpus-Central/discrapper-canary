n.d(t, {
    Dm: () => p,
    N0: () => s,
    Q2: () => _,
    Rt: () => c,
    eC: () => l,
    fh: () => d
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
    i = n(46140),
    a = n(151702);
let o = /\.([a-zA-Z0-9]+)$/,
    s = ['video/mp4', 'video/webm'];
var l = (function (e) {
    return (e.HERO = 'hero'), (e.QUEST_BAR_HERO = 'quest_bar_hero'), (e.REWARD = 'reward'), (e.GAME_TILE = 'game_tile'), (e.LOGO_TYPE = 'logo_type'), e;
})({});
function c(e, t, n) {
    let r = _(e, t, n),
        i = p(t),
        a = null != i && s.includes(i);
    return {
        url: r,
        mimetype: i,
        isAnimated: a
    };
}
function u(e, t) {
    return null != e ? e : t;
}
function d(e, t, n) {
    let o;
    switch (t) {
        case 'hero':
            o = u(e.config.assets.heroVideo, e.config.assets.hero);
            break;
        case 'quest_bar_hero':
            o = u(e.config.assets.questBarHeroVideo, e.config.assets.questBarHero);
            break;
        case 'reward': {
            var s, l;
            let t = null != (l = null == (s = e.userStatus) ? void 0 : s.claimedTier) ? l : 0,
                n = 'rewardsConfig' in e.config ? e.config.rewardsConfig.rewards[t] : e.config.rewards[t];
            if (n.type === r.w.VIRTUAL_CURRENCY)
                return {
                    url: a.Z,
                    mimetype: 'video/webm',
                    isAnimated: !0
                };
            o = u(n.assetVideo, n.asset);
            break;
        }
        case 'game_tile':
            o = e.config.assets.gameTile;
            break;
        case 'logo_type':
            o = e.config.assets.logotype;
    }
    let d = e.config.features.includes(i.S7.QUESTS_CDN);
    return c(e.id, o, {
        theme: n,
        newCdn: d
    });
}
function f(e) {
    var t;
    return null != (t = e.split('?', 1).at(0)) ? t : e;
}
function _(e, t, n) {
    if (t.startsWith('blob:')) return f(t);
    let r = (null == n ? void 0 : n.newCdn) ? i.tD : i.Uo;
    return ''
        .concat(r)
        .concat(e)
        .concat((null == n ? void 0 : n.theme) != null ? '/'.concat(n.theme) : '', '/')
        .concat(t);
}
function p(e) {
    var t, n, r;
    if (e.startsWith('blob:')) {
        let t = null != (r = new URL(e).searchParams.get('mimetype')) ? r : void 0;
        return null != t ? decodeURIComponent(t) : null;
    }
    switch (null == (n = o.exec(e)) || null == (t = n[1]) ? void 0 : t.toLowerCase()) {
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
