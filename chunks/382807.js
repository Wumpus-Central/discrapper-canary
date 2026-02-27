n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    r = n(397927),
    a = n(123791),
    s = n(627363),
    o = n(985018);
function d(e) {
    let { applicationId: t, guildId: n } = e,
        { data: l } = (0, s.YY)(t);
    return null == l ? null : (0, i.jsx)(c, { app: l, guildId: n });
}
function c(e) {
    let { app: t, guildId: s } = e;
    (0, a.C)(t.id);
    let d = l.useCallback(() => {
        (0, r.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("33563"), n.e("43245")]).then(n.bind(n, 719847));
            return (n) => (0, i.jsx)(e, { appId: t.id, guildId: s, ...n });
        });
    }, [t, s]);
    return (0, i.jsx)(r.Button, {
        size: "sm",
        onClick: d,
        icon: r.Uzv,
        text: o.intl.format(o.t.XDRjs5, { appName: t.name }),
    });
}
