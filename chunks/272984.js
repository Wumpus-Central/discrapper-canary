"use strict";
n.d(t, {
    HD: () => d,
    HS: () => u,
    M0: () => _,
    NJ: () => g,
    Qp: () => f,
    RQ: () => m,
    UN: () => E,
    gY: () => l,
    pH: () => c,
});
var r,
    i,
    s = n(573648),
    a = n(723702),
    o = n(652215);
let l = "spotify",
    u = "spotify:",
    d = s.A.get(o.fg2.SPOTIFY).name;
function c(e) {
    return null != e && e.startsWith(u);
}
var _ =
        (((r = {}).TRACK = "track"),
        (r.ARTIST = "artist"),
        (r.ALBUM = "album"),
        (r.PLAYLIST = "playlist"),
        (r.EPISODE = "episode"),
        (r.SHOW = "show"),
        r),
    f =
        (((i = {}).USER_ACTIVITY_PLAY = "user_activity_play"),
        (i.USER_ACTIVITY_SYNC = "user_activity_sync"),
        (i.EMBED_SYNC = "embed_sync"),
        i);
let E = ["open.spotify.com", "www.spotify.com"],
    h = "https://api.spotify.com/v1",
    p = (e) => `?utm_source=discord&utm_medium=${e}`,
    m = Object.freeze({
        PROFILE: `${h}/me`,
        NOTIFICATIONS_PLAYER: `${h}/me/notifications/player`,
        PLAYER: `${h}/me/player`,
        PLAYER_DEVICES: `${h}/me/player/devices`,
        PLAYER_PLAY: `${h}/me/player/play`,
        PLAYER_PAUSE: `${h}/me/player/pause`,
        PLAYER_REPEAT: `${h}/me/player/repeat`,
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
            return `${l}:${encodeURIComponent(e)}:${encodeURIComponent(t)}${n ? p(r) : ""}`;
        },
        PREMIUM_SITE: `https://www.spotify.com/premium/${p("desktop")}`,
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
