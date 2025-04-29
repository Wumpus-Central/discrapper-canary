n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(215569),
    l = n(481060),
    s = n(852860),
    a = n(236413),
    o = n(727072),
    c = n(65912),
    u = n(388032),
    d = n(11532);
function m(e) {
    let { guildId: t, existingRules: n } = e,
        { cancelEditingRule: m, isLoading: g, hasChanges: p, editingRule: h, errorMessage: f, saveEditingRule: x } = (0, c.w)(),
        { updateRule: b } = (0, o.pH)(t),
        j = null != h,
        _ = j && !(0, a.Vb)(h),
        v = j || p || _,
        O = async () => {
            if (!p && !_) return m();
            null == h || _ || b(h);
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
        C = u.intl.string(u.t['ETE/oK']),
        y = !p && j ? u.intl.formatToPlainString(u.t.nula39, { ruleName: null == h ? void 0 : h.name }) : void 0;
    return (
        null != f &&
            (y = (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'text-danger',
                className: d.message,
                children: f
            })),
        (0, r.jsx)(i.W, {
            component: 'div',
            className: d.saveNoticeContainer,
            children:
                v &&
                (0, r.jsx)(l.oXn, {
                    children: (0, r.jsx)(s.Z, {
                        submitting: g,
                        disabled: g,
                        onSave: O,
                        onReset: m,
                        onResetText: C,
                        message: y
                    })
                })
        })
    );
}
