var r = n(754823).notEmptyKey;
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
    var o = t.getStartKey(),
        s = t.getStartOffset(),
        l = e.getBlockForKey(o);
    return (n = s === l.getLength() ? null : l.getEntityAt(s)), i(e.getEntityMap(), n);
};
