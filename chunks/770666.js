var r = n(855986),
    A = n(931991),
    c = n(808728),
    u = n(71393),
    i = n(576705),
    a = n(652215);
n.d(
    e,
    {},
    {
        A: function (t, e) {
            return (0, r.bG)(
                [u.A, c.A, i.A],
                () => {
                    let n = u.A.getGuild(t);
                    if (i.A.can(a.xBc.ADMINISTRATOR, n) || i.A.can(a.xBc.CREATE_EVENTS, n)) return !0;
                    for (let { channel: n } of c.A.getChannels(t).VOCAL)
                        if (null == e || n.type === e) {
                            let [t] = (0, A.p_)(n);
                            if (i.A.can(t, n)) return !0;
                        }
                    return !1;
                },
                [t, e],
            );
        },
    },
);
