n.d(e, { C: () => j });
var s = n(627968),
    i = n(64700),
    a = n(17928),
    o = n(691540),
    l = n(857250),
    r = n(97483),
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
    h = n(957565),
    g = n(340124),
    N = n(859703),
    L = n(507107),
    f = n(31587),
    y = n(18437),
    R = n(590202),
    O = n(971649),
    m = n(651892),
    p = n(710969),
    v = n(792620),
    S = n(814793),
    D = n(371912),
    P = n(617986),
    q = n(190107),
    w = n(652215),
    U = n(818348),
    M = n(375708);
function Q(t) {
    let e = (0, a.bG)([N.A], () => N.A.getQuestPreviewOverride(L.uF.QUEST_BAR_V2), []),
        n = (0, a.bG)([N.A], () => N.A.getQuestPreviewOverride(L.uF.ACTIVITY_PANEL), []),
        A = (0, a.bG)([N.A], () => N.A.getQuestPreviewOverride(L.uF.QUEST_LIVE_STREAM), []),
        _ = (0, a.bG)([N.A], () => N.A.getQuestPreviewOverride(L.uF.MEMBERS_LIST), []),
        Q = (0, p.vy)(t.questContent),
        j = [L.uF.QUEST_BAR_V2, L.uF.QUEST_BAR].includes(t.questContent),
        b = (0, y.Ut)(),
        F = (0, O.go)(),
        V = (0, m.wr)(t.quest),
        H = !0 === t.showShareLink && (0, S.E0)(t.quest.config),
        {
            handleComplete: B,
            handleProgress: k,
            handleResetDismissibilityClick: G,
            handleResetStatusClick: W,
            handleOverridePreviewClick: z,
        } = (0, f.j$)(t.quest.id),
        X = (0, f.do)({
            quest: t.quest,
            content: t.questContent,
            ctaContent: R.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: t.sourceQuestContent,
        }),
        Y = (0, D.Lk)({
            isShareable: H,
            questId: t.quest.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: t.questContent,
                    position: t.questContentPosition,
                    ctaContent: R.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: F,
                    sourceQuestContent: t.sourceQuestContent,
                }),
                [t.questContent, t.questContentPosition, t.sourceQuestContent, F],
            ),
        }),
        Z = (t) => (0, o.P0)((0, l.o)(new x.A(t, t.status).message, r.Ck.FAILURE)),
        K = () => (0, g.CV)(t.quest.id).catch(Z),
        $ = (0, f.Ns)(t.quest),
        J = i.useMemo(
            () =>
                (0, s.jsx)(u.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: e?.id === t.quest.id,
                    action: () => z(L.uF.QUEST_BAR_V2),
                }),
            [z, t.quest.id, e?.id],
        ),
        tt = i.useMemo(
            () =>
                (0, s.jsx)(u.sL, {
                    id: "activity-panel",
                    label: "Show in Activity Panel",
                    checked: n?.id === t.quest.id,
                    action: () => z(L.uF.ACTIVITY_PANEL),
                }),
            [z, t.quest.id, n?.id],
        ),
        te = i.useMemo(
            () =>
                (0, s.jsx)(u.sL, {
                    id: "channel-call-header",
                    label: "Show in Voice Channel Header",
                    checked: A?.id === t.quest.id,
                    action: () => z(L.uF.QUEST_LIVE_STREAM),
                }),
            [z, t.quest.id, A?.id],
        ),
        tn = i.useMemo(
            () =>
                (0, s.jsx)(u.sL, {
                    id: "members-list",
                    label: "Show in Members List",
                    checked: _?.id === t.quest.id,
                    action: () => z(L.uF.MEMBERS_LIST),
                }),
            [z, t.quest.id, _?.id],
        ),
        ts = i.useCallback(() => {
            (0, I.pX)(w.BVt.QUEST_PREVIEW_TOOL_2(t.quest.id));
        }, [t.quest.id]),
        ti = t.shouldShowDisclosure && t.quest.id !== q.Fw;
    return (0, s.jsxs)(c.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: () => {
            null != t.onSelect ? t.onSelect() : (0, T.Z_)();
        },
        navId: "quests-entry",
        "aria-label": M.intl.string(M.t.ogxXGq),
        onClose: t?.onClose ?? U.tE,
        children: [
            (0, s.jsxs)(
                u.rX,
                {
                    children: [
                        (0, s.jsx)(u.Dr, {
                            id: "play-game",
                            label: V,
                            action: X,
                            icon: C.W,
                            leadingAccessory: { type: "icon", icon: C.W },
                        }),
                        H &&
                            (0, s.jsx)(u.Dr, {
                                id: "share-link",
                                label: M.intl.string(M.t.RDE0Sc),
                                action: Y,
                                icon: d.T,
                                leadingAccessory: { type: "icon", icon: d.T },
                            }),
                        $ && J,
                        $ && tt,
                        $ && te,
                        $ && tn,
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
                                label: M.intl.string(M.t["Ws2Bl+"]),
                                action: () => {
                                    b({
                                        questId: t.quest.id,
                                        questContent: t.questContent,
                                        questContentPosition: t.questContentPosition,
                                        questContentCTA: R.Cy.CONTEXT_MENU_LEARN_MORE,
                                        sourceQuestContent: t.sourceQuestContent,
                                    }),
                                        (0, P.navigateToQuestHome)({
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
                                label: M.intl.string(M.t.GcsZKJ),
                                action: () => {
                                    (0, P.Zc)(
                                        t.quest,
                                        {
                                            content: t.questContent,
                                            position: t.questContentPosition,
                                            ctaContent: R.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                            impressionId: F,
                                            sourceQuestContent: t.sourceQuestContent,
                                        },
                                        t.returnRef,
                                    );
                                },
                            }),
                        Q &&
                            (0, s.jsx)(u.Dr, {
                                id: "hide-entrypoint",
                                label: M.intl.string(M.t.NN79E9),
                                action: () => {
                                    b({
                                        questId: t.quest.id,
                                        questContent: t.questContent,
                                        questContentPosition: t.questContentPosition,
                                        questContentCTA: R.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                        sourceQuestContent: t.sourceQuestContent,
                                    }),
                                        (0, p.vy)(t.questContent) &&
                                            ((0, g.g5)(t.quest.id, t.questContent), j && (0, P.z6)(t.quest));
                                },
                                subtext: M.intl.string(M.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            t.quest.preview &&
                (0, s.jsxs)(
                    u.rX,
                    {
                        label: M.intl.string(M.t["Ape+mm"]),
                        children: [
                            (0, s.jsx)(u.Dr, { id: "dismiss", label: M.intl.string(M.t.JF6W66), action: G }),
                            (0, s.jsx)(u.Dr, {
                                id: "enrollment",
                                label: M.intl.string(M.t.taqkwK),
                                action: () => {
                                    W(), K();
                                },
                            }),
                            (0, s.jsx)(u.Dr, {
                                id: "progress",
                                label: M.intl.string(M.t.cKSLr4),
                                action: () => {
                                    k(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, s.jsx)(u.Dr, { id: "complete", label: M.intl.string(M.t.jQEfRT), action: B }),
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
                                            action: () => (0, g.vD)(t.quest.id, !0).catch(Z),
                                        }),
                                        (0, s.jsx)(u.Dr, { id: "stop", label: "Stop heartbeat", action: K }),
                                    ],
                                }),
                            (0, s.jsx)(u.Dr, {
                                id: "copy-quest-id",
                                label: M.intl.string(M.t.oisrFi),
                                action: () => {
                                    (0, h.C)(t.quest.id);
                                },
                            }),
                            (0, s.jsx)(u.Dr, { id: "preview", label: M.intl.string(M.t.tx5Ax5), action: ts }),
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
            preventIdle: o,
            quest: l,
            questContent: r,
            questContentPosition: u,
            sourceQuestContent: c,
            ...C
        } = t,
        d = (0, y.Ut)(),
        E = i.useRef(null),
        T = i.useCallback(() => {
            d({
                questId: l.id,
                questContent: r,
                questContentCTA: R.Cy.OPEN_CONTEXT_MENU,
                questContentPosition: u,
                sourceQuestContent: c,
            }),
                null != n && n();
        }, [n, l.id, r, u, d, c]);
    return (0, s.jsx)(A.Y, {
        targetElementRef: E,
        onRequestOpen: T,
        onRequestClose: a,
        renderPopout: (t) => {
            let { closePopout: e } = t;
            return o
                ? (0, s.jsx)(_.A, {
                      children: (0, s.jsx)(Q, {
                          ...C,
                          quest: l,
                          questContent: r,
                          questContentPosition: u,
                          onClose: e,
                          sourceQuestContent: c,
                      }),
                  })
                : (0, s.jsx)(Q, {
                      ...C,
                      quest: l,
                      questContent: r,
                      questContentPosition: u,
                      onClose: e,
                      sourceQuestContent: c,
                  });
        },
        animation: A.Y.Animation.NONE,
        children: (t) => (0, s.jsx)("div", { ref: E, children: e(t) }),
    });
}
