n.d(t, { h: () => N, u: () => _ }), n(323874), n(14289), n(35956);
var i,
    l = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(299619),
    d = n(172218),
    c = n(939249),
    u = n(834730),
    m = n(408278),
    h = n(821609),
    g = n(17928),
    A = n(990078),
    p = n(775602),
    x = n(140651),
    f = n(495544),
    C = n(354287),
    E = n(768349),
    v = n(838541),
    I = n(351280),
    _ = (((i = {})[(i.BOT = 0)] = "BOT"), (i[(i.ACTIVITY = 1)] = "ACTIVITY"), i);
function j(e) {
    let { onClick: t, children: n, className: i } = e;
    return null != t
        ? (0, l.jsx)(c.D, { onClick: t, className: r()({ [I.or]: null != t }, i), children: n })
        : (0, l.jsx)("div", { className: i, children: n });
}
function N(e) {
    var t;
    let {
        title: n,
        header: i,
        footer: a,
        info: c,
        staticBannerSrc: _,
        videoBannerSrc: N,
        bannerAspectRatio: T = 0,
        iconSrc: y,
        actions: S = [],
        primaryActionFirst: b = !1,
        trackingConfig: k,
        onClickContent: L,
        onClickBanner: R,
    } = e;
    (t = k),
        (k = {
            id: t?.id ?? "0",
            linkType: t?.linkType ?? E.J.UNKNOWN,
            referrerId: t?.referrerId ?? f.default.getId(),
            activityCustomId: t?.activityCustomId,
            onView: t?.onView,
            onLinkCopied: t?.onLinkCopied,
            guildId: t?.guildId,
            channelId: t?.channelId,
            messageId: t?.messageId,
            isDeadEnd: t?.isDeadEnd ?? !1,
        });
    let { primaryColor: P, secondaryColor: M } = (0, x.A)(y ?? _),
        D = `linear-gradient(45deg, ${P}, ${M})`,
        w = (0, g.bG)([p.A], () => p.A.useReducedMotion),
        O = s.useRef(!1),
        U = (0, d.K)(
            (e) => {
                !1 === O.current &&
                    e &&
                    (k?.onView?.(),
                    (0, C.wV)({
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
        G = null != _,
        V = null != N && !1 === w,
        B = G || V,
        H = 0 === T ? I.pv : I.$g,
        F = s.useRef(null),
        z = s.useCallback(() => {
            let e = F.current;
            null == e || ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        Y = s.useMemo(() => !!V && new URL(N).pathname.endsWith(".gif"), [V, N]),
        W = s.useMemo(() => {
            if (null != L)
                return (e) => {
                    L(e),
                        (0, C.gx)({
                            applicationId: k.id,
                            linkType: k.linkType,
                            area: C.kY.CONTENT,
                            referrerId: k.referrerId,
                            customId: k.activityCustomId,
                            isDeadEnd: k.isDeadEnd,
                        });
                };
        }, [L, k]),
        K = s.useMemo(() => {
            if (null != R)
                return (e) => {
                    R(e),
                        (0, C.gx)({
                            applicationId: k.id,
                            linkType: k.linkType,
                            area: C.kY.BANNER,
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
            B &&
                (0, l.jsxs)(j, {
                    onClick: K,
                    className: r()(I.cy, H, { [I.wk]: V }),
                    children: [
                        V &&
                            (Y
                                ? (0, l.jsx)("div", { className: I.O9, style: { backgroundImage: `url(${N})` } })
                                : (0, l.jsx)(o.A, {
                                      ref: F,
                                      src: N,
                                      mediaLayoutType: v.dG.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: I.O9,
                                  })),
                        G &&
                            (0, l.jsx)("div", {
                                className: I.LR,
                                style: { backgroundImage: `url(${_})` },
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
                            (0, l.jsxs)(j, {
                                onClick: W,
                                className: r()(I.FG, { [I.ry]: null != W }),
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
                            S.length > 0 &&
                                (0, l.jsx)("div", {
                                    className: r()(I.AC, b ? I.ad : null),
                                    children: S.map((e, t) => {
                                        let {
                                                label: n,
                                                icon: i,
                                                onClick: s,
                                                disabled: a,
                                                disabledReason: r,
                                                submitting: o,
                                                trackingArea: d,
                                                isDeadEnd: c,
                                                iconButton: g,
                                                buttonRef: p,
                                            } = e,
                                            x = 0 === t;
                                        return g
                                            ? (0, l.jsx)(
                                                  A.m,
                                                  {
                                                      text: n,
                                                      targetElementRef: p,
                                                      children: (0, l.jsx)(m.K, {
                                                          variant: x ? "overlay-primary" : "overlay-secondary",
                                                          disabled: a || null != r,
                                                          loading: o,
                                                          icon: i,
                                                          "aria-label": n,
                                                          buttonRef: p,
                                                          onClick: (e) => {
                                                              s(e),
                                                                  (0, C.gx)({
                                                                      applicationId: k.id,
                                                                      linkType: k.linkType,
                                                                      area: d,
                                                                      referrerId: k.referrerId,
                                                                      customId: k.activityCustomId,
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
                                                          (0, l.jsx)(h.$, {
                                                              variant: x ? "overlay-primary" : "overlay-secondary",
                                                              disabled: a || null != r,
                                                              loading: o,
                                                              icon: i,
                                                              text: n,
                                                              buttonRef: p,
                                                              onClick: (e) => {
                                                                  s(e),
                                                                      (0, C.gx)({
                                                                          applicationId: k.id,
                                                                          linkType: k.linkType,
                                                                          area: d,
                                                                          referrerId: k.referrerId,
                                                                          customId: k.activityCustomId,
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
                    null != a && a,
                ],
            }),
        ],
    });
}
