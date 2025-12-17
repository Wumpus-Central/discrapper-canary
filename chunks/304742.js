n.d(t, { Z: () => f });
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    i = n(811847),
    c = n(215023),
    u = n(388032),
    d = n(868090);
function f(e) {
    let { handleTransition: t, onClose: n } = e,
        a = (0, i.B)("CollectiblesIndexPageContextMenu"),
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
        className: s()({ [d.customCursors]: a }),
        children: (0, r.jsx)(o.v2r, {
            navId: "collectibles-index-page-menu",
            className: s()({ [d.customCursors]: a }),
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
