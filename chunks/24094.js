l.d(t, { default: () => g });
var n = l(627968),
    i = l(64700),
    r = l(296489),
    u = l.n(r),
    s = l(820284),
    a = l(913122),
    d = l(513461),
    c = l(241499),
    p = l(242273),
    o = l(652215),
    h = l(375708);
let g = function (e) {
    let { field: t, onSave: l, onClose: r, guild: g } = e,
        [v, f] = i.useState(
            t?.values != null ? t?.values.map((e) => ({ id: u()(), value: e })) : [{ id: u()(), value: "" }],
        ),
        [_, A] = i.useState(null);
    async function C() {
        null != _ && A(null);
        let e = v.map((e) => e.value.trim()).filter((e) => "" !== e);
        if (0 === e.length) return void A(h.intl.string(h.t.TCHkcd));
        let t = { field_type: d.rX.TERMS, label: h.intl.string(h.t["9suSIA"]), values: e, required: !0 };
        try {
            await l(t), r();
        } catch (e) {
            A(new a.LG(e).getAnyErrorMessage());
        }
    }
    return (0, n.jsx)(s.A, {
        page: o.liQ.GUILD_RULES_CREATE_MODAL,
        children: (0, n.jsx)(p.A, {
            ...e,
            errorText: _,
            title: h.intl.string(h.t["3pz9t3"]),
            onCancel: r,
            onConfirm: C,
            children: (0, n.jsx)(c._, { guild: g, rules: v, setRules: f }),
        }),
    });
};
