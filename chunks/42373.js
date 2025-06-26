n.d(t, { Z: () => _ }), n(953529);
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
    g = n(526167),
    p = n(572995),
    h = n(981631),
    f = n(869783),
    b = n(888723);
let _ = (e) => {
    let { name: t, title: n, description: s, descriptionCta: _, previewImage: x, videoUrl: E, shouldLoadVideo: j, index: C, customVideoStyle: O, isReducedMotion: S, onClick: v, badgeText: T, size: I } = e,
        N = (0, g.rO)(),
        y = r.useRef(null),
        A = r.useRef(0),
        P = (function (e) {
            let t;
            switch (e) {
                case p.NA.EMOJIS:
                    t = b.emojisBackground;
                    break;
                case p.NA.REFERRAL_PROGRAM:
                    t = b.referralProgramBackground;
                    break;
                case p.NA.NO_LIMITS:
                    t = b.noLimitsBackground;
                    break;
                case p.NA.NEW_APP_STYLES:
                    t = b.newStylesBackground;
                    break;
                case p.NA.YOUR_SPACE:
                    t = b.yourSpaceBackground;
                    break;
                case p.NA.SERVER_PROFILES:
                    t = b.serverProfilesBackground;
                    break;
                case p.NA.SHOW_YOUR_STYLE:
                    t = b.yourStyleBackground;
                    break;
                case p.NA.PERMADECOS:
                    t = b.permadecosBackground;
                    break;
                case p.NA.VOICE_FILTERS:
                    t = b.voiceFiltersBackground;
            }
            return t;
        })(t),
        R = (0, d.ZP)(),
        D = (0, o.wj)(R),
        Z = D ? c.Ttl.WHITE : c.Ttl.BRAND,
        w = (0, a.debounce)(() => {
            m.default.track(h.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, a.snakeCase)(t) });
        }, 800),
        k = () => {
            null == y.current || S || ((y.current.currentTime = A.current), y.current.play());
        },
        L = () => {
            null == y.current || S || ((A.current = y.current.currentTime), y.current.pause());
        },
        B = () =>
            (0, i.jsxs)('div', {
                className: l()({
                    [b.largeTextBox]: I === p.y$.LARGE,
                    [b.mediumTextBox]: I === p.y$.MEDIUM,
                    [b.smallTextBox]: I === p.y$.SMALL
                }),
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            null != T &&
                                (0, i.jsx)('div', {
                                    className: b.badge,
                                    children: (0, i.jsx)(c.X6q, {
                                        variant: 'eyebrow',
                                        color: 'always-white',
                                        children: T
                                    })
                                }),
                            (0, i.jsx)(c.X6q, {
                                variant: I === p.y$.SMALL ? 'heading-xl/extrabold' : 'heading-xxl/extrabold',
                                color: 'header-primary',
                                className: l()(b.header, {
                                    [b.largeBoxHeader]: I === p.y$.LARGE,
                                    [b.mediumBoxHeader]: I === p.y$.MEDIUM,
                                    [b.smallBoxHeader]: I === p.y$.SMALL
                                }),
                                children: n
                            })
                        ]
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: 'text-muted',
                        className: b.description,
                        children: s
                    }),
                    null != _ &&
                        null != v &&
                        (0, i.jsx)(c.zxk, {
                            look: c.iLD.OUTLINED,
                            color: Z,
                            className: l()(b.bentoBoxButton, D ? b.bentoBoxButtonWhite : b.bentoBoxButtonBrand),
                            onClick: () => {
                                w(), v();
                            },
                            children: _
                        })
                ]
            }),
        M = () =>
            (0, i.jsx)('div', {
                className: l()({
                    [b.largeBoxArtContainer]: I === p.y$.LARGE,
                    [b.mediumBoxArtContainer]: I === p.y$.MEDIUM,
                    [b.smallBoxArtContainer]: I === p.y$.SMALL
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
                            [b.largeBoxVideo]: I === p.y$.LARGE,
                            [b.mediumBoxVideo]: I === p.y$.MEDIUM,
                            [b.smallBoxVideo]: I === p.y$.SMALL,
                            [O]: null != O
                        }),
                        ref: y,
                        children: (0, i.jsx)('source', {
                            src: E,
                            type: N ? f.m.MP4 : f.m.WEBM
                        })
                    },
                    E
                )
            });
    return (0, i.jsx)('div', {
        className: l()(P, {
            [b.largeBoxContainer]: I === p.y$.LARGE,
            [b.mediumBoxContainer]: I === p.y$.MEDIUM,
            [b.smallBoxContainer]: I === p.y$.SMALL
        }),
        onMouseEnter: k,
        onFocus: k,
        onBlur: L,
        onMouseLeave: L,
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
