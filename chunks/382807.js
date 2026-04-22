n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    a = n(192308),
    s = n(821609),
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
        (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("33563"), n.e("17754")]).then(n.bind(n, 719847));
            return (n) => (0, i.jsx)(e, { appId: t.id, guildId: d, ...n });
        });
    }, [t, d]);
    return (0, i.jsx)(s.$, { size: "sm", onClick: u, icon: r.U, text: c.intl.format(c.t.XDRjs5, { appName: t.name }) });
}
