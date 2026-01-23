n.d(t, {
    C: () => U,
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
    _ = n(216456),
    h = n(906822),
    m = n(859703),
    g = n(341915),
    E = n(807876),
    y = n(890687),
    b = n(651892),
    O = n(710969),
    v = n(901406),
    A = n(792620),
    I = n(814793),
    S = n(201805),
    T = n(545986),
    C = n(654487),
    N = n(652215),
    R = n(818348),
    w = n(985018);

function P(e, t, n) {
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

function D(e) {
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
                P(e, t, n[t]);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = M(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function M(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function k(e) {
    var t;
    let n = (0, a.bG)([m.A], () => m.A.questDeliveryOverride, []),
        u = (0, O.vy)(e.questContent),
        P = [g.uF.QUEST_BAR_V2, g.uF.QUEST_BAR].includes(e.questContent),
        D = (0, _.Ut)(),
        x = (0, h.go)(),
        L = (0, b.wr)(e.quest),
        j = !0 === e.showShareLink && (0, I.E0)(e.quest.config),
        {
            handleComplete: M,
            handleProgress: k,
            handleResetDismissibilityClick: U,
            handleResetStatusClick: G,
            handleOverrideDeliveryClick: V,
        } = (0, y.j$)(e.quest.id),
        F = () => {
            k(0.9 * Math.random() + 0.03);
        },
        B = i.useCallback(() => {
            e.quest.id === C.Fw
                ? window.open(f.A.getArticleURL(N.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
                : (0, v.pu)(e.quest, {
                      content: e.questContent,
                      ctaContent: _.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
                      impressionId: x,
                      sourceQuestContent: e.sourceQuestContent,
                  });
        }, [x, e.quest, e.questContent, e.sourceQuestContent]),
        H = (0, S.Lk)({
            isShareable: j,
            questId: e.quest.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: e.questContent,
                    position: e.questContentPosition,
                    ctaContent: _.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: x,
                    sourceQuestContent: e.sourceQuestContent,
                }),
                [e.questContent, e.questContentPosition, e.sourceQuestContent, x],
            ),
        }),
        Y = () => {
            (0, T.Zc)(e.quest, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: _.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                impressionId: x,
                sourceQuestContent: e.sourceQuestContent,
            });
        },
        W = () => {
            D({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: _.Cy.CONTEXT_MENU_LEARN_MORE,
                sourceQuestContent: e.sourceQuestContent,
            }),
                (0, T.navigateToQuestHome)({
                    fromContent: e.questContent,
                    questId: e.quest.id,
                });
        },
        K = () => {
            null != e.onSelect ? e.onSelect() : (0, o.Z_)();
        },
        z = () => {
            D({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: _.Cy.CONTEXT_MENU_HIDE_CONTENT,
                sourceQuestContent: e.sourceQuestContent,
            }),
                (0, O.vy)(e.questContent) && ((0, p.g5)(e.quest.id, e.questContent), P && (0, T.z6)(e.quest));
        },
        q = (e) => (0, s.showToast)((0, s.createToast)(new l.A(e, e.status).message, s.ToastType.FAILURE)),
        X = () => (0, p.vD)(e.quest.id, !0).catch(q),
        Z = () => (0, p.CV)(e.quest.id).catch(q),
        Q = () => {
            G(), Z();
        },
        $ = (0, y.nv)(e.quest),
        J = i.useMemo(
            () =>
                (0, r.jsx)(s.sLh, {
                    id: "delivery",
                    label: "Show in Quest Bar",
                    checked: (null == n ? void 0 : n.id) === e.quest.id,
                    action: V,
                }),
            [V, e.quest.id, null == n ? void 0 : n.id],
        ),
        ee = i.useCallback(() => {
            (0, c.pX)(N.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id));
        }, [e.quest.id]),
        et = e.shouldShowDisclosure && e.quest.id !== C.Fw;
    return (0, r.jsxs)(s.W1t, {
        "data-menu-mixed": !0,
        variant: "fixed",
        onSelect: K,
        navId: "quests-entry",
        "aria-label": w.intl.string(w.t.ogxXGq),
        onClose: null != (t = null == e ? void 0 : e.onClose) ? t : R.tE,
        children: [
            (0, r.jsxs)(
                s.rXV,
                {
                    children: [
                        (0, r.jsx)(s.Drp, {
                            id: "play-game",
                            label: L,
                            action: B,
                            icon: s.We5,
                        }),
                        j &&
                            (0, r.jsx)(s.Drp, {
                                id: "share-link",
                                label: w.intl.string(w.t.RDE0Sc),
                                action: H,
                                icon: s.TdU,
                            }),
                        $ && J,
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
                                label: w.intl.string(w.t["Ws2Bl+"]),
                                action: W,
                                icon: s.r2v,
                            }),
                        et &&
                            (0, r.jsx)(s.Drp, {
                                id: "display-disclosure",
                                label: w.intl.string(w.t.GcsZKJ),
                                action: Y,
                            }),
                        u &&
                            (0, r.jsx)(s.Drp, {
                                id: "hide-entrypoint",
                                label: w.intl.string(w.t.NN79E9),
                                action: z,
                                subtext: w.intl.string(w.t.RK9gxo),
                            }),
                    ],
                },
                "minor-actions",
            ),
            e.quest.preview &&
                (0, r.jsxs)(
                    s.rXV,
                    {
                        label: w.intl.string(w.t["Ape+mm"]),
                        children: [
                            (0, r.jsx)(s.Drp, {
                                id: "dismiss",
                                label: w.intl.string(w.t.JF6W66),
                                action: U,
                            }),
                            (0, r.jsx)(s.Drp, {
                                id: "enrollment",
                                label: w.intl.string(w.t.taqkwK),
                                action: Q,
                            }),
                            (0, r.jsx)(s.Drp, {
                                id: "progress",
                                label: w.intl.string(w.t.cKSLr4),
                                action: F,
                            }),
                            (0, r.jsx)(s.Drp, {
                                id: "complete",
                                label: w.intl.string(w.t.jQEfRT),
                                action: M,
                            }),
                            (0, A.g5)(e.quest) &&
                                (0, r.jsxs)(s.Drp, {
                                    id: "console",
                                    label: "Console Heartbeat",
                                    children: [
                                        (0, r.jsx)(s.Drp, {
                                            disabled: !0,
                                            id: "status",
                                            label: "Status: ".concat((0, A.YL)(e.quest) ? "alive" : "dead"),
                                        }),
                                        (0, r.jsx)(s.Drp, {
                                            id: "start",
                                            label: "Start heartbeat (cheatmode)",
                                            action: X,
                                        }),
                                        (0, r.jsx)(s.Drp, {
                                            id: "stop",
                                            label: "Stop heartbeat",
                                            action: Z,
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(s.Drp, {
                                id: "copy-quest-id",
                                label: w.intl.string(w.t.oisrFi),
                                action: () => {
                                    (0, d.C)(e.quest.id);
                                },
                            }),
                            (0, E.U)({
                                location: C.rE.QUEST_PREVIEW_TOOL_2,
                            }) &&
                                (0, r.jsx)(s.Drp, {
                                    id: "preview",
                                    label: w.intl.string(w.t.tx5Ax5),
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
            preventIdle: o,
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
        h = (0, _.Ut)(),
        m = i.useRef(null),
        g = i.useCallback(() => {
            h({
                questId: l.id,
                questContent: c,
                questContentCTA: _.Cy.OPEN_CONTEXT_MENU,
                questContentPosition: d,
                sourceQuestContent: f,
            }),
                null != n && n();
        }, [n, l.id, c, d, h, f]);
    return (0, r.jsx)(s.YNO, {
        targetElementRef: m,
        onRequestOpen: g,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return o
                ? (0, r.jsx)(u.A, {
                      children: (0, r.jsx)(
                          k,
                          L(D({}, p), {
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
                      L(D({}, p), {
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
                ref: m,
                children: t(e),
            }),
    });
}
