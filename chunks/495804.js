n.d(t, { Z: () => o });
var r = n(473749),
    i = n(535396),
    l = n(981631);
function o(e) {
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t =
                (null == e ? void 0 : e.features.has(l.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === !0
                    ? 0
                    : l.oCV[l.Eu4.TIER_3],
            n = Object.values(i.Hk),
            r = Object.values(i.cG);
        return (
            n.concat(r).forEach((n) => {
                var r, i;
                null == n.includedInLevel &&
                    (null == (i = null == (r = n.isEnabled) ? void 0 : r.call(n, e.id)) || i) &&
                    (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
