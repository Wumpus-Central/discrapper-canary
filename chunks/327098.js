var l = n(855986),
    i = n(933958),
    a = n(429913),
    r = n(574520);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, l.bG)([r.A], () => r.A.getMatchingActivity(e)),
                [n, s] = (0, a.A)([t?.application_id, "application_id" in e.extra ? e.extra.application_id : void 0]);
            return {
                activity: t,
                embeddedActivity: (0, l.bG)([i.Ay], () => i.Ay.getEmbeddedActivityForUserId(e.author_id, n?.id)),
                anyMatchingApplication: n ?? s,
                activityApplication: n,
                fallbackApplication: s,
            };
        },
    },
);
