l.d(i, { default: () => g });
var n = l(627968);
l(64700);
var e = l(311907),
    a = l(397927),
    r = l(442433),
    s = l(780964),
    o = l(840065),
    c = l(274372),
    u = l(692329),
    d = l(399925),
    p = l(985018);
function g(t) {
    let { onSelect: i } = t,
        { clipsLength: l } = (0, e.cf)([c.A], () => c.A.getSettings()),
        g = (0, u.A)();
    return (0, n.jsxs)(a.W1t, {
        "data-menu-migrated": !0,
        navId: "clips-context",
        "aria-label": p.intl.string(p.t.J1hsY2),
        onClose: r.Z_,
        onSelect: i,
        children: [
            (0, n.jsx)(a.rXV, {
                children: (0, n.jsx)(a.Drp, {
                    id: "clips-duration",
                    label: p.intl.string(p.t.OgfUio),
                    children: g.map((t) => {
                        let { value: i, label: e } = t;
                        return (0, n.jsx)(
                            a.iDA,
                            {
                                id: `clips-duration-${i}`,
                                group: "clips-duration",
                                label: e,
                                action: () => (0, d.h$)(i),
                                checked: i === l,
                            },
                            i,
                        );
                    }),
                }),
            }),
            (0, n.jsx)(a.rXV, {
                children: (0, n.jsx)(a.Drp, {
                    id: "clips-settings",
                    label: p.intl.string(p.t.J1hsY2),
                    action: () => (0, o.openUserSettings)(s.X.CLIPS_PANEL),
                }),
            }),
        ],
    });
}
