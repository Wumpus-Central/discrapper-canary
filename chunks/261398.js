n.d(i, { e: () => x });
var t = n(64700),
    a = n(311907),
    s = n(954571),
    l = n(207913),
    r = n(335891),
    d = n(985481),
    c = n(239093),
    o = n(652215);
let x = () => {
    let e = (0, a.bG)([l.A], () => l.A.getAppealClassificationId()),
        i = (0, d.LJ)(null != e ? e : o.dJq),
        n = (0, r.K)(),
        x = (0, a.bG)([l.A], () => l.A.getIsDsaEligible());
    return t.useCallback(
        (t) => {
            s.default.track(o.HAw.SAFETY_HUB_ACTION, {
                action: t,
                account_standing: n.state,
                classification_ids: null != e ? [Number(e)] : null,
                source: c.XN.AppealIngestion,
                is_dsa_eligible: x,
                violation_type: i.violationType,
            });
        },
        [n.state, e, i, x],
    );
};
