r.d(t, { Z: () => _ }), r(388685);
var n = r(255367),
    i = r(73800),
    o = r(120356),
    l = r.n(o),
    a = r(481060),
    s = r(570140),
    d = r(70097),
    C = r(585483),
    c = r(402426),
    u = r(981631),
    p = r(794503);
let _ = (e) => {
    let { children: t, isConfirmationStep: r, isWowMomentConfirmationEligible: o } = e,
        [_, f] = (0, i.useState)("entry"),
        m = (0, i.useRef)(null),
        x = (0, i.useRef)(null),
        h = () => {
            if ((f("exit"), null != x.current)) {
                var e;
                null == (e = x.current) || e.play();
            }
        },
        { mediaUrls: j, isSuccess: L } = (0, c.Z)(o),
        b = (0, i.useRef)(null),
        [g, y] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
        function e() {
            y(!0), h();
        }
        return (
            C.S.subscribe(u.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e),
            () => {
                C.S.unsubscribe(u.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e);
            }
        );
    }, []);
    let S = o && r && L;
    return ((0, i.useEffect)(() => {
        S &&
            s.Z.dispatch({
                type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                value: S,
            });
    }, [S]),
    (0, i.useEffect)(
        () => () => {
            s.Z.dispatch({
                type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                value: !1,
            });
        },
        [],
    ),
    S)
        ? (0, n.jsxs)("div", {
              children: [
                  (0, n.jsxs)("div", {
                      className: p.videoContainer,
                      children: [
                          (0, n.jsx)("div", {
                              className: p.entryAnimationContainer,
                              children: (0, n.jsx)(d.Z, {
                                  playsInline: !0,
                                  muted: !0,
                                  autoPlay: !0,
                                  onEnded: () => {
                                      if ((f("idle"), null != m.current)) {
                                          var e;
                                          null == (e = m.current) || e.play();
                                      }
                                  },
                                  className: l()(p.video, "entry" === _ ? p.visible : p.hidden),
                                  children: (0, n.jsx)("source", { src: j.modalGlowEntry }),
                              }),
                          }),
                          (0, n.jsx)(d.Z, {
                              ref: m,
                              playsInline: !0,
                              muted: !0,
                              loop: !0,
                              className: l()(p.video, "idle" === _ ? p.visible : p.hidden),
                              children: (0, n.jsx)("source", { src: j.modalGlowIdle }),
                          }),
                          (0, n.jsx)(d.Z, {
                              ref: x,
                              playsInline: !0,
                              muted: !0,
                              className: l()(p.video, "exit" === _ ? p.visible : p.hidden),
                              children: (0, n.jsx)("source", { src: j.modalGlowExit }),
                          }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: p.wowAnimation,
                      children: (0, n.jsx)(a._dj, {
                          fit: "layout",
                          ref: b,
                          dataBinding: { ExitTrigger: g },
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: p.entryAnimationContainer,
                      children: t,
                  }),
              ],
          })
        : t;
};
