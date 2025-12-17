i.d(e, { default: () => h });
var n = i(54381),
    l = i(473749),
    a = i(286379),
    s = i(793030),
    r = i(442837),
    d = i(481060),
    c = i(565138),
    o = i(797614),
    u = i(695346),
    f = i(430824),
    m = i(88658),
    g = i(401416),
    x = i(920133),
    S = i(388032),
    b = i(578671);
function h(t) {
    let { transitionState: e, guildId: i, onClose: h } = t,
        p = (0, r.e7)([f.Z], () => f.Z.getGuild(i));
    if (
        (l.useEffect(() => {
            (0, g.Y)(i), (0, x.L)(x.Q.MODAL_VIEWED, i), o.Z.increment({ name: a.V.DM_SETTINGS_UPSELL_VIEW });
        }, [i]),
        null == p)
    )
        return null;
    let D = (t) => {
        t.preventDefault();
        let e = (0, m.YK)();
        e.add(i),
            u.h2
                .updateSetting(Array.from(e))
                .then(() => (0, d.showToast)((0, d.createToast)(S.intl.string(S.t.rlYD1W), d.ToastType.SUCCESS))),
            h(),
            (0, x.L)(x.Q.MODAL_DISABLED_DMS, i);
    };
    return (0, n.jsx)("form", {
        onSubmit: D,
        children: (0, n.jsx)(s.Modal, {
            transitionState: e,
            onClose: h,
            title: S.intl.string(S.t.w2BvnL),
            subtitle: S.intl.format(S.t.Depjkv, { guild_name: p.name }),
            actions: [
                {
                    text: S.intl.string(S.t.PsWbcp),
                    onClick: () => {
                        h(), (0, x.L)(x.Q.MODAL_DISMISSED, i);
                    },
                    variant: "secondary",
                },
                {
                    text: S.intl.string(S.t.TD7iUx),
                    onClick: D,
                },
            ],
            children: (0, n.jsxs)(d.Kqy, {
                direction: "vertical",
                gap: 8,
                children: [
                    (0, n.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "text-muted",
                        children: S.intl.string(S.t.KPB2iw),
                    }),
                    (0, n.jsx)("div", {
                        className: b.guildContainer,
                        children: (0, n.jsxs)("div", {
                            className: b.guildInfo,
                            children: [
                                (0, n.jsx)(c.Z, {
                                    guild: p,
                                    size: c.Z.Sizes.SMALL,
                                }),
                                (0, n.jsx)(d.Text, {
                                    className: b.guildName,
                                    variant: "text-md/semibold",
                                    children: p.name,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        }),
    });
}
