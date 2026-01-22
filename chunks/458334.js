n.d(t, {
    A: () => b,
});
var r = n(627968),
    i = n(64700),
    l = n(125744),
    s = n(311907),
    a = n(282956),
    c = n(573648),
    o = n(95035),
    d = n(997509),
    u = n(555337),
    f = n(652215),
    g = n(985018);

function b(e, t) {
    let n = (0, s.bG)([u.A], () => u.A.getProps().integrations);
    return i.useMemo(
        () =>
            (function (e, t, n) {
                var i, s, u, b;
                let m;
                if (!t.managed) return null;
                let p = null == (i = t.tags) ? void 0 : i.bot_id,
                    x = null == (s = t.tags) ? void 0 : s.integration_id,
                    h = (null == (u = t.tags) ? void 0 : u.premium_subscriber) !== void 0,
                    j = (null == (b = t.tags) ? void 0 : b.guild_connections) !== void 0;
                if (
                    (null != p
                        ? (m =
                              null == n
                                  ? void 0
                                  : n.find((e) => {
                                        var t;
                                        let { application: n } = e;
                                        return (null == n || null == (t = n.bot) ? void 0 : t.id) === p;
                                    }))
                        : null != x &&
                          (m =
                              null == n
                                  ? void 0
                                  : n.find((e) => {
                                        let { id: t } = e;
                                        return t === x;
                                    })),
                    null != m && null != m.application && null != m.name)
                ) {
                    let e = m.application.id,
                        t = m.name;
                    [l.s.TWITCH, l.s.YOUTUBE].includes(m.type) &&
                        (t = "".concat(c.A.get(m.type).name, " - ").concat(t));
                    let n = () => {
                        d.A.setSection(f.BEX.INTEGRATIONS), a.A.setSection(f.wLn.APPLICATION, e);
                    };
                    return g.intl.format(g.t.FuXsWm, {
                        name: t,
                        integrationNameHook: (e, t) =>
                            (0, r.jsx)(
                                o.A,
                                {
                                    onClick: n,
                                    children: e,
                                },
                                t,
                            ),
                    });
                }
                return h ? g.intl.string(g.t.oF6FYT) : j ? g.intl.string(g.t.ZQ37tH) : g.intl.string(g.t.k5d7DJ);
            })(0, t, n),
        [e, t, n],
    );
}
