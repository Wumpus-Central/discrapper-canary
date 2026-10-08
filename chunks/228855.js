n.d(i, { default: () => E });
var e = n(477900),
    s = n(582128),
    l = n(731738),
    r = n(17928),
    a = n(189213),
    c = n(376357),
    d = n(331322),
    o = n(834730),
    u = n(548118),
    m = n(807393),
    S = n(885386),
    x = n(71393),
    D = n(115063),
    h = n(510264),
    p = n(386936),
    A = n(660183),
    f = n(368549);
function E(t) {
    let { transitionState: i, guildId: n, onClose: E } = t,
        g = (0, r.bG)([x.A], () => x.A.getGuild(n));
    if (
        (s.useEffect(() => {
            ((0, h.Q)(n), (0, p.$)(p.s.MODAL_VIEWED, n), m.A.increment({ name: l.K.DM_SETTINGS_UPSELL_VIEW }));
        }, [n]),
        null == g)
    )
        return null;
    function v(t) {
        t.preventDefault();
        let i = (0, D.Tb)();
        (i.add(n),
            S.$s.updateSetting(Array.from(i)).then(() => (0, c.P0)((0, c.ox)(A.intl.string(A.t.rlYD1W), c.Ck.SUCCESS))),
            E(),
            (0, p.$)(p.s.MODAL_DISABLED_DMS, n));
    }
    return (0, e.jsx)("form", {
        onSubmit: v,
        children: (0, e.jsx)(a.a, {
            transitionState: i,
            onClose: E,
            title: A.intl.string(A.t.w2BvnL),
            subtitle: A.intl.format(A.t.Depjkv, { guild_name: g.name }),
            actions: [
                {
                    text: A.intl.string(A.t.PsWbcp),
                    onClick: function () {
                        (E(), (0, p.$)(p.s.MODAL_DISMISSED, n));
                    },
                    variant: "secondary",
                },
                { text: A.intl.string(A.t.TD7iUx), onClick: v },
            ],
            children: (0, e.jsxs)(d.B, {
                direction: "vertical",
                gap: 8,
                children: [
                    (0, e.jsx)(o.E, {
                        variant: "text-md/medium",
                        color: "text-muted",
                        children: A.intl.string(A.t.KPB2iw),
                    }),
                    (0, e.jsx)("div", {
                        className: f.bo,
                        children: (0, e.jsxs)("div", {
                            className: f.OA,
                            children: [
                                (0, e.jsx)(u.Ay, { guild: g, size: u.Ay.Sizes.SMALL }),
                                (0, e.jsx)(o.E, { className: f.J5, variant: "text-md/semibold", children: g.name }),
                            ],
                        }),
                    }),
                ],
            }),
        }),
    });
}
