(n.d(t, { Z: () => O }), n(953529));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n(680018),
    c = n(780384),
    d = n(755721),
    u = n(481060),
    m = n(410030),
    p = n(70097),
    g = n(626135),
    h = n(526167),
    f = n(572995),
    b = n(981631),
    x = n(869783),
    _ = n(888723),
    j = n(790895);
let E = (e) => {
        let { descriptionCta: t, onClick: n, debouncedOnClickAnalytics: r, enablePremiumBrandRefreshDesign: s } = e,
            l = (0, m.ZP)(),
            u = (0, c.wj)(l),
            p = u ? d.Tt.WHITE : d.Tt.BRAND,
            g = () => {
                (r(), n());
            };
        return s
            ? (0, i.jsx)(o.z, {
                  variant: 'secondary',
                  onClick: g,
                  text: t
              })
            : (0, i.jsx)(d.zx, {
                  look: d.iL.OUTLINED,
                  color: p,
                  className: a()(_.bentoBoxButton, u ? _.bentoBoxButtonWhite : _.bentoBoxButtonBrand),
                  onClick: g,
                  children: t
              });
    },
    O = (e) => {
        let t,
            { name: n, title: s, description: o, descriptionCta: c, previewImage: d, videoUrl: m, shouldLoadVideo: O, index: C, customVideoStyle: v, isReducedMotion: S, onClick: T, badgeText: N, size: I, enablePremiumBrandRefreshDesign: y } = e,
            A = (0, h.rO)(),
            P = r.useRef(null),
            R = r.useRef(0),
            D = (function (e) {
                let t;
                switch (e) {
                    case f.NA.EMOJIS:
                        t = _.emojisBackground;
                        break;
                    case f.NA.REFERRAL_PROGRAM:
                        t = _.referralProgramBackground;
                        break;
                    case f.NA.NO_LIMITS:
                        t = _.noLimitsBackground;
                        break;
                    case f.NA.YOUR_SPACE:
                        t = _.yourSpaceBackground;
                        break;
                    case f.NA.SERVER_PROFILES:
                        t = _.serverProfilesBackground;
                        break;
                    case f.NA.SHOW_YOUR_STYLE:
                        t = _.yourStyleBackground;
                        break;
                    case f.NA.PERMADECOS:
                        t = _.permadecosBackground;
                        break;
                    case f.NA.VOICE_FILTERS:
                        t = _.voiceFiltersBackground;
                }
                return t;
            })(n),
            Z = (0, l.debounce)(() => {
                g.default.track(b.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(n) });
            }, 800),
            w = () => {
                null == P.current || S || ((P.current.currentTime = R.current), P.current.play());
            },
            k = () => {
                null == P.current || S || ((R.current = P.current.currentTime), P.current.pause());
            },
            L = y ? j : _;
        t = y ? (I === f.y$.LARGE ? 'heading-xxl/bold' : 'heading-xl/bold') : I === f.y$.SMALL ? 'heading-xl/extrabold' : 'heading-xxl/extrabold';
        let B = () =>
                (0, i.jsxs)('div', {
                    className: a()(L.textBox, L[''.concat(I)]),
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                null != N &&
                                    (0, i.jsx)('div', {
                                        className: L.badge,
                                        children: (0, i.jsx)(u.X6q, {
                                            variant: 'eyebrow',
                                            color: 'always-white',
                                            children: N
                                        })
                                    }),
                                (0, i.jsx)(u.X6q, {
                                    variant: t,
                                    color: 'header-primary',
                                    className: a()(L.header, !y && L[''.concat(I)]),
                                    children: s
                                })
                            ]
                        }),
                        (0, i.jsx)(u.Text, {
                            variant: 'text-md/medium',
                            color: y ? 'text-primary' : 'text-muted',
                            className: L.description,
                            children: o
                        }),
                        null != c &&
                            null != T &&
                            (0, i.jsx)(E, {
                                descriptionCta: c,
                                onClick: T,
                                debouncedOnClickAnalytics: Z,
                                enablePremiumBrandRefreshDesign: y
                            })
                    ]
                }),
            M = () =>
                (0, i.jsx)('div', {
                    className: a()(L.boxArtContainer, L[''.concat(I)]),
                    children: (0, i.jsx)(
                        p.Z,
                        {
                            playsInline: !0,
                            preload: O ? 'auto' : 'none',
                            muted: !0,
                            poster: d,
                            loop: !0,
                            className: a()(L.boxVideo, { [v]: null != v }),
                            ref: P,
                            children: (0, i.jsx)('source', {
                                src: m,
                                type: A ? x.m.MP4 : x.m.WEBM
                            })
                        },
                        m
                    )
                });
        return (0, i.jsx)('div', {
            className: a()(y ? j.backgroundColor : D, L.boxContainer, L[''.concat(I)]),
            onMouseEnter: w,
            onFocus: w,
            onBlur: k,
            onMouseLeave: k,
            children:
                C % 2 != 0
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(B, {}), (0, i.jsx)(M, {})]
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(M, {}), (0, i.jsx)(B, {})]
                      })
        });
    };
