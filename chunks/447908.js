n.d(t, { Z: () => l });
var r = n(474936),
    i = n(981631);
function l(e) {
    if (null == e) return 0;
    let t = (null == e ? void 0 : e.features.has(i.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0 ? 0 : i.oCV[i.Eu4.TIER_3];
    return (
        Object.values(r.jn).forEach((e) => {
            t += e;
        }),
        t
    );
}
