n.d(e, { default: () => b }), n(47120);
var a = n(200651),
    r = n(192379),
    i = n(481060),
    o = n(881052),
    l = n(434404),
    s = n(78451),
    d = n(915509),
    c = n(981631),
    u = n(388032),
    _ = n(483938);
function b(t) {
    let { guild: e, onClose: n, hideColors: b } = t,
        [m, x] = r.useState(e.verificationLevel),
        [p, h] = r.useState(null),
        g = e.hasFeature(c.oNc.COMMUNITY),
        C = (0, s.IF)(g, b).filter((t) => !t.disabled),
        I = r.useCallback(async () => {
            null != p && h(null);
            try {
                await l.Z.saveGuild(e.id, { verificationLevel: m }), l.Z.updateGuild({ verificationLevel: m }), n();
            } catch (t) {
                h(new o.Hx(t).getAnyErrorMessage());
            }
        }, [p, e.id, m, n]);
    return (0, a.jsx)(d.Z, {
        ...t,
        title: u.intl.string(u.t.DpRdYG),
        errorText: p,
        onConfirm: I,
        onCancel: n,
        children: (0, a.jsxs)(i.hjN, {
            children: [
                (0, a.jsx)(i.R94, {
                    type: i.R94.Types.DESCRIPTION,
                    className: _.marginBottom20,
                    children: u.intl.format(u.t.iuRk2t, {})
                }),
                (0, a.jsx)(i.FXm, {
                    value: m,
                    options: C,
                    onChange: (t) => x(t.value)
                })
            ]
        })
    });
}
