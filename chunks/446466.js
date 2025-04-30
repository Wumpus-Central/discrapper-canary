var n = r(994616);
t.exports = function (t) {
    var e = t.getSelection();
    if (!e.rangeCount) return null;
    var r = n(e.getRangeAt(0)),
        i = r.top,
        o = r.right,
        a = r.bottom,
        u = r.left;
    return 0 === i && 0 === o && 0 === a && 0 === u ? null : r;
};
