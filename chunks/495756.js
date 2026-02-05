"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    a = n(352505),
    s = n(894010);
let o = {};
function l(e) {
    let { settings: t } = e;
    o = t;
}
function u() {
    a.m.getCurrentConfig({ location: "GameMentionSettingsStore" }).enabled && (0, s.G)();
}
function c() {
    o = {};
}
class d extends r.Ay.Store {
    static displayName = "GameMentionSettingsStore";
    getMute(e) {
        return o[e];
    }
}
let _ = new d(i.h, { REPLACE_GAME_MENTION_SETTINGS: l, CONNECTION_OPEN: u, LOGOUT: c });
