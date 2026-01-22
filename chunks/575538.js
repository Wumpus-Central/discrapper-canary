i.d(l, { default: () => h });
var n = i(627968);
i(64700);
var e = i(311907),
    a = i(397927),
    r = i(442433),
    c = i(725177),
    o = i(274372),
    s = i(692329),
    u = i(399925),
    d = i(857266),
    p = i(985018);
function h(t) {
    let { onSelect: l } = t,
        { clipsLength: i } = (0, e.cf)([o.A], () => o.A.getSettings()),
        h = (0, s.A)();
    return (0, n.jsxs)(a.W1t, {
        navId: "clips-context",
        "aria-label": p.intl.string(p.t.J1hsY2),
        onClose: r.Z_,
        onSelect: l,
        children: [
            (0, n.jsx)(a.rXV, {
                children: (0, n.jsx)(a.Drp, {
                    id: "clips-duration",
                    label: p.intl.string(p.t.OgfUio),
                    children: h.map((t) => {
                        let { value: l, label: e } = t;
                        return (0, n.jsx)(
                            a.iDA,
                            {
                                id: "clips-duration-".concat(l),
                                group: "clips-duration",
                                label: e,
                                action: () => (0, u.h$)(l),
                                checked: l === i,
                            },
                            l,
                        );
                    }),
                }),
            }),
            (0, n.jsx)(a.rXV, {
                children: (0, n.jsx)(a.Drp, {
                    id: "clips-settings",
                    label: p.intl.string(p.t.J1hsY2),
                    action: () => (0, c.A)(d.J.CLIPS),
                }),
            }),
        ],
    });
}
