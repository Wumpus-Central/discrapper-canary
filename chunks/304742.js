r.d(t, { Z: () => s });
var n = r(255367),
    l = r(73800),
    o = r(481060),
    i = r(215023),
    a = r(388032);
function s(e) {
    let { handleTransition: t, onClose: r } = e,
        s = l.useMemo(
            () => [
                {
                    label: a.intl.string(a.t.dRZYND),
                    value: i.AW.AVATAR_DECORATIONS
                },
                {
                    label: a.intl.string(a.t['1cNjt7']),
                    value: i.AW.PROFILE_EFFECTS
                },
                {
                    label: a.intl.string(a.t.V68Fq6),
                    value: i.AW.NAMEPLATES
                },
                {
                    label: a.intl.string(a.t.FYFppq),
                    value: i.AW.BUNDLES
                },
                {
                    label: a.intl.string(a.t.xFcotb),
                    value: i.AW.CATALOG
                }
            ],
            []
        );
    return (0, n.jsx)(o.v2r, {
        navId: 'collectibles-index-page-menu',
        onClose: r,
        'aria-label': a.intl.string(a.t.xFcotb),
        onSelect: () => {},
        children: s.map((e) =>
            (0, n.jsx)(
                o.sNh,
                {
                    id: e.value,
                    label: e.label,
                    action: () => {
                        t(e.value);
                    }
                },
                e.value
            )
        )
    });
}
