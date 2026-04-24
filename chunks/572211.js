n.d(t, { h: () => y, u: () => E }), n(323874), n(14289), n(35956);
var i,
    l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(299619),
    c = n(172218),
    d = n(939249),
    u = n(834730),
    _ = n(408278),
    m = n(821609),
    h = n(17928),
    p = n(990078),
    g = n(775602),
    f = n(140651),
    x = n(495544),
    A = n(354287),
    C = n(768349),
    v = n(838541),
    I = n(351280),
    E = (((i = {})[(i.BOT = 0)] = "BOT"), (i[(i.ACTIVITY = 1)] = "ACTIVITY"), i);
function b(e) {
    let { onClick: t, children: n, className: i } = e;
    return null != t
        ? (0, l.jsx)(d.D, { onClick: t, className: s()({ [I.or]: null != t }, i), children: n })
        : (0, l.jsx)("div", { className: i, children: n });
}
function y(e) {
    var t;
    let {
        title: n,
        header: i,
        footer: r,
        info: d,
        staticBannerSrc: E,
        videoBannerSrc: y,
        bannerAspectRatio: T = 0,
        iconSrc: j,
        actions: N = [],
        primaryActionFirst: S = !1,
        trackingConfig: k,
        onClickContent: L,
        onClickBanner: R,
    } = e;
    (t = k),
        (k = {
            id: t?.id ?? "0",
            linkType: t?.linkType ?? C.J.UNKNOWN,
            referrerId: t?.referrerId ?? x.default.getId(),
            activityCustomId: t?.activityCustomId,
            onView: t?.onView,
            onLinkCopied: t?.onLinkCopied,
            guildId: t?.guildId,
            channelId: t?.channelId,
            messageId: t?.messageId,
            isDeadEnd: t?.isDeadEnd ?? !1,
        });
    let { primaryColor: w, secondaryColor: P } = (0, f.A)(j ?? E),
        D = `linear-gradient(45deg, ${w}, ${P})`,
        M = (0, h.bG)([g.A], () => g.A.useReducedMotion),
        O = a.useRef(!1),
        U = (0, c.K)(
            (e) => {
                !1 === O.current &&
                    e &&
                    (k?.onView?.(),
                    (0, A.wV)({
                        appId: k.id,
                        linkType: k.linkType,
                        referrerId: k.referrerId,
                        customId: k.activityCustomId,
                        guildId: k.guildId,
                        channelId: k.channelId,
                        messageId: k.messageId,
                    }),
                    (O.current = !0));
            },
            void 0,
        ),
        G = null != E,
        B = null != y && !1 === M,
        V = G || B,
        F = 0 === T ? I.pv : I.$g,
        H = a.useRef(null),
        z = a.useCallback(() => {
            let e = H.current;
            null == e || ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        W = a.useMemo(() => !!B && new URL(y).pathname.endsWith(".gif"), [B, y]),
        Y = a.useMemo(() => {
            if (null != L)
                return (e) => {
                    L(e),
                        (0, A.gx)({
                            applicationId: k.id,
                            linkType: k.linkType,
                            area: A.kY.CONTENT,
                            referrerId: k.referrerId,
                            customId: k.activityCustomId,
                            isDeadEnd: k.isDeadEnd,
                        });
                };
        }, [L, k]),
        K = a.useMemo(() => {
            if (null != R)
                return (e) => {
                    R(e),
                        (0, A.gx)({
                            applicationId: k.id,
                            linkType: k.linkType,
                            area: A.kY.BANNER,
                            referrerId: k.referrerId,
                            customId: k.activityCustomId,
                            isDeadEnd: k.isDeadEnd,
                        });
                };
        }, [R, k]);
    return (0, l.jsxs)("div", {
        ref: U,
        className: I.E6,
        children: [
            V &&
                (0, l.jsxs)(b, {
                    onClick: K,
                    className: s()(I.cy, F, { [I.wk]: B }),
                    children: [
                        B &&
                            (W
                                ? (0, l.jsx)("div", { className: I.O9, style: { backgroundImage: `url(${y})` } })
                                : (0, l.jsx)(o.A, {
                                      ref: H,
                                      src: y,
                                      mediaLayoutType: v.dG.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: I.O9,
                                  })),
                        G &&
                            (0, l.jsx)("div", {
                                className: I.LR,
                                style: { backgroundImage: `url(${E})` },
                                onTransitionEnd: z,
                            }),
                    ],
                }),
            (0, l.jsxs)("div", {
                style: { background: D },
                children: [
                    (0, l.jsxs)("div", {
                        className: I.hQ,
                        children: [
                            null != i &&
                                (0, l.jsx)(u.E, {
                                    variant: "text-sm/semibold",
                                    color: "none",
                                    className: I.wx,
                                    children: i,
                                }),
                            (0, l.jsxs)(b, {
                                onClick: Y,
                                className: s()(I.FG, { [I.ry]: null != Y }),
                                children: [
                                    null != j &&
                                        (0, l.jsx)("div", { className: I._8, style: { backgroundImage: `url(${j})` } }),
                                    (0, l.jsxs)("div", {
                                        className: I.Qs,
                                        children: [
                                            (0, l.jsx)(u.E, {
                                                variant: "text-md/semibold",
                                                color: "none",
                                                lineClamp: 1,
                                                className: I.eu,
                                                children: n,
                                            }),
                                            (0, l.jsx)("div", { className: I.rj, children: d }),
                                        ],
                                    }),
                                ],
                            }),
                            N.length > 0 &&
                                (0, l.jsx)("div", {
                                    className: s()(I.AC, S ? I.ad : null),
                                    children: N.map((e, t) => {
                                        let {
                                                label: n,
                                                icon: i,
                                                onClick: a,
                                                disabled: r,
                                                disabledReason: s,
                                                submitting: o,
                                                trackingArea: c,
                                                isDeadEnd: d,
                                                iconButton: h,
                                                buttonRef: g,
                                            } = e,
                                            f = 0 === t;
                                        return h
                                            ? (0, l.jsx)(
                                                  p.m,
                                                  {
                                                      text: n,
                                                      targetElementRef: g,
                                                      children: (0, l.jsx)(_.K, {
                                                          variant: f ? "overlay-primary" : "overlay-secondary",
                                                          disabled: r || null != s,
                                                          loading: o,
                                                          icon: i,
                                                          "aria-label": n,
                                                          buttonRef: g,
                                                          onClick: (e) => {
                                                              a(e),
                                                                  (0, A.gx)({
                                                                      applicationId: k.id,
                                                                      linkType: k.linkType,
                                                                      area: c,
                                                                      referrerId: k.referrerId,
                                                                      customId: k.activityCustomId,
                                                                      isDeadEnd: d,
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
                                                              disabled: r || null != s,
                                                              loading: o,
                                                              icon: i,
                                                              text: n,
                                                              buttonRef: g,
                                                              onClick: (e) => {
                                                                  a(e),
                                                                      (0, A.gx)({
                                                                          applicationId: k.id,
                                                                          linkType: k.linkType,
                                                                          area: c,
                                                                          referrerId: k.referrerId,
                                                                          customId: k.activityCustomId,
                                                                          isDeadEnd: d,
                                                                      });
                                                              },
                                                              fullWidth: !0,
                                                          }),
                                                          null != s &&
                                                              (0, l.jsx)(u.E, {
                                                                  variant: "text-xs/medium",
                                                                  color: "none",
                                                                  className: I.H$,
                                                                  children: s,
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
