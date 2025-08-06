var r = n(214788);
e.exports = function (e, t) {
    if (!(e instanceof r)) return null;
    var n = e.getNextSiblingKey();
    if (n) return n;
    var i = e.getParentKey();
    if (!i) return null;
    for (var o = t.get(i); o && !o.getNextSiblingKey(); ) {
        var a = o.getParentKey();
        o = a ? t.get(a) : null;
    }
    return o ? o.getNextSiblingKey() : null;
};
