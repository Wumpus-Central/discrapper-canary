n.d(t, { default: () => j }), n(388685);
var i = n(54381),
    l = n(473749),
    r = n(990547),
    s = n(793030),
    a = n(481060),
    o = n(458879),
    c = n(996453),
    d = n(411198),
    u = n(99325),
    m = n(454432),
    x = n(492749),
    g = n(66626),
    C = n(892322),
    p = n(15608),
    f = n(75666);
function j(e) {
    let {
            directoryChannelId: t,
            transitionState: n,
            initialSlide: j = f.VX.CHOOSE_GUILD,
            onClose: h,
            directoryGuildName: _,
            directoryGuildId: b,
            currentCategoryId: L,
        } = e,
        [v, I] = l.useState(j),
        [y, O] = l.useState(null),
        [Z, S] = l.useState(null),
        [N, T] = l.useState(null),
        [E, M] = l.useState(null),
        [H, G] = l.useState(null),
        [U, D] = l.useState(""),
        [w, P] = l.useState(null != L ? L : f.AR.UNCATEGORIZED),
        [k, R] = l.useState(!1),
        { availableGuilds: A, addedGuilds: B, loading: V } = (0, m.Z)(b, t);
    l.useEffect(() => {
        I(j);
    }, [I, j]);
    let F = async () => {
            let e = H;
            if (!k) {
                if (null == N || null == Z) return;
                let t = await o.Z.createGuildFromTemplate(N, E, Z);
                G((e = (0, d.R)(t)));
            }
            null != e && (await u.bF(t, e.id, U, w), I(f.VX.CONFIRMATION));
        },
        X = { impression_group: r.ImpressionGroups.DIRECTORY_GUILD_ADD_FLOW };
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(s.IX, {
            transitionState: n,
            onClose: h,
            children: (0, i.jsxs)(a.MyZ, {
                activeSlide: v,
                onSlideReady: (e) => O(e),
                children: [
                    (0, i.jsx)(a.Mi4, {
                        id: f.VX.CHOOSE_GUILD,
                        impressionName: r.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
                        impressionProperties: X,
                        children: (0, i.jsx)(x.Z, {
                            directoryChannelId: t,
                            directoryGuildName: _,
                            onGuildChosen: (e) => {
                                R(!0), I(f.VX.CUSTOMIZE_EXISTING_GUILD), G(e);
                            },
                            handleChooseCreate: () => {
                                R(!1), I(f.VX.GUILD_TEMPLATES);
                            },
                            availableGuilds: A,
                            addedGuilds: B,
                            loading: V,
                        }),
                    }),
                    (0, i.jsx)(a.Mi4, {
                        id: f.VX.GUILD_TEMPLATES,
                        impressionName: r.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
                        impressionProperties: X,
                        children: (0, i.jsx)(p.Z, {
                            directoryGuildName: _,
                            onChooseTemplate: (e) => {
                                R(!1), I(f.VX.CUSTOMIZE_NEW_GUILD), S(e);
                            },
                            onBack: () => I(f.VX.CHOOSE_GUILD),
                        }),
                    }),
                    (0, i.jsx)(a.Mi4, {
                        id: f.VX.CUSTOMIZE_NEW_GUILD,
                        impressionName: r.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
                        impressionProperties: X,
                        children: (0, i.jsx)(c.Z, {
                            guildTemplate: Z,
                            onHubGuildInfoSet: (e, t) => {
                                T(e), M(t), I(f.VX.CUSTOMIZE_EXISTING_GUILD);
                            },
                            onBack: () => I(f.VX.GUILD_TEMPLATES),
                            isSlideReady: y === f.VX.CUSTOMIZE_NEW_GUILD,
                        }),
                    }),
                    (0, i.jsx)(a.Mi4, {
                        id: f.VX.CUSTOMIZE_EXISTING_GUILD,
                        impressionName: r.ImpressionNames.HUB_EXISTING_GUILD_CUSTOMIZE,
                        impressionProperties: X,
                        children: (0, i.jsx)(g.Z, {
                            directoryChannelId: t,
                            description: U,
                            onDescriptionChange: D,
                            categoryId: w,
                            onCategoryIdChange: P,
                            onSubmit: F,
                            onBack: () => I(k ? f.VX.CHOOSE_GUILD : f.VX.CUSTOMIZE_NEW_GUILD),
                        }),
                    }),
                    (0, i.jsx)(a.Mi4, {
                        id: f.VX.CONFIRMATION,
                        impressionName: r.ImpressionNames.DIRECTORY_ADD_GUILD_CONFIRMATION,
                        impressionProperties: X,
                        children: (0, i.jsx)(C.Z, {
                            directoryGuildName: _,
                            guildToAdd: H,
                            isExistingGuildFlow: k,
                            onClose: h,
                        }),
                    }),
                ],
            }),
        }),
    });
}
