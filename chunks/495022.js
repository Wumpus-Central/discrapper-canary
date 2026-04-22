n.d(t, { A: () => _ });
var r = n(627968),
    a = n(64700),
    i = n(534514),
    s = n(761508),
    l = n(951707),
    c = n(744064),
    o = n(674624),
    d = n(985018),
    u = n(758495);
function _(e) {
    let { glowingPerkId: t = null } = e,
        n = (0, o.Ay)(),
        _ = null != t ? n.find((e) => e?.id === t) : null,
        [m, p] = (0, a.useState)(_?.categories[0] ?? o.jW.BEST_OF_NITRO),
        f = (0, a.useMemo)(() => n.filter((e) => null != e && e.categories.includes(m)), [n, m]);
    return (0, r.jsxs)("div", {
        className: u.uW,
        children: [
            (0, r.jsx)(i.D, { variant: "display-sm", className: u.R_, children: d.intl.string(d.t["Uh3+CA"]) }),
            (0, r.jsx)(s.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: m,
                onItemSelect: p,
                className: u.Lq,
                "aria-label": d.intl.string(d.t["Uh3+CA"]),
                children: o.w1.map((e) =>
                    (0, r.jsx)(s.V.Item, { id: e.id, className: u.IC, children: e.label() }, e.id),
                ),
            }),
            (0, r.jsx)(
                l.A,
                {
                    gap: 20,
                    className: u.jG,
                    children: f.map((e) => {
                        if (null != e)
                            return (0, r.jsx)(c.S, { ...e, glowing: t === e.id, containerClassName: u.Ui }, e.id);
                    }),
                },
                m,
            ),
        ],
    });
}
