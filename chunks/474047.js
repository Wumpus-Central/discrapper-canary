var i = n(855986),
    l = n(627363),
    r = n(587895),
    a = n(499466);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = (0, a.TW)(t, { autoTrackExposure: e.bot }),
                o = (0, i.bG)([r.A], () => (n && e.bot ? (r.A.getAppIdForBotUserId(e.id) ?? e.id) : null), [
                    n,
                    e.bot,
                    e.id,
                ]),
                d = (0, l.YY)(o).data;
            return d?.conjureProjectId != null ? d : null;
        },
    },
);
