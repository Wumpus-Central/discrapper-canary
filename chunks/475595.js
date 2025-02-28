n.d(t, {
    Dm: () => p,
    N0: () => s,
    Q2: () => _,
    Rt: () => c,
    eC: () => l,
    fh: () => d
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
var r = n(887003),
    i = n(46140),
    o = n(232474);
let a = /\.([a-zA-Z0-9]+)$/,
    s = ['video/mp4', 'video/webm'];
var l = (function (e) {
    return (e.HERO = 'hero'), (e.QUEST_BAR_HERO = 'quest_bar_hero'), (e.REWARD = 'reward'), (e.GAME_TILE = 'game_tile'), (e.LOGO_TYPE = 'logo_type'), e;
})({});
function c(e, t, n) {
    let r = _(e, t, n),
        i = p(t),
        o = null != i && s.includes(i);
    return {
        url: r,
        mimetype: i,
        isAnimated: o
    };
}
function u(e, t) {
    return null != e ? e : t;
}
function d(e, t, n) {
    let a;
    switch (t) {
        case 'hero':
            a = u(e.config.assets.heroVideo, e.config.assets.hero);
            break;
        case 'quest_bar_hero':
            a = u(e.config.assets.questBarHeroVideo, e.config.assets.questBarHero);
            break;
        case 'reward': {
            var s, l;
            let t = null !== (l = null === (s = e.userStatus) || void 0 === s ? void 0 : s.claimedTier) && void 0 !== l ? l : 0,
                n = 'rewardsConfig' in e.config ? e.config.rewardsConfig.rewards[t] : e.config.rewards[t];
            if (n.type === r.w.VIRTUAL_CURRENCY)
                return {
                    url: o.Z,
                    mimetype: 'image/png',
                    isAnimated: !1
                };
            a = u(n.assetVideo, n.asset);
            break;
        }
        case 'game_tile':
            a = e.config.assets.gameTile;
            break;
        case 'logo_type':
            a = e.config.assets.logotype;
    }
    let d = e.config.features.includes(i.S7.QUESTS_CDN);
    return c(e.id, a, {
        theme: n,
        newCdn: d
    });
}
function f(e) {
    var t;
    return null !== (t = e.split('?', 1).at(0)) && void 0 !== t ? t : e;
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
        let t = null !== (r = new URL(e).searchParams.get('mimetype')) && void 0 !== r ? r : void 0;
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
        case 'ts':
            return 'video/mp2t';
        case 'm3u8':
            return 'application/x-mpegURL';
        default:
            return null;
    }
}
