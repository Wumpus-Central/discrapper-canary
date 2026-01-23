n.d(t, {
    A: () => g,
});
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(397927),
    o = n(938191),
    c = n(758836),
    u = n(985018),
    d = n(816917);

function g(e) {
    let { handleTransition: t, onClose: n } = e,
        s = (0, o.y)("CollectiblesIndexPageContextMenu"),
        g = l.useMemo(
            () => [
                {
                    label: u.intl.string(u.t.dRZYNE),
                    value: c.G2.AVATAR_DECORATIONS,
                },
                {
                    label: u.intl.string(u.t["1cNjtx"]),
                    value: c.G2.PROFILE_EFFECTS,
                },
                {
                    label: u.intl.string(u.t.V68Fqz),
                    value: c.G2.NAMEPLATES,
                },
                {
                    label: u.intl.string(u.t.FYFpps),
                    value: c.G2.BUNDLES,
                },
                {
                    label: u.intl.string(u.t.xFcotU),
                    value: c.G2.CATALOG,
                },
            ],
            [],
        );
    return (0, r.jsx)("div", {
        className: a()({
            [d.T3]: s,
        }),
        children: (0, r.jsx)(i.W1t, {
            "data-menu-migration-ready": !0,
            navId: "collectibles-index-page-menu",
            className: a()({
                [d.T3]: s,
            }),
            onClose: n,
            "aria-label": u.intl.string(u.t.xFcotU),
            onSelect: () => {},
            children: g.map((e) =>
                (0, r.jsx)(
                    i.Drp,
                    {
                        id: e.value,
                        label: e.label,
                        action: () => {
                            t(e.value);
                        },
                    },
                    e.value,
                ),
            ),
        }),
    });
}
