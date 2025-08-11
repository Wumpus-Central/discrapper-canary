r.d(t, { Z: () => p });
var n = r(255367),
    l = r(73800),
    a = r(120356),
    i = r.n(a),
    o = r(481060),
    s = r(675997),
    c = r(215023),
    u = r(388032),
    d = r(306414);
function p(e) {
    let { handleTransition: t, onClose: r } = e,
        { enableShopTakeOver: a } = s.Z.useConfig({ location: "CollectiblesIndexPageContextMenu" }),
        p = l.useMemo(
            () => [
                {
                    label: u.intl.string(u.t.dRZYND),
                    value: c.AW.AVATAR_DECORATIONS,
                },
                {
                    label: u.intl.string(u.t["1cNjt7"]),
                    value: c.AW.PROFILE_EFFECTS,
                },
                {
                    label: u.intl.string(u.t.V68Fq6),
                    value: c.AW.NAMEPLATES,
                },
                {
                    label: u.intl.string(u.t.FYFppq),
                    value: c.AW.BUNDLES,
                },
                {
                    label: u.intl.string(u.t.xFcotb),
                    value: c.AW.CATALOG,
                },
            ],
            [],
        );
    return (0, n.jsx)("div", {
        className: i()({ [d.shopTakeOver]: a }),
        children: (0, n.jsx)(o.v2r, {
            navId: "collectibles-index-page-menu",
            className: i()({ [d.shopTakeOver]: a }),
            onClose: r,
            "aria-label": u.intl.string(u.t.xFcotb),
            onSelect: () => {},
            children: p.map((e) =>
                (0, n.jsx)(
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
