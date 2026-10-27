l.d(e, { A: () => u });
var n = l(17928),
    r = l(832163);
function u(t) {
    let { applicationId: e, guildId: l } = t;
    return (0, n.bG)(
        [r.A],
        () => (null != e ? r.A.getStorefrontDataForApplicationId(e) : null != l ? r.A.getStorefrontData(l) : void 0),
        [e, l],
    );
}
