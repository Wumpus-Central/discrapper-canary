n.d(t, {
    default: () => R,
    y: () => w,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(607070),
    f = n(600164),
    _ = n(210887),
    p = n(617136),
    h = n(915750),
    m = n(509212),
    g = n(113434),
    E = n(497505),
    b = n(475595),
    y = n(667105),
    O = n(981631),
    v = n(388032),
    I = n(301889),
    T = n(708901);
function S(e, t, n) {
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
function A(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e) {
    var t;
    let { questId: n, errorHints: a, transitionState: S, onClose: C, sourceQuestContent: R } = e,
        w = (0, g.sf)(n);
    null == w && C();
    let [D, x] = (0, i.useState)(a),
        L = (0, g.KX)(),
        j = (0, p.O5)(),
        M = null == (t = (0, h.WD)()) ? void 0 : t.getId(),
        k = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        U = (0, y.g2)({
            useReducedMotion: k,
            className: I.colorTransition,
        }),
        G = D.filter((e) => ["xbox", "playstation"].includes(e.connected_account_type)),
        B = (0, m.Bz)(w),
        Z = (0, s.e7)([_.Z], () => _.Z.getState().theme),
        V = (0, l.wj)(Z) ? O.BRd.DARK : O.BRd.LIGHT,
        { startConsoleQuest: F, startingConsoleQuest: H } = (0, g.GI)({
            questId: w.id,
            beforeRequest: () => {
                U.startAnimation(),
                    j({
                        questId: w.id,
                        questContent: E.jn.CONNECTIONS_MODAL,
                        questContentCTA: p.jZ.DEFIBRILLATOR,
                        sourceQuestContent: R,
                    });
            },
            afterRequest: (e) => {
                U.stopAnimation(), x(e);
            },
        }),
        Y = () => {
            C(),
                (0, m.V$)(
                    { quest: w },
                    {
                        content: E.jn.CONNECTIONS_MODAL,
                        ctaContent: p.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                        impressionId: M,
                        sourceQuestContent: R,
                    },
                );
        },
        W = () =>
            B
                ? (0, r.jsx)(u.ua7, {
                      "aria-label": w.config.messages.gameTitle,
                      text: () =>
                          (0, r.jsxs)("div", {
                              className: I.tooltip,
                              children: [
                                  (0, r.jsx)(u.Text, {
                                      variant: "text-sm/medium",
                                      children: w.config.messages.gameTitle,
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
                              N(A({}, e), {
                                  className: I.gameTile,
                                  alt: w.config.messages.gameTitle,
                                  src: (0, b.fh)(w, b.eC.GAME_TILE, V).url,
                              }),
                          ),
                  })
                : null;
    return (0, r.jsxs)(u.Y0X, {
        transitionState: S,
        size: u.CgR.DYNAMIC,
        className: I.modalRoot,
        parentComponent: "QuestConsoleConnectionErrorsModal",
        children: [
            (0, r.jsxs)(u.xBx, {
                direction: f.Z.Direction.VERTICAL,
                separator: !1,
                className: I.modalHeader,
                children: [
                    (0, r.jsxs)("div", {
                        className: I.modalTop,
                        children: [
                            (0, r.jsx)("div", {
                                className: I.iconFrame,
                                children: (0, r.jsx)("img", {
                                    className: I.icon,
                                    alt: "",
                                    src: T,
                                }),
                            }),
                            (0, r.jsx)(u.olH, {
                                className: I.closeBtn,
                                onClick: C,
                            }),
                        ],
                    }),
                    (0, r.jsx)(u.X6q, {
                        variant: "heading-xl/bold",
                        children: v.intl.string(v.t.W5lmKi),
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        className: I.upperBodyText,
                        children: L.message,
                    }),
                ],
            }),
            (0, r.jsxs)(u.hzk, {
                className: I.modalContent,
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
                                className: o()(I.refreshWrapper, { [I.disabled]: H }),
                                onClick: F,
                                children: [
                                    U.render(),
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
                            (0, r.jsx)(P, {
                                icon: (0, r.jsx)(u.pzj, { size: "sm" }),
                                text: v.intl.string(v.t.br3uIi),
                            }),
                            (0, r.jsx)(P, {
                                icon: (0, r.jsx)(u.iWm, { size: "sm" }),
                                text: v.intl.string(v.t.XF4wuL),
                                errors: B ? void 0 : G.map((e) => e.message),
                                gameTile: W(),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(u.mzw, {
                className: I.footer,
                children: [
                    (0, r.jsx)(c.zx, {
                        size: c.Ph.MIN,
                        onClick: C,
                        className: I.footerCloseButton,
                        children: v.intl.string(v.t.cpT0Cg),
                    }),
                    (0, r.jsx)(u.zxk, {
                        variant: "secondary",
                        text: v.intl.string(v.t["qiS+xs"]),
                        onClick: Y,
                    }),
                ],
            }),
        ],
    });
}
function P(e) {
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
function w(e) {
    (0, u.ZDy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
        return (n) => (0, r.jsx)(t, A({}, n, e));
    });
}
