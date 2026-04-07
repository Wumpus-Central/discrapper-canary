i.d(o, { init: () => t });
var n = i(461789);
function t() {
    window.DiscordDevSession = { start: s, stop: r, started: !1 };
}
function s() {
    let e = window.GLOBAL_ENV.DEV_SESSION_KEY;
    null == e
        ? console.log("Meticulous token not found")
        : ((0, n.Lw)({ recordingToken: e, isProduction: !1 }),
          null != window.DiscordDevSession && (window.DiscordDevSession.started = !0),
          console.log("Meticulous session recording started"));
}
function r() {
    (0, n.B5)(), null != window.DiscordDevSession && (window.DiscordDevSession.started = !1);
}
