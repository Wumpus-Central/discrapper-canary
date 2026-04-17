n.d(t, { HM: () => s, ad: () => r, yi: () => i });
var l = n(223273),
    a = n(985018);
function i(e) {
    switch (e) {
        case l.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case l.vI.OVERWHELMINGLY_POSITIVE:
        case l.vI.VERY_POSITIVE:
        case l.vI.POSITIVE:
        case l.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case l.vI.MIXED:
            return "steam-review-text-mixed";
        case l.vI.MOSTLY_NEGATIVE:
        case l.vI.NEGATIVE:
        case l.vI.VERY_NEGATIVE:
        case l.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
function r(e) {
    switch (e) {
        case l.vI.NO_USER_REVIEWS:
            return a.intl.string(a.t.CLMt8J);
        case l.vI.OVERWHELMINGLY_POSITIVE:
            return a.intl.string(a.t["75sx1S"]);
        case l.vI.VERY_POSITIVE:
            return a.intl.string(a.t["EkOVg+"]);
        case l.vI.POSITIVE:
            return a.intl.string(a.t.ZUkFtr);
        case l.vI.MOSTLY_POSITIVE:
            return a.intl.string(a.t.M7Z09a);
        case l.vI.MIXED:
            return a.intl.string(a.t.c8yuHR);
        case l.vI.MOSTLY_NEGATIVE:
            return a.intl.string(a.t.H0MSjG);
        case l.vI.NEGATIVE:
            return a.intl.string(a.t.vpLrgz);
        case l.vI.VERY_NEGATIVE:
            return a.intl.string(a.t["5spYuX"]);
        case l.vI.OVERWHELMINGLY_NEGATIVE:
            return a.intl.string(a.t.A8uk5J);
        default:
            return null;
    }
}
function s(e) {
    return (
        null != e &&
        null != e.localizedRating &&
        null != e.localizedRatingCount &&
        null != e.ratingCount &&
        e.localizedRatingCount >= 200 &&
        e.ratingCount >= 2e3
    );
}
