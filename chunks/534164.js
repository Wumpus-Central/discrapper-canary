var n = i(461789);
function e() {
    let o = window.GLOBAL_ENV.DEV_SESSION_KEY;
    null == o
        ? console.log("Meticulous token not found")
        : ((0, n.Lw)({ recordingToken: o, isProduction: !1 }),
          null != window.DiscordDevSession && (window.DiscordDevSession.started = !0),
          console.log("Meticulous session recording started"));
}
function t() {
    ((0, n.B5)(), null != window.DiscordDevSession && (window.DiscordDevSession.started = !1));
}
i.d(
    s,
    {},
    {
        init: function () {
            window.DiscordDevSession = { start: e, stop: t, started: !1 };
        },
    },
);
