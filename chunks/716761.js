var i = n(129230);
n.d(
    t,
    {},
    {
        X: function (e, t, n) {
            i.default.track(e, {
                campaign_id: t.id,
                application_id: t.applicationId,
                reason: n.type,
                blocker: "blocked" === n.type ? n.blocker : null,
            });
        },
    },
);
