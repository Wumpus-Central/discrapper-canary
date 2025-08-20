n.d(t, { r: () => S });
var r = n(951288),
    o = n(647438),
    s = n(442837),
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
function E(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
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
function N(e) {
    var t;
    let n = (0, s.e7)([C.Z], () => C.Z.questDeliveryOverride, []),
        u = (0, h.GN)(e.questContent),
        E = [j.jn.QUEST_BAR_V2, j.jn.QUEST_BAR].includes(e.questContent),
        q = (0, m.O5)(),
        N = (0, p.aM)(),
        S = (0, x.Yj)(e.quest),
        T = !0 === e.showShareLink && (0, h.vB)(e.quest.config),
        {
            handleComplete: P,
            handleProgress: w,
            handleResetDismissibilityClick: _,
            handleResetStatusClick: M,
            handleOverrideDeliveryClick: R,
        } = (0, x.kJ)(e.quest.id),
        k = o.useCallback(() => {
            if (e.quest.id === b.V6) return void window.open(d.Z.getArticleURL(y.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
            (0, h.nc)(e.quest, {
                content: e.questContent,
                ctaContent: m.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
                impressionId: N,
                sourceQuestContent: e.sourceQuestContent,
            });
        }, [N, e.quest, e.questContent, e.sourceQuestContent]),
        D = o.useCallback(() => {
            T &&
                ((0, h.f2)(e.quest.id, {
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: m.jZ.CONTEXT_MENU_COPY_LINK,
                    impressionId: N,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                (0, i.showToast)((0, i.createToast)(O.intl.string(O.t["+5kSoa"]), i.ToastType.SUCCESS)));
        }, [N, e.quest.id, e.questContent, e.questContentPosition, e.sourceQuestContent, T]),
        Q = (e) => (0, i.showToast)((0, i.createToast)(new l.Z(e, e.status).message, i.ToastType.FAILURE)),
        L = () => (0, g.is)(e.quest.id).catch(Q),
        A = o.useMemo(
            () =>
                (0, r.jsx)(i.S89, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: R,
                }),
            [R, e.quest.id, null == n ? void 0 : n.id],
        ),
        I = e.shouldShowDisclosure && e.quest.id !== b.V6;
    return (0, r.jsxs)(i.v2r, {
        variant: "fixed",
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, a.Zy)();
        },
        navId: "quests-entry",
        "aria-label": O.intl.string(O.t.ogxXGh),
        onClose: null != (t = null == e ? void 0 : e.onClose) ? t : v.dG,
        children: [
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [
                        (0, r.jsx)(i.sNh, {
                            id: "play-game",
                            label: S,
                            action: k,
                            icon: i.zFc,
                        }),
                        T &&
                            (0, r.jsx)(i.sNh, {
                                id: "share-link",
                                label: O.intl.string(O.t.RDE0SU),
                                action: D,
                                icon: i.TIy,
                            }),
                        !1,
                    ],
                },
                "major-actions",
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, r.jsx)(i.sNh, {
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
                        I &&
                            (0, r.jsx)(i.sNh, {
                                id: "display-disclosure",
                                label: O.intl.string(O.t.GcsZKC),
                                action: () => {
                                    (0, f.openDisclosureModal)(e.quest, {
                                        content: e.questContent,
                                        position: e.questContentPosition,
                                        ctaContent: m.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                                        impressionId: N,
                                        sourceQuestContent: e.sourceQuestContent,
                                    });
                                },
                            }),
                        u &&
                            (0, r.jsx)(i.sNh, {
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
                                            E && (0, f.maybeShowSurveyForQuest)(e.quest));
                                },
                                subtext: O.intl.string(O.t["1u3YPD"]),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        label: "Preview Controls",
                        children: [
                            A,
                            (0, r.jsx)(i.sNh, {
                                id: "dismiss",
                                label: "Reset Dismissibility",
                                action: _,
                            }),
                            (0, r.jsx)(i.sNh, {
                                id: "enrollment",
                                label: "Reset Quest",
                                action: () => {
                                    M(), L();
                                },
                            }),
                            (0, r.jsx)(i.sNh, {
                                id: "progress",
                                label: "Set Random Quest Progress",
                                action: () => {
                                    w(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, r.jsx)(i.sNh, {
                                id: "complete",
                                label: "Complete Quest",
                                action: P,
                            }),
                            (0, h.$J)(e.quest) &&
                                (0, r.jsxs)(i.sNh, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, r.jsx)(i.sNh, {
                                            disabled: !0,
                                            id: "status",
                                            label: "Status: ".concat((0, h.Bz)(e.quest) ? "alive" : "dead"),
                                        }),
                                        (0, r.jsx)(i.sNh, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: () => (0, g.CS)(e.quest.id, !0).catch(Q),
                                        }),
                                        (0, r.jsx)(i.sNh, {
                                            id: "stop",
                                            label: "Stop heartbeat",
                                            action: L,
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(i.sNh, {
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
function S(e) {
    let {
            children: t,
            onOpen: n,
            onClose: s,
            preventIdle: a,
            quest: l,
            questContent: c,
            questContentPosition: d,
            sourceQuestContent: p,
        } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++)
                    (n = s[r]),
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
    return (0, r.jsx)(i.yRy, {
        targetElementRef: x,
        onRequestOpen: C,
        onRequestClose: s,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return a
                ? (0, r.jsx)(u.Z, {
                      children: (0, r.jsx)(
                          N,
                          q(E({}, h), {
                              quest: l,
                              questContent: c,
                              questContentPosition: d,
                              onClose: t,
                              sourceQuestContent: p,
                          }),
                      ),
                  })
                : (0, r.jsx)(
                      N,
                      q(E({}, h), {
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
            (0, r.jsx)("div", {
                ref: x,
                children: t(e),
            }),
    });
}
