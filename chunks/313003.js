i.d(t, { default: () => p });
var a = i(477900),
    l = i(582128),
    n = i(144228),
    r = i(913122),
    s = i(468689),
    u = i(809505),
    d = i(242273),
    c = i(652215),
    o = i(375708);
function p(e) {
    let { guild: t, onClose: i, hideColors: p } = e,
        [f, h] = l.useState(t.verificationLevel),
        [v, C] = l.useState(null),
        k = t.features.has(c.GuildFeatures.COMMUNITY),
        b = (0, u.vd)(k, p).filter((e) => !e.disabled),
        g = l.useCallback(async () => {
            null != v && C(null);
            try {
                (await s.default.saveGuild(t.id, { verificationLevel: f }),
                    s.default.updateGuild({ verificationLevel: f }),
                    i());
            } catch (e) {
                C(new r.LG(e).getAnyErrorMessage());
            }
        }, [v, t.id, f, i]);
    return (0, a.jsx)(d.A, {
        ...e,
        title: o.intl.string(o.t.DpRdYK),
        description: o.intl.format(o.t.iuRk2j, {}),
        errorText: v,
        onConfirm: g,
        onCancel: i,
        children: (0, a.jsx)(n.z, { value: f, options: b, onChange: (e) => h(e) }),
    });
}
