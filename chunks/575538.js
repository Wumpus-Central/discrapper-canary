l.d(i, {
    default: () => h,
});
var n = l(627968);
l(64700);
var a = l(311907),
    e = l(397927),
    r = l(442433),
    o = l(725177),
    c = l(274372),
    s = l(692329),
    u = l(399925),
    d = l(857266),
    p = l(985018);

function h(t) {
    let { onSelect: i } = t,
        { clipsLength: l } = (0, a.cf)([c.A], () => c.A.getSettings()),
        h = (0, s.A)();
    return (0, n.jsxs)(e.W1t, {
        "data-menu-migration-ready": !0,
        navId: "clips-context",
        "aria-label": p.intl.string(p.t.J1hsY2),
        onClose: r.Z_,
        onSelect: i,
        children: [
            (0, n.jsx)(e.rXV, {
                children: (0, n.jsx)(e.Drp, {
                    id: "clips-duration",
                    label: p.intl.string(p.t.OgfUio),
                    children: h.map((t) => {
                        let { value: i, label: a } = t;
                        return (0, n.jsx)(
                            e.iDA,
                            {
                                id: "clips-duration-".concat(i),
                                group: "clips-duration",
                                label: a,
                                action: () => (0, u.h$)(i),
                                checked: i === l,
                            },
                            i,
                        );
                    }),
                }),
            }),
            (0, n.jsx)(e.rXV, {
                children: (0, n.jsx)(e.Drp, {
                    id: "clips-settings",
                    label: p.intl.string(p.t.J1hsY2),
                    action: () => (0, o.A)(d.J.CLIPS),
                }),
            }),
        ],
    });
}
