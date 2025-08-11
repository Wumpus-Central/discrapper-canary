n.d(t, {
    P: () => O,
    Z: () => v,
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
    _ = n(626135),
    p = n(585483),
    h = n(987209),
    m = n(563132),
    g = n(45572),
    E = n(402426),
    b = n(981631),
    y = n(794503);
let O = 1000,
    v = (e) => {
        let { children: t, isConfirmationStep: n } = e,
            o = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
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
            { isGift: N } = (0, h.wD)(),
            { wasTier2PremiumBeforePurchase: C, selectedSkuId: R, purchaseState: P } = (0, m.JL)(),
            [w, D] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
            P === g.A.PURCHASING && D(!0);
        }, [P]);
        let L = (0, f.P)(N, !!C, R),
            { mediaUrls: x, isSuccess: M } = (0, E.Z)(!o && L && w),
            k = (0, i.useRef)(null),
            [j, U] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
            function e() {
                U(!0), A();
            }
            return (
                p.S.subscribe(b.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e),
                () => {
                    p.S.unsubscribe(b.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e);
                }
            );
        }, [A]);
        let G = !o && L && n && M;
        return ((0, i.useEffect)(() => {
            G &&
                (c.Z.dispatch({
                    type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                    value: G,
                }),
                _.default.track(b.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_VIEWED));
        }, [G]),
        (0, i.useEffect)(
            () => () => {
                c.Z.dispatch({
                    type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                    value: !1,
                });
            },
            [],
        ),
        (0, i.useEffect)(() => {
            !o &&
                L &&
                n &&
                !M &&
                _.default.track(b.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_NOT_LOADED_ON_CONFIRMATION);
        }, [o, L, n, M]),
        G)
            ? (0, r.jsxs)("div", {
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
                                      onEnded: S,
                                      className: a()(y.video, "entry" === O ? y.visible : y.hidden),
                                      children: (0, r.jsx)("source", { src: x.modalGlowEntry }),
                                  }),
                              }),
                              (0, r.jsx)(d.Z, {
                                  ref: I,
                                  playsInline: !0,
                                  muted: !0,
                                  loop: !0,
                                  className: a()(y.video, "idle" === O ? y.visible : y.hidden),
                                  children: (0, r.jsx)("source", { src: x.modalGlowIdle }),
                              }),
                              (0, r.jsx)(d.Z, {
                                  ref: T,
                                  playsInline: !0,
                                  muted: !0,
                                  className: a()(y.video, "exit" === O ? y.visible : y.hidden),
                                  children: (0, r.jsx)("source", { src: x.modalGlowExit }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: y.wowAnimation,
                          children: (0, r.jsx)(l._dj, {
                              fit: "layout",
                              ref: k,
                              dataBinding: { ExitTrigger: j },
                          }),
                      }),
                      (0, r.jsx)("div", {
                          className: "exit" === O ? y.exitAnimationContainer : y.entryAnimationContainer,
                          children: t,
                      }),
                  ],
              })
            : t;
    };
