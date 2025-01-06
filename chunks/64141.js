n.d(t, {
    r: function () {
        return f;
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
    d = n(272008),
    m = n(113434),
    x = n(569984),
    h = n(497505),
    C = n(918701),
    p = n(341907),
    g = n(46140),
    E = n(231338),
    j = n(388032);
function T(e) {
    var t;
    let n = (0, l.e7)([x.Z], () => x.Z.questDeliveryOverride, []),
        u = (0, C.GN)(e.questContent),
        T = !(0, C.q8)(e.quest) && !(0, C.pO)(e.quest),
        f = [h.jn.QUEST_BAR_V2, h.jn.QUEST_BAR].includes(e.questContent),
        v = (0, C.zK)(e.quest, g.S7.DISMISSAL_SURVEY),
        { handleComplete: S, handleProgress: N, handleResetDismissibilityClick: q, handleResetStatusClick: _, handleOverrideDeliveryClick: A } = (0, m.kJ)(e.quest.id),
        R = s.useCallback(() => {
            (0, C.FE)(e.quest, {
                content: e.questContent,
                ctaContent: c.jZ.CONTEXT_MENU_OPEN_GAME_LINK
            });
        }, [e.quest, e.questContent]),
        b = s.useCallback(() => {
            (0, C.f2)(e.quest.id, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: c.jZ.CONTEXT_MENU_COPY_LINK
            }),
                (0, r.showToast)((0, r.createToast)(j.intl.string(j.t['+5kSoa']), r.ToastType.SUCCESS));
        }, [e.quest, e.questContent, e.questContentPosition]),
        I = (e) => (0, r.showToast)((0, r.createToast)(new a.Z(e, e.status).message, r.ToastType.FAILURE)),
        M = () => (0, d.is)(e.quest.id).catch(I),
        L = s.useMemo(() => (T ? j.t.lwQdjI : j.t.hvVgAQ), [T]);
    return (0, i.jsxs)(r.Menu, {
        variant: 'fixed',
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, o.Zy)();
        },
        navId: 'quests-entry',
        'aria-label': j.intl.string(j.t.ogxXGh),
        onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : E.dG,
        children: [
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [
                        (0, i.jsx)(r.MenuItem, {
                            id: 'play-game',
                            label: j.intl.string(L),
                            action: R,
                            icon: r.LinkExternalMediumIcon
                        }),
                        !0 === e.showShareLink &&
                            (0, i.jsx)(r.MenuItem, {
                                id: 'share-link',
                                label: j.intl.string(j.t.RDE0SU),
                                action: b,
                                icon: r.CopyIcon
                            })
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
                                label: j.intl.string(j.t.Ws2Bl5),
                                action: () => {
                                    (0, c._3)({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: c.jZ.CONTEXT_MENU_LEARN_MORE
                                    }),
                                        (0, p.navigateToQuestHome)(g.dr.QUEST_CONTEXT_MENU, e.questContent, e.quest.id);
                                },
                                icon: r.QuestsIcon
                            }),
                        e.shouldShowDisclosure &&
                            (0, i.jsx)(r.MenuItem, {
                                id: 'display-disclosure',
                                label: j.intl.string(j.t.GcsZKC),
                                action: () => {
                                    (0, p.openDisclosureModal)(e.quest, {
                                        content: e.questContent,
                                        position: e.questContentPosition,
                                        ctaContent: c.jZ.CONTEXT_MENU_OPEN_DISCLOSURE
                                    });
                                }
                            }),
                        u &&
                            (0, i.jsx)(r.MenuItem, {
                                id: 'hide-entrypoint',
                                label: j.intl.string(j.t.NN79Ex),
                                action: () => {
                                    if (
                                        ((0, c._3)({
                                            questId: e.quest.id,
                                            questContent: e.questContent,
                                            questContentPosition: e.questContentPosition,
                                            questContentCTA: c.jZ.CONTEXT_MENU_HIDE_CONTENT
                                        }),
                                        !!(0, C.GN)(e.questContent))
                                    )
                                        (0, d.gl)(e.quest.id, e.questContent), v && f && (0, p.maybeShowSurveyForQuest)(e.quest);
                                },
                                subtext: j.intl.string(j.t['1u3YPD'])
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
                            (0, i.jsx)(r.MenuCheckboxItem, {
                                id: 'delivery',
                                label: 'Show in Quest Bar',
                                checked: (null == n ? void 0 : n.id) === e.quest.id,
                                action: A
                            }),
                            (0, i.jsx)(r.MenuItem, {
                                id: 'dismiss',
                                label: 'Reset Dismissibility',
                                action: q
                            }),
                            (0, i.jsx)(r.MenuItem, {
                                id: 'enrollment',
                                label: 'Reset Quest',
                                action: () => {
                                    _(), M();
                                }
                            }),
                            (0, i.jsx)(r.MenuItem, {
                                id: 'progress',
                                label: 'Set Random Quest Progress',
                                action: () => {
                                    N(0.9 * Math.random() + 0.03);
                                }
                            }),
                            (0, i.jsx)(r.MenuItem, {
                                id: 'complete',
                                label: 'Complete Quest',
                                action: S
                            }),
                            (0, C.$J)(e.quest) &&
                                (0, i.jsxs)(r.MenuItem, {
                                    id: 'console',
                                    label: 'Console Heartbeat',
                                    children: [
                                        (0, i.jsx)(r.MenuItem, {
                                            disabled: !0,
                                            id: 'status',
                                            label: 'Status: '.concat((0, C.Bz)(e.quest) ? 'alive' : 'dead')
                                        }),
                                        (0, i.jsx)(r.MenuItem, {
                                            id: 'start',
                                            label: 'Start heartbeat (cheatmode)',
                                            action: () => (0, d.CS)(e.quest.id, !0).catch(I)
                                        }),
                                        (0, i.jsx)(r.MenuItem, {
                                            id: 'stop',
                                            label: 'Stop heartbeat',
                                            action: M
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
    let { children: t, onOpen: n, onClose: l, preventIdle: o, quest: a, questContent: d, questContentPosition: m, ...x } = e,
        h = s.useCallback(() => {
            (0, c._3)({
                questId: a.id,
                questContent: d,
                questContentCTA: c.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: m
            }),
                null != n && n();
        }, [n, a.id, d, m]);
    return (0, i.jsx)(r.Popout, {
        onRequestOpen: h,
        onRequestClose: l,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return o
                ? (0, i.jsx)(u.Z, {
                      children: (0, i.jsx)(T, {
                          ...x,
                          quest: a,
                          questContent: d,
                          questContentPosition: m,
                          onClose: t
                      })
                  })
                : (0, i.jsx)(T, {
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
