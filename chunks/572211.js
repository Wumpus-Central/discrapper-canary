n.d(t, { h: () => N, u: () => _ }), n(323874), n(14289), n(35956);
var i,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(299619),
    d = n(172218),
    c = n(939249),
    u = n(834730),
    m = n(408278),
    h = n(821609),
    g = n(17928),
    p = n(990078),
    A = n(775602),
    x = n(140651),
    f = n(495544),
    E = n(354287),
    I = n(768349),
    C = n(838541),
    v = n(351280),
    _ = (((i = {})[(i.BOT = 0)] = "BOT"), (i[(i.ACTIVITY = 1)] = "ACTIVITY"), i);
function j(e) {
    let { onClick: t, children: n, className: i } = e;
    return null != t
        ? (0, l.jsx)(c.D, { onClick: t, className: a()({ [v.or]: null != t }, i), children: n })
        : (0, l.jsx)("div", { className: i, children: n });
}
function N(e) {
    var t;
    let {
        title: n,
        header: i,
        footer: r,
        info: c,
        staticBannerSrc: _,
        videoBannerSrc: N,
        hideBanner: T = !1,
        bannerAspectRatio: y = 0,
        iconSrc: S,
        actions: b = [],
        primaryActionFirst: L = !1,
        trackingConfig: R,
        onClickContent: k,
        onClickBanner: M,
    } = e;
    (t = R),
        (R = {
            id: t?.id ?? "0",
            linkType: t?.linkType ?? I.J.UNKNOWN,
            referrerId: t?.referrerId ?? f.default.getId(),
            activityCustomId: t?.activityCustomId,
            onView: t?.onView,
            onLinkCopied: t?.onLinkCopied,
            guildId: t?.guildId,
            channelId: t?.channelId,
            messageId: t?.messageId,
            isDeadEnd: t?.isDeadEnd ?? !1,
        });
    let { primaryColor: P, secondaryColor: D } = (0, x.A)(S ?? _),
        w = `linear-gradient(45deg, ${P}, ${D})`,
        O = (0, g.bG)([A.Ay], () => A.Ay.useReducedMotion),
        U = s.useRef(!1),
        G = (0, d.K)(
            (e) => {
                !1 === U.current &&
                    e &&
                    (R?.onView?.(),
                    (0, E.wV)({
                        appId: R.id,
                        linkType: R.linkType,
                        referrerId: R.referrerId,
                        customId: R.activityCustomId,
                        guildId: R.guildId,
                        channelId: R.channelId,
                        messageId: R.messageId,
                    }),
                    (U.current = !0));
            },
            void 0,
        ),
        V = null != _ && !T,
        B = null != N && !1 === O && !T,
        H = V || B,
        F = 0 === y ? v.pv : v.$g,
        Y = s.useRef(null),
        z = s.useCallback(() => {
            let e = Y.current;
            null == e || ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        W = s.useMemo(() => !!B && new URL(N).pathname.endsWith(".gif"), [B, N]),
        K = s.useMemo(() => {
            if (null != k)
                return (e) => {
                    k(e),
                        (0, E.gx)({
                            applicationId: R.id,
                            linkType: R.linkType,
                            area: E.kY.CONTENT,
                            referrerId: R.referrerId,
                            customId: R.activityCustomId,
                            isDeadEnd: R.isDeadEnd,
                        });
                };
        }, [k, R]),
        J = s.useMemo(() => {
            if (null != M)
                return (e) => {
                    M(e),
                        (0, E.gx)({
                            applicationId: R.id,
                            linkType: R.linkType,
                            area: E.kY.BANNER,
                            referrerId: R.referrerId,
                            customId: R.activityCustomId,
                            isDeadEnd: R.isDeadEnd,
                        });
                };
        }, [M, R]);
    return (0, l.jsxs)("div", {
        ref: G,
        className: v.E6,
        style: { background: w },
        children: [
            H &&
                (0, l.jsxs)(j, {
                    onClick: J,
                    className: a()(v.cy, F, { [v.wk]: B }),
                    children: [
                        B &&
                            (W
                                ? (0, l.jsx)("div", { className: v.O9, style: { backgroundImage: `url(${N})` } })
                                : (0, l.jsx)(o.A, {
                                      ref: Y,
                                      src: N,
                                      mediaLayoutType: C.dG.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: v.O9,
                                  })),
                        V &&
                            (0, l.jsx)("div", {
                                className: v.LR,
                                style: { backgroundImage: `url(${_})` },
                                onTransitionEnd: z,
                            }),
                    ],
                }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsxs)("div", {
                        className: v.hQ,
                        children: [
                            null != i &&
                                (0, l.jsx)(u.E, {
                                    variant: "text-sm/semibold",
                                    color: "none",
                                    className: v.wx,
                                    children: i,
                                }),
                            (0, l.jsxs)(j, {
                                onClick: K,
                                className: a()(v.FG, { [v.ry]: null != K }),
                                children: [
                                    null != S &&
                                        (0, l.jsx)("div", { className: v._8, style: { backgroundImage: `url(${S})` } }),
                                    (0, l.jsxs)("div", {
                                        className: v.Qs,
                                        children: [
                                            (0, l.jsx)(u.E, {
                                                variant: "text-md/semibold",
                                                color: "none",
                                                lineClamp: 1,
                                                className: v.eu,
                                                children: n,
                                            }),
                                            (0, l.jsx)("div", { className: v.rj, children: c }),
                                        ],
                                    }),
                                ],
                            }),
                            b.length > 0 &&
                                (0, l.jsx)("div", {
                                    className: a()(v.AC, L ? v.ad : null),
                                    children: b.map((e, t) => {
                                        let {
                                                label: n,
                                                icon: i,
                                                onClick: s,
                                                disabled: r,
                                                disabledReason: a,
                                                submitting: o,
                                                trackingArea: d,
                                                isDeadEnd: c,
                                                iconButton: g,
                                                buttonRef: A,
                                            } = e,
                                            x = 0 === t;
                                        return g
                                            ? (0, l.jsx)(
                                                  p.m,
                                                  {
                                                      text: n,
                                                      targetElementRef: A,
                                                      children: (0, l.jsx)(m.K, {
                                                          variant: x ? "overlay-primary" : "overlay-secondary",
                                                          disabled: r || null != a,
                                                          loading: o,
                                                          icon: i,
                                                          "aria-label": n,
                                                          buttonRef: A,
                                                          onClick: (e) => {
                                                              s(e),
                                                                  (0, E.gx)({
                                                                      applicationId: R.id,
                                                                      linkType: R.linkType,
                                                                      area: d,
                                                                      referrerId: R.referrerId,
                                                                      customId: R.activityCustomId,
                                                                      isDeadEnd: c,
                                                                  });
                                                          },
                                                      }),
                                                  },
                                                  n,
                                              )
                                            : (0, l.jsxs)(
                                                  "div",
                                                  {
                                                      className: v.uc,
                                                      children: [
                                                          (0, l.jsx)(h.$, {
                                                              variant: x ? "overlay-primary" : "overlay-secondary",
                                                              disabled: r || null != a,
                                                              loading: o,
                                                              icon: i,
                                                              text: n,
                                                              buttonRef: A,
                                                              onClick: (e) => {
                                                                  s(e),
                                                                      (0, E.gx)({
                                                                          applicationId: R.id,
                                                                          linkType: R.linkType,
                                                                          area: d,
                                                                          referrerId: R.referrerId,
                                                                          customId: R.activityCustomId,
                                                                          isDeadEnd: c,
                                                                      });
                                                              },
                                                              fullWidth: !0,
                                                          }),
                                                          null != a &&
                                                              (0, l.jsx)(u.E, {
                                                                  variant: "text-xs/medium",
                                                                  color: "none",
                                                                  className: v.H$,
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
                    null != r && r,
                ],
            }),
        ],
    });
}
