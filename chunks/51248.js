n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var r = n(215569),
    l = n(481060),
    s = n(852860),
    a = n(236413),
    o = n(727072),
    c = n(65912),
    d = n(388032),
    u = n(551383);
function m(e) {
    let { guildId: t, existingRules: n } = e,
        { cancelEditingRule: m, isLoading: h, hasChanges: g, editingRule: x, errorMessage: p, saveEditingRule: _ } = (0, c.w)(),
        { updateRule: C } = (0, o.pH)(t),
        f = null != x,
        v = f && !(0, a.Vb)(x),
        N = f || g || v,
        j = async () => {
            if (!g && !v) return m();
            null == x || v || C(x);
            let e = n.find((e) => {
                let { id: t } = e;
                return t === (null == x ? void 0 : x.id);
            });
            try {
                let e = await _(n);
                null != e && C(e);
            } catch (t) {
                null != e && C(e);
            }
        },
        I = d.intl.string(d.t['ETE/oK']),
        E = !g && f ? d.intl.formatToPlainString(d.t.nula39, { ruleName: null == x ? void 0 : x.name }) : void 0;
    return (
        null != p &&
            (E = (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'text-danger',
                className: u.message,
                children: p
            })),
        (0, i.jsx)(r.W, {
            component: 'div',
            className: u.saveNoticeContainer,
            children:
                N &&
                (0, i.jsx)(l.oXn, {
                    children: (0, i.jsx)(s.Z, {
                        submitting: h,
                        disabled: h,
                        onSave: j,
                        onReset: m,
                        onResetText: I,
                        message: E
                    })
                })
        })
    );
}
