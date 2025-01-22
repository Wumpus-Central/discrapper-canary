var i = {
    './icon-file-acrobat.svg': '621680',
    './icon-file-ae.svg': '725345',
    './icon-file-ai.svg': '673762',
    './icon-file-archive.svg': '788525',
    './icon-file-audio.svg': '331906',
    './icon-file-code.svg': '894990',
    './icon-file-document.svg': '674720',
    './icon-file-image.svg': '109837',
    './icon-file-ps.svg': '504514',
    './icon-file-sketch.svg': '392807',
    './icon-file-spreadsheet.svg': '291410',
    './icon-file-unknown.svg': '516083',
    './icon-file-video.svg': '430539',
    './icon-file-webcode.svg': '343305'
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
    (a.id = '148660');
