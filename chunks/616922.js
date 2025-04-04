n.d(t, {
    C7: () => h,
    Hw: () => u,
    M5: () => a,
    Ps: () => c,
    SD: () => f,
    ai: () => l,
    c8: () => m,
    kG: () => d,
    lS: () => s
});
var r = n(726542),
    i = n(358085),
    o = n(981631);
let a = 'spotify',
    s = 'spotify:',
    l = r.Z.get(o.ABu.SPOTIFY).name;
function c(e) {
    return null != e && e.startsWith(s);
}
var u = (function (e) {
        return (e.TRACK = 'track'), (e.ARTIST = 'artist'), (e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.EPISODE = 'episode'), (e.SHOW = 'show'), e;
    })({}),
    d = (function (e) {
        return (e.USER_ACTIVITY_PLAY = 'user_activity_play'), (e.USER_ACTIVITY_SYNC = 'user_activity_sync'), (e.EMBED_SYNC = 'embed_sync'), e;
    })({});
let f = ['open.spotify.com', 'www.spotify.com'],
    _ = 'https://api.spotify.com/v1',
    p = (e) => '?utm_source=discord&utm_medium='.concat(e),
    h = Object.freeze({
        PROFILE: ''.concat(_, '/me'),
        NOTIFICATIONS_PLAYER: ''.concat(_, '/me/notifications/player'),
        PLAYER: ''.concat(_, '/me/player'),
        PLAYER_DEVICES: ''.concat(_, '/me/player/devices'),
        PLAYER_PLAY: ''.concat(_, '/me/player/play'),
        PLAYER_PAUSE: ''.concat(_, '/me/player/pause'),
        PLAYER_REPEAT: ''.concat(_, '/me/player/repeat'),
        WEB_OPEN: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'desktop';
            return 'https://open.spotify.com/'.concat(encodeURIComponent(e), '/').concat(encodeURIComponent(t)).concat(p(n));
        },
        EMBED: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'desktop';
            return 'https://open.spotify.com/embed'.concat(e).concat(p(t));
        },
        PLAYER_OPEN: function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'desktop';
            return ''
                .concat(a, ':')
                .concat(encodeURIComponent(e), ':')
                .concat(encodeURIComponent(t))
                .concat(n ? p(r) : '');
        },
        PREMIUM_SITE: 'https://www.spotify.com/premium/'.concat(p('desktop')),
        INSTALL_ATTRIBUTION: (e) => 'https://app.adjust.com/bdyga9?campaign='.concat(e),
        APP_STORE: (0, i.isAndroid)() ? 'https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US' : 'https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8',
        IOS_APP_STORE: 'https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8'
    });
function m(e) {
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
