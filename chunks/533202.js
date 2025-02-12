i.d(t, { default: () => f }), i(47120);
var n = i(200651),
    s = i(192379),
    l = i(990547),
    a = i(481060),
    r = i(458879),
    o = i(996453),
    c = i(601964),
    d = i(99325),
    u = i(454432),
    m = i(492749),
    x = i(66626),
    C = i(892322),
    h = i(15608),
    _ = i(486527),
    g = i(777108);
function f(e) {
    let { directoryChannelId: t, transitionState: i, initialSlide: f = _.VX.CHOOSE_GUILD, onClose: j, directoryGuildName: p, directoryGuildId: L, currentCategoryId: N } = e,
        [I, b] = s.useState(f),
        [Z, T] = s.useState(null),
        [k, v] = s.useState(null),
        [E, S] = s.useState(null),
        [B, M] = s.useState(null),
        [H, y] = s.useState(null),
        [G, U] = s.useState(''),
        [R, D] = s.useState(null != N ? N : _.AR.UNCATEGORIZED),
        [A, V] = s.useState(!1),
        { availableGuilds: z, addedGuilds: O, loading: w } = (0, u.Z)(L, t);
    s.useEffect(() => {
        b(f);
    }, [b, f]);
    let X = async () => {
            let e = H;
            if (!A) {
                if (null == E || null == k) return;
                let t = await r.Z.createGuildFromTemplate(E, B, k);
                y((e = new c.ZP(t)));
            }
            null != e && (await d.bF(t, e.id, G, R), b(_.VX.CONFIRMATION));
        },
        F = { impression_group: l.ImpressionGroups.DIRECTORY_GUILD_ADD_FLOW };
    return (0, n.jsx)('div', {
        children: (0, n.jsx)(a.Y0X, {
            transitionState: i,
            disableTrack: !0,
            children: (0, n.jsx)('div', {
                className: g.container,
                children: (0, n.jsxs)(a.MyZ, {
                    activeSlide: I,
                    width: 440,
                    onSlideReady: (e) => T(e),
                    children: [
                        (0, n.jsx)(a.Mi4, {
                            id: _.VX.CHOOSE_GUILD,
                            impressionName: l.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
                            impressionProperties: F,
                            children: (0, n.jsx)(m.Z, {
                                directoryChannelId: t,
                                directoryGuildName: p,
                                onGuildChosen: (e) => {
                                    V(!0), b(_.VX.CUSTOMIZE_EXISTING_GUILD), y(e);
                                },
                                handleChooseCreate: () => {
                                    V(!1), b(_.VX.GUILD_TEMPLATES);
                                },
                                onClose: j,
                                availableGuilds: z,
                                addedGuilds: O,
                                loading: w
                            })
                        }),
                        (0, n.jsx)(a.Mi4, {
                            id: _.VX.GUILD_TEMPLATES,
                            impressionName: l.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
                            impressionProperties: F,
                            children: (0, n.jsx)(h.Z, {
                                directoryGuildName: p,
                                onChooseTemplate: (e) => {
                                    V(!1), b(_.VX.CUSTOMIZE_NEW_GUILD), v(e);
                                },
                                onClose: j,
                                onBack: () => b(_.VX.CHOOSE_GUILD)
                            })
                        }),
                        (0, n.jsx)(a.Mi4, {
                            id: _.VX.CUSTOMIZE_NEW_GUILD,
                            impressionName: l.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
                            impressionProperties: F,
                            children: (0, n.jsx)(o.Z, {
                                guildTemplate: k,
                                onHubGuildInfoSet: (e, t) => {
                                    S(e), M(t), b(_.VX.CUSTOMIZE_EXISTING_GUILD);
                                },
                                onClose: j,
                                onBack: () => b(_.VX.GUILD_TEMPLATES),
                                isSlideReady: Z === _.VX.CUSTOMIZE_NEW_GUILD
                            })
                        }),
                        (0, n.jsx)(a.Mi4, {
                            id: _.VX.CUSTOMIZE_EXISTING_GUILD,
                            impressionName: l.ImpressionNames.HUB_EXISTING_GUILD_CUSTOMIZE,
                            impressionProperties: F,
                            children: (0, n.jsx)(x.Z, {
                                directoryChannelId: t,
                                description: G,
                                onDescriptionChange: U,
                                categoryId: R,
                                onCategoryIdChange: D,
                                onSubmit: X,
                                onBack: () => b(A ? _.VX.CHOOSE_GUILD : _.VX.CUSTOMIZE_NEW_GUILD),
                                onClose: j
                            })
                        }),
                        (0, n.jsx)(a.Mi4, {
                            id: _.VX.CONFIRMATION,
                            impressionName: l.ImpressionNames.DIRECTORY_ADD_GUILD_CONFIRMATION,
                            impressionProperties: F,
                            children: (0, n.jsx)(C.Z, {
                                directoryGuildName: p,
                                guildToAdd: H,
                                isExistingGuildFlow: A,
                                onClose: j
                            })
                        })
                    ]
                })
            })
        })
    });
}
