t.d(e, { A: () => p });
var n = t(627968),
    a = t(64700),
    r = t(284009),
    i = t.n(r),
    l = t(317097),
    s = t(397927),
    o = t(915089),
    d = t(411342),
    u = t(652215),
    c = t(985018),
    g = t(22305);
let q = (0, o.Ld)();
function p(A) {
    let { newRoleParams: e, setNewRoleParams: t } = A,
        r = a.useRef(null),
        { name: o, color: p } = e,
        f = (A) => t((e) => (i()(null != e, "newRoleParams should be defined"), { ...e, color: A }));
    return (0, n.jsxs)("div", {
        className: g.CJ,
        children: [
            (0, n.jsx)(s.ksK, {
                autoFocus: !0,
                value: o,
                onChange: (A) => t((e) => (i()(null != e, "newRoleParams should be defined"), { ...e, name: A })),
                id: q,
                placeholder: c.intl.string(c.t.oNauug),
                maxLength: u.fHV,
            }),
            (0, n.jsxs)("div", {
                className: g.P4,
                children: [
                    (0, n.jsx)(s.AC4, { children: c.intl.format(c.t["Vlq/pH"], { color: (0, l.Hl)(p) }) }),
                    (0, n.jsx)(s.YNO, {
                        targetElementRef: r,
                        renderPopout: (A) => (0, n.jsx)(s.VNw, { ...A, value: p, onChange: f }),
                        children: (A) =>
                            (0, n.jsx)(s.K0, {
                                ...A,
                                variant: "secondary",
                                icon: s.dDg,
                                buttonRef: r,
                                "aria-label": c.intl.string(c.t.QLgdlS),
                            }),
                    }),
                ],
            }),
            (0, n.jsx)(d.A, { role: e }),
        ],
    });
}
