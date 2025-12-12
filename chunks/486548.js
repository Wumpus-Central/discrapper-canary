n.d(t, { m: () => E });
var r = n(488214),
    i = n(385702),
    a = n(798619),
    o = n(483698),
    _ = n(926648),
    s = n(456370);
let c = [0.1, 0.25],
    E = (e, t = {}) => {
        (0, s.a)(
            (0, _.R)(() => {
                let n,
                    _ = (0, i.I)("CLS", 0),
                    s = 0,
                    E = [],
                    l = (e) => {
                        e.forEach((e) => {
                            if (!e.hadRecentInput) {
                                let t = E[0],
                                    n = E[E.length - 1];
                                s && t && n && e.startTime - n.startTime < 1000 && e.startTime - t.startTime < 5000
                                    ? ((s += e.value), E.push(e))
                                    : ((s = e.value), (E = [e]));
                            }
                        }),
                            s > _.value && ((_.value = s), (_.entries = E), n());
                    },
                    u = (0, a.N)("layout-shift", l);
                u &&
                    ((n = (0, r._)(e, _, c, t.reportAllChanges)),
                    (0, o.u)(() => {
                        l(u.takeRecords()), n(!0);
                    }),
                    setTimeout(n, 0));
            }),
        );
    };
