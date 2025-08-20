n.d(t, {
    W: () => C,
    u: () => T,
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
    g = n(217702),
    E = n(388032),
    b = n(906376);
function y(e, t, n) {
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
function O() {
    return (O =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function v(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e;
}
function I(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
var T = (function (e) {
    return (e[(e.BOT = 0)] = "BOT"), (e[(e.ACTIVITY = 1)] = "ACTIVITY"), e;
})({});
function S(e) {
    var t, n, r;
    return {
        id: null != (t = null == e ? void 0 : e.id) ? t : "0",
        linkType: null != (n = null == e ? void 0 : e.linkType) ? n : m.Un.UNKNOWN,
        referrerId: null != (r = null == e ? void 0 : e.referrerId) ? r : p.default.getId(),
        activityCustomId: null == e ? void 0 : e.activityCustomId,
        onView: null == e ? void 0 : e.onView,
        onLinkCopied: null == e ? void 0 : e.onLinkCopied,
    };
}
function A(e) {
    let { onClick: t, children: n, className: i } = e;
    return null != t
        ? (0, r.jsx)(c.P3F, {
              onClick: t,
              className: o()({ [b.cursorPointer]: null != t }, i),
              children: n,
          })
        : (0, r.jsx)("div", {
              className: i,
              children: n,
          });
}
function C(e) {
    let {
        title: t,
        header: n,
        footer: a,
        info: p,
        staticBannerSrc: y,
        videoBannerSrc: T,
        bannerAspectRatio: C = 0,
        iconSrc: N,
        embedUrl: R,
        infoUrl: P,
        actions: w = [],
        trackingConfig: D,
        onClickContent: x,
        onClickBanner: L,
    } = e;
    D = S(D);
    let { primaryColor: j, secondaryColor: M } = (0, f.Z)(null != N ? N : y),
        k = "linear-gradient(45deg, ".concat(j, ", ").concat(M, ")"),
        U = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        G = i.useRef(!1),
        B = (0, u.O)(
            (e) => {
                if (!1 === G.current && e) {
                    var t;
                    null == D || null == (t = D.onView) || t.call(D),
                        (0, m.GF)(D.id, D.linkType, D.referrerId, D.activityCustomId),
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
                      "aria-label": E.intl.string(E.t.WqhZsr),
                      className: b.linkIcon,
                      onClick: () => {
                          (0, h.JG)(R, () =>
                              (0, c.showToast)((0, c.createToast)(E.intl.string(E.t["L/PwZW"]), c.ToastType.SUCCESS)),
                          ),
                              (0, m.Yu)(D.id, D.linkType);
                      },
                      children: (0, r.jsx)(c.xPt, {
                          size: "xs",
                          color: "currentColor",
                      }),
                  })
                : null,
        V =
            null != P
                ? (0, r.jsx)(c.eee, {
                      "aria-label": E.intl.string(E.t.wuRE8P),
                      className: b.linkIcon,
                      href: P,
                      children: (0, r.jsx)(c.d3s, {
                          size: "xs",
                          color: c.TVs.colors.APP_MESSAGE_EMBED_SECONDARY_TEXT.css,
                      }),
                  })
                : null,
        F = null != y,
        H = null != T && !1 === U,
        Y = F || H,
        W = 0 === C ? b.bannerAspectRatioBot : b.bannerAspectRatioActivity,
        K = i.useRef(null),
        z = i.useCallback(() => {
            let e = K.current;
            null != e && ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        q = i.useMemo(() => !!H && new URL(T).pathname.endsWith(".gif"), [H, T]),
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
        className: b.embed,
        children: [
            Y &&
                (0, r.jsxs)(A, {
                    onClick: Q,
                    className: o()(b.bannerWrapper, W, { [b.showVideoOnFocus]: H }),
                    children: [
                        H &&
                            (q
                                ? (0, r.jsx)("div", {
                                      className: b.videoBanner,
                                      style: { backgroundImage: "url(".concat(T, ")") },
                                  })
                                : (0, r.jsx)(_.Z, {
                                      ref: K,
                                      src: T,
                                      mediaLayoutType: g.hV.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: b.videoBanner,
                                  })),
                        F &&
                            (0, r.jsx)("div", {
                                className: b.staticBanner,
                                style: { backgroundImage: "url(".concat(y, ")") },
                                onTransitionEnd: z,
                            }),
                    ],
                }),
            (0, r.jsxs)("div", {
                style: { background: k },
                children: [
                    (0, r.jsxs)("div", {
                        className: b.contentContainer,
                        children: [
                            null != n &&
                                (0, r.jsxs)("div", {
                                    className: b.header,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-sm/semibold",
                                            color: "none",
                                            children: n,
                                        }),
                                        null != Z ? Z : V,
                                    ],
                                }),
                            (0, r.jsxs)("div", {
                                className: b.contentAndCopyButtonWrapper,
                                children: [
                                    (0, r.jsxs)(A, {
                                        onClick: X,
                                        className: o()(b.contentWrapper, { [b.contentWrapperClickable]: null != X }),
                                        children: [
                                            null != N &&
                                                (0, r.jsx)("div", {
                                                    className: b.img,
                                                    style: { backgroundImage: "url(".concat(N, ")") },
                                                }),
                                            (0, r.jsxs)("div", {
                                                className: b.content,
                                                children: [
                                                    (0, r.jsx)(c.Text, {
                                                        variant: "text-md/semibold",
                                                        color: "none",
                                                        lineClamp: 1,
                                                        className: b.contentTitle,
                                                        children: t,
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: b.contentInfoWrapper,
                                                        children: p,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    null == n && (null != Z ? Z : V),
                                ],
                            }),
                            w.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: b.actionWrapper,
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
                                                className: f ? b.primaryButton : b.alwaysWhiteText,
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
                                                          var t = O({}, v(e));
                                                          return (0, r.jsx)(l.zx, I({}, p, t));
                                                      },
                                                  },
                                                  n,
                                              )
                                            : (0, r.jsx)(l.zx, I({}, p), n);
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
