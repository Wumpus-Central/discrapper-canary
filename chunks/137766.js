t.d(e, { A: () => C });
var a = t(627968),
    n = t(64700),
    r = t(284009),
    l = t.n(r),
    i = t(317097),
    s = t(292666),
    o = t(140735),
    d = t(265872),
    c = t(508274),
    u = t(408278),
    g = t(714385),
    h = t(915089),
    p = t(411342),
    f = t(652215),
    m = t(985018),
    q = t(22305);
let v = (0, h.Ld)();
function C(A) {
    let { newRoleParams: e, setNewRoleParams: t } = A,
        r = n.useRef(null),
        { name: h, color: C } = e,
        x = (A) => t((e) => (l()(null != e, "newRoleParams should be defined"), { ...e, color: A }));
    return (0, a.jsxs)("div", {
        className: q.CJ,
        children: [
            (0, a.jsx)(s.k, {
                autoFocus: !0,
                value: h,
                onChange: (A) => t((e) => (l()(null != e, "newRoleParams should be defined"), { ...e, name: A })),
                id: v,
                placeholder: m.intl.string(m.t.oNauug),
                maxLength: f.fHV,
            }),
            (0, a.jsxs)("div", {
                className: q.P4,
                children: [
                    (0, a.jsx)(o.A, { children: m.intl.format(m.t["Vlq/pH"], { color: (0, i.Hl)(C) }) }),
                    (0, a.jsx)(d.Y, {
                        targetElementRef: r,
                        renderPopout: (A) => (0, a.jsx)(c.VN, { ...A, value: C, onChange: x }),
                        children: (A) =>
                            (0, a.jsx)(u.K, {
                                ...A,
                                variant: "secondary",
                                icon: g.d,
                                buttonRef: r,
                                "aria-label": m.intl.string(m.t.QLgdlS),
                            }),
                    }),
                ],
            }),
            (0, a.jsx)(p.A, { role: e }),
        ],
    });
}
