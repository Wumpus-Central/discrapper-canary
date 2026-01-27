n.d(t, {
    A: () => w,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(108531),
    o = n(299619),
    c = n(311907),
    u = n(397927),
    d = n(975807),
    m = n(775602),
    f = n(975571),
    p = n(854987),
    h = n(719718),
    b = n(612082),
    g = n(46192),
    x = n(155286),
    y = n(573138),
    v = n(877272),
    j = n(184047),
    C = n(476648),
    _ = n(532294),
    A = n(652215),
    O = n(622865),
    E = n(985018),
    S = n(822563),
    N = n(447515),
    I = n(844636);
let P = 1e3 + C.f;

function w(e) {
    let { onNextStep: t } = e,
        n = (0, c.bG)([h.A], () => h.A.getFetchState() === h.$.ERROR || null == h.A.getCheckpointData().messages),
        [a, w] = l.useState(!0),
        T = l.useRef(null),
        R = l.useContext(p.P),
        L = (0, u.rdh)(R.primaryColor).hex(),
        D = (0, c.bG)([m.A], () => m.A.useReducedMotion),
        k = l.useCallback((e) => {
            e.currentTarget.currentTime >= 2.8 && w(!1);
        }, []),
        M = (0, u.zhh)({
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1,
            },
            pause: a,
            delay: P,
        }),
        H = (0, u.zhh)({
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1,
            },
            pause: a,
        });
    l.useEffect(() => {
        null != T.current && (T.current.playbackRate = 2);
    }, []),
        l.useEffect(() => {
            if (D) {
                null != T.current && (T.current.currentTime = 0.2);
                let e = setTimeout(() => {
                    w(!1);
                }, 1e3);
                return () => clearTimeout(e);
            }
        }, [D]);
    let U = () => {
        (0, d.A)(f.A.getArticleURL(A.MVz.CHECKPOINT));
    };
    return n
        ? (0, r.jsxs)(y.A, {
              className: S.Ur,
              children: [
                  (0, r.jsx)(o.A, {
                      autoPlay: !D,
                      muted: !0,
                      playsInline: !0,
                      loop: !0,
                      className: S.CT,
                      children: (0, r.jsx)("source", {
                          src: I.A,
                          type: "video/webm",
                      }),
                  }),
                  (0, r.jsx)(v.A, {
                      variant: "display-lg",
                      className: S.Vy,
                      children: E.intl.string(O.default.kimsIr),
                  }),
                  (0, r.jsx)(v.A, {
                      variant: "heading-xl/medium",
                      className: S.VA,
                      children: E.intl.format(O.default.GNHD4i, {
                          learnMoreHook: (e, t) =>
                              (0, r.jsx)(
                                  u.DUT,
                                  {
                                      onClick: U,
                                      className: S.C2,
                                      children: (0, r.jsx)(v.A, {
                                          variant: "heading-xl/medium",
                                          className: S.nf,
                                          children: e,
                                      }),
                                  },
                                  t,
                              ),
                      }),
                  }),
                  (0, r.jsx)(v.A, {
                      variant: "text-lg/medium",
                      children: E.intl.string(O.default["xLI+Hj"]),
                  }),
                  (0, r.jsx)(g.A, {
                      className: S.Hk,
                      textSize: 20,
                  }),
              ],
          })
        : (0, r.jsxs)(y.A, {
              className: S.Qs,
              noPadding: !0,
              children: [
                  !a &&
                      (0, r.jsx)(v.A, {
                          variant: "text-lg/medium",
                          className: S.ed,
                          children: E.intl.format(O.default["1jPMeG"], {
                              learnMoreHook: (e, t) =>
                                  (0, r.jsx)(
                                      u.DUT,
                                      {
                                          onClick: U,
                                          className: S.C2,
                                          children: (0, r.jsx)(v.A, {
                                              variant: "text-lg/medium",
                                              className: S.nf,
                                              children: e,
                                          }),
                                      },
                                      t,
                                  ),
                          }),
                      }),
                  !a &&
                      (0, r.jsx)(v.A, {
                          variant: "text-md/medium",
                          className: S.al,
                          children: E.intl.format(O.default.g476ZL, {
                              name: "Exyl",
                          }),
                      }),
                  a
                      ? null
                      : (0, r.jsx)(s.animated.div, {
                            style: H,
                            children: (0, r.jsx)(o.A, {
                                autoPlay: !D,
                                muted: !0,
                                playsInline: !0,
                                loop: !0,
                                className: S.RS,
                                children: (0, r.jsx)("source", {
                                    src: I.A,
                                    type: "video/webm",
                                }),
                            }),
                        }),
                  (0, r.jsx)(o.A, {
                      ref: T,
                      autoPlay: !D,
                      muted: !0,
                      playsInline: !0,
                      className: i()(S.GW, {
                          [S.e8]: !a,
                      }),
                      onTimeUpdate: a ? k : void 0,
                      children: (0, r.jsx)("source", {
                          src: N.A,
                          type: "video/webm",
                      }),
                  }),
                  a
                      ? null
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(C.A, {
                                    variant: "display-lg",
                                    className: S.DD,
                                    textClassName: S.Qq,
                                    text: E.intl.string(O.default["CdU/PF"]),
                                    delay: 500,
                                }),
                                (0, r.jsx)(C.A, {
                                    variant: "text-lg/medium",
                                    className: S.cz,
                                    textClassName: S.Qq,
                                    text: E.intl.string(O.default["M/LvW0"]),
                                    delay: 500 + C.f,
                                }),
                            ],
                        }),
                  a
                      ? null
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(s.animated.div, {
                                    style: M,
                                    children: [
                                        (0, r.jsx)(x.A, {
                                            className: S.CB,
                                            slide: _.P7.WELCOME,
                                        }),
                                        (0, r.jsxs)(b.A, {
                                            contentClassName: S.a0,
                                            onClick: t,
                                            "aria-label": E.intl.string(E.t.I0v0Qv),
                                            muteSound: !0,
                                            children: [
                                                (0, r.jsx)(u.udU, {
                                                    colorClass: S.d7,
                                                    color: L,
                                                    size: "md",
                                                }),
                                                E.intl.string(E.t.I0v0Qv),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    style: H,
                                    children: (0, r.jsx)(j.A, {
                                        className: S.Lv,
                                        style: {
                                            color: L,
                                        },
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
