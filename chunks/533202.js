n.d(t, { default: () => f }), n(388685);
var i = n(54381),
    l = n(473749),
    a = n(793030),
    r = n(458879),
    s = n(996453),
    o = n(411198),
    c = n(99325),
    d = n(454432),
    u = n(492749),
    m = n(66626),
    x = n(892322),
    g = n(15608),
    C = n(75666);
function f(e) {
    let {
            directoryChannelId: t,
            transitionState: n,
            initialSlide: f = C.VX.CHOOSE_GUILD,
            onClose: j,
            directoryGuildName: p,
            directoryGuildId: b,
            currentCategoryId: h,
        } = e,
        [L, _] = l.useState(f),
        [v, y] = l.useState(null),
        [Z, O] = l.useState(null),
        [I, S] = l.useState(null),
        [T, N] = l.useState(null),
        [E, H] = l.useState(""),
        [M, G] = l.useState(null != h ? h : C.AR.UNCATEGORIZED),
        [w, k] = l.useState(!1),
        { availableGuilds: U, addedGuilds: P, loading: D } = (0, d.Z)(b, t);
    l.useEffect(() => {
        _(f);
    }, [_, f]);
    let B = async () => {
            let e = T;
            if (!w) {
                if (null == Z || null == v) return;
                let t = await r.Z.createGuildFromTemplate(Z, I, v);
                N((e = (0, o.R)(t)));
            }
            null != e && (await c.bF(t, e.id, E, M), _(C.VX.CONFIRMATION));
        },
        V = null;
    switch (L) {
        case C.VX.CHOOSE_GUILD:
            V = (0, i.jsx)(u.Z, {
                directoryChannelId: t,
                directoryGuildName: p,
                onGuildChosen: (e) => {
                    k(!0), _(C.VX.CUSTOMIZE_EXISTING_GUILD), N(e);
                },
                handleChooseCreate: () => {
                    k(!1), _(C.VX.GUILD_TEMPLATES);
                },
                availableGuilds: U,
                addedGuilds: P,
                loading: D,
            });
            break;
        case C.VX.GUILD_TEMPLATES:
            V = (0, i.jsx)(g.Z, {
                directoryGuildName: p,
                onChooseTemplate: (e) => {
                    k(!1), _(C.VX.CUSTOMIZE_NEW_GUILD), y(e);
                },
                onBack: () => _(C.VX.CHOOSE_GUILD),
            });
            break;
        case C.VX.CUSTOMIZE_NEW_GUILD:
            V = (0, i.jsx)(s.Z, {
                isSlideReady: !0,
                guildTemplate: v,
                onHubGuildInfoSet: (e, t) => {
                    O(e), S(t), _(C.VX.CUSTOMIZE_EXISTING_GUILD);
                },
                onBack: () => _(C.VX.GUILD_TEMPLATES),
            });
            break;
        case C.VX.CUSTOMIZE_EXISTING_GUILD:
            V = (0, i.jsx)(m.Z, {
                directoryChannelId: t,
                description: E,
                onDescriptionChange: H,
                categoryId: M,
                onCategoryIdChange: G,
                onSubmit: B,
                onBack: () => _(w ? C.VX.CHOOSE_GUILD : C.VX.CUSTOMIZE_NEW_GUILD),
            });
            break;
        case C.VX.CONFIRMATION:
            V = (0, i.jsx)(x.Z, {
                directoryGuildName: p,
                guildToAdd: T,
                isExistingGuildFlow: w,
                onClose: j,
            });
    }
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(a.IX, {
            transitionState: n,
            onClose: j,
            children: V,
        }),
    });
}
