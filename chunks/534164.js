i.d(s, { init: () => e });
var n = i(461789);
function e() {
    window.DiscordDevSession = { start: t, stop: d, started: !1 };
}
function t() {
    let o = window.GLOBAL_ENV.DEV_SESSION_KEY;
    null == o
        ? console.log("Meticulous token not found")
        : ((0, n.Lw)({ recordingToken: o, isProduction: !1 }),
          null != window.DiscordDevSession && (window.DiscordDevSession.started = !0),
          console.log("Meticulous session recording started"));
}
function d() {
    (0, n.B5)(), null != window.DiscordDevSession && (window.DiscordDevSession.started = !1);
}
