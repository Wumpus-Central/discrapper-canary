n.d(t, { Z: () => b });
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(115434),
    o = n(264181),
    c = n(399606),
    d = n(481060),
    u = n(100527),
    m = n(906732),
    g = n(626135),
    h = n(335131),
    x = n(874703),
    _ = n(410154),
    p = n(302800),
    E = n(981631),
    C = n(474936),
    f = n(388032),
    T = n(782376),
    N = n(786792),
    I = n(161594);
let S = (e) => {
        var t, n, s, r, a;
        let { displayOptions: o, marketingVariant: c } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: T.artContainer,
                    'aria-hidden': !0,
                    role: 'presentation',
                    children: (0, i.jsx)('img', {
                        src: null !== (s = null == o ? void 0 : o.artSrc) && void 0 !== s ? s : I,
                        className: l()(T.art, { [T.tideArt]: null != c && c === _.C5.TIDE }),
                        alt: ''
                    })
                }),
                (0, i.jsxs)('div', {
                    className: T.mainColumn,
                    children: [
                        (0, i.jsx)(d.X6q, {
                            variant: 'heading-lg/extrabold',
                            color: (null == o ? void 0 : o.revertTextColor) ? 'redesign-button-overlay-text' : 'currentColor',
                            className: T.title,
                            children: null !== (r = null == o ? void 0 : null === (t = o.title) || void 0 === t ? void 0 : t.call(o)) && void 0 !== r ? r : f.intl.string(f.t['4Emkur'])
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
    b = () => {
        var e;
        let t;
        let { analyticsLocations: n } = (0, m.ZP)(u.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
            r = s.useRef(null),
            I = (0, _.ZP)('CollectiblesUpsellBanner'),
            b = (0, c.e7)([x.Z], () => x.Z.getMarketingBySurface(a.K.EDIT_PROFILE_SETTINGS));
        return (
            (t =
                (null == b ? void 0 : b.type) === o.Z.BANNER
                    ? {
                          artSrc: b.popoutAsset,
                          backgroundSrc: b.asset,
                          title: () => b.title,
                          description: () => b.body,
                          revertTextColor: b.revertTextColor
                      }
                    : p.GX[I]),
            s.useEffect(() => {
                g.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: C.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                    location_stack: n,
                    version: null == b ? void 0 : b.version
                });
            }, [n, null == b ? void 0 : b.version]),
            (0, i.jsxs)('div', {
                ref: r,
                className: l()(T.container, { [T.robertContainer]: I === _.C5.ROBERT }),
                style: { backgroundImage: 'url('.concat(null !== (e = null == t ? void 0 : t.backgroundSrc) && void 0 !== e ? e : N, ')') },
                children: [
                    (0, i.jsx)(S, {
                        displayOptions: t,
                        marketingVariant: I
                    }),
                    (0, i.jsx)(d.zxk, {
                        onClick: () => {
                            (0, h.mK)({
                                analyticsLocations: n,
                                analyticsSource: u.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
                            });
                        },
                        className: T.ctaButton,
                        color: d.zxk.Colors.BRAND_INVERTED,
                        children: f.intl.string(f.t.fYfGgI)
                    })
                ]
            })
        );
    };
