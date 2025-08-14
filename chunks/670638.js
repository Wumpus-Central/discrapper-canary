n.d(t, { r: () => w });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(481060),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
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
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function P(e) {
    var t;
    let n = (0, o.e7)([g.Z], () => g.Z.questDeliveryOverride, []),
        c = (0, p.GN)(e.questContent),
        T = [E.jn.QUEST_BAR_V2, E.jn.QUEST_BAR].includes(e.questContent),
        S = (0, f.O5)(),
        A = (0, _.aM)(),
        N = (0, m.Yj)(e.quest),
        {
            handleComplete: C,
            handleProgress: R,
            handleResetDismissibilityClick: P,
            handleResetStatusClick: w,
            handleOverrideDeliveryClick: D,
        } = (0, m.kJ)(e.quest.id),
        L = () => {
            R(0.9 * Math.random() + 0.03);
        },
        x = i.useCallback(() => {
            if (e.quest.id === y.V6) return void window.open(d.Z.getArticleURL(O.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
            (0, p.nc)(e.quest, {
                content: e.questContent,
                ctaContent: f.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
                impressionId: A,
                sourceQuestContent: e.sourceQuestContent,
            });
        }, [A, e.quest, e.questContent, e.sourceQuestContent]),
        M = i.useCallback(() => {
            (0, p.f2)(e.quest.id, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: f.jZ.CONTEXT_MENU_COPY_LINK,
                impressionId: A,
                sourceQuestContent: e.sourceQuestContent,
            }),
                (0, a.showToast)((0, a.createToast)(I.intl.string(I.t["+5kSoa"]), a.ToastType.SUCCESS));
        }, [A, e.quest.id, e.questContent, e.questContentPosition, e.sourceQuestContent]),
        j = () => {
            (0, b.openDisclosureModal)(e.quest, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: f.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                impressionId: A,
                sourceQuestContent: e.sourceQuestContent,
            });
        },
        k = () => {
            S({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: f.jZ.CONTEXT_MENU_LEARN_MORE,
                sourceQuestContent: e.sourceQuestContent,
            }),
                (0, b.navigateToQuestHome)({
                    fromContent: e.questContent,
                    questId: e.quest.id,
                });
        },
        U = () => {
            null != e.onSelect ? e.onSelect() : (0, s.Zy)();
        },
        G = () => {
            S({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: f.jZ.CONTEXT_MENU_HIDE_CONTENT,
                sourceQuestContent: e.sourceQuestContent,
            }),
                (0, p.GN)(e.questContent) &&
                    ((0, h.gl)(e.quest.id, e.questContent), T && (0, b.maybeShowSurveyForQuest)(e.quest));
        },
        B = (e) => (0, a.showToast)((0, a.createToast)(new l.Z(e, e.status).message, a.ToastType.FAILURE)),
        Z = () => (0, h.CS)(e.quest.id, !0).catch(B),
        F = () => (0, h.is)(e.quest.id).catch(B),
        V = () => {
            w(), F();
        },
        H = !1,
        Y = i.useMemo(
            () =>
                (0, r.jsx)(a.S89, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: D,
                }),
            [D, e.quest.id, null == n ? void 0 : n.id],
        ),
        W = e.shouldShowDisclosure && e.quest.id !== y.V6;
    return (0, r.jsxs)(a.v2r, {
        variant: "fixed",
        onSelect: U,
        navId: "quests-entry",
        "aria-label": I.intl.string(I.t.ogxXGh),
        onClose: null != (t = null == e ? void 0 : e.onClose) ? t : v.dG,
        children: [
            (0, r.jsxs)(
                a.kSQ,
                {
                    children: [
                        (0, r.jsx)(a.sNh, {
                            id: "play-game",
                            label: N,
                            action: x,
                            icon: a.zFc,
                        }),
                        !0 === e.showShareLink &&
                            (0, r.jsx)(a.sNh, {
                                id: "share-link",
                                label: I.intl.string(I.t.RDE0SU),
                                action: M,
                                icon: a.TIy,
                            }),
                        H && Y,
                    ],
                },
                "major-actions",
            ),
            (0, r.jsxs)(
                a.kSQ,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, r.jsx)(a.sNh, {
                                id: "learn-more",
                                label: I.intl.string(I.t.Ws2Bl5),
                                action: k,
                                icon: a.qDn,
                            }),
                        W &&
                            (0, r.jsx)(a.sNh, {
                                id: "display-disclosure",
                                label: I.intl.string(I.t.GcsZKC),
                                action: j,
                            }),
                        c &&
                            (0, r.jsx)(a.sNh, {
                                id: "hide-entrypoint",
                                label: I.intl.string(I.t.NN79Ex),
                                action: G,
                                subtext: I.intl.string(I.t["1u3YPD"]),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, r.jsxs)(
                    a.kSQ,
                    {
                        label: "Preview Controls",
                        children: [
                            !H && Y,
                            (0, r.jsx)(a.sNh, {
                                id: "dismiss",
                                label: "Reset Dismissibility",
                                action: P,
                            }),
                            (0, r.jsx)(a.sNh, {
                                id: "enrollment",
                                label: "Reset Quest",
                                action: V,
                            }),
                            (0, r.jsx)(a.sNh, {
                                id: "progress",
                                label: "Set Random Quest Progress",
                                action: L,
                            }),
                            (0, r.jsx)(a.sNh, {
                                id: "complete",
                                label: "Complete Quest",
                                action: C,
                            }),
                            (0, p.$J)(e.quest) &&
                                (0, r.jsxs)(a.sNh, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, r.jsx)(a.sNh, {
                                            disabled: !0,
                                            id: "status",
                                            label: "Status: ".concat((0, p.Bz)(e.quest) ? "alive" : "dead"),
                                        }),
                                        (0, r.jsx)(a.sNh, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: Z,
                                        }),
                                        (0, r.jsx)(a.sNh, {
                                            id: "stop",
                                            label: "Stop heartbeat",
                                            action: F,
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(a.sNh, {
                                id: "copy-quest-id",
                                label: "Copy Quest ID",
                                action: () => {
                                    (0, u.JG)(e.quest.id);
                                },
                            }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function w(e) {
    let {
            children: t,
            onOpen: n,
            onClose: o,
            preventIdle: s,
            quest: l,
            questContent: u,
            questContentPosition: d,
            sourceQuestContent: _,
        } = e,
        p = C(e, [
            "children",
            "onOpen",
            "onClose",
            "preventIdle",
            "quest",
            "questContent",
            "questContentPosition",
            "sourceQuestContent",
        ]),
        h = (0, f.O5)(),
        m = i.useRef(null),
        g = i.useCallback(() => {
            h({
                questId: l.id,
                questContent: u,
                questContentCTA: f.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: d,
                sourceQuestContent: _,
            }),
                null != n && n();
        }, [n, l.id, u, d, h, _]);
    return (0, r.jsx)(a.yRy, {
        targetElementRef: m,
        onRequestOpen: g,
        onRequestClose: o,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return s
                ? (0, r.jsx)(c.Z, {
                      children: (0, r.jsx)(
                          P,
                          N(S({}, p), {
                              quest: l,
                              questContent: u,
                              questContentPosition: d,
                              onClose: t,
                              sourceQuestContent: _,
                          }),
                      ),
                  })
                : (0, r.jsx)(
                      P,
                      N(S({}, p), {
                          quest: l,
                          questContent: u,
                          questContentPosition: d,
                          onClose: t,
                          sourceQuestContent: _,
                      }),
                  );
        },
        animation: a.yRy.Animation.NONE,
        children: (e) =>
            (0, r.jsx)("div", {
                ref: m,
                children: t(e),
            }),
    });
}
