n.d(t, { Z: () => j });
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(115434),
    o = n(264181),
    c = n(399606),
    d = n(481060),
    u = n(100527),
    h = n(906732),
    m = n(626135),
    g = n(335131),
    x = n(874703),
    _ = n(410154),
    p = n(302800),
    E = n(981631),
    C = n(474936),
    f = n(388032),
    N = n(255),
    I = n(786792),
    T = n(161594);
let S = (e) => {
        var t, n, s, l, a;
        let { displayOptions: o, marketingVariant: c } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: N.artContainer,
                    'aria-hidden': !0,
                    role: 'presentation',
                    children: (0, i.jsx)('img', {
                        src: null !== (s = null == o ? void 0 : o.artSrc) && void 0 !== s ? s : T,
                        className: r()(N.art, { [N.tideArt]: null != c && c === _.C5.TIDE }),
                        alt: ''
                    })
                }),
                (0, i.jsxs)('div', {
                    className: N.mainColumn,
                    children: [
                        (0, i.jsx)(d.X6q, {
                            variant: 'heading-lg/extrabold',
                            color: (null == o ? void 0 : o.revertTextColor) ? 'redesign-button-overlay-text' : 'currentColor',
                            className: N.title,
                            children: null !== (l = null == o ? void 0 : null === (t = o.title) || void 0 === t ? void 0 : t.call(o)) && void 0 !== l ? l : f.intl.string(f.t['4Emkur'])
                        }),
                        (0, i.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: (null == o ? void 0 : o.revertTextColor) ? 'redesign-button-overlay-text' : 'currentColor',
                            children: null !== (a = null == o ? void 0 : null === (n = o.description) || void 0 === n ? void 0 : n.call(o)) && void 0 !== a ? a : f.intl.string(f.t.gn7SZW)
                        })
                    ]
                })
            ]
        });
    },
    j = () => {
        var e;
        let t;
        let { analyticsLocations: n } = (0, h.ZP)(u.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
            l = s.useRef(null),
            T = (0, _.ZP)('CollectiblesUpsellBanner'),
            j = (0, c.e7)([x.Z], () => x.Z.getMarketingBySurface(a.K.EDIT_PROFILE_SETTINGS));
        return (
            (t =
                (null == j ? void 0 : j.type) === o.Z.BANNER
                    ? {
                          artSrc: j.popoutAsset,
                          backgroundSrc: j.asset,
                          title: () => j.title,
                          description: () => j.body,
                          revertTextColor: j.revertTextColor
                      }
                    : p.GX[T]),
            s.useEffect(() => {
                m.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: C.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                    location_stack: n,
                    version: null == j ? void 0 : j.version
                });
            }, [n, null == j ? void 0 : j.version]),
            (0, i.jsxs)('div', {
                ref: l,
                className: r()(N.container, { [N.robertContainer]: T === _.C5.ROBERT }),
                style: { backgroundImage: 'url('.concat(null !== (e = null == t ? void 0 : t.backgroundSrc) && void 0 !== e ? e : I, ')') },
                children: [
                    (0, i.jsx)(S, {
                        displayOptions: t,
                        marketingVariant: T
                    }),
                    (0, i.jsx)(d.zxk, {
                        onClick: () => {
                            (0, g.mK)({
                                analyticsLocations: n,
                                analyticsSource: u.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
                            });
                        },
                        className: N.ctaButton,
                        color: d.zxk.Colors.BRAND_INVERTED,
                        children: f.intl.string(f.t.fYfGgI)
                    })
                ]
            })
        );
    };
