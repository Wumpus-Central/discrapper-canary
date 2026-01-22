n.d(t, { A: () => u }), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(397927),
    l = n(155718),
    c = n(207963);
function u(e) {
    var t;
    let { type: n, default: a } = e,
        u = (0, c.jc)();
    s()(null != u, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
    let { state: d, executeStateUpdate: f } = u.useComponentState(
            e,
            null != a
                ? {
                      type: n,
                      value: a,
                  }
                : void 0,
        ),
        p = i.useMemo(() => (null == d ? void 0 : d.type) === n && d.value, [d, n]),
        _ = (e) => {
            f({
                type: n,
                value: e,
            });
        },
        h = null == (t = u.getParents(e)) ? void 0 : t[0],
        m = (null == h ? void 0 : h.type) === l.I5.LABEL ? h : void 0;
    return (
        s()(null != m, "CheckboxActionComponent must be a child of a Label component"),
        (0, r.jsx)(o.Checkbox, {
            label: m.label,
            description: m.description,
            checked: p,
            onChange: _,
        })
    );
}
