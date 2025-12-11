n.d(t, { default: () => C }), n(388685);
var i = n(54381),
    a = n(473749),
    l = n(793030),
    r = n(458879),
    s = n(996453),
    o = n(411198),
    c = n(99325),
    d = n(454432),
    u = n(492749),
    f = n(66626),
    m = n(892322),
    x = n(15608),
    g = n(486527);
function C(e) {
    let {
            directoryChannelId: t,
            transitionState: n,
            initialSlide: C = g.VX.CHOOSE_GUILD,
            onClose: j,
            directoryGuildName: p,
            directoryGuildId: b,
            currentCategoryId: h,
        } = e,
        [L, v] = a.useState(C),
        [y, Z] = a.useState(null),
        [O, I] = a.useState(null),
        [S, T] = a.useState(null),
        [N, _] = a.useState(null),
        [E, H] = a.useState(""),
        [M, G] = a.useState(null != h ? h : g.AR.UNCATEGORIZED),
        [w, k] = a.useState(!1),
        { availableGuilds: U, addedGuilds: P, loading: D } = (0, d.Z)(b, t);
    a.useEffect(() => {
        v(C);
    }, [v, C]);
    let B = async () => {
            let e = N;
            if (!w) {
                if (null == O || null == y) return;
                let t = await r.Z.createGuildFromTemplate(O, S, y);
                _((e = (0, o.R)(t)));
            }
            null != e && (await c.bF(t, e.id, E, M), v(g.VX.CONFIRMATION));
        },
        V = null;
    switch (L) {
        case g.VX.CHOOSE_GUILD:
            V = (0, i.jsx)(u.Z, {
                directoryChannelId: t,
                directoryGuildName: p,
                onGuildChosen: (e) => {
                    k(!0), v(g.VX.CUSTOMIZE_EXISTING_GUILD), _(e);
                },
                handleChooseCreate: () => {
                    k(!1), v(g.VX.GUILD_TEMPLATES);
                },
                availableGuilds: U,
                addedGuilds: P,
                loading: D,
            });
            break;
        case g.VX.GUILD_TEMPLATES:
            V = (0, i.jsx)(x.Z, {
                directoryGuildName: p,
                onChooseTemplate: (e) => {
                    k(!1), v(g.VX.CUSTOMIZE_NEW_GUILD), Z(e);
                },
                onBack: () => v(g.VX.CHOOSE_GUILD),
            });
            break;
        case g.VX.CUSTOMIZE_NEW_GUILD:
            V = (0, i.jsx)(s.Z, {
                isSlideReady: !0,
                guildTemplate: y,
                onHubGuildInfoSet: (e, t) => {
                    I(e), T(t), v(g.VX.CUSTOMIZE_EXISTING_GUILD);
                },
                onBack: () => v(g.VX.GUILD_TEMPLATES),
            });
            break;
        case g.VX.CUSTOMIZE_EXISTING_GUILD:
            V = (0, i.jsx)(f.Z, {
                directoryChannelId: t,
                description: E,
                onDescriptionChange: H,
                categoryId: M,
                onCategoryIdChange: G,
                onSubmit: B,
                onBack: () => v(w ? g.VX.CHOOSE_GUILD : g.VX.CUSTOMIZE_NEW_GUILD),
            });
            break;
        case g.VX.CONFIRMATION:
            V = (0, i.jsx)(m.Z, {
                directoryGuildName: p,
                guildToAdd: N,
                isExistingGuildFlow: w,
                onClose: j,
            });
    }
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(l.IX, {
            transitionState: n,
            onClose: j,
            children: V,
        }),
    });
}
