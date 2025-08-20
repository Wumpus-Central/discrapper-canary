n.d(t, {
    default: () => P,
    y: () => D,
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
    y = n(602667),
    O = n(667105),
    v = n(981631),
    I = n(388032),
    T = n(301889),
    S = n(708901);
function A(e, t, n) {
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
function C(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    var t;
    let { quest: n, errorHints: a, transitionState: y, onClose: A, sourceQuestContent: N } = e,
        [P, D] = (0, i.useState)(a),
        x = (0, g.KX)(),
        L = (0, p.O5)(),
        j = null == (t = (0, h.WD)()) ? void 0 : t.getId(),
        M = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        k = (0, O.g2)({
            useReducedMotion: M,
            className: T.colorTransition,
        }),
        U = P.filter((e) => ["xbox", "playstation"].includes(e.connected_account_type)),
        G = (0, m.Bz)(n),
        B = (0, s.e7)([_.Z], () => _.Z.getState().theme),
        Z = (0, l.wj)(B) ? v.BRd.DARK : v.BRd.LIGHT,
        { startConsoleQuest: V, startingConsoleQuest: F } = (0, g.GI)({
            questId: n.id,
            beforeRequest: () => {
                k.startAnimation(),
                    L({
                        questId: n.id,
                        questContent: E.jn.CONNECTIONS_MODAL,
                        questContentCTA: p.jZ.DEFIBRILLATOR,
                        sourceQuestContent: N,
                    });
            },
            afterRequest: (e) => {
                k.stopAnimation(), D(e);
            },
        }),
        H = () => {
            A(),
                (0, m.V$)(
                    { quest: n },
                    {
                        content: E.jn.CONNECTIONS_MODAL,
                        ctaContent: p.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                        impressionId: j,
                        sourceQuestContent: N,
                    },
                );
        },
        Y = () =>
            G
                ? (0, r.jsx)(u.ua7, {
                      "aria-label": n.config.messages.gameTitle,
                      text: () =>
                          (0, r.jsxs)("div", {
                              className: T.tooltip,
                              children: [
                                  (0, r.jsx)(u.Text, {
                                      variant: "text-sm/medium",
                                      children: n.config.messages.gameTitle,
                                  }),
                                  (0, r.jsx)(u.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: I.intl.string(I.t.STpNEB),
                                  }),
                              ],
                          }),
                      children: (e) =>
                          (0, r.jsx)(
                              "img",
                              R(C({}, e), {
                                  className: T.gameTile,
                                  alt: n.config.messages.gameTitle,
                                  src: (0, b.fh)(n, b.eC.GAME_TILE, Z).url,
                              }),
                          ),
                  })
                : null;
    return (0, r.jsxs)(u.Y0X, {
        transitionState: y,
        size: u.CgR.DYNAMIC,
        className: T.modalRoot,
        parentComponent: "QuestConsoleConnectionErrorsModal",
        children: [
            (0, r.jsxs)(u.xBx, {
                direction: f.Z.Direction.VERTICAL,
                separator: !1,
                className: T.modalHeader,
                children: [
                    (0, r.jsxs)("div", {
                        className: T.modalTop,
                        children: [
                            (0, r.jsx)("div", {
                                className: T.iconFrame,
                                children: (0, r.jsx)("img", {
                                    className: T.icon,
                                    alt: "",
                                    src: S,
                                }),
                            }),
                            (0, r.jsx)(u.olH, {
                                className: T.closeBtn,
                                onClick: A,
                            }),
                        ],
                    }),
                    (0, r.jsx)(u.X6q, {
                        variant: "heading-xl/bold",
                        children: I.intl.string(I.t.W5lmKi),
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        className: T.upperBodyText,
                        children: x.message,
                    }),
                ],
            }),
            (0, r.jsxs)(u.hzk, {
                className: T.modalContent,
                children: [
                    (0, r.jsxs)("div", {
                        className: T.contentHeader,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: I.intl.string(I.t["+/hZMz"]),
                            }),
                            (0, r.jsxs)(u.P3F, {
                                className: o()(T.refreshWrapper, { [T.disabled]: F }),
                                onClick: V,
                                children: [
                                    k.render(),
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: "currentColor",
                                        className: T.colorTransition,
                                        children: I.intl.string(I.t.wzzjk5),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: T.accountsWrapper,
                        children: [
                            (0, r.jsx)(w, {
                                icon: (0, r.jsx)(u.pzj, { size: "sm" }),
                                text: I.intl.string(I.t.br3uIi),
                            }),
                            (0, r.jsx)(w, {
                                icon: (0, r.jsx)(u.iWm, { size: "sm" }),
                                text: I.intl.string(I.t.XF4wuL),
                                errors: G ? void 0 : U.map((e) => e.message),
                                gameTile: Y(),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(u.mzw, {
                className: T.footer,
                children: [
                    (0, r.jsx)(c.zx, {
                        size: c.Ph.MIN,
                        onClick: A,
                        className: T.footerCloseButton,
                        children: I.intl.string(I.t.cpT0Cg),
                    }),
                    (0, r.jsx)(u.zxk, {
                        variant: "secondary",
                        text: I.intl.string(I.t["qiS+xs"]),
                        onClick: H,
                    }),
                ],
            }),
        ],
    });
}
function w(e) {
    let { icon: t, text: n, errors: i = [], gameTile: a } = e,
        s = i.length > 0,
        l = s ? u._3e : u.B_b;
    return (0, r.jsxs)("div", {
        className: T.connectionRow,
        children: [
            (0, r.jsxs)("div", {
                className: o()(T.connectionRowHeader, { [T.connectionRowHeaderError]: s }),
                children: [
                    (0, r.jsxs)("div", {
                        className: T.connectionRowHeaderContent,
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
                        className: T.connectionRowHeaderContent,
                        children: [
                            a,
                            (0, r.jsx)(l, {
                                color: "currentColor",
                                size: "sm",
                                className: o()({
                                    [T.success]: !s,
                                    [T.error]: s,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: T.errorsContainer,
                children: i.map((e) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: T.errorRow,
                            children: [
                                (0, r.jsx)(u.aNP, {
                                    size: "sm",
                                    color: "currentColor",
                                    className: T.error,
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
function D(e) {
    (0, u.ZDy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
        return function (n) {
            return (0, r.jsx)(y.A, {
                overrideVisibility: !0,
                questOrQuests: e.quest,
                questContent: E.jn.CONNECTIONS_MODAL,
                sourceQuestContent: e.sourceQuestContent,
                children: () => (0, r.jsx)(t, C({}, n, e)),
            });
        };
    });
}
