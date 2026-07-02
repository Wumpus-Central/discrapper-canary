s.d(t, { A: () => U });
var n = s(627968),
    l = s(64700),
    i = s(922016),
    u = s(834730),
    a = s(939249),
    r = s(789645),
    o = s(821609),
    E = s(408278),
    c = s(365199),
    d = s(743368),
    A = s(246356),
    S = s(24001),
    T = s(3738),
    _ = s(347135),
    C = s(646917),
    m = s(590202),
    Q = s(651892),
    x = s(576761),
    h = s(73473),
    L = s(270045),
    R = s(442734),
    I = s(646764),
    g = s(617986),
    v = s(190107),
    N = s(375708),
    f = s(305421);
function U(e) {
    let { quest: t, isFocused: s, onAcceptQuest: U, isEnrolling: j } = e,
        M = (0, T.A9)(t, S.uF.QUEST_LIVE_STREAM, v.rE.QUEST_CHANNEL_CALL_HEADER),
        p = (0, C.z)(),
        b = (0, _.SD)(t, p) && (p === x.MA.NITRO || p === x.MA.CREPE),
        F = null != t.config.ctaConfig ? (0, Q.Jx)(t.config) : null,
        y = (0, _.do)({
            quest: t,
            content: S.uF.QUEST_LIVE_STREAM,
            ctaContent: m.Cy.OPEN_GAME_LINK,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
        }),
        [q, V] = l.useState(!1),
        D = l.useRef(null),
        O = l.useCallback((e) => {
            e.stopPropagation(), V((e) => !e);
        }, []),
        P = l.useCallback(() => {
            V(!1);
        }, []),
        k = l.useCallback(() => {
            (0, g.navigateToQuestHome)({ fromContent: S.uF.QUEST_LIVE_STREAM, questId: t.id }), V(!1);
        }, [t.id]);
    return (0, n.jsx)(h.R, {
        questOrQuests: t,
        questContent: S.uF.QUEST_LIVE_STREAM,
        sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
        children: () =>
            (0, n.jsxs)("div", {
                className: f.M0,
                ref: D,
                children: [
                    (0, n.jsx)(I.A, {
                        className: f.Qq,
                        style: { width: 32, height: 32 },
                        autoplay: s,
                        quest: t,
                        questContent: S.uF.QUEST_LIVE_STREAM,
                        sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
                    }),
                    (0, n.jsx)(i.Y, {
                        targetElementRef: D,
                        shouldShow: q,
                        position: "bottom",
                        align: "left",
                        spacing: 4,
                        animation: i.Y.Animation.NONE,
                        onRequestClose: P,
                        renderPopout: () =>
                            (0, n.jsx)(A.A, {
                                children: (0, n.jsx)(h.R, {
                                    overrideVisibility: !0,
                                    questOrQuests: t,
                                    questContent: S.uF.QUEST_LIVE_STREAM,
                                    sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
                                    children: () =>
                                        (0, n.jsxs)("div", {
                                            className: f.g5,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: f.j$,
                                                    children: [
                                                        (0, n.jsx)(u.E, {
                                                            variant: "text-md/semibold",
                                                            color: "text-default",
                                                            children: t.config.messages.questName,
                                                        }),
                                                        (0, n.jsx)(a.D, {
                                                            className: f.We,
                                                            "aria-label": N.intl.string(N.t.cpT0Cq),
                                                            onClick: P,
                                                            children: (0, n.jsx)(r.P, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: f.ek,
                                                    children: [
                                                        (0, n.jsx)(I.A, {
                                                            className: f.Ul,
                                                            style: { width: 48, height: 48 },
                                                            autoplay: !0,
                                                            quest: t,
                                                            questContent: S.uF.QUEST_LIVE_STREAM,
                                                            sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
                                                        }),
                                                        (0, n.jsx)(u.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-default",
                                                            children: M,
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsx)(o.$, {
                                                    variant: "secondary",
                                                    size: "md",
                                                    fullWidth: !0,
                                                    text: N.intl.string(N.t["th2+0j"]),
                                                    onClick: k,
                                                }),
                                            ],
                                        }),
                                }),
                            }),
                        children: () =>
                            (0, n.jsx)("div", {
                                className: f.zh,
                                children: (0, n.jsx)(o.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: N.intl.string(N.t["h/qYF6"]),
                                    onClick: O,
                                }),
                            }),
                    }),
                    (0, n.jsxs)("div", {
                        className: f.KW,
                        children: [
                            (0, n.jsx)(u.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: f.I4,
                                children: N.intl.string(N.t.o6FLcF),
                            }),
                            (0, n.jsx)("span", { className: f.me, "aria-hidden": !0, children: "\xb7" }),
                            (0, n.jsxs)("div", {
                                className: f.VP,
                                children: [
                                    (0, n.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: f.h_,
                                        children: M,
                                    }),
                                    b && (0, n.jsx)(R.e, { questId: t.id, orbMultiplierEligibility: p }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(L.C, {
                        questContent: S.uF.QUEST_LIVE_STREAM,
                        sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
                        quest: t,
                        preventIdle: !0,
                        shouldShowDisclosure: !0,
                        children: (e) =>
                            (0, n.jsx)(E.K, {
                                ...e,
                                variant: "secondary",
                                size: "sm",
                                icon: c.j,
                                "aria-label": N.intl.string(N.t.DEoVWZ),
                            }),
                    }),
                    null != F &&
                        (0, n.jsx)(E.K, {
                            variant: "secondary",
                            size: "sm",
                            icon: d.W,
                            "aria-label": t.config.ctaConfig.buttonLabel,
                            onClick: y,
                        }),
                    (0, n.jsx)("div", {
                        className: f.lI,
                        children: (0, n.jsx)(o.$, {
                            variant: "primary",
                            size: "sm",
                            text: N.intl.string(N.t.l7E81v),
                            onClick: U,
                            loading: j,
                        }),
                    }),
                ],
            }),
    });
}
