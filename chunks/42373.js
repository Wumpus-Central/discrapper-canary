n.d(t, { Z: () => N }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(313666),
    c = n(159691),
    u = n(780384),
    d = n(755721),
    f = n(481060),
    p = n(410030),
    _ = n(70097),
    m = n(626135),
    h = n(526167),
    g = n(572995),
    E = n(981631),
    b = n(869783),
    y = n(291049),
    O = n(538654);
function v(e, t, n) {
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
function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e) {
    let t;
    switch (e) {
        case g.NA.EMOJIS:
            t = y.emojisBackground;
            break;
        case g.NA.REFERRAL_PROGRAM:
            t = y.referralProgramBackground;
            break;
        case g.NA.NO_LIMITS:
            t = y.noLimitsBackground;
            break;
        case g.NA.YOUR_SPACE:
            t = y.yourSpaceBackground;
            break;
        case g.NA.SERVER_PROFILES:
            t = y.serverProfilesBackground;
            break;
        case g.NA.SHOW_YOUR_STYLE:
            t = y.yourStyleBackground;
            break;
        case g.NA.CUSTOM_THEMES:
            t = y.customThemesBackground;
            break;
        case g.NA.DISPLAY_NAME_STYLES:
            t = y.displayNameStylesBackground;
            break;
        default:
            t = "";
    }
    return t;
}
let A = (e) => {
        let { descriptionCta: t, onClick: n, debouncedOnClickAnalytics: i, enablePremiumBrandRefreshDesign: a } = e,
            s = (0, p.ZP)(),
            l = (0, u.wj)(s),
            f = l ? d.Tt.WHITE : d.Tt.BRAND,
            _ = () => {
                i(), n();
            };
        return a
            ? (0, r.jsx)("div", {
                  className: O.bentoBoxButton,
                  children: (0, r.jsx)(c.zxk, {
                      variant: "secondary",
                      onClick: _,
                      text: t,
                  }),
              })
            : (0, r.jsx)(d.zx, {
                  "data-migration-pending": !0,
                  look: d.iL.OUTLINED,
                  color: f,
                  className: o()(y.bentoBoxButton, l ? y.bentoBoxButtonWhite : y.bentoBoxButtonBrand),
                  onClick: _,
                  children: t,
              });
    },
    N = (e) => {
        let t,
            {
                name: n,
                title: a,
                description: c,
                descriptionCta: u,
                previewImage: d,
                videoUrl: p,
                shouldLoadVideo: v,
                index: I,
                customVideoStyle: N,
                isReducedMotion: P,
                onClick: R,
                badgeText: w,
                badgeVariant: D = "gradient",
                size: x,
                enablePremiumBrandRefreshDesign: L,
            } = e,
            j = (0, h.rO)(),
            M = i.useRef(null),
            k = i.useRef(0),
            U = C(n),
            G = i.useMemo(
                () =>
                    (0, s.debounce)(() => {
                        m.default.track(E.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, s.snakeCase)(n) });
                    }, 800),
                [n],
            ),
            Z = () => {
                null == M.current || P || ((M.current.currentTime = k.current), M.current.play());
            },
            F = () => {
                null == M.current || P || ((k.current = M.current.currentTime), M.current.pause());
            },
            B = L ? O : y;
        t = L
            ? x === g.y$.LARGE
                ? "heading-xxl/bold"
                : "heading-xl/bold"
            : x === g.y$.SMALL
              ? "heading-xl/extrabold"
              : "heading-xxl/extrabold";
        let V = () =>
                (0, r.jsxs)("div", {
                    className: o()(B.textBox, B["".concat(x)]),
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                null != w &&
                                    ("gradient" === D
                                        ? (0, r.jsx)("div", {
                                              className: B.badgeContainer,
                                              children: (0, r.jsx)("div", {
                                                  className: B.badge,
                                                  children: (0, r.jsx)(f.Heading, {
                                                      variant: "eyebrow",
                                                      color: "always-white",
                                                      children: w,
                                                  }),
                                              }),
                                          })
                                        : (0, r.jsx)("div", {
                                              className: B.badgeContainer,
                                              children: (0, r.jsx)(l.C, {
                                                  type: { text: w },
                                                  variant: D,
                                              }),
                                          })),
                                (0, r.jsx)(f.Heading, {
                                    variant: t,
                                    color: "text-strong",
                                    className: o()(B.header, !L && B["".concat(x)]),
                                    children: a,
                                }),
                            ],
                        }),
                        (0, r.jsx)(f.Text, {
                            variant: "text-md/medium",
                            color: L ? "text-strong" : "text-muted",
                            className: B.description,
                            children: c,
                        }),
                        null != u &&
                            null != R &&
                            (0, r.jsx)(A, {
                                descriptionCta: u,
                                onClick: R,
                                debouncedOnClickAnalytics: G,
                                enablePremiumBrandRefreshDesign: L,
                            }),
                    ],
                }),
            H = () =>
                (0, r.jsx)("div", {
                    className: o()(B.boxArtContainer, B["".concat(x)]),
                    children: (0, r.jsx)(
                        _.Z,
                        {
                            playsInline: !0,
                            preload: v ? "auto" : "none",
                            muted: !0,
                            poster: d,
                            loop: !0,
                            className: o()(B.boxVideo, { [N]: null != N }),
                            ref: M,
                            children: (0, r.jsx)("source", {
                                src: p,
                                type: j ? b.m.MP4 : b.m.WEBM,
                            }),
                        },
                        p,
                    ),
                }),
            Y = I % 2 != 0,
            W = () =>
                Y
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(V, {}), (0, r.jsx)(H, {})],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(H, {}), (0, r.jsx)(V, {})],
                      }),
            K = {
                className: o()(L ? O.backgroundColor : U, B.boxContainer, B["".concat(x)], L && O.gradientBackground),
                onMouseEnter: Z,
                onFocus: Z,
                onBlur: F,
                onMouseLeave: F,
            };
        return L
            ? (0, r.jsx)(
                  f.$1m,
                  T(S({}, K), {
                      color: "purple",
                      children: (0, r.jsx)(W, {}),
                  }),
              )
            : (0, r.jsx)("div", T(S({}, K), { children: (0, r.jsx)(W, {}) }));
    };
