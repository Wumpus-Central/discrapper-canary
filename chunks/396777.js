n.d(t, { A: () => I }), n(896048);
var r = n(627968),
    l = n(64700),
    a = n(284009),
    o = n.n(a),
    i = n(110259),
    c = n(397927),
    s = n(475743),
    u = n(954571),
    d = n(362311),
    p = n(230801),
    f = n(424912),
    b = n(468820),
    _ = n(803585),
    m = n(819638),
    S = n(652215),
    N = n(534093);
function I(e) {
    let {
            transitionState: t,
            initialSlide: n = m.oS.GUILD_TEMPLATES,
            onSuccess: a,
            onClose: I,
            onSlideChange: O,
            hasJoinButton: T,
        } = e,
        [E, g] = l.useState(n),
        A = (0, s.A)(E),
        [C, D] = l.useState(null),
        [y, w] = l.useState(null),
        [j, v] = l.useState(null),
        [L, h] = l.useState(!1);
    l.useEffect(() => {
        g(n);
    }, [g, n]),
        l.useEffect(() => {
            E !== A && O(E);
        }, [O, E, A]);
    let x = l.useCallback((e) => {
            g(m.oS.CREATION_INTENT),
                w(e),
                u.default.track(S.HAw.GUILD_TEMPLATE_SELECTED, {
                    template_name: e.id,
                    template_code: e.code,
                });
        }, []),
        U = l.useCallback((e) => {
            h(e === m.IR.COMMUNITY), g(m.oS.CUSTOMIZE_GUILD);
        }, []),
        G = l.useCallback(() => g(m.oS.JOIN_GUILD), [g]),
        P = l.useCallback(() => {
            E === m.oS.CUSTOMIZE_GUILD ? g(m.oS.CREATION_INTENT) : (g(m.oS.GUILD_TEMPLATES), w(null));
        }, [E]),
        k = l.useCallback(
            (e) => {
                v(e), a(e);
            },
            [a, v],
        ),
        R = l.useCallback(() => {
            o()(null != j, "handleSuccess called before onGuildCreated"), a(j);
        }, [a, j]),
        M = { impression_group: i.ImpressionGroups.GUILD_ADD_FLOW },
        q = (0, c.rdh)(c.LU0.modules.modal.WIDTH_SMALL);
    return (0, r.jsx)("div", {
        children: (0, r.jsx)(c.EOs, {
            "data-migration-pending": !0,
            transitionState: t,
            disableTrack: !0,
            parentComponent: "CreateGuildModal",
            children: (0, r.jsx)("div", {
                className: N.k,
                children: (0, r.jsxs)(c.tN_, {
                    activeSlide: E,
                    width: q,
                    onSlideReady: (e) => D(e),
                    children: [
                        (0, r.jsx)(c.q7S, {
                            id: m.oS.GUILD_TEMPLATES,
                            impressionName: i.ImpressionNames.GUILD_ADD_LANDING,
                            impressionProperties: M,
                            children: (0, r.jsx)(b.A, {
                                isNewUser: !1,
                                onJoin: T ? G : void 0,
                                onChooseTemplate: x,
                                onClose: I,
                            }),
                        }),
                        (0, r.jsx)(c.q7S, {
                            id: m.oS.CREATION_INTENT,
                            impressionName: i.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                            impressionProperties: M,
                            children: (0, r.jsx)(p.A, {
                                onClose: I,
                                onBack: P,
                                onCreationIntentChosen: U,
                            }),
                        }),
                        (0, r.jsx)(c.q7S, {
                            id: m.oS.CUSTOMIZE_GUILD,
                            impressionName: i.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                            impressionProperties: M,
                            children: (0, r.jsx)(f.A, {
                                guildTemplate: y,
                                onGuildCreated: k,
                                onClose: I,
                                onBack: P,
                                isSlideReady: C === m.oS.CUSTOMIZE_GUILD,
                                isCommunity: L,
                            }),
                        }),
                        (0, r.jsx)(c.q7S, {
                            id: m.oS.CHANNEL_PROMPT,
                            impressionName: i.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                            impressionProperties: M,
                            children: (0, r.jsx)(d.A, {
                                createdGuildId: j,
                                onClose: I,
                                onChannelPromptCompleted: R,
                                isSlideReady: C === m.oS.CHANNEL_PROMPT,
                            }),
                        }),
                        (0, r.jsx)(c.q7S, {
                            id: m.oS.JOIN_GUILD,
                            impressionName: i.ImpressionNames.GUILD_ADD_JOIN,
                            impressionProperties: M,
                            children: (0, r.jsx)(_.A, {
                                onBack: P,
                                onClose: I,
                                isSlideReady: C === m.oS.JOIN_GUILD,
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
