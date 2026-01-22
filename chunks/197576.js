var r = n(611122).notEmptyKey;
function i(e, t) {
    return r(t) && "MUTABLE" === e.__get(t).getMutability() ? t : null;
}
e.exports = function (e, t) {
    if (t.isCollapsed()) {
        var n,
            r = t.getAnchorKey(),
            a = t.getAnchorOffset();
        return a > 0
            ? (n = e.getBlockForKey(r).getEntityAt(a - 1)) !== e.getBlockForKey(r).getEntityAt(a)
                ? null
                : i(e.getEntityMap(), n)
            : null;
    }
    var s = t.getStartKey(),
        o = t.getStartOffset(),
        l = e.getBlockForKey(s);
    return (n = o === l.getLength() ? null : l.getEntityAt(o)), i(e.getEntityMap(), n);
};
