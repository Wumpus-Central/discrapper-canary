e.d(i, { default: () => v });
var n = e(477900),
    s = e(582128),
    r = e(731738),
    a = e(17928),
    l = e(189213),
    c = e(858899),
    d = e(331322),
    u = e(834730),
    o = e(548118),
    m = e(807393),
    x = e(253932),
    D = e(71393),
    h = e(115063),
    S = e(510264),
    p = e(386936),
    A = e(105292),
    f = e(368549);
function v(t) {
    let { transitionState: i, guildId: e, onClose: v } = t,
        g = (0, a.bG)([D.A], () => D.A.getGuild(e));
    if (
        (s.useEffect(() => {
            ((0, S.Q)(e), (0, p.$)(p.s.MODAL_VIEWED, e), m.A.increment({ name: r.K.DM_SETTINGS_UPSELL_VIEW }));
        }, [e]),
        null == g)
    )
        return null;
    function E(t) {
        t.preventDefault();
        let i = (0, h.Tb)();
        (i.add(e),
            x.$s
                .updateSetting(Array.from(i))
                .then(() => (0, c.P0)({ text: A.intl.string(A.t.rlYD1W), variant: "success" })),
            v(),
            (0, p.$)(p.s.MODAL_DISABLED_DMS, e));
    }
    return (0, n.jsx)("form", {
        onSubmit: E,
        children: (0, n.jsx)(l.a, {
            transitionState: i,
            onClose: v,
            title: A.intl.string(A.t.w2BvnL),
            subtitle: A.intl.format(A.t.Depjkv, { guild_name: g.name }),
            actions: [
                {
                    text: A.intl.string(A.t.PsWbcp),
                    onClick: function () {
                        (v(), (0, p.$)(p.s.MODAL_DISMISSED, e));
                    },
                    variant: "secondary",
                },
                { text: A.intl.string(A.t.TD7iUx), onClick: E },
            ],
            children: (0, n.jsxs)(d.B, {
                direction: "vertical",
                gap: 8,
                children: [
                    (0, n.jsx)(u.E, {
                        variant: "text-md/medium",
                        color: "text-muted",
                        children: A.intl.string(A.t.KPB2iw),
                    }),
                    (0, n.jsx)("div", {
                        className: f.bo,
                        children: (0, n.jsxs)("div", {
                            className: f.OA,
                            children: [
                                (0, n.jsx)(o.Ay, { guild: g, size: o.Ay.Sizes.SMALL }),
                                (0, n.jsx)(u.E, { className: f.J5, variant: "text-md/semibold", children: g.name }),
                            ],
                        }),
                    }),
                ],
            }),
        }),
    });
}
