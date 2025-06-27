n.d(t, { default: () => f }), n(388685);
var i = n(255367),
    s = n(73800),
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
    let { directoryChannelId: t, transitionState: n, initialSlide: f = g.VX.CHOOSE_GUILD, onClose: j, directoryGuildName: _, directoryGuildId: b, currentCategoryId: L } = e,
        [N, I] = s.useState(f),
        [y, v] = s.useState(null),
        [Z, S] = s.useState(null),
        [E, T] = s.useState(null),
        [k, O] = s.useState(null),
        [B, M] = s.useState(null),
        [H, D] = s.useState(''),
        [G, w] = s.useState(null != L ? L : g.AR.UNCATEGORIZED),
        [R, U] = s.useState(!1),
        { availableGuilds: A, addedGuilds: P, loading: V } = (0, u.Z)(b, t);
    s.useEffect(() => {
        I(f);
    }, [I, f]);
    let z = async () => {
            let e = B;
            if (!R) {
                if (null == E || null == Z) return;
                let t = await a.Z.createGuildFromTemplate(E, k, Z);
                M((e = new c.ZP(t)));
            }
            null != e && (await d.bF(t, e.id, H, G), I(g.VX.CONFIRMATION));
        },
        X = { impression_group: l.ImpressionGroups.DIRECTORY_GUILD_ADD_FLOW };
    return (0, i.jsx)('div', {
        children: (0, i.jsx)(r.Y0X, {
            transitionState: n,
            disableTrack: !0,
            parentComponent: 'CreateOrAddGuildModal',
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
                                directoryGuildName: _,
                                onGuildChosen: (e) => {
                                    U(!0), I(g.VX.CUSTOMIZE_EXISTING_GUILD), M(e);
                                },
                                handleChooseCreate: () => {
                                    U(!1), I(g.VX.GUILD_TEMPLATES);
                                },
                                onClose: j,
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
                                directoryGuildName: _,
                                onChooseTemplate: (e) => {
                                    U(!1), I(g.VX.CUSTOMIZE_NEW_GUILD), S(e);
                                },
                                onClose: j,
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
                                    T(e), O(t), I(g.VX.CUSTOMIZE_EXISTING_GUILD);
                                },
                                onClose: j,
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
                                categoryId: G,
                                onCategoryIdChange: w,
                                onSubmit: z,
                                onBack: () => I(R ? g.VX.CHOOSE_GUILD : g.VX.CUSTOMIZE_NEW_GUILD),
                                onClose: j
                            })
                        }),
                        (0, i.jsx)(r.Mi4, {
                            id: g.VX.CONFIRMATION,
                            impressionName: l.ImpressionNames.DIRECTORY_ADD_GUILD_CONFIRMATION,
                            impressionProperties: X,
                            children: (0, i.jsx)(C.Z, {
                                directoryGuildName: _,
                                guildToAdd: B,
                                isExistingGuildFlow: R,
                                onClose: j
                            })
                        })
                    ]
                })
            })
        })
    });
}
