n.d(t, {
    A: () => p,
}),
    n(65821);
var r = n(627968);
n(64700);
var i = n(110259),
    l = n(496431),
    a = n(793574),
    o = n(688810),
    s = n(139286),
    c = n(532794),
    u = n(954571),
    E = n(975571),
    d = n(927578),
    _ = n(234419),
    A = n(635995),
    T = n(915516),
    I = n(788868),
    O = n(652215),
    N = n(985018);
let p = function (e) {
    var t, n, p;
    let { dismissCurrentNotice: R, subscriptionTier: S } = e,
        { analyticsLocations: P } = (0, o.Ay)(
            (function (e) {
                switch (e) {
                    case I.pe.TIER_0:
                        return a.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                    case I.pe.TIER_2:
                        return a.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                    default:
                        throw Error("Unsupported subscription tier: ".concat(e));
                }
            })(S),
        ),
        y = (0, _.V)(),
        m = (0, l.A)(null != y && null != y.expires_at ? Date.parse(y.expires_at) : 0),
        f =
            null == y ||
            (null == (t = y.subscription_trial) ? void 0 : t.sku_id) !== S ||
            null == y.expires_at ||
            Object.values(m).every((e) => 0 === e);
    if (
        ((0, s.A)(
            {
                type: i.ImpressionTypes.VIEW,
                name: i.ImpressionNames.TRIAL_NOTICE,
                properties: {
                    trial_id: null == y ? void 0 : y.trial_id,
                },
            },
            {
                disableTrack: f,
            },
        ),
        f)
    )
        return null;
    let C = S === I.pe.TIER_2 ? O.kqX.PREMIUM_TIER_2_TRIAL_ENDING : O.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
        g = (0, d.re)({
            intervalType: null == (n = y.subscription_trial) ? void 0 : n.interval,
            intervalCount: null == (p = y.subscription_trial) ? void 0 : p.interval_count,
        }),
        D = E.A.getArticleURL(y.trial_id === I.yo ? O.MVz.NITRO_TRIAL_FOR_ALL : O.MVz.PREMIUM_TRIAL);
    return (0, r.jsxs)(A.T0, {
        onClick: () => {
            R(),
                u.default.track(O.HAw.APP_NOTICE_CLOSED, {
                    notice_type: C,
                    trial_id: y.trial_id,
                });
        },
        children: [
            (0, r.jsx)(A.In, {
                children: (0, T.GZ)(S, m, g, D),
            }),
            (0, r.jsx)(A.fY, {
                onClick: () => {
                    (0, c.A)({
                        trialId: y.trial_id,
                        subscriptionTier: S,
                        analyticsLocations: P,
                        analyticsObject: {
                            page: O.liQ.IN_APP,
                            section: O.JJy.NOTIFICATION_BAR,
                            object: O.ZSU.BUTTON_CTA,
                        },
                    }),
                        u.default.track(O.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                            notice_type: C,
                            trial_id: y.trial_id,
                        });
                },
                text: (function (e) {
                    switch (e) {
                        case I.pe.TIER_0:
                            return N.intl.string(N.t.mCG023);
                        case I.pe.TIER_2:
                            return N.intl.string(N.t.J61px0);
                        default:
                            throw Error("Unsupported subscription tier: ".concat(e));
                    }
                })(S),
            }),
        ],
    });
};
