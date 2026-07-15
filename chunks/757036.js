"use strict";
n.d(t, { L: () => l });
var i = n(17928),
    r = n(287809),
    a = n(474090),
    s = n(202541);
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.PremiumTypes.TIER_2;
    return (0, i.bG)([r.default], () => {
        let t = r.default.getCurrentUser();
        return (0, a.YE)(t, e);
    });
}
