s.d(t, { A: () => N });
var n = s(627968),
    l = s(64700),
    i = s(922016),
    r = s(834730),
    u = s(939249),
    a = s(789645),
    o = s(821609),
    c = s(408278),
    E = s(365199),
    d = s(743368),
    A = s(246356),
    T = s(507107),
    S = s(3738),
    C = s(347135),
    _ = s(646917),
    m = s(651892),
    x = s(576761),
    Q = s(73473),
    h = s(270045),
    R = s(442734),
    L = s(646764),
    f = s(617986),
    I = s(190107),
    g = s(375708),
    v = s(678413);
function N(e) {
    let { quest: t, isFocused: s, onAcceptQuest: N, isEnrolling: j } = e,
        U = (0, S.A9)(t, T.uF.QUEST_LIVE_STREAM, I.rE.QUEST_CHANNEL_CALL_HEADER),
        p = (0, _.z)(),
        M = (0, C.SD)(t, p) && (p === x.MA.NITRO || p === x.MA.CREPE),
        b = null != t.config.ctaConfig ? (0, m.Jx)(t.config) : null,
        [y, F] = l.useState(!1),
        q = l.useRef(null),
        V = l.useCallback((e) => {
            e.stopPropagation(), F((e) => !e);
        }, []),
        H = l.useCallback(() => {
            F(!1);
        }, []),
        D = l.useCallback(() => {
            (0, f.navigateToQuestHome)({ fromContent: T.uF.QUEST_LIVE_STREAM, questId: t.id }), F(!1);
        }, [t.id]),
        k = l.useCallback(() => {
            null != b && window.open(b, "_blank", "noopener,noreferrer");
        }, [b]);
    return (0, n.jsx)(Q.R, {
        questOrQuests: t,
        questContent: T.uF.QUEST_LIVE_STREAM,
        sourceQuestContent: T.uF.QUEST_LIVE_STREAM,
        children: () =>
            (0, n.jsxs)("div", {
                className: v.M0,
                ref: q,
                children: [
                    (0, n.jsx)(L.A, {
                        className: v.Qq,
                        style: { width: 32, height: 32 },
                        autoplay: s,
                        quest: t,
                        questContent: T.uF.QUEST_LIVE_STREAM,
                        sourceQuestContent: T.uF.QUEST_LIVE_STREAM,
                    }),
                    (0, n.jsx)(i.Y, {
                        targetElementRef: q,
                        shouldShow: y,
                        position: "bottom",
                        align: "left",
                        spacing: 4,
                        animation: i.Y.Animation.NONE,
                        onRequestClose: H,
                        renderPopout: () =>
                            (0, n.jsx)(A.A, {
                                children: (0, n.jsx)(Q.R, {
                                    overrideVisibility: !0,
                                    questOrQuests: t,
                                    questContent: T.uF.QUEST_LIVE_STREAM,
                                    sourceQuestContent: T.uF.QUEST_LIVE_STREAM,
                                    children: () =>
                                        (0, n.jsxs)("div", {
                                            className: v.g5,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: v.j$,
                                                    children: [
                                                        (0, n.jsx)(r.E, {
                                                            variant: "text-md/semibold",
                                                            color: "text-default",
                                                            children: t.config.messages.questName,
                                                        }),
                                                        (0, n.jsx)(u.D, {
                                                            className: v.We,
                                                            "aria-label": g.intl.string(g.t.cpT0Cq),
                                                            onClick: H,
                                                            children: (0, n.jsx)(a.P, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: v.ek,
                                                    children: [
                                                        (0, n.jsx)(L.A, {
                                                            className: v.Ul,
                                                            style: { width: 48, height: 48 },
                                                            autoplay: !0,
                                                            quest: t,
                                                            questContent: T.uF.QUEST_LIVE_STREAM,
                                                            sourceQuestContent: T.uF.QUEST_LIVE_STREAM,
                                                        }),
                                                        (0, n.jsx)(r.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-default",
                                                            children: U,
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsx)(o.$, {
                                                    variant: "secondary",
                                                    size: "md",
                                                    fullWidth: !0,
                                                    text: g.intl.string(g.t["th2+0j"]),
                                                    onClick: D,
                                                }),
                                            ],
                                        }),
                                }),
                            }),
                        children: () =>
                            (0, n.jsx)("div", {
                                className: v.zh,
                                children: (0, n.jsx)(o.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: g.intl.string(g.t["h/qYF6"]),
                                    onClick: V,
                                }),
                            }),
                    }),
                    (0, n.jsxs)("div", {
                        className: v.KW,
                        children: [
                            (0, n.jsx)(r.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: v.I4,
                                children: g.intl.string(g.t.o6FLcF),
                            }),
                            (0, n.jsx)("span", { className: v.me, "aria-hidden": !0, children: "\xb7" }),
                            (0, n.jsxs)("div", {
                                className: v.VP,
                                children: [
                                    (0, n.jsx)(r.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: v.h_,
                                        children: U,
                                    }),
                                    M && (0, n.jsx)(R.e, { questId: t.id, orbMultiplierEligibility: p }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(h.C, {
                        questContent: T.uF.QUEST_LIVE_STREAM,
                        sourceQuestContent: T.uF.QUEST_LIVE_STREAM,
                        quest: t,
                        preventIdle: !0,
                        shouldShowDisclosure: !0,
                        children: (e) =>
                            (0, n.jsx)(c.K, {
                                ...e,
                                variant: "secondary",
                                size: "sm",
                                icon: E.j,
                                "aria-label": g.intl.string(g.t.DEoVWZ),
                            }),
                    }),
                    null != b &&
                        (0, n.jsx)(c.K, {
                            variant: "secondary",
                            size: "sm",
                            icon: d.W,
                            "aria-label": t.config.ctaConfig.buttonLabel,
                            onClick: k,
                        }),
                    (0, n.jsx)("div", {
                        className: v.lI,
                        children: (0, n.jsx)(o.$, {
                            variant: "primary",
                            size: "sm",
                            text: g.intl.string(g.t.l7E81v),
                            onClick: N,
                            loading: j,
                        }),
                    }),
                ],
            }),
    });
}
