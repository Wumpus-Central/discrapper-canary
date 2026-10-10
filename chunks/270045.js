n.d(e, { C: () => H });
var i = n(477900),
    s = n(582128),
    a = n(323889),
    l = n(17928),
    o = n(858899),
    r = n(477782),
    u = n(980707),
    c = n(743368),
    d = n(173936),
    E = n(577473),
    _ = n(922016),
    C = n(442433),
    T = n(181658),
    g = n(274670),
    h = n(144779),
    p = n(976860),
    A = n(246356),
    f = n(957565),
    m = n(396813),
    I = n(859703),
    N = n(738822),
    v = n(104886),
    S = n(77870),
    w = n(18437),
    R = n(590202),
    x = n(971649),
    L = n(651892),
    M = n(710969),
    O = n(792620),
    q = n(814793),
    P = n(518293),
    y = n(617986),
    D = n(190107),
    b = n(652215),
    j = n(818348),
    U = n(660183);
function F(t) {
    let e = (0, l.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.QUEST_BAR_V2), []),
        n = (0, l.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.ACTIVITY_PANEL), []),
        _ = (0, l.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.QUEST_LIVE_STREAM), []),
        A = (0, l.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.MEMBERS_LIST), []),
        F = (0, M.vy)(t.questContent),
        H = [N.uF.QUEST_BAR_V2, N.uF.QUEST_BAR].includes(t.questContent),
        V = (0, w.Ut)(),
        G = (0, x.wW)(),
        k = (0, L.wr)(t.quest),
        B = !0 === t.showShareLink && (0, q.E0)(t.quest.config),
        {
            handleComplete: Q,
            handleProgress: Z,
            handleResetDismissibilityClick: K,
            handleResetStatusClick: J,
            handleOverridePreviewClick: X,
        } = (0, S.j$)(t.quest.id),
        W = (0, S.do)({
            quest: t.quest,
            content: t.questContent,
            ctaContent: R.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: t.sourceQuestContent,
        }),
        Y = (0, P.Lk)({
            isShareable: B,
            questId: t.quest.id,
            trackingCtx: s.useMemo(
                () => ({
                    content: t.questContent,
                    position: t.questContentPosition,
                    ctaContent: R.Cy.CONTEXT_MENU_COPY_LINK,
                    sourceQuestContent: t.sourceQuestContent,
                }),
                [t.questContent, t.questContentPosition, t.sourceQuestContent],
            ),
        });
    function z(t) {
        return (0, o.P0)({ text: new T.A(t, t.status).message, variant: "critical" });
    }
    function $() {
        return (0, m.CV)(t.quest.id).catch(z);
    }
    let tt = (0, S.Ns)(t.quest),
        te = s.useMemo(
            () =>
                (0, i.jsx)(r.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: e?.id === t.quest.id,
                    action: () => X(N.uF.QUEST_BAR_V2),
                }),
            [X, t.quest.id, e?.id],
        ),
        tn = s.useMemo(
            () =>
                (0, i.jsx)(r.sL, {
                    id: "activity-panel",
                    label: "Show in Activity Panel",
                    checked: n?.id === t.quest.id,
                    action: () => X(N.uF.ACTIVITY_PANEL),
                }),
            [X, t.quest.id, n?.id],
        ),
        ti = s.useMemo(
            () =>
                (0, i.jsx)(r.sL, {
                    id: "channel-call-header",
                    label: "Show in Voice Channel Header",
                    checked: _?.id === t.quest.id,
                    action: () => X(N.uF.QUEST_LIVE_STREAM),
                }),
            [X, t.quest.id, _?.id],
        ),
        ts = s.useMemo(
            () =>
                (0, i.jsx)(r.sL, {
                    id: "members-list",
                    label: "Show in Members List",
                    checked: A?.id === t.quest.id,
                    action: () => X(N.uF.MEMBERS_LIST),
                }),
            [X, t.quest.id, A?.id],
        ),
        ta = s.useCallback(() => {
            (0, p.pX)(b.BVt.QUEST_PREVIEW_TOOL_2(t.quest.id));
        }, [t.quest.id]),
        tl = t.shouldShowDisclosure && t.quest.id !== D.Fw;
    return (0, i.jsxs)(u.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != t.onSelect ? t.onSelect() : (0, C.Z_)();
        },
        navId: "quests-entry",
        "aria-label": U.intl.string(U.t.ogxXGq),
        onClose: t?.onClose ?? j.tE,
        children: [
            (0, i.jsxs)(
                r.rX,
                {
                    children: [
                        (0, i.jsx)(r.Dr, {
                            id: "play-game",
                            label: k,
                            action: W,
                            icon: c.W,
                            leadingAccessory: { type: "icon", icon: c.W },
                        }),
                        B &&
                            (0, i.jsx)(r.Dr, {
                                id: "share-link",
                                label: U.intl.string(U.t.RDE0Sc),
                                action: Y,
                                icon: d.LinkIcon,
                                leadingAccessory: { type: "icon", icon: d.LinkIcon },
                            }),
                        tt && te,
                        tt && tn,
                        tt && ti,
                        tt && ts,
                    ],
                },
                "major-actions",
            ),
            (0, i.jsxs)(
                r.rX,
                {
                    children: [
                        !t.hideLearnMore &&
                            (0, i.jsx)(r.Dr, {
                                id: "learn-more",
                                label: U.intl.string(U.t["Ws2Bl+"]),
                                action: function () {
                                    ((0, v.E5)(v.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, g.r)({
                                              type: h.F.CLICK_INTERNAL,
                                              adCreativeType: a.p.QUEST,
                                              adCreativeId: t.quest.id,
                                              questContentCTA: R.Cy.CONTEXT_MENU_LEARN_MORE,
                                              surfaceId: t.questContent,
                                              sourceQuestContent: t.sourceQuestContent,
                                              impressionId: G(),
                                              questContentPosition: t.questContentPosition,
                                          })
                                        : V({
                                              questId: t.quest.id,
                                              questContent: t.questContent,
                                              questContentPosition: t.questContentPosition,
                                              questContentCTA: R.Cy.CONTEXT_MENU_LEARN_MORE,
                                              sourceQuestContent: t.sourceQuestContent,
                                          }),
                                        (0, y.mA)({ fromContent: t.questContent, questId: t.quest.id }));
                                },
                                icon: E.r,
                                leadingAccessory: { type: "icon", icon: E.r },
                            }),
                        tl &&
                            (0, i.jsx)(r.Dr, {
                                id: "display-disclosure",
                                label: U.intl.string(U.t.GcsZKJ),
                                action: function () {
                                    (0, y.Zc)(
                                        t.quest,
                                        {
                                            content: t.questContent,
                                            position: t.questContentPosition,
                                            ctaContent: R.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                            impressionId: G(),
                                            sourceQuestContent: t.sourceQuestContent,
                                        },
                                        t.returnRef,
                                    );
                                },
                            }),
                        F &&
                            (0, i.jsx)(r.Dr, {
                                id: "hide-entrypoint",
                                label: U.intl.string(U.t.NN79E9),
                                action: function () {
                                    ((0, v.E5)(v.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, g.r)({
                                              type: h.F.CLICK_INTERNAL,
                                              adCreativeType: a.p.QUEST,
                                              adCreativeId: t.quest.id,
                                              questContentCTA: R.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              surfaceId: t.questContent,
                                              sourceQuestContent: t.sourceQuestContent,
                                              impressionId: G(),
                                              questContentPosition: t.questContentPosition,
                                          })
                                        : V({
                                              questId: t.quest.id,
                                              questContent: t.questContent,
                                              questContentPosition: t.questContentPosition,
                                              questContentCTA: R.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              sourceQuestContent: t.sourceQuestContent,
                                          }),
                                        (0, M.vy)(t.questContent) &&
                                            ((0, m.g5)(t.quest.id, t.questContent), H && (0, y.z6)(t.quest)));
                                },
                                subtext: U.intl.string(U.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            t.quest.preview &&
                (0, i.jsxs)(
                    r.rX,
                    {
                        label: U.intl.string(U.t["Ape+mm"]),
                        children: [
                            (0, i.jsx)(r.Dr, { id: "dismiss", label: U.intl.string(U.t.JF6W66), action: K }),
                            (0, i.jsx)(r.Dr, {
                                id: "enrollment",
                                label: U.intl.string(U.t.taqkwK),
                                action: function () {
                                    (J(), $());
                                },
                            }),
                            (0, i.jsx)(r.Dr, {
                                id: "progress",
                                label: U.intl.string(U.t.cKSLr4),
                                action: function () {
                                    Z(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, i.jsx)(r.Dr, { id: "complete", label: U.intl.string(U.t.jQEfRT), action: Q }),
                            (0, O.g5)(t.quest) &&
                                (0, i.jsxs)(r.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, i.jsx)(r.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${(0, O.YL)(t.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, i.jsx)(r.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: function () {
                                                return (0, m.vD)(t.quest.id, !0).catch(z);
                                            },
                                        }),
                                        (0, i.jsx)(r.Dr, { id: "stop", label: "Stop heartbeat", action: $ }),
                                    ],
                                }),
                            (0, i.jsx)(r.Dr, {
                                id: "copy-quest-id",
                                label: U.intl.string(U.t.oisrFi),
                                action: () => {
                                    (0, f.C)(t.quest.id);
                                },
                            }),
                            (0, i.jsx)(r.Dr, { id: "preview", label: U.intl.string(U.t.tx5Ax5), action: ta }),
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
            onClose: l,
            preventIdle: o,
            quest: r,
            questContent: u,
            questContentPosition: c,
            sourceQuestContent: d,
            ...E
        } = t,
        C = (0, w.Ut)(),
        T = (0, x.wW)(),
        p = s.useRef(null),
        f = s.useCallback(() => {
            ((0, v.E5)(v.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu_popout")
                ? (0, g.r)({
                      type: h.F.CLICK_INTERNAL,
                      adCreativeType: a.p.QUEST,
                      adCreativeId: r.id,
                      questContentCTA: R.Cy.OPEN_CONTEXT_MENU,
                      surfaceId: u,
                      sourceQuestContent: d,
                      impressionId: T(),
                      questContentPosition: c,
                  })
                : C({
                      questId: r.id,
                      questContent: u,
                      questContentCTA: R.Cy.OPEN_CONTEXT_MENU,
                      questContentPosition: c,
                      sourceQuestContent: d,
                  }),
                null != n && n());
        }, [n, r.id, u, c, C, d, T]);
    return (0, i.jsx)(_.Y, {
        targetElementRef: p,
        onRequestOpen: f,
        onRequestClose: l,
        renderPopout: (t) => {
            let { closePopout: e } = t;
            return o
                ? (0, i.jsx)(A.A, {
                      children: (0, i.jsx)(F, {
                          ...E,
                          quest: r,
                          questContent: u,
                          questContentPosition: c,
                          onClose: e,
                          sourceQuestContent: d,
                      }),
                  })
                : (0, i.jsx)(F, {
                      ...E,
                      quest: r,
                      questContent: u,
                      questContentPosition: c,
                      onClose: e,
                      sourceQuestContent: d,
                  });
        },
        animation: _.Y.Animation.NONE,
        children: (t) => (0, i.jsx)("div", { ref: p, children: e(t) }),
    });
}
