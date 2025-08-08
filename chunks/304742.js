n.d(t, { Z: () => p });
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(481060),
    s = n(675997),
    c = n(215023),
    u = n(388032),
    d = n(306414);
function p(e) {
    let { handleTransition: t, onClose: n } = e,
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
    return (0, r.jsx)("div", {
        className: i()({ [d.shopTakeOver]: a }),
        children: (0, r.jsx)(o.v2r, {
            navId: "collectibles-index-page-menu",
            className: i()({ [d.shopTakeOver]: a }),
            onClose: n,
            "aria-label": u.intl.string(u.t.xFcotb),
            onSelect: () => {},
            children: p.map((e) =>
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
