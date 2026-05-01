n.d(e, { C: () => v });
var s = n(627968),
    i = n(64700),
    o = n(17928),
    a = n(691540),
    u = n(857250),
    l = n(97483),
    r = n(477782),
    C = n(550079),
    E = n(743368),
    c = n(624479),
    d = n(577473),
    L = n(922016),
    A = n(442433),
    D = n(181658),
    U = n(976860),
    q = n(246356),
    O = n(957565),
    x = n(829219),
    _ = n(859703),
    N = n(507107),
    I = n(890687),
    T = n(18437),
    R = n(590202),
    P = n(971649),
    y = n(651892),
    b = n(710969),
    Q = n(792620),
    S = n(814793),
    p = n(201805),
    g = n(545986),
    M = n(654487),
    j = n(652215),
    h = n(818348),
    f = n(985018);
function m(t) {
    let e = (0, o.bG)([_.A], () => _.A.questDeliveryOverride, []),
        n = (0, b.vy)(t.questContent),
        L = [N.uF.QUEST_BAR_V2, N.uF.QUEST_BAR].includes(t.questContent),
        q = (0, T.Ut)(),
        m = (0, P.go)(),
        v = (0, y.wr)(t.quest),
        w = !0 === t.showShareLink && (0, S.E0)(t.quest.config),
        {
            handleComplete: k,
            handleProgress: X,
            handleResetDismissibilityClick: B,
            handleResetStatusClick: V,
            handleOverrideDeliveryClick: F,
        } = (0, I.j$)(t.quest.id),
        G = (0, I.do)({
            quest: t.quest,
            content: t.questContent,
            ctaContent: R.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: t.sourceQuestContent,
        }),
        z = (0, p.Lk)({
            isShareable: w,
            questId: t.quest.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: t.questContent,
                    position: t.questContentPosition,
                    ctaContent: R.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: m,
                    sourceQuestContent: t.sourceQuestContent,
                }),
                [t.questContent, t.questContentPosition, t.sourceQuestContent, m],
            ),
        }),
        W = (t) => (0, a.P0)((0, u.o)(new D.A(t, t.status).message, l.Ck.FAILURE)),
        H = () => (0, x.CV)(t.quest.id).catch(W),
        K = (0, I.nv)(t.quest),
        Y = i.useMemo(
            () =>
                (0, s.jsx)(r.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: e?.id === t.quest.id,
                    action: F,
                }),
            [F, t.quest.id, e?.id],
        ),
        $ = i.useCallback(() => {
            (0, U.pX)(j.BVt.QUEST_PREVIEW_TOOL_2(t.quest.id));
        }, [t.quest.id]),
        Z = t.shouldShowDisclosure && t.quest.id !== M.Fw;
    return (0, s.jsxs)(C.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: () => {
            null != t.onSelect ? t.onSelect() : (0, A.Z_)();
        },
        navId: "quests-entry",
        "aria-label": f.intl.string(f.t.ogxXGq),
        onClose: t?.onClose ?? h.tE,
        children: [
            (0, s.jsxs)(
                r.rX,
                {
                    children: [
                        (0, s.jsx)(r.Dr, {
                            id: "play-game",
                            label: v,
                            action: G,
                            icon: E.W,
                            leadingAccessory: { type: "icon", icon: E.W },
                        }),
                        w &&
                            (0, s.jsx)(r.Dr, {
                                id: "share-link",
                                label: f.intl.string(f.t.RDE0Sc),
                                action: z,
                                icon: c.T,
                                leadingAccessory: { type: "icon", icon: c.T },
                            }),
                        K && Y,
                    ],
                },
                "major-actions",
            ),
            (0, s.jsxs)(
                r.rX,
                {
                    children: [
                        !t.hideLearnMore &&
                            (0, s.jsx)(r.Dr, {
                                id: "learn-more",
                                label: f.intl.string(f.t["Ws2Bl+"]),
                                action: () => {
                                    q({
                                        questId: t.quest.id,
                                        questContent: t.questContent,
                                        questContentPosition: t.questContentPosition,
                                        questContentCTA: R.Cy.CONTEXT_MENU_LEARN_MORE,
                                        sourceQuestContent: t.sourceQuestContent,
                                    }),
                                        (0, g.navigateToQuestHome)({
                                            fromContent: t.questContent,
                                            questId: t.quest.id,
                                        });
                                },
                                icon: d.r,
                                leadingAccessory: { type: "icon", icon: d.r },
                            }),
                        Z &&
                            (0, s.jsx)(r.Dr, {
                                id: "display-disclosure",
                                label: f.intl.string(f.t.GcsZKJ),
                                action: () => {
                                    (0, g.Zc)(t.quest, {
                                        content: t.questContent,
                                        position: t.questContentPosition,
                                        ctaContent: R.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                        impressionId: m,
                                        sourceQuestContent: t.sourceQuestContent,
                                    });
                                },
                            }),
                        n &&
                            (0, s.jsx)(r.Dr, {
                                id: "hide-entrypoint",
                                label: f.intl.string(f.t.NN79E9),
                                action: () => {
                                    q({
                                        questId: t.quest.id,
                                        questContent: t.questContent,
                                        questContentPosition: t.questContentPosition,
                                        questContentCTA: R.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                        sourceQuestContent: t.sourceQuestContent,
                                    }),
                                        (0, b.vy)(t.questContent) &&
                                            ((0, x.g5)(t.quest.id, t.questContent), L && (0, g.z6)(t.quest));
                                },
                                subtext: f.intl.string(f.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            t.quest.preview &&
                (0, s.jsxs)(
                    r.rX,
                    {
                        label: f.intl.string(f.t["Ape+mm"]),
                        children: [
                            (0, s.jsx)(r.Dr, { id: "dismiss", label: f.intl.string(f.t.JF6W66), action: B }),
                            (0, s.jsx)(r.Dr, {
                                id: "enrollment",
                                label: f.intl.string(f.t.taqkwK),
                                action: () => {
                                    V(), H();
                                },
                            }),
                            (0, s.jsx)(r.Dr, {
                                id: "progress",
                                label: f.intl.string(f.t.cKSLr4),
                                action: () => {
                                    X(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, s.jsx)(r.Dr, { id: "complete", label: f.intl.string(f.t.jQEfRT), action: k }),
                            (0, Q.g5)(t.quest) &&
                                (0, s.jsxs)(r.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, s.jsx)(r.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${((0, Q.YL))(t.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, s.jsx)(r.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: () => (0, x.vD)(t.quest.id, !0).catch(W),
                                        }),
                                        (0, s.jsx)(r.Dr, { id: "stop", label: "Stop heartbeat", action: H }),
                                    ],
                                }),
                            (0, s.jsx)(r.Dr, {
                                id: "copy-quest-id",
                                label: f.intl.string(f.t.oisrFi),
                                action: () => {
                                    (0, O.C)(t.quest.id);
                                },
                            }),
                            (0, s.jsx)(r.Dr, { id: "preview", label: f.intl.string(f.t.tx5Ax5), action: $ }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function v(t) {
    let {
            children: e,
            onOpen: n,
            onClose: o,
            preventIdle: a,
            quest: u,
            questContent: l,
            questContentPosition: r,
            sourceQuestContent: C,
            ...E
        } = t,
        c = (0, T.Ut)(),
        d = i.useRef(null),
        A = i.useCallback(() => {
            c({
                questId: u.id,
                questContent: l,
                questContentCTA: R.Cy.OPEN_CONTEXT_MENU,
                questContentPosition: r,
                sourceQuestContent: C,
            }),
                null != n && n();
        }, [n, u.id, l, r, c, C]);
    return (0, s.jsx)(L.Y, {
        targetElementRef: d,
        onRequestOpen: A,
        onRequestClose: o,
        renderPopout: (t) => {
            let { closePopout: e } = t;
            return a
                ? (0, s.jsx)(q.A, {
                      children: (0, s.jsx)(m, {
                          ...E,
                          quest: u,
                          questContent: l,
                          questContentPosition: r,
                          onClose: e,
                          sourceQuestContent: C,
                      }),
                  })
                : (0, s.jsx)(m, {
                      ...E,
                      quest: u,
                      questContent: l,
                      questContentPosition: r,
                      onClose: e,
                      sourceQuestContent: C,
                  });
        },
        animation: L.Y.Animation.NONE,
        children: (t) => (0, s.jsx)("div", { ref: d, children: e(t) }),
    });
}
