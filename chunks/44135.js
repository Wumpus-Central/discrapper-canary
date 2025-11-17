var r = n(309987);
e.exports = function (e, t) {
    if (!(e instanceof r)) return null;
    var n = e.getNextSiblingKey();
    if (n) return n;
    var i = e.getParentKey();
    if (!i) return null;
    for (var a = t.get(i); a && !a.getNextSiblingKey(); ) {
        var o = a.getParentKey();
        a = o ? t.get(o) : null;
    }
    return a ? a.getNextSiblingKey() : null;
};
