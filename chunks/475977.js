n.d(t, { Z: () => f });
var i = n(255367),
    r = n(73800),
    s = n(755721),
    a = n(481060),
    l = n(100527),
    o = n(906732),
    c = n(626135),
    d = n(335131),
    u = n(196033),
    m = n(981631),
    p = n(474936),
    g = n(388032),
    h = n(811344);
let f = () => {
    let { analyticsLocations: e } = (0, o.ZP)(l.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        t = r.useRef(null),
        { asset: n, popoutAsset: f, title: b, body: x, version: _, revertTextColor: j } = (0, u.W)();
    return (
        r.useEffect(() => {
            c.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                type: p.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: e,
                version: _
            });
        }, [e, _]),
        (0, i.jsxs)('div', {
            ref: t,
            className: h.container,
            style: { backgroundImage: 'url('.concat(n, ')') },
            children: [
                (0, i.jsx)('div', {
                    className: h.artContainer,
                    'aria-hidden': !0,
                    role: 'presentation',
                    children: (0, i.jsx)('img', {
                        src: f,
                        className: h.art,
                        alt: ''
                    })
                }),
                (0, i.jsxs)('div', {
                    className: h.mainColumn,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            variant: 'heading-lg/extrabold',
                            color: j ? 'redesign-button-overlay-text' : 'currentColor',
                            className: h.title,
                            children: b
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: j ? 'redesign-button-overlay-text' : 'currentColor',
                            children: x
                        })
                    ]
                }),
                (0, i.jsx)(a.zxk, {
                    onClick: () => {
                        (0, d.mK)({
                            analyticsLocations: e,
                            analyticsSource: l.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
                        });
                    },
                    variant: 'overlay-primary',
                    color: s.Tt.BRAND_INVERTED,
                    text: g.intl.string(g.t.fYfGgI)
                })
            ]
        })
    );
};
