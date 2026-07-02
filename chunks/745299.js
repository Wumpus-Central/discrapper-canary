"use strict";
n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var r = n(562708),
    s = n(496431),
    a = n(793574),
    o = n(688810),
    l = n(139286),
    u = n(532794),
    c = n(174459),
    d = n(975571),
    _ = n(428262),
    h = n(234419),
    f = n(635995),
    p = n(99462),
    E = n(202541),
    m = n(652215),
    g = n(375708);
let A = function (e) {
    let { dismissCurrentNotice: t, subscriptionTier: n } = e,
        { analyticsLocations: A } = (0, o.Ay)(
            (function (e) {
                switch (e) {
                    case E.pe.TIER_0:
                        return a.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                    case E.pe.TIER_2:
                        return a.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                    default:
                        throw Error(`Unsupported subscription tier: ${e}`);
                }
            })(n),
        ),
        I = (0, h.V)(),
        T = (0, s.A)(null != I && null != I.expires_at ? Date.parse(I.expires_at) : 0),
        S =
            null == I ||
            I.subscription_trial?.sku_id !== n ||
            null == I.expires_at ||
            Object.values(T).every((e) => 0 === e);
    if (
        ((0, l.A)(
            {
                type: r.ImpressionTypes.VIEW,
                name: r.ImpressionNames.TRIAL_NOTICE,
                properties: { trial_id: I?.trial_id },
            },
            { disableTrack: S },
        ),
        S)
    )
        return null;
    let y = n === E.pe.TIER_2 ? m.kqX.PREMIUM_TIER_2_TRIAL_ENDING : m.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
        C = (0, _.re)({
            intervalType: I.subscription_trial?.interval,
            intervalCount: I.subscription_trial?.interval_count,
        }),
        N = d.A.getArticleURL(I.trial_id === E.yo ? m.MVz.NITRO_TRIAL_FOR_ALL : m.MVz.PREMIUM_TRIAL);
    return (0, i.jsxs)(f.T0, {
        onClick: () => {
            t(), c.default.track(m.HAw.APP_NOTICE_CLOSED, { notice_type: y, trial_id: I.trial_id });
        },
        children: [
            (0, i.jsx)(f.In, { children: (0, p.GZ)(n, T, C, N) }),
            (0, i.jsx)(f.fY, {
                onClick: () => {
                    (0, u.A)({
                        trialId: I.trial_id,
                        subscriptionTier: n,
                        analyticsLocations: A,
                        analyticsObject: {
                            page: m.liQ.IN_APP,
                            section: m.JJy.NOTIFICATION_BAR,
                            object: m.ZSU.BUTTON_CTA,
                        },
                    }),
                        c.default.track(m.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: y, trial_id: I.trial_id });
                },
                text: (function (e) {
                    switch (e) {
                        case E.pe.TIER_0:
                            return g.intl.string(g.t.mCG023);
                        case E.pe.TIER_2:
                            return g.intl.string(g.t.J61px0);
                        default:
                            throw Error(`Unsupported subscription tier: ${e}`);
                    }
                })(n),
            }),
        ],
    });
};
