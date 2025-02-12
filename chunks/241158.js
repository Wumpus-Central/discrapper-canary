n.d(t, { Z: () => C });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(392711),
    o = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(70097),
    m = n(626135),
    g = n(526167),
    _ = n(831964),
    p = n(981631),
    f = n(869783),
    h = n(388032),
    x = n(324119);
let E = (e) => {
        let { name: t, title: n, description: a, descriptionCta: h, previewImage: E, videoUrl: C, shouldLoadVideo: b, index: v, isCompact: T, isReducedMotion: N, onClick: I } = e,
            R = (0, g.rO)(),
            j = r.useRef(null),
            S = r.useRef(0),
            A = (function (e) {
                let t;
                switch (e) {
                    case _.dm.EMOJIS:
                        t = x.emojisBackground;
                        break;
                    case _.dm.REFERRAL_PROGRAM:
                        t = x.referralProgramBackground;
                        break;
                    case _.dm.NO_LIMITS:
                        t = x.noLimitsBackground;
                        break;
                    case _.dm.NEW_APP_STYLES:
                        t = x.newStylesBackground;
                        break;
                    case _.dm.YOUR_SPACE:
                        t = x.yourSpaceBackground;
                        break;
                    case _.dm.SERVER_PROFILES:
                        t = x.serverProfilesBackground;
                        break;
                    case _.dm.SHOW_YOUR_STYLE:
                        t = x.yourStyleBackground;
                }
                return t;
            })(t),
            P = (0, d.ZP)(),
            Z = (0, o.wj)(P),
            w = Z ? c.Ttl.WHITE : c.Ttl.BRAND,
            M = (0, l.debounce)(() => {
                m.default.track(p.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
            }, 800),
            B = () => {
                null == j.current || N || ((j.current.currentTime = S.current), j.current.play());
            },
            y = () => {
                null == j.current || N || ((S.current = j.current.currentTime), j.current.pause());
            },
            k = () =>
                (0, i.jsxs)('div', {
                    className: s()({
                        [x.whatsNewTextBoxOuter]: !T,
                        [x.compactTextBox]: T
                    }),
                    children: [
                        (0, i.jsx)(c.X6q, {
                            variant: 'heading-xxl/extrabold',
                            color: 'header-primary',
                            className: s()({
                                [x.whatsNewBoxHeader]: !T,
                                [x.compactBoxHeader]: T
                            }),
                            children: n
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'text-muted',
                            className: x.whatsNewBoxDescription,
                            children: a
                        }),
                        null != h &&
                            null != I &&
                            (0, i.jsx)(c.zxk, {
                                look: c.iLD.OUTLINED,
                                color: w,
                                className: s()(x.whatsNewBoxButton, Z ? x.whatsNewBoxButtonWhite : x.whatsNewBoxButtonBrand),
                                onClick: () => {
                                    M(), I();
                                },
                                children: h
                            })
                    ]
                }),
            O = (e) => {
                let { isLeft: t } = e;
                return (0, i.jsx)('div', {
                    className: s()({
                        [x.whatsNewArtContainer]: !T,
                        [x.compactBoxArtContainer]: T
                    }),
                    children: (0, i.jsx)(
                        u.Z,
                        {
                            playsInline: !0,
                            preload: b ? 'auto' : 'none',
                            muted: !0,
                            poster: E,
                            loop: !0,
                            className: s()({
                                [x.perkBoxVideo]: !T,
                                [x.leftSideArt]: t && !T,
                                [x.compactBoxVideo]: T
                            }),
                            ref: j,
                            children: (0, i.jsx)('source', {
                                src: C,
                                type: R ? f.m.MP4 : f.m.WEBM
                            })
                        },
                        C
                    )
                });
            },
            L = v % 2 == 0;
        return (0, i.jsx)('div', {
            className: s()(A, {
                [x.whatsNewBoxContainer]: !T,
                [x.compactBoxContainer]: T
            }),
            onMouseEnter: B,
            onFocus: B,
            onBlur: y,
            onMouseLeave: y,
            children: L
                ? (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(k, {}), (0, i.jsx)(O, { isLeft: L })]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(O, { isLeft: L }), (0, i.jsx)(k, {})]
                  })
        });
    },
    C = r.memo(function (e) {
        let { className: t, shouldLoadVideo: n, isBestOfNitro: r = !1, isReducedMotion: a } = e,
            l = Object.values((0, _.ZP)(r)),
            o = r ? Object.values((0, _.__)()) : null;
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: s()(x.boxBackdrop, t),
                children: [
                    (0, i.jsx)(c.X6q, {
                        className: x.whatsNewHeader,
                        variant: 'display-md',
                        color: 'header-primary',
                        children: r ? h.intl.string(h.t.EnzW2N) : h.intl.string(h.t.LRmNAg)
                    }),
                    l.map((e, t) =>
                        (0, i.jsx)(
                            E,
                            {
                                shouldLoadVideo: n,
                                isReducedMotion: a,
                                index: t,
                                ...e
                            },
                            e.name
                        )
                    ),
                    null != o &&
                        (0, i.jsxs)('div', {
                            className: x.compactBoxOuterContainer,
                            children: [
                                o.map((e, t) =>
                                    (0, i.jsx)(
                                        E,
                                        {
                                            shouldLoadVideo: n,
                                            isReducedMotion: a,
                                            index: t,
                                            ...e
                                        },
                                        e.name
                                    )
                                ),
                                (0, i.jsx)('div', { className: x.whatsNewSideGradient })
                            ]
                        })
                ]
            })
        });
    });
