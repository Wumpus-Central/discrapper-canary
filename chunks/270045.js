n.d(t, { C: () => w });
var i = n(477900),
    l = n(582128),
    r = n(323889),
    s = n(17928),
    a = n(376357),
    o = n(857250),
    c = n(97483),
    E = n(477782),
    u = n(980707),
    d = n(743368),
    _ = n(173936),
    A = n(577473),
    T = n(922016),
    I = n(442433),
    N = n(181658),
    R = n(274670),
    C = n(144779),
    O = n(976860),
    m = n(246356),
    S = n(957565),
    f = n(396813),
    p = n(859703),
    g = n(738822),
    D = n(104886),
    P = n(866157),
    h = n(18437),
    M = n(590202),
    U = n(971649),
    y = n(651892),
    L = n(710969),
    x = n(792620),
    k = n(814793),
    v = n(201805),
    j = n(617986),
    G = n(190107),
    b = n(652215),
    q = n(818348),
    B = n(375708);
function X(e) {
    let t = (0, s.bG)([p.A], () => p.A.getQuestPreviewOverride(g.uF.QUEST_BAR_V2), []),
        n = (0, s.bG)([p.A], () => p.A.getQuestPreviewOverride(g.uF.ACTIVITY_PANEL), []),
        T = (0, s.bG)([p.A], () => p.A.getQuestPreviewOverride(g.uF.QUEST_LIVE_STREAM), []),
        m = (0, s.bG)([p.A], () => p.A.getQuestPreviewOverride(g.uF.MEMBERS_LIST), []),
        X = (0, L.vy)(e.questContent),
        w = [g.uF.QUEST_BAR_V2, g.uF.QUEST_BAR].includes(e.questContent),
        F = (0, h.Ut)(),
        H = (0, U.go)(),
        V = (0, y.wr)(e.quest),
        Y = !0 === e.showShareLink && (0, k.E0)(e.quest.config),
        {
            handleComplete: K,
            handleProgress: W,
            handleResetDismissibilityClick: Q,
            handleResetStatusClick: Z,
            handleOverridePreviewClick: z,
        } = (0, P.j$)(e.quest.id),
        $ = (0, P.do)({
            quest: e.quest,
            content: e.questContent,
            ctaContent: M.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: e.sourceQuestContent,
        }),
        J = (0, v.Lk)({
            isShareable: Y,
            questId: e.quest.id,
            trackingCtx: l.useMemo(
                () => ({
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: M.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: H,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                [e.questContent, e.questContentPosition, e.sourceQuestContent, H],
            ),
        });
    function ee(e) {
        return (0, a.P)((0, o.o)(new N.A(e, e.status).message, c.Ck.FAILURE));
    }
    function et() {
        return (0, f.CV)(e.quest.id).catch(ee);
    }
    let en = (0, P.Ns)(e.quest),
        ei = l.useMemo(
            () =>
                (0, i.jsx)(E.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: t?.id === e.quest.id,
                    action: () => z(g.uF.QUEST_BAR_V2),
                }),
            [z, e.quest.id, t?.id],
        ),
        el = l.useMemo(
            () =>
                (0, i.jsx)(E.sL, {
                    id: "activity-panel",
                    label: "Show in Activity Panel",
                    checked: n?.id === e.quest.id,
                    action: () => z(g.uF.ACTIVITY_PANEL),
                }),
            [z, e.quest.id, n?.id],
        ),
        er = l.useMemo(
            () =>
                (0, i.jsx)(E.sL, {
                    id: "channel-call-header",
                    label: "Show in Voice Channel Header",
                    checked: T?.id === e.quest.id,
                    action: () => z(g.uF.QUEST_LIVE_STREAM),
                }),
            [z, e.quest.id, T?.id],
        ),
        es = l.useMemo(
            () =>
                (0, i.jsx)(E.sL, {
                    id: "members-list",
                    label: "Show in Members List",
                    checked: m?.id === e.quest.id,
                    action: () => z(g.uF.MEMBERS_LIST),
                }),
            [z, e.quest.id, m?.id],
        ),
        ea = l.useCallback(() => {
            (0, O.pX)(b.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        eo = e.shouldShowDisclosure && e.quest.id !== G.Fw;
    return (0, i.jsxs)(u.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != e.onSelect ? e.onSelect() : (0, I.Z_)();
        },
        navId: "quests-entry",
        "aria-label": B.intl.string(B.t.ogxXGq),
        onClose: e?.onClose ?? q.tE,
        children: [
            (0, i.jsxs)(
                E.rX,
                {
                    children: [
                        (0, i.jsx)(E.Dr, {
                            id: "play-game",
                            label: V,
                            action: $,
                            icon: d.W,
                            leadingAccessory: { type: "icon", icon: d.W },
                        }),
                        Y &&
                            (0, i.jsx)(E.Dr, {
                                id: "share-link",
                                label: B.intl.string(B.t.RDE0Sc),
                                action: J,
                                icon: _.LinkIcon,
                                leadingAccessory: { type: "icon", icon: _.LinkIcon },
                            }),
                        en && ei,
                        en && el,
                        en && er,
                        en && es,
                    ],
                },
                "major-actions",
            ),
            (0, i.jsxs)(
                E.rX,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, i.jsx)(E.Dr, {
                                id: "learn-more",
                                label: B.intl.string(B.t["Ws2Bl+"]),
                                action: function () {
                                    ((0, D.E5)(D.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, R.r)({
                                              type: C.F.CLICK_INTERNAL,
                                              adCreativeType: r.p.QUEST,
                                              adCreativeId: e.quest.id,
                                              questContentCTA: M.Cy.CONTEXT_MENU_LEARN_MORE,
                                              surfaceId: e.questContent,
                                              sourceQuestContent: e.sourceQuestContent,
                                              impressionId: H,
                                              questContentPosition: e.questContentPosition,
                                          })
                                        : F({
                                              questId: e.quest.id,
                                              questContent: e.questContent,
                                              questContentPosition: e.questContentPosition,
                                              questContentCTA: M.Cy.CONTEXT_MENU_LEARN_MORE,
                                              sourceQuestContent: e.sourceQuestContent,
                                          }),
                                        (0, j.mA)({ fromContent: e.questContent, questId: e.quest.id }));
                                },
                                icon: A.r,
                                leadingAccessory: { type: "icon", icon: A.r },
                            }),
                        eo &&
                            (0, i.jsx)(E.Dr, {
                                id: "display-disclosure",
                                label: B.intl.string(B.t.GcsZKJ),
                                action: function () {
                                    (0, j.Zc)(
                                        e.quest,
                                        {
                                            content: e.questContent,
                                            position: e.questContentPosition,
                                            ctaContent: M.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                            impressionId: H,
                                            sourceQuestContent: e.sourceQuestContent,
                                        },
                                        e.returnRef,
                                    );
                                },
                            }),
                        X &&
                            (0, i.jsx)(E.Dr, {
                                id: "hide-entrypoint",
                                label: B.intl.string(B.t.NN79E9),
                                action: function () {
                                    ((0, D.E5)(D.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, R.r)({
                                              type: C.F.CLICK_INTERNAL,
                                              adCreativeType: r.p.QUEST,
                                              adCreativeId: e.quest.id,
                                              questContentCTA: M.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              surfaceId: e.questContent,
                                              sourceQuestContent: e.sourceQuestContent,
                                              impressionId: H,
                                              questContentPosition: e.questContentPosition,
                                          })
                                        : F({
                                              questId: e.quest.id,
                                              questContent: e.questContent,
                                              questContentPosition: e.questContentPosition,
                                              questContentCTA: M.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              sourceQuestContent: e.sourceQuestContent,
                                          }),
                                        (0, L.vy)(e.questContent) &&
                                            ((0, f.g5)(e.quest.id, e.questContent), w && (0, j.z6)(e.quest)));
                                },
                                subtext: B.intl.string(B.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, i.jsxs)(
                    E.rX,
                    {
                        label: B.intl.string(B.t["Ape+mm"]),
                        children: [
                            (0, i.jsx)(E.Dr, { id: "dismiss", label: B.intl.string(B.t.JF6W66), action: Q }),
                            (0, i.jsx)(E.Dr, {
                                id: "enrollment",
                                label: B.intl.string(B.t.taqkwK),
                                action: function () {
                                    (Z(), et());
                                },
                            }),
                            (0, i.jsx)(E.Dr, {
                                id: "progress",
                                label: B.intl.string(B.t.cKSLr4),
                                action: function () {
                                    W(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, i.jsx)(E.Dr, { id: "complete", label: B.intl.string(B.t.jQEfRT), action: K }),
                            (0, x.g5)(e.quest) &&
                                (0, i.jsxs)(E.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, i.jsx)(E.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${(0, x.YL)(e.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, i.jsx)(E.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: function () {
                                                return (0, f.vD)(e.quest.id, !0).catch(ee);
                                            },
                                        }),
                                        (0, i.jsx)(E.Dr, { id: "stop", label: "Stop heartbeat", action: et }),
                                    ],
                                }),
                            (0, i.jsx)(E.Dr, {
                                id: "copy-quest-id",
                                label: B.intl.string(B.t.oisrFi),
                                action: () => {
                                    (0, S.C)(e.quest.id);
                                },
                            }),
                            (0, i.jsx)(E.Dr, { id: "preview", label: B.intl.string(B.t.tx5Ax5), action: ea }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function w(e) {
    let {
            children: t,
            onOpen: n,
            onClose: s,
            preventIdle: a,
            quest: o,
            questContent: c,
            questContentPosition: E,
            sourceQuestContent: u,
            ...d
        } = e,
        _ = (0, h.Ut)(),
        A = (0, U.go)(),
        I = l.useRef(null),
        N = l.useCallback(() => {
            ((0, D.E5)(D.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu_popout")
                ? (0, R.r)({
                      type: C.F.CLICK_INTERNAL,
                      adCreativeType: r.p.QUEST,
                      adCreativeId: o.id,
                      questContentCTA: M.Cy.OPEN_CONTEXT_MENU,
                      surfaceId: c,
                      sourceQuestContent: u,
                      impressionId: A,
                      questContentPosition: E,
                  })
                : _({
                      questId: o.id,
                      questContent: c,
                      questContentCTA: M.Cy.OPEN_CONTEXT_MENU,
                      questContentPosition: E,
                      sourceQuestContent: u,
                  }),
                null != n && n());
        }, [n, o.id, c, E, _, u, A]);
    return (0, i.jsx)(T.Y, {
        targetElementRef: I,
        onRequestOpen: N,
        onRequestClose: s,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return a
                ? (0, i.jsx)(m.A, {
                      children: (0, i.jsx)(X, {
                          ...d,
                          quest: o,
                          questContent: c,
                          questContentPosition: E,
                          onClose: t,
                          sourceQuestContent: u,
                      }),
                  })
                : (0, i.jsx)(X, {
                      ...d,
                      quest: o,
                      questContent: c,
                      questContentPosition: E,
                      onClose: t,
                      sourceQuestContent: u,
                  });
        },
        animation: T.Y.Animation.NONE,
        children: (e) => (0, i.jsx)("div", { ref: I, children: t(e) }),
    });
}
