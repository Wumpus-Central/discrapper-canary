"use strict";
n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var r = n(562708),
    a = n(496431),
    s = n(793574),
    l = n(688810),
    o = n(139286),
    d = n(532794),
    c = n(174459),
    u = n(975571),
    _ = n(428262),
    E = n(234419),
    A = n(635995),
    h = n(99462),
    I = n(202541),
    f = n(652215),
    p = n(375708);
let T = function (e) {
    let { dismissCurrentNotice: t, subscriptionTier: n } = e,
        { analyticsLocations: T } = (0, l.Ay)(
            (function (e) {
                switch (e) {
                    case I.pe.TIER_0:
                        return s.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                    case I.pe.TIER_2:
                        return s.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                    default:
                        throw Error(`Unsupported subscription tier: ${e}`);
                }
            })(n),
        ),
        m = (0, E.V)(),
        g = (0, a.A)(null != m && null != m.expires_at ? Date.parse(m.expires_at) : 0),
        S =
            null == m ||
            m.subscription_trial?.sku_id !== n ||
            null == m.expires_at ||
            Object.values(g).every((e) => 0 === e);
    if (
        ((0, o.A)(
            {
                type: r.ImpressionTypes.VIEW,
                name: r.ImpressionNames.TRIAL_NOTICE,
                properties: { trial_id: m?.trial_id },
            },
            { disableTrack: S },
        ),
        S)
    )
        return null;
    let N = n === I.pe.TIER_2 ? f.kqX.PREMIUM_TIER_2_TRIAL_ENDING : f.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
        C = (0, _.re)({
            intervalType: m.subscription_trial?.interval,
            intervalCount: m.subscription_trial?.interval_count,
        }),
        O = u.A.getArticleURL(m.trial_id === I.yo ? f.MVz.NITRO_TRIAL_FOR_ALL : f.MVz.PREMIUM_TRIAL);
    return (0, i.jsxs)(A.T0, {
        onClick: () => {
            t(), c.default.track(f.HAw.APP_NOTICE_CLOSED, { notice_type: N, trial_id: m.trial_id });
        },
        children: [
            (0, i.jsx)(A.In, { children: (0, h.GZ)(n, g, C, O) }),
            (0, i.jsx)(A.fY, {
                onClick: () => {
                    (0, d.A)({
                        trialId: m.trial_id,
                        subscriptionTier: n,
                        analyticsLocations: T,
                        analyticsObject: {
                            page: f.liQ.IN_APP,
                            section: f.JJy.NOTIFICATION_BAR,
                            object: f.ZSU.BUTTON_CTA,
                        },
                    }),
                        c.default.track(f.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: N, trial_id: m.trial_id });
                },
                text: (function (e) {
                    switch (e) {
                        case I.pe.TIER_0:
                            return p.intl.string(p.t.mCG023);
                        case I.pe.TIER_2:
                            return p.intl.string(p.t.J61px0);
                        default:
                            throw Error(`Unsupported subscription tier: ${e}`);
                    }
                })(n),
            }),
        ],
    });
};
