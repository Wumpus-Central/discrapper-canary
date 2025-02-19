n.d(t, { r: () => T });
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
    h = n(918701),
    f = n(341907),
    j = n(46140),
    v = n(231338),
    b = n(388032);
function C(e) {
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
function N(e, t) {
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
function E(e) {
    var t;
    let n = (0, i.e7)([x.Z], () => x.Z.questDeliveryOverride, []),
        c = (0, h.GN)(e.questContent),
        C = !(0, h.q8)(e.quest) && !(0, h.pO)(e.quest),
        N = [g.jn.QUEST_BAR_V2, g.jn.QUEST_BAR].includes(e.questContent),
        E = (0, h.zK)(e.quest, j.S7.DISMISSAL_SURVEY),
        T = (0, u.O5)(),
        y = (0, d.aM)(),
        { handleComplete: S, handleProgress: O, handleResetDismissibilityClick: q, handleResetStatusClick: P, handleOverrideDeliveryClick: w } = (0, p.kJ)(e.quest.id),
        A = s.useCallback(() => {
            (0, h.FE)(e.quest, {
                content: e.questContent,
                ctaContent: u.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
                impressionId: y
            });
        }, [y, e.quest, e.questContent]),
        R = s.useCallback(() => {
            (0, h.f2)(e.quest.id, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: u.jZ.CONTEXT_MENU_COPY_LINK,
                impressionId: y
            }),
                (0, o.showToast)((0, o.createToast)(b.NW.string(b.t['+5kSoa']), o.ToastType.SUCCESS));
        }, [y, e.quest.id, e.questContent, e.questContentPosition]),
        _ = (e) => (0, o.showToast)((0, o.createToast)(new a.Z(e, e.status).message, o.ToastType.FAILURE)),
        Z = () => (0, m.is)(e.quest.id).catch(_),
        I = s.useMemo(() => (C ? b.t.lwQdjI : b.t.hvVgAQ), [C]),
        M = s.useMemo(
            () =>
                (0, r.jsx)(o.S89, {
                    id: 'delivery',
                    label: 'Show in Quest Bar',
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: w
                }),
            [w, e.quest.id, null == n ? void 0 : n.id]
        );
    return (0, r.jsxs)(o.v2r, {
        variant: 'fixed',
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, l.Zy)();
        },
        navId: 'quests-entry',
        'aria-label': b.NW.string(b.t.ogxXGh),
        onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : v.dG,
        children: [
            (0, r.jsxs)(
                o.kSQ,
                {
                    children: [
                        (0, r.jsx)(o.sNh, {
                            id: 'play-game',
                            label: b.NW.string(I),
                            action: A,
                            icon: o.zFc
                        }),
                        !0 === e.showShareLink &&
                            (0, r.jsx)(o.sNh, {
                                id: 'share-link',
                                label: b.NW.string(b.t.RDE0SU),
                                action: R,
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
                                label: b.NW.string(b.t.Ws2Bl5),
                                action: () => {
                                    T({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: u.jZ.CONTEXT_MENU_LEARN_MORE
                                    }),
                                        (0, f.navigateToQuestHome)({
                                            fromContent: e.questContent,
                                            questId: e.quest.id
                                        });
                                },
                                icon: o.qDn
                            }),
                        e.shouldShowDisclosure &&
                            (0, r.jsx)(o.sNh, {
                                id: 'display-disclosure',
                                label: b.NW.string(b.t.GcsZKC),
                                action: () => {
                                    (0, f.openDisclosureModal)(e.quest, {
                                        content: e.questContent,
                                        position: e.questContentPosition,
                                        ctaContent: u.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                                        impressionId: y
                                    });
                                }
                            }),
                        c &&
                            (0, r.jsx)(o.sNh, {
                                id: 'hide-entrypoint',
                                label: b.NW.string(b.t.NN79Ex),
                                action: () => {
                                    T({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: u.jZ.CONTEXT_MENU_HIDE_CONTENT
                                    }),
                                        (0, h.GN)(e.questContent) && ((0, m.gl)(e.quest.id, e.questContent), E && N && (0, f.maybeShowSurveyForQuest)(e.quest));
                                },
                                subtext: b.NW.string(b.t['1u3YPD'])
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
                            M,
                            (0, r.jsx)(o.sNh, {
                                id: 'dismiss',
                                label: 'Reset Dismissibility',
                                action: q
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: 'enrollment',
                                label: 'Reset Quest',
                                action: () => {
                                    P(), Z();
                                }
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: 'progress',
                                label: 'Set Random Quest Progress',
                                action: () => {
                                    O(0.9 * Math.random() + 0.03);
                                }
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: 'complete',
                                label: 'Complete Quest',
                                action: S
                            }),
                            (0, h.$J)(e.quest) &&
                                (0, r.jsxs)(o.sNh, {
                                    id: 'console',
                                    label: 'Console Heartbeat',
                                    children: [
                                        (0, r.jsx)(o.sNh, {
                                            disabled: !0,
                                            id: 'status',
                                            label: 'Status: '.concat((0, h.Bz)(e.quest) ? 'alive' : 'dead')
                                        }),
                                        (0, r.jsx)(o.sNh, {
                                            id: 'start',
                                            label: 'Start heartbeat (cheatmode)',
                                            action: () => (0, m.CS)(e.quest.id, !0).catch(_)
                                        }),
                                        (0, r.jsx)(o.sNh, {
                                            id: 'stop',
                                            label: 'Stop heartbeat',
                                            action: Z
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
function T(e) {
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
                          E,
                          N(C({}, p), {
                              quest: a,
                              questContent: d,
                              questContentPosition: m,
                              onClose: t
                          })
                      )
                  })
                : (0, r.jsx)(
                      E,
                      N(C({}, p), {
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
