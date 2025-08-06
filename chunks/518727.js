(t.d(r, { Z: () => p }), t(388685));
var n = t(255367),
    i = t(73800),
    l = t(120356),
    o = t.n(l),
    a = t(570140),
    s = t(70097),
    d = t(585483),
    C = t(402426),
    c = t(981631),
    u = t(794503);
let p = (e) => {
    let { children: r, isConfirmationStep: t, isWowMomentConfirmationEligible: l } = e,
        [p, _] = (0, i.useState)('entry'),
        f = (0, i.useRef)(null),
        m = (0, i.useRef)(null),
        x = () => {
            if ((_('exit'), null != m.current)) {
                var e;
                null == (e = m.current) || e.play();
            }
        },
        { mediaUrls: h, isSuccess: j } = (0, C.Z)(l);
    (0, i.useEffect)(() => {
        function e() {
            x();
        }
        return (
            d.S.subscribe(c.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e),
            () => {
                d.S.unsubscribe(c.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e);
            }
        );
    }, []);
    let L = l && t && j;
    return ((0, i.useEffect)(() => {
        L &&
            a.Z.dispatch({
                type: 'WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION',
                value: L
            });
    }, [L]),
    (0, i.useEffect)(
        () => () => {
            a.Z.dispatch({
                type: 'WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION',
                value: !1
            });
        },
        []
    ),
    L)
        ? (0, n.jsxs)('div', {
              children: [
                  (0, n.jsxs)('div', {
                      className: u.videoContainer,
                      children: [
                          (0, n.jsx)('div', {
                              className: u.entryAnimationContainer,
                              children: (0, n.jsx)(s.Z, {
                                  playsInline: !0,
                                  muted: !0,
                                  autoPlay: !0,
                                  onEnded: () => {
                                      if ((_('idle'), null != f.current)) {
                                          var e;
                                          null == (e = f.current) || e.play();
                                      }
                                  },
                                  className: o()(u.video, 'entry' === p ? u.visible : u.hidden),
                                  children: (0, n.jsx)('source', { src: h.modalGlowEntry })
                              })
                          }),
                          (0, n.jsx)(s.Z, {
                              ref: f,
                              playsInline: !0,
                              muted: !0,
                              loop: !0,
                              className: o()(u.video, 'idle' === p ? u.visible : u.hidden),
                              children: (0, n.jsx)('source', { src: h.modalGlowIdle })
                          }),
                          (0, n.jsx)(s.Z, {
                              ref: m,
                              playsInline: !0,
                              muted: !0,
                              className: o()(u.video, 'exit' === p ? u.visible : u.hidden),
                              children: (0, n.jsx)('source', { src: h.modalGlowExit })
                          })
                      ]
                  }),
                  (0, n.jsx)('div', {
                      className: u.entryAnimationContainer,
                      children: r
                  })
              ]
          })
        : r;
};
