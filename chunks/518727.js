n.d(t, {
    P: () => I,
    Z: () => T,
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
    f = n(164275),
    _ = n(626135),
    p = n(585483),
    h = n(987209),
    m = n(563132),
    g = n(45572),
    E = n(402426),
    b = n(981631),
    y = n(775736),
    O = n(293914),
    v = n(503019);
let I = 1000,
    T = (e) => {
        let { children: t, isConfirmationStep: n } = e,
            a = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
            [I, T] = (0, i.useState)("entry"),
            S = (0, i.useRef)(null),
            A = (0, i.useRef)(null),
            C = (0, i.useCallback)(() => {
                if ("entry" === I && (T("idle"), null != S.current)) {
                    var e;
                    null == (e = S.current) || e.play();
                }
            }, [I]),
            N = (0, i.useCallback)(() => {
                if ("exit" !== I && (T("exit"), null != A.current)) {
                    var e;
                    null == (e = A.current) || e.play();
                }
            }, [I]),
            { isGift: R } = (0, h.wD)(),
            { wasTier2PremiumBeforePurchase: P, selectedSkuId: D, purchaseState: w } = (0, m.JL)(),
            [L, x] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
            w === g.A.PURCHASING && x(!0);
        }, [w]);
        let M = (0, f.P)(R, !!P, D),
            { mediaUrls: j, isSuccess: k } = (0, E.Z)(!a && M && L),
            U = (0, i.useRef)(null),
            [G, B] = (0, i.useState)(!1),
            [Z, F] = (0, i.useState)(!1),
            [V, H] = (0, i.useState)("none"),
            [Y, W] = (0, i.useState)(!1);
        if (
            ((0, i.useEffect)(() => {
                let e;
                M &&
                    n &&
                    !Y &&
                    "none" === V &&
                    (a || !k
                        ? (H("static"),
                          a ||
                              (W(!0),
                              _.default.track(
                                  b.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_NOT_LOADED_ON_CONFIRMATION,
                              )),
                          (e = !1))
                        : (H("animated"), F(!0), (e = !0)),
                    c.Z.dispatch({
                        type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                        value: !0,
                        isAnimated: e,
                    }),
                    _.default.track(b.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_VIEWED, {
                        wow_moment_type: e ? "animated" : "static",
                    }));
            }, [a, M, n, k, Y, V]),
            (0, i.useEffect)(() => {
                function e() {
                    B(!0), N();
                }
                return (
                    p.S.subscribe(b.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e),
                    () => {
                        p.S.unsubscribe(b.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e);
                    }
                );
            }, [N]),
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
            "animated" === V)
        )
            return (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: y.videoContainer,
                        children: [
                            (0, r.jsx)("div", {
                                className: y.entryAnimationContainer,
                                children: (0, r.jsx)(d.Z, {
                                    playsInline: !0,
                                    muted: !0,
                                    autoPlay: !0,
                                    onEnded: C,
                                    className: o()(y.video, "entry" === I ? y.visible : y.hidden),
                                    children: (0, r.jsx)("source", { src: j.modalGlowEntry }),
                                }),
                            }),
                            (0, r.jsx)(d.Z, {
                                ref: S,
                                playsInline: !0,
                                muted: !0,
                                loop: !0,
                                className: o()(y.video, "idle" === I ? y.visible : y.hidden),
                                children: (0, r.jsx)("source", { src: j.modalGlowIdle }),
                            }),
                            (0, r.jsx)(d.Z, {
                                ref: A,
                                playsInline: !0,
                                muted: !0,
                                className: o()(y.video, "exit" === I ? y.visible : y.hidden),
                                children: (0, r.jsx)("source", { src: j.modalGlowExit }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: y.wowAnimation,
                        children: (0, r.jsx)(l.zec, {
                            fit: "layout",
                            ref: U,
                            dataBinding: {
                                ExitTrigger: G,
                                EntryTrigger: Z,
                            },
                            listenOnDocumentBody: !0,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: "exit" === I ? y.exitAnimationContainer : y.entryAnimationContainer,
                        children: t,
                    }),
                ],
            });
        let K = !G;
        return "static" === V
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      K &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("img", {
                                      src: O.Z,
                                      alt: "",
                                      className: y.staticGlow,
                                  }),
                                  (0, r.jsx)("img", {
                                      src: v.Z,
                                      alt: "",
                                      className: y.staticWumpusWithTrinkets,
                                  }),
                              ],
                          }),
                      t,
                  ],
              })
            : t;
    };
