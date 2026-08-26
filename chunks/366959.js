"use strict";
n.d(t, { ix: () => o, z$: () => l });
var i = n(32206),
    r = n(482947),
    a = n(13875);
function s(e) {
    let { canViewProfileFramesInCollectiblesShop: t, isEarlyAccess: n } = e,
        i = t && !n;
    return { isAnnouncementEligible: i, isEarlyAccess: n, showGiftingMarketing: i };
}
function l(e) {
    return s({ canViewProfileFramesInCollectiblesShop: (0, a.sk)(e), isEarlyAccess: (0, a.Do)(e) });
}
function o(e) {
    let t = i.A.getConfig({ location: e }).enableProfileFrames,
        { bucket: n } = r.A.getConfig({ location: e });
    return s({
        canViewProfileFramesInCollectiblesShop: t && n !== r.H.CONTROL,
        isEarlyAccess: t && n === r.H.PAID_PREMIUM_SUBSCRIBERS_ONLY,
    });
}
