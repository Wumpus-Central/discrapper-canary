n.d(t, { C: () => G });
var s = n(477900),
    i = n(582128),
    a = n(323889),
    l = n(17928),
    o = n(376357),
    r = n(857250),
    u = n(97483),
    c = n(477782),
    d = n(980707),
    E = n(743368),
    _ = n(173936),
    C = n(577473),
    T = n(922016),
    h = n(442433),
    A = n(181658),
    g = n(274670),
    p = n(144779),
    f = n(976860),
    I = n(246356),
    N = n(957565),
    v = n(396813),
    m = n(859703),
    w = n(738822),
    R = n(104886),
    S = n(866157),
    M = n(18437),
    x = n(590202),
    q = n(971649),
    O = n(651892),
    L = n(710969),
    y = n(792620),
    D = n(814793),
    P = n(518293),
    j = n(617986),
    b = n(190107),
    F = n(652215),
    U = n(818348),
    H = n(375708);
function V(e) {
    let t = (0, l.bG)([m.A], () => m.A.getQuestPreviewOverride(w.uF.QUEST_BAR_V2), []),
        n = (0, l.bG)([m.A], () => m.A.getQuestPreviewOverride(w.uF.ACTIVITY_PANEL), []),
        T = (0, l.bG)([m.A], () => m.A.getQuestPreviewOverride(w.uF.QUEST_LIVE_STREAM), []),
        I = (0, l.bG)([m.A], () => m.A.getQuestPreviewOverride(w.uF.MEMBERS_LIST), []),
        V = (0, L.vy)(e.questContent),
        G = [w.uF.QUEST_BAR_V2, w.uF.QUEST_BAR].includes(e.questContent),
        k = (0, M.Ut)(),
        Z = (0, q.wW)(),
        Q = (0, O.wr)(e.quest),
        B = !0 === e.showShareLink && (0, D.E0)(e.quest.config),
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
        $ = (0, P.Lk)({
            isShareable: B,
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
        return (0, o.P)((0, r.o)(new A.A(e, e.status).message, u.Ck.FAILURE));
    }
    function et() {
        return (0, v.CV)(e.quest.id).catch(ee);
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
        ea = i.useMemo(
            () =>
                (0, s.jsx)(c.sL, {
                    id: "channel-call-header",
                    label: "Show in Voice Channel Header",
                    checked: T?.id === e.quest.id,
                    action: () => Y(w.uF.QUEST_LIVE_STREAM),
                }),
            [Y, e.quest.id, T?.id],
        ),
        el = i.useMemo(
            () =>
                (0, s.jsx)(c.sL, {
                    id: "members-list",
                    label: "Show in Members List",
                    checked: I?.id === e.quest.id,
                    action: () => Y(w.uF.MEMBERS_LIST),
                }),
            [Y, e.quest.id, I?.id],
        ),
        eo = i.useCallback(() => {
            (0, f.pX)(F.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        er = e.shouldShowDisclosure && e.quest.id !== b.Fw;
    return (0, s.jsxs)(d.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != e.onSelect ? e.onSelect() : (0, h.Z_)();
        },
        navId: "quests-entry",
        "aria-label": H.intl.string(H.t.ogxXGq),
        onClose: e?.onClose ?? U.tE,
        children: [
            (0, s.jsxs)(
                c.rX,
                {
                    children: [
                        (0, s.jsx)(c.Dr, {
                            id: "play-game",
                            label: Q,
                            action: z,
                            icon: E.W,
                            leadingAccessory: { type: "icon", icon: E.W },
                        }),
                        B &&
                            (0, s.jsx)(c.Dr, {
                                id: "share-link",
                                label: H.intl.string(H.t.RDE0Sc),
                                action: $,
                                icon: _.LinkIcon,
                                leadingAccessory: { type: "icon", icon: _.LinkIcon },
                            }),
                        en && es,
                        en && ei,
                        en && ea,
                        en && el,
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
                                        ? (0, g.r)({
                                              type: p.F.CLICK_INTERNAL,
                                              adCreativeType: a.p.QUEST,
                                              adCreativeId: e.quest.id,
                                              questContentCTA: x.Cy.CONTEXT_MENU_LEARN_MORE,
                                              surfaceId: e.questContent,
                                              sourceQuestContent: e.sourceQuestContent,
                                              impressionId: Z(),
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
                        er &&
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
                                            impressionId: Z(),
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
                                        ? (0, g.r)({
                                              type: p.F.CLICK_INTERNAL,
                                              adCreativeType: a.p.QUEST,
                                              adCreativeId: e.quest.id,
                                              questContentCTA: x.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              surfaceId: e.questContent,
                                              sourceQuestContent: e.sourceQuestContent,
                                              impressionId: Z(),
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
                                            ((0, v.g5)(e.quest.id, e.questContent), G && (0, j.z6)(e.quest)));
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
                            (0, y.g5)(e.quest) &&
                                (0, s.jsxs)(c.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, s.jsx)(c.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${(0, y.YL)(e.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, s.jsx)(c.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: function () {
                                                return (0, v.vD)(e.quest.id, !0).catch(ee);
                                            },
                                        }),
                                        (0, s.jsx)(c.Dr, { id: "stop", label: "Stop heartbeat", action: et }),
                                    ],
                                }),
                            (0, s.jsx)(c.Dr, {
                                id: "copy-quest-id",
                                label: H.intl.string(H.t.oisrFi),
                                action: () => {
                                    (0, N.C)(e.quest.id);
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
            onClose: l,
            preventIdle: o,
            quest: r,
            questContent: u,
            questContentPosition: c,
            sourceQuestContent: d,
            ...E
        } = e,
        _ = (0, M.Ut)(),
        C = (0, q.wW)(),
        h = i.useRef(null),
        A = i.useCallback(() => {
            ((0, R.E5)(R.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu_popout")
                ? (0, g.r)({
                      type: p.F.CLICK_INTERNAL,
                      adCreativeType: a.p.QUEST,
                      adCreativeId: r.id,
                      questContentCTA: x.Cy.OPEN_CONTEXT_MENU,
                      surfaceId: u,
                      sourceQuestContent: d,
                      impressionId: C(),
                      questContentPosition: c,
                  })
                : _({
                      questId: r.id,
                      questContent: u,
                      questContentCTA: x.Cy.OPEN_CONTEXT_MENU,
                      questContentPosition: c,
                      sourceQuestContent: d,
                  }),
                null != n && n());
        }, [n, r.id, u, c, _, d, C]);
    return (0, s.jsx)(T.Y, {
        targetElementRef: h,
        onRequestOpen: A,
        onRequestClose: l,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return o
                ? (0, s.jsx)(I.A, {
                      children: (0, s.jsx)(V, {
                          ...E,
                          quest: r,
                          questContent: u,
                          questContentPosition: c,
                          onClose: t,
                          sourceQuestContent: d,
                      }),
                  })
                : (0, s.jsx)(V, {
                      ...E,
                      quest: r,
                      questContent: u,
                      questContentPosition: c,
                      onClose: t,
                      sourceQuestContent: d,
                  });
        },
        animation: T.Y.Animation.NONE,
        children: (e) => (0, s.jsx)("div", { ref: h, children: t(e) }),
    });
}
