n.d(t, {
    h: () => x,
    u: () => y,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r,
    i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(299619),
    c = n(172218),
    u = n(158954),
    d = n(311907),
    p = n(435371),
    m = n(775602),
    f = n(176563),
    g = n(961350),
    h = n(354287),
    _ = n(768349),
    b = n(838541),
    A = n(112247),
    y = (((r = {})[(r.BOT = 0)] = "BOT"), (r[(r.ACTIVITY = 1)] = "ACTIVITY"), r);

function v(e) {
    let { onClick: t, children: n, className: r } = e;
    return null != t
        ? (0, i.jsx)(u.DUT, {
              onClick: t,
              className: s()(
                  {
                      [A.or]: null != t,
                  },
                  r,
              ),
              children: n,
          })
        : (0, i.jsx)("div", {
              className: r,
              children: n,
          });
}

function x(e) {
    var t, n, r, a, y;
    let {
        title: x,
        header: O,
        footer: E,
        info: j,
        staticBannerSrc: C,
        videoBannerSrc: I,
        bannerAspectRatio: S = 0,
        iconSrc: T,
        actions: N = [],
        primaryActionFirst: P = !1,
        trackingConfig: w,
        onClickContent: R,
        onClickBanner: D,
    } = e;
    w = {
        id: null != (n = null == (t = w) ? void 0 : t.id) ? n : "0",
        linkType: null != (r = null == t ? void 0 : t.linkType) ? r : _.J.UNKNOWN,
        referrerId: null != (a = null == t ? void 0 : t.referrerId) ? a : g.default.getId(),
        activityCustomId: null == t ? void 0 : t.activityCustomId,
        onView: null == t ? void 0 : t.onView,
        onLinkCopied: null == t ? void 0 : t.onLinkCopied,
        guildId: null == t ? void 0 : t.guildId,
        channelId: null == t ? void 0 : t.channelId,
        messageId: null == t ? void 0 : t.messageId,
        isDeadEnd: null != (y = null == t ? void 0 : t.isDeadEnd) && y,
    };
    let { primaryColor: L, secondaryColor: M } = (0, f.A)(null != T ? T : C),
        k = "linear-gradient(45deg, ".concat(L, ", ").concat(M, ")"),
        U = (0, d.bG)([m.A], () => m.A.useReducedMotion),
        G = l.useRef(!1),
        B = (0, c.K)(
            (e) => {
                if (!1 === G.current && e) {
                    var t;
                    null == w || null == (t = w.onView) || t.call(w),
                        (0, h.wV)({
                            appId: w.id,
                            linkType: w.linkType,
                            referrerId: w.referrerId,
                            customId: w.activityCustomId,
                            guildId: w.guildId,
                            channelId: w.channelId,
                            messageId: w.messageId,
                        }),
                        (G.current = !0);
                }
            },
            void 0,
        ),
        F = null != C,
        H = null != I && !1 === U,
        V = F || H,
        z = 0 === S ? A.pv : A.$g,
        W = l.useRef(null),
        K = l.useCallback(() => {
            let e = W.current;
            null == e || ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        Y = l.useMemo(() => !!H && new URL(I).pathname.endsWith(".gif"), [H, I]),
        q = l.useMemo(() => {
            if (null != R)
                return (e) => {
                    R(e),
                        (0, h.gx)({
                            applicationId: w.id,
                            linkType: w.linkType,
                            area: h.kY.CONTENT,
                            referrerId: w.referrerId,
                            customId: w.activityCustomId,
                            isDeadEnd: w.isDeadEnd,
                        });
                };
        }, [R, w]),
        J = l.useMemo(() => {
            if (null != D)
                return (e) => {
                    D(e),
                        (0, h.gx)({
                            applicationId: w.id,
                            linkType: w.linkType,
                            area: h.kY.BANNER,
                            referrerId: w.referrerId,
                            customId: w.activityCustomId,
                            isDeadEnd: w.isDeadEnd,
                        });
                };
        }, [D, w]);
    return (0, i.jsxs)("div", {
        ref: B,
        className: A.E6,
        children: [
            V &&
                (0, i.jsxs)(v, {
                    onClick: J,
                    className: s()(A.cy, z, {
                        [A.wk]: H,
                    }),
                    children: [
                        H &&
                            (Y
                                ? (0, i.jsx)("div", {
                                      className: A.O9,
                                      style: {
                                          backgroundImage: "url(".concat(I, ")"),
                                      },
                                  })
                                : (0, i.jsx)(o.A, {
                                      ref: W,
                                      src: I,
                                      mediaLayoutType: b.dG.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: A.O9,
                                  })),
                        F &&
                            (0, i.jsx)("div", {
                                className: A.LR,
                                style: {
                                    backgroundImage: "url(".concat(C, ")"),
                                },
                                onTransitionEnd: K,
                            }),
                    ],
                }),
            (0, i.jsxs)("div", {
                style: {
                    background: k,
                },
                children: [
                    (0, i.jsxs)("div", {
                        className: A.hQ,
                        children: [
                            null != O &&
                                (0, i.jsx)(u.EYj, {
                                    variant: "text-sm/semibold",
                                    color: "none",
                                    className: A.wx,
                                    children: O,
                                }),
                            (0, i.jsxs)(v, {
                                onClick: q,
                                className: s()(A.FG, {
                                    [A.ry]: null != q,
                                }),
                                children: [
                                    null != T &&
                                        (0, i.jsx)("div", {
                                            className: A._8,
                                            style: {
                                                backgroundImage: "url(".concat(T, ")"),
                                            },
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: A.Qs,
                                        children: [
                                            (0, i.jsx)(u.EYj, {
                                                variant: "text-md/semibold",
                                                color: "none",
                                                lineClamp: 1,
                                                className: A.eu,
                                                children: x,
                                            }),
                                            (0, i.jsx)("div", {
                                                className: A.rj,
                                                children: j,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            N.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: s()(A.AC, P ? A.ad : null),
                                    children: N.map((e, t) => {
                                        let {
                                                label: n,
                                                icon: r,
                                                onClick: l,
                                                disabled: a,
                                                disabledReason: s,
                                                submitting: o,
                                                trackingArea: c,
                                                isDeadEnd: d,
                                                iconButton: m,
                                                buttonRef: f,
                                            } = e,
                                            g = 0 === t;
                                        return m
                                            ? (0, i.jsx)(
                                                  p.m_,
                                                  {
                                                      text: n,
                                                      targetElementRef: f,
                                                      children: (0, i.jsx)(u.K0, {
                                                          variant: g ? "overlay-primary" : "overlay-secondary",
                                                          disabled: a || null != s,
                                                          loading: o,
                                                          icon: r,
                                                          "aria-label": n,
                                                          buttonRef: f,
                                                          onClick: (e) => {
                                                              l(e),
                                                                  (0, h.gx)({
                                                                      applicationId: w.id,
                                                                      linkType: w.linkType,
                                                                      area: c,
                                                                      referrerId: w.referrerId,
                                                                      customId: w.activityCustomId,
                                                                      isDeadEnd: d,
                                                                  });
                                                          },
                                                      }),
                                                  },
                                                  n,
                                              )
                                            : (0, i.jsxs)(
                                                  "div",
                                                  {
                                                      className: A.uc,
                                                      children: [
                                                          (0, i.jsx)(u.$nd, {
                                                              variant: g ? "overlay-primary" : "overlay-secondary",
                                                              disabled: a || null != s,
                                                              loading: o,
                                                              icon: r,
                                                              text: n,
                                                              buttonRef: f,
                                                              onClick: (e) => {
                                                                  l(e),
                                                                      (0, h.gx)({
                                                                          applicationId: w.id,
                                                                          linkType: w.linkType,
                                                                          area: c,
                                                                          referrerId: w.referrerId,
                                                                          customId: w.activityCustomId,
                                                                          isDeadEnd: d,
                                                                      });
                                                              },
                                                              fullWidth: !0,
                                                          }),
                                                          null != s &&
                                                              (0, i.jsx)(u.EYj, {
                                                                  variant: "text-xs/medium",
                                                                  color: "none",
                                                                  className: A.H$,
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
                    null != E && E,
                ],
            }),
        ],
    });
}
