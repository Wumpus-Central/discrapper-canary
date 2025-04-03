n.d(t, { Z: () => E }), n(47120);
var r = n(200651),
    o = n(192379),
    i = n(512722),
    l = n.n(i),
    a = n(990547),
    s = n(481060),
    c = n(110924),
    u = n(626135),
    _ = n(215292),
    d = n(382086),
    p = n(996453),
    m = n(446706),
    f = n(867581),
    N = n(675999),
    I = n(981631),
    T = n(98078);
function E(e) {
    let { transitionState: t, initialSlide: n = N._m.GUILD_TEMPLATES, onSuccess: i, onClose: E, onSlideChange: S, hasJoinButton: O } = e,
        [C, b] = o.useState(n),
        g = (0, c.Z)(C),
        [L, D] = o.useState(null),
        [h, A] = o.useState(null),
        [x, v] = o.useState(null),
        [w, U] = o.useState(!1);
    o.useEffect(() => {
        b(n);
    }, [b, n]),
        o.useEffect(() => {
            C !== g && S(C);
        }, [S, C, g]);
    let y = o.useCallback((e) => {
            b(N._m.CREATION_INTENT),
                A(e),
                u.default.track(I.rMx.GUILD_TEMPLATE_SELECTED, {
                    template_name: e.id,
                    template_code: e.code
                });
        }, []),
        G = o.useCallback((e) => {
            U(e === N.lr.COMMUNITY), b(N._m.CUSTOMIZE_GUILD);
        }, []),
        j = o.useCallback(() => b(N._m.JOIN_GUILD), [b]),
        P = o.useCallback(() => {
            if (C === N._m.CUSTOMIZE_GUILD) return void b(N._m.CREATION_INTENT);
            b(N._m.GUILD_TEMPLATES), A(null);
        }, [C]),
        M = o.useCallback(
            (e) => {
                v(e), i(e);
            },
            [i, v]
        ),
        k = o.useCallback(() => {
            l()(null != x, 'handleSuccess called before onGuildCreated'), i(x);
        }, [i, x]),
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
                            id: N._m.GUILD_TEMPLATES,
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
                            id: N._m.CREATION_INTENT,
                            impressionName: a.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                            impressionProperties: R,
                            children: (0, r.jsx)(d.Z, {
                                onClose: E,
                                onBack: P,
                                onCreationIntentChosen: G
                            })
                        }),
                        (0, r.jsx)(s.Mi4, {
                            id: N._m.CUSTOMIZE_GUILD,
                            impressionName: a.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                            impressionProperties: R,
                            children: (0, r.jsx)(p.Z, {
                                guildTemplate: h,
                                onGuildCreated: M,
                                onClose: E,
                                onBack: P,
                                isSlideReady: L === N._m.CUSTOMIZE_GUILD,
                                isCommunity: w
                            })
                        }),
                        (0, r.jsx)(s.Mi4, {
                            id: N._m.CHANNEL_PROMPT,
                            impressionName: a.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                            impressionProperties: R,
                            children: (0, r.jsx)(_.Z, {
                                createdGuildId: x,
                                onClose: E,
                                onChannelPromptCompleted: k,
                                isSlideReady: L === N._m.CHANNEL_PROMPT
                            })
                        }),
                        (0, r.jsx)(s.Mi4, {
                            id: N._m.JOIN_GUILD,
                            impressionName: a.ImpressionNames.GUILD_ADD_JOIN,
                            impressionProperties: R,
                            children: (0, r.jsx)(f.Z, {
                                onBack: P,
                                onClose: E,
                                isSlideReady: L === N._m.JOIN_GUILD
                            })
                        })
                    ]
                })
            })
        })
    });
}
