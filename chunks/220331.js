n.d(t, { R: () => c });
var r = n(951288),
    i = n(159691),
    a = n(626135),
    o = n(453591),
    s = n(981631),
    l = n(388032);
let c = () => {
    let { redeemReward: e, isLoading: t } = (0, o.h)(),
        n = async () => {
            a.default.track(s.rMx.PREMIUM_MARKETING_CAMPAIGN_REDEMPTION_CARD_CLICKED, {}), await e();
        };
    return (0, r.jsx)(i.zxk, {
        text: l.intl.string(l.t["8g3ANT"]),
        onClick: n,
        fullWidth: !0,
        loading: t,
    });
};
