n.d(t, { A: () => p });
var a = n(627968),
    l = n(64700),
    r = n(678708),
    i = n(713654),
    s = n(734057),
    o = n(71393),
    d = n(207963),
    c = n(289770),
    u = n(247818),
    m = n(652215),
    _ = n(167483);
function p(e) {
    let { channelTypes: t } = e,
        n = (0, d.jc)(),
        p = n?.channelId,
        h = s.A.getChannel(p),
        A = o.A.getGuild(h?.getGuildId()),
        C = l.useMemo(() => (0, c.iA)(e.defaultValues, A?.id, t), [e.defaultValues, A, t]);
    return (0, a.jsx)(u.Ay, {
        selectActionComponent: e,
        queryOptions: (e) => (0, c.z0)(e, p, t),
        renderIcon: (e, t) => {
            let n = s.A.getChannel(e?.value);
            if (null == n) return null;
            let l = n.type === m.rbe.GUILD_CATEGORY ? r.s : (0, i.gU)(n);
            return null != l ? (0, a.jsx)(l, { size: "custom", color: "currentColor", width: t, height: t }) : null;
        },
        renderOptionLabel: (e) => (0, a.jsx)("span", { className: _.Pf, children: e.label }),
        defaultValues: C,
    });
}
