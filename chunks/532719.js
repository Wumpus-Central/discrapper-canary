n.d(t, {
    A: () => u,
}),
    n(228524);
var r = n(627968),
    l = n(64700),
    a = n(284009),
    i = n.n(a),
    s = n(397927),
    o = n(155718),
    c = n(207963);

function u(e) {
    var t;
    let { type: n, default: a } = e,
        u = (0, c.jc)();
    i()(null != u, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
    let { state: d, executeStateUpdate: m } = u.useComponentState(
            e,
            null != a
                ? {
                      type: n,
                      value: a,
                  }
                : void 0,
        ),
        f = l.useMemo(() => (null == d ? void 0 : d.type) === n && d.value, [d, n]),
        p = null == (t = u.getParents(e)) ? void 0 : t[0],
        h = (null == p ? void 0 : p.type) === o.I5.LABEL ? p : void 0;
    return (
        i()(null != h, "CheckboxActionComponent must be a child of a Label component"),
        (0, r.jsx)(s.Checkbox, {
            label: h.label,
            description: h.description,
            checked: f,
            onChange: (e) => {
                m({
                    type: n,
                    value: e,
                });
            },
        })
    );
}
