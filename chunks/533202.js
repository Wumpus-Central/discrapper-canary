n.d(t, { default: () => f }), n(47120);
var s = n(200651),
    i = n(192379),
    r = n(990547),
    l = n(481060),
    a = n(458879),
    o = n(996453),
    c = n(601964),
    d = n(99325),
    u = n(454432),
    m = n(492749),
    x = n(66626),
    C = n(892322),
    h = n(15608),
    g = n(75666),
    p = n(563000);
function f(e) {
    let { directoryChannelId: t, transitionState: n, initialSlide: f = g.VX.CHOOSE_GUILD, onClose: _, directoryGuildName: j, directoryGuildId: N, currentCategoryId: b } = e,
        [L, I] = i.useState(f),
        [y, v] = i.useState(null),
        [Z, S] = i.useState(null),
        [T, E] = i.useState(null),
        [k, O] = i.useState(null),
        [B, M] = i.useState(null),
        [H, D] = i.useState(''),
        [w, G] = i.useState(null != b ? b : g.AR.UNCATEGORIZED),
        [U, R] = i.useState(!1),
        { availableGuilds: W, addedGuilds: A, loading: P } = (0, u.Z)(N, t);
    i.useEffect(() => {
        I(f);
    }, [I, f]);
    let V = async () => {
            let e = B;
            if (!U) {
                if (null == T || null == Z) return;
                let t = await a.Z.createGuildFromTemplate(T, k, Z);
                M((e = new c.ZP(t)));
            }
            null != e && (await d.bF(t, e.id, H, w), I(g.VX.CONFIRMATION));
        },
        z = { impression_group: r.ImpressionGroups.DIRECTORY_GUILD_ADD_FLOW };
    return (0, s.jsx)('div', {
        children: (0, s.jsx)(l.Y0X, {
            transitionState: n,
            disableTrack: !0,
            children: (0, s.jsx)('div', {
                className: p.container,
                children: (0, s.jsxs)(l.MyZ, {
                    activeSlide: L,
                    width: 440,
                    onSlideReady: (e) => v(e),
                    children: [
                        (0, s.jsx)(l.Mi4, {
                            id: g.VX.CHOOSE_GUILD,
                            impressionName: r.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
                            impressionProperties: z,
                            children: (0, s.jsx)(m.Z, {
                                directoryChannelId: t,
                                directoryGuildName: j,
                                onGuildChosen: (e) => {
                                    R(!0), I(g.VX.CUSTOMIZE_EXISTING_GUILD), M(e);
                                },
                                handleChooseCreate: () => {
                                    R(!1), I(g.VX.GUILD_TEMPLATES);
                                },
                                onClose: _,
                                availableGuilds: W,
                                addedGuilds: A,
                                loading: P
                            })
                        }),
                        (0, s.jsx)(l.Mi4, {
                            id: g.VX.GUILD_TEMPLATES,
                            impressionName: r.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
                            impressionProperties: z,
                            children: (0, s.jsx)(h.Z, {
                                directoryGuildName: j,
                                onChooseTemplate: (e) => {
                                    R(!1), I(g.VX.CUSTOMIZE_NEW_GUILD), S(e);
                                },
                                onClose: _,
                                onBack: () => I(g.VX.CHOOSE_GUILD)
                            })
                        }),
                        (0, s.jsx)(l.Mi4, {
                            id: g.VX.CUSTOMIZE_NEW_GUILD,
                            impressionName: r.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
                            impressionProperties: z,
                            children: (0, s.jsx)(o.Z, {
                                guildTemplate: Z,
                                onHubGuildInfoSet: (e, t) => {
                                    E(e), O(t), I(g.VX.CUSTOMIZE_EXISTING_GUILD);
                                },
                                onClose: _,
                                onBack: () => I(g.VX.GUILD_TEMPLATES),
                                isSlideReady: y === g.VX.CUSTOMIZE_NEW_GUILD
                            })
                        }),
                        (0, s.jsx)(l.Mi4, {
                            id: g.VX.CUSTOMIZE_EXISTING_GUILD,
                            impressionName: r.ImpressionNames.HUB_EXISTING_GUILD_CUSTOMIZE,
                            impressionProperties: z,
                            children: (0, s.jsx)(x.Z, {
                                directoryChannelId: t,
                                description: H,
                                onDescriptionChange: D,
                                categoryId: w,
                                onCategoryIdChange: G,
                                onSubmit: V,
                                onBack: () => I(U ? g.VX.CHOOSE_GUILD : g.VX.CUSTOMIZE_NEW_GUILD),
                                onClose: _
                            })
                        }),
                        (0, s.jsx)(l.Mi4, {
                            id: g.VX.CONFIRMATION,
                            impressionName: r.ImpressionNames.DIRECTORY_ADD_GUILD_CONFIRMATION,
                            impressionProperties: z,
                            children: (0, s.jsx)(C.Z, {
                                directoryGuildName: j,
                                guildToAdd: B,
                                isExistingGuildFlow: U,
                                onClose: _
                            })
                        })
                    ]
                })
            })
        })
    });
}
