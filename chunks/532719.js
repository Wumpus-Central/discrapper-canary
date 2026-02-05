n.d(t, { A: () => c });
var l = n(627968),
    a = n(64700),
    r = n(284009),
    s = n.n(r),
    i = n(397927),
    o = n(155718),
    d = n(207963);
function c(e) {
    let { type: t, default: n } = e,
        r = (0, d.jc)();
    s()(null != r, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
    let { state: c, executeStateUpdate: u } = r.useComponentState(e, null != n ? { type: t, value: n } : void 0),
        m = a.useMemo(() => c?.type === t && c.value, [c, t]),
        p = r.getParents(e)?.[0],
        A = p?.type === o.I5.LABEL ? p : void 0;
    return (
        s()(null != A, "CheckboxActionComponent must be a child of a Label component"),
        (0, l.jsx)(i.Checkbox, {
            label: A.label,
            description: A.description,
            checked: m,
            onChange: (e) => {
                u({ type: t, value: e });
            },
        })
    );
}
