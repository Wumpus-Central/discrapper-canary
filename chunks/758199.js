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
    p = n(314897),
    _ = n(914498),
    m = n(967249),
    h = n(217702),
    g = n(906376),
    E = (function (e) {
        return (e[(e.BOT = 0)] = "BOT"), (e[(e.ACTIVITY = 1)] = "ACTIVITY"), e;
    })({});
function b(e) {
    var t, n, r, i;
    return {
        id: null != (t = null == e ? void 0 : e.id) ? t : "0",
        linkType: null != (n = null == e ? void 0 : e.linkType) ? n : m.U.UNKNOWN,
        referrerId: null != (r = null == e ? void 0 : e.referrerId) ? r : p.default.getId(),
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
        info: p,
        staticBannerSrc: m,
        videoBannerSrc: E,
        bannerAspectRatio: O = 0,
        iconSrc: v,
        actions: S = [],
        trackingConfig: I,
        onClickContent: T,
        onClickBanner: A,
    } = e;
    I = b(I);
    let { primaryColor: C, secondaryColor: N } = (0, f.Z)(null != v ? v : m),
        P = "linear-gradient(45deg, ".concat(C, ", ").concat(N, ")"),
        R = (0, u.e7)([d.Z], () => d.Z.useReducedMotion),
        w = i.useRef(!1),
        D = (0, l.O)(
            (e) => {
                if (!1 === w.current && e) {
                    var t;
                    null == I || null == (t = I.onView) || t.call(I),
                        (0, _.GF)({
                            appId: I.id,
                            linkType: I.linkType,
                            referrerId: I.referrerId,
                            customId: I.activityCustomId,
                            guildId: I.guildId,
                            channelId: I.channelId,
                            messageId: I.messageId,
                        }),
                        (w.current = !0);
                }
            },
            void 0,
        ),
        x = null != m,
        L = null != E && !1 === R,
        j = x || L,
        M = 0 === O ? g.bannerAspectRatioBot : g.bannerAspectRatioActivity,
        k = i.useRef(null),
        U = i.useCallback(() => {
            let e = k.current;
            null != e && ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        G = i.useMemo(() => !!L && new URL(E).pathname.endsWith(".gif"), [L, E]),
        Z = i.useMemo(() => {
            if (null != T)
                return (e) => {
                    T(e),
                        (0, _.KX)({
                            applicationId: I.id,
                            linkType: I.linkType,
                            area: _.j_.CONTENT,
                            referrerId: I.referrerId,
                            customId: I.activityCustomId,
                            isDeadEnd: I.isDeadEnd,
                        });
                };
        }, [T, I]),
        B = i.useMemo(() => {
            if (null != A)
                return (e) => {
                    A(e),
                        (0, _.KX)({
                            applicationId: I.id,
                            linkType: I.linkType,
                            area: _.j_.BANNER,
                            referrerId: I.referrerId,
                            customId: I.activityCustomId,
                            isDeadEnd: I.isDeadEnd,
                        });
                };
        }, [A, I]);
    return (0, r.jsxs)("div", {
        ref: D,
        className: g.embed,
        children: [
            j &&
                (0, r.jsxs)(y, {
                    onClick: B,
                    className: o()(g.bannerWrapper, M, { [g.showVideoOnFocus]: L }),
                    children: [
                        L &&
                            (G
                                ? (0, r.jsx)("div", {
                                      className: g.videoBanner,
                                      style: { backgroundImage: "url(".concat(E, ")") },
                                  })
                                : (0, r.jsx)(s.Z, {
                                      ref: k,
                                      src: E,
                                      mediaLayoutType: h.hV.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: g.videoBanner,
                                  })),
                        x &&
                            (0, r.jsx)("div", {
                                className: g.staticBanner,
                                style: { backgroundImage: "url(".concat(m, ")") },
                                onTransitionEnd: U,
                            }),
                    ],
                }),
            (0, r.jsxs)("div", {
                style: { background: P },
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
                                onClick: Z,
                                className: o()(g.contentWrapper, { [g.contentWrapperClickable]: null != Z }),
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
                                                children: p,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            S.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: g.actionWrapper,
                                    children: S.map((e, t) => {
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
                                                                (0, _.KX)({
                                                                    applicationId: I.id,
                                                                    linkType: I.linkType,
                                                                    area: u,
                                                                    referrerId: I.referrerId,
                                                                    customId: I.activityCustomId,
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
