"use strict";
n.d(t, { T: () => r, q: () => a });
var l = n(575593),
    i = n(993408),
    s = n(375708);
function r(e) {
    var t = e.name;
    switch (e.tenantMetadata?.collectibles?.type) {
        case l.R.AVATAR_DECORATION:
            return s.intl.formatToPlainString(s.t.lvBzLi, { product: t });
        case l.R.PROFILE_EFFECT:
            return s.intl.formatToPlainString(s.t.eR7moP, { product: t });
        case l.R.NAMEPLATE:
            return s.intl.formatToPlainString(s.t.YFOwHj, { product: t });
        default:
            return t;
    }
}
function a(e) {
    return !(0, i.G0)(e) && e.type !== l.R.EXTERNAL_SKU;
}
