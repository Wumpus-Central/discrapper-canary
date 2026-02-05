n.d(t, { h: () => I, u: () => E }), n(323874), n(14289), n(35956);
var i,
    l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(299619),
    d = n(172218),
    c = n(158954),
    u = n(311907),
    m = n(435371),
    _ = n(775602),
    h = n(176563),
    p = n(961350),
    g = n(354287),
    A = n(768349),
    f = n(838541),
    x = n(112247),
    E = (((i = {})[(i.BOT = 0)] = "BOT"), (i[(i.ACTIVITY = 1)] = "ACTIVITY"), i);
function C(e) {
    let { onClick: t, children: n, className: i } = e;
    return null != t
        ? (0, l.jsx)(c.DUT, { onClick: t, className: s()({ [x.or]: null != t }, i), children: n })
        : (0, l.jsx)("div", { className: i, children: n });
}
function I(e) {
    var t;
    let {
        title: n,
        header: i,
        footer: r,
        info: E,
        staticBannerSrc: I,
        videoBannerSrc: T,
        bannerAspectRatio: v = 0,
        iconSrc: N,
        actions: S = [],
        primaryActionFirst: b = !1,
        trackingConfig: y,
        onClickContent: j,
        onClickBanner: R,
    } = e;
    (t = y),
        (y = {
            id: t?.id ?? "0",
            linkType: t?.linkType ?? A.J.UNKNOWN,
            referrerId: t?.referrerId ?? p.default.getId(),
            activityCustomId: t?.activityCustomId,
            onView: t?.onView,
            onLinkCopied: t?.onLinkCopied,
            guildId: t?.guildId,
            channelId: t?.channelId,
            messageId: t?.messageId,
            isDeadEnd: t?.isDeadEnd ?? !1,
        });
    let { primaryColor: L, secondaryColor: M } = (0, h.A)(N ?? I),
        O = `linear-gradient(45deg, ${L}, ${M})`,
        P = (0, u.bG)([_.A], () => _.A.useReducedMotion),
        D = a.useRef(!1),
        k = (0, d.K)(
            (e) => {
                !1 === D.current &&
                    e &&
                    (y?.onView?.(),
                    (0, g.wV)({
                        appId: y.id,
                        linkType: y.linkType,
                        referrerId: y.referrerId,
                        customId: y.activityCustomId,
                        guildId: y.guildId,
                        channelId: y.channelId,
                        messageId: y.messageId,
                    }),
                    (D.current = !0));
            },
            void 0,
        ),
        U = null != I,
        w = null != T && !1 === P,
        G = U || w,
        B = 0 === v ? x.pv : x.$g,
        F = a.useRef(null),
        H = a.useCallback(() => {
            let e = F.current;
            null == e || ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        V = a.useMemo(() => !!w && new URL(T).pathname.endsWith(".gif"), [w, T]),
        z = a.useMemo(() => {
            if (null != j)
                return (e) => {
                    j(e),
                        (0, g.gx)({
                            applicationId: y.id,
                            linkType: y.linkType,
                            area: g.kY.CONTENT,
                            referrerId: y.referrerId,
                            customId: y.activityCustomId,
                            isDeadEnd: y.isDeadEnd,
                        });
                };
        }, [j, y]),
        W = a.useMemo(() => {
            if (null != R)
                return (e) => {
                    R(e),
                        (0, g.gx)({
                            applicationId: y.id,
                            linkType: y.linkType,
                            area: g.kY.BANNER,
                            referrerId: y.referrerId,
                            customId: y.activityCustomId,
                            isDeadEnd: y.isDeadEnd,
                        });
                };
        }, [R, y]);
    return (0, l.jsxs)("div", {
        ref: k,
        className: x.E6,
        children: [
            G &&
                (0, l.jsxs)(C, {
                    onClick: W,
                    className: s()(x.cy, B, { [x.wk]: w }),
                    children: [
                        w &&
                            (V
                                ? (0, l.jsx)("div", { className: x.O9, style: { backgroundImage: `url(${T})` } })
                                : (0, l.jsx)(o.A, {
                                      ref: F,
                                      src: T,
                                      mediaLayoutType: f.dG.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: x.O9,
                                  })),
                        U &&
                            (0, l.jsx)("div", {
                                className: x.LR,
                                style: { backgroundImage: `url(${I})` },
                                onTransitionEnd: H,
                            }),
                    ],
                }),
            (0, l.jsxs)("div", {
                style: { background: O },
                children: [
                    (0, l.jsxs)("div", {
                        className: x.hQ,
                        children: [
                            null != i &&
                                (0, l.jsx)(c.EYj, {
                                    variant: "text-sm/semibold",
                                    color: "none",
                                    className: x.wx,
                                    children: i,
                                }),
                            (0, l.jsxs)(C, {
                                onClick: z,
                                className: s()(x.FG, { [x.ry]: null != z }),
                                children: [
                                    null != N &&
                                        (0, l.jsx)("div", { className: x._8, style: { backgroundImage: `url(${N})` } }),
                                    (0, l.jsxs)("div", {
                                        className: x.Qs,
                                        children: [
                                            (0, l.jsx)(c.EYj, {
                                                variant: "text-md/semibold",
                                                color: "none",
                                                lineClamp: 1,
                                                className: x.eu,
                                                children: n,
                                            }),
                                            (0, l.jsx)("div", { className: x.rj, children: E }),
                                        ],
                                    }),
                                ],
                            }),
                            S.length > 0 &&
                                (0, l.jsx)("div", {
                                    className: s()(x.AC, b ? x.ad : null),
                                    children: S.map((e, t) => {
                                        let {
                                                label: n,
                                                icon: i,
                                                onClick: a,
                                                disabled: r,
                                                disabledReason: s,
                                                submitting: o,
                                                trackingArea: d,
                                                isDeadEnd: u,
                                                iconButton: _,
                                                buttonRef: h,
                                            } = e,
                                            p = 0 === t;
                                        return _
                                            ? (0, l.jsx)(
                                                  m.m_,
                                                  {
                                                      text: n,
                                                      targetElementRef: h,
                                                      children: (0, l.jsx)(c.K0, {
                                                          variant: p ? "overlay-primary" : "overlay-secondary",
                                                          disabled: r || null != s,
                                                          loading: o,
                                                          icon: i,
                                                          "aria-label": n,
                                                          buttonRef: h,
                                                          onClick: (e) => {
                                                              a(e),
                                                                  (0, g.gx)({
                                                                      applicationId: y.id,
                                                                      linkType: y.linkType,
                                                                      area: d,
                                                                      referrerId: y.referrerId,
                                                                      customId: y.activityCustomId,
                                                                      isDeadEnd: u,
                                                                  });
                                                          },
                                                      }),
                                                  },
                                                  n,
                                              )
                                            : (0, l.jsxs)(
                                                  "div",
                                                  {
                                                      className: x.uc,
                                                      children: [
                                                          (0, l.jsx)(c.$nd, {
                                                              variant: p ? "overlay-primary" : "overlay-secondary",
                                                              disabled: r || null != s,
                                                              loading: o,
                                                              icon: i,
                                                              text: n,
                                                              buttonRef: h,
                                                              onClick: (e) => {
                                                                  a(e),
                                                                      (0, g.gx)({
                                                                          applicationId: y.id,
                                                                          linkType: y.linkType,
                                                                          area: d,
                                                                          referrerId: y.referrerId,
                                                                          customId: y.activityCustomId,
                                                                          isDeadEnd: u,
                                                                      });
                                                              },
                                                              fullWidth: !0,
                                                          }),
                                                          null != s &&
                                                              (0, l.jsx)(c.EYj, {
                                                                  variant: "text-xs/medium",
                                                                  color: "none",
                                                                  className: x.H$,
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
