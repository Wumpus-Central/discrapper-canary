n.d(t, { C: () => U });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(691540),
    r = n(857250),
    o = n(97483),
    d = n(477782),
    c = n(861672),
    u = n(743368),
    m = n(624479),
    _ = n(577473),
    h = n(265872),
    p = n(442433),
    g = n(181658),
    A = n(976860),
    f = n(246356),
    x = n(957565),
    C = n(829219),
    E = n(859703),
    I = n(341915),
    v = n(890687),
    b = n(18437),
    T = n(590202),
    S = n(971649),
    y = n(651892),
    N = n(710969),
    j = n(792620),
    L = n(814793),
    R = n(201805),
    P = n(545986),
    w = n(654487),
    D = n(652215),
    k = n(818348),
    O = n(985018);
function M(e) {
    let t = (0, a.bG)([E.A], () => E.A.questDeliveryOverride, []),
        n = (0, N.vy)(e.questContent),
        h = [I.uF.QUEST_BAR_V2, I.uF.QUEST_BAR].includes(e.questContent),
        f = (0, b.Ut)(),
        M = (0, S.go)(),
        U = (0, y.wr)(e.quest),
        G = !0 === e.showShareLink && (0, L.E0)(e.quest.config),
        {
            handleComplete: B,
            handleProgress: F,
            handleResetDismissibilityClick: H,
            handleResetStatusClick: V,
            handleOverrideDeliveryClick: q,
        } = (0, v.j$)(e.quest.id),
        W = (0, v.do)({
            quest: e.quest,
            content: e.questContent,
            ctaContent: T.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: e.sourceQuestContent,
        }),
        z = (0, R.Lk)({
            isShareable: G,
            questId: e.quest.id,
            trackingCtx: l.useMemo(
                () => ({
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: T.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: M,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                [e.questContent, e.questContentPosition, e.sourceQuestContent, M],
            ),
        }),
        Y = (e) => (0, s.P0)((0, r.o)(new g.A(e, e.status).message, o.Ck.FAILURE)),
        Q = () => (0, C.CV)(e.quest.id).catch(Y),
        K = (0, v.nv)(e.quest),
        Z = l.useMemo(
            () =>
                (0, i.jsx)(d.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: t?.id === e.quest.id,
                    action: q,
                }),
            [q, e.quest.id, t?.id],
        ),
        J = l.useCallback(() => {
            (0, A.pX)(D.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        X = e.shouldShowDisclosure && e.quest.id !== w.Fw;
    return (0, i.jsxs)(c.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, p.Z_)();
        },
        navId: "quests-entry",
        "aria-label": O.intl.string(O.t.ogxXGq),
        onClose: e?.onClose ?? k.tE,
        children: [
            (0, i.jsxs)(
                d.rX,
                {
                    children: [
                        (0, i.jsx)(d.Dr, {
                            id: "play-game",
                            label: U,
                            action: W,
                            icon: u.W,
                            leadingAccessory: { type: "icon", icon: u.W },
                        }),
                        G &&
                            (0, i.jsx)(d.Dr, {
                                id: "share-link",
                                label: O.intl.string(O.t.RDE0Sc),
                                action: z,
                                icon: m.T,
                                leadingAccessory: { type: "icon", icon: m.T },
                            }),
                        K && Z,
                    ],
                },
                "major-actions",
            ),
            (0, i.jsxs)(
                d.rX,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, i.jsx)(d.Dr, {
                                id: "learn-more",
                                label: O.intl.string(O.t["Ws2Bl+"]),
                                action: () => {
                                    f({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: T.Cy.CONTEXT_MENU_LEARN_MORE,
                                        sourceQuestContent: e.sourceQuestContent,
                                    }),
                                        (0, P.navigateToQuestHome)({
                                            fromContent: e.questContent,
                                            questId: e.quest.id,
                                        });
                                },
                                icon: _.r,
                                leadingAccessory: { type: "icon", icon: _.r },
                            }),
                        X &&
                            (0, i.jsx)(d.Dr, {
                                id: "display-disclosure",
                                label: O.intl.string(O.t.GcsZKJ),
                                action: () => {
                                    (0, P.Zc)(e.quest, {
                                        content: e.questContent,
                                        position: e.questContentPosition,
                                        ctaContent: T.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                        impressionId: M,
                                        sourceQuestContent: e.sourceQuestContent,
                                    });
                                },
                            }),
                        n &&
                            (0, i.jsx)(d.Dr, {
                                id: "hide-entrypoint",
                                label: O.intl.string(O.t.NN79E9),
                                action: () => {
                                    f({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: T.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                        sourceQuestContent: e.sourceQuestContent,
                                    }),
                                        (0, N.vy)(e.questContent) &&
                                            ((0, C.g5)(e.quest.id, e.questContent), h && (0, P.z6)(e.quest));
                                },
                                subtext: O.intl.string(O.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, i.jsxs)(
                    d.rX,
                    {
                        label: O.intl.string(O.t["Ape+mm"]),
                        children: [
                            (0, i.jsx)(d.Dr, { id: "dismiss", label: O.intl.string(O.t.JF6W66), action: H }),
                            (0, i.jsx)(d.Dr, {
                                id: "enrollment",
                                label: O.intl.string(O.t.taqkwK),
                                action: () => {
                                    V(), Q();
                                },
                            }),
                            (0, i.jsx)(d.Dr, {
                                id: "progress",
                                label: O.intl.string(O.t.cKSLr4),
                                action: () => {
                                    F(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, i.jsx)(d.Dr, { id: "complete", label: O.intl.string(O.t.jQEfRT), action: B }),
                            (0, j.g5)(e.quest) &&
                                (0, i.jsxs)(d.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, i.jsx)(d.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${((0, j.YL))(e.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, i.jsx)(d.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: () => (0, C.vD)(e.quest.id, !0).catch(Y),
                                        }),
                                        (0, i.jsx)(d.Dr, { id: "stop", label: "Stop heartbeat", action: Q }),
                                    ],
                                }),
                            (0, i.jsx)(d.Dr, {
                                id: "copy-quest-id",
                                label: O.intl.string(O.t.oisrFi),
                                action: () => {
                                    (0, x.C)(e.quest.id);
                                },
                            }),
                            (0, i.jsx)(d.Dr, { id: "preview", label: O.intl.string(O.t.tx5Ax5), action: J }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function U(e) {
    let {
            children: t,
            onOpen: n,
            onClose: a,
            preventIdle: s,
            quest: r,
            questContent: o,
            questContentPosition: d,
            sourceQuestContent: c,
            ...u
        } = e,
        m = (0, b.Ut)(),
        _ = l.useRef(null),
        p = l.useCallback(() => {
            m({
                questId: r.id,
                questContent: o,
                questContentCTA: T.Cy.OPEN_CONTEXT_MENU,
                questContentPosition: d,
                sourceQuestContent: c,
            }),
                null != n && n();
        }, [n, r.id, o, d, m, c]);
    return (0, i.jsx)(h.Y, {
        targetElementRef: _,
        onRequestOpen: p,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return s
                ? (0, i.jsx)(f.A, {
                      children: (0, i.jsx)(M, {
                          ...u,
                          quest: r,
                          questContent: o,
                          questContentPosition: d,
                          onClose: t,
                          sourceQuestContent: c,
                      }),
                  })
                : (0, i.jsx)(M, {
                      ...u,
                      quest: r,
                      questContent: o,
                      questContentPosition: d,
                      onClose: t,
                      sourceQuestContent: c,
                  });
        },
        animation: h.Y.Animation.NONE,
        children: (e) => (0, i.jsx)("div", { ref: _, children: t(e) }),
    });
}
