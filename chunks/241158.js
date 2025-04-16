n.d(t, { Z: () => E }), n(953529);
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
    _ = n(388032),
    b = n(731568);
function N(e) {
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
let x = (e) => {
        let { name: t, title: n, description: s, descriptionCta: _, previewImage: N, videoUrl: x, shouldLoadVideo: E, index: j, isCompact: C, isReducedMotion: O, onClick: S } = e,
            v = (0, g.rO)(),
            T = i.useRef(null),
            I = i.useRef(0),
            y = (function (e) {
                let t;
                switch (e) {
                    case p.dm.EMOJIS:
                        t = b.emojisBackground;
                        break;
                    case p.dm.REFERRAL_PROGRAM:
                        t = b.referralProgramBackground;
                        break;
                    case p.dm.NO_LIMITS:
                        t = b.noLimitsBackground;
                        break;
                    case p.dm.NEW_APP_STYLES:
                        t = b.newStylesBackground;
                        break;
                    case p.dm.YOUR_SPACE:
                        t = b.yourSpaceBackground;
                        break;
                    case p.dm.SERVER_PROFILES:
                        t = b.serverProfilesBackground;
                        break;
                    case p.dm.SHOW_YOUR_STYLE:
                        t = b.yourStyleBackground;
                        break;
                    case p.dm.PERMADECOS:
                        t = b.permadecosBackground;
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
                        [b.whatsNewTextBoxOuter]: !C,
                        [b.compactTextBox]: C
                    }),
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-xxl/extrabold',
                            color: 'header-primary',
                            className: a()({
                                [b.whatsNewBoxHeader]: !C,
                                [b.compactBoxHeader]: C
                            }),
                            children: n
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'text-muted',
                            className: b.whatsNewBoxDescription,
                            children: s
                        }),
                        null != _ &&
                            null != S &&
                            (0, r.jsx)(c.zxk, {
                                look: c.iLD.OUTLINED,
                                color: R,
                                className: a()(b.whatsNewBoxButton, P ? b.whatsNewBoxButtonWhite : b.whatsNewBoxButtonBrand),
                                onClick: () => {
                                    D(), S();
                                },
                                children: _
                            })
                    ]
                }),
            W = (e) => {
                let { isLeft: t } = e;
                return (0, r.jsx)('div', {
                    className: a()({
                        [b.whatsNewArtContainer]: !C,
                        [b.compactBoxArtContainer]: C
                    }),
                    children: (0, r.jsx)(
                        u.Z,
                        {
                            playsInline: !0,
                            preload: E ? 'auto' : 'none',
                            muted: !0,
                            poster: N,
                            loop: !0,
                            className: a()({
                                [b.perkBoxVideo]: !C,
                                [b.leftSideArt]: t && !C,
                                [b.compactBoxVideo]: C
                            }),
                            ref: T,
                            children: (0, r.jsx)('source', {
                                src: x,
                                type: v ? f.m.MP4 : f.m.WEBM
                            })
                        },
                        x
                    )
                });
            },
            L = j % 2 != 0;
        return (0, r.jsx)('div', {
            className: a()(y, {
                [b.whatsNewBoxContainer]: !C,
                [b.compactBoxContainer]: C
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
        return (0, r.jsxs)('div', {
            className: a()(b.boxBackdrop, t),
            children: [
                (0, r.jsx)(c.X6q, {
                    className: b.whatsNewHeader,
                    variant: 'display-md',
                    color: 'header-primary',
                    children: i ? _.NW.string(_.t.EnzW2N) : _.NW.string(_.t.LRmNAg)
                }),
                l.map((e, t) =>
                    (0, r.jsx)(
                        x,
                        N(
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
                        className: b.compactBoxOuterContainer,
                        children: [
                            o.map((e, t) =>
                                (0, r.jsx)(
                                    x,
                                    N(
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
                            (0, r.jsx)('div', { className: b.whatsNewSideGradient })
                        ]
                    })
            ]
        });
    });
