n.d(t, {
    h: () => A,
    u: () => b,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(299619),
    l = n(172218),
    c = n(158954),
    u = n(311907),
    d = n(435371),
    f = n(775602),
    p = n(176563),
    _ = n(961350),
    h = n(354287),
    m = n(768349),
    g = n(838541),
    E = n(112247),
    b = (function (e) {
        return (e[(e.BOT = 0)] = "BOT"), (e[(e.ACTIVITY = 1)] = "ACTIVITY"), e;
    })({});
function y(e) {
    var t, n, r, i;
    return {
        id: null != (t = null == e ? void 0 : e.id) ? t : "0",
        linkType: null != (n = null == e ? void 0 : e.linkType) ? n : m.J.UNKNOWN,
        referrerId: null != (r = null == e ? void 0 : e.referrerId) ? r : _.default.getId(),
        activityCustomId: null == e ? void 0 : e.activityCustomId,
        onView: null == e ? void 0 : e.onView,
        onLinkCopied: null == e ? void 0 : e.onLinkCopied,
        guildId: null == e ? void 0 : e.guildId,
        channelId: null == e ? void 0 : e.channelId,
        messageId: null == e ? void 0 : e.messageId,
        isDeadEnd: null != (i = null == e ? void 0 : e.isDeadEnd) && i,
    };
}
function O(e) {
    let { onClick: t, children: n, className: i } = e;
    return null != t
        ? (0, r.jsx)(c.DUT, {
              onClick: t,
              className: s()({ [E.or]: null != t }, i),
              children: n,
          })
        : (0, r.jsx)("div", {
              className: i,
              children: n,
          });
}
function A(e) {
    let {
        title: t,
        header: n,
        footer: a,
        info: _,
        staticBannerSrc: m,
        videoBannerSrc: b,
        bannerAspectRatio: A = 0,
        iconSrc: v,
        actions: S = [],
        primaryActionFirst: I = !1,
        trackingConfig: T,
        onClickContent: C,
        onClickBanner: N,
    } = e;
    T = y(T);
    let { primaryColor: R, secondaryColor: w } = (0, p.A)(null != v ? v : m),
        P = "linear-gradient(45deg, ".concat(R, ", ").concat(w, ")"),
        D = (0, u.bG)([f.A], () => f.A.useReducedMotion),
        x = i.useRef(!1),
        L = (0, l.K)(
            (e) => {
                if (!1 === x.current && e) {
                    var t;
                    null == T || null == (t = T.onView) || t.call(T),
                        (0, h.wV)({
                            appId: T.id,
                            linkType: T.linkType,
                            referrerId: T.referrerId,
                            customId: T.activityCustomId,
                            guildId: T.guildId,
                            channelId: T.channelId,
                            messageId: T.messageId,
                        }),
                        (x.current = !0);
                }
            },
            void 0,
        ),
        j = null != m,
        M = null != b && !1 === D,
        k = j || M,
        U = 0 === A ? E.pv : E.$g,
        G = i.useRef(null),
        V = i.useCallback(() => {
            let e = G.current;
            null == e || ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        F = i.useMemo(() => !!M && new URL(b).pathname.endsWith(".gif"), [M, b]),
        B = i.useMemo(() => {
            if (null != C)
                return (e) => {
                    C(e),
                        (0, h.gx)({
                            applicationId: T.id,
                            linkType: T.linkType,
                            area: h.kY.CONTENT,
                            referrerId: T.referrerId,
                            customId: T.activityCustomId,
                            isDeadEnd: T.isDeadEnd,
                        });
                };
        }, [C, T]),
        H = i.useMemo(() => {
            if (null != N)
                return (e) => {
                    N(e),
                        (0, h.gx)({
                            applicationId: T.id,
                            linkType: T.linkType,
                            area: h.kY.BANNER,
                            referrerId: T.referrerId,
                            customId: T.activityCustomId,
                            isDeadEnd: T.isDeadEnd,
                        });
                };
        }, [N, T]);
    return (0, r.jsxs)("div", {
        ref: L,
        className: E.E6,
        children: [
            k &&
                (0, r.jsxs)(O, {
                    onClick: H,
                    className: s()(E.cy, U, { [E.wk]: M }),
                    children: [
                        M &&
                            (F
                                ? (0, r.jsx)("div", {
                                      className: E.O9,
                                      style: { backgroundImage: "url(".concat(b, ")") },
                                  })
                                : (0, r.jsx)(o.A, {
                                      ref: G,
                                      src: b,
                                      mediaLayoutType: g.dG.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: E.O9,
                                  })),
                        j &&
                            (0, r.jsx)("div", {
                                className: E.LR,
                                style: { backgroundImage: "url(".concat(m, ")") },
                                onTransitionEnd: V,
                            }),
                    ],
                }),
            (0, r.jsxs)("div", {
                style: { background: P },
                children: [
                    (0, r.jsxs)("div", {
                        className: E.hQ,
                        children: [
                            null != n &&
                                (0, r.jsx)(c.EYj, {
                                    variant: "text-sm/semibold",
                                    color: "none",
                                    className: E.wx,
                                    children: n,
                                }),
                            (0, r.jsxs)(O, {
                                onClick: B,
                                className: s()(E.FG, { [E.ry]: null != B }),
                                children: [
                                    null != v &&
                                        (0, r.jsx)("div", {
                                            className: E._8,
                                            style: { backgroundImage: "url(".concat(v, ")") },
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: E.Qs,
                                        children: [
                                            (0, r.jsx)(c.EYj, {
                                                variant: "text-md/semibold",
                                                color: "none",
                                                lineClamp: 1,
                                                className: E.eu,
                                                children: t,
                                            }),
                                            (0, r.jsx)("div", {
                                                className: E.rj,
                                                children: _,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            S.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: s()(E.AC, I ? E.ad : null),
                                    children: S.map((e, t) => {
                                        let {
                                                label: n,
                                                icon: i,
                                                onClick: a,
                                                disabled: s,
                                                disabledReason: o,
                                                submitting: l,
                                                trackingArea: u,
                                                isDeadEnd: f,
                                                iconButton: p,
                                                buttonRef: _,
                                            } = e,
                                            m = 0 === t;
                                        return p
                                            ? (0, r.jsx)(
                                                  d.m_,
                                                  {
                                                      text: n,
                                                      targetElementRef: _,
                                                      children: (0, r.jsx)(c.K0, {
                                                          variant: m ? "overlay-primary" : "overlay-secondary",
                                                          disabled: s || null != o,
                                                          loading: l,
                                                          icon: i,
                                                          "aria-label": n,
                                                          buttonRef: _,
                                                          onClick: (e) => {
                                                              a(e),
                                                                  (0, h.gx)({
                                                                      applicationId: T.id,
                                                                      linkType: T.linkType,
                                                                      area: u,
                                                                      referrerId: T.referrerId,
                                                                      customId: T.activityCustomId,
                                                                      isDeadEnd: f,
                                                                  });
                                                          },
                                                      }),
                                                  },
                                                  n,
                                              )
                                            : (0, r.jsxs)(
                                                  "div",
                                                  {
                                                      className: E.uc,
                                                      children: [
                                                          (0, r.jsx)(c.$nd, {
                                                              variant: m ? "overlay-primary" : "overlay-secondary",
                                                              disabled: s || null != o,
                                                              loading: l,
                                                              icon: i,
                                                              text: n,
                                                              buttonRef: _,
                                                              onClick: (e) => {
                                                                  a(e),
                                                                      (0, h.gx)({
                                                                          applicationId: T.id,
                                                                          linkType: T.linkType,
                                                                          area: u,
                                                                          referrerId: T.referrerId,
                                                                          customId: T.activityCustomId,
                                                                          isDeadEnd: f,
                                                                      });
                                                              },
                                                              fullWidth: !0,
                                                          }),
                                                          null != o &&
                                                              (0, r.jsx)(c.EYj, {
                                                                  variant: "text-xs/medium",
                                                                  color: "none",
                                                                  className: E.H$,
                                                                  children: o,
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
