(n.d(t, { Z: () => T }), n(953529));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n(680018),
    c = n(304789),
    d = n(780384),
    u = n(755721),
    m = n(481060),
    p = n(434650),
    g = n(410030),
    h = n(70097),
    f = n(626135),
    b = n(526167),
    x = n(572995),
    _ = n(981631),
    j = n(869783),
    O = n(888723),
    E = n(790895);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = (e) => {
        let { descriptionCta: t, onClick: n, debouncedOnClickAnalytics: r, enablePremiumBrandRefreshDesign: s } = e,
            l = (0, g.ZP)(),
            c = (0, d.wj)(l),
            m = c ? u.Tt.WHITE : u.Tt.BRAND,
            p = () => {
                (r(), n());
            };
        return s
            ? (0, i.jsx)('div', {
                  className: E.bentoBoxButton,
                  children: (0, i.jsx)(o.z, {
                      variant: 'secondary',
                      onClick: p,
                      text: t
                  })
              })
            : (0, i.jsx)(u.zx, {
                  look: u.iL.OUTLINED,
                  color: m,
                  className: a()(O.bentoBoxButton, c ? O.bentoBoxButtonWhite : O.bentoBoxButtonBrand),
                  onClick: p,
                  children: t
              });
    },
    T = (e) => {
        let t,
            { name: n, title: s, description: o, descriptionCta: d, previewImage: u, videoUrl: g, shouldLoadVideo: T, index: N, customVideoStyle: I, isReducedMotion: y, onClick: A, badgeText: P, size: R, enablePremiumBrandRefreshDesign: D } = e,
            Z = (0, b.rO)(),
            w = r.useRef(null),
            k = r.useRef(0),
            L = (function (e) {
                let t;
                switch (e) {
                    case x.NA.EMOJIS:
                        t = O.emojisBackground;
                        break;
                    case x.NA.REFERRAL_PROGRAM:
                        t = O.referralProgramBackground;
                        break;
                    case x.NA.NO_LIMITS:
                        t = O.noLimitsBackground;
                        break;
                    case x.NA.YOUR_SPACE:
                        t = O.yourSpaceBackground;
                        break;
                    case x.NA.SERVER_PROFILES:
                        t = O.serverProfilesBackground;
                        break;
                    case x.NA.SHOW_YOUR_STYLE:
                        t = O.yourStyleBackground;
                        break;
                    case x.NA.PERMADECOS:
                        t = O.permadecosBackground;
                        break;
                    case x.NA.VOICE_FILTERS:
                        t = O.voiceFiltersBackground;
                }
                return t;
            })(n),
            B = (0, l.debounce)(() => {
                f.default.track(_.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(n) });
            }, 800),
            M = () => {
                null == w.current || y || ((w.current.currentTime = k.current), w.current.play());
            },
            U = () => {
                null == w.current || y || ((k.current = w.current.currentTime), w.current.pause());
            },
            V = (0, p.O)(
                (e) => {
                    e ? M() : e || U();
                },
                0.7,
                D
            ),
            G = D ? E : O;
        t = D ? (R === x.y$.LARGE ? 'heading-xxl/bold' : 'heading-xl/bold') : R === x.y$.SMALL ? 'heading-xl/extrabold' : 'heading-xxl/extrabold';
        let F = () =>
                (0, i.jsxs)('div', {
                    className: a()(G.textBox, G[''.concat(R)]),
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                null != P &&
                                    (0, i.jsx)('div', {
                                        className: G.badge,
                                        children: (0, i.jsx)(m.X6q, {
                                            variant: 'eyebrow',
                                            color: 'always-white',
                                            children: P
                                        })
                                    }),
                                (0, i.jsx)(m.X6q, {
                                    variant: t,
                                    color: 'header-primary',
                                    className: a()(G.header, !D && G[''.concat(R)]),
                                    children: s
                                })
                            ]
                        }),
                        (0, i.jsx)(m.Text, {
                            variant: 'text-md/medium',
                            color: D ? 'text-primary' : 'text-muted',
                            className: G.description,
                            children: o
                        }),
                        null != d &&
                            null != A &&
                            (0, i.jsx)(S, {
                                descriptionCta: d,
                                onClick: A,
                                debouncedOnClickAnalytics: B,
                                enablePremiumBrandRefreshDesign: D
                            })
                    ]
                }),
            H = () =>
                (0, i.jsx)('div', {
                    className: a()(G.boxArtContainer, G[''.concat(R)]),
                    ref: V,
                    children: (0, i.jsx)(
                        h.Z,
                        {
                            playsInline: !0,
                            preload: T ? 'auto' : 'none',
                            muted: !0,
                            poster: u,
                            loop: !0,
                            className: a()(G.boxVideo, { [I]: null != I }),
                            ref: w,
                            children: (0, i.jsx)('source', {
                                src: g,
                                type: Z ? j.m.MP4 : j.m.WEBM
                            })
                        },
                        g
                    )
                }),
            z = N % 2 != 0,
            W = () =>
                z
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(F, {}), (0, i.jsx)(H, {})]
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(H, {}), (0, i.jsx)(F, {})]
                      }),
            Y = {
                className: a()(D ? E.backgroundColor : L, G.boxContainer, G[''.concat(R)], D && E.gradientBackground),
                onMouseEnter: M,
                onFocus: M,
                onBlur: U,
                onMouseLeave: U
            };
        return D
            ? (0, i.jsx)(
                  c.$,
                  v(C({}, Y), {
                      color: 'purple',
                      children: (0, i.jsx)(W, {})
                  })
              )
            : (0, i.jsx)('div', v(C({}, Y), { children: (0, i.jsx)(W, {}) }));
    };
