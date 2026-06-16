n.d(e, { C: () => j });
var s = n(627968),
    i = n(64700),
    a = n(17928),
    l = n(691540),
    o = n(857250),
    r = n(97483),
    u = n(477782),
    c = n(980707),
    C = n(743368),
    E = n(173936),
    d = n(577473),
    A = n(922016),
    T = n(442433),
    _ = n(181658),
    x = n(976860),
    I = n(246356),
    L = n(957565),
    O = n(340124),
    g = n(859703),
    f = n(507107),
    h = n(347135),
    N = n(18437),
    R = n(590202),
    y = n(971649),
    S = n(651892),
    p = n(710969),
    P = n(792620),
    v = n(814793),
    D = n(371912),
    U = n(617986),
    m = n(190107),
    M = n(652215),
    Q = n(818348),
    w = n(375708);
function q(t) {
    let e = (0, a.bG)([g.A], () => g.A.getQuestPreviewOverride(f.uF.QUEST_BAR_V2), []),
        n = (0, a.bG)([g.A], () => g.A.getQuestPreviewOverride(f.uF.ACTIVITY_PANEL), []),
        A = (0, a.bG)([g.A], () => g.A.getQuestPreviewOverride(f.uF.QUEST_LIVE_STREAM), []),
        I = (0, a.bG)([g.A], () => g.A.getQuestPreviewOverride(f.uF.MEMBERS_LIST), []),
        q = (0, p.vy)(t.questContent),
        j = [f.uF.QUEST_BAR_V2, f.uF.QUEST_BAR].includes(t.questContent),
        b = (0, N.Ut)(),
        V = (0, y.go)(),
        F = (0, S.wr)(t.quest),
        H = !0 === t.showShareLink && (0, v.E0)(t.quest.config),
        {
            handleComplete: k,
            handleProgress: B,
            handleResetDismissibilityClick: W,
            handleResetStatusClick: z,
            handleOverridePreviewClick: G,
        } = (0, h.j$)(t.quest.id),
        X = (0, h.do)({
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
                    impressionId: V,
                    sourceQuestContent: t.sourceQuestContent,
                }),
                [t.questContent, t.questContentPosition, t.sourceQuestContent, V],
            ),
        }),
        K = (t) => (0, l.P0)((0, o.o)(new _.A(t, t.status).message, r.Ck.FAILURE)),
        Z = () => (0, O.CV)(t.quest.id).catch(K),
        $ = (0, h.Ns)(t.quest),
        J = i.useMemo(
            () =>
                (0, s.jsx)(u.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: e?.id === t.quest.id,
                    action: () => G(f.uF.QUEST_BAR_V2),
                }),
            [G, t.quest.id, e?.id],
        ),
        tt = i.useMemo(
            () =>
                (0, s.jsx)(u.sL, {
                    id: "activity-panel",
                    label: "Show in Activity Panel",
                    checked: n?.id === t.quest.id,
                    action: () => G(f.uF.ACTIVITY_PANEL),
                }),
            [G, t.quest.id, n?.id],
        ),
        te = i.useMemo(
            () =>
                (0, s.jsx)(u.sL, {
                    id: "channel-call-header",
                    label: "Show in Voice Channel Header",
                    checked: A?.id === t.quest.id,
                    action: () => G(f.uF.QUEST_LIVE_STREAM),
                }),
            [G, t.quest.id, A?.id],
        ),
        tn = i.useMemo(
            () =>
                (0, s.jsx)(u.sL, {
                    id: "members-list",
                    label: "Show in Members List",
                    checked: I?.id === t.quest.id,
                    action: () => G(f.uF.MEMBERS_LIST),
                }),
            [G, t.quest.id, I?.id],
        ),
        ts = i.useCallback(() => {
            (0, x.pX)(M.BVt.QUEST_PREVIEW_TOOL_2(t.quest.id));
        }, [t.quest.id]),
        ti = t.shouldShowDisclosure && t.quest.id !== m.Fw;
    return (0, s.jsxs)(c.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: () => {
            null != t.onSelect ? t.onSelect() : (0, T.Z_)();
        },
        navId: "quests-entry",
        "aria-label": w.intl.string(w.t.ogxXGq),
        onClose: t?.onClose ?? Q.tE,
        children: [
            (0, s.jsxs)(
                u.rX,
                {
                    children: [
                        (0, s.jsx)(u.Dr, {
                            id: "play-game",
                            label: F,
                            action: X,
                            icon: C.W,
                            leadingAccessory: { type: "icon", icon: C.W },
                        }),
                        H &&
                            (0, s.jsx)(u.Dr, {
                                id: "share-link",
                                label: w.intl.string(w.t.RDE0Sc),
                                action: Y,
                                icon: E.q,
                                leadingAccessory: { type: "icon", icon: E.q },
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
                                icon: d.r,
                                leadingAccessory: { type: "icon", icon: d.r },
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
                        q &&
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
                                        (0, p.vy)(t.questContent) &&
                                            ((0, O.g5)(t.quest.id, t.questContent), j && (0, U.z6)(t.quest));
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
                            (0, s.jsx)(u.Dr, { id: "dismiss", label: w.intl.string(w.t.JF6W66), action: W }),
                            (0, s.jsx)(u.Dr, {
                                id: "enrollment",
                                label: w.intl.string(w.t.taqkwK),
                                action: () => {
                                    z(), Z();
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
                            (0, P.g5)(t.quest) &&
                                (0, s.jsxs)(u.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, s.jsx)(u.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${((0, P.YL))(t.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, s.jsx)(u.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: () => (0, O.vD)(t.quest.id, !0).catch(K),
                                        }),
                                        (0, s.jsx)(u.Dr, { id: "stop", label: "Stop heartbeat", action: Z }),
                                    ],
                                }),
                            (0, s.jsx)(u.Dr, {
                                id: "copy-quest-id",
                                label: w.intl.string(w.t.oisrFi),
                                action: () => {
                                    (0, L.C)(t.quest.id);
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
            quest: o,
            questContent: r,
            questContentPosition: u,
            sourceQuestContent: c,
            ...C
        } = t,
        E = (0, N.Ut)(),
        d = i.useRef(null),
        T = i.useCallback(() => {
            E({
                questId: o.id,
                questContent: r,
                questContentCTA: R.Cy.OPEN_CONTEXT_MENU,
                questContentPosition: u,
                sourceQuestContent: c,
            }),
                null != n && n();
        }, [n, o.id, r, u, E, c]);
    return (0, s.jsx)(A.Y, {
        targetElementRef: d,
        onRequestOpen: T,
        onRequestClose: a,
        renderPopout: (t) => {
            let { closePopout: e } = t;
            return l
                ? (0, s.jsx)(I.A, {
                      children: (0, s.jsx)(q, {
                          ...C,
                          quest: o,
                          questContent: r,
                          questContentPosition: u,
                          onClose: e,
                          sourceQuestContent: c,
                      }),
                  })
                : (0, s.jsx)(q, {
                      ...C,
                      quest: o,
                      questContent: r,
                      questContentPosition: u,
                      onClose: e,
                      sourceQuestContent: c,
                  });
        },
        animation: A.Y.Animation.NONE,
        children: (t) => (0, s.jsx)("div", { ref: d, children: e(t) }),
    });
}
