t.d(A, {
    A: () => u,
}),
    t(896048);
var r = t(627968),
    n = t(64700),
    l = t(503698),
    a = t.n(l),
    i = t(732955),
    s = t(397927),
    o = t(915089),
    d = t(985018),
    c = t(706494);

function u(e) {
    let { disabled: A = !1, disabledTooltip: t, published: l, submitting: u = !1, onClick: g } = e,
        f = (0, o.GV)(),
        [p, m] = n.useState(l);
    return (
        n.useEffect(() => {
            m((e) => e || l);
        }, [l]),
        (0, r.jsxs)("div", {
            className: a()(
                {
                    [c.g$]: !A && !l,
                    [c.oZ]: p,
                },
                c.nw,
            ),
            children: [
                (0, r.jsxs)("div", {
                    className: c.kL,
                    children: [
                        (0, r.jsxs)("div", {
                            className: c.S7,
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children: l ? d.intl.string(d.t.Vaaagc) : d.intl.string(d.t.oI8aQf),
                                }),
                                (0, r.jsx)(s.Text, {
                                    id: f,
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: l ? d.intl.string(d.t["0r6pbG"]) : d.intl.string(d.t["8MMHYG"]),
                                }),
                            ],
                        }),
                        (0, r.jsx)(i.$nd, {
                            text: l ? d.intl.string(d.t.DlJOvl) : d.intl.string(d.t.X7YGXE),
                            icon: l ? s.G3N : s.BZI,
                            iconPosition: "end",
                            variant: l ? "critical-primary" : "expressive",
                            "aria-describedby": f,
                            "aria-disabled": A,
                            disabled: A,
                            onClick: A ? void 0 : g,
                            loading: u,
                        }),
                    ],
                }),
                A &&
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: t,
                    }),
            ],
        })
    );
}
