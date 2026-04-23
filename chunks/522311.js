"use strict";
function r(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
}
function i(e) {
    var t = e.clientOffset,
        n = e.initialClientOffset,
        i = e.initialSourceClientOffset;
    return t && n && i ? r({ x: t.x + i.x, y: t.y + i.y }, n) : null;
}
function s(e) {
    var t = e.clientOffset,
        n = e.initialClientOffset;
    return t && n ? r(t, n) : null;
}
n.d(t, { kO: () => i, ne: () => s });
