n.d(t, { A: () => j }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(432022),
    l = n(299619),
    c = n(311907),
    u = n(397927),
    d = n(975807),
    f = n(775602),
    p = n(975571),
    _ = n(854987),
    h = n(719718),
    m = n(612082),
    g = n(46192),
    E = n(155286),
    b = n(573138),
    y = n(877272),
    O = n(184047),
    A = n(476648),
    v = n(532294),
    S = n(652215),
    I = n(622865),
    T = n(985018),
    C = n(822563),
    N = n(447515),
    R = n(844636);
let w = 2.8,
    P = 2,
    D = 1000,
    x = 500,
    L = 1000 + A.f;
function j(e) {
    let { onNextStep: t } = e,
        n = (0, c.bG)([h.A], () => h.A.getFetchState() === h.$.ERROR || null == h.A.getCheckpointData().messages),
        [a, j] = i.useState(!0),
        M = i.useRef(null),
        k = i.useContext(_.P),
        U = (0, u.rdh)(k.primaryColor).hex(),
        G = (0, c.bG)([f.A], () => f.A.useReducedMotion),
        V = i.useCallback((e) => {
            e.currentTarget.currentTime >= w && j(!1);
        }, []),
        F = (0, u.zhh)({
            from: { opacity: 0 },
            to: { opacity: 1 },
            pause: a,
            delay: L,
        }),
        B = (0, u.zhh)({
            from: { opacity: 0 },
            to: { opacity: 1 },
            pause: a,
        });
    i.useEffect(() => {
        null != M.current && (M.current.playbackRate = P);
    }, []),
        i.useEffect(() => {
            if (G) {
                null != M.current && (M.current.currentTime = 0.2);
                let e = setTimeout(() => {
                    j(!1);
                }, D);
                return () => clearTimeout(e);
            }
        }, [G]);
    let H = () => {
        (0, d.A)(p.A.getArticleURL(S.MVz.CHECKPOINT));
    };
    return n
        ? (0, r.jsxs)(b.A, {
              className: C.Ur,
              children: [
                  (0, r.jsx)(l.A, {
                      autoPlay: !G,
                      muted: !0,
                      playsInline: !0,
                      loop: !0,
                      className: C.CT,
                      children: (0, r.jsx)("source", {
                          src: R.A,
                          type: "video/webm",
                      }),
                  }),
                  (0, r.jsx)(y.A, {
                      variant: "display-lg",
                      className: C.Vy,
                      children: T.intl.string(I.default.kimsIr),
                  }),
                  (0, r.jsx)(y.A, {
                      variant: "heading-xl/medium",
                      className: C.VA,
                      children: T.intl.format(I.default.GNHD4i, {
                          learnMoreHook: (e, t) =>
                              (0, r.jsx)(
                                  u.DUT,
                                  {
                                      onClick: H,
                                      className: C.C2,
                                      children: (0, r.jsx)(y.A, {
                                          variant: "heading-xl/medium",
                                          className: C.nf,
                                          children: e,
                                      }),
                                  },
                                  t,
                              ),
                      }),
                  }),
                  (0, r.jsx)(y.A, {
                      variant: "text-lg/medium",
                      children: T.intl.string(I.default["xLI+Hj"]),
                  }),
                  (0, r.jsx)(g.A, {
                      className: C.Hk,
                      textSize: 20,
                  }),
              ],
          })
        : (0, r.jsxs)(b.A, {
              className: C.Qs,
              noPadding: !0,
              children: [
                  !a &&
                      (0, r.jsx)(y.A, {
                          variant: "text-lg/medium",
                          className: C.ed,
                          children: T.intl.format(I.default["1jPMeG"], {
                              learnMoreHook: (e, t) =>
                                  (0, r.jsx)(
                                      u.DUT,
                                      {
                                          onClick: H,
                                          className: C.C2,
                                          children: (0, r.jsx)(y.A, {
                                              variant: "text-lg/medium",
                                              className: C.nf,
                                              children: e,
                                          }),
                                      },
                                      t,
                                  ),
                          }),
                      }),
                  !a &&
                      (0, r.jsx)(y.A, {
                          variant: "text-md/medium",
                          className: C.al,
                          children: T.intl.format(I.default.g476ZL, { name: "Exyl" }),
                      }),
                  a
                      ? null
                      : (0, r.jsx)(o.animated.div, {
                            style: B,
                            children: (0, r.jsx)(l.A, {
                                autoPlay: !G,
                                muted: !0,
                                playsInline: !0,
                                loop: !0,
                                className: C.RS,
                                children: (0, r.jsx)("source", {
                                    src: R.A,
                                    type: "video/webm",
                                }),
                            }),
                        }),
                  (0, r.jsx)(l.A, {
                      ref: M,
                      autoPlay: !G,
                      muted: !0,
                      playsInline: !0,
                      className: s()(C.GW, { [C.e8]: !a }),
                      onTimeUpdate: a ? V : void 0,
                      children: (0, r.jsx)("source", {
                          src: N.A,
                          type: "video/webm",
                      }),
                  }),
                  a
                      ? null
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(A.A, {
                                    variant: "display-lg",
                                    className: C.DD,
                                    textClassName: C.Qq,
                                    text: T.intl.string(I.default["CdU/PF"]),
                                    delay: x,
                                }),
                                (0, r.jsx)(A.A, {
                                    variant: "text-lg/medium",
                                    className: C.cz,
                                    textClassName: C.Qq,
                                    text: T.intl.string(I.default["M/LvW0"]),
                                    delay: x + A.f,
                                }),
                            ],
                        }),
                  a
                      ? null
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(o.animated.div, {
                                    style: F,
                                    children: [
                                        (0, r.jsx)(E.A, {
                                            className: C.CB,
                                            slide: v.P7.WELCOME,
                                        }),
                                        (0, r.jsxs)(m.A, {
                                            contentClassName: C.a0,
                                            onClick: t,
                                            "aria-label": T.intl.string(T.t.I0v0Qv),
                                            muteSound: !0,
                                            children: [
                                                (0, r.jsx)(u.udU, {
                                                    colorClass: C.d7,
                                                    color: U,
                                                    size: "md",
                                                }),
                                                T.intl.string(T.t.I0v0Qv),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(o.animated.div, {
                                    style: B,
                                    children: (0, r.jsx)(O.A, {
                                        className: C.Lv,
                                        style: { color: U },
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
