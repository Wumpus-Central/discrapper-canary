"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(125744),
    r = n(311907),
    a = n(282956),
    o = n(573648),
    d = n(95035),
    c = n(997509),
    u = n(555337),
    m = n(652215),
    g = n(985018);
function x(e, t) {
    let n = (0, r.bG)([u.A], () => u.A.getProps().integrations);
    return s.useMemo(
        () =>
            (function (e, t, n) {
                let s;
                if (!t.managed) return null;
                let r = t.tags?.bot_id,
                    u = t.tags?.integration_id,
                    x = t.tags?.premium_subscriber !== void 0,
                    h = t.tags?.guild_connections !== void 0;
                if (
                    (null != r
                        ? (s = n?.find((e) => {
                              let { application: t } = e;
                              return t?.bot?.id === r;
                          }))
                        : null != u &&
                          (s = n?.find((e) => {
                              let { id: t } = e;
                              return t === u;
                          })),
                    null != s && null != s.application && null != s.name)
                ) {
                    let e = s.application.id,
                        t = s.name;
                    [l.s.TWITCH, l.s.YOUTUBE].includes(s.type) && (t = `${o.A.get(s.type).name} - ${t}`);
                    let n = () => {
                        c.A.setSection(m.BEX.INTEGRATIONS), a.A.setSection(m.wLn.APPLICATION, e);
                    };
                    return g.intl.format(g.t.FuXsWm, {
                        name: t,
                        integrationNameHook: (e, t) => (0, i.jsx)(d.A, { onClick: n, children: e }, t),
                    });
                }
                return x ? g.intl.string(g.t.oF6FYT) : h ? g.intl.string(g.t.ZQ37tH) : g.intl.string(g.t.k5d7DJ);
            })(0, t, n),
        [e, t, n],
    );
}
