n.d(t, {
    default: () => S,
    y: () => w,
}),
    n(388685);
var r = n(951288),
    s = n(647438),
    o = n(120356),
    a = n.n(o),
    i = n(442837),
    l = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(607070),
    p = n(600164),
    m = n(210887),
    g = n(617136),
    f = n(915750),
    x = n(509212),
    h = n(113434),
    b = n(497505),
    _ = n(475595),
    j = n(667105),
    v = n(981631),
    C = n(388032),
    y = n(301889),
    E = n(708901);
function O(e) {
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
function S(e) {
    var t;
    let { questId: n, errorHints: o, transitionState: S, onClose: w, sourceQuestContent: P } = e,
        A = (0, h.sf)(n);
    null == A && w();
    let [N, R] = (0, s.useState)(o),
        B = (0, h.KX)(),
        k = (0, g.O5)(),
        q = null == (t = (0, f.WD)()) ? void 0 : t.getId(),
        I = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
        Q = (0, j.g2)({
            useReducedMotion: I,
            className: y.colorTransition,
        }),
        D = N.filter((e) => ["xbox", "playstation"].includes(e.connected_account_type)),
        V = (0, x.Bz)(A),
        M = (0, i.e7)([m.Z], () => m.Z.getState().theme),
        L = (0, l.wj)(M) ? v.BRd.DARK : v.BRd.LIGHT,
        { startConsoleQuest: W, startingConsoleQuest: Z } = (0, h.GI)({
            questId: A.id,
            beforeRequest: () => {
                Q.startAnimation(),
                    k({
                        questId: A.id,
                        questContent: b.jn.CONNECTIONS_MODAL,
                        questContentCTA: g.jZ.DEFIBRILLATOR,
                        sourceQuestContent: P,
                    });
            },
            afterRequest: (e) => {
                Q.stopAnimation(), R(e);
            },
        });
    return (0, r.jsxs)(u.Y0X, {
        transitionState: S,
        size: u.CgR.DYNAMIC,
        className: y.modalRoot,
        parentComponent: "QuestConsoleConnectionErrorsModal",
        children: [
            (0, r.jsxs)(u.xBx, {
                direction: p.Z.Direction.VERTICAL,
                separator: !1,
                className: y.modalHeader,
                children: [
                    (0, r.jsxs)("div", {
                        className: y.modalTop,
                        children: [
                            (0, r.jsx)("div", {
                                className: y.iconFrame,
                                children: (0, r.jsx)("img", {
                                    className: y.icon,
                                    alt: "",
                                    src: E,
                                }),
                            }),
                            (0, r.jsx)(u.olH, {
                                className: y.closeBtn,
                                onClick: w,
                            }),
                        ],
                    }),
                    (0, r.jsx)(u.X6q, {
                        variant: "heading-xl/bold",
                        children: C.intl.string(C.t.W5lmKi),
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        className: y.upperBodyText,
                        children: B.message,
                    }),
                ],
            }),
            (0, r.jsxs)(u.hzk, {
                className: y.modalContent,
                children: [
                    (0, r.jsxs)("div", {
                        className: y.contentHeader,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: C.intl.string(C.t["+/hZMz"]),
                            }),
                            (0, r.jsxs)(u.P3F, {
                                className: a()(y.refreshWrapper, { [y.disabled]: Z }),
                                onClick: W,
                                children: [
                                    Q.render(),
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: "currentColor",
                                        className: y.colorTransition,
                                        children: C.intl.string(C.t.wzzjk5),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: y.accountsWrapper,
                        children: [
                            (0, r.jsx)(T, {
                                icon: (0, r.jsx)(u.pzj, { size: "sm" }),
                                text: C.intl.string(C.t.br3uIi),
                            }),
                            (0, r.jsx)(T, {
                                icon: (0, r.jsx)(u.iWm, { size: "sm" }),
                                text: C.intl.string(C.t.XF4wuL),
                                errors: V ? void 0 : D.map((e) => e.message),
                                gameTile: V
                                    ? (0, r.jsx)(u.ua7, {
                                          "aria-label": A.config.messages.gameTitle,
                                          text: () =>
                                              (0, r.jsxs)("div", {
                                                  className: y.tooltip,
                                                  children: [
                                                      (0, r.jsx)(u.Text, {
                                                          variant: "text-sm/medium",
                                                          children: A.config.messages.gameTitle,
                                                      }),
                                                      (0, r.jsx)(u.Text, {
                                                          variant: "text-xs/normal",
                                                          color: "text-muted",
                                                          children: C.intl.string(C.t.STpNEB),
                                                      }),
                                                  ],
                                              }),
                                          children: (e) => {
                                              var t, n;
                                              return (0, r.jsx)(
                                                  "img",
                                                  ((t = O({}, e)),
                                                  (n = n =
                                                      {
                                                          className: y.gameTile,
                                                          alt: A.config.messages.gameTitle,
                                                          src: (0, _.fh)(A, _.eC.GAME_TILE, L).url,
                                                      }),
                                                  Object.getOwnPropertyDescriptors
                                                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                      : (function (e, t) {
                                                            var n = Object.keys(e);
                                                            if (Object.getOwnPropertySymbols) {
                                                                var r = Object.getOwnPropertySymbols(e);
                                                                n.push.apply(n, r);
                                                            }
                                                            return n;
                                                        })(Object(n)).forEach(function (e) {
                                                            Object.defineProperty(
                                                                t,
                                                                e,
                                                                Object.getOwnPropertyDescriptor(n, e),
                                                            );
                                                        }),
                                                  t),
                                              );
                                          },
                                      })
                                    : null,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(u.mzw, {
                className: y.footer,
                children: [
                    (0, r.jsx)(c.zx, {
                        size: c.Ph.MIN,
                        onClick: w,
                        className: y.footerCloseButton,
                        children: C.intl.string(C.t.cpT0Cg),
                    }),
                    (0, r.jsx)(u.zxk, {
                        variant: "secondary",
                        text: C.intl.string(C.t["qiS+xs"]),
                        onClick: () => {
                            w(),
                                (0, x.V$)(
                                    { quest: A },
                                    {
                                        content: b.jn.CONNECTIONS_MODAL,
                                        ctaContent: g.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                                        impressionId: q,
                                        sourceQuestContent: P,
                                    },
                                );
                        },
                    }),
                ],
            }),
        ],
    });
}
function T(e) {
    let { icon: t, text: n, errors: s = [], gameTile: o } = e,
        i = s.length > 0,
        l = i ? u._3e : u.B_b;
    return (0, r.jsxs)("div", {
        className: y.connectionRow,
        children: [
            (0, r.jsxs)("div", {
                className: a()(y.connectionRowHeader, { [y.connectionRowHeaderError]: i }),
                children: [
                    (0, r.jsxs)("div", {
                        className: y.connectionRowHeaderContent,
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
                        className: y.connectionRowHeaderContent,
                        children: [
                            o,
                            (0, r.jsx)(l, {
                                color: "currentColor",
                                size: "sm",
                                className: a()({
                                    [y.success]: !i,
                                    [y.error]: i,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: y.errorsContainer,
                children: s.map((e) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: y.errorRow,
                            children: [
                                (0, r.jsx)(u.aNP, {
                                    size: "sm",
                                    color: "currentColor",
                                    className: y.error,
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
        return (n) => (0, r.jsx)(t, O({}, n, e));
    });
}
