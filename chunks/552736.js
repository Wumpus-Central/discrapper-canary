"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    s = n(607399),
    r = n(437852),
    a = n(657515);
function l() {
    let { enabled: e } = r.Ay.useConfig({ location: "useGiftingPromotionConfig" });
    return i.useMemo(() => (s.Fr || s.v1 ? null : e ? a.zH : null), [e]);
}
