n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(110259),
    o = n(602853),
    c = n(827734),
    u = n(935462),
    d = n(430690),
    _ = n(475743),
    p = n(954571),
    f = n(362311),
    m = n(230801),
    I = n(424912),
    N = n(468820),
    h = n(803585),
    C = n(819638),
    A = n(652215),
    S = n(70082);
function E(e) {
    let {
            transitionState: t,
            initialSlide: n = C.oS.GUILD_TEMPLATES,
            onSuccess: a,
            onClose: E,
            onSlideChange: g,
            hasJoinButton: D,
        } = e,
        [T, L] = l.useState(n),
        x = (0, _.A)(T),
        [U, w] = l.useState(null),
        [b, G] = l.useState(null),
        [O, v] = l.useState(null),
        [R, j] = l.useState(!1);
    l.useEffect(() => {
        L(n);
    }, [L, n]),
        l.useEffect(() => {
            T !== x && g(T);
        }, [g, T, x]);
    let k = l.useCallback((e) => {
            L(C.oS.CREATION_INTENT),
                G(e),
                p.default.track(A.HAw.GUILD_TEMPLATE_SELECTED, { template_name: e.id, template_code: e.code });
        }, []),
        y = l.useCallback((e) => {
            j(e === C.IR.COMMUNITY), L(C.oS.CUSTOMIZE_GUILD);
        }, []),
        M = l.useCallback(() => L(C.oS.JOIN_GUILD), [L]),
        P = l.useCallback(() => {
            T === C.oS.CUSTOMIZE_GUILD ? L(C.oS.CREATION_INTENT) : (L(C.oS.GUILD_TEMPLATES), G(null));
        }, [T]),
        F = l.useCallback(
            (e) => {
                v(e), a(e);
            },
            [a, v],
        ),
        B = l.useCallback(() => {
            r()(null != O, "handleSuccess called before onGuildCreated"), a(O);
        }, [a, O]),
        $ = { impression_group: s.ImpressionGroups.GUILD_ADD_FLOW },
        q = (0, o.r)(c.A.modules.modal.WIDTH_SMALL);
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(u.EO, {
            "data-migration-pending": !0,
            transitionState: t,
            disableTrack: !0,
            parentComponent: "CreateGuildModal",
            children: (0, i.jsx)("div", {
                className: S.k,
                children: (0, i.jsxs)(d.t, {
                    activeSlide: T,
                    width: q,
                    onSlideReady: (e) => w(e),
                    children: [
                        (0, i.jsx)(d.q, {
                            id: C.oS.GUILD_TEMPLATES,
                            impressionName: s.ImpressionNames.GUILD_ADD_LANDING,
                            impressionProperties: $,
                            children: (0, i.jsx)(N.A, {
                                isNewUser: !1,
                                onJoin: D ? M : void 0,
                                onChooseTemplate: k,
                                onClose: E,
                            }),
                        }),
                        (0, i.jsx)(d.q, {
                            id: C.oS.CREATION_INTENT,
                            impressionName: s.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                            impressionProperties: $,
                            children: (0, i.jsx)(m.A, { onClose: E, onBack: P, onCreationIntentChosen: y }),
                        }),
                        (0, i.jsx)(d.q, {
                            id: C.oS.CUSTOMIZE_GUILD,
                            impressionName: s.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                            impressionProperties: $,
                            children: (0, i.jsx)(I.A, {
                                guildTemplate: b,
                                onGuildCreated: F,
                                onClose: E,
                                onBack: P,
                                isSlideReady: U === C.oS.CUSTOMIZE_GUILD,
                                isCommunity: R,
                            }),
                        }),
                        (0, i.jsx)(d.q, {
                            id: C.oS.CHANNEL_PROMPT,
                            impressionName: s.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                            impressionProperties: $,
                            children: (0, i.jsx)(f.A, {
                                createdGuildId: O,
                                onClose: E,
                                onChannelPromptCompleted: B,
                                isSlideReady: U === C.oS.CHANNEL_PROMPT,
                            }),
                        }),
                        (0, i.jsx)(d.q, {
                            id: C.oS.JOIN_GUILD,
                            impressionName: s.ImpressionNames.GUILD_ADD_JOIN,
                            impressionProperties: $,
                            children: (0, i.jsx)(h.A, { onBack: P, onClose: E, isSlideReady: U === C.oS.JOIN_GUILD }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
