n.d(t, {
    Q2: () => i,
    Xg: () => s,
    rw: () => a,
});
var r = n(735438);

function i(e) {
    return e.__DISCORD_WINDOW_ID;
}

function a(e) {
    let t = (0, r.uniqueId)("window-");
    return (e.__DISCORD_WINDOW_ID = t), t;
}

function s() {
    return i(window);
}
