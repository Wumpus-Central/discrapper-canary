"use strict";
n.d(t, { C: () => G });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(691540),
    o = n(857250),
    l = n(97483),
    u = n(477782),
    c = n(980707),
    d = n(743368),
    _ = n(173936),
    h = n(577473),
    f = n(922016),
    p = n(442433),
    E = n(181658),
    m = n(976860),
    g = n(246356),
    A = n(957565),
    I = n(340124),
    T = n(859703),
    S = n(507107),
    y = n(347135),
    C = n(18437),
    N = n(590202),
    v = n(971649),
    R = n(651892),
    O = n(710969),
    b = n(792620),
    D = n(814793),
    L = n(371912),
    w = n(617986),
    M = n(190107),
    P = n(652215),
    x = n(818348),
    k = n(375708);
function U(e) {
    let t = (0, s.bG)([T.A], () => T.A.getQuestPreviewOverride(S.uF.QUEST_BAR_V2), []),
        n = (0, s.bG)([T.A], () => T.A.getQuestPreviewOverride(S.uF.ACTIVITY_PANEL), []),
        f = (0, s.bG)([T.A], () => T.A.getQuestPreviewOverride(S.uF.QUEST_LIVE_STREAM), []),
        g = (0, s.bG)([T.A], () => T.A.getQuestPreviewOverride(S.uF.MEMBERS_LIST), []),
        U = (0, O.vy)(e.questContent),
        G = [S.uF.QUEST_BAR_V2, S.uF.QUEST_BAR].includes(e.questContent),
        F = (0, C.Ut)(),
        V = (0, v.go)(),
        B = (0, R.wr)(e.quest),
        j = !0 === e.showShareLink && (0, D.E0)(e.quest.config),
        {
            handleComplete: H,
            handleProgress: Y,
            handleResetDismissibilityClick: W,
            handleResetStatusClick: K,
            handleOverridePreviewClick: $,
        } = (0, y.j$)(e.quest.id),
        z = (0, y.do)({
            quest: e.quest,
            content: e.questContent,
            ctaContent: N.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: e.sourceQuestContent,
        }),
        q = (0, L.Lk)({
            isShareable: j,
            questId: e.quest.id,
            trackingCtx: r.useMemo(
                () => ({
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: N.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: V,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                [e.questContent, e.questContentPosition, e.sourceQuestContent, V],
            ),
        }),
        Z = (e) => (0, a.P0)((0, o.o)(new E.A(e, e.status).message, l.Ck.FAILURE)),
        X = () => (0, I.CV)(e.quest.id).catch(Z),
        Q = (0, y.Ns)(e.quest),
        J = r.useMemo(
            () =>
                (0, i.jsx)(u.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: t?.id === e.quest.id,
                    action: () => $(S.uF.QUEST_BAR_V2),
                }),
            [$, e.quest.id, t?.id],
        ),
        ee = r.useMemo(
            () =>
                (0, i.jsx)(u.sL, {
                    id: "activity-panel",
                    label: "Show in Activity Panel",
                    checked: n?.id === e.quest.id,
                    action: () => $(S.uF.ACTIVITY_PANEL),
                }),
            [$, e.quest.id, n?.id],
        ),
        et = r.useMemo(
            () =>
                (0, i.jsx)(u.sL, {
                    id: "channel-call-header",
                    label: "Show in Voice Channel Header",
                    checked: f?.id === e.quest.id,
                    action: () => $(S.uF.QUEST_LIVE_STREAM),
                }),
            [$, e.quest.id, f?.id],
        ),
        en = r.useMemo(
            () =>
                (0, i.jsx)(u.sL, {
                    id: "members-list",
                    label: "Show in Members List",
                    checked: g?.id === e.quest.id,
                    action: () => $(S.uF.MEMBERS_LIST),
                }),
            [$, e.quest.id, g?.id],
        ),
        ei = r.useCallback(() => {
            (0, m.pX)(P.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        er = e.shouldShowDisclosure && e.quest.id !== M.Fw;
    return (0, i.jsxs)(c.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, p.Z_)();
        },
        navId: "quests-entry",
        "aria-label": k.intl.string(k.t.ogxXGq),
        onClose: e?.onClose ?? x.tE,
        children: [
            (0, i.jsxs)(
                u.rX,
                {
                    children: [
                        (0, i.jsx)(u.Dr, {
                            id: "play-game",
                            label: B,
                            action: z,
                            icon: d.W,
                            leadingAccessory: { type: "icon", icon: d.W },
                        }),
                        j &&
                            (0, i.jsx)(u.Dr, {
                                id: "share-link",
                                label: k.intl.string(k.t.RDE0Sc),
                                action: q,
                                icon: _.q,
                                leadingAccessory: { type: "icon", icon: _.q },
                            }),
                        Q && J,
                        Q && ee,
                        Q && et,
                        Q && en,
                    ],
                },
                "major-actions",
            ),
            (0, i.jsxs)(
                u.rX,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, i.jsx)(u.Dr, {
                                id: "learn-more",
                                label: k.intl.string(k.t["Ws2Bl+"]),
                                action: () => {
                                    F({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: N.Cy.CONTEXT_MENU_LEARN_MORE,
                                        sourceQuestContent: e.sourceQuestContent,
                                    }),
                                        (0, w.navigateToQuestHome)({
                                            fromContent: e.questContent,
                                            questId: e.quest.id,
                                        });
                                },
                                icon: h.r,
                                leadingAccessory: { type: "icon", icon: h.r },
                            }),
                        er &&
                            (0, i.jsx)(u.Dr, {
                                id: "display-disclosure",
                                label: k.intl.string(k.t.GcsZKJ),
                                action: () => {
                                    (0, w.Zc)(
                                        e.quest,
                                        {
                                            content: e.questContent,
                                            position: e.questContentPosition,
                                            ctaContent: N.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                            impressionId: V,
                                            sourceQuestContent: e.sourceQuestContent,
                                        },
                                        e.returnRef,
                                    );
                                },
                            }),
                        U &&
                            (0, i.jsx)(u.Dr, {
                                id: "hide-entrypoint",
                                label: k.intl.string(k.t.NN79E9),
                                action: () => {
                                    F({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: N.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                        sourceQuestContent: e.sourceQuestContent,
                                    }),
                                        (0, O.vy)(e.questContent) &&
                                            ((0, I.g5)(e.quest.id, e.questContent), G && (0, w.z6)(e.quest));
                                },
                                subtext: k.intl.string(k.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, i.jsxs)(
                    u.rX,
                    {
                        label: k.intl.string(k.t["Ape+mm"]),
                        children: [
                            (0, i.jsx)(u.Dr, { id: "dismiss", label: k.intl.string(k.t.JF6W66), action: W }),
                            (0, i.jsx)(u.Dr, {
                                id: "enrollment",
                                label: k.intl.string(k.t.taqkwK),
                                action: () => {
                                    K(), X();
                                },
                            }),
                            (0, i.jsx)(u.Dr, {
                                id: "progress",
                                label: k.intl.string(k.t.cKSLr4),
                                action: () => {
                                    Y(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, i.jsx)(u.Dr, { id: "complete", label: k.intl.string(k.t.jQEfRT), action: H }),
                            (0, b.g5)(e.quest) &&
                                (0, i.jsxs)(u.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, i.jsx)(u.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${((0, b.YL))(e.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, i.jsx)(u.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: () => (0, I.vD)(e.quest.id, !0).catch(Z),
                                        }),
                                        (0, i.jsx)(u.Dr, { id: "stop", label: "Stop heartbeat", action: X }),
                                    ],
                                }),
                            (0, i.jsx)(u.Dr, {
                                id: "copy-quest-id",
                                label: k.intl.string(k.t.oisrFi),
                                action: () => {
                                    (0, A.C)(e.quest.id);
                                },
                            }),
                            (0, i.jsx)(u.Dr, { id: "preview", label: k.intl.string(k.t.tx5Ax5), action: ei }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function G(e) {
    let {
            children: t,
            onOpen: n,
            onClose: s,
            preventIdle: a,
            quest: o,
            questContent: l,
            questContentPosition: u,
            sourceQuestContent: c,
            ...d
        } = e,
        _ = (0, C.Ut)(),
        h = r.useRef(null),
        p = r.useCallback(() => {
            _({
                questId: o.id,
                questContent: l,
                questContentCTA: N.Cy.OPEN_CONTEXT_MENU,
                questContentPosition: u,
                sourceQuestContent: c,
            }),
                null != n && n();
        }, [n, o.id, l, u, _, c]);
    return (0, i.jsx)(f.Y, {
        targetElementRef: h,
        onRequestOpen: p,
        onRequestClose: s,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return a
                ? (0, i.jsx)(g.A, {
                      children: (0, i.jsx)(U, {
                          ...d,
                          quest: o,
                          questContent: l,
                          questContentPosition: u,
                          onClose: t,
                          sourceQuestContent: c,
                      }),
                  })
                : (0, i.jsx)(U, {
                      ...d,
                      quest: o,
                      questContent: l,
                      questContentPosition: u,
                      onClose: t,
                      sourceQuestContent: c,
                  });
        },
        animation: f.Y.Animation.NONE,
        children: (e) => (0, i.jsx)("div", { ref: h, children: t(e) }),
    });
}
