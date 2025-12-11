n.d(t, { Z: () => ei }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(16789),
    l = n(594931),
    c = n(556924),
    u = n(896880),
    d = n(322958),
    f = n(547943),
    p = n(374470),
    _ = n(793030),
    m = n(442837),
    h = n(481060),
    g = n(912332),
    E = n(588529),
    b = n(23750),
    y = n(626135),
    O = n(515970),
    v = n(324060),
    S = n(830960),
    I = n(5888),
    T = n(564756),
    C = n(518650),
    A = n(989392),
    N = n(193869),
    P = n(639949),
    R = n(77691),
    w = n(225466),
    D = n(2835),
    x = n(225055),
    L = n(391876),
    j = n(410853),
    M = n(425196),
    k = n(860277),
    U = n(118045),
    G = n(221558),
    Z = n(360469),
    B = n(741549),
    F = n(271268),
    V = n(626698),
    H = n(612776),
    Y = n(981631),
    W = n(231338),
    K = n(547081),
    z = n(388032),
    q = n(756916),
    Q = n(554445);
function X(e, t, n) {
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
function J(e) {
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
                X(e, t, n[t]);
            });
    }
    return e;
}
function $(e, t) {
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
            : $(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let et = async (e, t, n) => {
    let { withMessage: r } = t;
    await (0, O.Jm)(e, { withMessage: r }, n), (0, g.mc)();
};
function en(e, t) {
    return i.useMemo(() => {
        let n = S.F[null != t ? t : H._n.ONE];
        return e === H.yD.END ? n : ee(J({}, S.E[e]), { backgroundOverlayColor: n.backgroundOverlayColor });
    }, [t, e]);
}
function er(e) {
    return H.ij[e].toLowerCase();
}
function ei(e) {
    let { onClose: t } = e,
        n = (0, C.Z)(),
        a = (0, T.Z)(),
        [g, b] = i.useState(0),
        S = a[g],
        L = H.bq[S],
        Q = en(L, (0, m.e7)([I.Z], () => I.Z.getCheckpointData()).cardId),
        X = (0, h.dQu)(Q.primaryColor).hex(),
        [J] = i.useState(new N.EP()),
        [$, ee] = i.useState(!1),
        et = (0, A.T)(d.Z),
        ei = (0, A.T)(u.Z),
        eo = (0, A.T)(s.Z),
        es = (0, A.T)(l.Z),
        el = (0, A.T)(c.Z),
        ec = i.useRef(H.ij.WELCOME),
        eu = i.useCallback(() => {
            ee(!0), ei();
        }, [ei]),
        ed = i.useCallback(() => {
            S === H.ij.END_CLAIM ? eo() : S === H.ij.END_REWARD ? el() : H.Kz.has(S) || es();
        }, [S, eo, es, el]),
        ef = i.useCallback(() => {
            if (g >= a.length - 1) return void eu();
            ed(), b(g + 1);
        }, [eu, ed, g, a.length]);
    i.useEffect(() => {
        y.default.track(Y.rMx.CHECKPOINT_STEP_VIEWED, { step_name: er(S) }),
            (ec.current = S),
            S === H.ij.END_SUMMARY && E.ZP.fireSurveyAction(f.Y.CHECKPOINT_COMPLETED);
    }, [S]);
    let ep = i.useCallback(() => {
        S !== H.ij.WELCOME && (ed(), b(g - 1));
    }, [S, ed, g]);
    i.useEffect(() => {
        let e = (e) => {
            (0, p.kK)(e.target, HTMLTextAreaElement) ||
                (0, p.kK)(e.target, HTMLInputElement) ||
                ("ArrowRight" === e.key ? ef() : "ArrowLeft" === e.key && ep());
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [ep, ef]),
        i.useEffect(
            () => (
                et(),
                () => {
                    y.default.track(Y.rMx.CHECKPOINT_CLOSED, { step_name: er(ec.current) });
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
                            return H.bq[r] === e;
                        }))
                            ? t
                            : [],
                    r = Number.parseInt(null != n ? n : "0");
                ed(), b(r);
            },
            [ed, a],
        ),
        em = i.useCallback(() => {
            $ && ((0, O.R5)(), t());
        }, [$, t]);
    return (0, r.jsx)(N.$r.Provider, {
        value: J,
        children: (0, r.jsx)(v.Q.Provider, {
            value: Q,
            children: (0, r.jsx)(h.f6W, {
                theme: W.BR.DARKER,
                children: (e) =>
                    (0, r.jsxs)(R.Z, {
                        playEntryAnimation: n,
                        isLeaving: $,
                        onRest: em,
                        children: [
                            (0, r.jsx)(_.OUJ, {}),
                            (0, r.jsxs)("div", {
                                className: o()(q.container, e),
                                "aria-label": z.intl.string(K.default["CdU/PF"]),
                                children: [
                                    (0, r.jsx)(N.ZP, { slide: L }),
                                    (0, r.jsxs)(x.ZP, {
                                        activeSlide: L,
                                        children: [
                                            (0, r.jsx)(h.Mi4, {
                                                id: H.yD.WELCOME,
                                                children: (0, r.jsx)(V.Z, { onNextStep: ef }),
                                            }),
                                            (0, r.jsx)(h.Mi4, {
                                                id: H.yD.MESSAGES,
                                                children: (0, r.jsx)(Z.Z, {}),
                                            }),
                                            (0, r.jsx)(h.Mi4, {
                                                id: H.yD.EMOJIS,
                                                children: (0, r.jsx)(j.Z, {}),
                                            }),
                                            (0, r.jsx)(h.Mi4, {
                                                id: H.yD.VOICE,
                                                children: (0, r.jsx)(F.Z, {}),
                                            }),
                                            (0, r.jsx)(h.Mi4, {
                                                id: H.yD.GUILDS,
                                                children: (0, r.jsx)(G.Z, {}),
                                            }),
                                            (0, r.jsx)(h.Mi4, {
                                                id: H.yD.FRIENDS,
                                                children: (0, r.jsx)(k.Z, {
                                                    step: S,
                                                    onNextStep: ef,
                                                    onPreviousStep: ep,
                                                }),
                                            }),
                                            (0, r.jsx)(h.Mi4, {
                                                id: H.yD.GAMING,
                                                children: (0, r.jsx)(U.Z, {}),
                                            }),
                                            (0, r.jsx)(h.Mi4, {
                                                id: H.yD.QUESTS,
                                                children: (0, r.jsx)(B.Z, {}),
                                            }),
                                            (0, r.jsx)(h.Mi4, {
                                                id: H.yD.END,
                                                children: (0, r.jsx)(M.Z, {
                                                    step: S,
                                                    onNext: ef,
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: o()(q.header, e),
                                        children: [
                                            L !== H.yD.WELCOME &&
                                                (0, r.jsxs)("div", {
                                                    className: q.logo,
                                                    children: [
                                                        (0, r.jsx)(h.gw7, {
                                                            colorClass: q.iconColor,
                                                            color: X,
                                                        }),
                                                        (0, r.jsx)(h.Text, {
                                                            variant: "display-sm",
                                                            className: q.logoText,
                                                            style: { color: X },
                                                            children: z.intl.string(K.default["CdU/PF"]),
                                                        }),
                                                    ],
                                                }),
                                            (0, r.jsx)(D.Z, {
                                                activeSlide: L,
                                                setActiveSlide: e_,
                                                className: q.stepIndicator,
                                                color: X,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: q.actions,
                                                children: [
                                                    (0, r.jsx)(w.Z, {}),
                                                    (0, r.jsx)(h.P3F, {
                                                        onClick: () => eu(),
                                                        className: q.closeButton,
                                                        style: { color: X },
                                                        children: (0, r.jsx)(h.Uz9, {
                                                            colorClass: q.iconColor,
                                                            color: X,
                                                            size: "sm",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    L !== H.yD.WELCOME &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(h.P3F, {
                                                    onClick: ep,
                                                    className: q.backButton,
                                                    style: { borderColor: X },
                                                    children: (0, r.jsx)(h.j9r, {
                                                        colorClass: q.iconColor,
                                                        color: X,
                                                    }),
                                                }),
                                                S !== H.ij.END_REWARD &&
                                                    S !== H.ij.END_SUMMARY &&
                                                    (0, r.jsx)(P.Z, {
                                                        onClick: ef,
                                                        contentClassName: q.nextButtonContent,
                                                        className: q.nextButton,
                                                        muteSound: !0,
                                                        children: (0, r.jsx)(h.d4D, {
                                                            colorClass: q.iconColor,
                                                            color: X,
                                                        }),
                                                    }),
                                                S === H.ij.END_SUMMARY && (0, r.jsx)(ea, { primaryColor: X }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, r.jsx)(_.OUJ, {}),
                        ],
                    }),
            }),
        }),
    });
}
function ea(e) {
    let { primaryColor: t } = e,
        n = (0, m.e7)([I.Z], () => I.Z.getCheckpointData()),
        i = () => {
            let e = new b.ZP({
                content: "",
                components: [
                    {
                        type: 20,
                        checkpointData: { cardId: n.cardId },
                    },
                ],
            });
            (0, g.l8)({
                message: e,
                source: "checkpoint",
                customSendHandler: et,
            });
        };
    return (0, r.jsxs)(P.Z, {
        onClick: i,
        className: q.shareButton,
        children: [
            (0, r.jsx)(L.Z, {
                variant: "eyebrow",
                className: q.buttonCTA,
                style: { color: t },
                children: z.intl.string(z.t.RDE0Sc),
            }),
            (0, r.jsx)(h.Gr1, {
                colorClass: Q.iconColor,
                color: t,
            }),
        ],
    });
}
