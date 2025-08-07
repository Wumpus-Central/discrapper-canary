t.d(r, { Z: () => x }), t(388685);
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
    _ = t(402426),
    f = t(981631),
    m = t(794503);
let x = (e) => {
    let { children: r, isConfirmationStep: t } = e,
        [o, x] = (0, i.useState)("entry"),
        h = (0, i.useRef)(null),
        j = (0, i.useRef)(null),
        L = () => {
            if ((x("exit"), null != j.current)) {
                var e;
                null == (e = j.current) || e.play();
            }
        },
        { isGift: b } = (0, u.wD)(),
        { wasTier2PremiumBeforePurchase: g, selectedSkuId: y } = (0, p.JL)(),
        S = (0, C.P)(b, !!g, y),
        { mediaUrls: E, isSuccess: v } = (0, _.Z)(S),
        I = (0, i.useRef)(null),
        [w, O] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
        function e() {
            O(!0), L();
        }
        return (
            c.S.subscribe(f.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e),
            () => {
                c.S.unsubscribe(f.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e);
            }
        );
    }, []);
    let P = S && t && v;
    return ((0, i.useEffect)(() => {
        P &&
            s.Z.dispatch({
                type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                value: P,
            });
    }, [P]),
    (0, i.useEffect)(
        () => () => {
            s.Z.dispatch({
                type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                value: !1,
            });
        },
        [],
    ),
    P)
        ? (0, n.jsxs)("div", {
              children: [
                  (0, n.jsxs)("div", {
                      className: m.videoContainer,
                      children: [
                          (0, n.jsx)("div", {
                              className: m.entryAnimationContainer,
                              children: (0, n.jsx)(d.Z, {
                                  playsInline: !0,
                                  muted: !0,
                                  autoPlay: !0,
                                  onEnded: () => {
                                      if ((x("idle"), null != h.current)) {
                                          var e;
                                          null == (e = h.current) || e.play();
                                      }
                                  },
                                  className: a()(m.video, "entry" === o ? m.visible : m.hidden),
                                  children: (0, n.jsx)("source", { src: E.modalGlowEntry }),
                              }),
                          }),
                          (0, n.jsx)(d.Z, {
                              ref: h,
                              playsInline: !0,
                              muted: !0,
                              loop: !0,
                              className: a()(m.video, "idle" === o ? m.visible : m.hidden),
                              children: (0, n.jsx)("source", { src: E.modalGlowIdle }),
                          }),
                          (0, n.jsx)(d.Z, {
                              ref: j,
                              playsInline: !0,
                              muted: !0,
                              className: a()(m.video, "exit" === o ? m.visible : m.hidden),
                              children: (0, n.jsx)("source", { src: E.modalGlowExit }),
                          }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: m.wowAnimation,
                      children: (0, n.jsx)(l._dj, {
                          fit: "layout",
                          ref: I,
                          dataBinding: { ExitTrigger: w },
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: m.entryAnimationContainer,
                      children: r,
                  }),
              ],
          })
        : r;
};
