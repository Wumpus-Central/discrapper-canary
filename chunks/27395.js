var r = n(617179);
e.exports = function (e, t) {
    if (!(e instanceof r)) return null;
    var n = e.getNextSiblingKey();
    if (n) return n;
    var i = e.getParentKey();
    if (!i) return null;
    for (var a = t.get(i); a && !a.getNextSiblingKey(); ) {
        var s = a.getParentKey();
        a = s ? t.get(s) : null;
    }
    return a ? a.getNextSiblingKey() : null;
};
