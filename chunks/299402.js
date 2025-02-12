n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    o = n.n(r),
    a = n(990547),
    s = n(481060),
    c = n(110924),
    u = n(626135),
    _ = n(215292),
    d = n(382086),
    m = n(996453),
    p = n(446706),
    I = n(867581),
    f = n(675999),
    N = n(981631),
    T = n(485864);
function E(e) {
    let { transitionState: t, initialSlide: n = f._m.GUILD_TEMPLATES, onSuccess: r, onClose: E, onSlideChange: C, hasJoinButton: S } = e,
        [L, A] = l.useState(n),
        D = (0, c.Z)(L),
        [x, U] = l.useState(null),
        [h, g] = l.useState(null),
        [G, O] = l.useState(null),
        [w, M] = l.useState(!1);
    l.useEffect(() => {
        A(n);
    }, [A, n]),
        l.useEffect(() => {
            L !== D && C(L);
        }, [C, L, D]);
    let v = l.useCallback((e) => {
            A(f._m.CREATION_INTENT),
                g(e),
                u.default.track(N.rMx.GUILD_TEMPLATE_SELECTED, {
                    template_name: e.id,
                    template_code: e.code
                });
        }, []),
        k = l.useCallback((e) => {
            M(e === f.lr.COMMUNITY), A(f._m.CUSTOMIZE_GUILD);
        }, []),
        b = l.useCallback(() => A(f._m.JOIN_GUILD), [A]),
        R = l.useCallback(() => {
            if (L === f._m.CUSTOMIZE_GUILD) {
                A(f._m.CREATION_INTENT);
                return;
            }
            A(f._m.GUILD_TEMPLATES), g(null);
        }, [L]),
        j = l.useCallback(
            (e) => {
                O(e), r(e);
            },
            [r, O]
        ),
        P = l.useCallback(() => {
            o()(null != G, 'handleSuccess called before onGuildCreated'), r(G);
        }, [r, G]),
        Z = { impression_group: a.ImpressionGroups.GUILD_ADD_FLOW },
        y = (0, s.dQu)(s.TVs.modules.modal.WIDTH_SMALL);
    return (0, i.jsx)('div', {
        children: (0, i.jsx)(s.Y0X, {
            transitionState: t,
            disableTrack: !0,
            children: (0, i.jsx)('div', {
                className: T.container,
                children: (0, i.jsxs)(s.MyZ, {
                    activeSlide: L,
                    width: y,
                    onSlideReady: (e) => U(e),
                    children: [
                        (0, i.jsx)(s.Mi4, {
                            id: f._m.GUILD_TEMPLATES,
                            impressionName: a.ImpressionNames.GUILD_ADD_LANDING,
                            impressionProperties: Z,
                            children: (0, i.jsx)(p.Z, {
                                isNewUser: !1,
                                onJoin: S ? b : void 0,
                                onChooseTemplate: v,
                                onClose: E
                            })
                        }),
                        (0, i.jsx)(s.Mi4, {
                            id: f._m.CREATION_INTENT,
                            impressionName: a.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                            impressionProperties: Z,
                            children: (0, i.jsx)(d.Z, {
                                onClose: E,
                                onBack: R,
                                onCreationIntentChosen: k
                            })
                        }),
                        (0, i.jsx)(s.Mi4, {
                            id: f._m.CUSTOMIZE_GUILD,
                            impressionName: a.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                            impressionProperties: Z,
                            children: (0, i.jsx)(m.Z, {
                                guildTemplate: h,
                                onGuildCreated: j,
                                onClose: E,
                                onBack: R,
                                isSlideReady: x === f._m.CUSTOMIZE_GUILD,
                                isCommunity: w
                            })
                        }),
                        (0, i.jsx)(s.Mi4, {
                            id: f._m.CHANNEL_PROMPT,
                            impressionName: a.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                            impressionProperties: Z,
                            children: (0, i.jsx)(_.Z, {
                                createdGuildId: G,
                                onClose: E,
                                onChannelPromptCompleted: P,
                                isSlideReady: x === f._m.CHANNEL_PROMPT
                            })
                        }),
                        (0, i.jsx)(s.Mi4, {
                            id: f._m.JOIN_GUILD,
                            impressionName: a.ImpressionNames.GUILD_ADD_JOIN,
                            impressionProperties: Z,
                            children: (0, i.jsx)(I.Z, {
                                onBack: R,
                                onClose: E,
                                isSlideReady: x === f._m.JOIN_GUILD
                            })
                        })
                    ]
                })
            })
        })
    });
}
