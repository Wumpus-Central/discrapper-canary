n.d(t, { Z: () => f });
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(392711),
    o = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(70097),
    m = n(626135),
    g = n(526167),
    h = n(831964),
    x = n(981631),
    _ = n(869783),
    p = n(388032),
    E = n(909007);
let C = (e) => {
        let { name: t, title: n, description: r, descriptionCta: p, previewImage: C, videoUrl: f, shouldLoadVideo: T, index: N, isCompact: I, isReducedMotion: S, onClick: b } = e,
            v = (0, g.rO)(),
            j = s.useRef(null),
            A = s.useRef(0),
            O = (function (e) {
                let t;
                switch (e) {
                    case h.dm.EMOJIS:
                        t = E.emojisBackground;
                        break;
                    case h.dm.REFERRAL_PROGRAM:
                        t = E.referralProgramBackground;
                        break;
                    case h.dm.NO_LIMITS:
                        t = E.noLimitsBackground;
                        break;
                    case h.dm.NEW_APP_STYLES:
                        t = E.newStylesBackground;
                        break;
                    case h.dm.YOUR_SPACE:
                        t = E.yourSpaceBackground;
                        break;
                    case h.dm.SERVER_PROFILES:
                        t = E.serverProfilesBackground;
                        break;
                    case h.dm.SHOW_YOUR_STYLE:
                        t = E.yourStyleBackground;
                }
                return t;
            })(t),
            R = (0, d.ZP)(),
            P = (0, o.wj)(R),
            D = P ? c.Ttl.WHITE : c.Ttl.BRAND,
            y = (0, a.debounce)(() => {
                m.default.track(x.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, a.snakeCase)(t) });
            }, 800),
            Z = () => {
                null == j.current || S || ((j.current.currentTime = A.current), j.current.play());
            },
            k = () => {
                null == j.current || S || ((A.current = j.current.currentTime), j.current.pause());
            },
            L = () =>
                (0, i.jsxs)('div', {
                    className: l()({
                        [E.whatsNewTextBoxOuter]: !I,
                        [E.compactTextBox]: I
                    }),
                    children: [
                        (0, i.jsx)(c.X6q, {
                            variant: 'heading-xxl/extrabold',
                            color: 'header-primary',
                            className: l()({
                                [E.whatsNewBoxHeader]: !I,
                                [E.compactBoxHeader]: I
                            }),
                            children: n
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'text-muted',
                            className: E.whatsNewBoxDescription,
                            children: r
                        }),
                        null != p &&
                            null != b &&
                            (0, i.jsx)(c.zxk, {
                                look: c.iLD.OUTLINED,
                                color: D,
                                className: l()(E.whatsNewBoxButton, P ? E.whatsNewBoxButtonWhite : E.whatsNewBoxButtonBrand),
                                onClick: () => {
                                    y(), b();
                                },
                                children: p
                            })
                    ]
                }),
            B = (e) => {
                let { isLeft: t } = e;
                return (0, i.jsx)('div', {
                    className: l()({
                        [E.whatsNewArtContainer]: !I,
                        [E.compactBoxArtContainer]: I
                    }),
                    children: (0, i.jsx)(
                        u.Z,
                        {
                            playsInline: !0,
                            preload: T ? 'auto' : 'none',
                            muted: !0,
                            poster: C,
                            loop: !0,
                            className: l()({
                                [E.perkBoxVideo]: !I,
                                [E.leftSideArt]: t && !I,
                                [E.compactBoxVideo]: I
                            }),
                            ref: j,
                            children: (0, i.jsx)('source', {
                                src: f,
                                type: v ? _.m.MP4 : _.m.WEBM
                            })
                        },
                        f
                    )
                });
            },
            M = N % 2 == 0;
        return (0, i.jsx)('div', {
            className: l()(O, {
                [E.whatsNewBoxContainer]: !I,
                [E.compactBoxContainer]: I
            }),
            onMouseEnter: Z,
            onFocus: Z,
            onBlur: k,
            onMouseLeave: k,
            children: M
                ? (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(L, {}), (0, i.jsx)(B, { isLeft: M })]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(B, { isLeft: M }), (0, i.jsx)(L, {})]
                  })
        });
    },
    f = s.memo(function (e) {
        let { className: t, shouldLoadVideo: n, isBestOfNitro: s = !1, isReducedMotion: r } = e,
            a = Object.values((0, h.ZP)(s)),
            o = s ? Object.values((0, h.__)()) : null;
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: l()(E.boxBackdrop, t),
                children: [
                    (0, i.jsx)(c.X6q, {
                        className: E.whatsNewHeader,
                        variant: 'display-md',
                        color: 'header-primary',
                        children: s ? p.intl.string(p.t.EnzW2N) : p.intl.string(p.t.LRmNAg)
                    }),
                    a.map((e, t) =>
                        (0, i.jsx)(
                            C,
                            {
                                shouldLoadVideo: n,
                                isReducedMotion: r,
                                index: t,
                                ...e
                            },
                            e.name
                        )
                    ),
                    null != o &&
                        (0, i.jsxs)('div', {
                            className: E.compactBoxOuterContainer,
                            children: [
                                o.map((e, t) =>
                                    (0, i.jsx)(
                                        C,
                                        {
                                            shouldLoadVideo: n,
                                            isReducedMotion: r,
                                            index: t,
                                            ...e
                                        },
                                        e.name
                                    )
                                ),
                                (0, i.jsx)('div', { className: E.whatsNewSideGradient })
                            ]
                        })
                ]
            })
        });
    });
