n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(215569),
    l = n(481060),
    a = n(852860),
    s = n(236413),
    o = n(727072),
    c = n(65912),
    d = n(388032),
    u = n(551383);
function m(e) {
    let { guildId: t, existingRules: n } = e,
        { cancelEditingRule: m, isLoading: h, hasChanges: g, editingRule: x, errorMessage: p, saveEditingRule: f } = (0, c.w)(),
        { updateRule: C } = (0, o.pH)(t),
        v = null != x,
        _ = v && !(0, s.Vb)(x),
        N = v || g || _,
        I = async () => {
            if (!g && !_) return m();
            null != x && !_ && C(x);
            let e = n.find((e) => {
                let { id: t } = e;
                return t === (null == x ? void 0 : x.id);
            });
            try {
                let e = await f(n);
                null != e && C(e);
            } catch (t) {
                null != e && C(e);
            }
        },
        T = d.intl.string(d.t['ETE/oK']),
        j = !g && v ? d.intl.formatToPlainString(d.t.nula39, { ruleName: null == x ? void 0 : x.name }) : void 0;
    return (
        null != p &&
            (j = (0, i.jsx)(l.Text, {
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
                (0, i.jsx)(l.SlideIn, {
                    children: (0, i.jsx)(a.Z, {
                        submitting: h,
                        disabled: h,
                        onSave: I,
                        onReset: m,
                        onResetText: T,
                        message: j
                    })
                })
        })
    );
}
