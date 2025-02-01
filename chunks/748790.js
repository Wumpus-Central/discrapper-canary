var i = n(387493),
    r = n(698030),
    a = n(459901),
    s = n(44091);
function o(e) {
    return function (t) {
        var n = r((t = s(t))) ? a(t) : void 0,
            o = n ? n[0] : t.charAt(0),
            l = n ? i(n, 1).join('') : t.slice(1);
        return o[e]() + l;
    };
}
e.exports = o;
