n.d(t, {
    C: () => L,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(442433),
    o = n(181658),
    c = n(976860),
    u = n(246356),
    d = n(957565),
    p = n(975571),
    m = n(829219),
    f = n(859703),
    g = n(341915),
    h = n(807876),
    _ = n(890687),
    b = n(18437),
    A = n(590202),
    y = n(971649),
    v = n(651892),
    x = n(710969),
    O = n(901406),
    E = n(792620),
    j = n(814793),
    C = n(201805),
    I = n(545986),
    S = n(654487),
    T = n(652215),
    N = n(818348),
    P = n(985018);

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

function R(e, t) {
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

function D(e) {
    var t;
    let n = (0, l.bG)([f.A], () => f.A.questDeliveryOverride, []),
        u = (0, x.vy)(e.questContent),
        w = [g.uF.QUEST_BAR_V2, g.uF.QUEST_BAR].includes(e.questContent),
        R = (0, b.Ut)(),
        D = (0, y.go)(),
        L = (0, v.wr)(e.quest),
        M = !0 === e.showShareLink && (0, j.E0)(e.quest.config),
        {
            handleComplete: k,
            handleProgress: U,
            handleResetDismissibilityClick: G,
            handleResetStatusClick: B,
            handleOverrideDeliveryClick: F,
        } = (0, _.j$)(e.quest.id),
        H = i.useCallback(() => {
            e.quest.id === S.Fw
                ? window.open(p.A.getArticleURL(T.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
                : (0, O.pu)(e.quest, {
                      content: e.questContent,
                      ctaContent: A.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
                      impressionId: D,
                      sourceQuestContent: e.sourceQuestContent,
                  });
        }, [D, e.quest, e.questContent, e.sourceQuestContent]),
        V = (0, C.Lk)({
            isShareable: M,
            questId: e.quest.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: A.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: D,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                [e.questContent, e.questContentPosition, e.sourceQuestContent, D],
            ),
        }),
        z = (e) => (0, a.showToast)((0, a.createToast)(new o.A(e, e.status).message, a.ToastType.FAILURE)),
        W = () => (0, m.CV)(e.quest.id).catch(z),
        K = (0, _.nv)(e.quest),
        Y = i.useMemo(
            () =>
                (0, r.jsx)(a.sLh, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: F,
                }),
            [F, e.quest.id, null == n ? void 0 : n.id],
        ),
        q = i.useCallback(() => {
            (0, c.pX)(T.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        J = e.shouldShowDisclosure && e.quest.id !== S.Fw;
    return (0, r.jsxs)(a.W1t, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, s.Z_)();
        },
        navId: "quests-entry",
        "aria-label": P.intl.string(P.t.ogxXGq),
        onClose: null != (t = null == e ? void 0 : e.onClose) ? t : N.tE,
        children: [
            (0, r.jsxs)(
                a.rXV,
                {
                    children: [
                        (0, r.jsx)(a.Drp, {
                            id: "play-game",
                            label: L,
                            action: H,
                            icon: a.We5,
                            leadingAccessory: {
                                type: "icon",
                                icon: a.We5,
                            },
                        }),
                        M &&
                            (0, r.jsx)(a.Drp, {
                                id: "share-link",
                                label: P.intl.string(P.t.RDE0Sc),
                                action: V,
                                icon: a.TdU,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: a.TdU,
                                },
                            }),
                        K && Y,
                    ],
                },
                "major-actions",
            ),
            (0, r.jsxs)(
                a.rXV,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, r.jsx)(a.Drp, {
                                id: "learn-more",
                                label: P.intl.string(P.t["Ws2Bl+"]),
                                action: () => {
                                    R({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: A.Cy.CONTEXT_MENU_LEARN_MORE,
                                        sourceQuestContent: e.sourceQuestContent,
                                    }),
                                        (0, I.navigateToQuestHome)({
                                            fromContent: e.questContent,
                                            questId: e.quest.id,
                                        });
                                },
                                icon: a.r2v,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: a.r2v,
                                },
                            }),
                        J &&
                            (0, r.jsx)(a.Drp, {
                                id: "display-disclosure",
                                label: P.intl.string(P.t.GcsZKJ),
                                action: () => {
                                    (0, I.Zc)(e.quest, {
                                        content: e.questContent,
                                        position: e.questContentPosition,
                                        ctaContent: A.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                        impressionId: D,
                                        sourceQuestContent: e.sourceQuestContent,
                                    });
                                },
                            }),
                        u &&
                            (0, r.jsx)(a.Drp, {
                                id: "hide-entrypoint",
                                label: P.intl.string(P.t.NN79E9),
                                action: () => {
                                    R({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: A.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                        sourceQuestContent: e.sourceQuestContent,
                                    }),
                                        (0, x.vy)(e.questContent) &&
                                            ((0, m.g5)(e.quest.id, e.questContent), w && (0, I.z6)(e.quest));
                                },
                                subtext: P.intl.string(P.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, r.jsxs)(
                    a.rXV,
                    {
                        label: P.intl.string(P.t["Ape+mm"]),
                        children: [
                            (0, r.jsx)(a.Drp, {
                                id: "dismiss",
                                label: P.intl.string(P.t.JF6W66),
                                action: G,
                            }),
                            (0, r.jsx)(a.Drp, {
                                id: "enrollment",
                                label: P.intl.string(P.t.taqkwK),
                                action: () => {
                                    B(), W();
                                },
                            }),
                            (0, r.jsx)(a.Drp, {
                                id: "progress",
                                label: P.intl.string(P.t.cKSLr4),
                                action: () => {
                                    U(0.9 * Math.random() + 0.03);
                                },
                            }),
                            (0, r.jsx)(a.Drp, {
                                id: "complete",
                                label: P.intl.string(P.t.jQEfRT),
                                action: k,
                            }),
                            (0, E.g5)(e.quest) &&
                                (0, r.jsxs)(a.Drp, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, r.jsx)(a.Drp, {
                                            disabled: !0,
                                            id: "status",
                                            label: "Status: ".concat((0, E.YL)(e.quest) ? "alive" : "dead"),
                                        }),
                                        (0, r.jsx)(a.Drp, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: () => (0, m.vD)(e.quest.id, !0).catch(z),
                                        }),
                                        (0, r.jsx)(a.Drp, {
                                            id: "stop",
                                            label: "Stop heartbeat",
                                            action: W,
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(a.Drp, {
                                id: "copy-quest-id",
                                label: P.intl.string(P.t.oisrFi),
                                action: () => {
                                    (0, d.C)(e.quest.id);
                                },
                            }),
                            (0, h.U)({
                                location: S.rE.QUEST_PREVIEW_TOOL_2,
                            }) &&
                                (0, r.jsx)(a.Drp, {
                                    id: "preview",
                                    label: P.intl.string(P.t.tx5Ax5),
                                    action: q,
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
            onClose: l,
            preventIdle: s,
            quest: o,
            questContent: c,
            questContentPosition: d,
            sourceQuestContent: p,
        } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
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
        f = (0, b.Ut)(),
        g = i.useRef(null),
        h = i.useCallback(() => {
            f({
                questId: o.id,
                questContent: c,
                questContentCTA: A.Cy.OPEN_CONTEXT_MENU,
                questContentPosition: d,
                sourceQuestContent: p,
            }),
                null != n && n();
        }, [n, o.id, c, d, f, p]);
    return (0, r.jsx)(a.YNO, {
        targetElementRef: g,
        onRequestOpen: h,
        onRequestClose: l,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return s
                ? (0, r.jsx)(u.A, {
                      children: (0, r.jsx)(
                          D,
                          R(w({}, m), {
                              quest: o,
                              questContent: c,
                              questContentPosition: d,
                              onClose: t,
                              sourceQuestContent: p,
                          }),
                      ),
                  })
                : (0, r.jsx)(
                      D,
                      R(w({}, m), {
                          quest: o,
                          questContent: c,
                          questContentPosition: d,
                          onClose: t,
                          sourceQuestContent: p,
                      }),
                  );
        },
        animation: a.YNO.Animation.NONE,
        children: (e) =>
            (0, r.jsx)("div", {
                ref: g,
                children: t(e),
            }),
    });
}
