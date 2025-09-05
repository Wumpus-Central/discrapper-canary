n.d(t, {
    W: () => N,
    u: () => S,
}),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(434650),
    d = n(607070),
    f = n(206295),
    _ = n(70097),
    p = n(314897),
    h = n(572004),
    m = n(914498),
    g = n(967249),
    E = n(217702),
    b = n(388032),
    y = n(666209);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v() {
    return (v =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function I(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e;
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
var S = (function (e) {
    return (e[(e.BOT = 0)] = "BOT"), (e[(e.ACTIVITY = 1)] = "ACTIVITY"), e;
})({});
function A(e) {
    var t, n, r;
    return {
        id: null != (t = null == e ? void 0 : e.id) ? t : "0",
        linkType: null != (n = null == e ? void 0 : e.linkType) ? n : g.U.UNKNOWN,
        referrerId: null != (r = null == e ? void 0 : e.referrerId) ? r : p.default.getId(),
        activityCustomId: null == e ? void 0 : e.activityCustomId,
        onView: null == e ? void 0 : e.onView,
        onLinkCopied: null == e ? void 0 : e.onLinkCopied,
        guildId: null == e ? void 0 : e.guildId,
        channelId: null == e ? void 0 : e.channelId,
        messageId: null == e ? void 0 : e.messageId,
    };
}
function C(e) {
    let { onClick: t, children: n, className: i } = e;
    return null != t
        ? (0, r.jsx)(c.P3F, {
              onClick: t,
              className: o()({ [y.cursorPointer]: null != t }, i),
              children: n,
          })
        : (0, r.jsx)("div", {
              className: i,
              children: n,
          });
}
function N(e) {
    let {
        title: t,
        header: n,
        footer: a,
        info: p,
        staticBannerSrc: g,
        videoBannerSrc: O,
        bannerAspectRatio: S = 0,
        iconSrc: N,
        embedUrl: R,
        infoUrl: P,
        actions: w = [],
        trackingConfig: D,
        onClickContent: x,
        onClickBanner: L,
    } = e;
    D = A(D);
    let { primaryColor: j, secondaryColor: k } = (0, f.Z)(null != N ? N : g),
        M = "linear-gradient(45deg, ".concat(j, ", ").concat(k, ")"),
        U = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        G = i.useRef(!1),
        B = (0, u.O)(
            (e) => {
                if (!1 === G.current && e) {
                    var t;
                    null == D || null == (t = D.onView) || t.call(D),
                        (0, m.GF)({
                            appId: D.id,
                            linkType: D.linkType,
                            referrerId: D.referrerId,
                            customId: D.activityCustomId,
                            guildId: D.guildId,
                            channelId: D.channelId,
                            messageId: D.messageId,
                        }),
                        (G.current = !0);
                }
            },
            void 0,
        ),
        Z =
            h.wS && null != R
                ? (0, r.jsx)(l.zx, {
                      look: l.zx.Looks.BLANK,
                      size: l.zx.Sizes.ICON,
                      "aria-label": b.intl.string(b.t.WqhZsr),
                      className: y.linkIcon,
                      onClick: () => {
                          (0, h.JG)(R, () =>
                              (0, c.showToast)((0, c.createToast)(b.intl.string(b.t["L/PwZW"]), c.ToastType.SUCCESS)),
                          ),
                              (0, m.Yu)(D.id, D.linkType);
                      },
                      children: (0, r.jsx)(c.xPt, {
                          size: "xs",
                          color: "currentColor",
                      }),
                  })
                : null,
        F =
            null != P
                ? (0, r.jsx)(c.eee, {
                      "aria-label": b.intl.string(b.t.wuRE8P),
                      className: y.linkIcon,
                      href: P,
                      children: (0, r.jsx)(c.d3s, {
                          size: "xs",
                          color: c.TVs.colors.APP_MESSAGE_EMBED_SECONDARY_TEXT.css,
                      }),
                  })
                : null,
        V = null != g,
        H = null != O && !1 === U,
        Y = V || H,
        W = 0 === S ? y.bannerAspectRatioBot : y.bannerAspectRatioActivity,
        K = i.useRef(null),
        z = i.useCallback(() => {
            let e = K.current;
            null != e && ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        q = i.useMemo(() => !!H && new URL(O).pathname.endsWith(".gif"), [H, O]),
        X = i.useMemo(() => {
            if (null != x)
                return (e) => {
                    x(e), (0, m.KX)(D.id, D.linkType, m.j_.CONTENT, D.referrerId, D.activityCustomId);
                };
        }, [x, D]),
        Q = i.useMemo(() => {
            if (null != L)
                return (e) => {
                    L(e), (0, m.KX)(D.id, D.linkType, m.j_.BANNER, D.referrerId, D.activityCustomId);
                };
        }, [L, D]);
    return (0, r.jsxs)("div", {
        ref: B,
        className: y.embed,
        children: [
            Y &&
                (0, r.jsxs)(C, {
                    onClick: Q,
                    className: o()(y.bannerWrapper, W, { [y.showVideoOnFocus]: H }),
                    children: [
                        H &&
                            (q
                                ? (0, r.jsx)("div", {
                                      className: y.videoBanner,
                                      style: { backgroundImage: "url(".concat(O, ")") },
                                  })
                                : (0, r.jsx)(_.Z, {
                                      ref: K,
                                      src: O,
                                      mediaLayoutType: E.hV.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: y.videoBanner,
                                  })),
                        V &&
                            (0, r.jsx)("div", {
                                className: y.staticBanner,
                                style: { backgroundImage: "url(".concat(g, ")") },
                                onTransitionEnd: z,
                            }),
                    ],
                }),
            (0, r.jsxs)("div", {
                style: { background: M },
                children: [
                    (0, r.jsxs)("div", {
                        className: y.contentContainer,
                        children: [
                            null != n &&
                                (0, r.jsxs)("div", {
                                    className: y.header,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-sm/semibold",
                                            color: "none",
                                            children: n,
                                        }),
                                        null != Z ? Z : F,
                                    ],
                                }),
                            (0, r.jsxs)("div", {
                                className: y.contentAndCopyButtonWrapper,
                                children: [
                                    (0, r.jsxs)(C, {
                                        onClick: X,
                                        className: o()(y.contentWrapper, { [y.contentWrapperClickable]: null != X }),
                                        children: [
                                            null != N &&
                                                (0, r.jsx)("div", {
                                                    className: y.img,
                                                    style: { backgroundImage: "url(".concat(N, ")") },
                                                }),
                                            (0, r.jsxs)("div", {
                                                className: y.content,
                                                children: [
                                                    (0, r.jsx)(c.Text, {
                                                        variant: "text-md/semibold",
                                                        color: "none",
                                                        lineClamp: 1,
                                                        className: y.contentTitle,
                                                        children: t,
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: y.contentInfoWrapper,
                                                        children: p,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    null == n && (null != Z ? Z : F),
                                ],
                            }),
                            w.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: y.actionWrapper,
                                    children: w.map((e, t) => {
                                        let {
                                                label: n,
                                                icon: i,
                                                onClick: a,
                                                disabledReason: o,
                                                submitting: s,
                                                trackingArea: u,
                                            } = e,
                                            d = null != o,
                                            f = 0 === t,
                                            _ =
                                                null != i
                                                    ? (0, r.jsxs)(r.Fragment, {
                                                          children: [i, (0, r.jsx)("span", { children: n })],
                                                      })
                                                    : n,
                                            p = {
                                                color: f ? l.zx.Colors.WHITE : l.zx.Colors.TRANSPARENT,
                                                className: f ? y.primaryButton : y.alwaysWhiteText,
                                                disabled: d,
                                                submitting: s,
                                                children: _,
                                                onClick(e) {
                                                    a(e),
                                                        (0, m.KX)(
                                                            D.id,
                                                            D.linkType,
                                                            u,
                                                            D.referrerId,
                                                            D.activityCustomId,
                                                        );
                                                },
                                            };
                                        return d
                                            ? (0, r.jsx)(
                                                  c.ua7,
                                                  {
                                                      text: o,
                                                      children: (e) => {
                                                          var t = v({}, I(e));
                                                          return (0, r.jsx)(l.zx, T({}, p, t));
                                                      },
                                                  },
                                                  n,
                                              )
                                            : (0, r.jsx)(l.zx, T({}, p), n);
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
