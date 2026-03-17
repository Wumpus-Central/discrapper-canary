n.d(t, { a: () => r, y: () => i });
var a = n(223273),
    l = n(985018);
function i(e) {
    switch (e) {
        case a.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case a.vI.OVERWHELMINGLY_POSITIVE:
        case a.vI.VERY_POSITIVE:
        case a.vI.POSITIVE:
        case a.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case a.vI.MIXED:
            return "steam-review-text-mixed";
        case a.vI.MOSTLY_NEGATIVE:
        case a.vI.NEGATIVE:
        case a.vI.VERY_NEGATIVE:
        case a.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
function r(e) {
    switch (e) {
        case a.vI.NO_USER_REVIEWS:
            return l.intl.string(l.t.CLMt8J);
        case a.vI.OVERWHELMINGLY_POSITIVE:
            return l.intl.string(l.t["75sx1S"]);
        case a.vI.VERY_POSITIVE:
            return l.intl.string(l.t["EkOVg+"]);
        case a.vI.POSITIVE:
            return l.intl.string(l.t.ZUkFtr);
        case a.vI.MOSTLY_POSITIVE:
            return l.intl.string(l.t.M7Z09a);
        case a.vI.MIXED:
            return l.intl.string(l.t.c8yuHR);
        case a.vI.MOSTLY_NEGATIVE:
            return l.intl.string(l.t.H0MSjG);
        case a.vI.NEGATIVE:
            return l.intl.string(l.t.vpLrgz);
        case a.vI.VERY_NEGATIVE:
            return l.intl.string(l.t["5spYuX"]);
        case a.vI.OVERWHELMINGLY_NEGATIVE:
            return l.intl.string(l.t.A8uk5J);
        default:
            return null;
    }
}
