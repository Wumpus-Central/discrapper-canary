var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(392711),
    o = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(70097),
    m = n(626135),
    g = n(526167),
    h = n(831964),
    p = n(981631),
    x = n(869783),
    f = n(388032),
    _ = n(909007);
let E = (e) => {
    let { name: t, title: n, description: r, descriptionCta: f, previewImage: E, videoUrl: C, shouldLoadVideo: T, index: S, isCompact: b, isReducedMotion: I, onClick: N } = e,
        v = (0, g.rO)(),
        A = s.useRef(null),
        j = s.useRef(0),
        R = (function (e) {
            let t;
            switch (e) {
                case h.dm.EMOJIS:
                    t = _.emojisBackground;
                    break;
                case h.dm.REFERRAL_PROGRAM:
                    t = _.referralProgramBackground;
                    break;
                case h.dm.NO_LIMITS:
                    t = _.noLimitsBackground;
                    break;
                case h.dm.NEW_APP_STYLES:
                    t = _.newStylesBackground;
                    break;
                case h.dm.YOUR_SPACE:
                    t = _.yourSpaceBackground;
                    break;
                case h.dm.SERVER_PROFILES:
                    t = _.serverProfilesBackground;
                    break;
                case h.dm.SHOW_YOUR_STYLE:
                    t = _.yourStyleBackground;
            }
            return t;
        })(t),
        O = (0, d.ZP)(),
        P = (0, o.wj)(O),
        y = P ? c.ButtonColors.WHITE : c.ButtonColors.BRAND,
        D = (0, l.debounce)(() => {
            m.default.track(p.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
        }, 800),
        B = () => {
            null != A.current && !I && ((A.current.currentTime = j.current), A.current.play());
        },
        Z = () => {
            null != A.current && !I && ((j.current = A.current.currentTime), A.current.pause());
        },
        L = () =>
            (0, i.jsxs)('div', {
                className: a()({
                    [_.whatsNewTextBoxOuter]: !b,
                    [_.compactTextBox]: b
                }),
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-xxl/extrabold',
                        color: 'header-primary',
                        className: a()({
                            [_.whatsNewBoxHeader]: !b,
                            [_.compactBoxHeader]: b
                        }),
                        children: n
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: 'text-muted',
                        className: _.whatsNewBoxDescription,
                        children: r
                    }),
                    null != f &&
                        null != N &&
                        (0, i.jsx)(c.Button, {
                            look: c.ButtonLooks.OUTLINED,
                            color: y,
                            className: a()(_.whatsNewBoxButton, P ? _.whatsNewBoxButtonWhite : _.whatsNewBoxButtonBrand),
                            onClick: () => {
                                D(), N();
                            },
                            children: f
                        })
                ]
            }),
        M = (e) => {
            let { isLeft: t } = e;
            return (0, i.jsx)('div', {
                className: a()({
                    [_.whatsNewArtContainer]: !b,
                    [_.compactBoxArtContainer]: b
                }),
                children: (0, i.jsx)(
                    u.Z,
                    {
                        playsInline: !0,
                        preload: T ? 'auto' : 'none',
                        muted: !0,
                        poster: E,
                        loop: !0,
                        className: a()({
                            [_.perkBoxVideo]: !b,
                            [_.leftSideArt]: t && !b,
                            [_.compactBoxVideo]: b
                        }),
                        ref: A,
                        children: (0, i.jsx)('source', {
                            src: C,
                            type: v ? x.m.MP4 : x.m.WEBM
                        })
                    },
                    C
                )
            });
        },
        k = S % 2 == 0;
    return (0, i.jsx)('div', {
        className: a()(R, {
            [_.whatsNewBoxContainer]: !b,
            [_.compactBoxContainer]: b
        }),
        onMouseEnter: B,
        onFocus: B,
        onBlur: Z,
        onMouseLeave: Z,
        children: k
            ? (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(L, {}), (0, i.jsx)(M, { isLeft: k })]
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(M, { isLeft: k }), (0, i.jsx)(L, {})]
              })
    });
};
t.Z = s.memo(function (e) {
    let { className: t, shouldLoadVideo: n, isBestOfNitro: s = !1, isReducedMotion: r } = e,
        l = Object.values((0, h.ZP)(s)),
        o = s ? Object.values((0, h.__)()) : null;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: a()(_.boxBackdrop, t),
            children: [
                (0, i.jsx)(c.Heading, {
                    className: _.whatsNewHeader,
                    variant: 'display-md',
                    color: 'header-primary',
                    children: s ? f.intl.string(f.t.EnzW2N) : f.intl.string(f.t.LRmNAg)
                }),
                l.map((e, t) =>
                    (0, i.jsx)(
                        E,
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
                        className: _.compactBoxOuterContainer,
                        children: [
                            o.map((e, t) =>
                                (0, i.jsx)(
                                    E,
                                    {
                                        shouldLoadVideo: n,
                                        isReducedMotion: r,
                                        index: t,
                                        ...e
                                    },
                                    e.name
                                )
                            ),
                            (0, i.jsx)('div', { className: _.whatsNewSideGradient })
                        ]
                    })
            ]
        })
    });
});
