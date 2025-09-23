n.d(t, { r: () => j });
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
    p = n(617136),
    h = n(915750),
    m = n(509212),
    g = n(272008),
    E = n(113434),
    b = n(569984),
    y = n(497505),
    O = n(937797),
    v = n(36243),
    I = n(110560),
    T = n(46140),
    S = n(981631),
    A = n(231338),
    C = n(388032);
function N(e, t, n) {
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
function R(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = x(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function L(e) {
    var t;
    let n = (0, a.e7)([b.Z], () => b.Z.questDeliveryOverride, []),
        u = (0, m.GN)(e.questContent),
        N = [y.jn.QUEST_BAR_V2, y.jn.QUEST_BAR].includes(e.questContent),
        R = (0, p.O5)(),
        P = (0, h.aM)(),
        w = (0, E.Yj)(e.quest),
        D = !0 === e.showShareLink && (0, m.vB)(e.quest.config),
        {
            handleComplete: x,
            handleProgress: L,
            handleResetDismissibilityClick: j,
            handleResetStatusClick: M,
            handleOverrideDeliveryClick: k,
        } = (0, E.kJ)(e.quest.id),
        U = () => {
            L(0.9 * Math.random() + 0.03);
        },
        G = i.useCallback(() => {
            if (e.quest.id === T.V6) return void window.open(_.Z.getArticleURL(S.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
            (0, m.nc)(e.quest, {
                content: e.questContent,
                ctaContent: p.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
                impressionId: P,
                sourceQuestContent: e.sourceQuestContent,
            });
        }, [P, e.quest, e.questContent, e.sourceQuestContent]),
        B = i.useCallback(() => {
            D &&
                ((0, m.f2)(e.quest.id, {
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: p.jZ.CONTEXT_MENU_COPY_LINK,
                    impressionId: P,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                (0, o.showToast)((0, o.createToast)(C.intl.string(C.t["+5kSoa"]), o.ToastType.SUCCESS)));
        }, [P, e.quest.id, e.questContent, e.questContentPosition, e.sourceQuestContent, D]),
        Z = () => {
            (0, I.openDisclosureModal)(e.quest, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: p.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                impressionId: P,
                sourceQuestContent: e.sourceQuestContent,
            });
        },
        F = () => {
            R({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: p.jZ.CONTEXT_MENU_LEARN_MORE,
                sourceQuestContent: e.sourceQuestContent,
            }),
                (0, I.navigateToQuestHome)({
                    fromContent: e.questContent,
                    questId: e.quest.id,
                });
        },
        V = () => {
            null != e.onSelect ? e.onSelect() : (0, s.Zy)();
        },
        H = () => {
            R({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: p.jZ.CONTEXT_MENU_HIDE_CONTENT,
                sourceQuestContent: e.sourceQuestContent,
            }),
                (0, m.GN)(e.questContent) &&
                    ((0, g.gl)(e.quest.id, e.questContent), N && (0, I.maybeShowSurveyForQuest)(e.quest));
        },
        Y = (e) => (0, o.showToast)((0, o.createToast)(new l.Z(e, e.status).message, o.ToastType.FAILURE)),
        W = () => (0, g.CS)(e.quest.id, !0).catch(Y),
        K = () => (0, g.is)(e.quest.id).catch(Y),
        z = () => {
            M(), K();
        },
        q = !1,
        X = i.useMemo(() => {
            var e;
            return (null == (e = d.default.getCurrentUser()) ? void 0 : e.isStaff()) === !0;
        }, []),
        Q = i.useMemo(
            () =>
                (0, r.jsx)(o.S89, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: k,
                }),
            [k, e.quest.id, null == n ? void 0 : n.id],
        ),
        J = i.useCallback(() => {
            (0, c.uL)(S.Z5c.SETTINGS_QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        $ = e.shouldShowDisclosure && e.quest.id !== T.V6,
        { enabled: ee } = O.m8.useConfig({ location: T.dr.QUEST_CONTEXT_MENU });
    return (0, r.jsxs)(o.v2r, {
        variant: "fixed",
        onSelect: V,
        navId: "quests-entry",
        "aria-label": C.intl.string(C.t.ogxXGh),
        onClose: null != (t = null == e ? void 0 : e.onClose) ? t : A.dG,
        children: [
            (0, r.jsxs)(
                o.kSQ,
                {
                    children: [
                        (0, r.jsx)(o.sNh, {
                            id: "play-game",
                            label: w,
                            action: G,
                            icon: o.zFc,
                        }),
                        D &&
                            (0, r.jsx)(o.sNh, {
                                id: "share-link",
                                label: C.intl.string(C.t.RDE0SU),
                                action: B,
                                icon: o.TIy,
                            }),
                        (q || X) && Q,
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
                                label: C.intl.string(C.t.Ws2Bl5),
                                action: F,
                                icon: o.qDn,
                            }),
                        $ &&
                            (0, r.jsx)(o.sNh, {
                                id: "display-disclosure",
                                label: C.intl.string(C.t.GcsZKC),
                                action: Z,
                            }),
                        u &&
                            (0, r.jsx)(o.sNh, {
                                id: "hide-entrypoint",
                                label: C.intl.string(C.t.NN79Ex),
                                action: H,
                                subtext: C.intl.string(ee ? C.t.RK9gxs : C.t["1u3YPD"]),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, r.jsxs)(
                    o.kSQ,
                    {
                        label: "Preview Controls",
                        children: [
                            !(q || X) && Q,
                            (0, r.jsx)(o.sNh, {
                                id: "dismiss",
                                label: "Reset Dismissibility",
                                action: j,
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: "enrollment",
                                label: "Reset Quest",
                                action: z,
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: "progress",
                                label: "Set Random Quest Progress",
                                action: U,
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: "complete",
                                label: "Complete Quest",
                                action: x,
                            }),
                            (0, m.$J)(e.quest) &&
                                (0, r.jsxs)(o.sNh, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, r.jsx)(o.sNh, {
                                            disabled: !0,
                                            id: "status",
                                            label: "Status: ".concat((0, m.Bz)(e.quest) ? "alive" : "dead"),
                                        }),
                                        (0, r.jsx)(o.sNh, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: W,
                                        }),
                                        (0, r.jsx)(o.sNh, {
                                            id: "stop",
                                            label: "Stop heartbeat",
                                            action: K,
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(o.sNh, {
                                id: "copy-quest-id",
                                label: "Copy Quest ID",
                                action: () => {
                                    (0, f.JG)(e.quest.id);
                                },
                            }),
                            (0, v.T)({ location: T.dr.QUEST_PREVIEW_TOOL_2 }) &&
                                (0, r.jsx)(o.sNh, {
                                    id: "preview",
                                    label: "View in Preview Tool",
                                    action: J,
                                }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function j(e) {
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
        _ = D(e, [
            "children",
            "onOpen",
            "onClose",
            "preventIdle",
            "quest",
            "questContent",
            "questContentPosition",
            "sourceQuestContent",
        ]),
        h = (0, p.O5)(),
        m = i.useRef(null),
        g = i.useCallback(() => {
            h({
                questId: l.id,
                questContent: c,
                questContentCTA: p.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: d,
                sourceQuestContent: f,
            }),
                null != n && n();
        }, [n, l.id, c, d, h, f]);
    return (0, r.jsx)(o.yRy, {
        targetElementRef: m,
        onRequestOpen: g,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return s
                ? (0, r.jsx)(u.Z, {
                      children: (0, r.jsx)(
                          L,
                          w(R({}, _), {
                              quest: l,
                              questContent: c,
                              questContentPosition: d,
                              onClose: t,
                              sourceQuestContent: f,
                          }),
                      ),
                  })
                : (0, r.jsx)(
                      L,
                      w(R({}, _), {
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
