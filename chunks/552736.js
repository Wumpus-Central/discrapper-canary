"use strict";
n.d(t, { A: () => l });
var a = n(64700),
    i = n(607399),
    r = n(437852),
    s = n(657515);
function l() {
    let { enabled: e } = r.Ay.useConfig({ location: "useGiftingPromotionConfig" });
    return a.useMemo(() => (i.Fr || i.v1 ? null : e ? s.zH : null), [e]);
}
