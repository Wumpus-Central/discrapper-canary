n.d(t, { Z: () => s });
var r = n(255367),
    l = n(73800),
    i = n(481060),
    a = n(215023),
    o = n(388032);
function s(e) {
    let { handleTransition: t, onClose: n } = e,
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
    return (0, r.jsx)(i.v2r, {
        navId: 'collectibles-index-page-menu',
        onClose: n,
        'aria-label': o.intl.string(o.t.xFcotb),
        onSelect: () => {},
        children: s.map((e) =>
            (0, r.jsx)(
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
