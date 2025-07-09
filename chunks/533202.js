(n.d(t, { default: () => f }), n(388685));
var i = n(255367),
    s = n(73800),
    l = n(990547),
    a = n(481060),
    r = n(458879),
    o = n(996453),
    c = n(601964),
    d = n(99325),
    u = n(454432),
    m = n(492749),
    x = n(66626),
    C = n(892322),
    h = n(15608),
    p = n(75666),
    g = n(563000);
function f(e) {
    let { directoryChannelId: t, transitionState: n, initialSlide: f = p.VX.CHOOSE_GUILD, onClose: j, directoryGuildName: _, directoryGuildId: b, currentCategoryId: L } = e,
        [N, I] = s.useState(f),
        [y, v] = s.useState(null),
        [Z, S] = s.useState(null),
        [E, T] = s.useState(null),
        [O, B] = s.useState(null),
        [M, k] = s.useState(null),
        [H, D] = s.useState(''),
        [G, w] = s.useState(null != L ? L : p.AR.UNCATEGORIZED),
        [U, R] = s.useState(!1),
        { availableGuilds: A, addedGuilds: P, loading: V } = (0, u.Z)(b, t);
    s.useEffect(() => {
        I(f);
    }, [I, f]);
    let z = async () => {
            let e = M;
            if (!U) {
                if (null == E || null == Z) return;
                let t = await r.Z.createGuildFromTemplate(E, O, Z);
                k((e = new c.ZP(t)));
            }
            null != e && (await d.bF(t, e.id, H, G), I(p.VX.CONFIRMATION));
        },
        X = { impression_group: l.ImpressionGroups.DIRECTORY_GUILD_ADD_FLOW };
    return (0, i.jsx)('div', {
        children: (0, i.jsx)(a.Y0X, {
            transitionState: n,
            disableTrack: !0,
            parentComponent: 'CreateOrAddGuildModal',
            children: (0, i.jsx)('div', {
                className: g.container,
                children: (0, i.jsxs)(a.MyZ, {
                    activeSlide: N,
                    width: 440,
                    onSlideReady: (e) => v(e),
                    children: [
                        (0, i.jsx)(a.Mi4, {
                            id: p.VX.CHOOSE_GUILD,
                            impressionName: l.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
                            impressionProperties: X,
                            children: (0, i.jsx)(m.Z, {
                                directoryChannelId: t,
                                directoryGuildName: _,
                                onGuildChosen: (e) => {
                                    (R(!0), I(p.VX.CUSTOMIZE_EXISTING_GUILD), k(e));
                                },
                                handleChooseCreate: () => {
                                    (R(!1), I(p.VX.GUILD_TEMPLATES));
                                },
                                onClose: j,
                                availableGuilds: A,
                                addedGuilds: P,
                                loading: V
                            })
                        }),
                        (0, i.jsx)(a.Mi4, {
                            id: p.VX.GUILD_TEMPLATES,
                            impressionName: l.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
                            impressionProperties: X,
                            children: (0, i.jsx)(h.Z, {
                                directoryGuildName: _,
                                onChooseTemplate: (e) => {
                                    (R(!1), I(p.VX.CUSTOMIZE_NEW_GUILD), S(e));
                                },
                                onClose: j,
                                onBack: () => I(p.VX.CHOOSE_GUILD)
                            })
                        }),
                        (0, i.jsx)(a.Mi4, {
                            id: p.VX.CUSTOMIZE_NEW_GUILD,
                            impressionName: l.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
                            impressionProperties: X,
                            children: (0, i.jsx)(o.Z, {
                                guildTemplate: Z,
                                onHubGuildInfoSet: (e, t) => {
                                    (T(e), B(t), I(p.VX.CUSTOMIZE_EXISTING_GUILD));
                                },
                                onClose: j,
                                onBack: () => I(p.VX.GUILD_TEMPLATES),
                                isSlideReady: y === p.VX.CUSTOMIZE_NEW_GUILD
                            })
                        }),
                        (0, i.jsx)(a.Mi4, {
                            id: p.VX.CUSTOMIZE_EXISTING_GUILD,
                            impressionName: l.ImpressionNames.HUB_EXISTING_GUILD_CUSTOMIZE,
                            impressionProperties: X,
                            children: (0, i.jsx)(x.Z, {
                                directoryChannelId: t,
                                description: H,
                                onDescriptionChange: D,
                                categoryId: G,
                                onCategoryIdChange: w,
                                onSubmit: z,
                                onBack: () => I(U ? p.VX.CHOOSE_GUILD : p.VX.CUSTOMIZE_NEW_GUILD),
                                onClose: j
                            })
                        }),
                        (0, i.jsx)(a.Mi4, {
                            id: p.VX.CONFIRMATION,
                            impressionName: l.ImpressionNames.DIRECTORY_ADD_GUILD_CONFIRMATION,
                            impressionProperties: X,
                            children: (0, i.jsx)(C.Z, {
                                directoryGuildName: _,
                                guildToAdd: M,
                                isExistingGuildFlow: U,
                                onClose: j
                            })
                        })
                    ]
                })
            })
        })
    });
}
