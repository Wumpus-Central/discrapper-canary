n.d(t, { Z: () => h });
var i = n(200651),
    r = n(192379),
    s = n(481060),
    l = n(100527),
    a = n(906732),
    o = n(626135),
    c = n(335131),
    d = n(196033),
    u = n(981631),
    m = n(474936),
    g = n(388032),
    p = n(811344);
let h = () => {
    let { analyticsLocations: e } = (0, a.ZP)(l.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        t = r.useRef(null),
        { asset: n, popoutAsset: h, title: f, body: b, version: _, revertTextColor: x } = (0, d.W)();
    return (
        r.useEffect(() => {
            o.default.track(u.rMx.PREMIUM_UPSELL_VIEWED, {
                type: m.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: e,
                version: _
            });
        }, [e, _]),
        (0, i.jsxs)('div', {
            ref: t,
            className: p.container,
            style: { backgroundImage: 'url('.concat(n, ')') },
            children: [
                (0, i.jsx)('div', {
                    className: p.artContainer,
                    'aria-hidden': !0,
                    role: 'presentation',
                    children: (0, i.jsx)('img', {
                        src: h,
                        className: p.art,
                        alt: ''
                    })
                }),
                (0, i.jsxs)('div', {
                    className: p.mainColumn,
                    children: [
                        (0, i.jsx)(s.X6q, {
                            variant: 'heading-lg/extrabold',
                            color: x ? 'redesign-button-overlay-text' : 'currentColor',
                            className: p.title,
                            children: f
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: x ? 'redesign-button-overlay-text' : 'currentColor',
                            children: b
                        })
                    ]
                }),
                (0, i.jsx)(s.zxk, {
                    onClick: () => {
                        (0, c.mK)({
                            analyticsLocations: e,
                            analyticsSource: l.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
                        });
                    },
                    className: p.ctaButton,
                    color: s.zxk.Colors.BRAND_INVERTED,
                    children: g.intl.string(g.t.fYfGgI)
                })
            ]
        })
    );
};
