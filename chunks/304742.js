r.d(t, { Z: () => s });
var n = r(255367),
    l = r(73800),
    a = r(481060),
    i = r(215023),
    o = r(388032);
function s(e) {
    let { handleTransition: t, onClose: r } = e,
        s = l.useMemo(
            () => [
                {
                    label: o.intl.string(o.t.dRZYND),
                    value: i.AW.AVATAR_DECORATIONS,
                },
                {
                    label: o.intl.string(o.t["1cNjt7"]),
                    value: i.AW.PROFILE_EFFECTS,
                },
                {
                    label: o.intl.string(o.t.V68Fq6),
                    value: i.AW.NAMEPLATES,
                },
                {
                    label: o.intl.string(o.t.FYFppq),
                    value: i.AW.BUNDLES,
                },
                {
                    label: o.intl.string(o.t.xFcotb),
                    value: i.AW.CATALOG,
                },
            ],
            [],
        );
    return (0, n.jsx)(a.v2r, {
        navId: "collectibles-index-page-menu",
        onClose: r,
        "aria-label": o.intl.string(o.t.xFcotb),
        onSelect: () => {},
        children: s.map((e) =>
            (0, n.jsx)(
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
    });
}
