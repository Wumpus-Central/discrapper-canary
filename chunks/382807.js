n.d(t, { A: () => d });
var i = n(627968),
    a = n(64700),
    l = n(397927),
    s = n(123791),
    r = n(627363),
    o = n(985018);
function d(e) {
    let { applicationId: t, guildId: n } = e,
        { data: a } = (0, r.YY)(t);
    return null == a ? null : (0, i.jsx)(c, { app: a, guildId: n });
}
function c(e) {
    let { app: t, guildId: r } = e;
    (0, s.C)(t.id);
    let d = a.useCallback(() => {
        (0, l.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("33563"), n.e("17754")]).then(n.bind(n, 719847));
            return (n) => (0, i.jsx)(e, { appId: t.id, guildId: r, ...n });
        });
    }, [t, r]);
    return (0, i.jsx)(l.Button, {
        size: "sm",
        onClick: d,
        icon: l.Uzv,
        text: o.intl.format(o.t.XDRjs5, { appName: t.name }),
    });
}
