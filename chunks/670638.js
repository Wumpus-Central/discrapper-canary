n.d(t, { r: () => E });
var r = n(200651),
    s = n(192379),
    o = n(442837),
    i = n(481060),
    a = n(239091),
    l = n(479531),
    c = n(390322),
    u = n(63063),
    d = n(617136),
    m = n(915750),
    p = n(272008),
    x = n(113434),
    g = n(569984),
    h = n(497505),
    f = n(918701),
    j = n(341907),
    b = n(46140),
    C = n(981631),
    N = n(231338),
    v = n(388032);
function y(e) {
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
function O(e, t) {
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
    let n = (0, o.e7)([g.Z], () => g.Z.questDeliveryOverride, []),
        c = (0, f.GN)(e.questContent),
        y = !(0, f.q8)(e.quest) && !(0, f.pO)(e.quest),
        O = [h.jn.QUEST_BAR_V2, h.jn.QUEST_BAR].includes(e.questContent),
        T = (0, f.zK)(e.quest, b.S7.DISMISSAL_SURVEY),
        E = (0, d.O5)(),
        q = (0, m.aM)(),
        { handleComplete: S, handleProgress: P, handleResetDismissibilityClick: w, handleResetStatusClick: R, handleOverrideDeliveryClick: _ } = (0, x.kJ)(e.quest.id),
        I = s.useCallback(() => {
            if (e.quest.id === b.V6) return void window.open(u.Z.getArticleURL(C.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
            (0, f.FE)(e.quest, {
                content: e.questContent,
                ctaContent: d.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
                impressionId: q
            });
        }, [q, e.quest, e.questContent]),
        D = s.useCallback(() => {
            (0, f.f2)(e.quest.id, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: d.jZ.CONTEXT_MENU_COPY_LINK,
                impressionId: q
            }),
                (0, i.showToast)((0, i.createToast)(v.NW.string(v.t['+5kSoa']), i.ToastType.SUCCESS));
        }, [q, e.quest.id, e.questContent, e.questContentPosition]),
        M = (e) => (0, i.showToast)((0, i.createToast)(new l.Z(e, e.status).message, i.ToastType.FAILURE)),
        A = () => (0, p.is)(e.quest.id).catch(M),
        W = s.useMemo(() => (y ? v.t.lwQdjI : v.t.hvVgAQ), [y]),
        Z = s.useMemo(
            () =>
                (0, r.jsx)(i.S89, {
                    id: 'delivery',
                    label: 'Show in Quest Bar',
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: _
                }),
            [_, e.quest.id, null == n ? void 0 : n.id]
        ),
        k = e.shouldShowDisclosure && e.quest.id !== b.V6;
    return (0, r.jsxs)(i.v2r, {
        variant: 'fixed',
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, a.Zy)();
        },
        navId: 'quests-entry',
        'aria-label': v.NW.string(v.t.ogxXGh),
        onClose: null != (t = null == e ? void 0 : e.onClose) ? t : N.dG,
        children: [
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [
                        (0, r.jsx)(i.sNh, {
                            id: 'play-game',
                            label: v.NW.string(W),
                            action: I,
                            icon: i.zFc
                        }),
                        !0 === e.showShareLink &&
                            (0, r.jsx)(i.sNh, {
                                id: 'share-link',
                                label: v.NW.string(v.t.RDE0SU),
                                action: D,
                                icon: i.TIy
                            }),
                        !1
                    ]
                },
                'major-actions'
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, r.jsx)(i.sNh, {
                                id: 'learn-more',
                                label: v.NW.string(v.t.Ws2Bl5),
                                action: () => {
                                    E({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: d.jZ.CONTEXT_MENU_LEARN_MORE
                                    }),
                                        (0, j.navigateToQuestHome)({
                                            fromContent: e.questContent,
                                            questId: e.quest.id
                                        });
                                },
                                icon: i.qDn
                            }),
                        k &&
                            (0, r.jsx)(i.sNh, {
                                id: 'display-disclosure',
                                label: v.NW.string(v.t.GcsZKC),
                                action: () => {
                                    (0, j.openDisclosureModal)(e.quest, {
                                        content: e.questContent,
                                        position: e.questContentPosition,
                                        ctaContent: d.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                                        impressionId: q
                                    });
                                }
                            }),
                        c &&
                            (0, r.jsx)(i.sNh, {
                                id: 'hide-entrypoint',
                                label: v.NW.string(v.t.NN79Ex),
                                action: () => {
                                    E({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: d.jZ.CONTEXT_MENU_HIDE_CONTENT
                                    }),
                                        (0, f.GN)(e.questContent) && ((0, p.gl)(e.quest.id, e.questContent), T && O && (0, j.maybeShowSurveyForQuest)(e.quest));
                                },
                                subtext: v.NW.string(v.t['1u3YPD'])
                            })
                    ]
                },
                'minor-actions'
            ),
            e.quest.preview &&
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        label: 'Preview Controls',
                        children: [
                            Z,
                            (0, r.jsx)(i.sNh, {
                                id: 'dismiss',
                                label: 'Reset Dismissibility',
                                action: w
                            }),
                            (0, r.jsx)(i.sNh, {
                                id: 'enrollment',
                                label: 'Reset Quest',
                                action: () => {
                                    R(), A();
                                }
                            }),
                            (0, r.jsx)(i.sNh, {
                                id: 'progress',
                                label: 'Set Random Quest Progress',
                                action: () => {
                                    P(0.9 * Math.random() + 0.03);
                                }
                            }),
                            (0, r.jsx)(i.sNh, {
                                id: 'complete',
                                label: 'Complete Quest',
                                action: S
                            }),
                            (0, f.$J)(e.quest) &&
                                (0, r.jsxs)(i.sNh, {
                                    id: 'console',
                                    label: 'Console Heartbeat',
                                    children: [
                                        (0, r.jsx)(i.sNh, {
                                            disabled: !0,
                                            id: 'status',
                                            label: 'Status: '.concat((0, f.Bz)(e.quest) ? 'alive' : 'dead')
                                        }),
                                        (0, r.jsx)(i.sNh, {
                                            id: 'start',
                                            label: 'Start heartbeat (cheatmode)',
                                            action: () => (0, p.CS)(e.quest.id, !0).catch(M)
                                        }),
                                        (0, r.jsx)(i.sNh, {
                                            id: 'stop',
                                            label: 'Stop heartbeat',
                                            action: A
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
function E(e) {
    let { children: t, onOpen: n, onClose: o, preventIdle: a, quest: l, questContent: u, questContentPosition: m } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                s = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        s = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                    return s;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
            }
            return s;
        })(e, ['children', 'onOpen', 'onClose', 'preventIdle', 'quest', 'questContent', 'questContentPosition']),
        x = (0, d.O5)(),
        g = s.useCallback(() => {
            x({
                questId: l.id,
                questContent: u,
                questContentCTA: d.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: m
            }),
                null != n && n();
        }, [n, l.id, u, m, x]);
    return (0, r.jsx)(i.yRy, {
        onRequestOpen: g,
        onRequestClose: o,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return a
                ? (0, r.jsx)(c.Z, {
                      children: (0, r.jsx)(
                          T,
                          O(y({}, p), {
                              quest: l,
                              questContent: u,
                              questContentPosition: m,
                              onClose: t
                          })
                      )
                  })
                : (0, r.jsx)(
                      T,
                      O(y({}, p), {
                          quest: l,
                          questContent: u,
                          questContentPosition: m,
                          onClose: t
                      })
                  );
        },
        animation: i.yRy.Animation.NONE,
        children: (e) => t(e)
    });
}
