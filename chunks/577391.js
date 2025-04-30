var r = {
    './img_premium_emoji_dark.svg': '341048',
    './img_premium_emoji_light.svg': '537381',
    './img_premium_emoji_tutorial.svg': '285022'
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
    (i.id = 577391);
