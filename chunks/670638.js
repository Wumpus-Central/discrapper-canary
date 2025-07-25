n.d(t, { r: () => q });
var r = n(255367),
    s = n(73800),
    o = n(442837),
    i = n(481060),
    a = n(239091),
    l = n(479531),
    c = n(390322),
    u = n(572004),
    d = n(63063),
    m = n(617136),
    p = n(915750),
    h = n(509212),
    x = n(272008),
    g = n(113434),
    j = n(569984),
    C = n(497505),
    f = n(110560),
    b = n(46140),
    v = n(981631),
    y = n(231338),
    O = n(388032);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
    let n = (0, o.e7)([j.Z], () => j.Z.questDeliveryOverride, []),
        c = (0, h.GN)(e.questContent),
        N = [C.jn.QUEST_BAR_V2, C.jn.QUEST_BAR].includes(e.questContent),
        T = (0, m.O5)(),
        E = (0, p.aM)(),
        q = (0, g.Yj)(e.quest),
        { handleComplete: S, handleProgress: P, handleResetDismissibilityClick: w, handleResetStatusClick: R, handleOverrideDeliveryClick: _ } = (0, g.kJ)(e.quest.id),
        I = s.useCallback(() => {
            if (e.quest.id === b.V6) return void window.open(d.Z.getArticleURL(v.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
            (0, h.nc)(e.quest, {
                content: e.questContent,
                ctaContent: m.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
                impressionId: E,
                sourceQuestContent: e.sourceQuestContent
            });
        }, [E, e.quest, e.questContent, e.sourceQuestContent]),
        D = s.useCallback(() => {
            ((0, h.f2)(e.quest.id, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: m.jZ.CONTEXT_MENU_COPY_LINK,
                impressionId: E,
                sourceQuestContent: e.sourceQuestContent
            }),
                (0, i.showToast)((0, i.createToast)(O.intl.string(O.t['+5kSoa']), i.ToastType.SUCCESS)));
        }, [E, e.quest.id, e.questContent, e.questContentPosition, e.sourceQuestContent]),
        M = (e) => (0, i.showToast)((0, i.createToast)(new l.Z(e, e.status).message, i.ToastType.FAILURE)),
        A = () => (0, x.is)(e.quest.id).catch(M),
        Q = s.useMemo(
            () =>
                (0, r.jsx)(i.S89, {
                    id: 'delivery',
                    label: 'Show in Quest Bar',
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: _
                }),
            [_, e.quest.id, null == n ? void 0 : n.id]
        ),
        Z = e.shouldShowDisclosure && e.quest.id !== b.V6;
    return (0, r.jsxs)(i.v2r, {
        variant: 'fixed',
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, a.Zy)();
        },
        navId: 'quests-entry',
        'aria-label': O.intl.string(O.t.ogxXGh),
        onClose: null != (t = null == e ? void 0 : e.onClose) ? t : y.dG,
        children: [
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [
                        (0, r.jsx)(i.sNh, {
                            id: 'play-game',
                            label: q,
                            action: I,
                            icon: i.zFc
                        }),
                        !0 === e.showShareLink &&
                            (0, r.jsx)(i.sNh, {
                                id: 'share-link',
                                label: O.intl.string(O.t.RDE0SU),
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
                                label: O.intl.string(O.t.Ws2Bl5),
                                action: () => {
                                    (T({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: m.jZ.CONTEXT_MENU_LEARN_MORE,
                                        sourceQuestContent: e.sourceQuestContent
                                    }),
                                        (0, f.navigateToQuestHome)({
                                            fromContent: e.questContent,
                                            questId: e.quest.id
                                        }));
                                },
                                icon: i.qDn
                            }),
                        Z &&
                            (0, r.jsx)(i.sNh, {
                                id: 'display-disclosure',
                                label: O.intl.string(O.t.GcsZKC),
                                action: () => {
                                    (0, f.openDisclosureModal)(e.quest, {
                                        content: e.questContent,
                                        position: e.questContentPosition,
                                        ctaContent: m.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                                        impressionId: E,
                                        sourceQuestContent: e.sourceQuestContent
                                    });
                                }
                            }),
                        c &&
                            (0, r.jsx)(i.sNh, {
                                id: 'hide-entrypoint',
                                label: O.intl.string(O.t.NN79Ex),
                                action: () => {
                                    (T({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: m.jZ.CONTEXT_MENU_HIDE_CONTENT,
                                        sourceQuestContent: e.sourceQuestContent
                                    }),
                                        (0, h.GN)(e.questContent) && ((0, x.gl)(e.quest.id, e.questContent), N && (0, f.maybeShowSurveyForQuest)(e.quest)));
                                },
                                subtext: O.intl.string(O.t['1u3YPD'])
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
                            Q,
                            (0, r.jsx)(i.sNh, {
                                id: 'dismiss',
                                label: 'Reset Dismissibility',
                                action: w
                            }),
                            (0, r.jsx)(i.sNh, {
                                id: 'enrollment',
                                label: 'Reset Quest',
                                action: () => {
                                    (R(), A());
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
                            (0, h.$J)(e.quest) &&
                                (0, r.jsxs)(i.sNh, {
                                    id: 'console',
                                    label: 'Console Heartbeat',
                                    children: [
                                        (0, r.jsx)(i.sNh, {
                                            disabled: !0,
                                            id: 'status',
                                            label: 'Status: '.concat((0, h.Bz)(e.quest) ? 'alive' : 'dead')
                                        }),
                                        (0, r.jsx)(i.sNh, {
                                            id: 'start',
                                            label: 'Start heartbeat (cheatmode)',
                                            action: () => (0, x.CS)(e.quest.id, !0).catch(M)
                                        }),
                                        (0, r.jsx)(i.sNh, {
                                            id: 'stop',
                                            label: 'Stop heartbeat',
                                            action: A
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
    let { children: t, onOpen: n, onClose: o, preventIdle: a, quest: l, questContent: u, questContentPosition: d, sourceQuestContent: p } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                s = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        s = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                    return s;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]));
            }
            return s;
        })(e, ['children', 'onOpen', 'onClose', 'preventIdle', 'quest', 'questContent', 'questContentPosition', 'sourceQuestContent']),
        x = (0, m.O5)(),
        g = s.useRef(null),
        j = s.useCallback(() => {
            (x({
                questId: l.id,
                questContent: u,
                questContentCTA: m.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: d,
                sourceQuestContent: p
            }),
                null != n && n());
        }, [n, l.id, u, d, x, p]);
    return (0, r.jsx)(i.yRy, {
        targetElementRef: g,
        onRequestOpen: j,
        onRequestClose: o,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return a
                ? (0, r.jsx)(c.Z, {
                      children: (0, r.jsx)(
                          E,
                          T(N({}, h), {
                              quest: l,
                              questContent: u,
                              questContentPosition: d,
                              onClose: t,
                              sourceQuestContent: p
                          })
                      )
                  })
                : (0, r.jsx)(
                      E,
                      T(N({}, h), {
                          quest: l,
                          questContent: u,
                          questContentPosition: d,
                          onClose: t,
                          sourceQuestContent: p
                      })
                  );
        },
        animation: i.yRy.Animation.NONE,
        children: (e) =>
            (0, r.jsx)('div', {
                ref: g,
                children: t(e)
            })
    });
}
