var i = n(477900),
    s = n(582128),
    a = n(323889),
    r = n(855986),
    l = n(858899),
    o = n(477782),
    u = n(165862),
    c = n(743368),
    d = n(173936),
    E = n(577473),
    _ = n(265872),
    C = n(442433),
    f = n(181658),
    T = n(438457),
    g = n(144779),
    m = n(976860),
    p = n(246356),
    A = n(957565),
    I = n(343559),
    h = n(122760),
    S = n(506988),
    N = n(61387),
    v = n(590202),
    R = n(971649),
    M = n(651892),
    x = n(710969),
    w = n(792620),
    O = n(814793),
    L = n(201805),
    P = n(321538),
    q = n(221596),
    b = n(652215),
    y = n(818348),
    D = n(792996);
function j(e) {
    let t = (0, r.bG)([h.A], () => h.A.getQuestPreviewOverride(S.uF.QUEST_BAR_V2), []),
        n = (0, r.bG)([h.A], () => h.A.getQuestPreviewOverride(S.uF.ACTIVITY_PANEL), []),
        _ = (0, r.bG)([h.A], () => h.A.getQuestPreviewOverride(S.uF.QUEST_LIVE_STREAM), []),
        p = (0, r.bG)([h.A], () => h.A.getQuestPreviewOverride(S.uF.MEMBERS_LIST), []),
        j = (0, x.vy)(e.questContent),
        U = [S.uF.QUEST_BAR_V2, S.uF.QUEST_BAR].includes(e.questContent),
        F = (0, R.wW)(),
        G = (0, M.wr)(e.quest),
        k = !0 === e.showShareLink && (0, O.E0)(e.quest.config),
        {
            handleComplete: H,
            handleProgress: V,
            handleResetDismissibilityClick: Q,
            handleResetStatusClick: B,
            handleOverridePreviewClick: Z,
        } = (0, N.j$)(e.quest.id),
        K = (0, N.do)({
            quest: e.quest,
            content: e.questContent,
            ctaContent: v.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: e.sourceQuestContent,
        }),
        J = (0, L.Lk)({
            isShareable: k,
            questId: e.quest.id,
            trackingCtx: s.useMemo(
                () => ({
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: v.Cy.CONTEXT_MENU_COPY_LINK,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                [e.questContent, e.questContentPosition, e.sourceQuestContent],
            ),
        });
    function X(e) {
        return (0, l.P0)({ text: new f.A(e, e.status).message, variant: "critical" });
    }
    function W() {
        return (0, I.CV)(e.quest.id).catch(X);
    }
    let Y = (0, N.Ns)(e.quest),
        z = s.useMemo(
            () =>
                (0, i.jsx)(o.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: t?.id === e.quest.id,
                    action: () => Z(S.uF.QUEST_BAR_V2),
                }),
            [Z, e.quest.id, t?.id],
        ),
        $ = s.useMemo(
            () =>
                (0, i.jsx)(o.sL, {
                    id: "activity-panel",
                    label: "Show in Activity Panel",
                    checked: n?.id === e.quest.id,
                    action: () => Z(S.uF.ACTIVITY_PANEL),
                }),
            [Z, e.quest.id, n?.id],
        ),
        ee = s.useMemo(
            () =>
                (0, i.jsx)(o.sL, {
                    id: "channel-call-header",
                    label: "Show in Voice Channel Header",
                    checked: _?.id === e.quest.id,
                    action: () => Z(S.uF.QUEST_LIVE_STREAM),
                }),
            [Z, e.quest.id, _?.id],
        ),
        et = s.useMemo(
            () =>
                (0, i.jsx)(o.sL, {
                    id: "members-list",
                    label: "Show in Members List",
                    checked: p?.id === e.quest.id,
                    action: () => Z(S.uF.MEMBERS_LIST),
                }),
            [Z, e.quest.id, p?.id],
        ),
        en = s.useCallback(() => {
            (0, m.pX)(b.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id));
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
        onClose: e?.onClose ?? y.tE,
        children: [
            (0, i.jsxs)(
                o.rX,
                {
                    children: [
                        (0, i.jsx)(o.Dr, {
                            id: "play-game",
                            label: G,
                            action: K,
                            icon: c.LinkExternalMediumIcon,
                            leadingAccessory: { type: "icon", icon: c.LinkExternalMediumIcon },
                        }),
                        k &&
                            (0, i.jsx)(o.Dr, {
                                id: "share-link",
                                label: D.intl.string(D.t.RDE0Sc),
                                action: J,
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
                                    ((0, T.r)({
                                        type: g.F.CLICK_INTERNAL,
                                        adCreativeType: a.p.QUEST,
                                        adCreativeId: e.quest.id,
                                        questContentCTA: v.Cy.CONTEXT_MENU_LEARN_MORE,
                                        surfaceId: e.questContent,
                                        sourceQuestContent: e.sourceQuestContent,
                                        impressionId: F(),
                                        questContentPosition: e.questContentPosition,
                                    }),
                                        (0, P.mA)({ fromContent: e.questContent, questId: e.quest.id }));
                                },
                                icon: E.QuestsIcon,
                                leadingAccessory: { type: "icon", icon: E.QuestsIcon },
                            }),
                        ei &&
                            (0, i.jsx)(o.Dr, {
                                id: "display-disclosure",
                                label: D.intl.string(D.t.GcsZKJ),
                                action: function () {
                                    (0, P.Zc)(
                                        { type: a.p.QUEST, quest: e.quest },
                                        {
                                            content: e.questContent,
                                            position: e.questContentPosition,
                                            ctaContent: v.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
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
                                    ((0, T.r)({
                                        type: g.F.CLICK_INTERNAL,
                                        adCreativeType: a.p.QUEST,
                                        adCreativeId: e.quest.id,
                                        questContentCTA: v.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                        surfaceId: e.questContent,
                                        sourceQuestContent: e.sourceQuestContent,
                                        impressionId: F(),
                                        questContentPosition: e.questContentPosition,
                                    }),
                                        (0, x.vy)(e.questContent) &&
                                            ((0, I.g5)(e.quest.id, e.questContent), U && (0, P.z6)(e.quest)));
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
                                    (B(), W());
                                },
                            }),
                            (0, i.jsx)(o.Dr, {
                                id: "progress",
                                label: D.intl.string(D.t.cKSLr4),
                                action: function () {
                                    V(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, i.jsx)(o.Dr, { id: "complete", label: D.intl.string(D.t.jQEfRT), action: H }),
                            (0, w.g5)(e.quest) &&
                                (0, i.jsxs)(o.Dr, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, i.jsx)(o.Dr, {
                                            disabled: !0,
                                            id: "status",
                                            label: `Status: ${(0, w.YL)(e.quest) ? "alive" : "dead"}`,
                                        }),
                                        (0, i.jsx)(o.Dr, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: function () {
                                                return (0, I.vD)(e.quest.id, !0).catch(X);
                                            },
                                        }),
                                        (0, i.jsx)(o.Dr, { id: "stop", label: "Stop heartbeat", action: W }),
                                    ],
                                }),
                            (0, i.jsx)(o.Dr, {
                                id: "copy-quest-id",
                                label: D.intl.string(D.t.oisrFi),
                                action: () => {
                                    (0, A.C)(e.quest.id);
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
n.d(
    t,
    {},
    {
        C: function (e) {
            let {
                    children: t,
                    onOpen: n,
                    onClose: r,
                    preventIdle: l,
                    quest: o,
                    questContent: u,
                    questContentPosition: c,
                    sourceQuestContent: d,
                    ...E
                } = e,
                C = (0, R.wW)(),
                f = s.useRef(null),
                m = s.useCallback(() => {
                    ((0, T.r)({
                        type: g.F.CLICK_INTERNAL,
                        adCreativeType: a.p.QUEST,
                        adCreativeId: o.id,
                        questContentCTA: v.Cy.OPEN_CONTEXT_MENU,
                        surfaceId: u,
                        sourceQuestContent: d,
                        impressionId: C(),
                        questContentPosition: c,
                    }),
                        null != n && n());
                }, [n, o.id, u, c, d, C]);
            return (0, i.jsx)(_.Y, {
                targetElementRef: f,
                onRequestOpen: m,
                onRequestClose: r,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return l
                        ? (0, i.jsx)(p.A, {
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
        },
    },
);
