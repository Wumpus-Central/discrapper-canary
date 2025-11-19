n.d(t, {
    default: () => O,
    y: () => T,
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
    h = n(509212),
    x = n(113434),
    b = n(497505),
    _ = n(475595),
    j = n(602667),
    v = n(667105),
    C = n(981631),
    y = n(388032),
    E = n(301889);
function O(e) {
    var t;
    let { quest: n, errorHints: o, transitionState: j, onClose: O, sourceQuestContent: T } = e,
        [w, P] = (0, s.useState)(o),
        N = (0, x.KX)(),
        A = (0, g.O5)(),
        R = null == (t = (0, f.WD)()) ? void 0 : t.getId(),
        B = (0, l.e7)([p.Z], () => p.Z.useReducedMotion),
        k = (0, v.g2)({
            useReducedMotion: B,
            className: E.colorTransition,
        }),
        I = w.filter((e) => ["xbox", "playstation"].includes(e.connected_account_type)),
        D = (0, h.Bz)(n),
        q = (0, l.e7)([m.Z], () => m.Z.getState().theme),
        L = (0, d.wj)(q) ? C.BRd.DARK : C.BRd.LIGHT,
        { startConsoleQuest: Q, startingConsoleQuest: V } = (0, x.GI)({
            questId: n.id,
            beforeRequest: () => {
                k.startAnimation(),
                    A({
                        questId: n.id,
                        questContent: b.jn.CONNECTIONS_MODAL,
                        questContentCTA: g.jZ.DEFIBRILLATOR,
                        sourceQuestContent: T,
                    });
            },
            afterRequest: (e) => {
                k.stopAnimation(), P(e);
            },
        });
    return (0, r.jsx)(i.Modal, {
        transitionState: j,
        onClose: O,
        title: y.intl.string(y.t.W5lmKt),
        subtitle: N.message,
        actions: [
            {
                variant: "secondary",
                onClick: () =>
                    void (O(),
                    (0, h.V$)(
                        { quest: n },
                        {
                            content: b.jn.CONNECTIONS_MODAL,
                            ctaContent: g.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                            impressionId: R,
                            sourceQuestContent: T,
                        },
                    )),
                text: y.intl.string(y.t["qiS+xj"]),
            },
            {
                variant: "primary",
                onClick: () => O(),
                text: y.intl.string(y.t.cpT0Cq),
            },
        ],
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: E.contentHeader,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: y.intl.string(y.t["+/hZM/"]),
                        }),
                        (0, r.jsxs)(u.P3F, {
                            className: a()(E.refreshWrapper, { [E.disabled]: V }),
                            onClick: Q,
                            children: [
                                k.render(),
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    color: "currentColor",
                                    className: E.colorTransition,
                                    children: y.intl.string(y.t.wzzjk9),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: E.accountsWrapper,
                    children: [
                        (0, r.jsx)(S, {
                            icon: (0, r.jsx)(u.pzj, { size: "sm" }),
                            text: y.intl.string(y.t.br3uIi),
                        }),
                        (0, r.jsx)(S, {
                            icon: (0, r.jsx)(u.iWm, { size: "sm" }),
                            text: y.intl.string(y.t.XF4wuA),
                            errors: D ? void 0 : I.map((e) => e.message),
                            gameTile: D
                                ? (0, r.jsx)(c.u, {
                                      "aria-label": n.config.messages.gameTitle,
                                      __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                                          className: E.tooltip,
                                          children: [
                                              (0, r.jsx)(u.Text, {
                                                  variant: "text-sm/medium",
                                                  children: n.config.messages.gameTitle,
                                              }),
                                              (0, r.jsx)(u.Text, {
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  children: y.intl.string(y.t.STpNEC),
                                              }),
                                          ],
                                      }),
                                      children: (0, r.jsx)("img", {
                                          className: E.gameTile,
                                          alt: n.config.messages.gameTitle,
                                          src: (0, _.fh)(n, _.eC.GAME_TILE, L).url,
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
function S(e) {
    let { icon: t, text: n, errors: s = [], gameTile: o } = e,
        i = s.length > 0,
        l = i ? u._3e : u.B_b;
    return (0, r.jsxs)("div", {
        className: E.connectionRow,
        children: [
            (0, r.jsxs)("div", {
                className: a()(E.connectionRowHeader, { [E.connectionRowHeaderError]: i }),
                children: [
                    (0, r.jsxs)("div", {
                        className: E.connectionRowHeaderContent,
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
                        className: E.connectionRowHeaderContent,
                        children: [
                            o,
                            (0, r.jsx)(l, {
                                color: "currentColor",
                                size: "sm",
                                className: a()({
                                    [E.success]: !i,
                                    [E.error]: i,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: E.errorsContainer,
                children: s.map((e) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: E.errorRow,
                            children: [
                                (0, r.jsx)(u.aNP, {
                                    size: "sm",
                                    color: "currentColor",
                                    className: E.error,
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
function T(e) {
    (0, u.ZDy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
        return function (n) {
            return (0, r.jsx)(j.A, {
                overrideVisibility: !0,
                questOrQuests: e.quest,
                questContent: b.jn.CONNECTIONS_MODAL,
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
