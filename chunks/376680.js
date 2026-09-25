l.d(t, { A: () => u });
var e = l(17928),
    r = l(832163);
function u(n) {
    let { applicationId: t, guildId: l } = n;
    return (0, e.bG)(
        [r.A],
        () => (null != t ? r.A.getStorefrontDataForApplicationId(t) : null != l ? r.A.getStorefrontData(l) : void 0),
        [t, l],
    );
}
