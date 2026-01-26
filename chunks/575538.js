n.d(i, {
    default: () => g,
});
var l = n(627968);
n(64700);
var e = n(311907),
    a = n(397927),
    r = n(442433),
    s = n(780964),
    o = n(840065),
    c = n(274372),
    u = n(692329),
    d = n(399925),
    p = n(985018);

function g(t) {
    let { onSelect: i } = t,
        { clipsLength: n } = (0, e.cf)([c.A], () => c.A.getSettings()),
        g = (0, u.A)();
    return (0, l.jsxs)(a.W1t, {
        "data-menu-migrated": !0,
        navId: "clips-context",
        "aria-label": p.intl.string(p.t.J1hsY2),
        onClose: r.Z_,
        onSelect: i,
        children: [
            (0, l.jsx)(a.rXV, {
                children: (0, l.jsx)(a.Drp, {
                    id: "clips-duration",
                    label: p.intl.string(p.t.OgfUio),
                    children: g.map((t) => {
                        let { value: i, label: e } = t;
                        return (0, l.jsx)(
                            a.iDA,
                            {
                                id: "clips-duration-".concat(i),
                                group: "clips-duration",
                                label: e,
                                action: () => (0, d.h$)(i),
                                checked: i === n,
                            },
                            i,
                        );
                    }),
                }),
            }),
            (0, l.jsx)(a.rXV, {
                children: (0, l.jsx)(a.Drp, {
                    id: "clips-settings",
                    label: p.intl.string(p.t.J1hsY2),
                    action: () => (0, o.openUserSettings)(s.X.CLIPS_PANEL),
                }),
            }),
        ],
    });
}
