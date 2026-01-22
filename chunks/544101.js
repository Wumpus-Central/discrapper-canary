n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(713654),
    o = n(734057),
    l = n(71393),
    c = n(207963),
    u = n(289770),
    d = n(247818),
    f = n(652215),
    p = n(794998);
function _(e) {
    let { channelTypes: t } = e,
        n = (0, c.jc)(),
        _ = null == n ? void 0 : n.channelId,
        h = o.A.getChannel(_),
        m = l.A.getGuild(null == h ? void 0 : h.getGuildId()),
        g = (e) => (0, u.z0)(e, _, t),
        E = (e, t) => {
            let n = o.A.getChannel(null == e ? void 0 : e.value);
            if (null == n) return null;
            let i = n.type === f.rbe.GUILD_CATEGORY ? a.sjq : (0, s.gU)(n);
            return null != i
                ? (0, r.jsx)(i, {
                      size: "custom",
                      color: "currentColor",
                      width: t,
                      height: t,
                  })
                : null;
        },
        b = (e) =>
            (0, r.jsx)("span", {
                className: p.Pf,
                children: e.label,
            }),
        y = i.useMemo(() => (0, u.iA)(e.defaultValues, null == m ? void 0 : m.id, t), [e.defaultValues, m, t]);
    return (0, r.jsx)(d.Ay, {
        selectActionComponent: e,
        queryOptions: g,
        renderIcon: E,
        renderOptionLabel: b,
        defaultValues: y,
    });
}
