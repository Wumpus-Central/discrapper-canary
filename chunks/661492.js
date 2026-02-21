"use strict";
n.d(t, { q: () => r, x: () => a });
var i = n(575593),
    s = n(993408),
    l = n(985018);
function a(e) {
    let t = e.skuName;
    if (null != e.bundleItems && e.bundleItems.length > 0)
        return l.intl.formatToPlainString(l.t["/l2CAE"], { itemName: t });
    let n = e.collectiblesItem;
    if (null == n) return t;
    switch (n.type) {
        case i.R.AVATAR_DECORATION:
            return l.intl.formatToPlainString(l.t.IQQYef, { itemName: t });
        case i.R.PROFILE_EFFECT:
            return l.intl.formatToPlainString(l.t["x/MGWy"], { itemName: t });
        case i.R.NAMEPLATE:
            return l.intl.formatToPlainString(l.t.eVNt6E, { itemName: t });
        default:
            return t;
    }
}
function r(e) {
    return !(0, s.G0)(e) && e.type !== i.R.EXTERNAL_SKU;
}
