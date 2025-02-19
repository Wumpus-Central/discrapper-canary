n.d(t, { Z: () => E }), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(70097),
    m = n(626135),
    g = n(526167),
    p = n(831964),
    h = n(981631),
    f = n(869783),
    N = n(388032),
    x = n(24891);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let _ = (e) => {
        let { name: t, title: n, description: s, descriptionCta: N, previewImage: b, videoUrl: _, shouldLoadVideo: E, index: j, isCompact: C, isReducedMotion: O, onClick: v } = e,
            S = (0, g.rO)(),
            T = i.useRef(null),
            I = i.useRef(0),
            y = (function (e) {
                let t;
                switch (e) {
                    case p.dm.EMOJIS:
                        t = x.emojisBackground;
                        break;
                    case p.dm.REFERRAL_PROGRAM:
                        t = x.referralProgramBackground;
                        break;
                    case p.dm.NO_LIMITS:
                        t = x.noLimitsBackground;
                        break;
                    case p.dm.NEW_APP_STYLES:
                        t = x.newStylesBackground;
                        break;
                    case p.dm.YOUR_SPACE:
                        t = x.yourSpaceBackground;
                        break;
                    case p.dm.SERVER_PROFILES:
                        t = x.serverProfilesBackground;
                        break;
                    case p.dm.SHOW_YOUR_STYLE:
                        t = x.yourStyleBackground;
                }
                return t;
            })(t),
            A = (0, d.ZP)(),
            P = (0, o.wj)(A),
            R = P ? c.Ttl.WHITE : c.Ttl.BRAND,
            D = (0, l.debounce)(() => {
                m.default.track(h.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
            }, 800),
            Z = () => {
                null == T.current || O || ((T.current.currentTime = I.current), T.current.play());
            },
            w = () => {
                null == T.current || O || ((I.current = T.current.currentTime), T.current.pause());
            },
            k = () =>
                (0, r.jsxs)('div', {
                    className: a()({
                        [x.whatsNewTextBoxOuter]: !C,
                        [x.compactTextBox]: C
                    }),
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-xxl/extrabold',
                            color: 'header-primary',
                            className: a()({
                                [x.whatsNewBoxHeader]: !C,
                                [x.compactBoxHeader]: C
                            }),
                            children: n
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'text-muted',
                            className: x.whatsNewBoxDescription,
                            children: s
                        }),
                        null != N &&
                            null != v &&
                            (0, r.jsx)(c.zxk, {
                                look: c.iLD.OUTLINED,
                                color: R,
                                className: a()(x.whatsNewBoxButton, P ? x.whatsNewBoxButtonWhite : x.whatsNewBoxButtonBrand),
                                onClick: () => {
                                    D(), v();
                                },
                                children: N
                            })
                    ]
                }),
            W = (e) => {
                let { isLeft: t } = e;
                return (0, r.jsx)('div', {
                    className: a()({
                        [x.whatsNewArtContainer]: !C,
                        [x.compactBoxArtContainer]: C
                    }),
                    children: (0, r.jsx)(
                        u.Z,
                        {
                            playsInline: !0,
                            preload: E ? 'auto' : 'none',
                            muted: !0,
                            poster: b,
                            loop: !0,
                            className: a()({
                                [x.perkBoxVideo]: !C,
                                [x.leftSideArt]: t && !C,
                                [x.compactBoxVideo]: C
                            }),
                            ref: T,
                            children: (0, r.jsx)('source', {
                                src: _,
                                type: S ? f.m.MP4 : f.m.WEBM
                            })
                        },
                        _
                    )
                });
            },
            L = j % 2 == 0;
        return (0, r.jsx)('div', {
            className: a()(y, {
                [x.whatsNewBoxContainer]: !C,
                [x.compactBoxContainer]: C
            }),
            onMouseEnter: Z,
            onFocus: Z,
            onBlur: w,
            onMouseLeave: w,
            children: L
                ? (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(k, {}), (0, r.jsx)(W, { isLeft: L })]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(W, { isLeft: L }), (0, r.jsx)(k, {})]
                  })
        });
    },
    E = i.memo(function (e) {
        let { className: t, shouldLoadVideo: n, isBestOfNitro: i = !1, isReducedMotion: s } = e,
            l = Object.values((0, p.ZP)(i)),
            o = i ? Object.values((0, p.__)()) : null;
        return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)('div', {
                className: a()(x.boxBackdrop, t),
                children: [
                    (0, r.jsx)(c.X6q, {
                        className: x.whatsNewHeader,
                        variant: 'display-md',
                        color: 'header-primary',
                        children: i ? N.NW.string(N.t.EnzW2N) : N.NW.string(N.t.LRmNAg)
                    }),
                    l.map((e, t) =>
                        (0, r.jsx)(
                            _,
                            b(
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
                        (0, r.jsxs)('div', {
                            className: x.compactBoxOuterContainer,
                            children: [
                                o.map((e, t) =>
                                    (0, r.jsx)(
                                        _,
                                        b(
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
                                (0, r.jsx)('div', { className: x.whatsNewSideGradient })
                            ]
                        })
                ]
            })
        });
    });
