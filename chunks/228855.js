n.d(i, { default: () => v });
var e = n(627968),
    s = n(64700),
    l = n(731738),
    r = n(189213),
    a = n(17928),
    d = n(691540),
    c = n(857250),
    o = n(97483),
    u = n(331322),
    m = n(834730),
    S = n(548118),
    x = n(807393),
    D = n(885386),
    h = n(71393),
    p = n(115063),
    A = n(510264),
    f = n(386936),
    E = n(375708),
    g = n(759656);
function v(t) {
    let { transitionState: i, guildId: n, onClose: v } = t,
        _ = (0, a.bG)([h.A], () => h.A.getGuild(n));
    if (
        (s.useEffect(() => {
            (0, A.Q)(n), (0, f.$)(f.s.MODAL_VIEWED, n), x.A.increment({ name: l.K.DM_SETTINGS_UPSELL_VIEW });
        }, [n]),
        null == _)
    )
        return null;
    function b(t) {
        t.preventDefault();
        let i = (0, p.Tb)();
        i.add(n),
            D.$s.updateSetting(Array.from(i)).then(() => (0, d.P0)((0, c.o)(E.intl.string(E.t.rlYD1W), o.Ck.SUCCESS))),
            v(),
            (0, f.$)(f.s.MODAL_DISABLED_DMS, n);
    }
    return (0, e.jsx)("form", {
        onSubmit: b,
        children: (0, e.jsx)(r.Modal, {
            transitionState: i,
            onClose: v,
            title: E.intl.string(E.t.w2BvnL),
            subtitle: E.intl.format(E.t.Depjkv, { guild_name: _.name }),
            actions: [
                {
                    text: E.intl.string(E.t.PsWbcp),
                    onClick: function () {
                        v(), (0, f.$)(f.s.MODAL_DISMISSED, n);
                    },
                    variant: "secondary",
                },
                { text: E.intl.string(E.t.TD7iUx), onClick: b },
            ],
            children: (0, e.jsxs)(u.B, {
                direction: "vertical",
                gap: 8,
                children: [
                    (0, e.jsx)(m.E, {
                        variant: "text-md/medium",
                        color: "text-muted",
                        children: E.intl.string(E.t.KPB2iw),
                    }),
                    (0, e.jsx)("div", {
                        className: g.bo,
                        children: (0, e.jsxs)("div", {
                            className: g.OA,
                            children: [
                                (0, e.jsx)(S.Ay, { guild: _, size: S.Ay.Sizes.SMALL }),
                                (0, e.jsx)(m.E, { className: g.J5, variant: "text-md/semibold", children: _.name }),
                            ],
                        }),
                    }),
                ],
            }),
        }),
    });
}
