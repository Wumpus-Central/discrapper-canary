n.d(e, { C: () => z });
var s = n(627968),
    i = n(64700),
    o = n(323889),
    u = n(17928),
    r = n(691540),
    a = n(857250),
    l = n(97483),
    C = n(477782),
    c = n(980707),
    E = n(743368),
    d = n(173936),
    A = n(577473),
    T = n(922016),
    x = n(442433),
    _ = n(181658),
    I = n(274670),
    q = n(144779),
    y = n(976860),
    L = n(246356),
    N = n(957565),
    O = n(340124),
    Q = n(859703),
    R = n(24001),
    f = n(104886),
    P = n(347135),
    U = n(18437),
    S = n(590202),
    g = n(971649),
    D = n(651892),
    v = n(710969),
    h = n(792620),
    p = n(814793),
    j = n(371912),
    M = n(617986),
    w = n(190107),
    b = n(652215),
    m = n(818348),
    k = n(375708);
function V(t) {
    let e = (0, u.bG)([Q.A], () => Q.A.getQuestPreviewOverride(R.uF.QUEST_BAR_V2), []),
        n = (0, u.bG)([Q.A], () => Q.A.getQuestPreviewOverride(R.uF.ACTIVITY_PANEL), []),
        T = (0, u.bG)([Q.A], () => Q.A.getQuestPreviewOverride(R.uF.QUEST_LIVE_STREAM), []),
        L = (0, u.bG)([Q.A], () => Q.A.getQuestPreviewOverride(R.uF.MEMBERS_LIST), []),
        V = (0, v.vy)(t.questContent),
        z = [R.uF.QUEST_BAR_V2, R.uF.QUEST_BAR].includes(t.questContent),
        W = (0, U.Ut)(),
        X = (0, g.go)(),
        F = (0, D.wr)(t.quest),
        K = !0 === t.showShareLink && (0, p.E0)(t.quest.config),
        {
            handleComplete: Y,
            handleProgress: B,
            handleResetDismissibilityClick: G,
            handleResetStatusClick: H,
            handleOverridePreviewClick: $,
        } = (0, P.j$)(t.quest.id),
        Z = (0, P.do)({
            quest: t.quest,
            content: t.questContent,
            ctaContent: S.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: t.sourceQuestContent,
        }),
        J = (0, j.Lk)({
            isShareable: K,
            questId: t.quest.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: t.questContent,
                    position: t.questContentPosition,
                    ctaContent: S.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: X,
                    sourceQuestContent: t.sourceQuestContent,
                }),
                [t.questContent, t.questContentPosition, t.sourceQuestContent, X],
            ),
        });
    function tt(t) {
        return (0, r.P0)((0, a.o)(new _.A(t, t.status).message, l.Ck.FAILURE));
    }
    function te() {
        return (0, O.CV)(t.quest.id).catch(tt);
    }
    let tn = (0, P.Ns)(t.quest),
        ts = i.useMemo(
            () =>
                (0, s.jsx)(C.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: e?.id === t.quest.id,
                    action: () => $(R.uF.QUEST_BAR_V2),
                }),
            [$, t.quest.id, e?.id],
        ),
        ti = i.useMemo(
            () =>
                (0, s.jsx)(C.sL, {
                    id: "activity-panel",
                    label: "Show in Activity Panel",
                    checked: n?.id === t.quest.id,
                    action: () => $(R.uF.ACTIVITY_PANEL),
                }),
            [$, t.quest.id, n?.id],
        ),
        to = i.useMemo(
            () =>
                (0, s.jsx)(C.sL, {
                    id: "channel-call-header",
                    label: "Show in Voice Channel Header",
                    checked: T?.id === t.quest.id,
                    action: () => $(R.uF.QUEST_LIVE_STREAM),
                }),
            [$, t.quest.id, T?.id],
        ),
        tu = i.useMemo(
            () =>
                (0, s.jsx)(C.sL, {
                    id: "members-list",
                    label: "Show in Members List",
                    checked: L?.id === t.quest.id,
                    action: () => $(R.uF.MEMBERS_LIST),
                }),
            [$, t.quest.id, L?.id],
        ),
        tr = i.useCallback(() => {
            (0, y.pX)(b.BVt.QUEST_PREVIEW_TOOL_2(t.quest.id));
        }, [t.quest.id]),
        ta = t.shouldShowDisclosure && t.quest.id !== w.Fw;
    return (0, s.jsxs)(c.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != t.onSelect ? t.onSelect() : (0, x.Z_)();
        },
        navId: "quests-entry",
        "aria-label": k.intl.string(k.t.ogxXGq),
        onClose: t?.onClose ?? m.tE,
        children: [
            (0, s.jsxs)(
                C.rX,
                {
                    children: [
                        (0, s.jsx)(C.Dr, {
                            id: "play-game",
                            label: F,
                            action: Z,
                            icon: E.W,
                            leadingAccessory: { type: "icon", icon: E.W },
                        }),
                        K &&
                            (0, s.jsx)(C.Dr, {
                                id: "share-link",
                                label: k.intl.string(k.t.RDE0Sc),
                                action: J,
                                icon: d.q,
                                leadingAccessory: { type: "icon", icon: d.q },
                            }),
                        tn && ts,
                        tn && ti,
                        tn && to,
                        tn && tu,
                    ],
                },
                "major-actions",
            ),
            (0, s.jsxs)(
                C.rX,
                {
                    children: [
                        !t.hideLearnMore &&
                            (0, s.jsx)(C.Dr, {
                                id: "learn-more",
                                label: k.intl.string(k.t["Ws2Bl+"]),
                                action: function () {
                                    (0, f.E5)(f.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, I.r)({
                                              type: q.F.CLICK_INTERNAL,
                                              adCreativeType: o.p.QUEST,
                                              adCreativeId: t.quest.id,
                                              questContentCTA: S.Cy.CONTEXT_MENU_LEARN_MORE,
                                              surfaceId: t.questContent,
                                              sourceQuestContent: t.sourceQuestContent,
                                              impressionId: X,
                                              questContentPosition: t.questContentPosition,
                                          })
                                        : W({
                                              questId: t.quest.id,
                                              questContent: t.questContent,
                                              questContentPosition: t.questContentPosition,
                                              questContentCTA: S.Cy.CONTEXT_MENU_LEARN_MORE,
                                              sourceQuestContent: t.sourceQuestContent,
                                          }),
                                        (0, M.mA)({ fromContent: t.questContent, questId: t.quest.id });
                                },
                                icon: A.r,
                                leadingAccessory: { type: "icon", icon: A.r },
                            }),
                        ta &&
                            (0, s.jsx)(C.Dr, {
                                id: "display-disclosure",
                                label: k.intl.string(k.t.GcsZKJ),
                                action: function () {
                                    (0, M.Zc)(
                                        t.quest,
                                        {
                                            content: t.questContent,
                                            position: t.questContentPosition,
                                            ctaContent: S.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                            impressionId: X,
                                            sourceQuestContent: t.sourceQuestContent,
                                        },
                                        t.returnRef,
                                    );
                                },
                            }),
                        V &&
                            (0, s.jsx)(C.Dr, {
                                id: "hide-entrypoint",
                                label: k.intl.string(k.t.NN79E9),
                                action: function () {
                                    (0, f.E5)(f.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, I.r)({
                                              type: q.F.CLICK_INTERNAL,
                                              adCreativeType: o.p.QUEST,
                                              adCreativeId: t.quest.id,
                                              questContentCTA: S.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              surfaceId: t.questContent,
                                              sourceQuestContent: t.sourceQuestContent,
                                              impressionId: X,
                                              questContentPosition: t.questContentPosition,
                                          })
                                        : W({
                                              questId: t.quest.id,
                                              questContent: t.questContent,
                                              questContentPosition: t.questContentPosition,
                                              questContentCTA: S.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              sourceQuestContent: t.sourceQuestContent,
                                          }),
                                        (0, v.vy)(t.questContent) &&
                                            ((0, O.g5)(t.quest.id, t.questContent), z && (0, M.z6)(t.quest));
                                },
                                subtext: k.intl.string(k.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            t.quest.preview &&
                (0, s.jsxs)(
                    C.rX,
                    {
                        label: k.intl.string(k.t["Ape+mm"]),
                        children: [
                            (0, s.jsx)(C.Dr, { id: "dismiss", label: k.intl.string(k.t.JF6W66), action: G }),
                            (0, s.jsx)(C.Dr, {
                                id: "enrollment",
                                label: k.intl.string(k.t.taqkwK),
                                action: function () {
                                    H(), te();
                                },
                            }),
                            (0, s.jsx)(C.Dr, {
                                id: "progress",
                                label: k.intl.string(k.t.cKSLr4),
                                action: function () {
                                    B(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, s.jsx)(C.Dr, { id: "complete", label: k.intl.string(k.t.jQEfRT), action: Y }),
                            (0, h.g5)(t.quest) &&
                                (0, s.jsxs)(C.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, s.jsx)(C.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${((0, h.YL))(t.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, s.jsx)(C.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: function () {
                                                return (0, O.vD)(t.quest.id, !0).catch(tt);
                                            },
                                        }),
                                        (0, s.jsx)(C.Dr, { id: "stop", label: "Stop heartbeat", action: te }),
                                    ],
                                }),
                            (0, s.jsx)(C.Dr, {
                                id: "copy-quest-id",
                                label: k.intl.string(k.t.oisrFi),
                                action: () => {
                                    (0, N.C)(t.quest.id);
                                },
                            }),
                            (0, s.jsx)(C.Dr, { id: "preview", label: k.intl.string(k.t.tx5Ax5), action: tr }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function z(t) {
    let {
            children: e,
            onOpen: n,
            onClose: u,
            preventIdle: r,
            quest: a,
            questContent: l,
            questContentPosition: C,
            sourceQuestContent: c,
            ...E
        } = t,
        d = (0, U.Ut)(),
        A = (0, g.go)(),
        x = i.useRef(null),
        _ = i.useCallback(() => {
            (0, f.E5)(f.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu_popout")
                ? (0, I.r)({
                      type: q.F.CLICK_INTERNAL,
                      adCreativeType: o.p.QUEST,
                      adCreativeId: a.id,
                      questContentCTA: S.Cy.OPEN_CONTEXT_MENU,
                      surfaceId: l,
                      sourceQuestContent: c,
                      impressionId: A,
                      questContentPosition: C,
                  })
                : d({
                      questId: a.id,
                      questContent: l,
                      questContentCTA: S.Cy.OPEN_CONTEXT_MENU,
                      questContentPosition: C,
                      sourceQuestContent: c,
                  }),
                null != n && n();
        }, [n, a.id, l, C, d, c, A]);
    return (0, s.jsx)(T.Y, {
        targetElementRef: x,
        onRequestOpen: _,
        onRequestClose: u,
        renderPopout: (t) => {
            let { closePopout: e } = t;
            return r
                ? (0, s.jsx)(L.A, {
                      children: (0, s.jsx)(V, {
                          ...E,
                          quest: a,
                          questContent: l,
                          questContentPosition: C,
                          onClose: e,
                          sourceQuestContent: c,
                      }),
                  })
                : (0, s.jsx)(V, {
                      ...E,
                      quest: a,
                      questContent: l,
                      questContentPosition: C,
                      onClose: e,
                      sourceQuestContent: c,
                  });
        },
        animation: T.Y.Animation.NONE,
        children: (t) => (0, s.jsx)("div", { ref: x, children: e(t) }),
    });
}
