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
    b = n(113929);
let _ = (e) => {
    let { name: t, title: n, description: s, descriptionCta: _, previewImage: x, videoUrl: E, shouldLoadVideo: C, index: j, size: O, customVideoStyle: S, isReducedMotion: v, onClick: T } = e,
        I = (0, g.rO)(),
        N = r.useRef(null),
        y = r.useRef(0),
        A = (function (e) {
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
            }
            return t;
        })(t),
        P = (0, d.ZP)(),
        R = (0, o.wj)(P),
        D = R ? c.Ttl.WHITE : c.Ttl.BRAND,
        Z = (0, a.debounce)(() => {
            m.default.track(h.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, a.snakeCase)(t) });
        }, 800),
        w = () => {
            null == N.current || v || ((N.current.currentTime = y.current), N.current.play());
        },
        k = () => {
            null == N.current || v || ((y.current = N.current.currentTime), N.current.pause());
        },
        L = () =>
            (0, i.jsxs)('div', {
                className: l()({
                    [b.largeTextBox]: O === p.y$.LARGE,
                    [b.mediumTextBox]: O === p.y$.MEDIUM,
                    [b.smallTextBox]: O === p.y$.SMALL
                }),
                children: [
                    (0, i.jsx)(c.X6q, {
                        variant: O === p.y$.SMALL ? 'heading-xl/extrabold' : 'heading-xxl/extrabold',
                        color: 'header-primary',
                        className: l()({
                            [b.largeBoxHeader]: O === p.y$.LARGE,
                            [b.mediumBoxHeader]: O === p.y$.MEDIUM,
                            [b.smallBoxHeader]: O === p.y$.SMALL
                        }),
                        children: n
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: 'text-muted',
                        children: s
                    }),
                    null != _ &&
                        null != T &&
                        (0, i.jsx)(c.zxk, {
                            look: c.iLD.OUTLINED,
                            color: D,
                            className: l()(b.bentoBoxButton, R ? b.bentoBoxButtonWhite : b.bentoBoxButtonBrand),
                            onClick: () => {
                                Z(), T();
                            },
                            children: _
                        })
                ]
            }),
        B = () =>
            (0, i.jsx)('div', {
                className: l()({
                    [b.largeBoxArtContainer]: O === p.y$.LARGE,
                    [b.mediumBoxArtContainer]: O === p.y$.MEDIUM,
                    [b.smallBoxArtContainer]: O === p.y$.SMALL
                }),
                children: (0, i.jsx)(
                    u.Z,
                    {
                        playsInline: !0,
                        preload: C ? 'auto' : 'none',
                        muted: !0,
                        poster: x,
                        loop: !0,
                        className: l()({
                            [b.largeBoxVideo]: O === p.y$.LARGE,
                            [b.mediumBoxVideo]: O === p.y$.MEDIUM,
                            [b.smallBoxVideo]: O === p.y$.SMALL,
                            [S]: null != S
                        }),
                        ref: N,
                        children: (0, i.jsx)('source', {
                            src: E,
                            type: I ? f.m.MP4 : f.m.WEBM
                        })
                    },
                    E
                )
            });
    return (0, i.jsx)('div', {
        className: l()(A, {
            [b.largeBoxContainer]: O === p.y$.LARGE,
            [b.mediumBoxContainer]: O === p.y$.MEDIUM,
            [b.smallBoxContainer]: O === p.y$.SMALL
        }),
        onMouseEnter: w,
        onFocus: w,
        onBlur: k,
        onMouseLeave: k,
        children:
            j % 2 != 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(L, {}), (0, i.jsx)(B, {})]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(B, {}), (0, i.jsx)(L, {})]
                  })
    });
};
