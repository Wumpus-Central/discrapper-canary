n.d(t, { j: () => a });
var l = n(223273);
function a(e, t) {
    if (null == e || null == t || t < 10) return l.vI.NO_USER_REVIEWS;
    if (e >= 80) return t < 50 ? l.vI.POSITIVE : t < 500 || e < 95 ? l.vI.VERY_POSITIVE : l.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return l.vI.MOSTLY_POSITIVE;
    if (e >= 40) return l.vI.MIXED;
    if (e >= 20) return l.vI.MOSTLY_NEGATIVE;
    else if (t < 50) return l.vI.NEGATIVE;
    else if (t < 500) return l.vI.VERY_NEGATIVE;
    return l.vI.OVERWHELMINGLY_NEGATIVE;
}
