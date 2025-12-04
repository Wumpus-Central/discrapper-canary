n.d(t, { Z: () => G }), n(388685);
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
    p = n(100527),
    _ = n(1585),
    m = n(594174),
    h = n(580130),
    g = n(63063),
    E = n(515970),
    b = n(324060),
    y = n(5888),
    O = n(639949),
    v = n(909397),
    S = n(198358),
    I = n(391876),
    T = n(549542),
    A = n(935212),
    C = n(612776),
    N = n(981631),
    P = n(140939),
    R = n(388032),
    w = n(296953),
    D = n(550770),
    x = n(807808);
let L = 2.8,
    j = 2,
    M = 1000,
    k = 500,
    U = 1000 + A.t;
function G(e) {
    let { onNextStep: t } = e,
        n = (0, c.e7)([y.Z], () => y.Z.getFetchState() === y.p.ERROR || null == y.Z.getCheckpointData().messages),
        [a, G] = i.useState(!0),
        Z = i.useRef(null),
        B = i.useContext(b.Q),
        F = (0, u.dQu)(B.primaryColor).hex(),
        V = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
        H = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
        { avatarDecoration: Y } = (0, c.e7)([y.Z], () => y.Z.getCheckpointData()),
        W = (0, c.Wu)([h.Z], () => {
            if ((null == Y ? void 0 : Y.skuId) == null) return [];
            let e = h.Z.getForSku(null == Y ? void 0 : Y.skuId);
            return null != e ? [...e] : [];
        })[0],
        K = null != W,
        z = i.useRef(!1);
    i.useEffect(() => {
        null != W &&
            null != H &&
            z.current &&
            n &&
            (0, _.ps)({
                analyticsLocations: [p.Z.CHECKPOINT],
                initialSelectedDecoration: Y,
            });
    }, [W, H, Y, n]);
    let q = i.useCallback((e) => {
            e.currentTarget.currentTime >= L && G(!1);
        }, []),
        Q = (0, u.q_F)({
            from: { opacity: 0 },
            to: { opacity: 1 },
            pause: a,
            delay: U,
        }),
        X = (0, u.q_F)({
            from: { opacity: 0 },
            to: { opacity: 1 },
            pause: a,
        });
    i.useEffect(() => {
        null != Z.current && (Z.current.playbackRate = j);
    }, []),
        i.useEffect(() => {
            if (V) {
                null != Z.current && (Z.current.currentTime = 0.2);
                let e = setTimeout(() => {
                    G(!1);
                }, M);
                return () => clearTimeout(e);
            }
        }, [V]);
    let J = () => {
            (0, d.Z)(g.Z.getArticleURL(N.BhN.CHECKPOINT));
        },
        $ = () => {
            K || ((z.current = !0), (0, E._Z)());
        };
    return n
        ? (0, r.jsxs)(S.Z, {
              className: w.unavailableContainer,
              children: [
                  (0, r.jsx)(l.Z, {
                      autoPlay: !V,
                      muted: !0,
                      playsInline: !0,
                      loop: !0,
                      className: w.unavailableLogo,
                      children: (0, r.jsx)("source", {
                          src: x.Z,
                          type: "video/webm",
                      }),
                  }),
                  (0, r.jsx)(I.Z, {
                      variant: "display-lg",
                      className: w.display,
                      children: R.intl.string(P.default.kimsIr),
                  }),
                  (0, r.jsx)(I.Z, {
                      variant: "heading-xl/medium",
                      className: w.subtitle,
                      children: R.intl.format(P.default.GNHD4i, {
                          learnMoreHook: (e, t) =>
                              (0, r.jsx)(
                                  u.P3F,
                                  {
                                      onClick: J,
                                      className: w.learnMore,
                                      children: (0, r.jsx)(I.Z, {
                                          variant: "heading-xl/medium",
                                          className: w.link,
                                          children: e,
                                      }),
                                  },
                                  t,
                              ),
                      }),
                  }),
                  (0, r.jsx)(I.Z, {
                      variant: "text-lg/medium",
                      children: R.intl.string(P.default["xLI+Hj"]),
                  }),
                  (0, r.jsx)(O.Z, {
                      disabled: K,
                      onClick: $,
                      className: w.claimButton,
                      children: (0, r.jsx)(I.Z, {
                          variant: "eyebrow",
                          className: w.buttonCTA,
                          children: K ? R.intl.string(R.t.lIsIFo) : R.intl.string(P.default.mDxM7m),
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)(S.Z, {
              className: w.content,
              noPadding: !0,
              children: [
                  !a &&
                      (0, r.jsx)(I.Z, {
                          variant: "text-lg/medium",
                          className: w.disclaimer,
                          children: R.intl.format(P.default["1jPMeG"], {
                              learnMoreHook: (e, t) =>
                                  (0, r.jsx)(
                                      u.P3F,
                                      {
                                          onClick: J,
                                          className: w.learnMore,
                                          children: (0, r.jsx)(I.Z, {
                                              variant: "text-lg/medium",
                                              className: w.link,
                                              children: e,
                                          }),
                                      },
                                      t,
                                  ),
                          }),
                      }),
                  !a &&
                      (0, r.jsx)(I.Z, {
                          variant: "text-md/medium",
                          className: w.attribution,
                          children: R.intl.format(P.default.g476ZL, { name: "Exyl" }),
                      }),
                  a
                      ? null
                      : (0, r.jsx)(s.animated.div, {
                            style: X,
                            children: (0, r.jsx)(l.Z, {
                                autoPlay: !V,
                                muted: !0,
                                playsInline: !0,
                                loop: !0,
                                className: w.logoVideo,
                                children: (0, r.jsx)("source", {
                                    src: x.Z,
                                    type: "video/webm",
                                }),
                            }),
                        }),
                  (0, r.jsx)(l.Z, {
                      ref: Z,
                      autoPlay: !V,
                      muted: !0,
                      playsInline: !0,
                      className: o()(w.introVideo, { [w.introVideoHidden]: !a }),
                      onTimeUpdate: a ? q : void 0,
                      children: (0, r.jsx)("source", {
                          src: D.Z,
                          type: "video/webm",
                      }),
                  }),
                  a
                      ? null
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(A.Z, {
                                    variant: "display-lg",
                                    className: w.title,
                                    textClassName: w.text,
                                    text: R.intl.string(P.default["CdU/PF"]),
                                    delay: k,
                                }),
                                (0, r.jsx)(A.Z, {
                                    variant: "text-lg/medium",
                                    className: w.subtitleAnimated,
                                    textClassName: w.text,
                                    text: R.intl.string(P.default["M/LvW0"]),
                                    delay: k + A.t,
                                }),
                            ],
                        }),
                  a
                      ? null
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(s.animated.div, {
                                    style: Q,
                                    children: [
                                        (0, r.jsx)(v.Z, {
                                            className: w.knickKnacks,
                                            slide: C.yD.WELCOME,
                                        }),
                                        (0, r.jsxs)(O.Z, {
                                            contentClassName: w.startButtonContent,
                                            onClick: t,
                                            "aria-label": R.intl.string(R.t.I0v0Qv),
                                            muteSound: !0,
                                            children: [
                                                (0, r.jsx)(u.o1U, {
                                                    colorClass: w.iconColor,
                                                    color: F,
                                                    size: "md",
                                                }),
                                                R.intl.string(R.t.I0v0Qv),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    style: X,
                                    children: (0, r.jsx)(T.Z, {
                                        className: w.ratingIcon,
                                        style: { color: F },
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
