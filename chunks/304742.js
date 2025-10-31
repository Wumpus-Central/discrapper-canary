n.d(t, { Z: () => p });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(481060),
    o = n(811847),
    c = n(215023),
    u = n(388032),
    d = n(219588);
function p(e) {
    let { handleTransition: t, onClose: n } = e,
        i = (0, o.B)("CollectiblesIndexPageContextMenu"),
        p = l.useMemo(
            () => [
                {
                    label: u.intl.string(u.t.dRZYNE),
                    value: c.AW.AVATAR_DECORATIONS,
                },
                {
                    label: u.intl.string(u.t["1cNjtx"]),
                    value: c.AW.PROFILE_EFFECTS,
                },
                {
                    label: u.intl.string(u.t.V68Fqz),
                    value: c.AW.NAMEPLATES,
                },
                {
                    label: u.intl.string(u.t.FYFpps),
                    value: c.AW.BUNDLES,
                },
                {
                    label: u.intl.string(u.t.xFcotU),
                    value: c.AW.CATALOG,
                },
            ],
            [],
        );
    return (0, r.jsx)("div", {
        className: s()({ [d.customCursors]: i }),
        children: (0, r.jsx)(a.v2r, {
            navId: "collectibles-index-page-menu",
            className: s()({ [d.customCursors]: i }),
            onClose: n,
            "aria-label": u.intl.string(u.t.xFcotU),
            onSelect: () => {},
            children: p.map((e) =>
                (0, r.jsx)(
                    a.sNh,
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
