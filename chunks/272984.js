"use strict";
n.d(t, {
    HD: () => c,
    HS: () => u,
    M0: () => _,
    NJ: () => g,
    Qp: () => h,
    RQ: () => m,
    UN: () => f,
    gY: () => l,
    pH: () => d,
});
var i,
    r,
    s = n(573648),
    a = n(723702),
    o = n(652215);
let l = "spotify",
    u = "spotify:",
    c = s.A.get(o.fg2.SPOTIFY).name;
function d(e) {
    return null != e && e.startsWith(u);
}
var _ =
        (((i = {}).TRACK = "track"),
        (i.ARTIST = "artist"),
        (i.ALBUM = "album"),
        (i.PLAYLIST = "playlist"),
        (i.EPISODE = "episode"),
        (i.SHOW = "show"),
        i),
    h =
        (((r = {}).USER_ACTIVITY_PLAY = "user_activity_play"),
        (r.USER_ACTIVITY_SYNC = "user_activity_sync"),
        (r.EMBED_SYNC = "embed_sync"),
        r);
let f = ["open.spotify.com", "www.spotify.com"],
    p = "https://api.spotify.com/v1";
function E(e) {
    return `?utm_source=discord&utm_medium=${e}`;
}
let m = Object.freeze({
    PROFILE: `${p}/me`,
    NOTIFICATIONS_PLAYER: `${p}/me/notifications/player`,
    PLAYER: `${p}/me/player`,
    PLAYER_DEVICES: `${p}/me/player/devices`,
    PLAYER_PLAY: `${p}/me/player/play`,
    PLAYER_PAUSE: `${p}/me/player/pause`,
    PLAYER_REPEAT: `${p}/me/player/repeat`,
    WEB_OPEN: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "desktop";
        return `https://open.spotify.com/${encodeURIComponent(e)}/${encodeURIComponent(t)}${E(n)}`;
    },
    EMBED: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "desktop";
        return `https://open.spotify.com/embed${e}${E(t)}`;
    },
    PLAYER_OPEN: function (e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "desktop";
        return `${l}:${encodeURIComponent(e)}:${encodeURIComponent(t)}${n ? E(i) : ""}`;
    },
    PREMIUM_SITE: `https://www.spotify.com/premium/${E("desktop")}`,
    INSTALL_ATTRIBUTION: (e) => `https://app.adjust.com/bdyga9?campaign=${e}`,
    APP_STORE: (0, a.isAndroid)()
        ? "https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US"
        : "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8",
    IOS_APP_STORE: "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8",
});
function g(e) {
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
