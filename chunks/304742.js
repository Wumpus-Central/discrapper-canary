n.d(t, { Z: () => s });
var r = n(255367),
    l = n(73800),
    o = n(481060),
    a = n(215023),
    i = n(388032);
function s(e) {
    let { handleTransition: t, onClose: n } = e,
        s = l.useMemo(
            () => [
                {
                    label: i.intl.string(i.t.dRZYND),
                    value: a.AW.AVATAR_DECORATIONS
                },
                {
                    label: i.intl.string(i.t['1cNjt7']),
                    value: a.AW.PROFILE_EFFECTS
                },
                {
                    label: i.intl.string(i.t.V68Fq6),
                    value: a.AW.NAMEPLATES
                },
                {
                    label: i.intl.string(i.t.FYFppq),
                    value: a.AW.BUNDLES
                },
                {
                    label: i.intl.string(i.t.xFcotb),
                    value: a.AW.CATALOG
                }
            ],
            []
        );
    return (0, r.jsx)(o.v2r, {
        navId: 'collectibles-index-page-menu',
        onClose: n,
        'aria-label': i.intl.string(i.t.xFcotb),
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
