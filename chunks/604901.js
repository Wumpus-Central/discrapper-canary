var i = {
    './spritesheet-emoji-32.png': '63215',
    './spritesheet-emoji-40.png': '926720',
    './spritesheet-emoji-48.png': '178915'
};
function a(e) {
    return r(o(e));
}
function o(e) {
    if (!r.o(i, e)) {
        var n = Error("Cannot find module '" + e + "'");
        throw ((n.code = 'MODULE_NOT_FOUND'), n);
    }
    return i[e];
}
(a.keys = function () {
    return Object.keys(i);
}),
    (a.resolve = o),
    (e.exports = a),
    (a.id = '604901');
