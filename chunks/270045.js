n.d(e, { C: () => F });
var i = n(477900),
    s = n(582128),
    a = n(323889),
    l = n(17928),
    o = n(858899),
    r = n(477782),
    u = n(980707),
    d = n(743368),
    c = n(173936),
    E = n(577473),
    _ = n(265872),
    C = n(442433),
    T = n(181658),
    g = n(274670),
    p = n(144779),
    h = n(976860),
    f = n(246356),
    A = n(957565),
    m = n(396813),
    I = n(859703),
    N = n(738822),
    v = n(104886),
    S = n(77870),
    R = n(18437),
    w = n(590202),
    L = n(971649),
    x = n(651892),
    M = n(710969),
    O = n(792620),
    q = n(814793),
    P = n(201805),
    y = n(617986),
    D = n(190107),
    b = n(652215),
    j = n(818348),
    U = n(105292);
function H(t) {
    let e = (0, l.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.QUEST_BAR_V2), []),
        n = (0, l.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.ACTIVITY_PANEL), []),
        _ = (0, l.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.QUEST_LIVE_STREAM), []),
        f = (0, l.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.MEMBERS_LIST), []),
        H = (0, M.vy)(t.questContent),
        F = [N.uF.QUEST_BAR_V2, N.uF.QUEST_BAR].includes(t.questContent),
        G = (0, R.Ut)(),
        V = (0, L.wW)(),
        k = (0, x.wr)(t.quest),
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
            ctaContent: w.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: t.sourceQuestContent,
        }),
        Y = (0, P.Lk)({
            isShareable: B,
            questId: t.quest.id,
            trackingCtx: s.useMemo(
                () => ({
                    content: t.questContent,
                    position: t.questContentPosition,
                    ctaContent: w.Cy.CONTEXT_MENU_COPY_LINK,
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
                    checked: f?.id === t.quest.id,
                    action: () => X(N.uF.MEMBERS_LIST),
                }),
            [X, t.quest.id, f?.id],
        ),
        ta = s.useCallback(() => {
            (0, h.pX)(b.BVt.QUEST_PREVIEW_TOOL_2(t.quest.id));
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
                            icon: d.W,
                            leadingAccessory: { type: "icon", icon: d.W },
                        }),
                        B &&
                            (0, i.jsx)(r.Dr, {
                                id: "share-link",
                                label: U.intl.string(U.t.RDE0Sc),
                                action: Y,
                                icon: c.LinkIcon,
                                leadingAccessory: { type: "icon", icon: c.LinkIcon },
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
                                              type: p.F.CLICK_INTERNAL,
                                              adCreativeType: a.p.QUEST,
                                              adCreativeId: t.quest.id,
                                              questContentCTA: w.Cy.CONTEXT_MENU_LEARN_MORE,
                                              surfaceId: t.questContent,
                                              sourceQuestContent: t.sourceQuestContent,
                                              impressionId: V(),
                                              questContentPosition: t.questContentPosition,
                                          })
                                        : G({
                                              questId: t.quest.id,
                                              questContent: t.questContent,
                                              questContentPosition: t.questContentPosition,
                                              questContentCTA: w.Cy.CONTEXT_MENU_LEARN_MORE,
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
                                            ctaContent: w.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                            impressionId: V(),
                                            sourceQuestContent: t.sourceQuestContent,
                                        },
                                        t.returnRef,
                                    );
                                },
                            }),
                        H &&
                            (0, i.jsx)(r.Dr, {
                                id: "hide-entrypoint",
                                label: U.intl.string(U.t.NN79E9),
                                action: function () {
                                    ((0, v.E5)(v.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, g.r)({
                                              type: p.F.CLICK_INTERNAL,
                                              adCreativeType: a.p.QUEST,
                                              adCreativeId: t.quest.id,
                                              questContentCTA: w.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              surfaceId: t.questContent,
                                              sourceQuestContent: t.sourceQuestContent,
                                              impressionId: V(),
                                              questContentPosition: t.questContentPosition,
                                          })
                                        : G({
                                              questId: t.quest.id,
                                              questContent: t.questContent,
                                              questContentPosition: t.questContentPosition,
                                              questContentCTA: w.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              sourceQuestContent: t.sourceQuestContent,
                                          }),
                                        (0, M.vy)(t.questContent) &&
                                            ((0, m.g5)(t.quest.id, t.questContent), F && (0, y.z6)(t.quest)));
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
                                    (0, A.C)(t.quest.id);
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
function F(t) {
    let {
            children: e,
            onOpen: n,
            onClose: l,
            preventIdle: o,
            quest: r,
            questContent: u,
            questContentPosition: d,
            sourceQuestContent: c,
            ...E
        } = t,
        C = (0, R.Ut)(),
        T = (0, L.wW)(),
        h = s.useRef(null),
        A = s.useCallback(() => {
            ((0, v.E5)(v.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu_popout")
                ? (0, g.r)({
                      type: p.F.CLICK_INTERNAL,
                      adCreativeType: a.p.QUEST,
                      adCreativeId: r.id,
                      questContentCTA: w.Cy.OPEN_CONTEXT_MENU,
                      surfaceId: u,
                      sourceQuestContent: c,
                      impressionId: T(),
                      questContentPosition: d,
                  })
                : C({
                      questId: r.id,
                      questContent: u,
                      questContentCTA: w.Cy.OPEN_CONTEXT_MENU,
                      questContentPosition: d,
                      sourceQuestContent: c,
                  }),
                null != n && n());
        }, [n, r.id, u, d, C, c, T]);
    return (0, i.jsx)(_.Y, {
        targetElementRef: h,
        onRequestOpen: A,
        onRequestClose: l,
        renderPopout: (t) => {
            let { closePopout: e } = t;
            return o
                ? (0, i.jsx)(f.A, {
                      children: (0, i.jsx)(H, {
                          ...E,
                          quest: r,
                          questContent: u,
                          questContentPosition: d,
                          onClose: e,
                          sourceQuestContent: c,
                      }),
                  })
                : (0, i.jsx)(H, {
                      ...E,
                      quest: r,
                      questContent: u,
                      questContentPosition: d,
                      onClose: e,
                      sourceQuestContent: c,
                  });
        },
        animation: _.Y.Animation.NONE,
        children: (t) => (0, i.jsx)("div", { ref: h, children: e(t) }),
    });
}
