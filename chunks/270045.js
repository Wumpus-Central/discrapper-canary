n.d(e, { C: () => U });
var i = n(477900),
    a = n(582128),
    l = n(323889),
    s = n(17928),
    r = n(858899),
    o = n(477782),
    u = n(980707),
    d = n(743368),
    c = n(173936),
    E = n(577473),
    _ = n(265872),
    C = n(442433),
    g = n(181658),
    h = n(507395),
    f = n(144779),
    p = n(976860),
    T = n(246356),
    A = n(957565),
    m = n(427495),
    I = n(859703),
    N = n(738822),
    v = n(77870),
    S = n(590202),
    w = n(971649),
    R = n(651892),
    x = n(710969),
    M = n(792620),
    L = n(814793),
    O = n(201805),
    P = n(617986),
    y = n(190107),
    b = n(652215),
    q = n(818348),
    D = n(105292);
function j(t) {
    let e = (0, s.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.QUEST_BAR_V2), []),
        n = (0, s.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.ACTIVITY_PANEL), []),
        _ = (0, s.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.QUEST_LIVE_STREAM), []),
        T = (0, s.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.MEMBERS_LIST), []),
        j = (0, x.vy)(t.questContent),
        U = [N.uF.QUEST_BAR_V2, N.uF.QUEST_BAR].includes(t.questContent),
        F = (0, w.wW)(),
        G = (0, R.wr)(t.quest),
        H = !0 === t.showShareLink && (0, L.E0)(t.quest.config),
        {
            handleComplete: V,
            handleProgress: k,
            handleResetDismissibilityClick: B,
            handleResetStatusClick: Q,
            handleOverridePreviewClick: Z,
        } = (0, v.j$)(t.quest.id),
        J = (0, v.do)({
            quest: t.quest,
            content: t.questContent,
            ctaContent: S.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: t.sourceQuestContent,
        }),
        K = (0, O.Lk)({
            isShareable: H,
            questId: t.quest.id,
            trackingCtx: a.useMemo(
                () => ({
                    content: t.questContent,
                    position: t.questContentPosition,
                    ctaContent: S.Cy.CONTEXT_MENU_COPY_LINK,
                    sourceQuestContent: t.sourceQuestContent,
                }),
                [t.questContent, t.questContentPosition, t.sourceQuestContent],
            ),
        });
    function W(t) {
        return (0, r.P0)({ text: new g.A(t, t.status).message, variant: "critical" });
    }
    function X() {
        return (0, m.CV)(t.quest.id).catch(W);
    }
    let Y = (0, v.Ns)(t.quest),
        z = a.useMemo(
            () =>
                (0, i.jsx)(o.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: e?.id === t.quest.id,
                    action: () => Z(N.uF.QUEST_BAR_V2),
                }),
            [Z, t.quest.id, e?.id],
        ),
        $ = a.useMemo(
            () =>
                (0, i.jsx)(o.sL, {
                    id: "activity-panel",
                    label: "Show in Activity Panel",
                    checked: n?.id === t.quest.id,
                    action: () => Z(N.uF.ACTIVITY_PANEL),
                }),
            [Z, t.quest.id, n?.id],
        ),
        tt = a.useMemo(
            () =>
                (0, i.jsx)(o.sL, {
                    id: "channel-call-header",
                    label: "Show in Voice Channel Header",
                    checked: _?.id === t.quest.id,
                    action: () => Z(N.uF.QUEST_LIVE_STREAM),
                }),
            [Z, t.quest.id, _?.id],
        ),
        te = a.useMemo(
            () =>
                (0, i.jsx)(o.sL, {
                    id: "members-list",
                    label: "Show in Members List",
                    checked: T?.id === t.quest.id,
                    action: () => Z(N.uF.MEMBERS_LIST),
                }),
            [Z, t.quest.id, T?.id],
        ),
        tn = a.useCallback(() => {
            (0, p.pX)(b.BVt.QUEST_PREVIEW_TOOL_2(t.quest.id));
        }, [t.quest.id]),
        ti = t.shouldShowDisclosure && t.quest.id !== y.Fw;
    return (0, i.jsxs)(u.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != t.onSelect ? t.onSelect() : (0, C.Z_)();
        },
        navId: "quests-entry",
        "aria-label": D.intl.string(D.t.ogxXGq),
        onClose: t?.onClose ?? q.tE,
        children: [
            (0, i.jsxs)(
                o.rX,
                {
                    children: [
                        (0, i.jsx)(o.Dr, {
                            id: "play-game",
                            label: G,
                            action: J,
                            icon: d.W,
                            leadingAccessory: { type: "icon", icon: d.W },
                        }),
                        H &&
                            (0, i.jsx)(o.Dr, {
                                id: "share-link",
                                label: D.intl.string(D.t.RDE0Sc),
                                action: K,
                                icon: c.LinkIcon,
                                leadingAccessory: { type: "icon", icon: c.LinkIcon },
                            }),
                        Y && z,
                        Y && $,
                        Y && tt,
                        Y && te,
                    ],
                },
                "major-actions",
            ),
            (0, i.jsxs)(
                o.rX,
                {
                    children: [
                        !t.hideLearnMore &&
                            (0, i.jsx)(o.Dr, {
                                id: "learn-more",
                                label: D.intl.string(D.t["Ws2Bl+"]),
                                action: function () {
                                    ((0, h.r)({
                                        type: f.F.CLICK_INTERNAL,
                                        adCreativeType: l.p.QUEST,
                                        adCreativeId: t.quest.id,
                                        questContentCTA: S.Cy.CONTEXT_MENU_LEARN_MORE,
                                        surfaceId: t.questContent,
                                        sourceQuestContent: t.sourceQuestContent,
                                        impressionId: F(),
                                        questContentPosition: t.questContentPosition,
                                    }),
                                        (0, P.mA)({ fromContent: t.questContent, questId: t.quest.id }));
                                },
                                icon: E.r,
                                leadingAccessory: { type: "icon", icon: E.r },
                            }),
                        ti &&
                            (0, i.jsx)(o.Dr, {
                                id: "display-disclosure",
                                label: D.intl.string(D.t.GcsZKJ),
                                action: function () {
                                    (0, P.Zc)(
                                        t.quest,
                                        {
                                            content: t.questContent,
                                            position: t.questContentPosition,
                                            ctaContent: S.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                            impressionId: F(),
                                            sourceQuestContent: t.sourceQuestContent,
                                        },
                                        t.returnRef,
                                    );
                                },
                            }),
                        j &&
                            (0, i.jsx)(o.Dr, {
                                id: "hide-entrypoint",
                                label: D.intl.string(D.t.NN79E9),
                                action: function () {
                                    ((0, h.r)({
                                        type: f.F.CLICK_INTERNAL,
                                        adCreativeType: l.p.QUEST,
                                        adCreativeId: t.quest.id,
                                        questContentCTA: S.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                        surfaceId: t.questContent,
                                        sourceQuestContent: t.sourceQuestContent,
                                        impressionId: F(),
                                        questContentPosition: t.questContentPosition,
                                    }),
                                        (0, x.vy)(t.questContent) &&
                                            ((0, m.g5)(t.quest.id, t.questContent), U && (0, P.z6)(t.quest)));
                                },
                                subtext: D.intl.string(D.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            t.quest.preview &&
                (0, i.jsxs)(
                    o.rX,
                    {
                        label: D.intl.string(D.t["Ape+mm"]),
                        children: [
                            (0, i.jsx)(o.Dr, { id: "dismiss", label: D.intl.string(D.t.JF6W66), action: B }),
                            (0, i.jsx)(o.Dr, {
                                id: "enrollment",
                                label: D.intl.string(D.t.taqkwK),
                                action: function () {
                                    (Q(), X());
                                },
                            }),
                            (0, i.jsx)(o.Dr, {
                                id: "progress",
                                label: D.intl.string(D.t.cKSLr4),
                                action: function () {
                                    k(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, i.jsx)(o.Dr, { id: "complete", label: D.intl.string(D.t.jQEfRT), action: V }),
                            (0, M.g5)(t.quest) &&
                                (0, i.jsxs)(o.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, i.jsx)(o.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${(0, M.YL)(t.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, i.jsx)(o.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: function () {
                                                return (0, m.vD)(t.quest.id, !0).catch(W);
                                            },
                                        }),
                                        (0, i.jsx)(o.Dr, { id: "stop", label: "Stop heartbeat", action: X }),
                                    ],
                                }),
                            (0, i.jsx)(o.Dr, {
                                id: "copy-quest-id",
                                label: D.intl.string(D.t.oisrFi),
                                action: () => {
                                    (0, A.C)(t.quest.id);
                                },
                            }),
                            (0, i.jsx)(o.Dr, { id: "preview", label: D.intl.string(D.t.tx5Ax5), action: tn }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function U(t) {
    let {
            children: e,
            onOpen: n,
            onClose: s,
            preventIdle: r,
            quest: o,
            questContent: u,
            questContentPosition: d,
            sourceQuestContent: c,
            ...E
        } = t,
        C = (0, w.wW)(),
        g = a.useRef(null),
        p = a.useCallback(() => {
            ((0, h.r)({
                type: f.F.CLICK_INTERNAL,
                adCreativeType: l.p.QUEST,
                adCreativeId: o.id,
                questContentCTA: S.Cy.OPEN_CONTEXT_MENU,
                surfaceId: u,
                sourceQuestContent: c,
                impressionId: C(),
                questContentPosition: d,
            }),
                null != n && n());
        }, [n, o.id, u, d, c, C]);
    return (0, i.jsx)(_.Y, {
        targetElementRef: g,
        onRequestOpen: p,
        onRequestClose: s,
        renderPopout: (t) => {
            let { closePopout: e } = t;
            return r
                ? (0, i.jsx)(T.A, {
                      children: (0, i.jsx)(j, {
                          ...E,
                          quest: o,
                          questContent: u,
                          questContentPosition: d,
                          onClose: e,
                          sourceQuestContent: c,
                      }),
                  })
                : (0, i.jsx)(j, {
                      ...E,
                      quest: o,
                      questContent: u,
                      questContentPosition: d,
                      onClose: e,
                      sourceQuestContent: c,
                  });
        },
        animation: _.Y.Animation.NONE,
        children: (t) => (0, i.jsx)("div", { ref: g, children: e(t) }),
    });
}
