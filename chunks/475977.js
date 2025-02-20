n.d(t, { Z: () => v }), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(115434),
    o = n(264181),
    c = n(399606),
    d = n(481060),
    u = n(100527),
    m = n(906732),
    g = n(626135),
    p = n(335131),
    h = n(874703),
    f = n(410154),
    b = n(302800),
    N = n(981631),
    x = n(474936),
    _ = n(388032),
    E = n(661837),
    j = n(786792),
    C = n(161594);
let O = (e) => {
        var t, n, i, s, l;
        let { displayOptions: o, marketingVariant: c } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: E.artContainer,
                    'aria-hidden': !0,
                    role: 'presentation',
                    children: (0, r.jsx)('img', {
                        src: null !== (i = null == o ? void 0 : o.artSrc) && void 0 !== i ? i : C,
                        className: a()(E.art, { [E.tideArt]: null != c && c === f.C5.TIDE }),
                        alt: ''
                    })
                }),
                (0, r.jsxs)('div', {
                    className: E.mainColumn,
                    children: [
                        (0, r.jsx)(d.X6q, {
                            variant: 'heading-lg/extrabold',
                            color: (null == o ? void 0 : o.revertTextColor) ? 'redesign-button-overlay-text' : 'currentColor',
                            className: E.title,
                            children: null !== (s = null == o ? void 0 : null === (t = o.title) || void 0 === t ? void 0 : t.call(o)) && void 0 !== s ? s : _.NW.string(_.t['4Emkur'])
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: (null == o ? void 0 : o.revertTextColor) ? 'redesign-button-overlay-text' : 'currentColor',
                            children: null !== (l = null == o ? void 0 : null === (n = o.description) || void 0 === n ? void 0 : n.call(o)) && void 0 !== l ? l : _.NW.string(_.t.gn7SZW)
                        })
                    ]
                })
            ]
        });
    },
    v = () => {
        var e;
        let t;
        let { analyticsLocations: n } = (0, m.ZP)(u.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
            s = i.useRef(null),
            C = (0, f.ZP)('CollectiblesUpsellBanner'),
            v = (0, c.e7)([h.Z], () => h.Z.getMarketingBySurface(l.K.EDIT_PROFILE_SETTINGS));
        return (
            (t =
                (null == v ? void 0 : v.type) === o.Z.BANNER
                    ? {
                          artSrc: v.popoutAsset,
                          backgroundSrc: v.asset,
                          title: () => v.title,
                          description: () => v.body,
                          revertTextColor: v.revertTextColor
                      }
                    : b.GX[C]),
            i.useEffect(() => {
                g.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: x.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                    location_stack: n,
                    version: null == v ? void 0 : v.version
                });
            }, [n, null == v ? void 0 : v.version]),
            (0, r.jsxs)('div', {
                ref: s,
                className: a()(E.container, { [E.robertContainer]: C === f.C5.ROBERT }),
                style: { backgroundImage: 'url('.concat(null !== (e = null == t ? void 0 : t.backgroundSrc) && void 0 !== e ? e : j, ')') },
                children: [
                    (0, r.jsx)(O, {
                        displayOptions: t,
                        marketingVariant: C
                    }),
                    (0, r.jsx)(d.zxk, {
                        onClick: () => {
                            (0, p.mK)({
                                analyticsLocations: n,
                                analyticsSource: u.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
                            });
                        },
                        className: E.ctaButton,
                        color: d.zxk.Colors.BRAND_INVERTED,
                        children: _.NW.string(_.t.fYfGgI)
                    })
                ]
            })
        );
    };
