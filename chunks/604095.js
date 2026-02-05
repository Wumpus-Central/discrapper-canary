i.d(e, { AZ: () => u, Cp: () => a, _s: () => r, fk: () => s, tA: () => o });
var n = i(839214),
    l = i(837921);
let s = (0, n.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function r() {
    let t = await l.Ay.getOpenOnStart(),
        e = await l.Ay.getSetting("START_MINIMIZED", !1),
        i = await l.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    s.setState({ openOnStartup: t, startMinimized: e, minimizeToTray: i });
}
function a(t) {
    s.setState({ openOnStartup: t }), l.Ay.send("TOGGLE_OPEN_ON_STARTUP", t);
}
function u(t) {
    s.setState({ startMinimized: t }), l.Ay.send("TOGGLE_START_MINIMIZED", t);
}
function o(t) {
    s.setState({ minimizeToTray: t }), l.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", t);
}
