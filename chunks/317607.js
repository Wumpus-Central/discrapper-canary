n.d(t, { j: () => l });
var i = n(223273);
function l(e, t) {
    if (null == e || null == t || t < 10) return i.vI.NO_USER_REVIEWS;
    if (e >= 80) return t < 50 ? i.vI.POSITIVE : t < 500 || e < 95 ? i.vI.VERY_POSITIVE : i.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return i.vI.MOSTLY_POSITIVE;
    if (e >= 40) return i.vI.MIXED;
    if (e >= 20) return i.vI.MOSTLY_NEGATIVE;
    else if (t < 50) return i.vI.NEGATIVE;
    else if (t < 500) return i.vI.VERY_NEGATIVE;
    return i.vI.OVERWHELMINGLY_NEGATIVE;
}
