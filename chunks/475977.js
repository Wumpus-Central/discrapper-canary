var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(115434),
    o = n(264181),
    c = n(399606),
    d = n(481060),
    u = n(100527),
    m = n(906732),
    g = n(626135),
    h = n(335131),
    p = n(874703),
    x = n(410154),
    f = n(302800),
    _ = n(981631),
    E = n(474936),
    C = n(388032),
    T = n(960816),
    S = n(786792),
    b = n(161594);
let I = (e) => {
    var t, n, r, s, l;
    let { displayOptions: o, marketingVariant: c } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: T.artContainer,
                'aria-hidden': !0,
                role: 'presentation',
                children: (0, i.jsx)('img', {
                    src: null !== (r = null == o ? void 0 : o.artSrc) && void 0 !== r ? r : b,
                    className: a()(T.art, { [T.tideArt]: null != c && c === x.C5.TIDE }),
                    alt: ''
                })
            }),
            (0, i.jsxs)('div', {
                className: T.mainColumn,
                children: [
                    (0, i.jsx)(d.Heading, {
                        variant: 'heading-lg/extrabold',
                        color: (null == o ? void 0 : o.revertTextColor) ? 'redesign-button-overlay-text' : 'currentColor',
                        className: T.title,
                        children: null !== (s = null == o ? void 0 : null === (t = o.title) || void 0 === t ? void 0 : t.call(o)) && void 0 !== s ? s : C.intl.string(C.t['4Emkur'])
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        color: (null == o ? void 0 : o.revertTextColor) ? 'redesign-button-overlay-text' : 'currentColor',
                        children: null !== (l = null == o ? void 0 : null === (n = o.description) || void 0 === n ? void 0 : n.call(o)) && void 0 !== l ? l : C.intl.string(C.t.gn7SZW)
                    })
                ]
            })
        ]
    });
};
t.Z = () => {
    var e;
    let t;
    let { analyticsLocations: n } = (0, m.ZP)(u.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        s = r.useRef(null),
        b = (0, x.ZP)('CollectiblesUpsellBanner'),
        N = (0, c.e7)([p.Z], () => p.Z.getMarketingBySurface(l.K.EDIT_PROFILE_SETTINGS));
    return (
        (t =
            (null == N ? void 0 : N.type) === o.Z.BANNER
                ? {
                      artSrc: N.popoutAsset,
                      backgroundSrc: N.asset,
                      title: () => N.title,
                      description: () => N.body,
                      revertTextColor: N.revertTextColor
                  }
                : f.GX[b]),
        r.useEffect(() => {
            g.default.track(_.rMx.PREMIUM_UPSELL_VIEWED, {
                type: E.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: n,
                version: null == N ? void 0 : N.version
            });
        }, [n, null == N ? void 0 : N.version]),
        (0, i.jsxs)('div', {
            ref: s,
            className: a()(T.container, { [T.robertContainer]: b === x.C5.ROBERT }),
            style: { backgroundImage: 'url('.concat(null !== (e = null == t ? void 0 : t.backgroundSrc) && void 0 !== e ? e : S, ')') },
            children: [
                (0, i.jsx)(I, {
                    displayOptions: t,
                    marketingVariant: b
                }),
                (0, i.jsx)(d.Button, {
                    onClick: () => {
                        (0, h.mK)({
                            analyticsLocations: n,
                            analyticsSource: u.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
                        });
                    },
                    className: T.ctaButton,
                    color: d.Button.Colors.BRAND_INVERTED,
                    children: C.intl.string(C.t.fYfGgI)
                })
            ]
        })
    );
};
