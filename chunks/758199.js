n.d(t, {
    W: () => v,
    u: () => b,
}),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(92951),
    l = n(907331),
    c = n(793030),
    u = n(442837),
    d = n(681715),
    f = n(607070),
    p = n(206295),
    _ = n(314897),
    m = n(914498),
    h = n(967249),
    g = n(217702),
    E = n(906376),
    b = (function (e) {
        return (e[(e.BOT = 0)] = "BOT"), (e[(e.ACTIVITY = 1)] = "ACTIVITY"), e;
    })({});
function y(e) {
    var t, n, r, i;
    return {
        id: null != (t = null == e ? void 0 : e.id) ? t : "0",
        linkType: null != (n = null == e ? void 0 : e.linkType) ? n : h.U.UNKNOWN,
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
        ? (0, r.jsx)(c.P3F, {
              onClick: t,
              className: o()({ [E.cursorPointer]: null != t }, i),
              children: n,
          })
        : (0, r.jsx)("div", {
              className: i,
              children: n,
          });
}
function v(e) {
    let {
        title: t,
        header: n,
        footer: a,
        info: _,
        staticBannerSrc: h,
        videoBannerSrc: b,
        bannerAspectRatio: v = 0,
        iconSrc: S,
        actions: I = [],
        primaryActionFirst: T = !1,
        trackingConfig: C,
        onClickContent: A,
        onClickBanner: N,
    } = e;
    C = y(C);
    let { primaryColor: P, secondaryColor: R } = (0, p.Z)(null != S ? S : h),
        D = "linear-gradient(45deg, ".concat(P, ", ").concat(R, ")"),
        w = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        x = i.useRef(!1),
        L = (0, l.O)(
            (e) => {
                if (!1 === x.current && e) {
                    var t;
                    null == C || null == (t = C.onView) || t.call(C),
                        (0, m.GF)({
                            appId: C.id,
                            linkType: C.linkType,
                            referrerId: C.referrerId,
                            customId: C.activityCustomId,
                            guildId: C.guildId,
                            channelId: C.channelId,
                            messageId: C.messageId,
                        }),
                        (x.current = !0);
                }
            },
            void 0,
        ),
        j = null != h,
        M = null != b && !1 === w,
        k = j || M,
        U = 0 === v ? E.bannerAspectRatioBot : E.bannerAspectRatioActivity,
        G = i.useRef(null),
        Z = i.useCallback(() => {
            let e = G.current;
            null != e && ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        B = i.useMemo(() => !!M && new URL(b).pathname.endsWith(".gif"), [M, b]),
        F = i.useMemo(() => {
            if (null != A)
                return (e) => {
                    A(e),
                        (0, m.KX)({
                            applicationId: C.id,
                            linkType: C.linkType,
                            area: m.j_.CONTENT,
                            referrerId: C.referrerId,
                            customId: C.activityCustomId,
                            isDeadEnd: C.isDeadEnd,
                        });
                };
        }, [A, C]),
        V = i.useMemo(() => {
            if (null != N)
                return (e) => {
                    N(e),
                        (0, m.KX)({
                            applicationId: C.id,
                            linkType: C.linkType,
                            area: m.j_.BANNER,
                            referrerId: C.referrerId,
                            customId: C.activityCustomId,
                            isDeadEnd: C.isDeadEnd,
                        });
                };
        }, [N, C]);
    return (0, r.jsxs)("div", {
        ref: L,
        className: E.embed,
        children: [
            k &&
                (0, r.jsxs)(O, {
                    onClick: V,
                    className: o()(E.bannerWrapper, U, { [E.showVideoOnFocus]: M }),
                    children: [
                        M &&
                            (B
                                ? (0, r.jsx)("div", {
                                      className: E.videoBanner,
                                      style: { backgroundImage: "url(".concat(b, ")") },
                                  })
                                : (0, r.jsx)(s.Z, {
                                      ref: G,
                                      src: b,
                                      mediaLayoutType: g.hV.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: E.videoBanner,
                                  })),
                        j &&
                            (0, r.jsx)("div", {
                                className: E.staticBanner,
                                style: { backgroundImage: "url(".concat(h, ")") },
                                onTransitionEnd: Z,
                            }),
                    ],
                }),
            (0, r.jsxs)("div", {
                style: { background: D },
                children: [
                    (0, r.jsxs)("div", {
                        className: E.contentContainer,
                        children: [
                            null != n &&
                                (0, r.jsx)(c.xvT, {
                                    variant: "text-sm/semibold",
                                    color: "none",
                                    className: E.header,
                                    children: n,
                                }),
                            (0, r.jsxs)(O, {
                                onClick: F,
                                className: o()(E.contentWrapper, { [E.contentWrapperClickable]: null != F }),
                                children: [
                                    null != S &&
                                        (0, r.jsx)("div", {
                                            className: E.img,
                                            style: { backgroundImage: "url(".concat(S, ")") },
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: E.content,
                                        children: [
                                            (0, r.jsx)(c.xvT, {
                                                variant: "text-md/semibold",
                                                color: "none",
                                                lineClamp: 1,
                                                className: E.contentTitle,
                                                children: t,
                                            }),
                                            (0, r.jsx)("div", {
                                                className: E.contentInfoWrapper,
                                                children: _,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            I.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: o()(E.actionWrapper, T ? E.actionWrapperPrimaryFirst : null),
                                    children: I.map((e, t) => {
                                        let {
                                                label: n,
                                                icon: i,
                                                onClick: a,
                                                disabled: o,
                                                disabledReason: s,
                                                submitting: l,
                                                trackingArea: u,
                                                isDeadEnd: f,
                                                iconButton: p,
                                            } = e,
                                            _ = 0 === t;
                                        return p
                                            ? (0, r.jsx)(
                                                  d.u,
                                                  {
                                                      text: n,
                                                      children: (0, r.jsx)(c.hU, {
                                                          variant: _ ? "overlay-primary" : "overlay-secondary",
                                                          disabled: o || null != s,
                                                          loading: l,
                                                          icon: i,
                                                          "aria-label": n,
                                                          onClick: (e) => {
                                                              a(e),
                                                                  (0, m.KX)({
                                                                      applicationId: C.id,
                                                                      linkType: C.linkType,
                                                                      area: u,
                                                                      referrerId: C.referrerId,
                                                                      customId: C.activityCustomId,
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
                                                      className: E.buttonWithPossibleDisabledTextWrapper,
                                                      children: [
                                                          (0, r.jsx)(c.zxk, {
                                                              variant: _ ? "overlay-primary" : "overlay-secondary",
                                                              disabled: o || null != s,
                                                              loading: l,
                                                              icon: i,
                                                              text: n,
                                                              onClick: (e) => {
                                                                  a(e),
                                                                      (0, m.KX)({
                                                                          applicationId: C.id,
                                                                          linkType: C.linkType,
                                                                          area: u,
                                                                          referrerId: C.referrerId,
                                                                          customId: C.activityCustomId,
                                                                          isDeadEnd: f,
                                                                      });
                                                              },
                                                              fullWidth: !0,
                                                          }),
                                                          null != s &&
                                                              (0, r.jsx)(c.xvT, {
                                                                  variant: "text-xs/medium",
                                                                  color: "none",
                                                                  className: E.disabledReason,
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
                    null != a && a,
                ],
            }),
        ],
    });
}
