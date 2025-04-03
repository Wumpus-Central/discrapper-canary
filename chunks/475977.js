n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(100527),
    l = n(906732),
    o = n(626135),
    c = n(335131),
    d = n(196033),
    u = n(981631),
    m = n(474936),
    g = n(388032),
    p = n(811344);
let h = () => {
    let { analyticsLocations: e } = (0, l.ZP)(a.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        t = i.useRef(null),
        { asset: n, popoutAsset: h, title: f, body: b, version: N, revertTextColor: x } = (0, d.W)();
    return (
        i.useEffect(() => {
            o.default.track(u.rMx.PREMIUM_UPSELL_VIEWED, {
                type: m.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: e,
                version: N
            });
        }, [e, N]),
        (0, r.jsxs)('div', {
            ref: t,
            className: p.container,
            style: { backgroundImage: 'url('.concat(n, ')') },
            children: [
                (0, r.jsx)('div', {
                    className: p.artContainer,
                    'aria-hidden': !0,
                    role: 'presentation',
                    children: (0, r.jsx)('img', {
                        src: h,
                        className: p.art,
                        alt: ''
                    })
                }),
                (0, r.jsxs)('div', {
                    className: p.mainColumn,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'heading-lg/extrabold',
                            color: x ? 'redesign-button-overlay-text' : 'currentColor',
                            className: p.title,
                            children: f
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: x ? 'redesign-button-overlay-text' : 'currentColor',
                            children: b
                        })
                    ]
                }),
                (0, r.jsx)(s.zxk, {
                    onClick: () => {
                        (0, c.mK)({
                            analyticsLocations: e,
                            analyticsSource: a.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
                        });
                    },
                    className: p.ctaButton,
                    color: s.zxk.Colors.BRAND_INVERTED,
                    children: g.NW.string(g.t.fYfGgI)
                })
            ]
        })
    );
};
