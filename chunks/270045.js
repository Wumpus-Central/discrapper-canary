n.d(t, {
    C: () => G,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(442433),
    l = n(181658),
    c = n(976860),
    u = n(246356),
    d = n(957565),
    f = n(975571),
    p = n(829219),
    _ = n(859703),
    h = n(341915),
    m = n(807876),
    g = n(890687),
    E = n(18437),
    y = n(590202),
    b = n(971649),
    O = n(651892),
    v = n(710969),
    A = n(901406),
    I = n(792620),
    S = n(814793),
    T = n(201805),
    C = n(545986),
    N = n(654487),
    w = n(652215),
    R = n(818348),
    P = n(985018);

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

function x(e) {
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

function L(e, t) {
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

function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function M(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = k(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function U(e) {
    var t;
    let n = (0, a.bG)([_.A], () => _.A.questDeliveryOverride, []),
        u = (0, v.vy)(e.questContent),
        D = [h.uF.QUEST_BAR_V2, h.uF.QUEST_BAR].includes(e.questContent),
        x = (0, E.Ut)(),
        L = (0, b.go)(),
        j = (0, O.wr)(e.quest),
        M = !0 === e.showShareLink && (0, S.E0)(e.quest.config),
        {
            handleComplete: k,
            handleProgress: U,
            handleResetDismissibilityClick: G,
            handleResetStatusClick: V,
            handleOverrideDeliveryClick: F,
        } = (0, g.j$)(e.quest.id),
        B = () => {
            U(0.9 * Math.random() + 0.03);
        },
        H = i.useCallback(() => {
            e.quest.id === N.Fw
                ? window.open(f.A.getArticleURL(w.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
                : (0, A.pu)(e.quest, {
                      content: e.questContent,
                      ctaContent: y.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
                      impressionId: L,
                      sourceQuestContent: e.sourceQuestContent,
                  });
        }, [L, e.quest, e.questContent, e.sourceQuestContent]),
        Y = (0, T.Lk)({
            isShareable: M,
            questId: e.quest.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: y.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: L,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                [e.questContent, e.questContentPosition, e.sourceQuestContent, L],
            ),
        }),
        W = () => {
            (0, C.Zc)(e.quest, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: y.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                impressionId: L,
                sourceQuestContent: e.sourceQuestContent,
            });
        },
        K = () => {
            x({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: y.Cy.CONTEXT_MENU_LEARN_MORE,
                sourceQuestContent: e.sourceQuestContent,
            }),
                (0, C.navigateToQuestHome)({
                    fromContent: e.questContent,
                    questId: e.quest.id,
                });
        },
        z = () => {
            null != e.onSelect ? e.onSelect() : (0, o.Z_)();
        },
        q = () => {
            x({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: y.Cy.CONTEXT_MENU_HIDE_CONTENT,
                sourceQuestContent: e.sourceQuestContent,
            }),
                (0, v.vy)(e.questContent) && ((0, p.g5)(e.quest.id, e.questContent), D && (0, C.z6)(e.quest));
        },
        Z = (e) => (0, s.showToast)((0, s.createToast)(new l.A(e, e.status).message, s.ToastType.FAILURE)),
        X = () => (0, p.vD)(e.quest.id, !0).catch(Z),
        Q = () => (0, p.CV)(e.quest.id).catch(Z),
        J = () => {
            V(), Q();
        },
        $ = (0, g.nv)(e.quest),
        ee = i.useMemo(
            () =>
                (0, r.jsx)(s.sLh, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: F,
                }),
            [F, e.quest.id, null == n ? void 0 : n.id],
        ),
        et = i.useCallback(() => {
            (0, c.pX)(w.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        en = e.shouldShowDisclosure && e.quest.id !== N.Fw;
    return (0, r.jsxs)(s.W1t, {
        "data-menu-mixed": !0,
        variant: "fixed",
        onSelect: z,
        navId: "quests-entry",
        "aria-label": P.intl.string(P.t.ogxXGq),
        onClose: null != (t = null == e ? void 0 : e.onClose) ? t : R.tE,
        children: [
            (0, r.jsxs)(
                s.rXV,
                {
                    children: [
                        (0, r.jsx)(s.Drp, {
                            id: "play-game",
                            label: j,
                            action: H,
                            icon: s.We5,
                        }),
                        M &&
                            (0, r.jsx)(s.Drp, {
                                id: "share-link",
                                label: P.intl.string(P.t.RDE0Sc),
                                action: Y,
                                icon: s.TdU,
                            }),
                        $ && ee,
                    ],
                },
                "major-actions",
            ),
            (0, r.jsxs)(
                s.rXV,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, r.jsx)(s.Drp, {
                                id: "learn-more",
                                label: P.intl.string(P.t["Ws2Bl+"]),
                                action: K,
                                icon: s.r2v,
                            }),
                        en &&
                            (0, r.jsx)(s.Drp, {
                                id: "display-disclosure",
                                label: P.intl.string(P.t.GcsZKJ),
                                action: W,
                            }),
                        u &&
                            (0, r.jsx)(s.Drp, {
                                id: "hide-entrypoint",
                                label: P.intl.string(P.t.NN79E9),
                                action: q,
                                subtext: P.intl.string(P.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, r.jsxs)(
                    s.rXV,
                    {
                        label: P.intl.string(P.t["Ape+mm"]),
                        children: [
                            (0, r.jsx)(s.Drp, {
                                id: "dismiss",
                                label: P.intl.string(P.t.JF6W66),
                                action: G,
                            }),
                            (0, r.jsx)(s.Drp, {
                                id: "enrollment",
                                label: P.intl.string(P.t.taqkwK),
                                action: J,
                            }),
                            (0, r.jsx)(s.Drp, {
                                id: "progress",
                                label: P.intl.string(P.t.cKSLr4),
                                action: B,
                            }),
                            (0, r.jsx)(s.Drp, {
                                id: "complete",
                                label: P.intl.string(P.t.jQEfRT),
                                action: k,
                            }),
                            (0, I.g5)(e.quest) &&
                                (0, r.jsxs)(s.Drp, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, r.jsx)(s.Drp, {
                                            disabled: !0,
                                            id: "status",
                                            label: "Status: ".concat((0, I.YL)(e.quest) ? "alive" : "dead"),
                                        }),
                                        (0, r.jsx)(s.Drp, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: X,
                                        }),
                                        (0, r.jsx)(s.Drp, {
                                            id: "stop",
                                            label: "Stop heartbeat",
                                            action: Q,
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(s.Drp, {
                                id: "copy-quest-id",
                                label: P.intl.string(P.t.oisrFi),
                                action: () => {
                                    (0, d.C)(e.quest.id);
                                },
                            }),
                            (0, m.U)({
                                location: N.rE.QUEST_PREVIEW_TOOL_2,
                            }) &&
                                (0, r.jsx)(s.Drp, {
                                    id: "preview",
                                    label: P.intl.string(P.t.tx5Ax5),
                                    action: et,
                                }),
                        ],
                    },
                    "preview-controls",
                ),
        ],
    });
}

function G(e) {
    let {
            children: t,
            onOpen: n,
            onClose: a,
            preventIdle: o,
            quest: l,
            questContent: c,
            questContentPosition: d,
            sourceQuestContent: f,
        } = e,
        p = M(e, [
            "children",
            "onOpen",
            "onClose",
            "preventIdle",
            "quest",
            "questContent",
            "questContentPosition",
            "sourceQuestContent",
        ]),
        _ = (0, E.Ut)(),
        h = i.useRef(null),
        m = i.useCallback(() => {
            _({
                questId: l.id,
                questContent: c,
                questContentCTA: y.Cy.OPEN_CONTEXT_MENU,
                questContentPosition: d,
                sourceQuestContent: f,
            }),
                null != n && n();
        }, [n, l.id, c, d, _, f]);
    return (0, r.jsx)(s.YNO, {
        targetElementRef: h,
        onRequestOpen: m,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return o
                ? (0, r.jsx)(u.A, {
                      children: (0, r.jsx)(
                          U,
                          j(x({}, p), {
                              quest: l,
                              questContent: c,
                              questContentPosition: d,
                              onClose: t,
                              sourceQuestContent: f,
                          }),
                      ),
                  })
                : (0, r.jsx)(
                      U,
                      j(x({}, p), {
                          quest: l,
                          questContent: c,
                          questContentPosition: d,
                          onClose: t,
                          sourceQuestContent: f,
                      }),
                  );
        },
        animation: s.YNO.Animation.NONE,
        children: (e) =>
            (0, r.jsx)("div", {
                ref: h,
                children: t(e),
            }),
    });
}
