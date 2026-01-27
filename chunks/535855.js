n.d(t, {
    A: () => $,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(745669),
    o = n(183766),
    c = n(801148),
    u = n(772350),
    d = n(992234),
    m = n(517846),
    f = n(621466),
    p = n(158954),
    h = n(311907),
    b = n(397927),
    g = n(294454),
    x = n(236698),
    y = n(383233),
    v = n(954571),
    j = n(796104),
    C = n(854987),
    _ = n(222713),
    A = n(719718),
    O = n(101492),
    E = n(96533),
    S = n(181380),
    N = n(771273),
    I = n(612082),
    P = n(454993),
    w = n(753036),
    T = n(879815),
    R = n(182417),
    L = n(877272),
    D = n(511297),
    k = n(531502),
    M = n(480310),
    H = n(798400),
    U = n(16293),
    F = n(384137),
    G = n(594678),
    V = n(209973),
    B = n(293843),
    W = n(532294),
    z = n(652215),
    K = n(818348),
    Z = n(622865),
    Y = n(985018),
    q = n(778007),
    X = n(308021);
let Q = async (e, t, n) => {
    let { withMessage: r } = t;
    await (0, j.cJ)(
        e,
        {
            withMessage: r,
        },
        n,
    ),
        (0, g.Be)();
};

function J(e) {
    return W.Wf[e].toLowerCase();
}

function $(e) {
    var t;
    let { onClose: n } = e,
        a = (0, E.A)(),
        g = (0, O.A)(),
        [y, L] = l.useState(0),
        X = g[y],
        Q = W.jS[X],
        $ =
            ((t = (0, h.bG)([A.A], () => A.A.getCheckpointData()).cardId),
            l.useMemo(() => {
                var e, n;
                let r = _.f[null != t ? t : W.c8.ONE];
                return Q === W.P7.END
                    ? r
                    : ((e = (function (e) {
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
                      })({}, _.g[Q])),
                      (n = n =
                          {
                              backgroundOverlayColor: r.backgroundOverlayColor,
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            }),
                      e);
            }, [t, Q])),
        et = (0, b.rdh)($.primaryColor).hex(),
        [en] = l.useState(new N.B4()),
        [er, el] = l.useState(!1),
        ea = (0, S.V)(d.A),
        ei = (0, S.V)(u.A),
        es = (0, S.V)(s.A),
        eo = (0, S.V)(o.A),
        ec = (0, S.V)(c.A),
        eu = l.useRef(W.Wf.WELCOME),
        ed = l.useCallback(() => {
            el(!0), ei();
        }, [ei]),
        em = l.useCallback(() => {
            X === W.Wf.END_CLAIM ? es() : X === W.Wf.END_REWARD ? ec() : W.eg.has(X) || eo();
        }, [X, es, eo, ec]),
        ef = l.useCallback(() => {
            y >= g.length - 1 ? ed() : (em(), L(y + 1));
        }, [ed, em, y, g.length]);
    l.useEffect(() => {
        v.default.track(z.HAw.CHECKPOINT_STEP_VIEWED, {
            step_name: J(X),
        }),
            (eu.current = X),
            X === W.Wf.END_SUMMARY && x.Ay.fireSurveyAction(m.w.CHECKPOINT_COMPLETED);
    }, [X]);
    let ep = l.useCallback(() => {
        X !== W.Wf.WELCOME && (em(), L(y - 1));
    }, [X, em, y]);
    l.useEffect(() => {
        let e = (e) => {
            (0, f.vq)(e.target, HTMLTextAreaElement) ||
                (0, f.vq)(e.target, HTMLInputElement) ||
                ("ArrowRight" === e.key ? ef() : "ArrowLeft" === e.key && ep());
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [ep, ef]),
        l.useEffect(
            () => (
                ea(),
                () => {
                    v.default.track(z.HAw.CHECKPOINT_CLOSED, {
                        step_name: J(eu.current),
                    });
                }
            ),
            [],
        );
    let eh = l.useCallback(
            (e) => {
                var t;
                let [n] =
                        null !=
                        (t = Object.entries(g).find((t) => {
                            let [n, r] = t;
                            return W.jS[r] === e;
                        }))
                            ? t
                            : [],
                    r = Number.parseInt(null != n ? n : "0");
                em(), L(r);
            },
            [em, g],
        ),
        eb = l.useCallback(() => {
            er && ((0, j.hv)(), n());
        }, [er, n]);
    return (0, r.jsx)(N.GD.Provider, {
        value: en,
        children: (0, r.jsx)(C.P.Provider, {
            value: $,
            children: (0, r.jsx)(b.NPJ, {
                theme: K.NJ.DARKER,
                children: (e) =>
                    (0, r.jsxs)(P.A, {
                        playEntryAnimation: a,
                        isLeaving: er,
                        onRest: eb,
                        children: [
                            (0, r.jsx)(p.Utq, {}),
                            (0, r.jsxs)("div", {
                                className: i()(q.kL, e),
                                "aria-label": Y.intl.string(Z.default["CdU/PF"]),
                                children: [
                                    (0, r.jsx)(N.Ay, {
                                        slide: Q,
                                    }),
                                    (0, r.jsxs)(R.Ay, {
                                        activeSlide: Q,
                                        children: [
                                            (0, r.jsx)(b.q7S, {
                                                id: W.P7.WELCOME,
                                                children: (0, r.jsx)(B.A, {
                                                    onNextStep: ef,
                                                }),
                                            }),
                                            (0, r.jsx)(b.q7S, {
                                                id: W.P7.MESSAGES,
                                                children: (0, r.jsx)(F.A, {}),
                                            }),
                                            (0, r.jsx)(b.q7S, {
                                                id: W.P7.EMOJIS,
                                                children: (0, r.jsx)(D.A, {}),
                                            }),
                                            (0, r.jsx)(b.q7S, {
                                                id: W.P7.VOICE,
                                                children: (0, r.jsx)(V.A, {}),
                                            }),
                                            (0, r.jsx)(b.q7S, {
                                                id: W.P7.GUILDS,
                                                children: (0, r.jsx)(U.A, {}),
                                            }),
                                            (0, r.jsx)(b.q7S, {
                                                id: W.P7.FRIENDS,
                                                children: (0, r.jsx)(M.A, {
                                                    step: X,
                                                    onNextStep: ef,
                                                    onPreviousStep: ep,
                                                }),
                                            }),
                                            (0, r.jsx)(b.q7S, {
                                                id: W.P7.GAMING,
                                                children: (0, r.jsx)(H.A, {}),
                                            }),
                                            (0, r.jsx)(b.q7S, {
                                                id: W.P7.QUESTS,
                                                children: (0, r.jsx)(G.A, {}),
                                            }),
                                            (0, r.jsx)(b.q7S, {
                                                id: W.P7.END,
                                                children: (0, r.jsx)(k.A, {
                                                    step: X,
                                                    onNext: ef,
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: i()(q.wx, e),
                                        children: [
                                            Q !== W.P7.WELCOME &&
                                                (0, r.jsxs)("div", {
                                                    className: q.wm,
                                                    children: [
                                                        (0, r.jsx)(b.pVd, {
                                                            colorClass: q.d7,
                                                            color: et,
                                                        }),
                                                        (0, r.jsx)(b.Text, {
                                                            variant: "display-sm",
                                                            className: q.jF,
                                                            style: {
                                                                color: et,
                                                            },
                                                            children: Y.intl.string(Z.default["CdU/PF"]),
                                                        }),
                                                    ],
                                                }),
                                            (0, r.jsx)(T.A, {
                                                activeSlide: Q,
                                                setActiveSlide: eh,
                                                className: q.cJ,
                                                color: et,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: q.o1,
                                                children: [
                                                    (0, r.jsx)(w.A, {}),
                                                    (0, r.jsx)(b.DUT, {
                                                        onClick: () => ed(),
                                                        className: q.b,
                                                        style: {
                                                            color: et,
                                                        },
                                                        children: (0, r.jsx)(b.d$L, {
                                                            colorClass: q.d7,
                                                            color: et,
                                                            size: "sm",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    Q !== W.P7.WELCOME &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(b.DUT, {
                                                    onClick: ep,
                                                    className: q.Gv,
                                                    style: {
                                                        borderColor: et,
                                                    },
                                                    children: (0, r.jsx)(b.Zge, {
                                                        colorClass: q.d7,
                                                        color: et,
                                                    }),
                                                }),
                                                X !== W.Wf.END_REWARD &&
                                                    X !== W.Wf.END_SUMMARY &&
                                                    (0, r.jsx)(I.A, {
                                                        onClick: ef,
                                                        contentClassName: q.jR,
                                                        className: q.E5,
                                                        muteSound: !0,
                                                        children: (0, r.jsx)(b.KS6, {
                                                            colorClass: q.d7,
                                                            color: et,
                                                        }),
                                                    }),
                                                X === W.Wf.END_SUMMARY &&
                                                    (0, r.jsx)(ee, {
                                                        primaryColor: et,
                                                    }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, r.jsx)(p.Utq, {}),
                        ],
                    }),
            }),
        }),
    });
}

function ee(e) {
    let { primaryColor: t } = e,
        n = (0, h.bG)([A.A], () => A.A.getCheckpointData());
    return (0, r.jsxs)(I.A, {
        onClick: () => {
            let e = new y.Ay({
                content: "",
                components: [
                    {
                        type: 20,
                        checkpointData: {
                            cardId: n.cardId,
                        },
                    },
                ],
            });
            (0, g.fO)({
                message: e,
                source: "checkpoint",
                customSendHandler: Q,
            });
        },
        className: q.OI,
        children: [
            (0, r.jsx)(L.A, {
                variant: "eyebrow",
                className: q.HL,
                style: {
                    color: t,
                },
                children: Y.intl.string(Y.t.RDE0Sc),
            }),
            (0, r.jsx)(b.I9m, {
                colorClass: X.d7,
                color: t,
            }),
        ],
    });
}
