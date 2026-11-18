n.d(
    t,
    {},
    {
        A: function (e, t) {
            if (e?.trialId == null) return !0;
            let n = t.getUserTrialOffer(e.trialId);
            return null != n && !n.hasExpired;
        },
    },
);
