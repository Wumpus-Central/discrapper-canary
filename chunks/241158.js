var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(392711),
    o = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(70097),
    g = n(626135),
    m = n(526167),
    f = n(831964),
    p = n(981631),
    _ = n(869783),
    h = n(388032),
    x = n(909007);
let E = (e) => {
    let { name: t, title: n, description: a, descriptionCta: h, previewImage: E, videoUrl: b, shouldLoadVideo: C, index: v, isCompact: T, isReducedMotion: N, onClick: I } = e,
        S = (0, m.rO)(),
        R = r.useRef(null),
        j = r.useRef(0),
        A = (function (e) {
            let t;
            switch (e) {
                case f.dm.EMOJIS:
                    t = x.emojisBackground;
                    break;
                case f.dm.REFERRAL_PROGRAM:
                    t = x.referralProgramBackground;
                    break;
                case f.dm.NO_LIMITS:
                    t = x.noLimitsBackground;
                    break;
                case f.dm.NEW_APP_STYLES:
                    t = x.newStylesBackground;
                    break;
                case f.dm.YOUR_SPACE:
                    t = x.yourSpaceBackground;
                    break;
                case f.dm.SERVER_PROFILES:
                    t = x.serverProfilesBackground;
                    break;
                case f.dm.SHOW_YOUR_STYLE:
                    t = x.yourStyleBackground;
            }
            return t;
        })(t),
        P = (0, d.ZP)(),
        O = (0, o.wj)(P),
        Z = O ? c.ButtonColors.WHITE : c.ButtonColors.BRAND,
        M = (0, l.debounce)(() => {
            g.default.track(p.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
        }, 800),
        B = () => {
            null != R.current && !N && ((R.current.currentTime = j.current), R.current.play());
        },
        y = () => {
            null != R.current && !N && ((j.current = R.current.currentTime), R.current.pause());
        },
        w = () =>
            (0, i.jsxs)('div', {
                className: s()({
                    [x.whatsNewTextBoxOuter]: !T,
                    [x.compactTextBox]: T
                }),
                children: [
                    (0, i.jsx)(c.Heading, {
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
                        (0, i.jsx)(c.Button, {
                            look: c.ButtonLooks.OUTLINED,
                            color: Z,
                            className: s()(x.whatsNewBoxButton, O ? x.whatsNewBoxButtonWhite : x.whatsNewBoxButtonBrand),
                            onClick: () => {
                                M(), I();
                            },
                            children: h
                        })
                ]
            }),
        k = (e) => {
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
                        preload: C ? 'auto' : 'none',
                        muted: !0,
                        poster: E,
                        loop: !0,
                        className: s()({
                            [x.perkBoxVideo]: !T,
                            [x.leftSideArt]: t && !T,
                            [x.compactBoxVideo]: T
                        }),
                        ref: R,
                        children: (0, i.jsx)('source', {
                            src: b,
                            type: S ? _.m.MP4 : _.m.WEBM
                        })
                    },
                    b
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
                  children: [(0, i.jsx)(w, {}), (0, i.jsx)(k, { isLeft: L })]
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(k, { isLeft: L }), (0, i.jsx)(w, {})]
              })
    });
};
t.Z = r.memo(function (e) {
    let { className: t, shouldLoadVideo: n, isBestOfNitro: r = !1, isReducedMotion: a } = e,
        l = Object.values((0, f.ZP)(r)),
        o = r ? Object.values((0, f.__)()) : null;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: s()(x.boxBackdrop, t),
            children: [
                (0, i.jsx)(c.Heading, {
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
