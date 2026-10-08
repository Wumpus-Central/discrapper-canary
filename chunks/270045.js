n.d(t, { C: () => H });
var s = n(477900),
    i = n(582128),
    l = n(323889),
    a = n(17928),
    o = n(376357),
    u = n(477782),
    r = n(980707),
    c = n(743368),
    d = n(173936),
    E = n(577473),
    _ = n(922016),
    C = n(442433),
    h = n(181658),
    A = n(274670),
    T = n(144779),
    p = n(976860),
    g = n(246356),
    I = n(957565),
    f = n(396813),
    N = n(859703),
    m = n(738822),
    v = n(104886),
    w = n(77870),
    R = n(18437),
    S = n(590202),
    M = n(971649),
    q = n(651892),
    O = n(710969),
    x = n(792620),
    L = n(814793),
    P = n(518293),
    y = n(617986),
    D = n(190107),
    j = n(652215),
    b = n(818348),
    U = n(660183);
function F(e) {
    let t = (0, a.bG)([N.A], () => N.A.getQuestPreviewOverride(m.uF.QUEST_BAR_V2), []),
        n = (0, a.bG)([N.A], () => N.A.getQuestPreviewOverride(m.uF.ACTIVITY_PANEL), []),
        _ = (0, a.bG)([N.A], () => N.A.getQuestPreviewOverride(m.uF.QUEST_LIVE_STREAM), []),
        g = (0, a.bG)([N.A], () => N.A.getQuestPreviewOverride(m.uF.MEMBERS_LIST), []),
        F = (0, O.vy)(e.questContent),
        H = [m.uF.QUEST_BAR_V2, m.uF.QUEST_BAR].includes(e.questContent),
        V = (0, R.Ut)(),
        G = (0, M.wW)(),
        k = (0, q.wr)(e.quest),
        B = !0 === e.showShareLink && (0, L.E0)(e.quest.config),
        {
            handleComplete: Q,
            handleProgress: Z,
            handleResetDismissibilityClick: K,
            handleResetStatusClick: X,
            handleOverridePreviewClick: J,
        } = (0, w.j$)(e.quest.id),
        W = (0, w.do)({
            quest: e.quest,
            content: e.questContent,
            ctaContent: S.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: e.sourceQuestContent,
        }),
        Y = (0, P.Lk)({
            isShareable: B,
            questId: e.quest.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: S.Cy.CONTEXT_MENU_COPY_LINK,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                [e.questContent, e.questContentPosition, e.sourceQuestContent],
            ),
        });
    function z(e) {
        return (0, o.P0)((0, o.ox)(new h.A(e, e.status).message, o.Ck.FAILURE));
    }
    function $() {
        return (0, f.CV)(e.quest.id).catch(z);
    }
    let ee = (0, w.Ns)(e.quest),
        et = i.useMemo(
            () =>
                (0, s.jsx)(u.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: t?.id === e.quest.id,
                    action: () => J(m.uF.QUEST_BAR_V2),
                }),
            [J, e.quest.id, t?.id],
        ),
        en = i.useMemo(
            () =>
                (0, s.jsx)(u.sL, {
                    id: "activity-panel",
                    label: "Show in Activity Panel",
                    checked: n?.id === e.quest.id,
                    action: () => J(m.uF.ACTIVITY_PANEL),
                }),
            [J, e.quest.id, n?.id],
        ),
        es = i.useMemo(
            () =>
                (0, s.jsx)(u.sL, {
                    id: "channel-call-header",
                    label: "Show in Voice Channel Header",
                    checked: _?.id === e.quest.id,
                    action: () => J(m.uF.QUEST_LIVE_STREAM),
                }),
            [J, e.quest.id, _?.id],
        ),
        ei = i.useMemo(
            () =>
                (0, s.jsx)(u.sL, {
                    id: "members-list",
                    label: "Show in Members List",
                    checked: g?.id === e.quest.id,
                    action: () => J(m.uF.MEMBERS_LIST),
                }),
            [J, e.quest.id, g?.id],
        ),
        el = i.useCallback(() => {
            (0, p.pX)(j.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        ea = e.shouldShowDisclosure && e.quest.id !== D.Fw;
    return (0, s.jsxs)(r.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != e.onSelect ? e.onSelect() : (0, C.Z_)();
        },
        navId: "quests-entry",
        "aria-label": U.intl.string(U.t.ogxXGq),
        onClose: e?.onClose ?? b.tE,
        children: [
            (0, s.jsxs)(
                u.rX,
                {
                    children: [
                        (0, s.jsx)(u.Dr, {
                            id: "play-game",
                            label: k,
                            action: W,
                            icon: c.W,
                            leadingAccessory: { type: "icon", icon: c.W },
                        }),
                        B &&
                            (0, s.jsx)(u.Dr, {
                                id: "share-link",
                                label: U.intl.string(U.t.RDE0Sc),
                                action: Y,
                                icon: d.LinkIcon,
                                leadingAccessory: { type: "icon", icon: d.LinkIcon },
                            }),
                        ee && et,
                        ee && en,
                        ee && es,
                        ee && ei,
                    ],
                },
                "major-actions",
            ),
            (0, s.jsxs)(
                u.rX,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, s.jsx)(u.Dr, {
                                id: "learn-more",
                                label: U.intl.string(U.t["Ws2Bl+"]),
                                action: function () {
                                    ((0, v.E5)(v.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, A.r)({
                                              type: T.F.CLICK_INTERNAL,
                                              adCreativeType: l.p.QUEST,
                                              adCreativeId: e.quest.id,
                                              questContentCTA: S.Cy.CONTEXT_MENU_LEARN_MORE,
                                              surfaceId: e.questContent,
                                              sourceQuestContent: e.sourceQuestContent,
                                              impressionId: G(),
                                              questContentPosition: e.questContentPosition,
                                          })
                                        : V({
                                              questId: e.quest.id,
                                              questContent: e.questContent,
                                              questContentPosition: e.questContentPosition,
                                              questContentCTA: S.Cy.CONTEXT_MENU_LEARN_MORE,
                                              sourceQuestContent: e.sourceQuestContent,
                                          }),
                                        (0, y.mA)({ fromContent: e.questContent, questId: e.quest.id }));
                                },
                                icon: E.r,
                                leadingAccessory: { type: "icon", icon: E.r },
                            }),
                        ea &&
                            (0, s.jsx)(u.Dr, {
                                id: "display-disclosure",
                                label: U.intl.string(U.t.GcsZKJ),
                                action: function () {
                                    (0, y.Zc)(
                                        e.quest,
                                        {
                                            content: e.questContent,
                                            position: e.questContentPosition,
                                            ctaContent: S.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                            impressionId: G(),
                                            sourceQuestContent: e.sourceQuestContent,
                                        },
                                        e.returnRef,
                                    );
                                },
                            }),
                        F &&
                            (0, s.jsx)(u.Dr, {
                                id: "hide-entrypoint",
                                label: U.intl.string(U.t.NN79E9),
                                action: function () {
                                    ((0, v.E5)(v.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, A.r)({
                                              type: T.F.CLICK_INTERNAL,
                                              adCreativeType: l.p.QUEST,
                                              adCreativeId: e.quest.id,
                                              questContentCTA: S.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              surfaceId: e.questContent,
                                              sourceQuestContent: e.sourceQuestContent,
                                              impressionId: G(),
                                              questContentPosition: e.questContentPosition,
                                          })
                                        : V({
                                              questId: e.quest.id,
                                              questContent: e.questContent,
                                              questContentPosition: e.questContentPosition,
                                              questContentCTA: S.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              sourceQuestContent: e.sourceQuestContent,
                                          }),
                                        (0, O.vy)(e.questContent) &&
                                            ((0, f.g5)(e.quest.id, e.questContent), H && (0, y.z6)(e.quest)));
                                },
                                subtext: U.intl.string(U.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, s.jsxs)(
                    u.rX,
                    {
                        label: U.intl.string(U.t["Ape+mm"]),
                        children: [
                            (0, s.jsx)(u.Dr, { id: "dismiss", label: U.intl.string(U.t.JF6W66), action: K }),
                            (0, s.jsx)(u.Dr, {
                                id: "enrollment",
                                label: U.intl.string(U.t.taqkwK),
                                action: function () {
                                    (X(), $());
                                },
                            }),
                            (0, s.jsx)(u.Dr, {
                                id: "progress",
                                label: U.intl.string(U.t.cKSLr4),
                                action: function () {
                                    Z(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, s.jsx)(u.Dr, { id: "complete", label: U.intl.string(U.t.jQEfRT), action: Q }),
                            (0, x.g5)(e.quest) &&
                                (0, s.jsxs)(u.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, s.jsx)(u.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${(0, x.YL)(e.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, s.jsx)(u.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: function () {
                                                return (0, f.vD)(e.quest.id, !0).catch(z);
                                            },
                                        }),
                                        (0, s.jsx)(u.Dr, { id: "stop", label: "Stop heartbeat", action: $ }),
                                    ],
                                }),
                            (0, s.jsx)(u.Dr, {
                                id: "copy-quest-id",
                                label: U.intl.string(U.t.oisrFi),
                                action: () => {
                                    (0, I.C)(e.quest.id);
                                },
                            }),
                            (0, s.jsx)(u.Dr, { id: "preview", label: U.intl.string(U.t.tx5Ax5), action: el }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function H(e) {
    let {
            children: t,
            onOpen: n,
            onClose: a,
            preventIdle: o,
            quest: u,
            questContent: r,
            questContentPosition: c,
            sourceQuestContent: d,
            ...E
        } = e,
        C = (0, R.Ut)(),
        h = (0, M.wW)(),
        p = i.useRef(null),
        I = i.useCallback(() => {
            ((0, v.E5)(v.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu_popout")
                ? (0, A.r)({
                      type: T.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: u.id,
                      questContentCTA: S.Cy.OPEN_CONTEXT_MENU,
                      surfaceId: r,
                      sourceQuestContent: d,
                      impressionId: h(),
                      questContentPosition: c,
                  })
                : C({
                      questId: u.id,
                      questContent: r,
                      questContentCTA: S.Cy.OPEN_CONTEXT_MENU,
                      questContentPosition: c,
                      sourceQuestContent: d,
                  }),
                null != n && n());
        }, [n, u.id, r, c, C, d, h]);
    return (0, s.jsx)(_.Y, {
        targetElementRef: p,
        onRequestOpen: I,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return o
                ? (0, s.jsx)(g.A, {
                      children: (0, s.jsx)(F, {
                          ...E,
                          quest: u,
                          questContent: r,
                          questContentPosition: c,
                          onClose: t,
                          sourceQuestContent: d,
                      }),
                  })
                : (0, s.jsx)(F, {
                      ...E,
                      quest: u,
                      questContent: r,
                      questContentPosition: c,
                      onClose: t,
                      sourceQuestContent: d,
                  });
        },
        animation: _.Y.Animation.NONE,
        children: (e) => (0, s.jsx)("div", { ref: p, children: t(e) }),
    });
}
