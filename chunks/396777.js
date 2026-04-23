n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(110259),
    o = n(602853),
    c = n(827734),
    d = n(935462),
    u = n(430690),
    p = n(475743),
    m = n(954571),
    x = n(362311),
    g = n(230801),
    h = n(424912),
    C = n(468820),
    N = n(803585),
    b = n(819638),
    j = n(652215),
    E = n(70082);
function A(e) {
    let {
            transitionState: t,
            initialSlide: n = b.oS.GUILD_TEMPLATES,
            onSuccess: s,
            onClose: A,
            onSlideChange: v,
            hasJoinButton: S,
        } = e,
        [I, f] = l.useState(n),
        y = (0, p.A)(I),
        [D, T] = l.useState(null),
        [k, L] = l.useState(null),
        [_, U] = l.useState(null),
        [w, O] = l.useState(!1);
    l.useEffect(() => {
        f(n);
    }, [f, n]),
        l.useEffect(() => {
            I !== y && v(I);
        }, [v, I, y]);
    let P = l.useCallback((e) => {
            f(b.oS.CREATION_INTENT),
                L(e),
                m.default.track(j.HAw.GUILD_TEMPLATE_SELECTED, { template_name: e.id, template_code: e.code });
        }, []),
        G = l.useCallback((e) => {
            O(e === b.IR.COMMUNITY), f(b.oS.CUSTOMIZE_GUILD);
        }, []),
        M = l.useCallback(() => f(b.oS.JOIN_GUILD), [f]),
        R = l.useCallback(() => {
            I === b.oS.CUSTOMIZE_GUILD ? f(b.oS.CREATION_INTENT) : (f(b.oS.GUILD_TEMPLATES), L(null));
        }, [I]),
        B = l.useCallback(
            (e) => {
                U(e), s(e);
            },
            [s, U],
        ),
        K = l.useCallback(() => {
            a()(null != _, "handleSuccess called before onGuildCreated"), s(_);
        }, [s, _]),
        q = { impression_group: r.ImpressionGroups.GUILD_ADD_FLOW },
        V = (0, o.r)(c.A.modules.modal.WIDTH_SMALL);
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(d.EO, {
            "data-migration-pending": !0,
            transitionState: t,
            disableTrack: !0,
            parentComponent: "CreateGuildModal",
            children: (0, i.jsx)("div", {
                className: E.k,
                children: (0, i.jsxs)(u.t, {
                    activeSlide: I,
                    width: V,
                    onSlideReady: (e) => T(e),
                    children: [
                        (0, i.jsx)(u.q, {
                            id: b.oS.GUILD_TEMPLATES,
                            impressionName: r.ImpressionNames.GUILD_ADD_LANDING,
                            impressionProperties: q,
                            children: (0, i.jsx)(C.A, {
                                isNewUser: !1,
                                onJoin: S ? M : void 0,
                                onChooseTemplate: P,
                                onClose: A,
                            }),
                        }),
                        (0, i.jsx)(u.q, {
                            id: b.oS.CREATION_INTENT,
                            impressionName: r.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                            impressionProperties: q,
                            children: (0, i.jsx)(g.A, { onClose: A, onBack: R, onCreationIntentChosen: G }),
                        }),
                        (0, i.jsx)(u.q, {
                            id: b.oS.CUSTOMIZE_GUILD,
                            impressionName: r.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                            impressionProperties: q,
                            children: (0, i.jsx)(h.A, {
                                guildTemplate: k,
                                onGuildCreated: B,
                                onClose: A,
                                onBack: R,
                                isSlideReady: D === b.oS.CUSTOMIZE_GUILD,
                                isCommunity: w,
                            }),
                        }),
                        (0, i.jsx)(u.q, {
                            id: b.oS.CHANNEL_PROMPT,
                            impressionName: r.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                            impressionProperties: q,
                            children: (0, i.jsx)(x.A, {
                                createdGuildId: _,
                                onClose: A,
                                onChannelPromptCompleted: K,
                                isSlideReady: D === b.oS.CHANNEL_PROMPT,
                            }),
                        }),
                        (0, i.jsx)(u.q, {
                            id: b.oS.JOIN_GUILD,
                            impressionName: r.ImpressionNames.GUILD_ADD_JOIN,
                            impressionProperties: q,
                            children: (0, i.jsx)(N.A, { onBack: R, onClose: A, isSlideReady: D === b.oS.JOIN_GUILD }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
