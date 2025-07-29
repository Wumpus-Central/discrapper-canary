r.d(t, { Z: () => s });
var n = r(255367),
    l = r(73800),
    i = r(481060),
    a = r(215023),
    o = r(388032);
function s(e) {
    let { handleTransition: t, onClose: r } = e,
        s = l.useMemo(
            () => [
                {
                    label: o.intl.string(o.t.dRZYND),
                    value: a.AW.AVATAR_DECORATIONS
                },
                {
                    label: o.intl.string(o.t['1cNjt7']),
                    value: a.AW.PROFILE_EFFECTS
                },
                {
                    label: o.intl.string(o.t.V68Fq6),
                    value: a.AW.NAMEPLATES
                },
                {
                    label: o.intl.string(o.t.FYFppq),
                    value: a.AW.BUNDLES
                },
                {
                    label: o.intl.string(o.t.xFcotb),
                    value: a.AW.CATALOG
                }
            ],
            []
        );
    return (0, n.jsx)(i.v2r, {
        navId: 'collectibles-index-page-menu',
        onClose: r,
        'aria-label': o.intl.string(o.t.xFcotb),
        onSelect: () => {},
        children: s.map((e) =>
            (0, n.jsx)(
                i.sNh,
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
