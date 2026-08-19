var l = { "./spritesheet-emoji-40.png.js": "617057", "./spritesheet-emoji-48.png.js": "587353" };
function i(e) {
    return n(s(e));
}
function s(e) {
    if (!n.o(l, e)) {
        var t = Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
    }
    return l[e];
}
(i.keys = function () {
    return Object.keys(l);
}),
    (i.resolve = s),
    (e.exports = i),
    (i.id = 145519);
