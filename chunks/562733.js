l.d(i, { default: () => S });
var n = l(627968),
    e = l(64700),
    a = l(17928),
    r = l(550079),
    s = l(477782),
    o = l(442433),
    c = l(780964),
    d = l(858897),
    u = l(274372),
    p = l(773669),
    g = l(696016),
    h = l(985018),
    b = l(399925);
function S(t) {
    let i,
        { onSelect: l } = t,
        { clipsLength: S } = (0, a.cf)([u.A], () => u.A.getSettings()),
        f =
            ((i = (0, a.bG)([p.default], () => p.default.locale)),
            e.useMemo(
                () => [
                    { value: g.LX.SECONDS_30, label: h.intl.formatToPlainString(h.t["bTFv/3"], { count: 30 }) },
                    { value: g.LX.MINUTES_1, label: h.intl.formatToPlainString(h.t.ICo9Nk, { count: 1 }) },
                    { value: g.LX.MINUTES_2, label: h.intl.formatToPlainString(h.t.ICo9Nk, { count: 2 }) },
                ],
                [i],
            ));
    return (0, n.jsxs)(r.W, {
        "data-menu-migrated": !0,
        navId: "clips-context",
        "aria-label": h.intl.string(h.t.J1hsY2),
        onClose: o.Z_,
        onSelect: l,
        children: [
            (0, n.jsx)(s.rX, {
                children: (0, n.jsx)(s.Dr, {
                    id: "clips-duration",
                    label: h.intl.string(h.t.OgfUio),
                    children: f.map((t) => {
                        let { value: i, label: l } = t;
                        return (0, n.jsx)(
                            s.iD,
                            {
                                id: `clips-duration-${i}`,
                                group: "clips-duration",
                                label: l,
                                action: () => (0, b.h$)(i),
                                checked: i === S,
                            },
                            i,
                        );
                    }),
                }),
            }),
            (0, n.jsx)(s.rX, {
                children: (0, n.jsx)(s.Dr, {
                    id: "clips-settings",
                    label: h.intl.string(h.t.J1hsY2),
                    action: () => (0, d.openUserSettings)(c.X.CLIPS_PANEL),
                }),
            }),
        ],
    });
}
