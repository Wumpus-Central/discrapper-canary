n.d(t, { Z: () => a });
var r = n(73800),
    i = n(901005),
    l = n(535396),
    o = n(981631);
function a(e, t) {
    let n = (0, i.i)(null == e ? void 0 : e.id, t);
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t = (null == e ? void 0 : e.features.has(o.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0 ? 0 : o.oCV[o.Eu4.TIER_3];
        return (
            Object.keys(l.Hk)
                .filter((e) => !!n || (e !== o.oNc.GUILD_TAGS_BADGE_PACK_PETS && e !== o.oNc.GUILD_TAGS_BADGE_PACK_FLEX))
                .forEach((e) => {
                    let n = l.Hk[e];
                    null != n && null == n.includedInLevel && (t += n.boostPrice);
                }),
            t
        );
    }, [e, n]);
}
