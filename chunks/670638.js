n.d(t, { r: () => D });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(239091),
    l = n(479531),
    c = n(390322),
    u = n(594174),
    d = n(572004),
    f = n(63063),
    _ = n(617136),
    p = n(915750),
    h = n(509212),
    m = n(272008),
    g = n(113434),
    E = n(569984),
    b = n(497505),
    y = n(110560),
    O = n(46140),
    v = n(981631),
    I = n(231338),
    T = n(388032);
function S(e, t, n) {
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
function A(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function w(e) {
    var t;
    let n = (0, a.e7)([E.Z], () => E.Z.questDeliveryOverride, []),
        c = (0, h.GN)(e.questContent),
        S = [b.jn.QUEST_BAR_V2, b.jn.QUEST_BAR].includes(e.questContent),
        A = (0, _.O5)(),
        C = (0, p.aM)(),
        N = (0, g.Yj)(e.quest),
        R = !0 === e.showShareLink && (0, h.vB)(e.quest.config),
        {
            handleComplete: P,
            handleProgress: w,
            handleResetDismissibilityClick: D,
            handleResetStatusClick: x,
            handleOverrideDeliveryClick: L,
        } = (0, g.kJ)(e.quest.id),
        j = () => {
            w(0.9 * Math.random() + 0.03);
        },
        M = i.useCallback(() => {
            if (e.quest.id === O.V6) return void window.open(f.Z.getArticleURL(v.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
            (0, h.nc)(e.quest, {
                content: e.questContent,
                ctaContent: _.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
                impressionId: C,
                sourceQuestContent: e.sourceQuestContent,
            });
        }, [C, e.quest, e.questContent, e.sourceQuestContent]),
        k = i.useCallback(() => {
            R &&
                ((0, h.f2)(e.quest.id, {
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: _.jZ.CONTEXT_MENU_COPY_LINK,
                    impressionId: C,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                (0, o.showToast)((0, o.createToast)(T.intl.string(T.t["+5kSoa"]), o.ToastType.SUCCESS)));
        }, [C, e.quest.id, e.questContent, e.questContentPosition, e.sourceQuestContent, R]),
        U = () => {
            (0, y.openDisclosureModal)(e.quest, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: _.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                impressionId: C,
                sourceQuestContent: e.sourceQuestContent,
            });
        },
        G = () => {
            A({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: _.jZ.CONTEXT_MENU_LEARN_MORE,
                sourceQuestContent: e.sourceQuestContent,
            }),
                (0, y.navigateToQuestHome)({
                    fromContent: e.questContent,
                    questId: e.quest.id,
                });
        },
        B = () => {
            null != e.onSelect ? e.onSelect() : (0, s.Zy)();
        },
        Z = () => {
            A({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: _.jZ.CONTEXT_MENU_HIDE_CONTENT,
                sourceQuestContent: e.sourceQuestContent,
            }),
                (0, h.GN)(e.questContent) &&
                    ((0, m.gl)(e.quest.id, e.questContent), S && (0, y.maybeShowSurveyForQuest)(e.quest));
        },
        F = (e) => (0, o.showToast)((0, o.createToast)(new l.Z(e, e.status).message, o.ToastType.FAILURE)),
        V = () => (0, m.CS)(e.quest.id, !0).catch(F),
        H = () => (0, m.is)(e.quest.id).catch(F),
        Y = () => {
            x(), H();
        },
        W = !1,
        K = i.useMemo(() => {
            var e;
            return (null == (e = u.default.getCurrentUser()) ? void 0 : e.isStaff()) === !0;
        }, []),
        z = i.useMemo(
            () =>
                (0, r.jsx)(o.S89, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: L,
                }),
            [L, e.quest.id, null == n ? void 0 : n.id],
        ),
        q = e.shouldShowDisclosure && e.quest.id !== O.V6;
    return (0, r.jsxs)(o.v2r, {
        variant: "fixed",
        onSelect: B,
        navId: "quests-entry",
        "aria-label": T.intl.string(T.t.ogxXGh),
        onClose: null != (t = null == e ? void 0 : e.onClose) ? t : I.dG,
        children: [
            (0, r.jsxs)(
                o.kSQ,
                {
                    children: [
                        (0, r.jsx)(o.sNh, {
                            id: "play-game",
                            label: N,
                            action: M,
                            icon: o.zFc,
                        }),
                        R &&
                            (0, r.jsx)(o.sNh, {
                                id: "share-link",
                                label: T.intl.string(T.t.RDE0SU),
                                action: k,
                                icon: o.TIy,
                            }),
                        (W || K) && z,
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
                                label: T.intl.string(T.t.Ws2Bl5),
                                action: G,
                                icon: o.qDn,
                            }),
                        q &&
                            (0, r.jsx)(o.sNh, {
                                id: "display-disclosure",
                                label: T.intl.string(T.t.GcsZKC),
                                action: U,
                            }),
                        c &&
                            (0, r.jsx)(o.sNh, {
                                id: "hide-entrypoint",
                                label: T.intl.string(T.t.NN79Ex),
                                action: Z,
                                subtext: T.intl.string(T.t["1u3YPD"]),
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
                            !(W || K) && z,
                            (0, r.jsx)(o.sNh, {
                                id: "dismiss",
                                label: "Reset Dismissibility",
                                action: D,
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: "enrollment",
                                label: "Reset Quest",
                                action: Y,
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: "progress",
                                label: "Set Random Quest Progress",
                                action: j,
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: "complete",
                                label: "Complete Quest",
                                action: P,
                            }),
                            (0, h.$J)(e.quest) &&
                                (0, r.jsxs)(o.sNh, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, r.jsx)(o.sNh, {
                                            disabled: !0,
                                            id: "status",
                                            label: "Status: ".concat((0, h.Bz)(e.quest) ? "alive" : "dead"),
                                        }),
                                        (0, r.jsx)(o.sNh, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: V,
                                        }),
                                        (0, r.jsx)(o.sNh, {
                                            id: "stop",
                                            label: "Stop heartbeat",
                                            action: H,
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(o.sNh, {
                                id: "copy-quest-id",
                                label: "Copy Quest ID",
                                action: () => {
                                    (0, d.JG)(e.quest.id);
                                },
                            }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function D(e) {
    let {
            children: t,
            onOpen: n,
            onClose: a,
            preventIdle: s,
            quest: l,
            questContent: u,
            questContentPosition: d,
            sourceQuestContent: f,
        } = e,
        p = R(e, [
            "children",
            "onOpen",
            "onClose",
            "preventIdle",
            "quest",
            "questContent",
            "questContentPosition",
            "sourceQuestContent",
        ]),
        h = (0, _.O5)(),
        m = i.useRef(null),
        g = i.useCallback(() => {
            h({
                questId: l.id,
                questContent: u,
                questContentCTA: _.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: d,
                sourceQuestContent: f,
            }),
                null != n && n();
        }, [n, l.id, u, d, h, f]);
    return (0, r.jsx)(o.yRy, {
        targetElementRef: m,
        onRequestOpen: g,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return s
                ? (0, r.jsx)(c.Z, {
                      children: (0, r.jsx)(
                          w,
                          N(A({}, p), {
                              quest: l,
                              questContent: u,
                              questContentPosition: d,
                              onClose: t,
                              sourceQuestContent: f,
                          }),
                      ),
                  })
                : (0, r.jsx)(
                      w,
                      N(A({}, p), {
                          quest: l,
                          questContent: u,
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
