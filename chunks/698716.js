n.d(t, { i: () => U });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(239091),
    l = n(479531),
    c = n(703656),
    u = n(390322),
    d = n(572004),
    f = n(63063),
    p = n(22095),
    _ = n(617136),
    m = n(915750),
    h = n(616022),
    g = n(49436),
    E = n(36243),
    b = n(968843),
    y = n(304696),
    O = n(862657),
    v = n(387745),
    S = n(254579),
    I = n(283689),
    T = n(659302),
    A = n(110560),
    C = n(324805),
    N = n(981631),
    P = n(231338),
    R = n(388032);
function D(e, t, n) {
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
function w(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = M(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function M(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function k(e) {
    var t;
    let n = (0, a.e7)([h.Z], () => h.Z.questDeliveryOverride, []),
        u = (0, O.GN)(e.questContent),
        D = [g.jn.QUEST_BAR_V2, g.jn.QUEST_BAR].includes(e.questContent),
        w = (0, _.O5)(),
        x = (0, m.aM)(),
        L = (0, y.V_)(e.quest),
        j = !0 === e.showShareLink && (0, I.VB)(e.quest.config),
        {
            handleComplete: M,
            handleProgress: k,
            handleResetDismissibilityClick: U,
            handleResetStatusClick: G,
            handleOverrideDeliveryClick: Z,
        } = (0, b.kJ)(e.quest.id),
        B = () => {
            k(0.9 * Math.random() + 0.03);
        },
        F = i.useCallback(() => {
            if (e.quest.id === C.V6) return void window.open(f.Z.getArticleURL(N.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
            (0, v.nc)(e.quest, {
                content: e.questContent,
                ctaContent: _.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
                impressionId: x,
                sourceQuestContent: e.sourceQuestContent,
            });
        }, [x, e.quest, e.questContent, e.sourceQuestContent]),
        V = (0, T.yc)({
            isShareable: j,
            questId: e.quest.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: _.jZ.CONTEXT_MENU_COPY_LINK,
                    impressionId: x,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                [e.questContent, e.questContentPosition, e.sourceQuestContent, x],
            ),
        }),
        H = () => {
            (0, A.openDisclosureModal)(e.quest, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: _.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                impressionId: x,
                sourceQuestContent: e.sourceQuestContent,
            });
        },
        Y = () => {
            w({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: _.jZ.CONTEXT_MENU_LEARN_MORE,
                sourceQuestContent: e.sourceQuestContent,
            }),
                (0, A.navigateToQuestHome)({
                    fromContent: e.questContent,
                    questId: e.quest.id,
                });
        },
        W = () => {
            null != e.onSelect ? e.onSelect() : (0, s.Zy)();
        },
        K = () => {
            w({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: _.jZ.CONTEXT_MENU_HIDE_CONTENT,
                sourceQuestContent: e.sourceQuestContent,
            }),
                (0, O.GN)(e.questContent) &&
                    ((0, p.gl)(e.quest.id, e.questContent), D && (0, A.maybeShowSurveyForQuest)(e.quest));
        },
        z = (e) => (0, o.showToast)((0, o.createToast)(new l.Z(e, e.status).message, o.ToastType.FAILURE)),
        q = () => (0, p.CS)(e.quest.id, !0).catch(z),
        Q = () => (0, p.is)(e.quest.id).catch(z),
        X = () => {
            G(), Q();
        },
        J = (0, b.m4)(e.quest),
        $ = i.useMemo(
            () =>
                (0, r.jsx)(o.S89, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: Z,
                }),
            [Z, e.quest.id, null == n ? void 0 : n.id],
        ),
        ee = i.useCallback(() => {
            (0, c.uL)(N.Z5c.QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        et = e.shouldShowDisclosure && e.quest.id !== C.V6;
    return (0, r.jsxs)(o.v2r, {
        variant: "fixed",
        onSelect: W,
        navId: "quests-entry",
        "aria-label": R.intl.string(R.t.ogxXGq),
        onClose: null != (t = null == e ? void 0 : e.onClose) ? t : P.dG,
        children: [
            (0, r.jsxs)(
                o.kSQ,
                {
                    children: [
                        (0, r.jsx)(o.sNh, {
                            id: "play-game",
                            label: L,
                            action: F,
                            icon: o.zFc,
                        }),
                        j &&
                            (0, r.jsx)(o.sNh, {
                                id: "share-link",
                                label: R.intl.string(R.t.RDE0Sc),
                                action: V,
                                icon: o.TIy,
                            }),
                        J && $,
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
                                label: R.intl.string(R.t["Ws2Bl+"]),
                                action: Y,
                                icon: o.qDn,
                            }),
                        et &&
                            (0, r.jsx)(o.sNh, {
                                id: "display-disclosure",
                                label: R.intl.string(R.t.GcsZKJ),
                                action: H,
                            }),
                        u &&
                            (0, r.jsx)(o.sNh, {
                                id: "hide-entrypoint",
                                label: R.intl.string(R.t.NN79E9),
                                action: K,
                                subtext: R.intl.string(R.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, r.jsxs)(
                    o.kSQ,
                    {
                        label: R.intl.string(R.t["Ape+mm"]),
                        children: [
                            (0, r.jsx)(o.sNh, {
                                id: "dismiss",
                                label: R.intl.string(R.t.JF6W66),
                                action: U,
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: "enrollment",
                                label: R.intl.string(R.t.taqkwK),
                                action: X,
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: "progress",
                                label: R.intl.string(R.t.cKSLr4),
                                action: B,
                            }),
                            (0, r.jsx)(o.sNh, {
                                id: "complete",
                                label: R.intl.string(R.t.jQEfRT),
                                action: M,
                            }),
                            (0, S.$J)(e.quest) &&
                                (0, r.jsxs)(o.sNh, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, r.jsx)(o.sNh, {
                                            disabled: !0,
                                            id: "status",
                                            label: "Status: ".concat((0, S.Bz)(e.quest) ? "alive" : "dead"),
                                        }),
                                        (0, r.jsx)(o.sNh, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: q,
                                        }),
                                        (0, r.jsx)(o.sNh, {
                                            id: "stop",
                                            label: "Stop heartbeat",
                                            action: Q,
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(o.sNh, {
                                id: "copy-quest-id",
                                label: R.intl.string(R.t.oisrFi),
                                action: () => {
                                    (0, d.JG)(e.quest.id);
                                },
                            }),
                            (0, E.T)({ location: C.dr.QUEST_PREVIEW_TOOL_2 }) &&
                                (0, r.jsx)(o.sNh, {
                                    id: "preview",
                                    label: R.intl.string(R.t.tx5Ax5),
                                    action: ee,
                                }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function U(e) {
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
        p = j(e, [
            "children",
            "onOpen",
            "onClose",
            "preventIdle",
            "quest",
            "questContent",
            "questContentPosition",
            "sourceQuestContent",
        ]),
        m = (0, _.O5)(),
        h = i.useRef(null),
        g = i.useCallback(() => {
            m({
                questId: l.id,
                questContent: c,
                questContentCTA: _.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: d,
                sourceQuestContent: f,
            }),
                null != n && n();
        }, [n, l.id, c, d, m, f]);
    return (0, r.jsx)(o.yRy, {
        targetElementRef: h,
        onRequestOpen: g,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return s
                ? (0, r.jsx)(u.Z, {
                      children: (0, r.jsx)(
                          k,
                          L(w({}, p), {
                              quest: l,
                              questContent: c,
                              questContentPosition: d,
                              onClose: t,
                              sourceQuestContent: f,
                          }),
                      ),
                  })
                : (0, r.jsx)(
                      k,
                      L(w({}, p), {
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
                ref: h,
                children: t(e),
            }),
    });
}
