t.d(e, { A: () => c });
var n = t(627968),
    a = t(64700),
    r = t(503698),
    i = t.n(r),
    l = t(732955),
    s = t(397927),
    o = t(915089),
    d = t(985018),
    u = t(467585);
function c(A) {
    let { disabled: e = !1, disabledTooltip: t, published: r, submitting: c = !1, onClick: g } = A,
        q = (0, o.GV)(),
        [p, f] = a.useState(r);
    return (
        a.useEffect(() => {
            f((A) => A || r);
        }, [r]),
        (0, n.jsxs)("div", {
            className: i()({ [u.g$]: !e && !r, [u.oZ]: p }, u.nw),
            children: [
                (0, n.jsxs)("div", {
                    className: u.kL,
                    children: [
                        (0, n.jsxs)("div", {
                            className: u.S7,
                            children: [
                                (0, n.jsx)(s.Heading, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children: r ? d.intl.string(d.t.Vaaagc) : d.intl.string(d.t.oI8aQf),
                                }),
                                (0, n.jsx)(s.Text, {
                                    id: q,
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: r ? d.intl.string(d.t["0r6pbG"]) : d.intl.string(d.t["8MMHYG"]),
                                }),
                            ],
                        }),
                        (0, n.jsx)(l.$nd, {
                            text: r ? d.intl.string(d.t.DlJOvl) : d.intl.string(d.t.X7YGXE),
                            icon: r ? s.G3N : s.BZI,
                            iconPosition: "end",
                            variant: r ? "critical-primary" : "expressive",
                            "aria-describedby": q,
                            "aria-disabled": e,
                            disabled: e,
                            onClick: e ? void 0 : g,
                            loading: c,
                        }),
                    ],
                }),
                e && (0, n.jsx)(s.Text, { variant: "text-sm/normal", color: "text-muted", children: t }),
            ],
        })
    );
}
