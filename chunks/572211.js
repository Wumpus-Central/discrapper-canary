n.d(t, { h: () => _, u: () => I }), n(323874), n(14289), n(35956);
var i,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(299619),
    d = n(939249),
    c = n(834730),
    u = n(408278),
    m = n(821609),
    h = n(17928),
    g = n(990078),
    p = n(775602),
    A = n(140651),
    x = n(354287),
    f = n(878369),
    E = n(838541),
    C = n(351280),
    I = (((i = {})[(i.BOT = 0)] = "BOT"), (i[(i.ACTIVITY = 1)] = "ACTIVITY"), i);
function v(e) {
    let { onClick: t, children: n, className: i } = e;
    return null != t
        ? (0, l.jsx)(d.D, { onClick: t, className: a()({ [C.or]: null != t }, i), children: n })
        : (0, l.jsx)("div", { className: i, children: n });
}
function _(e) {
    let {
        title: t,
        header: n,
        footer: i,
        info: r,
        staticBannerSrc: d,
        videoBannerSrc: I,
        hideBanner: _ = !1,
        bannerAspectRatio: j = 0,
        iconSrc: N,
        actions: T = [],
        primaryActionFirst: y = !1,
        trackingConfig: S,
        onClickContent: b,
        onClickBanner: L,
    } = e;
    S = (0, f.Q)(S);
    let { primaryColor: R, secondaryColor: k } = (0, A.A)(N ?? d),
        M = `linear-gradient(45deg, ${R}, ${k})`,
        P = (0, h.bG)([p.Ay], () => p.Ay.useReducedMotion),
        w = (0, x.DC)(S),
        D = null != d && !_,
        O = null != I && !1 === P && !_,
        U = D || O,
        G = 0 === j ? C.pv : C.$g,
        V = s.useRef(null),
        B = s.useCallback(() => {
            let e = V.current;
            null == e || ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        H = s.useMemo(() => !!O && new URL(I).pathname.endsWith(".gif"), [O, I]),
        F = s.useMemo(() => {
            if (null != b)
                return (e) => {
                    b(e),
                        (0, x.gx)({
                            applicationId: S.id,
                            linkType: S.linkType,
                            area: x.kY.CONTENT,
                            referrerId: S.referrerId,
                            customId: S.activityCustomId,
                            isDeadEnd: S.isDeadEnd,
                            messageId: S.messageId,
                        });
                };
        }, [b, S]),
        Y = s.useMemo(() => {
            if (null != L)
                return (e) => {
                    L(e),
                        (0, x.gx)({
                            applicationId: S.id,
                            linkType: S.linkType,
                            area: x.kY.BANNER,
                            referrerId: S.referrerId,
                            customId: S.activityCustomId,
                            isDeadEnd: S.isDeadEnd,
                            messageId: S.messageId,
                        });
                };
        }, [L, S]);
    return (0, l.jsxs)("div", {
        ref: w,
        className: C.E6,
        style: { background: M },
        children: [
            U &&
                (0, l.jsxs)(v, {
                    onClick: Y,
                    className: a()(C.cy, G, { [C.wk]: O }),
                    children: [
                        O &&
                            (H
                                ? (0, l.jsx)("div", { className: C.O9, style: { backgroundImage: `url(${I})` } })
                                : (0, l.jsx)(o.A, {
                                      ref: V,
                                      src: I,
                                      mediaLayoutType: E.dG.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: C.O9,
                                  })),
                        D &&
                            (0, l.jsx)("div", {
                                className: C.LR,
                                style: { backgroundImage: `url(${d})` },
                                onTransitionEnd: B,
                            }),
                    ],
                }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsxs)("div", {
                        className: C.hQ,
                        children: [
                            null != n &&
                                (0, l.jsx)(c.E, {
                                    variant: "text-sm/semibold",
                                    color: "none",
                                    className: C.wx,
                                    children: n,
                                }),
                            (0, l.jsxs)(v, {
                                onClick: F,
                                className: a()(C.FG, { [C.ry]: null != F }),
                                children: [
                                    null != N &&
                                        (0, l.jsx)("div", { className: C._8, style: { backgroundImage: `url(${N})` } }),
                                    (0, l.jsxs)("div", {
                                        className: C.Qs,
                                        children: [
                                            (0, l.jsx)(c.E, {
                                                variant: "text-md/semibold",
                                                color: "none",
                                                lineClamp: 1,
                                                className: C.eu,
                                                children: t,
                                            }),
                                            (0, l.jsx)("div", { className: C.rj, children: r }),
                                        ],
                                    }),
                                ],
                            }),
                            T.length > 0 &&
                                (0, l.jsx)("div", {
                                    className: a()(C.AC, y ? C.ad : null),
                                    children: T.map((e, t) => {
                                        let {
                                                label: n,
                                                icon: i,
                                                onClick: s,
                                                disabled: r,
                                                disabledReason: a,
                                                submitting: o,
                                                trackingArea: d,
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
                                                          disabled: r || null != a,
                                                          loading: o,
                                                          icon: i,
                                                          "aria-label": n,
                                                          buttonRef: A,
                                                          onClick: (e) => {
                                                              s(e),
                                                                  (0, x.gx)({
                                                                      applicationId: S.id,
                                                                      linkType: S.linkType,
                                                                      area: d,
                                                                      referrerId: S.referrerId,
                                                                      customId: S.activityCustomId,
                                                                      isDeadEnd: h,
                                                                      messageId: S.messageId,
                                                                  });
                                                          },
                                                      }),
                                                  },
                                                  n,
                                              )
                                            : (0, l.jsxs)(
                                                  "div",
                                                  {
                                                      className: C.uc,
                                                      children: [
                                                          (0, l.jsx)(m.$, {
                                                              variant: f ? "overlay-primary" : "overlay-secondary",
                                                              disabled: r || null != a,
                                                              loading: o,
                                                              icon: i,
                                                              text: n,
                                                              buttonRef: A,
                                                              onClick: (e) => {
                                                                  s(e),
                                                                      (0, x.gx)({
                                                                          applicationId: S.id,
                                                                          linkType: S.linkType,
                                                                          area: d,
                                                                          referrerId: S.referrerId,
                                                                          customId: S.activityCustomId,
                                                                          isDeadEnd: h,
                                                                          messageId: S.messageId,
                                                                      });
                                                              },
                                                              fullWidth: !0,
                                                          }),
                                                          null != a &&
                                                              (0, l.jsx)(c.E, {
                                                                  variant: "text-xs/medium",
                                                                  color: "none",
                                                                  className: C.H$,
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
}
