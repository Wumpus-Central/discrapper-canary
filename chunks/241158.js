n.d(t, { Z: () => j }), n(953529);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(392711),
    o = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(70097),
    m = n(626135),
    p = n(526167),
    g = n(831964),
    h = n(981631),
    f = n(869783),
    b = n(388032),
    _ = n(731568);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let E = (e) => {
        let { name: t, title: n, description: s, descriptionCta: b, previewImage: x, videoUrl: E, shouldLoadVideo: j, index: C, isCompact: O, isReducedMotion: S, onClick: v } = e,
            T = (0, p.rO)(),
            N = r.useRef(null),
            I = r.useRef(0),
            y = (function (e) {
                let t;
                switch (e) {
                    case g.dm.EMOJIS:
                        t = _.emojisBackground;
                        break;
                    case g.dm.REFERRAL_PROGRAM:
                        t = _.referralProgramBackground;
                        break;
                    case g.dm.NO_LIMITS:
                        t = _.noLimitsBackground;
                        break;
                    case g.dm.NEW_APP_STYLES:
                        t = _.newStylesBackground;
                        break;
                    case g.dm.YOUR_SPACE:
                        t = _.yourSpaceBackground;
                        break;
                    case g.dm.SERVER_PROFILES:
                        t = _.serverProfilesBackground;
                        break;
                    case g.dm.SHOW_YOUR_STYLE:
                        t = _.yourStyleBackground;
                        break;
                    case g.dm.PERMADECOS:
                        t = _.permadecosBackground;
                }
                return t;
            })(t),
            A = (0, d.ZP)(),
            P = (0, o.wj)(A),
            R = P ? c.Ttl.WHITE : c.Ttl.BRAND,
            D = (0, a.debounce)(() => {
                m.default.track(h.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, a.snakeCase)(t) });
            }, 800),
            Z = () => {
                null == N.current || S || ((N.current.currentTime = I.current), N.current.play());
            },
            w = () => {
                null == N.current || S || ((I.current = N.current.currentTime), N.current.pause());
            },
            k = () =>
                (0, i.jsxs)('div', {
                    className: l()({
                        [_.whatsNewTextBoxOuter]: !O,
                        [_.compactTextBox]: O
                    }),
                    children: [
                        (0, i.jsx)(c.X6q, {
                            variant: 'heading-xxl/extrabold',
                            color: 'header-primary',
                            className: l()({
                                [_.whatsNewBoxHeader]: !O,
                                [_.compactBoxHeader]: O
                            }),
                            children: n
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'text-muted',
                            className: _.whatsNewBoxDescription,
                            children: s
                        }),
                        null != b &&
                            null != v &&
                            (0, i.jsx)(c.zxk, {
                                look: c.iLD.OUTLINED,
                                color: R,
                                className: l()(_.whatsNewBoxButton, P ? _.whatsNewBoxButtonWhite : _.whatsNewBoxButtonBrand),
                                onClick: () => {
                                    D(), v();
                                },
                                children: b
                            })
                    ]
                }),
            L = (e) => {
                let { isLeft: t } = e;
                return (0, i.jsx)('div', {
                    className: l()({
                        [_.whatsNewArtContainer]: !O,
                        [_.compactBoxArtContainer]: O
                    }),
                    children: (0, i.jsx)(
                        u.Z,
                        {
                            playsInline: !0,
                            preload: j ? 'auto' : 'none',
                            muted: !0,
                            poster: x,
                            loop: !0,
                            className: l()({
                                [_.perkBoxVideo]: !O,
                                [_.leftSideArt]: t && !O,
                                [_.compactBoxVideo]: O
                            }),
                            ref: N,
                            children: (0, i.jsx)('source', {
                                src: E,
                                type: T ? f.m.MP4 : f.m.WEBM
                            })
                        },
                        E
                    )
                });
            },
            M = C % 2 != 0;
        return (0, i.jsx)('div', {
            className: l()(y, {
                [_.whatsNewBoxContainer]: !O,
                [_.compactBoxContainer]: O
            }),
            onMouseEnter: Z,
            onFocus: Z,
            onBlur: w,
            onMouseLeave: w,
            children: M
                ? (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(k, {}), (0, i.jsx)(L, { isLeft: M })]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(L, { isLeft: M }), (0, i.jsx)(k, {})]
                  })
        });
    },
    j = r.memo(function (e) {
        let { className: t, shouldLoadVideo: n, isBestOfNitro: r = !1, isReducedMotion: s } = e,
            a = Object.values((0, g.ZP)(r)),
            o = r ? Object.values((0, g.__)()) : null;
        return (0, i.jsxs)('div', {
            className: l()(_.boxBackdrop, t),
            children: [
                (0, i.jsx)(c.X6q, {
                    className: _.whatsNewHeader,
                    variant: 'display-md',
                    color: 'header-primary',
                    children: r ? b.intl.string(b.t.EnzW2N) : b.intl.string(b.t.LRmNAg)
                }),
                a.map((e, t) =>
                    (0, i.jsx)(
                        E,
                        x(
                            {
                                shouldLoadVideo: n,
                                isReducedMotion: s,
                                index: t
                            },
                            e
                        ),
                        e.name
                    )
                ),
                null != o &&
                    (0, i.jsxs)('div', {
                        className: _.compactBoxOuterContainer,
                        children: [
                            o.map((e, t) =>
                                (0, i.jsx)(
                                    E,
                                    x(
                                        {
                                            shouldLoadVideo: n,
                                            isReducedMotion: s,
                                            index: t
                                        },
                                        e
                                    ),
                                    e.name
                                )
                            ),
                            (0, i.jsx)('div', { className: _.whatsNewSideGradient })
                        ]
                    })
            ]
        });
    });
