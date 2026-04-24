n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    a = n(192308),
    r = n(821609),
    s = n(503002),
    o = n(123791),
    c = n(627363),
    d = n(985018);
function u(e) {
    let { applicationId: t, guildId: n } = e,
        { data: l } = (0, c.YY)(t);
    return null == l ? null : (0, i.jsx)(_, { app: l, guildId: n });
}
function _(e) {
    let { app: t, guildId: c } = e;
    (0, o.C)(t.id);
    let u = l.useCallback(() => {
        (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("85384"), n.e("17754")]).then(n.bind(n, 719847));
            return (n) => (0, i.jsx)(e, { appId: t.id, guildId: c, ...n });
        });
    }, [t, c]);
    return (0, i.jsx)(r.$, { size: "sm", onClick: u, icon: s.U, text: d.intl.format(d.t.XDRjs5, { appName: t.name }) });
}
