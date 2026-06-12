"use strict";
n.d(t, { Q2: () => r, Xg: () => a, rw: () => s });
var i = n(735438);
function r(e) {
    return e.__DISCORD_WINDOW_ID;
}
function s(e) {
    let t = (0, i.uniqueId)("window-");
    return (e.__DISCORD_WINDOW_ID = t), t;
}
function a() {
    return r(window);
}
