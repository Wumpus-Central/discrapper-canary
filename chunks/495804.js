n.d(t, { Z: () => o });
var r = n(647438),
    i = n(535396),
    l = n(981631);
function o(e) {
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t = (null == e ? void 0 : e.features.has(l.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0 ? 0 : l.oCV[l.Eu4.TIER_3];
        return (
            Object.keys(i.Hk).forEach((e) => {
                let n = i.Hk[e];
                null != n && null == n.includedInLevel && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
