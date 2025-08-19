n.d(t, { r: () => T });
var s = n(951288),
    o = n(647438),
    r = n(442837),
    i = n(481060),
    a = n(239091),
    l = n(479531),
    u = n(390322),
    c = n(572004),
    d = n(63063),
    m = n(617136),
    p = n(915750),
    h = n(509212),
    g = n(272008),
    x = n(113434),
    C = n(569984),
    j = n(497505),
    f = n(110560),
    b = n(46140),
    y = n(981631),
    v = n(231338),
    O = n(388032);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            s.forEach(function (t) {
                var s;
                (s = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = s);
            });
    }
    return e;
}
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var s = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, s);
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
    let n = (0, r.e7)([C.Z], () => C.Z.questDeliveryOverride, []),
        u = (0, h.GN)(e.questContent),
        N = [j.jn.QUEST_BAR_V2, j.jn.QUEST_BAR].includes(e.questContent),
        q = (0, m.O5)(),
        E = (0, p.aM)(),
        T = (0, x.Yj)(e.quest),
        S = !0 === e.showShareLink && (0, h.vB)(e.quest.config),
        {
            handleComplete: P,
            handleProgress: w,
            handleResetDismissibilityClick: R,
            handleResetStatusClick: M,
            handleOverrideDeliveryClick: _,
        } = (0, x.kJ)(e.quest.id),
        D = o.useCallback(() => {
            if (e.quest.id === b.V6) return void window.open(d.Z.getArticleURL(y.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
            (0, h.nc)(e.quest, {
                content: e.questContent,
                ctaContent: m.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
                impressionId: E,
                sourceQuestContent: e.sourceQuestContent,
            });
        }, [E, e.quest, e.questContent, e.sourceQuestContent]),
        Q = o.useCallback(() => {
            S &&
                ((0, h.f2)(e.quest.id, {
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: m.jZ.CONTEXT_MENU_COPY_LINK,
                    impressionId: E,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                (0, i.showToast)((0, i.createToast)(O.intl.string(O.t["+5kSoa"]), i.ToastType.SUCCESS)));
        }, [E, e.quest.id, e.questContent, e.questContentPosition, e.sourceQuestContent, S]),
        A = (e) => (0, i.showToast)((0, i.createToast)(new l.Z(e, e.status).message, i.ToastType.FAILURE)),
        L = () => (0, g.is)(e.quest.id).catch(A),
        k = o.useMemo(
            () =>
                (0, s.jsx)(i.S89, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: _,
                }),
            [_, e.quest.id, null == n ? void 0 : n.id],
        ),
        B = e.shouldShowDisclosure && e.quest.id !== b.V6;
    return (0, s.jsxs)(i.v2r, {
        variant: "fixed",
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, a.Zy)();
        },
        navId: "quests-entry",
        "aria-label": O.intl.string(O.t.ogxXGh),
        onClose: null != (t = null == e ? void 0 : e.onClose) ? t : v.dG,
        children: [
            (0, s.jsxs)(
                i.kSQ,
                {
                    children: [
                        (0, s.jsx)(i.sNh, {
                            id: "play-game",
                            label: T,
                            action: D,
                            icon: i.zFc,
                        }),
                        S &&
                            (0, s.jsx)(i.sNh, {
                                id: "share-link",
                                label: O.intl.string(O.t.RDE0SU),
                                action: Q,
                                icon: i.TIy,
                            }),
                        !1,
                    ],
                },
                "major-actions",
            ),
            (0, s.jsxs)(
                i.kSQ,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, s.jsx)(i.sNh, {
                                id: "learn-more",
                                label: O.intl.string(O.t.Ws2Bl5),
                                action: () => {
                                    q({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: m.jZ.CONTEXT_MENU_LEARN_MORE,
                                        sourceQuestContent: e.sourceQuestContent,
                                    }),
                                        (0, f.navigateToQuestHome)({
                                            fromContent: e.questContent,
                                            questId: e.quest.id,
                                        });
                                },
                                icon: i.qDn,
                            }),
                        B &&
                            (0, s.jsx)(i.sNh, {
                                id: "display-disclosure",
                                label: O.intl.string(O.t.GcsZKC),
                                action: () => {
                                    (0, f.openDisclosureModal)(e.quest, {
                                        content: e.questContent,
                                        position: e.questContentPosition,
                                        ctaContent: m.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                                        impressionId: E,
                                        sourceQuestContent: e.sourceQuestContent,
                                    });
                                },
                            }),
                        u &&
                            (0, s.jsx)(i.sNh, {
                                id: "hide-entrypoint",
                                label: O.intl.string(O.t.NN79Ex),
                                action: () => {
                                    q({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: m.jZ.CONTEXT_MENU_HIDE_CONTENT,
                                        sourceQuestContent: e.sourceQuestContent,
                                    }),
                                        (0, h.GN)(e.questContent) &&
                                            ((0, g.gl)(e.quest.id, e.questContent),
                                            N && (0, f.maybeShowSurveyForQuest)(e.quest));
                                },
                                subtext: O.intl.string(O.t["1u3YPD"]),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, s.jsxs)(
                    i.kSQ,
                    {
                        label: "Preview Controls",
                        children: [
                            k,
                            (0, s.jsx)(i.sNh, {
                                id: "dismiss",
                                label: "Reset Dismissibility",
                                action: R,
                            }),
                            (0, s.jsx)(i.sNh, {
                                id: "enrollment",
                                label: "Reset Quest",
                                action: () => {
                                    M(), L();
                                },
                            }),
                            (0, s.jsx)(i.sNh, {
                                id: "progress",
                                label: "Set Random Quest Progress",
                                action: () => {
                                    w(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, s.jsx)(i.sNh, {
                                id: "complete",
                                label: "Complete Quest",
                                action: P,
                            }),
                            (0, h.$J)(e.quest) &&
                                (0, s.jsxs)(i.sNh, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, s.jsx)(i.sNh, {
                                            disabled: !0,
                                            id: "status",
                                            label: "Status: ".concat((0, h.Bz)(e.quest) ? "alive" : "dead"),
                                        }),
                                        (0, s.jsx)(i.sNh, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: () => (0, g.CS)(e.quest.id, !0).catch(A),
                                        }),
                                        (0, s.jsx)(i.sNh, {
                                            id: "stop",
                                            label: "Stop heartbeat",
                                            action: L,
                                        }),
                                    ],
                                }),
                            (0, s.jsx)(i.sNh, {
                                id: "copy-quest-id",
                                label: "Copy Quest ID",
                                action: () => {
                                    (0, c.JG)(e.quest.id);
                                },
                            }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}
function T(e) {
    let {
            children: t,
            onOpen: n,
            onClose: r,
            preventIdle: a,
            quest: l,
            questContent: c,
            questContentPosition: d,
            sourceQuestContent: p,
        } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                s,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        s,
                        o = {},
                        r = Object.keys(e);
                    for (s = 0; s < r.length; s++) (n = r[s]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (s = 0; s < r.length; s++)
                    (n = r[s]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, [
            "children",
            "onOpen",
            "onClose",
            "preventIdle",
            "quest",
            "questContent",
            "questContentPosition",
            "sourceQuestContent",
        ]),
        g = (0, m.O5)(),
        x = o.useRef(null),
        C = o.useCallback(() => {
            g({
                questId: l.id,
                questContent: c,
                questContentCTA: m.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: d,
                sourceQuestContent: p,
            }),
                null != n && n();
        }, [n, l.id, c, d, g, p]);
    return (0, s.jsx)(i.yRy, {
        targetElementRef: x,
        onRequestOpen: C,
        onRequestClose: r,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return a
                ? (0, s.jsx)(u.Z, {
                      children: (0, s.jsx)(
                          E,
                          q(N({}, h), {
                              quest: l,
                              questContent: c,
                              questContentPosition: d,
                              onClose: t,
                              sourceQuestContent: p,
                          }),
                      ),
                  })
                : (0, s.jsx)(
                      E,
                      q(N({}, h), {
                          quest: l,
                          questContent: c,
                          questContentPosition: d,
                          onClose: t,
                          sourceQuestContent: p,
                      }),
                  );
        },
        animation: i.yRy.Animation.NONE,
        children: (e) =>
            (0, s.jsx)("div", {
                ref: x,
                children: t(e),
            }),
    });
}
