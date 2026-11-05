var i,
    r,
    a = n(573648),
    s = n(723702),
    l = n(652215);
let o = "spotify",
    d = "spotify:",
    c = a.A.get(l.fg2.SPOTIFY).name;
var u =
        (((i = {}).TRACK = "track"),
        (i.ARTIST = "artist"),
        (i.ALBUM = "album"),
        (i.PLAYLIST = "playlist"),
        (i.EPISODE = "episode"),
        (i.SHOW = "show"),
        i),
    _ =
        (((r = {}).USER_ACTIVITY_PLAY = "user_activity_play"),
        (r.USER_ACTIVITY_SYNC = "user_activity_sync"),
        (r.EMBED_SYNC = "embed_sync"),
        r);
let E = "https://api.spotify.com/v1";
function A(e) {
    return `?utm_source=discord&utm_medium=${e}`;
}
let f = Object.freeze({
    PROFILE: `${E}/me`,
    NOTIFICATIONS_PLAYER: `${E}/me/notifications/player`,
    PLAYER: `${E}/me/player`,
    PLAYER_DEVICES: `${E}/me/player/devices`,
    PLAYER_PLAY: `${E}/me/player/play`,
    PLAYER_PAUSE: `${E}/me/player/pause`,
    PLAYER_REPEAT: `${E}/me/player/repeat`,
    WEB_OPEN: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "desktop";
        return `https://open.spotify.com/${encodeURIComponent(e)}/${encodeURIComponent(t)}${A(n)}`;
    },
    IMAGE: (e) => `https://i.scdn.co/image/${encodeURIComponent(e)}`,
    EMBED: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "desktop";
        return `https://open.spotify.com/embed${e}${A(t)}`;
    },
    PLAYER_OPEN: function (e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "desktop";
        return `${o}:${encodeURIComponent(e)}:${encodeURIComponent(t)}${n ? A(i) : ""}`;
    },
    WEB_HOME: `https://open.spotify.com/${A("desktop")}`,
    PREMIUM_SITE: `https://www.spotify.com/premium/${A("desktop")}`,
    INSTALL_ATTRIBUTION: (e) => `https://app.adjust.com/bdyga9?campaign=${e}`,
    APP_STORE: (0, s.m0)()
        ? "https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US"
        : "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8",
    IOS_APP_STORE: "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8",
});
n.d(
    t,
    {},
    {
        HD: c,
        HS: d,
        M0: u,
        NJ: function (e) {
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
        },
        Qp: _,
        RQ: f,
        UN: ["open.spotify.com", "www.spotify.com"],
        gY: o,
        pH: function (e) {
            return null != e && e.startsWith(d);
        },
    },
);
