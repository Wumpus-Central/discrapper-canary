n.d(t, {
    default: () => S,
    y: () => w,
}),
    n(388685);
var r = n(54381),
    s = n(473749),
    o = n(120356),
    a = n.n(o),
    i = n(793030),
    l = n(442837),
    c = n(28664),
    d = n(780384),
    u = n(481060),
    p = n(607070),
    m = n(210887),
    g = n(617136),
    f = n(915750),
    h = n(49436),
    x = n(968843),
    _ = n(475595),
    b = n(387745),
    j = n(254579),
    v = n(602667),
    C = n(659302),
    y = n(231338),
    E = n(388032),
    O = n(301889);
function S(e) {
    var t;
    let { quest: n, errorHints: o, transitionState: v, onClose: S, sourceQuestContent: w } = e,
        [P, N] = (0, s.useState)(o),
        R = (0, x.KX)(),
        A = (0, g.O5)(),
        B = null == (t = (0, f.WD)()) ? void 0 : t.getId(),
        k = (0, l.e7)([p.Z], () => p.Z.useReducedMotion),
        I = (0, C.g2)({
            useReducedMotion: k,
            className: O.colorTransition,
        }),
        D = P.filter((e) => ["xbox", "playstation"].includes(e.connected_account_type)),
        q = (0, j.Bz)(n),
        L = (0, l.e7)([m.Z], () => m.Z.getState().theme),
        Q = (0, d.wj)(L) ? y.BR.DARK : y.BR.LIGHT,
        { startConsoleQuest: V, startingConsoleQuest: M } = (0, x.GI)({
            questId: n.id,
            beforeRequest: () => {
                I.startAnimation(),
                    A({
                        questId: n.id,
                        questContent: h.jn.CONNECTIONS_MODAL,
                        questContentCTA: g.jZ.DEFIBRILLATOR,
                        sourceQuestContent: w,
                    });
            },
            afterRequest: (e) => {
                I.stopAnimation(), N(e);
            },
        });
    return (0, r.jsx)(i.Modal, {
        transitionState: v,
        onClose: S,
        title: E.intl.string(E.t.W5lmKt),
        subtitle: R.message,
        actions: [
            {
                variant: "secondary",
                onClick: () =>
                    void (S(),
                    (0, b.V$)(
                        { quest: n },
                        {
                            content: h.jn.CONNECTIONS_MODAL,
                            ctaContent: g.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                            impressionId: B,
                            sourceQuestContent: w,
                        },
                    )),
                text: E.intl.string(E.t["qiS+xj"]),
            },
            {
                variant: "primary",
                onClick: () => S(),
                text: E.intl.string(E.t.cpT0Cq),
            },
        ],
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: O.contentHeader,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: E.intl.string(E.t["+/hZM/"]),
                        }),
                        (0, r.jsxs)(u.P3F, {
                            className: a()(O.refreshWrapper, { [O.disabled]: M }),
                            onClick: V,
                            children: [
                                I.render(),
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    color: "currentColor",
                                    className: O.colorTransition,
                                    children: E.intl.string(E.t.wzzjk9),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: O.accountsWrapper,
                    children: [
                        (0, r.jsx)(T, {
                            icon: (0, r.jsx)(u.pzj, { size: "sm" }),
                            text: E.intl.string(E.t.br3uIi),
                        }),
                        (0, r.jsx)(T, {
                            icon: (0, r.jsx)(u.iWm, { size: "sm" }),
                            text: E.intl.string(E.t.XF4wuA),
                            errors: q ? void 0 : D.map((e) => e.message),
                            gameTile: q
                                ? (0, r.jsx)(c.u, {
                                      "aria-label": n.config.messages.gameTitle,
                                      __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                                          className: O.tooltip,
                                          children: [
                                              (0, r.jsx)(u.Text, {
                                                  variant: "text-sm/medium",
                                                  children: n.config.messages.gameTitle,
                                              }),
                                              (0, r.jsx)(u.Text, {
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  children: E.intl.string(E.t.STpNEC),
                                              }),
                                          ],
                                      }),
                                      children: (0, r.jsx)("img", {
                                          className: O.gameTile,
                                          alt: n.config.messages.gameTitle,
                                          src: (0, _.fh)(n, _.eC.GAME_TILE, Q).url,
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
function T(e) {
    let { icon: t, text: n, errors: s = [], gameTile: o } = e,
        i = s.length > 0,
        l = i ? u._3e : u.B_b;
    return (0, r.jsxs)("div", {
        className: O.connectionRow,
        children: [
            (0, r.jsxs)("div", {
                className: a()(O.connectionRowHeader, { [O.connectionRowHeaderError]: i }),
                children: [
                    (0, r.jsxs)("div", {
                        className: O.connectionRowHeaderContent,
                        children: [
                            t,
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: n,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: O.connectionRowHeaderContent,
                        children: [
                            o,
                            (0, r.jsx)(l, {
                                color: "currentColor",
                                size: "sm",
                                className: a()({
                                    [O.success]: !i,
                                    [O.error]: i,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: O.errorsContainer,
                children: s.map((e) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: O.errorRow,
                            children: [
                                (0, r.jsx)(u.aNP, {
                                    size: "sm",
                                    color: "currentColor",
                                    className: O.error,
                                }),
                                (0, r.jsx)(u.Text, {
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
function w(e) {
    (0, u.ZDy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
        return function (n) {
            return (0, r.jsx)(v.A, {
                overrideVisibility: !0,
                questOrQuests: e.quest,
                questContent: h.jn.CONNECTIONS_MODAL,
                sourceQuestContent: e.sourceQuestContent,
                children: () =>
                    (0, r.jsx)(
                        t,
                        (function (e) {
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
                        })({}, n, e),
                    ),
            });
        };
    });
}
