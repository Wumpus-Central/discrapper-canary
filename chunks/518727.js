n.d(t, {
    P: () => y,
    Z: () => O,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    u = n(607070),
    d = n(70097),
    f = n(164275),
    _ = n(585483),
    p = n(987209),
    h = n(563132),
    m = n(45572),
    g = n(402426),
    E = n(981631),
    b = n(794503);
let y = 1000,
    O = (e) => {
        let { children: t, isConfirmationStep: n } = e,
            o = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
            [y, O] = (0, i.useState)("entry"),
            v = (0, i.useRef)(null),
            I = (0, i.useRef)(null),
            T = (0, i.useCallback)(() => {
                if ("entry" === y && (O("idle"), null != v.current)) {
                    var e;
                    null == (e = v.current) || e.play();
                }
            }, [y]),
            S = (0, i.useCallback)(() => {
                if ("exit" !== y && (O("exit"), null != I.current)) {
                    var e;
                    null == (e = I.current) || e.play();
                }
            }, [y]),
            { isGift: A } = (0, p.wD)(),
            { wasTier2PremiumBeforePurchase: N, selectedSkuId: C, purchaseState: R } = (0, h.JL)(),
            [P, w] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
            R === m.A.PURCHASING && w(!0);
        }, [R]);
        let D = (0, f.P)(A, !!N, C),
            { mediaUrls: L, isSuccess: x } = (0, g.Z)(!o && D && P),
            M = (0, i.useRef)(null),
            [k, j] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
            function e() {
                j(!0), S();
            }
            return (
                _.S.subscribe(E.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e),
                () => {
                    _.S.unsubscribe(E.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e);
                }
            );
        }, [S]);
        let U = !o && D && n && x;
        return ((0, i.useEffect)(() => {
            U &&
                c.Z.dispatch({
                    type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                    value: U,
                });
        }, [U]),
        (0, i.useEffect)(
            () => () => {
                c.Z.dispatch({
                    type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                    value: !1,
                });
            },
            [],
        ),
        U)
            ? (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsxs)("div", {
                          className: b.videoContainer,
                          children: [
                              (0, r.jsx)("div", {
                                  className: b.entryAnimationContainer,
                                  children: (0, r.jsx)(d.Z, {
                                      playsInline: !0,
                                      muted: !0,
                                      autoPlay: !0,
                                      onEnded: T,
                                      className: a()(b.video, "entry" === y ? b.visible : b.hidden),
                                      children: (0, r.jsx)("source", { src: L.modalGlowEntry }),
                                  }),
                              }),
                              (0, r.jsx)(d.Z, {
                                  ref: v,
                                  playsInline: !0,
                                  muted: !0,
                                  loop: !0,
                                  className: a()(b.video, "idle" === y ? b.visible : b.hidden),
                                  children: (0, r.jsx)("source", { src: L.modalGlowIdle }),
                              }),
                              (0, r.jsx)(d.Z, {
                                  ref: I,
                                  playsInline: !0,
                                  muted: !0,
                                  className: a()(b.video, "exit" === y ? b.visible : b.hidden),
                                  children: (0, r.jsx)("source", { src: L.modalGlowExit }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: b.wowAnimation,
                          children: (0, r.jsx)(l._dj, {
                              fit: "layout",
                              ref: M,
                              dataBinding: { ExitTrigger: k },
                          }),
                      }),
                      (0, r.jsx)("div", {
                          className: "exit" === y ? b.exitAnimationContainer : b.entryAnimationContainer,
                          children: t,
                      }),
                  ],
              })
            : t;
    };
