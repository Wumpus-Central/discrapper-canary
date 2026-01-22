i.d(e, { default: () => D });
var n = i(627968),
    s = i(64700),
    a = i(731738),
    l = i(158954),
    r = i(311907),
    c = i(397927),
    d = i(263063),
    o = i(831062),
    u = i(253932),
    m = i(71393),
    x = i(115063),
    S = i(360966),
    f = i(386936),
    h = i(985018),
    p = i(818639);
function D(t) {
    let { transitionState: e, guildId: i, onClose: D } = t,
        b = (0, r.bG)([m.A], () => m.A.getGuild(i));
    if (
        (s.useEffect(() => {
            (0, S.Q)(i), (0, f.$)(f.s.MODAL_VIEWED, i), o.A.increment({ name: a.K.DM_SETTINGS_UPSELL_VIEW });
        }, [i]),
        null == b)
    )
        return null;
    let A = (t) => {
        t.preventDefault();
        let e = (0, x.Tb)();
        e.add(i),
            u.$s
                .updateSetting(Array.from(e))
                .then(() => (0, c.showToast)((0, c.createToast)(h.intl.string(h.t.rlYD1W), c.ToastType.SUCCESS))),
            D(),
            (0, f.$)(f.s.MODAL_DISABLED_DMS, i);
    };
    return (0, n.jsx)("form", {
        onSubmit: A,
        children: (0, n.jsx)(l.Modal, {
            transitionState: e,
            onClose: D,
            title: h.intl.string(h.t.w2BvnL),
            subtitle: h.intl.format(h.t.Depjkv, { guild_name: b.name }),
            actions: [
                {
                    text: h.intl.string(h.t.PsWbcp),
                    onClick: () => {
                        D(), (0, f.$)(f.s.MODAL_DISMISSED, i);
                    },
                    variant: "secondary",
                },
                {
                    text: h.intl.string(h.t.TD7iUx),
                    onClick: A,
                },
            ],
            children: (0, n.jsxs)(c.BJc, {
                direction: "vertical",
                gap: 8,
                children: [
                    (0, n.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "text-muted",
                        children: h.intl.string(h.t.KPB2iw),
                    }),
                    (0, n.jsx)("div", {
                        className: p.bo,
                        children: (0, n.jsxs)("div", {
                            className: p.OA,
                            children: [
                                (0, n.jsx)(d.A, {
                                    guild: b,
                                    size: d.A.Sizes.SMALL,
                                }),
                                (0, n.jsx)(c.Text, {
                                    className: p.J5,
                                    variant: "text-md/semibold",
                                    children: b.name,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        }),
    });
}
