n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(110259),
    o = n(397927),
    c = n(475743),
    _ = n(954571),
    u = n(362311),
    d = n(230801),
    I = n(424912),
    p = n(468820),
    N = n(803585),
    S = n(819638),
    m = n(652215),
    A = n(64114);
function T(e) {
    let {
            transitionState: t,
            initialSlide: n = S.oS.GUILD_TEMPLATES,
            onSuccess: r,
            onClose: T,
            onSlideChange: E,
            hasJoinButton: C,
        } = e,
        [f, D] = l.useState(n),
        L = (0, c.A)(f),
        [g, U] = l.useState(null),
        [G, O] = l.useState(null),
        [w, x] = l.useState(null),
        [h, R] = l.useState(!1);
    l.useEffect(() => {
        D(n);
    }, [D, n]),
        l.useEffect(() => {
            f !== L && E(f);
        }, [E, f, L]);
    let b = l.useCallback((e) => {
            D(S.oS.CREATION_INTENT),
                O(e),
                _.default.track(m.HAw.GUILD_TEMPLATE_SELECTED, { template_name: e.id, template_code: e.code });
        }, []),
        j = l.useCallback((e) => {
            R(e === S.IR.COMMUNITY), D(S.oS.CUSTOMIZE_GUILD);
        }, []),
        k = l.useCallback(() => D(S.oS.JOIN_GUILD), [D]),
        v = l.useCallback(() => {
            f === S.oS.CUSTOMIZE_GUILD ? D(S.oS.CREATION_INTENT) : (D(S.oS.GUILD_TEMPLATES), O(null));
        }, [f]),
        M = l.useCallback(
            (e) => {
                x(e), r(e);
            },
            [r, x],
        ),
        y = l.useCallback(() => {
            s()(null != w, "handleSuccess called before onGuildCreated"), r(w);
        }, [r, w]),
        P = { impression_group: a.ImpressionGroups.GUILD_ADD_FLOW },
        B = (0, o.rdh)(o.LU0.modules.modal.WIDTH_SMALL);
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(o.EOs, {
            "data-migration-pending": !0,
            transitionState: t,
            disableTrack: !0,
            parentComponent: "CreateGuildModal",
            children: (0, i.jsx)("div", {
                className: A.k,
                children: (0, i.jsxs)(o.tN_, {
                    activeSlide: f,
                    width: B,
                    onSlideReady: (e) => U(e),
                    children: [
                        (0, i.jsx)(o.q7S, {
                            id: S.oS.GUILD_TEMPLATES,
                            impressionName: a.ImpressionNames.GUILD_ADD_LANDING,
                            impressionProperties: P,
                            children: (0, i.jsx)(p.A, {
                                isNewUser: !1,
                                onJoin: C ? k : void 0,
                                onChooseTemplate: b,
                                onClose: T,
                            }),
                        }),
                        (0, i.jsx)(o.q7S, {
                            id: S.oS.CREATION_INTENT,
                            impressionName: a.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                            impressionProperties: P,
                            children: (0, i.jsx)(d.A, { onClose: T, onBack: v, onCreationIntentChosen: j }),
                        }),
                        (0, i.jsx)(o.q7S, {
                            id: S.oS.CUSTOMIZE_GUILD,
                            impressionName: a.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                            impressionProperties: P,
                            children: (0, i.jsx)(I.A, {
                                guildTemplate: G,
                                onGuildCreated: M,
                                onClose: T,
                                onBack: v,
                                isSlideReady: g === S.oS.CUSTOMIZE_GUILD,
                                isCommunity: h,
                            }),
                        }),
                        (0, i.jsx)(o.q7S, {
                            id: S.oS.CHANNEL_PROMPT,
                            impressionName: a.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                            impressionProperties: P,
                            children: (0, i.jsx)(u.A, {
                                createdGuildId: w,
                                onClose: T,
                                onChannelPromptCompleted: y,
                                isSlideReady: g === S.oS.CHANNEL_PROMPT,
                            }),
                        }),
                        (0, i.jsx)(o.q7S, {
                            id: S.oS.JOIN_GUILD,
                            impressionName: a.ImpressionNames.GUILD_ADD_JOIN,
                            impressionProperties: P,
                            children: (0, i.jsx)(N.A, { onBack: v, onClose: T, isSlideReady: g === S.oS.JOIN_GUILD }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
