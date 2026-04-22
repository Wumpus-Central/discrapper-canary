n.d(t, { A: () => c });
var a = n(627968),
    l = n(64700),
    r = n(284009),
    i = n.n(r),
    s = n(150934),
    o = n(155718),
    d = n(207963);
function c(e) {
    let { type: t, default: n } = e,
        r = (0, d.jc)();
    i()(null != r, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
    let { state: c, executeStateUpdate: u } = r.useComponentState(e, null != n ? { type: t, value: n } : void 0),
        m = l.useMemo(() => c?.type === t && c.value, [c, t]),
        _ = r.getParents(e)?.[0],
        p = _?.type === o.I5.LABEL ? _ : void 0;
    return (
        i()(null != p, "CheckboxActionComponent must be a child of a Label component"),
        (0, a.jsx)(s.S, {
            label: p.label,
            description: p.description,
            checked: m,
            onChange: (e) => {
                u({ type: t, value: e });
            },
        })
    );
}
