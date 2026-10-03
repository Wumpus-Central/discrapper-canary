n.d(t, { C: () => G });
var s = n(477900),
    i = n(582128),
    l = n(323889),
    a = n(17928),
    o = n(739187),
    u = n(857250),
    r = n(97483),
    c = n(477782),
    d = n(980707),
    E = n(743368),
    _ = n(173936),
    C = n(577473),
    h = n(922016),
    A = n(442433),
    T = n(181658),
    p = n(274670),
    g = n(144779),
    I = n(976860),
    f = n(246356),
    v = n(957565),
    N = n(396813),
    m = n(859703),
    w = n(738822),
    R = n(104886),
    S = n(866157),
    M = n(18437),
    x = n(590202),
    O = n(971649),
    q = n(651892),
    L = n(710969),
    P = n(792620),
    y = n(814793),
    D = n(518293),
    j = n(617986),
    b = n(190107),
    U = n(652215),
    F = n(818348),
    H = n(375708);
function V(e) {
    let t = (0, a.bG)([m.A], () => m.A.getQuestPreviewOverride(w.uF.QUEST_BAR_V2), []),
        n = (0, a.bG)([m.A], () => m.A.getQuestPreviewOverride(w.uF.ACTIVITY_PANEL), []),
        h = (0, a.bG)([m.A], () => m.A.getQuestPreviewOverride(w.uF.QUEST_LIVE_STREAM), []),
        f = (0, a.bG)([m.A], () => m.A.getQuestPreviewOverride(w.uF.MEMBERS_LIST), []),
        V = (0, L.vy)(e.questContent),
        G = [w.uF.QUEST_BAR_V2, w.uF.QUEST_BAR].includes(e.questContent),
        k = (0, M.Ut)(),
        B = (0, O.wW)(),
        Z = (0, q.wr)(e.quest),
        Q = !0 === e.showShareLink && (0, y.E0)(e.quest.config),
        {
            handleComplete: K,
            handleProgress: X,
            handleResetDismissibilityClick: J,
            handleResetStatusClick: W,
            handleOverridePreviewClick: Y,
        } = (0, S.j$)(e.quest.id),
        z = (0, S.do)({
            quest: e.quest,
            content: e.questContent,
            ctaContent: x.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: e.sourceQuestContent,
        }),
        $ = (0, D.Lk)({
            isShareable: Q,
            questId: e.quest.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: x.Cy.CONTEXT_MENU_COPY_LINK,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                [e.questContent, e.questContentPosition, e.sourceQuestContent],
            ),
        });
    function ee(e) {
        return (0, o.P)((0, u.o)(new T.A(e, e.status).message, r.Ck.FAILURE));
    }
    function et() {
        return (0, N.CV)(e.quest.id).catch(ee);
    }
    let en = (0, S.Ns)(e.quest),
        es = i.useMemo(
            () =>
                (0, s.jsx)(c.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: t?.id === e.quest.id,
                    action: () => Y(w.uF.QUEST_BAR_V2),
                }),
            [Y, e.quest.id, t?.id],
        ),
        ei = i.useMemo(
            () =>
                (0, s.jsx)(c.sL, {
                    id: "activity-panel",
                    label: "Show in Activity Panel",
                    checked: n?.id === e.quest.id,
                    action: () => Y(w.uF.ACTIVITY_PANEL),
                }),
            [Y, e.quest.id, n?.id],
        ),
        el = i.useMemo(
            () =>
                (0, s.jsx)(c.sL, {
                    id: "channel-call-header",
                    label: "Show in Voice Channel Header",
                    checked: h?.id === e.quest.id,
                    action: () => Y(w.uF.QUEST_LIVE_STREAM),
                }),
            [Y, e.quest.id, h?.id],
        ),
        ea = i.useMemo(
            () =>
                (0, s.jsx)(c.sL, {
                    id: "members-list",
                    label: "Show in Members List",
                    checked: f?.id === e.quest.id,
                    action: () => Y(w.uF.MEMBERS_LIST),
                }),
            [Y, e.quest.id, f?.id],
        ),
        eo = i.useCallback(() => {
            (0, I.pX)(U.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        eu = e.shouldShowDisclosure && e.quest.id !== b.Fw;
    return (0, s.jsxs)(d.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != e.onSelect ? e.onSelect() : (0, A.Z_)();
        },
        navId: "quests-entry",
        "aria-label": H.intl.string(H.t.ogxXGq),
        onClose: e?.onClose ?? F.tE,
        children: [
            (0, s.jsxs)(
                c.rX,
                {
                    children: [
                        (0, s.jsx)(c.Dr, {
                            id: "play-game",
                            label: Z,
                            action: z,
                            icon: E.W,
                            leadingAccessory: { type: "icon", icon: E.W },
                        }),
                        Q &&
                            (0, s.jsx)(c.Dr, {
                                id: "share-link",
                                label: H.intl.string(H.t.RDE0Sc),
                                action: $,
                                icon: _.LinkIcon,
                                leadingAccessory: { type: "icon", icon: _.LinkIcon },
                            }),
                        en && es,
                        en && ei,
                        en && el,
                        en && ea,
                    ],
                },
                "major-actions",
            ),
            (0, s.jsxs)(
                c.rX,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, s.jsx)(c.Dr, {
                                id: "learn-more",
                                label: H.intl.string(H.t["Ws2Bl+"]),
                                action: function () {
                                    ((0, R.E5)(R.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, p.r)({
                                              type: g.F.CLICK_INTERNAL,
                                              adCreativeType: l.p.QUEST,
                                              adCreativeId: e.quest.id,
                                              questContentCTA: x.Cy.CONTEXT_MENU_LEARN_MORE,
                                              surfaceId: e.questContent,
                                              sourceQuestContent: e.sourceQuestContent,
                                              impressionId: B(),
                                              questContentPosition: e.questContentPosition,
                                          })
                                        : k({
                                              questId: e.quest.id,
                                              questContent: e.questContent,
                                              questContentPosition: e.questContentPosition,
                                              questContentCTA: x.Cy.CONTEXT_MENU_LEARN_MORE,
                                              sourceQuestContent: e.sourceQuestContent,
                                          }),
                                        (0, j.mA)({ fromContent: e.questContent, questId: e.quest.id }));
                                },
                                icon: C.r,
                                leadingAccessory: { type: "icon", icon: C.r },
                            }),
                        eu &&
                            (0, s.jsx)(c.Dr, {
                                id: "display-disclosure",
                                label: H.intl.string(H.t.GcsZKJ),
                                action: function () {
                                    (0, j.Zc)(
                                        e.quest,
                                        {
                                            content: e.questContent,
                                            position: e.questContentPosition,
                                            ctaContent: x.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                            impressionId: B(),
                                            sourceQuestContent: e.sourceQuestContent,
                                        },
                                        e.returnRef,
                                    );
                                },
                            }),
                        V &&
                            (0, s.jsx)(c.Dr, {
                                id: "hide-entrypoint",
                                label: H.intl.string(H.t.NN79E9),
                                action: function () {
                                    ((0, R.E5)(R.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, p.r)({
                                              type: g.F.CLICK_INTERNAL,
                                              adCreativeType: l.p.QUEST,
                                              adCreativeId: e.quest.id,
                                              questContentCTA: x.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              surfaceId: e.questContent,
                                              sourceQuestContent: e.sourceQuestContent,
                                              impressionId: B(),
                                              questContentPosition: e.questContentPosition,
                                          })
                                        : k({
                                              questId: e.quest.id,
                                              questContent: e.questContent,
                                              questContentPosition: e.questContentPosition,
                                              questContentCTA: x.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              sourceQuestContent: e.sourceQuestContent,
                                          }),
                                        (0, L.vy)(e.questContent) &&
                                            ((0, N.g5)(e.quest.id, e.questContent), G && (0, j.z6)(e.quest)));
                                },
                                subtext: H.intl.string(H.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, s.jsxs)(
                    c.rX,
                    {
                        label: H.intl.string(H.t["Ape+mm"]),
                        children: [
                            (0, s.jsx)(c.Dr, { id: "dismiss", label: H.intl.string(H.t.JF6W66), action: J }),
                            (0, s.jsx)(c.Dr, {
                                id: "enrollment",
                                label: H.intl.string(H.t.taqkwK),
                                action: function () {
                                    (W(), et());
                                },
                            }),
                            (0, s.jsx)(c.Dr, {
                                id: "progress",
                                label: H.intl.string(H.t.cKSLr4),
                                action: function () {
                                    X(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, s.jsx)(c.Dr, { id: "complete", label: H.intl.string(H.t.jQEfRT), action: K }),
                            (0, P.g5)(e.quest) &&
                                (0, s.jsxs)(c.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, s.jsx)(c.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${(0, P.YL)(e.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, s.jsx)(c.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: function () {
                                                return (0, N.vD)(e.quest.id, !0).catch(ee);
                                            },
                                        }),
                                        (0, s.jsx)(c.Dr, { id: "stop", label: "Stop heartbeat", action: et }),
                                    ],
                                }),
                            (0, s.jsx)(c.Dr, {
                                id: "copy-quest-id",
                                label: H.intl.string(H.t.oisrFi),
                                action: () => {
                                    (0, v.C)(e.quest.id);
                                },
                            }),
                            (0, s.jsx)(c.Dr, { id: "preview", label: H.intl.string(H.t.tx5Ax5), action: eo }),
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
            onClose: a,
            preventIdle: o,
            quest: u,
            questContent: r,
            questContentPosition: c,
            sourceQuestContent: d,
            ...E
        } = e,
        _ = (0, M.Ut)(),
        C = (0, O.wW)(),
        A = i.useRef(null),
        T = i.useCallback(() => {
            ((0, R.E5)(R.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu_popout")
                ? (0, p.r)({
                      type: g.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: u.id,
                      questContentCTA: x.Cy.OPEN_CONTEXT_MENU,
                      surfaceId: r,
                      sourceQuestContent: d,
                      impressionId: C(),
                      questContentPosition: c,
                  })
                : _({
                      questId: u.id,
                      questContent: r,
                      questContentCTA: x.Cy.OPEN_CONTEXT_MENU,
                      questContentPosition: c,
                      sourceQuestContent: d,
                  }),
                null != n && n());
        }, [n, u.id, r, c, _, d, C]);
    return (0, s.jsx)(h.Y, {
        targetElementRef: A,
        onRequestOpen: T,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return o
                ? (0, s.jsx)(f.A, {
                      children: (0, s.jsx)(V, {
                          ...E,
                          quest: u,
                          questContent: r,
                          questContentPosition: c,
                          onClose: t,
                          sourceQuestContent: d,
                      }),
                  })
                : (0, s.jsx)(V, {
                      ...E,
                      quest: u,
                      questContent: r,
                      questContentPosition: c,
                      onClose: t,
                      sourceQuestContent: d,
                  });
        },
        animation: h.Y.Animation.NONE,
        children: (e) => (0, s.jsx)("div", { ref: A, children: t(e) }),
    });
}
