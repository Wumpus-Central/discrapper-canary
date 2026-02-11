n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(123791),
    s = n(627363),
    o = n(985018);
function d(e) {
    let { applicationId: t, guildId: n } = e,
        { data: l } = (0, s.YY)(t);
    return null == l ? null : (0, i.jsx)(c, { app: l, guildId: n });
}
function c(e) {
    let { app: t, guildId: s } = e;
    (0, r.C)(t.id);
    let d = l.useCallback(() => {
        (0, a.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("33563"), n.e("4437")]).then(n.bind(n, 719847));
            return (n) => (0, i.jsx)(e, { appId: t.id, guildId: s, ...n });
        });
    }, [t, s]);
    return (0, i.jsx)(a.Button, {
        size: "sm",
        onClick: d,
        icon: a.Uzv,
        text: o.intl.format(o.t.XDRjs5, { appName: t.name }),
    });
}
