n.d(t, { r: () => P });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(239091),
    l = n(479531),
    c = n(390322),
    u = n(572004),
    d = n(63063),
    f = n(617136),
    _ = n(915750),
    p = n(509212),
    h = n(272008),
    m = n(113434),
    g = n(569984),
    E = n(497505),
    b = n(110560),
    y = n(46140),
    O = n(981631),
    v = n(231338),
    I = n(388032);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
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
                T(e, t, n[t]);
            }));
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function R(e) {
    var t;
    let n = (0, a.e7)([g.Z], () => g.Z.questDeliveryOverride, []),
        c = (0, p.GN)(e.questContent),
        T = [E.jn.QUEST_BAR_V2, E.jn.QUEST_BAR].includes(e.questContent),
        S = (0, f.O5)(),
        A = (0, _.aM)(),
        N = (0, m.Yj)(e.quest),
        { handleComplete: C, handleProgress: w, handleResetDismissibilityClick: R, handleResetStatusClick: P, handleOverrideDeliveryClick: D } = (0, m.kJ)(e.quest.id),
        L = () => {
            w(0.9 * Math.random() + 0.03);
        },
        x = i.useCallback(() => {
            if (e.quest.id === y.V6) return void window.open(d.Z.getArticleURL(O.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
            (0, p.nc)(e.quest, {
                content: e.questContent,
                ctaContent: f.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
                impressionId: A,
                sourceQuestContent: e.sourceQuestContent
            });
        }, [A, e.quest, e.questContent, e.sourceQuestContent]),
        k = i.useCallback(() => {
            ((0, p.f2)(e.quest.id, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: f.jZ.CONTEXT_MENU_COPY_LINK,
                impressionId: A,
                sourceQuestContent: e.sourceQuestContent
            }),
                (0, o.showToast)((0, o.createToast)(I.intl.string(I.t['+5kSoa']), o.ToastType.SUCCESS)));
        }, [A, e.quest.id, e.questContent, e.questContentPosition, e.sourceQuestContent]),
        j = () => {
            (0, b.openDisclosureModal)(e.quest, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: f.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                impressionId: A,
                sourceQuestContent: e.sourceQuestContent
            });
        },
        M = () => {
            (S({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: f.jZ.CONTEXT_MENU_LEARN_MORE,
                sourceQuestContent: e.sourceQuestContent
            }),
                (0, b.navigateToQuestHome)({
                    fromContent: e.questContent,
                    questId: e.quest.id
                }));
        },
        U = () => {
            null != e.onSelect ? e.onSelect() : (0, s.Zy)();
        },
        G = () => {
            (S({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: f.jZ.CONTEXT_MENU_HIDE_CONTENT,
                sourceQuestContent: e.sourceQuestContent
            }),
                (0, p.GN)(e.questContent) && ((0, h.gl)(e.quest.id, e.questContent), T && (0, b.maybeShowSurveyForQuest)(e.quest)));
        },
        B = (e) => (0, o.showToast)((0, o.createToast)(new l.Z(e, e.status).message, o.ToastType.FAILURE)),
        Z = () => (0, h.CS)(e.quest.id, !0).catch(B),
        F = () => (0, h.is)(e.quest.id).catch(B),
        V = () => {
            (P(), F());
        },
        H = !1,
        Y = i.useMemo(
            () =>
                (0, r.jsx)(o.S89, {
                    id: 'delivery',
                    label: 'Show in Quest Bar',
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: D
                }),
            [D, e.quest.id, null == n ? void 0 : n.id]
        ),
        W = e.shouldShowDisclosure && e.quest.id !== y.V6;
    return (0, r.jsxs)(o.v2r, {
        variant: 'fixed',
        onSelect: U,
        navId: 'quests-entry',
        'aria-label': I.intl.string(I.t.ogxXGh),
        onClose: null != (t = null == e ? void 0 : e.onClose) ? t : v.dG,
        children: [
            (0, r.jsxs)(
                o.kSQ,
                {
                    children: [
                        (0, r.jsx)(o.sNh, {
                            id: 'play-game',
                            label: N,
                            action: x,
                            icon: o.zFc
                        }),
                        !0 === e.showShareLink &&
                            (0, r.jsx)(o.sNh, {
                                id: 'share-link',
                                label: I.intl.string(I.t.RDE0SU),
                                action: k,
                                icon: o.TIy
                            }),
                        H && Y
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
                                label: I.intl.string(I.t.Ws2Bl5),
                                action: M,
                                icon: o.qDn
                            }),
                        W &&
                            (0, r.jsx)(o.sNh, {
                                id: 'display-disclosure',
                                label: I.intl.string(I.t.GcsZKC),
                                action: j
                            }),
                        c &&
                            (0, r.jsx)(o.sNh, {
                                id: 'hide-entrypoint',
                                label: I.intl.string(I.t.NN79Ex),
                                action: G,
                                subtext: I.intl.string(I.t['1u3YPD'])
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
                            !H && Y,
                            (0, r.jsx)(o.sNh, {
                                id: 'dismiss',
                                label: 'Reset Dismissibility',
                                action: R
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: 'enrollment',
                                label: 'Reset Quest',
                                action: V
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: 'progress',
                                label: 'Set Random Quest Progress',
                                action: L
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: 'complete',
                                label: 'Complete Quest',
                                action: C
                            }),
                            (0, p.$J)(e.quest) &&
                                (0, r.jsxs)(o.sNh, {
                                    id: 'console',
                                    label: 'Console Heartbeat',
                                    children: [
                                        (0, r.jsx)(o.sNh, {
                                            disabled: !0,
                                            id: 'status',
                                            label: 'Status: '.concat((0, p.Bz)(e.quest) ? 'alive' : 'dead')
                                        }),
                                        (0, r.jsx)(o.sNh, {
                                            id: 'start',
                                            label: 'Start heartbeat (cheatmode)',
                                            action: Z
                                        }),
                                        (0, r.jsx)(o.sNh, {
                                            id: 'stop',
                                            label: 'Stop heartbeat',
                                            action: F
                                        })
                                    ]
                                }),
                            (0, r.jsx)(o.sNh, {
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
function P(e) {
    let { children: t, onOpen: n, onClose: a, preventIdle: s, quest: l, questContent: u, questContentPosition: d, sourceQuestContent: _ } = e,
        p = C(e, ['children', 'onOpen', 'onClose', 'preventIdle', 'quest', 'questContent', 'questContentPosition', 'sourceQuestContent']),
        h = (0, f.O5)(),
        m = i.useRef(null),
        g = i.useCallback(() => {
            (h({
                questId: l.id,
                questContent: u,
                questContentCTA: f.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: d,
                sourceQuestContent: _
            }),
                null != n && n());
        }, [n, l.id, u, d, h, _]);
    return (0, r.jsx)(o.yRy, {
        targetElementRef: m,
        onRequestOpen: g,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return s
                ? (0, r.jsx)(c.Z, {
                      children: (0, r.jsx)(
                          R,
                          N(S({}, p), {
                              quest: l,
                              questContent: u,
                              questContentPosition: d,
                              onClose: t,
                              sourceQuestContent: _
                          })
                      )
                  })
                : (0, r.jsx)(
                      R,
                      N(S({}, p), {
                          quest: l,
                          questContent: u,
                          questContentPosition: d,
                          onClose: t,
                          sourceQuestContent: _
                      })
                  );
        },
        animation: o.yRy.Animation.NONE,
        children: (e) =>
            (0, r.jsx)('div', {
                ref: m,
                children: t(e)
            })
    });
}
