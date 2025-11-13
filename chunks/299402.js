n.d(t, { Z: () => O }), n(388685);
var r = n(951288),
    o = n(647438),
    l = n(512722),
    i = n.n(l),
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
            onSuccess: l,
            onClose: O,
            onSlideChange: S,
            hasJoinButton: E,
        } = e,
        [b, C] = o.useState(n),
        h = (0, c.Z)(b),
        [g, x] = o.useState(null),
        [w, L] = o.useState(null),
        [y, v] = o.useState(null),
        [D, j] = o.useState(!1);
    o.useEffect(() => {
        C(n);
    }, [C, n]),
        o.useEffect(() => {
            b !== h && S(b);
        }, [S, b, h]);
    let A = o.useCallback((e) => {
            C(I._m.CREATION_INTENT),
                L(e),
                u.default.track(N.rMx.GUILD_TEMPLATE_SELECTED, {
                    template_name: e.id,
                    template_code: e.code,
                });
        }, []),
        U = o.useCallback((e) => {
            j(e === I.lr.COMMUNITY), C(I._m.CUSTOMIZE_GUILD);
        }, []),
        G = o.useCallback(() => C(I._m.JOIN_GUILD), [C]),
        P = o.useCallback(() => {
            if (b === I._m.CUSTOMIZE_GUILD) return void C(I._m.CREATION_INTENT);
            C(I._m.GUILD_TEMPLATES), L(null);
        }, [b]),
        M = o.useCallback(
            (e) => {
                v(e), l(e);
            },
            [l, v],
        ),
        k = o.useCallback(() => {
            i()(null != y, "handleSuccess called before onGuildCreated"), l(y);
        }, [l, y]),
        R = { impression_group: a.ImpressionGroups.GUILD_ADD_FLOW },
        Z = (0, s.dQu)(s.TVs.modules.modal.WIDTH_SMALL);
    return (0, r.jsx)("div", {
        children: (0, r.jsx)(s.Y0X, {
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
                                isSlideReady: g === I._m.CUSTOMIZE_GUILD,
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
                                isSlideReady: g === I._m.CHANNEL_PROMPT,
                            }),
                        }),
                        (0, r.jsx)(s.Mi4, {
                            id: I._m.JOIN_GUILD,
                            impressionName: a.ImpressionNames.GUILD_ADD_JOIN,
                            impressionProperties: R,
                            children: (0, r.jsx)(f.Z, {
                                onBack: P,
                                onClose: O,
                                isSlideReady: g === I._m.JOIN_GUILD,
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
