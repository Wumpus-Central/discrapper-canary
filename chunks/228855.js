i.d(t, { default: () => D });
var n = i(627968),
    s = i(64700),
    a = i(731738),
    r = i(189213),
    l = i(311907),
    d = i(691540),
    u = i(857250),
    c = i(97483),
    o = i(331322),
    S = i(834730),
    h = i(263063),
    _ = i(831062),
    A = i(253932),
    E = i(71393),
    g = i(115063),
    m = i(360966),
    f = i(386936),
    T = i(985018),
    I = i(759656);
function D(e) {
    let { transitionState: t, guildId: i, onClose: D } = e,
        p = (0, l.bG)([E.A], () => E.A.getGuild(i));
    if (
        (s.useEffect(() => {
            (0, m.Q)(i), (0, f.$)(f.s.MODAL_VIEWED, i), _.A.increment({ name: a.K.DM_SETTINGS_UPSELL_VIEW });
        }, [i]),
        null == p)
    )
        return null;
    let G = (e) => {
        e.preventDefault();
        let t = (0, g.Tb)();
        t.add(i),
            A.$s.updateSetting(Array.from(t)).then(() => (0, d.P0)((0, u.o)(T.intl.string(T.t.rlYD1W), c.Ck.SUCCESS))),
            D(),
            (0, f.$)(f.s.MODAL_DISABLED_DMS, i);
    };
    return (0, n.jsx)("form", {
        onSubmit: G,
        children: (0, n.jsx)(r.Modal, {
            transitionState: t,
            onClose: D,
            title: T.intl.string(T.t.w2BvnL),
            subtitle: T.intl.format(T.t.Depjkv, { guild_name: p.name }),
            actions: [
                {
                    text: T.intl.string(T.t.PsWbcp),
                    onClick: () => {
                        D(), (0, f.$)(f.s.MODAL_DISMISSED, i);
                    },
                    variant: "secondary",
                },
                { text: T.intl.string(T.t.TD7iUx), onClick: G },
            ],
            children: (0, n.jsxs)(o.B, {
                direction: "vertical",
                gap: 8,
                children: [
                    (0, n.jsx)(S.E, {
                        variant: "text-md/medium",
                        color: "text-muted",
                        children: T.intl.string(T.t.KPB2iw),
                    }),
                    (0, n.jsx)("div", {
                        className: I.bo,
                        children: (0, n.jsxs)("div", {
                            className: I.OA,
                            children: [
                                (0, n.jsx)(h.Ay, { guild: p, size: h.Ay.Sizes.SMALL }),
                                (0, n.jsx)(S.E, { className: I.J5, variant: "text-md/semibold", children: p.name }),
                            ],
                        }),
                    }),
                ],
            }),
        }),
    });
}
