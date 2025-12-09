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
    p = n(585483),
    _ = n(402426),
    m = n(981631),
    h = n(839249),
    g = n(293914),
    E = n(503019);
let b = 1000,
    y = (e) => {
        let { children: t, isConfirmationStep: n, isEligibleForWowMoment: a, shouldPrefetchWowMoment: b } = e,
            y = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
            [O, v] = (0, i.useState)("entry"),
            S = (0, i.useRef)(null),
            I = (0, i.useRef)(null),
            T = (0, i.useCallback)(() => {
                if ("entry" === O && (v("idle"), null != S.current)) {
                    var e;
                    null == (e = S.current) || e.play();
                }
            }, [O]),
            A = (0, i.useCallback)(() => {
                if ("exit" !== O && (v("exit"), null != I.current)) {
                    var e;
                    null == (e = I.current) || e.play();
                }
            }, [O]),
            [C, N] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
            b && N(!0);
        }, [b]);
        let { mediaUrls: P, isSuccess: R } = (0, _.Z)(!y && a && C),
            D = (0, i.useRef)(null),
            [w, x] = (0, i.useState)(!1),
            [L, j] = (0, i.useState)(!1),
            [M, k] = (0, i.useState)("none"),
            [U, G] = (0, i.useState)(!1);
        if (
            ((0, i.useEffect)(() => {
                let e;
                a &&
                    n &&
                    !U &&
                    "none" === M &&
                    (y || !R
                        ? (k("static"),
                          y ||
                              (G(!0),
                              f.default.track(
                                  m.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_NOT_LOADED_ON_CONFIRMATION,
                              )),
                          (e = !1))
                        : (k("animated"), j(!0), (e = !0)),
                    c.Z.dispatch({
                        type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                        value: !0,
                        isAnimated: e,
                    }),
                    f.default.track(m.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_VIEWED, {
                        wow_moment_type: e ? "animated" : "static",
                    }));
            }, [y, a, n, R, U, M]),
            (0, i.useEffect)(() => {
                function e() {
                    x(!0), A();
                }
                return (
                    p.S.subscribe(m.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                    () => {
                        p.S.unsubscribe(m.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
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
            "animated" === M)
        )
            return (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: h.videoContainer,
                        children: [
                            (0, r.jsx)("div", {
                                className: h.entryAnimationContainer,
                                children: (0, r.jsx)(d.Z, {
                                    playsInline: !0,
                                    muted: !0,
                                    autoPlay: !0,
                                    onEnded: T,
                                    className: o()(h.video, "entry" === O ? h.visible : h.hidden),
                                    children: (0, r.jsx)("source", { src: P.modalGlowEntry }),
                                }),
                            }),
                            (0, r.jsx)(d.Z, {
                                ref: S,
                                playsInline: !0,
                                muted: !0,
                                loop: !0,
                                className: o()(h.video, "idle" === O ? h.visible : h.hidden),
                                children: (0, r.jsx)("source", { src: P.modalGlowIdle }),
                            }),
                            (0, r.jsx)(d.Z, {
                                ref: I,
                                playsInline: !0,
                                muted: !0,
                                className: o()(h.video, "exit" === O ? h.visible : h.hidden),
                                children: (0, r.jsx)("source", { src: P.modalGlowExit }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: h.wowAnimation,
                        children: (0, r.jsx)(l.zec, {
                            fit: "layout",
                            ref: D,
                            dataBinding: {
                                ExitTrigger: w,
                                EntryTrigger: L,
                            },
                            listenOnDocumentBody: !0,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: "exit" === O ? h.exitAnimationContainer : h.entryAnimationContainer,
                        children: t,
                    }),
                ],
            });
        let Z = !w;
        return "static" === M
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      Z &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("img", {
                                      src: g.Z,
                                      alt: "",
                                      className: h.staticGlow,
                                  }),
                                  (0, r.jsx)("img", {
                                      src: E.Z,
                                      alt: "",
                                      className: h.staticWumpusWithTrinkets,
                                  }),
                              ],
                          }),
                      t,
                  ],
              })
            : t;
    };
