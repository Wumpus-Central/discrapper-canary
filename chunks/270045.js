n.d(t, { C: () => O });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(442433),
    o = n(181658),
    d = n(976860),
    c = n(246356),
    u = n(957565),
    m = n(975571),
    _ = n(829219),
    h = n(859703),
    p = n(341915),
    g = n(807876),
    A = n(890687),
    f = n(18437),
    x = n(590202),
    E = n(971649),
    C = n(651892),
    I = n(710969),
    T = n(901406),
    v = n(792620),
    N = n(814793),
    S = n(201805),
    b = n(545986),
    y = n(654487),
    j = n(652215),
    R = n(818348),
    L = n(985018);
function M(e) {
    let t = (0, a.bG)([h.A], () => h.A.questDeliveryOverride, []),
        n = (0, I.vy)(e.questContent),
        c = [p.uF.QUEST_BAR_V2, p.uF.QUEST_BAR].includes(e.questContent),
        M = (0, f.Ut)(),
        O = (0, E.go)(),
        P = (0, C.wr)(e.quest),
        D = !0 === e.showShareLink && (0, N.E0)(e.quest.config),
        {
            handleComplete: k,
            handleProgress: U,
            handleResetDismissibilityClick: w,
            handleResetStatusClick: G,
            handleOverrideDeliveryClick: B,
        } = (0, A.j$)(e.quest.id),
        F = l.useCallback(() => {
            e.quest.id === y.Fw
                ? window.open(m.A.getArticleURL(j.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
                : (0, T.pu)(e.quest, {
                      content: e.questContent,
                      ctaContent: x.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
                      impressionId: O,
                      sourceQuestContent: e.sourceQuestContent,
                  });
        }, [O, e.quest, e.questContent, e.sourceQuestContent]),
        H = (0, S.Lk)({
            isShareable: D,
            questId: e.quest.id,
            trackingCtx: l.useMemo(
                () => ({
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: x.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: O,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                [e.questContent, e.questContentPosition, e.sourceQuestContent, O],
            ),
        }),
        V = (e) => (0, r.showToast)((0, r.createToast)(new o.A(e, e.status).message, r.ToastType.FAILURE)),
        z = () => (0, _.CV)(e.quest.id).catch(V),
        W = (0, A.nv)(e.quest),
        Y = l.useMemo(
            () =>
                (0, i.jsx)(r.sLh, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: t?.id === e.quest.id,
                    action: B,
                }),
            [B, e.quest.id, t?.id],
        ),
        q = l.useCallback(() => {
            (0, d.pX)(j.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        K = e.shouldShowDisclosure && e.quest.id !== y.Fw;
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, s.Z_)();
        },
        navId: "quests-entry",
        "aria-label": L.intl.string(L.t.ogxXGq),
        onClose: e?.onClose ?? R.tE,
        children: [
            (0, i.jsxs)(
                r.rXV,
                {
                    children: [
                        (0, i.jsx)(r.Drp, {
                            id: "play-game",
                            label: P,
                            action: F,
                            icon: r.We5,
                            leadingAccessory: { type: "icon", icon: r.We5 },
                        }),
                        D &&
                            (0, i.jsx)(r.Drp, {
                                id: "share-link",
                                label: L.intl.string(L.t.RDE0Sc),
                                action: H,
                                icon: r.TdU,
                                leadingAccessory: { type: "icon", icon: r.TdU },
                            }),
                        W && Y,
                    ],
                },
                "major-actions",
            ),
            (0, i.jsxs)(
                r.rXV,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, i.jsx)(r.Drp, {
                                id: "learn-more",
                                label: L.intl.string(L.t["Ws2Bl+"]),
                                action: () => {
                                    M({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: x.Cy.CONTEXT_MENU_LEARN_MORE,
                                        sourceQuestContent: e.sourceQuestContent,
                                    }),
                                        (0, b.navigateToQuestHome)({
                                            fromContent: e.questContent,
                                            questId: e.quest.id,
                                        });
                                },
                                icon: r.r2v,
                                leadingAccessory: { type: "icon", icon: r.r2v },
                            }),
                        K &&
                            (0, i.jsx)(r.Drp, {
                                id: "display-disclosure",
                                label: L.intl.string(L.t.GcsZKJ),
                                action: () => {
                                    (0, b.Zc)(e.quest, {
                                        content: e.questContent,
                                        position: e.questContentPosition,
                                        ctaContent: x.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                        impressionId: O,
                                        sourceQuestContent: e.sourceQuestContent,
                                    });
                                },
                            }),
                        n &&
                            (0, i.jsx)(r.Drp, {
                                id: "hide-entrypoint",
                                label: L.intl.string(L.t.NN79E9),
                                action: () => {
                                    M({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: x.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                        sourceQuestContent: e.sourceQuestContent,
                                    }),
                                        (0, I.vy)(e.questContent) &&
                                            ((0, _.g5)(e.quest.id, e.questContent), c && (0, b.z6)(e.quest));
                                },
                                subtext: L.intl.string(L.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, i.jsxs)(
                    r.rXV,
                    {
                        label: L.intl.string(L.t["Ape+mm"]),
                        children: [
                            (0, i.jsx)(r.Drp, { id: "dismiss", label: L.intl.string(L.t.JF6W66), action: w }),
                            (0, i.jsx)(r.Drp, {
                                id: "enrollment",
                                label: L.intl.string(L.t.taqkwK),
                                action: () => {
                                    G(), z();
                                },
                            }),
                            (0, i.jsx)(r.Drp, {
                                id: "progress",
                                label: L.intl.string(L.t.cKSLr4),
                                action: () => {
                                    U(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, i.jsx)(r.Drp, { id: "complete", label: L.intl.string(L.t.jQEfRT), action: k }),
                            (0, v.g5)(e.quest) &&
                                (0, i.jsxs)(r.Drp, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, i.jsx)(r.Drp, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${((0, v.YL))(e.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, i.jsx)(r.Drp, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: () => (0, _.vD)(e.quest.id, !0).catch(V),
                                        }),
                                        (0, i.jsx)(r.Drp, { id: "stop", label: "Stop heartbeat", action: z }),
                                    ],
                                }),
                            (0, i.jsx)(r.Drp, {
                                id: "copy-quest-id",
                                label: L.intl.string(L.t.oisrFi),
                                action: () => {
                                    (0, u.C)(e.quest.id);
                                },
                            }),
                            (0, g.U)({ location: y.rE.QUEST_PREVIEW_TOOL_2 }) &&
                                (0, i.jsx)(r.Drp, { id: "preview", label: L.intl.string(L.t.tx5Ax5), action: q }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function O(e) {
    let {
            children: t,
            onOpen: n,
            onClose: a,
            preventIdle: s,
            quest: o,
            questContent: d,
            questContentPosition: u,
            sourceQuestContent: m,
            ..._
        } = e,
        h = (0, f.Ut)(),
        p = l.useRef(null),
        g = l.useCallback(() => {
            h({
                questId: o.id,
                questContent: d,
                questContentCTA: x.Cy.OPEN_CONTEXT_MENU,
                questContentPosition: u,
                sourceQuestContent: m,
            }),
                null != n && n();
        }, [n, o.id, d, u, h, m]);
    return (0, i.jsx)(r.YNO, {
        targetElementRef: p,
        onRequestOpen: g,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return s
                ? (0, i.jsx)(c.A, {
                      children: (0, i.jsx)(M, {
                          ..._,
                          quest: o,
                          questContent: d,
                          questContentPosition: u,
                          onClose: t,
                          sourceQuestContent: m,
                      }),
                  })
                : (0, i.jsx)(M, {
                      ..._,
                      quest: o,
                      questContent: d,
                      questContentPosition: u,
                      onClose: t,
                      sourceQuestContent: m,
                  });
        },
        animation: r.YNO.Animation.NONE,
        children: (e) => (0, i.jsx)("div", { ref: p, children: t(e) }),
    });
}
