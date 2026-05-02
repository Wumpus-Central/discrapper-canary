n.d(e, { C: () => Q });
var s = n(627968),
    i = n(64700),
    a = n(17928),
    l = n(691540),
    o = n(857250),
    r = n(97483),
    u = n(477782),
    c = n(980707),
    C = n(743368),
    d = n(624479),
    E = n(577473),
    A = n(922016),
    T = n(442433),
    x = n(181658),
    I = n(976860),
    g = n(246356),
    h = n(957565),
    f = n(340124),
    _ = n(859703),
    N = n(507107),
    L = n(31587),
    m = n(18437),
    p = n(590202),
    O = n(971649),
    y = n(651892),
    v = n(710969),
    R = n(792620),
    D = n(814793),
    q = n(371912),
    M = n(617986),
    P = n(190107),
    U = n(652215),
    j = n(818348),
    w = n(375708);
function S(t) {
    let e = (0, a.bG)([_.A], () => _.A.questDeliveryOverride, []),
        n = (0, v.vy)(t.questContent),
        A = [N.uF.QUEST_BAR_V2, N.uF.QUEST_BAR].includes(t.questContent),
        g = (0, m.Ut)(),
        S = (0, O.go)(),
        Q = (0, y.wr)(t.quest),
        b = !0 === t.showShareLink && (0, D.E0)(t.quest.config),
        {
            handleComplete: H,
            handleProgress: V,
            handleResetDismissibilityClick: F,
            handleResetStatusClick: k,
            handleOverrideDeliveryClick: B,
        } = (0, L.j$)(t.quest.id),
        W = (0, L.do)({
            quest: t.quest,
            content: t.questContent,
            ctaContent: p.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: t.sourceQuestContent,
        }),
        z = (0, q.Lk)({
            isShareable: b,
            questId: t.quest.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: t.questContent,
                    position: t.questContentPosition,
                    ctaContent: p.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: S,
                    sourceQuestContent: t.sourceQuestContent,
                }),
                [t.questContent, t.questContentPosition, t.sourceQuestContent, S],
            ),
        }),
        Z = (t) => (0, l.P0)((0, o.o)(new x.A(t, t.status).message, r.Ck.FAILURE)),
        G = () => (0, f.CV)(t.quest.id).catch(Z),
        Y = (0, L.nv)(t.quest),
        X = i.useMemo(
            () =>
                (0, s.jsx)(u.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: e?.id === t.quest.id,
                    action: B,
                }),
            [B, t.quest.id, e?.id],
        ),
        $ = i.useCallback(() => {
            (0, I.pX)(U.BVt.QUEST_PREVIEW_TOOL_2(t.quest.id));
        }, [t.quest.id]),
        K = t.shouldShowDisclosure && t.quest.id !== P.Fw;
    return (0, s.jsxs)(c.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: () => {
            null != t.onSelect ? t.onSelect() : (0, T.Z_)();
        },
        navId: "quests-entry",
        "aria-label": w.intl.string(w.t.ogxXGq),
        onClose: t?.onClose ?? j.tE,
        children: [
            (0, s.jsxs)(
                u.rX,
                {
                    children: [
                        (0, s.jsx)(u.Dr, {
                            id: "play-game",
                            label: Q,
                            action: W,
                            icon: C.W,
                            leadingAccessory: { type: "icon", icon: C.W },
                        }),
                        b &&
                            (0, s.jsx)(u.Dr, {
                                id: "share-link",
                                label: w.intl.string(w.t.RDE0Sc),
                                action: z,
                                icon: d.T,
                                leadingAccessory: { type: "icon", icon: d.T },
                            }),
                        Y && X,
                    ],
                },
                "major-actions",
            ),
            (0, s.jsxs)(
                u.rX,
                {
                    children: [
                        !t.hideLearnMore &&
                            (0, s.jsx)(u.Dr, {
                                id: "learn-more",
                                label: w.intl.string(w.t["Ws2Bl+"]),
                                action: () => {
                                    g({
                                        questId: t.quest.id,
                                        questContent: t.questContent,
                                        questContentPosition: t.questContentPosition,
                                        questContentCTA: p.Cy.CONTEXT_MENU_LEARN_MORE,
                                        sourceQuestContent: t.sourceQuestContent,
                                    }),
                                        (0, M.navigateToQuestHome)({
                                            fromContent: t.questContent,
                                            questId: t.quest.id,
                                        });
                                },
                                icon: E.r,
                                leadingAccessory: { type: "icon", icon: E.r },
                            }),
                        K &&
                            (0, s.jsx)(u.Dr, {
                                id: "display-disclosure",
                                label: w.intl.string(w.t.GcsZKJ),
                                action: () => {
                                    (0, M.Zc)(t.quest, {
                                        content: t.questContent,
                                        position: t.questContentPosition,
                                        ctaContent: p.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                        impressionId: S,
                                        sourceQuestContent: t.sourceQuestContent,
                                    });
                                },
                            }),
                        n &&
                            (0, s.jsx)(u.Dr, {
                                id: "hide-entrypoint",
                                label: w.intl.string(w.t.NN79E9),
                                action: () => {
                                    g({
                                        questId: t.quest.id,
                                        questContent: t.questContent,
                                        questContentPosition: t.questContentPosition,
                                        questContentCTA: p.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                        sourceQuestContent: t.sourceQuestContent,
                                    }),
                                        (0, v.vy)(t.questContent) &&
                                            ((0, f.g5)(t.quest.id, t.questContent), A && (0, M.z6)(t.quest));
                                },
                                subtext: w.intl.string(w.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            t.quest.preview &&
                (0, s.jsxs)(
                    u.rX,
                    {
                        label: w.intl.string(w.t["Ape+mm"]),
                        children: [
                            (0, s.jsx)(u.Dr, { id: "dismiss", label: w.intl.string(w.t.JF6W66), action: F }),
                            (0, s.jsx)(u.Dr, {
                                id: "enrollment",
                                label: w.intl.string(w.t.taqkwK),
                                action: () => {
                                    k(), G();
                                },
                            }),
                            (0, s.jsx)(u.Dr, {
                                id: "progress",
                                label: w.intl.string(w.t.cKSLr4),
                                action: () => {
                                    V(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, s.jsx)(u.Dr, { id: "complete", label: w.intl.string(w.t.jQEfRT), action: H }),
                            (0, R.g5)(t.quest) &&
                                (0, s.jsxs)(u.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, s.jsx)(u.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${((0, R.YL))(t.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, s.jsx)(u.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: () => (0, f.vD)(t.quest.id, !0).catch(Z),
                                        }),
                                        (0, s.jsx)(u.Dr, { id: "stop", label: "Stop heartbeat", action: G }),
                                    ],
                                }),
                            (0, s.jsx)(u.Dr, {
                                id: "copy-quest-id",
                                label: w.intl.string(w.t.oisrFi),
                                action: () => {
                                    (0, h.C)(t.quest.id);
                                },
                            }),
                            (0, s.jsx)(u.Dr, { id: "preview", label: w.intl.string(w.t.tx5Ax5), action: $ }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function Q(t) {
    let {
            children: e,
            onOpen: n,
            onClose: a,
            preventIdle: l,
            quest: o,
            questContent: r,
            questContentPosition: u,
            sourceQuestContent: c,
            ...C
        } = t,
        d = (0, m.Ut)(),
        E = i.useRef(null),
        T = i.useCallback(() => {
            d({
                questId: o.id,
                questContent: r,
                questContentCTA: p.Cy.OPEN_CONTEXT_MENU,
                questContentPosition: u,
                sourceQuestContent: c,
            }),
                null != n && n();
        }, [n, o.id, r, u, d, c]);
    return (0, s.jsx)(A.Y, {
        targetElementRef: E,
        onRequestOpen: T,
        onRequestClose: a,
        renderPopout: (t) => {
            let { closePopout: e } = t;
            return l
                ? (0, s.jsx)(g.A, {
                      children: (0, s.jsx)(S, {
                          ...C,
                          quest: o,
                          questContent: r,
                          questContentPosition: u,
                          onClose: e,
                          sourceQuestContent: c,
                      }),
                  })
                : (0, s.jsx)(S, {
                      ...C,
                      quest: o,
                      questContent: r,
                      questContentPosition: u,
                      onClose: e,
                      sourceQuestContent: c,
                  });
        },
        animation: A.Y.Animation.NONE,
        children: (t) => (0, s.jsx)("div", { ref: E, children: e(t) }),
    });
}
