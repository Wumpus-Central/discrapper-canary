n.d(t, { r: () => q });
var r = n(200651),
    s = n(192379),
    o = n(442837),
    i = n(481060),
    a = n(239091),
    l = n(479531),
    c = n(390322),
    u = n(572004),
    d = n(63063),
    m = n(617136),
    p = n(915750),
    x = n(272008),
    g = n(113434),
    h = n(569984),
    f = n(497505),
    j = n(918701),
    b = n(341907),
    C = n(46140),
    N = n(981631),
    v = n(231338),
    y = n(388032);
function O(e) {
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
function T(e, t) {
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
    let n = (0, o.e7)([h.Z], () => h.Z.questDeliveryOverride, []),
        c = (0, j.GN)(e.questContent),
        O = !(0, j.q8)(e.quest) && !(0, j.pO)(e.quest),
        T = [f.jn.QUEST_BAR_V2, f.jn.QUEST_BAR].includes(e.questContent),
        E = (0, j.zK)(e.quest, C.S7.DISMISSAL_SURVEY),
        q = (0, m.O5)(),
        S = (0, p.aM)(),
        { handleComplete: P, handleProgress: w, handleResetDismissibilityClick: R, handleResetStatusClick: _, handleOverrideDeliveryClick: I } = (0, g.kJ)(e.quest.id),
        D = s.useCallback(() => {
            if (e.quest.id === C.V6) return void window.open(d.Z.getArticleURL(N.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
            (0, j.FE)(e.quest, {
                content: e.questContent,
                ctaContent: m.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
                impressionId: S
            });
        }, [S, e.quest, e.questContent]),
        A = s.useCallback(() => {
            (0, j.f2)(e.quest.id, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: m.jZ.CONTEXT_MENU_COPY_LINK,
                impressionId: S
            }),
                (0, i.showToast)((0, i.createToast)(y.NW.string(y.t['+5kSoa']), i.ToastType.SUCCESS));
        }, [S, e.quest.id, e.questContent, e.questContentPosition]),
        M = (e) => (0, i.showToast)((0, i.createToast)(new l.Z(e, e.status).message, i.ToastType.FAILURE)),
        W = () => (0, x.is)(e.quest.id).catch(M),
        Z = s.useMemo(() => (O ? y.t.lwQdjI : y.t.hvVgAQ), [O]),
        k = s.useMemo(
            () =>
                (0, r.jsx)(i.S89, {
                    id: 'delivery',
                    label: 'Show in Quest Bar',
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: I
                }),
            [I, e.quest.id, null == n ? void 0 : n.id]
        ),
        L = e.shouldShowDisclosure && e.quest.id !== C.V6;
    return (0, r.jsxs)(i.v2r, {
        variant: 'fixed',
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, a.Zy)();
        },
        navId: 'quests-entry',
        'aria-label': y.NW.string(y.t.ogxXGh),
        onClose: null != (t = null == e ? void 0 : e.onClose) ? t : v.dG,
        children: [
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [
                        (0, r.jsx)(i.sNh, {
                            id: 'play-game',
                            label: y.NW.string(Z),
                            action: D,
                            icon: i.zFc
                        }),
                        !0 === e.showShareLink &&
                            (0, r.jsx)(i.sNh, {
                                id: 'share-link',
                                label: y.NW.string(y.t.RDE0SU),
                                action: A,
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
                                label: y.NW.string(y.t.Ws2Bl5),
                                action: () => {
                                    q({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: m.jZ.CONTEXT_MENU_LEARN_MORE
                                    }),
                                        (0, b.navigateToQuestHome)({
                                            fromContent: e.questContent,
                                            questId: e.quest.id
                                        });
                                },
                                icon: i.qDn
                            }),
                        L &&
                            (0, r.jsx)(i.sNh, {
                                id: 'display-disclosure',
                                label: y.NW.string(y.t.GcsZKC),
                                action: () => {
                                    (0, b.openDisclosureModal)(e.quest, {
                                        content: e.questContent,
                                        position: e.questContentPosition,
                                        ctaContent: m.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                                        impressionId: S
                                    });
                                }
                            }),
                        c &&
                            (0, r.jsx)(i.sNh, {
                                id: 'hide-entrypoint',
                                label: y.NW.string(y.t.NN79Ex),
                                action: () => {
                                    q({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: m.jZ.CONTEXT_MENU_HIDE_CONTENT
                                    }),
                                        (0, j.GN)(e.questContent) && ((0, x.gl)(e.quest.id, e.questContent), E && T && (0, b.maybeShowSurveyForQuest)(e.quest));
                                },
                                subtext: y.NW.string(y.t['1u3YPD'])
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
                            k,
                            (0, r.jsx)(i.sNh, {
                                id: 'dismiss',
                                label: 'Reset Dismissibility',
                                action: R
                            }),
                            (0, r.jsx)(i.sNh, {
                                id: 'enrollment',
                                label: 'Reset Quest',
                                action: () => {
                                    _(), W();
                                }
                            }),
                            (0, r.jsx)(i.sNh, {
                                id: 'progress',
                                label: 'Set Random Quest Progress',
                                action: () => {
                                    w(0.9 * Math.random() + 0.03);
                                }
                            }),
                            (0, r.jsx)(i.sNh, {
                                id: 'complete',
                                label: 'Complete Quest',
                                action: P
                            }),
                            (0, j.$J)(e.quest) &&
                                (0, r.jsxs)(i.sNh, {
                                    id: 'console',
                                    label: 'Console Heartbeat',
                                    children: [
                                        (0, r.jsx)(i.sNh, {
                                            disabled: !0,
                                            id: 'status',
                                            label: 'Status: '.concat((0, j.Bz)(e.quest) ? 'alive' : 'dead')
                                        }),
                                        (0, r.jsx)(i.sNh, {
                                            id: 'start',
                                            label: 'Start heartbeat (cheatmode)',
                                            action: () => (0, x.CS)(e.quest.id, !0).catch(M)
                                        }),
                                        (0, r.jsx)(i.sNh, {
                                            id: 'stop',
                                            label: 'Stop heartbeat',
                                            action: W
                                        })
                                    ]
                                }),
                            (0, r.jsx)(i.sNh, {
                                id: 'copy-quest-id',
                                label: 'Copy Quest ID',
                                action: () => {
                                    (0, u.JG)(e.quest.id);
                                }
                            })
                        ]
                    },
                    'preview-controls'
                )
        ]
    });
}
function q(e) {
    let { children: t, onOpen: n, onClose: o, preventIdle: a, quest: l, questContent: u, questContentPosition: d } = e,
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
        x = (0, m.O5)(),
        g = s.useCallback(() => {
            x({
                questId: l.id,
                questContent: u,
                questContentCTA: m.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: d
            }),
                null != n && n();
        }, [n, l.id, u, d, x]);
    return (0, r.jsx)(i.yRy, {
        onRequestOpen: g,
        onRequestClose: o,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return a
                ? (0, r.jsx)(c.Z, {
                      children: (0, r.jsx)(
                          E,
                          T(O({}, p), {
                              quest: l,
                              questContent: u,
                              questContentPosition: d,
                              onClose: t
                          })
                      )
                  })
                : (0, r.jsx)(
                      E,
                      T(O({}, p), {
                          quest: l,
                          questContent: u,
                          questContentPosition: d,
                          onClose: t
                      })
                  );
        },
        animation: i.yRy.Animation.NONE,
        children: (e) => t(e)
    });
}
