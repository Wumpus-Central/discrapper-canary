n.d(t, {
    r: function () {
        return v;
    }
});
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    o = n(239091),
    a = n(479531),
    u = n(390322),
    c = n(617136),
    d = n(915750),
    m = n(272008),
    x = n(113434),
    h = n(569984),
    C = n(497505),
    p = n(918701),
    g = n(341907),
    E = n(46140),
    j = n(231338),
    T = n(388032);
function f(e) {
    var t;
    let n = (0, l.e7)([h.Z], () => h.Z.questDeliveryOverride, []),
        u = (0, p.GN)(e.questContent),
        f = !(0, p.q8)(e.quest) && !(0, p.pO)(e.quest),
        v = [C.jn.QUEST_BAR_V2, C.jn.QUEST_BAR].includes(e.questContent),
        S = (0, p.zK)(e.quest, E.S7.DISMISSAL_SURVEY),
        N = (0, c.O5)(),
        q = (0, d.aM)(),
        { handleComplete: A, handleProgress: _, handleResetDismissibilityClick: R, handleResetStatusClick: M, handleOverrideDeliveryClick: I } = (0, x.kJ)(e.quest.id),
        b = s.useCallback(() => {
            (0, p.FE)(e.quest, {
                content: e.questContent,
                ctaContent: c.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
                impressionId: q
            });
        }, [q, e.quest, e.questContent]),
        L = s.useCallback(() => {
            (0, p.f2)(e.quest.id, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: c.jZ.CONTEXT_MENU_COPY_LINK,
                impressionId: q
            }),
                (0, r.showToast)((0, r.createToast)(T.intl.string(T.t['+5kSoa']), r.ToastType.SUCCESS));
        }, [q, e.quest.id, e.questContent, e.questContentPosition]),
        Z = (e) => (0, r.showToast)((0, r.createToast)(new a.Z(e, e.status).message, r.ToastType.FAILURE)),
        y = () => (0, m.is)(e.quest.id).catch(Z),
        P = s.useMemo(() => (f ? T.t.lwQdjI : T.t.hvVgAQ), [f]),
        B = s.useMemo(
            () =>
                (0, i.jsx)(r.MenuCheckboxItem, {
                    id: 'delivery',
                    label: 'Show in Quest Bar',
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: I
                }),
            [I, e.quest.id, null == n ? void 0 : n.id]
        );
    return (0, i.jsxs)(r.Menu, {
        variant: 'fixed',
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, o.Zy)();
        },
        navId: 'quests-entry',
        'aria-label': T.intl.string(T.t.ogxXGh),
        onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : j.dG,
        children: [
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [
                        (0, i.jsx)(r.MenuItem, {
                            id: 'play-game',
                            label: T.intl.string(P),
                            action: b,
                            icon: r.LinkExternalMediumIcon
                        }),
                        !0 === e.showShareLink &&
                            (0, i.jsx)(r.MenuItem, {
                                id: 'share-link',
                                label: T.intl.string(T.t.RDE0SU),
                                action: L,
                                icon: r.CopyIcon
                            }),
                        !1
                    ]
                },
                'major-actions'
            ),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, i.jsx)(r.MenuItem, {
                                id: 'learn-more',
                                label: T.intl.string(T.t.Ws2Bl5),
                                action: () => {
                                    N({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: c.jZ.CONTEXT_MENU_LEARN_MORE
                                    }),
                                        (0, g.navigateToQuestHome)(E.dr.QUEST_CONTEXT_MENU, e.questContent, e.quest.id);
                                },
                                icon: r.QuestsIcon
                            }),
                        e.shouldShowDisclosure &&
                            (0, i.jsx)(r.MenuItem, {
                                id: 'display-disclosure',
                                label: T.intl.string(T.t.GcsZKC),
                                action: () => {
                                    (0, g.openDisclosureModal)(e.quest, {
                                        content: e.questContent,
                                        position: e.questContentPosition,
                                        ctaContent: c.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                                        impressionId: q
                                    });
                                }
                            }),
                        u &&
                            (0, i.jsx)(r.MenuItem, {
                                id: 'hide-entrypoint',
                                label: T.intl.string(T.t.NN79Ex),
                                action: () => {
                                    if (
                                        (N({
                                            questId: e.quest.id,
                                            questContent: e.questContent,
                                            questContentPosition: e.questContentPosition,
                                            questContentCTA: c.jZ.CONTEXT_MENU_HIDE_CONTENT
                                        }),
                                        !!(0, p.GN)(e.questContent))
                                    )
                                        (0, m.gl)(e.quest.id, e.questContent), S && v && (0, g.maybeShowSurveyForQuest)(e.quest);
                                },
                                subtext: T.intl.string(T.t['1u3YPD'])
                            })
                    ]
                },
                'minor-actions'
            ),
            e.quest.preview &&
                (0, i.jsxs)(
                    r.MenuGroup,
                    {
                        label: 'Preview Controls',
                        children: [
                            B,
                            (0, i.jsx)(r.MenuItem, {
                                id: 'dismiss',
                                label: 'Reset Dismissibility',
                                action: R
                            }),
                            (0, i.jsx)(r.MenuItem, {
                                id: 'enrollment',
                                label: 'Reset Quest',
                                action: () => {
                                    M(), y();
                                }
                            }),
                            (0, i.jsx)(r.MenuItem, {
                                id: 'progress',
                                label: 'Set Random Quest Progress',
                                action: () => {
                                    _(0.9 * Math.random() + 0.03);
                                }
                            }),
                            (0, i.jsx)(r.MenuItem, {
                                id: 'complete',
                                label: 'Complete Quest',
                                action: A
                            }),
                            (0, p.$J)(e.quest) &&
                                (0, i.jsxs)(r.MenuItem, {
                                    id: 'console',
                                    label: 'Console Heartbeat',
                                    children: [
                                        (0, i.jsx)(r.MenuItem, {
                                            disabled: !0,
                                            id: 'status',
                                            label: 'Status: '.concat((0, p.Bz)(e.quest) ? 'alive' : 'dead')
                                        }),
                                        (0, i.jsx)(r.MenuItem, {
                                            id: 'start',
                                            label: 'Start heartbeat (cheatmode)',
                                            action: () => (0, m.CS)(e.quest.id, !0).catch(Z)
                                        }),
                                        (0, i.jsx)(r.MenuItem, {
                                            id: 'stop',
                                            label: 'Stop heartbeat',
                                            action: y
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
function v(e) {
    let { children: t, onOpen: n, onClose: l, preventIdle: o, quest: a, questContent: d, questContentPosition: m, ...x } = e,
        h = (0, c.O5)(),
        C = s.useCallback(() => {
            h({
                questId: a.id,
                questContent: d,
                questContentCTA: c.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: m
            }),
                null != n && n();
        }, [n, a.id, d, m, h]);
    return (0, i.jsx)(r.Popout, {
        onRequestOpen: C,
        onRequestClose: l,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return o
                ? (0, i.jsx)(u.Z, {
                      children: (0, i.jsx)(f, {
                          ...x,
                          quest: a,
                          questContent: d,
                          questContentPosition: m,
                          onClose: t
                      })
                  })
                : (0, i.jsx)(f, {
                      ...x,
                      quest: a,
                      questContent: d,
                      questContentPosition: m,
                      onClose: t
                  });
        },
        animation: r.Popout.Animation.NONE,
        children: (e) => t(e)
    });
}
