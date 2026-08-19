n.d(t, { h: () => v, u: () => C }), n(323874), n(14289), n(35956);
var i,
    l = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(299619),
    c = n(939249),
    d = n(834730),
    u = n(408278),
    m = n(821609),
    h = n(17928),
    g = n(866665),
    p = n(775602),
    A = n(140651),
    x = n(354287),
    f = n(878369),
    E = n(838541),
    I = n(772008),
    C = (((i = {})[(i.BOT = 0)] = "BOT"), (i[(i.ACTIVITY = 1)] = "ACTIVITY"), i);
function _(e) {
    let { onClick: t, children: n, className: i } = e;
    return null != t
        ? (0, l.jsx)(c.D, { onClick: t, className: r()({ [I.or]: null != t }, i), children: n })
        : (0, l.jsx)("div", { className: i, children: n });
}
function v(e) {
    let {
        title: t,
        header: n,
        footer: i,
        info: a,
        staticBannerSrc: c,
        videoBannerSrc: C,
        hideBanner: v = !1,
        bannerAspectRatio: N = 0,
        iconSrc: j,
        actions: T = [],
        primaryActionFirst: S = !1,
        trackingConfig: y,
        onClickContent: b,
        onClickBanner: R,
    } = e;
    y = (0, f.Q)(y);
    let { primaryColor: L, secondaryColor: M } = (0, A.A)(j ?? c),
        k = `linear-gradient(45deg, ${L}, ${M})`,
        O = (0, h.bG)([p.Ay], () => p.Ay.useReducedMotion),
        P = (0, x.DC)(y),
        D = null != c && !v,
        U = null != C && !1 === O && !v,
        G = D || U,
        w = 0 === N ? I.pv : I.$g,
        H = s.useRef(null),
        V = s.useCallback(() => {
            let e = H.current;
            null == e || ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        B = s.useMemo(() => !!U && new URL(C).pathname.endsWith(".gif"), [U, C]),
        F = s.useMemo(() => {
            if (null != b)
                return (e) => {
                    b(e),
                        (0, x.gx)({
                            applicationId: y.id,
                            linkType: y.linkType,
                            area: x.kY.CONTENT,
                            referrerId: y.referrerId,
                            customId: y.activityCustomId,
                            isDeadEnd: y.isDeadEnd,
                            messageId: y.messageId,
                        });
                };
        }, [b, y]),
        z = s.useMemo(() => {
            if (null != R)
                return (e) => {
                    R(e),
                        (0, x.gx)({
                            applicationId: y.id,
                            linkType: y.linkType,
                            area: x.kY.BANNER,
                            referrerId: y.referrerId,
                            customId: y.activityCustomId,
                            isDeadEnd: y.isDeadEnd,
                            messageId: y.messageId,
                        });
                };
        }, [R, y]);
    return (0, l.jsxs)("div", {
        ref: P,
        className: I.E6,
        style: { background: k },
        children: [
            G &&
                (0, l.jsxs)(_, {
                    onClick: z,
                    className: r()(I.cy, w, { [I.wk]: U }),
                    children: [
                        U &&
                            (B
                                ? (0, l.jsx)("div", { className: I.O9, style: { backgroundImage: `url(${C})` } })
                                : (0, l.jsx)(o.A, {
                                      ref: H,
                                      src: C,
                                      mediaLayoutType: E.dG.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: I.O9,
                                  })),
                        D &&
                            (0, l.jsx)("div", {
                                className: I.LR,
                                style: { backgroundImage: `url(${c})` },
                                onTransitionEnd: V,
                            }),
                    ],
                }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsxs)("div", {
                        className: I.hQ,
                        children: [
                            null != n &&
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/semibold",
                                    color: "none",
                                    className: I.wx,
                                    children: n,
                                }),
                            (0, l.jsxs)(_, {
                                onClick: F,
                                className: r()(I.FG, { [I.ry]: null != F }),
                                children: [
                                    null != j &&
                                        (0, l.jsx)("div", { className: I._8, style: { backgroundImage: `url(${j})` } }),
                                    (0, l.jsxs)("div", {
                                        className: I.Qs,
                                        children: [
                                            (0, l.jsx)(d.E, {
                                                variant: "text-md/semibold",
                                                color: "none",
                                                lineClamp: 1,
                                                className: I.eu,
                                                children: t,
                                            }),
                                            (0, l.jsx)("div", { className: I.rj, children: a }),
                                        ],
                                    }),
                                ],
                            }),
                            T.length > 0 &&
                                (0, l.jsx)("div", {
                                    className: r()(I.AC, S ? I.ad : null),
                                    children: T.map((e, t) => {
                                        let {
                                                label: n,
                                                icon: i,
                                                onClick: s,
                                                disabled: a,
                                                disabledReason: r,
                                                submitting: o,
                                                trackingArea: c,
                                                isDeadEnd: h,
                                                iconButton: p,
                                                buttonRef: A,
                                            } = e,
                                            f = 0 === t;
                                        return p
                                            ? (0, l.jsx)(
                                                  g.m,
                                                  {
                                                      text: n,
                                                      targetElementRef: A,
                                                      children: (0, l.jsx)(u.K, {
                                                          variant: f ? "overlay-primary" : "overlay-secondary",
                                                          disabled: a || null != r,
                                                          loading: o,
                                                          icon: i,
                                                          "aria-label": n,
                                                          buttonRef: A,
                                                          onClick: (e) => {
                                                              s(e),
                                                                  (0, x.gx)({
                                                                      applicationId: y.id,
                                                                      linkType: y.linkType,
                                                                      area: c,
                                                                      referrerId: y.referrerId,
                                                                      customId: y.activityCustomId,
                                                                      isDeadEnd: h,
                                                                      messageId: y.messageId,
                                                                  });
                                                          },
                                                      }),
                                                  },
                                                  n,
                                              )
                                            : (0, l.jsxs)(
                                                  "div",
                                                  {
                                                      className: I.uc,
                                                      children: [
                                                          (0, l.jsx)(m.$, {
                                                              variant: f ? "overlay-primary" : "overlay-secondary",
                                                              disabled: a || null != r,
                                                              loading: o,
                                                              icon: i,
                                                              text: n,
                                                              buttonRef: A,
                                                              onClick: (e) => {
                                                                  s(e),
                                                                      (0, x.gx)({
                                                                          applicationId: y.id,
                                                                          linkType: y.linkType,
                                                                          area: c,
                                                                          referrerId: y.referrerId,
                                                                          customId: y.activityCustomId,
                                                                          isDeadEnd: h,
                                                                          messageId: y.messageId,
                                                                      });
                                                              },
                                                              fullWidth: !0,
                                                          }),
                                                          null != r &&
                                                              (0, l.jsx)(d.E, {
                                                                  variant: "text-xs/medium",
                                                                  color: "none",
                                                                  className: I.H$,
                                                                  children: r,
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
}
