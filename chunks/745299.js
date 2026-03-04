n.d(t, { A: () => S });
var i = n(627968);
n(64700);
var l = n(110259),
    r = n(496431),
    a = n(793574),
    s = n(688810),
    o = n(139286),
    c = n(532794),
    _ = n(954571),
    E = n(975571),
    d = n(927578),
    u = n(234419),
    A = n(635995),
    T = n(915516),
    I = n(788868),
    N = n(652215),
    R = n(985018);
let S = function (e) {
    let { dismissCurrentNotice: t, subscriptionTier: n } = e,
        { analyticsLocations: S } = (0, s.Ay)(
            (function (e) {
                switch (e) {
                    case I.pe.TIER_0:
                        return a.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                    case I.pe.TIER_2:
                        return a.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                    default:
                        throw Error(`Unsupported subscription tier: ${e}`);
                }
            })(n),
        ),
        C = (0, u.V)(),
        O = (0, r.A)(null != C && null != C.expires_at ? Date.parse(C.expires_at) : 0),
        p =
            null == C ||
            C.subscription_trial?.sku_id !== n ||
            null == C.expires_at ||
            Object.values(O).every((e) => 0 === e);
    if (
        ((0, o.A)(
            {
                type: l.ImpressionTypes.VIEW,
                name: l.ImpressionNames.TRIAL_NOTICE,
                properties: { trial_id: C?.trial_id },
            },
            { disableTrack: p },
        ),
        p)
    )
        return null;
    let m = n === I.pe.TIER_2 ? N.kqX.PREMIUM_TIER_2_TRIAL_ENDING : N.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
        P = (0, d.re)({
            intervalType: C.subscription_trial?.interval,
            intervalCount: C.subscription_trial?.interval_count,
        }),
        D = E.A.getArticleURL(C.trial_id === I.yo ? N.MVz.NITRO_TRIAL_FOR_ALL : N.MVz.PREMIUM_TRIAL);
    return (0, i.jsxs)(A.T0, {
        onClick: () => {
            t(), _.default.track(N.HAw.APP_NOTICE_CLOSED, { notice_type: m, trial_id: C.trial_id });
        },
        children: [
            (0, i.jsx)(A.In, { children: (0, T.GZ)(n, O, P, D) }),
            (0, i.jsx)(A.fY, {
                onClick: () => {
                    (0, c.A)({
                        trialId: C.trial_id,
                        subscriptionTier: n,
                        analyticsLocations: S,
                        analyticsObject: {
                            page: N.liQ.IN_APP,
                            section: N.JJy.NOTIFICATION_BAR,
                            object: N.ZSU.BUTTON_CTA,
                        },
                    }),
                        _.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: m, trial_id: C.trial_id });
                },
                text: (function (e) {
                    switch (e) {
                        case I.pe.TIER_0:
                            return R.intl.string(R.t.mCG023);
                        case I.pe.TIER_2:
                            return R.intl.string(R.t.J61px0);
                        default:
                            throw Error(`Unsupported subscription tier: ${e}`);
                    }
                })(n),
            }),
        ],
    });
};
