n.d(t, { A: () => _ });
var r,
    i = n(311907),
    a = n(73153),
    s = n(352505),
    o = n(894010);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = {};
function u(e) {
    let { settings: t } = e;
    c = t;
}
function d() {
    s.m.getCurrentConfig({ location: "GameMentionSettingsStore" }).enabled && (0, o.G)();
}
function f() {
    c = {};
}
class p extends (r = i.Ay.Store) {
    getMute(e) {
        return c[e];
    }
}
l(p, "displayName", "GameMentionSettingsStore");
let _ = new p(a.h, {
    REPLACE_GAME_MENTION_SETTINGS: u,
    CONNECTION_OPEN: d,
    LOGOUT: f,
});
