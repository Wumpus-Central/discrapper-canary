n.d(t, { Z: () => C }), n(953529);
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
    b = n(388032),
    _ = n(661339);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let E = (e) => {
    let { name: t, title: n, description: s, descriptionCta: b, previewImage: x, videoUrl: E, shouldLoadVideo: j, index: C, isCompact: O, isReducedMotion: S, onClick: v } = e,
        T = (0, p.rO)(),
        I = r.useRef(null),
        N = r.useRef(0),
        y = (function (e) {
            let t;
            switch (e) {
                case g.N.EMOJIS:
                    t = _.emojisBackground;
                    break;
                case g.N.REFERRAL_PROGRAM:
                    t = _.referralProgramBackground;
                    break;
                case g.N.NO_LIMITS:
                    t = _.noLimitsBackground;
                    break;
                case g.N.NEW_APP_STYLES:
                    t = _.newStylesBackground;
                    break;
                case g.N.YOUR_SPACE:
                    t = _.yourSpaceBackground;
                    break;
                case g.N.SERVER_PROFILES:
                    t = _.serverProfilesBackground;
                    break;
                case g.N.SHOW_YOUR_STYLE:
                    t = _.yourStyleBackground;
                    break;
                case g.N.PERMADECOS:
                    t = _.permadecosBackground;
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
                    [_.bentoTextBoxOuter]: !O,
                    [_.compactTextBox]: O
                }),
                children: [
                    (0, i.jsx)(c.X6q, {
                        variant: 'heading-xxl/extrabold',
                        color: 'header-primary',
                        className: l()({
                            [_.bentoBoxHeader]: !O,
                            [_.compactBoxHeader]: O
                        }),
                        children: n
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: 'text-muted',
                        className: _.bentoBoxDescription,
                        children: s
                    }),
                    null != b &&
                        null != v &&
                        (0, i.jsx)(c.zxk, {
                            look: c.iLD.OUTLINED,
                            color: R,
                            className: l()(_.bentoBoxButton, P ? _.bentoBoxButtonWhite : _.bentoBoxButtonBrand),
                            onClick: () => {
                                D(), v();
                            },
                            children: b
                        })
                ]
            }),
        L = (e) => {
            let { isLeft: t } = e;
            return (0, i.jsx)('div', {
                className: l()({
                    [_.bentoArtContainer]: !O,
                    [_.compactBoxArtContainer]: O
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
                            [_.perkBoxVideo]: !O,
                            [_.leftSideArt]: t && !O,
                            [_.compactBoxVideo]: O
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
            [_.bentoBoxContainer]: !O,
            [_.compactBoxContainer]: O
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
function j(e) {
    let { className: t, boxes: n, compactBoxes: r, title: s, shouldLoadVideo: a, isReducedMotion: o } = e;
    return (0, i.jsxs)('div', {
        className: l()(_.boxBackdrop, t),
        children: [
            (0, i.jsx)(c.X6q, {
                className: _.bentoHeader,
                variant: 'display-md',
                color: 'header-primary',
                children: s
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    E,
                    x(
                        {
                            shouldLoadVideo: a,
                            isReducedMotion: o,
                            index: t
                        },
                        e
                    ),
                    e.name
                )
            ),
            null != r &&
                (0, i.jsxs)('div', {
                    className: _.compactBoxOuterContainer,
                    children: [
                        r.map((e, t) =>
                            (0, i.jsx)(
                                E,
                                x(
                                    {
                                        shouldLoadVideo: a,
                                        isReducedMotion: o,
                                        index: t
                                    },
                                    e
                                ),
                                e.name
                            )
                        ),
                        (0, i.jsx)('div', { className: _.bentoSideGradient })
                    ]
                })
        ]
    });
}
let C = r.memo(function (e) {
    let { whatsNewBoxes: t, bestOfBoxes: n, compactBestOfBoxes: r } = (0, g.Z)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(
                j,
                x(
                    {
                        boxes: Object.values(t),
                        title: b.intl.string(b.t.LRmNAg)
                    },
                    e
                )
            ),
            (0, i.jsx)(
                j,
                x(
                    {
                        boxes: Object.values(n),
                        compactBoxes: Object.values(r),
                        title: b.intl.string(b.t.EnzW2N)
                    },
                    e
                )
            )
        ]
    });
});
