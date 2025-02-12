e.d(n, { default: () => g }), e(47120);
var i = e(200651),
    r = e(192379),
    a = e(481060),
    l = e(881052),
    o = e(434404),
    s = e(78451),
    c = e(915509),
    d = e(981631),
    u = e(388032),
    _ = e(483938);
function g(t) {
    let { guild: n, onClose: e, hideColors: g } = t,
        [E, m] = r.useState(n.verificationLevel),
        [b, x] = r.useState(null),
        N = n.hasFeature(d.oNc.COMMUNITY),
        R = (0, s.IF)(N, g).filter((t) => !t.disabled),
        v = r.useCallback(async () => {
            null != b && x(null);
            try {
                await o.Z.saveGuild(n.id, { verificationLevel: E }), o.Z.updateGuild({ verificationLevel: E }), e();
            } catch (t) {
                x(new l.Hx(t).getAnyErrorMessage());
            }
        }, [b, n.id, E, e]);
    return (0, i.jsx)(c.Z, {
        ...t,
        title: u.intl.string(u.t.DpRdYG),
        errorText: b,
        onConfirm: v,
        onCancel: e,
        children: (0, i.jsxs)(a.hjN, {
            children: [
                (0, i.jsx)(a.R94, {
                    type: a.R94.Types.DESCRIPTION,
                    className: _.marginBottom20,
                    children: u.intl.format(u.t.iuRk2t, {})
                }),
                (0, i.jsx)(a.FXm, {
                    value: E,
                    options: R,
                    onChange: (t) => m(t.value)
                })
            ]
        })
    });
}
