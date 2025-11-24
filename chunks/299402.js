n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    o = n(473749),
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
    I = n(675999),
    N = n(981631),
    T = n(719889);
function O(e) {
    let {
            transitionState: t,
            initialSlide: n = I._m.GUILD_TEMPLATES,
            onSuccess: i,
            onClose: O,
            onSlideChange: S,
            hasJoinButton: E,
        } = e,
        [b, g] = o.useState(n),
        C = (0, c.Z)(b),
        [h, x] = o.useState(null),
        [w, L] = o.useState(null),
        [y, v] = o.useState(null),
        [D, j] = o.useState(!1);
    o.useEffect(() => {
        g(n);
    }, [g, n]),
        o.useEffect(() => {
            b !== C && S(b);
        }, [S, b, C]);
    let A = o.useCallback((e) => {
            g(I._m.CREATION_INTENT),
                L(e),
                u.default.track(N.rMx.GUILD_TEMPLATE_SELECTED, {
                    template_name: e.id,
                    template_code: e.code,
                });
        }, []),
        U = o.useCallback((e) => {
            j(e === I.lr.COMMUNITY), g(I._m.CUSTOMIZE_GUILD);
        }, []),
        G = o.useCallback(() => g(I._m.JOIN_GUILD), [g]),
        P = o.useCallback(() => {
            if (b === I._m.CUSTOMIZE_GUILD) return void g(I._m.CREATION_INTENT);
            g(I._m.GUILD_TEMPLATES), L(null);
        }, [b]),
        M = o.useCallback(
            (e) => {
                v(e), i(e);
            },
            [i, v],
        ),
        k = o.useCallback(() => {
            l()(null != y, "handleSuccess called before onGuildCreated"), i(y);
        }, [i, y]),
        R = { impression_group: a.ImpressionGroups.GUILD_ADD_FLOW },
        Z = (0, s.dQu)(s.TVs.modules.modal.WIDTH_SMALL);
    return (0, r.jsx)("div", {
        children: (0, r.jsx)(s.Y0X, {
            "data-migration-pending": !0,
            transitionState: t,
            disableTrack: !0,
            parentComponent: "CreateGuildModal",
            children: (0, r.jsx)("div", {
                className: T.container,
                children: (0, r.jsxs)(s.MyZ, {
                    activeSlide: b,
                    width: Z,
                    onSlideReady: (e) => x(e),
                    children: [
                        (0, r.jsx)(s.Mi4, {
                            id: I._m.GUILD_TEMPLATES,
                            impressionName: a.ImpressionNames.GUILD_ADD_LANDING,
                            impressionProperties: R,
                            children: (0, r.jsx)(m.Z, {
                                isNewUser: !1,
                                onJoin: E ? G : void 0,
                                onChooseTemplate: A,
                                onClose: O,
                            }),
                        }),
                        (0, r.jsx)(s.Mi4, {
                            id: I._m.CREATION_INTENT,
                            impressionName: a.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                            impressionProperties: R,
                            children: (0, r.jsx)(d.Z, {
                                onClose: O,
                                onBack: P,
                                onCreationIntentChosen: U,
                            }),
                        }),
                        (0, r.jsx)(s.Mi4, {
                            id: I._m.CUSTOMIZE_GUILD,
                            impressionName: a.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                            impressionProperties: R,
                            children: (0, r.jsx)(p.Z, {
                                guildTemplate: w,
                                onGuildCreated: M,
                                onClose: O,
                                onBack: P,
                                isSlideReady: h === I._m.CUSTOMIZE_GUILD,
                                isCommunity: D,
                            }),
                        }),
                        (0, r.jsx)(s.Mi4, {
                            id: I._m.CHANNEL_PROMPT,
                            impressionName: a.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                            impressionProperties: R,
                            children: (0, r.jsx)(_.Z, {
                                createdGuildId: y,
                                onClose: O,
                                onChannelPromptCompleted: k,
                                isSlideReady: h === I._m.CHANNEL_PROMPT,
                            }),
                        }),
                        (0, r.jsx)(s.Mi4, {
                            id: I._m.JOIN_GUILD,
                            impressionName: a.ImpressionNames.GUILD_ADD_JOIN,
                            impressionProperties: R,
                            children: (0, r.jsx)(f.Z, {
                                onBack: P,
                                onClose: O,
                                isSlideReady: h === I._m.JOIN_GUILD,
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
