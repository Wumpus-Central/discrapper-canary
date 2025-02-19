n.d(t, {
    Dm: () => f,
    N0: () => o,
    Q2: () => d,
    Rt: () => s,
    eC: () => a,
    fh: () => c
}),
    n(301563),
    n(571269),
    n(298267),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(46140);
let i = /\.([a-zA-Z0-9]+)$/,
    o = ['video/mp4', 'video/webm'];
var a = (function (e) {
    return (e.HERO = 'hero'), (e.QUEST_BAR_HERO = 'quest_bar_hero'), (e.REWARD = 'reward'), (e.GAME_TILE = 'game_tile'), (e.LOGO_TYPE = 'logo_type'), e;
})({});
function s(e, t, n) {
    let r = d(e, t, n),
        i = f(t),
        a = null != i && o.includes(i);
    return {
        url: r,
        mimetype: i,
        isAnimated: a
    };
}
function l(e, t) {
    return null != e ? e : t;
}
function c(e, t, n) {
    let i;
    switch (t) {
        case 'hero':
            i = l(e.config.assets.heroVideo, e.config.assets.hero);
            break;
        case 'quest_bar_hero':
            i = l(e.config.assets.questBarHeroVideo, e.config.assets.questBarHero);
            break;
        case 'reward': {
            var o, a;
            let t = null !== (a = null === (o = e.userStatus) || void 0 === o ? void 0 : o.claimedTier) && void 0 !== a ? a : 0,
                n = 'rewardsConfig' in e.config ? e.config.rewardsConfig.rewards[t] : e.config.rewards[t];
            i = l(n.assetVideo, n.asset);
            break;
        }
        case 'game_tile':
            i = e.config.assets.gameTile;
            break;
        case 'logo_type':
            i = e.config.assets.logotype;
    }
    let c = e.config.features.includes(r.S7.QUESTS_CDN);
    return s(e.id, i, {
        theme: n,
        newCdn: c
    });
}
function u(e) {
    var t;
    return null !== (t = e.split('?', 1).at(0)) && void 0 !== t ? t : e;
}
function d(e, t, n) {
    if (t.startsWith('blob:')) return u(t);
    let i = (null == n ? void 0 : n.newCdn) ? r.tD : r.Uo;
    return ''
        .concat(i)
        .concat(e)
        .concat((null == n ? void 0 : n.theme) != null ? '/'.concat(n.theme) : '', '/')
        .concat(t);
}
function f(e) {
    var t, n, r;
    if (e.startsWith('blob:')) {
        let t = null !== (r = new URL(e).searchParams.get('mimetype')) && void 0 !== r ? r : void 0;
        return null != t ? decodeURIComponent(t) : null;
    }
    switch (null === (n = i.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) {
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
