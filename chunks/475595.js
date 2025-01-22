r.d(n, {
    Dm: function () {
        return I;
    },
    N0: function () {
        return m;
    },
    Q2: function () {
        return b;
    },
    Rt: function () {
        return g;
    },
    eC: function () {
        return i;
    },
    fh: function () {
        return v;
    }
});
var i,
    a = r(571269);
var o = r(298267);
var s = r(315314);
var l = r(610138);
var u = r(216116);
var c = r(78328);
var d = r(815648);
var f = r(47120);
var p = r(873546),
    h = r(46140);
let _ = /\.([a-zA-Z0-9]+)$/,
    m = ['video/mp4', 'video/webm'];
function g(e, n, r) {
    let i = b(e, n, r),
        a = I(n),
        o = null != a && m.includes(a);
    return {
        url: i,
        mimetype: a,
        isAnimated: o
    };
}
function E(e, n) {
    return null == e || p.tq ? n : e;
}
function v(e, n, r) {
    let i;
    switch (n) {
        case 'hero':
            i = E(e.config.assets.heroVideo, e.config.assets.hero);
            break;
        case 'quest_bar_hero':
            i = E(e.config.assets.questBarHeroVideo, e.config.assets.questBarHero);
            break;
        case 'reward': {
            var a, o;
            let n = null !== (o = null === (a = e.userStatus) || void 0 === a ? void 0 : a.claimedTier) && void 0 !== o ? o : 0,
                r = 'rewardsConfig' in e.config ? e.config.rewardsConfig.rewards[n] : e.config.rewards[n];
            i = E(r.assetVideo, r.asset);
            break;
        }
        case 'game_tile':
            i = e.config.assets.gameTile;
            break;
        case 'logo_type':
            i = e.config.assets.logotype;
    }
    let s = e.config.features.includes(h.S7.QUESTS_CDN);
    return g(e.id, i, {
        theme: r,
        newCdn: s
    });
}
function y(e) {
    var n;
    return null !== (n = e.split('?', 1).at(0)) && void 0 !== n ? n : e;
}
function b(e, n, r) {
    if (n.startsWith('blob:')) return y(n);
    let i = (null == r ? void 0 : r.newCdn) ? h.tD : h.Uo;
    return ''
        .concat(i)
        .concat(e)
        .concat((null == r ? void 0 : r.theme) != null ? '/'.concat(r.theme) : '', '/')
        .concat(n);
}
function I(e) {
    var n, r, i;
    if (e.startsWith('blob:')) {
        let n = null !== (i = new URL(e).searchParams.get('mimetype')) && void 0 !== i ? i : void 0;
        return null != n ? decodeURIComponent(n) : null;
    }
    switch (null === (r = _.exec(e)) || void 0 === r ? void 0 : null === (n = r[1]) || void 0 === n ? void 0 : n.toLowerCase()) {
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
!(function (e) {
    (e.HERO = 'hero'), (e.QUEST_BAR_HERO = 'quest_bar_hero'), (e.REWARD = 'reward'), (e.GAME_TILE = 'game_tile'), (e.LOGO_TYPE = 'logo_type');
})(i || (i = {}));
