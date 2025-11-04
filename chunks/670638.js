n.d(t, { r: () => x });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(239091),
    l = n(479531),
    c = n(703656),
    u = n(390322),
    d = n(572004),
    f = n(63063),
    _ = n(22095),
    p = n(617136),
    h = n(915750),
    m = n(509212),
    g = n(113434),
    E = n(569984),
    b = n(497505),
    y = n(36243),
    O = n(110560),
    v = n(46140),
    I = n(981631),
    T = n(231338),
    S = n(388032);
function A(e, t, n) {
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
function C(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function D(e) {
    var t;
    let n = (0, a.e7)([E.Z], () => E.Z.questDeliveryOverride, []),
        u = (0, m.GN)(e.questContent),
        A = [b.jn.QUEST_BAR_V2, b.jn.QUEST_BAR].includes(e.questContent),
        C = (0, p.O5)(),
        N = (0, h.aM)(),
        R = (0, g.ly)(e.quest),
        P = !0 === e.showShareLink && (0, m.vB)(e.quest.config),
        {
            handleComplete: w,
            handleProgress: D,
            handleResetDismissibilityClick: x,
            handleResetStatusClick: L,
            handleOverrideDeliveryClick: M,
        } = (0, g.kJ)(e.quest.id),
        j = () => {
            D(0.9 * Math.random() + 0.03);
        },
        k = i.useCallback(() => {
            if (e.quest.id === v.V6) return void window.open(f.Z.getArticleURL(I.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
            (0, m.nc)(e.quest, {
                content: e.questContent,
                ctaContent: p.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
                impressionId: N,
                sourceQuestContent: e.sourceQuestContent,
            });
        }, [N, e.quest, e.questContent, e.sourceQuestContent]),
        U = i.useCallback(() => {
            P &&
                ((0, m.f2)(e.quest.id, {
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: p.jZ.CONTEXT_MENU_COPY_LINK,
                    impressionId: N,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                (0, o.showToast)((0, o.createToast)(S.intl.string(S.t["+5kSoW"]), o.ToastType.SUCCESS)));
        }, [N, e.quest.id, e.questContent, e.questContentPosition, e.sourceQuestContent, P]),
        G = () => {
            (0, O.openDisclosureModal)(e.quest, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: p.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                impressionId: N,
                sourceQuestContent: e.sourceQuestContent,
            });
        },
        B = () => {
            C({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: p.jZ.CONTEXT_MENU_LEARN_MORE,
                sourceQuestContent: e.sourceQuestContent,
            }),
                (0, O.navigateToQuestHome)({
                    fromContent: e.questContent,
                    questId: e.quest.id,
                });
        },
        Z = () => {
            null != e.onSelect ? e.onSelect() : (0, s.Zy)();
        },
        F = () => {
            C({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: p.jZ.CONTEXT_MENU_HIDE_CONTENT,
                sourceQuestContent: e.sourceQuestContent,
            }),
                (0, m.GN)(e.questContent) &&
                    ((0, _.gl)(e.quest.id, e.questContent), A && (0, O.maybeShowSurveyForQuest)(e.quest));
        },
        V = (e) => (0, o.showToast)((0, o.createToast)(new l.Z(e, e.status).message, o.ToastType.FAILURE)),
        H = () => (0, _.CS)(e.quest.id, !0).catch(V),
        Y = () => (0, _.is)(e.quest.id).catch(V),
        W = () => {
            L(), Y();
        },
        K = (0, g.m4)(e.quest),
        z = i.useMemo(
            () =>
                (0, r.jsx)(o.S89, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: M,
                }),
            [M, e.quest.id, null == n ? void 0 : n.id],
        ),
        q = i.useCallback(() => {
            (0, c.uL)(I.Z5c.QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        X = e.shouldShowDisclosure && e.quest.id !== v.V6;
    return (0, r.jsxs)(o.v2r, {
        variant: "fixed",
        onSelect: Z,
        navId: "quests-entry",
        "aria-label": S.intl.string(S.t.ogxXGq),
        onClose: null != (t = null == e ? void 0 : e.onClose) ? t : T.dG,
        children: [
            (0, r.jsxs)(
                o.kSQ,
                {
                    children: [
                        (0, r.jsx)(o.sNh, {
                            id: "play-game",
                            label: R,
                            action: k,
                            icon: o.zFc,
                        }),
                        P &&
                            (0, r.jsx)(o.sNh, {
                                id: "share-link",
                                label: S.intl.string(S.t.RDE0Sc),
                                action: U,
                                icon: o.TIy,
                            }),
                        K && z,
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
                                label: S.intl.string(S.t["Ws2Bl+"]),
                                action: B,
                                icon: o.qDn,
                            }),
                        X &&
                            (0, r.jsx)(o.sNh, {
                                id: "display-disclosure",
                                label: S.intl.string(S.t.GcsZKJ),
                                action: G,
                            }),
                        u &&
                            (0, r.jsx)(o.sNh, {
                                id: "hide-entrypoint",
                                label: S.intl.string(S.t.NN79E9),
                                action: F,
                                subtext: S.intl.string(S.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, r.jsxs)(
                    o.kSQ,
                    {
                        label: S.intl.string(S.t["Ape+mm"]),
                        children: [
                            (0, r.jsx)(o.sNh, {
                                id: "dismiss",
                                label: S.intl.string(S.t.JF6W66),
                                action: x,
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: "enrollment",
                                label: S.intl.string(S.t.taqkwK),
                                action: W,
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: "progress",
                                label: S.intl.string(S.t.cKSLr4),
                                action: j,
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: "complete",
                                label: S.intl.string(S.t.jQEfRT),
                                action: w,
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
                                            action: H,
                                        }),
                                        (0, r.jsx)(o.sNh, {
                                            id: "stop",
                                            label: "Stop heartbeat",
                                            action: Y,
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(o.sNh, {
                                id: "copy-quest-id",
                                label: S.intl.string(S.t.oisrFi),
                                action: () => {
                                    (0, d.JG)(e.quest.id);
                                },
                            }),
                            (0, y.T)({ location: v.dr.QUEST_PREVIEW_TOOL_2 }) &&
                                (0, r.jsx)(o.sNh, {
                                    id: "preview",
                                    label: S.intl.string(S.t.tx5Ax5),
                                    action: q,
                                }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function x(e) {
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
        _ = P(e, [
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
                          D,
                          R(C({}, _), {
                              quest: l,
                              questContent: c,
                              questContentPosition: d,
                              onClose: t,
                              sourceQuestContent: f,
                          }),
                      ),
                  })
                : (0, r.jsx)(
                      D,
                      R(C({}, _), {
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
