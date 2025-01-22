var i = r(387493),
    a = r(698030),
    o = r(459901),
    s = r(44091);
function l(e) {
    return function (n) {
        var r = a((n = s(n))) ? o(n) : void 0,
            l = r ? r[0] : n.charAt(0),
            u = r ? i(r, 1).join('') : n.slice(1);
        return l[e]() + u;
    };
}
e.exports = l;
