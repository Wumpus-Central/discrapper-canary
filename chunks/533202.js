n.d(t, { default: () => f }), n(388685);
var i = n(200651),
    s = n(192379),
    l = n(990547),
    r = n(481060),
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
    let { directoryChannelId: t, transitionState: n, initialSlide: f = g.VX.CHOOSE_GUILD, onClose: _, directoryGuildName: j, directoryGuildId: b, currentCategoryId: L } = e,
        [N, I] = s.useState(f),
        [y, v] = s.useState(null),
        [Z, S] = s.useState(null),
        [T, E] = s.useState(null),
        [k, O] = s.useState(null),
        [B, M] = s.useState(null),
        [H, D] = s.useState(''),
        [w, G] = s.useState(null != L ? L : g.AR.UNCATEGORIZED),
        [U, R] = s.useState(!1),
        { availableGuilds: A, addedGuilds: P, loading: V } = (0, u.Z)(b, t);
    s.useEffect(() => {
        I(f);
    }, [I, f]);
    let z = async () => {
            let e = B;
            if (!U) {
                if (null == T || null == Z) return;
                let t = await a.Z.createGuildFromTemplate(T, k, Z);
                M((e = new c.ZP(t)));
            }
            null != e && (await d.bF(t, e.id, H, w), I(g.VX.CONFIRMATION));
        },
        X = { impression_group: l.ImpressionGroups.DIRECTORY_GUILD_ADD_FLOW };
    return (0, i.jsx)('div', {
        children: (0, i.jsx)(r.Y0X, {
            transitionState: n,
            disableTrack: !0,
            children: (0, i.jsx)('div', {
                className: p.container,
                children: (0, i.jsxs)(r.MyZ, {
                    activeSlide: N,
                    width: 440,
                    onSlideReady: (e) => v(e),
                    children: [
                        (0, i.jsx)(r.Mi4, {
                            id: g.VX.CHOOSE_GUILD,
                            impressionName: l.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
                            impressionProperties: X,
                            children: (0, i.jsx)(m.Z, {
                                directoryChannelId: t,
                                directoryGuildName: j,
                                onGuildChosen: (e) => {
                                    R(!0), I(g.VX.CUSTOMIZE_EXISTING_GUILD), M(e);
                                },
                                handleChooseCreate: () => {
                                    R(!1), I(g.VX.GUILD_TEMPLATES);
                                },
                                onClose: _,
                                availableGuilds: A,
                                addedGuilds: P,
                                loading: V
                            })
                        }),
                        (0, i.jsx)(r.Mi4, {
                            id: g.VX.GUILD_TEMPLATES,
                            impressionName: l.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
                            impressionProperties: X,
                            children: (0, i.jsx)(h.Z, {
                                directoryGuildName: j,
                                onChooseTemplate: (e) => {
                                    R(!1), I(g.VX.CUSTOMIZE_NEW_GUILD), S(e);
                                },
                                onClose: _,
                                onBack: () => I(g.VX.CHOOSE_GUILD)
                            })
                        }),
                        (0, i.jsx)(r.Mi4, {
                            id: g.VX.CUSTOMIZE_NEW_GUILD,
                            impressionName: l.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
                            impressionProperties: X,
                            children: (0, i.jsx)(o.Z, {
                                guildTemplate: Z,
                                onHubGuildInfoSet: (e, t) => {
                                    E(e), O(t), I(g.VX.CUSTOMIZE_EXISTING_GUILD);
                                },
                                onClose: _,
                                onBack: () => I(g.VX.GUILD_TEMPLATES),
                                isSlideReady: y === g.VX.CUSTOMIZE_NEW_GUILD
                            })
                        }),
                        (0, i.jsx)(r.Mi4, {
                            id: g.VX.CUSTOMIZE_EXISTING_GUILD,
                            impressionName: l.ImpressionNames.HUB_EXISTING_GUILD_CUSTOMIZE,
                            impressionProperties: X,
                            children: (0, i.jsx)(x.Z, {
                                directoryChannelId: t,
                                description: H,
                                onDescriptionChange: D,
                                categoryId: w,
                                onCategoryIdChange: G,
                                onSubmit: z,
                                onBack: () => I(U ? g.VX.CHOOSE_GUILD : g.VX.CUSTOMIZE_NEW_GUILD),
                                onClose: _
                            })
                        }),
                        (0, i.jsx)(r.Mi4, {
                            id: g.VX.CONFIRMATION,
                            impressionName: l.ImpressionNames.DIRECTORY_ADD_GUILD_CONFIRMATION,
                            impressionProperties: X,
                            children: (0, i.jsx)(C.Z, {
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
