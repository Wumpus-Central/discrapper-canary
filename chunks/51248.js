n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(215569),
    l = n(796027),
    a = n(481060),
    s = n(236413),
    o = n(727072),
    c = n(65912),
    d = n(388032),
    u = n(896811);
function g(e) {
    let { guildId: t, existingRules: n } = e,
        {
            cancelEditingRule: g,
            isLoading: f,
            hasChanges: m,
            editingRule: b,
            errorMessage: p,
            saveEditingRule: h,
        } = (0, c.w)(),
        { updateRule: x } = (0, o.pH)(t),
        j = null != b,
        v = j && !(0, s.Vb)(b),
        O = j || m || v,
        C = async () => {
            if (!m && !v) return g();
            null == b || v || x(b);
            let e = n.find((e) => {
                let { id: t } = e;
                return t === (null == b ? void 0 : b.id);
            });
            try {
                let e = await h(n);
                null != e && x(e);
            } catch (t) {
                null != e && x(e);
            }
        },
        y = d.intl.string(d.t["ETE/oC"]),
        N = !m && j ? d.intl.formatToPlainString(d.t.nula34, { ruleName: null == b ? void 0 : b.name }) : void 0;
    return (
        null != p &&
            (N = (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "text-feedback-critical",
                className: u.message,
                children: p,
            })),
        (0, r.jsx)(i.W, {
            component: "div",
            className: u.saveNoticeContainer,
            children:
                O &&
                (0, r.jsx)(a.oXn, {
                    children: (0, r.jsx)(l.Z, {
                        submitting: f,
                        disabled: f,
                        onSave: C,
                        onReset: g,
                        onResetText: y,
                        message: N,
                    }),
                }),
        })
    );
}
