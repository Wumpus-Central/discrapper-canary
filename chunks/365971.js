n.d(t, { Q2: () => r, Xg: () => s, rw: () => a });
var i = n(435558);
function r(e) {
    return e.__DISCORD_WINDOW_ID;
}
function a(e) {
    let t = (0, i.uniqueId)("window-");
    return (e.__DISCORD_WINDOW_ID = t), t;
}
function s() {
    return r(window);
}
