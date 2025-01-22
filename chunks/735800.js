var i = {
    './spritesheet--32.png': '188244',
    './spritesheet--40.png': '40853',
    './spritesheet--48.png': '981835',
    './spritesheet-1f3fb-32.png': '48472',
    './spritesheet-1f3fb-40.png': '749889',
    './spritesheet-1f3fb-48.png': '268687',
    './spritesheet-1f3fc-32.png': '635611',
    './spritesheet-1f3fc-40.png': '77280',
    './spritesheet-1f3fc-48.png': '679878',
    './spritesheet-1f3fd-32.png': '102274',
    './spritesheet-1f3fd-40.png': '918047',
    './spritesheet-1f3fd-48.png': '32030',
    './spritesheet-1f3fe-32.png': '542711',
    './spritesheet-1f3fe-40.png': '855266',
    './spritesheet-1f3fe-48.png': '897906',
    './spritesheet-1f3ff-32.png': '209369',
    './spritesheet-1f3ff-40.png': '862861',
    './spritesheet-1f3ff-48.png': '300878',
    './spritesheet-emoji-32.png': '63215',
    './spritesheet-emoji-40.png': '926720',
    './spritesheet-emoji-48.png': '178915',
    './spritesheet-picker-22.png': '899565'
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
    (a.id = '735800');
