"use strict";
n.d(t, { n: () => r, o: () => i });
var r = (function (e) {
    return (
        (e.STREAM_ON_DESKTOP = "STREAM_ON_DESKTOP"),
        (e.PLAY_ON_DESKTOP = "PLAY_ON_DESKTOP"),
        (e.PLAY_ON_XBOX = "PLAY_ON_XBOX"),
        (e.PLAY_ON_PLAYSTATION = "PLAY_ON_PLAYSTATION"),
        (e.WATCH_VIDEO = "WATCH_VIDEO"),
        (e.WATCH_VIDEO_ON_MOBILE = "WATCH_VIDEO_ON_MOBILE"),
        (e.PLAY_ACTIVITY = "PLAY_ACTIVITY"),
        (e.ACHIEVEMENT_IN_GAME = "ACHIEVEMENT_IN_GAME"),
        (e.ACHIEVEMENT_IN_ACTIVITY = "ACHIEVEMENT_IN_ACTIVITY"),
        e
    );
})({});
let i = {
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
