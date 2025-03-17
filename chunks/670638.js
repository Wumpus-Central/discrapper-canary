n.d(t, { r: () => O });
var r = n(200651),
    s = n(192379),
    i = n(442837),
    o = n(481060),
    l = n(239091),
    a = n(479531),
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
    v = n(46140),
    C = n(642145),
    b = n(981631),
    N = n(231338),
    E = n(388032);
function T(e) {
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
function y(e, t) {
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
function S(e) {
    var t;
    let n = (0, i.e7)([g.Z], () => g.Z.questDeliveryOverride, []),
        c = (0, f.GN)(e.questContent),
        T = !(0, f.q8)(e.quest) && !(0, f.pO)(e.quest),
        y = [h.jn.QUEST_BAR_V2, h.jn.QUEST_BAR].includes(e.questContent),
        S = (0, f.zK)(e.quest, v.S7.DISMISSAL_SURVEY),
        O = (0, d.O5)(),
        q = (0, m.aM)(),
        { handleComplete: P, handleProgress: w, handleResetDismissibilityClick: A, handleResetStatusClick: R, handleOverrideDeliveryClick: _ } = (0, x.kJ)(e.quest.id),
        Z = s.useCallback(() => {
            if (e.quest.id === C.V) {
                window.open(u.Z.getArticleURL(b.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                return;
            }
            (0, f.FE)(e.quest, {
                content: e.questContent,
                ctaContent: d.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
                impressionId: q
            });
        }, [q, e.quest, e.questContent]),
        I = s.useCallback(() => {
            (0, f.f2)(e.quest.id, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: d.jZ.CONTEXT_MENU_COPY_LINK,
                impressionId: q
            }),
                (0, o.showToast)((0, o.createToast)(E.NW.string(E.t['+5kSoa']), o.ToastType.SUCCESS));
        }, [q, e.quest.id, e.questContent, e.questContentPosition]),
        M = (e) => (0, o.showToast)((0, o.createToast)(new a.Z(e, e.status).message, o.ToastType.FAILURE)),
        L = () => (0, p.is)(e.quest.id).catch(M),
        D = s.useMemo(() => (T ? E.t.lwQdjI : E.t.hvVgAQ), [T]),
        k = s.useMemo(
            () =>
                (0, r.jsx)(o.S89, {
                    id: 'delivery',
                    label: 'Show in Quest Bar',
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: _
                }),
            [_, e.quest.id, null == n ? void 0 : n.id]
        ),
        W = e.shouldShowDisclosure && e.quest.id !== C.V;
    return (0, r.jsxs)(o.v2r, {
        variant: 'fixed',
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, l.Zy)();
        },
        navId: 'quests-entry',
        'aria-label': E.NW.string(E.t.ogxXGh),
        onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : N.dG,
        children: [
            (0, r.jsxs)(
                o.kSQ,
                {
                    children: [
                        (0, r.jsx)(o.sNh, {
                            id: 'play-game',
                            label: E.NW.string(D),
                            action: Z,
                            icon: o.zFc
                        }),
                        !0 === e.showShareLink &&
                            (0, r.jsx)(o.sNh, {
                                id: 'share-link',
                                label: E.NW.string(E.t.RDE0SU),
                                action: I,
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
                                label: E.NW.string(E.t.Ws2Bl5),
                                action: () => {
                                    O({
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
                                icon: o.qDn
                            }),
                        W &&
                            (0, r.jsx)(o.sNh, {
                                id: 'display-disclosure',
                                label: E.NW.string(E.t.GcsZKC),
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
                            (0, r.jsx)(o.sNh, {
                                id: 'hide-entrypoint',
                                label: E.NW.string(E.t.NN79Ex),
                                action: () => {
                                    O({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: d.jZ.CONTEXT_MENU_HIDE_CONTENT
                                    }),
                                        (0, f.GN)(e.questContent) && ((0, p.gl)(e.quest.id, e.questContent), S && y && (0, j.maybeShowSurveyForQuest)(e.quest));
                                },
                                subtext: E.NW.string(E.t['1u3YPD'])
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
                            k,
                            (0, r.jsx)(o.sNh, {
                                id: 'dismiss',
                                label: 'Reset Dismissibility',
                                action: A
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: 'enrollment',
                                label: 'Reset Quest',
                                action: () => {
                                    R(), L();
                                }
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: 'progress',
                                label: 'Set Random Quest Progress',
                                action: () => {
                                    w(0.9 * Math.random() + 0.03);
                                }
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: 'complete',
                                label: 'Complete Quest',
                                action: P
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
                                            action: () => (0, p.CS)(e.quest.id, !0).catch(M)
                                        }),
                                        (0, r.jsx)(o.sNh, {
                                            id: 'stop',
                                            label: 'Stop heartbeat',
                                            action: L
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
function O(e) {
    let { children: t, onOpen: n, onClose: i, preventIdle: l, quest: a, questContent: u, questContentPosition: m } = e,
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
        x = (0, d.O5)(),
        g = s.useCallback(() => {
            x({
                questId: a.id,
                questContent: u,
                questContentCTA: d.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: m
            }),
                null != n && n();
        }, [n, a.id, u, m, x]);
    return (0, r.jsx)(o.yRy, {
        onRequestOpen: g,
        onRequestClose: i,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return l
                ? (0, r.jsx)(c.Z, {
                      children: (0, r.jsx)(
                          S,
                          y(T({}, p), {
                              quest: a,
                              questContent: u,
                              questContentPosition: m,
                              onClose: t
                          })
                      )
                  })
                : (0, r.jsx)(
                      S,
                      y(T({}, p), {
                          quest: a,
                          questContent: u,
                          questContentPosition: m,
                          onClose: t
                      })
                  );
        },
        animation: o.yRy.Animation.NONE,
        children: (e) => t(e)
    });
}
