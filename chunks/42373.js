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
    let { name: t, title: n, description: s, descriptionCta: _, previewImage: x, videoUrl: E, shouldLoadVideo: C, index: j, size: O, isReducedMotion: S, onClick: v } = e,
        T = (0, g.rO)(),
        I = r.useRef(null),
        N = r.useRef(0),
        y = (function (e) {
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
        A = (0, d.ZP)(),
        P = (0, o.wj)(A),
        R = P ? c.Ttl.WHITE : c.Ttl.BRAND,
        D = (0, a.debounce)(() => {
            m.default.track(h.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, a.snakeCase)(t) });
        }, 800),
        Z = () => {
            null == I.current || S || ((I.current.currentTime = N.current), I.current.play());
        },
        w = () => {
            null == I.current || S || ((N.current = I.current.currentTime), I.current.pause());
        },
        k = () =>
            (0, i.jsxs)('div', {
                className: l()({
                    [b.largeTextBox]: O === p.y$.LARGE,
                    [b.mediumTextBox]: O === p.y$.MEDIUM,
                    [b.smallTextBox]: O === p.y$.SMALL
                }),
                children: [
                    (0, i.jsx)(c.X6q, {
                        variant: 'heading-xxl/extrabold',
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
                        className: b.bentoBoxDescription,
                        children: s
                    }),
                    null != _ &&
                        null != v &&
                        (0, i.jsx)(c.zxk, {
                            look: c.iLD.OUTLINED,
                            color: R,
                            className: l()(b.bentoBoxButton, P ? b.bentoBoxButtonWhite : b.bentoBoxButtonBrand, { [b.bentoBoxButtonPadding]: O !== p.y$.LARGE }),
                            onClick: () => {
                                D(), v();
                            },
                            children: _
                        })
                ]
            }),
        L = (e) => {
            let { isLeft: t } = e;
            return (0, i.jsx)('div', {
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
                            [b.largeBoxVideoLeft]: t && O === p.y$.LARGE,
                            [b.mediumBoxVideo]: O === p.y$.MEDIUM,
                            [b.smallBoxVideo]: O === p.y$.SMALL
                        }),
                        ref: I,
                        children: (0, i.jsx)('source', {
                            src: E,
                            type: T ? f.m.MP4 : f.m.WEBM
                        })
                    },
                    E
                )
            });
        },
        B = j % 2 != 0;
    return (0, i.jsx)('div', {
        className: l()(y, {
            [b.largeBoxContainer]: O === p.y$.LARGE,
            [b.mediumBoxContainer]: O === p.y$.MEDIUM,
            [b.smallBoxContainer]: O === p.y$.SMALL
        }),
        onMouseEnter: Z,
        onFocus: Z,
        onBlur: w,
        onMouseLeave: w,
        children: B
            ? (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(k, {}), (0, i.jsx)(L, { isLeft: B })]
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(L, { isLeft: B }), (0, i.jsx)(k, {})]
              })
    });
};
