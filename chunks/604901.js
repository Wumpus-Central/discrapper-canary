var r = {
    './spritesheet-emoji-32.png': '63215',
    './spritesheet-emoji-40.png': '926720',
    './spritesheet-emoji-48.png': '178915'
};
function i(e) {
    return n(a(e));
}
function a(e) {
    if (!n.o(r, e)) {
        var t = Error("Cannot find module '" + e + "'");
        throw ((t.code = 'MODULE_NOT_FOUND'), t);
    }
    return r[e];
}
(i.keys = function () {
    return Object.keys(r);
}),
    (i.resolve = a),
    (e.exports = i),
    (i.id = 604901);
