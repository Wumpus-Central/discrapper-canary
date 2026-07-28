n.d(e, { C: () => X });
var s = n(477900),
    i = n(582128),
    o = n(323889),
    r = n(17928),
    u = n(691540),
    a = n(857250),
    l = n(97483),
    c = n(477782),
    C = n(980707),
    d = n(743368),
    E = n(173936),
    x = n(577473),
    A = n(922016),
    T = n(442433),
    I = n(181658),
    _ = n(274670),
    O = n(144779),
    f = n(976860),
    N = n(246356),
    y = n(957565),
    L = n(352774),
    g = n(859703),
    q = n(24001),
    m = n(104886),
    Q = n(201274),
    R = n(18437),
    S = n(590202),
    P = n(971649),
    h = n(651892),
    p = n(710969),
    v = n(792620),
    D = n(814793),
    j = n(764336),
    U = n(617986),
    b = n(190107),
    M = n(652215),
    w = n(818348),
    k = n(375708);
function V(t) {
    let e = (0, r.bG)([g.A], () => g.A.getQuestPreviewOverride(q.uF.QUEST_BAR_V2), []),
        n = (0, r.bG)([g.A], () => g.A.getQuestPreviewOverride(q.uF.ACTIVITY_PANEL), []),
        A = (0, r.bG)([g.A], () => g.A.getQuestPreviewOverride(q.uF.QUEST_LIVE_STREAM), []),
        N = (0, r.bG)([g.A], () => g.A.getQuestPreviewOverride(q.uF.MEMBERS_LIST), []),
        V = (0, p.vy)(t.questContent),
        X = [q.uF.QUEST_BAR_V2, q.uF.QUEST_BAR].includes(t.questContent),
        W = (0, R.Ut)(),
        K = (0, P.go)(),
        z = (0, h.wr)(t.quest),
        F = !0 === t.showShareLink && (0, D.E0)(t.quest.config),
        {
            handleComplete: B,
            handleProgress: Y,
            handleResetDismissibilityClick: G,
            handleResetStatusClick: H,
            handleOverridePreviewClick: $,
        } = (0, Q.j$)(t.quest.id),
        Z = (0, Q.do)({
            quest: t.quest,
            content: t.questContent,
            ctaContent: S.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: t.sourceQuestContent,
        }),
        J = (0, j.Lk)({
            isShareable: F,
            questId: t.quest.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: t.questContent,
                    position: t.questContentPosition,
                    ctaContent: S.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: K,
                    sourceQuestContent: t.sourceQuestContent,
                }),
                [t.questContent, t.questContentPosition, t.sourceQuestContent, K],
            ),
        });
    function tt(t) {
        return (0, u.P0)((0, a.o)(new I.A(t, t.status).message, l.Ck.FAILURE));
    }
    function te() {
        return (0, L.CV)(t.quest.id).catch(tt);
    }
    let tn = (0, Q.Ns)(t.quest),
        ts = i.useMemo(
            () =>
                (0, s.jsx)(c.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: e?.id === t.quest.id,
                    action: () => $(q.uF.QUEST_BAR_V2),
                }),
            [$, t.quest.id, e?.id],
        ),
        ti = i.useMemo(
            () =>
                (0, s.jsx)(c.sL, {
                    id: "activity-panel",
                    label: "Show in Activity Panel",
                    checked: n?.id === t.quest.id,
                    action: () => $(q.uF.ACTIVITY_PANEL),
                }),
            [$, t.quest.id, n?.id],
        ),
        to = i.useMemo(
            () =>
                (0, s.jsx)(c.sL, {
                    id: "channel-call-header",
                    label: "Show in Voice Channel Header",
                    checked: A?.id === t.quest.id,
                    action: () => $(q.uF.QUEST_LIVE_STREAM),
                }),
            [$, t.quest.id, A?.id],
        ),
        tr = i.useMemo(
            () =>
                (0, s.jsx)(c.sL, {
                    id: "members-list",
                    label: "Show in Members List",
                    checked: N?.id === t.quest.id,
                    action: () => $(q.uF.MEMBERS_LIST),
                }),
            [$, t.quest.id, N?.id],
        ),
        tu = i.useCallback(() => {
            (0, f.pX)(M.BVt.QUEST_PREVIEW_TOOL_2(t.quest.id));
        }, [t.quest.id]),
        ta = t.shouldShowDisclosure && t.quest.id !== b.Fw;
    return (0, s.jsxs)(C.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != t.onSelect ? t.onSelect() : (0, T.Z_)();
        },
        navId: "quests-entry",
        "aria-label": k.intl.string(k.t.ogxXGq),
        onClose: t?.onClose ?? w.tE,
        children: [
            (0, s.jsxs)(
                c.rX,
                {
                    children: [
                        (0, s.jsx)(c.Dr, {
                            id: "play-game",
                            label: z,
                            action: Z,
                            icon: d.W,
                            leadingAccessory: { type: "icon", icon: d.W },
                        }),
                        F &&
                            (0, s.jsx)(c.Dr, {
                                id: "share-link",
                                label: k.intl.string(k.t.RDE0Sc),
                                action: J,
                                icon: E.q,
                                leadingAccessory: { type: "icon", icon: E.q },
                            }),
                        tn && ts,
                        tn && ti,
                        tn && to,
                        tn && tr,
                    ],
                },
                "major-actions",
            ),
            (0, s.jsxs)(
                c.rX,
                {
                    children: [
                        !t.hideLearnMore &&
                            (0, s.jsx)(c.Dr, {
                                id: "learn-more",
                                label: k.intl.string(k.t["Ws2Bl+"]),
                                action: function () {
                                    (0, m.E5)(m.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, _.r)({
                                              type: O.F.CLICK_INTERNAL,
                                              adCreativeType: o.p.QUEST,
                                              adCreativeId: t.quest.id,
                                              questContentCTA: S.Cy.CONTEXT_MENU_LEARN_MORE,
                                              surfaceId: t.questContent,
                                              sourceQuestContent: t.sourceQuestContent,
                                              impressionId: K,
                                              questContentPosition: t.questContentPosition,
                                          })
                                        : W({
                                              questId: t.quest.id,
                                              questContent: t.questContent,
                                              questContentPosition: t.questContentPosition,
                                              questContentCTA: S.Cy.CONTEXT_MENU_LEARN_MORE,
                                              sourceQuestContent: t.sourceQuestContent,
                                          }),
                                        (0, U.mA)({ fromContent: t.questContent, questId: t.quest.id });
                                },
                                icon: x.r,
                                leadingAccessory: { type: "icon", icon: x.r },
                            }),
                        ta &&
                            (0, s.jsx)(c.Dr, {
                                id: "display-disclosure",
                                label: k.intl.string(k.t.GcsZKJ),
                                action: function () {
                                    (0, U.Zc)(
                                        t.quest,
                                        {
                                            content: t.questContent,
                                            position: t.questContentPosition,
                                            ctaContent: S.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                            impressionId: K,
                                            sourceQuestContent: t.sourceQuestContent,
                                        },
                                        t.returnRef,
                                    );
                                },
                            }),
                        V &&
                            (0, s.jsx)(c.Dr, {
                                id: "hide-entrypoint",
                                label: k.intl.string(k.t.NN79E9),
                                action: function () {
                                    (0, m.E5)(m.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, _.r)({
                                              type: O.F.CLICK_INTERNAL,
                                              adCreativeType: o.p.QUEST,
                                              adCreativeId: t.quest.id,
                                              questContentCTA: S.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              surfaceId: t.questContent,
                                              sourceQuestContent: t.sourceQuestContent,
                                              impressionId: K,
                                              questContentPosition: t.questContentPosition,
                                          })
                                        : W({
                                              questId: t.quest.id,
                                              questContent: t.questContent,
                                              questContentPosition: t.questContentPosition,
                                              questContentCTA: S.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              sourceQuestContent: t.sourceQuestContent,
                                          }),
                                        (0, p.vy)(t.questContent) &&
                                            ((0, L.g5)(t.quest.id, t.questContent), X && (0, U.z6)(t.quest));
                                },
                                subtext: k.intl.string(k.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            t.quest.preview &&
                (0, s.jsxs)(
                    c.rX,
                    {
                        label: k.intl.string(k.t["Ape+mm"]),
                        children: [
                            (0, s.jsx)(c.Dr, { id: "dismiss", label: k.intl.string(k.t.JF6W66), action: G }),
                            (0, s.jsx)(c.Dr, {
                                id: "enrollment",
                                label: k.intl.string(k.t.taqkwK),
                                action: function () {
                                    H(), te();
                                },
                            }),
                            (0, s.jsx)(c.Dr, {
                                id: "progress",
                                label: k.intl.string(k.t.cKSLr4),
                                action: function () {
                                    Y(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, s.jsx)(c.Dr, { id: "complete", label: k.intl.string(k.t.jQEfRT), action: B }),
                            (0, v.g5)(t.quest) &&
                                (0, s.jsxs)(c.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, s.jsx)(c.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${((0, v.YL))(t.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, s.jsx)(c.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: function () {
                                                return (0, L.vD)(t.quest.id, !0).catch(tt);
                                            },
                                        }),
                                        (0, s.jsx)(c.Dr, { id: "stop", label: "Stop heartbeat", action: te }),
                                    ],
                                }),
                            (0, s.jsx)(c.Dr, {
                                id: "copy-quest-id",
                                label: k.intl.string(k.t.oisrFi),
                                action: () => {
                                    (0, y.C)(t.quest.id);
                                },
                            }),
                            (0, s.jsx)(c.Dr, { id: "preview", label: k.intl.string(k.t.tx5Ax5), action: tu }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function X(t) {
    let {
            children: e,
            onOpen: n,
            onClose: r,
            preventIdle: u,
            quest: a,
            questContent: l,
            questContentPosition: c,
            sourceQuestContent: C,
            ...d
        } = t,
        E = (0, R.Ut)(),
        x = (0, P.go)(),
        T = i.useRef(null),
        I = i.useCallback(() => {
            (0, m.E5)(m.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu_popout")
                ? (0, _.r)({
                      type: O.F.CLICK_INTERNAL,
                      adCreativeType: o.p.QUEST,
                      adCreativeId: a.id,
                      questContentCTA: S.Cy.OPEN_CONTEXT_MENU,
                      surfaceId: l,
                      sourceQuestContent: C,
                      impressionId: x,
                      questContentPosition: c,
                  })
                : E({
                      questId: a.id,
                      questContent: l,
                      questContentCTA: S.Cy.OPEN_CONTEXT_MENU,
                      questContentPosition: c,
                      sourceQuestContent: C,
                  }),
                null != n && n();
        }, [n, a.id, l, c, E, C, x]);
    return (0, s.jsx)(A.Y, {
        targetElementRef: T,
        onRequestOpen: I,
        onRequestClose: r,
        renderPopout: (t) => {
            let { closePopout: e } = t;
            return u
                ? (0, s.jsx)(N.A, {
                      children: (0, s.jsx)(V, {
                          ...d,
                          quest: a,
                          questContent: l,
                          questContentPosition: c,
                          onClose: e,
                          sourceQuestContent: C,
                      }),
                  })
                : (0, s.jsx)(V, {
                      ...d,
                      quest: a,
                      questContent: l,
                      questContentPosition: c,
                      onClose: e,
                      sourceQuestContent: C,
                  });
        },
        animation: A.Y.Animation.NONE,
        children: (t) => (0, s.jsx)("div", { ref: T, children: e(t) }),
    });
}
