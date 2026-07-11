s.d(t, { A: () => j });
var n = s(627968),
    l = s(64700),
    i = s(922016),
    u = s(834730),
    r = s(939249),
    a = s(789645),
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
    x = s(651892),
    Q = s(576761),
    h = s(73473),
    R = s(270045),
    L = s(442734),
    I = s(646764),
    f = s(617986),
    g = s(190107),
    v = s(375708),
    N = s(305421);
function U(e) {
    let { quest: t, isFocused: s, onAcceptQuest: U, isEnrolling: j } = e,
        M = (0, T.A9)(t, S.uF.QUEST_LIVE_STREAM, g.rE.QUEST_CHANNEL_CALL_HEADER),
        p = (0, C.z)(),
        b = (0, _.SD)(t, p) && (p === Q.MA.NITRO || p === Q.MA.CREPE),
        F = null != t.config.ctaConfig ? (0, x.Jx)(t.config) : null,
        q = (0, _.do)({
            quest: t,
            content: S.uF.QUEST_LIVE_STREAM,
            ctaContent: m.Cy.OPEN_GAME_LINK,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
        }),
        [y, V] = l.useState(!1),
        D = l.useRef(null),
        O = l.useCallback((e) => {
            e.stopPropagation(), V((e) => !e);
        }, []),
        P = l.useCallback(() => {
            V(!1);
        }, []),
        k = l.useCallback(() => {
            (0, f.mA)({ fromContent: S.uF.QUEST_LIVE_STREAM, questId: t.id }), V(!1);
        }, [t.id]);
    return (0, n.jsxs)("div", {
        className: N.M0,
        ref: D,
        children: [
            (0, n.jsx)(I.A, {
                className: N.Qq,
                style: { width: 32, height: 32 },
                autoplay: s,
                quest: t,
                questContent: S.uF.QUEST_LIVE_STREAM,
                sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
            }),
            (0, n.jsx)(i.Y, {
                targetElementRef: D,
                shouldShow: y,
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
                                    className: N.g5,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: N.j$,
                                            children: [
                                                (0, n.jsx)(u.E, {
                                                    variant: "text-md/semibold",
                                                    color: "text-default",
                                                    children: t.config.messages.questName,
                                                }),
                                                (0, n.jsx)(r.D, {
                                                    className: N.We,
                                                    "aria-label": v.intl.string(v.t.cpT0Cq),
                                                    onClick: P,
                                                    children: (0, n.jsx)(a.P, { size: "xs", color: "currentColor" }),
                                                }),
                                            ],
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: N.ek,
                                            children: [
                                                (0, n.jsx)(I.A, {
                                                    className: N.Ul,
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
                                            text: v.intl.string(v.t["th2+0j"]),
                                            onClick: k,
                                        }),
                                    ],
                                }),
                        }),
                    }),
                children: () =>
                    (0, n.jsx)("div", {
                        className: N.zh,
                        children: (0, n.jsx)(o.$, {
                            variant: "secondary",
                            size: "sm",
                            text: v.intl.string(v.t["h/qYF6"]),
                            onClick: O,
                        }),
                    }),
            }),
            (0, n.jsxs)("div", {
                className: N.KW,
                children: [
                    (0, n.jsx)(u.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: N.I4,
                        children: v.intl.string(v.t.o6FLcF),
                    }),
                    (0, n.jsx)("span", { className: N.me, "aria-hidden": !0, children: "\xb7" }),
                    (0, n.jsxs)("div", {
                        className: N.VP,
                        children: [
                            (0, n.jsx)(u.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: N.h_,
                                children: M,
                            }),
                            b && (0, n.jsx)(L.e, { questId: t.id, orbMultiplierEligibility: p }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(R.C, {
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
                        "aria-label": v.intl.string(v.t.DEoVWZ),
                    }),
            }),
            null != F &&
                (0, n.jsx)(E.K, {
                    variant: "secondary",
                    size: "sm",
                    icon: d.W,
                    "aria-label": t.config.ctaConfig.buttonLabel,
                    onClick: q,
                }),
            (0, n.jsx)("div", {
                className: N.lI,
                children: (0, n.jsx)(o.$, {
                    variant: "primary",
                    size: "sm",
                    text: v.intl.string(v.t.l7E81v),
                    onClick: U,
                    loading: j,
                }),
            }),
        ],
    });
}
let j = function (e) {
    return (0, n.jsx)(h.R, {
        questOrQuests: e.quest,
        questContent: S.uF.QUEST_LIVE_STREAM,
        sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
        children: () => (0, n.jsx)(U, { ...e }),
    });
};
