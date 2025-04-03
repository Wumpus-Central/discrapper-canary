i.r(o), i.d(o, { init: () => t });
var n = i(559425);
function t() {
    window.DiscordDevSession = {
        start: s,
        stop: r,
        started: !1
    };
}
function s() {
    if (null == window.GLOBAL_ENV.DEV_SESSION_KEY) return void console.log('Meticulous token not found');
    (0, n.Rl)({
        recordingToken: window.GLOBAL_ENV.DEV_SESSION_KEY,
        isProduction: !1
    }),
        null != window.DiscordDevSession && (window.DiscordDevSession.started = !0),
        console.log('Meticulous session recording started');
}
function r() {
    (0, n.rk)(), null != window.DiscordDevSession && (window.DiscordDevSession.started = !1);
}
