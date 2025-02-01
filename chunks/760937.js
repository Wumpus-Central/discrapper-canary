var i = n(565580);
function r(e, t) {
    var n = -1,
        r = e.length,
        a = r - 1;
    for (t = void 0 === t ? r : t; ++n < t; ) {
        var s = i(n, a),
            o = e[s];
        (e[s] = e[n]), (e[n] = o);
    }
    return (e.length = t), e;
}
e.exports = r;
