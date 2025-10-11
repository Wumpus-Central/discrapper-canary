n.d(t, { default: () => j }), n(388685);
var i = n(951288),
    l = n(647438),
    s = n(990547),
    r = n(793030),
    a = n(481060),
    o = n(458879),
    c = n(996453),
    d = n(411198),
    u = n(99325),
    m = n(454432),
    x = n(492749),
    C = n(66626),
    g = n(892322),
    p = n(15608),
    f = n(75666);
function j(e) {
    let {
            directoryChannelId: t,
            transitionState: n,
            initialSlide: j = f.VX.CHOOSE_GUILD,
            onClose: h,
            directoryGuildName: b,
            directoryGuildId: _,
            currentCategoryId: L,
        } = e,
        [I, v] = l.useState(j),
        [y, Z] = l.useState(null),
        [O, S] = l.useState(null),
        [T, N] = l.useState(null),
        [E, M] = l.useState(null),
        [H, G] = l.useState(null),
        [U, D] = l.useState(""),
        [w, P] = l.useState(null != L ? L : f.AR.UNCATEGORIZED),
        [k, R] = l.useState(!1),
        { availableGuilds: A, addedGuilds: V, loading: B } = (0, m.Z)(_, t);
    l.useEffect(() => {
        v(j);
    }, [v, j]);
    let F = async () => {
            let e = H;
            if (!k) {
                if (null == T || null == O) return;
                let t = await o.Z.createGuildFromTemplate(T, E, O);
                G((e = (0, d.R)(t)));
            }
            null != e && (await u.bF(t, e.id, U, w), v(f.VX.CONFIRMATION));
        },
        X = { impression_group: s.ImpressionGroups.DIRECTORY_GUILD_ADD_FLOW };
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(r.IX, {
            transitionState: n,
            onClose: h,
            children: (0, i.jsxs)(a.MyZ, {
                activeSlide: I,
                onSlideReady: (e) => Z(e),
                children: [
                    (0, i.jsx)(a.Mi4, {
                        id: f.VX.CHOOSE_GUILD,
                        impressionName: s.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
                        impressionProperties: X,
                        children: (0, i.jsx)(x.Z, {
                            directoryChannelId: t,
                            directoryGuildName: b,
                            onGuildChosen: (e) => {
                                R(!0), v(f.VX.CUSTOMIZE_EXISTING_GUILD), G(e);
                            },
                            handleChooseCreate: () => {
                                R(!1), v(f.VX.GUILD_TEMPLATES);
                            },
                            availableGuilds: A,
                            addedGuilds: V,
                            loading: B,
                        }),
                    }),
                    (0, i.jsx)(a.Mi4, {
                        id: f.VX.GUILD_TEMPLATES,
                        impressionName: s.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
                        impressionProperties: X,
                        children: (0, i.jsx)(p.Z, {
                            directoryGuildName: b,
                            onChooseTemplate: (e) => {
                                R(!1), v(f.VX.CUSTOMIZE_NEW_GUILD), S(e);
                            },
                            onBack: () => v(f.VX.CHOOSE_GUILD),
                        }),
                    }),
                    (0, i.jsx)(a.Mi4, {
                        id: f.VX.CUSTOMIZE_NEW_GUILD,
                        impressionName: s.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
                        impressionProperties: X,
                        children: (0, i.jsx)(c.Z, {
                            guildTemplate: O,
                            onHubGuildInfoSet: (e, t) => {
                                N(e), M(t), v(f.VX.CUSTOMIZE_EXISTING_GUILD);
                            },
                            onBack: () => v(f.VX.GUILD_TEMPLATES),
                            isSlideReady: y === f.VX.CUSTOMIZE_NEW_GUILD,
                        }),
                    }),
                    (0, i.jsx)(a.Mi4, {
                        id: f.VX.CUSTOMIZE_EXISTING_GUILD,
                        impressionName: s.ImpressionNames.HUB_EXISTING_GUILD_CUSTOMIZE,
                        impressionProperties: X,
                        children: (0, i.jsx)(C.Z, {
                            directoryChannelId: t,
                            description: U,
                            onDescriptionChange: D,
                            categoryId: w,
                            onCategoryIdChange: P,
                            onSubmit: F,
                            onBack: () => v(k ? f.VX.CHOOSE_GUILD : f.VX.CUSTOMIZE_NEW_GUILD),
                        }),
                    }),
                    (0, i.jsx)(a.Mi4, {
                        id: f.VX.CONFIRMATION,
                        impressionName: s.ImpressionNames.DIRECTORY_ADD_GUILD_CONFIRMATION,
                        impressionProperties: X,
                        children: (0, i.jsx)(g.Z, {
                            directoryGuildName: b,
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
