n.d(t, { C: () => w });
var i = n(477900),
    l = n(582128),
    r = n(323889),
    s = n(17928),
    a = n(691540),
    o = n(857250),
    E = n(97483),
    c = n(477782),
    u = n(980707),
    _ = n(743368),
    A = n(173936),
    d = n(577473),
    T = n(922016),
    I = n(442433),
    N = n(181658),
    R = n(274670),
    C = n(144779),
    S = n(976860),
    O = n(246356),
    D = n(957565),
    m = n(396813),
    P = n(859703),
    p = n(738822),
    f = n(104886),
    M = n(309593),
    g = n(18437),
    h = n(590202),
    U = n(971649),
    L = n(651892),
    y = n(710969),
    k = n(792620),
    x = n(814793),
    G = n(201805),
    j = n(617986),
    v = n(190107),
    q = n(652215),
    b = n(818348),
    X = n(375708);
function B(e) {
    let t = (0, s.bG)([P.A], () => P.A.getQuestPreviewOverride(p.uF.QUEST_BAR_V2), []),
        n = (0, s.bG)([P.A], () => P.A.getQuestPreviewOverride(p.uF.ACTIVITY_PANEL), []),
        T = (0, s.bG)([P.A], () => P.A.getQuestPreviewOverride(p.uF.QUEST_LIVE_STREAM), []),
        O = (0, s.bG)([P.A], () => P.A.getQuestPreviewOverride(p.uF.MEMBERS_LIST), []),
        B = (0, y.vy)(e.questContent),
        w = [p.uF.QUEST_BAR_V2, p.uF.QUEST_BAR].includes(e.questContent),
        F = (0, g.Ut)(),
        H = (0, U.go)(),
        V = (0, L.wr)(e.quest),
        K = !0 === e.showShareLink && (0, x.E0)(e.quest.config),
        {
            handleComplete: Y,
            handleProgress: W,
            handleResetDismissibilityClick: Q,
            handleResetStatusClick: Z,
            handleOverridePreviewClick: $,
        } = (0, M.j$)(e.quest.id),
        z = (0, M.do)({
            quest: e.quest,
            content: e.questContent,
            ctaContent: h.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: e.sourceQuestContent,
        }),
        J = (0, G.Lk)({
            isShareable: K,
            questId: e.quest.id,
            trackingCtx: l.useMemo(
                () => ({
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: h.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: H,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                [e.questContent, e.questContentPosition, e.sourceQuestContent, H],
            ),
        });
    function ee(e) {
        return (0, a.P0)((0, o.o)(new N.A(e, e.status).message, E.Ck.FAILURE));
    }
    function et() {
        return (0, m.CV)(e.quest.id).catch(ee);
    }
    let en = (0, M.Ns)(e.quest),
        ei = l.useMemo(
            () =>
                (0, i.jsx)(c.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: t?.id === e.quest.id,
                    action: () => $(p.uF.QUEST_BAR_V2),
                }),
            [$, e.quest.id, t?.id],
        ),
        el = l.useMemo(
            () =>
                (0, i.jsx)(c.sL, {
                    id: "activity-panel",
                    label: "Show in Activity Panel",
                    checked: n?.id === e.quest.id,
                    action: () => $(p.uF.ACTIVITY_PANEL),
                }),
            [$, e.quest.id, n?.id],
        ),
        er = l.useMemo(
            () =>
                (0, i.jsx)(c.sL, {
                    id: "channel-call-header",
                    label: "Show in Voice Channel Header",
                    checked: T?.id === e.quest.id,
                    action: () => $(p.uF.QUEST_LIVE_STREAM),
                }),
            [$, e.quest.id, T?.id],
        ),
        es = l.useMemo(
            () =>
                (0, i.jsx)(c.sL, {
                    id: "members-list",
                    label: "Show in Members List",
                    checked: O?.id === e.quest.id,
                    action: () => $(p.uF.MEMBERS_LIST),
                }),
            [$, e.quest.id, O?.id],
        ),
        ea = l.useCallback(() => {
            (0, S.pX)(q.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        eo = e.shouldShowDisclosure && e.quest.id !== v.Fw;
    return (0, i.jsxs)(u.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != e.onSelect ? e.onSelect() : (0, I.Z_)();
        },
        navId: "quests-entry",
        "aria-label": X.intl.string(X.t.ogxXGq),
        onClose: e?.onClose ?? b.tE,
        children: [
            (0, i.jsxs)(
                c.rX,
                {
                    children: [
                        (0, i.jsx)(c.Dr, {
                            id: "play-game",
                            label: V,
                            action: z,
                            icon: _.W,
                            leadingAccessory: { type: "icon", icon: _.W },
                        }),
                        K &&
                            (0, i.jsx)(c.Dr, {
                                id: "share-link",
                                label: X.intl.string(X.t.RDE0Sc),
                                action: J,
                                icon: A.LinkIcon,
                                leadingAccessory: { type: "icon", icon: A.LinkIcon },
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
                c.rX,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, i.jsx)(c.Dr, {
                                id: "learn-more",
                                label: X.intl.string(X.t["Ws2Bl+"]),
                                action: function () {
                                    (0, f.E5)(f.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, R.r)({
                                              type: C.F.CLICK_INTERNAL,
                                              adCreativeType: r.p.QUEST,
                                              adCreativeId: e.quest.id,
                                              questContentCTA: h.Cy.CONTEXT_MENU_LEARN_MORE,
                                              surfaceId: e.questContent,
                                              sourceQuestContent: e.sourceQuestContent,
                                              impressionId: H,
                                              questContentPosition: e.questContentPosition,
                                          })
                                        : F({
                                              questId: e.quest.id,
                                              questContent: e.questContent,
                                              questContentPosition: e.questContentPosition,
                                              questContentCTA: h.Cy.CONTEXT_MENU_LEARN_MORE,
                                              sourceQuestContent: e.sourceQuestContent,
                                          }),
                                        (0, j.mA)({ fromContent: e.questContent, questId: e.quest.id });
                                },
                                icon: d.r,
                                leadingAccessory: { type: "icon", icon: d.r },
                            }),
                        eo &&
                            (0, i.jsx)(c.Dr, {
                                id: "display-disclosure",
                                label: X.intl.string(X.t.GcsZKJ),
                                action: function () {
                                    (0, j.Zc)(
                                        e.quest,
                                        {
                                            content: e.questContent,
                                            position: e.questContentPosition,
                                            ctaContent: h.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                            impressionId: H,
                                            sourceQuestContent: e.sourceQuestContent,
                                        },
                                        e.returnRef,
                                    );
                                },
                            }),
                        B &&
                            (0, i.jsx)(c.Dr, {
                                id: "hide-entrypoint",
                                label: X.intl.string(X.t.NN79E9),
                                action: function () {
                                    (0, f.E5)(f.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, R.r)({
                                              type: C.F.CLICK_INTERNAL,
                                              adCreativeType: r.p.QUEST,
                                              adCreativeId: e.quest.id,
                                              questContentCTA: h.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              surfaceId: e.questContent,
                                              sourceQuestContent: e.sourceQuestContent,
                                              impressionId: H,
                                              questContentPosition: e.questContentPosition,
                                          })
                                        : F({
                                              questId: e.quest.id,
                                              questContent: e.questContent,
                                              questContentPosition: e.questContentPosition,
                                              questContentCTA: h.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              sourceQuestContent: e.sourceQuestContent,
                                          }),
                                        (0, y.vy)(e.questContent) &&
                                            ((0, m.g5)(e.quest.id, e.questContent), w && (0, j.z6)(e.quest));
                                },
                                subtext: X.intl.string(X.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, i.jsxs)(
                    c.rX,
                    {
                        label: X.intl.string(X.t["Ape+mm"]),
                        children: [
                            (0, i.jsx)(c.Dr, { id: "dismiss", label: X.intl.string(X.t.JF6W66), action: Q }),
                            (0, i.jsx)(c.Dr, {
                                id: "enrollment",
                                label: X.intl.string(X.t.taqkwK),
                                action: function () {
                                    Z(), et();
                                },
                            }),
                            (0, i.jsx)(c.Dr, {
                                id: "progress",
                                label: X.intl.string(X.t.cKSLr4),
                                action: function () {
                                    W(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, i.jsx)(c.Dr, { id: "complete", label: X.intl.string(X.t.jQEfRT), action: Y }),
                            (0, k.g5)(e.quest) &&
                                (0, i.jsxs)(c.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, i.jsx)(c.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${((0, k.YL))(e.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, i.jsx)(c.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: function () {
                                                return (0, m.vD)(e.quest.id, !0).catch(ee);
                                            },
                                        }),
                                        (0, i.jsx)(c.Dr, { id: "stop", label: "Stop heartbeat", action: et }),
                                    ],
                                }),
                            (0, i.jsx)(c.Dr, {
                                id: "copy-quest-id",
                                label: X.intl.string(X.t.oisrFi),
                                action: () => {
                                    (0, D.C)(e.quest.id);
                                },
                            }),
                            (0, i.jsx)(c.Dr, { id: "preview", label: X.intl.string(X.t.tx5Ax5), action: ea }),
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
            questContent: E,
            questContentPosition: c,
            sourceQuestContent: u,
            ..._
        } = e,
        A = (0, g.Ut)(),
        d = (0, U.go)(),
        I = l.useRef(null),
        N = l.useCallback(() => {
            (0, f.E5)(f.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu_popout")
                ? (0, R.r)({
                      type: C.F.CLICK_INTERNAL,
                      adCreativeType: r.p.QUEST,
                      adCreativeId: o.id,
                      questContentCTA: h.Cy.OPEN_CONTEXT_MENU,
                      surfaceId: E,
                      sourceQuestContent: u,
                      impressionId: d,
                      questContentPosition: c,
                  })
                : A({
                      questId: o.id,
                      questContent: E,
                      questContentCTA: h.Cy.OPEN_CONTEXT_MENU,
                      questContentPosition: c,
                      sourceQuestContent: u,
                  }),
                null != n && n();
        }, [n, o.id, E, c, A, u, d]);
    return (0, i.jsx)(T.Y, {
        targetElementRef: I,
        onRequestOpen: N,
        onRequestClose: s,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return a
                ? (0, i.jsx)(O.A, {
                      children: (0, i.jsx)(B, {
                          ..._,
                          quest: o,
                          questContent: E,
                          questContentPosition: c,
                          onClose: t,
                          sourceQuestContent: u,
                      }),
                  })
                : (0, i.jsx)(B, {
                      ..._,
                      quest: o,
                      questContent: E,
                      questContentPosition: c,
                      onClose: t,
                      sourceQuestContent: u,
                  });
        },
        animation: T.Y.Animation.NONE,
        children: (e) => (0, i.jsx)("div", { ref: I, children: t(e) }),
    });
}
