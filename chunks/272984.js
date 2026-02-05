"use strict";
n.d(t, {
    HD: () => l,
    HS: () => o,
    M0: () => c,
    NJ: () => m,
    Qp: () => d,
    RQ: () => h,
    UN: () => _,
    gY: () => s,
    pH: () => u,
});
var r = n(573648),
    i = n(723702),
    a = n(652215);
let s = "spotify",
    o = "spotify:",
    l = r.A.get(a.fg2.SPOTIFY).name;
function u(e) {
    return null != e && e.startsWith(o);
}
var c = (function (e) {
        return (
            (e.TRACK = "track"),
            (e.ARTIST = "artist"),
            (e.ALBUM = "album"),
            (e.PLAYLIST = "playlist"),
            (e.EPISODE = "episode"),
            (e.SHOW = "show"),
            e
        );
    })({}),
    d = (function (e) {
        return (
            (e.USER_ACTIVITY_PLAY = "user_activity_play"),
            (e.USER_ACTIVITY_SYNC = "user_activity_sync"),
            (e.EMBED_SYNC = "embed_sync"),
            e
        );
    })({});
let _ = ["open.spotify.com", "www.spotify.com"],
    f = "https://api.spotify.com/v1",
    p = (e) => `?utm_source=discord&utm_medium=${e}`,
    h = Object.freeze({
        PROFILE: `${f}/me`,
        NOTIFICATIONS_PLAYER: `${f}/me/notifications/player`,
        PLAYER: `${f}/me/player`,
        PLAYER_DEVICES: `${f}/me/player/devices`,
        PLAYER_PLAY: `${f}/me/player/play`,
        PLAYER_PAUSE: `${f}/me/player/pause`,
        PLAYER_REPEAT: `${f}/me/player/repeat`,
        WEB_OPEN: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "desktop";
            return `https://open.spotify.com/${encodeURIComponent(e)}/${encodeURIComponent(t)}${p(n)}`;
        },
        EMBED: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "desktop";
            return `https://open.spotify.com/embed${e}${p(t)}`;
        },
        PLAYER_OPEN: function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "desktop";
            return `${s}:${encodeURIComponent(e)}:${encodeURIComponent(t)}${n ? p(r) : ""}`;
        },
        PREMIUM_SITE: `https://www.spotify.com/premium/${p("desktop")}`,
        INSTALL_ATTRIBUTION: (e) => `https://app.adjust.com/bdyga9?campaign=${e}`,
        APP_STORE: (0, i.isAndroid)()
            ? "https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US"
            : "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8",
        IOS_APP_STORE: "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8",
    });
function m(e) {
    if ("string" != typeof e) return null;
    switch (e) {
        case "track":
            return "track";
        case "artist":
            return "artist";
        case "album":
            return "album";
        case "playlist":
            return "playlist";
        case "episode":
            return "episode";
        case "show":
            return "show";
        default:
            return null;
    }
}
