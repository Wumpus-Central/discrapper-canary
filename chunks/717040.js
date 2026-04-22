t.d(e, { A: () => p });
var a = t(627968),
    n = t(64700),
    r = t(503698),
    l = t.n(r),
    i = t(821609),
    s = t(534514),
    o = t(834730),
    d = t(952270),
    c = t(175841),
    u = t(915089),
    g = t(985018),
    h = t(467585);
function p(A) {
    let { disabled: e = !1, disabledTooltip: t, published: r, submitting: p = !1, onClick: f } = A,
        m = (0, u.GV)(),
        [q, v] = n.useState(r);
    return (
        n.useEffect(() => {
            v((A) => A || r);
        }, [r]),
        (0, a.jsxs)("div", {
            className: l()({ [h.g$]: !e && !r, [h.oZ]: q }, h.nw),
            children: [
                (0, a.jsxs)("div", {
                    className: h.kL,
                    children: [
                        (0, a.jsxs)("div", {
                            className: h.S7,
                            children: [
                                (0, a.jsx)(s.D, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children: r ? g.intl.string(g.t.Vaaagc) : g.intl.string(g.t.oI8aQf),
                                }),
                                (0, a.jsx)(o.E, {
                                    id: m,
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: r ? g.intl.string(g.t["0r6pbG"]) : g.intl.string(g.t["8MMHYG"]),
                                }),
                            ],
                        }),
                        (0, a.jsx)(i.$, {
                            text: r ? g.intl.string(g.t.DlJOvl) : g.intl.string(g.t.X7YGXE),
                            icon: r ? d.G : c.B,
                            iconPosition: "end",
                            variant: r ? "critical-primary" : "expressive",
                            "aria-describedby": m,
                            "aria-disabled": e,
                            disabled: e,
                            onClick: e ? void 0 : f,
                            loading: p,
                        }),
                    ],
                }),
                e && (0, a.jsx)(o.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
            ],
        })
    );
}
