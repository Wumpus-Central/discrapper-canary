n.d(t, { Z: () => C }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(159691),
    c = n(780384),
    u = n(755721),
    d = n(481060),
    f = n(410030),
    p = n(70097),
    _ = n(626135),
    m = n(526167),
    h = n(572995),
    g = n(981631),
    E = n(869783),
    b = n(642650),
    y = n(595475);
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
function v(e) {
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
function S(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e) {
    let t;
    switch (e) {
        case h.NA.EMOJIS:
            t = b.emojisBackground;
            break;
        case h.NA.REFERRAL_PROGRAM:
            t = b.referralProgramBackground;
            break;
        case h.NA.NO_LIMITS:
            t = b.noLimitsBackground;
            break;
        case h.NA.YOUR_SPACE:
            t = b.yourSpaceBackground;
            break;
        case h.NA.SERVER_PROFILES:
            t = b.serverProfilesBackground;
            break;
        case h.NA.SHOW_YOUR_STYLE:
            t = b.yourStyleBackground;
            break;
        case h.NA.CUSTOM_THEMES:
            t = b.customThemesBackground;
            break;
        case h.NA.DISPLAY_NAME_STYLES:
            t = b.displayNameStylesBackground;
            break;
        default:
            t = "";
    }
    return t;
}
let A = (e) => {
        let { descriptionCta: t, onClick: n, debouncedOnClickAnalytics: i, enablePremiumBrandRefreshDesign: a } = e,
            s = (0, f.ZP)(),
            d = (0, c.wj)(s),
            p = d ? u.Tt.WHITE : u.Tt.BRAND,
            _ = () => {
                i(), n();
            };
        return a
            ? (0, r.jsx)("div", {
                  className: y.bentoBoxButton,
                  children: (0, r.jsx)(l.zxk, {
                      variant: "secondary",
                      onClick: _,
                      text: t,
                  }),
              })
            : (0, r.jsx)(u.zx, {
                  "data-migration-pending": !0,
                  look: u.iL.OUTLINED,
                  color: p,
                  className: o()(b.bentoBoxButton, d ? b.bentoBoxButtonWhite : b.bentoBoxButtonBrand),
                  onClick: _,
                  children: t,
              });
    },
    C = (e) => {
        let t,
            {
                name: n,
                title: a,
                description: l,
                descriptionCta: c,
                previewImage: u,
                videoUrl: f,
                shouldLoadVideo: O,
                index: S,
                customVideoStyle: C,
                isReducedMotion: N,
                onClick: P,
                badgeText: R,
                size: D,
                enablePremiumBrandRefreshDesign: w,
            } = e,
            x = (0, m.rO)(),
            L = i.useRef(null),
            j = i.useRef(0),
            M = T(n),
            k = i.useMemo(
                () =>
                    (0, s.debounce)(() => {
                        _.default.track(g.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, s.snakeCase)(n) });
                    }, 800),
                [n],
            ),
            U = () => {
                null == L.current || N || ((L.current.currentTime = j.current), L.current.play());
            },
            G = () => {
                null == L.current || N || ((j.current = L.current.currentTime), L.current.pause());
            },
            Z = w ? y : b;
        t = w
            ? D === h.y$.LARGE
                ? "heading-xxl/bold"
                : "heading-xl/bold"
            : D === h.y$.SMALL
              ? "heading-xl/extrabold"
              : "heading-xxl/extrabold";
        let B = () =>
                (0, r.jsxs)("div", {
                    className: o()(Z.textBox, Z["".concat(D)]),
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                null != R &&
                                    (0, r.jsx)("div", {
                                        className: Z.badge,
                                        children: (0, r.jsx)(d.Heading, {
                                            variant: "eyebrow",
                                            color: "always-white",
                                            children: R,
                                        }),
                                    }),
                                (0, r.jsx)(d.Heading, {
                                    variant: t,
                                    color: "header-primary",
                                    className: o()(Z.header, !w && Z["".concat(D)]),
                                    children: a,
                                }),
                            ],
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: w ? "text-strong" : "text-muted",
                            className: Z.description,
                            children: l,
                        }),
                        null != c &&
                            null != P &&
                            (0, r.jsx)(A, {
                                descriptionCta: c,
                                onClick: P,
                                debouncedOnClickAnalytics: k,
                                enablePremiumBrandRefreshDesign: w,
                            }),
                    ],
                }),
            F = () =>
                (0, r.jsx)("div", {
                    className: o()(Z.boxArtContainer, Z["".concat(D)]),
                    children: (0, r.jsx)(
                        p.Z,
                        {
                            playsInline: !0,
                            preload: O ? "auto" : "none",
                            muted: !0,
                            poster: u,
                            loop: !0,
                            className: o()(Z.boxVideo, { [C]: null != C }),
                            ref: L,
                            children: (0, r.jsx)("source", {
                                src: f,
                                type: x ? E.m.MP4 : E.m.WEBM,
                            }),
                        },
                        f,
                    ),
                }),
            V = S % 2 != 0,
            H = () =>
                V
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(B, {}), (0, r.jsx)(F, {})],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(F, {}), (0, r.jsx)(B, {})],
                      }),
            Y = {
                className: o()(w ? y.backgroundColor : M, Z.boxContainer, Z["".concat(D)], w && y.gradientBackground),
                onMouseEnter: U,
                onFocus: U,
                onBlur: G,
                onMouseLeave: G,
            };
        return w
            ? (0, r.jsx)(
                  d.$1m,
                  I(v({}, Y), {
                      color: "purple",
                      children: (0, r.jsx)(H, {}),
                  }),
              )
            : (0, r.jsx)("div", I(v({}, Y), { children: (0, r.jsx)(H, {}) }));
    };
