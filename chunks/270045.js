n.d(t, { C: () => G });
var s = n(627968),
    i = n(64700),
    l = n(17928),
    r = n(691540),
    a = n(857250),
    o = n(97483),
    d = n(477782),
    u = n(550079),
    c = n(743368),
    h = n(624479),
    E = n(577473),
    p = n(922016),
    A = n(442433),
    m = n(181658),
    C = n(976860),
    g = n(246356),
    _ = n(957565),
    I = n(829219),
    S = n(859703),
    T = n(507107),
    f = n(890687),
    y = n(18437),
    R = n(590202),
    O = n(971649),
    b = n(651892),
    N = n(710969),
    x = n(792620),
    L = n(814793),
    v = n(371912),
    D = n(545986),
    P = n(654487),
    M = n(652215),
    j = n(818348),
    w = n(985018);
function U(e) {
    let t = (0, l.bG)([S.A], () => S.A.questDeliveryOverride, []),
        n = (0, N.vy)(e.questContent),
        p = [T.uF.QUEST_BAR_V2, T.uF.QUEST_BAR].includes(e.questContent),
        g = (0, y.Ut)(),
        U = (0, O.go)(),
        G = (0, b.wr)(e.quest),
        k = !0 === e.showShareLink && (0, L.E0)(e.quest.config),
        {
            handleComplete: F,
            handleProgress: B,
            handleResetDismissibilityClick: q,
            handleResetStatusClick: V,
            handleOverrideDeliveryClick: H,
        } = (0, f.j$)(e.quest.id),
        Q = (0, f.do)({
            quest: e.quest,
            content: e.questContent,
            ctaContent: R.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: e.sourceQuestContent,
        }),
        X = (0, v.Lk)({
            isShareable: k,
            questId: e.quest.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: R.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: U,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                [e.questContent, e.questContentPosition, e.sourceQuestContent, U],
            ),
        }),
        W = (e) => (0, r.P0)((0, a.o)(new m.A(e, e.status).message, o.Ck.FAILURE)),
        Y = () => (0, I.CV)(e.quest.id).catch(W),
        K = (0, f.nv)(e.quest),
        z = i.useMemo(
            () =>
                (0, s.jsx)(d.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: t?.id === e.quest.id,
                    action: H,
                }),
            [H, e.quest.id, t?.id],
        ),
        J = i.useCallback(() => {
            (0, C.pX)(M.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        $ = e.shouldShowDisclosure && e.quest.id !== P.Fw;
    return (0, s.jsxs)(u.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, A.Z_)();
        },
        navId: "quests-entry",
        "aria-label": w.intl.string(w.t.ogxXGq),
        onClose: e?.onClose ?? j.tE,
        children: [
            (0, s.jsxs)(
                d.rX,
                {
                    children: [
                        (0, s.jsx)(d.Dr, {
                            id: "play-game",
                            label: G,
                            action: Q,
                            icon: c.W,
                            leadingAccessory: { type: "icon", icon: c.W },
                        }),
                        k &&
                            (0, s.jsx)(d.Dr, {
                                id: "share-link",
                                label: w.intl.string(w.t.RDE0Sc),
                                action: X,
                                icon: h.T,
                                leadingAccessory: { type: "icon", icon: h.T },
                            }),
                        K && z,
                    ],
                },
                "major-actions",
            ),
            (0, s.jsxs)(
                d.rX,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, s.jsx)(d.Dr, {
                                id: "learn-more",
                                label: w.intl.string(w.t["Ws2Bl+"]),
                                action: () => {
                                    g({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: R.Cy.CONTEXT_MENU_LEARN_MORE,
                                        sourceQuestContent: e.sourceQuestContent,
                                    }),
                                        (0, D.navigateToQuestHome)({
                                            fromContent: e.questContent,
                                            questId: e.quest.id,
                                        });
                                },
                                icon: E.r,
                                leadingAccessory: { type: "icon", icon: E.r },
                            }),
                        $ &&
                            (0, s.jsx)(d.Dr, {
                                id: "display-disclosure",
                                label: w.intl.string(w.t.GcsZKJ),
                                action: () => {
                                    (0, D.Zc)(e.quest, {
                                        content: e.questContent,
                                        position: e.questContentPosition,
                                        ctaContent: R.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                        impressionId: U,
                                        sourceQuestContent: e.sourceQuestContent,
                                    });
                                },
                            }),
                        n &&
                            (0, s.jsx)(d.Dr, {
                                id: "hide-entrypoint",
                                label: w.intl.string(w.t.NN79E9),
                                action: () => {
                                    g({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: R.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                        sourceQuestContent: e.sourceQuestContent,
                                    }),
                                        (0, N.vy)(e.questContent) &&
                                            ((0, I.g5)(e.quest.id, e.questContent), p && (0, D.z6)(e.quest));
                                },
                                subtext: w.intl.string(w.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, s.jsxs)(
                    d.rX,
                    {
                        label: w.intl.string(w.t["Ape+mm"]),
                        children: [
                            (0, s.jsx)(d.Dr, { id: "dismiss", label: w.intl.string(w.t.JF6W66), action: q }),
                            (0, s.jsx)(d.Dr, {
                                id: "enrollment",
                                label: w.intl.string(w.t.taqkwK),
                                action: () => {
                                    V(), Y();
                                },
                            }),
                            (0, s.jsx)(d.Dr, {
                                id: "progress",
                                label: w.intl.string(w.t.cKSLr4),
                                action: () => {
                                    B(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, s.jsx)(d.Dr, { id: "complete", label: w.intl.string(w.t.jQEfRT), action: F }),
                            (0, x.g5)(e.quest) &&
                                (0, s.jsxs)(d.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, s.jsx)(d.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${((0, x.YL))(e.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, s.jsx)(d.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: () => (0, I.vD)(e.quest.id, !0).catch(W),
                                        }),
                                        (0, s.jsx)(d.Dr, { id: "stop", label: "Stop heartbeat", action: Y }),
                                    ],
                                }),
                            (0, s.jsx)(d.Dr, {
                                id: "copy-quest-id",
                                label: w.intl.string(w.t.oisrFi),
                                action: () => {
                                    (0, _.C)(e.quest.id);
                                },
                            }),
                            (0, s.jsx)(d.Dr, { id: "preview", label: w.intl.string(w.t.tx5Ax5), action: J }),
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
            onClose: l,
            preventIdle: r,
            quest: a,
            questContent: o,
            questContentPosition: d,
            sourceQuestContent: u,
            ...c
        } = e,
        h = (0, y.Ut)(),
        E = i.useRef(null),
        A = i.useCallback(() => {
            h({
                questId: a.id,
                questContent: o,
                questContentCTA: R.Cy.OPEN_CONTEXT_MENU,
                questContentPosition: d,
                sourceQuestContent: u,
            }),
                null != n && n();
        }, [n, a.id, o, d, h, u]);
    return (0, s.jsx)(p.Y, {
        targetElementRef: E,
        onRequestOpen: A,
        onRequestClose: l,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return r
                ? (0, s.jsx)(g.A, {
                      children: (0, s.jsx)(U, {
                          ...c,
                          quest: a,
                          questContent: o,
                          questContentPosition: d,
                          onClose: t,
                          sourceQuestContent: u,
                      }),
                  })
                : (0, s.jsx)(U, {
                      ...c,
                      quest: a,
                      questContent: o,
                      questContentPosition: d,
                      onClose: t,
                      sourceQuestContent: u,
                  });
        },
        animation: p.Y.Animation.NONE,
        children: (e) => (0, s.jsx)("div", { ref: E, children: t(e) }),
    });
}
