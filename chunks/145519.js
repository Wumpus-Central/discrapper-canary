var i = { "./spritesheet-emoji-40.png.js": "617057", "./spritesheet-emoji-48.png.js": "587353" };
function r(e) {
    return n(s(e));
}
function s(e) {
    if (!n.o(i, e)) {
        var t = Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
    }
    return i[e];
}
(r.keys = function () {
    return Object.keys(i);
}),
    (r.resolve = s),
    (e.exports = r),
    (r.id = 145519);
