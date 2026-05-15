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
    _ = n(624479),
    f = n(577473),
    h = n(922016),
    p = n(442433),
    E = n(181658),
    m = n(976860),
    g = n(246356),
    A = n(957565),
    I = n(340124),
    T = n(859703),
    S = n(507107),
    N = n(31587),
    y = n(18437),
    C = n(590202),
    v = n(971649),
    O = n(651892),
    R = n(710969),
    b = n(792620),
    D = n(814793),
    L = n(371912),
    w = n(617986),
    M = n(190107),
    P = n(652215),
    x = n(818348),
    U = n(375708);
function k(e) {
    let t = (0, s.bG)([T.A], () => T.A.questDeliveryOverride, []),
        n = (0, R.vy)(e.questContent),
        h = [S.uF.QUEST_BAR_V2, S.uF.QUEST_BAR].includes(e.questContent),
        g = (0, y.Ut)(),
        k = (0, v.go)(),
        G = (0, O.wr)(e.quest),
        F = !0 === e.showShareLink && (0, D.E0)(e.quest.config),
        {
            handleComplete: V,
            handleProgress: B,
            handleResetDismissibilityClick: H,
            handleResetStatusClick: j,
            handleOverrideDeliveryClick: Y,
        } = (0, N.j$)(e.quest.id),
        W = (0, N.do)({
            quest: e.quest,
            content: e.questContent,
            ctaContent: C.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: e.sourceQuestContent,
        }),
        K = (0, L.Lk)({
            isShareable: F,
            questId: e.quest.id,
            trackingCtx: r.useMemo(
                () => ({
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: C.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: k,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                [e.questContent, e.questContentPosition, e.sourceQuestContent, k],
            ),
        }),
        z = (e) => (0, a.P0)((0, o.o)(new E.A(e, e.status).message, l.Ck.FAILURE)),
        $ = () => (0, I.CV)(e.quest.id).catch(z),
        q = (0, N.nv)(e.quest),
        Z = r.useMemo(
            () =>
                (0, i.jsx)(u.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: t?.id === e.quest.id,
                    action: Y,
                }),
            [Y, e.quest.id, t?.id],
        ),
        X = r.useCallback(() => {
            (0, m.pX)(P.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        Q = e.shouldShowDisclosure && e.quest.id !== M.Fw;
    return (0, i.jsxs)(c.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, p.Z_)();
        },
        navId: "quests-entry",
        "aria-label": U.intl.string(U.t.ogxXGq),
        onClose: e?.onClose ?? x.tE,
        children: [
            (0, i.jsxs)(
                u.rX,
                {
                    children: [
                        (0, i.jsx)(u.Dr, {
                            id: "play-game",
                            label: G,
                            action: W,
                            icon: d.W,
                            leadingAccessory: { type: "icon", icon: d.W },
                        }),
                        F &&
                            (0, i.jsx)(u.Dr, {
                                id: "share-link",
                                label: U.intl.string(U.t.RDE0Sc),
                                action: K,
                                icon: _.T,
                                leadingAccessory: { type: "icon", icon: _.T },
                            }),
                        q && Z,
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
                                label: U.intl.string(U.t["Ws2Bl+"]),
                                action: () => {
                                    g({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: C.Cy.CONTEXT_MENU_LEARN_MORE,
                                        sourceQuestContent: e.sourceQuestContent,
                                    }),
                                        (0, w.navigateToQuestHome)({
                                            fromContent: e.questContent,
                                            questId: e.quest.id,
                                        });
                                },
                                icon: f.r,
                                leadingAccessory: { type: "icon", icon: f.r },
                            }),
                        Q &&
                            (0, i.jsx)(u.Dr, {
                                id: "display-disclosure",
                                label: U.intl.string(U.t.GcsZKJ),
                                action: () => {
                                    (0, w.Zc)(
                                        e.quest,
                                        {
                                            content: e.questContent,
                                            position: e.questContentPosition,
                                            ctaContent: C.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                            impressionId: k,
                                            sourceQuestContent: e.sourceQuestContent,
                                        },
                                        e.returnRef,
                                    );
                                },
                            }),
                        n &&
                            (0, i.jsx)(u.Dr, {
                                id: "hide-entrypoint",
                                label: U.intl.string(U.t.NN79E9),
                                action: () => {
                                    g({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: C.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                        sourceQuestContent: e.sourceQuestContent,
                                    }),
                                        (0, R.vy)(e.questContent) &&
                                            ((0, I.g5)(e.quest.id, e.questContent), h && (0, w.z6)(e.quest));
                                },
                                subtext: U.intl.string(U.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, i.jsxs)(
                    u.rX,
                    {
                        label: U.intl.string(U.t["Ape+mm"]),
                        children: [
                            (0, i.jsx)(u.Dr, { id: "dismiss", label: U.intl.string(U.t.JF6W66), action: H }),
                            (0, i.jsx)(u.Dr, {
                                id: "enrollment",
                                label: U.intl.string(U.t.taqkwK),
                                action: () => {
                                    j(), $();
                                },
                            }),
                            (0, i.jsx)(u.Dr, {
                                id: "progress",
                                label: U.intl.string(U.t.cKSLr4),
                                action: () => {
                                    B(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, i.jsx)(u.Dr, { id: "complete", label: U.intl.string(U.t.jQEfRT), action: V }),
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
                                            action: () => (0, I.vD)(e.quest.id, !0).catch(z),
                                        }),
                                        (0, i.jsx)(u.Dr, { id: "stop", label: "Stop heartbeat", action: $ }),
                                    ],
                                }),
                            (0, i.jsx)(u.Dr, {
                                id: "copy-quest-id",
                                label: U.intl.string(U.t.oisrFi),
                                action: () => {
                                    (0, A.C)(e.quest.id);
                                },
                            }),
                            (0, i.jsx)(u.Dr, { id: "preview", label: U.intl.string(U.t.tx5Ax5), action: X }),
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
        _ = (0, y.Ut)(),
        f = r.useRef(null),
        p = r.useCallback(() => {
            _({
                questId: o.id,
                questContent: l,
                questContentCTA: C.Cy.OPEN_CONTEXT_MENU,
                questContentPosition: u,
                sourceQuestContent: c,
            }),
                null != n && n();
        }, [n, o.id, l, u, _, c]);
    return (0, i.jsx)(h.Y, {
        targetElementRef: f,
        onRequestOpen: p,
        onRequestClose: s,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return a
                ? (0, i.jsx)(g.A, {
                      children: (0, i.jsx)(k, {
                          ...d,
                          quest: o,
                          questContent: l,
                          questContentPosition: u,
                          onClose: t,
                          sourceQuestContent: c,
                      }),
                  })
                : (0, i.jsx)(k, {
                      ...d,
                      quest: o,
                      questContent: l,
                      questContentPosition: u,
                      onClose: t,
                      sourceQuestContent: c,
                  });
        },
        animation: h.Y.Animation.NONE,
        children: (e) => (0, i.jsx)("div", { ref: f, children: t(e) }),
    });
}
