"use strict";
n.d(t, { F: () => r }), n(667532);
var i = n(735438),
    s = n.n(i),
    l = n(403362);
function r(e, t) {
    return s()(e)
        .map(t.getUser)
        .unshift(t.getCurrentUser())
        .filter(l.Vq)
        .sortBy((e) => e.username.toLowerCase())
        .value();
}
