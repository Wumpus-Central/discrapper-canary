var i = n(975460),
    r = n(627363),
    a = n(587895),
    s = n(712440),
    l = n(733110),
    o = n(580583),
    d = n(673383);
n.d(
    t,
    {},
    {
        A: async function (e) {
            let t = o.A.getInvite(e);
            if (t?.state !== d.Zb.RESOLVED) return;
            let n = t.application.id;
            try {
                await r.Ay.fetchApplications([n], !1);
            } catch {
                return;
            }
            let c = (0, i.t)(a.A.getApplication(n));
            if (null == c) return;
            let u = c.parentId ?? c.id;
            l.A.getFetchStateForApplication(u) === l.FetchState.NOT_FETCHED && s.A.fetch([u]);
        },
    },
);
