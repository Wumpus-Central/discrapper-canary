var i = n(477900),
    s = n(582128),
    a = n(323889),
    l = n(855986),
    r = n(858899),
    o = n(477782),
    u = n(165862),
    c = n(743368),
    d = n(173936),
    E = n(577473),
    _ = n(265872),
    C = n(442433),
    f = n(181658),
    g = n(438457),
    T = n(144779),
    h = n(976860),
    p = n(246356),
    A = n(957565),
    m = n(7891),
    I = n(859703),
    N = n(506988),
    v = n(61387),
    S = n(590202),
    w = n(971649),
    R = n(651892),
    x = n(710969),
    M = n(792620),
    L = n(814793),
    O = n(201805),
    P = n(321538),
    q = n(221596),
    y = n(652215),
    b = n(818348),
    j = n(792996);
function D(e) {
    let t = (0, l.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.QUEST_BAR_V2), []),
        n = (0, l.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.ACTIVITY_PANEL), []),
        _ = (0, l.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.QUEST_LIVE_STREAM), []),
        p = (0, l.bG)([I.A], () => I.A.getQuestPreviewOverride(N.uF.MEMBERS_LIST), []),
        D = (0, x.vy)(e.questContent),
        U = [N.uF.QUEST_BAR_V2, N.uF.QUEST_BAR].includes(e.questContent),
        F = (0, w.wW)(),
        H = (0, R.wr)(e.quest),
        V = !0 === e.showShareLink && (0, L.E0)(e.quest.config),
        {
            handleComplete: G,
            handleProgress: k,
            handleResetDismissibilityClick: Z,
            handleResetStatusClick: Q,
            handleOverridePreviewClick: B,
        } = (0, v.j$)(e.quest.id),
        J = (0, v.do)({
            quest: e.quest,
            content: e.questContent,
            ctaContent: S.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: e.sourceQuestContent,
        }),
        K = (0, O.Lk)({
            isShareable: V,
            questId: e.quest.id,
            trackingCtx: s.useMemo(
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
        z = s.useMemo(
            () =>
                (0, i.jsx)(o.sL, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: t?.id === e.quest.id,
                    action: () => B(N.uF.QUEST_BAR_V2),
                }),
            [B, e.quest.id, t?.id],
        ),
        $ = s.useMemo(
            () =>
                (0, i.jsx)(o.sL, {
                    id: "activity-panel",
                    label: "Show in Activity Panel",
                    checked: n?.id === e.quest.id,
                    action: () => B(N.uF.ACTIVITY_PANEL),
                }),
            [B, e.quest.id, n?.id],
        ),
        ee = s.useMemo(
            () =>
                (0, i.jsx)(o.sL, {
                    id: "channel-call-header",
                    label: "Show in Voice Channel Header",
                    checked: _?.id === e.quest.id,
                    action: () => B(N.uF.QUEST_LIVE_STREAM),
                }),
            [B, e.quest.id, _?.id],
        ),
        et = s.useMemo(
            () =>
                (0, i.jsx)(o.sL, {
                    id: "members-list",
                    label: "Show in Members List",
                    checked: p?.id === e.quest.id,
                    action: () => B(N.uF.MEMBERS_LIST),
                }),
            [B, e.quest.id, p?.id],
        ),
        en = s.useCallback(() => {
            (0, h.pX)(y.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        ei = e.shouldShowDisclosure && e.quest.id !== q.Fw;
    return (0, i.jsxs)(u.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != e.onSelect ? e.onSelect() : (0, C.Z_)();
        },
        navId: "quests-entry",
        "aria-label": j.intl.string(j.t.ogxXGq),
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
                        V &&
                            (0, i.jsx)(o.Dr, {
                                id: "share-link",
                                label: j.intl.string(j.t.RDE0Sc),
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
                                label: j.intl.string(j.t["Ws2Bl+"]),
                                action: function () {
                                    ((0, g.r)({
                                        type: T.F.CLICK_INTERNAL,
                                        adCreativeType: a.p.QUEST,
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
                                label: j.intl.string(j.t.GcsZKJ),
                                action: function () {
                                    (0, P.Zc)(
                                        { type: a.p.QUEST, quest: e.quest },
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
                        D &&
                            (0, i.jsx)(o.Dr, {
                                id: "hide-entrypoint",
                                label: j.intl.string(j.t.NN79E9),
                                action: function () {
                                    ((0, g.r)({
                                        type: T.F.CLICK_INTERNAL,
                                        adCreativeType: a.p.QUEST,
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
                                subtext: j.intl.string(j.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, i.jsxs)(
                    o.rX,
                    {
                        label: j.intl.string(j.t["Ape+mm"]),
                        children: [
                            (0, i.jsx)(o.Dr, { id: "dismiss", label: j.intl.string(j.t.JF6W66), action: Z }),
                            (0, i.jsx)(o.Dr, {
                                id: "enrollment",
                                label: j.intl.string(j.t.taqkwK),
                                action: function () {
                                    (Q(), X());
                                },
                            }),
                            (0, i.jsx)(o.Dr, {
                                id: "progress",
                                label: j.intl.string(j.t.cKSLr4),
                                action: function () {
                                    k(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, i.jsx)(o.Dr, { id: "complete", label: j.intl.string(j.t.jQEfRT), action: G }),
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
                                label: j.intl.string(j.t.oisrFi),
                                action: () => {
                                    (0, A.C)(e.quest.id);
                                },
                            }),
                            (0, i.jsx)(o.Dr, { id: "preview", label: j.intl.string(j.t.tx5Ax5), action: en }),
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
                    onClose: l,
                    preventIdle: r,
                    quest: o,
                    questContent: u,
                    questContentPosition: c,
                    sourceQuestContent: d,
                    ...E
                } = e,
                C = (0, w.wW)(),
                f = s.useRef(null),
                h = s.useCallback(() => {
                    ((0, g.r)({
                        type: T.F.CLICK_INTERNAL,
                        adCreativeType: a.p.QUEST,
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
                onRequestOpen: h,
                onRequestClose: l,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return r
                        ? (0, i.jsx)(p.A, {
                              children: (0, i.jsx)(D, {
                                  ...E,
                                  quest: o,
                                  questContent: u,
                                  questContentPosition: c,
                                  onClose: t,
                                  sourceQuestContent: d,
                              }),
                          })
                        : (0, i.jsx)(D, {
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
