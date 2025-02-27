n.d(t, { r: () => y });
var r = n(200651),
    s = n(192379),
    i = n(442837),
    o = n(481060),
    l = n(239091),
    a = n(479531),
    c = n(390322),
    u = n(617136),
    d = n(915750),
    m = n(272008),
    p = n(113434),
    x = n(569984),
    g = n(497505),
    f = n(918701),
    h = n(341907),
    j = n(46140),
    v = n(642145),
    b = n(231338),
    C = n(388032);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e) {
    var t;
    let n = (0, i.e7)([x.Z], () => x.Z.questDeliveryOverride, []),
        c = (0, f.GN)(e.questContent),
        N = !(0, f.q8)(e.quest) && !(0, f.pO)(e.quest),
        E = [g.jn.QUEST_BAR_V2, g.jn.QUEST_BAR].includes(e.questContent),
        T = (0, f.zK)(e.quest, j.S7.DISMISSAL_SURVEY),
        y = (0, u.O5)(),
        S = (0, d.aM)(),
        { handleComplete: O, handleProgress: q, handleResetDismissibilityClick: P, handleResetStatusClick: w, handleOverrideDeliveryClick: A } = (0, p.kJ)(e.quest.id),
        R = s.useCallback(() => {
            (0, f.FE)(e.quest, {
                content: e.questContent,
                ctaContent: u.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
                impressionId: S
            });
        }, [S, e.quest, e.questContent]),
        _ = s.useCallback(() => {
            (0, f.f2)(e.quest.id, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: u.jZ.CONTEXT_MENU_COPY_LINK,
                impressionId: S
            }),
                (0, o.showToast)((0, o.createToast)(C.NW.string(C.t['+5kSoa']), o.ToastType.SUCCESS));
        }, [S, e.quest.id, e.questContent, e.questContentPosition]),
        Z = (e) => (0, o.showToast)((0, o.createToast)(new a.Z(e, e.status).message, o.ToastType.FAILURE)),
        I = () => (0, m.is)(e.quest.id).catch(Z),
        M = s.useMemo(() => (N ? C.t.lwQdjI : C.t.hvVgAQ), [N]),
        L = s.useMemo(
            () =>
                (0, r.jsx)(o.S89, {
                    id: 'delivery',
                    label: 'Show in Quest Bar',
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: A
                }),
            [A, e.quest.id, null == n ? void 0 : n.id]
        ),
        D = e.shouldShowDisclosure && e.quest.id !== v.V;
    return (0, r.jsxs)(o.v2r, {
        variant: 'fixed',
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, l.Zy)();
        },
        navId: 'quests-entry',
        'aria-label': C.NW.string(C.t.ogxXGh),
        onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : b.dG,
        children: [
            (0, r.jsxs)(
                o.kSQ,
                {
                    children: [
                        (0, r.jsx)(o.sNh, {
                            id: 'play-game',
                            label: C.NW.string(M),
                            action: R,
                            icon: o.zFc
                        }),
                        !0 === e.showShareLink &&
                            (0, r.jsx)(o.sNh, {
                                id: 'share-link',
                                label: C.NW.string(C.t.RDE0SU),
                                action: _,
                                icon: o.TIy
                            }),
                        !1
                    ]
                },
                'major-actions'
            ),
            (0, r.jsxs)(
                o.kSQ,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, r.jsx)(o.sNh, {
                                id: 'learn-more',
                                label: C.NW.string(C.t.Ws2Bl5),
                                action: () => {
                                    y({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: u.jZ.CONTEXT_MENU_LEARN_MORE
                                    }),
                                        (0, h.navigateToQuestHome)({
                                            fromContent: e.questContent,
                                            questId: e.quest.id
                                        });
                                },
                                icon: o.qDn
                            }),
                        D &&
                            (0, r.jsx)(o.sNh, {
                                id: 'display-disclosure',
                                label: C.NW.string(C.t.GcsZKC),
                                action: () => {
                                    (0, h.openDisclosureModal)(e.quest, {
                                        content: e.questContent,
                                        position: e.questContentPosition,
                                        ctaContent: u.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                                        impressionId: S
                                    });
                                }
                            }),
                        c &&
                            (0, r.jsx)(o.sNh, {
                                id: 'hide-entrypoint',
                                label: C.NW.string(C.t.NN79Ex),
                                action: () => {
                                    y({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: u.jZ.CONTEXT_MENU_HIDE_CONTENT
                                    }),
                                        (0, f.GN)(e.questContent) && ((0, m.gl)(e.quest.id, e.questContent), T && E && (0, h.maybeShowSurveyForQuest)(e.quest));
                                },
                                subtext: C.NW.string(C.t['1u3YPD'])
                            })
                    ]
                },
                'minor-actions'
            ),
            e.quest.preview &&
                (0, r.jsxs)(
                    o.kSQ,
                    {
                        label: 'Preview Controls',
                        children: [
                            L,
                            (0, r.jsx)(o.sNh, {
                                id: 'dismiss',
                                label: 'Reset Dismissibility',
                                action: P
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: 'enrollment',
                                label: 'Reset Quest',
                                action: () => {
                                    w(), I();
                                }
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: 'progress',
                                label: 'Set Random Quest Progress',
                                action: () => {
                                    q(0.9 * Math.random() + 0.03);
                                }
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: 'complete',
                                label: 'Complete Quest',
                                action: O
                            }),
                            (0, f.$J)(e.quest) &&
                                (0, r.jsxs)(o.sNh, {
                                    id: 'console',
                                    label: 'Console Heartbeat',
                                    children: [
                                        (0, r.jsx)(o.sNh, {
                                            disabled: !0,
                                            id: 'status',
                                            label: 'Status: '.concat((0, f.Bz)(e.quest) ? 'alive' : 'dead')
                                        }),
                                        (0, r.jsx)(o.sNh, {
                                            id: 'start',
                                            label: 'Start heartbeat (cheatmode)',
                                            action: () => (0, m.CS)(e.quest.id, !0).catch(Z)
                                        }),
                                        (0, r.jsx)(o.sNh, {
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
function y(e) {
    let { children: t, onOpen: n, onClose: i, preventIdle: l, quest: a, questContent: d, questContentPosition: m } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                s = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        s = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                    return s;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
            }
            return s;
        })(e, ['children', 'onOpen', 'onClose', 'preventIdle', 'quest', 'questContent', 'questContentPosition']),
        x = (0, u.O5)(),
        g = s.useCallback(() => {
            x({
                questId: a.id,
                questContent: d,
                questContentCTA: u.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: m
            }),
                null != n && n();
        }, [n, a.id, d, m, x]);
    return (0, r.jsx)(o.yRy, {
        onRequestOpen: g,
        onRequestClose: i,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return l
                ? (0, r.jsx)(c.Z, {
                      children: (0, r.jsx)(
                          T,
                          E(N({}, p), {
                              quest: a,
                              questContent: d,
                              questContentPosition: m,
                              onClose: t
                          })
                      )
                  })
                : (0, r.jsx)(
                      T,
                      E(N({}, p), {
                          quest: a,
                          questContent: d,
                          questContentPosition: m,
                          onClose: t
                      })
                  );
        },
        animation: o.yRy.Animation.NONE,
        children: (e) => t(e)
    });
}
