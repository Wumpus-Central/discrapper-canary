"use strict";
n.d(t, { I: () => s, U: () => a });
var r = n(661191);
function i(e) {
    return [...e].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0));
}
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => r.default.compare(e.soundId, t.soundId));
    return t ? i(n) : n;
}
function s() {
    return a;
}
