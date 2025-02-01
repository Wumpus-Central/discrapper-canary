var i = {
    './spritesheet-emoji-32.png': '63215',
    './spritesheet-emoji-40.png': '926720',
    './spritesheet-emoji-48.png': '178915'
};
function r(e) {
    return n(a(e));
}
function a(e) {
    if (!n.o(i, e)) {
        var t = Error("Cannot find module '" + e + "'");
        throw ((t.code = 'MODULE_NOT_FOUND'), t);
    }
    return i[e];
}
(r.keys = function () {
    return Object.keys(i);
}),
    (r.resolve = a),
    (e.exports = r),
    (r.id = 604901);
