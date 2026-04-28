n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(192308),
    a = n(821609),
    r = n(503002),
    o = n(123791),
    d = n(627363),
    c = n(985018);
function u(e) {
    let { applicationId: t, guildId: n } = e,
        { data: l } = (0, d.YY)(t);
    return null == l ? null : (0, i.jsx)(m, { app: l, guildId: n });
}
function m(e) {
    let { app: t, guildId: d } = e;
    (0, o.C)(t.id);
    let u = l.useCallback(() => {
        (0, s.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("28592"), n.e("68031"), n.e("85384"), n.e("20428")]).then(
                n.bind(n, 719847),
            );
            return (n) => (0, i.jsx)(e, { appId: t.id, guildId: d, ...n });
        });
    }, [t, d]);
    return (0, i.jsx)(a.$, { size: "sm", onClick: u, icon: r.U, text: c.intl.format(c.t.XDRjs5, { appName: t.name }) });
}
