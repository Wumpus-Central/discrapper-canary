"use strict";
n.d(t, { L: () => o });
var i = n(17928),
    r = n(287809),
    s = n(474090),
    a = n(788868);
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.PremiumTypes.TIER_2;
    return (0, i.bG)([r.default], () => {
        let t = r.default.getCurrentUser();
        return (0, s.YE)(t, e);
    });
}
