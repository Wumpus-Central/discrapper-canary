n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(125744),
    r = n(311907),
    a = n(282956),
    o = n(573648),
    d = n(95035),
    c = n(997509),
    u = n(555337),
    m = n(652215),
    g = n(985018);
function h(e, t) {
    let n = (0, r.bG)([u.A], () => u.A.getProps().integrations);
    return l.useMemo(
        () =>
            (function (e, t) {
                let n;
                if (!e.managed) return null;
                let l = e.tags?.bot_id,
                    r = e.tags?.integration_id,
                    u = e.tags?.premium_subscriber !== void 0,
                    h = e.tags?.guild_connections !== void 0;
                if (
                    (null != l
                        ? (n = t?.find((e) => {
                              let { application: t } = e;
                              return t?.bot?.id === l;
                          }))
                        : null != r &&
                          (n = t?.find((e) => {
                              let { id: t } = e;
                              return t === r;
                          })),
                    null != n && null != n.application && null != n.name)
                ) {
                    let e = n.application.id,
                        t = n.name;
                    [s.s.TWITCH, s.s.YOUTUBE].includes(n.type) && (t = `${o.A.get(n.type).name} - ${t}`);
                    let l = () => {
                        c.A.setSection(m.BEX.INTEGRATIONS), a.A.setSection(m.wLn.APPLICATION, e);
                    };
                    return g.intl.format(g.t.FuXsWm, {
                        name: t,
                        integrationNameHook: (e, t) => (0, i.jsx)(d.A, { onClick: l, children: e }, t),
                    });
                }
                return u ? g.intl.string(g.t.oF6FYT) : h ? g.intl.string(g.t.ZQ37tH) : g.intl.string(g.t.k5d7DJ);
            })(t, n),
        [e, t, n],
    );
}
