n.d(t, { Z: () => er }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(21890),
    l = n(481743),
    c = n(747732),
    u = n(38581),
    d = n(391767),
    f = n(374470),
    p = n(793030),
    _ = n(442837),
    m = n(481060),
    h = n(912332),
    g = n(588529),
    E = n(23750),
    b = n(626135),
    y = n(515970),
    O = n(324060),
    v = n(830960),
    S = n(5888),
    I = n(564756),
    T = n(518650),
    A = n(989392),
    C = n(193869),
    N = n(639949),
    P = n(77691),
    R = n(225466),
    w = n(2835),
    D = n(225055),
    x = n(391876),
    L = n(410853),
    j = n(425196),
    M = n(860277),
    k = n(118045),
    U = n(221558),
    G = n(360469),
    Z = n(741549),
    B = n(271268),
    F = n(626698),
    V = n(612776),
    H = n(981631),
    Y = n(231338),
    W = n(140939),
    K = n(388032),
    z = n(691446),
    q = n(417788);
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
function X(e) {
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
function $(e, t) {
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
let ee = async (e, t, n) => {
    let { withMessage: r } = t;
    await (0, y.Jm)(e, { withMessage: r }, n), (0, h.mc)();
};
function et(e, t) {
    return i.useMemo(() => {
        let n = v.F[null != t ? t : V._n.ONE];
        return e === V.yD.END ? n : $(X({}, v.E[e]), { backgroundOverlayColor: n.backgroundOverlayColor });
    }, [t, e]);
}
function en(e) {
    return V.ij[e].toLowerCase();
}
function er(e) {
    let { onClose: t } = e,
        n = (0, T.Z)(),
        a = (0, I.Z)(),
        [h, E] = i.useState(0),
        y = a[h],
        v = V.bq[y],
        x = et(v, (0, _.e7)([S.Z], () => S.Z.getCheckpointData()).cardId),
        q = (0, m.dQu)(x.primaryColor).hex(),
        [Q] = i.useState(new C.EP()),
        [X, J] = i.useState(!1),
        $ = (0, A.T)(d.Z),
        ee = (0, A.T)(u.Z),
        er = (0, A.T)(s.Z),
        ea = (0, A.T)(l.Z),
        eo = (0, A.T)(c.Z),
        es = i.useRef(V.ij.WELCOME),
        el = i.useCallback(() => {
            J(!0), ee();
        }, [ee]),
        ec = i.useCallback(() => {
            y === V.ij.END_CLAIM ? er() : y === V.ij.END_REWARD ? eo() : V.Kz.has(y) || ea();
        }, [y, er, ea, eo]),
        eu = i.useCallback(() => {
            if (h >= a.length - 1) return void el();
            ec(), E(h + 1);
        }, [el, ec, h, a.length]);
    i.useEffect(() => {
        b.default.track(H.rMx.CHECKPOINT_STEP_VIEWED, { step_name: en(y) }),
            (es.current = y),
            y === V.ij.END_SUMMARY && g.ZP.fireSurveyAction("checkpoint_completed");
    }, [y]);
    let ed = i.useCallback(() => {
        y !== V.ij.WELCOME && (ec(), E(h - 1));
    }, [y, ec, h]);
    i.useEffect(() => {
        let e = (e) => {
            (0, f.kK)(e.target, HTMLTextAreaElement) ||
                (0, f.kK)(e.target, HTMLInputElement) ||
                ("ArrowRight" === e.key ? eu() : "ArrowLeft" === e.key && ed());
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [ed, eu]),
        i.useEffect(
            () => (
                $(),
                () => {
                    b.default.track(H.rMx.CHECKPOINT_CLOSED, { step_name: en(es.current) });
                }
            ),
            [],
        );
    let ef = i.useCallback(
            (e) => {
                var t;
                let [n] =
                        null !=
                        (t = Object.entries(V.bq).find((t) => {
                            let [n, r] = t;
                            return r === e;
                        }))
                            ? t
                            : [],
                    r = Number.parseInt(null != n ? n : "0");
                ec(), E(r);
            },
            [ec],
        ),
        ep = i.useCallback(() => {
            X && t();
        }, [X, t]);
    return (0, r.jsx)(C.$r.Provider, {
        value: Q,
        children: (0, r.jsx)(O.Q.Provider, {
            value: x,
            children: (0, r.jsx)(m.f6W, {
                theme: Y.BR.DARKER,
                children: (e) =>
                    (0, r.jsxs)(P.Z, {
                        playEntryAnimation: n,
                        isLeaving: X,
                        onRest: ep,
                        children: [
                            (0, r.jsx)(p.OUJ, {}),
                            (0, r.jsxs)("div", {
                                className: o()(z.container, e),
                                "aria-label": K.intl.string(W.default["CdU/PF"]),
                                children: [
                                    (0, r.jsx)(C.ZP, { slide: v }),
                                    (0, r.jsxs)(D.ZP, {
                                        activeSlide: v,
                                        children: [
                                            (0, r.jsx)(m.Mi4, {
                                                id: V.yD.WELCOME,
                                                children: (0, r.jsx)(F.Z, { onNextStep: eu }),
                                            }),
                                            (0, r.jsx)(m.Mi4, {
                                                id: V.yD.MESSAGES,
                                                children: (0, r.jsx)(G.Z, {}),
                                            }),
                                            (0, r.jsx)(m.Mi4, {
                                                id: V.yD.EMOJIS,
                                                children: (0, r.jsx)(L.Z, {}),
                                            }),
                                            (0, r.jsx)(m.Mi4, {
                                                id: V.yD.VOICE,
                                                children: (0, r.jsx)(B.Z, {}),
                                            }),
                                            (0, r.jsx)(m.Mi4, {
                                                id: V.yD.GUILDS,
                                                children: (0, r.jsx)(U.Z, {}),
                                            }),
                                            (0, r.jsx)(m.Mi4, {
                                                id: V.yD.FRIENDS,
                                                children: (0, r.jsx)(M.Z, {
                                                    step: y,
                                                    onNextStep: eu,
                                                    onPreviousStep: ed,
                                                }),
                                            }),
                                            (0, r.jsx)(m.Mi4, {
                                                id: V.yD.GAMING,
                                                children: (0, r.jsx)(k.Z, {}),
                                            }),
                                            (0, r.jsx)(m.Mi4, {
                                                id: V.yD.QUESTS,
                                                children: (0, r.jsx)(Z.Z, {}),
                                            }),
                                            (0, r.jsx)(m.Mi4, {
                                                id: V.yD.END,
                                                children: (0, r.jsx)(j.Z, {
                                                    step: y,
                                                    onNext: eu,
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: o()(z.header, e),
                                        children: [
                                            v !== V.yD.WELCOME &&
                                                (0, r.jsxs)("div", {
                                                    className: z.logo,
                                                    children: [
                                                        (0, r.jsx)(m.gw7, {
                                                            colorClass: z.iconColor,
                                                            color: q,
                                                        }),
                                                        (0, r.jsx)(m.Text, {
                                                            variant: "display-sm",
                                                            className: z.logoText,
                                                            style: { color: q },
                                                            children: K.intl.string(W.default["CdU/PF"]),
                                                        }),
                                                    ],
                                                }),
                                            (0, r.jsx)(w.Z, {
                                                activeSlide: v,
                                                setActiveSlide: ef,
                                                className: z.stepIndicator,
                                                color: q,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: z.actions,
                                                children: [
                                                    (0, r.jsx)(R.Z, {}),
                                                    (0, r.jsx)(m.P3F, {
                                                        onClick: () => el(),
                                                        className: z.closeButton,
                                                        style: { color: q },
                                                        children: (0, r.jsx)(m.Uz9, {
                                                            colorClass: z.iconColor,
                                                            color: q,
                                                            size: "sm",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    v !== V.yD.WELCOME &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(m.P3F, {
                                                    onClick: ed,
                                                    className: z.backButton,
                                                    style: { borderColor: q },
                                                    children: (0, r.jsx)(m.j9r, {
                                                        colorClass: z.iconColor,
                                                        color: q,
                                                    }),
                                                }),
                                                y !== V.ij.END_REWARD &&
                                                    y !== V.ij.END_SUMMARY &&
                                                    (0, r.jsx)(N.Z, {
                                                        onClick: eu,
                                                        contentClassName: z.nextButtonContent,
                                                        className: z.nextButton,
                                                        muteSound: !0,
                                                        children: (0, r.jsx)(m.d4D, {
                                                            colorClass: z.iconColor,
                                                            color: q,
                                                        }),
                                                    }),
                                                y === V.ij.END_SUMMARY && (0, r.jsx)(ei, { primaryColor: q }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, r.jsx)(p.OUJ, {}),
                        ],
                    }),
            }),
        }),
    });
}
function ei(e) {
    let { primaryColor: t } = e,
        n = (0, _.e7)([S.Z], () => S.Z.getCheckpointData()),
        i = () => {
            let e = new E.ZP({
                content: "",
                components: [
                    {
                        type: 20,
                        checkpointData: { cardId: n.cardId },
                    },
                ],
            });
            (0, h.l8)({
                message: e,
                source: "checkpoint",
                customSendHandler: ee,
            });
        };
    return (0, r.jsxs)(N.Z, {
        onClick: i,
        className: z.shareButton,
        children: [
            (0, r.jsx)(x.Z, {
                variant: "eyebrow",
                className: z.buttonCTA,
                style: { color: t },
                children: K.intl.string(K.t.RDE0Sc),
            }),
            (0, r.jsx)(m.Gr1, {
                colorClass: q.iconColor,
                color: t,
            }),
        ],
    });
}
