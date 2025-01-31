n.d(t, { r: () => f });
var s = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(481060),
    r = n(239091),
    o = n(479531),
    d = n(390322),
    u = n(617136),
    c = n(915750),
    m = n(272008),
    x = n(113434),
    h = n(569984),
    g = n(497505),
    C = n(918701),
    p = n(341907),
    j = n(46140),
    T = n(231338),
    E = n(388032);
function v(e) {
    var t;
    let n = (0, l.e7)([h.Z], () => h.Z.questDeliveryOverride, []),
        d = (0, C.GN)(e.questContent),
        v = !(0, C.q8)(e.quest) && !(0, C.pO)(e.quest),
        f = [g.jn.QUEST_BAR_V2, g.jn.QUEST_BAR].includes(e.questContent),
        N = (0, C.zK)(e.quest, j.S7.DISMISSAL_SURVEY),
        S = (0, u.O5)(),
        q = (0, c.aM)(),
        { handleComplete: A, handleProgress: _, handleResetDismissibilityClick: R, handleResetStatusClick: b, handleOverrideDeliveryClick: L } = (0, x.kJ)(e.quest.id),
        Z = i.useCallback(() => {
            (0, C.FE)(e.quest, {
                content: e.questContent,
                ctaContent: u.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
                impressionId: q
            });
        }, [q, e.quest, e.questContent]),
        M = i.useCallback(() => {
            (0, C.f2)(e.quest.id, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: u.jZ.CONTEXT_MENU_COPY_LINK,
                impressionId: q
            }),
                (0, a.showToast)((0, a.createToast)(E.intl.string(E.t['+5kSoa']), a.ToastType.SUCCESS));
        }, [q, e.quest.id, e.questContent, e.questContentPosition]),
        y = (e) => (0, a.showToast)((0, a.createToast)(new o.Z(e, e.status).message, a.ToastType.FAILURE)),
        I = () => (0, m.is)(e.quest.id).catch(y),
        P = i.useMemo(() => (v ? E.t.lwQdjI : E.t.hvVgAQ), [v]),
        w = i.useMemo(
            () =>
                (0, s.jsx)(a.S89, {
                    id: 'delivery',
                    label: 'Show in Quest Bar',
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: L
                }),
            [L, e.quest.id, null == n ? void 0 : n.id]
        );
    return (0, s.jsxs)(a.v2r, {
        variant: 'fixed',
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, r.Zy)();
        },
        navId: 'quests-entry',
        'aria-label': E.intl.string(E.t.ogxXGh),
        onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : T.dG,
        children: [
            (0, s.jsxs)(
                a.kSQ,
                {
                    children: [
                        (0, s.jsx)(a.sNh, {
                            id: 'play-game',
                            label: E.intl.string(P),
                            action: Z,
                            icon: a.zFc
                        }),
                        !0 === e.showShareLink &&
                            (0, s.jsx)(a.sNh, {
                                id: 'share-link',
                                label: E.intl.string(E.t.RDE0SU),
                                action: M,
                                icon: a.TIy
                            }),
                        !1
                    ]
                },
                'major-actions'
            ),
            (0, s.jsxs)(
                a.kSQ,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, s.jsx)(a.sNh, {
                                id: 'learn-more',
                                label: E.intl.string(E.t.Ws2Bl5),
                                action: () => {
                                    S({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: u.jZ.CONTEXT_MENU_LEARN_MORE
                                    }),
                                        (0, p.navigateToQuestHome)(j.dr.QUEST_CONTEXT_MENU, e.questContent, e.quest.id);
                                },
                                icon: a.qDn
                            }),
                        e.shouldShowDisclosure &&
                            (0, s.jsx)(a.sNh, {
                                id: 'display-disclosure',
                                label: E.intl.string(E.t.GcsZKC),
                                action: () => {
                                    (0, p.openDisclosureModal)(e.quest, {
                                        content: e.questContent,
                                        position: e.questContentPosition,
                                        ctaContent: u.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                                        impressionId: q
                                    });
                                }
                            }),
                        d &&
                            (0, s.jsx)(a.sNh, {
                                id: 'hide-entrypoint',
                                label: E.intl.string(E.t.NN79Ex),
                                action: () => {
                                    S({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: u.jZ.CONTEXT_MENU_HIDE_CONTENT
                                    }),
                                        (0, C.GN)(e.questContent) && ((0, m.gl)(e.quest.id, e.questContent), N && f && (0, p.maybeShowSurveyForQuest)(e.quest));
                                },
                                subtext: E.intl.string(E.t['1u3YPD'])
                            })
                    ]
                },
                'minor-actions'
            ),
            e.quest.preview &&
                (0, s.jsxs)(
                    a.kSQ,
                    {
                        label: 'Preview Controls',
                        children: [
                            w,
                            (0, s.jsx)(a.sNh, {
                                id: 'dismiss',
                                label: 'Reset Dismissibility',
                                action: R
                            }),
                            (0, s.jsx)(a.sNh, {
                                id: 'enrollment',
                                label: 'Reset Quest',
                                action: () => {
                                    b(), I();
                                }
                            }),
                            (0, s.jsx)(a.sNh, {
                                id: 'progress',
                                label: 'Set Random Quest Progress',
                                action: () => {
                                    _(0.9 * Math.random() + 0.03);
                                }
                            }),
                            (0, s.jsx)(a.sNh, {
                                id: 'complete',
                                label: 'Complete Quest',
                                action: A
                            }),
                            (0, C.$J)(e.quest) &&
                                (0, s.jsxs)(a.sNh, {
                                    id: 'console',
                                    label: 'Console Heartbeat',
                                    children: [
                                        (0, s.jsx)(a.sNh, {
                                            disabled: !0,
                                            id: 'status',
                                            label: 'Status: '.concat((0, C.Bz)(e.quest) ? 'alive' : 'dead')
                                        }),
                                        (0, s.jsx)(a.sNh, {
                                            id: 'start',
                                            label: 'Start heartbeat (cheatmode)',
                                            action: () => (0, m.CS)(e.quest.id, !0).catch(y)
                                        }),
                                        (0, s.jsx)(a.sNh, {
                                            id: 'stop',
                                            label: 'Stop heartbeat',
                                            action: I
                                        })
                                    ]
                                })
                        ]
                    },
                    'preview-controls'
                )
        ]
    });
}
function f(e) {
    let { children: t, onOpen: n, onClose: l, preventIdle: r, quest: o, questContent: c, questContentPosition: m, ...x } = e,
        h = (0, u.O5)(),
        g = i.useCallback(() => {
            h({
                questId: o.id,
                questContent: c,
                questContentCTA: u.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: m
            }),
                null != n && n();
        }, [n, o.id, c, m, h]);
    return (0, s.jsx)(a.yRy, {
        onRequestOpen: g,
        onRequestClose: l,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return r
                ? (0, s.jsx)(d.Z, {
                      children: (0, s.jsx)(v, {
                          ...x,
                          quest: o,
                          questContent: c,
                          questContentPosition: m,
                          onClose: t
                      })
                  })
                : (0, s.jsx)(v, {
                      ...x,
                      quest: o,
                      questContent: c,
                      questContentPosition: m,
                      onClose: t
                  });
        },
        animation: a.yRy.Animation.NONE,
        children: (e) => t(e)
    });
}
