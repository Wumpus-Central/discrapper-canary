n.d(t, {
    Dm: () => f,
    N0: () => a,
    Q2: () => d,
    Rt: () => o,
    eC: () => s,
    fh: () => u
}),
    n(571269),
    n(298267),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(46140);
let r = /\.([a-zA-Z0-9]+)$/,
    a = ['video/mp4', 'video/webm'];
var s = (function (e) {
    return (e.HERO = 'hero'), (e.QUEST_BAR_HERO = 'quest_bar_hero'), (e.REWARD = 'reward'), (e.GAME_TILE = 'game_tile'), (e.LOGO_TYPE = 'logo_type'), e;
})({});
function o(e, t, n) {
    let i = d(e, t, n),
        r = f(t),
        s = null != r && a.includes(r);
    return {
        url: i,
        mimetype: r,
        isAnimated: s
    };
}
function l(e, t) {
    return null != e ? e : t;
}
function u(e, t, n) {
    let r;
    switch (t) {
        case 'hero':
            r = l(e.config.assets.heroVideo, e.config.assets.hero);
            break;
        case 'quest_bar_hero':
            r = l(e.config.assets.questBarHeroVideo, e.config.assets.questBarHero);
            break;
        case 'reward': {
            var a, s;
            let t = null !== (s = null === (a = e.userStatus) || void 0 === a ? void 0 : a.claimedTier) && void 0 !== s ? s : 0,
                n = 'rewardsConfig' in e.config ? e.config.rewardsConfig.rewards[t] : e.config.rewards[t];
            r = l(n.assetVideo, n.asset);
            break;
        }
        case 'game_tile':
            r = e.config.assets.gameTile;
            break;
        case 'logo_type':
            r = e.config.assets.logotype;
    }
    let u = e.config.features.includes(i.S7.QUESTS_CDN);
    return o(e.id, r, {
        theme: n,
        newCdn: u
    });
}
function c(e) {
    var t;
    return null !== (t = e.split('?', 1).at(0)) && void 0 !== t ? t : e;
}
function d(e, t, n) {
    if (t.startsWith('blob:')) return c(t);
    let r = (null == n ? void 0 : n.newCdn) ? i.tD : i.Uo;
    return ''
        .concat(r)
        .concat(e)
        .concat((null == n ? void 0 : n.theme) != null ? '/'.concat(n.theme) : '', '/')
        .concat(t);
}
function f(e) {
    var t, n, i;
    if (e.startsWith('blob:')) {
        let t = null !== (i = new URL(e).searchParams.get('mimetype')) && void 0 !== i ? i : void 0;
        return null != t ? decodeURIComponent(t) : null;
    }
    switch (null === (n = r.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) {
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
