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
    u = n(611582);
function m(e) {
    let { guildId: t, existingRules: n } = e,
        { cancelEditingRule: m, isLoading: p, hasChanges: g, editingRule: h, errorMessage: f, saveEditingRule: b } = (0, c.w)(),
        { updateRule: x } = (0, o.pH)(t),
        j = null != h,
        N = j && !(0, l.Vb)(h),
        v = j || g || N,
        _ = async () => {
            if (!g && !N) return m();
            null == h || N || x(h);
            let e = n.find((e) => {
                let { id: t } = e;
                return t === (null == h ? void 0 : h.id);
            });
            try {
                let e = await b(n);
                null != e && x(e);
            } catch (t) {
                null != e && x(e);
            }
        },
        O = d.NW.string(d.t['ETE/oK']),
        y = !g && j ? d.NW.formatToPlainString(d.t.nula39, { ruleName: null == h ? void 0 : h.name }) : void 0;
    return (
        null != f &&
            (y = (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'text-danger',
                className: u.message,
                children: f
            })),
        (0, r.jsx)(i.W, {
            component: 'div',
            className: u.saveNoticeContainer,
            children:
                v &&
                (0, r.jsx)(s.oXn, {
                    children: (0, r.jsx)(a.Z, {
                        submitting: p,
                        disabled: p,
                        onSave: _,
                        onReset: m,
                        onResetText: O,
                        message: y
                    })
                })
        })
    );
}
