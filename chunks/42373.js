n.d(t, { Z: () => _ }), n(953529);
var i = n(200651),
    r = n(192379),
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
let _ = (e) => {
    let { name: t, title: n, description: s, descriptionCta: _, previewImage: x, videoUrl: E, shouldLoadVideo: j, index: C, isCompact: O, isReducedMotion: S, onClick: v } = e,
        T = (0, p.rO)(),
        I = r.useRef(null),
        N = r.useRef(0),
        y = (function (e) {
            let t;
            switch (e) {
                case g.N.EMOJIS:
                    t = b.emojisBackground;
                    break;
                case g.N.REFERRAL_PROGRAM:
                    t = b.referralProgramBackground;
                    break;
                case g.N.NO_LIMITS:
                    t = b.noLimitsBackground;
                    break;
                case g.N.NEW_APP_STYLES:
                    t = b.newStylesBackground;
                    break;
                case g.N.YOUR_SPACE:
                    t = b.yourSpaceBackground;
                    break;
                case g.N.SERVER_PROFILES:
                    t = b.serverProfilesBackground;
                    break;
                case g.N.SHOW_YOUR_STYLE:
                    t = b.yourStyleBackground;
                    break;
                case g.N.PERMADECOS:
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
                    [b.bentoTextBoxOuter]: !O,
                    [b.compactTextBox]: O
                }),
                children: [
                    (0, i.jsx)(c.X6q, {
                        variant: 'heading-xxl/extrabold',
                        color: 'header-primary',
                        className: l()({
                            [b.bentoBoxHeader]: !O,
                            [b.compactBoxHeader]: O
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
                            className: l()(b.bentoBoxButton, P ? b.bentoBoxButtonWhite : b.bentoBoxButtonBrand),
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
                    [b.bentoArtContainer]: !O,
                    [b.compactBoxArtContainer]: O
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
                            [b.perkBoxVideo]: !O,
                            [b.leftSideArt]: t && !O,
                            [b.compactBoxVideo]: O
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
        B = C % 2 != 0;
    return (0, i.jsx)('div', {
        className: l()(y, {
            [b.bentoBoxContainer]: !O,
            [b.compactBoxContainer]: O
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
