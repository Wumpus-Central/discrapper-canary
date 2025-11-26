n.d(t, {
    P: () => b,
    Z: () => y,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    u = n(607070),
    d = n(70097),
    f = n(626135),
    _ = n(585483),
    p = n(402426),
    h = n(981631),
    m = n(839249),
    g = n(293914),
    E = n(503019);
let b = 1000,
    y = (e) => {
        let { children: t, isConfirmationStep: n, isEligibleForWowMoment: a, shouldPrefetchWowMoment: b } = e,
            y = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
            [O, v] = (0, i.useState)("entry"),
            I = (0, i.useRef)(null),
            T = (0, i.useRef)(null),
            S = (0, i.useCallback)(() => {
                if ("entry" === O && (v("idle"), null != I.current)) {
                    var e;
                    null == (e = I.current) || e.play();
                }
            }, [O]),
            A = (0, i.useCallback)(() => {
                if ("exit" !== O && (v("exit"), null != T.current)) {
                    var e;
                    null == (e = T.current) || e.play();
                }
            }, [O]),
            [C, N] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
            b && N(!0);
        }, [b]);
        let { mediaUrls: R, isSuccess: P } = (0, p.Z)(!y && a && C),
            D = (0, i.useRef)(null),
            [w, L] = (0, i.useState)(!1),
            [x, M] = (0, i.useState)(!1),
            [k, j] = (0, i.useState)("none"),
            [U, G] = (0, i.useState)(!1);
        if (
            ((0, i.useEffect)(() => {
                let e;
                a &&
                    n &&
                    !U &&
                    "none" === k &&
                    (y || !P
                        ? (j("static"),
                          y ||
                              (G(!0),
                              f.default.track(
                                  h.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_NOT_LOADED_ON_CONFIRMATION,
                              )),
                          (e = !1))
                        : (j("animated"), M(!0), (e = !0)),
                    c.Z.dispatch({
                        type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                        value: !0,
                        isAnimated: e,
                    }),
                    f.default.track(h.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_VIEWED, {
                        wow_moment_type: e ? "animated" : "static",
                    }));
            }, [y, a, n, P, U, k]),
            (0, i.useEffect)(() => {
                function e() {
                    L(!0), A();
                }
                return (
                    _.S.subscribe(h.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                    () => {
                        _.S.unsubscribe(h.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                    }
                );
            }, [A]),
            (0, i.useEffect)(
                () => () => {
                    c.Z.dispatch({
                        type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                        value: !1,
                        isAnimated: !1,
                    });
                },
                [],
            ),
            "animated" === k)
        )
            return (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: m.videoContainer,
                        children: [
                            (0, r.jsx)("div", {
                                className: m.entryAnimationContainer,
                                children: (0, r.jsx)(d.Z, {
                                    playsInline: !0,
                                    muted: !0,
                                    autoPlay: !0,
                                    onEnded: S,
                                    className: o()(m.video, "entry" === O ? m.visible : m.hidden),
                                    children: (0, r.jsx)("source", { src: R.modalGlowEntry }),
                                }),
                            }),
                            (0, r.jsx)(d.Z, {
                                ref: I,
                                playsInline: !0,
                                muted: !0,
                                loop: !0,
                                className: o()(m.video, "idle" === O ? m.visible : m.hidden),
                                children: (0, r.jsx)("source", { src: R.modalGlowIdle }),
                            }),
                            (0, r.jsx)(d.Z, {
                                ref: T,
                                playsInline: !0,
                                muted: !0,
                                className: o()(m.video, "exit" === O ? m.visible : m.hidden),
                                children: (0, r.jsx)("source", { src: R.modalGlowExit }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: m.wowAnimation,
                        children: (0, r.jsx)(l.zec, {
                            fit: "layout",
                            ref: D,
                            dataBinding: {
                                ExitTrigger: w,
                                EntryTrigger: x,
                            },
                            listenOnDocumentBody: !0,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: "exit" === O ? m.exitAnimationContainer : m.entryAnimationContainer,
                        children: t,
                    }),
                ],
            });
        let B = !w;
        return "static" === k
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      B &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("img", {
                                      src: g.Z,
                                      alt: "",
                                      className: m.staticGlow,
                                  }),
                                  (0, r.jsx)("img", {
                                      src: E.Z,
                                      alt: "",
                                      className: m.staticWumpusWithTrinkets,
                                  }),
                              ],
                          }),
                      t,
                  ],
              })
            : t;
    };
