n.d(t, {
    default: () => T,
    y: () => N,
}),
    n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(793030),
    o = n(442837),
    c = n(28664),
    d = n(780384),
    u = n(481060),
    m = n(607070),
    p = n(210887),
    h = n(617136),
    f = n(915750),
    x = n(49436),
    b = n(968843),
    g = n(475595),
    v = n(387745),
    j = n(254579),
    y = n(602667),
    C = n(659302),
    _ = n(231338),
    S = n(388032),
    E = n(574508);
function T(e) {
    var t;
    let { quest: n, errorHints: i, transitionState: y, onClose: T, sourceQuestContent: N } = e,
        [P, w] = (0, r.useState)(i),
        I = (0, b.KX)(),
        k = (0, h.O5)(),
        R = null == (t = (0, f.WD)()) ? void 0 : t.getId(),
        A = (0, o.e7)([m.Z], () => m.Z.useReducedMotion),
        Z = (0, C.g2)({
            useReducedMotion: A,
            className: E.colorTransition,
        }),
        D = P.filter((e) => ["xbox", "playstation"].includes(e.connected_account_type)),
        L = (0, j.Bz)(n),
        M = (0, o.e7)([p.Z], () => p.Z.getState().theme),
        U = (0, d.wj)(M) ? _.BR.DARK : _.BR.LIGHT,
        { startConsoleQuest: B, startingConsoleQuest: F } = (0, b.GI)({
            questId: n.id,
            beforeRequest: () => {
                Z.startAnimation(),
                    k({
                        questId: n.id,
                        questContent: x.jn.CONNECTIONS_MODAL,
                        questContentCTA: h.jZ.DEFIBRILLATOR,
                        sourceQuestContent: N,
                    });
            },
            afterRequest: (e) => {
                Z.stopAnimation(), w(e);
            },
        });
    return (0, a.jsx)(s.Modal, {
        transitionState: y,
        onClose: T,
        title: S.intl.string(S.t.W5lmKt),
        subtitle: I.message,
        actions: [
            {
                variant: "secondary",
                onClick: () =>
                    void (T(),
                    (0, v.V$)(
                        { quest: n },
                        {
                            content: x.jn.CONNECTIONS_MODAL,
                            ctaContent: h.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                            impressionId: R,
                            sourceQuestContent: N,
                        },
                    )),
                text: S.intl.string(S.t["qiS+xj"]),
            },
            {
                variant: "primary",
                onClick: () => T(),
                text: S.intl.string(S.t.cpT0Cq),
            },
        ],
        children: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: E.contentHeader,
                    children: [
                        (0, a.jsx)(u.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: S.intl.string(S.t["+/hZM/"]),
                        }),
                        (0, a.jsxs)(u.P3F, {
                            className: l()(E.refreshWrapper, { [E.disabled]: F }),
                            onClick: B,
                            children: [
                                Z.render(),
                                (0, a.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    color: "currentColor",
                                    className: E.colorTransition,
                                    children: S.intl.string(S.t.wzzjk9),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: E.accountsWrapper,
                    children: [
                        (0, a.jsx)(O, {
                            icon: (0, a.jsx)(u.pzj, { size: "sm" }),
                            text: S.intl.string(S.t.br3uIi),
                        }),
                        (0, a.jsx)(O, {
                            icon: (0, a.jsx)(u.iWm, { size: "sm" }),
                            text: S.intl.string(S.t.XF4wuA),
                            errors: L ? void 0 : D.map((e) => e.message),
                            gameTile: L
                                ? (0, a.jsx)(c.u, {
                                      "aria-label": n.config.messages.gameTitle,
                                      __unsupportedReactNodeAsText: (0, a.jsxs)("div", {
                                          className: E.tooltip,
                                          children: [
                                              (0, a.jsx)(u.Text, {
                                                  variant: "text-sm/medium",
                                                  children: n.config.messages.gameTitle,
                                              }),
                                              (0, a.jsx)(u.Text, {
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  children: S.intl.string(S.t.STpNEC),
                                              }),
                                          ],
                                      }),
                                      children: (0, a.jsx)("img", {
                                          className: E.gameTile,
                                          alt: n.config.messages.gameTitle,
                                          src: (0, g.fh)(n, g.eC.GAME_TILE, U).url,
                                      }),
                                  })
                                : null,
                        }),
                    ],
                }),
            ],
        }),
    });
}
function O(e) {
    let { icon: t, text: n, errors: r = [], gameTile: i } = e,
        s = r.length > 0,
        o = s ? u._3e : u.B_b;
    return (0, a.jsxs)("div", {
        className: E.connectionRow,
        children: [
            (0, a.jsxs)("div", {
                className: l()(E.connectionRowHeader, { [E.connectionRowHeaderError]: s }),
                children: [
                    (0, a.jsxs)("div", {
                        className: E.connectionRowHeaderContent,
                        children: [
                            t,
                            (0, a.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: n,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: E.connectionRowHeaderContent,
                        children: [
                            i,
                            (0, a.jsx)(o, {
                                color: "currentColor",
                                size: "sm",
                                className: l()({
                                    [E.success]: !s,
                                    [E.error]: s,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: E.errorsContainer,
                children: r.map((e) =>
                    (0, a.jsxs)(
                        "div",
                        {
                            className: E.errorRow,
                            children: [
                                (0, a.jsx)(u.aNP, {
                                    size: "sm",
                                    color: "currentColor",
                                    className: E.error,
                                }),
                                (0, a.jsx)(u.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: e,
                                }),
                            ],
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function N(e) {
    (0, u.ZDy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
        return function (n) {
            return (0, a.jsx)(y.A, {
                overrideVisibility: !0,
                questOrQuests: e.quest,
                questContent: x.jn.CONNECTIONS_MODAL,
                sourceQuestContent: e.sourceQuestContent,
                children: () =>
                    (0, a.jsx)(
                        t,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (a = a.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    a.forEach(function (t) {
                                        var a;
                                        (a = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = a);
                                    });
                            }
                            return e;
                        })({}, n, e),
                    ),
            });
        };
    });
}
