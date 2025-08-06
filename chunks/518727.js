t.d(r, { Z: () => _ }), t(388685);
var n = t(255367),
    i = t(73800),
    o = t(120356),
    l = t.n(o),
    a = t(481060),
    s = t(570140),
    d = t(70097),
    C = t(585483),
    c = t(402426),
    u = t(981631),
    p = t(794503);
let _ = (e) => {
    let { children: r, isConfirmationStep: t, isWowMomentConfirmationEligible: o } = e,
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
    let S = o && t && L;
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
                      children: r,
                  }),
              ],
          })
        : r;
};
