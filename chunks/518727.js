r.d(t, { Z: () => L }), r(388685);
var n = r(255367),
    i = r(73800),
    o = r(120356),
    a = r.n(o),
    l = r(442837),
    s = r(481060),
    d = r(570140),
    C = r(607070),
    c = r(70097),
    u = r(164275),
    p = r(585483),
    _ = r(987209),
    f = r(563132),
    m = r(45572),
    x = r(402426),
    h = r(981631),
    j = r(794503);
let L = (e) => {
    let { children: t, isConfirmationStep: r } = e,
        o = (0, l.e7)([C.Z], () => C.Z.useReducedMotion),
        [L, b] = (0, i.useState)("entry"),
        g = (0, i.useRef)(null),
        y = (0, i.useRef)(null),
        S = () => {
            if ((b("exit"), null != y.current)) {
                var e;
                null == (e = y.current) || e.play();
            }
        },
        { isGift: E } = (0, _.wD)(),
        { wasTier2PremiumBeforePurchase: v, selectedSkuId: I, purchaseState: w } = (0, f.JL)(),
        [O, P] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
        w === m.A.PURCHASING && P(!0);
    }, [w]);
    let M = (0, u.P)(E, !!v, I),
        { mediaUrls: T, isSuccess: Z } = (0, x.Z)(!o && M && O),
        A = (0, i.useRef)(null),
        [R, N] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
        function e() {
            N(!0), S();
        }
        return (
            p.S.subscribe(h.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e),
            () => {
                p.S.unsubscribe(h.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e);
            }
        );
    }, []);
    let U = !o && M && r && Z;
    return ((0, i.useEffect)(() => {
        U &&
            d.Z.dispatch({
                type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                value: U,
            });
    }, [U]),
    (0, i.useEffect)(
        () => () => {
            d.Z.dispatch({
                type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                value: !1,
            });
        },
        [],
    ),
    U)
        ? (0, n.jsxs)("div", {
              children: [
                  (0, n.jsxs)("div", {
                      className: j.videoContainer,
                      children: [
                          (0, n.jsx)("div", {
                              className: j.entryAnimationContainer,
                              children: (0, n.jsx)(c.Z, {
                                  playsInline: !0,
                                  muted: !0,
                                  autoPlay: !0,
                                  onEnded: () => {
                                      if ((b("idle"), null != g.current)) {
                                          var e;
                                          null == (e = g.current) || e.play();
                                      }
                                  },
                                  className: a()(j.video, "entry" === L ? j.visible : j.hidden),
                                  children: (0, n.jsx)("source", { src: T.modalGlowEntry }),
                              }),
                          }),
                          (0, n.jsx)(c.Z, {
                              ref: g,
                              playsInline: !0,
                              muted: !0,
                              loop: !0,
                              className: a()(j.video, "idle" === L ? j.visible : j.hidden),
                              children: (0, n.jsx)("source", { src: T.modalGlowIdle }),
                          }),
                          (0, n.jsx)(c.Z, {
                              ref: y,
                              playsInline: !0,
                              muted: !0,
                              className: a()(j.video, "exit" === L ? j.visible : j.hidden),
                              children: (0, n.jsx)("source", { src: T.modalGlowExit }),
                          }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: j.wowAnimation,
                      children: (0, n.jsx)(s._dj, {
                          fit: "layout",
                          ref: A,
                          dataBinding: { ExitTrigger: R },
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: j.entryAnimationContainer,
                      children: t,
                  }),
              ],
          })
        : t;
};
