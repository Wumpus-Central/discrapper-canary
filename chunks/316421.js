n.d(a, { default: () => p });
var i = n(627968),
    t = n(64700),
    l = n(861672),
    c = n(477782),
    d = n(22231),
    o = n(241326),
    r = n(442433),
    s = n(888697),
    u = n(722884),
    g = n(746216),
    h = n(985018);
function p(e) {
    let { channel: a, onSelect: n } = e,
        p = t.useCallback(() => {
            (0, u.A)({ channel: a });
        }, [a]),
        w = t.useCallback(() => {
            (0, s.e2)(a.id);
        }, [a.id]);
    return (0, i.jsx)(l.W, {
        "data-menu-migrated": !0,
        navId: "hangout-window-context",
        onClose: r.Z_,
        "aria-label": h.intl.string(g.default["7rawC9"]),
        onSelect: n,
        children: (0, i.jsxs)(c.rX, {
            children: [
                (0, i.jsx)(c.Dr, {
                    id: "hangout-window-change-image",
                    label: h.intl.string(g.default.XJ4UpB),
                    leadingAccessory: { type: "icon", icon: d.R },
                    action: p,
                }),
                (0, i.jsx)(c.Dr, {
                    id: "hangout-window-remove-image",
                    color: "danger",
                    label: h.intl.string(g.default.XV4qT6),
                    leadingAccessory: { type: "icon", icon: o.u },
                    action: w,
                }),
            ],
        }),
    });
}
