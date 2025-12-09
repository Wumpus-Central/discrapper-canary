i.d(e, { default: () => p });
var n = i(54381),
    l = i(473749),
    a = i(286379),
    s = i(793030),
    r = i(442837),
    d = i(481060),
    c = i(565138),
    o = i(797614),
    u = i(695346),
    m = i(430824),
    g = i(88658),
    x = i(401416),
    S = i(920133),
    h = i(388032),
    f = i(956051);
function p(t) {
    let { transitionState: e, guildId: i, onClose: p } = t,
        D = (0, r.e7)([m.Z], () => m.Z.getGuild(i));
    if (
        (l.useEffect(() => {
            (0, x.Y)(i), (0, S.L)(S.Q.MODAL_VIEWED, i), o.Z.increment({ name: a.V.DM_SETTINGS_UPSELL_VIEW });
        }, [i]),
        null == D)
    )
        return null;
    let _ = (t) => {
        t.preventDefault();
        let e = (0, g.YK)();
        e.add(i),
            u.h2
                .updateSetting(Array.from(e))
                .then(() => (0, d.showToast)((0, d.createToast)(h.intl.string(h.t.rlYD1W), d.ToastType.SUCCESS))),
            p(),
            (0, S.L)(S.Q.MODAL_DISABLED_DMS, i);
    };
    return (0, n.jsx)("form", {
        onSubmit: _,
        children: (0, n.jsx)(s.Modal, {
            transitionState: e,
            onClose: p,
            title: h.intl.string(h.t.w2BvnL),
            subtitle: h.intl.format(h.t.Depjkv, { guild_name: D.name }),
            actions: [
                {
                    text: h.intl.string(h.t.PsWbcp),
                    onClick: () => {
                        p(), (0, S.L)(S.Q.MODAL_DISMISSED, i);
                    },
                    variant: "secondary",
                },
                {
                    text: h.intl.string(h.t.TD7iUx),
                    onClick: _,
                },
            ],
            children: (0, n.jsxs)(d.Kqy, {
                direction: "vertical",
                gap: 8,
                children: [
                    (0, n.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "text-muted",
                        children: h.intl.string(h.t.KPB2iw),
                    }),
                    (0, n.jsx)("div", {
                        className: f.guildContainer,
                        children: (0, n.jsxs)("div", {
                            className: f.guildInfo,
                            children: [
                                (0, n.jsx)(c.Z, {
                                    guild: D,
                                    size: c.Z.Sizes.SMALL,
                                }),
                                (0, n.jsx)(d.Text, {
                                    className: f.guildName,
                                    variant: "text-md/semibold",
                                    children: D.name,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        }),
    });
}
