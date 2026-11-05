(n(323874), n(14289), n(35956));
var i,
    l = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(299619),
    d = n(855986),
    c = n(939249),
    u = n(834730),
    m = n(866665),
    h = n(408278),
    g = n(821609),
    p = n(775602),
    A = n(823545),
    x = n(354287),
    f = n(878369),
    I = n(838541),
    E = n(201281),
    v = (((i = {})[(i.BOT = 0)] = "BOT"), (i[(i.ACTIVITY = 1)] = "ACTIVITY"), i);
function C(e) {
    let { onClick: t, children: n, className: i } = e;
    return null != t
        ? (0, l.jsx)(c.D, { onClick: t, className: a()({ [E.or]: null != t }, i), children: n })
        : (0, l.jsx)("div", { className: i, children: n });
}
n.d(
    t,
    {},
    {
        h: function (e) {
            let {
                title: t,
                header: n,
                footer: i,
                info: r,
                staticBannerSrc: c,
                videoBannerSrc: v,
                hideBanner: _ = !1,
                bannerAspectRatio: j = 0,
                iconSrc: N,
                actions: y = [],
                primaryActionFirst: b = !1,
                trackingConfig: T,
                onClickContent: S,
                onClickBanner: k,
            } = e;
            T = (0, f.Q)(T);
            let { primaryColor: R, secondaryColor: L } = (0, A.A)(N ?? c),
                M = `linear-gradient(45deg, ${R}, ${L})`,
                P = (0, d.bG)([p.Ay], () => p.Ay.useReducedMotion),
                D = (0, x.DC)(T),
                O = null != c && !_,
                U = null != v && !1 === P && !_,
                G = O || U,
                w = 0 === j ? E.pv : E.$g,
                B = s.useRef(null),
                H = s.useCallback(() => {
                    let e = B.current;
                    null == e || ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play());
                }, []),
                V = s.useMemo(() => !!U && new URL(v).pathname.endsWith(".gif"), [U, v]),
                F = s.useMemo(() => {
                    if (null != S)
                        return (e) => {
                            (S(e),
                                (0, x.gx)({
                                    applicationId: T.id,
                                    linkType: T.linkType,
                                    area: x.kY.CONTENT,
                                    referrerId: T.referrerId,
                                    customId: T.activityCustomId,
                                    isDeadEnd: T.isDeadEnd,
                                    messageId: T.messageId,
                                    analyticsLocations: T.analyticsLocations,
                                }));
                        };
                }, [S, T]),
                z = s.useMemo(() => {
                    if (null != k)
                        return (e) => {
                            (k(e),
                                (0, x.gx)({
                                    applicationId: T.id,
                                    linkType: T.linkType,
                                    area: x.kY.BANNER,
                                    referrerId: T.referrerId,
                                    customId: T.activityCustomId,
                                    isDeadEnd: T.isDeadEnd,
                                    messageId: T.messageId,
                                    analyticsLocations: T.analyticsLocations,
                                }));
                        };
                }, [k, T]);
            return (0, l.jsxs)("div", {
                ref: D,
                className: E.E6,
                style: { background: M },
                children: [
                    G &&
                        (0, l.jsxs)(C, {
                            onClick: z,
                            className: a()(E.cy, w, { [E.wk]: U }),
                            children: [
                                U &&
                                    (V
                                        ? (0, l.jsx)("div", {
                                              className: E.O9,
                                              style: { backgroundImage: `url(${v})` },
                                          })
                                        : (0, l.jsx)(o.A, {
                                              ref: B,
                                              src: v,
                                              mediaLayoutType: I.d.MOSAIC,
                                              loop: !0,
                                              muted: !0,
                                              className: E.O9,
                                          })),
                                O &&
                                    (0, l.jsx)("div", {
                                        className: E.LR,
                                        style: { backgroundImage: `url(${c})` },
                                        onTransitionEnd: H,
                                    }),
                            ],
                        }),
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsxs)("div", {
                                className: E.hQ,
                                children: [
                                    null != n &&
                                        (0, l.jsx)(u.E, {
                                            variant: "body-sm/semibold",
                                            color: "none",
                                            className: E.wx,
                                            children: n,
                                        }),
                                    (0, l.jsxs)(C, {
                                        onClick: F,
                                        className: a()(E.FG, { [E.ry]: null != F }),
                                        children: [
                                            null != N &&
                                                (0, l.jsx)("div", {
                                                    className: E._8,
                                                    style: { backgroundImage: `url(${N})` },
                                                }),
                                            (0, l.jsxs)("div", {
                                                className: E.Qs,
                                                children: [
                                                    (0, l.jsx)(u.E, {
                                                        variant: "body-md/semibold",
                                                        color: "none",
                                                        lineClamp: 1,
                                                        className: E.eu,
                                                        children: t,
                                                    }),
                                                    (0, l.jsx)("div", { className: E.rj, children: r }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    y.length > 0 &&
                                        (0, l.jsx)("div", {
                                            className: a()(E.AC, b ? E.ad : null),
                                            children: y.map((e, t) => {
                                                let {
                                                        label: n,
                                                        icon: i,
                                                        onClick: s,
                                                        disabled: r,
                                                        disabledReason: a,
                                                        submitting: o,
                                                        trackingArea: d,
                                                        isDeadEnd: c,
                                                        iconButton: p,
                                                        buttonRef: A,
                                                        variant: f,
                                                    } = e,
                                                    I = 0 === t;
                                                return p
                                                    ? (0, l.jsx)(
                                                          m.m,
                                                          {
                                                              text: n,
                                                              targetElementRef: A,
                                                              children: (0, l.jsx)(h.K, {
                                                                  variant: I ? "overlay-primary" : "overlay-secondary",
                                                                  disabled: r || null != a,
                                                                  loading: o,
                                                                  icon: i,
                                                                  "aria-label": n,
                                                                  buttonRef: A,
                                                                  onClick: (e) => {
                                                                      (s(e),
                                                                          (0, x.gx)({
                                                                              applicationId: T.id,
                                                                              linkType: T.linkType,
                                                                              area: d,
                                                                              referrerId: T.referrerId,
                                                                              customId: T.activityCustomId,
                                                                              isDeadEnd: c,
                                                                              messageId: T.messageId,
                                                                              analyticsLocations: T.analyticsLocations,
                                                                          }));
                                                                  },
                                                              }),
                                                          },
                                                          n,
                                                      )
                                                    : (0, l.jsxs)(
                                                          "div",
                                                          {
                                                              className: E.uc,
                                                              children: [
                                                                  (0, l.jsx)(g.$, {
                                                                      variant:
                                                                          f ??
                                                                          (I ? "overlay-primary" : "overlay-secondary"),
                                                                      disabled: r || null != a,
                                                                      loading: o,
                                                                      icon: i,
                                                                      text: n,
                                                                      buttonRef: A,
                                                                      onClick: (e) => {
                                                                          (s(e),
                                                                              (0, x.gx)({
                                                                                  applicationId: T.id,
                                                                                  linkType: T.linkType,
                                                                                  area: d,
                                                                                  referrerId: T.referrerId,
                                                                                  customId: T.activityCustomId,
                                                                                  isDeadEnd: c,
                                                                                  messageId: T.messageId,
                                                                                  analyticsLocations:
                                                                                      T.analyticsLocations,
                                                                              }));
                                                                      },
                                                                      fullWidth: !0,
                                                                  }),
                                                                  null != a &&
                                                                      (0, l.jsx)(u.E, {
                                                                          variant: "body-xs/medium",
                                                                          color: "none",
                                                                          className: E.H$,
                                                                          children: a,
                                                                      }),
                                                              ],
                                                          },
                                                          n,
                                                      );
                                            }),
                                        }),
                                ],
                            }),
                            null != i && i,
                        ],
                    }),
                ],
            });
        },
        u: v,
    },
);
