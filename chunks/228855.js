i.d(e, { default: () => b });
var n = i(627968),
    s = i(64700),
    l = i(731738),
    a = i(158954),
    r = i(311907),
    d = i(397927),
    c = i(263063),
    o = i(831062),
    u = i(253932),
    m = i(71393),
    x = i(115063),
    S = i(360966),
    h = i(386936),
    p = i(985018),
    D = i(760905);
function b(t) {
    let { transitionState: e, guildId: i, onClose: b } = t,
        g = (0, r.bG)([m.A], () => m.A.getGuild(i));
    if (
        (s.useEffect(() => {
            (0, S.Q)(i), (0, h.$)(h.s.MODAL_VIEWED, i), o.A.increment({ name: l.K.DM_SETTINGS_UPSELL_VIEW });
        }, [i]),
        null == g)
    )
        return null;
    let A = (t) => {
        t.preventDefault();
        let e = (0, x.Tb)();
        e.add(i),
            u.$s
                .updateSetting(Array.from(e))
                .then(() => (0, d.showToast)((0, d.createToast)(p.intl.string(p.t.rlYD1W), d.ToastType.SUCCESS))),
            b(),
            (0, h.$)(h.s.MODAL_DISABLED_DMS, i);
    };
    return (0, n.jsx)("form", {
        onSubmit: A,
        children: (0, n.jsx)(a.Modal, {
            transitionState: e,
            onClose: b,
            title: p.intl.string(p.t.w2BvnL),
            subtitle: p.intl.format(p.t.Depjkv, { guild_name: g.name }),
            actions: [
                {
                    text: p.intl.string(p.t.PsWbcp),
                    onClick: () => {
                        b(), (0, h.$)(h.s.MODAL_DISMISSED, i);
                    },
                    variant: "secondary",
                },
                { text: p.intl.string(p.t.TD7iUx), onClick: A },
            ],
            children: (0, n.jsxs)(d.BJc, {
                direction: "vertical",
                gap: 8,
                children: [
                    (0, n.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "text-muted",
                        children: p.intl.string(p.t.KPB2iw),
                    }),
                    (0, n.jsx)("div", {
                        className: D.bo,
                        children: (0, n.jsxs)("div", {
                            className: D.OA,
                            children: [
                                (0, n.jsx)(c.Ay, { guild: g, size: c.Ay.Sizes.SMALL }),
                                (0, n.jsx)(d.Text, { className: D.J5, variant: "text-md/semibold", children: g.name }),
                            ],
                        }),
                    }),
                ],
            }),
        }),
    });
}
