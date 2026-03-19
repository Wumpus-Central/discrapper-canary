n.d(t, { A: () => A });
var l = n(627968),
    a = n(64700),
    r = n(397927),
    s = n(713654),
    i = n(734057),
    o = n(71393),
    c = n(207963),
    d = n(289770),
    u = n(247818),
    m = n(652215),
    p = n(53156);
function A(e) {
    let { channelTypes: t } = e,
        n = (0, c.jc)(),
        A = n?.channelId,
        h = i.A.getChannel(A),
        C = o.A.getGuild(h?.getGuildId()),
        E = a.useMemo(() => (0, d.iA)(e.defaultValues, C?.id, t), [e.defaultValues, C, t]);
    return (0, l.jsx)(u.Ay, {
        selectActionComponent: e,
        queryOptions: (e) => (0, d.z0)(e, A, t),
        renderIcon: (e, t) => {
            let n = i.A.getChannel(e?.value);
            if (null == n) return null;
            let a = n.type === m.rbe.GUILD_CATEGORY ? r.sjq : (0, s.gU)(n);
            return null != a ? (0, l.jsx)(a, { size: "custom", color: "currentColor", width: t, height: t }) : null;
        },
        renderOptionLabel: (e) => (0, l.jsx)("span", { className: p.Pf, children: e.label }),
        defaultValues: E,
    });
}
