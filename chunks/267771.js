"use strict";
n.d(t, { A: () => r });
var i = n(64700),
    s = n(568065),
    l = n(652215);
function r(e) {
    return (0, i.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(l.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : l.M2T[l.TVA.TIER_3],
            n = Object.values(s.sy),
            i = Object.values(s.YV);
        return (
            n.concat(i).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
