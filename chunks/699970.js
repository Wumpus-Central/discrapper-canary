var i = t(582128),
    l = t(855986),
    s = t(734057),
    a = t(488926),
    r = t(849736),
    o = t(652215);
t.d(
    n,
    {},
    {
        X: function (e) {
            let n = (0, l.bG)([s.A], () => s.A.getChannel(e), [e]),
                t = a.MJ(o.xBc.REQUEST_TO_SPEAK, n),
                [c, u] = i.useState(t);
            return (
                t !== c && u(t),
                [
                    c,
                    function (e) {
                        null != n && (u(e), (0, r.b6)(n, o.xBc.REQUEST_TO_SPEAK, e));
                    },
                ]
            );
        },
    },
);
