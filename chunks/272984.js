"use strict";
n.d(t, {
    HD: () => c,
    HS: () => d,
    M0: () => _,
    NJ: () => p,
    Qp: () => E,
    RQ: () => f,
    UN: () => A,
    gY: () => o,
    pH: () => u,
});
var i,
    r,
    a = n(573648),
    s = n(723702),
    l = n(652215);
let o = "spotify",
    d = "spotify:",
    c = a.A.get(l.fg2.SPOTIFY).name;
function u(e) {
    return null != e && e.startsWith(d);
}
var _ =
        (((i = {}).TRACK = "track"),
        (i.ARTIST = "artist"),
        (i.ALBUM = "album"),
        (i.PLAYLIST = "playlist"),
        (i.EPISODE = "episode"),
        (i.SHOW = "show"),
        i),
    E =
        (((r = {}).USER_ACTIVITY_PLAY = "user_activity_play"),
        (r.USER_ACTIVITY_SYNC = "user_activity_sync"),
        (r.EMBED_SYNC = "embed_sync"),
        r);
let A = ["open.spotify.com", "www.spotify.com"],
    h = "https://api.spotify.com/v1";
function I(e) {
    return `?utm_source=discord&utm_medium=${e}`;
}
let f = Object.freeze({
    PROFILE: `${h}/me`,
    NOTIFICATIONS_PLAYER: `${h}/me/notifications/player`,
    PLAYER: `${h}/me/player`,
    PLAYER_DEVICES: `${h}/me/player/devices`,
    PLAYER_PLAY: `${h}/me/player/play`,
    PLAYER_PAUSE: `${h}/me/player/pause`,
    PLAYER_REPEAT: `${h}/me/player/repeat`,
    WEB_OPEN: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "desktop";
        return `https://open.spotify.com/${encodeURIComponent(e)}/${encodeURIComponent(t)}${I(n)}`;
    },
    EMBED: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "desktop";
        return `https://open.spotify.com/embed${e}${I(t)}`;
    },
    PLAYER_OPEN: function (e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "desktop";
        return `${o}:${encodeURIComponent(e)}:${encodeURIComponent(t)}${n ? I(i) : ""}`;
    },
    PREMIUM_SITE: `https://www.spotify.com/premium/${I("desktop")}`,
    INSTALL_ATTRIBUTION: (e) => `https://app.adjust.com/bdyga9?campaign=${e}`,
    APP_STORE: (0, s.isAndroid)()
        ? "https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US"
        : "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8",
    IOS_APP_STORE: "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8",
});
function p(e) {
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
