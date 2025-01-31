n.d(t, {
    Dm: () => _,
    N0: () => s,
    Q2: () => f,
    Rt: () => l,
    eC: () => o,
    fh: () => c
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
var i = n(873546),
    r = n(46140);
let a = /\.([a-zA-Z0-9]+)$/,
    s = ['video/mp4', 'video/webm'];
var o = (function (e) {
    return (e.HERO = 'hero'), (e.QUEST_BAR_HERO = 'quest_bar_hero'), (e.REWARD = 'reward'), (e.GAME_TILE = 'game_tile'), (e.LOGO_TYPE = 'logo_type'), e;
})({});
function l(e, t, n) {
    let i = f(e, t, n),
        r = _(t),
        a = null != r && s.includes(r);
    return {
        url: i,
        mimetype: r,
        isAnimated: a
    };
}
function u(e, t) {
    return null == e || i.tq ? t : e;
}
function c(e, t, n) {
    let i;
    switch (t) {
        case 'hero':
            i = u(e.config.assets.heroVideo, e.config.assets.hero);
            break;
        case 'quest_bar_hero':
            i = u(e.config.assets.questBarHeroVideo, e.config.assets.questBarHero);
            break;
        case 'reward': {
            var a, s;
            let t = null !== (s = null === (a = e.userStatus) || void 0 === a ? void 0 : a.claimedTier) && void 0 !== s ? s : 0,
                n = 'rewardsConfig' in e.config ? e.config.rewardsConfig.rewards[t] : e.config.rewards[t];
            i = u(n.assetVideo, n.asset);
            break;
        }
        case 'game_tile':
            i = e.config.assets.gameTile;
            break;
        case 'logo_type':
            i = e.config.assets.logotype;
    }
    let o = e.config.features.includes(r.S7.QUESTS_CDN);
    return l(e.id, i, {
        theme: n,
        newCdn: o
    });
}
function d(e) {
    var t;
    return null !== (t = e.split('?', 1).at(0)) && void 0 !== t ? t : e;
}
function f(e, t, n) {
    if (t.startsWith('blob:')) return d(t);
    let i = (null == n ? void 0 : n.newCdn) ? r.tD : r.Uo;
    return ''
        .concat(i)
        .concat(e)
        .concat((null == n ? void 0 : n.theme) != null ? '/'.concat(n.theme) : '', '/')
        .concat(t);
}
function _(e) {
    var t, n, i;
    if (e.startsWith('blob:')) {
        let t = null !== (i = new URL(e).searchParams.get('mimetype')) && void 0 !== i ? i : void 0;
        return null != t ? decodeURIComponent(t) : null;
    }
    switch (null === (n = a.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) {
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
        default:
            return null;
    }
}
