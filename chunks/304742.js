n.d(t, { Z: () => g });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    o = n(481060),
    a = n(642909),
    c = n(215023),
    u = n(388032),
    d = n(345213);
function g(e) {
    let { handleTransition: t, onClose: n } = e,
        i = (0, a.G)("CollectiblesIndexPageContextMenu"),
        g = l.useMemo(
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
        className: s()({ [d.shopTakeOver]: i }),
        children: (0, r.jsx)(o.v2r, {
            navId: "collectibles-index-page-menu",
            className: s()({ [d.shopTakeOver]: i }),
            onClose: n,
            "aria-label": u.intl.string(u.t.xFcotb),
            onSelect: () => {},
            children: g.map((e) =>
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
