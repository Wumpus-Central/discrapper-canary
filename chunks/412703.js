"use strict";
n.d(t, { n: () => i, o: () => s });
var r,
    i =
        (((r = {}).STREAM_ON_DESKTOP = "STREAM_ON_DESKTOP"),
        (r.PLAY_ON_DESKTOP = "PLAY_ON_DESKTOP"),
        (r.PLAY_ON_XBOX = "PLAY_ON_XBOX"),
        (r.PLAY_ON_PLAYSTATION = "PLAY_ON_PLAYSTATION"),
        (r.WATCH_VIDEO = "WATCH_VIDEO"),
        (r.WATCH_VIDEO_ON_MOBILE = "WATCH_VIDEO_ON_MOBILE"),
        (r.PLAY_ACTIVITY = "PLAY_ACTIVITY"),
        (r.ACHIEVEMENT_IN_GAME = "ACHIEVEMENT_IN_GAME"),
        (r.ACHIEVEMENT_IN_ACTIVITY = "ACHIEVEMENT_IN_ACTIVITY"),
        r);
let s = {
    ALL: new Set([
        "PLAY_ACTIVITY",
        "PLAY_ON_DESKTOP",
        "PLAY_ON_PLAYSTATION",
        "PLAY_ON_XBOX",
        "STREAM_ON_DESKTOP",
        "WATCH_VIDEO",
        "WATCH_VIDEO_ON_MOBILE",
    ]),
    DESKTOP: new Set(["PLAY_ACTIVITY", "PLAY_ON_DESKTOP", "STREAM_ON_DESKTOP"]),
    CONSOLE: new Set(["PLAY_ON_PLAYSTATION", "PLAY_ON_XBOX"]),
    IN_GAME: new Set(["ACHIEVEMENT_IN_ACTIVITY", "ACHIEVEMENT_IN_GAME"]),
    VIDEO: new Set(["WATCH_VIDEO", "WATCH_VIDEO_ON_MOBILE"]),
};
