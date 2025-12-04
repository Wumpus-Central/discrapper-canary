r.d(t, { m: () => E });
var n = r(488214),
    a = r(385702),
    i = r(798619),
    o = r(483698),
    _ = r(926648),
    s = r(456370);
let c = [0.1, 0.25],
    E = (e, t = {}) => {
        (0, s.a)(
            (0, _.R)(() => {
                let r,
                    _ = (0, a.I)("CLS", 0),
                    s = 0,
                    E = [],
                    l = (e) => {
                        e.forEach((e) => {
                            if (!e.hadRecentInput) {
                                let t = E[0],
                                    r = E[E.length - 1];
                                s && t && r && e.startTime - r.startTime < 1000 && e.startTime - t.startTime < 5000
                                    ? ((s += e.value), E.push(e))
                                    : ((s = e.value), (E = [e]));
                            }
                        }),
                            s > _.value && ((_.value = s), (_.entries = E), r());
                    },
                    u = (0, i.N)("layout-shift", l);
                u &&
                    ((r = (0, n._)(e, _, c, t.reportAllChanges)),
                    (0, o.u)(() => {
                        l(u.takeRecords()), r(!0);
                    }),
                    setTimeout(r, 0));
            }),
        );
    };
