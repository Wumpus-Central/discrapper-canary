n.d(t, { Z: () => N }), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(680018),
    c = n(304789),
    u = n(780384),
    d = n(755721),
    f = n(481060),
    _ = n(410030),
    p = n(70097),
    h = n(626135),
    m = n(526167),
    g = n(572995),
    E = n(981631),
    b = n(869783),
    y = n(642650),
    O = n(595475);
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
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
        case g.NA.PERMADECOS:
            t = y.permadecosBackground;
            break;
        case g.NA.VOICE_FILTERS:
            t = y.voiceFiltersBackground;
            break;
        case g.NA.CUSTOM_THEMES:
            t = y.customThemesBackground;
    }
    return t;
}
let C = (e) => {
        let { descriptionCta: t, onClick: n, debouncedOnClickAnalytics: i, enablePremiumBrandRefreshDesign: a } = e,
            s = (0, _.ZP)(),
            c = (0, u.wj)(s),
            f = c ? d.Tt.WHITE : d.Tt.BRAND,
            p = () => {
                i(), n();
            };
        return a
            ? (0, r.jsx)("div", {
                  className: O.bentoBoxButton,
                  children: (0, r.jsx)(l.z, {
                      variant: "secondary",
                      onClick: p,
                      text: t,
                  }),
              })
            : (0, r.jsx)(d.zx, {
                  "data-migration-pending": !0,
                  look: d.iL.OUTLINED,
                  color: f,
                  className: o()(y.bentoBoxButton, c ? y.bentoBoxButtonWhite : y.bentoBoxButtonBrand),
                  onClick: p,
                  children: t,
              });
    },
    N = (e) => {
        let t,
            {
                name: n,
                title: a,
                description: l,
                descriptionCta: u,
                previewImage: d,
                videoUrl: _,
                shouldLoadVideo: v,
                index: T,
                customVideoStyle: N,
                isReducedMotion: R,
                onClick: P,
                badgeText: w,
                size: D,
                enablePremiumBrandRefreshDesign: x,
            } = e,
            L = (0, m.rO)(),
            j = i.useRef(null),
            M = i.useRef(0),
            k = A(n),
            U = (0, s.debounce)(() => {
                h.default.track(E.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, s.snakeCase)(n) });
            }, 800),
            G = () => {
                null == j.current || R || ((j.current.currentTime = M.current), j.current.play());
            },
            B = () => {
                null == j.current || R || ((M.current = j.current.currentTime), j.current.pause());
            },
            Z = x ? O : y;
        t = x
            ? D === g.y$.LARGE
                ? "heading-xxl/bold"
                : "heading-xl/bold"
            : D === g.y$.SMALL
              ? "heading-xl/extrabold"
              : "heading-xxl/extrabold";
        let V = () =>
                (0, r.jsxs)("div", {
                    className: o()(Z.textBox, Z["".concat(D)]),
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                null != w &&
                                    (0, r.jsx)("div", {
                                        className: Z.badge,
                                        children: (0, r.jsx)(f.X6q, {
                                            variant: "eyebrow",
                                            color: "always-white",
                                            children: w,
                                        }),
                                    }),
                                (0, r.jsx)(f.X6q, {
                                    variant: t,
                                    color: "header-primary",
                                    className: o()(Z.header, !x && Z["".concat(D)]),
                                    children: a,
                                }),
                            ],
                        }),
                        (0, r.jsx)(f.Text, {
                            variant: "text-md/medium",
                            color: x ? "text-primary" : "text-muted",
                            className: Z.description,
                            children: l,
                        }),
                        null != u &&
                            null != P &&
                            (0, r.jsx)(C, {
                                descriptionCta: u,
                                onClick: P,
                                debouncedOnClickAnalytics: U,
                                enablePremiumBrandRefreshDesign: x,
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
                            preload: v ? "auto" : "none",
                            muted: !0,
                            poster: d,
                            loop: !0,
                            className: o()(Z.boxVideo, { [N]: null != N }),
                            ref: j,
                            children: (0, r.jsx)("source", {
                                src: _,
                                type: L ? b.m.MP4 : b.m.WEBM,
                            }),
                        },
                        _,
                    ),
                }),
            H = T % 2 != 0,
            Y = () =>
                H
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(V, {}), (0, r.jsx)(F, {})],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(F, {}), (0, r.jsx)(V, {})],
                      }),
            W = {
                className: o()(x ? O.backgroundColor : k, Z.boxContainer, Z["".concat(D)], x && O.gradientBackground),
                onMouseEnter: G,
                onFocus: G,
                onBlur: B,
                onMouseLeave: B,
            };
        return x
            ? (0, r.jsx)(
                  c.$,
                  S(I({}, W), {
                      color: "purple",
                      children: (0, r.jsx)(Y, {}),
                  }),
              )
            : (0, r.jsx)("div", S(I({}, W), { children: (0, r.jsx)(Y, {}) }));
    };
