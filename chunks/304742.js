n.d(t, { Z: () => s });
var r = n(255367),
    l = n(73800),
    a = n(481060),
    i = n(215023),
    o = n(388032);
function s(e) {
    let { handleTransition: t, onClose: n } = e,
        s = l.useMemo(
            () => [
                {
                    label: o.intl.string(o.t.dRZYND),
                    value: i.AW.AVATAR_DECORATIONS
                },
                {
                    label: o.intl.string(o.t['1cNjt7']),
                    value: i.AW.PROFILE_EFFECTS
                },
                {
                    label: o.intl.string(o.t.V68Fq6),
                    value: i.AW.NAMEPLATES
                },
                {
                    label: o.intl.string(o.t.FYFppq),
                    value: i.AW.BUNDLES
                },
                {
                    label: o.intl.string(o.t.xFcotb),
                    value: i.AW.CATALOG
                }
            ],
            []
        );
    return (0, r.jsx)(a.v2r, {
        navId: 'collectibles-index-page-menu',
        onClose: n,
        'aria-label': o.intl.string(o.t.xFcotb),
        onSelect: () => {},
        children: s.map((e) =>
            (0, r.jsx)(
                a.sNh,
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
