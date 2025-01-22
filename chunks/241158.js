var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
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
    E = n(909007);
let _ = (e) => {
    let { name: t, title: n, description: s, descriptionCta: f, previewImage: _, videoUrl: C, shouldLoadVideo: T, index: S, isCompact: b, isReducedMotion: I, onClick: N } = e,
        v = (0, g.rO)(),
        A = r.useRef(null),
        j = r.useRef(0),
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
        D = P ? c.ButtonColors.WHITE : c.ButtonColors.BRAND,
        y = (0, l.debounce)(() => {
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
                    [E.whatsNewTextBoxOuter]: !b,
                    [E.compactTextBox]: b
                }),
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-xxl/extrabold',
                        color: 'header-primary',
                        className: a()({
                            [E.whatsNewBoxHeader]: !b,
                            [E.compactBoxHeader]: b
                        }),
                        children: n
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: 'text-muted',
                        className: E.whatsNewBoxDescription,
                        children: s
                    }),
                    null != f &&
                        null != N &&
                        (0, i.jsx)(c.Button, {
                            look: c.ButtonLooks.OUTLINED,
                            color: D,
                            className: a()(E.whatsNewBoxButton, P ? E.whatsNewBoxButtonWhite : E.whatsNewBoxButtonBrand),
                            onClick: () => {
                                y(), N();
                            },
                            children: f
                        })
                ]
            }),
        M = (e) => {
            let { isLeft: t } = e;
            return (0, i.jsx)('div', {
                className: a()({
                    [E.whatsNewArtContainer]: !b,
                    [E.compactBoxArtContainer]: b
                }),
                children: (0, i.jsx)(
                    u.Z,
                    {
                        playsInline: !0,
                        preload: T ? 'auto' : 'none',
                        muted: !0,
                        poster: _,
                        loop: !0,
                        className: a()({
                            [E.perkBoxVideo]: !b,
                            [E.leftSideArt]: t && !b,
                            [E.compactBoxVideo]: b
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
        className: a()(O, {
            [E.whatsNewBoxContainer]: !b,
            [E.compactBoxContainer]: b
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
t.Z = r.memo(function (e) {
    let { className: t, shouldLoadVideo: n, isBestOfNitro: r = !1, isReducedMotion: s } = e,
        l = Object.values((0, h.ZP)(r)),
        o = r ? Object.values((0, h.__)()) : null;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: a()(E.boxBackdrop, t),
            children: [
                (0, i.jsx)(c.Heading, {
                    className: E.whatsNewHeader,
                    variant: 'display-md',
                    color: 'header-primary',
                    children: r ? f.intl.string(f.t.EnzW2N) : f.intl.string(f.t.LRmNAg)
                }),
                l.map((e, t) =>
                    (0, i.jsx)(
                        _,
                        {
                            shouldLoadVideo: n,
                            isReducedMotion: s,
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
                                    _,
                                    {
                                        shouldLoadVideo: n,
                                        isReducedMotion: s,
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
