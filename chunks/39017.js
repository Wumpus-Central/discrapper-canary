n.d(e, { e: () => x });
var t = n(64700),
    a = n(311907),
    s = n(954571),
    l = n(207913),
    r = n(335891),
    c = n(985481),
    d = n(239093),
    o = n(652215);
let x = () => {
    let i = (0, a.bG)([l.A], () => l.A.getAppealClassificationId()),
        e = (0, c.LJ)(i ?? o.dJq),
        n = (0, r.K)(),
        x = (0, a.bG)([l.A], () => l.A.getIsDsaEligible());
    return t.useCallback(
        (t) => {
            s.default.track(o.HAw.SAFETY_HUB_ACTION, {
                action: t,
                account_standing: n.state,
                classification_ids: null != i ? [Number(i)] : null,
                source: d.XN.AppealIngestion,
                is_dsa_eligible: x,
                violation_type: e.violationType,
            });
        },
        [n.state, i, e, x],
    );
};
