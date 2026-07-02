n.d(e, { C: () => H });
var s = n(627968),
    i = n(64700),
    a = n(323889),
    o = n(17928),
    r = n(691540),
    l = n(857250),
    u = n(97483),
    c = n(477782),
    C = n(980707),
    E = n(743368),
    d = n(173936),
    A = n(577473),
    T = n(922016),
    _ = n(442433),
    I = n(181658),
    x = n(274670),
    L = n(144779),
    N = n(976860),
    O = n(246356),
    f = n(957565),
    g = n(340124),
    R = n(859703),
    y = n(24001),
    h = n(104886),
    p = n(347135),
    P = n(18437),
    S = n(590202),
    D = n(971649),
    U = n(651892),
    q = n(710969),
    v = n(792620),
    Q = n(814793),
    M = n(371912),
    m = n(617986),
    w = n(190107),
    j = n(652215),
    b = n(818348),
    V = n(375708);
function F(t) {
    let e = (0, o.bG)([R.A], () => R.A.getQuestPreviewOverride(y.uF.QUEST_BAR_V2), []),
        n = (0, o.bG)([R.A], () => R.A.getQuestPreviewOverride(y.uF.ACTIVITY_PANEL), []),
        T = (0, o.bG)([R.A], () => R.A.getQuestPreviewOverride(y.uF.QUEST_LIVE_STREAM), []),
        O = (0, o.bG)([R.A], () => R.A.getQuestPreviewOverride(y.uF.MEMBERS_LIST), []),
        F = (0, q.vy)(t.questContent),
        H = [y.uF.QUEST_BAR_V2, y.uF.QUEST_BAR].includes(t.questContent),
        k = (0, P.Ut)(),
        B = (0, D.go)(),
        W = (0, U.wr)(t.quest),
        z = !0 === t.showShareLink && (0, Q.E0)(t.quest.config),
        {
            handleComplete: G,
            handleProgress: X,
            handleResetDismissibilityClick: K,
            handleResetStatusClick: Y,
            handleOverridePreviewClick: Z,
        } = (0, p.j$)(t.quest.id),
        $ = (0, p.do)({
            quest: t.quest,
            content: t.questContent,
            ctaContent: S.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: t.sourceQuestContent,
        }),
        J = (0, M.Lk)({
            isShareable: z,
            questId: t.quest.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: t.questContent,
                    position: t.questContentPosition,
                    ctaContent: S.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: B,
                    sourceQuestContent: t.sourceQuestContent,
                }),
                [t.questContent, t.questContentPosition, t.sourceQuestContent, B],
            ),
        });
    function tt(t) {
        return (0, r.P0)((0, l.o)(new I.A(t, t.status).message, u.Ck.FAILURE));
    }
    function te() {
        return (0, g.CV)(t.quest.id).catch(tt);
    }
    let tn = (0, p.Ns)(t.quest),
        ts = i.useMemo(
            () =>
                (0, s.jsx)(c.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: e?.id === t.quest.id,
                    action: () => Z(y.uF.QUEST_BAR_V2),
                }),
            [Z, t.quest.id, e?.id],
        ),
        ti = i.useMemo(
            () =>
                (0, s.jsx)(c.sL, {
                    id: "activity-panel",
                    label: "Show in Activity Panel",
                    checked: n?.id === t.quest.id,
                    action: () => Z(y.uF.ACTIVITY_PANEL),
                }),
            [Z, t.quest.id, n?.id],
        ),
        ta = i.useMemo(
            () =>
                (0, s.jsx)(c.sL, {
                    id: "channel-call-header",
                    label: "Show in Voice Channel Header",
                    checked: T?.id === t.quest.id,
                    action: () => Z(y.uF.QUEST_LIVE_STREAM),
                }),
            [Z, t.quest.id, T?.id],
        ),
        to = i.useMemo(
            () =>
                (0, s.jsx)(c.sL, {
                    id: "members-list",
                    label: "Show in Members List",
                    checked: O?.id === t.quest.id,
                    action: () => Z(y.uF.MEMBERS_LIST),
                }),
            [Z, t.quest.id, O?.id],
        ),
        tr = i.useCallback(() => {
            (0, N.pX)(j.BVt.QUEST_PREVIEW_TOOL_2(t.quest.id));
        }, [t.quest.id]),
        tl = t.shouldShowDisclosure && t.quest.id !== w.Fw;
    return (0, s.jsxs)(C.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != t.onSelect ? t.onSelect() : (0, _.Z_)();
        },
        navId: "quests-entry",
        "aria-label": V.intl.string(V.t.ogxXGq),
        onClose: t?.onClose ?? b.tE,
        children: [
            (0, s.jsxs)(
                c.rX,
                {
                    children: [
                        (0, s.jsx)(c.Dr, {
                            id: "play-game",
                            label: W,
                            action: $,
                            icon: E.W,
                            leadingAccessory: { type: "icon", icon: E.W },
                        }),
                        z &&
                            (0, s.jsx)(c.Dr, {
                                id: "share-link",
                                label: V.intl.string(V.t.RDE0Sc),
                                action: J,
                                icon: d.q,
                                leadingAccessory: { type: "icon", icon: d.q },
                            }),
                        tn && ts,
                        tn && ti,
                        tn && ta,
                        tn && to,
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
                                label: V.intl.string(V.t["Ws2Bl+"]),
                                action: function () {
                                    (0, h.E5)(h.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, x.r)({
                                              type: L.F.CLICK_INTERNAL,
                                              adCreativeType: a.p.QUEST,
                                              adCreativeId: t.quest.id,
                                              questContentCTA: S.Cy.CONTEXT_MENU_LEARN_MORE,
                                              surfaceId: t.questContent,
                                              sourceQuestContent: t.sourceQuestContent,
                                              impressionId: B,
                                              questContentPosition: t.questContentPosition,
                                          })
                                        : k({
                                              questId: t.quest.id,
                                              questContent: t.questContent,
                                              questContentPosition: t.questContentPosition,
                                              questContentCTA: S.Cy.CONTEXT_MENU_LEARN_MORE,
                                              sourceQuestContent: t.sourceQuestContent,
                                          }),
                                        (0, m.navigateToQuestHome)({
                                            fromContent: t.questContent,
                                            questId: t.quest.id,
                                        });
                                },
                                icon: A.r,
                                leadingAccessory: { type: "icon", icon: A.r },
                            }),
                        tl &&
                            (0, s.jsx)(c.Dr, {
                                id: "display-disclosure",
                                label: V.intl.string(V.t.GcsZKJ),
                                action: function () {
                                    (0, m.Zc)(
                                        t.quest,
                                        {
                                            content: t.questContent,
                                            position: t.questContentPosition,
                                            ctaContent: S.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                            impressionId: B,
                                            sourceQuestContent: t.sourceQuestContent,
                                        },
                                        t.returnRef,
                                    );
                                },
                            }),
                        F &&
                            (0, s.jsx)(c.Dr, {
                                id: "hide-entrypoint",
                                label: V.intl.string(V.t.NN79E9),
                                action: function () {
                                    (0, h.E5)(h.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, x.r)({
                                              type: L.F.CLICK_INTERNAL,
                                              adCreativeType: a.p.QUEST,
                                              adCreativeId: t.quest.id,
                                              questContentCTA: S.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              surfaceId: t.questContent,
                                              sourceQuestContent: t.sourceQuestContent,
                                              impressionId: B,
                                              questContentPosition: t.questContentPosition,
                                          })
                                        : k({
                                              questId: t.quest.id,
                                              questContent: t.questContent,
                                              questContentPosition: t.questContentPosition,
                                              questContentCTA: S.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              sourceQuestContent: t.sourceQuestContent,
                                          }),
                                        (0, q.vy)(t.questContent) &&
                                            ((0, g.g5)(t.quest.id, t.questContent), H && (0, m.z6)(t.quest));
                                },
                                subtext: V.intl.string(V.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            t.quest.preview &&
                (0, s.jsxs)(
                    c.rX,
                    {
                        label: V.intl.string(V.t["Ape+mm"]),
                        children: [
                            (0, s.jsx)(c.Dr, { id: "dismiss", label: V.intl.string(V.t.JF6W66), action: K }),
                            (0, s.jsx)(c.Dr, {
                                id: "enrollment",
                                label: V.intl.string(V.t.taqkwK),
                                action: function () {
                                    Y(), te();
                                },
                            }),
                            (0, s.jsx)(c.Dr, {
                                id: "progress",
                                label: V.intl.string(V.t.cKSLr4),
                                action: function () {
                                    X(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, s.jsx)(c.Dr, { id: "complete", label: V.intl.string(V.t.jQEfRT), action: G }),
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
                                                return (0, g.vD)(t.quest.id, !0).catch(tt);
                                            },
                                        }),
                                        (0, s.jsx)(c.Dr, { id: "stop", label: "Stop heartbeat", action: te }),
                                    ],
                                }),
                            (0, s.jsx)(c.Dr, {
                                id: "copy-quest-id",
                                label: V.intl.string(V.t.oisrFi),
                                action: () => {
                                    (0, f.C)(t.quest.id);
                                },
                            }),
                            (0, s.jsx)(c.Dr, { id: "preview", label: V.intl.string(V.t.tx5Ax5), action: tr }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function H(t) {
    let {
            children: e,
            onOpen: n,
            onClose: o,
            preventIdle: r,
            quest: l,
            questContent: u,
            questContentPosition: c,
            sourceQuestContent: C,
            ...E
        } = t,
        d = (0, P.Ut)(),
        A = (0, D.go)(),
        _ = i.useRef(null),
        I = i.useCallback(() => {
            (0, h.E5)(h.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu_popout")
                ? (0, x.r)({
                      type: L.F.CLICK_INTERNAL,
                      adCreativeType: a.p.QUEST,
                      adCreativeId: l.id,
                      questContentCTA: S.Cy.OPEN_CONTEXT_MENU,
                      surfaceId: u,
                      sourceQuestContent: C,
                      impressionId: A,
                      questContentPosition: c,
                  })
                : d({
                      questId: l.id,
                      questContent: u,
                      questContentCTA: S.Cy.OPEN_CONTEXT_MENU,
                      questContentPosition: c,
                      sourceQuestContent: C,
                  }),
                null != n && n();
        }, [n, l.id, u, c, d, C, A]);
    return (0, s.jsx)(T.Y, {
        targetElementRef: _,
        onRequestOpen: I,
        onRequestClose: o,
        renderPopout: (t) => {
            let { closePopout: e } = t;
            return r
                ? (0, s.jsx)(O.A, {
                      children: (0, s.jsx)(F, {
                          ...E,
                          quest: l,
                          questContent: u,
                          questContentPosition: c,
                          onClose: e,
                          sourceQuestContent: C,
                      }),
                  })
                : (0, s.jsx)(F, {
                      ...E,
                      quest: l,
                      questContent: u,
                      questContentPosition: c,
                      onClose: e,
                      sourceQuestContent: C,
                  });
        },
        animation: T.Y.Animation.NONE,
        children: (t) => (0, s.jsx)("div", { ref: _, children: e(t) }),
    });
}
