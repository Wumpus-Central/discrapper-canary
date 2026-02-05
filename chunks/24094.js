l.d(t, { default: () => g });
var n = l(627968),
    i = l(64700),
    a = l(296489),
    r = l.n(a),
    s = l(820284),
    o = l(198982),
    u = l(513461),
    c = l(241499),
    d = l(242273),
    x = l(652215),
    p = l(985018);
let g = function (e) {
    let { field: t, onSave: l, onClose: a, guild: g } = e,
        [_, h] = i.useState(
            t?.values != null ? t?.values.map((e) => ({ id: r()(), value: e })) : [{ id: r()(), value: "" }],
        ),
        [f, C] = i.useState(null),
        m = async () => {
            null != f && C(null);
            let e = _.map((e) => e.value.trim()).filter((e) => "" !== e);
            if (0 === e.length) return void C(p.intl.string(p.t.TCHkcd));
            let t = { field_type: u.rX.TERMS, label: p.intl.string(p.t["9suSIA"]), values: e, required: !0 };
            try {
                await l(t), a();
            } catch (e) {
                C(new o.LG(e).getAnyErrorMessage());
            }
        };
    return (0, n.jsx)(s.A, {
        page: x.liQ.GUILD_RULES_CREATE_MODAL,
        children: (0, n.jsx)(d.A, {
            ...e,
            errorText: f,
            title: p.intl.string(p.t["3pz9t3"]),
            onCancel: a,
            onConfirm: m,
            children: (0, n.jsx)(c._, { guild: g, rules: _, setRules: h }),
        }),
    });
};
