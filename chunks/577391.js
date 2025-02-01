var i = {
    './img_premium_emoji_dark.svg': '341048',
    './img_premium_emoji_light.svg': '537381',
    './img_premium_emoji_tutorial.svg': '285022'
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
    (r.id = 577391);
