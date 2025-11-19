n.d(t, {
    W: () => O,
    u: () => E,
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
    d = n(607070),
    f = n(206295),
    _ = n(314897),
    p = n(914498),
    h = n(967249),
    m = n(217702),
    g = n(666209),
    E = (function (e) {
        return (e[(e.BOT = 0)] = "BOT"), (e[(e.ACTIVITY = 1)] = "ACTIVITY"), e;
    })({});
function b(e) {
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
function y(e) {
    let { onClick: t, children: n, className: i } = e;
    return null != t
        ? (0, r.jsx)(c.P3F, {
              onClick: t,
              className: o()({ [g.cursorPointer]: null != t }, i),
              children: n,
          })
        : (0, r.jsx)("div", {
              className: i,
              children: n,
          });
}
function O(e) {
    let {
        title: t,
        header: n,
        footer: a,
        info: _,
        staticBannerSrc: h,
        videoBannerSrc: E,
        bannerAspectRatio: O = 0,
        iconSrc: v,
        actions: I = [],
        trackingConfig: T,
        onClickContent: S,
        onClickBanner: A,
    } = e;
    T = b(T);
    let { primaryColor: C, secondaryColor: N } = (0, f.Z)(null != v ? v : h),
        R = "linear-gradient(45deg, ".concat(C, ", ").concat(N, ")"),
        P = (0, u.e7)([d.Z], () => d.Z.useReducedMotion),
        D = i.useRef(!1),
        w = (0, l.O)(
            (e) => {
                if (!1 === D.current && e) {
                    var t;
                    null == T || null == (t = T.onView) || t.call(T),
                        (0, p.GF)({
                            appId: T.id,
                            linkType: T.linkType,
                            referrerId: T.referrerId,
                            customId: T.activityCustomId,
                            guildId: T.guildId,
                            channelId: T.channelId,
                            messageId: T.messageId,
                        }),
                        (D.current = !0);
                }
            },
            void 0,
        ),
        L = null != h,
        x = null != E && !1 === P,
        M = L || x,
        j = 0 === O ? g.bannerAspectRatioBot : g.bannerAspectRatioActivity,
        k = i.useRef(null),
        U = i.useCallback(() => {
            let e = k.current;
            null != e && ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        G = i.useMemo(() => !!x && new URL(E).pathname.endsWith(".gif"), [x, E]),
        B = i.useMemo(() => {
            if (null != S)
                return (e) => {
                    S(e),
                        (0, p.KX)({
                            applicationId: T.id,
                            linkType: T.linkType,
                            area: p.j_.CONTENT,
                            referrerId: T.referrerId,
                            customId: T.activityCustomId,
                            isDeadEnd: T.isDeadEnd,
                        });
                };
        }, [S, T]),
        Z = i.useMemo(() => {
            if (null != A)
                return (e) => {
                    A(e),
                        (0, p.KX)({
                            applicationId: T.id,
                            linkType: T.linkType,
                            area: p.j_.BANNER,
                            referrerId: T.referrerId,
                            customId: T.activityCustomId,
                            isDeadEnd: T.isDeadEnd,
                        });
                };
        }, [A, T]);
    return (0, r.jsxs)("div", {
        ref: w,
        className: g.embed,
        children: [
            M &&
                (0, r.jsxs)(y, {
                    onClick: Z,
                    className: o()(g.bannerWrapper, j, { [g.showVideoOnFocus]: x }),
                    children: [
                        x &&
                            (G
                                ? (0, r.jsx)("div", {
                                      className: g.videoBanner,
                                      style: { backgroundImage: "url(".concat(E, ")") },
                                  })
                                : (0, r.jsx)(s.Z, {
                                      ref: k,
                                      src: E,
                                      mediaLayoutType: m.hV.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: g.videoBanner,
                                  })),
                        L &&
                            (0, r.jsx)("div", {
                                className: g.staticBanner,
                                style: { backgroundImage: "url(".concat(h, ")") },
                                onTransitionEnd: U,
                            }),
                    ],
                }),
            (0, r.jsxs)("div", {
                style: { background: R },
                children: [
                    (0, r.jsxs)("div", {
                        className: g.contentContainer,
                        children: [
                            null != n &&
                                (0, r.jsx)(c.xvT, {
                                    variant: "text-sm/semibold",
                                    color: "none",
                                    className: g.header,
                                    children: n,
                                }),
                            (0, r.jsxs)(y, {
                                onClick: B,
                                className: o()(g.contentWrapper, { [g.contentWrapperClickable]: null != B }),
                                children: [
                                    null != v &&
                                        (0, r.jsx)("div", {
                                            className: g.img,
                                            style: { backgroundImage: "url(".concat(v, ")") },
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: g.content,
                                        children: [
                                            (0, r.jsx)(c.xvT, {
                                                variant: "text-md/semibold",
                                                color: "none",
                                                lineClamp: 1,
                                                className: g.contentTitle,
                                                children: t,
                                            }),
                                            (0, r.jsx)("div", {
                                                className: g.contentInfoWrapper,
                                                children: _,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            I.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: g.actionWrapper,
                                    children: I.map((e, t) => {
                                        let {
                                                label: n,
                                                icon: i,
                                                onClick: a,
                                                disabled: o,
                                                disabledReason: s,
                                                submitting: l,
                                                trackingArea: u,
                                                isDeadEnd: d,
                                            } = e,
                                            f = 0 === t;
                                        return (0, r.jsxs)(
                                            "div",
                                            {
                                                className: g.buttonWithPossibleDisabledTextWrapper,
                                                children: [
                                                    (0, r.jsx)(c.zxk, {
                                                        variant: f ? "overlay-primary" : "overlay-secondary",
                                                        disabled: o || null != s,
                                                        loading: l,
                                                        icon: i,
                                                        text: n,
                                                        onClick: (e) => {
                                                            a(e),
                                                                (0, p.KX)({
                                                                    applicationId: T.id,
                                                                    linkType: T.linkType,
                                                                    area: u,
                                                                    referrerId: T.referrerId,
                                                                    customId: T.activityCustomId,
                                                                    isDeadEnd: d,
                                                                });
                                                        },
                                                        fullWidth: !0,
                                                    }),
                                                    null != s &&
                                                        (0, r.jsx)(c.xvT, {
                                                            variant: "text-xs/medium",
                                                            color: "none",
                                                            className: g.disabledReason,
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
