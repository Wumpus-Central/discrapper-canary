n.d(t, { Z: () => s });
var r = n(255367),
    l = n(73800),
    o = n(481060),
    i = n(215023),
    a = n(388032);
function s(e) {
    let { handleTransition: t, onClose: n } = e,
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
    return (0, r.jsx)(o.v2r, {
        navId: 'collectibles-index-page-menu',
        onClose: n,
        'aria-label': a.intl.string(a.t.xFcotb),
        onSelect: () => {},
        children: s.map((e) =>
            (0, r.jsx)(
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
