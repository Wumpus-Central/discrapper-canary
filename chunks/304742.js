n.d(t, { Z: () => f });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(811847),
    c = n(215023),
    u = n(388032),
    d = n(219588);
function f(e) {
    let { handleTransition: t, onClose: n } = e,
        i = (0, s.B)("CollectiblesIndexPageContextMenu"),
        f = l.useMemo(
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
        className: a()({ [d.customCursors]: i }),
        children: (0, r.jsx)(o.v2r, {
            navId: "collectibles-index-page-menu",
            className: a()({ [d.customCursors]: i }),
            onClose: n,
            "aria-label": u.intl.string(u.t.xFcotU),
            onSelect: () => {},
            children: f.map((e) =>
                (0, r.jsx)(
                    o.sNh,
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
