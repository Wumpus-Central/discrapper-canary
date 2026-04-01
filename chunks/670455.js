"use strict";
n.d(t, {
    AO: () => f,
    CW: () => h,
    Eq: () => c,
    MW: () => r.iL,
    P0: () => i,
    Rj: () => l,
    UV: () => m,
    X: () => _,
    bO: () => d,
    fs: () => u,
    h0: () => a,
    j6: () => p,
    u0: () => s,
    uf: () => o,
});
var r = n(873298),
    i = (function (e) {
        return (e.BAD = "bad"), (e.NEUTRAL = "neutral"), (e.GOOD = "good"), e;
    })({});
let s = 1024;
var a = (function (e) {
    return (e.AV = "AV"), (e.SOCIAL = "SOCIAL"), (e.SEARCH = "SEARCH"), (e.SAFETY = "SAFETY"), e;
})({});
let o = [
        r.iL.VIDEO_BACKGROUND,
        r.iL.STREAM,
        r.iL.ACTIVITY,
        r.iL.VOICE,
        r.iL.IN_APP_REPORTS,
        r.iL.BLOCK_USER,
        r.iL.SEARCH_RESULTS,
        r.iL.AGE_VERIFICATION,
    ].reduce((e, t, n) => ({ ...e, [t]: n }), {}),
    l = ["bad", "neutral", "good"],
    u = 864e13;
var c = (function (e) {
        return (
            (e.CONNECTION = "CONNECTION"),
            (e.AUDIO = "AUDIO"),
            (e.VIDEO = "VIDEO"),
            (e.STREAMING = "STREAMING"),
            (e.STREAM_WATCHING = "STREAM_WATCHING"),
            (e.PEOPLE = "PEOPLE"),
            e
        );
    })({}),
    d = (function (e) {
        return (
            (e.FREEFORM = "FREEFORM"),
            (e.COULD_NOT_CONNECT = "COULD_NOT_CONNECT"),
            (e.HIGH_TTC = "HIGH_TTC"),
            (e.HIGH_LATENCY = "HIGH_LATENCY"),
            (e.ROBOT_VOICE = "ROBOT_VOICE"),
            (e.DESYNC = "DESYNC"),
            (e.CUTTING = "CUTTING"),
            e
        );
    })({}),
    _ = (function (e) {
        return (
            (e.FREEFORM = "FREEFORM"),
            (e.NO_AUDIO = "NO_AUDIO"),
            (e.LOW_QUALITY_AUDIO = "LOW_QUALITY_AUDIO"),
            (e.ROBOT_VOICE = "ROBOT"),
            (e.ECHO = "ECHO"),
            (e.TOO_QUIET = "TOO_QUIET"),
            (e.TOO_LOUD = "TOO_LOUD"),
            (e.TOO_QUIET_OR_LOUD = "TOO_QUIET_OR_LOUD"),
            (e.CUTTING = "CUTTING"),
            (e.DELAYED = "DELAYED"),
            (e.BACKGROUND_NOISE = "BACKGROUND_NOISE"),
            (e.UNABLE_TO_FIND_DEVICE = "UNABLE_TO_FIND_DEVICE"),
            (e.UNABLE_TO_FIND_INPUT_DEVICE = "UNABLE_TO_FIND_INPUT_DEVICE"),
            (e.UNABLE_TO_FIND_OUTPUT_DEVICE = "UNABLE_TO_FIND_OUTPUT_DEVICE"),
            (e.TROUBLE_WITH_SPEAKERPHONE = "TROUBLE_WITH_SPEAKERPHONE"),
            (e.COMPLAINTS = "COMPLAINTS"),
            (e.NO_GAME_AUDIO = "NO_GAME_AUDIO"),
            e
        );
    })({}),
    f = (function (e) {
        return (
            (e.FREEFORM = "FREEFORM"),
            (e.NO_VIDEO = "NO_VIDEO"),
            (e.FREEZING_OR_HITCHING = "FREEZING_OR_HITCHING"),
            (e.BLURRY_OR_PIXELATED = "BLURRY_OR_PIXELATED"),
            (e.UNABLE_TO_ENABLE_DEVICE = "UNABLE_TO_ENABLE_DEVICE"),
            (e.DESYNC = "DESYNC"),
            e
        );
    })({}),
    p = (function (e) {
        return (
            (e.FREEFORM = "FREEFORM"),
            (e.COULD_NOT_LOAD = "COULD_NOT_LOAD"),
            (e.BLACK_SCREEN = "BLACK_SCREEN"),
            (e.FREEZING_OR_HITCHING = "FREEZING_OR_HITCHING"),
            (e.LAG = "LAG"),
            (e.BLURRY_OR_PIXELATED = "BLURRY_OR_PIXELATED"),
            (e.NO_AUDIO = "NO_AUDIO"),
            (e.BAD_AUDIO = "BAD_AUDIO"),
            (e.STOPPED_UNEXPECTEDLY = "STOPPED_UNEXPECTEDLY"),
            (e.DESYNC = "DESYNC"),
            (e.NO_GAME_AUDIO = "NO_GAME_AUDIO"),
            e
        );
    })({}),
    h = (function (e) {
        return (e.FREEFORM = "FREEFORM"), (e.TOXIC_OR_INAPPROPRIATE = "TOXIC_OR_INAPPROPRIATE"), e;
    })({}),
    m = (function (e) {
        return (e.UNSPECIFIED = "UNSPECIFIED"), (e.SELF = "SELF"), (e.SOMEONE = "SOMEONE"), (e.OTHERS = "OTHERS"), e;
    })({});
