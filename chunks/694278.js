n.r(a),
    n.d(a, {
        default: function () {
            return m;
        }
    }),
    n(47120);
var e = n(200651),
    o = n(192379),
    r = n(481060),
    i = n(881052),
    l = n(434404),
    d = n(78451),
    s = n(915509),
    c = n(981631),
    u = n(388032),
    f = n(275477);
function m(t) {
    let { guild: a, onClose: n, hideColors: m } = t,
        [p, x] = o.useState(a.verificationLevel),
        [g, C] = o.useState(null),
        h = a.hasFeature(c.oNc.COMMUNITY),
        _ = (0, d.IF)(h, m).filter((t) => !t.disabled),
        I = o.useCallback(async () => {
            null != g && C(null);
            try {
                await l.Z.saveGuild(a.id, { verificationLevel: p }), l.Z.updateGuild({ verificationLevel: p }), n();
            } catch (t) {
                C(new i.Hx(t).getAnyErrorMessage());
            }
        }, [g, a.id, p, n]);
    return (0, e.jsx)(s.Z, {
        ...t,
        title: u.intl.string(u.t.DpRdYG),
        errorText: g,
        onConfirm: I,
        onCancel: n,
        children: (0, e.jsxs)(r.FormSection, {
            children: [
                (0, e.jsx)(r.FormText, {
                    type: r.FormText.Types.DESCRIPTION,
                    className: f.marginBottom20,
                    children: u.intl.format(u.t.iuRk2t, {})
                }),
                (0, e.jsx)(r.RadioGroup, {
                    value: p,
                    options: _,
                    onChange: (t) => x(t.value)
                })
            ]
        })
    });
}
