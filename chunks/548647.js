e.d(t, { n: () => x });
var i = e(473749),
    a = e(442837),
    s = e(626135),
    l = e(236289),
    r = e(451284),
    o = e(613734),
    c = e(800530),
    d = e(981631);
let x = () => {
    let n = (0, a.e7)([l.Z], () => l.Z.getAppealClassificationId()),
        t = (0, o.YG)(null != n ? n : d.lds),
        e = (0, r.P)(),
        x = (0, a.e7)([l.Z], () => l.Z.getIsDsaEligible());
    return i.useCallback(
        (i) => {
            s.default.track(d.rMx.SAFETY_HUB_ACTION, {
                action: i,
                account_standing: e.state,
                classification_ids: null != n ? [Number(n)] : null,
                source: c.s.AppealIngestion,
                is_dsa_eligible: x,
                violation_type: t.violationType,
            });
        },
        [e.state, n, t, x],
    );
};
