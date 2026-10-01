var n = {
    "./icon-file-acrobat.svg": "393105",
    "./icon-file-ae.svg": "209899",
    "./icon-file-ai.svg": "862047",
    "./icon-file-archive.svg": "262369",
    "./icon-file-audio.svg": "439205",
    "./icon-file-code.svg": "602462",
    "./icon-file-document.svg": "655514",
    "./icon-file-image.svg": "528736",
    "./icon-file-ps.svg": "426658",
    "./icon-file-sketch.svg": "101233",
    "./icon-file-spreadsheet.svg": "368877",
    "./icon-file-unknown.svg": "531449",
    "./icon-file-video.svg": "347810",
    "./icon-file-webcode.svg": "144374",
};
function a(e) {
    return s(l(e));
}
function l(e) {
    if (!s.o(n, e)) {
        var t = Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
    }
    return n[e];
}
((a.keys = function () {
    return Object.keys(n);
}),
    (a.resolve = l),
    (e.exports = a),
    (a.id = 492313));
