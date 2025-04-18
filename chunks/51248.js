n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(215569),
    s = n(481060),
    l = n(852860),
    a = n(236413),
    o = n(727072),
    c = n(65912),
    d = n(388032),
    u = n(327992);
function m(e) {
    let { guildId: t, existingRules: n } = e,
        { cancelEditingRule: m, isLoading: g, hasChanges: p, editingRule: h, errorMessage: f, saveEditingRule: x } = (0, c.w)(),
        { updateRule: b } = (0, o.pH)(t),
        j = null != h,
        N = j && !(0, a.Vb)(h),
        _ = j || p || N,
        v = async () => {
            if (!p && !N) return m();
            null == h || N || b(h);
            let e = n.find((e) => {
                let { id: t } = e;
                return t === (null == h ? void 0 : h.id);
            });
            try {
                let e = await x(n);
                null != e && b(e);
            } catch (t) {
                null != e && b(e);
            }
        },
        O = d.NW.string(d.t['ETE/oK']),
        C = !p && j ? d.NW.formatToPlainString(d.t.nula39, { ruleName: null == h ? void 0 : h.name }) : void 0;
    return (
        null != f &&
            (C = (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'text-danger',
                className: u.message,
                children: f
            })),
        (0, r.jsx)(i.W, {
            component: 'div',
            className: u.saveNoticeContainer,
            children:
                _ &&
                (0, r.jsx)(s.oXn, {
                    children: (0, r.jsx)(l.Z, {
                        submitting: g,
                        disabled: g,
                        onSave: v,
                        onReset: m,
                        onResetText: O,
                        message: C
                    })
                })
        })
    );
}
