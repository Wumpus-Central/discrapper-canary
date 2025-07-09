(n.d(t, { Z: () => _ }), n(953529));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n(780384),
    c = n(755721),
    d = n(481060),
    u = n(410030),
    m = n(70097),
    p = n(626135),
    g = n(526167),
    h = n(572995),
    f = n(981631),
    b = n(869783),
    x = n(888723);
let _ = (e) => {
    let { name: t, title: n, description: s, descriptionCta: _, previewImage: j, videoUrl: E, shouldLoadVideo: O, index: C, customVideoStyle: v, isReducedMotion: S, onClick: T, badgeText: N, size: I } = e,
        y = (0, g.rO)(),
        A = r.useRef(null),
        P = r.useRef(0),
        R = (function (e) {
            let t;
            switch (e) {
                case h.NA.EMOJIS:
                    t = x.emojisBackground;
                    break;
                case h.NA.REFERRAL_PROGRAM:
                    t = x.referralProgramBackground;
                    break;
                case h.NA.NO_LIMITS:
                    t = x.noLimitsBackground;
                    break;
                case h.NA.NEW_APP_STYLES:
                    t = x.newStylesBackground;
                    break;
                case h.NA.YOUR_SPACE:
                    t = x.yourSpaceBackground;
                    break;
                case h.NA.SERVER_PROFILES:
                    t = x.serverProfilesBackground;
                    break;
                case h.NA.SHOW_YOUR_STYLE:
                    t = x.yourStyleBackground;
                    break;
                case h.NA.PERMADECOS:
                    t = x.permadecosBackground;
                    break;
                case h.NA.VOICE_FILTERS:
                    t = x.voiceFiltersBackground;
            }
            return t;
        })(t),
        D = (0, u.ZP)(),
        Z = (0, o.wj)(D),
        w = Z ? c.Tt.WHITE : c.Tt.BRAND,
        k = (0, l.debounce)(() => {
            p.default.track(f.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
        }, 800),
        L = () => {
            null == A.current || S || ((A.current.currentTime = P.current), A.current.play());
        },
        B = () => {
            null == A.current || S || ((P.current = A.current.currentTime), A.current.pause());
        },
        M = () =>
            (0, i.jsxs)('div', {
                className: a()({
                    [x.largeTextBox]: I === h.y$.LARGE,
                    [x.mediumTextBox]: I === h.y$.MEDIUM,
                    [x.smallTextBox]: I === h.y$.SMALL
                }),
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            null != N &&
                                (0, i.jsx)('div', {
                                    className: x.badge,
                                    children: (0, i.jsx)(d.X6q, {
                                        variant: 'eyebrow',
                                        color: 'always-white',
                                        children: N
                                    })
                                }),
                            (0, i.jsx)(d.X6q, {
                                variant: I === h.y$.SMALL ? 'heading-xl/extrabold' : 'heading-xxl/extrabold',
                                color: 'header-primary',
                                className: a()(x.header, {
                                    [x.largeBoxHeader]: I === h.y$.LARGE,
                                    [x.mediumBoxHeader]: I === h.y$.MEDIUM,
                                    [x.smallBoxHeader]: I === h.y$.SMALL
                                }),
                                children: n
                            })
                        ]
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-md/medium',
                        color: 'text-muted',
                        className: x.description,
                        children: s
                    }),
                    null != _ &&
                        null != T &&
                        (0, i.jsx)(c.zx, {
                            look: c.iL.OUTLINED,
                            color: w,
                            className: a()(x.bentoBoxButton, Z ? x.bentoBoxButtonWhite : x.bentoBoxButtonBrand),
                            onClick: () => {
                                (k(), T());
                            },
                            children: _
                        })
                ]
            }),
        U = () =>
            (0, i.jsx)('div', {
                className: a()({
                    [x.largeBoxArtContainer]: I === h.y$.LARGE,
                    [x.mediumBoxArtContainer]: I === h.y$.MEDIUM,
                    [x.smallBoxArtContainer]: I === h.y$.SMALL
                }),
                children: (0, i.jsx)(
                    m.Z,
                    {
                        playsInline: !0,
                        preload: O ? 'auto' : 'none',
                        muted: !0,
                        poster: j,
                        loop: !0,
                        className: a()({
                            [x.largeBoxVideo]: I === h.y$.LARGE,
                            [x.mediumBoxVideo]: I === h.y$.MEDIUM,
                            [x.smallBoxVideo]: I === h.y$.SMALL,
                            [v]: null != v
                        }),
                        ref: A,
                        children: (0, i.jsx)('source', {
                            src: E,
                            type: y ? b.m.MP4 : b.m.WEBM
                        })
                    },
                    E
                )
            });
    return (0, i.jsx)('div', {
        className: a()(R, {
            [x.largeBoxContainer]: I === h.y$.LARGE,
            [x.mediumBoxContainer]: I === h.y$.MEDIUM,
            [x.smallBoxContainer]: I === h.y$.SMALL
        }),
        onMouseEnter: L,
        onFocus: L,
        onBlur: B,
        onMouseLeave: B,
        children:
            C % 2 != 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(M, {}), (0, i.jsx)(U, {})]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(U, {}), (0, i.jsx)(M, {})]
                  })
    });
};
