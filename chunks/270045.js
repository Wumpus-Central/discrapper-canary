n.d(t, { C: () => U });
var i = n(477900),
    a = n(582128),
    s = n(323889),
    l = n(17928),
    r = n(858899),
    o = n(477782),
    u = n(980707),
    c = n(743368),
    d = n(173936),
    E = n(577473),
    _ = n(265872),
    C = n(442433),
    f = n(181658),
    g = n(507395),
    T = n(144779),
    p = n(976860),
    A = n(246356),
    h = n(957565),
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
    q = n(190107),
    y = n(652215),
    b = n(818348),
    D = n(105292);
function j(e) {
    let t = (0, l.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.QUEST_BAR_V2), []),
        n = (0, l.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.ACTIVITY_PANEL), []),
        _ = (0, l.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.QUEST_LIVE_STREAM), []),
        A = (0, l.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.MEMBERS_LIST), []),
        j = (0, x.vy)(e.questContent),
        U = [N.uF.QUEST_BAR_V2, N.uF.QUEST_BAR].includes(e.questContent),
        F = (0, w.wW)(),
        H = (0, R.wr)(e.quest),
        G = !0 === e.showShareLink && (0, L.E0)(e.quest.config),
        {
            handleComplete: V,
            handleProgress: k,
            handleResetDismissibilityClick: Q,
            handleResetStatusClick: B,
            handleOverridePreviewClick: Z,
        } = (0, v.j$)(e.quest.id),
        J = (0, v.do)({
            quest: e.quest,
            content: e.questContent,
            ctaContent: S.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: e.sourceQuestContent,
        }),
        K = (0, O.Lk)({
            isShareable: G,
            questId: e.quest.id,
            trackingCtx: a.useMemo(
                () => ({
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: S.Cy.CONTEXT_MENU_COPY_LINK,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                [e.questContent, e.questContentPosition, e.sourceQuestContent],
            ),
        });
    function W(e) {
        return (0, r.P0)({ text: new f.A(e, e.status).message, variant: "critical" });
    }
    function X() {
        return (0, m.CV)(e.quest.id).catch(W);
    }
    let Y = (0, v.Ns)(e.quest),
        z = a.useMemo(
            () =>
                (0, i.jsx)(o.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: t?.id === e.quest.id,
                    action: () => Z(N.uF.QUEST_BAR_V2),
                }),
            [Z, e.quest.id, t?.id],
        ),
        $ = a.useMemo(
            () =>
                (0, i.jsx)(o.sL, {
                    id: "activity-panel",
                    label: "Show in Activity Panel",
                    checked: n?.id === e.quest.id,
                    action: () => Z(N.uF.ACTIVITY_PANEL),
                }),
            [Z, e.quest.id, n?.id],
        ),
        ee = a.useMemo(
            () =>
                (0, i.jsx)(o.sL, {
                    id: "channel-call-header",
                    label: "Show in Voice Channel Header",
                    checked: _?.id === e.quest.id,
                    action: () => Z(N.uF.QUEST_LIVE_STREAM),
                }),
            [Z, e.quest.id, _?.id],
        ),
        et = a.useMemo(
            () =>
                (0, i.jsx)(o.sL, {
                    id: "members-list",
                    label: "Show in Members List",
                    checked: A?.id === e.quest.id,
                    action: () => Z(N.uF.MEMBERS_LIST),
                }),
            [Z, e.quest.id, A?.id],
        ),
        en = a.useCallback(() => {
            (0, p.pX)(y.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        ei = e.shouldShowDisclosure && e.quest.id !== q.Fw;
    return (0, i.jsxs)(u.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != e.onSelect ? e.onSelect() : (0, C.Z_)();
        },
        navId: "quests-entry",
        "aria-label": D.intl.string(D.t.ogxXGq),
        onClose: e?.onClose ?? b.tE,
        children: [
            (0, i.jsxs)(
                o.rX,
                {
                    children: [
                        (0, i.jsx)(o.Dr, {
                            id: "play-game",
                            label: H,
                            action: J,
                            icon: c.W,
                            leadingAccessory: { type: "icon", icon: c.W },
                        }),
                        G &&
                            (0, i.jsx)(o.Dr, {
                                id: "share-link",
                                label: D.intl.string(D.t.RDE0Sc),
                                action: K,
                                icon: d.LinkIcon,
                                leadingAccessory: { type: "icon", icon: d.LinkIcon },
                            }),
                        Y && z,
                        Y && $,
                        Y && ee,
                        Y && et,
                    ],
                },
                "major-actions",
            ),
            (0, i.jsxs)(
                o.rX,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, i.jsx)(o.Dr, {
                                id: "learn-more",
                                label: D.intl.string(D.t["Ws2Bl+"]),
                                action: function () {
                                    ((0, g.r)({
                                        type: T.F.CLICK_INTERNAL,
                                        adCreativeType: s.p.QUEST,
                                        adCreativeId: e.quest.id,
                                        questContentCTA: S.Cy.CONTEXT_MENU_LEARN_MORE,
                                        surfaceId: e.questContent,
                                        sourceQuestContent: e.sourceQuestContent,
                                        impressionId: F(),
                                        questContentPosition: e.questContentPosition,
                                    }),
                                        (0, P.mA)({ fromContent: e.questContent, questId: e.quest.id }));
                                },
                                icon: E.r,
                                leadingAccessory: { type: "icon", icon: E.r },
                            }),
                        ei &&
                            (0, i.jsx)(o.Dr, {
                                id: "display-disclosure",
                                label: D.intl.string(D.t.GcsZKJ),
                                action: function () {
                                    (0, P.Zc)(
                                        e.quest,
                                        {
                                            content: e.questContent,
                                            position: e.questContentPosition,
                                            ctaContent: S.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                            impressionId: F(),
                                            sourceQuestContent: e.sourceQuestContent,
                                        },
                                        e.returnRef,
                                    );
                                },
                            }),
                        j &&
                            (0, i.jsx)(o.Dr, {
                                id: "hide-entrypoint",
                                label: D.intl.string(D.t.NN79E9),
                                action: function () {
                                    ((0, g.r)({
                                        type: T.F.CLICK_INTERNAL,
                                        adCreativeType: s.p.QUEST,
                                        adCreativeId: e.quest.id,
                                        questContentCTA: S.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                        surfaceId: e.questContent,
                                        sourceQuestContent: e.sourceQuestContent,
                                        impressionId: F(),
                                        questContentPosition: e.questContentPosition,
                                    }),
                                        (0, x.vy)(e.questContent) &&
                                            ((0, m.g5)(e.quest.id, e.questContent), U && (0, P.z6)(e.quest)));
                                },
                                subtext: D.intl.string(D.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, i.jsxs)(
                    o.rX,
                    {
                        label: D.intl.string(D.t["Ape+mm"]),
                        children: [
                            (0, i.jsx)(o.Dr, { id: "dismiss", label: D.intl.string(D.t.JF6W66), action: Q }),
                            (0, i.jsx)(o.Dr, {
                                id: "enrollment",
                                label: D.intl.string(D.t.taqkwK),
                                action: function () {
                                    (B(), X());
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
                            (0, M.g5)(e.quest) &&
                                (0, i.jsxs)(o.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, i.jsx)(o.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${(0, M.YL)(e.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, i.jsx)(o.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: function () {
                                                return (0, m.vD)(e.quest.id, !0).catch(W);
                                            },
                                        }),
                                        (0, i.jsx)(o.Dr, { id: "stop", label: "Stop heartbeat", action: X }),
                                    ],
                                }),
                            (0, i.jsx)(o.Dr, {
                                id: "copy-quest-id",
                                label: D.intl.string(D.t.oisrFi),
                                action: () => {
                                    (0, h.C)(e.quest.id);
                                },
                            }),
                            (0, i.jsx)(o.Dr, { id: "preview", label: D.intl.string(D.t.tx5Ax5), action: en }),
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
            onClose: l,
            preventIdle: r,
            quest: o,
            questContent: u,
            questContentPosition: c,
            sourceQuestContent: d,
            ...E
        } = e,
        C = (0, w.wW)(),
        f = a.useRef(null),
        p = a.useCallback(() => {
            ((0, g.r)({
                type: T.F.CLICK_INTERNAL,
                adCreativeType: s.p.QUEST,
                adCreativeId: o.id,
                questContentCTA: S.Cy.OPEN_CONTEXT_MENU,
                surfaceId: u,
                sourceQuestContent: d,
                impressionId: C(),
                questContentPosition: c,
            }),
                null != n && n());
        }, [n, o.id, u, c, d, C]);
    return (0, i.jsx)(_.Y, {
        targetElementRef: f,
        onRequestOpen: p,
        onRequestClose: l,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return r
                ? (0, i.jsx)(A.A, {
                      children: (0, i.jsx)(j, {
                          ...E,
                          quest: o,
                          questContent: u,
                          questContentPosition: c,
                          onClose: t,
                          sourceQuestContent: d,
                      }),
                  })
                : (0, i.jsx)(j, {
                      ...E,
                      quest: o,
                      questContent: u,
                      questContentPosition: c,
                      onClose: t,
                      sourceQuestContent: d,
                  });
        },
        animation: _.Y.Animation.NONE,
        children: (e) => (0, i.jsx)("div", { ref: f, children: t(e) }),
    });
}
