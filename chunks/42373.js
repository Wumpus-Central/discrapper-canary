(n.d(t, { Z: () => x }), n(953529));
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
    g = n(572995),
    h = n(981631),
    f = n(869783),
    b = n(888723);
let x = (e) => {
    let { name: t, title: n, description: s, descriptionCta: x, previewImage: _, videoUrl: E, shouldLoadVideo: j, index: O, customVideoStyle: C, isReducedMotion: S, onClick: v, badgeText: T, size: N } = e,
        I = (0, p.rO)(),
        y = r.useRef(null),
        A = r.useRef(0),
        P = (function (e) {
            let t;
            switch (e) {
                case g.NA.EMOJIS:
                    t = b.emojisBackground;
                    break;
                case g.NA.REFERRAL_PROGRAM:
                    t = b.referralProgramBackground;
                    break;
                case g.NA.NO_LIMITS:
                    t = b.noLimitsBackground;
                    break;
                case g.NA.NEW_APP_STYLES:
                    t = b.newStylesBackground;
                    break;
                case g.NA.YOUR_SPACE:
                    t = b.yourSpaceBackground;
                    break;
                case g.NA.SERVER_PROFILES:
                    t = b.serverProfilesBackground;
                    break;
                case g.NA.SHOW_YOUR_STYLE:
                    t = b.yourStyleBackground;
                    break;
                case g.NA.PERMADECOS:
                    t = b.permadecosBackground;
                    break;
                case g.NA.VOICE_FILTERS:
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
                    [b.largeTextBox]: N === g.y$.LARGE,
                    [b.mediumTextBox]: N === g.y$.MEDIUM,
                    [b.smallTextBox]: N === g.y$.SMALL
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
                                variant: N === g.y$.SMALL ? 'heading-xl/extrabold' : 'heading-xxl/extrabold',
                                color: 'header-primary',
                                className: l()(b.header, {
                                    [b.largeBoxHeader]: N === g.y$.LARGE,
                                    [b.mediumBoxHeader]: N === g.y$.MEDIUM,
                                    [b.smallBoxHeader]: N === g.y$.SMALL
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
                    null != x &&
                        null != v &&
                        (0, i.jsx)(c.zxk, {
                            look: c.iLD.OUTLINED,
                            color: Z,
                            className: l()(b.bentoBoxButton, D ? b.bentoBoxButtonWhite : b.bentoBoxButtonBrand),
                            onClick: () => {
                                (w(), v());
                            },
                            children: x
                        })
                ]
            }),
        M = () =>
            (0, i.jsx)('div', {
                className: l()({
                    [b.largeBoxArtContainer]: N === g.y$.LARGE,
                    [b.mediumBoxArtContainer]: N === g.y$.MEDIUM,
                    [b.smallBoxArtContainer]: N === g.y$.SMALL
                }),
                children: (0, i.jsx)(
                    u.Z,
                    {
                        playsInline: !0,
                        preload: j ? 'auto' : 'none',
                        muted: !0,
                        poster: _,
                        loop: !0,
                        className: l()({
                            [b.largeBoxVideo]: N === g.y$.LARGE,
                            [b.mediumBoxVideo]: N === g.y$.MEDIUM,
                            [b.smallBoxVideo]: N === g.y$.SMALL,
                            [C]: null != C
                        }),
                        ref: y,
                        children: (0, i.jsx)('source', {
                            src: E,
                            type: I ? f.m.MP4 : f.m.WEBM
                        })
                    },
                    E
                )
            });
    return (0, i.jsx)('div', {
        className: l()(P, {
            [b.largeBoxContainer]: N === g.y$.LARGE,
            [b.mediumBoxContainer]: N === g.y$.MEDIUM,
            [b.smallBoxContainer]: N === g.y$.SMALL
        }),
        onMouseEnter: k,
        onFocus: k,
        onBlur: L,
        onMouseLeave: L,
        children:
            O % 2 != 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(B, {}), (0, i.jsx)(M, {})]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(M, {}), (0, i.jsx)(B, {})]
                  })
    });
};
