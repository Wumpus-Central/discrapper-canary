n.d(t, { r: () => L });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(239091),
    l = n(479531),
    c = n(703656),
    u = n(390322),
    d = n(594174),
    f = n(572004),
    _ = n(63063),
    p = n(22095),
    h = n(617136),
    m = n(915750),
    g = n(509212),
    E = n(113434),
    b = n(569984),
    y = n(497505),
    O = n(36243),
    v = n(110560),
    I = n(46140),
    T = n(981631),
    S = n(231338),
    A = n(388032);
function C(e, t, n) {
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
function N(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = D(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function x(e) {
    var t;
    let n = (0, a.e7)([b.Z], () => b.Z.questDeliveryOverride, []),
        u = (0, g.GN)(e.questContent),
        C = [y.jn.QUEST_BAR_V2, y.jn.QUEST_BAR].includes(e.questContent),
        N = (0, h.O5)(),
        R = (0, m.aM)(),
        P = (0, E.ly)(e.quest),
        w = !0 === e.showShareLink && (0, g.vB)(e.quest.config),
        {
            handleComplete: D,
            handleProgress: x,
            handleResetDismissibilityClick: L,
            handleResetStatusClick: M,
            handleOverrideDeliveryClick: j,
        } = (0, E.kJ)(e.quest.id),
        k = () => {
            x(0.9 * Math.random() + 0.03);
        },
        U = i.useCallback(() => {
            if (e.quest.id === I.V6) return void window.open(_.Z.getArticleURL(T.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
            (0, g.nc)(e.quest, {
                content: e.questContent,
                ctaContent: h.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
                impressionId: R,
                sourceQuestContent: e.sourceQuestContent,
            });
        }, [R, e.quest, e.questContent, e.sourceQuestContent]),
        G = i.useCallback(() => {
            w &&
                ((0, g.f2)(e.quest.id, {
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: h.jZ.CONTEXT_MENU_COPY_LINK,
                    impressionId: R,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                (0, o.showToast)((0, o.createToast)(A.intl.string(A.t["+5kSoW"]), o.ToastType.SUCCESS)));
        }, [R, e.quest.id, e.questContent, e.questContentPosition, e.sourceQuestContent, w]),
        B = () => {
            (0, v.openDisclosureModal)(e.quest, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: h.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                impressionId: R,
                sourceQuestContent: e.sourceQuestContent,
            });
        },
        Z = () => {
            N({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: h.jZ.CONTEXT_MENU_LEARN_MORE,
                sourceQuestContent: e.sourceQuestContent,
            }),
                (0, v.navigateToQuestHome)({
                    fromContent: e.questContent,
                    questId: e.quest.id,
                });
        },
        F = () => {
            null != e.onSelect ? e.onSelect() : (0, s.Zy)();
        },
        V = () => {
            N({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: h.jZ.CONTEXT_MENU_HIDE_CONTENT,
                sourceQuestContent: e.sourceQuestContent,
            }),
                (0, g.GN)(e.questContent) &&
                    ((0, p.gl)(e.quest.id, e.questContent), C && (0, v.maybeShowSurveyForQuest)(e.quest));
        },
        H = (e) => (0, o.showToast)((0, o.createToast)(new l.Z(e, e.status).message, o.ToastType.FAILURE)),
        Y = () => (0, p.CS)(e.quest.id, !0).catch(H),
        W = () => (0, p.is)(e.quest.id).catch(H),
        K = () => {
            M(), W();
        },
        z = !1,
        q = i.useMemo(() => {
            var e;
            return (null == (e = d.default.getCurrentUser()) ? void 0 : e.isStaff()) === !0;
        }, []),
        X = i.useMemo(
            () =>
                (0, r.jsx)(o.S89, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: j,
                }),
            [j, e.quest.id, null == n ? void 0 : n.id],
        ),
        Q = i.useCallback(() => {
            (0, c.uL)(T.Z5c.QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        J = e.shouldShowDisclosure && e.quest.id !== I.V6;
    return (0, r.jsxs)(o.v2r, {
        variant: "fixed",
        onSelect: F,
        navId: "quests-entry",
        "aria-label": A.intl.string(A.t.ogxXGq),
        onClose: null != (t = null == e ? void 0 : e.onClose) ? t : S.dG,
        children: [
            (0, r.jsxs)(
                o.kSQ,
                {
                    children: [
                        (0, r.jsx)(o.sNh, {
                            id: "play-game",
                            label: P,
                            action: U,
                            icon: o.zFc,
                        }),
                        w &&
                            (0, r.jsx)(o.sNh, {
                                id: "share-link",
                                label: A.intl.string(A.t.RDE0Sc),
                                action: G,
                                icon: o.TIy,
                            }),
                        (z || q) && X,
                    ],
                },
                "major-actions",
            ),
            (0, r.jsxs)(
                o.kSQ,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, r.jsx)(o.sNh, {
                                id: "learn-more",
                                label: A.intl.string(A.t["Ws2Bl+"]),
                                action: Z,
                                icon: o.qDn,
                            }),
                        J &&
                            (0, r.jsx)(o.sNh, {
                                id: "display-disclosure",
                                label: A.intl.string(A.t.GcsZKJ),
                                action: B,
                            }),
                        u &&
                            (0, r.jsx)(o.sNh, {
                                id: "hide-entrypoint",
                                label: A.intl.string(A.t.NN79E9),
                                action: V,
                                subtext: A.intl.string(A.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, r.jsxs)(
                    o.kSQ,
                    {
                        label: A.intl.string(A.t["Ape+mm"]),
                        children: [
                            !(z || q) && X,
                            (0, r.jsx)(o.sNh, {
                                id: "dismiss",
                                label: A.intl.string(A.t.JF6W66),
                                action: L,
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: "enrollment",
                                label: A.intl.string(A.t.taqkwK),
                                action: K,
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: "progress",
                                label: A.intl.string(A.t.cKSLr4),
                                action: k,
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: "complete",
                                label: A.intl.string(A.t.jQEfRT),
                                action: D,
                            }),
                            (0, g.$J)(e.quest) &&
                                (0, r.jsxs)(o.sNh, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, r.jsx)(o.sNh, {
                                            disabled: !0,
                                            id: "status",
                                            label: "Status: ".concat((0, g.Bz)(e.quest) ? "alive" : "dead"),
                                        }),
                                        (0, r.jsx)(o.sNh, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: Y,
                                        }),
                                        (0, r.jsx)(o.sNh, {
                                            id: "stop",
                                            label: "Stop heartbeat",
                                            action: W,
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(o.sNh, {
                                id: "copy-quest-id",
                                label: A.intl.string(A.t.oisrFi),
                                action: () => {
                                    (0, f.JG)(e.quest.id);
                                },
                            }),
                            (0, O.T)({ location: I.dr.QUEST_PREVIEW_TOOL_2 }) &&
                                (0, r.jsx)(o.sNh, {
                                    id: "preview",
                                    label: A.intl.string(A.t.tx5Ax5),
                                    action: Q,
                                }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function L(e) {
    let {
            children: t,
            onOpen: n,
            onClose: a,
            preventIdle: s,
            quest: l,
            questContent: c,
            questContentPosition: d,
            sourceQuestContent: f,
        } = e,
        _ = w(e, [
            "children",
            "onOpen",
            "onClose",
            "preventIdle",
            "quest",
            "questContent",
            "questContentPosition",
            "sourceQuestContent",
        ]),
        p = (0, h.O5)(),
        m = i.useRef(null),
        g = i.useCallback(() => {
            p({
                questId: l.id,
                questContent: c,
                questContentCTA: h.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: d,
                sourceQuestContent: f,
            }),
                null != n && n();
        }, [n, l.id, c, d, p, f]);
    return (0, r.jsx)(o.yRy, {
        targetElementRef: m,
        onRequestOpen: g,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return s
                ? (0, r.jsx)(u.Z, {
                      children: (0, r.jsx)(
                          x,
                          P(N({}, _), {
                              quest: l,
                              questContent: c,
                              questContentPosition: d,
                              onClose: t,
                              sourceQuestContent: f,
                          }),
                      ),
                  })
                : (0, r.jsx)(
                      x,
                      P(N({}, _), {
                          quest: l,
                          questContent: c,
                          questContentPosition: d,
                          onClose: t,
                          sourceQuestContent: f,
                      }),
                  );
        },
        animation: o.yRy.Animation.NONE,
        children: (e) =>
            (0, r.jsx)("div", {
                ref: m,
                children: t(e),
            }),
    });
}
