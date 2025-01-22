r.d(n, {
    C7: function () {
        return m;
    },
    Hw: function () {
        return i;
    },
    M5: function () {
        return u;
    },
    Ps: function () {
        return f;
    },
    SD: function () {
        return p;
    },
    ai: function () {
        return d;
    },
    c8: function () {
        return g;
    },
    kG: function () {
        return a;
    },
    lS: function () {
        return c;
    }
});
var i,
    a,
    o = r(726542),
    s = r(358085),
    l = r(981631);
let u = 'spotify',
    c = 'spotify:',
    d = o.Z.get(l.ABu.SPOTIFY).name;
function f(e) {
    return null != e && e.startsWith(c);
}
!(function (e) {
    (e.TRACK = 'track'), (e.ARTIST = 'artist'), (e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.EPISODE = 'episode'), (e.SHOW = 'show');
})(i || (i = {})),
    !(function (e) {
        (e.USER_ACTIVITY_PLAY = 'user_activity_play'), (e.USER_ACTIVITY_SYNC = 'user_activity_sync'), (e.EMBED_SYNC = 'embed_sync');
    })(a || (a = {}));
let p = ['open.spotify.com', 'www.spotify.com'],
    h = 'https://api.spotify.com/v1',
    _ = (e) => '?utm_source=discord&utm_medium='.concat(e),
    m = Object.freeze({
        PROFILE: ''.concat(h, '/me'),
        NOTIFICATIONS_PLAYER: ''.concat(h, '/me/notifications/player'),
        PLAYER: ''.concat(h, '/me/player'),
        PLAYER_DEVICES: ''.concat(h, '/me/player/devices'),
        PLAYER_PLAY: ''.concat(h, '/me/player/play'),
        PLAYER_PAUSE: ''.concat(h, '/me/player/pause'),
        PLAYER_REPEAT: ''.concat(h, '/me/player/repeat'),
        WEB_OPEN: function (e, n) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'desktop';
            return 'https://open.spotify.com/'.concat(encodeURIComponent(e), '/').concat(encodeURIComponent(n)).concat(_(r));
        },
        EMBED: function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'desktop';
            return 'https://open.spotify.com/embed'.concat(e).concat(_(n));
        },
        PLAYER_OPEN: function (e, n) {
            let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'desktop';
            return ''
                .concat(u, ':')
                .concat(encodeURIComponent(e), ':')
                .concat(encodeURIComponent(n))
                .concat(r ? _(i) : '');
        },
        PREMIUM_SITE: 'https://www.spotify.com/premium/'.concat(_('desktop')),
        INSTALL_ATTRIBUTION: (e) => 'https://app.adjust.com/bdyga9?campaign='.concat(e),
        APP_STORE: (0, s.isAndroid)() ? 'https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US' : 'https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8',
        IOS_APP_STORE: 'https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8'
    });
function g(e) {
    if ('string' != typeof e) return null;
    switch (e) {
        case 'track':
            return 'track';
        case 'artist':
            return 'artist';
        case 'album':
            return 'album';
        case 'playlist':
            return 'playlist';
        case 'episode':
            return 'episode';
        case 'show':
            return 'show';
        default:
            return null;
    }
}
