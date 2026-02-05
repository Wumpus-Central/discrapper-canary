"use strict";
n.d(t, { A: () => o });
var r = n(64700),
    i = n(607399),
    a = n(437852),
    s = n(657515);
function o() {
    let { enabled: e } = a.Ay.useConfig({ location: "useGiftingPromotionConfig" });
    return r.useMemo(() => (i.Fr || i.v1 ? null : e ? s.zH : null), [e]);
}
