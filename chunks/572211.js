n.d(t, { h: () => T, u: () => v }), n(323874), n(14289), n(35956);
var i,
    l = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
    o = n(299619),
    d = n(172218),
    c = n(939249),
    u = n(834730),
    m = n(408278),
    _ = n(821609),
    h = n(311907),
    p = n(990078),
    g = n(775602),
    A = n(176563),
    f = n(961350),
    x = n(354287),
    C = n(768349),
    E = n(838541),
    I = n(351280),
    v = (((i = {})[(i.BOT = 0)] = "BOT"), (i[(i.ACTIVITY = 1)] = "ACTIVITY"), i);
function b(e) {
    let { onClick: t, children: n, className: i } = e;
    return null != t
        ? (0, l.jsx)(c.D, { onClick: t, className: r()({ [I.or]: null != t }, i), children: n })
        : (0, l.jsx)("div", { className: i, children: n });
}
function T(e) {
    var t;
    let {
        title: n,
        header: i,
        footer: s,
        info: c,
        staticBannerSrc: v,
        videoBannerSrc: T,
        bannerAspectRatio: S = 0,
        iconSrc: y,
        actions: N = [],
        primaryActionFirst: j = !1,
        trackingConfig: L,
        onClickContent: R,
        onClickBanner: P,
    } = e;
    (t = L),
        (L = {
            id: t?.id ?? "0",
            linkType: t?.linkType ?? C.J.UNKNOWN,
            referrerId: t?.referrerId ?? f.default.getId(),
            activityCustomId: t?.activityCustomId,
            onView: t?.onView,
            onLinkCopied: t?.onLinkCopied,
            guildId: t?.guildId,
            channelId: t?.channelId,
            messageId: t?.messageId,
            isDeadEnd: t?.isDeadEnd ?? !1,
        });
    let { primaryColor: w, secondaryColor: D } = (0, A.A)(y ?? v),
        k = `linear-gradient(45deg, ${w}, ${D})`,
        O = (0, h.bG)([g.A], () => g.A.useReducedMotion),
        M = a.useRef(!1),
        U = (0, d.K)(
            (e) => {
                !1 === M.current &&
                    e &&
                    (L?.onView?.(),
                    (0, x.wV)({
                        appId: L.id,
                        linkType: L.linkType,
                        referrerId: L.referrerId,
                        customId: L.activityCustomId,
                        guildId: L.guildId,
                        channelId: L.channelId,
                        messageId: L.messageId,
                    }),
                    (M.current = !0));
            },
            void 0,
        ),
        G = null != v,
        B = null != T && !1 === O,
        F = G || B,
        H = 0 === S ? I.pv : I.$g,
        V = a.useRef(null),
        q = a.useCallback(() => {
            let e = V.current;
            null == e || ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        W = a.useMemo(() => !!B && new URL(T).pathname.endsWith(".gif"), [B, T]),
        z = a.useMemo(() => {
            if (null != R)
                return (e) => {
                    R(e),
                        (0, x.gx)({
                            applicationId: L.id,
                            linkType: L.linkType,
                            area: x.kY.CONTENT,
                            referrerId: L.referrerId,
                            customId: L.activityCustomId,
                            isDeadEnd: L.isDeadEnd,
                        });
                };
        }, [R, L]),
        Y = a.useMemo(() => {
            if (null != P)
                return (e) => {
                    P(e),
                        (0, x.gx)({
                            applicationId: L.id,
                            linkType: L.linkType,
                            area: x.kY.BANNER,
                            referrerId: L.referrerId,
                            customId: L.activityCustomId,
                            isDeadEnd: L.isDeadEnd,
                        });
                };
        }, [P, L]);
    return (0, l.jsxs)("div", {
        ref: U,
        className: I.E6,
        children: [
            F &&
                (0, l.jsxs)(b, {
                    onClick: Y,
                    className: r()(I.cy, H, { [I.wk]: B }),
                    children: [
                        B &&
                            (W
                                ? (0, l.jsx)("div", { className: I.O9, style: { backgroundImage: `url(${T})` } })
                                : (0, l.jsx)(o.A, {
                                      ref: V,
                                      src: T,
                                      mediaLayoutType: E.dG.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: I.O9,
                                  })),
                        G &&
                            (0, l.jsx)("div", {
                                className: I.LR,
                                style: { backgroundImage: `url(${v})` },
                                onTransitionEnd: q,
                            }),
                    ],
                }),
            (0, l.jsxs)("div", {
                style: { background: k },
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
                                onClick: z,
                                className: r()(I.FG, { [I.ry]: null != z }),
                                children: [
                                    null != y &&
                                        (0, l.jsx)("div", { className: I._8, style: { backgroundImage: `url(${y})` } }),
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
                                            (0, l.jsx)("div", { className: I.rj, children: c }),
                                        ],
                                    }),
                                ],
                            }),
                            N.length > 0 &&
                                (0, l.jsx)("div", {
                                    className: r()(I.AC, j ? I.ad : null),
                                    children: N.map((e, t) => {
                                        let {
                                                label: n,
                                                icon: i,
                                                onClick: a,
                                                disabled: s,
                                                disabledReason: r,
                                                submitting: o,
                                                trackingArea: d,
                                                isDeadEnd: c,
                                                iconButton: h,
                                                buttonRef: g,
                                            } = e,
                                            A = 0 === t;
                                        return h
                                            ? (0, l.jsx)(
                                                  p.m,
                                                  {
                                                      text: n,
                                                      targetElementRef: g,
                                                      children: (0, l.jsx)(m.K, {
                                                          variant: A ? "overlay-primary" : "overlay-secondary",
                                                          disabled: s || null != r,
                                                          loading: o,
                                                          icon: i,
                                                          "aria-label": n,
                                                          buttonRef: g,
                                                          onClick: (e) => {
                                                              a(e),
                                                                  (0, x.gx)({
                                                                      applicationId: L.id,
                                                                      linkType: L.linkType,
                                                                      area: d,
                                                                      referrerId: L.referrerId,
                                                                      customId: L.activityCustomId,
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
                                                      className: I.uc,
                                                      children: [
                                                          (0, l.jsx)(_.$, {
                                                              variant: A ? "overlay-primary" : "overlay-secondary",
                                                              disabled: s || null != r,
                                                              loading: o,
                                                              icon: i,
                                                              text: n,
                                                              buttonRef: g,
                                                              onClick: (e) => {
                                                                  a(e),
                                                                      (0, x.gx)({
                                                                          applicationId: L.id,
                                                                          linkType: L.linkType,
                                                                          area: d,
                                                                          referrerId: L.referrerId,
                                                                          customId: L.activityCustomId,
                                                                          isDeadEnd: c,
                                                                      });
                                                              },
                                                              fullWidth: !0,
                                                          }),
                                                          null != r &&
                                                              (0, l.jsx)(u.E, {
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
                    null != s && s,
                ],
            }),
        ],
    });
}
