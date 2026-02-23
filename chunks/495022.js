n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(720462),
    r = n(102815),
    o = n(977446),
    c = n(985018),
    d = n(574268);
function u(e) {
    let { glowingPerkId: t = null } = e,
        n = (0, o.Ay)(),
        u = null != t ? n.find((e) => e?.id === t) : null,
        [_, m] = (0, s.useState)(u?.categories[0] ?? o.jW.BEST_OF_NITRO),
        A = (0, s.useMemo)(() => n.filter((e) => null != e && e.categories.includes(_)), [n, _]);
    return (0, i.jsxs)("div", {
        className: d.uW,
        children: [
            (0, i.jsx)(a.Heading, { variant: "display-sm", className: d.R_, children: c.intl.string(c.t["Uh3+CA"]) }),
            (0, i.jsx)(a.VQ0, {
                type: "top-pill",
                look: "custom",
                selectedItem: _,
                onItemSelect: m,
                className: d.Lq,
                "aria-label": c.intl.string(c.t["Uh3+CA"]),
                children: o.w1.map((e) =>
                    (0, i.jsx)(a.VQ0.Item, { id: e.id, className: d.IC, children: e.label() }, e.id),
                ),
            }),
            (0, i.jsx)(
                l.A,
                {
                    gap: 20,
                    children: A.map((e) => {
                        if (null != e)
                            return (0, i.jsx)(
                                "div",
                                { id: e.id, className: d.Nr, children: (0, i.jsx)(r.S, { ...e, glowing: t === e.id }) },
                                e.id,
                            );
                    }),
                },
                _,
            ),
        ],
    });
}
