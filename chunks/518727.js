t.d(r, { Z: () => h }), t(388685);
var n = t(255367),
    i = t(73800),
    o = t(120356),
    a = t.n(o),
    l = t(481060),
    s = t(570140),
    d = t(70097),
    C = t(164275),
    c = t(585483),
    u = t(987209),
    p = t(563132),
    _ = t(45572),
    f = t(402426),
    m = t(981631),
    x = t(794503);
let h = (e) => {
    let { children: r, isConfirmationStep: t } = e,
        [o, h] = (0, i.useState)("entry"),
        j = (0, i.useRef)(null),
        L = (0, i.useRef)(null),
        b = () => {
            if ((h("exit"), null != L.current)) {
                var e;
                null == (e = L.current) || e.play();
            }
        },
        { isGift: g } = (0, u.wD)(),
        { wasTier2PremiumBeforePurchase: y, selectedSkuId: S, purchaseState: E } = (0, p.JL)(),
        [v, I] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
        E === _.A.PURCHASING && I(!0);
    }, [E]);
    let w = (0, C.P)(g, !!y, S),
        { mediaUrls: O, isSuccess: P } = (0, f.Z)(w && v),
        M = (0, i.useRef)(null),
        [T, Z] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
        function e() {
            Z(!0), b();
        }
        return (
            c.S.subscribe(m.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e),
            () => {
                c.S.unsubscribe(m.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e);
            }
        );
    }, []);
    let A = w && t && P;
    return ((0, i.useEffect)(() => {
        A &&
            s.Z.dispatch({
                type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                value: A,
            });
    }, [A]),
    (0, i.useEffect)(
        () => () => {
            s.Z.dispatch({
                type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                value: !1,
            });
        },
        [],
    ),
    A)
        ? (0, n.jsxs)("div", {
              children: [
                  (0, n.jsxs)("div", {
                      className: x.videoContainer,
                      children: [
                          (0, n.jsx)("div", {
                              className: x.entryAnimationContainer,
                              children: (0, n.jsx)(d.Z, {
                                  playsInline: !0,
                                  muted: !0,
                                  autoPlay: !0,
                                  onEnded: () => {
                                      if ((h("idle"), null != j.current)) {
                                          var e;
                                          null == (e = j.current) || e.play();
                                      }
                                  },
                                  className: a()(x.video, "entry" === o ? x.visible : x.hidden),
                                  children: (0, n.jsx)("source", { src: O.modalGlowEntry }),
                              }),
                          }),
                          (0, n.jsx)(d.Z, {
                              ref: j,
                              playsInline: !0,
                              muted: !0,
                              loop: !0,
                              className: a()(x.video, "idle" === o ? x.visible : x.hidden),
                              children: (0, n.jsx)("source", { src: O.modalGlowIdle }),
                          }),
                          (0, n.jsx)(d.Z, {
                              ref: L,
                              playsInline: !0,
                              muted: !0,
                              className: a()(x.video, "exit" === o ? x.visible : x.hidden),
                              children: (0, n.jsx)("source", { src: O.modalGlowExit }),
                          }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: x.wowAnimation,
                      children: (0, n.jsx)(l._dj, {
                          fit: "layout",
                          ref: M,
                          dataBinding: { ExitTrigger: T },
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: x.entryAnimationContainer,
                      children: r,
                  }),
              ],
          })
        : r;
};
