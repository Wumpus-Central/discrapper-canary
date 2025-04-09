n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(215569),
    s = n(481060),
    a = n(852860),
    l = n(236413),
    o = n(727072),
    c = n(65912),
    d = n(388032),
    u = n(11532);
function m(e) {
    let { guildId: t, existingRules: n } = e,
        { cancelEditingRule: m, isLoading: g, hasChanges: p, editingRule: f, errorMessage: h, saveEditingRule: b } = (0, c.w)(),
        { updateRule: x } = (0, o.pH)(t),
        j = null != f,
        N = j && !(0, l.Vb)(f),
        v = j || p || N,
        _ = async () => {
            if (!p && !N) return m();
            null == f || N || x(f);
            let e = n.find((e) => {
                let { id: t } = e;
                return t === (null == f ? void 0 : f.id);
            });
            try {
                let e = await b(n);
                null != e && x(e);
            } catch (t) {
                null != e && x(e);
            }
        },
        y = d.NW.string(d.t['ETE/oK']),
        O = !p && j ? d.NW.formatToPlainString(d.t.nula39, { ruleName: null == f ? void 0 : f.name }) : void 0;
    return (
        null != h &&
            (O = (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'text-danger',
                className: u.message,
                children: h
            })),
        (0, r.jsx)(i.W, {
            component: 'div',
            className: u.saveNoticeContainer,
            children:
                v &&
                (0, r.jsx)(s.oXn, {
                    children: (0, r.jsx)(a.Z, {
                        submitting: g,
                        disabled: g,
                        onSave: _,
                        onReset: m,
                        onResetText: y,
                        message: O
                    })
                })
        })
    );
}
