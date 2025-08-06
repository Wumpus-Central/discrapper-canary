var r = n(94553).notEmptyKey;
function i(e, t) {
    return r(t) && 'MUTABLE' === e.__get(t).getMutability() ? t : null;
}
e.exports = function (e, t) {
    if (t.isCollapsed()) {
        var n,
            r = t.getAnchorKey(),
            o = t.getAnchorOffset();
        return o > 0 ? ((n = e.getBlockForKey(r).getEntityAt(o - 1)) !== e.getBlockForKey(r).getEntityAt(o) ? null : i(e.getEntityMap(), n)) : null;
    }
    var a = t.getStartKey(),
        s = t.getStartOffset(),
        l = e.getBlockForKey(a);
    return ((n = s === l.getLength() ? null : l.getEntityAt(s)), i(e.getEntityMap(), n));
};
