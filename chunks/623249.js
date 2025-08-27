n.d(t, {
    default: () => N,
    y: () => P,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(82659),
    c = n(780384),
    u = n(481060),
    d = n(607070),
    f = n(210887),
    _ = n(617136),
    p = n(915750),
    h = n(509212),
    m = n(113434),
    g = n(497505),
    E = n(475595),
    b = n(602667),
    y = n(667105),
    O = n(981631),
    v = n(388032),
    I = n(301889);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e) {
    var t;
    let { quest: n, errorHints: a, transitionState: b, onClose: T, sourceQuestContent: A } = e,
        [N, P] = (0, i.useState)(a),
        w = (0, m.KX)(),
        D = (0, _.O5)(),
        x = null == (t = (0, p.WD)()) ? void 0 : t.getId(),
        L = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        j = (0, y.g2)({
            useReducedMotion: L,
            className: I.colorTransition,
        }),
        M = N.filter((e) => ["xbox", "playstation"].includes(e.connected_account_type)),
        k = (0, h.Bz)(n),
        U = (0, s.e7)([f.Z], () => f.Z.getState().theme),
        G = (0, c.wj)(U) ? O.BRd.DARK : O.BRd.LIGHT,
        { startConsoleQuest: B, startingConsoleQuest: Z } = (0, m.GI)({
            questId: n.id,
            beforeRequest: () => {
                j.startAnimation(),
                    D({
                        questId: n.id,
                        questContent: g.jn.CONNECTIONS_MODAL,
                        questContentCTA: _.jZ.DEFIBRILLATOR,
                        sourceQuestContent: A,
                    });
            },
            afterRequest: (e) => {
                j.stopAnimation(), P(e);
            },
        }),
        F = () => {
            T(),
                (0, h.V$)(
                    { quest: n },
                    {
                        content: g.jn.CONNECTIONS_MODAL,
                        ctaContent: _.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                        impressionId: x,
                        sourceQuestContent: A,
                    },
                );
        },
        V = () =>
            k
                ? (0, r.jsx)(u.ua7, {
                      "aria-label": n.config.messages.gameTitle,
                      text: () =>
                          (0, r.jsxs)("div", {
                              className: I.tooltip,
                              children: [
                                  (0, r.jsx)(u.Text, {
                                      variant: "text-sm/medium",
                                      children: n.config.messages.gameTitle,
                                  }),
                                  (0, r.jsx)(u.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: v.intl.string(v.t.STpNEB),
                                  }),
                              ],
                          }),
                      children: (e) =>
                          (0, r.jsx)(
                              "img",
                              C(S({}, e), {
                                  className: I.gameTile,
                                  alt: n.config.messages.gameTitle,
                                  src: (0, E.fh)(n, E.eC.GAME_TILE, G).url,
                              }),
                          ),
                  })
                : null;
    return (0, r.jsx)(l.Modal, {
        transitionState: b,
        onClose: T,
        title: v.intl.string(v.t.W5lmKi),
        subtitle: w.message,
        actions: [
            {
                variant: "secondary",
                onClick: () => F(),
                text: v.intl.string(v.t["qiS+xs"]),
            },
            {
                variant: "primary",
                onClick: () => T(),
                text: v.intl.string(v.t.cpT0Cg),
            },
        ],
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: I.contentHeader,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: v.intl.string(v.t["+/hZMz"]),
                        }),
                        (0, r.jsxs)(u.P3F, {
                            className: o()(I.refreshWrapper, { [I.disabled]: Z }),
                            onClick: B,
                            children: [
                                j.render(),
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    color: "currentColor",
                                    className: I.colorTransition,
                                    children: v.intl.string(v.t.wzzjk5),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: I.accountsWrapper,
                    children: [
                        (0, r.jsx)(R, {
                            icon: (0, r.jsx)(u.pzj, { size: "sm" }),
                            text: v.intl.string(v.t.br3uIi),
                        }),
                        (0, r.jsx)(R, {
                            icon: (0, r.jsx)(u.iWm, { size: "sm" }),
                            text: v.intl.string(v.t.XF4wuL),
                            errors: k ? void 0 : M.map((e) => e.message),
                            gameTile: V(),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function R(e) {
    let { icon: t, text: n, errors: i = [], gameTile: a } = e,
        s = i.length > 0,
        l = s ? u._3e : u.B_b;
    return (0, r.jsxs)("div", {
        className: I.connectionRow,
        children: [
            (0, r.jsxs)("div", {
                className: o()(I.connectionRowHeader, { [I.connectionRowHeaderError]: s }),
                children: [
                    (0, r.jsxs)("div", {
                        className: I.connectionRowHeaderContent,
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
                        className: I.connectionRowHeaderContent,
                        children: [
                            a,
                            (0, r.jsx)(l, {
                                color: "currentColor",
                                size: "sm",
                                className: o()({
                                    [I.success]: !s,
                                    [I.error]: s,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: I.errorsContainer,
                children: i.map((e) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: I.errorRow,
                            children: [
                                (0, r.jsx)(u.aNP, {
                                    size: "sm",
                                    color: "currentColor",
                                    className: I.error,
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
function P(e) {
    (0, u.ZDy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
        return function (n) {
            return (0, r.jsx)(b.A, {
                overrideVisibility: !0,
                questOrQuests: e.quest,
                questContent: g.jn.CONNECTIONS_MODAL,
                sourceQuestContent: e.sourceQuestContent,
                children: () => (0, r.jsx)(t, S({}, n, e)),
            });
        };
    });
}
