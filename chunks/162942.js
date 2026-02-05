n.d(t, { A: () => h });
var a = n(627968),
    s = n(64700),
    i = n(687173),
    l = n(183555),
    r = n(289173),
    o = n(624160),
    d = n(229231),
    c = n(49999),
    u = n(985018),
    m = n(210400);
function h(e) {
    let { handleOpenUserProfileModal: t, markAsDismissed: n, ...h } = e,
        { trackUserProfileEditAction: x } = (0, l.NJ)(),
        p = s.useMemo(() => d.Zc.filter(r.hL).map((e) => new r.Yy({ type: e, games: [] })), []),
        g = s.useCallback(() => {
            n(c.i.TAKE_ACTION), x({ action: "PRESS_ADD_WIDGET" }), t();
        }, [t, n, x]);
    return (0, a.jsx)(i.A, {
        heading: u.intl.string(u.t["oqalC+"]),
        subheading: u.intl.string(u.t.O9SQ1c),
        markAsDismissed: n,
        ...h,
        children: (0, a.jsx)("ul", {
            "aria-label": u.intl.string(u.t["+EIBSA"]),
            className: m.f,
            children: p.map((e) =>
                (0, a.jsx)(
                    o.A,
                    { widget: e, size: "medium", onAddWidget: g, trackUserProfileEditAction: x },
                    e.getUniqueKey(),
                ),
            ),
        }),
    });
}
