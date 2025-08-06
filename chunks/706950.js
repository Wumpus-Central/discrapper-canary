var r = n(682146);
e.exports = function (e) {
    var t = e.getSelection();
    if (!t.rangeCount) return null;
    var n = r(t.getRangeAt(0)),
        i = n.top,
        o = n.right,
        a = n.bottom,
        s = n.left;
    return 0 === i && 0 === o && 0 === a && 0 === s ? null : n;
};
