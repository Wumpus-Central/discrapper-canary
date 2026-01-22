l.d(t, { A: () => f });
var n = l(627968),
    r = l(64700),
    s = l(503698),
    a = l.n(s),
    i = l(397927),
    o = l(938191),
    c = l(758836),
    u = l(985018),
    d = l(816917);
function f(e) {
    let { handleTransition: t, onClose: l } = e,
        s = (0, o.y)("CollectiblesIndexPageContextMenu"),
        f = r.useMemo(
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
    return (0, n.jsx)("div", {
        className: a()({ [d.T3]: s }),
        children: (0, n.jsx)(i.W1t, {
            navId: "collectibles-index-page-menu",
            className: a()({ [d.T3]: s }),
            onClose: l,
            "aria-label": u.intl.string(u.t.xFcotU),
            onSelect: () => {},
            children: f.map((e) =>
                (0, n.jsx)(
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
