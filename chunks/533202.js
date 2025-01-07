n.r(t),
    n.d(t, {
        default: function () {
            return L;
        }
    }),
    n(47120);
var i = n(200651),
    l = n(192379),
    s = n(990547),
    a = n(481060),
    o = n(458879),
    r = n(996453),
    c = n(601964),
    d = n(99325),
    u = n(454432),
    m = n(492749),
    C = n(66626),
    x = n(892322),
    f = n(15608),
    h = n(486527),
    g = n(457804);
function L(e) {
    let { directoryChannelId: t, transitionState: n, initialSlide: L = h.VX.CHOOSE_GUILD, onClose: p, directoryGuildName: b, directoryGuildId: j, currentCategoryId: _ } = e,
        [I, N] = l.useState(L),
        [B, T] = l.useState(null),
        [Z, S] = l.useState(null),
        [M, E] = l.useState(null),
        [v, H] = l.useState(null),
        [y, A] = l.useState(null),
        [D, k] = l.useState(''),
        [R, U] = l.useState(null != _ ? _ : h.AR.UNCATEGORIZED),
        [G, V] = l.useState(!1),
        { availableGuilds: O, addedGuilds: F, loading: w } = (0, u.Z)(j, t);
    l.useEffect(() => {
        N(L);
    }, [N, L]);
    let X = async () => {
            let e = y;
            if (!G) {
                if (null == M || null == Z) return;
                let t = await o.Z.createGuildFromTemplate(M, v, Z);
                A((e = new c.ZP(t)));
            }
            null != e && (await d.bF(t, e.id, D, R), N(h.VX.CONFIRMATION));
        },
        P = { impression_group: s.ImpressionGroups.DIRECTORY_GUILD_ADD_FLOW };
    return (0, i.jsx)('div', {
        children: (0, i.jsx)(a.ModalRoot, {
            transitionState: n,
            disableTrack: !0,
            children: (0, i.jsx)('div', {
                className: g.container,
                children: (0, i.jsxs)(a.Slides, {
                    activeSlide: I,
                    width: 440,
                    onSlideReady: (e) => T(e),
                    children: [
                        (0, i.jsx)(a.Slide, {
                            id: h.VX.CHOOSE_GUILD,
                            impressionName: s.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
                            impressionProperties: P,
                            children: (0, i.jsx)(m.Z, {
                                directoryChannelId: t,
                                directoryGuildName: b,
                                onGuildChosen: (e) => {
                                    V(!0), N(h.VX.CUSTOMIZE_EXISTING_GUILD), A(e);
                                },
                                handleChooseCreate: () => {
                                    V(!1), N(h.VX.GUILD_TEMPLATES);
                                },
                                onClose: p,
                                availableGuilds: O,
                                addedGuilds: F,
                                loading: w
                            })
                        }),
                        (0, i.jsx)(a.Slide, {
                            id: h.VX.GUILD_TEMPLATES,
                            impressionName: s.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
                            impressionProperties: P,
                            children: (0, i.jsx)(f.Z, {
                                directoryGuildName: b,
                                onChooseTemplate: (e) => {
                                    V(!1), N(h.VX.CUSTOMIZE_NEW_GUILD), S(e);
                                },
                                onClose: p,
                                onBack: () => N(h.VX.CHOOSE_GUILD)
                            })
                        }),
                        (0, i.jsx)(a.Slide, {
                            id: h.VX.CUSTOMIZE_NEW_GUILD,
                            impressionName: s.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
                            impressionProperties: P,
                            children: (0, i.jsx)(r.Z, {
                                guildTemplate: Z,
                                onHubGuildInfoSet: (e, t) => {
                                    E(e), H(t), N(h.VX.CUSTOMIZE_EXISTING_GUILD);
                                },
                                onClose: p,
                                onBack: () => N(h.VX.GUILD_TEMPLATES),
                                isSlideReady: B === h.VX.CUSTOMIZE_NEW_GUILD
                            })
                        }),
                        (0, i.jsx)(a.Slide, {
                            id: h.VX.CUSTOMIZE_EXISTING_GUILD,
                            impressionName: s.ImpressionNames.HUB_EXISTING_GUILD_CUSTOMIZE,
                            impressionProperties: P,
                            children: (0, i.jsx)(C.Z, {
                                directoryChannelId: t,
                                description: D,
                                onDescriptionChange: k,
                                categoryId: R,
                                onCategoryIdChange: U,
                                onSubmit: X,
                                onBack: () => N(G ? h.VX.CHOOSE_GUILD : h.VX.CUSTOMIZE_NEW_GUILD),
                                onClose: p
                            })
                        }),
                        (0, i.jsx)(a.Slide, {
                            id: h.VX.CONFIRMATION,
                            impressionName: s.ImpressionNames.DIRECTORY_ADD_GUILD_CONFIRMATION,
                            impressionProperties: P,
                            children: (0, i.jsx)(x.Z, {
                                directoryGuildName: b,
                                guildToAdd: y,
                                isExistingGuildFlow: G,
                                onClose: p
                            })
                        })
                    ]
                })
            })
        })
    });
}
