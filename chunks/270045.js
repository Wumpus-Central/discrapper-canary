"use strict";
n.d(t, { C: () => j });
var i = n(627968),
    r = n(64700),
    s = n(323889),
    a = n(17928),
    o = n(691540),
    l = n(857250),
    u = n(97483),
    c = n(477782),
    d = n(980707),
    _ = n(743368),
    h = n(173936),
    f = n(577473),
    p = n(922016),
    E = n(442433),
    m = n(181658),
    g = n(274670),
    A = n(144779),
    I = n(976860),
    T = n(246356),
    S = n(957565),
    y = n(340124),
    C = n(859703),
    N = n(507107),
    v = n(104886),
    R = n(347135),
    O = n(18437),
    b = n(590202),
    D = n(971649),
    L = n(651892),
    w = n(710969),
    M = n(792620),
    P = n(814793),
    x = n(371912),
    k = n(617986),
    U = n(190107),
    G = n(652215),
    F = n(818348),
    V = n(375708);
function B(e) {
    let t = (0, a.bG)([C.A], () => C.A.getQuestPreviewOverride(N.uF.QUEST_BAR_V2), []),
        n = (0, a.bG)([C.A], () => C.A.getQuestPreviewOverride(N.uF.ACTIVITY_PANEL), []),
        p = (0, a.bG)([C.A], () => C.A.getQuestPreviewOverride(N.uF.QUEST_LIVE_STREAM), []),
        T = (0, a.bG)([C.A], () => C.A.getQuestPreviewOverride(N.uF.MEMBERS_LIST), []),
        B = (0, w.vy)(e.questContent),
        j = [N.uF.QUEST_BAR_V2, N.uF.QUEST_BAR].includes(e.questContent),
        H = (0, O.Ut)(),
        Y = (0, D.go)(),
        W = (0, L.wr)(e.quest),
        K = !0 === e.showShareLink && (0, P.E0)(e.quest.config),
        {
            handleComplete: $,
            handleProgress: z,
            handleResetDismissibilityClick: q,
            handleResetStatusClick: Z,
            handleOverridePreviewClick: X,
        } = (0, R.j$)(e.quest.id),
        Q = (0, R.do)({
            quest: e.quest,
            content: e.questContent,
            ctaContent: b.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: e.sourceQuestContent,
        }),
        J = (0, x.Lk)({
            isShareable: K,
            questId: e.quest.id,
            trackingCtx: r.useMemo(
                () => ({
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: b.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: Y,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                [e.questContent, e.questContentPosition, e.sourceQuestContent, Y],
            ),
        });
    function ee(e) {
        return (0, o.P0)((0, l.o)(new m.A(e, e.status).message, u.Ck.FAILURE));
    }
    function et() {
        return (0, y.CV)(e.quest.id).catch(ee);
    }
    let en = (0, R.Ns)(e.quest),
        ei = r.useMemo(
            () =>
                (0, i.jsx)(c.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: t?.id === e.quest.id,
                    action: () => X(N.uF.QUEST_BAR_V2),
                }),
            [X, e.quest.id, t?.id],
        ),
        er = r.useMemo(
            () =>
                (0, i.jsx)(c.sL, {
                    id: "activity-panel",
                    label: "Show in Activity Panel",
                    checked: n?.id === e.quest.id,
                    action: () => X(N.uF.ACTIVITY_PANEL),
                }),
            [X, e.quest.id, n?.id],
        ),
        es = r.useMemo(
            () =>
                (0, i.jsx)(c.sL, {
                    id: "channel-call-header",
                    label: "Show in Voice Channel Header",
                    checked: p?.id === e.quest.id,
                    action: () => X(N.uF.QUEST_LIVE_STREAM),
                }),
            [X, e.quest.id, p?.id],
        ),
        ea = r.useMemo(
            () =>
                (0, i.jsx)(c.sL, {
                    id: "members-list",
                    label: "Show in Members List",
                    checked: T?.id === e.quest.id,
                    action: () => X(N.uF.MEMBERS_LIST),
                }),
            [X, e.quest.id, T?.id],
        ),
        eo = r.useCallback(() => {
            (0, I.pX)(G.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        el = e.shouldShowDisclosure && e.quest.id !== U.Fw;
    return (0, i.jsxs)(d.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != e.onSelect ? e.onSelect() : (0, E.Z_)();
        },
        navId: "quests-entry",
        "aria-label": V.intl.string(V.t.ogxXGq),
        onClose: e?.onClose ?? F.tE,
        children: [
            (0, i.jsxs)(
                c.rX,
                {
                    children: [
                        (0, i.jsx)(c.Dr, {
                            id: "play-game",
                            label: W,
                            action: Q,
                            icon: _.W,
                            leadingAccessory: { type: "icon", icon: _.W },
                        }),
                        K &&
                            (0, i.jsx)(c.Dr, {
                                id: "share-link",
                                label: V.intl.string(V.t.RDE0Sc),
                                action: J,
                                icon: h.q,
                                leadingAccessory: { type: "icon", icon: h.q },
                            }),
                        en && ei,
                        en && er,
                        en && es,
                        en && ea,
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
                                label: V.intl.string(V.t["Ws2Bl+"]),
                                action: function () {
                                    (0, v.E5)(v.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, g.r)({
                                              type: A.F.CLICK_INTERNAL,
                                              adCreativeType: s.p.QUEST,
                                              adCreativeId: e.quest.id,
                                              questContentCTA: b.Cy.CONTEXT_MENU_LEARN_MORE,
                                              surfaceId: e.questContent,
                                              sourceQuestContent: e.sourceQuestContent,
                                              impressionId: Y,
                                              questContentPosition: e.questContentPosition,
                                          })
                                        : H({
                                              questId: e.quest.id,
                                              questContent: e.questContent,
                                              questContentPosition: e.questContentPosition,
                                              questContentCTA: b.Cy.CONTEXT_MENU_LEARN_MORE,
                                              sourceQuestContent: e.sourceQuestContent,
                                          }),
                                        (0, k.navigateToQuestHome)({
                                            fromContent: e.questContent,
                                            questId: e.quest.id,
                                        });
                                },
                                icon: f.r,
                                leadingAccessory: { type: "icon", icon: f.r },
                            }),
                        el &&
                            (0, i.jsx)(c.Dr, {
                                id: "display-disclosure",
                                label: V.intl.string(V.t.GcsZKJ),
                                action: function () {
                                    (0, k.Zc)(
                                        e.quest,
                                        {
                                            content: e.questContent,
                                            position: e.questContentPosition,
                                            ctaContent: b.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                            impressionId: Y,
                                            sourceQuestContent: e.sourceQuestContent,
                                        },
                                        e.returnRef,
                                    );
                                },
                            }),
                        B &&
                            (0, i.jsx)(c.Dr, {
                                id: "hide-entrypoint",
                                label: V.intl.string(V.t.NN79E9),
                                action: function () {
                                    (0, v.E5)(v.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                                        ? (0, g.r)({
                                              type: A.F.CLICK_INTERNAL,
                                              adCreativeType: s.p.QUEST,
                                              adCreativeId: e.quest.id,
                                              questContentCTA: b.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              surfaceId: e.questContent,
                                              sourceQuestContent: e.sourceQuestContent,
                                              impressionId: Y,
                                              questContentPosition: e.questContentPosition,
                                          })
                                        : H({
                                              questId: e.quest.id,
                                              questContent: e.questContent,
                                              questContentPosition: e.questContentPosition,
                                              questContentCTA: b.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                              sourceQuestContent: e.sourceQuestContent,
                                          }),
                                        (0, w.vy)(e.questContent) &&
                                            ((0, y.g5)(e.quest.id, e.questContent), j && (0, k.z6)(e.quest));
                                },
                                subtext: V.intl.string(V.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, i.jsxs)(
                    c.rX,
                    {
                        label: V.intl.string(V.t["Ape+mm"]),
                        children: [
                            (0, i.jsx)(c.Dr, { id: "dismiss", label: V.intl.string(V.t.JF6W66), action: q }),
                            (0, i.jsx)(c.Dr, {
                                id: "enrollment",
                                label: V.intl.string(V.t.taqkwK),
                                action: function () {
                                    Z(), et();
                                },
                            }),
                            (0, i.jsx)(c.Dr, {
                                id: "progress",
                                label: V.intl.string(V.t.cKSLr4),
                                action: function () {
                                    z(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, i.jsx)(c.Dr, { id: "complete", label: V.intl.string(V.t.jQEfRT), action: $ }),
                            (0, M.g5)(e.quest) &&
                                (0, i.jsxs)(c.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, i.jsx)(c.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${((0, M.YL))(e.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, i.jsx)(c.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: function () {
                                                return (0, y.vD)(e.quest.id, !0).catch(ee);
                                            },
                                        }),
                                        (0, i.jsx)(c.Dr, { id: "stop", label: "Stop heartbeat", action: et }),
                                    ],
                                }),
                            (0, i.jsx)(c.Dr, {
                                id: "copy-quest-id",
                                label: V.intl.string(V.t.oisrFi),
                                action: () => {
                                    (0, S.C)(e.quest.id);
                                },
                            }),
                            (0, i.jsx)(c.Dr, { id: "preview", label: V.intl.string(V.t.tx5Ax5), action: eo }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function j(e) {
    let {
            children: t,
            onOpen: n,
            onClose: a,
            preventIdle: o,
            quest: l,
            questContent: u,
            questContentPosition: c,
            sourceQuestContent: d,
            ..._
        } = e,
        h = (0, O.Ut)(),
        f = (0, D.go)(),
        E = r.useRef(null),
        m = r.useCallback(() => {
            (0, v.E5)(v.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu_popout")
                ? (0, g.r)({
                      type: A.F.CLICK_INTERNAL,
                      adCreativeType: s.p.QUEST,
                      adCreativeId: l.id,
                      questContentCTA: b.Cy.OPEN_CONTEXT_MENU,
                      surfaceId: u,
                      sourceQuestContent: d,
                      impressionId: f,
                      questContentPosition: c,
                  })
                : h({
                      questId: l.id,
                      questContent: u,
                      questContentCTA: b.Cy.OPEN_CONTEXT_MENU,
                      questContentPosition: c,
                      sourceQuestContent: d,
                  }),
                null != n && n();
        }, [n, l.id, u, c, h, d, f]);
    return (0, i.jsx)(p.Y, {
        targetElementRef: E,
        onRequestOpen: m,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return o
                ? (0, i.jsx)(T.A, {
                      children: (0, i.jsx)(B, {
                          ..._,
                          quest: l,
                          questContent: u,
                          questContentPosition: c,
                          onClose: t,
                          sourceQuestContent: d,
                      }),
                  })
                : (0, i.jsx)(B, {
                      ..._,
                      quest: l,
                      questContent: u,
                      questContentPosition: c,
                      onClose: t,
                      sourceQuestContent: d,
                  });
        },
        animation: p.Y.Animation.NONE,
        children: (e) => (0, i.jsx)("div", { ref: E, children: t(e) }),
    });
}
