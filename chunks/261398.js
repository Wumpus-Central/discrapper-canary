i.d(t, { e: () => x });
var n = i(64700),
    a = i(311907),
    s = i(954571),
    l = i(207913),
    r = i(335891),
    d = i(985481),
    c = i(239093),
    o = i(652215);
let x = () => {
    let e = (0, a.bG)([l.A], () => l.A.getAppealClassificationId()),
        t = (0, d.LJ)(e ?? o.dJq),
        i = (0, r.K)(),
        x = (0, a.bG)([l.A], () => l.A.getIsDsaEligible());
    return n.useCallback(
        (n) => {
            s.default.track(o.HAw.SAFETY_HUB_ACTION, {
                action: n,
                account_standing: i.state,
                classification_ids: null != e ? [Number(e)] : null,
                source: c.XN.AppealIngestion,
                is_dsa_eligible: x,
                violation_type: t.violationType,
            });
        },
        [i.state, e, t, x],
    );
};
