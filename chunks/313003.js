a.d(e, { default: () => _ });
var n = a(627968),
    i = a(64700),
    r = a(954197),
    l = a(198982),
    o = a(997509),
    s = a(809505),
    c = a(242273),
    d = a(652215),
    u = a(985018);
function _(t) {
    let { guild: e, onClose: a, hideColors: _ } = t,
        [b, p] = i.useState(e.verificationLevel),
        [C, g] = i.useState(null),
        h = e.features.has(d.GuildFeatures.COMMUNITY),
        v = (0, s.vd)(h, _).filter((t) => !t.disabled),
        f = i.useCallback(async () => {
            null != C && g(null);
            try {
                await o.A.saveGuild(e.id, { verificationLevel: b }), o.A.updateGuild({ verificationLevel: b }), a();
            } catch (t) {
                g(new l.LG(t).getAnyErrorMessage());
            }
        }, [C, e.id, b, a]);
    return (0, n.jsx)(c.A, {
        ...t,
        title: u.intl.string(u.t.DpRdYK),
        description: u.intl.format(u.t.iuRk2j, {}),
        errorText: C,
        onConfirm: f,
        onCancel: a,
        children: (0, n.jsx)(r.z, { value: b, options: v, onChange: (t) => p(t) }),
    });
}
