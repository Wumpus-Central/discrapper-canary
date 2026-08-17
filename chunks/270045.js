n.d(e, { C: () => X });
var s = n(477900),
    i = n(582128),
    o = n(323889),
    u = n(17928),
    r = n(691540),
    c = n(857250),
    C = n(97483),
    a = n(477782),
    d = n(980707),
    l = n(743368),
    q = n(173936),
    E = n(577473),
    _ = n(922016),
    T = n(442433),
    N = n(181658),
    A = n(274670),
    I = n(144779),
    p = n(976860),
    x = n(246356),
    h = n(957565),
    L = n(396813),
    b = n(859703),
    S = n(24001),
    y = n(104886),
    g = n(309593),
    Q = n(18437),
    j = n(590202),
    P = n(971649),
    m = n(651892),
    R = n(710969),
    v = n(792620),
    O = n(814793),
    M = n(201805),
    D = n(617986),
    U = n(190107),
    f = n(652215),
    k = n(818348),
    w = n(375708);
function F(t) {
    let e = (0, u.bG)([b.A], () => b.A.getQuestPreviewOverride(S.uF.QUEST_BAR_V2), []),
        n = (0, u.bG)([b.A], () => b.A.getQuestPreviewOverride(S.uF.ACTIVITY_PANEL), []),
        _ = (0, u.bG)([b.A], () => b.A.getQuestPreviewOverride(S.uF.QUEST_LIVE_STREAM), []),
        x = (0, u.bG)([b.A], () => b.A.getQuestPreviewOverride(S.uF.MEMBERS_LIST), []),
        F = (0, R.vy)(t.questContent),
        X = [S.uF.QUEST_BAR_V2, S.uF.QUEST_BAR].includes(t.questContent),
        K = (0, Q.Ut)(),
        V = (0, P.go)(),
        B = (0, m.wr)(t.quest),
        G = !0 === t.showShareLink && (0, O.E0)(t.quest.config),
        {
            handleComplete: W,
            handleProgress: Y,
            handleResetDismissibilityClick: H,
            handleResetStatusClick: Z,
            handleOverridePreviewClick: J,
        } = (0, g.j$)(t.quest.id),
        $ = (0, g.do)({
            quest: t.quest,
            content: t.questContent,
            ctaContent: j.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: t.sourceQuestContent,
        }),
        z = (0, M.Lk)({
            isShareable: G,
            questId: t.quest.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: t.questContent,
                    position: t.questContentPosition,
                    ctaContent: j.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: V,
                    sourceQuestContent: t.sourceQuestContent,
                }),
                [t.questContent, t.questContentPosition, t.sourceQuestContent, V],
            ),
        });
    function tt(t) {
        return (0, r.P0)((0, c.o)(new N.A(t, t.status).message, C.Ck.FAILURE));
    }
    function te() {
        return (0, L.CV)(t.quest.id).catch(tt);
    }
    let tn = (0, g.Ns)(t.quest),
        ts = i.useMemo(
            () =>
                (0, s.jsx)(a.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: e?.id === t.quest.id,
                    action: () => J(S.uF.QUEST_BAR_V2),
                }),
            [J, t.quest.id, e?.id],
        ),
        ti = i.useMemo(
            () =>
                (0, s.jsx)(a.sL, {
                    id: "activity-panel",
                    label: "Show in Activity Panel",
                    checked: n?.id === t.quest.id,
                    action: () => J(S.uF.ACTIVITY_PANEL),
                }),
            [J, t.quest.id, n?.id],
        ),
        to = i.useMemo(
            () =>
                (0, s.jsx)(a.sL, {
                    id: "channel-call-header",
                    label: "Show in Voice Channel Header",
                    checked: _?.id === t.quest.id,
                    action: () => J(S.uF.QUEST_LIVE_STREAM),
                }),
            [J, t.quest.id, _?.id],
        ),
        tu = i.useMemo(
            () =>
                (0, s.jsx)(a.sL, {
                    id: "members-list",
                    label: "Show in Members List",
                    checked: x?.id === t.quest.id,
                    action: () => J(S.uF.MEMBERS_LIST),
                }),
            [J, t.quest.id, x?.id],
        ),
        tr = i.useCallback(() => {
            (0, p.pX)(f.BVt.QUEST_PREVIEW_TOOL_2(t.quest.id));
        }, [t.quest.id]),
        tc = t.shouldShowDisclosure && t.quest.id !== U.Fw;
    return (0, s.jsxs)(d.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != t.onSelect ? t.onSelect() : (0, T.Z_)();
        },
        navId: "quests-entry",
        "aria-label": w.intl.string(w.t.ogxXGq),
        onClose: t?.onClose ?? k.tE,
        children: [
            (0, s.jsxs)(
                a.rX,
                {
                    children: [
                        (0, s.jsx)(a.Dr, {
                            id: "play-game",
                            label: B,
                            action: $,
                            icon: l.W,
                            leadingAccessory: { type: "icon", icon: l.W },
                        }),
                        G &&
                            (0, s.jsx)(a.Dr, {
                                id: "share-link",
                                label: w.intl.string(w.t.RDE0Sc),
                                action: z,
                                icon: q.LinkIcon,
                                leadingAccessory: { type: "icon", icon: q.LinkIcon },
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
                a.rX,
                {
                    children: [
                        !t.hideLearnMore &&
                            (0, s.jsx)(a.Dr, {
                                id: "learn-more",
                                label: w.intl.string(w.t["Ws2Bl+"]),
                                action: function () {
                                    (0, y.E5)(y.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, A.r)({
                                              type: I.F.CLICK_INTERNAL,
                                              adCreativeType: o.p.QUEST,
                                              adCreativeId: t.quest.id,
                                              questContentCTA: j.Cy.CONTEXT_MENU_LEARN_MORE,
                                              surfaceId: t.questContent,
                                              sourceQuestContent: t.sourceQuestContent,
                                              impressionId: V,
                                              questContentPosition: t.questContentPosition,
                                          })
                                        : K({
                                              questId: t.quest.id,
                                              questContent: t.questContent,
                                              questContentPosition: t.questContentPosition,
                                              questContentCTA: j.Cy.CONTEXT_MENU_LEARN_MORE,
                                              sourceQuestContent: t.sourceQuestContent,
                                          }),
                                        (0, D.mA)({ fromContent: t.questContent, questId: t.quest.id });
                                },
                                icon: E.r,
                                leadingAccessory: { type: "icon", icon: E.r },
                            }),
                        tc &&
                            (0, s.jsx)(a.Dr, {
                                id: "display-disclosure",
                                label: w.intl.string(w.t.GcsZKJ),
                                action: function () {
                                    (0, D.Zc)(
                                        t.quest,
                                        {
                                            content: t.questContent,
                                            position: t.questContentPosition,
                                            ctaContent: j.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                            impressionId: V,
                                            sourceQuestContent: t.sourceQuestContent,
                                        },
                                        t.returnRef,
                                    );
                                },
                            }),
                        F &&
                            (0, s.jsx)(a.Dr, {
                                id: "hide-entrypoint",
                                label: w.intl.string(w.t.NN79E9),
                                action: function () {
                                    (0, y.E5)(y.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, A.r)({
                                              type: I.F.CLICK_INTERNAL,
                                              adCreativeType: o.p.QUEST,
                                              adCreativeId: t.quest.id,
                                              questContentCTA: j.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              surfaceId: t.questContent,
                                              sourceQuestContent: t.sourceQuestContent,
                                              impressionId: V,
                                              questContentPosition: t.questContentPosition,
                                          })
                                        : K({
                                              questId: t.quest.id,
                                              questContent: t.questContent,
                                              questContentPosition: t.questContentPosition,
                                              questContentCTA: j.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              sourceQuestContent: t.sourceQuestContent,
                                          }),
                                        (0, R.vy)(t.questContent) &&
                                            ((0, L.g5)(t.quest.id, t.questContent), X && (0, D.z6)(t.quest));
                                },
                                subtext: w.intl.string(w.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            t.quest.preview &&
                (0, s.jsxs)(
                    a.rX,
                    {
                        label: w.intl.string(w.t["Ape+mm"]),
                        children: [
                            (0, s.jsx)(a.Dr, { id: "dismiss", label: w.intl.string(w.t.JF6W66), action: H }),
                            (0, s.jsx)(a.Dr, {
                                id: "enrollment",
                                label: w.intl.string(w.t.taqkwK),
                                action: function () {
                                    Z(), te();
                                },
                            }),
                            (0, s.jsx)(a.Dr, {
                                id: "progress",
                                label: w.intl.string(w.t.cKSLr4),
                                action: function () {
                                    Y(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, s.jsx)(a.Dr, { id: "complete", label: w.intl.string(w.t.jQEfRT), action: W }),
                            (0, v.g5)(t.quest) &&
                                (0, s.jsxs)(a.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, s.jsx)(a.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${((0, v.YL))(t.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, s.jsx)(a.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: function () {
                                                return (0, L.vD)(t.quest.id, !0).catch(tt);
                                            },
                                        }),
                                        (0, s.jsx)(a.Dr, { id: "stop", label: "Stop heartbeat", action: te }),
                                    ],
                                }),
                            (0, s.jsx)(a.Dr, {
                                id: "copy-quest-id",
                                label: w.intl.string(w.t.oisrFi),
                                action: () => {
                                    (0, h.C)(t.quest.id);
                                },
                            }),
                            (0, s.jsx)(a.Dr, { id: "preview", label: w.intl.string(w.t.tx5Ax5), action: tr }),
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
            onClose: u,
            preventIdle: r,
            quest: c,
            questContent: C,
            questContentPosition: a,
            sourceQuestContent: d,
            ...l
        } = t,
        q = (0, Q.Ut)(),
        E = (0, P.go)(),
        T = i.useRef(null),
        N = i.useCallback(() => {
            (0, y.E5)(y.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu_popout")
                ? (0, A.r)({
                      type: I.F.CLICK_INTERNAL,
                      adCreativeType: o.p.QUEST,
                      adCreativeId: c.id,
                      questContentCTA: j.Cy.OPEN_CONTEXT_MENU,
                      surfaceId: C,
                      sourceQuestContent: d,
                      impressionId: E,
                      questContentPosition: a,
                  })
                : q({
                      questId: c.id,
                      questContent: C,
                      questContentCTA: j.Cy.OPEN_CONTEXT_MENU,
                      questContentPosition: a,
                      sourceQuestContent: d,
                  }),
                null != n && n();
        }, [n, c.id, C, a, q, d, E]);
    return (0, s.jsx)(_.Y, {
        targetElementRef: T,
        onRequestOpen: N,
        onRequestClose: u,
        renderPopout: (t) => {
            let { closePopout: e } = t;
            return r
                ? (0, s.jsx)(x.A, {
                      children: (0, s.jsx)(F, {
                          ...l,
                          quest: c,
                          questContent: C,
                          questContentPosition: a,
                          onClose: e,
                          sourceQuestContent: d,
                      }),
                  })
                : (0, s.jsx)(F, {
                      ...l,
                      quest: c,
                      questContent: C,
                      questContentPosition: a,
                      onClose: e,
                      sourceQuestContent: d,
                  });
        },
        animation: _.Y.Animation.NONE,
        children: (t) => (0, s.jsx)("div", { ref: T, children: e(t) }),
    });
}
