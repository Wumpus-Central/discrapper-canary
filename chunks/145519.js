var i = { "./spritesheet-emoji-40.png.js": "617057", "./spritesheet-emoji-48.png.js": "587353" };
function s(e) {
    return n(l(e));
}
function l(e) {
    if (!n.o(i, e)) {
        var t = Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
    }
    return i[e];
}
((s.keys = function () {
    return Object.keys(i);
}),
    (s.resolve = l),
    (e.exports = s),
    (s.id = 145519));
