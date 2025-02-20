t.d(n, { n: () => x });
var i = t(192379),
    s = t(442837),
    a = t(626135),
    l = t(236289),
    r = t(451284),
    o = t(613734),
    c = t(800530),
    d = t(981631);
let x = () => {
    let e = (0, s.e7)([l.Z], () => l.Z.getAppealClassificationId()),
        n = (0, o.YG)(null != e ? e : d.lds),
        t = (0, r.P)(),
        x = (0, s.e7)([l.Z], () => l.Z.getIsDsaEligible());
    return i.useCallback(
        (i) => {
            a.default.track(d.rMx.SAFETY_HUB_ACTION, {
                action: i,
                account_standing: t.state,
                classification_ids: null != e ? [Number(e)] : null,
                source: c.s.AppealIngestion,
                is_dsa_eligible: x,
                violation_type: n.violationType
            });
        },
        [t.state, e, n, x]
    );
};
