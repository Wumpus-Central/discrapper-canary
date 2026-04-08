n.d(t, { A: () => a });
var i = n(64700),
    l = n(568065),
    s = n(652215);
function a(e) {
    return (0, i.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(s.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : s.M2T[s.TVA.TIER_3],
            n = Object.values(l.sy),
            i = Object.values(l.YV);
        return (
            n.concat(i).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
