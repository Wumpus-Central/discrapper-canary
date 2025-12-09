n.d(t, { Z: () => j }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(205120),
    l = n(92951),
    c = n(442837),
    u = n(481060),
    d = n(782568),
    f = n(607070),
    p = n(63063),
    _ = n(324060),
    m = n(5888),
    h = n(639949),
    g = n(829468),
    E = n(909397),
    b = n(198358),
    y = n(391876),
    O = n(549542),
    v = n(935212),
    S = n(612776),
    I = n(981631),
    T = n(860076),
    A = n(388032),
    C = n(296953),
    N = n(550770),
    P = n(807808);
let R = 2.8,
    D = 2,
    w = 1000,
    x = 500,
    L = 1000 + v.t;
function j(e) {
    let { onNextStep: t } = e,
        n = (0, c.e7)([m.Z], () => m.Z.getFetchState() === m.p.ERROR || null == m.Z.getCheckpointData().messages),
        [a, j] = i.useState(!0),
        M = i.useRef(null),
        k = i.useContext(_.Q),
        U = (0, u.dQu)(k.primaryColor).hex(),
        G = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
        Z = i.useCallback((e) => {
            e.currentTarget.currentTime >= R && j(!1);
        }, []),
        B = (0, u.q_F)({
            from: { opacity: 0 },
            to: { opacity: 1 },
            pause: a,
            delay: L,
        }),
        F = (0, u.q_F)({
            from: { opacity: 0 },
            to: { opacity: 1 },
            pause: a,
        });
    i.useEffect(() => {
        null != M.current && (M.current.playbackRate = D);
    }, []),
        i.useEffect(() => {
            if (G) {
                null != M.current && (M.current.currentTime = 0.2);
                let e = setTimeout(() => {
                    j(!1);
                }, w);
                return () => clearTimeout(e);
            }
        }, [G]);
    let V = () => {
        (0, d.Z)(p.Z.getArticleURL(I.BhN.CHECKPOINT));
    };
    return n
        ? (0, r.jsxs)(b.Z, {
              className: C.unavailableContainer,
              children: [
                  (0, r.jsx)(l.Z, {
                      autoPlay: !G,
                      muted: !0,
                      playsInline: !0,
                      loop: !0,
                      className: C.unavailableLogo,
                      children: (0, r.jsx)("source", {
                          src: P.Z,
                          type: "video/webm",
                      }),
                  }),
                  (0, r.jsx)(y.Z, {
                      variant: "display-lg",
                      className: C.display,
                      children: A.intl.string(T.default.kimsIr),
                  }),
                  (0, r.jsx)(y.Z, {
                      variant: "heading-xl/medium",
                      className: C.subtitle,
                      children: A.intl.format(T.default.GNHD4i, {
                          learnMoreHook: (e, t) =>
                              (0, r.jsx)(
                                  u.P3F,
                                  {
                                      onClick: V,
                                      className: C.learnMore,
                                      children: (0, r.jsx)(y.Z, {
                                          variant: "heading-xl/medium",
                                          className: C.link,
                                          children: e,
                                      }),
                                  },
                                  t,
                              ),
                      }),
                  }),
                  (0, r.jsx)(y.Z, {
                      variant: "text-lg/medium",
                      children: A.intl.string(T.default["xLI+Hj"]),
                  }),
                  (0, r.jsx)(g.Z, {
                      className: C.claimButton,
                      textSize: 20,
                  }),
              ],
          })
        : (0, r.jsxs)(b.Z, {
              className: C.content,
              noPadding: !0,
              children: [
                  !a &&
                      (0, r.jsx)(y.Z, {
                          variant: "text-lg/medium",
                          className: C.disclaimer,
                          children: A.intl.format(T.default["1jPMeG"], {
                              learnMoreHook: (e, t) =>
                                  (0, r.jsx)(
                                      u.P3F,
                                      {
                                          onClick: V,
                                          className: C.learnMore,
                                          children: (0, r.jsx)(y.Z, {
                                              variant: "text-lg/medium",
                                              className: C.link,
                                              children: e,
                                          }),
                                      },
                                      t,
                                  ),
                          }),
                      }),
                  !a &&
                      (0, r.jsx)(y.Z, {
                          variant: "text-md/medium",
                          className: C.attribution,
                          children: A.intl.format(T.default.g476ZL, { name: "Exyl" }),
                      }),
                  a
                      ? null
                      : (0, r.jsx)(s.animated.div, {
                            style: F,
                            children: (0, r.jsx)(l.Z, {
                                autoPlay: !G,
                                muted: !0,
                                playsInline: !0,
                                loop: !0,
                                className: C.logoVideo,
                                children: (0, r.jsx)("source", {
                                    src: P.Z,
                                    type: "video/webm",
                                }),
                            }),
                        }),
                  (0, r.jsx)(l.Z, {
                      ref: M,
                      autoPlay: !G,
                      muted: !0,
                      playsInline: !0,
                      className: o()(C.introVideo, { [C.introVideoHidden]: !a }),
                      onTimeUpdate: a ? Z : void 0,
                      children: (0, r.jsx)("source", {
                          src: N.Z,
                          type: "video/webm",
                      }),
                  }),
                  a
                      ? null
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(v.Z, {
                                    variant: "display-lg",
                                    className: C.title,
                                    textClassName: C.text,
                                    text: A.intl.string(T.default["CdU/PF"]),
                                    delay: x,
                                }),
                                (0, r.jsx)(v.Z, {
                                    variant: "text-lg/medium",
                                    className: C.subtitleAnimated,
                                    textClassName: C.text,
                                    text: A.intl.string(T.default["M/LvW0"]),
                                    delay: x + v.t,
                                }),
                            ],
                        }),
                  a
                      ? null
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(s.animated.div, {
                                    style: B,
                                    children: [
                                        (0, r.jsx)(E.Z, {
                                            className: C.knickKnacks,
                                            slide: S.yD.WELCOME,
                                        }),
                                        (0, r.jsxs)(h.Z, {
                                            contentClassName: C.startButtonContent,
                                            onClick: t,
                                            "aria-label": A.intl.string(A.t.I0v0Qv),
                                            muteSound: !0,
                                            children: [
                                                (0, r.jsx)(u.o1U, {
                                                    colorClass: C.iconColor,
                                                    color: U,
                                                    size: "md",
                                                }),
                                                A.intl.string(A.t.I0v0Qv),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    style: F,
                                    children: (0, r.jsx)(O.Z, {
                                        className: C.ratingIcon,
                                        style: { color: U },
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
