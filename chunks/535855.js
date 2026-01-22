n.d(t, { A: () => ei }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(745669),
    l = n(183766),
    c = n(801148),
    u = n(772350),
    d = n(992234),
    f = n(517846),
    p = n(621466),
    _ = n(158954),
    h = n(311907),
    m = n(397927),
    g = n(294454),
    E = n(236698),
    b = n(383233),
    y = n(954571),
    O = n(796104),
    A = n(854987),
    v = n(222713),
    S = n(719718),
    I = n(101492),
    T = n(96533),
    C = n(181380),
    N = n(771273),
    R = n(612082),
    w = n(454993),
    P = n(753036),
    D = n(879815),
    x = n(182417),
    L = n(877272),
    j = n(511297),
    M = n(531502),
    k = n(480310),
    U = n(798400),
    G = n(16293),
    V = n(384137),
    F = n(594678),
    B = n(209973),
    H = n(293843),
    Y = n(532294),
    W = n(652215),
    K = n(818348),
    z = n(622865),
    q = n(985018),
    X = n(778007),
    Z = n(308021);
function Q(e, t, n) {
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
function $(e) {
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
                Q(e, t, n[t]);
            });
    }
    return e;
}
function J(e, t) {
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
function ee(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : J(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let et = async (e, t, n) => {
    let { withMessage: r } = t;
    await (0, O.cJ)(e, { withMessage: r }, n), (0, g.Be)();
};
function en(e, t) {
    return i.useMemo(() => {
        let n = v.f[null != t ? t : Y.c8.ONE];
        return e === Y.P7.END ? n : ee($({}, v.g[e]), { backgroundOverlayColor: n.backgroundOverlayColor });
    }, [t, e]);
}
function er(e) {
    return Y.Wf[e].toLowerCase();
}
function ei(e) {
    let { onClose: t } = e,
        n = (0, T.A)(),
        a = (0, I.A)(),
        [g, b] = i.useState(0),
        v = a[g],
        L = Y.jS[v],
        Z = en(L, (0, h.bG)([S.A], () => S.A.getCheckpointData()).cardId),
        Q = (0, m.rdh)(Z.primaryColor).hex(),
        [$] = i.useState(new N.B4()),
        [J, ee] = i.useState(!1),
        et = (0, C.V)(d.A),
        ei = (0, C.V)(u.A),
        es = (0, C.V)(o.A),
        eo = (0, C.V)(l.A),
        el = (0, C.V)(c.A),
        ec = i.useRef(Y.Wf.WELCOME),
        eu = i.useCallback(() => {
            ee(!0), ei();
        }, [ei]),
        ed = i.useCallback(() => {
            v === Y.Wf.END_CLAIM ? es() : v === Y.Wf.END_REWARD ? el() : Y.eg.has(v) || eo();
        }, [v, es, eo, el]),
        ef = i.useCallback(() => {
            g >= a.length - 1 ? eu() : (ed(), b(g + 1));
        }, [eu, ed, g, a.length]);
    i.useEffect(() => {
        y.default.track(W.HAw.CHECKPOINT_STEP_VIEWED, { step_name: er(v) }),
            (ec.current = v),
            v === Y.Wf.END_SUMMARY && E.Ay.fireSurveyAction(f.w.CHECKPOINT_COMPLETED);
    }, [v]);
    let ep = i.useCallback(() => {
        v !== Y.Wf.WELCOME && (ed(), b(g - 1));
    }, [v, ed, g]);
    i.useEffect(() => {
        let e = (e) => {
            (0, p.vq)(e.target, HTMLTextAreaElement) ||
                (0, p.vq)(e.target, HTMLInputElement) ||
                ("ArrowRight" === e.key ? ef() : "ArrowLeft" === e.key && ep());
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [ep, ef]),
        i.useEffect(
            () => (
                et(),
                () => {
                    y.default.track(W.HAw.CHECKPOINT_CLOSED, { step_name: er(ec.current) });
                }
            ),
            [],
        );
    let e_ = i.useCallback(
            (e) => {
                var t;
                let [n] =
                        null !=
                        (t = Object.entries(a).find((t) => {
                            let [n, r] = t;
                            return Y.jS[r] === e;
                        }))
                            ? t
                            : [],
                    r = Number.parseInt(null != n ? n : "0");
                ed(), b(r);
            },
            [ed, a],
        ),
        eh = i.useCallback(() => {
            J && ((0, O.hv)(), t());
        }, [J, t]);
    return (0, r.jsx)(N.GD.Provider, {
        value: $,
        children: (0, r.jsx)(A.P.Provider, {
            value: Z,
            children: (0, r.jsx)(m.NPJ, {
                theme: K.NJ.DARKER,
                children: (e) =>
                    (0, r.jsxs)(w.A, {
                        playEntryAnimation: n,
                        isLeaving: J,
                        onRest: eh,
                        children: [
                            (0, r.jsx)(_.Utq, {}),
                            (0, r.jsxs)("div", {
                                className: s()(X.kL, e),
                                "aria-label": q.intl.string(z.default["CdU/PF"]),
                                children: [
                                    (0, r.jsx)(N.Ay, { slide: L }),
                                    (0, r.jsxs)(x.Ay, {
                                        activeSlide: L,
                                        children: [
                                            (0, r.jsx)(m.q7S, {
                                                id: Y.P7.WELCOME,
                                                children: (0, r.jsx)(H.A, { onNextStep: ef }),
                                            }),
                                            (0, r.jsx)(m.q7S, {
                                                id: Y.P7.MESSAGES,
                                                children: (0, r.jsx)(V.A, {}),
                                            }),
                                            (0, r.jsx)(m.q7S, {
                                                id: Y.P7.EMOJIS,
                                                children: (0, r.jsx)(j.A, {}),
                                            }),
                                            (0, r.jsx)(m.q7S, {
                                                id: Y.P7.VOICE,
                                                children: (0, r.jsx)(B.A, {}),
                                            }),
                                            (0, r.jsx)(m.q7S, {
                                                id: Y.P7.GUILDS,
                                                children: (0, r.jsx)(G.A, {}),
                                            }),
                                            (0, r.jsx)(m.q7S, {
                                                id: Y.P7.FRIENDS,
                                                children: (0, r.jsx)(k.A, {
                                                    step: v,
                                                    onNextStep: ef,
                                                    onPreviousStep: ep,
                                                }),
                                            }),
                                            (0, r.jsx)(m.q7S, {
                                                id: Y.P7.GAMING,
                                                children: (0, r.jsx)(U.A, {}),
                                            }),
                                            (0, r.jsx)(m.q7S, {
                                                id: Y.P7.QUESTS,
                                                children: (0, r.jsx)(F.A, {}),
                                            }),
                                            (0, r.jsx)(m.q7S, {
                                                id: Y.P7.END,
                                                children: (0, r.jsx)(M.A, {
                                                    step: v,
                                                    onNext: ef,
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: s()(X.wx, e),
                                        children: [
                                            L !== Y.P7.WELCOME &&
                                                (0, r.jsxs)("div", {
                                                    className: X.wm,
                                                    children: [
                                                        (0, r.jsx)(m.pVd, {
                                                            colorClass: X.d7,
                                                            color: Q,
                                                        }),
                                                        (0, r.jsx)(m.Text, {
                                                            variant: "display-sm",
                                                            className: X.jF,
                                                            style: { color: Q },
                                                            children: q.intl.string(z.default["CdU/PF"]),
                                                        }),
                                                    ],
                                                }),
                                            (0, r.jsx)(D.A, {
                                                activeSlide: L,
                                                setActiveSlide: e_,
                                                className: X.cJ,
                                                color: Q,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: X.o1,
                                                children: [
                                                    (0, r.jsx)(P.A, {}),
                                                    (0, r.jsx)(m.DUT, {
                                                        onClick: () => eu(),
                                                        className: X.b,
                                                        style: { color: Q },
                                                        children: (0, r.jsx)(m.d$L, {
                                                            colorClass: X.d7,
                                                            color: Q,
                                                            size: "sm",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    L !== Y.P7.WELCOME &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(m.DUT, {
                                                    onClick: ep,
                                                    className: X.Gv,
                                                    style: { borderColor: Q },
                                                    children: (0, r.jsx)(m.Zge, {
                                                        colorClass: X.d7,
                                                        color: Q,
                                                    }),
                                                }),
                                                v !== Y.Wf.END_REWARD &&
                                                    v !== Y.Wf.END_SUMMARY &&
                                                    (0, r.jsx)(R.A, {
                                                        onClick: ef,
                                                        contentClassName: X.jR,
                                                        className: X.E5,
                                                        muteSound: !0,
                                                        children: (0, r.jsx)(m.KS6, {
                                                            colorClass: X.d7,
                                                            color: Q,
                                                        }),
                                                    }),
                                                v === Y.Wf.END_SUMMARY && (0, r.jsx)(ea, { primaryColor: Q }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, r.jsx)(_.Utq, {}),
                        ],
                    }),
            }),
        }),
    });
}
function ea(e) {
    let { primaryColor: t } = e,
        n = (0, h.bG)([S.A], () => S.A.getCheckpointData()),
        i = () => {
            let e = new b.Ay({
                content: "",
                components: [
                    {
                        type: 20,
                        checkpointData: { cardId: n.cardId },
                    },
                ],
            });
            (0, g.fO)({
                message: e,
                source: "checkpoint",
                customSendHandler: et,
            });
        };
    return (0, r.jsxs)(R.A, {
        onClick: i,
        className: X.OI,
        children: [
            (0, r.jsx)(L.A, {
                variant: "eyebrow",
                className: X.HL,
                style: { color: t },
                children: q.intl.string(q.t.RDE0Sc),
            }),
            (0, r.jsx)(m.I9m, {
                colorClass: Z.d7,
                color: t,
            }),
        ],
    });
}
