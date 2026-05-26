n.d(e, { C: () => j });
var s = n(627968),
    i = n(64700),
    a = n(17928),
    l = n(691540),
    r = n(857250),
    o = n(97483),
    u = n(477782),
    c = n(980707),
    C = n(743368),
    d = n(624479),
    E = n(577473),
    A = n(922016),
    T = n(442433),
    x = n(181658),
    I = n(976860),
    _ = n(246356),
    g = n(957565),
    L = n(340124),
    f = n(859703),
    h = n(507107),
    O = n(31587),
    N = n(18437),
    R = n(590202),
    y = n(971649),
    p = n(651892),
    m = n(710969),
    v = n(792620),
    D = n(814793),
    S = n(371912),
    U = n(617986),
    P = n(190107),
    M = n(652215),
    q = n(818348),
    w = n(375708);
function Q(t) {
    let e = (0, a.bG)([f.A], () => f.A.getQuestPreviewOverride(h.uF.QUEST_BAR_V2), []),
        n = (0, a.bG)([f.A], () => f.A.getQuestPreviewOverride(h.uF.ACTIVITY_PANEL), []),
        A = (0, a.bG)([f.A], () => f.A.getQuestPreviewOverride(h.uF.QUEST_LIVE_STREAM), []),
        _ = (0, a.bG)([f.A], () => f.A.getQuestPreviewOverride(h.uF.MEMBERS_LIST), []),
        Q = (0, m.vy)(t.questContent),
        j = [h.uF.QUEST_BAR_V2, h.uF.QUEST_BAR].includes(t.questContent),
        b = (0, N.Ut)(),
        V = (0, y.go)(),
        F = (0, p.wr)(t.quest),
        H = !0 === t.showShareLink && (0, D.E0)(t.quest.config),
        {
            handleComplete: k,
            handleProgress: B,
            handleResetDismissibilityClick: G,
            handleResetStatusClick: W,
            handleOverridePreviewClick: z,
        } = (0, O.j$)(t.quest.id),
        Y = (0, O.do)({
            quest: t.quest,
            content: t.questContent,
            ctaContent: R.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: t.sourceQuestContent,
        }),
        X = (0, S.Lk)({
            isShareable: H,
            questId: t.quest.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: t.questContent,
                    position: t.questContentPosition,
                    ctaContent: R.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: V,
                    sourceQuestContent: t.sourceQuestContent,
                }),
                [t.questContent, t.questContentPosition, t.sourceQuestContent, V],
            ),
        }),
        J = (t) => (0, l.P0)((0, r.o)(new x.A(t, t.status).message, o.Ck.FAILURE)),
        Z = () => (0, L.CV)(t.quest.id).catch(J),
        K = (0, O.Ns)(t.quest),
        $ = i.useMemo(
            () =>
                (0, s.jsx)(u.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: e?.id === t.quest.id,
                    action: () => z(h.uF.QUEST_BAR_V2),
                }),
            [z, t.quest.id, e?.id],
        ),
        tt = i.useMemo(
            () =>
                (0, s.jsx)(u.sL, {
                    id: "activity-panel",
                    label: "Show in Activity Panel",
                    checked: n?.id === t.quest.id,
                    action: () => z(h.uF.ACTIVITY_PANEL),
                }),
            [z, t.quest.id, n?.id],
        ),
        te = i.useMemo(
            () =>
                (0, s.jsx)(u.sL, {
                    id: "channel-call-header",
                    label: "Show in Voice Channel Header",
                    checked: A?.id === t.quest.id,
                    action: () => z(h.uF.QUEST_LIVE_STREAM),
                }),
            [z, t.quest.id, A?.id],
        ),
        tn = i.useMemo(
            () =>
                (0, s.jsx)(u.sL, {
                    id: "members-list",
                    label: "Show in Members List",
                    checked: _?.id === t.quest.id,
                    action: () => z(h.uF.MEMBERS_LIST),
                }),
            [z, t.quest.id, _?.id],
        ),
        ts = i.useCallback(() => {
            (0, I.pX)(M.BVt.QUEST_PREVIEW_TOOL_2(t.quest.id));
        }, [t.quest.id]),
        ti = t.shouldShowDisclosure && t.quest.id !== P.Fw;
    return (0, s.jsxs)(c.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: () => {
            null != t.onSelect ? t.onSelect() : (0, T.Z_)();
        },
        navId: "quests-entry",
        "aria-label": w.intl.string(w.t.ogxXGq),
        onClose: t?.onClose ?? q.tE,
        children: [
            (0, s.jsxs)(
                u.rX,
                {
                    children: [
                        (0, s.jsx)(u.Dr, {
                            id: "play-game",
                            label: F,
                            action: Y,
                            icon: C.W,
                            leadingAccessory: { type: "icon", icon: C.W },
                        }),
                        H &&
                            (0, s.jsx)(u.Dr, {
                                id: "share-link",
                                label: w.intl.string(w.t.RDE0Sc),
                                action: X,
                                icon: d.T,
                                leadingAccessory: { type: "icon", icon: d.T },
                            }),
                        K && $,
                        K && tt,
                        K && te,
                        K && tn,
                    ],
                },
                "major-actions",
            ),
            (0, s.jsxs)(
                u.rX,
                {
                    children: [
                        !t.hideLearnMore &&
                            (0, s.jsx)(u.Dr, {
                                id: "learn-more",
                                label: w.intl.string(w.t["Ws2Bl+"]),
                                action: () => {
                                    b({
                                        questId: t.quest.id,
                                        questContent: t.questContent,
                                        questContentPosition: t.questContentPosition,
                                        questContentCTA: R.Cy.CONTEXT_MENU_LEARN_MORE,
                                        sourceQuestContent: t.sourceQuestContent,
                                    }),
                                        (0, U.navigateToQuestHome)({
                                            fromContent: t.questContent,
                                            questId: t.quest.id,
                                        });
                                },
                                icon: E.r,
                                leadingAccessory: { type: "icon", icon: E.r },
                            }),
                        ti &&
                            (0, s.jsx)(u.Dr, {
                                id: "display-disclosure",
                                label: w.intl.string(w.t.GcsZKJ),
                                action: () => {
                                    (0, U.Zc)(
                                        t.quest,
                                        {
                                            content: t.questContent,
                                            position: t.questContentPosition,
                                            ctaContent: R.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                            impressionId: V,
                                            sourceQuestContent: t.sourceQuestContent,
                                        },
                                        t.returnRef,
                                    );
                                },
                            }),
                        Q &&
                            (0, s.jsx)(u.Dr, {
                                id: "hide-entrypoint",
                                label: w.intl.string(w.t.NN79E9),
                                action: () => {
                                    b({
                                        questId: t.quest.id,
                                        questContent: t.questContent,
                                        questContentPosition: t.questContentPosition,
                                        questContentCTA: R.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                        sourceQuestContent: t.sourceQuestContent,
                                    }),
                                        (0, m.vy)(t.questContent) &&
                                            ((0, L.g5)(t.quest.id, t.questContent), j && (0, U.z6)(t.quest));
                                },
                                subtext: w.intl.string(w.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            t.quest.preview &&
                (0, s.jsxs)(
                    u.rX,
                    {
                        label: w.intl.string(w.t["Ape+mm"]),
                        children: [
                            (0, s.jsx)(u.Dr, { id: "dismiss", label: w.intl.string(w.t.JF6W66), action: G }),
                            (0, s.jsx)(u.Dr, {
                                id: "enrollment",
                                label: w.intl.string(w.t.taqkwK),
                                action: () => {
                                    W(), Z();
                                },
                            }),
                            (0, s.jsx)(u.Dr, {
                                id: "progress",
                                label: w.intl.string(w.t.cKSLr4),
                                action: () => {
                                    B(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, s.jsx)(u.Dr, { id: "complete", label: w.intl.string(w.t.jQEfRT), action: k }),
                            (0, v.g5)(t.quest) &&
                                (0, s.jsxs)(u.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, s.jsx)(u.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${((0, v.YL))(t.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, s.jsx)(u.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: () => (0, L.vD)(t.quest.id, !0).catch(J),
                                        }),
                                        (0, s.jsx)(u.Dr, { id: "stop", label: "Stop heartbeat", action: Z }),
                                    ],
                                }),
                            (0, s.jsx)(u.Dr, {
                                id: "copy-quest-id",
                                label: w.intl.string(w.t.oisrFi),
                                action: () => {
                                    (0, g.C)(t.quest.id);
                                },
                            }),
                            (0, s.jsx)(u.Dr, { id: "preview", label: w.intl.string(w.t.tx5Ax5), action: ts }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function j(t) {
    let {
            children: e,
            onOpen: n,
            onClose: a,
            preventIdle: l,
            quest: r,
            questContent: o,
            questContentPosition: u,
            sourceQuestContent: c,
            ...C
        } = t,
        d = (0, N.Ut)(),
        E = i.useRef(null),
        T = i.useCallback(() => {
            d({
                questId: r.id,
                questContent: o,
                questContentCTA: R.Cy.OPEN_CONTEXT_MENU,
                questContentPosition: u,
                sourceQuestContent: c,
            }),
                null != n && n();
        }, [n, r.id, o, u, d, c]);
    return (0, s.jsx)(A.Y, {
        targetElementRef: E,
        onRequestOpen: T,
        onRequestClose: a,
        renderPopout: (t) => {
            let { closePopout: e } = t;
            return l
                ? (0, s.jsx)(_.A, {
                      children: (0, s.jsx)(Q, {
                          ...C,
                          quest: r,
                          questContent: o,
                          questContentPosition: u,
                          onClose: e,
                          sourceQuestContent: c,
                      }),
                  })
                : (0, s.jsx)(Q, {
                      ...C,
                      quest: r,
                      questContent: o,
                      questContentPosition: u,
                      onClose: e,
                      sourceQuestContent: c,
                  });
        },
        animation: A.Y.Animation.NONE,
        children: (t) => (0, s.jsx)("div", { ref: E, children: e(t) }),
    });
}
