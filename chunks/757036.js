"use strict";
n.d(t, { L: () => s });
var a = n(17928),
    i = n(287809),
    l = n(474090),
    r = n(788868);
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.PremiumTypes.TIER_2;
    return (0, a.bG)([i.default], () => {
        let t = i.default.getCurrentUser();
        return (0, l.YE)(t, e);
    });
}
