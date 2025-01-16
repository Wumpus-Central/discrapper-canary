n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    o = n.n(r),
    a = n(990547),
    s = n(481060),
    c = n(110924),
    u = n(626135),
    d = n(215292),
    _ = n(382086),
    m = n(996453),
    p = n(446706),
    I = n(867581),
    f = n(675999),
    N = n(981631),
    T = n(121828);
function C(e) {
    let { transitionState: t, initialSlide: n = f._m.GUILD_TEMPLATES, onSuccess: r, onClose: C, onSlideChange: E, hasJoinButton: S } = e,
        [L, A] = l.useState(n),
        D = (0, c.Z)(L),
        [U, h] = l.useState(null),
        [g, x] = l.useState(null),
        [G, O] = l.useState(null),
        [M, w] = l.useState(!1);
    l.useEffect(() => {
        A(n);
    }, [A, n]),
        l.useEffect(() => {
            L !== D && E(L);
        }, [E, L, D]);
    let v = l.useCallback((e) => {
            A(f._m.CREATION_INTENT),
                x(e),
                u.default.track(N.rMx.GUILD_TEMPLATE_SELECTED, {
                    template_name: e.id,
                    template_code: e.code
                });
        }, []),
        R = l.useCallback((e) => {
            w(e === f.lr.COMMUNITY), A(f._m.CUSTOMIZE_GUILD);
        }, []),
        k = l.useCallback(() => A(f._m.JOIN_GUILD), [A]),
        b = l.useCallback(() => {
            if (L === f._m.CUSTOMIZE_GUILD) {
                A(f._m.CREATION_INTENT);
                return;
            }
            A(f._m.GUILD_TEMPLATES), x(null);
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
        Z = { impression_group: a.ImpressionGroups.GUILD_ADD_FLOW };
    return (0, i.jsx)('div', {
        children: (0, i.jsx)(s.ModalRoot, {
            transitionState: t,
            disableTrack: !0,
            children: (0, i.jsx)('div', {
                className: T.container,
                children: (0, i.jsxs)(s.Slides, {
                    activeSlide: L,
                    width: 440,
                    onSlideReady: (e) => h(e),
                    children: [
                        (0, i.jsx)(s.Slide, {
                            id: f._m.GUILD_TEMPLATES,
                            impressionName: a.ImpressionNames.GUILD_ADD_LANDING,
                            impressionProperties: Z,
                            children: (0, i.jsx)(p.Z, {
                                isNewUser: !1,
                                onJoin: S ? k : void 0,
                                onChooseTemplate: v,
                                onClose: C
                            })
                        }),
                        (0, i.jsx)(s.Slide, {
                            id: f._m.CREATION_INTENT,
                            impressionName: a.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                            impressionProperties: Z,
                            children: (0, i.jsx)(_.Z, {
                                onClose: C,
                                onBack: b,
                                onCreationIntentChosen: R
                            })
                        }),
                        (0, i.jsx)(s.Slide, {
                            id: f._m.CUSTOMIZE_GUILD,
                            impressionName: a.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                            impressionProperties: Z,
                            children: (0, i.jsx)(m.Z, {
                                guildTemplate: g,
                                onGuildCreated: j,
                                onClose: C,
                                onBack: b,
                                isSlideReady: U === f._m.CUSTOMIZE_GUILD,
                                isCommunity: M
                            })
                        }),
                        (0, i.jsx)(s.Slide, {
                            id: f._m.CHANNEL_PROMPT,
                            impressionName: a.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                            impressionProperties: Z,
                            children: (0, i.jsx)(d.Z, {
                                createdGuildId: G,
                                onClose: C,
                                onChannelPromptCompleted: P,
                                isSlideReady: U === f._m.CHANNEL_PROMPT
                            })
                        }),
                        (0, i.jsx)(s.Slide, {
                            id: f._m.JOIN_GUILD,
                            impressionName: a.ImpressionNames.GUILD_ADD_JOIN,
                            impressionProperties: Z,
                            children: (0, i.jsx)(I.Z, {
                                onBack: b,
                                onClose: C,
                                isSlideReady: U === f._m.JOIN_GUILD
                            })
                        })
                    ]
                })
            })
        })
    });
}
