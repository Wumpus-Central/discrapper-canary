n.d(t, { Z: () => E }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(512722),
    o = n.n(l),
    a = n(990547),
    s = n(481060),
    c = n(110924),
    u = n(626135),
    _ = n(215292),
    d = n(382086),
    p = n(996453),
    m = n(446706),
    f = n(867581),
    I = n(675999),
    N = n(981631),
    T = n(98078);
function E(e) {
    let { transitionState: t, initialSlide: n = I._m.GUILD_TEMPLATES, onSuccess: l, onClose: E, onSlideChange: S, hasJoinButton: O } = e,
        [C, b] = i.useState(n),
        g = (0, c.Z)(C),
        [L, D] = i.useState(null),
        [h, A] = i.useState(null),
        [x, v] = i.useState(null),
        [w, U] = i.useState(!1);
    i.useEffect(() => {
        b(n);
    }, [b, n]),
        i.useEffect(() => {
            C !== g && S(C);
        }, [S, C, g]);
    let y = i.useCallback((e) => {
            b(I._m.CREATION_INTENT),
                A(e),
                u.default.track(N.rMx.GUILD_TEMPLATE_SELECTED, {
                    template_name: e.id,
                    template_code: e.code
                });
        }, []),
        G = i.useCallback((e) => {
            U(e === I.lr.COMMUNITY), b(I._m.CUSTOMIZE_GUILD);
        }, []),
        j = i.useCallback(() => b(I._m.JOIN_GUILD), [b]),
        P = i.useCallback(() => {
            if (C === I._m.CUSTOMIZE_GUILD) return void b(I._m.CREATION_INTENT);
            b(I._m.GUILD_TEMPLATES), A(null);
        }, [C]),
        M = i.useCallback(
            (e) => {
                v(e), l(e);
            },
            [l, v]
        ),
        k = i.useCallback(() => {
            o()(null != x, 'handleSuccess called before onGuildCreated'), l(x);
        }, [l, x]),
        R = { impression_group: a.ImpressionGroups.GUILD_ADD_FLOW },
        Z = (0, s.dQu)(s.TVs.modules.modal.WIDTH_SMALL);
    return (0, r.jsx)('div', {
        children: (0, r.jsx)(s.Y0X, {
            transitionState: t,
            disableTrack: !0,
            children: (0, r.jsx)('div', {
                className: T.container,
                children: (0, r.jsxs)(s.MyZ, {
                    activeSlide: C,
                    width: Z,
                    onSlideReady: (e) => D(e),
                    children: [
                        (0, r.jsx)(s.Mi4, {
                            id: I._m.GUILD_TEMPLATES,
                            impressionName: a.ImpressionNames.GUILD_ADD_LANDING,
                            impressionProperties: R,
                            children: (0, r.jsx)(m.Z, {
                                isNewUser: !1,
                                onJoin: O ? j : void 0,
                                onChooseTemplate: y,
                                onClose: E
                            })
                        }),
                        (0, r.jsx)(s.Mi4, {
                            id: I._m.CREATION_INTENT,
                            impressionName: a.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                            impressionProperties: R,
                            children: (0, r.jsx)(d.Z, {
                                onClose: E,
                                onBack: P,
                                onCreationIntentChosen: G
                            })
                        }),
                        (0, r.jsx)(s.Mi4, {
                            id: I._m.CUSTOMIZE_GUILD,
                            impressionName: a.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                            impressionProperties: R,
                            children: (0, r.jsx)(p.Z, {
                                guildTemplate: h,
                                onGuildCreated: M,
                                onClose: E,
                                onBack: P,
                                isSlideReady: L === I._m.CUSTOMIZE_GUILD,
                                isCommunity: w
                            })
                        }),
                        (0, r.jsx)(s.Mi4, {
                            id: I._m.CHANNEL_PROMPT,
                            impressionName: a.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                            impressionProperties: R,
                            children: (0, r.jsx)(_.Z, {
                                createdGuildId: x,
                                onClose: E,
                                onChannelPromptCompleted: k,
                                isSlideReady: L === I._m.CHANNEL_PROMPT
                            })
                        }),
                        (0, r.jsx)(s.Mi4, {
                            id: I._m.JOIN_GUILD,
                            impressionName: a.ImpressionNames.GUILD_ADD_JOIN,
                            impressionProperties: R,
                            children: (0, r.jsx)(f.Z, {
                                onBack: P,
                                onClose: E,
                                isSlideReady: L === I._m.JOIN_GUILD
                            })
                        })
                    ]
                })
            })
        })
    });
}
