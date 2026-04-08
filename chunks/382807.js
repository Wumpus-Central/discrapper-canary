n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    r = n(123791),
    a = n(627363),
    o = n(985018);
function d(e) {
    let { applicationId: t, guildId: n } = e,
        { data: l } = (0, a.YY)(t);
    return null == l ? null : (0, i.jsx)(c, { app: l, guildId: n });
}
function c(e) {
    let { app: t, guildId: a } = e;
    (0, r.C)(t.id);
    let d = l.useCallback(() => {
        (0, s.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("33563"), n.e("88596")]).then(n.bind(n, 719847));
            return (n) => (0, i.jsx)(e, { appId: t.id, guildId: a, ...n });
        });
    }, [t, a]);
    return (0, i.jsx)(s.Button, {
        size: "sm",
        onClick: d,
        icon: s.Uzv,
        text: o.intl.format(o.t.XDRjs5, { appName: t.name }),
    });
}
