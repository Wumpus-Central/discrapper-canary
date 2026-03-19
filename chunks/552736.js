"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    a = n(607399),
    r = n(437852),
    s = n(657515);
function o() {
    let { enabled: e } = r.Ay.useConfig({ location: "useGiftingPromotionConfig" });
    return i.useMemo(() => (a.Fr || a.v1 ? null : e ? s.zH : null), [e]);
}
