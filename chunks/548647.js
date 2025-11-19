i.d(e, { n: () => x });
var t = i(473749),
    a = i(442837),
    s = i(626135),
    l = i(236289),
    r = i(451284),
    o = i(613734),
    c = i(800530),
    d = i(981631);
let x = () => {
    let n = (0, a.e7)([l.Z], () => l.Z.getAppealClassificationId()),
        e = (0, o.YG)(null != n ? n : d.lds),
        i = (0, r.P)(),
        x = (0, a.e7)([l.Z], () => l.Z.getIsDsaEligible());
    return t.useCallback(
        (t) => {
            s.default.track(d.rMx.SAFETY_HUB_ACTION, {
                action: t,
                account_standing: i.state,
                classification_ids: null != n ? [Number(n)] : null,
                source: c.s.AppealIngestion,
                is_dsa_eligible: x,
                violation_type: e.violationType,
            });
        },
        [i.state, n, e, x],
    );
};
