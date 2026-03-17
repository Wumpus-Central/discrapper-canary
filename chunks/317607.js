n.d(t, { j: () => l });
var a = n(223273);
function l(e, t) {
    if (null == e || null == t || t < 10) return a.vI.NO_USER_REVIEWS;
    if (e >= 80) return t < 50 ? a.vI.POSITIVE : t < 500 || e < 95 ? a.vI.VERY_POSITIVE : a.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return a.vI.MOSTLY_POSITIVE;
    if (e >= 40) return a.vI.MIXED;
    if (e >= 20) return a.vI.MOSTLY_NEGATIVE;
    else if (t < 50) return a.vI.NEGATIVE;
    else if (t < 500) return a.vI.VERY_NEGATIVE;
    return a.vI.OVERWHELMINGLY_NEGATIVE;
}
