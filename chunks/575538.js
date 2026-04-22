l.d(i, { default: () => h });
var n = l(627968);
l(64700);
var e = l(311907),
    a = l(861672),
    r = l(477782),
    s = l(442433),
    o = l(780964),
    c = l(858897),
    u = l(274372),
    d = l(692329),
    p = l(399925),
    g = l(985018);
function h(t) {
    let { onSelect: i } = t,
        { clipsLength: l } = (0, e.cf)([u.A], () => u.A.getSettings()),
        h = (0, d.A)();
    return (0, n.jsxs)(a.W, {
        "data-menu-migrated": !0,
        navId: "clips-context",
        "aria-label": g.intl.string(g.t.J1hsY2),
        onClose: s.Z_,
        onSelect: i,
        children: [
            (0, n.jsx)(r.rX, {
                children: (0, n.jsx)(r.Dr, {
                    id: "clips-duration",
                    label: g.intl.string(g.t.OgfUio),
                    children: h.map((t) => {
                        let { value: i, label: e } = t;
                        return (0, n.jsx)(
                            r.iD,
                            {
                                id: `clips-duration-${i}`,
                                group: "clips-duration",
                                label: e,
                                action: () => (0, p.h$)(i),
                                checked: i === l,
                            },
                            i,
                        );
                    }),
                }),
            }),
            (0, n.jsx)(r.rX, {
                children: (0, n.jsx)(r.Dr, {
                    id: "clips-settings",
                    label: g.intl.string(g.t.J1hsY2),
                    action: () => (0, c.openUserSettings)(o.X.CLIPS_PANEL),
                }),
            }),
        ],
    });
}
