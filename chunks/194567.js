n.d(t, { IJ: () => a, U9: () => s, XP: () => r });
var l = n(935208);
function i(e) {
    return [...e].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0));
}
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => l.default.compare(e.soundId, t.soundId));
    return t ? i(n) : n;
}
function r(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return t ? i(e) : e;
}
function a() {
    return s;
}
