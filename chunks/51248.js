n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(215569),
    l = n(481060),
    s = n(852860),
    a = n(236413),
    o = n(727072),
    c = n(65912),
    d = n(388032),
    u = n(590745);
function g(e) {
    let { guildId: t, existingRules: n } = e,
        {
            cancelEditingRule: g,
            isLoading: m,
            hasChanges: p,
            editingRule: f,
            errorMessage: h,
            saveEditingRule: x,
        } = (0, c.w)(),
        { updateRule: b } = (0, o.pH)(t),
        j = null != f,
        _ = j && !(0, a.Vb)(f),
        v = j || p || _,
        C = async () => {
            if (!p && !_) return g();
            null == f || _ || b(f);
            let e = n.find((e) => {
                let { id: t } = e;
                return t === (null == f ? void 0 : f.id);
            });
            try {
                let e = await x(n);
                null != e && b(e);
            } catch (t) {
                null != e && b(e);
            }
        },
        O = d.intl.string(d.t["ETE/oK"]),
        y = !p && j ? d.intl.formatToPlainString(d.t.nula39, { ruleName: null == f ? void 0 : f.name }) : void 0;
    return (
        null != h &&
            (y = (0, r.jsx)(l.Text, {
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
                (0, r.jsx)(l.oXn, {
                    children: (0, r.jsx)(s.Z, {
                        submitting: m,
                        disabled: m,
                        onSave: C,
                        onReset: g,
                        onResetText: O,
                        message: y,
                    }),
                }),
        })
    );
}
