"use strict";
n.d(t, { L: () => s });
var i = n(17928),
    a = n(287809),
    r = n(474090),
    l = n(788868);
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.PremiumTypes.TIER_2;
    return (0, i.bG)([a.default], () => {
        let t = a.default.getCurrentUser();
        return (0, r.YE)(t, e);
    });
}
