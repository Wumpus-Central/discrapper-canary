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
    u = n(231793);
function g(e) {
    let { guildId: t, existingRules: n } = e,
        {
            cancelEditingRule: g,
            isLoading: m,
            hasChanges: p,
            editingRule: f,
            errorMessage: h,
            saveEditingRule: b,
        } = (0, c.w)(),
        { updateRule: x } = (0, o.pH)(t),
        j = null != f,
        _ = j && !(0, s.Vb)(f),
        v = j || p || _,
        O = async () => {
            if (!p && !_) return g();
            null == f || _ || x(f);
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
        C = d.intl.string(d.t["ETE/oC"]),
        y = !p && j ? d.intl.formatToPlainString(d.t.nula34, { ruleName: null == f ? void 0 : f.name }) : void 0;
    return (
        null != h &&
            (y = (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "text-danger",
                className: u.message,
                children: h,
            })),
        (0, r.jsx)(i.W, {
            component: "div",
            className: u.saveNoticeContainer,
            children:
                v &&
                (0, r.jsx)(a.oXn, {
                    children: (0, r.jsx)(l.Z, {
                        submitting: m,
                        disabled: m,
                        onSave: O,
                        onReset: g,
                        onResetText: C,
                        message: y,
                    }),
                }),
        })
    );
}
