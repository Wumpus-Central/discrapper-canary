n.d(t, { AZ: () => o, Cp: () => r, _s: () => a, fk: () => l, tA: () => d });
var i = n(839214),
    s = n(837921);
let l = (0, i.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function a() {
    let e = await s.Ay.getOpenOnStart(),
        t = await s.Ay.getSetting("START_MINIMIZED", !1),
        n = await s.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    l.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
}
function r(e) {
    l.setState({ openOnStartup: e }), s.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
}
function o(e) {
    l.setState({ startMinimized: e }), s.Ay.send("TOGGLE_START_MINIMIZED", e);
}
function d(e) {
    l.setState({ minimizeToTray: e }), s.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
}
